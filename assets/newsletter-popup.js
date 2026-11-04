(() => {
  const DELAY = 20000;
  const COOLDOWN = 3 * 86400000;
  const KEY = 'bioself:newsletter-invitation';
  const SESSION_KEY = 'bioself:newsletter-session';
  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex="0"]';
  let memory = {};
  const storage = (area, method, key, value) => {
    try { return window[area][method](key, value); } catch (_) { return null; }
  };
  try { memory = JSON.parse(storage('sessionStorage', 'getItem', SESSION_KEY) || '{}'); } catch (_) { memory = {}; }
  if (!memory.started) memory.started = performance.timeOrigin || Date.now();

  class NewsletterPopup {
    constructor(root) {
      this.root = root;
      this.dialog = root.querySelector('[role="dialog"]');
      this.form = root.querySelector('form');
      this.email = this.form.querySelector('[type="email"]');
      this.terms = this.form.querySelector('[type="checkbox"]');
      this.submit = root.querySelector('[data-newsletter-submit]');
      this.title = root.querySelector('h2');
      this.copy = JSON.parse(root.querySelector('[data-newsletter-copy]').textContent);
      this.abort = new AbortController();
      const options = { signal: this.abort.signal };
      this.preview = Boolean(window.Shopify?.designMode);
      this.inFlight = false;
      this.pending = false;
      this.nextRequest = 0;
      this.state = 'initial';
      root.addEventListener('click', (event) => {
        if (event.target.closest('[data-newsletter-popup-close]')) this.close(true);
        if (event.target.closest('[data-newsletter-edit]')) this.edit();
        if (event.target.closest('[data-newsletter-result-action]')) {
          if (root.dataset.previewState === 'invalid') this.edit();
          else this.close();
        }
      }, options);
      this.form.addEventListener('submit', (event) => { event.preventDefault(); this.send(); }, options);
      this.email.addEventListener('input', () => this.error('email', ''), options);
      this.terms.addEventListener('change', () => this.error('terms', ''), options);
      document.addEventListener('keydown', (event) => this.keydown(event), options);
      document.addEventListener('visitorConsentCollected', () => {
        if (!this.preferencesAllowed()) storage('localStorage', 'removeItem', KEY);
        else this.persist();
        if (!this.consentDecidedAt) this.consentDecidedAt = Date.now();
        this.schedule();
      }, options);
      document.addEventListener('shopify:section:select', (event) => {
        if (this.preview && event.target.contains(root)) this.previewState();
      }, options);
      document.addEventListener('shopify:section:unload', (event) => {
        if (event.target.contains(root)) this.destroy();
      }, options);
      window.visualViewport?.addEventListener('resize', () => this.viewport(), options);
      window.visualViewport?.addEventListener('scroll', () => this.viewport(), options);
      window.addEventListener('pageshow', () => this.schedule(), options);
      window.addEventListener('storage', (event) => {
        if (event.key === KEY && this.preferencesAllowed() && this.suppressed()) this.close();
      }, options);
      if (this.preview) return;
      this.loadPrivacy();
    }

    get privacy() { return window.Shopify?.customerPrivacy; }
    get isOpen() { return this.dialog.getAttribute('aria-hidden') === 'false'; }
    preferencesAllowed() { return this.privacy?.preferencesProcessingAllowed?.() === true; }

    loadPrivacy() {
      if (this.privacy) { this.schedule(); return; }
      if (window.Shopify?.loadFeatures && !this.loadingPrivacy) {
        this.loadingPrivacy = true;
        window.Shopify.loadFeatures([{ name: 'consent-tracking-api', version: '0.2' }], () => {
          this.loadingPrivacy = false;
          this.timer = window.setTimeout(() => this.loadPrivacy(), 1000);
        });
      } else this.timer = window.setTimeout(() => this.loadPrivacy(), 1000);
    }

    persist() {
      storage('sessionStorage', 'setItem', SESSION_KEY, JSON.stringify(memory));
      if (this.preferencesAllowed() && (memory.dismissedAt || memory.pending)) {
        storage('localStorage', 'setItem', KEY, JSON.stringify({ dismissedAt: memory.dismissedAt, pending: memory.pending }));
      }
    }

    suppressed() {
      if (document.body.dataset.customerMarketing === 'true' || memory.closed || memory.pending) return true;
      if (!this.preferencesAllowed()) return false;
      try {
        const stored = JSON.parse(storage('localStorage', 'getItem', KEY) || '{}');
        return stored.pending === true || Date.now() - Number(stored.dismissedAt || 0) < COOLDOWN
          || storage('localStorage', 'getItem', 'bioself:newsletter-subscribed') === 'true'
          || storage('localStorage', 'getItem', 'newsletterSubmitted') === 'true';
      } catch (_) { return false; }
    }

    cookieBannerVisible() {
      return [...document.querySelectorAll('#shopify-pc__banner, [data-cookie-banner]')].some((node) => node.getClientRects().length && !node.hidden);
    }

    blocked() {
      return this.cookieBannerVisible() || document.hidden
        || document.body.matches('.bioself-cart-drawer-open, .bioself-mobile-panel-open, .bioself-modal-open')
        || [...document.querySelectorAll('#modal_overlay, dialog[open], [role="dialog"][aria-modal="true"]')].some((node) => !this.root.contains(node) && node.getClientRects().length && node.getAttribute('aria-hidden') !== 'true')
        || Boolean(document.activeElement?.matches('input, textarea, select, [contenteditable="true"]'));
    }

    schedule() {
      window.clearTimeout(this.timer);
      if (this.preview || this.isOpen || this.root.dataset.enabled !== 'true' || !this.root.dataset.companyId || !this.root.dataset.listId || this.suppressed()) return;
      if (!this.privacy) { this.loadPrivacy(); return; }
      const consent = this.privacy.currentVisitorConsent?.();
      const hasDecision = consent && ['marketing', 'analytics', 'preferences'].some((key) => consent[key] === 'yes' || consent[key] === 'no');
      if (!hasDecision || this.cookieBannerVisible()) {
        this.timer = window.setTimeout(() => this.schedule(), 500);
        return;
      }
      const start = this.consentDecidedAt || memory.started;
      const remaining = Math.max(0, start + DELAY - Date.now());
      if (remaining || this.blocked()) {
        this.timer = window.setTimeout(() => this.schedule(), remaining || 500);
        return;
      }
      this.open();
    }

    open() {
      if (this.isOpen) return;
      this.lastActive = document.activeElement;
      this.dialog.hidden = false;
      this.root.querySelector('.bioself-newsletter-popup__scrim').hidden = false;
      this.dialog.setAttribute('aria-hidden', 'false');
      document.body.classList.add('bioself-newsletter-popup-open');
      this.viewport();
      this.dialog.focus({ preventScroll: true });
      window.BioselfPopupMotion?.open(this.dialog, this.root.querySelector('.bioself-newsletter-popup__scrim'));
    }

    close(remember = false) {
      if (remember && !this.preview) {
        memory.closed = true;
        if (!this.pending) memory.dismissedAt = Date.now();
        this.persist();
      }
      window.clearTimeout(this.timer);
      const finish = () => {
        this.dialog.hidden = true;
        this.dialog.setAttribute('aria-hidden', 'true');
        this.root.querySelector('.bioself-newsletter-popup__scrim').hidden = true;
        document.body.classList.remove('bioself-newsletter-popup-open');
        this.lastActive?.focus?.({ preventScroll: true });
      };
      if (this.isOpen && window.BioselfPopupMotion) window.BioselfPopupMotion.close(this.dialog, this.root.querySelector('.bioself-newsletter-popup__scrim'), finish);
      else finish();
    }

    viewport() {
      if (!this.isOpen) return;
      const viewport = window.visualViewport;
      this.dialog.style.setProperty('--newsletter-viewport-height', `${viewport?.height || window.innerHeight}px`);
      this.dialog.style.setProperty('--newsletter-viewport-top', `${viewport?.offsetTop || 0}px`);
      if (this.root.contains(document.activeElement) && document.activeElement.matches('input')) {
        document.activeElement.scrollIntoView({ block: 'nearest', behavior: 'instant' });
      }
    }

    keydown(event) {
      if (!this.isOpen) return;
      if (event.key === 'Escape') { event.preventDefault(); this.close(true); return; }
      if (event.key !== 'Tab') return;
      const nodes = [...this.dialog.querySelectorAll(FOCUSABLE)].filter((node) => node.getClientRects().length);
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (!first) return;
      if (event.shiftKey && (document.activeElement === first || document.activeElement === this.dialog || document.activeElement === this.title)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === this.dialog || document.activeElement === this.title)) {
        event.preventDefault(); first.focus();
      }
    }

    error(field, message) {
      const node = this.root.querySelector(`[data-newsletter-${field}-error]`);
      node.textContent = message;
      node.hidden = !message;
      this[field].setAttribute('aria-invalid', String(Boolean(message)));
    }

    async send() {
      if (this.inFlight) return;
      const email = this.email.value.trim();
      this.email.value = email;
      const emailError = !email ? this.copy.emailRequired : !this.email.validity.valid || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? this.copy.emailInvalid : '';
      this.error('email', emailError);
      this.error('terms', this.terms.checked ? '' : this.copy.termsRequired);
      if (emailError || !this.terms.checked) {
        this.root.querySelector('[data-newsletter-status]').textContent = [emailError, !this.terms.checked ? this.copy.termsRequired : ''].filter(Boolean).join(' ');
        (emailError ? this.email : this.terms).focus();
        return;
      }
      if (Date.now() < this.nextRequest && (this.rateLimited || email.toLowerCase() === this.lastSentEmail)) {
        const failure = this.root.querySelector('[data-newsletter-send-error]');
        failure.textContent = this.copy.cooldown;
        failure.hidden = false;
        return;
      }
      if (this.preview) { this.showPending(email); return; }
      this.inFlight = true;
      this.failed = false;
      this.busy(true);
      const failure = this.root.querySelector('[data-newsletter-send-error]');
      failure.textContent = this.copy.failed;
      failure.hidden = true;
      const controller = new AbortController();
      this.requestController = controller;
      const timeout = window.setTimeout(() => controller.abort(), 20000);
      try {
        if (this.root.dataset.enabled !== 'true' || !this.root.dataset.companyId || !this.root.dataset.listId) throw new Error('unconfigured');
        const response = await fetch(`https://a.klaviyo.com/client/subscriptions?company_id=${encodeURIComponent(this.root.dataset.companyId)}`, {
          method: 'POST', credentials: 'omit', referrerPolicy: 'no-referrer', signal: controller.signal,
          headers: { 'Content-Type': 'application/vnd.api+json', revision: '2026-10-15' },
          body: JSON.stringify({ data: {
            type: 'subscription', attributes: { custom_source: 'Bioself newsletter popup', profile: { data: {
              type: 'profile', attributes: { email, subscriptions: { email: { marketing: { consent: 'SUBSCRIBED' } } } },
            } } }, relationships: { list: { data: { type: 'list', id: this.root.dataset.listId } } },
          } }),
        });
        if (response.status !== 202) {
          if (response.status === 429) {
            this.rateLimited = true;
            this.nextRequest = Date.now() + Math.min(300, Math.max(60, Number(response.headers.get('Retry-After')) || 60)) * 1000;
          }
          throw new Error('not accepted');
        }
        memory.pending = true;
        this.lastSentEmail = email.toLowerCase();
        this.rateLimited = false;
        this.persist();
        this.nextRequest = Date.now() + 60000;
        this.showPending(email);
      } catch (_) {
        this.failed = true;
        failure.hidden = false;
        this.root.querySelector('[data-newsletter-status]').textContent = failure.textContent;
      } finally {
        window.clearTimeout(timeout);
        this.inFlight = false;
        this.busy(false);
      }
    }

    busy(value) {
      this.submit.disabled = value;
      this.submit.setAttribute('aria-busy', String(value));
      this.form.setAttribute('aria-busy', String(value));
      this.email.readOnly = value;
      this.terms.disabled = value;
      this.submit.textContent = value ? this.copy.sending : this.failed ? this.copy.retry : this.state === 'edit' ? this.copy.editSubmit : this.copy.submit;
      if (value) this.root.querySelector('[data-newsletter-status]').textContent = this.copy.sending;
    }

    showPending(email, shortcut = true) {
      this.pending = true;
      this.state = 'pending';
      this.dialog.dataset.state = 'pending';
      this.title.textContent = this.copy.pendingTitle;
      this.root.querySelector('[data-newsletter-status]').textContent = this.copy.pendingTitle;
      this.root.querySelector('[data-newsletter-form-panel]').hidden = true;
      this.root.querySelector('[data-newsletter-pending-panel]').hidden = false;
      this.root.querySelector('[data-newsletter-state-icon]').hidden = false;
      this.root.querySelector('[data-newsletter-address]').textContent = email;
      const domain = email.split('@')[1]?.toLowerCase();
      const providers = { 'gmail.com': 'https://mail.google.com/', 'googlemail.com': 'https://mail.google.com/', 'outlook.com': 'https://outlook.live.com/mail/', 'hotmail.com': 'https://outlook.live.com/mail/', 'hotmail.pt': 'https://outlook.live.com/mail/', 'live.com': 'https://outlook.live.com/mail/', 'msn.com': 'https://outlook.live.com/mail/', 'yahoo.com': 'https://mail.yahoo.com/', 'yahoo.pt': 'https://mail.yahoo.com/', 'icloud.com': 'https://www.icloud.com/mail/' };
      const link = this.root.querySelector('[data-newsletter-webmail]');
      link.hidden = !shortcut || !providers[domain];
      if (!link.hidden) link.href = providers[domain];
      else link.removeAttribute('href');
      this.title.focus({ preventScroll: true });
    }

    edit() {
      this.state = 'edit';
      this.failed = false;
      this.terms.checked = false;
      this.root.querySelector('[data-newsletter-status]').textContent = '';
      this.dialog.dataset.state = 'edit';
      this.title.textContent = this.copy.editTitle;
      this.root.querySelector('[data-newsletter-intro]').textContent = this.copy.editIntro;
      this.submit.textContent = this.copy.editSubmit;
      this.root.querySelector('[data-newsletter-form-panel]').hidden = false;
      this.root.querySelector('[data-newsletter-pending-panel]').hidden = true;
      this.root.querySelector('[data-newsletter-state-icon]').hidden = true;
      const result = this.root.querySelector('[data-newsletter-result-panel]');
      if (result) result.hidden = true;
      this.email.focus();
    }

    previewState() {
      this.open();
      const state = this.root.dataset.previewState || 'initial';
      if (state === 'focus') this.email.focus();
      if (['email_required', 'combined'].includes(state)) this.error('email', this.copy.emailRequired);
      if (state === 'email_invalid') { this.email.value = 'nome@'; this.error('email', this.copy.emailInvalid); }
      if (['terms_required', 'combined'].includes(state)) this.error('terms', this.copy.termsRequired);
      if (state === 'sending') this.busy(true);
      if (state === 'failed') {
        this.email.value = 'cliente@exemplo.pt';
        this.terms.checked = true;
        this.root.querySelector('[data-newsletter-send-error]').hidden = false;
        this.submit.textContent = this.copy.retry;
      }
      if (state.startsWith('pending')) this.showPending('o.teu.email@example.com', state !== 'pending_no_shortcut');
      if (state === 'pending') { const link = this.root.querySelector('[data-newsletter-webmail]'); link.hidden = false; link.href = 'https://mail.google.com/'; }
      if (state === 'edit') { this.email.value = 'o.teu.email@example.com'; this.edit(); }
      if (['confirmed', 'invalid', 'already'].includes(state)) {
        this.dialog.dataset.state = 'result';
        this.title.textContent = this.copy[`${state}Title`];
        this.root.querySelector('[data-newsletter-form-panel]').hidden = true;
        this.root.querySelector('[data-newsletter-state-icon]').hidden = false;
        this.root.querySelector('[data-newsletter-mail-icon]').hidden = state !== 'invalid';
        this.root.querySelector('[data-newsletter-check-icon]').hidden = state === 'invalid';
        this.root.querySelector('[data-newsletter-result-panel]').hidden = false;
        this.root.querySelector('[data-newsletter-result-body]').textContent = this.copy[`${state}Body`];
        this.root.querySelector('[data-newsletter-result-action]').textContent = state === 'invalid' ? this.copy.back : this.copy.continue;
      }
    }

    destroy() {
      window.BioselfPopupMotion?.cancel(this.dialog);
      this.dialog.setAttribute('aria-hidden', 'true');
      this.close();
      this.abort.abort();
      this.requestController?.abort();
    }
  }

  document.addEventListener('bioself:newsletter-pending', () => { memory.pending = true; });

  const mount = (scope = document) => {
    scope.querySelectorAll('[data-newsletter-popup]').forEach((root) => {
      if (root.dataset.newsletterPopupMounted) return;
      root.dataset.newsletterPopupMounted = 'true';
      const popup = new NewsletterPopup(root);
      if (window.Shopify?.designMode && scope !== document) popup.previewState();
    });
  };
  mount();
  document.addEventListener('shopify:section:load', (event) => mount(event.target));
})();

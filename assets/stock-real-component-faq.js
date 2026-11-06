/* Keep native details as the no-JavaScript fallback. Close only after the animation. */
if (!customElements.get('stock-real-faq')) {
  customElements.define('stock-real-faq', class extends HTMLElement {
    connectedCallback() {
      this.animations = new Map();
      this.items = [...this.querySelectorAll('.bioself-faq__question > details')];
      // Native exclusive groups close siblings immediately, bypassing their exit animation.
      this.items.forEach(item => item.removeAttribute('name'));
      this.querySelectorAll('.answer_custom_block').forEach(answer => {
        const lists = answer.querySelectorAll('ol');
        lists.forEach((list, index) => {
          if (index % 2) list.start = lists[index - 1].querySelectorAll('li').length + 1;
        });
      });
      this.handleClick = event => {
        const summary = event.target.closest('.bioself-faq__summary');
        if (!summary || !this.contains(summary) || event.target.closest('a')) return;
        event.preventDefault();
        const item = summary.parentElement;
        const opening = !(this.animations.get(item)?.opening ?? item.open);
        if (opening) this.items.forEach(other => {
          if (other !== item && (this.animations.get(other)?.opening ?? other.open)) this.setOpen(other, false);
        });
        this.setOpen(item, opening);
      };
      this.addEventListener('click', this.handleClick);
    }

    setOpen(item, opening) {
      const content = item.querySelector('.bioself-faq__answer-wrap');
      const height = item.open ? content.getBoundingClientRect().height : 0;
      const opacity = getComputedStyle(content).opacity;
      this.animations.get(item)?.animation.cancel();
      this.animations.delete(item);
      item.dataset.expanded = String(opening);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !content.animate) {
        item.open = opening;
        return;
      }
      item.open = true;
      const animation = content.animate([
        { height: height + 'px', opacity: height ? opacity : 0 },
        { height: (opening ? content.scrollHeight : 0) + 'px', opacity: opening ? 1 : 0 }
      ], { duration: 280, easing: 'ease', fill: 'both' });
      const state = { animation, opening };
      this.animations.set(item, state);
      animation.onfinish = () => {
        if (this.animations.get(item) !== state) return;
        item.open = opening;
        this.animations.delete(item);
        animation.cancel();
      };
    }

    disconnectedCallback() {
      this.animations.forEach(({ animation, opening }, item) => {
        animation.cancel();
        item.open = opening;
      });
      this.animations.clear();
      this.removeEventListener('click', this.handleClick);
    }
  });
}

(() => {
  const running = new WeakMap();
  const dialogs = new WeakSet();
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animate(panel, backdrop, closing, finish) {
    if (!panel) { finish?.(); return; }
    const previous = running.get(panel);
    if (previous?.closing && closing) return;
    // Read the visible frame before cancelling an unfinished entrance.
    let visiblePanel, visibleBackdrop;
    if (previous && closing) {
      const style = window.getComputedStyle(panel);
      visiblePanel = { opacity: style.opacity, transform: style.transform };
      if (backdrop?.animate) visibleBackdrop = { opacity: window.getComputedStyle(backdrop).opacity };
    }
    previous?.animations.forEach(animation => animation.cancel());
    const state = { animations: [], closing };
    running.set(panel, state);
    panel.toggleAttribute('data-popup-closing', closing);
    panel.toggleAttribute('data-popup-opening', !closing);
    const complete = () => {
      if (running.get(panel) !== state) return;
      finish?.();
      state.animations.forEach(animation => animation.cancel());
      panel.removeAttribute('data-popup-closing');
      panel.removeAttribute('data-popup-opening');
      running.delete(panel);
    };
    if (!panel.animate || reduced()) { complete(); return; }
    const options = { duration: closing ? 300 : 400, easing: closing ? 'ease-in-out' : 'cubic-bezier(.2, .65, .3, 1)', fill: 'both' };
    // Preserve each panel's centring and use one transform animation across divs and native dialogs.
    const baseTransform = window.getComputedStyle(panel).transform;
    const transform = baseTransform === 'none' ? '' : baseTransform;
    const frames = [
      { opacity: 0, transform: `${transform} translateY(32px) scale(.95)`.trim() },
      { opacity: 1, transform: transform || 'none' },
    ];
    state.animations.push(panel.animate(closing ? [visiblePanel || frames[1], frames[0]] : frames, options));
    if (backdrop?.animate) state.animations.push(backdrop.animate(closing ? [visibleBackdrop || { opacity: 1 }, { opacity: 0 }] : [{ opacity: 0 }, { opacity: 1 }], options));
    Promise.all(state.animations.map(animation => animation.finished.catch(() => {}))).then(complete);
  }

  const motion = {
    open(panel, backdrop) { animate(panel, backdrop, false); },
    close(panel, backdrop, finish) { animate(panel, backdrop, true, finish); },
    cancel(panel) {
      const state = running.get(panel);
      running.delete(panel);
      state?.animations.forEach(animation => animation.cancel());
      panel?.removeAttribute('data-popup-closing');
      panel?.removeAttribute('data-popup-opening');
    },
    openDialog(dialog) {
      if (!dialog) return;
      if (dialog.open && !dialog.hasAttribute('data-popup-closing')) return;
      if (!dialogs.has(dialog)) {
        dialogs.add(dialog);
        dialog.addEventListener('cancel', event => { event.preventDefault(); motion.closeDialog(dialog); });
      }
      if (!dialog.open) dialog.showModal();
      motion.open(dialog);
    },
    closeDialog(dialog) {
      if (!dialog?.open) return;
      motion.close(dialog, null, () => dialog.close());
    },
  };
  window.BioselfPopupMotion = motion;
})();

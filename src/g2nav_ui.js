/* g2nav_ui.js: the "On this page" buttons at the top of long Guides objective sections
   (course-level, Louis 2026-11-20: the Lam pages felt overwhelming). A button with
   data-g2jump scrolls to the heading with that id, opening any closed <details> around it.
   It reads no stored data and writes none. */
(function g2nav(){
  if (typeof document === 'undefined') return;
  document.addEventListener('click', ev => {
    const b = ev.target && ev.target.closest ? ev.target.closest('[data-g2jump]') : null;
    if (!b) return;
    const t = document.getElementById(b.getAttribute('data-g2jump'));
    if (!t) return;
    const f = t.parentElement && t.parentElement.querySelector(':scope > .g2-fold');
    if (f) f.open = true;
    for (let d = t.closest('details'); d; d = d.parentElement && d.parentElement.closest('details')) d.open = true;
    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    t.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
  });
})();

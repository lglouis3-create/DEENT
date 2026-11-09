/* ==========================================================================
   ENLARGE PLACEHOLDER: exact height (course-level, temporary)
   OBSOLETE since 2026-11-09: no longer in course.js `files`. Kit #90 (in the
   core from pin 6c877b6) gives figBig's placeholder the exact height itself.
   Kept for the record only.
   ==========================================================================
   When a step-through is enlarged, the core's figBig (views.js) puts a
   placeholder where the figure stood, so the page keeps its length and the
   reader stays where they were. The core sizes it with fig.offsetHeight, a
   whole number of pixels; a figure is often a fraction taller (487.22 px for
   acne-cascade at 390 px wide), so the page got that fraction shorter and, at
   the end of the page, the browser moved the reader up by a pixel
   (ux_test.js "Enlarge, then Escape or Close, leaves the page where it was",
   2026-11-09). This wrapper gives the placeholder the figure's exact rendered
   height (getBoundingClientRect, fractional) and puts the page back at the
   place the core saved. Nothing else of figBig changes.

   TEMPORARY: remove this file (and its entry in course.js files) once the kit
   core's figBig measures the placeholder the same way; the fix is asked of the
   kit central session.
   ========================================================================== */
(function(){
  if (typeof figBig !== 'function' || typeof document === 'undefined') return;
  const coreFigBig = figBig;
  figBig = function(fig, on, keepFocus){
    const opening = !!on && fig && fig.classList && !fig.classList.contains('big');
    const h = opening ? fig.getBoundingClientRect().height : null;
    const r = coreFigBig.apply(this, arguments);
    if (opening && fig.classList.contains('big')) {
      const ph = fig.previousElementSibling;
      if (ph && ph.classList.contains('figph')) {
        ph.style.height = h + 'px';
        const y = +fig.dataset.y;
        if (!isNaN(y)) window.scrollTo(0, y);
      }
    }
    return r;
  };
})();

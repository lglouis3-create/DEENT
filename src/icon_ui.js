/* ==========================================================================
   Browser-tab icon (course-level, 2026-11-09).
   Until 2026-11-09 release step 1b (brand.py) wrote
   <link rel="icon" type="image/png" sizes="192x192" href="./icon-192.png">
   into the live page's <head>. The core's course.js `share` (kit #88), which
   replaced brand.py, writes the link-preview tags and the manifest short_name
   but no icon link, so without this the tab would show no icon. Only on the
   live page (it links the manifest; the /preview/ page links none and has no
   icon files beside it); nothing is stored.
   ========================================================================== */
(function(){
  if (typeof document === 'undefined' || !document.head) return;
  if (!document.querySelector('link[rel=manifest]') || document.querySelector('link[rel~="icon"]')) return;
  const l = document.createElement('link');
  l.setAttribute('rel', 'icon'); l.setAttribute('type', 'image/png'); l.setAttribute('sizes', '192x192'); l.setAttribute('href', './icon-192.png');
  document.head.appendChild(l);
})();

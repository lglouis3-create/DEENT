/* svgid_ui.js: one arrowhead definition per drawn figure (2026-11-19).
   Many figures define the same marker id ("arw") and point to it with url(#arw). The browser resolves that to the
   first element with the id in the whole page, and Chromium draws no arrowhead when that element sits in a closed
   folder or a hidden tab (the Exam folders of Diagrams, Guides and Reference). Every <svg> that holds a <marker id>
   is given its own ids when it enters the page, and its own references (marker-start/-mid/-end attributes and the
   .f2-uv rays of figs2.js, whose stylesheet rule names #arw) are pointed at them. Storage: none. Does nothing
   without a page. */
const SVGID_UI = (() => {
  if (typeof document === 'undefined' || typeof MutationObserver === 'undefined' || !document.body) return null;
  let n = 0;
  const ATTRS = ['marker-start', 'marker-mid', 'marker-end'];
  function fix(svg){
    if (!svg || svg.dataset.svgid) return;
    const ms = svg.querySelectorAll('marker[id]'); if (!ms.length) return;
    const map = {};
    ms.forEach(m => { const nid = m.id + '-u' + (++n); map[m.id] = nid; m.id = nid; });
    svg.dataset.svgid = '1';
    svg.querySelectorAll('*').forEach(el => {
      ATTRS.forEach(a => { const v = el.getAttribute(a); const m = v && v.match(/url\(#([^)]+)\)/); if (m && map[m[1]]) el.setAttribute(a, `url(#${map[m[1]]})`); });
      if (el.classList && el.classList.contains('f2-uv') && map.arw) el.style.markerEnd = `url(#${map.arw})`;
    });
  }
  const scan = root => { if (!root || !root.querySelectorAll) return; if (root.tagName === 'svg') fix(root); root.querySelectorAll('svg').forEach(fix); };
  try {
    scan(document.body);
    new MutationObserver(recs => recs.forEach(r => r.addedNodes.forEach(scan))).observe(document.body, {childList: true, subtree: true});
  } catch (e) { /* the figures stay as drawn */ }
  return {fix, scan};
})();

/* guide_drill_ui.js: the "Practice these" buttons of the Guides sections (course-level, 2026-11-15).
   A button with data-qids (question ids, space separated) and data-qlabel (for example "DPAW slide 20")
   starts a drill of those questions, labelled "Dr. Sikazwe: <qlabel>" (or the name in data-qwho), and the Back button returns to
   the Guides at the same place. Unknown ids are skipped; with none left, nothing happens. Nothing
   happens while a practice exam is running. Also gives the star after a block heading
   (".g2-star", written in the section markup) the role "img" so its label "Likely on the exam" is read.
   Reads QUESTIONS, RET, drillList, backBtn, Q and EX; stores nothing. */
(function guideDrillUi(){
  if (typeof document === 'undefined' || !document.addEventListener) return;
  const examRunning = () => {
    try { if (typeof Q !== 'undefined' && Q && Q.examMode) return true; } catch (e) {}
    try { if (typeof EX !== 'undefined' && EX && EX.running && !EX.done) return true; } catch (e) {}
    return false;
  };
  const pool = ids => {
    if (typeof QUESTIONS === 'undefined' || !QUESTIONS) return [];
    const by = new Map(QUESTIONS.map(q => [q.id, q]));
    const seen = new Set(), out = [];
    ids.forEach(id => { const q = by.get(id); if (q && !seen.has(id)) { seen.add(id); out.push(q); } });
    return out;
  };
  const start = btn => {
    if (examRunning()) return;
    const qs = pool((btn.getAttribute('data-qids') || '').split(/\s+/).filter(Boolean));
    if (!qs.length || typeof drillList !== 'function' || typeof RET === 'undefined' || typeof backBtn !== 'function') return;
    const lab = btn.getAttribute('data-qlabel') || '';
    const r = {view: 'guide', y: window.scrollY};
    // the exam folders as the reader left them (examfold_ui.js hands them back on Back)
    try {
      const open = {}; let k = 0;
      document.querySelectorAll('#v-guide details.rfold[data-exam]').forEach(f => { open[f.dataset.exam] = f.open; k++; });
      if (k) r.rfold = open;
    } catch (e) {}
    RET.push(r);
    drillList(qs, (btn.getAttribute('data-qwho') || 'Dr. Sikazwe') + ': ' + lab);
    backBtn();
  };
  document.addEventListener('click', e => {
    const t = e.target && e.target.closest ? e.target.closest('[data-qids]') : null;
    if (t) start(t);
  });
  const mark = () => {
    try { document.querySelectorAll('.g2-star:not([role])').forEach(s => { s.setAttribute('role', 'img'); if (!s.getAttribute('aria-label')) s.setAttribute('aria-label', 'Likely on the exam'); }); } catch (e) {}
  };
  window.GUIDE_DRILL_UI = {start, pool, mark};
  mark();
  if (typeof MutationObserver !== 'undefined' && document.body) new MutationObserver(mark).observe(document.body, {childList: true, subtree: true});
})();

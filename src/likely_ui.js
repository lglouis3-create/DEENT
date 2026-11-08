/* ==========================================================================
   "LIKELY ON THE EXAM" STARS, PHAR 4346 DEENT (Exam 1): presentation
   --------------------------------------------------------------------------
   Course-level and isolated, in the pattern of druglist_ui.js: a course data
   file (course.js `files`) that the build puts into the page before views.js.
   The kit core (25c643d) is not changed. At load it wraps two engine
   functions, the way druglist_ui.js wraps show():
     - renderQuiz(): after the engine draws a question card in the topic
       drills, a starred question gets a small "★ Likely on the exam" badge in
       the card header, before and after answering. No reason text is shown on
       the card (Louis, 2026-11-08): each star's reason and source stay in
       likely_data.js as the audit record only. Exam papers are left as they
       are (Q.examMode).
     - renderTopics(): a card under the straight passes, "Starred questions",
       opens exactly the starred ids (all, Dr. Smith's or Dr. Sikazwe's) with
       the engine's own drillList().
   It says plainly that the stars are Claude's prediction from the professors'
   stated emphasis, not an official list.
   It runs only in a real browser page; in the node checks' stub DOM it does
   nothing and returns null. Storage: none.
   ========================================================================== */
const LIKELY_UI = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' &&
             typeof document.getElementById === 'function' && document.getElementById('nav') &&
             typeof document.getElementById('nav').insertBefore === 'function' &&
             typeof renderQuiz === 'function' && typeof renderTopics === 'function';
  if (!ok) return null;
  const L = LIKELY, BY = {};
  L.items.forEach(x => { BY[x.id] = x; });
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const NOTE = "Claude's prediction from the professors' stated emphasis, not an official list.";

  const css = `
.lkbadge{display:inline-block;font-size:12px;font-weight:600;line-height:1.3;color:var(--accent);border:1px solid var(--accent);border-radius:999px;padding:1px 8px;white-space:nowrap;background:var(--accent-bg)}
`;
  const addCss = () => {
    if (document.getElementById('lkcss')) return;
    const s = document.createElement('style'); s.id = 'lkcss'; s.textContent = css; document.head.appendChild(s);
  };

  /* the starred questions that exist in this build, in bank order */
  const pool = by => QUESTIONS.filter(q => BY[q.id] && (!by || (L.sources[BY[q.id].source] || {}).by === by));

  /* ---------- the badge on the question card (no reason text: see the header) ---------- */
  function decorateQuiz(){
    if (typeof Q === 'undefined' || !Q || !Q.current || Q.examMode) return;
    if (!BY[Q.current.id]) return;
    const card = document.querySelector('#v-quiz .qcard'), head = card && card.querySelector('.qhead');
    if (!head || head.querySelector('.lkbadge')) return;
    const b = document.createElement('span');
    b.className = 'lkbadge';
    b.setAttribute('title', NOTE);
    b.textContent = '★ Likely on the exam';
    const sp = head.querySelector('.spacer');
    if (sp) head.insertBefore(b, sp); else head.appendChild(b);
  }

  /* ---------- the card on Topics ---------- */
  function decorateTopics(){
    const v = document.getElementById('v-topics'); if (!v || v.querySelector('.lkcard')) return;
    const all = pool(), sm = pool('smith'), sk = pool('sikazwe');
    if (!all.length) return;
    const d = document.createElement('div');
    d.className = 'topic lkcard';
    d.innerHTML = `<div class="subs">
      <div class="subrow"><span class="sname"><b>★ Starred: likely on the exam (${all.length})</b>
        <small>${esc(NOTE)}</small></span>
        <button type="button" data-lk="all">Start</button></div>
      <div class="subrow"><span class="sname">Dr. Smith's starred questions<small>${sm.length} questions</small></span>
        <button type="button" class="ghost" data-lk="smith">Start</button></div>
      <div class="subrow"><span class="sname">Dr. Sikazwe's starred questions<small>${sk.length} questions, on his assigned pages</small></span>
        <button type="button" class="ghost" data-lk="sikazwe">Start</button></div>
    </div>`;
    const sweep = v.querySelector('.sweepcard');
    if (sweep) sweep.insertAdjacentElement('afterend', d); else v.appendChild(d);
    d.querySelectorAll('button[data-lk]').forEach(b => b.onclick = () => {
      const k = b.dataset.lk, list = k === 'all' ? all : pool(k);
      drillList(list, k === 'all' ? '★ Likely on the exam' : k === 'smith' ? "★ Likely: Dr. Smith" : '★ Likely: Dr. Sikazwe');
    });
  }

  try {
    addCss();
    const oq = renderQuiz, ot = renderTopics;
    renderQuiz = function(){
      const r = oq.apply(this, arguments);
      try { decorateQuiz(); } catch (e) { console.error('The "likely" star could not be drawn; the question is unaffected.', e); }
      return r;
    };
    renderTopics = function(){
      const r = ot.apply(this, arguments);
      try { decorateTopics(); } catch (e) { console.error('The starred-questions card could not be drawn; Topics is unaffected.', e); }
      return r;
    };
  } catch (e) { console.error('The "likely on the exam" stars could not be added; the rest of the page is unaffected.', e); }
  return {pool, byId: BY};
})();

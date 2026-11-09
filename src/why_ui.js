/* ==========================================================================
   "HEAR THE WHY", PHAR 4346 DEENT: presentation
   --------------------------------------------------------------------------
   TEMPORARY course-level presentation (Louis, 2026-11-08; path B of
   reviews/NARRATION_PLAN.md 7.1), in the pattern of likely_ui.js, to move into
   a kit feature module later (PH: data-qsay, NARR_Q). The kit core is not
   changed. At load it wraps two engine functions:
     - renderQuiz(): once a question is answered (Q.revealed), a "Hear the why"
       button under the explanation, for a question that has a spoken why
       (why_data.js WHY_AUDIO[id]). Never before the answer, so it gives
       nothing away; never on a running exam paper (Q.examMode).
     - renderExamResult(): the same button on each reviewed question of a
       finished paper.
   The recorded clip audio/q-<id>.mp3 plays when audio_manifest.js lists
   'q-<id>' with the hash of the current text; otherwise the device voice reads
   the text, with no fixed timer (walk_ui.js NARR.say). The spoken text shows
   under the button while it plays, the sentence being read marked.
   Reaction figures (Louis, 2026-11-08): for a question in why_figs.js
   WHY_FIGS, its reaction figure (reactions.js, in DIA) at the step the question
   is about goes in the why box while the why plays (phone: above the text, in
   its own sideways-scrolling box; wide: beside it) and stays there after the
   narration ends, with its caption and "Open in Guide"; and, after the answer
   only, as a collapsed "Show the reaction" under the explanation (quiz, the
   all-on-one-page cards and a finished paper's review). The figure keeps the
   mapped step and its own Back / Next controls: none of the spoken whys walks
   the steps in order, so nothing advances with the clip.
   Storage: none of its own (the speed is NARR's per-device key). In the node
   checks' stub DOM it does nothing and returns null.
   ========================================================================== */
const WHY_UI = (() => {
  if (typeof NARR === 'undefined' || !NARR || typeof renderQuiz !== 'function') return null;
  const W = () => (typeof WHY_AUDIO !== 'undefined' && WHY_AUDIO) || {};
  const has = id => { const w = W()[id]; return !!(w && typeof w.text === 'string' && w.text.trim()); };
  const {esc} = NARR;
  let SAY = null;   // {id, h, scope}
  const ARM = typeof armFigs === 'function' ? armFigs : null;   // the core's, before the wrap below
  const FIGS = () => (typeof WHY_FIGS !== 'undefined' && WHY_FIGS) || {};
  const figOf = id => { const m = FIGS()[id]; return m && typeof DIA !== 'undefined' && DIA && typeof DIA[m.fig] === 'string' ? m : null; };

  const css = `
.wyrow{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;margin:12px 0 0}
.wyrow .chip{font-size:14px}
.wyrow .meta{margin:0}
.wybox{margin:8px 0 0;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--surface);font-size:14.5px;line-height:1.5;flex-basis:100%}
.wybox .wys.say{background:var(--accent-bg);border-radius:3px}
.wybox.hasfig{display:grid;grid-template-columns:minmax(0,1fr);gap:8px;align-items:start}
.wyvis{min-width:0}
.wyvis .fig{margin:0}
.wyvis .fig .rxscroll{max-width:100%;border:1px solid var(--line);border-radius:6px;background:var(--paper)}
.wyvis .fig figcaption{font-size:12.5px}
.wyfcap{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;margin:4px 0 0;font-size:12.5px;color:var(--text-dim)}
.wyfcap .chip{font-size:13px}
.wyfigd{margin:10px 0 0;flex-basis:100%;min-width:0}
.wyfigd > summary{cursor:pointer;color:var(--accent);font-size:14.5px;padding:6px 0;min-height:32px}
.wyfigd > .wyvis{margin-top:4px}
@media (pointer:coarse){.wyfigd > summary{min-height:44px;display:flex;align-items:center}.wyfcap .chip{min-height:44px}}
@media (min-width:900px){.wybox.hasfig{grid-template-columns:minmax(0,1.3fr) minmax(0,1fr)}
  .wybox.hasfig .wyvis .fig:not(.big) svg.rx{width:100%}}
`;
  const addCss = () => {
    if (document.getElementById('wycss')) return;
    const s = document.createElement('style'); s.id = 'wycss'; s.textContent = css; document.head.appendChild(s);
  };
  const key = id => 'q-' + id;
  const rec = id => !!NARR.clipFor(key(id), W()[id].text);
  const row = (id, scope) => {
    const d = document.createElement('div');
    d.className = 'wyrow'; d.dataset.wy = id; d.dataset.wyscope = scope;
    d.innerHTML = `<button type="button" class="chip" data-wyplay="${esc(id)}" aria-pressed="false">Hear the why</button>` +
      `<span class="meta">${rec(id) ? 'read by the narrator' : 'device voice'}</span>${NARR.rateSelect()}` +
      `<div class="wybox" hidden>${NARR.sentHTML(W()[id].text, 'wys')}</div>`;
    return d;
  };
  // the figure of a mapped question, at its step, with the caption line and "Open in Guide"
  function figBlock(m) {
    const v = document.createElement('div'); v.className = 'wyvis'; v.dataset.wyfig = m.fig;
    const name = (typeof DIA_NAMES !== 'undefined' && DIA_NAMES && DIA_NAMES[m.fig]) || 'The reaction';
    v.innerHTML = DIA[m.fig];
    const f = v.querySelector('figure.fig'), st = f ? [...f.querySelectorAll('.st')] : [];
    let at = '';
    if (st.length) {
      const k = Math.max(0, Math.min(st.length - 1, (+m.step || 1) - 1));
      st.forEach((s, j) => s.classList.toggle('on', j === k));
      f.querySelectorAll('.sdot').forEach((d, j) => d.classList.toggle('on', j === k));
      at = ` · step ${k + 1} of ${st.length} shown; Back and Next walk the others`;
    }
    const cap = document.createElement('p'); cap.className = 'wyfcap';
    cap.innerHTML = `<span>${esc(name)}${at}</span><button type="button" class="chip" data-jump="guide:${esc(m.fig)}">Open in Guide</button>`;
    v.appendChild(cap);
    return v;
  }
  const arm = el => { if (ARM) { try { ARM(el); } catch (e) { /* the figure still shows its first controls */ } } };
  // "Show the reaction", collapsed, in an answered question's explanation (never before the answer)
  function addFig(box, id) {
    const m = figOf(id); if (!box || !m || box.querySelector(':scope > .wyfigd')) return;
    const d = document.createElement('details'); d.className = 'wyfigd'; d.dataset.wyfigq = id;
    d.innerHTML = '<summary>Show the reaction</summary>';
    d.appendChild(figBlock(m));
    const r = box.querySelector(':scope > .wyrow'), cite = box.querySelector(':scope > .cite');
    if (r) r.after(d); else if (cite) box.insertBefore(d, cite); else box.appendChild(d);
    arm(d);
  }
  // the figure in the why box of a row that is playing (or has played)
  function boxFig(r) {
    const m = figOf(r.dataset.wy), box = r.querySelector('.wybox'); if (!m || !box || box.querySelector('.wyvis')) return;
    const tx = document.createElement('div'); tx.className = 'wytx';
    while (box.firstChild) tx.appendChild(box.firstChild);
    box.classList.add('hasfig'); box.append(figBlock(m), tx);
    arm(box);
  }
  const rowsFor = id => [...document.querySelectorAll('.wyrow')].filter(r => r.dataset.wy === id);
  function ui() {
    document.querySelectorAll('.wyrow').forEach(r => {
      const on = !!(SAY && SAY.id === r.dataset.wy && SAY.scope === r.dataset.wyscope);
      const b = r.querySelector('[data-wyplay]'), box = r.querySelector('.wybox');
      b.textContent = on ? (SAY.h && SAY.h.paused && !SAY.h.novoice ? 'Resume' : '❚❚ Stop') : 'Hear the why';
      b.setAttribute('aria-pressed', String(on));
      // a why with a figure stays open once played, so the figure stays after the narration
      if (on && figOf(r.dataset.wy)) { boxFig(r); r.dataset.wykeep = '1'; }
      box.hidden = !on && r.dataset.wykeep !== '1';
      if (!on) box.querySelectorAll('.wys.say').forEach(x => x.classList.remove('say'));
      const d = r.parentElement && r.parentElement.querySelector(':scope > .wyfigd');
      if (d) d.hidden = !box.hidden && !!box.querySelector('.wyvis');
    });
  }
  function stop() { const s = SAY; SAY = null; if (s && s.h) s.h.stop(true); ui(); }
  function play(id, scope) {
    if (SAY && SAY.h) SAY.h.stop(true);
    // one voice at a time: a walkthrough that is playing stops, and its player shows Play again
    if (typeof WALK_UI !== 'undefined' && WALK_UI) WALK_UI.stop();
    const cur = SAY = {id, scope, h: null};
    ui();
    cur.h = NARR.say({
      owner: 'why', clip: NARR.clipFor(key(id), W()[id].text), text: W()[id].text,
      onSent: si => {
        if (SAY !== cur) return;
        rowsFor(id).filter(r => r.dataset.wyscope === scope).forEach(r => {
          r.querySelectorAll('.wys').forEach(x => x.classList.toggle('say', +x.dataset.si === si));
        });
      },
      onEnd: () => { if (SAY === cur) { SAY = null; ui(); } },
      onState: () => { if (SAY === cur) ui(); },
      onStop: quiet => { if (SAY === cur && !quiet) { SAY = null; ui(); } },
    });
    ui();
  }

  function decorateQuiz() {
    if (typeof Q === 'undefined' || !Q || !Q.current || !Q.revealed || Q.examMode) { if (SAY && SAY.scope === 'quiz') stop(); return; }
    const id = Q.current.id;
    if (SAY && SAY.scope === 'quiz' && SAY.id !== id) stop();
    const why = document.querySelector('#v-quiz .why'); if (!why) return;
    if (has(id) && !why.querySelector('.wyrow')) {
      const r = row(id, 'quiz'), cite = why.querySelector(':scope > .cite');
      if (cite) why.insertBefore(r, cite); else why.appendChild(r);
    }
    addFig(why, id);
    ui();
  }
  function decorateExam() {
    if (typeof EX === 'undefined' || !EX || !Array.isArray(EX.qs)) return;
    const cards = [...document.querySelectorAll('#v-exam > .qcard')];
    if (cards.length !== EX.qs.length) return;
    cards.forEach((c, i) => {
      const q = EX.qs[i], body = c.querySelector('.qbody');
      if (!q || !body) return;
      if (has(q.id) && !body.querySelector('.wyrow')) {
        const r = row(q.id, 'exam'), cite = body.querySelector(':scope > .cite');
        if (cite) body.insertBefore(r, cite); else body.appendChild(r);
      }
      addFig(body, q.id);
    });
    ui();
  }

  document.addEventListener('click', e => {
    const b = e.target && e.target.closest && e.target.closest('[data-wyplay]'); if (!b) return;
    const r = b.closest('.wyrow'), id = r.dataset.wy, scope = r.dataset.wyscope;
    if (SAY && SAY.id === id && SAY.scope === scope) {
      if (SAY.h && SAY.h.paused && !SAY.h.novoice && !SAY.h.done) { SAY.h.resume(); ui(); } else stop();
      return;
    }
    play(id, scope);
  });

  try {
    addCss();
    const oq = renderQuiz;
    renderQuiz = function () {
      const r = oq.apply(this, arguments);
      try { decorateQuiz(); } catch (e) { console.error('"Hear the why" could not be drawn; the question is unaffected.', e); }
      return r;
    };
    if (typeof renderExamResult === 'function') {
      const oe = renderExamResult;
      renderExamResult = function () {
        if (SAY && SAY.scope === 'exam') stop();
        const r = oe.apply(this, arguments);
        try { decorateExam(); } catch (e) { console.error('"Hear the why" could not be drawn on the review; the review is unaffected.', e); }
        return r;
      };
    }
    /* the all-on-one-page cards (topic_list_ui.js) arm their figures after drawing an
       answered card: "Show the reaction" goes into each answered card's explanation then */
    if (ARM) {
      armFigs = function (root) {
        try {
          if (root && root.querySelectorAll && typeof Q !== 'undefined' && Q && !Q.examMode &&
              (root.id === 'v-quiz' || (root.closest && root.closest('#v-quiz')))) {
            const cards = root.matches && root.matches('.tlcard') ? [root] : [...root.querySelectorAll('.tlcard')];
            cards.forEach(c => { const why = c.querySelector('.why'); if (why && c.dataset.tlq) addFig(why, c.dataset.tlq); });
          }
        } catch (e) { console.error('"Show the reaction" could not be added; the question is unaffected.', e); }
        return ARM.apply(this, arguments);
      };
    }
    // leaving a tab stops a why that belongs to it
    if (typeof show === 'function') {
      const os = show;
      show = function (v) {
        if (SAY && ((SAY.scope === 'quiz' && v !== 'quiz') || (SAY.scope === 'exam' && v !== 'exam'))) stop();
        return os.apply(this, arguments);
      };
    }
  } catch (e) { console.error('"Hear the why" could not be added; the rest of the page is unaffected.', e); }
  return {has, play, stop, figOf, state: () => SAY && {id: SAY.id, scope: SAY.scope, mode: SAY.h && SAY.h.mode}};
})();

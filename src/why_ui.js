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
   Storage: none of its own (the speed is NARR's per-device key). In the node
   checks' stub DOM it does nothing and returns null.
   ========================================================================== */
const WHY_UI = (() => {
  if (typeof NARR === 'undefined' || !NARR || typeof renderQuiz !== 'function') return null;
  const W = () => (typeof WHY_AUDIO !== 'undefined' && WHY_AUDIO) || {};
  const has = id => { const w = W()[id]; return !!(w && typeof w.text === 'string' && w.text.trim()); };
  const {esc} = NARR;
  let SAY = null;   // {id, h, scope}

  const css = `
.wyrow{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;margin:12px 0 0}
.wyrow .chip{font-size:14px}
.wyrow .meta{margin:0}
.wybox{margin:8px 0 0;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--surface);font-size:14.5px;line-height:1.5;flex-basis:100%}
.wybox .wys.say{background:var(--accent-bg);border-radius:3px}
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
  const rowsFor = id => [...document.querySelectorAll('.wyrow')].filter(r => r.dataset.wy === id);
  function ui() {
    document.querySelectorAll('.wyrow').forEach(r => {
      const on = !!(SAY && SAY.id === r.dataset.wy && SAY.scope === r.dataset.wyscope);
      const b = r.querySelector('[data-wyplay]'), box = r.querySelector('.wybox');
      b.textContent = on ? (SAY.h && SAY.h.paused && !SAY.h.novoice ? 'Resume' : '❚❚ Stop') : 'Hear the why';
      b.setAttribute('aria-pressed', String(on));
      box.hidden = !on;
      if (!on) box.querySelectorAll('.wys.say').forEach(x => x.classList.remove('say'));
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
    if (!has(id)) return;
    const why = document.querySelector('#v-quiz .why'); if (!why || why.querySelector('.wyrow')) return;
    const r = row(id, 'quiz'), cite = why.querySelector(':scope > .cite');
    if (cite) why.insertBefore(r, cite); else why.appendChild(r);
    ui();
  }
  function decorateExam() {
    if (typeof EX === 'undefined' || !EX || !Array.isArray(EX.qs)) return;
    const cards = [...document.querySelectorAll('#v-exam > .qcard')];
    if (cards.length !== EX.qs.length) return;
    cards.forEach((c, i) => {
      const q = EX.qs[i], body = c.querySelector('.qbody');
      if (!q || !has(q.id) || !body || body.querySelector('.wyrow')) return;
      const r = row(q.id, 'exam'), cite = body.querySelector(':scope > .cite');
      if (cite) body.insertBefore(r, cite); else body.appendChild(r);
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
    // leaving a tab stops a why that belongs to it
    if (typeof show === 'function') {
      const os = show;
      show = function (v) {
        if (SAY && ((SAY.scope === 'quiz' && v !== 'quiz') || (SAY.scope === 'exam' && v !== 'exam'))) stop();
        return os.apply(this, arguments);
      };
    }
  } catch (e) { console.error('"Hear the why" could not be added; the rest of the page is unaffected.', e); }
  return {has, play, stop, state: () => SAY && {id: SAY.id, scope: SAY.scope, mode: SAY.h && SAY.h.mode}};
})();

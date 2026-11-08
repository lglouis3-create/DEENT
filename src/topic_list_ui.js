/* ==========================================================================
   QUIZ LAYOUT: "ONE AT A TIME" | "ALL ON ONE PAGE", PHAR 4346 DEENT
   --------------------------------------------------------------------------
   Course-level presentation (Louis, 2026-11-08, from his iPhone: "I don't see
   an option with answering questions in the topic to scroll and see all the
   questions"; his design: the layout toggle of his Intro to Pharmacology
   drill, app.js layoutToggle() / renderAll()). Temporary until the kit has it.
   The kit core (08be7a2) is not changed. At load it wraps renderQuiz():
     - One at a time (the core drill, unchanged): a row "Answer: One at a time
       | All on one page" above the question card.
     - All on one page: every question of the drill that is open (Q: a topic,
       a subtopic, Everything, Weak spots, the starred sets, a pass) on one
       scrollable page, 40 at a time, in the drill's order (a fixed pass: its
       own queue; an adaptive set: the bank's order). Each card is answered in
       place. The cards are drawn with the core's own pieces (profTag, qLabel,
       fgShow, optFig, glossify, renderTeach, cmpStrip, explainRow, srcFlag,
       matchBody) and the same CSS classes, so a card looks and grades as the
       drill's card does.
   Recording: an answer here goes through the core's record(q, result, picked,
   ms), exactly as answer() / submitMulti() / the matching check call it, once
   per card (a card is answered once; it is not offered again in this drill).
   So it lands in the open profile's DB.answers and answer history (LOG), with
   the core's own guards (a page that has stopped saving, or a profile another
   tab writes, records nothing: record() returns at staleWarn and the card
   says it was not recorded). The confidence buttons call the core's
   markShaky / markGuessed / markSure, which change only the profile's LAST
   answer; so they are offered only on the card whose answer is the last one
   recorded (the drill offers them until Next, for the same reason), and an
   earlier card says how its answer was recorded. The time on a card (ms) is
   counted from when the card came into view or from the previous answer on
   this page, whichever is later.
   Switching: questions answered one at a time in this drill drop out of the
   page; questions answered on the page drop out of a fixed pass's queue, and
   a question on screen in the drill that was answered on the page is moved
   past (never recorded twice). The state lives on the drill (Q), so it is
   parked with the profile on a switch (the core's parkSession) and the id lists
   survive a reload with the core's place record.
   Exam sim is left one at a time: its paper, Review answers overview, submit
   confirmation and per-profile ownership are the core's renderExamQ /
   renderExamReview / saveExam flow, which a wrapper cannot lay out on one page
   without re-implementing it.
   Storage: one per-device key, <NS>:quizLayout ('one' | 'all'), read and
   written inside try/catch; no progress of its own.
   ========================================================================== */
const TOPIC_LIST_UI = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' &&
             typeof document.getElementById === 'function' && document.getElementById('v-quiz') &&
             typeof document.getElementById('v-quiz').insertBefore === 'function' &&
             typeof renderQuiz === 'function';
  if (!ok) return null;

  const PAGE = 40;
  const KEY = () => { let ns; try { ns = NS; } catch (e) { ns = COURSE.ns; } return ns + ':quizLayout'; };
  let MODE = null;
  const layout = () => {
    if (MODE) return MODE;
    let v = null; try { v = localStorage.getItem(KEY()); } catch (e) { /* this visit only */ }
    return (MODE = v === 'all' ? 'all' : 'one');
  };
  const keepLayout = k => { MODE = k; try { localStorage.setItem(KEY(), k); } catch (e) { /* this visit only */ } };

  const css = `
#v-quiz .tlbar{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;margin:0 0 10px}
#v-quiz .tlbar .meta{margin:0}
#v-quiz .tlbar .chip,#v-quiz .tljump button,#v-quiz .tlnav .btn{min-height:44px}
#v-quiz .tlbar .chip{padding:0 14px}
#v-quiz .tlhead{margin:0 0 14px}
#v-quiz .tlhead h2{margin:4px 0 2px;font-size:19px;overflow-wrap:anywhere}
#v-quiz .tlhead .tlcount{margin:0 0 8px;color:var(--text-dim);font-size:14px}
#v-quiz .tlopt{margin:6px 0 10px}
#v-quiz .tljump{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}
#v-quiz .tljump button{min-width:44px;padding:0 6px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text);font:inherit;font-size:14px;cursor:pointer}
#v-quiz .tljump button.ok{border-color:var(--good,#2e7d32);color:var(--good,#2e7d32);font-weight:600}
#v-quiz .tljump button.bad{border-color:var(--bad,#c62828);color:var(--bad,#c62828);font-weight:600}
#v-quiz .tlnav{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}
#v-quiz .tlcard{margin:0 0 18px}
#v-quiz .tlcard .qfoot{flex-wrap:wrap}
#v-quiz .tlrec{font-size:13.5px;color:var(--text-dim)}
#v-quiz .tlall{max-width:100%;overflow-wrap:anywhere}
#v-quiz .tlall .qcard,#v-quiz .tlall .qbody{min-width:0}
#v-quiz .tlall table.matchtab{max-width:100%}
#v-quiz .tlall select{max-width:100%}`;
  const addCss = () => {
    if (document.getElementById('tlcss')) return;
    const s = document.createElement('style'); s.id = 'tlcss'; s.textContent = css; document.head.appendChild(s);
  };

  const toggle = () => `<div class="tlbar" role="group" aria-label="How the questions are shown"><span class="meta">Answer:</span>${
    [['one', 'One at a time'], ['all', 'All on one page']].map(([k, l]) =>
      `<button type="button" class="chip" data-layout="${k}" aria-pressed="${layout() === k}">${l}</button>`).join('')}</div>`;

  /* ---------- the drill's state for this page (kept on Q) ---------- */
  const uniq = a => [...new Set(a)];
  const add = (a, id) => { if (!a.includes(id)) a.push(id); };
  function prep() {
    Q.tlOneDone = Array.isArray(Q.tlOneDone) ? Q.tlOneDone : [];
    Q.tlAllDone = Array.isArray(Q.tlAllDone) ? Q.tlAllDone : [];
    Q.tlSt = Q.tlSt && typeof Q.tlSt === 'object' ? Q.tlSt : {};
    Q.tlN = typeof Q.tlN === 'number' ? Q.tlN : PAGE;
    if (!Array.isArray(Q.tlOrder)) {
      const inPool = new Set((Q.pool || []).map(q => q.id));
      Q.tlOrder = Q.sweep ? uniq(Q.sweep).filter(id => byId(id))
                          : QUESTIONS.filter(q => inPool.has(q.id)).map(q => q.id);
    }
  }
  // the page's questions: answered one at a time in this drill, or on this page before a reload, drop out
  const list = () => Q.tlOrder.filter(id => !Q.tlOneDone.includes(id) && (!Q.tlAllDone.includes(id) || Q.tlSt[id])).map(byId).filter(Boolean);
  const answeredHere = id => Q.tlAllDone.includes(id);
  const stOf = q => Q.tlSt[q.id] || (Q.tlSt[q.id] = {order: shuffle((q.options || []).map((o, i) => i)), picked: null, revealed: false});
  const lastAnswer = () => DB.answers[DB.answers.length - 1];
  const liveId = () => { const a = lastAnswer(); if (!a) return null; const s = Q.tlSt[a.qid]; return s && s.entry === a ? a.qid : null; };

  /* ---------- one card, drawn with the core's pieces ---------- */
  const likely = q => typeof LIKELY_UI !== 'undefined' && LIKELY_UI && LIKELY_UI.byId && LIKELY_UI.byId[q.id]
    ? `<span class="lkbadge" title="Claude's prediction from the professors' stated emphasis, not an official list.">★ Likely on the exam</span>` : '';
  function whyRow(id) {
    if (typeof WHY_UI === 'undefined' || !WHY_UI || !WHY_UI.has(id) || typeof NARR === 'undefined') return '';
    const text = WHY_AUDIO[id].text;
    return `<div class="wyrow" data-wy="${esc(id)}" data-wyscope="all"><button type="button" class="chip" data-wyplay="${esc(id)}" aria-pressed="false">Hear the why</button>` +
      `<span class="meta">${NARR.clipFor('q-' + id, text) ? 'read by the narrator' : 'device voice'}</span>${NARR.rateSelect()}` +
      `<div class="wybox" hidden>${NARR.sentHTML(text, 'wys')}</div></div>`;
  }
  // the matching table is the core's matchBody, which reads the drill's Q: it is given this card's state for the call
  function matchHtml(q, st) {
    const saved = Q, fake = {picked: st.picked, rights: st.rights, revealed: st.revealed, lastRight: st.ok};
    try { Q = fake; return matchBody(q); } finally { st.rights = fake.rights; Q = saved; }
  }
  function recLine(q, st) {
    if (st.notRec) return 'Not recorded: this page is not saving answers for this profile now (the notice at the top says why).';
    if (st.ok) return st.conf === 'shaky' ? 'Recorded as right, “Not sure”: it comes back soon.'
      : st.conf === 'guess' ? 'Recorded as a guess.' : 'Recorded as “Knew it”.';
    if (st.conf === 'sure') return 'Recorded as a miss you were sure of.' + (armOf(q.concept) === 'concept' && SURE_NOTE.later ? ' ' + SURE_NOTE.later : '');
    return 'Recorded as a miss.';
  }
  function cardHtml(q, i, n) {
    const st = stOf(q), s = DB.concepts[q.concept];
    const multi = isMulti(q), kind = q.type || 'mc';
    const missedBefore = s && s.wrong > 0 && s.box === 0, seenBefore = s && s.seen > 0;
    let h = `<div class="qcard tlcard" id="tlq-${i + 1}" data-tlq="${esc(q.id)}"><div class="qhead">
      ${profTag(q.prof)}<span>Question ${i + 1} of ${n}</span>${qLabel(q)}${likely(q)}<span class="spacer"></span>
      ${missedBefore ? '<span style="color:var(--bad)">missed before</span>' : seenBefore ? '<span>review</span>' : '<span>new</span>'}
    </div><div class="qbody"><p class="stem">${esc(q.stem)}</p>`;
    if (q.img && IMAGES[q.img]) h += `<img class="qimg" src="${IMAGES[q.img]}" alt="Reaction scheme for this question">`;
    if (q.fg) h += fgShow(q.fg);
    if (kind === 'match') {
      h += matchHtml(q, st);
      if (st.revealed) h += explainRow(q);
    } else if (kind !== 'mc') {
      h += `<p class="sub">This kind of question is answered one at a time.</p>`;
    } else {
      const picks = multi ? (st.picked || []) : null;
      if (multi) h += `<p class="sata">Select all that apply, then check. Marked right only when the whole set matches.</p>`;
      st.order.forEach((oi, k) => {
        const o = q.options[oi];
        let cls = 'opt' + (multi ? ' multi' : '');
        const chosen = multi ? picks.includes(oi) : (oi === st.picked);
        if (st.revealed) { if (chosen) cls += o.correct ? ' pick-ok' : ' pick-bad'; else if (o.correct) cls += ' reveal-ok'; }
        else if (multi && chosen) cls += ' on';
        h += `<button class="${cls}" data-o="${oi}"${st.revealed ? ' disabled' : ''} aria-pressed="${chosen}">
          <span class="k">${multi ? (chosen ? '☑' : '☐') : LETTERS[k]}</span><span>${esc(o.t)}</span></button>`;
      });
      if (st.revealed) {
        const seen = new Set();
        const self = [teachText(q.teach), ...q.options.map(o => o.why || '')].join(' ');
        let verdict;
        if (multi) {
          const want = correctSet(q);
          const missedOnes = want.filter(x => !picks.includes(x)).length, extraOnes = picks.filter(x => !want.includes(x)).length;
          verdict = st.ok ? `✓ Correct — all ${want.length} identified`
            : `✗ Not correct — ${missedOnes ? missedOnes + ' correct option' + (missedOnes > 1 ? 's' : '') + ' left out' : ''}${
                missedOnes && extraOnes ? ', ' : ''}${extraOnes ? extraOnes + ' wrong option' + (extraOnes > 1 ? 's' : '') + ' included' : ''}`;
        } else {
          verdict = st.ok ? '✓ Correct' : `✗ Not correct — the answer is ${LETTERS[st.order.indexOf(q.options.findIndex(o => o.correct))]}`;
        }
        h += `<div class="why"><p class="verdict ${st.ok ? 'ok' : 'bad'}">${verdict}</p>`;
        st.order.forEach((oi, k) => {
          const o = q.options[oi], chosen = multi ? picks.includes(oi) : (oi === st.picked);
          h += `<div class="wrow"><span class="mark ${o.correct ? 'y' : 'n'}">${o.correct ? '✓' : '✗'}</span>
            <span class="wtxt"><b>${LETTERS[k]}. ${esc(o.t)}</b>${multi && chosen ? ' <i class="youpicked">you selected this</i>' : ''} — ${glossify(esc(o.why), seen, self)}</span>
            ${optFig(o.t)}</div>`;
        });
        if (q.teach) h += `<div class="teach"><h4>The concept behind this</h4>${q.svg ? `<div class="tdiag">${q.svg}</div>` : ''}${
          q.teachImg && IMAGES[q.teachImg] ? `<img class="qimg tdimg" src="${IMAGES[q.teachImg]}" alt="Figure from the lecture slide">` : ''}${
          cmpStrip(q, 'The structures side by side')}${renderTeach(q.teach, seen, self)}</div>`;
        if (q.note) h += `<p class="prose" style="margin:13px 0 0;font-size:14.5px">${esc(q.note)}</p>`;
        h += `<div class="cite">${q.quote ? `<span class="quote">“${esc(q.quote)}”</span>` : ''}${srcFlag(q)}${esc(q.cite)}</div>`;
        h += explainRow(q) + `</div>`;
      }
    }
    h += `</div><div class="qfoot">`;
    if (!st.revealed) {
      if (kind === 'match') {
        const m = (st.picked || []).filter(x => x !== null && x !== undefined).length;
        h += `<button class="btn" data-tlcheck${m === q.pairs.length ? '' : ' disabled'}>Check answer</button><span class="tlmc" style="font-size:13px;color:var(--text-dim)">${m} of ${q.pairs.length} matched</span>`;
      } else if (multi) {
        const m = (st.picked || []).length;
        h += `<button class="btn" data-tlcheck${m ? '' : ' disabled'}>Check answer</button><span style="font-size:13px;color:var(--text-dim)">${m} selected</span>`;
      } else if (kind === 'mc') h += `<span style="font-size:13px;color:var(--text-dim)">Pick an answer.</span>`;
    } else if (liveId() === q.id && !st.conf) {
      h += st.ok
        ? `<button class="btn amber" data-tlconf="shaky">Not sure, ask again soon</button><button class="btn amber" data-tlconf="guess">I guessed that one</button><span class="meta">Counts as “Knew it” unless you mark it here.</span>`
        : `<button class="btn amber" data-tlconf="sure">I was sure of that</button>`;
    } else h += `<span class="tlrec">${esc(recLine(q, st))}</span>`;
    h += `</div></div>`;
    return h;
  }
  // "Hear the why" goes where why_ui.js puts it in the drill: in the explanation, before the citation
  function addWhy(card, id, keep) {
    const why = card.querySelector('.why'); if (!why || why.querySelector('.wyrow')) return;
    const t = document.createElement('div'); t.innerHTML = keep ? '' : whyRow(id);
    const row = keep || t.firstElementChild; if (!row) return;
    const cite = why.querySelector(':scope > .cite');
    if (cite) why.insertBefore(row, cite); else why.appendChild(row);
  }

  /* ---------- the page ---------- */
  let IO = null;
  const watch = card => {
    if (typeof IntersectionObserver === 'undefined') return;
    if (!IO) IO = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting || !Q || !Q.tlSt) return;
      const st = Q.tlSt[e.target.dataset.tlq]; if (st && !st.seenAt) st.seenAt = Date.now();
      IO.unobserve(e.target);
    }), {threshold: 0.25});
    IO.observe(card);
  };
  const countText = (all, shown) => {
    const done = shown.filter(q => (Q.tlSt[q.id] || {}).revealed), right = done.filter(q => Q.tlSt[q.id].ok).length;
    const earlier = Q.tlOrder.length - all.length;
    return `${all.length} question${all.length === 1 ? '' : 's'} · ${done.length} answered here${done.length ? ' · ' + right + ' right' : ''}${
      all.length > shown.length ? ` · showing 1–${shown.length}` : ''}${earlier ? ` · ${earlier} answered earlier in this drill` : ''}`;
  };
  const chip = (q, i) => {
    const st = Q.tlSt[q.id] || {};
    const cls = st.revealed ? (st.ok ? 'ok' : 'bad') : '';
    return `<button type="button" class="${cls}" data-tljump="${i + 1}" aria-label="Question ${i + 1}${st.revealed ? (st.ok ? ', right' : ', missed') : ''}">${i + 1}</button>`;
  };
  /* the place on the page, kept when the Quiz tab is left (Explain more, another tab) and put back on
     return: the card at the top of the screen at the same height, again as figures and images settle
     (Safari has no scroll anchoring), unless the reader scrolls, taps or presses a key first */
  let PLACE = null;
  function placeKeep() {
    const off = typeof headerOffset === 'function' ? headerOffset() : 0;
    const c = [...document.querySelectorAll('#v-quiz .tlcard')].find(x => x.getBoundingClientRect().bottom > off + 4);
    PLACE = c ? {id: c.dataset.tlq, top: c.getBoundingClientRect().top, q: Q} : null;
  }
  function placeBack() {
    const pl = PLACE; PLACE = null; if (!pl || pl.q !== Q) return;
    let moved = false;
    const stop = () => { moved = true; };
    const evs = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    evs.forEach(ev => window.addEventListener(ev, stop, {once: true, passive: true, capture: true}));
    const put = () => {
      const c = document.querySelector(`#v-quiz .tlcard[data-tlq="${CSS.escape(pl.id)}"]`);
      if (!moved && c && VIEW === 'quiz') window.scrollBy(0, c.getBoundingClientRect().top - pl.top);
    };
    [0, 150, 450, 1000].forEach((ms, k, all) => setTimeout(() => {
      put(); if (k === all.length - 1) evs.forEach(ev => window.removeEventListener(ev, stop, {capture: true}));
    }, ms));
  }
  function renderAll() {
    figClose();
    prep();
    const el = document.getElementById('v-quiz');
    const all = list(), shown = all.slice(0, Q.tlN);
    const optional = all.length && all.every(q => isOptional(q));
    let h = `<div class="tlall">${toggle()}<div class="tlhead"><h2>${esc(Q.label || 'This drill')}</h2>
      ${optional ? `<p class="tlopt"><span class="lbl optional" data-optional>Optional</span> optional practice, outside ${esc(EXAM.name)}</p>` : ''}
      <p class="tlcount" id="tlcount">${esc(countText(all, shown))}</p>
      <div class="qprog" style="border:0;padding:0">${sessStrip()}</div>
      ${shown.length > 1 ? `<div class="tljump" role="navigation" aria-label="Jump to a question">${shown.map(chip).join('')}</div>` : ''}
      <div class="tlnav"><button type="button" class="btn ghost" data-tltopics>Back to Topics</button></div></div>`;
    if (!all.length) h += `<div class="empty"><p><b>Every question of this drill has been answered.</b></p>
      <p style="margin:10px 0 16px">The answers are recorded, so Weak spots reflects them.</p>
      <p style="display:flex;gap:9px;flex-wrap:wrap;justify-content:center"><button class="btn" onclick="show('gaps')">See weak spots</button></p></div>`;
    h += shown.map((q, i) => cardHtml(q, i, all.length)).join('');
    h += `<div class="tlnav">${all.length > shown.length ? `<button type="button" class="btn" data-tlmore>Show the next ${Math.min(PAGE, all.length - shown.length)}</button>` : ''}
      <button type="button" class="btn ghost" data-tltop>Back to top</button><button type="button" class="btn ghost" data-tltopics>Back to Topics</button></div></div>`;
    const playing = typeof WHY_UI !== 'undefined' && WHY_UI && WHY_UI.state();
    if (playing && playing.scope === 'all') WHY_UI.stop();
    el.innerHTML = h;
    el.querySelectorAll('.tlcard').forEach(c => { if ((Q.tlSt[c.dataset.tlq] || {}).revealed) addWhy(c, c.dataset.tlq); watch(c); });
    armFigs(el);
    placeBack();
  }
  // one card again; the card being answered stays where it is on screen (Safari has no scroll anchoring)
  function refreshCard(id, anchor) {
    const old = document.querySelector(`#v-quiz .tlcard[data-tlq="${CSS.escape(id)}"]`); if (!old) return;
    const cards = [...document.querySelectorAll('#v-quiz .tlcard')], i = cards.indexOf(old);
    const ref = anchor && anchor !== old ? anchor : null, top = ref ? ref.getBoundingClientRect().top : 0;
    const t = document.createElement('div'); t.innerHTML = cardHtml(byId(id), i, list().length);
    const card = t.firstElementChild;
    const st = WHY_UI && WHY_UI.state && WHY_UI.state();
    const keep = st && st.scope === 'all' && st.id === id ? old.querySelector('.wyrow') : null;
    old.replaceWith(card);
    if (Q.tlSt[id].revealed) addWhy(card, id, keep);
    armFigs(card);
    if (ref) window.scrollBy(0, ref.getBoundingClientRect().top - top);
    return card;
  }
  function refreshHead() {
    const all = list(), shown = all.slice(0, Q.tlN);
    const c = document.getElementById('tlcount'); if (c) c.textContent = countText(all, shown);
    const j = document.querySelector('#v-quiz .tljump'); if (j) j.innerHTML = shown.map(chip).join('');
    if (typeof refreshSess === 'function') refreshSess();
  }

  /* ---------- answering: the core's record path ---------- */
  function finish(id, good, picked, pairOk) {
    const q = byId(id), st = Q.tlSt[id];
    if (st.revealed) return;
    const prev = liveId(), before = lastAnswer();
    st.revealed = true; st.ok = good;
    const from = Math.max(st.seenAt || 0, Q.tlLastAt || 0);
    record(q, good ? 'correct' : 'wrong', picked, from ? Date.now() - from : 0);
    const a = lastAnswer();
    if (a && a !== before && a.qid === id) {
      st.entry = a; add(Q.tlAllDone, id);
      if (pairOk) { a.pairOk = pairOk; save(); }      // as the core's matching check does
    } else st.notRec = true;
    Q.tlLastAt = Date.now();
    const card = refreshCard(id);
    if (prev && prev !== id) refreshCard(prev, card);
    refreshHead();
  }
  function pick(id, oi) {
    const q = byId(id), st = Q.tlSt[id]; if (!q || !st || st.revealed) return;
    if (isMulti(q)) { const p = st.picked || []; st.picked = p.includes(oi) ? p.filter(x => x !== oi) : [...p, oi]; refreshCard(id); return; }
    st.picked = oi;
    finish(id, !!q.options[oi].correct, oi);
  }
  function check(id) {
    const q = byId(id), st = Q.tlSt[id]; if (!q || !st || st.revealed) return;
    if ((q.type || 'mc') === 'match') {
      const p = st.picked || [];
      if (!(p.length === q.pairs.length && p.every(x => x !== null && x !== undefined))) return;
      const picks = p.slice();
      finish(id, picks.every((x, i) => x === i), picks, picks.map((x, i) => x === i));
      return;
    }
    if (!st.picked || !st.picked.length) return;
    const picks = st.picked.slice().sort((a, b) => a - b);
    finish(id, gradeMulti(q, picks), picks);
  }
  function conf(id, k) {
    const q = byId(id), st = Q.tlSt[id]; if (!q || !st || liveId() !== id || st.conf) return;
    const done = k === 'shaky' ? markShaky(q) : k === 'guess' ? markGuessed(q) : k === 'sure' ? markSure(q) : false;
    if (done) st.conf = k;
    refreshCard(id); refreshHead();
  }

  /* ---------- switching ---------- */
  function setLayout(k) {
    if (k === layout()) return;
    keepLayout(k); PLACE = null;
    const playing = typeof WHY_UI !== 'undefined' && WHY_UI && WHY_UI.state();
    if (playing && playing.scope === 'all') WHY_UI.stop();
    window.scrollTo(0, 0);
    if (k === 'one' && Q && Q.current && Array.isArray(Q.tlAllDone)) {
      const id = Q.current.id, a = lastAnswer();
      // the question on screen in the drill was answered on the page: it is not asked (or recorded) again
      if (!Q.revealed && answeredHere(id)) { Q.lastId = id; nextQuestion(); return; }
      // answered in the drill, then others on the page: its confidence buttons would no longer reach its answer
      if (Q.revealed && !(a && a.qid === id)) { Q.answered++; Q.lastId = id; nextQuestion(); return; }
    }
    renderQuiz();
  }

  const pane = document.getElementById('v-quiz');
  pane.addEventListener('click', e => {
    const t = e.target && e.target.closest ? e.target.closest('[data-layout],[data-tljump],[data-tltop],[data-tlmore],[data-tltopics],[data-tlcheck],[data-tlconf],.tlcard button.opt[data-o]') : null;
    if (!t) return;
    try {
      if (t.dataset.layout) return setLayout(t.dataset.layout);
      if (t.hasAttribute('data-tltopics')) return show('topics');
      if (t.hasAttribute('data-tltop')) return window.scrollTo({top: 0, behavior: reduceMotion() ? 'auto' : 'smooth'});
      if (t.hasAttribute('data-tlmore')) { Q.tlN += PAGE; return renderAll(); }
      if (t.dataset.tljump) {
        const c = document.getElementById('tlq-' + t.dataset.tljump);
        if (c) { scrollToEl(c); const s = c.querySelector('.stem'); if (s) { s.setAttribute('tabindex', '-1'); try { s.focus({preventScroll: true}); } catch (err) {} } }
        return;
      }
      const card = t.closest('.tlcard'); if (!card || !Q || !Q.tlSt) return;
      const id = card.dataset.tlq;
      if (t.hasAttribute('data-tlcheck')) return check(id);
      if (t.dataset.tlconf) return conf(id, t.dataset.tlconf);
      if (t.dataset.o !== undefined) return pick(id, +t.dataset.o);
    } catch (err) { console.error('The all-on-one-page drill could not take that tap.', err); }
  });
  pane.addEventListener('change', e => {
    const s = e.target && e.target.closest ? e.target.closest('.tlcard select[data-row]') : null; if (!s || !Q || !Q.tlSt) return;
    const card = s.closest('.tlcard'), q = byId(card.dataset.tlq), st = Q.tlSt[q.id]; if (!st || st.revealed) return;
    const p = st.picked || (st.picked = q.pairs.map(() => null));
    p[+s.dataset.row] = s.value === '' ? null : +s.value;
    const n = p.filter(x => x !== null && x !== undefined).length;
    const b = card.querySelector('[data-tlcheck]'); if (b) b.disabled = n !== q.pairs.length;
    const m = card.querySelector('.tlmc'); if (m) m.textContent = `${n} of ${q.pairs.length} matched`;
  });

  try {
    addCss();
    const base = renderQuiz;
    renderQuiz = function () {
      if (typeof Q !== 'undefined' && Q && !Q.examMode && (Q.pool || []).length && layout() === 'all') {
        try { return renderAll(); } catch (e) { console.error('The all-on-one-page drill could not be drawn; the drill is shown one at a time.', e); }
      }
      if (typeof Q !== 'undefined' && Q && Q.sweep && Array.isArray(Q.tlAllDone) && Q.tlAllDone.length) {
        // a fixed pass does not ask again what was answered on the page
        Q.sweep = Q.sweep.slice(0, Q.i).concat(Q.sweep.slice(Q.i).filter(id => !answeredHere(id)));
      }
      const r = base.apply(this, arguments);
      try {
        if (typeof Q !== 'undefined' && Q && !Q.examMode && (Q.pool || []).length) {
          if (Q.current && Q.revealed) add(Q.tlOneDone = Array.isArray(Q.tlOneDone) ? Q.tlOneDone : [], Q.current.id);
          const el = document.getElementById('v-quiz');
          if (!el.querySelector(':scope > .tlbar')) {
            const t = document.createElement('div'); t.innerHTML = toggle();
            const first = el.querySelector(':scope > .qcard, :scope > .empty');
            el.insertBefore(t.firstElementChild, first || el.firstChild);
          }
        }
      } catch (e) { console.error('The layout choice could not be drawn; the question is unaffected.', e); }
      return r;
    };
    // leaving the Quiz tab stops a why playing on the page
    const os = show;
    show = function (v) {
      try { if (v !== 'quiz' && VIEW === 'quiz' && document.querySelector('#v-quiz .tlall')) placeKeep(); } catch (e) { PLACE = null; }
      const playing = v !== 'quiz' && typeof WHY_UI !== 'undefined' && WHY_UI && WHY_UI.state();
      if (playing && playing.scope === 'all') WHY_UI.stop();
      return os.apply(this, arguments);
    };
  } catch (e) { console.error('The all-on-one-page layout could not be added; the drill is unaffected.', e); }
  return {layout, setLayout, renderAll};
})();

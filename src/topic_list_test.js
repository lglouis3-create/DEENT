/* ==========================================================================
   QUIZ LAYOUT "ALL ON ONE PAGE" (topic_list_ui.js): browser check
   ==========================================================================
   In Chromium at 390x844 (iPhone), 1032x1376 (iPad Pro 13 portrait) and
   1512x982 (MacBook): a topic drill switched to "All on one page" lists the
   drill's questions; a single-answer, a select-all and a matching item are
   answered in place; each answer is in the open profile's progress
   (DB.answers, its stored copy) and answer history (LOG, its stored copy) once,
   with its qid; a second profile's answers stay apart; Weak spots shows the
   miss; "Not sure" reaches the last answer only; "Hear the why" plays after an
   answer and the page stays where it was; Explain more and Back return to the
   same place; switching back to one at a time never asks an answered question
   again; no page error, no console error, no horizontal scroll.
   Run: NODE_PATH=$(npm root -g) node src/topic_list_test.js (after build.py).
   SHOTS=<dir> writes a screenshot per size.
   ========================================================================== */
const L = require('./check_lib');
const NAME = 'topic_list_test.js';
L.PAGE.need(NAME);
const SHOTS = process.env.SHOTS || '';
const SIZES = [['phone', 390, 844, true], ['ipad13', 1032, 1376, true], ['mbp', 1512, 982, false]];

(async () => {
  const {browser} = await L.launch(NAME, {args: ['--autoplay-policy=no-user-gesture-required']});
  for (const [label, width, height, touch] of SIZES) {
    const {ctx, page, errors} = await L.openFile(browser, {viewport: {width, height}, hasTouch: touch, isMobile: touch && width < 500});
    const cerr = [];
    page.on('console', m => { if (m.type() === 'error') cerr.push(m.text()); });
    const tag = s => `${label}: ${s}`;
    try { await page.evaluate(() => localStorage.removeItem(NS + ':quizLayout')); } catch (e) {}

    // the topic holding a matching item, started from its Topics card the way a tap does
    const topic = await page.evaluate(() => (TOPICS.find(t => { const p = poolFor(t.id, null).slice(0, 40);
      return p.some(q => q.type === 'match') && p.some(q => q.multi) && p.some(q => !q.multi && !q.type); }) || {}).id);
    L.check(!!topic, tag('a topic whose first 40 questions hold all three kinds'), topic);
    await page.evaluate(t => { show('topics'); startQuiz(t, null); }, topic);
    L.check(await page.evaluate(() => !!document.querySelector('#v-quiz > .tlbar [data-layout="all"]') && !!document.querySelector('#v-quiz .qcard')),
      tag('one at a time: the layout row sits above the drill\'s card'));
    const before = await page.evaluate(() => ({n: DB.answers.length, log: LOG.length, p: PROFILE}));
    await page.click('#v-quiz [data-layout="all"]');
    const shown = await page.evaluate(() => ({cards: document.querySelectorAll('#v-quiz .tlcard').length, pool: Q.pool.length,
      chips: document.querySelectorAll('#v-quiz .tljump button').length, stored: localStorage.getItem(NS + ':quizLayout'),
      held: ['L1-062', 'L2-015', 'L3-026', 'S3-081'].filter(id => document.querySelector(`#v-quiz [data-tlq="${id}"]`)).length,
      order: [...document.querySelectorAll('#v-quiz .tlcard')].map(c => c.dataset.tlq).join() ===
             QUESTIONS.filter(q => Q.pool.includes(q)).slice(0, 40).map(q => q.id).join()}));
    L.check(shown.cards === Math.min(40, shown.pool) && shown.chips === shown.cards && shown.order, tag('all on one page: every question of the drill in the bank\'s order, with its jump chip'), shown);
    L.check(shown.stored === 'all', tag('the choice is kept on this device'), shown.stored);
    L.check(shown.held === 0, tag('no held-out item is listed'));

    // single (answered wrong), select-all (right), matching (right)
    const ids = await page.evaluate(() => {
      const cards = [...document.querySelectorAll('#v-quiz .tlcard')].map(c => byId(c.dataset.tlq));
      return {single: (cards.find(q => (q.type || 'mc') === 'mc' && !q.multi) || {}).id,
              multi: (cards.find(q => q.multi) || {}).id, match: (cards.find(q => q.type === 'match') || {}).id};
    });
    L.check(ids.single && ids.multi && ids.match, tag('the page holds a single-answer, a select-all and a matching item'), ids);
    const sel = id => `#v-quiz .tlcard[data-tlq="${id}"]`;
    await page.evaluate(id => document.querySelector(`#v-quiz .tlcard[data-tlq="${id}"]`).scrollIntoView(), ids.single);
    const wrongOpt = await page.evaluate(id => byId(id).options.findIndex(o => !o.correct), ids.single);
    await page.click(`${sel(ids.single)} button.opt[data-o="${wrongOpt}"]`);
    const rightSet = await page.evaluate(id => correctSet(byId(id)), ids.multi);
    for (const i of rightSet) await page.click(`${sel(ids.multi)} button.opt[data-o="${i}"]`);
    await page.click(`${sel(ids.multi)} [data-tlcheck]`);
    const nPairs = await page.evaluate(id => byId(id).pairs.length, ids.match);
    for (let r = 0; r < nPairs; r++) await page.selectOption(`${sel(ids.match)} select[data-row="${r}"]`, String(r));
    await page.click(`${sel(ids.match)} [data-tlcheck]`);
    await page.waitForTimeout(400);   // the core's save runs on a 150 ms timer

    const rec = await page.evaluate(([ids, before]) => {
      const mine = DB.answers.slice(before.n), log = LOG.slice(before.log);
      const stored = JSON.parse(localStorage.getItem(keyFor(PROFILE))).answers.slice(before.n);
      const storedLog = JSON.parse(localStorage.getItem(logKey()));
      const count = id => mine.filter(a => a.qid === id).length;
      const lcount = id => log.filter(e => e[1] === cardCode(id)).length;
      return {qids: mine.map(a => a.qid), results: mine.map(a => a.result), counts: [ids.single, ids.multi, ids.match].map(count),
              logCounts: [ids.single, ids.multi, ids.match].map(lcount), stored: stored.map(a => a.qid),
              storedLogTail: storedLog.slice(-3).map(e => e[1]), codes: [ids.single, ids.multi, ids.match].map(cardCode),
              modes: log.map(e => e[3]), pairOk: (mine[2] || {}).pairOk, profile: PROFILE, multiPicked: (mine[1] || {}).picked};
    }, [ids, before]);
    L.check(rec.qids.join() === [ids.single, ids.multi, ids.match].join() && rec.results.join() === 'wrong,correct,correct',
      tag('the three answers are in DB.answers, in order, with their qid and result'), rec);
    L.check(rec.counts.every(n => n === 1) && rec.logCounts.every(n => n === 1), tag('each answer is recorded once, in progress and in the answer history'), rec);
    L.check(rec.stored.join() === rec.qids.join() && rec.storedLogTail.join() === rec.codes.join(), tag('the stored copies (progress and history) carry the same three answers'), rec);
    L.check(rec.modes.every(m => m === 'quiz') && Array.isArray(rec.pairOk) && rec.pairOk.every(Boolean) && rec.multiPicked.join() === rightSet.join(),
      tag('logged as a drill answer (mode quiz); matching keeps pairOk; select-all keeps its picks'), rec);
    // confidence: only on the card of the last answer
    const conf = await page.evaluate(([ids]) => ({
      match: !!document.querySelector(`#v-quiz .tlcard[data-tlq="${ids.match}"] [data-tlconf="shaky"]`),
      multi: !!document.querySelector(`#v-quiz .tlcard[data-tlq="${ids.multi}"] [data-tlconf]`),
      single: !!document.querySelector(`#v-quiz .tlcard[data-tlq="${ids.single}"] [data-tlconf]`),
      text: document.querySelector(`#v-quiz .tlcard[data-tlq="${ids.multi}"] .tlrec`).textContent}), [ids]);
    L.check(conf.match && !conf.multi && !conf.single && /Knew it/.test(conf.text), tag('the confidence buttons sit on the last answer\'s card only; an earlier card says how it was recorded'), conf);
    await page.click(`${sel(ids.match)} [data-tlconf="shaky"]`);
    L.check(await page.evaluate(() => DB.answers[DB.answers.length - 1].conf === 'shaky' && LOG[LOG.length - 1][5] === 'unsure'),
      tag('"Not sure" goes through the core\'s markShaky to the last answer'));
    const counts = await page.evaluate(() => document.getElementById('tlcount').textContent);
    L.check(/3 answered here · 2 right/.test(counts), tag('the count line'), counts);
    const chips = await page.evaluate(() => [...document.querySelectorAll('#v-quiz .tljump button.ok, #v-quiz .tljump button.bad')].length);
    L.check(chips === 3, tag('the jump chips mark the three answers'), chips);

    // Hear the why after an answer, the page staying where it is
    const why = await page.evaluate(() => {
      const r = document.querySelector('#v-quiz .tlcard .wyrow'); if (!r) return null;
      r.scrollIntoView({block: 'center'}); return {id: r.dataset.wy, y: window.scrollY};
    });
    if (why) {
      await page.click(`#v-quiz .wyrow[data-wy="${why.id}"] [data-wyplay]`);
      await page.waitForTimeout(300);
      const st = await page.evaluate(() => ({s: WHY_UI.state(), y: window.scrollY, box: !document.querySelector('#v-quiz .wyrow .wybox').hidden}));
      L.check(st.s && st.s.scope === 'all' && st.s.id === why.id && st.box, tag('"Hear the why" plays the answered card\'s why'), st);
      L.check(Math.abs(st.y - why.y) < 2, tag('the page stays where it was while the why plays'), [why.y, st.y]);
      await page.click(`#v-quiz .wyrow[data-wy="${why.id}"] [data-wyplay]`);
      L.check(await page.evaluate(() => !WHY_UI.state()), tag('a second tap stops it'));
    } else L.check(false, tag('an answered card offers "Hear the why"'), 'no .wyrow on an answered card (none of the three has a spoken why?)');

    // Explain more, then Back: the same place
    const jump = await page.evaluate(() => { const c = document.querySelector('#v-quiz .tlcard [data-jump]'); if (!c) return null; c.scrollIntoView({block: 'center'}); return window.scrollY; });
    if (jump !== null) {
      const mark = await page.evaluate(() => document.querySelector('#v-quiz .tlcard [data-jump]').closest('.tlcard').getBoundingClientRect().top);
      await page.click('#v-quiz .tlcard [data-jump]');
      await page.click('#backbtn');
      await page.waitForTimeout(300);
      const back = await page.evaluate(() => ({v: VIEW, y: window.scrollY, top: document.querySelector('#v-quiz .tlcard [data-jump]').closest('.tlcard').getBoundingClientRect().top, cards: document.querySelectorAll('#v-quiz .tlcard').length,
        revealed: document.querySelectorAll('#v-quiz .tlcard .why').length}));
      L.check(back.v === 'quiz' && Math.abs(back.y - jump) < 3 && Math.abs(back.top - mark) < 3 && back.revealed >= 3, tag('Explain more and Back return to the same place with the answers shown'), [jump, mark, back]);
    }

    // no horizontal scroll, at the top and after answering
    const wide = await page.evaluate(() => ({sw: document.documentElement.scrollWidth, w: window.innerWidth,
      over: [...document.querySelectorAll('#v-quiz *')].filter(e => e.getBoundingClientRect().right > window.innerWidth + 1).length}));
    L.check(wide.sw <= wide.w && wide.over === 0, tag('no horizontal scroll'), wide);
    if (SHOTS) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({path: `${SHOTS}/${label}-all-top.png`});
      await page.evaluate(id => document.querySelector(`#v-quiz .tlcard[data-tlq="${id}"]`).scrollIntoView(), ids.multi);
      await page.evaluate(() => window.scrollBy(0, -(typeof headerOffset === 'function' ? headerOffset() : 0)));
      await page.screenshot({path: `${SHOTS}/${label}-all-answered.png`});
    }

    // Weak spots shows the miss
    const gaps = await page.evaluate(id => { show('gaps'); const q = byId(id), s = DB.concepts[q.concept];
      return {wrong: s.wrong, box: s.box, text: document.getElementById('v-gaps').textContent.includes(q.stem.slice(0, 40)) ||
        document.getElementById('v-gaps').innerHTML.includes(q.concept)}; }, ids.single);
    L.check(gaps.wrong >= 1 && gaps.box === 0 && gaps.text, tag('Weak spots reflects the miss'), gaps);

    // back to one at a time: nothing answered on the page is asked again
    await page.evaluate(() => show('quiz'));
    await page.click('#v-quiz [data-layout="one"]');
    const one = await page.evaluate(() => {
      const done = Q.tlAllDone.slice(), seen = [];
      for (let k = 0; k < 12 && Q.current; k++) {
        seen.push(Q.current.id);
        Q.answered++; Q.lastId = Q.current.id; nextQuestion();
      }
      return {done, again: seen.filter(id => done.includes(id)), card: !!document.querySelector('#v-quiz > .qcard'), first: seen[0]};
    });
    L.check(one.card && one.again.length === 0, tag('one at a time again: no question answered on the page is asked again (12 drawn)'), one);

    // a second profile: its answers stay apart, and the first profile's drill comes back
    const a = await page.evaluate(() => ({p: PROFILE, n: DB.answers.length}));
    await page.evaluate(() => { useProfile('ProfileB'); startQuiz(QUESTIONS.find(q => q.type === 'match').topic, null); });
    await page.click('#v-quiz [data-layout="all"]');
    const bId = await page.evaluate(() => { const c = document.querySelector('#v-quiz .tlcard'); return c.dataset.tlq; });
    const bq = await page.evaluate(id => ({multi: !!byId(id).multi, match: byId(id).type === 'match', want: correctSet(byId(id))}), bId);
    if (bq.match) {
      const n = await page.evaluate(id => byId(id).pairs.length, bId);
      for (let r = 0; r < n; r++) await page.selectOption(`${sel(bId)} select[data-row="${r}"]`, String(r));
      await page.click(`${sel(bId)} [data-tlcheck]`);
    } else if (bq.multi) { for (const i of bq.want) await page.click(`${sel(bId)} button.opt[data-o="${i}"]`); await page.click(`${sel(bId)} [data-tlcheck]`); }
    else await page.click(`${sel(bId)} button.opt[data-o="${bq.want[0]}"]`);
    await page.waitForTimeout(400);
    const b = await page.evaluate(([ap, bId]) => ({p: PROFILE, n: DB.answers.length, last: DB.answers[DB.answers.length - 1].qid,
      storedB: JSON.parse(localStorage.getItem(keyFor('ProfileB'))).answers.map(x => x.qid),
      logB: JSON.parse(localStorage.getItem(NS + ':log:ProfileB')).map(e => e[1]),
      storedA: JSON.parse(localStorage.getItem(keyFor(ap))).answers.length, code: cardCode(bId)}), [a.p, bId]);
    L.check(b.p === 'ProfileB' && b.n === 1 && b.storedB.join() === bId && b.logB.join() === b.code && b.storedA === a.n,
      tag('a second profile records its own answer only; the first profile\'s store is unchanged'), {a, b});
    await page.evaluate(p => { useProfile(p); show('quiz'); }, a.p);
    const backA = await page.evaluate(() => ({p: PROFILE, n: DB.answers.length, q: !!Q, done: Q && Q.tlAllDone ? Q.tlAllDone.length : -1}));
    L.check(backA.p === a.p && backA.n === a.n && backA.q && backA.done === 3, tag('back on the first profile: its own drill and answers'), backA);

    L.check(!errors.length, tag('no page error'), errors);
    L.check(!cerr.length, tag('no console error'), cerr);
    await ctx.close();
  }
  await browser.close();
  L.finish(NAME);
})().catch(e => { console.log(`FAIL: ${NAME}: ${e && e.stack || e}`); process.exit(1); });

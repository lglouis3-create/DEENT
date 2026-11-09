/* ==========================================================================
   "SEE IT ON THE STRUCTURE" (exfig_ui.js): browser check
   ==========================================================================
   In Chromium at 390x844 (iPhone) and 1512x982 (MacBook), for S4-120 and five
   other figure questions (one select-all among them):
   - one at a time: no figure anywhere in the drill before the answer; after
     it, the figure under "The concept behind this", headed "See it on the
     structure", with the labels the data names (and for S4-120 the three
     "Yes" lines);
   - the figure scrolls sideways inside its own box, never the page; Enlarge
     opens it across the screen and Close (or Escape) puts it back;
   - All on one page: an unanswered card has no figure, an answered card has;
   - a running exam paper shows no figure; its review after submit does;
   - no page error, no console error, no horizontal page scroll.
   Run: NODE_PATH=$(npm root -g) node src/exfig_test.js (after build.py).
   SHOTS=<dir> writes screenshots (light; and dark with DARK=1).
   ========================================================================== */
const L = require('./check_lib');
const NAME = 'exfig_test.js';
L.PAGE.need(NAME);
const SHOTS = process.env.SHOTS || '';
const SIZES = [['phone', 390, 844, true], ['mbp', 1512, 982, false]];
const IDS = ['S4-120', 'S3-077', 'S4-032', 'S4-076', 'S3-101', 'S4-018'];

(async () => {
  const {browser} = await L.launch(NAME);
  for (const scheme of (process.env.DARK ? ['light', 'dark'] : ['light'])) for (const [label, width, height, touch] of SIZES) {
    const {page, errors} = await L.openFile(browser, {viewport: {width, height}, hasTouch: touch, isMobile: touch, colorScheme: scheme});
    const cerr = [];
    page.on('console', m => { if (m.type() === 'error') cerr.push(m.text()); });
    const tag = s => `${label}/${scheme}: ${s}`;
    try { await page.evaluate(() => localStorage.removeItem(NS + ':quizLayout')); } catch (e) {}
    const hscroll = () => page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);

    for (const id of IDS) {
      await page.evaluate(id => {
        show('topics');
        Q = {pool: [byId(id)], label: 'figure check', sweep: [id], i: 0, current: null, answered: 0, lastId: null,
             examMode: false, picked: null, revealed: false};
        nextQuestion(); show('quiz');
      }, id);
      const before = await page.evaluate(() => ({fig: !!document.querySelector('#v-quiz svg.xf, #v-quiz .xfwrap'), id: Q.current && Q.current.id}));
      L.check(before.id === id && !before.fig, tag(`${id}: no figure before the answer`), before);
      const q = await page.evaluate(id => ({multi: isMulti(byId(id)), right: correctSet ? correctSet(byId(id)) : [], wrong: byId(id).options.findIndex(o => !o.correct)}), id);
      if (q.multi) {
        for (const i of q.right) await page.click(`#v-quiz button.opt[data-o="${i}"]`);
        await page.click('#btnCheck');
      } else {
        await page.click(`#v-quiz button.opt[data-o="${q.wrong}"]`);
      }
      const after = await page.evaluate(id => {
        const w = document.querySelector('#v-quiz .why > .teach > .xfwrap');
        const want = EXFIG_DATA.figs[EXFIG_DATA.byQ[id]];
        const labels = [...(w ? w.querySelectorAll('svg.xf text.xl') : [])].map(t => t.textContent);
        const wantLabels = want.panels.flatMap(p => p.marks.map(m => m.label));
        const box = w && w.querySelector('.xfscroll'), svg = w && w.querySelector('svg.xf');
        return {there: !!w, head: w && w.querySelector('h5').textContent, inTeach: !!(w && w.closest('.teach') && w.closest('.teach').querySelector('h4').textContent === 'The concept behind this'),
                labelsOk: JSON.stringify([...labels].sort()) === JSON.stringify([...wantLabels].sort()), labels,
                yes: [...(w ? w.querySelectorAll('svg.xf text.xv.yes') : [])].length,
                boxW: box && box.clientWidth, svgW: svg && svg.getBoundingClientRect().width, scrolls: box && box.scrollWidth > box.clientWidth,
                oflow: box && getComputedStyle(box).overflowX};
      }, id);
      L.check(after.there && after.head === 'See it on the structure' && after.inTeach, tag(`${id}: after the answer, "See it on the structure" under "The concept behind this"`), after);
      L.check(after.labelsOk, tag(`${id}: the drawn labels are the data's labels`), after.labels);
      if (id === 'S4-120') L.check(after.yes >= 3, tag('S4-120: three "Yes" verdict lines (one per qualifying acid, wrapped lines counted)'), after.yes);
      L.check(after.oflow === 'auto' && (!after.scrolls || after.svgW > after.boxW), tag(`${id}: a wide figure scrolls inside its own box`), after);
      L.check(!(await hscroll()), tag(`${id}: no horizontal page scroll`));
      if (SHOTS) {
        await page.evaluate(() => document.querySelector('#v-quiz .xfwrap').scrollIntoView({block: 'start'}));
        await page.evaluate(() => window.scrollBy(0, -60));
        await page.screenshot({path: `${SHOTS}/${id}-${label}-${scheme}.png`});
      }
      if (id === IDS[0]) {
        await page.click('#v-quiz .xfwrap [data-go="big"]');
        const big = await page.evaluate(() => { const f = document.querySelector('#v-quiz figure.exfig'); const r = f.querySelector('svg.xf').getBoundingClientRect();
          return {big: f.classList.contains('big'), w: r.width, vw: innerWidth, btn: f.querySelector('[data-go="big"]').textContent}; });
        L.check(big.big && big.btn === 'Close' && big.w > big.vw * 0.6, tag('Enlarge shows the figure across the screen'), big);
        if (SHOTS) await page.screenshot({path: `${SHOTS}/${id}-${label}-${scheme}-enlarged.png`});
        await page.keyboard.press('Escape');
        L.check(await page.evaluate(() => !document.querySelector('figure.big') && !document.body.classList.contains('figbig')), tag('Escape puts it back'));
      }
    }

    // All on one page
    await page.evaluate(ids => {
      show('topics');
      Q = {pool: ids.map(byId), label: 'figure check', current: null, answered: 0, lastId: null, examMode: false, picked: null, revealed: false};
      nextQuestion(); show('quiz');
    }, IDS);
    await page.click('#v-quiz [data-layout="all"]');
    const pre = await page.evaluate(() => ({cards: document.querySelectorAll('#v-quiz .tlcard').length, figs: document.querySelectorAll('#v-quiz .tlcard svg.xf').length}));
    L.check(pre.cards >= 5 && pre.figs === 0, tag('all on one page: no figure on an unanswered card'), pre);
    const card = '#v-quiz .tlcard[data-tlq="S4-120"]';
    const wrong = await page.evaluate(() => byId('S4-120').options.findIndex(o => !o.correct));
    await page.evaluate(c => document.querySelector(c).scrollIntoView(), card);
    await page.click(`${card} button.opt[data-o="${wrong}"]`);
    const post = await page.evaluate(c => ({mine: !!document.querySelector(c + ' .teach .xfwrap svg.xf'), all: document.querySelectorAll('#v-quiz .tlcard svg.xf').length}), card);
    L.check(post.mine && post.all === 1, tag('all on one page: the answered card shows its figure, the others none'), post);
    L.check(!(await hscroll()), tag('all on one page: no horizontal page scroll'));
    if (SHOTS) {
      await page.evaluate(c => document.querySelector(c + ' .xfwrap').scrollIntoView({block: 'start'}), card);
      await page.evaluate(() => window.scrollBy(0, -60));
      await page.screenshot({path: `${SHOTS}/allonone-S4-120-${label}-${scheme}.png`});
    }
    await page.click('#v-quiz [data-layout="one"]');

    // exam paper: none while running; the review after submit shows them
    const ex = await page.evaluate(ids => {
      const qs = ids.map(byId);
      EX = {qs, i: 0, picks: qs.map(q => isMulti(q) ? [] : null), running: true, done: false, ends: Date.now() + 3600000,
            orders: qs.map(q => q.options.map((o, k) => k))};
      show('exam'); renderExamQ();
      const running = document.querySelectorAll('#v-exam svg.xf, #v-exam .xfwrap').length;
      EX.picks = qs.map(q => isMulti(q) ? correctSet(q) : q.options.findIndex(o => o.correct));
      EX.running = false; EX.done = true;
      renderExamResult();
      const cards = [...document.querySelectorAll('#v-exam > .qcard')];
      const r = {running, review: cards.map((c, i) => !!c.querySelector('.teach .xfwrap svg.xf') && c.querySelector('.xfwrap').dataset.xfq === qs[i].id)};
      EX = null;
      return r;
    }, IDS);
    L.check(ex.running === 0, tag('a running exam paper shows no figure'), ex.running);
    L.check(ex.review.length === IDS.length && ex.review.every(Boolean), tag('the review after submit shows each question\'s figure'), ex.review);
    await page.evaluate(() => show('topics'));

    L.check(!errors.length, tag('no page error'), errors.join(' | '));
    L.check(!cerr.length, tag('no console error'), cerr.join(' | '));
    await page.context().close();
  }
  await browser.close();
  L.finish(NAME);
})().catch(e => { console.error(e); process.exit(1); });

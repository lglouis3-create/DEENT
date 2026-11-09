/* ==========================================================================
   REACTION FIGURES BESIDE THE WHY, IN A BROWSER, PHAR 4346 DEENT (why_ui.js)
   --------------------------------------------------------------------------
   Opens the built page over HTTP at 390 x 844 and 1512 x 982 with a stand-in
   for the device voice, and for a tazarotene question (one picture) and a
   crisaborole question (a step-through, mapped to step 4) checks:
   - before answering there is no reaction figure and no "Show the reaction";
   - after answering, "Show the reaction" is collapsed under the explanation;
     opened, it shows the figure at the mapped step, with "Open in Guide";
   - "Hear the why" puts the figure in the why box: above the text on a phone,
     beside it on a wide screen; the collapsed copy hides meanwhile; the
     figure stays after the narration ends; Next steps the figure;
   - "Open in Guide" goes to the figure in the Guide;
   - a finished paper's review and the all-on-one-page cards get "Show the
     reaction" too (after the answer only);
   - no horizontal scroll, no script or console error.
   Screenshots to $WHYFIG_SHOTS when it is set.

     node whyfig_test.js        (after build.py)
   ========================================================================== */
const fs = require('fs'), path = require('path');
const L = require('./check_lib');
const NAME = 'whyfig_test.js';
const ROOT = path.join(__dirname, '..');
const SHOTS = process.env.WHYFIG_SHOTS || '';

if (!fs.existsSync(path.join(ROOT, 'index.html'))) L.notRun(NAME, 'no built index.html at the repository root (run build.py first)');
if (!/const WHY_FIGS = /.test(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'))) L.notRun(NAME, 'the built page has no why_figs.js');

/* a short silent WAV, served for any recorded clip (audio/*.mp3) the page asks for */
const wav = (() => {
  const n = 2400, b = Buffer.alloc(44 + n * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + n * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12); b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(8000, 24); b.writeUInt32LE(16000, 28); b.writeUInt16LE(2, 32);
  b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n * 2, 40); return b;
})();

function fakeVoice() {
  const q = []; let busy = false, timer = null;
  const S = {
    get speaking() { return busy; }, get pending() { return q.length > 0; }, paused: false,
    getVoices: () => [], addEventListener() {}, removeEventListener() {},
    speak(u) { q.push(u); if (!busy) next(); },
    cancel() { clearTimeout(timer); const all = q.splice(0); busy = false; all.forEach(u => u.onerror && u.onerror({error: 'canceled'})); },
    pause() {}, resume() {},
  };
  function next() {
    const u = q.shift(); if (!u) { busy = false; return; }
    busy = true; if (u.onstart) u.onstart({});
    timer = setTimeout(() => { busy = false; if (u.onend) u.onend({}); next(); }, window.__sayMs || 15);
  }
  Object.defineProperty(window, 'speechSynthesis', {value: S, configurable: true});
}

(async () => {
  const site = await L.serve(ROOT);
  const {browser} = await L.launch(NAME, {args: ['--autoplay-policy=no-user-gesture-required']});
  try {
    for (const [width, height] of [[390, 844], [1512, 982]]) {
      console.log(`\n=== ${width} x ${height} ===`);
      const tag = s => `${width}px: ${s}`;
      const ctx = await browser.newContext({viewport: {width, height}, serviceWorkers: 'block'});
      await ctx.addInitScript(fakeVoice);
      await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push('pageerror: ' + e.message));
      page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
      page.on('dialog', d => d.accept());
      await page.route('**/audio/*.mp3', r => r.fulfill({status: 200, contentType: 'audio/wav', body: wav}));
      await page.goto(site.url + 'index.html');
      await page.waitForFunction(() => typeof NS === 'string' && document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
      L.check(await page.evaluate(() => typeof WHY_FIGS === 'object' && !!WHY_UI && !!WHY_UI.figOf('S4-023')), tag('the map and the player are in the page'));
      const noScroll = () => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1);

      for (const [qid, fig, step] of [['S4-023', 'rx-tazarotene', 0], ['S3-021', 'rx-crisaborole', 4]]) {
        await page.evaluate(id => { if (typeof TOPIC_LIST_UI !== 'undefined' && TOPIC_LIST_UI && TOPIC_LIST_UI.layout() === 'all') TOPIC_LIST_UI.setLayout('one');
          drillList([QUESTIONS.find(q => q.id === id)], 'why figure test'); }, qid);
        await page.waitForSelector('#v-quiz .opt');
        const before = await page.evaluate(() => ({d: !!document.querySelector('#v-quiz .wyfigd'), v: !!document.querySelector('#v-quiz .wyvis'),
          rx: !!document.querySelector('#v-quiz svg.rx'), t: /Show the reaction/.test(document.getElementById('v-quiz').textContent)}));
        L.check(!before.d && !before.v && !before.rx && !before.t, tag(`${qid}: before answering, no reaction figure and no "Show the reaction"`), JSON.stringify(before));
        await page.click('#v-quiz .opt');
        await page.waitForSelector('#v-quiz .why');
        const after = await page.evaluate(() => { const d = document.querySelector('#v-quiz .why > .wyfigd');
          return d && {open: d.open, hidden: d.hidden, sum: d.querySelector('summary').textContent, f: d.querySelector('.wyvis').dataset.wyfig}; });
        L.check(after && !after.open && !after.hidden && after.sum === 'Show the reaction' && after.f === fig, tag(`${qid}: after answering, "Show the reaction" is collapsed under the explanation`), JSON.stringify(after));
        // a question that also has a marked structure (exfig_ui.js) keeps both: the structure in the explanation, then the reaction
        const xf = await page.evaluate(id => typeof EXFIG !== 'undefined' && !!EXFIG && EXFIG.has(id), qid);
        if (xf) {
          const both = await page.waitForFunction(() => { const w = document.querySelector('#v-quiz .why > .teach > .xfwrap'), d = document.querySelector('#v-quiz .why > .wyfigd');
            return !!(w && d && (w.compareDocumentPosition(d) & Node.DOCUMENT_POSITION_FOLLOWING)); }, null, {timeout: 5000}).then(() => true, () => false);
          L.check(both, tag(`${qid}: the marked structure stays in the explanation, with "Show the reaction" after it`));
        }
        await page.click('#v-quiz .wyfigd > summary');
        const open = await page.evaluate(() => { const d = document.querySelector('#v-quiz .wyfigd'), f = d.querySelector('figure.fig'), r = f.getBoundingClientRect();
          const st = [...f.querySelectorAll('.st')];
          return {w: r.width, h: r.height, on: st.findIndex(s => s.classList.contains('on')) + 1, n: st.length,
            guide: !!d.querySelector('[data-jump="guide:' + d.querySelector('.wyvis').dataset.wyfig + '"]'), cap: !!f.querySelector('figcaption')}; });
        L.check(open.w > 200 && open.h > 100 && open.guide && open.cap && (step ? open.on === step : open.n === 0),
          tag(`${qid}: opened, the figure shows${step ? ' at step ' + step : ''}, with its caption and "Open in Guide"`), JSON.stringify(open));
        L.check(await noScroll(), tag(`${qid}: no horizontal page scroll with the figure open`));
        if (SHOTS) await page.locator('#v-quiz .why').screenshot({path: path.join(SHOTS, `${width}-${qid}-show.png`)});

        const hasWhy = await page.evaluate(id => WHY_UI.has(id), qid);
        if (!hasWhy) { L.skip(tag(qid + ' Hear the why'), 'no spoken why'); continue; }
        await page.click('#v-quiz [data-wyplay]');
        const play = await page.evaluate(() => {
          const box = document.querySelector('#v-quiz .wybox'), v = box.querySelector('.wyvis'), t = box.querySelector('.wytx');
          const a = v && v.getBoundingClientRect(), b = t && t.getBoundingClientRect();
          return {playing: !!WHY_UI.state(), mode: WHY_UI.state() && WHY_UI.state().mode, box: !box.hidden, v: !!v, d: document.querySelector('#v-quiz .wyfigd').hidden,
            above: !!(a && b && a.bottom <= b.top + 1), beside: !!(a && b && a.right <= b.left + 1 && Math.abs(a.top - b.top) < 40), fw: a ? a.width : 0}; });
        L.check(play.playing && play.box && play.v && play.d, tag(`${qid}: Hear the why (${play.mode === 'clip' ? 'recorded clip' : 'device voice'}) shows the figure in the why box; the collapsed copy hides`), JSON.stringify(play));
        L.check(width < 900 ? play.above : play.beside, tag(`${qid}: the figure is ${width < 900 ? 'above' : 'beside'} the spoken text`), JSON.stringify(play));
        if (SHOTS) await page.locator('#v-quiz .wyrow').screenshot({path: path.join(SHOTS, `${width}-${qid}-hear.png`)});
        const ended = await page.waitForFunction(() => !WHY_UI.state(), null, {timeout: 20000}).then(() => true, () => false);
        const stay = await page.evaluate(() => { const box = document.querySelector('#v-quiz .wybox'); return !box.hidden && !!box.querySelector('.wyvis svg.rx'); });
        L.check(ended && stay, tag(`${qid}: the figure stays after the narration ends`));
        if (step) {
          await page.click('#v-quiz .wybox [data-go="-1"]');
          await page.waitForTimeout(900);
          const now = await page.evaluate(() => [...document.querySelectorAll('#v-quiz .wybox .st')].findIndex(s => s.classList.contains('on')) + 1);
          L.check(now === step - 1, tag(`${qid}: Back steps the figure in the why box (${step} to ${now})`));
        }
        L.check(await noScroll(), tag(`${qid}: no horizontal page scroll with the why box open`));
        if (qid === 'S4-023') {
          await page.click('#v-quiz .wybox [data-jump]');
          await page.waitForTimeout(1500);
          const g = await page.evaluate(f => ({v: VIEW, el: !!document.getElementById(f), top: document.getElementById(f) && document.getElementById(f).getBoundingClientRect().top}), fig);
          L.check(g.v === 'guide' && g.el && g.top < height, tag('"Open in Guide" goes to the figure in the Guide'), JSON.stringify(g));
        }
      }

      // a finished paper's review
      const rev = await page.evaluate(() => {
        const q = QUESTIONS.find(q => q.id === 'S4-023');
        EX = {qs: [q], i: 0, picks: [0], orders: [q.options.map((o, i) => i)], running: false, done: true};
        show('exam'); renderExamResult();
        const d = document.querySelector('#v-exam .qcard .wyfigd'); const r = !!d && !d.open;
        EX = null; return r; });
      L.check(rev, tag('a finished paper\'s review has "Show the reaction", collapsed'));

      // the all-on-one-page cards
      const tl = await page.evaluate(() => typeof TOPIC_LIST_UI !== 'undefined' && !!TOPIC_LIST_UI);
      if (!tl) L.skip(tag('all on one page'), 'topic_list_ui.js not in the page');
      else {
        await page.evaluate(() => { drillList(['S4-023', 'S3-014'].map(id => QUESTIONS.find(q => q.id === id)), 'why figure list'); TOPIC_LIST_UI.setLayout('all'); });
        await page.waitForSelector('#v-quiz .tlcard');
        const sel = id => `#v-quiz .tlcard[data-tlq="${id}"]`;
        const b0 = await page.evaluate(() => document.querySelectorAll('#v-quiz .wyfigd, #v-quiz svg.rx').length);
        L.check(b0 === 0, tag('all on one page: no reaction figure before answering'));
        await page.click(`${sel('S3-014')} button.opt`);
        await page.waitForSelector(`${sel('S3-014')} .why`);
        const a0 = await page.evaluate(s => { const d = document.querySelector(s + ' .why > .wyfigd');
          const st = d ? [...d.querySelectorAll('.st')].findIndex(x => x.classList.contains('on')) + 1 : 0;
          return {d: !!d, st, other: !!document.querySelector('#v-quiz .tlcard[data-tlq="S4-023"] .wyfigd')}; }, sel('S3-014'));
        L.check(a0.d && a0.st === 2 && !a0.other, tag('all on one page: the answered card gets "Show the reaction" (step 2), the unanswered one none'), JSON.stringify(a0));
        L.check(await noScroll(), tag('all on one page: no horizontal page scroll'));
        await page.evaluate(() => TOPIC_LIST_UI.setLayout('one'));
      }
      L.check(!errors.length, tag('no script or console error'), errors.slice(0, 4).join(' | '));
      await ctx.close();
    }
  } catch (e) { L.check(false, 'the test ran to the end', e.stack || e.message); }
  finally { await browser.close(); site.close && site.close(); }
  L.finish(NAME);
})();

/* ==========================================================================
   DRAWN-FIGURE NARRATION IN A BROWSER, PHAR 4346 DEENT (dianarr_ui.js)
   --------------------------------------------------------------------------
   Opens the built page (the repository root's index.html) over HTTP at 390x844
   and 1512x982, with audio/*.mp3 served as a short silent clip and a stand-in
   for the device voice, and checks:
   - every narrated figure in the Diagrams tab has one Listen button, and none
     is inside the walkthrough player;
   - Listen on one Dr. Smith figure (recorded) and one Dr. Sikazwe figure
     advances the steps with audio (clip or voice) and stops at the last step;
   - Pause holds the step, Resume goes on; Next stops the narration and leaves
     the figure on the step chosen; Listen and Stop do not move the figure;
   - Listen in the Enlarge view; a static figure's Listen;
   - no horizontal scroll, no page or console error.

     node dianarr_test.js        (after build.py)
   ========================================================================== */
const fs = require('fs'), path = require('path');
const L = require('./check_lib');
const NAME = 'dianarr_test.js';
const ROOT = path.join(__dirname, '..');

if (!fs.existsSync(path.join(ROOT, 'index.html'))) L.notRun(NAME, 'no built index.html at the repository root (run build.py first)');
if (!/const DIA_NARR_UI = /.test(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'))) L.notRun(NAME, 'the built page has no dianarr_ui.js');

const wav = (() => {   // 0.15 s of silence
  const n = 1200, b = Buffer.alloc(44 + n * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + n * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12); b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(8000, 24); b.writeUInt32LE(16000, 28); b.writeUInt16LE(2, 32);
  b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n * 2, 40); return b;
})();
function fakeVoice() {
  const q = []; let busy = false, timer = null;
  const S = {
    get speaking() { return busy; }, get pending() { return q.length > 0; }, paused: false,
    getVoices: () => [], addEventListener() {}, removeEventListener() {},
    speak(u) { q.push(u); window.__said = (window.__said || 0) + 1; if (!busy) next(); },
    cancel() { clearTimeout(timer); const all = q.splice(0); busy = false; all.forEach(u => u.onerror && u.onerror({error: 'canceled'})); },
    pause() {}, resume() {},
  };
  function next() {
    const u = q.shift(); if (!u) { busy = false; return; }
    busy = true; if (u.onstart) u.onstart({});
    timer = setTimeout(() => { busy = false; if (u.onend) u.onend({}); next(); }, window.__sayMs || 20);
  }
  Object.defineProperty(window, 'speechSynthesis', {value: S, configurable: true});
}

(async () => {
  const site = await L.serve(ROOT);
  const {browser} = await L.launch(NAME, {args: ['--autoplay-policy=no-user-gesture-required']});
  try {
    for (const [width, height] of [[390, 844], [1512, 982]]) {
      console.log(`\n=== ${width}x${height} ===`);
      const ctx = await browser.newContext({viewport: {width, height}, serviceWorkers: 'block'});
      await ctx.addInitScript(fakeVoice);
      await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; });
      const page = await ctx.newPage();
      const errors = [], hits = [];
      page.on('pageerror', e => errors.push('pageerror: ' + e.message));
      page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
      page.on('dialog', d => d.accept());
      await page.route('**/audio/*.mp3', r => { hits.push(r.request().url().split('/').pop()); r.fulfill({status: 200, contentType: 'audio/wav', body: wav}); });
      await page.goto(site.url + 'index.html');
      await page.waitForFunction(() => typeof NS === 'string' && document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
      const ok = await page.evaluate(() => !!(typeof DIA_NARR_UI !== 'undefined' && DIA_NARR_UI));
      if (!L.check(ok, 'the figure narration is in the page')) break;

      await page.evaluate(() => show('diagrams'));
      await page.waitForTimeout(400);
      const tally = await page.evaluate(() => {
        const figs = [...document.querySelectorAll('#v-diagrams figure.fig')];
        const keyed = figs.map(f => { const c = f.querySelector(':scope > [data-anim]'); return {k: c ? c.dataset.anim : null, n: f.querySelectorAll('[data-dnplay]').length}; });
        const want = keyed.filter(x => x.k && DIA_NARR[x.k]);
        return {figs: figs.length, want: want.length, one: want.filter(x => x.n === 1).length,
          stray: keyed.filter(x => x.k && !DIA_NARR[x.k] && x.n).length, inWalk: document.querySelectorAll('.wkpanel [data-dnplay]').length,
          statics: [...document.querySelectorAll('#v-diagrams .dnbar [data-dnplay]')].map(b => b.dataset.dnplay)};
      });
      L.check(tally.want > 0 && tally.one === tally.want && !tally.stray, `Diagrams tab: each of the ${tally.want} narrated step-throughs (of ${tally.figs} figures) has one Listen button, no other has one`);
      L.check(tally.inWalk === 0, 'no Listen button inside the walkthrough player');

      const run = async (key, label) => {
        const r = await page.evaluate(async key => {
          const ctl = document.querySelector(`#v-diagrams [data-anim="${key}"]`); if (!ctl) return {err: 'figure not shown: ' + key};
          const fig = ctl.closest('figure'); fig.scrollIntoView();
          const at = () => [...fig.querySelectorAll('svg .st')].findIndex(s => s.classList.contains('on'));
          const n = fig.querySelectorAll('svg .st').length;
          fig.querySelector('.sdot[data-i="0"]').click();
          const wait = (f, ms) => new Promise(res => { const t0 = Date.now(); (function p() { if (f() || Date.now() - t0 > ms) res(f()); else setTimeout(p, 30); })(); });
          const b = fig.querySelector('[data-dnplay]');
          b.click();
          const started = at() === 0 && b.getAttribute('aria-pressed') === 'true';
          const reached2 = await wait(() => at() >= 1, 8000);
          const seen = new Set([at()]);
          const done = await wait(() => { seen.add(at()); return !DIA_NARR_UI.playing(); }, 30000);
          return {n, started, reached2, done, last: at(), seen: seen.size, label: b.textContent.trim()};
        }, key);
        if (r.err) { L.check(false, label + ': ' + r.err); return; }
        L.check(r.started, `${label}: Listen starts on step 1 and shows as pressed`);
        L.check(r.reached2, `${label}: at the end of step 1 it moves to step 2`);
        L.check(r.done && r.last === r.n - 1, `${label}: it plays through to the last step (${r.last + 1} of ${r.n}) and stops`, JSON.stringify(r));
        L.check(r.label === '♪ Listen', `${label}: the button reads Listen again afterwards`, r.label);
      };
      const h0 = hits.length;
      await run('fig-ribosome', 'Dr. Smith, fig-ribosome');
      L.check(hits.slice(h0).filter(x => /^dn-fig-ribosome-\d\.mp3$/.test(x)).length >= 7, 'its recorded clips were played (dn-fig-ribosome-1..7)', hits.slice(h0).join(' '));
      const sik = await page.evaluate(() => ['fig-steroid', 'cb-mtx', 'rx-crisaborole'].find(k => DIA_NARR[k] && document.querySelector(`#v-diagrams [data-anim="${k}"]`)));
      if (sik) await run(sik, `Dr. Sikazwe, ${sik}`); else L.check(false, 'a Dr. Sikazwe figure with narration is in the Diagrams tab');

      // Pause, Resume, Next stops, Stop
      const ctlr = await page.evaluate(async () => {
        const wait = (f, ms) => new Promise(res => { const t0 = Date.now(); (function p() { if (f() || Date.now() - t0 > ms) res(f()); else setTimeout(p, 30); })(); });
        window.__sayMs = 600;
        const fig = document.querySelector('#v-diagrams [data-anim="fig-costim"]').closest('figure');
        const at = () => [...fig.querySelectorAll('svg .st')].findIndex(s => s.classList.contains('on'));
        fig.querySelector('.sdot[data-i="1"]').click();
        const b = fig.querySelector('[data-dnplay]'), stopB = fig.querySelector('[data-dnstop]');
        b.click();
        const fromCur = at() === 1 && !stopB.hidden;
        await new Promise(r => setTimeout(r, 100));
        b.click(); const paused = DIA_NARR_UI.playing() && DIA_NARR_UI.playing().paused && b.textContent.includes('Resume');
        await new Promise(r => setTimeout(r, 1500)); const held = at() === 1;
        b.click(); const resumed = DIA_NARR_UI.playing() && !DIA_NARR_UI.playing().paused;
        fig.querySelector('[data-go="1"]').click();
        const nextStops = !DIA_NARR_UI.playing() && at() === 2 && stopB.hidden;
        await new Promise(r => setTimeout(r, 1500)); const stays = at() === 2;
        b.click(); await new Promise(r => setTimeout(r, 50)); stopB.click();
        const stopped = !DIA_NARR_UI.playing() && at() === 2;
        // Enlarge: Listen there, Close leaves it playing
        fig.querySelector('[data-go="big"]').click();
        b.click(); const big = fig.classList.contains('big') && !!DIA_NARR_UI.playing();
        fig.querySelector('[data-go="big"]').click();
        const afterClose = !!DIA_NARR_UI.playing();
        DIA_NARR_UI.stop(); window.__sayMs = 20;
        return {fromCur, paused, held, resumed, nextStops, stays, stopped, big, afterClose};
      });
      L.check(ctlr.fromCur, 'Listen starts from the step shown (step 2) and Stop appears');
      L.check(ctlr.paused && ctlr.held, 'Pause holds the narration and the step');
      L.check(ctlr.resumed, 'Resume goes on');
      L.check(ctlr.nextStops && ctlr.stays, 'Next stops the narration and the figure stays on the step chosen');
      L.check(ctlr.stopped, 'Stop stops it and does not move the figure');
      L.check(ctlr.big && ctlr.afterClose, 'Listen works in the Enlarge view, and closing it does not stop the narration');

      // a static figure, wherever one with narration shows (Diagrams tab, else Guide)
      if (!(await page.evaluate(() => [...document.querySelectorAll('#v-diagrams .dnbar [data-dnplay]')].some(x => x.getClientRects().length)))) {
        await page.evaluate(() => show('guide')); await page.waitForTimeout(400);
        await page.evaluate(() => document.querySelectorAll('#v-guide details').forEach(d => { d.open = true; }));
      }
      const st = await page.evaluate(async () => {
        const wait = (f, ms) => new Promise(res => { const t0 = Date.now(); (function p() { if (f() || Date.now() - t0 > ms) res(f()); else setTimeout(p, 30); })(); });
        const b = [...document.querySelectorAll('.dnbar [data-dnplay]')].find(x => x.getClientRects().length); if (!b) return null;
        b.scrollIntoView(); b.click(); const on = !!DIA_NARR_UI.playing();
        const done = await wait(() => !DIA_NARR_UI.playing(), 15000);
        return {k: b.dataset.dnplay, on, done};
      });
      if (st) L.check(st.on && st.done, `a static figure (${st.k}): Listen plays its one step and stops`);
      else console.log('  (no static figure with narration shown in the Diagrams tab or the Guide)');

      // Guide: a Smith figure has Listen there too
      await page.evaluate(() => show('guide')); await page.waitForTimeout(400);
      const g = await page.evaluate(() => ({n: document.querySelectorAll('#v-guide [data-dnplay]').length,
        cni: !!document.querySelector('#v-guide [data-anim="fig-cni-nfat"] [data-dnplay]')}));
      L.check(g.n > 0 && g.cni, `Guide: Listen on the figures there (${g.n}), fig-cni-nfat among them`);

      for (const v of ['diagrams', 'guide']) {
        await page.evaluate(v => show(v), v); await page.waitForTimeout(250);
        const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        L.check(over <= 0, `${v}: no horizontal scroll`, `${over}px`);
      }
      const keyb = await page.evaluate(() => { const b = document.querySelector('#v-guide [data-dnplay]'); b.focus(); return document.activeElement === b && !!b.getAttribute('aria-label'); });
      L.check(keyb, 'Listen takes keyboard focus and has a label');
      L.check(!errors.length, 'no page or console error', errors.slice(0, 5).join(' | '));
      await ctx.close();
    }
  } finally { await browser.close(); site.close(); }
  L.finish(NAME);
})().catch(e => { console.error(e); process.exit(1); });

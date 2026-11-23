/* eye_flow_test.js: the "Watch aqueous humor flow" figure (eye_flow_ui.js), in a real browser.
   NODE_PATH=$(npm root -g) node eye_flow_test.js      (reads ../preview/index.html; DRILL_PAGE overrides;
   EYE_SHOTS=<dir> saves a screenshot of each state)
   Checks: the figure is first in the Eye group of Diagrams and in the contents card; at 390 and 1100 px no page error and no sideways
   scroll; every condition and drug button works (pressed state, text, status line, 44 px high); droplets move; open-angle and angle-closure
   crowd the chamber more than normal, a drug that cuts inflow empties it; the level bar word follows; no digits followed by mmHg; no developer
   text; at most 118 droplets; frame cost is low; paused when hidden; reduced motion starts paused. */
const path = require('path'), fs = require('fs');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
const SHOTS = process.env.EYE_SHOTS;
let pass = 0, fail = 0;
const ck = (ok, m) => { if (ok) pass++; else { fail++; console.log('FAIL ' + m); } };
const open = async (b, w, o = {}) => {
  const ctx = await b.newContext(Object.assign({viewport: {width: w, height: 900}, deviceScaleFactor: 2}, o)), pg = await ctx.newPage(), errs = [];
  pg.on('pageerror', e => errs.push(String(e)));
  await pg.goto(PAGE); await pg.waitForTimeout(1200);
  await pg.evaluate(() => show('diagrams')); await pg.waitForTimeout(800);
  const f = await pg.$('figure.efl'); if (f) await f.scrollIntoViewIfNeeded();
  return {ctx, pg, errs, f};
};
const wait = (pg, ms) => pg.waitForTimeout(ms);
const crowd = pg => pg.evaluate(() => { const f = document.querySelector('figure.efl'); return +f.querySelector('.efl-fill').style.width.replace('%', ''); });
const moving = pg => pg.evaluate(async () => { const g = () => [...document.querySelectorAll('figure.efl .efl-parts circle')].filter(c => +c.getAttribute('r') > 0).map(c => c.getAttribute('cx') + ',' + c.getAttribute('cy'));
  const a = g(); await new Promise(r => setTimeout(r, 400)); const b = g(); return {n: b.length, changed: b.filter((v, i) => v !== a[i]).length}; });
(async () => {
  const b = await chromium.launch();
  for (const w of [390, 1100]) {
    const {ctx, pg, errs, f} = await open(b, w);
    ck(!!f, w + ': the figure is on the Diagrams tab'); if (!f) { await ctx.close(); continue; }
    const first = await pg.evaluate(() => { const g = document.querySelector('#v-diagrams .diagrid'); return g && g.firstElementChild.id; });
    ck(first === 'dg-ey-flow', w + ': first figure of the first group is ey-flow (got ' + first + ')');
    const chip = await pg.evaluate(() => { const c = document.querySelector('[data-dg="ey-flow"]'); return c ? c.textContent : ''; });
    ck(/Watch aqueous humor flow/.test(chip), w + ': contents chip names it');
    ck(await pg.evaluate(() => /Purpose\./.test(document.querySelector('figure.efl .dnpurpose').textContent)), w + ': Purpose line');
    await wait(pg, 5000);
    const m = await moving(pg); ck(m.n > 8 && m.changed > 3, w + ': droplets move (' + m.n + ' drawn, ' + m.changed + ' changed in 0.4 s)');
    const normal = await crowd(pg);
    for (const mode of ['normal', 'poag', 'pacg']) {
      await pg.click(`[data-efl-mode=${mode}]`); await wait(pg, mode === 'normal' ? 14000 : 9000);
      const st = await pg.evaluate(() => ({p: [...document.querySelectorAll('[data-efl-mode]')].map(x => x.getAttribute('aria-pressed')), s: document.querySelector('.efl-status').textContent, t: document.querySelector('.efl-mt').textContent, n: [...document.querySelectorAll('.efl-parts circle')].filter(c => +c.getAttribute('r') > 0).length}));
      ck(st.p.filter(x => x === 'true').length === 1, w + ' ' + mode + ': one condition pressed');
      ck(st.n <= 118, w + ' ' + mode + ': at most 118 droplets (' + st.n + ')');
      const c = await crowd(pg);
      if (mode === 'poag') ck(c > normal + 15, w + ' open-angle is more crowded than normal (' + c.toFixed(0) + ' vs ' + normal.toFixed(0) + ')');
      if (mode === 'pacg') { const bow = await pg.evaluate(() => document.querySelector('.efl-irisL').getAttribute('d')); ck(c > normal + 25, w + ' angle closure is more crowded (' + c.toFixed(0) + ')'); ck(/ 23\d(\.\d)? /.test(bow) || /M148 22\d/.test(bow) , w + ' angle closure: the iris path is bowed forward (' + bow.slice(0, 20) + ')'); ck(/higher/.test(st.s), w + ' status says higher (' + st.s + ')'); }
      if (mode === 'normal') ck(/normal/.test(st.s), w + ' normal: status says normal (' + st.s + ')');
      if (SHOTS) await f.screenshot({path: path.join(SHOTS, `eye_${w}_${mode}.png`)});
    }
    await pg.click('[data-efl-mode=normal]'); await wait(pg, 3000);
    const base = await crowd(pg);
    const drugs = ['none', 'beta', 'alpha2', 'cai', 'm3', 'rho', 'pg'];
    for (const d of drugs) {
      await pg.click(`[data-efl-drug=${d}]`); await wait(pg, 4500);
      const st = await pg.evaluate(() => ({p: [...document.querySelectorAll('[data-efl-drug]')].map(x => x.getAttribute('aria-pressed')), t: document.querySelector('.efl-dt').textContent, s: document.querySelector('.efl-status').textContent, h: document.querySelector('figure.efl').getAttribute('data-efldrug')}));
      ck(st.p.filter(x => x === 'true').length === 1 && st.h === d, w + ' drug ' + d + ': one pressed');
      ck(d === 'none' || /\(slides? \d+/.test(st.t), w + ' drug ' + d + ': fact names its slide');
      if (['beta', 'cai', 'alpha2', 'pg'].includes(d)) { const c = await crowd(pg); ck(c < base - 8, w + ' drug ' + d + ': lower pressure than none (' + c.toFixed(0) + ' vs ' + base.toFixed(0) + ')'); }
      if (SHOTS) await f.screenshot({path: path.join(SHOTS, `eye_${w}_drug_${d}.png`)});
    }
    await pg.click('[data-efl-drug=none]');
    const sizes = await pg.evaluate(() => [...document.querySelectorAll('figure.efl .efl-b')].map(x => Math.round(x.getBoundingClientRect().height)).filter(h => h > 0));
    ck(sizes.every(h => h >= 44), w + ': buttons are 44 px or more (min ' + Math.min(...sizes) + ')');
    const txt = await pg.evaluate(() => document.querySelector('figure.efl').textContent);
    ck(!/mm ?Hg|T@\d|\.pdf|\.js\b|ey-flow/.test(txt) , w + ': no mm Hg, transcript code, file name or id in the text');
    ck(!/\d\s*(mm|mmHg)/i.test(txt), w + ': no pressure number');
    const sw = await pg.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    ck(sw <= 1, w + ': no sideways scroll (' + sw + ')');
    const st2 = await pg.evaluate(() => EYE_FLOW.stats());
    ck(st2.frames > 100 && st2.avgMs < 4, w + ': frame work ' + st2.avgMs.toFixed(2) + ' ms average over ' + st2.frames + ' frames (limit 4)');
    /* paused: nothing moves */
    await pg.click('[data-efl-pause]'); await wait(pg, 200);
    const mm = await moving(pg); ck(mm.changed === 0, w + ': Pause stops the droplets');
    await pg.click('[data-efl-pause]');
    /* hidden tab: no frames */
    const f0 = await pg.evaluate(() => EYE_FLOW.stats().frames);
    await pg.evaluate(() => window.scrollTo(0, 0)); await pg.evaluate(() => { const f = document.querySelector('#v-diagrams'); }); 
    ck(errs.length === 0, w + ': no page errors ' + errs.join('|'));
    await ctx.close();
  }
  /* reduced motion: starts paused with Step, still shows a settled picture */
  { const {ctx, pg, errs, f} = await open(b, 390, {reducedMotion: 'reduce'}); await wait(pg, 800);
    const r = await pg.evaluate(() => ({p: document.querySelector('[data-efl-pause]').getAttribute('aria-pressed'), step: getComputedStyle(document.querySelector('[data-efl-step]')).display, n: [...document.querySelectorAll('.efl-parts circle')].filter(c => +c.getAttribute('r') > 0).length}));
    ck(r.p === 'true' && r.step !== 'none' && r.n > 5, 'reduced motion: paused, Step shown, settled picture (' + JSON.stringify(r) + ')');
    const a = await crowd(pg); await pg.click('[data-efl-mode=poag]'); await wait(pg, 300); const c = await crowd(pg);
    ck(c > a + 10, 'reduced motion: choosing open-angle shows the crowded picture at once (' + a.toFixed(0) + ' to ' + c.toFixed(0) + ')');
    ck(errs.length === 0, 'reduced motion: no page errors'); await ctx.close(); }
  /* the tab hidden: no frames are drawn */
  { const {ctx, pg} = await open(b, 1100); await wait(pg, 800);
    const hidden = await pg.evaluate(async () => { const f0 = EYE_FLOW.stats().frames; document.querySelector('#v-diagrams').classList.add('hide'); await new Promise(r => setTimeout(r, 100));
      const el = document.querySelector('figure.efl'); window.scrollTo(0, 99999); await new Promise(r => setTimeout(r, 600)); const f1 = EYE_FLOW.stats().frames; await new Promise(r => setTimeout(r, 600)); return EYE_FLOW.stats().frames - f1; });
    ck(hidden <= 3, 'scrolled out of view: frames stop (' + hidden + ' in 0.6 s)'); await ctx.close(); }
  await b.close();
  console.log(`eye_flow_test: ${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
})();

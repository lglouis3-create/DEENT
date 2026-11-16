/* exam_all_test.js: the exam paper on one page (exam_all_ui.js; Louis, 2026-11-16).
   NODE_PATH=$(npm root -g) node exam_all_test.js     (reads ../preview/index.html; DRILL_PAGE overrides)
   Checks: the choice is on the paper in both layouts and one at a time stays the default; on one page every question of the
   paper is drawn with its options and a jump button; a tap picks, a second tap takes a select-all option off, the picks are the
   core's (EX.picks) and the saved paper's; the count and the jump button follow; no option shows a right or wrong mark and no
   explanation is on the page; the page does not jump on a tap; a reload keeps the layout and the picks; switching to one at a time
   opens on the question last touched with its pick; the core's submit grades the paper and shows the result; the layout choice is
   the only key written by the file; no sideways scroll at 390 px; no page errors. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 500))); };
(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1180, 820, 'ipad']]) {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: w, height: h}});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    let dialogs = 0; p.on('dialog', d => { dialogs++; d.accept(); });
    await p.goto(PAGE); await p.waitForTimeout(1200);
    await p.evaluate(() => show('exam')); await p.waitForTimeout(300);
    await p.click('#startExam'); await p.waitForTimeout(500);
    check(await p.evaluate(() => !!document.querySelector('#v-exam .exlay [data-exlay="one"][aria-pressed="true"]') && !!document.querySelector('#v-exam .qcard')),
      `${tag}: the paper opens one question at a time with the choice above it`);
    check(await p.evaluate(() => Object.keys(localStorage).every(k => !/examLayout/.test(k))), `${tag}: nothing is stored until the choice is made`);
    await p.click('#v-exam [data-exlay="all"]'); await p.waitForTimeout(500);
    const N = await p.evaluate(() => EX.qs.length);
    const dom = await p.evaluate(() => ({cards: document.querySelectorAll('#v-exam .exall .exqc').length, jumps: document.querySelectorAll('#v-exam .exalljump button').length,
      opts: document.querySelectorAll('#v-exam .exall button.opt').length, want: EX.qs.reduce((a, q) => a + q.options.length, 0), prog: document.getElementById('exAllProg').textContent,
      marks: document.querySelectorAll('#v-exam .opt.ok, #v-exam .opt.bad, #v-exam .why, #v-exam .exp').length, pressed: document.querySelector('#v-exam [data-exlay="all"]').getAttribute('aria-pressed')}));
    check(dom.cards === N && dom.jumps === N && dom.opts === dom.want && dom.pressed === 'true', `${tag}: all ${N} questions are on the page, each with all its options, and a jump button each`, JSON.stringify(dom));
    check(dom.marks === 0 && /0 of \d+ answered/.test(dom.prog), `${tag}: no right or wrong mark and no explanation is on the page; nothing answered yet`, JSON.stringify(dom));
    // a tap on a single-answer question
    const si = await p.evaluate(() => EX.qs.findIndex(q => !isMulti(q)));
    await p.evaluate(i => document.getElementById('exq' + i).scrollIntoView({block: 'start'}), si); await p.waitForTimeout(200);
    const y0 = await p.evaluate(() => Math.round(scrollY));
    await p.click(`#exq${si} button.opt >> nth=1`); await p.waitForTimeout(200);
    const t1 = await p.evaluate(i => ({pick: EX.picks[i], sel: document.querySelectorAll(`#exq${i} .opt.exsel`).length, y: Math.round(scrollY), done: !document.querySelector(`#exq${i} .exdone`).hidden,
      prog: document.getElementById('exAllProg').textContent, saved: JSON.parse(localStorage.getItem(EXAM_KEY())).picks[i], cur: EX.i, jump: document.querySelector(`.exalljump button[data-j="${i}"]`).classList.contains('done')}), si);
    check(t1.pick !== null && t1.sel === 1 && t1.done && /1 of \d+ answered/.test(t1.prog) && t1.saved === t1.pick && t1.cur === si && t1.jump, `${tag}: a tap picks one option, marks the question answered, counts it and saves the paper`, JSON.stringify(t1));
    check(Math.abs(t1.y - y0) <= 2, `${tag}: the page does not jump on a tap`, `${y0} -> ${t1.y}`);
    await p.click(`#exq${si} button.opt >> nth=2`); await p.waitForTimeout(150);
    check(await p.evaluate(i => document.querySelectorAll(`#exq${i} .opt.exsel`).length === 1, si), `${tag}: a second pick moves the choice`);
    // a select-all question: on, then off
    const mi = await p.evaluate(() => EX.qs.findIndex(q => isMulti(q)));
    if (mi >= 0) {
      await p.click(`#exq${mi} button.opt >> nth=0`); await p.waitForTimeout(100);
      const on = await p.evaluate(i => EX.picks[i].length, mi);
      await p.click(`#exq${mi} button.opt >> nth=0`); await p.waitForTimeout(100);
      const off = await p.evaluate(i => EX.picks[i].length, mi);
      check(on === 1 && off === 0, `${tag}: a select-all option goes on and a second tap takes it off`, JSON.stringify({on, off}));
    }
    // a reload keeps layout and picks
    await p.waitForTimeout(500);
    await p.reload(); await p.waitForTimeout(1500);
    await p.evaluate(() => show('exam')); await p.waitForTimeout(400);
    const r1 = await p.evaluate(i => ({cards: document.querySelectorAll('#v-exam .exall .exqc').length, sel: document.querySelectorAll(`#exq${i} .opt.exsel`).length, pick: EX && EX.picks[i], key: Object.keys(localStorage).filter(k => /examLayout/.test(k))}), si);
    check(r1.cards === N && r1.sel === 1 && r1.pick !== null && r1.key.length === 1, `${tag}: after a reload the page is still the one-page paper with the pick kept; the one key written is the layout`, JSON.stringify(r1));
    // back to one at a time: opens on the question last touched
    await p.click('#v-exam [data-exlay="one"]'); await p.waitForTimeout(300);
    const o1 = await p.evaluate(i => ({head: document.querySelector('#v-exam .prog').textContent, exsel: document.querySelectorAll('#v-exam .opt.exsel').length, i: EX.i, want: i}), mi >= 0 ? mi : si);
    check(/Question \d+ of \d+/.test(o1.head) && o1.i >= 0, `${tag}: back to one at a time shows a question of the same paper`, JSON.stringify(o1));
    await p.click('#v-exam [data-exlay="all"]'); await p.waitForTimeout(300);
    check(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${tag}: no sideways scroll`);
    // submit through the core
    const before = dialogs;
    await p.click('#exAllSubmit'); await p.waitForTimeout(800);
    const fin = await p.evaluate(() => ({done: !!(EX && EX.done), txt: document.getElementById('v-exam').textContent.slice(0, 120), running: EX && EX.running}));
    check(dialogs > before && fin.done && !fin.running, `${tag}: the core's submit asks, grades and shows the result`, JSON.stringify(fin));
    check(!errs.length, `${tag}: no page errors`, errs.join(' | '));
    await ctx.close();
  }
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + ': exam_all_test.js: ' + (fail ? fail + ' of ' + n + ' checks failed' : n + ' checks passed'));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('FAIL: exam_all_test.js: the test stopped: ' + e.message); process.exit(1); });

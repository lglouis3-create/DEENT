/* place_keep_test.js: the place survives the app being closed and opened again (place_keep.js).
   NODE_PATH=$(npm root -g) node place_keep_test.js   (reads ../preview/index.html; DRILL_PAGE overrides)
   A second page of one browser context has its own sessionStorage and shares localStorage: the case of a Home Screen
   app brought up again. Checks: the question and its answered state come back; a quiz of another profile does not;
   a copy older than 12 hours is not used; nothing is copied before there is a place; no page errors. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 400))); };
(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1180, 820, 'ipad']]) {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: w, height: h}});
    const open = async () => { const p = await ctx.newPage(); p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('dialog', d => d.accept()); await p.goto(PAGE); await p.waitForTimeout(1400); return p; };
    const info = p => p.evaluate(() => ({view: VIEW, q: Q && Q.current && Q.current.id, rev: Q && Q.revealed, label: Q && Q.label, pool: Q && Q.pool && Q.pool.length, key: NS + ':place:keep'}));
    const p1 = await open();
    check(await p1.evaluate(() => localStorage.getItem(NS + ':place:keep')) === null, `${tag}: nothing is copied before there is a place`);
    await p1.evaluate(() => startQuiz(TOPICS[0].id, null)); await p1.waitForTimeout(500);
    await p1.click('#v-quiz .qcard button.opt[data-o]'); await p1.waitForTimeout(150);
    const c = await p1.$('#btnCheck'); if (c) { await c.click(); await p1.waitForTimeout(250); }
    const a = await info(p1);
    await p1.evaluate(() => PLACE_KEEP.now());
    const kept = await p1.evaluate(k => !!localStorage.getItem(k), a.key);
    check(kept, `${tag}: the place is copied once there is one`);
    const p2 = await open();          // a new session of the same browser: no sessionStorage
    const b2 = await info(p2);
    check(b2.view === 'quiz' && b2.q === a.q && b2.rev === true && b2.label === a.label && b2.pool === a.pool, `${tag}: the app opened again is on the same question, answered, in the same set`, JSON.stringify({a, b2}));
    await p1.close(); await p2.close(); await new Promise(r => setTimeout(r, 400));   // an open page keeps copying its own place
    // a quiz of another profile is not brought back (the core's own check)
    const p3 = await ctx.newPage(); p3.on('pageerror', e => errs.push(e.message));
    await p3.goto(PAGE); await p3.waitForTimeout(300);
    await p3.evaluate(k => { const o = JSON.parse(localStorage.getItem(k)); o.p = 'someone-else'; localStorage.setItem(k, JSON.stringify(o)); sessionStorage.clear(); window.placeSave = () => {}; }, a.key);   // the page being left must not write its own place over the edited copy
    await p3.reload(); await p3.waitForTimeout(1400);
    check(await p3.evaluate(() => VIEW !== 'quiz' || !(Q && Q.current)), `${tag}: a place saved under another profile does not bring its quiz back`);
    // an old copy is not used
    const p4 = await ctx.newPage(); p4.on('pageerror', e => errs.push(e.message));
    await p4.goto(PAGE); await p4.waitForTimeout(300);
    await p4.evaluate(k => { const o = JSON.parse(localStorage.getItem(k)); o.at = Date.now() - 13 * 3600000; o.p = undefined; localStorage.setItem(k, JSON.stringify(o)); sessionStorage.clear(); window.placeSave = () => {}; }, a.key);
    await p4.reload(); await p4.waitForTimeout(1400);
    check(await p4.evaluate(() => VIEW === 'topics' && !(Q && Q.current)), `${tag}: a copy older than 12 hours is not used`);
    check(!errs.length, `${tag}: no page errors`, errs.join(' | '));
    await ctx.close();
  }
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + ': place_keep_test.js: ' + (fail ? fail + ' of ' + n + ' checks failed' : n + ' checks passed'));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('FAIL: place_keep_test.js: the test stopped: ' + e.message); process.exit(1); });

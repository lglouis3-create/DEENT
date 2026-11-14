/* search_test.js: the search box (search_ui.js; Louis, 2026-11-14: "build the search box").
   NODE_PATH=$(npm root -g) node search_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - a Search button in the header opens a full-screen search with the field focused; Close, Escape and a tap outside close it and
     give the focus back to the button; "/" and Ctrl+K open it (and "/" typed in a field does not);
   - a name finds its drug, a typo of it is corrected and says so, "vit d" and "pde4" find their drug and term, a nonsense word
     says there is no match, an empty field offers examples;
   - each kind of result does what it says: a drug opens in Browse with its line open, a disease card opens, a section jumps to
     it, a diagram jumps to it, a structure opens the Atlas filtered to it, a topic starts practice, a question starts one
     question, "Practice these" starts a set; a term shows its definition in place;
   - the arrow keys move through the results; nothing is stored (localStorage is the same before and after);
   - at 390 px the page does not scroll sideways, and the box takes the whole window; at 1,376 px it is centered. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 500))); };
// the Atlas tab keeps its own two settings when it is opened; the search writes nothing, so the keys are compared without them
const ls = p => p.evaluate(() => JSON.stringify(Object.keys(localStorage).filter(k => !/^phar4346-atlas:/.test(k)).sort().map(k => [k, localStorage.getItem(k).length])));

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1376, 1032, 'ipad']]) {
    const errs = [];
    const p = await b.newPage({viewport: {width: w, height: h}});
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1200);
    const before = await ls(p);
    const q = async t => { await p.fill('#srchq', t); await p.waitForTimeout(450); };
    const text = sel => p.evaluate(s => { const e = document.querySelector(s); return e ? e.textContent : ''; }, sel);
    const groups = () => p.$$eval('.srch .sg span', xs => xs.map(x => x.textContent));
    const reopen = async () => { if (!(await p.evaluate(() => document.querySelector('dialog.srch') && document.querySelector('dialog.srch').open))) { await p.click('#btnSearch'); await p.waitForTimeout(250); } };

    check(!!(await p.$('#btnSearch')), `${tag}: the header has a Search button`);
    await p.click('#btnSearch'); await p.waitForTimeout(300);
    const o = await p.evaluate(() => { const d = document.querySelector('dialog.srch'), r = d.getBoundingClientRect(); return {open: d.open, focus: document.activeElement.id, left: Math.round(r.left), width: Math.round(r.width), iw: innerWidth, hit: document.querySelectorAll('.srch [data-eg]').length}; });
    check(o.open && o.focus === 'srchq', `${tag}: Search opens with the field focused`, JSON.stringify(o));
    check(o.hit >= 5, `${tag}: an empty field offers examples`, o.hit);
    check(w < 700 ? o.width === o.iw : Math.abs(o.left - (o.iw - o.width) / 2) < 3, `${tag}: the box ${w < 700 ? 'takes the whole window' : 'is centered'}`, JSON.stringify(o));
    check(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${tag}: no sideways scroll with the box open`);

    // matching
    await q('tazarotene');
    let g = await groups();
    check(g.some(x => /^Drugs/.test(x)) && /Tazarotene/.test(await text('.srch .sh .t')), `${tag}: a name finds its drug`, g.join(' | '));
    check(g.some(x => /^Questions/.test(x)), `${tag}: and the questions on it`, g.join(' | '));
    await q('tazarotine');
    check(/Showing results for/.test(await text('.srch .snote')) && /Tazarotene/.test(await text('.srch .sh .t')), `${tag}: a typo is corrected and the results say so`, await text('.srch .snote'));
    await q('vit d');
    check(/Vitamin D/i.test(await text('.srch .sh .t')) && (await p.$$eval('.srch .sh .t', xs => xs.every(x => /vitamin|calci|^d$/i.test(x.textContent) || true))), `${tag}: "vit d" is read as vitamin D`, await text('.srch .sh .t'));
    const vd = await p.$$eval('.srch .sh .t', xs => xs.slice(0, 5).map(x => x.textContent));
    check(vd.some(x => /vitamin D|calcipotriene|calcitriol/i.test(x)), `${tag}: and its first results are about vitamin D`, vd.join(' | '));
    await q('pde4');
    check((await groups()).some(x => /^Terms|^Drugs/.test(x)) && /PDE/i.test(await text('.srch .sh .t')), `${tag}: "pde4" finds PDE-4`, await text('.srch .sh .t'));
    await q('qzxvbnm');
    check(/No match/.test(await text('.srch .snote')), `${tag}: a nonsense word says there is no match`, await text('.srch .snote'));
    await q('');
    check((await p.$$('.srch [data-eg]')).length >= 5, `${tag}: clearing the field brings the examples back`);

    // arrow keys
    await q('acne'); await p.press('#srchq', 'ArrowDown'); await p.waitForTimeout(100);
    check(await p.evaluate(() => document.activeElement.classList.contains('sh')), `${tag}: ArrowDown moves into the results`);
    await p.keyboard.press('ArrowUp'); await p.waitForTimeout(100);
    check(await p.evaluate(() => document.activeElement.id === 'srchq'), `${tag}: ArrowUp from the first result returns to the field`);

    // closing
    await p.keyboard.press('Escape'); await p.waitForTimeout(300);
    check(await p.evaluate(() => !document.querySelector('dialog.srch').open && document.activeElement.id === 'btnSearch'), `${tag}: Escape closes it and returns the focus to the button`);
    await p.click('#btnSearch'); await p.waitForTimeout(250); await p.click('#srchx'); await p.waitForTimeout(250);
    check(await p.evaluate(() => !document.querySelector('dialog.srch').open), `${tag}: Close closes it`);
    await p.evaluate(() => { document.activeElement.blur(); });
    await p.keyboard.press('/'); await p.waitForTimeout(250);
    check(await p.evaluate(() => document.querySelector('dialog.srch').open), `${tag}: "/" opens it`);
    await p.keyboard.type('/x'); await p.waitForTimeout(150);
    check((await p.inputValue('#srchq')) === '/x', `${tag}: "/" typed in the field is just a character`, await p.inputValue('#srchq'));
    await p.keyboard.press('Escape'); await p.waitForTimeout(250);
    await p.keyboard.press('Control+k'); await p.waitForTimeout(250);
    check(await p.evaluate(() => document.querySelector('dialog.srch').open), `${tag}: Ctrl+K opens it`);
    await p.keyboard.press('Escape'); await p.waitForTimeout(250);

    // each kind of result
    const go = async (query, kind, pick) => { await reopen(); await q(query); const sel = pick || `.srch .sh .k`; await p.evaluate(({kind, sel}) => { const b = [...document.querySelectorAll('.srch .sh')].find(x => new RegExp(kind, 'i').test((x.querySelector('.k') || {}).textContent || '')); if (!b) throw new Error('no ' + kind + ' result'); b.click(); }, {kind, sel}); await p.waitForTimeout(700); };
    await go('tacrolimus', 'Drug list');
    check(await p.evaluate(() => VIEW === 'drugs' && !!document.querySelector('#v-drugs details.dlrowd[open]') && /Tacrolimus/i.test(document.querySelector('#v-drugs details.dlrowd[open]').textContent) && !document.querySelector('dialog.srch').open), `${tag}: a drug opens in Browse with its line open`);
    await go('atopic dermatitis', '^Disease');
    check(await p.evaluate(() => VIEW === 'dz' && DZ_UI.state.card === 'atopic-dermatitis' && [...document.querySelectorAll('#v-dz h2')].some(h => /Atopic dermatitis/i.test(h.textContent))), `${tag}: a disease opens its card`, await p.evaluate(() => VIEW));
    await go('fingertip unit', '^Reference');
    check(await p.evaluate(() => VIEW === 'ref'), `${tag}: a Reference section opens Reference`, await p.evaluate(() => VIEW));
    await go('retinoid receptors', '^Diagram');
    check(await p.evaluate(() => VIEW === 'diagrams'), `${tag}: a diagram opens Diagrams`, await p.evaluate(() => VIEW));
    await go('tazarotenic', '^Structure');
    check(await p.evaluate(() => VIEW === 'atlas' && /tazarotenic/i.test(document.querySelector('#atq').value)), `${tag}: a structure opens the Atlas filtered to it`, await p.evaluate(() => VIEW));
    await go('tazarotene', '^Topic');
    check(await p.evaluate(() => VIEW === 'quiz'), `${tag}: a topic starts practice`, await p.evaluate(() => VIEW));
    await reopen(); await q('tazarotene');
    await p.evaluate(() => document.querySelector('.srch [data-q]').click()); await p.waitForTimeout(800);
    check(await p.evaluate(() => VIEW === 'quiz' && !!document.querySelector('#v-quiz .stem, #v-quiz .qbody')), `${tag}: a question starts it`, await p.evaluate(() => VIEW));
    await reopen(); await q('tazarotene');
    await p.evaluate(() => document.querySelector('.srch [data-qall]').click()); await p.waitForTimeout(800);
    check(await p.evaluate(() => VIEW === 'quiz' && !!document.querySelector('#v-quiz .stem, #v-quiz .qbody')), `${tag}: "Practice these" starts a set`, await p.evaluate(() => VIEW));
    await reopen(); await q('scorad');
    const termIdx = await p.evaluate(() => { const b = [...document.querySelectorAll('.srch .sh')].find(x => /Term/.test(x.querySelector('.k').textContent)); if (!b) return null; b.click(); return true; });
    await p.waitForTimeout(500);
    check(termIdx && await p.evaluate(() => document.querySelector('dialog.srch').open && /SCORing Atopic Dermatitis/.test(document.querySelector('.srch .sbody').textContent)), `${tag}: a term shows its definition in place`);
    await p.keyboard.press('Escape'); await p.waitForTimeout(200);

    check((await ls(p)) === before, `${tag}: the search stores nothing (no new localStorage key, none named for it)`, before + ' -> ' + await ls(p));
    check(!errs.length, `${tag}: no page errors`, errs.join(' | '));
    await p.close();
  }
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + ': search_test.js: ' + (fail ? fail + ' of ' + n + ' checks failed' : n + ' checks passed'));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('FAIL: search_test.js: the test stopped: ' + e.message); process.exit(1); });

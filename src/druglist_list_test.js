/* ==========================================================================
   DRUG LIST, SINGLE LIST VIEW (browser test; druglist_ui.js, druglist_dose.js)
   Opens the built page in Chromium at a phone, tablet and laptop size and checks
   the List view: it opens on the active exam; the search finds by generic name,
   brand, class and use and forgives a typing slip; the exam, area and frequency
   chips filter; a row shows the tag, dose and key point; an opened row shows its
   slide links; List | Quiz | Recall | Chart all draw; openDrug() opens a row; no
   sideways scroll, 44 px touch targets, no developer text, nothing stored.
     NODE_PATH=$(npm root -g) node druglist_list_test.js     (needs ../preview/index.html or DRILL_PAGE)
   ========================================================================== */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + detail)); };
(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [820, 1100, 'tablet'], [1280, 900, 'laptop']]) {
    const errs = [];
    const p = await b.newPage({viewport: {width: w, height: h}});
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1000);
    await p.evaluate(() => show('drugs')); await p.waitForTimeout(400);
    const q = (js, a) => p.evaluate(js, a);
    const rows = () => q(() => [...document.querySelectorAll('#v-drugs details.dlu')].map(r => r.dataset.id));
    const type = async v => { await q(v => { const i = document.getElementById('dluq'); i.value = v; i.dispatchEvent(new Event('input', {bubbles: true})); }, v); await p.waitForTimeout(150); };
    const click = async s => { await q(s => document.querySelector(s).click(), s); await p.waitForTimeout(250); };
    console.log(`=== ${tag} ${w}px ===`);
    check(await q(() => document.querySelector('#v-drugs [data-dl="mode"][aria-checked="true"]').textContent) === 'List', `${tag}: the tab opens on List`);
    check(await q(() => [...document.querySelectorAll('#v-drugs [data-dl="mode"]')].map(x => x.textContent).join('|')) === 'List|Quiz me|Recall|Chart', `${tag}: mode switch is List | Quiz me | Recall | Chart`);
    check(await q(() => document.querySelector('[data-dl="uexam"][aria-pressed="true"]').textContent) === 'Exam 3', `${tag}: the exam chip starts on the active exam (Exam 3)`);
    const all3 = await rows();
    check(all3.length > 50 && all3.includes('ey-timolol') && all3.includes('lx-saliva') && !all3.includes('tacrolimus'), `${tag}: Exam 3 lists eye, ear and mouth drugs, no skin drug`, String(all3.length));
    check(await q(() => document.documentElement.scrollWidth <= innerWidth + 1), `${tag}: no sideways scroll`);
    check(await q(() => { const bad = [...document.querySelectorAll('#v-drugs .dlu2 button.chip, #v-drugs .dlu2 .dlkb, #v-drugs .dlmodes button, #v-drugs details.dlu > summary')].filter(e => e.getBoundingClientRect().height < 43.5); return bad.length === 0; }), `${tag}: chips, tags, mode buttons and row heads are at least 44 px tall`);
    // search
    await type('timolol'); let r = await rows();
    check(r.includes('ey-timolol') && r.includes('ey-timolol-dorz') && r.includes('ey-timolol-brim'), `${tag}: "timolol" finds timolol and its two combinations`, r.join(','));
    await type('Lumigan'); r = await rows(); check(r.length === 1 && r[0] === 'ey-bimatoprost', `${tag}: a brand name finds the drug`, r.join(','));
    await type('timolul'); r = await rows(); check(r.includes('ey-timolol') && /showing results for/.test(await q(() => document.getElementById('dlcount').textContent)), `${tag}: a typing slip is forgiven and said so`, r.join(','));
    await type('beta-blocker'); r = await rows(); check(r.includes('ey-betaxolol') && !r.includes('ey-bimatoprost'), `${tag}: a class name finds its drugs`);
    await type('cold sore'); r = await rows(); check(r.includes('lx-docosanol'), `${tag}: a use finds the drug`);
    await type('zzzzqq'); check(/No drug matches/.test(await q(() => document.getElementById('dllist').textContent)), `${tag}: no match says so`);
    await type('');
    // chips
    await click('[data-dl="uarea"][data-k="ear"]'); r = await rows(); check(r.length === 3 && r.every(x => x.startsWith('lx-')), `${tag}: Ear chip lists the 3 ear products`, r.join(','));
    await click('[data-dl="uarea"][data-k="mouth"]'); r = await rows(); check(r.length >= 12 && r.includes('lx-docosanol'), `${tag}: Mouth chip lists the mouth products`, String(r.length));
    await click('[data-dl="ufreq"][data-k="bid"]'); r = await rows(); check(r.length === 3 && r.every(x => x.startsWith('lx-')), `${tag}: BID tag filters the mouth rows to the 3 desensitizing toothpastes given BID`, r.join(','));
    await click('[data-dl="ufreq"][data-k="bid"]');
    await click('[data-dl="uexam"][data-k="12"]'); r = await rows();
    check(r.length === 79 && r.includes('tacrolimus') && !r.includes('ey-timolol'), `${tag}: Exams 1–2 chip lists the 79 skin drugs`, String(r.length));
    check(await q(() => [...document.querySelectorAll('[data-dl="uarea"]')].map(x => x.dataset.k).join(',')) === ',sun,ad,acne,pso,ster', `${tag}: the area chips follow the exam`);
    await click('[data-dl="uexam"][data-k="all"]'); r = await rows(); check(r.length === 79 + 42 + 19, `${tag}: All lists skin, eye and Dr. Lam's extra drugs`, String(r.length));
    await click('[data-dl="uexam"][data-k="3"]'); await click('[data-dl="uarea"][data-k="gl"]');
    // row content
    const row = await q(() => { const r = document.querySelector('details.dlu[data-id="ey-latanoprost"]'); const g = s => (r.querySelector(s) || {}).textContent || ''; return {n: g('.dln'), rx: g('.dlrx'), tag: g('.dlfq'), dose: g('.dldo'), key: g('.dlpe'), cls: g('.dlcl')}; });
    check(/Latanoprost/.test(row.n) && /Xalatan/.test(row.n) && row.rx === 'Rx' && /Daily PM/.test(row.tag) && /evening/.test(row.dose) && /Refrigerate/.test(row.dose) && /pigmentation/.test(row.key) && /Prostaglandin/.test(row.cls), `${tag}: a row shows name+brands, Rx, class, tag, dose with storage, key point`, JSON.stringify(row));
    const nodose = await q(() => { const r = document.querySelector('details.dlu[data-id="ey-carbachol"]'); return r.querySelector('.dldo').textContent + '|' + r.querySelector('.dlfq').textContent; });
    check(/^Use: Glaucoma\|no frequency/.test(nodose), `${tag}: a drug the course gives no dose for shows its use, no dose and no tag`, nodose);
    // open row
    await q(() => { const r = document.querySelector('details.dlu[data-id="ey-latanoprost"]'); r.open = true; }); await p.waitForTimeout(500);
    const op = await q(() => { const r = document.querySelector('details.dlu[data-id="ey-latanoprost"]'); return {links: [...r.querySelectorAll('.dlf.f-dose .dlsrc')].map(x => x.textContent), a: r.querySelectorAll('.dlf.f-dose .slk').length, card: !!r.querySelector('.dlmore > .dlcard'), txt: r.textContent}; });
    check(op.links.join('|') === 'Lam Glaucoma slide 20|Lam Glaucoma slide 21|Lam Glaucoma slide 85' && op.card, `${tag}: an opened row names its slides and carries the chart card`, op.links.join('|'));
    check(op.a >= 3, `${tag}: the slide numbers in an opened row are links`, String(op.a));
    check(!/T@|ref-ey|ref-targets|\.pdf|\.js\b|ey-latanoprost/.test(op.txt), `${tag}: no developer text (T@ codes, ids, file names) in an opened row`);
    // modes
    for (const m of ['quiz', 'recall', 'chart', 'list']) {
      await click(`#v-drugs [data-dl="mode"][data-k="${m}"]`);
      const ok = await q(m => m === 'list' ? !!document.querySelector('#dluq') : m === 'chart' ? !!document.querySelector('#dlcq') : m === 'quiz' ? !!document.querySelector('.dlq') : !!document.querySelector('.dlrecall, .dlcard'), m);
      check(ok, `${tag}: ${m} mode draws`);
    }
    // openDrug (the search box calls it), for a skin drug and an eye drug
    await q(() => DRUGLIST_UI.openDrug('tacrolimus')); await p.waitForTimeout(300);
    check(await q(() => !!document.querySelector('details.dlu[data-id="tacrolimus"][open]') && document.querySelector('[data-dl="uexam"][aria-pressed="true"]').textContent.startsWith('Exams 1')), `${tag}: openDrug opens a skin drug's row on the skin exam chip`);
    await q(() => DRUGLIST_UI.openDrug('ey-timolol')); await p.waitForTimeout(300);
    check(await q(() => !!document.querySelector('details.dlu[data-id="ey-timolol"][open]') && !!document.querySelector('details.dlu[data-id="ey-timolol"] .dlmore')), `${tag}: openDrug opens an eye drug's row`);
    // a card button inside the list (Chart) works on that drug's own chart and returns
    await click('details.dlu[data-id="ey-timolol"] [data-dl="chart"]');
    check(await q(() => !!document.querySelector('#dlcview .dlcimg') || !!document.querySelector('#dlcview')), `${tag}: "See on the chart" from a list row opens the chart`);
    check(await q(() => document.documentElement.scrollWidth <= innerWidth + 1), `${tag}: no sideways scroll in the chart view`);
    check(!errs.length, `${tag}: no page errors`, errs.slice(0, 2).join(' / '));
    const ls = await q(() => Object.keys(localStorage).filter(k => /drugList/.test(k)).length + sessionStorage.length);
    check(ls <= 1, `${tag}: nothing but the list choice is stored`, String(ls));
    await p.close();
  }
  await b.close();
  console.log(fail ? `\nFAIL: druglist_list_test.js: ${fail} of ${n} checks failed` : `\nPASS: druglist_list_test.js: ${n} checks passed`);
  process.exit(fail ? 1 : 0);
})();

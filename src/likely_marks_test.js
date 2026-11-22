/* likely_marks_test.js: the stars of the reading tabs and "Starred only" (likely_marks_ui.js, likely_map.js; Louis, 2026-11-15)
   NODE_PATH=$(npm root -g) node likely_marks_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   At 390 and 1,180 px:
   - Guides, Reference, Tell apart, Diseases, Drug list and Glossary show a star at each starred target, in the numbers of the
     analysis (likely_map_source.json): 15 guide sections and 41 blocks (each block star on the h5 the analysis recorded), 8 reference
     sections, 22 tell-apart rows, 9 condition cards, 6 tell-apart sets, 8 pairs, 12 drug panels, 15 drug rows, 154 glossary terms;
   - a star is a button with an aria-label and aria-expanded; a tap shows its line (the level and the evidence), a second tap hides it;
     Enter and Space do the same from the keyboard;
   - "Starred only" (aria-pressed, 44 px high) hides what is not starred, shows the count, and shows everything again when it is
     off; with exam folders the folders that hold a star are open and the others are hidden; the Exam 2 Tell apart list keeps the
     starred comparisons; Diseases opens a starred card when the open one is not starred;
   - one line at the top of each tab says what the stars are;
   - nothing is stored; no page errors; no sideways scroll in any state. */
const path = require('path'), fs = require('fs');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
const SRC = JSON.parse(fs.readFileSync(path.join(__dirname, 'likely_map_source.json'), 'utf8'));
const N = t => Object.keys(SRC.tabs[t]).length;
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 500))); };
const ls = p => p.evaluate(() => JSON.stringify(Object.keys(localStorage).filter(k => !/:drugList$/.test(k)).sort().map(k => [k, localStorage.getItem(k).length])));   // :drugList is the Drug list's own remembered list (Dermatology or Eye), written when this test switches lists
const noScroll = p => p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1);

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1180, 820, 'ipad']]) {
    const errs = [];
    const p = await b.newPage({viewport: {width: w, height: h}});
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1200);
    const before = await ls(p);
    const go = async v => { await p.evaluate(v => document.querySelector('#nav button[data-v="' + v + '"]').click(), v); await p.waitForTimeout(700); };
    const count = (v, sel) => p.evaluate(([v, sel]) => document.querySelectorAll('#v-' + v + ' ' + sel).length, [v, sel]);
    const vis = (v, sel) => p.evaluate(([v, sel]) => [...document.querySelectorAll('#v-' + v + ' ' + sel)].filter(e => !e.closest('[data-lkh]')).length, [v, sel]);
    const text = sel => p.evaluate(s => { const e = document.querySelector(s); return e ? e.textContent.trim() : ''; }, sel);
    const mark = sel => p.evaluate(sel => { document.querySelectorAll('[data-tfirst]').forEach(e => e.removeAttribute('data-tfirst')); const all = [...document.querySelectorAll(sel)], vis = x => x.checkVisibility ? x.checkVisibility() : x.getClientRects().length; let e = all.find(vis);
      if (!e && all[0]) { for (let d = all[0].parentElement; d; d = d.parentElement) if (d.tagName === 'DETAILS') d.open = true; e = all.find(vis) || all[0]; }   /* when every star sits in a folded group (Exam 3 is the open folder and its Guides group is folded), unfold the first one's groups */
      if (e) e.setAttribute('data-tfirst', ''); return !!e; }, sel);
    const click1 = async sel => { await mark(sel); await p.evaluate(() => document.querySelector('[data-tfirst]').scrollIntoView({block: 'center'})); await p.click('[data-tfirst]'); };
    const only = async v => { await p.evaluate(v => document.querySelector('#v-' + v + ' .lkonly').click(), v); await p.waitForTimeout(600); };

    // ---------- Guides ----------
    await go('guide');
    check(/Stars mark what the professor stressed in lecture; tap a star for the reason\./.test(await text('#v-guide .lkleg')), `${tag}: Guides has the one-line legend`);
    check(await count('guide', 'section.gobj > h3 > .lkstar') === N('guide'), `${tag}: Guides: ${N('guide')} section stars`, await count('guide', 'section.gobj > h3 > .lkstar'));
    check(await count('guide', '.gpt > h5 > .lkstar, .gpt > .lkgrp > .lkstar') === N('guideBlock'), `${tag}: Guides: ${N('guideBlock')} block stars`, await count('guide', '.gpt > h5 > .lkstar, .gpt > .lkgrp > .lkstar'));
    // each block star sits on the h5 the analysis recorded
    const blk = await p.evaluate(() => { const out = {}; document.querySelectorAll('#v-guide section.gobj').forEach(s => s.querySelectorAll('.gpt').forEach((g, i) => {
      if (g.querySelector(':scope > h5 > .lkstar, :scope > .lkgrp > .lkstar')) { const h = g.querySelector(':scope > h5'); out[s.id + '#' + (i + 1)] = h ? h.textContent.replace(/★/g, '').replace(/\s+/g, ' ').trim() : ''; } })); return out; });
    const strip = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
    const wrong = Object.entries(SRC.tabs.guideBlock).filter(([id, e]) => strip(blk[id]) !== strip(e.h5)).map(([id]) => id);
    check(wrong.length === 0, `${tag}: each block star is on the block the analysis starred (h5 title matches)`, wrong.join(', '));
    // the first visible section star: label, expanded state, tap shows the line, a second tap hides it
    await mark('#v-guide section.gobj > h3 > .lkstar');
    const s0 = await p.evaluate(() => { const s = document.querySelector('[data-tfirst]'); return {label: s.getAttribute('aria-label'), exp: s.getAttribute('aria-expanded'), ctl: s.getAttribute('aria-controls'), txt: s.textContent, tag: s.tagName, w: s.getBoundingClientRect().width}; });
    check(s0.tag === 'BUTTON' && /^Likely on the exam: (likely|solid|strong) \(tap for why\)$/.test(s0.label) && s0.exp === 'false' && s0.txt === '\u2605', `${tag}: a star is a button with its aria-label and aria-expanded=false`, JSON.stringify(s0));
    await p.evaluate(() => document.querySelector('[data-tfirst]').scrollIntoView({block: 'center'}));
    await p.click('[data-tfirst]'); await p.waitForTimeout(150);
    let why = await p.evaluate(() => { const s = document.querySelector('[data-tfirst]'), w = document.getElementById(s.getAttribute('aria-controls')); return {exp: s.getAttribute('aria-expanded'), hidden: w.hidden, vis: w.getBoundingClientRect().height > 0, t: w.textContent}; });
    check(why.exp === 'true' && !why.hidden && why.vis && /^(Likely|Solid|Strong)\. .{10,}/.test(why.t), `${tag}: tapping a star shows its line (level and evidence)`, JSON.stringify(why));
    await p.click('[data-tfirst]'); await p.waitForTimeout(100);
    why = await p.evaluate(() => { const s = document.querySelector('[data-tfirst]'); return {exp: s.getAttribute('aria-expanded'), hidden: document.getElementById(s.getAttribute('aria-controls')).hidden}; });
    check(why.exp === 'false' && why.hidden, `${tag}: a second tap hides it`, JSON.stringify(why));
    // keyboard: focus, Enter opens, Space closes
    await p.focus('[data-tfirst]'); await p.keyboard.press('Enter'); await p.waitForTimeout(100);
    const k1 = await p.evaluate(() => document.querySelector('[data-tfirst]').getAttribute('aria-expanded'));
    await p.keyboard.press('Space'); await p.waitForTimeout(100);
    const k2 = await p.evaluate(() => document.querySelector('[data-tfirst]').getAttribute('aria-expanded'));
    check(k1 === 'true' && k2 === 'false', `${tag}: Enter opens a star's line and Space closes it`, k1 + ' ' + k2);
    // the tap target is 44 px
    const hit = await p.evaluate(() => { const s = document.querySelector('[data-tfirst]'); s.scrollIntoView({block: 'center'}); const r = s.getBoundingClientRect(); const cx = r.left + r.width / 2, cy = r.top + r.height / 2; return [[-20, 0], [20, 0], [0, -20], [0, 20]].map(([dx, dy]) => { const e = document.elementFromPoint(cx + dx, cy + dy); return e === s; }); });
    check(hit.filter(Boolean).length >= 4, `${tag}: a star's tap area reaches 20 px around it (44 px target)`, hit.join());
    check(s0.w >= 43.5, `${tag}: a star button is 44 px wide`, s0.w);
    check(await noScroll(p), `${tag}: Guides: no sideways scroll`);
    // starred only
    const ob = await p.evaluate(() => { const o = document.querySelector('#v-guide .lkonly'); return {p: o.getAttribute('aria-pressed'), h: o.getBoundingClientRect().height}; });
    check(ob.p === 'false' && ob.h >= 43.5, `${tag}: Guides: "Starred only" is a toggle button, off at first, 44 px high`, JSON.stringify(ob));
    const totalSecs = await count('guide', 'section.gobj'), totalBlks = await count('guide', '.gpt');
    await only('guide');
    const gs = await vis('guide', 'section.gobj'), gb = await vis('guide', '.gpt[data-lkstar]');
    const secIds = new Set([...Object.keys(SRC.tabs.guide), ...Object.keys(SRC.tabs.guideBlock).map(x => x.split('#')[0])]);
    check((await p.evaluate(() => document.querySelector('#v-guide .lkonly').getAttribute('aria-pressed'))) === 'true', `${tag}: Guides: pressing it sets aria-pressed`);
    check(gs === secIds.size && gb === N('guideBlock'), `${tag}: Guides, starred only: ${secIds.size} of ${totalSecs} sections (starred, or holding a starred block) and ${N('guideBlock')} starred blocks stay`, `${gs} sections, ${gb} blocks`);
    const hiddenUnstarred = await p.evaluate(() => [...document.querySelectorAll('#v-guide section.gobj:not([data-lkh])')].filter(s => s.querySelector('.gpt[data-lkstar]')).every(s => [...s.querySelectorAll('.gpt:not([data-lkstar])')].every(g => g.hasAttribute('data-lkh'))));
    check(hiddenUnstarred, `${tag}: Guides: unstarred blocks of those sections are hidden`);
    check(new RegExp('^Showing ' + secIds.size + ' of ' + totalSecs + ' sections and ' + N('guideBlock') + ' of ' + totalBlks + ' blocks\\.$').test(await text('#v-guide .lkcount')), `${tag}: Guides: the count says "Showing ${secIds.size} of ${totalSecs} sections and ${N('guideBlock')} of ${totalBlks} blocks."`, await text('#v-guide .lkcount'));
    const fo = await p.evaluate(() => [...document.querySelectorAll('#v-guide > details.rfold')].map(f => ({hidden: f.hasAttribute('data-lkh'), open: f.open, star: !!f.querySelector('.lkstar')})));
    check(fo.length >= 2 && fo.every(f => f.star ? (!f.hidden && f.open) : f.hidden), `${tag}: Guides, starred only: the folders that hold a star are open, the others hidden`, JSON.stringify(fo));
    check(await noScroll(p), `${tag}: Guides, starred only: no sideways scroll`);
    // a jump link to a hidden section is gone
    const navHidden = await p.evaluate(() => { const a = [...document.querySelectorAll('#v-guide .refnav a[href^="#"]')]; const hid = a.filter(x => { const t = document.getElementById(x.getAttribute('href').slice(1)); return t && t.closest('[data-lkh]'); }); return hid.length > 0 && hid.every(x => x.hasAttribute('data-lkh')); });
    check(navHidden, `${tag}: Guides, starred only: the "Jump to a section" links of hidden sections are hidden`);
    await only('guide');
    check(await vis('guide', 'section.gobj') === totalSecs && await vis('guide', '.gpt') === totalBlks && /starred section/.test(await text('#v-guide .lkcount')), `${tag}: Guides: switching it off shows every section and block again`, `${await vis('guide', 'section.gobj')}/${totalSecs}`);
    const fo2 = await p.evaluate(() => [...document.querySelectorAll('#v-guide > details.rfold')].every(f => !f.hasAttribute('data-lkh')));
    check(fo2, `${tag}: Guides: and every folder is back`);

    // ---------- Reference ----------
    await go('ref');
    check(await count('ref', 'h3[id] > .lkstar') === N('reference'), `${tag}: Reference: ${N('reference')} section stars`, await count('ref', 'h3[id] > .lkstar'));
    check(/Stars mark what the professor stressed/.test(await text('#v-ref .lkleg')), `${tag}: Reference has the legend`);
    const rt = await count('ref', 'h3[id]');
    await only('ref');
    check(await vis('ref', 'h3[id]') === N('reference') && new RegExp('^Showing ' + N('reference') + ' of ' + rt + ' sections\\.$').test(await text('#v-ref .lkcount')), `${tag}: Reference, starred only: ${N('reference')} of ${rt} sections, with the count`, `${await vis('ref', 'h3[id]')} ${await text('#v-ref .lkcount')}`);
    const rf = await p.evaluate(() => [...document.querySelectorAll('#v-ref > details.rfold')].map(f => ({hidden: f.hasAttribute('data-lkh'), open: f.open, star: !!f.querySelector('.lkstar')})));
    check(rf.every(f => f.star ? (!f.hidden && f.open) : f.hidden), `${tag}: Reference, starred only: folders with a star are open, the others hidden`, JSON.stringify(rf));
    const tbl = await p.evaluate(() => [...document.querySelectorAll('#v-ref .tscroll, #v-ref p.prose, #v-ref figure')].filter(e => !e.closest('[data-lkh]')).every(e => { const h = [...document.querySelectorAll('#v-ref h3[id]')].filter(x => x.compareDocumentPosition(e) & 4).pop(); return h && !h.closest('[data-lkh]'); }));
    check(tbl, `${tag}: Reference, starred only: nothing shown belongs to a hidden section`);
    check(await noScroll(p), `${tag}: Reference, starred only: no sideways scroll`);
    await only('ref');
    check(await vis('ref', 'h3[id]') === rt, `${tag}: Reference: off shows every section again`);

    // ---------- Tell apart ----------
    await go('tell');
    check(await count('tell', 'tbody tr > :first-child > .lkstar') === N('tell'), `${tag}: Tell apart: ${N('tell')} row stars`, await count('tell', 'tbody tr > :first-child > .lkstar'));
    check(/Stars mark what the professor stressed/.test(await text('#v-tell .lkleg')), `${tag}: Tell apart has the legend`);
    await p.evaluate(() => { const f = document.getElementById('rfold-tell-1'); if (f) f.open = true; }); await p.waitForTimeout(200);
    await click1('#v-tell tbody tr > :first-child > .lkstar'); await p.waitForTimeout(150);
    check(await p.evaluate(() => { const s = document.querySelector('[data-tfirst]'); const w = document.getElementById(s.getAttribute('aria-controls')); return !w.hidden && w.getBoundingClientRect().height > 0 && /^(Likely|Solid|Strong)\./.test(w.textContent); }), `${tag}: Tell apart: a row star shows its line in the cell`);
    const trAll = await p.evaluate(() => [...document.querySelectorAll('#v-tell tbody tr')].filter(t => t.firstElementChild.tagName !== 'TH').length);
    await only('tell');
    check(await p.evaluate(() => [...document.querySelectorAll('#v-tell tbody tr')].filter(t => !t.closest('[data-lkh]') && t.firstElementChild.tagName !== 'TH').length) === N('tell'), `${tag}: Tell apart, starred only: ${N('tell')} of ${trAll} rows stay`);
    check(new RegExp('^Showing ' + N('tell') + ' of ' + trAll + ' rows\\.$').test(await text('#v-tell .lkcount')), `${tag}: Tell apart: the count says "Showing ${N('tell')} of ${trAll} rows."`, await text('#v-tell .lkcount'));
    const tf = await p.evaluate(() => [...document.querySelectorAll('#v-tell > details.rfold')].map(f => ({hidden: f.hasAttribute('data-lkh'), open: f.open, star: !!f.querySelector('.lkstar'), list: !!f.querySelector('.rfdz')})));
    check(tf.some(f => f.star && !f.hidden && f.open), `${tag}: Tell apart, starred only: the folder with starred rows is open`, JSON.stringify(tf));
    const dzl = await p.evaluate(() => { const li = [...document.querySelectorAll('#v-tell .rfdz li')]; return {all: li.length, shown: li.filter(x => !x.hasAttribute('data-lkh')).length}; });
    const dzWant = await p.evaluate(keys => DZ.tell.filter(t => (t.exams || [2]).includes(2) && keys.includes(t.id)).length + 1, Object.keys(SRC.tabs.dzTell));
    check(dzl.all === 0 || dzl.shown === dzWant, `${tag}: Tell apart, starred only: the Exam 2 list keeps its ${dzWant - 1} starred comparisons and the pairs button`, JSON.stringify(dzl));
    check(await noScroll(p), `${tag}: Tell apart, starred only: no sideways scroll`);
    await only('tell');
    check(await p.evaluate(() => [...document.querySelectorAll('#v-tell tbody tr')].filter(t => t.closest('[data-lkh]')).length) === 0, `${tag}: Tell apart: off shows every row again`);

    // ---------- the exam chips of the starred view (Louis, 2026-11-21) ----------
    for (const [t, n] of [['guide', 'Guides'], ['ref', 'Reference'], ['tell', 'Tell apart']]) {
      await go(t);
      const nChips = await p.evaluate(t => document.querySelectorAll('#v-' + t + ' .lkbar [data-lkexam]').length, t);
      check(nChips === 4, `${tag}: ${n}: the starred view offers All exams, Exam 1, Exam 2 and Exam 3`, nChips);
      const res = {};
      for (const e of [1, 2, 3, 0]) {
        await p.click('#v-' + t + ' .lkbar [data-lkexam="' + e + '"]'); await p.waitForTimeout(150);
        res[e] = await p.evaluate(t => [...document.querySelectorAll('#v-' + t + ' > details.rfold')].map(f => !f.hasAttribute('data-lkh')), t);
      }
      check(res[1][0] && !res[1][1] && !res[1][2] && !res[2][0] && res[2][1] && !res[2][2] && !res[3][0] && !res[3][1] && res[3][2] && res[0].every(Boolean), `${n}: each exam chip shows only that exam's folder, All exams shows all three`, JSON.stringify(res));
      await only(t);
    }
    // ---------- Diseases ----------
    await go('dz');
    await p.click('#v-dz .dzexam [data-exam="0"]');   // the tab opens on the active exam; these checks count every exam
    check(/Stars mark what the professor stressed/.test(await text('#v-dz .lkleg')), `${tag}: Diseases has the legend`);
    check(await count('dz', '.dzpicker .lkpick') === N('dzCard'), `${tag}: Diseases: ${N('dzCard')} conditions carry a star in the picker`, await count('dz', '.dzpicker .lkpick'));
    check(await count('dz', '.dzcard .dzhead h2 > .lkstar') === 1, `${tag}: Diseases: the open card (atopic dermatitis) has its star`);
    await p.click('#v-dz .dzcard .dzhead h2 > .lkstar'); await p.waitForTimeout(150);
    check(await p.evaluate(() => { const s = document.querySelector('#v-dz .dzcard .lkstar'); const w = document.getElementById(s.getAttribute('aria-controls')); return !w.hidden && w.getBoundingClientRect().height > 0; }), `${tag}: Diseases: tapping the card star shows its line`);
    // open an unstarred card, then starred only: a starred card opens
    await p.evaluate(() => { const bt = [...document.querySelectorAll('#v-dz .dzpicker button[data-card]')].find(x => !x.querySelector('.lkpick')); bt.click(); });
    await p.waitForTimeout(400);
    await only('dz'); await p.waitForTimeout(400);
    const pk = await p.evaluate(() => ({shown: [...document.querySelectorAll('#v-dz .dzpicker button[data-card]')].filter(x => !x.hasAttribute('data-lkh')).length, card: (document.querySelector('#v-dz .dzcard') || {dataset: {}}).dataset.card, starred: !!document.querySelector('#v-dz .dzcard .dzhead h2 > .lkstar')}));
    check(pk.shown === N('dzCard') && pk.starred, `${tag}: Diseases, starred only: ${N('dzCard')} conditions in the picker; the open card is a starred one`, JSON.stringify(pk));
    const dzTotal = await p.evaluate(() => DZ.cards.length);
    check(new RegExp('^Showing ' + N('dzCard') + ' of ' + dzTotal + ' conditions\\.$').test(await text('#v-dz .lkcount')), `${tag}: Diseases: the count says "Showing ${N('dzCard')} of ${dzTotal} conditions."`, await text('#v-dz .lkcount'));
    // tell-apart sets and pairs
    await p.evaluate(() => document.querySelector('#v-dz .dzviews button[data-view="tell"]').click()); await p.waitForTimeout(400);
    check(await count('dz', 'section.dztell > h2 > .lkstar') === N('dzTell') && await vis('dz', 'section.dztell') === N('dzTell'), `${tag}: Diseases, Tell apart view: ${N('dzTell')} sets starred and shown`, `${await count('dz', 'section.dztell > h2 > .lkstar')}/${await vis('dz', 'section.dztell')}`);
    await p.evaluate(() => document.querySelector('#v-dz .dzviews button[data-view="pairs"]').click()); await p.waitForTimeout(400);
    check(await count('dz', 'section.dzpair > h3 > .lkstar') === N('dzPair') && await vis('dz', 'section.dzpair') === N('dzPair'), `${tag}: Diseases, pairs view: ${N('dzPair')} pairs starred and shown`, `${await count('dz', 'section.dzpair > h3 > .lkstar')}/${await vis('dz', 'section.dzpair')}`);
    check(await noScroll(p), `${tag}: Diseases, starred only: no sideways scroll`);
    // a drug panel
    await p.evaluate(() => document.querySelector('#v-dz .dzviews button[data-view="cards"]').click()); await p.waitForTimeout(300);
    await only('dz');
    const dz0 = await p.evaluate(() => { const d = DZ.drugs; const k = Object.keys(LIKELY_MAP.dzDrug)[0]; return {k, name: d[k].name}; });
    await p.evaluate(k => { const x = document.querySelector('#v-dz [data-drug="' + k + '"]'); if (x) x.click(); else { document.querySelector('#v-dz .dzdlg .body'); } }, dz0.k);
    await p.waitForTimeout(300);
    let panel = await p.evaluate(() => { const h = document.querySelector('#v-dz .dzdlg .body > h3'); return h ? {t: h.textContent, star: !!h.querySelector(':scope > .lkstar')} : null; });
    if (!panel) { // open the panel through the Diseases search
      await p.fill('#dzq', dz0.name.split(' ')[0]); await p.waitForTimeout(400);
      await p.evaluate(() => { const x = document.querySelector('#v-dz .dzres button[data-hit="drug"]'); if (x) x.click(); }); await p.waitForTimeout(300);
      panel = await p.evaluate(() => { const h = document.querySelector('#v-dz .dzdlg .body > h3'); return h ? {t: h.textContent, star: !!h.querySelector(':scope > .lkstar')} : null; });
    }
    check(panel && panel.star, `${tag}: Diseases: a starred drug panel (${dz0.name}) has its star`, JSON.stringify(panel));
    await p.evaluate(() => { const d = document.querySelector('#v-dz .dzdlg'); if (d.open) d.close(); });
    await only('dz');

    // ---------- Drug list ----------
    await go('drugs');
    await p.evaluate(() => { const b = [...document.querySelectorAll('#v-drugs [data-dl="list"]')].find(x => /^Dermatology/.test(x.textContent)); if (b && b.getAttribute('aria-checked') !== 'true') b.click(); }); await p.waitForTimeout(500);   // Exam 3: the Drug list opens on the Eye list; the stars of the reading tabs are the dermatology drug rows
    check(/Stars mark what the professor stressed/.test(await text('#v-drugs .lkleg')), `${tag}: Drug list has the legend`);
    await p.evaluate(() => document.querySelectorAll('#v-drugs details.dlgrp').forEach(g => { g.open = true; })); await p.waitForTimeout(200);
    check(await count('drugs', 'details.dlrowd .dln > .lkstar') === N('drug'), `${tag}: Drug list: ${N('drug')} drug rows carry a star`, await count('drugs', 'details.dlrowd .dln > .lkstar'));
    await click1('#v-drugs details.dlrowd .dln > .lkstar'); await p.waitForTimeout(150);
    check(await p.evaluate(() => { const s = document.querySelector('[data-tfirst]'); const w = document.getElementById(s.getAttribute('aria-controls')); const row = s.closest('details'); return !w.hidden && w.getBoundingClientRect().height > 0 && !row.open; }), `${tag}: Drug list: a star shows its line without opening the row`);
    const dRows = await count('drugs', 'details.dlrowd');
    await only('drugs');
    check(await vis('drugs', 'details.dlrowd') === N('drug') && new RegExp('^Showing ' + N('drug') + ' of ' + dRows + ' drugs\\.$').test(await text('#v-drugs .lkcount')), `${tag}: Drug list, starred only: ${N('drug')} of ${dRows} drugs, with the count`, `${await vis('drugs', 'details.dlrowd')} ${await text('#v-drugs .lkcount')}`);
    check(await p.evaluate(() => [...document.querySelectorAll('#v-drugs details.dlgrp')].every(g => g.hasAttribute('data-lkh') === ![...g.querySelectorAll('details.dlrowd')].some(r => !r.hasAttribute('data-lkh')))), `${tag}: Drug list, starred only: a category with no starred drug is hidden`);
    check(await noScroll(p), `${tag}: Drug list, starred only: no sideways scroll`);
    await only('drugs');
    check(await vis('drugs', 'details.dlrowd') === dRows, `${tag}: Drug list: off shows every drug again`);

    // ---------- Glossary ----------
    await go('gloss');
    await p.waitForFunction(() => document.querySelectorAll('#v-gloss li.gle').length >= 763, null, {timeout: 15000}).catch(() => {});
    await p.waitForTimeout(500);
    check(/Stars mark what the professor stressed/.test(await text('#v-gloss .lkleg')), `${tag}: Glossary has the legend`);
    check(await count('gloss', 'li.gle .glh > .lkstar') === N('gloss'), `${tag}: Glossary: ${N('gloss')} term stars`, await count('gloss', 'li.gle .glh > .lkstar'));
    check(!!(await p.$('#v-gloss .glf .lkonly')), `${tag}: Glossary: "Starred only" is in the filter row`);
    const gt = await count('gloss', 'li.gle');
    await click1('#v-gloss li.gle .glh > .lkstar'); await p.waitForTimeout(150);
    check(await p.evaluate(() => { const s = document.querySelector('[data-tfirst]'); const w = document.getElementById(s.getAttribute('aria-controls')); return !w.hidden && w.getBoundingClientRect().height > 0; }), `${tag}: Glossary: a star shows its line`);
    await only('gloss');
    await p.waitForTimeout(400);
    check(await vis('gloss', 'li.gle') === N('gloss') && new RegExp('^Showing ' + N('gloss') + ' of ' + gt + ' terms\\.$').test(await text('#v-gloss .lkcount')), `${tag}: Glossary, starred only: ${N('gloss')} of ${gt} terms, with the count`, `${await vis('gloss', 'li.gle')} ${await text('#v-gloss .lkcount')}`);
    check(await p.evaluate(() => [...document.querySelectorAll('#v-gloss li.gll')].every(l => { let n = l.nextElementSibling, any = false; while (n && !n.classList.contains('gll')) { if (n.classList.contains('gle') && !n.hasAttribute('data-lkh')) any = true; n = n.nextElementSibling; } return l.hasAttribute('data-lkh') === !any; })), `${tag}: Glossary, starred only: a letter heading with no term left is hidden`);
    // it composes with the glossary's own filter
    await p.evaluate(() => document.querySelector('#v-gloss [data-glf="e2"]').click()); await p.waitForTimeout(700);
    const e2 = await vis('gloss', 'li.gle');
    check(e2 > 0 && e2 < N('gloss') && (await p.evaluate(() => document.querySelector('#v-gloss .lkonly').getAttribute('aria-pressed'))) === 'true', `${tag}: Glossary: starred only works together with the Exam 2 filter (${e2} terms)`, e2);
    await p.evaluate(() => document.querySelector('#v-gloss [data-glf="all"]').click()); await p.waitForTimeout(600);
    check(await noScroll(p), `${tag}: Glossary, starred only: no sideways scroll`);
    await only('gloss'); await p.waitForTimeout(300);
    check(await vis('gloss', 'li.gle') === gt, `${tag}: Glossary: off shows every term again`);

    // ---------- all tabs ----------
    check((await ls(p)) === before, `${tag}: the stars store nothing (localStorage is the same)`, before + ' -> ' + await ls(p));
    check(!errs.length, `${tag}: no page errors`, errs.join(' | '));
    await p.close();
  }
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + ': likely_marks_test.js: ' + (fail ? fail + ' of ' + n + ' checks failed' : n + ' checks passed'));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('FAIL: likely_marks_test.js: the test stopped: ' + e.message); process.exit(1); });

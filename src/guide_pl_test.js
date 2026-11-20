/* guide_pl_test.js: Dr. Patel's slide-by-slide Guides sections (gobj-pl-*, guide_pl_css.js; Louis, 2026-11-15).
   NODE_PATH=$(npm root -g) node guide_pl_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - 83 sections (d1 7, d2 8, a 13, s 15, o 15, u 14, w 6, c 5), each deck's set in one closed group (details.gdetails)
     inside the Exam 2 folder of Guides, titled with its slide count;
   - every h5 names "slide N" of its own deck and N is a page of that deck (the page's slide parser);
   - every slide citation in the sections (h5, objective bar, g2-src, tables, notes) is a link (.slk): none is left as text;
   - a link opens the viewer on the right deck and page (12 links, all 7 decks, from a heading, a bar, a source line and a table);
   - search finds Aquaphor, hydroquinone and plaque psoriasis in these sections, and a result opens the closed group and lands on it;
   - no sideways scroll at 390 and 1,180 px; no page errors; no "triple bond" or "double bond" outside quotation marks. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 700))); };
const DECKS = {  // deck key -> [section id prefix, deck id of the slide parser, word the citation uses, number of sections]
  d1: ['gobj-pl-d1-', 'p5', 'Dermatitis', 7], d2: ['gobj-pl-d2-', 'p5', 'Dermatitis', 8], a: ['gobj-pl-a-', 'p6', 'Acne', 13], s: ['gobj-pl-s-', 'p7', 'Scaly', 15],
  o: ['gobj-pl-o-', 'p8o', 'Outdoor', 15], u: ['gobj-pl-u-', 'p8s', 'Sun Exposure', 14], w: ['gobj-pl-w-', 'p8w', 'Wound', 6], c: ['gobj-pl-c-', 'p8c', 'Warts', 5]};
const GROUP = {p5: 'gpl-p5', p6: 'gpl-p6', p7: 'gpl-p7', p8o: 'gpl-p8o', p8s: 'gpl-p8s', p8w: 'gpl-p8w', p8c: 'gpl-p8c'};

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1180, 820, 'tablet']]) {
    const errs = [];
    const p = await b.newPage({viewport: {width: w, height: h}});
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1200);
    await p.evaluate(() => show('guide')); await p.waitForTimeout(500);

    // structure
    const st = await p.evaluate(() => {
      const secs = [...document.querySelectorAll('#v-guide section.gobj[id^="gobj-pl-"]')];
      const groups = [...document.querySelectorAll('#v-guide details.gdetails[id^="gpl-"]')];
      return {ids: secs.map(s => s.id), groups: groups.map(g => ({id: g.id, open: g.open, title: g.querySelector(':scope > summary').textContent.trim(), n: g.querySelectorAll(':scope > section.gobj').length,
        blocks: g.querySelectorAll('.gpt').length, exam: ((g.closest('.rfold') || {}).dataset || {}).exam || '', foldOpen: g.closest('.rfold') ? g.closest('.rfold').open : null,
        deckHead: (() => { let e = g; while (e && !(e.matches && e.matches('h2.gdeck'))) e = e.previousElementSibling; return e ? e.id : ''; })()}))};
    });
    check(st.ids.length === 83, `${tag}: 83 sections in the Guides`, st.ids.length);
    const want = [].concat(...Object.values(DECKS).map(([pre, , , c]) => Array.from({length: c}, (_, i) => pre + (i + 1))));
    check(JSON.stringify(st.ids.slice().sort()) === JSON.stringify(want.slice().sort()), `${tag}: the ids are d1 1-7, d2 1-8, a 1-13, s 1-15, o 1-15, u 1-14, w 1-6, c 1-5`, st.ids.filter(i => !want.includes(i)).join(','));
    check(st.groups.length === 7 && Object.values(GROUP).every(g => st.groups.some(x => x.id === g)), `${tag}: seven groups, one per deck`, JSON.stringify(st.groups.map(g => g.id)));
    check(st.groups.every(g => !g.open), `${tag}: every group starts closed`);
    check(st.groups.every(g => /^Dr\. Patel: .+ slide by slide, what the lecture adds \(\d+ slides\)$/.test(g.title) && +g.title.match(/\((\d+) slides\)/)[1] >= g.blocks && g.blocks > 0), `${tag}: each group is titled with its deck's slide count (title, divider and Questions slides carry no block since 2026-11-19)`, st.groups.map(g => g.title + ' ' + g.blocks).join(' | '));
    check(st.groups.every(g => g.exam === '2' && /^gdeck-p/.test(g.deckHead)), `${tag}: each group is in the Exam 2 folder under its Patel deck`, JSON.stringify(st.groups.map(g => [g.exam, g.deckHead])));
    check(st.groups.every(g => g.deckHead === 'gdeck-' + g.id.slice(4)), `${tag}: and under its own deck heading`, JSON.stringify(st.groups.map(g => [g.id, g.deckHead])));
    check(st.groups.reduce((a, g) => a + g.n, 0) === 83, `${tag}: the groups hold the 83 sections`);

    // open every group; the page-level checks below read links the slide viewer made
    await p.evaluate(() => document.querySelectorAll('#v-guide details.gdetails').forEach(d => { d.open = true; }));
    await p.waitForTimeout(700);

    // headings
    const hd = await p.evaluate((D) => {
      const out = [], P = SLIDE_UI.parser;
      document.querySelectorAll('#v-guide section.gobj[id^="gobj-pl-"]').forEach(s => {
        const key = s.id.replace(/^gobj-pl-/, '').replace(/-\d+$/, ''), deck = D[key];
        s.querySelectorAll('.gpt').forEach(g => {
          const h5 = g.querySelector(':scope > h5'); if (!h5) { out.push({id: s.id, bad: 'no h5 first'}); return; }
          const m = h5.textContent.match(/slide (\d+)\)\s*$/), r = m ? P.resolve(deck[1], +m[1]) : null;
          const own = h5.textContent.indexOf('Patel ' + deck[2] + ' slide');
          if (!m || own < 0 || !r) out.push({id: s.id, bad: h5.textContent.slice(0, 90), has: !!m, own: own, r: !!r});
        });
      });
      return out;
    }, DECKS);
    check(hd.length === 0, `${tag}: every h5 names "slide N" of its own deck and N is a page of it`, JSON.stringify(hd.slice(0, 4)));

    // citations: none left as text
    const cit = await p.evaluate(() => {
      const words = 'Dermatitis|Acne|Scaly|Outdoor|Sun Exposure|Wound|Warts', left = [];
      let total = 0, links = 0;
      const secs = [...document.querySelectorAll('#v-guide section.gobj[id^="gobj-pl-"]')];
      secs.forEach(s => {
        links += s.querySelectorAll('.slk').length;
        // the section's text and, for each character, whether it sits inside a link
        let t = '', mask = [];
        const w = document.createTreeWalker(s, NodeFilter.SHOW_TEXT);
        for (let nd = w.nextNode(); nd; nd = w.nextNode()) {
          const lk = nd.parentElement.closest('.slk') ? 1 : 0;
          for (let i = 0; i < nd.nodeValue.length; i++) { t += nd.nodeValue[i]; mask.push(lk); }
        }
        for (const m of t.matchAll(new RegExp('Patel (?:' + words + ') slides?[ \\d,\u2013&;-]*(?:and \\d+)?', 'g'))) {
          total++;
          for (let i = m.index; i < m.index + m[0].length; i++)
            if (/\d/.test(t[i]) && !mask[i]) { left.push(s.id + ': ' + m[0].slice(0, 80)); break; }
        }
        // a bare run of numbers after a linked citation ("slide 7, 8, 9") is read too
        for (const m of t.matchAll(/slides? (\d+(?:(?:, | and |\u2013|&)\d+)*)/g)) {
          total++;
          for (let i = m.index; i < m.index + m[0].length; i++)
            if (/\d/.test(t[i]) && !mask[i]) { left.push(s.id + ' [bare]: ' + t.slice(Math.max(0, m.index - 30), m.index + m[0].length + 10)); break; }
        }
      });
      return {total, links, left, perSection: secs.filter(s => s.querySelectorAll('.slk').length === 0).map(s => s.id)};
    });
    check(cit.total > 500, `${tag}: ${cit.total} slide citations read in the sections`, cit.total);
    check(cit.left.length === 0, `${tag}: every one is a link (${cit.links} links); none left as text`, cit.left.slice(0, 6).join(' | '));
    check(cit.perSection.length === 0, `${tag}: every section has links`, cit.perSection.join(','));
    // each part of a section that cites: heading, objective bar, source spans, table cells have links
    const parts = await p.evaluate(() => {
      const r = {h5: 0, h5l: 0, bar: 0, barl: 0, src: 0, srcl: 0, td: 0, tdl: 0};
      document.querySelectorAll('#v-guide section.gobj[id^="gobj-pl-"]').forEach(s => {
        s.querySelectorAll('h5').forEach(e => { r.h5++; if (e.querySelector('.slk')) r.h5l++; });
        s.querySelectorAll('.gbar i').forEach(e => { r.bar++; if (e.querySelector('.slk')) r.barl++; });
        s.querySelectorAll('.g2-src').forEach(e => { if (/slide|Patel/.test(e.textContent)) { r.src++; if (e.querySelector('.slk')) r.srcl++; } });
        s.querySelectorAll('td,th').forEach(e => { if (/Patel \w+ slide/.test(e.textContent)) { r.td++; if (e.querySelector('.slk')) r.tdl++; } });
      });
      return r;
    });
    check(parts.h5 === parts.h5l && parts.bar === parts.barl && parts.src === parts.srcl && parts.td === parts.tdl, `${tag}: headings, objective bars, source spans and table cells are linked`, JSON.stringify(parts));

    // the viewer
    if (tag === 'tablet') {
      const picks = await p.evaluate(() => {
        const sel = {};
        const add = (deck, el, how) => { if (el && !sel[deck + how]) sel[deck + how] = {deck, how, id: el.closest('section').id, n: el.dataset.n, d: el.dataset.deck}; };
        document.querySelectorAll('#v-guide section.gobj[id^="gobj-pl-"]').forEach(s => {
          const key = s.id.replace(/^gobj-pl-/, '').replace(/-\d+$/, '');
          add(key, s.querySelector('h5 .slk'), 'h5'); add(key, s.querySelector('.gbar i .slk'), 'bar');
          add(key, s.querySelector('td .slk, th .slk'), 'td'); add(key, s.querySelector('.g2-src .slk'), 'src');
        });
        return Object.values(sel);
      });
      // 12 across all 7 decks: each deck's heading link, plus bar, source and table links where there are some
      const byDeck = {}; picks.forEach(x => { (byDeck[x.d] = byDeck[x.d] || []).push(x); });
      check(Object.keys(byDeck).length === 7, `${tag}: links reach all 7 decks`, Object.keys(byDeck).join(','));
      let chosen = []; Object.values(byDeck).forEach(a => { chosen.push(a.find(x => x.how === 'h5') || a[0]); });
      const extra = picks.filter(x => !chosen.includes(x) && (x.how === 'bar' || x.how === 'td' || x.how === 'src'));
      const seen = new Set(); extra.forEach(x => { if (chosen.length < 14 && !seen.has(x.how + x.d)) { seen.add(x.how + x.d); chosen.push(x); } });
      check(chosen.length >= 12, `${tag}: ${chosen.length} links chosen for the viewer`, chosen.length);
      let bad = [];
      for (const c of chosen) {
        const r = await p.evaluate(({id, how, d, n}) => {
          const s = document.getElementById(id);
          const sels = {h5: 'h5 .slk', bar: '.gbar i .slk', td: 'td .slk, th .slk', src: '.g2-src .slk'};
          const el = [...s.querySelectorAll(sels[how])].find(e => e.dataset.n === n && e.dataset.deck === d) || s.querySelector(sels[how]);
          el.scrollIntoView({block: 'center'}); el.click(); return true;
        }, c);
        let v = null;
        for (let t = 0; t < 40; t++) {
          await p.waitForTimeout(100);
          v = await p.evaluate(() => { const d = document.querySelector('dialog.slv'); if (!d || !d.open) return null; const i = d.querySelector('.slv-img'); return {deck: d.querySelector('.slv-deck').textContent, pos: d.querySelector('.slv-pos').textContent, src: i.getAttribute('src') || '', ok: i.complete && i.naturalWidth > 0}; });
          if (v && v.ok) break;
        }
        const exp = {deck: c.d, n: c.n}, page = String(c.n).padStart(2, '0');
        const good = v && v.ok && /Patel/.test(v.deck) && new RegExp('(^|/)' + exp.deck + '/' + page + '\\.webp').test(v.src) && new RegExp('(^|\\D)' + exp.n + '(\\D|$)').test(v.pos);
        if (!good) bad.push(JSON.stringify([c, v]));
        await p.evaluate(() => { const d = document.querySelector('dialog.slv'); if (d && d.open) d.querySelector('[data-slv=close]').click(); });
        await p.waitForTimeout(150);
      }
      check(bad.length === 0, `${tag}: each of the ${chosen.length} links opens the viewer on its deck and page`, bad.slice(0, 2).join(' || '));
    }

    // no triple bond / double bond outside quotation marks
    const bonds = await p.evaluate(() => {
      const out = [];
      document.querySelectorAll('#v-guide section.gobj[id^="gobj-pl-"]').forEach(s => {
        let t = s.textContent.replace(/\s+/g, ' ');
        t = t.replace(/\u201c[^\u201d]*\u201d/g, ' ').replace(/"[^"]*"/g, ' ');
        if (/triple bond|double bond/i.test(t)) out.push(s.id);
      });
      return out;
    });
    check(bonds.length === 0, `${tag}: no "triple bond" or "double bond" outside quotation marks`, bonds.join(','));

    // the transcript-only mark keeps its words and gains a title
    const to = await p.evaluate(() => { const e = [...document.querySelectorAll('#v-guide .g2-tonly')]; return {n: e.length, titled: e.filter(x => /transcript only/i.test(x.title)).length, text: e.every(x => /^Transcript-only, verify against slide$/.test(x.textContent.trim())), dotted: e[0] ? getComputedStyle(e[0]).textDecorationStyle : ''}; });
    check(to.n === 0 || (to.titled === to.n && to.dotted === 'dotted'), `${tag}: any transcript-only mark carries a title and a dotted underline`, JSON.stringify(to));
    check(await p.evaluate(() => !/verify against slide/i.test(document.getElementById('v-guide').textContent)), `${tag}: no "verify against slide" note is left on the page (removed 2026-11-19)`);
    check(await p.evaluate(() => !document.querySelector('#v-guide .g2-status')), `${tag}: no status-code line is left (Status A-E removed 2026-11-19)`);

    // layout
    const lay = await p.evaluate(() => {
      const wide = []; document.querySelectorAll('#v-guide details.gdetails section.gobj').forEach(s => { const r = s.getBoundingClientRect(); if (r.right > innerWidth + 1 || r.left < -1) wide.push(s.id); });
      const sm = [...document.querySelectorAll('#v-guide .gdetails > summary')].map(s => s.getBoundingClientRect().height);
      return {sw: document.documentElement.scrollWidth, iw: innerWidth, wide, minSum: Math.min(...sm)};
    });
    check(lay.sw <= lay.iw + 1 && !lay.wide.length, `${tag}: no sideways scroll with every group open (${lay.sw} <= ${lay.iw})`, JSON.stringify(lay));
    check(lay.minSum >= 44, `${tag}: group headers are at least 44 px high`, lay.minSum);

    // search
    await p.evaluate(() => document.querySelectorAll('#v-guide details.gdetails').forEach(d => { d.open = false; }));
    const found = await p.evaluate(() => {
      const o = {};
      const mine = e => { const el = document.getElementById(e.anchor), sec = el && el.closest('section'); return e.view === 'guide' && sec && /^gobj-pl-/.test(sec.id) ? sec.id : null; };
      const find = q => { const r = SEARCH_UI.search(q); return ((r && r.groups) || []).filter(x => x.type === 'sec').map(x => x.items).flat().map(mine).filter(Boolean); };
      for (const q of ['Aquaphor', 'hydroquinone', 'plaque psoriasis']) o[q] = find(q).length;
      o.h5 = find('Pathogenesis and drug mechanisms').filter(i => /^gobj-pl-a-/.test(i)).length;
      return o;
    });
    check(found.Aquaphor > 0 && found.hydroquinone > 0 && found['plaque psoriasis'] > 0 && found.h5 > 0, `${tag}: search finds Aquaphor, hydroquinone, plaque psoriasis and a slide title in these sections`, JSON.stringify(found));
    // a result opens the closed group and lands on the section
    await p.evaluate(() => { show('topics'); });
    await p.click('#btnSearch'); await p.waitForTimeout(250);
    await p.fill('#srchq', 'Pathogenesis and drug mechanisms'); await p.waitForTimeout(500);
    const clicked = await p.evaluate(() => {
      const rows = [...document.querySelectorAll('.srch .sh')];
      const r = rows.find(x => /^Guides/.test((x.querySelector('.k') || {}).textContent || '') && /Pathogenesis and drug mechanisms/i.test(x.textContent)
        && /Acne therapeutics|slide by slide|Dr\. Patel/i.test(x.textContent));
      if (!r) return rows.map(x => (x.querySelector('.k') || {}).textContent + ':' + x.textContent.slice(0, 50));
      r.click(); return true;
    });
    await p.waitForTimeout(900);
    const landed = await p.evaluate(() => { const d = document.getElementById('gpl-p6'); const sec = d && [...d.querySelectorAll('section.gobj')].find(s => s.getBoundingClientRect().height > 0);
      const vis = sec && sec.getBoundingClientRect(); return {view: VIEW, open: d && d.open, onScreen: !!vis && vis.height > 0 && vis.top < innerHeight + 2000}; });
    check(clicked === true && landed.view === 'guide' && landed.open === true, `${tag}: a search result opens the closed group around its section`, JSON.stringify([clicked, landed]));
    const fromGuide = await p.evaluate(() => { document.getElementById('gpl-p7').open = false; jump('guide', 'gobj-pl-s-8'); return null; });
    await p.waitForTimeout(800);
    const j = await p.evaluate(() => { const d = document.getElementById('gpl-p7'); const s = document.getElementById('gobj-pl-s-8'); const r = s.getBoundingClientRect(); return {open: d.open, vis: r.height > 0, top: Math.round(r.top)}; });
    check(j.open && j.vis, `${tag}: a jump to a section inside a closed group opens it`, JSON.stringify(j));

    check(errs.length === 0, `${tag}: no page errors`, errs.join(' | '));
    await p.close();
  }
  await b.close();
  console.log(`\n${fail ? 'FAIL' : 'PASS'}: ${n - fail} checks passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();

/* guide_sk_test.js: the 17 Dr. Sikazwe sections of the Guides (gobj-sk-1 .. gobj-sk-17), guide_drill_ui.js.
   NODE_PATH=$(npm root -g) node guide_sk_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - 17 sections exist in the Guides, in the Exam 1 folder, directly after gobj-mc-0;
   - each of Dr. Sikazwe's 42 assigned DPAW pages (7-9, 12, 15-23, 25-34, 43-55, 61-66) is the heading of exactly one block
     ("DPAW slide N"), and every "DPAW slide N" in the sections is one of the 42 and is a slide link on deck mc and page N;
   - six links are opened in the viewer (deck mc, right page);
   - every Practice id exists in QUESTIONS and its cite names the page; a click starts a drill of exactly those questions,
     the label starts "Dr. Sikazwe: ", Back returns to the Guides at the same scroll position; nothing starts in an exam;
   - the stars have the role img and the label; no sideways scroll at 390 and 1180 px; no page errors;
   - "triple bond" and "double bond" occur only inside quotation marks. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 600))); };
const PAGES = [7, 8, 9, 12, ...Array.from({length: 9}, (_, i) => 15 + i), ...Array.from({length: 10}, (_, i) => 25 + i),
  ...Array.from({length: 13}, (_, i) => 43 + i), ...Array.from({length: 6}, (_, i) => 61 + i)];
const IDS = Array.from({length: 17}, (_, i) => 'gobj-sk-' + (i + 1));

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[1180, 820, 'wide'], [390, 844, 'phone']]) {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: w, height: h}});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1000);
    await p.click('#nav button[data-v="guide"]'); await p.waitForTimeout(400);
    const openFolder = () => p.evaluate(() => { const s = document.getElementById('gobj-sk-1'); const d = s && s.closest('details.rfold'); if (d) d.open = true; return !!d; });
    check(await openFolder(), `${tag}: the sections sit in a folder`);
    await p.waitForTimeout(200);

    // placement
    const place = await p.evaluate(ids => {
      const secs = ids.map(id => document.getElementById(id));
      const f = secs[0] && secs[0].closest('details.rfold');
      const all = f ? [...f.querySelectorAll('section.gobj')].map(s => s.id) : [];
      const i0 = all.indexOf('gobj-mc-0');
      return {found: secs.filter(Boolean).length, sameFolder: secs.every(s => s && s.closest('details.rfold') === f),
        folder: f ? (f.querySelector('.rfname') || {}).textContent : '', afterMc0: all.slice(i0, i0 + 18).join(','), nextAfter: all[i0 + 18],
        h3: secs.map(s => s && s.querySelector('h3').textContent)};
    }, IDS);
    check(place.found === 17, `${tag}: 17 sections exist`, place.found);
    check(place.sameFolder && /Exam 1/.test(place.folder), `${tag}: all in the Exam 1 folder`, place.folder);
    check(place.afterMc0 === ['gobj-mc-0', ...IDS].join(','), `${tag}: directly after gobj-mc-0, in order`, place.afterMc0);
    check(place.h3.every(t => /^Dr\. Sikazwe, assigned slides/.test(t)), `${tag}: titles read like the other sections`, place.h3.join(' | '));

    // pages
    const pg = await p.evaluate(ids => {
      const heads = [];
      ids.forEach(id => document.querySelectorAll('#' + id + ' .gpt > h5:first-child').forEach(h => { const m = /DPAW slide (\d+)/.exec(h.textContent); heads.push(m ? +m[1] : null); }));
      const texts = [];
      ids.forEach(id => { const s = document.getElementById(id); const t = s.textContent; const re = /DPAW slide (\d+)/g; let m;
        while ((m = re.exec(t))) texts.push(+m[1]); });
      const links = [];
      ids.forEach(id => document.querySelectorAll('#' + id + ' .slk').forEach(l => links.push([l.dataset.deck, +l.dataset.n, l.dataset.to ? +l.dataset.to : null])));
      return {heads, texts, links};
    }, IDS);
    const count = {}; pg.heads.forEach(x => { count[x] = (count[x] || 0) + 1; });
    check(PAGES.length === 42, 'the page list has 42 pages');
    check(PAGES.every(x => count[x] === 1), `${tag}: each of the 42 assigned pages is one block heading`, JSON.stringify(PAGES.filter(x => count[x] !== 1)));
    check(pg.heads.length === 42 && pg.heads.every(x => PAGES.includes(x)), `${tag}: no other block heading (${pg.heads.length})`, JSON.stringify(pg.heads.filter(x => !PAGES.includes(x))));
    check(pg.texts.every(x => PAGES.includes(x)), `${tag}: every "DPAW slide N" is an assigned page`, JSON.stringify([...new Set(pg.texts.filter(x => !PAGES.includes(x)))]));
    const linked = new Set(); pg.links.forEach(([d, a, z]) => { if (d === 'mc') for (let k = a; k <= (z || a); k++) linked.add(k); });
    check(pg.texts.every(x => linked.has(x)), `${tag}: every "DPAW slide N" is a slide link on deck mc`, JSON.stringify([...new Set(pg.texts.filter(x => !linked.has(x)))]));
    check(pg.links.every(l => l[0] === 'mc'), `${tag}: every slide link in them is on deck mc`, JSON.stringify(pg.links.filter(l => l[0] !== 'mc')));

    // links open the viewer
    const six = [7, 20, 34, 47, 55, 66];
    for (const pgN of six) {
      const ok = await p.evaluate(async N => {
        const l = [...document.querySelectorAll('section[id^=gobj-sk-] .slk')].find(x => x.dataset.deck === 'mc' && +x.dataset.n === N);
        if (!l) return 'no link';
        l.scrollIntoView({block: 'center'}); l.click();
        await new Promise(r => setTimeout(r, 450));
        const d = document.querySelector('dialog.slv');
        const r = d && d.open ? [d.querySelector('.slv-deck').textContent, d.querySelector('.slv-pos').textContent] : null;
        if (d && d.open) { const x = d.querySelector('.slv-x'); x && x.click(); }
        await new Promise(r => setTimeout(r, 200));
        return r;
      }, pgN);
      check(Array.isArray(ok) && /DPAW/.test(ok[0]) && new RegExp('Page ' + pgN + ' of').test(ok[1]), `${tag}: link to page ${pgN} opens the viewer`, JSON.stringify(ok));
    }

    // questions
    const qs = await p.evaluate(ids => {
      const by = new Map(QUESTIONS.map(q => [q.id, q]));
      const out = [];
      ids.forEach(id => document.querySelectorAll('#' + id + ' [data-qids]').forEach(btn => {
        const lab = btn.dataset.qlabel, pgn = +/DPAW slide (\d+)/.exec(lab)[1];
        const list = btn.dataset.qids.split(/\s+/).filter(Boolean);
        const missing = list.filter(i => !by.has(i));
        const nocite = list.filter(i => { const q = by.get(i); if (!q) return false;
          const full = String(q.cite || ''); const pages = [];
          const segs = [full.split(';')[0]]; (full.match(/slides?\s+[\d,\s\u2013-]+/gi) || []).forEach(x => segs.push(x));
          segs.forEach(seg => (seg.match(/\d+\s*[\u2013-]\s*\d+|\d+/g) || []).forEach(t => { const r = t.split(/[\u2013-]/).map(Number); if (r.length === 2) for (let k = r[0]; k <= r[1]; k++) pages.push(k); else pages.push(r[0]); }));
          return !pages.includes(pgn); });
        out.push({sec: id, pgn, list: list.length, missing, nocite, label: lab, inBlock: !!btn.closest('.gpt h5 ~ *, .gpt') });
      }));
      return out;
    }, IDS);
    check(qs.length > 0 && qs.every(x => x.missing.length === 0), `${tag}: every Practice id exists (${qs.length} buttons)`, JSON.stringify(qs.filter(x => x.missing.length)));
    check(qs.every(x => x.nocite.length === 0), `${tag}: every question cite names its page`, JSON.stringify(qs.filter(x => x.nocite.length).map(x => [x.pgn, x.nocite])));
    check(PAGES.every(pn => qs.some(x => x.pgn === pn) || true), `${tag}: (info) pages with a Practice button: ${new Set(qs.map(x => x.pgn)).size} of 42`);

    // click a practice button, then Back
    const idx = await p.evaluate(() => [...document.querySelectorAll('section[id^=gobj-sk-] [data-qids]')].length);
    for (const k of [0, Math.floor(idx / 2), idx - 1]) {
      const pre = await p.evaluate(k => {
        const btn = document.querySelectorAll('section[id^=gobj-sk-] [data-qids]')[k];
        btn.scrollIntoView({block: 'center'});
        return {want: [...new Set(btn.dataset.qids.split(/\s+/).filter(Boolean))].sort().join(','), label: btn.dataset.qlabel};
      }, k);
      await p.waitForTimeout(250);
      const y0 = await p.evaluate(() => Math.round(scrollY));
      await p.evaluate(k => document.querySelectorAll('section[id^=gobj-sk-] [data-qids]')[k].click(), k);
      await p.waitForTimeout(500);
      const d = await p.evaluate(() => ({view: VIEW, pool: Q.pool.map(q => q.id).sort().join(','), label: Q.label, back: !!document.getElementById('backbtn')}));
      check(d.view === 'quiz' && d.pool === pre.want && d.label === 'Dr. Sikazwe: ' + pre.label && d.back, `${tag}: Practice button ${k} starts a drill of its ids`, JSON.stringify({view: d.view, label: d.label, same: d.pool === pre.want}));
      await p.click('#backbtn'); await p.waitForTimeout(500);
      const e = await p.evaluate(() => ({view: VIEW, y: Math.round(scrollY), open: !!(document.getElementById('gobj-sk-1').closest('details.rfold') || {}).open}));
      check(e.view === 'guide' && Math.abs(e.y - y0) <= 2 && e.open, `${tag}: Back returns to the Guides at the same place`, JSON.stringify({e, y0}));
    }
    // not during an exam; empty and unknown ids do nothing
    const guard = await p.evaluate(() => {
      const before = typeof RET !== 'undefined' ? RET.length : -1;
      const mk = ids => { const b = document.createElement('button'); b.type = 'button'; b.setAttribute('data-qids', ids); b.setAttribute('data-qlabel', 'x'); document.body.appendChild(b); b.click(); b.remove(); };
      const v0 = VIEW;
      mk(''); mk('NOPE-1 NOPE-2');
      const afterEmpty = RET.length, v1 = VIEW;
      const saved = Q.examMode; Q.examMode = true; const lab = Q.label;
      mk('S3-072'); const same = Q.label === lab && RET.length === afterEmpty;
      Q.examMode = saved;
      return {emptyNothing: afterEmpty === before && v0 === v1, examNothing: same};
    });
    check(guard.emptyNothing, `${tag}: empty and unknown id lists do nothing`);
    check(guard.examNothing, `${tag}: nothing starts while an exam is running`);
    await p.evaluate(() => show('guide')); await p.waitForTimeout(300);

    // stars, quotes, sideways scroll
    const misc = await p.evaluate(ids => {
      const stars = [...document.querySelectorAll('section[id^=gobj-sk-] .g2-star')];
      const bad = [];
      ids.forEach(id => document.querySelectorAll('#' + id + ' p, #' + id + ' td, #' + id + ' li, #' + id + ' th').forEach(el => {
        const t = el.textContent; const re = /(triple|double) bond/gi; let m;
        while ((m = re.exec(t))) { const before = t.slice(0, m.index); const open = (before.match(/“/g) || []).length - (before.match(/”/g) || []).length;
          if (open <= 0) bad.push(t.slice(Math.max(0, m.index - 40), m.index + 30)); }
      }));
      const de = document.documentElement;
      return {stars: stars.length, role: stars.every(s => s.getAttribute('role') === 'img' && /Likely on the exam/.test(s.getAttribute('aria-label'))),
        color: stars[0] && getComputedStyle(stars[0]).color, text: stars[0] && stars[0].textContent, bad, side: de.scrollWidth - de.clientWidth};
    }, IDS);
    check(misc.stars > 0 && misc.role && misc.text === '★', `${tag}: ${misc.stars} stars show a star and say "Likely on the exam"`);
    check(misc.bad.length === 0, `${tag}: "triple bond" and "double bond" only inside quotation marks`, JSON.stringify(misc.bad));
    check(misc.side <= 0, `${tag}: no sideways scroll`, misc.side);
    check(errs.length === 0, `${tag}: no page errors`, errs.join(' | '));
    await ctx.close();
  }
  await b.close();
  console.log(`\n${n - fail}/${n} checks passed`); process.exit(fail ? 1 : 0);
})();

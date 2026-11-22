/* atlas_fold_test.js: the Atlas folders (atlas_ui.js; Louis, 2026-11-22: "collapsed folders for the atlas section").
   NODE_PATH=$(npm root -g) node atlas_fold_test.js      (reads ../preview/index.html; DRILL_PAGE overrides; SHOTS=dir writes screenshots)
   At 390x844 and 1280x900: one folder per deck and exam, only the active exam's open, every board closed; summaries at least
   44 px tall and reachable by keyboard; opening works; Open all / Close all; a search opens the folders and boards with a
   match, hides the rest, and clearing it restores what was open; the reference-only switch and Hide names keep working;
   Compare structures opens; the header Search, a Drug list "structure" button and a data-jump to a board each land on a
   visible target; nothing but the Atlas's own two settings is stored; no page error; no sideways scroll. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
const SHOTS = process.env.SHOTS || '';
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 600))); };
const keys = p => p.evaluate(() => JSON.stringify([Object.keys(localStorage).filter(k => !/^phar4346-atlas:/.test(k) && !/:place:keep$/.test(k)).sort().map(k => [k, localStorage.getItem(k).length]), Object.keys(sessionStorage).sort()]));

(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[390, 844], [1280, 900]]) {
    const tag = w + ' px', errs = [];
    const p = await b.newPage({viewport: {width: w, height: h}});
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1200);
    const before = await keys(p);
    await p.evaluate(() => show('atlas')); await p.waitForTimeout(400);
    const noSide = () => p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1);
    const state = () => p.evaluate(() => {
      const v = document.getElementById('v-atlas'), on = e => e.getClientRects().length > 0 && e.checkVisibility();
      return {
        folders: [...v.querySelectorAll('details.atfold')].map(d => ({id: d.id, open: d.open, none: d.classList.contains('at-none'), title: d.querySelector('.atfname').textContent, n: d.querySelector('.atfn').textContent,
          boards: d.querySelectorAll('section.atboard').length, tiles: d.querySelectorAll('.attile').length, h: d.querySelector('summary').getBoundingClientRect().height, btn: d.querySelector('.atftools button').textContent})),
        boards: [...v.querySelectorAll('section.atboard')].map(s => { const d = s.querySelector(':scope > details.atbfold'); return {id: s.id, inFolder: !!s.closest('details.atfold'), d: !!d, open: !!(d && d.open), none: s.classList.contains('at-none'),
          h: d && on(d) ? d.querySelector('summary').getBoundingClientRect().height : null, n: d ? d.querySelector('.atbn').textContent : '', h3: d ? !!d.querySelector(':scope > summary > h3') : false, tiles: s.querySelectorAll('.attile').length}; }),
        tilesOn: [...v.querySelectorAll('.attile')].filter(on).length, tiles: v.querySelectorAll('.attile').length, count: v.querySelector('#atCount').textContent,
        height: document.documentElement.scrollHeight, loose: [...v.children].filter(c => c.matches('section.atboard')).length};
    });

    // 1. the page as it opens
    let s = await state();
    check(s.folders.length === 2 && s.loose === 0 && s.boards.every(x => x.inFolder && x.d && x.h3), `${tag}: two folders hold every board, each board a details with its heading in the summary`, JSON.stringify(s.folders));
    check(/^Exam 1 · Dr\. Sikazwe's dermatology deck$/.test(s.folders[0].title) && /^Exam 3 · Dr\. Sikazwe's ear, mouth and eye deck$/.test(s.folders[1].title), `${tag}: the folders are titled by exam and deck`, s.folders.map(f => f.title).join(' | '));
    check(s.folders[0].boards === 14 && s.folders[1].boards === 7 && s.folders[0].tiles === 91 && s.folders[1].tiles === 52, `${tag}: Exam 1 holds 14 boards and 91 structures, Exam 3 holds 7 and 52`, JSON.stringify(s.folders.map(f => [f.boards, f.tiles])));
    check(/^14 boards · \d+ structures( · \d+ reference-only hidden)?$/.test(s.folders[0].n) && /^7 boards · \d+ structures/.test(s.folders[1].n), `${tag}: each folder says how many boards and structures it holds`, s.folders.map(f => f.n).join(' | '));
    const act = await p.evaluate(() => COURSE.activeExam);
    check(s.folders.every(f => f.open === (f.title.split(' · ')[0].replace(/\s/g, '').toLowerCase() === act)), `${tag}: only the active exam's folder (${act}) is open`, JSON.stringify(s.folders.map(f => [f.id, f.open])));
    check(s.boards.every(x => !x.open) && s.tilesOn === 0, `${tag}: every board is closed and no tile is on screen`, s.tilesOn);
    check(s.folders.every(f => f.h >= 44) && s.boards.filter(x => x.h !== null).every(x => x.h >= 44) && s.boards.some(x => x.h !== null), `${tag}: every summary is at least 44 px tall`, JSON.stringify([s.folders.map(f => f.h), s.boards.map(x => x.h)]));
    check(s.boards.every(x => /^\d+ structures?$/.test(x.n)), `${tag}: each board shows its count of structures`, s.boards.map(x => x.n).join(', '));
    check(/structures/.test(s.count) && !/^0 of/.test(s.count), `${tag}: the toolbar count does not depend on what is open`, s.count);
    check(s.height < (w < 600 ? 2400 : 1800), `${tag}: the Atlas opens short (${s.height} px tall)`, s.height);
    check(await noSide(), `${tag}: no sideways scroll as opened`);
    if (SHOTS) await p.screenshot({path: path.join(SHOTS, `atlas_${w}.png`), fullPage: true});

    // 2. opening by tap and by keyboard
    await p.click('#atfold-dpaw > summary'); await p.waitForTimeout(150);
    check(await p.evaluate(() => document.getElementById('atfold-dpaw').open), `${tag}: a tap opens the Exam 1 folder`);
    await p.click('#at-a-glucocorticoids > details > summary'); await p.waitForTimeout(150);
    s = await state();
    const glu = s.boards.find(x => x.id === 'at-a-glucocorticoids');
    check(glu.open && s.tilesOn > 0 && s.tilesOn <= glu.tiles && s.boards.filter(x => x.open).length === 1, `${tag}: a tap opens one board and only its tiles show`, JSON.stringify([s.tilesOn, glu.tiles]));
    await p.focus('#at-c-beta > details > summary'); await p.keyboard.press('Enter'); await p.waitForTimeout(150);
    const kb = await p.evaluate(() => { const d = document.querySelector('#at-c-beta > details'), sm = d.querySelector('summary'); const o = getComputedStyle(sm); return {open: d.open, focus: document.activeElement === sm}; });
    check(kb.open && kb.focus, `${tag}: Enter on a focused board summary opens it`, JSON.stringify(kb));
    check(await noSide(), `${tag}: no sideways scroll with boards open`);
    if (SHOTS) await p.screenshot({path: path.join(SHOTS, `atlas_${w}_open.png`), fullPage: false});

    // 3. Open all / Close all
    await p.click('#atfold-ooo .atftools button'); await p.waitForTimeout(150);
    s = await state();
    const ooo = s.boards.filter(x => x.id.startsWith('at-c-'));
    check(ooo.every(x => x.open || x.none) && s.folders[1].btn === 'Close all boards', `${tag}: "Open all boards" opens every board of its folder and turns into "Close all boards"`, s.folders[1].btn);
    check(s.boards.find(x => x.id === 'at-a-eczema').open === false, `${tag}: and leaves the other folder's boards alone`);
    check(await noSide(), `${tag}: no sideways scroll with a whole folder open`);
    await p.click('#atfold-ooo .atftools button'); await p.waitForTimeout(150);
    s = await state();
    check(s.boards.filter(x => x.id.startsWith('at-c-')).every(x => !x.open) && s.folders[1].btn === 'Open all boards', `${tag}: "Close all boards" closes them again`, s.folders[1].btn);

    // 4. search opens what matches and hides the rest; clearing restores
    await p.evaluate(() => { document.getElementById('atfold-dpaw').open = false; }); await p.waitForTimeout(100);
    const pre = await p.evaluate(() => [...document.querySelectorAll('#v-atlas details.atfold, #v-atlas details.atbfold')].map(d => d.open));
    await p.fill('#atq', 'timolol'); await p.waitForTimeout(250);
    s = await state();
    const hit = await p.evaluate(() => { const v = document.getElementById('v-atlas'); const ts = [...v.querySelectorAll('.attile')].filter(t => !t.hidden && t.checkVisibility()); return {n: ts.length, all: ts.every(t => /timolol/.test(t.dataset.find)), want: [...v.querySelectorAll('.attile')].filter(t => /timolol/.test(t.dataset.find) && !t.classList.contains('is-ref')).length}; });
    check(hit.n > 0 && hit.all && hit.n === hit.want, `${tag}: a search for "timolol" shows its tiles, all of them, on screen`, JSON.stringify(hit));
    check(s.folders[0].none && !s.folders[1].none && s.folders[1].open, `${tag}: the folder with the match opens and the folder without one is hidden`, JSON.stringify(s.folders.map(f => [f.id, f.open, f.none])));
    check(s.boards.every(x => x.none ? true : x.open) && s.boards.some(x => x.none), `${tag}: boards with a match are open, boards without one hidden`);
    check(/ of 7 boards · \d+ of \d+ structures? match(es)?$/.test(s.folders[1].n) && s.boards.filter(x => !x.none).every(x => /^\d+ of \d+ match(es)?$/.test(x.n)), `${tag}: the counts say how many match`, s.folders[1].n);
    await p.fill('#atq', 'salicylic'); await p.waitForTimeout(250);
    s = await state();
    check(s.folders[0].open && !s.folders[0].none && s.tilesOn > 0, `${tag}: a search for an Exam 1 structure opens the closed Exam 1 folder`, JSON.stringify(s.folders.map(f => [f.id, f.open, f.none])));
    await p.fill('#atq', 'qzxv'); await p.waitForTimeout(250);
    s = await state();
    check(s.folders.every(f => f.none) && await p.evaluate(() => { const e = document.querySelector('#v-atlas .atempty'); return !e.hidden && /No structure matches/.test(e.textContent); }), `${tag}: a search with no match hides both folders and says so`);
    await p.fill('#atq', ''); await p.waitForTimeout(250);
    const post = await p.evaluate(() => [...document.querySelectorAll('#v-atlas details.atfold, #v-atlas details.atbfold')].map(d => d.open));
    s = await state();
    check(JSON.stringify(pre) === JSON.stringify(post) && s.folders.every(f => !f.none) && s.boards.every(x => !x.none), `${tag}: clearing the search puts back what was open before it`, JSON.stringify([pre, post]));

    // 5. reference-only switch
    const refBtn = p.locator('#v-atlas .atbar button', {hasText: 'reference-only'});
    const c0 = (await state()).count;
    await refBtn.click(); await p.waitForTimeout(200);
    s = await state();
    check(/^143 structures/.test(s.count) && !/reference-only hidden/.test(s.folders[0].n + s.folders[1].n) && c0 !== s.count, `${tag}: "Show reference-only" still works and the folder counts follow`, s.count + ' / ' + s.folders.map(f => f.n).join(' | '));
    check(s.folders.reduce((a, f) => a + +(f.n.match(/· (\d+) structures/) || [0, 0])[1], 0) === 143, `${tag}: with reference tiles shown the folder counts add up to 143`);
    await refBtn.click(); await p.waitForTimeout(200);

    // 6. Hide names
    await p.evaluate(() => { document.getElementById('atfold-ooo').open = true; document.querySelector('#at-c-beta > details').open = true; }); await p.waitForTimeout(100);
    await p.click('#atHide'); await p.waitForTimeout(250);
    const hn = await p.evaluate(() => { const v = document.getElementById('v-atlas'); const sm = [...v.querySelectorAll('details.atbfold > summary')].filter(x => x.checkVisibility()).map(x => x.innerText.trim());
      const names = ATLAS.boards.flatMap(b => b.sections.flatMap(s => s.items.map(i => i.plain))); const txt = v.innerText;
      const t = v.querySelector('#at-c-beta .attile'); t.querySelector('.atrev').click();
      return {sm, leak: names.filter(nm => nm.length > 4 && txt.includes(nm)).slice(0, 5), shown: t.classList.contains('shown'), namesoff: v.classList.contains('namesoff')}; });
    check(hn.namesoff && hn.sm.length > 0 && hn.sm.every(x => /^Board \d+ of 21\s+\d+ structures?$/.test(x)), `${tag}: in Hide names a board's summary reads "Board n of 21" and its count`, hn.sm.slice(0, 3).join(' | '));
    check(hn.leak.length === 0, `${tag}: Hide names shows no structure name on the page`, hn.leak.join(', '));
    await p.waitForTimeout(150);
    check(hn.shown && /1 revealed/.test((await state()).count), `${tag}: Reveal name still reveals one tile and the count says so`, (await state()).count);
    await p.click('#atHide'); await p.waitForTimeout(200);

    // 7. Compare structures
    await p.fill('#atq', 'padimate'); await p.waitForTimeout(250);
    const cmp = await p.evaluate(() => { const b = [...document.querySelectorAll('#v-atlas .atcmpbtn')].find(x => x.checkVisibility()); if (!b) return null; b.click(); const box = b.nextElementSibling; return {open: !box.hidden, figs: box.querySelectorAll('figure svg').length, on: box.getClientRects().length > 0}; });
    check(cmp && cmp.open && cmp.figs === 2 && cmp.on, `${tag}: "Compare structures" opens on a tile found by search`, JSON.stringify(cmp));
    check(await noSide(), `${tag}: no sideways scroll with a comparison open`);
    await p.fill('#atq', ''); await p.waitForTimeout(200);

    // 8. the header Search lands on a visible tile, from closed folders
    await p.evaluate(() => { document.querySelectorAll('#v-atlas details.atfold, #v-atlas details.atbfold').forEach(d => { d.open = false; }); show('topics'); }); await p.waitForTimeout(200);
    await p.click('#btnSearch'); await p.waitForTimeout(250);
    await p.fill('#srchq', 'hydroquinone'); await p.waitForTimeout(500);
    const clicked = await p.evaluate(() => { const hit = SEARCH_UI.search('hydroquinone').groups.flatMap(g => g.items).find(e => e.type === 'atlas'); if (!hit) return null;
      const row = [...document.querySelectorAll('.srch .sh')].find(r => /Structure/.test(r.textContent) && r.textContent.includes(hit.title.replace(/<[^>]+>/g, '').slice(0, 8))); if (!row) return 'no row'; row.click(); return hit.id; });
    await p.waitForTimeout(500);
    const land = await p.evaluate(id => { const v = document.getElementById('v-atlas'); const t = v.querySelector(`.attile[data-key="${CSS.escape(id)}"]`); const r = t && t.getBoundingClientRect();
      return {view: VIEW, on: !!t && !t.hidden && t.checkVisibility(), inWin: !!r && r.top < innerHeight && r.bottom > 0, q: v.querySelector('#atq').value, others: [...v.querySelectorAll('.attile')].filter(x => !x.hidden && x.checkVisibility()).length}; }, clicked);
    check(clicked && clicked !== 'no row' && land.view === 'atlas' && land.on && land.inWin, `${tag}: a Structure result of the header Search (${clicked}) opens the Atlas with its tile visible in the window`, JSON.stringify(land));
    await p.fill('#atq', ''); await p.waitForTimeout(200);
    check((await state()).tilesOn === 0, `${tag}: clearing that search closes the folders again`);

    // 9. a Drug list structure button lands on its tile
    const dl = await p.evaluate(async () => {
      const nav = document.querySelector('#nav button[data-v="drugs"]'); if (!nav) return {skip: 'no Drug list tab'};
      nav.click(); await new Promise(r => setTimeout(r, 300));
      const d = (typeof DRUGLIST !== 'undefined' && DRUGLIST.D || []).find(x => x.atlas && ATLAS.item(x.atlas) && (ATLAS.item(x.atlas).meta || {}).priority !== 'reference');
      if (!d || typeof DRUGLIST_UI === 'undefined') return {skip: 'no drug with a structure'};
      DRUGLIST_UI.openDrug(d.id); await new Promise(r => setTimeout(r, 400));
      const b = document.querySelector('[data-dl="atlas"]');
      if (!b) return {skip: 'no structure button drawn'};
      const key = b.dataset.key; b.click(); await new Promise(r => setTimeout(r, 900));
      const t = document.querySelector(`#v-atlas .attile[data-key="${CSS.escape(key)}"]`), r = t && t.getBoundingClientRect();
      return {key, view: VIEW, on: !!t && t.checkVisibility(), inWin: !!r && r.top < innerHeight && r.bottom > 0};
    });
    if (dl.skip) console.log(`  note  ${tag}: Drug list structure button not exercised (${dl.skip})`);
    else check(dl.view === 'atlas' && dl.on && dl.inWin, `${tag}: a Drug list structure button (${dl.key}) opens the Atlas on its tile, folders opened`, JSON.stringify(dl));

    // 10. a jump to a board (the core's data-jump) opens its folders
    await p.evaluate(() => { document.querySelectorAll('#v-atlas details.atfold, #v-atlas details.atbfold').forEach(d => { d.open = false; }); show('topics');
      const a = document.createElement('button'); a.id = 'tjump'; a.dataset.jump = 'atlas:at-b-retinoids'; a.textContent = 'j'; a.style.cssText = 'position:fixed;top:80px;left:10px;z-index:99999'; document.body.appendChild(a); });
    await p.click('#tjump'); await p.waitForTimeout(900);
    const jp = await p.evaluate(() => { const s = document.getElementById('at-b-retinoids'), r = s.getBoundingClientRect(); document.getElementById('tjump').remove(); return {view: VIEW, open: s.querySelector('details').open, folder: s.closest('details.atfold').open, top: Math.round(r.top), on: s.checkVisibility(), tiles: [...s.querySelectorAll('.attile')].filter(t => t.checkVisibility()).length}; });
    check(jp.view === 'atlas' && jp.open && jp.folder && jp.on && jp.tiles > 0 && jp.top >= 0 && jp.top < h, `${tag}: a jump to a board opens its folder and the board, and scrolls to it`, JSON.stringify(jp));
    check(await p.evaluate(() => typeof ATLAS_FOLD === 'object' && typeof ATLAS_FOLD.reveal === 'function'), `${tag}: ATLAS_FOLD.reveal is offered to other course files`);

    // 11. focus ring, storage, errors
    await p.evaluate(() => window.scrollTo(0, 0));
    await p.focus('#atfold-dpaw > summary'); await p.keyboard.press('Tab'); await p.keyboard.press('Shift+Tab');
    const ring = await p.evaluate(() => { const sm = document.querySelector('#atfold-dpaw > summary'); const c = getComputedStyle(sm); return {focus: document.activeElement === sm, vis: sm.matches(':focus-visible'), w: c.outlineWidth, st: c.outlineStyle}; });
    check(ring.focus && ring.vis && parseFloat(ring.w) >= 2 && ring.st !== 'none', `${tag}: a folder summary reached by keyboard shows a focus outline`, JSON.stringify(ring));
    check(before === await keys(p), `${tag}: the folders store nothing (localStorage and sessionStorage unchanged apart from the Atlas's two settings)`);
    check(await noSide(), `${tag}: no sideways scroll at the end`);
    check(errs.length === 0, `${tag}: no page errors`, errs.join(' | '));
    await p.close();
  }
  await b.close();
  console.log(fail ? `FAIL: atlas_fold_test.js: ${fail} of ${n} checks failed` : `PASS: atlas_fold_test.js: ${n} checks`);
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('NOT RUN: atlas_fold_test.js: ' + e.message); process.exit(2); });

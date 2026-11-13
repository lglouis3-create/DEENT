/* examfold_test.js: browser checks of the exam folders in Guides, Tell apart and Reference (examfold_ui.js).
   NODE_PATH=$(npm root -g) node examfold_test.js      (reads ../preview/index.html; DRILL_PAGE overrides)
   At 390 px and 1280 px:
   - each of the three tabs shows an Exam 1 folder (closed) and an Exam 2 folder (open: the active exam),
     with the Topics folders' title and the exam's date;
   - no section is outside a folder, none is dropped (the counts of headings, tables, rows and figures inside
     the folders equal those of the tab's own HTML), and every section has its own entry in the assignment;
   - every anchor a question (its `read`, links.js), a data-jump anywhere in the page, the Diseases data, a
     walkthrough, a spoken-why figure or a Drug list card points to in these tabs: after jump(view, anchor) the
     target is on screen, inside an open folder, below the pinned strip (or the page is at its end); the Back
     button returns; nothing is stored;
   - real taps: "Explain more" on a question, the Weak spots review plan, a chip in a guide, the "Jump to a
     section" list, the walkthrough index, "Read guide" / "Listen" / "Learn a topic", a Drug list card, the
     Diseases tab's "Watch how it works", and the Tell apart comparisons that open in the Diseases tab;
   - Back returns to the same line with the folders as they were, also when a folder was open only by a jump;
   - the reader's own open/close is stored under <NS>:readExamOpen, per tab, survives a reload and leaves the
     Topics keys alone; the place kept across a reload comes back at the same line, also from a record written
     before the folders existed;
   - inside the Exam 1 folder after it is opened: a step-through figure steps and enlarges, a reaction figure
     is drawn, a narrated figure plays, wide tables are marked with their cue, a walkthrough player opens;
   - the browser's own navigation into a closed folder (a #fragment, the mechanism find-in-page uses) opens it;
     printing opens every folder and closes them after;
   - when the folders cannot be drawn the tab is shown flat with one console line;
   - no page error, no sideways scroll.
   At 390x844 and 1376x1032 (a phone, and an iPad Pro 13 window):
   - I: a reload with the Exam 1 header itself as the first line on screen (Reference and Tell apart; Exam 1 closed
     as first drawn, closed by the reader, opened by the reader) leaves the folders and the page height as they were;
   - K: closing a folder by its header pauses the walkthrough or the narrated figure that is being read aloud inside
     it; the folder then stays closed when the tab is drawn again, until the walkthrough index opens it;
   - L: a Tell apart row that opens the Diseases tab, then Back: the Diseases tab has the sub-view and the search it
     had before; a sub-view or a search the reader chose there after the row is kept. */
const path = require('path'), fs = require('fs');
const NAME = 'examfold_test.js';
let chromium;
try { ({chromium} = require('playwright')); }
catch (e) { console.log(`NOT RUN: ${NAME}: playwright is not installed here (NODE_PATH=$(npm root -g))`); process.exit(2); }
const FILE = path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
if (!fs.existsSync(FILE)) { console.log(`NOT RUN: ${NAME}: no built page at ${FILE} (run python3 build.py --preview first)`); process.exit(2); }
if (!/const EXAMFOLD_UI = /.test(fs.readFileSync(FILE, 'utf8'))) { console.log(`NOT RUN: ${NAME}: the built page has no examfold_ui.js (rebuild after adding it to course.js \`files\`)`); process.exit(2); }
const PAGE = 'file://' + FILE;

// EXAMFOLD_ONLY=AD runs only the lettered parts named (A to H, M for the motion check); the last line then says so and is not a pass
const ONLY = String(process.env.EXAMFOLD_ONLY || '').toUpperCase();
const run = k => !ONLY || ONLY.includes(k);
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || detail === undefined ? '' : '  — ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)).slice(0, 600))); return !!ok; };
const note = s => console.log('        ' + s);

/* a short silent WAV for any recorded clip, and a stand-in for the device voice (each sentence takes 0.4 s, so a
   narration is still going when it is checked). Part K uses a 20 s clip: a part or a step is still being read when
   its folder is closed, and no next one starts meanwhile. */
const wavOf = k => {                               // k samples at 8,000 a second
  const b = Buffer.alloc(44 + k * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + k * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12); b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(8000, 24); b.writeUInt32LE(16000, 28); b.writeUInt16LE(2, 32);
  b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(k * 2, 40); return b;
};
const wav = wavOf(2400), longWav = wavOf(160000);
function fakeVoice() {
  const q = []; let busy = false, timer = null;
  const S = {get speaking() { return busy; }, get pending() { return q.length > 0; }, paused: false, getVoices: () => [], addEventListener() {}, removeEventListener() {},
    speak(u) { q.push(u); if (!busy) next(); }, cancel() { clearTimeout(timer); const all = q.splice(0); busy = false; all.forEach(u => u.onerror && u.onerror({error: 'canceled'})); }, pause() {}, resume() {}};
  function next() { const u = q.shift(); if (!u) { busy = false; return; } busy = true; if (u.onstart) u.onstart({}); timer = setTimeout(() => { busy = false; if (u.onend) u.onend({}); next(); }, 400); }
  Object.defineProperty(window, 'speechSynthesis', {value: S, configurable: true});
}

async function open(browser, width, {height = 844, init = [], motion = 'reduce', clip = wav} = {}) {
  const ctx = await browser.newContext({viewport: {width, height}, reducedMotion: motion, serviceWorkers: 'block'});
  await ctx.addInitScript(fakeVoice);
  await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; });
  for (const i of init) await ctx.addInitScript(i);
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  p.on('dialog', d => d.accept());
  await p.route('**/audio/*.mp3', r => r.fulfill({status: 200, contentType: 'audio/wav', body: clip}));
  await p.goto(PAGE);
  await ready(p);
  return {ctx, p, errs};
}
const ready = p => p.waitForFunction(() => typeof show === 'function' && typeof VIEW === 'string' && document.querySelectorAll('#nav button').length > 3 && typeof EXAMFOLD_UI !== 'undefined', null, {timeout: 30000});
const TABS = ['guide', 'tell', 'ref'];
const NAMES = {guide: 'Guides', tell: 'Tell apart', ref: 'Reference'};
// "1:false 2:true": the folders of a tab and whether each is open
const st = (p, v) => p.evaluate(v => [...document.querySelectorAll(`#v-${v} > .rfold`)].map(f => f.dataset.exam + ':' + f.open).join(' '), v);
const stored = p => p.evaluate(() => localStorage.getItem(EXAMFOLD_UI.key()));
// a tap on a tab of the strip. wide_ui.js slides the strip away while the page rests scrolled down; at the top of the
// page it is always shown, so the page goes there first (opening a tab does the same).
const tabTap = async (p, v) => { await p.evaluate(() => window.scrollTo(0, 0)); await p.click(`#nav button[data-v="${v}"]`); };
const over = p => p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
// where an element is: on screen, in an open folder, how far below the pinned strip
// (an element inside a closed <details> still reports its boxes in Chromium, so "on screen" is checkVisibility())
const where = (p, id) => p.evaluate(id => {
  const el = document.getElementById(id); if (!el) return {found: false};
  const seen = e => !!e && (e.checkVisibility ? e.checkVisibility() : true) && e.getClientRects().length > 0;
  const f = el.closest('.rfold'), r = el.getBoundingClientRect();
  const pin = typeof JUMP_UI !== 'undefined' && JUMP_UI && JUMP_UI.pinnedOffset ? JUMP_UI.pinnedOffset() : (typeof headerOffset === 'function' ? headerOffset() : 0);
  return {found: true, view: VIEW, vis: seen(el), fold: f ? f.id : null, open: f ? f.open : null, top: Math.round(r.top), pin: Math.round(pin),
    atEnd: window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 2, y: Math.round(window.scrollY), vh: window.innerHeight};
}, id);
const landed = w => w.found && w.vis && w.open !== false && (Math.abs(w.top - w.pin) <= 30 || (w.atEnd && w.top >= w.pin - 1 && w.top < w.vh));

// the page's storage namespace (the preview build has its own), read once from the page
let NS_CACHE = null;
async function nsOf(browser) {
  if (NS_CACHE) return NS_CACHE;
  const ctx = await browser.newContext(); const p = await ctx.newPage();
  await p.addInitScript(() => { window.prompt = () => 'TestUser'; });
  await p.goto(PAGE); await ready(p);
  NS_CACHE = await p.evaluate(() => NS);
  await ctx.close();
  return NS_CACHE;
}

(async () => {
  const browser = await chromium.launch({args: ['--autoplay-policy=no-user-gesture-required']});
  const sideways = [];
  const side = async (p, w, label) => { const o = await over(p); if (o > 0) sideways.push(`${w} px, ${label}: ${o} px`); };

  for (const w of [390, 1280]) {
    console.log(`\n=== ${w} px ===`);
    /* ---------- A. the folders, their default state, and what is in them ---------- */
    if (run('A')) {
      const {ctx, p, errs} = await open(browser, w);
      const keys0 = await p.evaluate(() => Object.keys(localStorage).sort().join());
      for (const v of TABS) {
        await p.evaluate(v => show(v), v);
        const r = await p.evaluate(v => {
          const pane = document.getElementById('v-' + v), html = {guide: GUIDE_HTML, tell: TELL_HTML, ref: REFERENCE_HTML}[v];
          const flat = document.createElement('div'); flat.innerHTML = refFigures(html);
          const folds = [...pane.querySelectorAll(':scope > .rfold')];
          const inFolds = sel => folds.reduce((s, f) => s + [...f.querySelectorAll(':scope > .rfbody ' + sel)].filter(e => !e.closest('.rfdz, .wkpanel, .wkbars')).length, 0);
          const counts = {}; ['h2.gdeck', 'section.gobj', 'h3', 'h4', 'table', 'tr', 'figure', 'li'].forEach(sel => { counts[sel] = [flat.querySelectorAll(sel).length, inFolds(sel)]; });
          // ids the tab's own HTML carries: all present, all inside a folder
          const ids = [...flat.querySelectorAll('[id]')].map(e => e.id);
          const lost = ids.filter(id => { const e = pane.querySelector('#' + CSS.escape(id)); return !e || !e.closest('.rfold'); });   // inside this tab: a figure's marker id repeats in other tabs
          const starts = v === 'guide' ? 'h2.gdeck[id]' : 'h3[id]';
          const wrong = [...pane.querySelectorAll('.rfbody > ' + starts)].filter(s => { const want = v === 'guide' ? EXAMFOLD_UI.deckExam(s.id) : EXAMFOLD_UI.map[v][s.id]; return String(want) !== s.closest('.rfold').dataset.exam; }).map(s => s.id);
          return {
            top: [...pane.children].map(c => c.tagName.toLowerCase() + (c.className ? '.' + String(c.className).split(' ')[0] : '')),
            folds: folds.map(f => ({id: f.id, open: f.open, name: f.querySelector('.rfname').textContent, meta: f.querySelector('.rfmeta').textContent,
              list: [...f.querySelectorAll(':scope > .rfbody > ' + starts)].map(s => s.id), extra: f.querySelectorAll('.rfdz button').length})),
            counts, lost, wrong, unassigned: (EXAMFOLD_UI.unassigned()[v] || []),
            dates: (COURSE.exams || []).map(x => x.date), active: COURSE.activeExam, summaryFocus: folds.every(f => f.querySelector('summary').tabIndex === 0),
          };
        }, v);
        const f1 = r.folds.find(f => f.id === `rfold-${v}-1`), f2 = r.folds.find(f => f.id === `rfold-${v}-2`);
        check(r.folds.length === 2 && f1 && f2, `${w} px, ${NAMES[v]}: an Exam 1 and an Exam 2 folder`, r.folds.map(f => f.id));
        if (!f1 || !f2) continue;
        check(!f1.open && f2.open && r.active === 'exam2', `${w} px, ${NAMES[v]}: Exam 1 starts closed and Exam 2 (the active exam) open`, {exam1: f1.open, exam2: f2.open, active: r.active});
        check(/^Exam 1 · /.test(f1.name) && /^Exam 2 · /.test(f2.name) && f1.meta.indexOf(r.dates[0]) === 0 && f2.meta.indexOf(r.dates[1]) === 0,
          `${w} px, ${NAMES[v]}: the headers read "${f1.name}" and "${f2.name}", each with its exam date`, [f1.meta, f2.meta]);
        const allowed = ['h2', 'p.sub', 'details.wkindex', 'details.refnav-wrap', 'details.rfold'];
        check(r.top.every(t => allowed.includes(t)) && r.top.filter(t => t === 'details.rfold').length === 2,
          `${w} px, ${NAMES[v]}: nothing but the title, the intro, the lists and the two folders at the top level`, r.top.filter(t => !allowed.includes(t)));
        const off = Object.entries(r.counts).filter(([, [a, b]]) => a !== b);
        check(!off.length && !r.lost.length, `${w} px, ${NAMES[v]}: nothing dropped (${Object.entries(r.counts).map(([k, [a]]) => a + ' ' + k).join(', ')} in the folders, as in the tab's HTML)`, {off, lost: r.lost.slice(0, 8)});
        check(!r.unassigned.length && !r.wrong.length, `${w} px, ${NAMES[v]}: every section has its own entry and sits in that exam's folder`, {unassigned: r.unassigned, wrong: r.wrong});
        check(v === 'tell' ? (f1.list.length > 0 && (f2.list.length > 0 || f2.extra > 0)) : (f1.list.length > 0 && f2.list.length > 0), `${w} px, ${NAMES[v]}: neither folder is empty`, [f1.list.length, f2.list.length, f2.extra]);
        check(r.summaryFocus, `${w} px, ${NAMES[v]}: each header can take keyboard focus`);
        if (w === 390) r.folds.forEach(f => note(`${NAMES[v]} › ${f.name} (${f.meta}): ${f.list.join(', ')}${f.extra ? ' [' + f.extra + ' buttons to the Diseases tab]' : ''}`));
        await side(p, w, NAMES[v]);
      }
      check(await p.evaluate(() => Object.keys(localStorage).sort().join()) === keys0, `${w} px: drawing the three tabs stores nothing`);
      check(!errs.length, `${w} px: no page error while the tabs are drawn`, errs);
      await ctx.close();
    }

    /* ---------- B. every anchor that anything in the page points to ---------- */
    if (run('B')) {
      const {ctx, p, errs} = await open(browser, w);
      const inv = await p.evaluate(() => {
        const T = {}, src = {};
        const add = (s, v, a) => { if (!['guide', 'tell', 'ref'].includes(v) || !a) return; const k = v + ':' + a; (T[k] = T[k] || {})[s] = 1; src[s] = (src[s] || 0) + 1; };
        QUESTIONS.forEach(q => linksFor(q).forEach(l => add('a question (its read, links.js)', l[0], l[1])));
        try { const L = READ_LINKS; (L.byKey || []).forEach(([, links]) => links.forEach(l => add('links.js', l[0], l[1])));
          Object.values(L.bySub || {}).forEach(l => add('links.js', l[0], l[1])); Object.values(L.byLecture || {}).forEach(l => add('links.js', l[0], l[1])); } catch (e) {}
        const code = [...document.querySelectorAll('script')].map(s => s.textContent).join('\n');
        [...code.matchAll(/data-jump=\\?"([a-z]+):([A-Za-z0-9_-]*)\\?"/g)].forEach(m => add('a data-jump in the page', m[1], m[2]));
        try { JSON.stringify(DZ, (k, val) => { if (k === 'jump' && typeof val === 'string') { const [v, a] = val.split(':'); add('the Diseases data', v, a); } return val; }); } catch (e) {}
        try { Object.values(WHY_FIGS).forEach(m => add('a spoken-why figure', 'guide', m.fig)); } catch (e) {}
        try { WALK_UI.SECS.forEach(x => add('a walkthrough', 'guide', x.guide)); } catch (e) {}
        return {T, src};
      });
      await p.evaluate(() => show('drugs')); await p.waitForTimeout(300);
      const dl = await p.evaluate(() => { const c = {}; document.querySelectorAll('#v-drugs [data-dl="ref"]').forEach(x => { c['ref:' + x.dataset.a] = 1; });
        document.querySelectorAll('#v-drugs [data-jump]').forEach(x => { c[x.dataset.jump] = 1; }); return Object.keys(c); });
      dl.forEach(k => { const [v, a] = k.split(':'); if (TABS.includes(v) && a) { (inv.T[k] = inv.T[k] || {})['a Drug list card'] = 1; inv.src['a Drug list card'] = (inv.src['a Drug list card'] || 0) + 1; } });
      const keys = Object.keys(inv.T);
      check(keys.length >= 100 && inv.src['a question (its read, links.js)'] > 1000 && inv.src['a data-jump in the page'] > 20,
        `${w} px: ${keys.length} distinct anchors found in the page (${Object.entries(inv.src).map(([k, c]) => c + ' from ' + k).join('; ')})`, inv.src);
      const res = await p.evaluate(async keys => {
        const out = [];
        for (const k of keys) {
          const [v, a] = k.split(':');
          RET.length = 0; backBtn(); show('topics');
          jump(v, a);
          await new Promise(r => requestAnimationFrame(() => setTimeout(r, 30)));
          const el = document.getElementById(a), pane = document.getElementById('v-' + v), f = el && el.closest('.rfold'), r = el && el.getBoundingClientRect();
          const pin = JUMP_UI.pinnedOffset();
          const o = {k, view: VIEW, found: !!el, inPane: !!(el && pane.contains(el)), fold: f ? f.dataset.exam : null, open: f ? f.open : null, vis: !!(el && el.checkVisibility() && el.getClientRects().length),
            top: r ? Math.round(r.top) : null, pin: Math.round(pin), vh: innerHeight, atEnd: scrollY >= document.documentElement.scrollHeight - innerHeight - 2,
            side: document.documentElement.scrollWidth - innerWidth, hit: !!document.querySelector('.jhit, .jreg')};
          const b = document.getElementById('backbtn'); if (b) b.click(); o.back = VIEW; o.backGone = !document.getElementById('backbtn');
          out.push(o);
        }
        return out;
      }, keys);
      const bad = res.filter(r => !(r.view === r.k.split(':')[0] && r.found && r.inPane && r.fold && r.open && r.vis && (Math.abs(r.top - r.pin) <= 30 || (r.atEnd && r.top >= r.pin - 1 && r.top < r.vh))));
      check(!bad.length, `${w} px: after jump(view, anchor) each of the ${res.length} targets is on screen, in an open folder, below the pinned strip (${res.filter(r => Math.abs(r.top - r.pin) <= 30).length}) or with the page at its end (${res.filter(r => Math.abs(r.top - r.pin) > 30).length})`, bad.slice(0, 6));
      const by = {}; res.forEach(r => { const k = NAMES[r.k.split(':')[0]] + ' Exam ' + r.fold; by[k] = (by[k] || 0) + 1; });
      note('targets by folder: ' + Object.entries(by).map(([k, c]) => k + ': ' + c).join(', '));
      check(res.every(r => r.hit), `${w} px: each landing is highlighted by jump_ui.js`, res.filter(r => !r.hit).slice(0, 5).map(r => r.k));
      check(res.every(r => r.back === 'topics' && r.backGone), `${w} px: the Back button returns to the Topics from each`, res.filter(r => r.back !== 'topics').slice(0, 5).map(r => r.k + ' → ' + r.back));
      check(res.every(r => r.side <= 0), `${w} px: no sideways scroll at any landing`, res.filter(r => r.side > 0).slice(0, 5).map(r => r.k + ' ' + r.side));
      check(await stored(p) === null, `${w} px: ${res.length} jumps store nothing (the folders' key is not written)`, await stored(p));
      check(!errs.length, `${w} px: no page error during the jumps`, errs.slice(0, 4));
      await ctx.close();
    }

    /* ---------- C. real taps ---------- */
    if (run('C')) {
      const {ctx, p, errs} = await open(browser, w);
      // C1. "Explain more" on a question of an Exam 1 lecture
      const q = await p.evaluate(() => {
        const q = QUESTIONS.find(x => !x.type && (x.options || []).filter(o => o.correct).length === 1 && lecOf(x) && lecOf(x).exam === 1 && !x.lowYield && linksFor(x).some(l => l[0] === 'ref' && l[1]));
        startQuiz(q.topic, q.sub); Object.assign(Q, {current: q, order: q.options.map((o, i) => i), picked: null, revealed: false, rights: null, startedAt: Date.now()}); renderQuiz();
        return {id: q.id, wrong: q.options.findIndex(o => !o.correct), links: linksFor(q)};
      });
      await p.locator('#v-quiz .opt').nth(q.wrong).click();
      const chip = p.locator('#v-quiz [data-jump^="ref:"]').first();
      const tgt = (await chip.getAttribute('data-jump')).split(':')[1];
      await chip.click();
      let wq = await where(p, tgt);
      check(wq.view === 'ref' && landed(wq) && wq.fold === 'rfold-ref-1', `${w} px: "Explain more" on ${q.id} opens the Exam 1 folder of Reference at ${tgt}`, wq);
      check(await p.evaluate(() => !!document.querySelector('#v-ref .jhit, #v-ref .jreg')), `${w} px: the section it lands on is highlighted`);
      await side(p, w, 'Explain more');
      await p.click('#backbtn');
      check(await p.evaluate(() => VIEW) === 'quiz', `${w} px: Back returns to the question`);
      // C2. the Weak spots review plan (the question above was answered wrong)
      await p.evaluate(() => show('gaps'));
      const plan = p.locator('#v-gaps [data-jump^="ref:"], #v-gaps [data-jump^="guide:"], #v-gaps [data-jump^="tell:"]').first();
      if (await plan.count()) {
        const [pv, pa] = (await plan.getAttribute('data-jump')).split(':');
        await plan.click();
        wq = await where(p, pa);
        check(wq.view === pv && landed(wq), `${w} px: a "Read" chip of the Weak spots review plan lands on ${pv}:${pa} in an open folder`, wq);
        await p.click('#backbtn');
        check(await p.evaluate(() => VIEW) === 'gaps', `${w} px: Back returns to Weak spots`);
      } else check(false, `${w} px: the Weak spots review plan shows a "Read" chip after a wrong answer`);

      // C3. a chip in a guide of the open Exam 2 folder, and Back to the same line
      await p.evaluate(() => { RET.length = 0; backBtn(); show('guide'); });
      const g2 = p.locator('#rfold-guide-2 [data-jump^="ref:"]').first();
      await g2.scrollIntoViewIfNeeded();
      const a3 = (await g2.getAttribute('data-jump')).split(':')[1];
      const y3 = await p.evaluate(() => Math.round(scrollY)), s3 = await st(p, 'guide');
      await g2.click();
      wq = await where(p, a3);
      check(wq.view === 'ref' && landed(wq), `${w} px: a chip in an Exam 2 guide lands on ref:${a3}`, wq);
      await p.click('#backbtn');
      let bk = await p.evaluate(() => ({view: VIEW, y: Math.round(scrollY)}));
      check(bk.view === 'guide' && Math.abs(bk.y - y3) <= 2 && await st(p, 'guide') === s3, `${w} px: Back returns to the guide at the same scroll position`, {bk, y3, st: await st(p, 'guide')});

      // C4. from a folder that only a jump opened: Back draws it open again, at the same line; nothing stored
      await p.evaluate(() => { RET.length = 0; backBtn(); show('topics'); jump('guide', 'gobj-l1-4'); });
      await p.evaluate(() => { RET.length = 0; backBtn(); });
      const g1 = p.locator('#rfold-guide-1 [data-jump^="ref:"], #rfold-guide-1 [data-jump^="tell:"]').first();
      await g1.scrollIntoViewIfNeeded();
      const [v4, a4] = (await g1.getAttribute('data-jump')).split(':');
      const y4 = await p.evaluate(() => Math.round(scrollY));
      check(await st(p, 'guide') === '1:true 2:true' && await stored(p) === null, `${w} px: a jump into Exam 1 of Guides opens it without storing it`, [await st(p, 'guide'), await stored(p)]);
      await g1.click();
      wq = await where(p, a4);
      check(wq.view === v4 && landed(wq), `${w} px: a chip inside that Exam 1 guide lands on ${v4}:${a4}`, wq);
      await p.click('#backbtn');
      bk = await p.evaluate(() => ({view: VIEW, y: Math.round(scrollY)}));
      check(bk.view === 'guide' && await st(p, 'guide') === '1:true 2:true' && Math.abs(bk.y - y4) <= 2, `${w} px: Back returns to the guide with Exam 1 open again, at the same scroll position`, {bk, y4, st: await st(p, 'guide')});
      check(await stored(p) === null, `${w} px: and still nothing is stored`, await stored(p));
      await p.evaluate(() => { show('topics'); show('guide'); });
      check(await st(p, 'guide') === '1:false 2:true', `${w} px: Guides opened from the tab strip is back at its usual folders`, await st(p, 'guide'));

      // C5. a jump inside one tab keeps the folder the reader is in
      await p.evaluate(() => { RET.length = 0; backBtn(); show('topics'); jump('ref', 'ref-l2'); RET.length = 0; backBtn(); });
      const y5 = await p.evaluate(() => Math.round(scrollY));
      await p.evaluate(() => jump('ref', 'ref-p5-ftu'));
      wq = await where(p, 'ref-p5-ftu');
      check(landed(wq) && await st(p, 'ref') === '1:true 2:true', `${w} px: a jump from Exam 1 of Reference to an Exam 2 section keeps Exam 1 open`, {wq, st: await st(p, 'ref')});
      await p.click('#backbtn');
      bk = await p.evaluate(() => ({view: VIEW, y: Math.round(scrollY)}));
      check(bk.view === 'ref' && Math.abs(bk.y - y5) <= 2, `${w} px: Back returns to the first section's scroll position`, {bk, y5});

      // C6. the "Jump to a section" list
      await p.evaluate(() => { RET.length = 0; backBtn(); show('topics'); show('ref'); });
      const labs = await p.evaluate(() => { const nav = document.querySelector('#v-ref .refnav'); return [...nav.children].map(c => c.classList.contains('rfnavx') ? 'L:' + c.textContent : (document.getElementById(c.getAttribute('href').slice(1)).closest('.rfold') || {dataset: {}}).dataset.exam); });
      const seq = labs.join(',');
      check(/^L:Exam 1 · [^,]+(,1)+,L:Exam 2 · [^,]+(,2)+$/.test(seq), `${w} px: the "Jump to a section" list names each exam in front of its links`, seq.slice(0, 200));
      await p.click('#v-ref .refnav-wrap > summary');
      await p.click('#v-ref .refnav a[href="#ref-l2"]');
      wq = await where(p, 'ref-l2');
      check(landed(wq) && wq.fold === 'rfold-ref-1' && await st(p, 'ref') === '1:true 2:true', `${w} px: a link of the list into the closed Exam 1 folder opens it and lands on the section`, wq);
      check(await p.evaluate(() => !document.querySelector('#v-ref .refnav-wrap').open) && await stored(p) === null, `${w} px: the list closes after the jump and nothing is stored`);
      await side(p, w, 'jump list');

      // C7. walkthroughs
      await p.evaluate(() => { show('topics'); show('guide'); });
      check(await p.evaluate(() => { const l = document.querySelector('#wkindex .rfnavx'); return !!l && /^Exam 1 · /.test(l.textContent); }), `${w} px: the walkthrough index names the exam of its walkthroughs`);
      await p.click('#wkindex > summary');
      await p.click('#wkindex li button');
      let wk = await p.evaluate(() => { const x = document.querySelector('.wkpanel'), f = x && x.closest('.rfold'), b = x && x.querySelector('[data-wkplay]');
        return {panel: !!x, vis: !!(x && x.getClientRects().length), top: x ? Math.round(x.getBoundingClientRect().top) : null, open: f ? f.open : null, focus: !!b && document.activeElement === b}; });
      check(wk.panel && wk.vis && wk.open && wk.top > 0 && wk.top < 844 && wk.focus, `${w} px: an entry of the walkthrough index opens its player on screen in the (closed) Exam 1 folder, focus on Play`, wk);
      await side(p, w, 'walkthrough player');
      await p.evaluate(() => { document.querySelectorAll('.wkpanel').forEach(x => WALK_UI.close(x.dataset.wkp)); RET.length = 0; backBtn(); show('topics'); });
      let rd = await p.evaluate(async () => { const b = document.querySelector('#v-topics [data-lrn="read"]'); const wid = b.dataset.wid; b.click(); await new Promise(r => setTimeout(r, 150));
        const sec = document.getElementById(WALK_UI.BY[wid].guide), f = sec.closest('.rfold'); return {view: VIEW, vis: !!sec.getClientRects().length, top: Math.round(sec.getBoundingClientRect().top), open: f.open, back: (document.getElementById('backbtn') || {}).textContent}; });
      check(rd.view === 'guide' && rd.vis && rd.open && rd.top >= 0 && rd.top < 300 && /topics/.test(rd.back || ''), `${w} px: "Read guide" on a Topics card lands on its guide section in an open folder, Back offered`, rd);
      await p.evaluate(() => { RET.length = 0; backBtn(); show('topics'); });
      rd = await p.evaluate(async () => { const b = document.querySelector('#v-topics [data-lrn="listen"]'); b.click(); await new Promise(r => setTimeout(r, 150));
        const x = document.querySelector('.wkpanel'), f = x && x.closest('.rfold'); const out = {view: VIEW, vis: !!(x && x.getClientRects().length), open: f ? f.open : null, playing: !!WALK_UI.state()}; WALK_UI.stop(); return out; });
      check(rd.view === 'guide' && rd.vis && rd.open && rd.playing, `${w} px: "Listen" on a Topics card opens a player on screen in an open folder and plays`, rd);
      // a walkthrough that is playing keeps its folder open when Guides is drawn again
      rd = await p.evaluate(async () => { const id = WALK_UI.SECS[0].id; WALK_UI.play(id, 0); show('topics'); show('guide'); await new Promise(r => setTimeout(r, 80));
        const x = document.querySelector(`.wkpanel[data-wkp="${id}"]`), f = x && x.closest('.rfold'); const out = {panel: !!x, vis: !!(x && x.getClientRects().length), open: f ? f.open : null}; WALK_UI.stop(); return out; });
      check(rd.panel && rd.vis && rd.open, `${w} px: a walkthrough that is playing keeps its folder open when Guides is drawn again`, rd);
      await p.evaluate(() => { document.querySelectorAll('.wkpanel').forEach(x => WALK_UI.close(x.dataset.wkp)); RET.length = 0; backBtn(); show('topics'); });
      rd = await p.evaluate(async () => { const b = document.querySelector('#startHere button[data-start="learn"]'); if (!b) return {none: true}; b.click(); await new Promise(r => setTimeout(r, 150));
        const x = document.querySelector('.wkpanel'), f = x && x.closest('.rfold'); return {view: VIEW, vis: !!(x && x.getClientRects().length), open: f ? f.open : null}; });
      check(rd.none || (rd.view === 'guide' && rd.vis && rd.open), `${w} px: Start here, "Learn a topic" opens a walkthrough player on screen in an open folder`, rd);
      // a control inside a closed folder that code clicks (a reader cannot reach it) brings its folder open, so what it does is seen
      rd = await p.evaluate(async () => { WALK_UI.stop(); document.querySelectorAll('.wkpanel').forEach(x => WALK_UI.close(x.dataset.wkp)); RET.length = 0; backBtn(); show('topics'); show('guide');
        const f = document.getElementById('rfold-guide-1'), before = f.open, b = f.querySelector('.wkbar [data-wkopen]'); b.click(); await new Promise(r => setTimeout(r, 80));
        const x = f.querySelector('.wkpanel'); return {before, open: f.open, panel: !!x, seen: !!x && x.checkVisibility()}; });
      check(!rd.before && rd.open && rd.panel && rd.seen, `${w} px: a walkthrough bar clicked by code inside the closed Exam 1 folder opens the folder with its player`, rd);
      check(await stored(p) === null, `${w} px: the walkthroughs store nothing under the folders' key`, await stored(p));
      await p.evaluate(() => { WALK_UI.stop(); document.querySelectorAll('.wkpanel').forEach(x => WALK_UI.close(x.dataset.wkp)); RET.length = 0; backBtn(); });

      // C8. Tell apart, Exam 2: the comparisons of the Diseases tab
      await p.evaluate(() => { show('topics'); show('tell'); });
      const dz = await p.evaluate(() => ({n: document.querySelectorAll('#rfold-tell-2 [data-rfdz="tell"]').length, want: DZ.tell.length, pairs: document.querySelectorAll('#rfold-tell-2 [data-rfdz="pairs"]').length,
        titles: [...document.querySelectorAll('#rfold-tell-2 [data-rfdz="tell"]')].every((b, i) => b.textContent === DZ.tell[i].title), small: [...document.querySelectorAll('#rfold-tell-2 .rfdz button')].filter(b => b.getBoundingClientRect().height < 44).length}));
      check(dz.n === dz.want && dz.n > 0 && dz.titles && dz.pairs === 1 && !dz.small, `${w} px: Tell apart, Exam 2 lists the ${dz.want} comparisons of the Diseases tab by their titles, each at least 44 px tall`, dz);
      const last = p.locator('#rfold-tell-2 [data-rfdz="tell"]').nth(dz.n - 1);
      await last.scrollIntoViewIfNeeded();
      const y8 = await p.evaluate(() => Math.round(scrollY)), a8 = (await last.getAttribute('data-jump')).split(':')[1];
      await last.click();
      const d8 = await p.evaluate(a => { const el = document.getElementById(a), r = el && el.getBoundingClientRect(); return {view: VIEW, dzview: DZ_UI.state.view, found: !!el, vis: !!(el && el.getClientRects().length), top: r ? Math.round(r.top) : null,
        pin: Math.round(JUMP_UI.pinnedOffset()), atEnd: scrollY >= document.documentElement.scrollHeight - innerHeight - 2, all: DZ.tell.every(t => !!document.getElementById('dz-tell-' + t.id)), back: (document.getElementById('backbtn') || {}).textContent}; }, a8);
      check(d8.view === 'dz' && d8.dzview === 'tell' && d8.found && d8.vis && d8.all && (Math.abs(d8.top - d8.pin) <= 30 || d8.atEnd) && /tell apart/.test(d8.back || ''),
        `${w} px: its last button opens that comparison in the Diseases tab (${a8}), Back offered`, d8);
      await side(p, w, 'Diseases comparison');
      await p.click('#backbtn');
      bk = await p.evaluate(() => ({view: VIEW, y: Math.round(scrollY)}));
      check(bk.view === 'tell' && Math.abs(bk.y - y8) <= 2 && await st(p, 'tell') === '1:false 2:true', `${w} px: Back returns to Tell apart at the same scroll position`, {bk, y8, st: await st(p, 'tell')});
      await p.click('#rfold-tell-2 [data-rfdz="pairs"]');
      const d9 = await p.evaluate(() => ({view: VIEW, dzview: DZ_UI.state.view, tab: (document.querySelector('#v-dz .dzviews [aria-selected="true"]') || {}).textContent}));
      check(d9.view === 'dz' && d9.dzview === 'pairs' && d9.tab === 'Drugs that get confused', `${w} px: "Drugs that get confused" opens that view of the Diseases tab`, d9);
      await p.click('#backbtn');

      // C9. a Drug list card's "Reference: target table"; C10. the Diseases tab's "Watch how it works"
      await p.evaluate(() => { RET.length = 0; backBtn(); show('drugs'); }); await p.waitForTimeout(200);
      const a9 = await p.evaluate(() => { const b = document.querySelector('#v-drugs [data-dl="ref"]'); if (!b) return null; b.click(); return b.dataset.a; });
      wq = a9 ? await where(p, a9) : {found: false};
      check(a9 && wq.view === 'ref' && wq.vis && wq.open && wq.top >= 0 && wq.top < wq.vh, `${w} px: a Drug list card's "Reference: target table" shows its row (${a9}) in an open folder`, wq);
      await p.evaluate(() => { RET.length = 0; backBtn(); show('dz'); });
      const a10 = await p.evaluate(() => { const by = document.querySelector('#v-dz .dzviews [data-view="cards"]'); if (by) by.click();
        const cards = [...document.querySelectorAll('#v-dz .dzpicker button')].map(b => b.dataset.card);
        for (const c of cards) { document.querySelector(`#v-dz .dzpicker button[data-card="${c}"]`).click(); const o = document.querySelector('#v-dz [data-dz="openall"]'); if (o && !/Close all/.test(o.textContent)) o.click();
          const b = document.querySelector('#v-dz .dzfig[data-jump^="guide:"]'); if (b) { b.click(); return b.dataset.jump.split(':')[1]; } }
        return null; });
      if (a10) { wq = await where(p, a10); check(wq.view === 'guide' && wq.vis && wq.open && wq.top >= 0 && wq.top < wq.vh, `${w} px: "Watch how it works" in the Diseases tab shows its figure (${a10}) in an open folder of Guides`, wq); }
      else check(false, `${w} px: a Diseases card has a "Watch how it works" button into Guides`);
      check(await stored(p) === null, `${w} px: none of these taps stored a folder state`, await stored(p));
      check(!errs.length, `${w} px: no page error during the taps`, errs.slice(0, 4));
      await ctx.close();
    }

    /* ---------- D. the reader's own open and close ---------- */
    if (run('D')) {
      const {ctx, p, errs} = await open(browser, w);
      await p.evaluate(() => show('ref'));
      await p.click('#rfold-ref-1 > summary');
      check(await st(p, 'ref') === '1:true 2:true', `${w} px: a tap on the Exam 1 header of Reference opens it`, await st(p, 'ref'));
      const key = await p.evaluate(() => EXAMFOLD_UI.key());
      check(/:readExamOpen$/.test(key) && await stored(p) === '{"ref":{"1":true}}', `${w} px: the tap is stored under ${key}`, await stored(p));
      await p.evaluate(() => show('guide'));
      check(await st(p, 'guide') === '1:false 2:true', `${w} px: Guides keeps its own state (Exam 1 still closed there)`, await st(p, 'guide'));
      await p.evaluate(() => { show('topics'); show('ref'); });
      check(await st(p, 'ref') === '1:true 2:true', `${w} px: Reference drawn again keeps Exam 1 open`, await st(p, 'ref'));
      await p.focus('#rfold-ref-2 > summary'); await p.keyboard.press('Enter');
      check(await st(p, 'ref') === '1:true 2:false' && await stored(p) === '{"ref":{"1":true,"2":false}}', `${w} px: Enter on the focused Exam 2 header closes it, and that is stored`, [await st(p, 'ref'), await stored(p)]);
      check(await p.evaluate(() => localStorage.getItem(NS + ':examOpen') === null && localStorage.getItem(NS + ':deckOpen') === null), `${w} px: the Topics folders' keys (examOpen, deckOpen) are not written`);
      // a jump into the folder the reader closed opens it for the visit only
      await p.evaluate(() => { show('topics'); jump('ref', 'ref-p5-ftu'); });
      check(await st(p, 'ref') === '1:true 2:true' && await stored(p) === '{"ref":{"1":true,"2":false}}', `${w} px: a jump into the folder the reader closed opens it and leaves the stored choice as it was`, [await st(p, 'ref'), await stored(p)]);
      await p.evaluate(() => { RET.length = 0; backBtn(); show('topics'); show('ref'); });
      await p.waitForTimeout(600);                      // the core writes the place 400 ms after the last move
      await p.reload(); await ready(p); await p.waitForTimeout(300);
      check(await p.evaluate(() => VIEW) === 'ref' && await st(p, 'ref') === '1:true 2:false', `${w} px: after a reload Reference comes back with the reader's folders`, [await p.evaluate(() => VIEW), await st(p, 'ref')]);
      await p.evaluate(() => show('tell'));
      check(await st(p, 'tell') === '1:false 2:true', `${w} px: Tell apart is still at its usual folders`, await st(p, 'tell'));
      // a stored value that is not what this file wrote is read as nothing
      await p.evaluate(() => { localStorage.setItem(EXAMFOLD_UI.key(), '[1,2'); show('topics'); show('ref'); });
      check(await st(p, 'ref') === '1:false 2:true', `${w} px: a damaged stored value is read as no choice`, await st(p, 'ref'));
      await p.click('#rfold-ref-1 > summary');
      check(await stored(p) === '{"ref":{"1":true}}', `${w} px: and the next tap writes a good one`, await stored(p));
      await side(p, w, 'toggles');
      check(!errs.length, `${w} px: no page error while opening and closing`, errs.slice(0, 4));
      await ctx.close();
    }

    /* ---------- E. the place kept across a reload ---------- */
    if (run('E')) {
      const {ctx, p, errs} = await open(browser, w);
      await p.evaluate(() => show('ref'));
      await p.click('#v-ref .refnav-wrap > summary');
      await p.click('#v-ref .refnav a[href="#ref-l2"]');
      await p.mouse.wheel(0, 260); await p.waitForTimeout(800);
      const TOP = () => { const pane = document.querySelector('main > section:not(.hide)'); const txt = el => (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
        for (const el of pane.querySelectorAll('[id], h2, h3, h4, summary, p, li, tr, figure, .opt, .subrow')) { const r = el.getBoundingClientRect(); if (!r.height || r.top < 0) continue;
          if (el.id) return {id: el.id, top: Math.round(r.top)}; const t = txt(el); if (!t) continue;
          return {tag: el.tagName, txt: t, n: [...pane.querySelectorAll(el.tagName)].filter(x => txt(x) === t).indexOf(el), top: Math.round(r.top)}; } return null; };
      const AT = k => { const pane = document.querySelector('main > section:not(.hide)'); const txt = el => (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
        const el = k.id ? document.getElementById(k.id) : [...pane.querySelectorAll(k.tag)].filter(x => txt(x) === k.txt)[k.n]; return el ? Math.round(el.getBoundingClientRect().top) : null; };
      const before = await p.evaluate(TOP);
      await p.reload(); await ready(p); await p.waitForTimeout(1500);
      const after = await p.evaluate(AT, before);
      check(await p.evaluate(() => VIEW) === 'ref' && after !== null && Math.abs(after - before.top) <= 4 && await st(p, 'ref') === '1:true 2:true',
        `${w} px: a reload inside a folder that a jump opened comes back to the same line at the same height, the folder open`, {before, after, st: await st(p, 'ref')});
      check(await stored(p) === null, `${w} px: and the folder is still not stored as the reader's choice`, await stored(p));
      check(!errs.length, `${w} px: no page error across the reload`, errs.slice(0, 4));
      await ctx.close();
      // the usual case: reading in the open Exam 2 folder with Exam 1 closed above it
      for (const [v, id] of [['ref', 'ref-p7-pso'], ['guide', 'gobj-p6-5']]) {
        const o = await open(browser, w);
        await o.p.evaluate(({v, id}) => { show(v); const t = document.getElementById(id); window.scrollTo(0, t.getBoundingClientRect().top + scrollY - 140); }, {v, id});
        await o.p.mouse.wheel(0, 120); await o.p.waitForTimeout(800);
        const rec = await o.p.evaluate(() => { const pl = JSON.parse(sessionStorage.getItem(NS + ':place') || 'null'); if (!pl || !pl.a) return {pl};
          const pane = document.getElementById('v-' + pl.v), txt = el => (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
          const el = pl.a.id ? document.getElementById(pl.a.id) : [...pane.querySelectorAll(pl.a.tag)].filter(x => txt(x) === pl.a.txt)[pl.a.n];
          const f = el && el.closest('.rfold'); return {v: pl.v, a: pl.a.id || pl.a.tag + ' "' + pl.a.txt.slice(0, 40) + '"', fold: f ? f.id : null, open: f ? f.open : null, seen: !!el && el.checkVisibility(), top: el ? Math.round(el.getBoundingClientRect().top) : null, opened: pl.open}; });
        check(rec.v === v && rec.fold === `rfold-${v}-2` && rec.open && rec.seen && rec.top >= 0 && rec.top < 844,
          `${w} px: the line the core saves while reading Exam 2 of ${NAMES[v]} is one on screen, not a line of the closed Exam 1 folder`, rec);
        const before = await o.p.evaluate(TOP);
        await o.p.reload(); await ready(o.p); await o.p.waitForTimeout(1500);
        const after = await o.p.evaluate(AT, before);
        check(await o.p.evaluate(() => VIEW) === v && after !== null && Math.abs(after - before.top) <= 4 && await st(o.p, v) === '1:false 2:true',
          `${w} px: a reload while reading Exam 2 of ${NAMES[v]} comes back to the same line at the same height, Exam 1 still closed`, {before, after, st: await st(o.p, v)});
        check(!o.errs.length, `${w} px: no page error across that reload`, o.errs.slice(0, 3));
        await o.ctx.close();
      }
      // records written before the folders existed (a reader who reloads into this version)
      for (const [label, rec, want] of [
        ['a line inside what is now Exam 1 of Reference', {v: 'ref', y: 900, a: {id: 'ref-l2', off: 120}, open: []}, {st: '1:true 2:true', id: 'ref-l2', top: 120}],
        ['a line inside what is now Exam 2 of Guides', {v: 'guide', y: 5000, a: {id: 'gobj-p6-1', off: 200}, open: []}, {st: '1:false 2:true', id: 'gobj-p6-1', top: 200}],
        ['the top of Tell apart', {v: 'tell', y: 0, a: null, open: []}, {st: '1:false 2:true'}]]) {
        const seed = `try{ if(!sessionStorage.getItem('__seeded')){ var ns = ${JSON.stringify(await nsOf(browser))}; sessionStorage.setItem(ns + ':place', JSON.stringify(Object.assign(${JSON.stringify(rec)}, {at: Date.now()}))); sessionStorage.setItem('__seeded','1'); } }catch(e){}`;
        const o = await open(browser, w, {init: [seed]});
        await o.p.waitForTimeout(1500);
        const r = await o.p.evaluate(id => { const t = id && document.getElementById(id); return {view: VIEW, vis: t ? !!t.getClientRects().length : null, top: t ? Math.round(t.getBoundingClientRect().top) : null}; }, want.id || null);
        const s = await st(o.p, rec.v);
        check(r.view === rec.v && s === want.st && (!want.id || (r.vis && Math.abs(r.top - want.top) <= 4)), `${w} px: a place record from before the folders, ${label}: the folders ${want.st}${want.id ? ', the line at ' + want.top + ' px' : ''}`, {r, s});
        check(!o.errs.length, `${w} px: no page error with that record`, o.errs.slice(0, 3));
        await o.ctx.close();
      }
    }

    /* ---------- F. inside the Exam 1 folder once it is open ---------- */
    if (run('F')) {
      const {ctx, p, errs} = await open(browser, w);
      await p.evaluate(() => show('guide'));
      const pre = await p.evaluate(() => { const f = document.getElementById('rfold-guide-1'); return {figs: f.querySelectorAll('figure').length, armed: [...f.querySelectorAll('[data-anim]')].every(c => !!c.querySelector('.stepnow') && !!c.querySelector('[data-go="big"]')),
        steppers: f.querySelectorAll('[data-anim]').length, hidden: [...f.querySelectorAll('figure')].every(x => !x.checkVisibility())}; });
      check(pre.figs > 20 && pre.steppers > 10 && pre.hidden && pre.armed, `${w} px: the ${pre.steppers} step-through figures of the closed Exam 1 folder of Guides already have their step line and Enlarge button`, pre);
      await p.click('#rfold-guide-1 > summary');
      // a step-through figure
      const stepFig = async key => {
        const ctl = p.locator(`#rfold-guide-1 [data-anim="${key}"]`).first();
        await ctl.scrollIntoViewIfNeeded();
        const before = await ctl.evaluate(c => { const fig = c.closest('figure'); return {n: fig.querySelectorAll('svg .st').length, at: [...fig.querySelectorAll('svg .st')].findIndex(s => s.classList.contains('on')), now: c.querySelector('.stepnow').textContent,
          w: Math.round(fig.querySelector('svg').getBoundingClientRect().width), h: Math.round(fig.querySelector('svg').getBoundingClientRect().height)}; });
        await ctl.locator('button[data-go="1"]').click();
        await p.waitForTimeout(80);
        const after = await ctl.evaluate(c => { const fig = c.closest('figure'); return {at: [...fig.querySelectorAll('svg .st')].findIndex(s => s.classList.contains('on')), now: c.querySelector('.stepnow').textContent}; });
        return {before, after, ok: before.n > 1 && before.w > 100 && before.h > 50 && before.at === 0 && after.at === 1 && after.now === `Step 2 of ${before.n}`};
      };
      let f = await stepFig('acne-cascade');
      check(f.ok, `${w} px: the step-through figure acne-cascade in Exam 1 of Guides is drawn (${f.before.w}×${f.before.h} px) and Next goes to step 2 of ${f.before.n}`, f);
      const big = p.locator('#rfold-guide-1 [data-anim="acne-cascade"]').first();
      const yb = await p.evaluate(() => Math.round(scrollY));
      await big.locator('[data-go="big"]').click();
      const isBig = await big.evaluate(c => c.closest('figure').classList.contains('big'));
      await p.keyboard.press('Escape');
      const bg = await big.evaluate(c => ({big: c.closest('figure').classList.contains('big'), y: Math.round(scrollY)}));
      check(isBig && !bg.big && Math.abs(bg.y - yb) <= 2, `${w} px: Enlarge shows it across the screen and Escape puts the page back where it was`, {isBig, bg, yb});
      // a reaction figure (Dr. Sikazwe's schemes) and a chemical-basis figure
      f = await stepFig('rx-crisaborole');
      check(f.ok, `${w} px: the reaction figure rx-crisaborole is drawn (${f.before.w}×${f.before.h} px) and steps`, f);
      const rx = await p.evaluate(() => { const el = document.getElementById('rx-anthralin'); if (!el) return null; el.scrollIntoView(); const fig = el.closest('figure') || el, s = fig.querySelector('svg, img'); const r = s && s.getBoundingClientRect();
        return {w: r ? Math.round(r.width) : 0, h: r ? Math.round(r.height) : 0, open: el.closest('.rfold').open}; });
      check(rx && rx.w > 100 && rx.h > 40 && rx.open, `${w} px: the reaction figure rx-anthralin (no steps) is drawn (${rx && rx.w}×${rx && rx.h} px)`, rx);
      // a narrated figure
      const lis = p.locator('#rfold-guide-1 [data-dnplay="fig-ribosome"]').first();
      await lis.scrollIntoViewIfNeeded();
      await lis.click();
      await p.waitForTimeout(120);
      const nar = await p.evaluate(() => { const b = document.querySelector('#rfold-guide-1 [data-dnplay="fig-ribosome"]'); const out = {playing: DIA_NARR_UI.playing(), pressed: b.getAttribute('aria-pressed'), label: b.textContent.trim()}; DIA_NARR_UI.stop(); return out; });
      check(nar.playing && nar.playing.key === 'fig-ribosome' && nar.pressed === 'true', `${w} px: "Listen" on the narrated figure fig-ribosome plays (step ${nar.playing && nar.playing.step})`, nar);
      // tables: measured when the folder opened
      const tb = await p.evaluate(() => { const bs = [...document.querySelectorAll('#rfold-guide-1 .tscroll')], ov = b => b.scrollWidth - b.clientWidth > 1;
        return {boxes: bs.length, over: bs.filter(ov).length, unmarked: bs.filter(b => ov(b) !== b.classList.contains('wide')).length,
          cue: bs.filter(b => { const c = b.previousElementSibling; return c && c.classList.contains('tcue') && c.hidden === ov(b); }).length, cards: document.querySelectorAll('#rfold-guide-1 table.reftab.cards').length}; });
      check(tb.boxes > 0 && !tb.unmarked && !tb.cue && (w !== 390 || tb.over > 0), `${w} px: of the ${tb.boxes} tables in Exam 1 of Guides, the ${tb.over} wider than the screen are marked wide with their "More columns" line, the others are not`, tb);
      await side(p, w, 'Exam 1 of Guides open');
      // a walkthrough player from its bar
      const bar = p.locator('#rfold-guide-1 .wkbar [data-wkopen]').first();
      await bar.scrollIntoViewIfNeeded();
      await bar.click();
      await p.waitForTimeout(700);
      const pl = await p.evaluate(() => { const x = document.querySelector('#rfold-guide-1 .wkpanel'); if (!x) return {panel: false}; const im = x.querySelector('img'), sv = x.querySelector('svg');
        return {panel: true, vis: x.getClientRects().length > 0, w: Math.round(x.getBoundingClientRect().width), img: im ? im.naturalWidth : null, drawn: !!sv, play: !!x.querySelector('[data-wkplay]'), side: document.documentElement.scrollWidth - innerWidth}; });
      check(pl.panel && pl.vis && pl.play && (pl.img > 0 || pl.drawn) && pl.side <= 0, `${w} px: a walkthrough bar in Exam 1 opens its player with the slide loaded (${pl.img ? pl.img + ' px wide image' : 'drawn figure'})`, pl);
      await p.evaluate(() => document.querySelectorAll('.wkpanel').forEach(x => WALK_UI.close(x.dataset.wkp)));
      // Reference: its two figures and its tables, the folder opened by the header
      await p.evaluate(() => show('ref'));
      await p.click('#rfold-ref-1 > summary');
      const rf = await p.evaluate(() => { const f = document.getElementById('rfold-ref-1'); const bs = [...f.querySelectorAll('.tscroll')], ov = b => b.scrollWidth - b.clientWidth > 1;
        const figs = [...f.querySelectorAll('figure')].map(x => { const s = x.querySelector('svg'); return s ? Math.round(s.getBoundingClientRect().width) : 0; });
        return {boxes: bs.length, unmarked: bs.filter(b => ov(b) !== b.classList.contains('wide')).length, figs, rows: f.querySelectorAll('tr[id^="tgt-"]').length, want: (REFERENCE_HTML.match(/<tr id="tgt-/g) || []).length,
          rowVis: [...f.querySelectorAll('tr[id^="tgt-"]')].every(r => r.checkVisibility() && r.getClientRects().length > 0), side: document.documentElement.scrollWidth - innerWidth}; });
      check(rf.boxes > 10 && !rf.unmarked && rf.figs.length === 2 && rf.figs.every(x => x > 100) && rf.rows === rf.want && rf.rows > 40 && rf.rowVis && rf.side <= 0,
        `${w} px: Exam 1 of Reference opened by its header: ${rf.boxes} tables marked right, both figures drawn, the ${rf.rows} drug-target rows on the page`, rf);
      check(!errs.length, `${w} px: no page error inside the opened folders`, errs.slice(0, 4));
      await ctx.close();
    }
    // tables in a folder opened at a width where Reference has wide tables in Exam 1 (a tablet in portrait)
    if (run('F') && w === 1280) {
      const {ctx, p, errs} = await open(browser, 768, {height: 1024});
      await p.evaluate(() => show('ref'));
      await p.click('#rfold-ref-1 > summary');
      const t = await p.evaluate(() => { const bs = [...document.querySelectorAll('#rfold-ref-1 .tscroll')], ov = b => b.scrollWidth - b.clientWidth > 1;
        return {over: bs.filter(ov).length, unmarked: bs.filter(b => ov(b) !== b.classList.contains('wide')).length, cue: bs.filter(b => { const c = b.previousElementSibling; return c && c.classList.contains('tcue') && c.hidden === ov(b); }).length,
          side: document.documentElement.scrollWidth - innerWidth}; });
      check(t.over > 0 && !t.unmarked && !t.cue && t.side <= 0, `768 px: the ${t.over} wide tables in Exam 1 of Reference are marked with their "More columns" line as soon as the folder opens`, t);
      check(!errs.length, '768 px: no page error', errs.slice(0, 3));
      await ctx.close();
    }

    /* ---------- G. the browser's own way into a closed folder; printing ---------- */
    if (run('G')) {
      const {ctx, p, errs} = await open(browser, w);
      await p.evaluate(() => show('guide'));
      const fr = await p.evaluate(async () => { const f = document.getElementById('rfold-guide-1'); const before = f.open; location.hash = '#gobj-mc-acne'; await new Promise(r => setTimeout(r, 400));
        const t = document.getElementById('gobj-mc-acne'), bs = [...f.querySelectorAll('.tscroll')];
        return {before, after: f.open, vis: t.getClientRects().length > 0, top: Math.round(t.getBoundingClientRect().top), unmarked: bs.filter(b => (b.scrollWidth - b.clientWidth > 1) !== b.classList.contains('wide')).length}; });
      check(!fr.before && fr.after && fr.vis && !fr.unmarked && await stored(p) === null,
        `${w} px: the browser's own navigation to a place inside the closed Exam 1 folder (a #fragment; find-in-page uses the same step) opens it, its tables measured, nothing stored`, fr);
      await p.evaluate(() => { history.replaceState(null, '', location.pathname); show('topics'); show('ref'); });
      const y0 = await p.evaluate(() => { window.scrollTo(0, 400); return Math.round(scrollY); });
      const pr = await p.evaluate(async y0 => { const s = () => [...document.querySelectorAll('.rfold')].map(f => f.dataset.view + f.dataset.exam + ':' + f.open).join(' ');
        const a = s(); window.dispatchEvent(new Event('beforeprint')); const b = s(), h = document.documentElement.scrollHeight; window.dispatchEvent(new Event('afterprint')); await new Promise(r => setTimeout(r, 50));
        return {a, b, c: s(), h, y: Math.round(scrollY), y0}; }, y0);
      check(/:false/.test(pr.a) && !/:false/.test(pr.b) && pr.c === pr.a && Math.abs(pr.y - pr.y0) <= 2 && await stored(p) === null,
        `${w} px: printing opens every folder for the print and puts them and the page back after; nothing stored`, pr);
      check(!errs.length, `${w} px: no page error`, errs.slice(0, 3));
      await ctx.close();
    }

    /* ---------- H. when the folders cannot be drawn ---------- */
    if (run('H')) {
      const {ctx, p, errs} = await open(browser, w);
      const r = await p.evaluate(() => {
        const real = Element.prototype.appendChild; let thrown = 0;
        Element.prototype.appendChild = function(c){ if (this.classList && this.classList.contains('rfbody')) { thrown++; throw new Error('test: a section could not be moved'); } return real.apply(this, arguments); };
        const out = {};
        for (const v of ['guide', 'ref']) { show(v); const el = document.getElementById('v-' + v);
          out[v] = {folds: el.querySelectorAll('.rfold').length, top: el.querySelectorAll(':scope > h3, :scope > h2.gdeck').length, bars: el.querySelectorAll('.wkbar').length, index: !!el.querySelector('.wkindex'), nav: el.querySelectorAll('.refnav a').length,
            first: document.getElementById(v === 'guide' ? 'gobj-l1-1' : 'ref-l1-classes').getClientRects().length > 0}; }
        Element.prototype.appendChild = real; out.thrown = thrown;
        jump('ref', 'ref-p5-ftu'); const t = document.getElementById('ref-p5-ftu'); out.jump = {vis: t.getClientRects().length > 0, top: Math.round(t.getBoundingClientRect().top)};
        return out; });
      check(r.thrown >= 2 && r.guide.folds === 0 && r.guide.top > 5 && r.guide.bars > 0 && r.guide.index && r.guide.first && r.ref.folds === 0 && r.ref.top > 20 && r.ref.nav === r.ref.top && r.ref.first,
        `${w} px: when moving a section fails, the tab is drawn flat with everything else in place (walkthrough bars, index, jump list)`, r);
      check(r.jump.vis && r.jump.top >= 0 && r.jump.top < 300, `${w} px: and a jump still lands on its section`, r.jump);
      const lines = errs.filter(e => /exam folders could not be drawn/.test(e));
      check(lines.length === 2 && errs.length === 2, `${w} px: one console line per tab says so, and nothing else is logged`, errs.slice(0, 4));
      await ctx.close();
    }
  }

  const SIZES2 = [[390, 844], [1376, 1032]];        // a phone; an iPad Pro 13 window
  /* ---------- I. a reload with a closed folder's own header as the first line on screen ---------- */
  if (run('I')) for (const [w, h] of SIZES2) {
    console.log(`\n=== ${w}x${h}: a reload with the closed Exam 1 header as the first line ===`);
    // Exam 1 closed as first drawn, closed by the reader (two taps on its header), and, for the other direction, opened by the reader
    for (const v of ['ref', 'tell']) for (const [how, taps, want, key] of [['as first drawn', 0, '1:false 2:true', null], ['closed by the reader', 2, '1:false 2:true', `{"${v}":{"1":false}}`], ['opened by the reader', 1, '1:true 2:true', `{"${v}":{"1":true}}`]]) {
      const o = await open(browser, w, {height: h});
      await o.p.evaluate(v => show(v), v);
      for (let i = 0; i < taps; i++) await o.p.click(`#rfold-${v}-1 > summary`);
      // the header 18 px below the top of the window (or as near as the page scrolls), then a move by the reader: the core saves the place
      await o.p.evaluate(v => { const f = document.getElementById(`rfold-${v}-1`); window.scrollTo(0, f.getBoundingClientRect().top + scrollY - 18); }, v);
      await o.p.mouse.wheel(0, 1); await o.p.waitForTimeout(800);
      const snap = () => o.p.evaluate(v => { const f = document.getElementById(`rfold-${v}-1`), pl = JSON.parse(sessionStorage.getItem(NS + ':place') || 'null');
        return {view: VIEW, st: [...document.querySelectorAll(`#v-${v} > .rfold`)].map(x => x.dataset.exam + ':' + x.open).join(' '), page: document.documentElement.scrollHeight,
          head: Math.round(f.getBoundingClientRect().top), rec: pl && pl.a ? pl.a.id || pl.a.tag : null, stored: localStorage.getItem(EXAMFOLD_UI.key())}; }, v);
      const before = await snap(), state = want === '1:false 2:true' ? 'closed' : 'open';
      check(before.rec === `rfold-${v}-1` && before.st === want && before.head >= 0 && before.head < h && before.stored === key,
        `${w}x${h}, ${NAMES[v]}, Exam 1 ${how}: with the ${state} Exam 1 header as the first line, the line the core saves is the folder itself`, before);
      await o.p.reload(); await ready(o.p); await o.p.waitForTimeout(1500);
      const after = await snap();
      check(after.view === v && after.st === before.st && after.page === before.page && Math.abs(after.head - before.head) <= 4 && after.stored === before.stored,
        `${w}x${h}, ${NAMES[v]}, Exam 1 ${how}: after the reload Exam 1 is still ${state}, the page is as tall as before (${before.page} px) and the header is at the same height`, {before, after});
      check(!o.errs.length, `${w}x${h}, ${NAMES[v]}, Exam 1 ${how}: no page error across the reload`, o.errs.slice(0, 3));
      await o.ctx.close();
    }
  }

  /* ---------- K. the reader closes a folder that holds what is being read aloud ---------- */
  if (run('K')) for (const [w, h] of SIZES2) {
    console.log(`\n=== ${w}x${h}: closing a folder while something inside it is read aloud ===`);
    const {ctx, p, errs} = await open(browser, w, {height: h, clip: longWav});
    const strip = v => tabTap(p, v);
    const head = async n => { await p.evaluate(() => window.scrollTo(0, 0)); await p.click(`#rfold-guide-${n} > summary`); };
    const mine = () => p.evaluate(() => { try { return (JSON.parse(localStorage.getItem(EXAMFOLD_UI.key())) || {}).guide || null; } catch (e) { return 'unreadable'; } });
    const walk = () => p.evaluate(() => { const s = WALK_UI.state(), c = NARR.current(), x = s && WALK_UI.panel(s.id), b = x && x.querySelector('[data-wkplay]');
      return {id: s && s.id, playing: !!(s && s.playing), handle: c ? {owner: c.owner, paused: c.paused, done: c.done} : null, panel: !!x, seen: !!x && x.checkVisibility(), button: b ? b.textContent.trim() : null}; });
    await strip('guide');
    await head(1);
    const bar = p.locator('#rfold-guide-1 .wkbar [data-wkopen]').first();
    await bar.scrollIntoViewIfNeeded();
    const id = await bar.getAttribute('data-wkopen');
    await bar.click();
    await p.waitForTimeout(250);
    let s = await walk();
    check(s.id === id && s.playing && s.seen && s.handle && !s.handle.paused && await st(p, 'guide') === '1:true 2:true', `${w}x${h}: a walkthrough (${id}) plays in the Exam 1 folder of Guides, which the reader opened`, s);
    // another folder closed and opened: the walkthrough is not in it and plays on
    await head(2); await head(2);
    s = await walk();
    check(s.playing && s.handle && !s.handle.paused && await st(p, 'guide') === '1:true 2:true', `${w}x${h}: closing and opening the Exam 2 header leaves it playing`, s);
    await head(1);
    await p.waitForTimeout(100);
    s = await walk();
    check(await st(p, 'guide') === '1:false 2:true' && s.id === id && !s.playing && s.handle && s.handle.paused && !s.handle.done && s.button === '▶ Play' && (await mine() || {})['1'] === false,
      `${w}x${h}: a tap on the Exam 1 header closes the folder and pauses the walkthrough inside it (its button reads Play); the reader's choice is stored`, {s, st: await st(p, 'guide'), stored: await mine()});
    await strip('ref'); await strip('guide');
    s = await walk();
    check(await st(p, 'guide') === '1:false 2:true' && !s.playing && s.panel && !s.seen && (await mine() || {})['1'] === false,
      `${w}x${h}: Guides drawn again keeps the folder the reader closed, the walkthrough still paused inside it`, {s, st: await st(p, 'guide'), stored: await mine()});
    // the walkthrough index goes to it: the folder opens for the visit, the stored choice stays
    await p.evaluate(() => window.scrollTo(0, 0));
    await p.click('#wkindex > summary');
    await p.locator(`#wkindex button[data-wid="${id}"]`).click();
    await p.waitForTimeout(150);
    s = await walk();
    check(await st(p, 'guide') === '1:true 2:true' && s.panel && s.seen && s.id === id && (await mine() || {})['1'] === false,
      `${w}x${h}: its entry in the walkthrough index opens the folder again with the player on screen; the stored choice is as it was`, {s, st: await st(p, 'guide'), stored: await mine()});
    await p.click('#backbtn');
    await strip('ref'); await strip('guide');
    s = await walk();
    check(await st(p, 'guide') === '1:true 2:true' && s.panel && s.seen, `${w}x${h}: after that, a player that is open keeps its folder open when Guides is drawn again`, {s, st: await st(p, 'guide')});
    await p.evaluate(() => { WALK_UI.stop(); document.querySelectorAll('.wkpanel').forEach(x => WALK_UI.close(x.dataset.wkp)); });

    // a narrated figure
    const fig = () => p.evaluate(() => { const d = DIA_NARR_UI.playing(), c = NARR.current(), b = document.querySelector('#rfold-guide-1 [data-dnplay="fig-ribosome"]');
      return {playing: d, handle: c ? {owner: c.owner, paused: c.paused, done: c.done} : null, label: b ? b.textContent.trim() : null, pressed: b ? b.getAttribute('aria-pressed') : null}; });
    const lis = p.locator('#rfold-guide-1 [data-dnplay="fig-ribosome"]').first();
    await lis.scrollIntoViewIfNeeded(); await lis.click();
    await p.waitForTimeout(200);
    let d = await fig();
    check(d.playing && d.playing.key === 'fig-ribosome' && !d.playing.paused && d.pressed === 'true', `${w}x${h}: "Listen" on the narrated figure fig-ribosome plays in the open Exam 1 folder`, d);
    await head(1);
    await p.waitForTimeout(100);
    d = await fig();
    check(await st(p, 'guide') === '1:false 2:true' && d.playing && d.playing.key === 'fig-ribosome' && d.playing.paused && d.handle && d.handle.owner === 'dianarr' && d.handle.paused && d.label === '▶ Resume',
      `${w}x${h}: a tap on the Exam 1 header closes the folder and pauses the figure's narration (its button reads Resume)`, {d, st: await st(p, 'guide')});
    await head(1);
    await lis.scrollIntoViewIfNeeded(); await lis.click();
    await p.waitForTimeout(150);
    d = await fig();
    check(d.playing && !d.playing.paused && d.pressed === 'true', `${w}x${h}: with the folder open again, Resume goes on reading`, d);
    await p.evaluate(() => DIA_NARR_UI.stop());
    check(!errs.length, `${w}x${h}: no page error`, errs.slice(0, 4));
    await ctx.close();
  }

  /* ---------- L. a Tell apart row into the Diseases tab, and Back ---------- */
  if (run('L')) for (const [w, h] of SIZES2) {
    console.log(`\n=== ${w}x${h}: the Diseases tab after a Tell apart row and Back ===`);
    const {ctx, p, errs} = await open(browser, w, {height: h});
    const strip = v => tabTap(p, v);
    const dzs = () => p.evaluate(() => ({VIEW, view: DZ_UI.state.view, q: DZ_UI.state.q, card: DZ_UI.state.card}));
    const row = async sel => { const r = p.locator(sel); await r.scrollIntoViewIfNeeded(); const y = await p.evaluate(() => Math.round(scrollY)); await r.click(); return y; };
    await strip('dz');
    await p.fill('#dzq', 'permethrin');
    const d0 = await dzs();
    check(d0.view === 'cards' && d0.q === 'permethrin', `${w}x${h}: the Diseases tab is on "By disease" with "permethrin" typed in its search`, d0);
    await strip('tell');
    const y1 = await row('#rfold-tell-2 [data-rfdz="tell"] >> nth=-1');
    let d = await dzs();
    check(d.VIEW === 'dz' && d.view === 'tell' && d.q === '', `${w}x${h}: a row of the Tell apart Exam 2 list opens the Diseases tab on its Tell apart view, the search cleared`, d);
    await p.click('#backbtn');
    d = await dzs();
    const bk = await p.evaluate(() => Math.round(scrollY));
    check(d.VIEW === 'tell' && Math.abs(bk - y1) <= 2 && await st(p, 'tell') === '1:false 2:true' && d.view === 'cards' && d.q === 'permethrin' && d.card === d0.card,
      `${w}x${h}: Back returns to Tell apart at the same scroll position, and the Diseases tab has its sub-view and search back`, {d, bk, y1});
    await strip('dz');
    const shown = await p.evaluate(() => ({input: (document.getElementById('dzq') || {}).value, tab: (document.querySelector('#v-dz .dzviews [aria-selected="true"]') || {}).textContent, results: document.querySelectorAll('#v-dz .dzres button').length}));
    check(shown.input === 'permethrin' && shown.tab === 'By disease' && shown.results > 0, `${w}x${h}: the Diseases tab opened from the strip shows "By disease" with the search and its ${shown.results} results as before`, shown);
    // what the reader chooses in the Diseases tab after the row is kept
    await strip('tell');
    await row('#rfold-tell-2 [data-rfdz="pairs"]');
    await p.click('#v-dz .dzviews [data-view="rules"]');
    await p.click('#backbtn');
    d = await dzs();
    check(d.VIEW === 'tell' && d.view === 'rules' && d.q === '', `${w}x${h}: a sub-view the reader chose in the Diseases tab after the row is kept by Back`, d);
    await row('#rfold-tell-2 [data-rfdz="tell"] >> nth=0');
    await p.fill('#dzq', 'acne');
    await p.click('#backbtn');
    d = await dzs();
    check(d.VIEW === 'tell' && d.view === 'tell' && d.q === 'acne', `${w}x${h}: a search the reader typed there after the row is kept by Back`, d);
    check(await stored(p) === null && await over(p) <= 0, `${w}x${h}: nothing stored, no sideways scroll`, [await stored(p), await over(p)]);
    check(!errs.length, `${w}x${h}: no page error`, errs.slice(0, 4));
    await ctx.close();
  }

  /* ---------- a jump with motion on (the page scrolls smoothly), once ---------- */
  if (run('M')) {
    const {ctx, p, errs} = await open(browser, 390, {motion: 'no-preference'});
    await p.evaluate(() => jump('guide', 'gobj-mc-psosys'));
    await p.waitForTimeout(3200);                    // jump_ui.js lands again at 0.5, 1.2 and 2.4 s while the reader has not moved
    const wq = await where(p, 'gobj-mc-psosys');
    check(landed(wq) && wq.fold === 'rfold-guide-1', '390 px, motion on: a jump deep into the closed Exam 1 folder of Guides ends on its section below the pinned strip', wq);
    check(!errs.length, '390 px, motion on: no page error', errs.slice(0, 3));
    await ctx.close();
  }

  check(!sideways.length, 'no sideways scroll at any step', sideways);
  await browser.close();
  if (ONLY && !fail) { console.log(`NOT RUN: ${NAME}: only parts ${ONLY} were run (${n} checks passed); run it without EXAMFOLD_ONLY for a result`); process.exit(2); }
  console.log((fail ? 'FAIL' : 'PASS') + `: ${NAME}: ${fail ? fail + ' of ' : ''}${n} checks${fail ? ' failed' : ' passed'}`);
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); console.log(`FAIL: ${NAME}: the test stopped: ${String(e && e.message || e).split('\n')[0]}`); process.exit(1); });

/* ==========================================================================
   NARRATION CHECK, PHAR 4346 DEENT (walk_ui.js, why_ui.js and their data)
   --------------------------------------------------------------------------
   Checks, with no browser:
   - course.js `files` lists the narration data files (those on disk) before
     walk_ui.js, and walk_ui.js before why_ui.js;
   - WALK_SECTIONS: ids unique and of the form <deck>-<n>, deck one of pp, pc,
     sun, mc; every guide id is a section.gobj id in guide.js; every part has
     text, a slide '<deck>-<NN>' of its own deck or null, a drawn step
     {id in DIA, step 1..its step count} or null, and a src; every slide file
     slides/<slide>.jpg exists at the repository root;
   - WHY_AUDIO: every id is a question in the bank, not lowYield (off the exam
     papers: Dr. Sikazwe's unassigned pages among them) and not one of the
     items held out of scored practice; every entry has text and a tier;
   - audio_manifest.js: every entry's hash matches its current text and its
     file audio/<key>.mp3 exists (narration_hash.js --check);
   - NARR_HASH (walk_ui.js, the page's hash) equals node's sha256 on every text;
   - walk_ui.js and why_ui.js do nothing in a stub DOM, and the only storage
     they touch is walk_ui.js's one key `<NS>:narration` (getItem and setItem
     inside try/catch); no sessionStorage, IndexedDB, cookies, Cache Storage or
     the core's `store`;
   - the service worker the build writes precaches no slide or audio file.

     node walk_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const {check, finish} = require('./check_lib');
const NH = require('./narration_hash');
const NAME = 'walk_check.js';
const SRC = __dirname, ROOT = path.join(SRC, '..');
const here = f => fs.readFileSync(path.join(SRC, f), 'utf8');
const HELD = ['L1-062', 'L2-015', 'L3-026', 'S3-081'];   // reviews/OPEN_QUESTIONS.md; held out of scored practice

const C = (() => { const sb = {console, window: {}}; vm.createContext(sb); vm.runInContext(here('course.js') + '\nthis.COURSE = COURSE;', sb); return sb.COURSE; })();
const F = C.files, at = f => F.indexOf(f);
console.log('=== course.js `files` ===');
const data = F.filter(f => /^walk_(?!ui)[a-z0-9]+\.js$/.test(f) || f === 'why_data.js' || f === 'audio_manifest.js').filter(f => fs.existsSync(path.join(SRC, f)));
check(at('walk_ui.js') >= 0 && at('why_ui.js') > at('walk_ui.js'), 'walk_ui.js and why_ui.js are listed, walk_ui.js first');
check(data.every(f => at(f) < at('walk_ui.js')), `the narration data files on disk (${data.join(', ') || 'none'}) come before walk_ui.js`);
const onDisk = fs.readdirSync(SRC).filter(f => /^walk_(pp|pc|sun|mc|rd)\.js$/.test(f) || f === 'why_data.js' || f === 'audio_manifest.js');
check(onDisk.every(f => F.includes(f)), `every narration data file on disk is in the page (${onDisk.join(', ')})`, onDisk.filter(f => !F.includes(f)).join(', '));

/* the bank, the guide and the figures, as the page has them, without the *_ui.js presentation files */
const sb = {console, window: {}};
vm.createContext(sb);
let src = here('course.js') + '\n';
for (const f of F.filter(f => !/_ui\.js$/.test(f) && fs.existsSync(path.join(SRC, f)))) src += here(f) + '\n';
src += here('guide.js') + '\nthis.X = {QUESTIONS, GUIDE_HTML, DIA: typeof DIA !== "undefined" ? DIA : {},' +
  ' W: typeof WALK_SECTIONS !== "undefined" ? WALK_SECTIONS : [], Y: typeof WHY_AUDIO !== "undefined" ? WHY_AUDIO : {},' +
  ' CL: typeof AUDIO_CLIPS !== "undefined" ? AUDIO_CLIPS : {}, D: typeof DIA_NARR !== "undefined" ? DIA_NARR : {}};';
vm.runInContext(src, sb);
const {QUESTIONS, GUIDE_HTML, DIA, W, Y, CL, D} = sb.X;

console.log('=== Walkthroughs (WALK_SECTIONS) ===');
const DECKS = ['pp', 'pc', 'sun', 'mc', 'rd'];   // rd: an assigned reading, no slide deck of its own
const gobj = new Set([...GUIDE_HTML.matchAll(/<section class="gobj" id="([^"]+)"/g)].map(m => m[1]));
const steps = k => { const h = DIA[k]; return typeof h === 'string' ? (h.match(/class="st[ "]/g) || []).length : 0; };
const ids = W.map(w => w && w.id);
check(new Set(ids).size === ids.length, `walkthrough ids are unique (${ids.length})`, ids.filter((x, i) => ids.indexOf(x) !== i).join(', '));
const badSec = W.filter(w => !w || !/^(pp|pc|sun|mc|rd)-\d+$/.test(w.id) || !DECKS.includes(w.deck) || !w.id.startsWith(w.deck + '-') ||
  typeof w.title !== 'string' || !w.title.trim() || !Array.isArray(w.parts) || !w.parts.length);
check(!badSec.length, 'every walkthrough has id <deck>-<n>, its deck, a title and parts', badSec.map(w => w && w.id).join(', '));
const noGuide = W.filter(w => !gobj.has(w.guide));
check(!noGuide.length, `every walkthrough's guide id is a guide section (${gobj.size} sections in guide.js)`, noGuide.map(w => `${w.id} -> ${w.guide}`).join(', '));
const parts = W.flatMap(w => (w.parts || []).map((p, i) => ({w, p, i})));
const badPart = parts.filter(({w, p}) => !p || typeof p.text !== 'string' || !p.text.trim() || typeof p.src !== 'string' ||
  !(p.slide == null || (typeof p.slide === 'string' && new RegExp('^' + (w.deck === 'rd' ? '(pp|pc|sun|mc)' : w.deck) + '-\\d{2}$').test(p.slide))) ||   // a reading's part may point to a lecture slide
  !(p.fig == null || (p.fig && DIA[p.fig.id] && Number.isInteger(p.fig.step) && p.fig.step >= 1 && p.fig.step <= Math.max(1, steps(p.fig.id)))));   // a static figure (no steps) is step 1
check(!badPart.length, `every part (${parts.length}) has text, a src, a slide of its own deck or null, and a drawn step that exists (1-based; step 1 for a figure without steps) or null`,
  badPart.slice(0, 12).map(({w, i, p}) => `${w.id} part ${i + 1} (${JSON.stringify({slide: p && p.slide, fig: p && p.fig})})`).join('; '));
const slides = [...new Set(parts.map(x => x.p && x.p.slide).filter(Boolean))].sort();
const missing = slides.filter(s => !fs.existsSync(path.join(ROOT, 'slides', s + '.jpg')));
check(!missing.length, `every slide a part names has its image in slides/ (${slides.length} slides)`, missing.join(', '));
const bare = parts.filter(({p}) => p && !p.slide && !(p.fig && p.fig.id));
if (bare.length) console.log(`  note: ${bare.length} parts name no slide or figure; the player keeps the previous one on screen`);
const wc = parts.map(({p}) => String(p && p.text || '').split(/\s+/).filter(Boolean).length);
if (wc.length) console.log(`  ${parts.length} parts, ${wc.reduce((a, b) => a + b, 0)} words (part length ${Math.min(...wc)}-${Math.max(...wc)} words)`);

console.log('=== Spoken whys (WHY_AUDIO) ===');
const QB = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
const yids = Object.keys(Y);
const notInBank = yids.filter(id => !QB[id]);
check(!notInBank.length, `every spoken why (${yids.length}) is a question in the bank`, notInBank.join(', '));
const low = yids.filter(id => QB[id] && QB[id].lowYield);
check(!low.length, 'no spoken why is on a lowYield question (off the exam papers, unassigned pages among them)', low.join(', '));
const held = yids.filter(id => HELD.includes(id));
check(!held.length, 'no spoken why is on a question held out of scored practice', held.join(', '));
const badWhy = yids.filter(id => !Y[id] || typeof Y[id].text !== 'string' || !Y[id].text.trim() || !/^[AB]$/.test(Y[id].tier || ''));
check(!badWhy.length, 'every spoken why has text and a tier (A or B)', badWhy.join(', '));

console.log('=== Recorded clips (audio_manifest.js) ===');
const T = NH.texts(W, Y, D), TB = Object.fromEntries(T.map(x => [x.id, x]));
const keys = Object.keys(CL || {});
const unknown = keys.filter(k => !TB[k]);
check(!unknown.length, `every manifest entry (${keys.length}) names a walkthrough part, a spoken why or a figure step (dianarr_*.js)`, unknown.join(', '));
const stale = keys.filter(k => TB[k] && (!CL[k] || CL[k].h !== TB[k].hash));
check(!stale.length, 'every manifest hash matches its current text', stale.join(', '));
const nofile = keys.filter(k => TB[k] && !fs.existsSync(path.join(ROOT, 'audio', k + '.mp3')));
check(!nofile.length, 'every manifest entry has its file in audio/', nofile.join(', '));
console.log(`  ${T.length} texts; ${T.length - keys.length} read by the device voice until recorded`);

console.log('=== The page\'s hash and the presentation files ===');
const ub = {console, window: {}}; vm.createContext(ub);
vm.runInContext(here('walk_ui.js') + '\n' + here('why_ui.js') + '\nthis.U = {NARR_HASH, NARR, WALK_UI, WHY_UI};', ub);
const probe = T.map(x => x.text).concat(['', 'a', 'é → β ↑ 0.05%', 'x'.repeat(1000)]);
const diff = probe.filter(t => ub.U.NARR_HASH(t) !== NH.hash(t));
check(!diff.length, `walk_ui.js NARR_HASH equals sha256 (first 12 hex) on ${probe.length} texts`, diff.slice(0, 3).map(t => JSON.stringify(String(t).slice(0, 40))).join(', '));
check(ub.U.NARR === null && ub.U.WALK_UI === null && ub.U.WHY_UI === null, 'walk_ui.js and why_ui.js do nothing in a stub DOM');
const code = f => here(f).replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '').replace(/([^:])\/\/[^\n'"`]*$/gm, '$1');
const wk = code('walk_ui.js'), wy = code('why_ui.js');
const ls = wk.match(/localStorage\.[a-zA-Z]+\([^)]*\)/g) || [];
check(ls.length === 2 && ls.every(x => /^localStorage\.(getItem|setItem)\(KEY\(\)/.test(x)),
  "walk_ui.js touches localStorage only with getItem/setItem on its own key", ls.join(' | '));
check(/ns \+ ':narration'/.test(wk) && !/:narration:/.test(wk), "that key is <NS>:narration, outside the core's :data: and :log: keys");
const tries = (wk.match(/try \{[^}]*localStorage\./g) || []).length;
check(tries === 2, 'both localStorage calls are inside try/catch', `${tries} of 2`);
const other = (wk + wy).match(/sessionStorage|indexedDB|document\.cookie|caches\.|\bstore\.(set|get|del|trySet)\b|\bsaveNow\(|\bsave\(\)\s*;?\s*\/\*core/g);
check(!other && !/localStorage/.test(wy), 'no other storage: no sessionStorage, IndexedDB, cookie, Cache Storage or core store; why_ui.js none', (other || []).join(', '));

console.log('=== Service worker ===');
const sw = fs.existsSync(path.join(ROOT, 'sw.js')) ? fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8') : '';
const site = (sw.match(/const SITE = (\{[^\n]*\});/) || [])[1] || '';
check(site && !/slides\/|audio\/|\.mp3|\.jpg/.test(site), 'the built sw.js precaches no slide or audio file', site.slice(0, 160) || 'no built sw.js');

finish(NAME);

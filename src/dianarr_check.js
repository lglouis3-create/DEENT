/* ==========================================================================
   DRAWN-FIGURE NARRATION CHECK, PHAR 4346 DEENT (dianarr_ui.js and its data)
   --------------------------------------------------------------------------
   Checks, with no browser:
   - course.js `files` lists dianarr_smith.js and dianarr_sik.js (those on disk)
     before audio_manifest.js and walk_ui.js, and dianarr_ui.js after walk_ui.js;
   - DIA_NARR: every key is a figure in DIA (the figures the page draws), its
     `steps` has exactly one entry per drawn step (one for a static figure),
     every text is non-empty and has a `src`, and no text is spoken
     citation-style (a slide, page or transcript number, a deck name, a
     bracketed reference);
   - every manifest entry dn-<key>-<n> names a step of DIA_NARR, its hash matches
     that step's current text and its file audio/<key>.mp3 exists;
   - dianarr_ui.js does nothing in a stub DOM and touches no storage.

     node dianarr_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const {check, finish} = require('./check_lib');
const NH = require('./narration_hash');
const NAME = 'dianarr_check.js';
const SRC = __dirname, ROOT = path.join(SRC, '..');
const here = f => fs.readFileSync(path.join(SRC, f), 'utf8');

const C = (() => { const sb = {console, window: {}}; vm.createContext(sb); vm.runInContext(here('course.js') + '\nthis.COURSE = COURSE;', sb); return sb.COURSE; })();
const F = C.files, at = f => F.indexOf(f);
console.log('=== course.js `files` ===');
const data = ['dianarr_smith.js', 'dianarr_sik.js'].filter(f => fs.existsSync(path.join(SRC, f)));
check(data.length >= 1 && data.every(f => at(f) >= 0), `the narration files on disk are in the page (${data.join(', ')})`, data.filter(f => at(f) < 0).join(', '));
check(data.every(f => at(f) < at('walk_ui.js') && (at('audio_manifest.js') < 0 || at(f) < at('audio_manifest.js'))),
  'they come before audio_manifest.js and walk_ui.js');
check(at('dianarr_ui.js') > at('walk_ui.js') && at('walk_ui.js') >= 0, 'dianarr_ui.js is listed after walk_ui.js (it uses its player)');

/* the figures as the page has them, without the *_ui.js presentation files */
const sb = {console, window: {}};
vm.createContext(sb);
let src = here('course.js') + '\n';
for (const f of F.filter(f => !/_ui\.js$/.test(f) && fs.existsSync(path.join(SRC, f)))) src += here(f) + '\n';
src += '\nthis.X = {DIA: typeof DIA !== "undefined" ? DIA : {}, N: typeof DIA_NARR !== "undefined" ? DIA_NARR : {},' +
  ' CL: typeof AUDIO_CLIPS !== "undefined" ? AUDIO_CLIPS : {}};';
vm.runInContext(src, sb);
const {DIA, N, CL} = sb.X;

console.log('=== DIA_NARR ===');
const keys = Object.keys(N);
const drawn = k => { const h = DIA[k]; return typeof h === 'string' ? (h.match(/class="st[ "]/g) || []).length : -1; };
const missing = keys.filter(k => drawn(k) < 0);
check(!missing.length, `every DIA_NARR key (${keys.length}) is a figure in DIA`, missing.join(', '));
const counts = keys.filter(k => drawn(k) >= 0).filter(k => !N[k] || !Array.isArray(N[k].steps) || N[k].steps.length !== Math.max(1, drawn(k)));
check(!counts.length, 'each has one entry per drawn step (one for a static figure)',
  counts.map(k => `${k}: ${N[k] && N[k].steps ? N[k].steps.length : 0} of ${Math.max(1, drawn(k))}`).join(', '));
const all = []; keys.forEach(k => ((N[k] || {}).steps || []).forEach((s, i) => all.push({k, i, s})));
const empty = all.filter(x => !x.s || typeof x.s.text !== 'string' || !x.s.text.trim() || typeof x.s.src !== 'string' || !x.s.src.trim());
check(!empty.length, `every step (${all.length}) has spoken text and a src`, empty.map(x => `${x.k} ${x.i + 1}`).join(', '));
// spoken citation-style: "slide 27", "slides 5-6", "p. 4", "pp. 3", "T 452", "T@380", "PC 25", "DPAW 62", "Sun 12", brackets
const CITE = /\bslides? ?\d|\bpages? ?\d|\bp\. ?\d|\bpp\. ?\d|\bT ?@?\d|\bT1[01]\d\d\b|\b(PC|PP|DPAW|Sun) ?\d|Students-2026|\.pdf\b|[()[\]]/;
const cited = all.filter(x => x.s && typeof x.s.text === 'string' && CITE.test(x.s.text));
check(!cited.length, 'no step text is spoken citation-style (slide, page or transcript numbers, deck names, brackets)',
  cited.map(x => `${x.k} ${x.i + 1}: …${x.s.text.match(CITE)[0]}…`).join('; '));
const ws = all.map(x => String(x.s.text).split(/\s+/).length);
console.log(`  ${keys.length} figures, ${all.length} steps, ${ws.reduce((a, b) => a + b, 0)} words (step ${Math.min(...ws)} to ${Math.max(...ws)})`);

console.log('=== Recorded clips (dn-*) ===');
const T = Object.fromEntries(NH.texts([], {}, N).map(x => [x.id, x]));
const dn = Object.keys(CL).filter(k => k.startsWith('dn-'));
const unknown = dn.filter(k => !T[k]);
check(!unknown.length, `every dn- manifest entry (${dn.length}) names a figure step`, unknown.join(', '));
const stale = dn.filter(k => T[k] && (!CL[k] || CL[k].h !== T[k].hash));
check(!stale.length, 'every dn- manifest hash matches its step\'s current text', stale.join(', '));
const nofile = dn.filter(k => T[k] && !fs.existsSync(path.join(ROOT, 'audio', k + '.mp3')));
check(!nofile.length, 'every dn- manifest entry has its file in audio/', nofile.join(', '));
console.log(`  ${all.length} steps; ${dn.length} recorded, ${all.length - dn.length} read by the device voice`);

console.log('=== The presentation file ===');
const ub = {console, window: {}}; vm.createContext(ub);
vm.runInContext('var DIA_NARR = {x: {steps: [{text: "a", src: "b"}]}};\n' + here('walk_ui.js') + '\n' + here('dianarr_ui.js') + '\nthis.U = {DIA_NARR_UI};', ub);
check(ub.U.DIA_NARR_UI === null, 'dianarr_ui.js does nothing in a stub DOM');
const code = here('dianarr_ui.js').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
const st = code.match(/localStorage|sessionStorage|indexedDB|document\.cookie|caches\.|\bstore\.(set|get|del|trySet)\b/g);
check(!st, 'dianarr_ui.js touches no storage (the speed is walk_ui.js\'s own key)', (st || []).join(', '));

finish(NAME);

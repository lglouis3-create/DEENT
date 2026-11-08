/* ==========================================================================
   LIKELY-STARS CHECK (likely_data.js, likely_ui.js; DEENT course-level)
   ==========================================================================
   Reads the course's own source files in node (no build needed) and checks:
   - every starred id exists in the bank, once;
   - every starred question is in an Exam 1 pool: not lowYield, not
     unassigned, not in an optional topic, not one of the items held out of
     scored practice (reviews/OPEN_QUESTIONS.md);
   - one star per concept;
   - every star has a reason and a defined source (with the professor the
     source belongs to matching the question's professor) and a reference;
   - Dr. Sikazwe's stars cite only his assigned pages (list of 11/06);
   - no reason leaks the answer: it contains neither the text of a correct
     option (or matching pair) nor any content word of it that the stem and the
     other options do not already show;
   - neither file writes to any storage; likely_ui.js does nothing in a stub DOM.

     node likely_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const {check, finish} = require('./check_lib');
const NAME = 'likely_check.js';
const here = f => fs.readFileSync(path.join(__dirname, f), 'utf8');

const C = (() => { const sb = {console, window: {}}; vm.createContext(sb); vm.runInContext(here('course.js') + '\nthis.COURSE = COURSE;', sb); return sb.COURSE; })();
check(C.files.includes('likely_data.js') && C.files.includes('likely_ui.js') &&
      C.files.indexOf('likely_data.js') < C.files.indexOf('likely_ui.js'), 'course.js `files` lists likely_data.js before likely_ui.js');
const files = C.files.filter(f => !/_ui\.js$/.test(f));
const sb = {console, window: {}};
vm.createContext(sb);
let src = here('course.js') + '\n';
for (const f of files) src += here(f) + '\n';
src += '\nthis.X = {QUESTIONS, TOPICS, LIKELY};';
vm.runInContext(src, sb);
const {QUESTIONS, TOPICS, LIKELY: L} = sb.X;
const QB = {}; QUESTIONS.forEach(q => { QB[q.id] = q; });
const HELD = ['L1-062', 'L2-015', 'L3-026', 'S3-081'];
const optionalTopics = new Set(TOPICS.filter(t => t.optional).map(t => t.id));

console.log('=== Ids and eligibility ===');
const ids = L.items.map(x => x.id);
check(new Set(ids).size === ids.length, `star ids are unique (${ids.length})`, ids.filter((x, i) => ids.indexOf(x) !== i).join(', '));
const missing = ids.filter(i => !QB[i]);
check(!missing.length, 'every starred id exists in the bank', missing.join(', '));
const inel = ids.filter(i => QB[i] && (QB[i].lowYield || QB[i].unassigned || optionalTopics.has(QB[i].topic) || HELD.includes(i)));
check(!inel.length, 'no star is lowYield, unassigned, in an optional topic or held out', inel.join(', '));
const byConcept = {};
ids.filter(i => QB[i]).forEach(i => { (byConcept[QB[i].concept] = byConcept[QB[i].concept] || []).push(i); });
const multi = Object.entries(byConcept).filter(([, v]) => v.length > 1);
check(!multi.length, `one star per concept (${Object.keys(byConcept).length} concepts)`, multi.map(([k, v]) => k + ': ' + v.join('+')).join('; '));

console.log('=== Reasons and sources ===');
const noReason = L.items.filter(x => !x.reason || x.reason.trim().length < 12 || !x.ref);
check(!noReason.length, 'every star has a reason and a reference', noReason.map(x => x.id).join(', '));
const badSrc = L.items.filter(x => !L.sources[x.source] || !L.sources[x.source].label || !L.sources[x.source].detail);
check(!badSrc.length, 'every star names a defined source', badSrc.map(x => x.id + '→' + x.source).join(', '));
const PROF = {smith: 'Smith', sikazwe: 'Sikazwe'};
const wrongProf = L.items.filter(x => QB[x.id] && L.sources[x.source] && PROF[L.sources[x.source].by] !== QB[x.id].prof);
check(!wrongProf.length, "every star's source is the question's own professor", wrongProf.map(x => x.id).join(', '));
const unused = Object.keys(L.sources).filter(k => !L.items.some(x => x.source === k));
check(!unused.length, 'every source is used', unused.join(', '));

// Dr. Sikazwe's assigned pages for Exam 1 (file pages; his list of 11/06, CLAUDE.md)
const ASSIGNED = new Set([7, 8, 9, 12, ...Array.from({length: 9}, (_, i) => 15 + i), ...Array.from({length: 10}, (_, i) => 25 + i),
                          ...Array.from({length: 13}, (_, i) => 43 + i), ...Array.from({length: 6}, (_, i) => 61 + i)]);
const pagesOf = cite => {
  const m = String(cite).match(/slides?\s+([0-9,–\-\s]+)/); if (!m) return [];
  const out = [];
  m[1].split(',').forEach(p => { const r = p.trim().split(/[–-]/).map(Number); if (!r[0]) return;
    for (let n = r[0]; n <= (r[1] || r[0]); n++) out.push(n); });
  return out;
};
const sik = ids.filter(i => QB[i] && QB[i].prof === 'Sikazwe');
const offPage = sik.filter(i => { const p = pagesOf(QB[i].cite); return !p.length || p.some(n => !ASSIGNED.has(n)); });
check(!offPage.length, `Dr. Sikazwe's ${sik.length} stars cite only his assigned pages`, offPage.map(i => i + ' (' + pagesOf(QB[i].cite).join(',') + ')').join('; '));

console.log('=== No answer in a reason ===');
const STOP = new Set('the a an and or of to in on for with by from is are be as at it its this that these those which what who than then not no so do does into their they them about more most less less some each other only also both can may will would'.split(' '));
const norm = s => String(s).toLowerCase().replace(/[‐–—]/g, '-').replace(/[^a-z0-9α-ωβ%\- ]+/g, ' ').replace(/\s+/g, ' ').trim();
const words = s => norm(s).split(' ').filter(w => w.length >= 4 && !STOP.has(w));
const stemOf = w => w.replace(/(ies|es|s|ed|ing|ly)$/, '');
const leaks = [];
for (const x of L.items) {
  const q = QB[x.id]; if (!q) continue;
  let right = [], shown = q.stem + ' ' + (q.left || '') + ' ' + (q.right || '');
  if (q.type === 'match') {
    (q.pairs || []).forEach(p => right.push(Array.isArray(p) ? p.join(' ') : Object.values(p).join(' ')));
    shown += ' ' + JSON.stringify(q.left || '') + JSON.stringify(q.right || '');
  } else {
    (q.options || []).forEach(o => { if (o.correct) right.push(o.t); else shown += ' ' + o.t; });
  }
  const r = norm(x.reason), shownW = new Set(words(shown).map(stemOf));
  for (const t of right) {
    if (norm(t).length >= 3 && r.includes(norm(t))) leaks.push(`${x.id}: contains "${t}"`);
    for (const w of words(t)) if (!shownW.has(stemOf(w)) && words(x.reason).map(stemOf).includes(stemOf(w))) leaks.push(`${x.id}: "${w}"`);
  }
}
check(!leaks.length, `no reason (${L.items.length}) shows the correct answer or a word of it the question does not already show`, leaks.join('; '));
// a number in the reason of a select-all or "how many" question can give away the count
const NUMW = /\b(\d+|one|two|three|four|five|six|seven|eight|nine|ten|single|pair|both)\b/i;
const countLeak = L.items.filter(x => { const q = QB[x.id]; return q && (q.multi || /how many/i.test(q.stem)) && NUMW.test(x.reason); });
check(!countLeak.length, 'no reason of a select-all or "how many" question contains a number or number word', countLeak.map(x => x.id + ': ' + x.reason).join('; '));
// no reason uses a distinctive word of any option (one the stem does not show), right or wrong: it would narrow the choice
const GENERIC = new Set(['drug', 'drugs', 'class', 'skin', 'patient', 'patients', 'question', 'lecture', 'used', 'cell', 'cells']);
const optLeak = [];
for (const x of L.items) {
  const q = QB[x.id]; if (!q || q.type === 'match') continue;
  const stemW = new Set(words(q.stem).map(stemOf)), rw = new Set(words(x.reason).map(stemOf));
  const optW = (q.options || []).map(o => new Set(words(o.t).map(stemOf)));
  const inAll = k => optW.every(ws => ws.has(k));   // a word every option shows narrows nothing
  (q.options || []).forEach((o, i) => words(o.t).forEach(w => { const k = stemOf(w); if (!stemW.has(k) && !GENERIC.has(w) && !inAll(k) && rw.has(k)) optLeak.push(`${x.id} option ${'ABCDEFG'[i]}: "${w}"`); }));
}
check(!optLeak.length, 'no reason uses a distinctive word of any option', [...new Set(optLeak)].join('; '));

console.log('=== Counts ===');
const count = {};
L.items.forEach(x => { const q = QB[x.id]; if (!q) return; const k = q.prof + ' · ' + (q.cite.match(/\(([^)]+\.pdf)\)/) || [, q.cite.split(',')[0]])[1]; count[k] = (count[k] || 0) + 1; });
Object.entries(count).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

const code = f => here(f).replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:'"`])\/\/.*$/gm, '$1');
console.log('=== Nothing of the reason is displayed ===');
const uiCode = code('likely_ui.js').replace('L.sources[BY[q.id].source]', '');
check(!/\.reason\b|\.ref\b|\.detail\b|\.label\b|sources\[/.test(uiCode),
      'likely_ui.js reads no reason, reference or source text for display (only the professor, to split the drill)');
console.log('=== Storage and stub DOM ===');
for (const f of ['likely_data.js', 'likely_ui.js']) {
  const hits = code(f).match(/localStorage|sessionStorage|indexedDB|\.setItem\(|document\.cookie|caches\.open|\bstore\.set\b|\bsave\(/g);
  check(!hits, `${f} writes to no storage`, hits && hits.join(', '));
}
const stub = {console, document: {getElementById: () => ({}), querySelector: () => null}, LIKELY: L};
vm.createContext(stub);
let out;
try { out = vm.runInContext(here('likely_ui.js') + '\nLIKELY_UI;', stub); } catch (e) { out = e; }
check(out === null, 'likely_ui.js does nothing (returns null, throws nothing) in a stub DOM', String(out));
finish(NAME);

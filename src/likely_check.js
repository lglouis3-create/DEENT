/* ==========================================================================
   LIKELY-STARS CHECK (likely_data.js, likely_ui.js; DEENT course-level)
   ==========================================================================
   Reads the course's own source files in node (no build needed) and checks:
   - every starred id exists in the bank, once;
   - every starred question is in the pool of Exam 1, Exam 2 or Exam 3 (Dr. Smith's eye stars, added 2026-11-18, and
     Dr. Sikazwe's otic/oral/ophthalmic stars, added 2026-11-19, never on his FYI slides 10-13; their
     lecture entry in course.js names the exam) and, for Exam 1, not lowYield, not
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
const files = C.files.filter(f => !/_ui\.js$/.test(f) && fs.existsSync(path.join(__dirname, f)));   // a narration data file not yet written is not in the page either
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

// the exam pool of each star: its lecture entry (the deck its cite names) gives the exam; an Exam 1 star must pass the Exam 1 pool
// filters above; Exam 2 is Dr. Patel's; Exam 3 is Dr. Smith's eye lectures (L09, deck Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)
const lecOf = q => (C.lectures || []).find(l => String(q.cite).includes(l.deck));
const examOf = id => { const l = QB[id] && lecOf(QB[id]); return l ? l.exam : null; };
const noPool = ids.filter(i => QB[i] && ![1, 2, 3].includes(examOf(i)));
check(!noPool.length, 'every star is in the pool of Exam 1, Exam 2 or Exam 3 (its lecture entry names the exam)', noPool.join(', '));
console.log('=== Reasons and sources ===');
const noReason = L.items.filter(x => !x.reason || x.reason.trim().length < 12 || !x.ref);
check(!noReason.length, 'every star has a reason and a reference', noReason.map(x => x.id).join(', '));
const badSrc = L.items.filter(x => !L.sources[x.source] || !L.sources[x.source].label || !L.sources[x.source].detail);
check(!badSrc.length, 'every star names a defined source', badSrc.map(x => x.id + '→' + x.source).join(', '));
const PROF = {smith: 'Smith', sikazwe: 'Sikazwe', patel: 'Patel', lam: 'Lam'};
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
const sik = ids.filter(i => QB[i] && QB[i].prof === 'Sikazwe' && examOf(i) === 1);   // his Exam 1 stars; his Exam 3 (OOO deck) stars are checked below
const offPage = sik.filter(i => { const p = pagesOf(QB[i].cite); return !p.length || p.some(n => !ASSIGNED.has(n)); });
check(!offPage.length, `Dr. Sikazwe's ${sik.length} Exam 1 stars cite only his assigned pages`, offPage.map(i => i + ' (' + pagesOf(QB[i].cite).join(',') + ')').join('; '));
// the reference of each of his stars names where he said it (11/03 transcript line "T n" or 11/04 offset "T@n", or a Polleve slide)
// and the deck page(s) "p. n" / "pp. n, m", all of them assigned
const refPages = ref => {
  const out = [];
  (String(ref).match(/\bpp?\.\s*[0-9][0-9,–\-\s]*/g) || []).forEach(m => m.replace(/^pp?\.\s*/, '').split(',').forEach(p => {
    const r = p.trim().split(/[–-]/).map(Number); if (!r[0]) return;
    for (let n = r[0]; n <= (r[1] || r[0]); n++) out.push(n); }));
  return out;
};
const badRef = sik.filter(i => { const x = L.items.find(y => y.id === i), p = refPages(x.ref);
  return !/\bT@?\s?\d|Polleve-\d/.test(x.ref) || !p.length || p.some(n => !ASSIGNED.has(n)); });
check(!badRef.length, `each of Dr. Sikazwe's ${sik.length} Exam 1 stars names its transcript place or poll and only assigned deck pages`,
      badRef.map(i => i + ' (' + L.items.find(y => y.id === i).ref + ')').join('; '));

const ex3 = ids.filter(i => examOf(i) === 3);
const ex3Other = ex3.filter(i => !['Smith', 'Sikazwe', 'Lam'].includes(QB[i].prof));
check(!ex3Other.length, "every Exam 3 star is Dr. Smith's (eye deck), Dr. Sikazwe's (OOO deck) or Dr. Lam's (glaucoma, ophthalmic, oral and otic decks)", ex3Other.join(', '));
const eye = ex3.filter(i => QB[i].prof === 'Smith');
const eyeBad = eye.filter(i => { const q = QB[i], x = L.items.find(y => y.id === i), sl = pagesOf(q.cite);
  return q.prof !== 'Smith' || !/^ey-/.test(q.topic) || !sl.length || sl.some(n => n < 1 || n > 74) || !/\bT@?\s?\d+[^;]*11\/1[37]|slides? ?\d/.test(x.ref) || !/11\/1[37]|slides?\s*\d/.test(x.ref); });
check(eye.length > 0 && !eyeBad.length, `the ${eye.length} Exam 3 stars are Dr. Smith's eye questions (topic ey-*), cite slides 1-74 of the eye deck and name a slide or a 11/13 or 11/17 transcript place`, eyeBad.join(', '));
// Dr. Sikazwe's Exam 3 stars (added 2026-11-19): his otic/oral/ophthalmic questions (topic oo-*, deck Sikazwe_OOO_mc.pdf,
// slides 1-68), never slides 10-13 (the otitis and tinnitus slides he called FYI, "It won't be on the exam", 11/18 T@10343,
// T@13909), and each reference names a slide of that deck or a 11/18 transcript place (T@n 11/18)
const FYI = n => n >= 10 && n <= 13;
const slidesIn = r => { const out = []; (String(r).match(/\bslides?\s+[0-9][0-9,–\-\s]*/g) || []).forEach(m => m.replace(/^slides?\s+/, '').split(',').forEach(p => {
  const a = p.trim().split(/[–-]/).map(Number); if (!a[0]) return; for (let n = a[0]; n <= (a[1] || a[0]); n++) out.push(n); })); return out; };
const ooo = ex3.filter(i => QB[i].prof === 'Sikazwe');
const oooBad = ooo.filter(i => { const q = QB[i], x = L.items.find(y => y.id === i), sl = pagesOf(q.cite), rs = slidesIn(x.ref);
  return !/^oo-/.test(q.topic) || !String(q.cite).includes('Sikazwe_OOO_mc.pdf') || !sl.length || sl.some(n => n < 1 || n > 68 || FYI(n)) ||
         !(rs.length || /\bT@\d+[^;]*11\/18/.test(x.ref)) || rs.some(n => n < 1 || n > 68 || FYI(n)); });
check(!oooBad.length, `the ${ooo.length} Exam 3 stars of Dr. Sikazwe are his OOO questions (topic oo-*), cite slides 1-68 of Sikazwe_OOO_mc.pdf but none of the FYI slides 10-13, and name a slide or a 11/18 transcript place`, oooBad.join(', '));
const oooSrc = ooo.filter(i => !/^sik-(ex3|q-ooo|know-ooo)$/.test(L.items.find(y => y.id === i).source));
check(!oooSrc.length, "Dr. Sikazwe's Exam 3 stars use his Exam 3 sources (sik-ex3, sik-q-ooo, sik-know-ooo)", oooSrc.join(', '));
// Dr. Lam's Exam 3 stars. Glaucoma (added 2026-11-20): her glaucoma therapeutics questions (topic lm-*, deck Lam_Glaucoma.pdf, slides 1-93), each
// reference names a place of the 11/19 transcript at or after T@35742 (T@n) and a slide of the deck or "slides" cite; never lowYield.
// Ophthalmic, oral and otic (added 2026-11-20, 11/20 lecture): topics lo-*, lr-*, lt-* in Lam_OphthalmicDisorders.pdf (58 slides),
// Lam_OralDisorders_slides.pdf (84) and Lam_OticDisorders_slides.pdf (44); each reference names a place of the 11/20 transcript (T@n, "11/20",
// within its 101,392 characters) and a slide of the deck; never lowYield; sources lam-ex3b and lam-q2.
const lamIds = ex3.filter(i => QB[i].prof === 'Lam');
const LAM2 = {lo: ['Lam_OphthalmicDisorders.pdf', 58], lr: ['Lam_OralDisorders_slides.pdf', 84], lt: ['Lam_OticDisorders_slides.pdf', 44]};
const lamKind = i => { const m = String(QB[i].topic).match(/^(lm|lo|lr|lt)-/); return m ? m[1] : null; };
const lamGl = lamIds.filter(i => lamKind(i) === 'lm'), lamNew = lamIds.filter(i => ['lo', 'lr', 'lt'].includes(lamKind(i)));
const lamOther = lamIds.filter(i => !lamKind(i));
check(!lamOther.length, "every Exam 3 star of Dr. Lam is in a topic lm-*, lo-*, lr-* or lt-*", lamOther.join(', '));
const lamBad = lamGl.filter(i => { const q = QB[i], x = L.items.find(y => y.id === i), sl = pagesOf(q.cite);
  const ts = (String(x.ref).match(/T@(\d+)/g) || []).map(t => +t.slice(2));
  return !String(q.cite).includes('Lam_Glaucoma.pdf') || !sl.length || sl.some(n => n < 1 || n > 93) || q.lowYield ||
         !ts.length || ts.some(t => t < 35742) || !/11\/19/.test(x.ref); });
check(lamGl.length > 0 && !lamBad.length, `the ${lamGl.length} Exam 3 stars of Dr. Lam are her glaucoma questions (topic lm-*), cite slides 1-93 of Lam_Glaucoma.pdf, are not lowYield and name a place at or after T@35742 of the 11/19 transcript`, lamBad.join(', '));
const lamNewBad = lamNew.filter(i => { const q = QB[i], x = L.items.find(y => y.id === i), sl = pagesOf(q.cite), k = LAM2[lamKind(i)], rs = slidesIn(x.ref);
  const ts = (String(x.ref).match(/T@(\d+)/g) || []).map(t => +t.slice(2));
  return !String(q.cite).includes(k[0]) || !sl.length || sl.some(n => n < 1 || n > k[1]) || q.lowYield || !rs.length || rs.some(n => n < 1 || n > k[1]) ||
         !ts.length || ts.some(t => t < 1 || t > 101392) || !/11\/20/.test(x.ref) || /11\/19/.test(x.ref); });
check(lamNew.length > 0 && !lamNewBad.length, `the ${lamNew.length} Exam 3 stars of Dr. Lam's 11/20 lecture are her ophthalmic, oral and otic questions (topics lo-*, lr-*, lt-*), cite slides within the page count of their own PDF, are not lowYield and name a slide and a place of the 11/20 transcript`, lamNewBad.join(', '));
const lamSrc = lamGl.filter(i => !/^lam-(q|ex3)$/.test(L.items.find(y => y.id === i).source));
check(!lamSrc.length, "Dr. Lam's glaucoma stars use her sources (lam-q, lam-ex3)", lamSrc.join(', '));
const lamSrc2 = lamNew.filter(i => !/^lam-(q2|ex3b)$/.test(L.items.find(y => y.id === i).source));
check(!lamSrc2.length, "Dr. Lam's 11/20 stars use her sources (lam-q2, lam-ex3b)", lamSrc2.join(', '));
const eyeNoElig = ex3.filter(i => !(QB[i] && !QB[i].lowYield && !QB[i].unassigned && !optionalTopics.has(QB[i].topic)));
check(!eyeNoElig.length, 'no Exam 3 star (Smith or Sikazwe) is lowYield, unassigned or in an optional topic', eyeNoElig.join(', '));

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

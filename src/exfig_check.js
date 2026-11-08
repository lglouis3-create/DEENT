/* ==========================================================================
   EXPLANATION FIGURES CHECK (exfig_data.json, exfig.js, exfig_ui.js; DEENT
   course-level, "See it on the structure")
   ==========================================================================
   Reads the course's own source files in node (no build needed) and checks:
   - course.js `files` lists exfig.js before exfig_ui.js, and exfig.js is the
     output of gen_exfig.py for the current exfig_data.json (same figures,
     same questions);
   - every figure's questions exist, are Dr. Sikazwe's, and are in an Exam 1
     pool (not lowYield, not unassigned, not in an optional topic, not held
     out of scored practice); one figure per question;
   - every molecule is a core Atlas structure with its PubChem verification,
     drawn from the Atlas SMILES exactly; the atoms stored for each panel are
     the SMILES's own atoms (re-read with RDKit when python3 has it; NOT RUN
     for that case otherwise);
   - every highlight index is an atom of its molecule, and what a label names
     is on the atoms it marks (an OH label marks an O, F a fluorine, Cl a
     chlorine, an N-... label a nitrogen, COOH or acid a C with two O);
   - every word of every label and verdict is in the question's own text
     (stem, options, whys, teach, note), or, for a mark with "src":
     "atlas:<key>", in that Atlas entry's text; numbers drawn from a numbering
     template and ring letters need the word "ring" or "carbon" in the text;
   - every figure's slides are cited by one of its questions or are the
     Atlas pages of its molecules;
   - Polleve-4 (S4-120): the verdicts are recomputed here from the stored
     molecular graphs (COOH carbon, the carbon next to it, an OH on that
     carbon), they agree with the marked atoms and the printed lines, and the
     count equals the keyed option (Three);
   - exfig_ui.js writes no storage, shows a figure only inside the
     explanation block (.teach) and does nothing in a stub DOM.

     node exfig_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path'), child = require('child_process');
const {check, finish} = require('./check_lib');
const NAME = 'exfig_check.js';
const here = f => fs.readFileSync(path.join(__dirname, f), 'utf8');

const C = (() => { const sb = {console, window: {}}; vm.createContext(sb); vm.runInContext(here('course.js') + '\nthis.COURSE = COURSE;', sb); return sb.COURSE; })();
check(C.files.includes('exfig.js') && C.files.includes('exfig_ui.js') && C.files.indexOf('exfig.js') < C.files.indexOf('exfig_ui.js'),
      'course.js `files` lists exfig.js before exfig_ui.js');
const files = C.files.filter(f => !/_ui\.js$/.test(f) && fs.existsSync(path.join(__dirname, f)));
const sb = {console, window: {}};
vm.createContext(sb);
let src = here('course.js') + '\n';
for (const f of files) src += here(f) + '\n';
src += '\nthis.X = {QUESTIONS, TOPICS, EXFIG_DATA};';
vm.runInContext(src, sb);
const {QUESTIONS, TOPICS, EXFIG_DATA: D} = sb.X;
const QB = {}; QUESTIONS.forEach(q => { QB[q.id] = q; });
const HELD = ['L1-062', 'L2-015', 'L3-026', 'S3-081'];
const optionalTopics = new Set(TOPICS.filter(t => t.optional).map(t => t.id));
const DATA = JSON.parse(here('exfig_data.json'));
const ATLAS = {};
JSON.parse(here('atlas_data.json')).boards.forEach(b => b.sections.forEach(s => s.items.forEach(it => { ATLAS[it.key] = it; })));
const figs = Object.entries(D.figs);

console.log('=== Generated file ===');
check(figs.length === DATA.figs.length && DATA.figs.every(F => D.figs[F.id] && JSON.stringify(D.figs[F.id].qids) === JSON.stringify(F.qids) &&
      D.figs[F.id].panels.length === F.panels.length && D.figs[F.id].caption === F.caption && D.figs[F.id].title === F.title),
      `exfig.js matches exfig_data.json (${figs.length} figures); rerun gen_exfig.py after editing the data`);
const byQ = D.byQ, qids = Object.keys(byQ);
check(qids.every(q => D.figs[byQ[q]] && D.figs[byQ[q]].qids.includes(q)) && figs.every(([id, f]) => f.qids.every(q => byQ[q] === id)),
      `the question index and the figures agree (${qids.length} questions)`);

console.log('=== Questions ===');
const missing = qids.filter(q => !QB[q]);
check(!missing.length, 'every figure question exists in the bank', missing.join(', '));
const notSik = qids.filter(q => QB[q] && QB[q].prof !== 'Sikazwe');
check(!notSik.length, "every figure question is Dr. Sikazwe's", notSik.join(', '));
const inel = qids.filter(q => QB[q] && (QB[q].lowYield || QB[q].unassigned || optionalTopics.has(QB[q].topic) || HELD.includes(q)));
check(!inel.length, 'no figure question is lowYield, unassigned, optional or held out', inel.join(', '));

console.log('=== Molecules ===');
const VER = ['exact', 'exact-pubchem', 'stereo-unspecified', 'tautomer', 'teaching-structure'];
const badMol = [], panels = [];
figs.forEach(([id, f]) => f.panels.forEach((p, i) => {
  panels.push({id, i, p});
  const a = ATLAS[p.key];
  if (!a) badMol.push(`${id}/${i + 1}: ${p.key} not in the Atlas`);
  else if (a.smiles !== p.smiles) badMol.push(`${id}/${i + 1}: SMILES differs from the Atlas`);
  else if (!VER.includes(a.verification) || !a.pubchem_checked) badMol.push(`${id}/${i + 1}: ${p.key} not PubChem-verified`);
  else if ((a.priority || 'core') !== 'core') badMol.push(`${id}/${i + 1}: ${p.key} is ${a.priority}, not core`);
}));
check(!badMol.length, `every molecule is a verified core Atlas structure drawn from its Atlas SMILES (${panels.length} panels)`, badMol.join('; '));
// the stored atoms are the SMILES's atoms, in RDKit's order (the order the highlight indices use)
const uniq = {};
panels.forEach(({p}) => { uniq[p.smiles] = p.el; });
let rd = null;
try {
  const py = 'import json,sys\nfrom rdkit import Chem\nd=json.load(sys.stdin)\nprint(json.dumps({s:[a.GetSymbol() for a in Chem.MolFromSmiles(s).GetAtoms()] for s in d}))';
  rd = JSON.parse(child.execFileSync('python3', ['-I', '-c', py], {input: JSON.stringify(Object.keys(uniq)), stdio: ['pipe', 'pipe', 'ignore']}).toString());
} catch (e) { rd = null; }
if (rd) {
  const off = Object.keys(uniq).filter(s => JSON.stringify(rd[s]) !== JSON.stringify(uniq[s]));
  check(!off.length, `each panel's atoms are its SMILES's atoms, re-read with RDKit (${Object.keys(uniq).length} SMILES)`, off.join('; '));
} else {
  const {notRunCase} = require('./check_lib');
  if (typeof notRunCase === 'function') notRunCase('atoms re-read from the SMILES', 'python3 with RDKit is not available here (pip install rdkit)');
}

console.log('=== Marks ===');
const badIdx = [], badEl = [];
panels.forEach(({id, i, p}) => p.marks.forEach(m => {
  if (!m.atoms.length || m.atoms.some(a => !Number.isInteger(a) || a < 0 || a >= p.n || a >= p.el.length)) { badIdx.push(`${id}/${i + 1} ${m.label}`); return; }
  const els = m.atoms.map(a => p.el[a]), L = m.label;
  const need = [];
  if (/\bOH\b|hydroxyl/.test(L)) need.push('O');
  if (/\bF\b|halogen|-X\b/.test(L)) need.push('F');
  if (/\bCl\b/.test(L)) need.push('Cl');
  if (/\bN-|NH₂|amine|amide|lactam/.test(L)) need.push('N');
  if (/carbonyl|ketone|ester|lactone|COOH|acid\b|carboxylic/.test(L)) need.push('O');
  if (/boron/.test(L)) need.push('B');
  if (/sulfonic/.test(L)) need.push('S');
  const miss = need.filter(e => !els.includes(e));
  if (/COOH|carboxylic/.test(L) && els.filter(e => e === 'O').length < 2) miss.push('2 O');
  if (miss.length) badEl.push(`${id}/${i + 1} "${L}" lacks ${miss.join(', ')}`);
}));
check(!badIdx.length, 'every highlight index is an atom of its molecule', badIdx.join('; '));
check(!badEl.length, 'what each label names is on the atoms it marks', badEl.join('; '));

console.log('=== Words ===');
const norm = t => ' ' + String(t).toLowerCase()
  .replace(/[₀-₉]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x2080 + 48)).replace(/[⁺]/g, '+')
  .replace(/α/g, ' alpha ').replace(/β/g, ' beta ').replace(/hydroxyl|hydroxy/g, 'oh')
  .replace(/h-bond|hydrogen-bond|hydrogen bond/g, 'hbond').replace(/hydrolyze[sd]?|hydrolysis/g, 'hydrolys')
  .replace(/co2h/g, 'cooh').replace(/carboxylic/g, ' carboxylic cooh ')
  .replace(/[^a-z0-9+]+/g, ' ') + ' ';
// a word and its plural or past form count as the same word (amine/amines, opens/opened)
const stem = w => w.length > 4 ? w.replace(/(ing|ed|s)$/, '') : w;
const stems = T => ' ' + T.trim().split(' ').map(stem).join(' ') + ' ';
const STOP = new Set(['a', 'an', 'the', 'of', 'on', 'in', 'to', 'at', 'is', 'and', 'or', 'by', 'with', 'yes', 'no', 'after', 'its', 'one', 'not']);
const words = t => norm(t).trim().split(' ').filter(w => w && !STOP.has(w));
const qText = q => norm([q.stem, q.teach, q.note, q.quote, ...(q.options || []).map(o => o.t + ' ' + (o.why || ''))].join(' '));
const atlasText = k => { const a = ATLAS[k]; return a ? norm(JSON.stringify([a.name, a.tell, a.eg, a.note, a.discrepancy])) : ''; };
const badWord = [];
figs.forEach(([id, f]) => f.qids.filter(q => QB[q]).forEach(q => {
  const T = stems(qText(QB[q]));
  f.panels.forEach((p, i) => {
    const items = p.marks.map(m => ({t: m.label, alt: m.src && m.src.startsWith('atlas:') ? stems(atlasText(m.src.slice(6))) : ''}));
    if (p.verdict) items.push({t: p.verdict, alt: ''});
    items.forEach(({t, alt}) => {
      const miss = words(t).map(stem).filter(w => !T.includes(' ' + w + ' ') && !(alt && alt.includes(' ' + w + ' ')));
      if (miss.length) badWord.push(`${q} ${id}/${i + 1} "${t}": ${miss.join(', ')}`);
    });
    if ((p.numbers.length || p.rings.length) && !/ (ring|rings|carbon|carbons|c\d+) /.test(T)) badWord.push(`${q} ${id}/${i + 1}: numbers or ring labels, but the text names no ring or carbon`);
  });
}));
check(!badWord.length, 'every word of every label and verdict is in its question\'s text (or the named Atlas entry)', badWord.join('; '));

console.log('=== Slides ===');
const pagesOf = cite => {
  const out = [];
  (String(cite).match(/slides?\s+[0-9][0-9,–\-\s]*/g) || []).forEach(m => m.replace(/^slides?\s+/, '').split(',').forEach(p => {
    const r = p.trim().split(/[–-]/).map(Number); if (!r[0]) return;
    for (let n = r[0]; n <= (r[1] || r[0]); n++) out.push(n);
  }));
  return out;
};
const badSlide = [];
figs.forEach(([id, f]) => {
  const ok = new Set([...f.qids.filter(q => QB[q]).flatMap(q => pagesOf(QB[q].cite + ' ' + (QB[q].teach || ''))),
                      ...f.panels.map(p => ATLAS[p.key] && ATLAS[p.key].slide)]);
  const off = f.slides.filter(s => !ok.has(s));
  if (!f.slides.length || off.length) badSlide.push(`${id}: ${off.join(',') || 'no slide'}`);
  if (!/slides? \d/.test(f.caption)) badSlide.push(`${id}: caption cites no slide`);
});
check(!badSlide.length, 'every figure cites its slides, each cited by its question or the Atlas page of its molecule', badSlide.join('; '));

console.log('=== Polleve-4 (S4-120) ===');
const poll = D.byQ['S4-120'] && D.figs[D.byQ['S4-120']];
if (check(!!poll, 'S4-120 has a figure')) {
  let count = 0, agree = true;
  const why = [];
  poll.panels.forEach((p, i) => {
    const g = p.graph; if (!g) { agree = false; why.push(`panel ${i + 1} has no graph`); return; }
    const nb = g.el.map(() => []), bo = {};
    g.bonds.forEach(([a, b, o]) => { nb[a].push(b); nb[b].push(a); bo[a + '-' + b] = bo[b + '-' + a] = o; });
    const isOH = a => g.el[a] === 'O' && g.h[a] === 1 && nb[a].length === 1;
    const acidC = g.el.map((e, a) => a).filter(a => g.el[a] === 'C' && nb[a].some(x => g.el[x] === 'O' && bo[a + '-' + x] === 2) && nb[a].some(isOH));
    const acidAtoms = new Set(acidC.flatMap(c => [c, ...nb[c].filter(x => g.el[x] === 'O')]));
    const alpha = [...new Set(acidC.flatMap(c => nb[c].filter(x => g.el[x] === 'C' && !acidAtoms.has(x))))];
    const aOH = alpha.flatMap(c => nb[c].filter(x => isOH(x) && !acidAtoms.has(x)));
    const yes = aOH.length > 0;
    if (yes) count++;
    const same = (x, y) => JSON.stringify([...x].sort((a, b) => a - b)) === JSON.stringify([...y].sort((a, b) => a - b));
    const markedAlphaOH = p.marks.filter(m => m.label === 'α-OH').flatMap(m => m.atoms);
    const markedAlpha = p.marks.filter(m => m.label === 'α').flatMap(m => m.atoms);
    const markedAcid = p.marks.filter(m => m.label === 'COOH').map(m => m.atoms[0]);
    if (!same(aOH, markedAlphaOH) || !same(alpha, markedAlpha) || !same(acidC, markedAcid)) { agree = false; why.push(`panel ${i + 1} (${p.name}): marks differ from the recomputed atoms`); }
    if (yes !== p.auto.yes || !p.verdict.startsWith(yes ? 'Yes' : 'No')) { agree = false; why.push(`panel ${i + 1} (${p.name}): printed verdict differs`); }
  });
  check(agree, 'each verdict and its marks agree with the recomputed COOH, α carbon and α-OH', why.join('; '));
  const q = QB['S4-120'], key = q && q.options.find(o => o.correct);
  const N = {One: 1, Two: 2, Three: 3, Four: 4, Five: 5};
  check(key && N[key.t] === count, `recomputed count of alpha-hydroxy acids (${count}) equals the keyed option (${key && key.t})`);
}

console.log('=== Presentation ===');
const ui = here('exfig_ui.js');
check(!/localStorage|sessionStorage|indexedDB|document\.cookie/.test(ui.replace(/\/\*[\s\S]*?\*\//g, '')), 'exfig_ui.js writes no storage');
check(/\.why > \.teach/.test(ui) && /querySelector\('\.teach'\)/.test(ui) && /Q\.revealed/.test(ui) && /EX\.done === true/.test(ui),
      'exfig_ui.js adds a figure only inside an explanation shown after an answer');
const stub = {console, document: {}, window: {}, EXFIG_DATA: D};
vm.createContext(stub);
let api = null;
try { vm.runInContext(ui + '\nthis.API = EXFIG;', stub); api = stub.API; } catch (e) { api = null; }
check(api && api.has('S4-120') && /See it on|<figure class="fig exfig"/.test(api.get('S4-120')) && api.get('NOPE') === '',
      'in a stub DOM it draws nothing and EXFIG.get(qid) returns the figure');

finish(NAME, `${figs.length} figures for ${qids.length} questions`);

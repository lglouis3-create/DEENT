/* Course check for the DEENT Atlas (run: node atlas_check.js, after build.py).
 *
 * The Atlas data carries each structure's learning priority, verification and,
 * where a lecture slide draws it differently from the drug, both drawings.
 * This checks that the data is complete and that the Atlas cannot leak into
 * the wrong place:
 *   1. every item has a priority (core | reference | verify) and a verification
 *      status from the PubChem pass (verify_pubchem.py), a PubChem CID for
 *      every drug and a ChEMBL id where ChEMBL was cross-checked;
 *   2. no excluded item (atlas_data.json "excluded") appears as a tile;
 *   3. every comparison has a lecture drawing and a verified drawing, and the
 *      verified drawing is labelled as such;
 *   4. no question shows (fg) or compares (cmp) a reference-only or unverified
 *      structure;
 *   5. the drawing a question shows before the answer has no shading and a
 *      neutral label, so it does not name or point to the answer;
 *   6. the tile layout (atlas_ui.js): the citation parser moves every inline
 *      citation of every tile into "Sources and verification" and loses none;
 *      every "deeper" entry has text and at least one source with a URL, and
 *      no deeper text appears in a question file; "Hide names" hides the parts
 *      that name a structure (page line, also-in-lecture, deeper, sources,
 *      compare, board and section headings) and gives the drawing a neutral
 *      label.
 * Exit 0 PASS, 1 FAIL.
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const SRC = __dirname;
let bad = 0;
const fail = m => { bad++; console.log('  FAIL  ' + m); };
const ok = m => console.log('  ok    ' + m);
console.log('\n=== Atlas data and its use in questions ===');

const data = JSON.parse(fs.readFileSync(path.join(SRC, 'atlas_data.json'), 'utf8'));
const items = [];
for (const b of data.boards) for (const s of b.sections) for (const it of s.items) items.push(it);

// 1. metadata
const noPri = items.filter(it => !['core', 'reference', 'verify'].includes(it.priority));
noPri.length ? fail(`${noPri.length} item(s) without a valid priority: ${noPri.map(i => i.key).join(', ')}`)
             : ok(`all ${items.length} items carry a priority`);
const noVer = items.filter(it => !it.verification);
noVer.length ? fail(`${noVer.length} item(s) without a verification status: ${noVer.map(i => i.key).join(', ')}`)
             : ok('all items carry a verification status');
const STATUSES = ['exact', 'exact-pubchem', 'stereo-unspecified', 'tautomer', 'teaching-structure'];
const badStatus = items.filter(it => !STATUSES.includes(it.verification));
badStatus.length ? fail(`item(s) with a status outside ${STATUSES.join('/')}: ${badStatus.map(i => i.key + '=' + i.verification).join(', ')}`)
                 : ok('every status is one of exact, exact-pubchem, stereo-unspecified, tautomer, teaching-structure (no mismatch, no not-found)');
const notChecked = items.filter(it => it.pubchem_checked !== true || !it.verification_date);
notChecked.length ? fail(`item(s) not checked against PubChem: ${notChecked.map(i => i.key).join(', ')}`)
                  : ok(`all ${items.length} items checked against PubChem, with a date`);
const cidNoCheck = items.filter(it => it.pubchem_cid && it.pubchem_checked !== true);
cidNoCheck.length ? fail(`PubChem CID shown without a check: ${cidNoCheck.map(i => i.key).join(', ')}`)
                  : ok('no PubChem CID is shown for an item that was not checked');
const needCid = items.filter(it => it.verification !== 'teaching-structure' && !/^\d+$/.test(String(it.pubchem_cid || '')));
needCid.length ? fail(`drug item(s) without a PubChem CID: ${needCid.map(i => i.key).join(', ')}`)
               : ok('every drug item names its PubChem record');
const needChembl = items.filter(it => ['exact', 'stereo-unspecified', 'tautomer'].includes(it.verification) && !/^CHEMBL\d+$/.test(it.chembl_id || ''));
needChembl.length ? fail(`item(s) cross-checked with ChEMBL but no ChEMBL id: ${needChembl.map(i => i.key).join(', ')}`)
                  : ok('every exact, stereo-unspecified and tautomer item names its ChEMBL record');
const noNote = items.filter(it => it.verification !== 'exact' && !it.verification_note);
noNote.length ? fail(`non-exact item(s) without a note: ${noNote.map(i => i.key).join(', ')}`)
              : ok('every non-exact status carries an explanation');
// 2. exclusions
const keys = new Set(items.map(i => i.key));
const excl = (data.excluded || []).filter(x => keys.has(String(x.item).toLowerCase()));
excl.length ? fail(`excluded item(s) present as tiles: ${excl.map(x => x.item).join(', ')}`)
            : ok(`${(data.excluded || []).length} excluded item(s) recorded and absent from the tiles`);

// load the generated atlas.js and the question files
const sb = {console}; vm.createContext(sb);
vm.runInContext(fs.readFileSync(path.join(SRC, 'atlas.js'), 'utf8') + '\nglobalThis.A = ATLAS;', sb);
const A = sb.A;

// 3. comparisons
const withLec = items.filter(it => it.lecture);
for (const it of withLec) {
  const c = A.CMP[it.key];
  if (!c || !c.lecture || !c.verified) { fail(`${it.key}: comparison is missing a drawing`); continue; }
  if (!/verified drug structure/i.test(c.verified)) fail(`${it.key}: verified drawing is not labelled as such`);
  if (c.lecture === c.verified) fail(`${it.key}: lecture and verified drawings are identical`);
  if (!it.discrepancy || !it.discrepancy.lecture_shows || !it.discrepancy.verified_has) fail(`${it.key}: discrepancy text missing`);
}
if (withLec.length) ok(`${withLec.length} lecture/verified comparison(s) checked`);
const extraCmp = Object.keys(A.CMP).filter(k => !withLec.some(i => i.key === k));
extraCmp.length ? fail(`comparisons for items that match their slide: ${extraCmp.join(', ')}`)
                : ok('no comparison on a structure that matches its slide');

// 4. questions
const qsb = {}; vm.createContext(qsb);
const C = vm.runInContext(fs.readFileSync(path.join(SRC, 'course.js'), 'utf8') + '\nCOURSE', qsb);
let code = '';
for (const f of C.files.filter(f => /^q\d/.test(f))) code += fs.readFileSync(path.join(SRC, f), 'utf8') + '\n';
vm.runInContext(code + '\nglobalThis.QS = QUESTIONS;', qsb);
const byKey = Object.fromEntries(items.map(i => [i.key, i]));
const restricted = it => it && it.priority !== 'core';
let used = 0;
for (const q of qsb.QS) {
  const ks = [q.fg, ...(Array.isArray(q.cmp) ? q.cmp : [])].filter(Boolean);
  for (const k of ks) {
    used++;
    if (!byKey[k]) fail(`${q.id}: fg/cmp names "${k}", which is not an Atlas key`);
    else if (restricted(byKey[k])) fail(`${q.id}: shows the ${byKey[k].priority} structure "${k}"`);
  }
}
ok(`${used} question structure reference(s) checked against the priority classes`);

// 5. pre-answer drawings
const leaks = Object.entries(A.FGQ).filter(([k, svg]) => /var\(--wash\)/.test(svg) || !/aria-label="Chemical structure to identify"/.test(svg));
leaks.length ? fail(`pre-answer drawing(s) with shading or a naming label: ${leaks.map(l => l[0]).join(', ')}`)
             : ok(`all ${Object.keys(A.FGQ).length} pre-answer drawings are unshaded and unnamed`);

// 6. tile layout
const U = vm.runInContext('ATLAS_UI', sb);
const CITE_RE = /\(([^()]*)\)/g;
let nCites = 0; const unparsed = [];
for (const b of A.boards) for (const s of b.sections) for (const it of s.items) {
  for (const [part, txt] of [['main', it.t], ['also', it.e]]) {
    if (!txt) continue;
    const r = U.strip(txt);
    if (!r.clean) { unparsed.push(it.plain + ' (' + part + ')'); continue; }
    const expect = [...txt.matchAll(CITE_RE)].filter(m => U.isCite(m[1])).length + (txt.match(/(^|[.;]\s+)Slide \d+: /g) || []).length;
    if (r.cites.length !== expect) fail(`${it.plain} (${part}): ${expect} citation(s) in the text, ${r.cites.length} moved to Sources`);
    for (const c of r.cites) if (!txt.includes(c.replace(/^slide /, 'Slide ')) && !txt.includes(c)) fail(`${it.plain}: citation "${c}" not found in the source text`);
    if (/\(\s*\)|\s[.,;]/.test(r.text)) fail(`${it.plain} (${part}): stray punctuation after moving citations: ${r.text}`);
    nCites += r.cites.length;
  }
}
unparsed.length ? fail(`citation parser left ${unparsed.length} part(s) as written: ${unparsed.join(', ')}`)
                : ok(`all ${items.length} tiles parsed; ${nCites} inline citation(s) moved to "Sources and verification", none lost`);
const deep = items.filter(it => it.deeper);
const badDeep = deep.filter(it => !it.deeper.text || !Array.isArray(it.deeper.sources) || !it.deeper.sources.length ||
  it.deeper.sources.some(x => !x.cite || !/^https:\/\/\S+$/.test(x.url || '')));
badDeep.length ? fail(`deeper entr(ies) without text or a source with an https URL: ${badDeep.map(i => i.key).join(', ')}`)
               : ok(`${deep.length} "deeper" entr(ies), each with text and a cited source with a URL`);
const qText = code.replace(/\s+/g, ' ');
const inQ = [];
for (const it of deep) for (const sent of U.sentences(it.deeper.text)) {
  const probe = sent.replace(/\s+/g, ' ').slice(0, 60);
  if (probe.length >= 30 && qText.includes(probe)) inQ.push(it.key + ': ' + probe);
}
for (const it of deep) for (const x of it.deeper.sources) { const doi = (x.url.match(/10\.\d{4,}\/\S+/) || [])[0]; if (doi && qText.includes(doi)) inQ.push(it.key + ': ' + doi); }
inQ.length ? fail(`deeper (not tested) text found in question files: ${inQ.join('; ')}`)
           : ok('no deeper text or its source appears in any question file');
const ui = fs.readFileSync(path.join(SRC, 'atlas_ui.js'), 'utf8');
const mustHide = ['.atpg', '.atlbl', '.atalso', '.atdeep', '.atsrcs', '.atcmpbtn', '.atcmp', '.bintro', '.atsub', '.atnote', '.athead-name', '.atexcl'];
const hideRule = (ui.match(/([^{}]*)\{display:none\}/g) || []).filter(r => /namesoff/.test(r)).join(' ');
const notHidden = mustHide.filter(c => !new RegExp('#v-atlas\\.namesoff \\' + c + '(?![\\w-])').test(hideRule));
notHidden.length ? fail(`Hide names does not hide: ${notHidden.join(', ')}`)
                 : ok('Hide names hides page line, labels, also-in-lecture, deeper, sources, compare and headings');
/aria-label', off && !shown \? ANON/.test(ui) && /Chemical structure to identify/.test(ui)
  ? ok('Hide names gives each unrevealed drawing the neutral label "Chemical structure to identify"')
  : fail('Hide names does not neutralize the drawings\' aria-labels');

if (bad) { console.log(`FAIL: atlas_check.js: ${bad} problem(s)`); process.exit(1); }
console.log('PASS: atlas_check.js: Atlas data, comparisons and question use are consistent');

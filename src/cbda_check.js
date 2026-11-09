#!/usr/bin/env node
/* cbda_check.js: the chemical basis of drug action figures (cbda_data.json -> gen_cbda.py ->
   cbda.js), their structures and their places in the Guide and Reference.

     node cbda_check.js

   1. Every species SMILES is valid for RDKit's parser shape (non-empty, no spaces); a species
      that names an Atlas item uses that item's SMILES exactly (the Atlas items are the
      PubChem-verified ones); a species with no Atlas item is a teaching structure with a
      written reason.
   2. Every figure cites slides on Dr. Sikazwe's assigned Exam 1 pages (file pages 7-9, 12,
      15-23, 25-34, 43-55, 61-66), has a title, a caption naming the DPAW slide and a
      transcript location, existing species and a Guide section.
   3. cbda.js is current: each figure is in DIA with a drawn title, its figcaption, a
      self-scrolling svg, and a caption per step for a step-through; course.js loads cbda.js
      after reactions.js.
   4. The Guide places each figure in <div class="rxfig" id="cb-..."> inside its section;
      Reference rows carry "CBDA: ..." chips that jump to an existing figure, each figure
      reached by at least one chip.
   Prints FAIL lines and a PASS/FAIL summary; exits non-zero on a failure. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const H = __dirname, rd = f => fs.readFileSync(path.join(H, f), 'utf8');
let fails = 0, passes = 0;
const check = (ok, what, detail) => {
  if (ok) passes++; else { fails++; console.log('FAIL: ' + what + (detail ? ' (' + detail + ')' : '')); }
};
const range = (a, b) => Array.from({length: b - a + 1}, (_, i) => a + i);
const ASSIGNED = [7, 8, 9, 12, ...range(15, 23), ...range(25, 34), ...range(43, 55), ...range(61, 66)];

const data = JSON.parse(rd('cbda_data.json'));
check(JSON.stringify(data.assigned_pages) === JSON.stringify(ASSIGNED), 'assigned_pages equals his 11/06 list (file pages)');

// 1. species
const atlas = {};
for (const b of JSON.parse(rd('atlas_data.json')).boards) for (const s of b.sections) for (const it of s.items) atlas[it.key] = it;
const SP = {};
for (const s of data.species) {
  check(!SP[s.id], 'species id unique: ' + s.id);
  SP[s.id] = s;
  check(s.name && s.smiles && !/\s/.test(s.smiles) && Number.isInteger(s.slide), 'species has name, SMILES and slide: ' + s.id);
  check(ASSIGNED.includes(s.slide), 'species slide on the assigned pages: ' + s.id, 'p. ' + s.slide);
  if (s.atlas) {
    const a = atlas[s.atlas];
    check(!!a, 'Atlas item exists for ' + s.id, s.atlas);
    if (a) {
      check(a.smiles === s.smiles, 'species SMILES equals the Atlas item: ' + s.id, s.atlas);
      check(a.priority === 'core', 'species is an Atlas core structure: ' + s.id, a.priority);
    }
  } else {
    check(s.teaching === true && (s.teaching_note || '').length > 40, 'non-Atlas species is a teaching structure with its reason: ' + s.id);
  }
}

// 2. figures
const keys = new Set();
for (const f of data.figures) {
  check(/^cb-[a-z0-9-]+$/.test(f.key) && !keys.has(f.key), 'figure key cb-* and unique: ' + f.key);
  keys.add(f.key);
  check(Array.isArray(f.slides) && f.slides.length > 0, 'figure cites slides: ' + f.key);
  for (const p of f.slides || []) check(ASSIGNED.includes(p), 'figure slide on the assigned pages: ' + f.key, 'p. ' + p);
  check(f.title && f.title.length > 3, 'figure has a title: ' + f.key);
  check(/DPAW slides? \d+/.test(f.caption || ''), 'figure caption names the DPAW slide: ' + f.key);
  check(/T[ @]\d/.test(f.transcript || '') && /T[ @]\d/.test(f.caption || ''), 'figure carries its transcript location: ' + f.key);
  check((f.species || []).length > 0, 'figure lists its species: ' + f.key);
  for (const i of f.species || []) check(!!SP[i], 'figure species exists: ' + f.key + ' ' + i);
  check(!!f.guide, 'figure names its Guide section: ' + f.key);
}

// 3. cbda.js and course.js
const ctx = {DIA: {}, DIA_NAMES: {}, DIAGRAMS: []};
vm.createContext(ctx);
try { vm.runInContext(rd('cbda.js'), ctx); } catch (e) { check(false, 'cbda.js runs', e.message); }
for (const f of data.figures) {
  const h = ctx.DIA[f.key] || '';
  check(!!h, 'cbda.js has ' + f.key, 'rerun gen_cbda.py');
  check(/<figcaption>[^<]*DPAW slides? \d+/.test(h), 'figure html has its slide caption: ' + f.key);
  check(h.includes('<text class="title"'), 'figure html has a drawn title: ' + f.key);
  check(h.includes('<svg class="rx"') && h.includes('overflow-x:auto'), 'figure scrolls inside itself on a phone: ' + f.key);
  check(!/#[0-9A-Fa-f]{6}/.test(h.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '')), 'figure uses theme colours only (no hex colour): ' + f.key);
  const st = (h.match(/<g class="st/g) || []).length;
  if (st) {
    check(/data-anim="/.test(h), 'step-through has controls: ' + f.key);
    check(h.split('<g class="st').slice(1).every(g => /class="lbl sm capt"/.test(g)), 'each step has its caption: ' + f.key);
  }
  check(ctx.DIA_NAMES[f.key] === f.title, 'figure listed by name: ' + f.key);
}
check(Object.keys(ctx.DIA).length === data.figures.length, 'cbda.js has exactly the data figures');
check(ctx.DIAGRAMS.length === 1 && ctx.DIAGRAMS[0][1].length === data.figures.length, 'one Diagrams group with every figure');
const course = rd('course.js');
const ri = course.indexOf("'reactions.js'"), ci = course.indexOf("'cbda.js'");
check(ci > ri && ri >= 0, 'course.js files lists cbda.js after reactions.js');

// 4. Guide places and Reference chips
const guide = rd('guide.js');
for (const f of data.figures) {
  const re = new RegExp('<div class="rxfig" id="' + f.key + '"><!--DIA:' + f.key + '--></div>');
  check(re.test(guide), 'Guide places ' + f.key + ' in its anchor');
  const at = guide.search(re), sec = guide.lastIndexOf('<section class="gobj" id="', at);
  const id = sec >= 0 ? guide.slice(sec + 26, guide.indexOf('"', sec + 26)) : '';
  check(id === f.guide, 'Guide puts ' + f.key + ' in section ' + f.guide, id);
}
const ref = rd('reference.js');
const chips = [...ref.matchAll(/data-jump="guide:(cb-[a-z0-9-]+)">CBDA: [^<]+</g)].map(m => m[1]);
check(chips.length > 0, 'Reference has CBDA chips');
for (const k of chips) check(keys.has(k), 'Reference CBDA chip points at a figure: ' + k);
for (const k of keys) check(chips.includes(k), 'figure reached from a Reference row: ' + k);

console.log((fails ? 'FAIL' : 'PASS') + ': cbda_check.js: ' + passes + ' passed, ' + fails + ' failed (' +
  data.figures.length + ' figures, ' + data.species.length + ' species, ' + chips.length + ' Reference chips)');
process.exit(fails ? 1 : 0);

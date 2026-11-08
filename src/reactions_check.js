#!/usr/bin/env node
/* reactions_check.js: the reaction figures (reactions_data.json -> gen_reactions.py ->
   reactions.js), their species verification and their places in the Guide.

     node reactions_check.js

   1. Every species SMILES is a valid entry; a species that is an Atlas structure uses the
      Atlas item's SMILES exactly.
   2. Every species has a verification record (verification/reactions_verification.json)
      made from its current SMILES, with the PubChem query run and no mismatch or
      not-found status.
   3. Every figure cites slides, all on Dr. Sikazwe's assigned Exam 1 pages (file pages
      7-9, 12, 15-23, 25-34, 43-55, 61-66), has a caption that names a slide, a transcript
      location, a title, and species that exist.
   4. reactions.js is current (each figure in DIA, with a figcaption naming the slide; a
      step-through has one caption per step, class capt) and is listed in course.js files
      after diagrams.js.
   5. The Guide places each figure in its section inside <div class="rxfig" id="rx-..."> so
      Reference can jump to it.
   Prints PASS or FAIL lines and exits non-zero on a failure. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const H = __dirname, rd = f => fs.readFileSync(path.join(H, f), 'utf8');
let fails = 0, passes = 0;
const check = (ok, what, detail) => {
  if (ok) passes++; else { fails++; console.log('FAIL: ' + what + (detail ? ' (' + detail + ')' : '')); }
};

const ASSIGNED = [7, 8, 9, 12, ...range(15, 23), ...range(25, 34), ...range(43, 55), ...range(61, 66)];
function range(a, b) { const o = []; for (let i = a; i <= b; i++) o.push(i); return o; }

const data = JSON.parse(rd('reactions_data.json'));
check(JSON.stringify(data.assigned_pages) === JSON.stringify(ASSIGNED), 'assigned_pages equals his 11/06 list (file pages)');

// 1. species and the Atlas
const atlas = {};
for (const b of JSON.parse(rd('atlas_data.json')).boards) for (const s of b.sections) for (const it of s.items) atlas[it.key] = it;
const SP = {};
for (const s of data.species) {
  check(!SP[s.id], 'species id unique: ' + s.id);
  SP[s.id] = s;
  check(s.name && s.smiles && Number.isInteger(s.slide), 'species has name, SMILES and slide: ' + s.id);
  check(ASSIGNED.includes(s.slide), 'species slide on the assigned pages: ' + s.id, 'p. ' + s.slide);
  if (s.atlas) {
    check(!!atlas[s.atlas], 'Atlas item exists for ' + s.id, s.atlas);
    if (atlas[s.atlas]) check(atlas[s.atlas].smiles === s.smiles, 'species SMILES equals the Atlas item: ' + s.id, s.atlas);
  }
  if (s.smiles.includes('*')) check(!!s.verify_smiles, 'a drawing with an attachment atom has verify_smiles: ' + s.id);
}

// 2. verification record
let ver = null;
try { ver = JSON.parse(rd('verification/reactions_verification.json')); } catch (e) { check(false, 'verification/reactions_verification.json readable', e.message); }
if (ver) {
  const byK = {}; for (const r of ver.results) byK[r.key] = r;
  for (const s of data.species) {
    const r = byK[s.id];
    check(!!r, 'verification record for ' + s.id);
    if (!r) continue;
    check(r.drawn_smiles === s.smiles, 'verification made from the current SMILES: ' + s.id, 'rerun verify_reactions.py');
    check(r.atlas && r.atlas.smiles === (s.verify_smiles || s.smiles), 'verified SMILES is the drawn one (or its verify_smiles): ' + s.id);
    check(r.pubchem_checked === true, 'PubChem query ran for ' + s.id);
    check(!['mismatch', 'not-found', 'stereo-differs'].includes(r.status), 'verification status acceptable for ' + s.id, r.status);
    check(!!s.teaching === (r.status === 'teaching-structure'), 'teaching flag matches the status for ' + s.id, r.status);
  }
  check(ver.results.length === data.species.length, 'one record per species', ver.results.length + ' vs ' + data.species.length);
}

// 3. figures
const keys = new Set();
for (const f of data.figures) {
  check(/^rx-[a-z0-9-]+$/.test(f.key) && !keys.has(f.key), 'figure key rx-* and unique: ' + f.key);
  keys.add(f.key);
  check(Array.isArray(f.slides) && f.slides.length > 0, 'figure cites slides: ' + f.key);
  for (const p of f.slides || []) check(ASSIGNED.includes(p), 'figure slide on the assigned pages: ' + f.key, 'p. ' + p);
  check(f.title && f.title.length > 3, 'figure has a title: ' + f.key);
  check(f.caption && /DPAW slide \d+/.test(f.caption), 'figure caption names the DPAW slide: ' + f.key);
  check(f.transcript && /T[ @]/.test(f.transcript) && f.caption.includes('T'), 'figure carries its transcript location: ' + f.key);
  for (const i of f.species || []) check(!!SP[i], 'figure species exists: ' + f.key + ' ' + i);
  check(!!f.guide, 'figure names its Guide section: ' + f.key);
}

// 4. reactions.js and course.js
const ctx = {DIA: {}, DIA_NAMES: {}, DIAGRAMS: []};
check(/textContent = "\.fig\.rxfig svg\.rx\{width:\d+px/.test(rd('reactions.js')), 'reactions.js sets the figure width in whole pixels');
vm.createContext(ctx);
try { vm.runInContext(rd('reactions.js'), ctx); } catch (e) { check(false, 'reactions.js runs', e.message); }
for (const f of data.figures) {
  const h = ctx.DIA[f.key] || '';
  check(!!h, 'reactions.js has ' + f.key, 'rerun gen_reactions.py');
  check(/<figcaption>[^<]*DPAW slide \d+/.test(h), 'figure html has its slide caption: ' + f.key);
  check(h.includes('<text class="title"'), 'figure html has a drawn title: ' + f.key);
  check(h.includes('<svg class="rx"') && h.includes('overflow-x:auto'), 'figure scrolls inside itself on a phone: ' + f.key);
  const st = (h.match(/<g class="st/g) || []).length;
  if (st) {
    check(/data-anim="/.test(h), 'step-through has controls: ' + f.key);
    const caps = h.split('<g class="st').slice(1).map(g => /class="lbl sm capt"/.test(g));
    check(caps.every(Boolean), 'each step has its caption: ' + f.key);
  }
  check(ctx.DIA_NAMES[f.key] === f.title, 'figure listed by name: ' + f.key);
}
check(ctx.DIAGRAMS.length === 1 && ctx.DIAGRAMS[0][1].length === data.figures.length, 'one Diagrams group with every figure');
const course = rd('course.js');
const di = course.indexOf("'diagrams.js'"), ri = course.indexOf("'reactions.js'");
check(ri > di && di >= 0, 'course.js files lists reactions.js after diagrams.js');

// 5. Guide places
const guide = rd('guide.js');
for (const f of data.figures) {
  const re = new RegExp('<div class="rxfig" id="' + f.key + '">\\s*<!--DIA:' + f.key + '-->\\s*</div>');
  check(re.test(guide), 'Guide places ' + f.key + ' in its anchor');
  const at = guide.search(re), sec = guide.lastIndexOf('<section class="gobj" id="', at);
  const id = sec >= 0 ? guide.slice(sec + 26, guide.indexOf('"', sec + 26)) : '';
  check(id === f.guide, 'Guide puts ' + f.key + ' in section ' + f.guide, id);
}

console.log((fails ? 'FAIL' : 'PASS') + ': reactions_check.js: ' + passes + ' passed, ' + fails + ' failed (' +
  data.figures.length + ' figures, ' + data.species.length + ' species)');
process.exit(fails ? 1 : 0);

#!/usr/bin/env node
/* diagrams_oo_check.js: Dr. Sikazwe's otic, oral and ophthalmic figures (diagrams_oo.js, Exam 3).

     node diagrams_oo_check.js

   1. course.js lists diagrams_oo.js after figs2.js; the file adds each figure to DIA and DIA_NAMES
      and lists all six, once, in one DIAGRAMS group named for Dr. Sikazwe and Exam 3.
   2. Each figure is a step-through with the planned number of steps, one dot per step and the
      planned panel height; each figure opens with its Purpose line; the figcaption names
      Sikazwe_OOO_mc.pdf with slide numbers, and a transcript place (T@) for slides 1-32 or
      "from the slides alone" for slides past 32; each step's drawn caption cites a slide.
   3. STEPPERS.md rules a script can see: every drawn shape has a data-k, unique inside its step;
      no shape has its own transform; opacity only as an attribute; no colour written into the
      markup; every shape inside the 360-wide panel and above the caption band; each step caption
      at most three lines (none clipped).
   4. Text size: every font size the file's CSS sets is at least 11 units (the figures are drawn
      about 350 px wide on a phone, so 11 units is about 11 px).
   5. Source rules: the printed numbers and formulas (ClogP 1.5 / 0.87 / 1.2, under 10% and over 50%,
      2 mg/L, Ca10(PO4)6(OH)2 and Ca10(PO4)6F2, phosphoryl > carbamate > ester), the "most" on each
      imidazoline linker and the slide's printed X=NH2; functional groups named, no "double/triple
      bond"; no "corneal esterase" (slide 29 puts esterase in the conjunctiva); no figurative words.
      Every T@ offset cited lies inside the 11/18 transcript when src/decks/ holds it (NOT RUN otherwise).
   Prints FAIL lines and a PASS or FAIL summary; exits non-zero on a failure. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const H = __dirname, rd = f => fs.readFileSync(path.join(H, f), 'utf8');
let fails = 0, passes = 0;
const notes = [];
const check = (ok, what, detail) => {
  if (ok) passes++; else { fails++; console.log('FAIL: ' + what + (detail != null ? ' (' + detail + ')' : '')); }
};

const GROUP = 'Otic, oral and ophthalmic chemistry (Dr. Sikazwe, Exam 3)';
const PLAN = {
  'oo-cerumen':     {steps: 4, h: 312, slides: /slide 8/, lecture: true},
  'oo-fluoride':    {steps: 4, h: 340, slides: /slides 16–18/, lecture: true},
  'oo-eye-entry':   {steps: 4, h: 350, slides: /slide 29/, lecture: true},
  'oo-imidazoline': {steps: 5, h: 350, slides: /slide 31/, lecture: true},
  'oo-ache':        {steps: 4, h: 360, slides: /slide 42/, lecture: false},
  'oo-pg-prodrug':  {steps: 4, h: 340, slides: /slide 45/, lecture: false},
};
const CAP_BAND = 57;            // three caption lines and the "Step n of m" line, from the bottom of the panel

// 1. course.js order and registration
const sbC = {module: {}, require};
vm.createContext(sbC);
vm.runInContext(rd('course.js') + '\nthis.F = (typeof COURSE !== "undefined" ? COURSE : module.exports).files;', sbC);
const F = sbC.F || [];
const fi = F.indexOf('figs2.js'), oi = F.indexOf('diagrams_oo.js');
check(oi > fi && fi >= 0, 'course.js files lists diagrams_oo.js after figs2.js', JSON.stringify([fi, oi]));

const sb = {console};
vm.createContext(sb);
vm.runInContext(rd('diagrams.js') + '\n' + rd('diagrams_oo.js') +
  '\nthis.X = {DIA, DIA_NAMES, DIAGRAMS, P: DIAGRAMS_OO_PURPOSE, OO: DIAGRAMS_OO};', sb);
const {DIA, DIA_NAMES, DIAGRAMS, P, OO} = sb.X;
const groups = DIAGRAMS.filter(([name]) => name === GROUP);
check(groups.length === 1, 'one DIAGRAMS group named "' + GROUP + '"', groups.length);
const grouped = DIAGRAMS.flatMap(([, keys]) => keys);
for (const k of Object.keys(PLAN)) {
  check(typeof DIA[k] === 'string', k + ' is in DIA');
  check(!!DIA_NAMES[k], k + ' has a name in DIA_NAMES');
  check(grouped.filter(x => x === k).length === 1 && groups[0] && groups[0][1].includes(k), k + ' is listed once, in the Exam 3 group');
}
check(Object.keys(OO.figs).every(k => /^oo-/.test(k) && PLAN[k]), 'every figure in the file has an oo- key and a plan', Object.keys(OO.figs).join(', '));

// 2-3. each figure
const SHAPE = /<(text|line|path|rect|circle|ellipse|polygon|polyline)\b([^>]*)>/g;
const attr = (s, a) => { const m = s.match(new RegExp('\\b' + a + '="([^"]*)"')); return m ? m[1] : null; };
const FIGURATIVE = /\b(like a|as if|journey|army|soldier|key and lock|lock and key|bomb|attack|hero|villain)\b/i;
const cited = [];
for (const [k, plan] of Object.entries(PLAN)) {
  const html = DIA[k];
  if (typeof html !== 'string') continue;
  check(html.startsWith('<figure class="fig"><p class="dnpurpose"><b>Purpose.</b> ') && P[k] &&
    html.includes(P[k].replace(/&/g, '&amp;')), k + ': opens with its Purpose line');
  check(/^(Shows|Builds|Compares) /.test(P[k] || '') && /, so you can /.test(P[k] || ''), k + ': Purpose sentence in the purpose_ui.js form');
  const steps = html.split(/<g class="st[ "]/).slice(1).map(s => s.slice(0, s.lastIndexOf('</g>')));
  const nDots = (html.match(/class="sdot[ "]/g) || []).length;
  check(steps.length === plan.steps, k + ': ' + plan.steps + ' steps', steps.length);
  check(nDots === steps.length, k + ': one dot per step', nDots);
  check(/data-anim="/.test(html), k + ': carries step controls');
  const vb = html.match(/viewBox="0 0 (\d+) (\d+)"/);
  check(vb && +vb[1] === 360 && +vb[2] === plan.h, k + ': panel 360 x ' + plan.h, vb && vb.slice(1).join(' x '));
  const cap = (html.match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] || '';
  check(/Sikazwe_OOO_mc\.pdf/.test(cap) && plan.slides.test(cap), k + ': figcaption names the deck and its slides');
  if (plan.lecture) check(/lecture 11\/18, T@\d+/.test(cap), k + ': figcaption names the 11/18 transcript place');
  else check(/From the slides alone/.test(cap), k + ': figcaption says it is drawn from the slides alone');
  for (const m of html.matchAll(/T@(\d+)(?:–@(\d+))?/g)) cited.push([k, +m[1], m[2] ? +m[2] : +m[1]]);
  const svgOnly = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '').replace(/<p class="dnpurpose">[\s\S]*?<\/p>/, '');
  check(!/(fill|stroke|stop-color)="#|(fill|stroke)="(rgb|hsl)|style="[^"]*(#[0-9a-f]{3}|rgb\()/i.test(svgOnly), k + ': no colour written into the markup');
  check(!FIGURATIVE.test(svgOnly), k + ': no figurative words drawn', (svgOnly.match(FIGURATIVE) || [])[0]);
  check(!/(double|triple) bond/i.test(html), k + ': functional groups named, not double or triple bonds');
  steps.forEach((s, i) => {
    const capLines = [...s.matchAll(/<text class="lbl xs capt oo-cap"[^>]*>([^<]*)<\/text>/g)].map(m => m[1]);
    check(capLines.length >= 1 && capLines.length <= 3, `${k} step ${i + 1}: caption of one to three lines`, capLines.length);
    check(/\((?:[^)]*\b)?slides? \d/.test(capLines.join(' ')), `${k} step ${i + 1}: drawn caption cites a slide`, capLines.join(' ').slice(0, 80));
    const keys = [], noKey = [], tf = [], out = [], low = [], styleOp = [];
    for (const m of s.matchAll(SHAPE)) {
      const a = m[2];
      if (/\bcapt\b/.test(attr(a, 'class') || '')) continue;      // the step caption
      const dk = attr(a, 'data-k');
      if (dk == null) noKey.push(m[1] + ' ' + a.slice(0, 40)); else keys.push(dk);
      if (/\btransform=/.test(a)) tf.push(dk);
      if (/style="[^"]*opacity/.test(a)) styleOp.push(dk);
      const xs = ['x', 'x1', 'x2', 'cx'].map(n => attr(a, n)).filter(v => v != null).map(Number);
      const ys = ['y', 'y1', 'y2', 'cy'].map(n => attr(a, n)).filter(v => v != null).map(Number);
      const hh = +(attr(a, 'height') || 0), rr = +(attr(a, 'r') || attr(a, 'ry') || 0);
      if (xs.some(v => v < 0 || v > 360) || ys.some(v => v < 0 || v > plan.h)) out.push(dk);
      if (ys.some(v => v + hh + rr > plan.h - CAP_BAND)) low.push(dk);
    }
    const dup = keys.filter((x, j) => keys.indexOf(x) !== j);
    check(!noKey.length, `${k} step ${i + 1}: every shape has a data-k`, noKey.slice(0, 3).join('; '));
    check(!dup.length, `${k} step ${i + 1}: data-k values unique`, [...new Set(dup)].join(', '));
    check(!tf.length, `${k} step ${i + 1}: no shape carries its own transform`, tf.join(', '));
    check(!styleOp.length, `${k} step ${i + 1}: opacity set as an attribute, not a style`, styleOp.join(', '));
    check(!out.length, `${k} step ${i + 1}: every shape inside the 360 x ${plan.h} panel`, out.join(', '));
    check(!low.length, `${k} step ${i + 1}: nothing drawn in the caption band`, low.join(', '));
  });
}
// captions not clipped: the source captions wrap to three lines or fewer at the file's width
{
  const src = rd('diagrams_oo.js');
  const w = +(src.match(/CAP_W = (\d+)/) || [])[1];
  const capsSrc = [...src.matchAll(/^\s*\['([^']+)', s\d\],?$/gm)].map(m => m[1]);
  const over = [];
  for (const c of capsSrc) {
    const out = []; let cur = '';
    c.split(' ').forEach(x => { if ((cur + ' ' + x).trim().length > w) { out.push(cur.trim()); cur = x; } else cur += ' ' + x; });
    out.push(cur.trim());
    if (out.filter(Boolean).length > 3) over.push(c.slice(0, 40));
  }
  check(capsSrc.length === Object.values(PLAN).reduce((a, p) => a + p.steps, 0), 'every step caption found in the source', capsSrc.length);
  check(!over.length, 'no step caption is clipped at three lines', over.join(' | '));
}

// 4. text sizes
{
  const sizes = [...OO.css.matchAll(/([^{}]+)\{[^}]*font-size:([\d.]+)px/g)].map(m => [m[1].trim(), +m[2]]);
  const small = sizes.filter(([, v]) => v < 11);
  check(sizes.length >= 10, 'the CSS sets the figure text sizes', sizes.length);
  check(!small.length, 'every text size the file sets is at least 11 units', small.map(s => s.join(' ')).join('; '));
  const used = new Set([...Object.values(OO.figs).join('').matchAll(/<text class="([^"]+)"/g)].flatMap(m => m[1].split(' ')));
  const sized = new Set(sizes.flatMap(([sel]) => [...sel.matchAll(/\.([a-z0-9-]+)/g)].map(m => m[1])));
  const unsized = [...used].filter(c => /^oo-/.test(c) && !sized.has(c));
  check(!unsized.length, 'every oo- text class has its own size', unsized.join(', '));
  const plainLbl = Object.values(OO.figs).join('').match(/<text class="lbl(?: (?:sm|xs))?"/g);
  check(!plainLbl, 'no text left at the engine’s 8.5 or 10 unit label sizes', plainLbl && plainLbl.length);
}

// 5. source rules (drawn text, the step captions included)
const drawn = k => (DIA[k] || '').replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '');
{
  const im = drawn('oo-imidazoline');
  for (const s of ['clonidine 1.5', 'apraclonidine 0.87', 'brimonidine 1.2']) check(im.includes(s), 'oo-imidazoline: ClogP as slide 31 prints it: ' + s);
  check(/X = CH₂: most are α1-receptor agonists/.test(im) && /X = NH: most are α2-receptor agonists/.test(im), 'oo-imidazoline: "most" kept on each linker (T@50385)');
  check(im.includes('X=NH₂'), 'oo-imidazoline: the slide’s printed X=NH₂ is named');
  check(/amine analog/.test(im) && /pyrazine analog/.test(im) && /prototype/.test(im), 'oo-imidazoline: prototype, amine analog, pyrazine analog');
  check(/about 8 h/.test(im) && /3–4 h/.test(im), 'oo-imidazoline: the half-lives he gave');
  const ey = drawn('oo-eye-entry');
  check(/under 10% of the dose/.test(ey) && /over 50% of the dose/.test(ey), 'oo-eye-entry: slide 30 percentages');
  check(/small, lipophilic drugs/.test(ey) && /large, hydrophilic drugs/.test(ey) && /lipid \/ water \/ lipid/.test(ey), 'oo-eye-entry: routes as slides 29-30 print them');
  const fl = drawn('oo-fluoride');
  check(fl.includes('Ca₁₀(PO₄)₆(OH)₂') && fl.includes('Ca₁₀(PO₄)₆F₂'), 'oo-fluoride: both formulas as slide 17 prints them');
  check(/2 mg\/L/.test(fl) && /fluorosis/.test(fl), 'oo-fluoride: the slide 18 limit');
  check(/NaF/.test(fl) && /SnF₂/.test(fl) && /Na₂PO₃F/.test(fl), 'oo-fluoride: the three fluoride sources of slide 17');
  const ce = drawn('oo-cerumen');
  check(/1:1 urea · H₂O₂ complex/.test(ce) && /catalase/.test(ce) && /\(in cerumen\)/.test(ce) && /O₂ \+ water/.test(ce), 'oo-cerumen: complex, catalase in cerumen, O₂ and water');
  const ac = drawn('oo-ache');
  const iP = ac.indexOf('1  Phosphoryl'), iC = ac.indexOf('2  Carbamate'), iE = ac.indexOf('3  Ester');
  check(iP > 0 && iC > iP && iE > iC, 'oo-ache: ranked phosphoryl > carbamate > ester (slide 42)');
  check(/intermediate/.test(ac) && /irreversibly inactive/.test(ac) && /C₂H₅–OH/.test(ac), 'oo-ache: intermediate carbamate, aging to irreversibly inactive');
  const pg = drawn('oo-pg-prodrug');
  check(/isopropyl ester/.test(pg) && /Latanoprost acid \(active\)/.test(pg) && /amides/.test(pg) && /prevent 15-OH oxidation/.test(pg), 'oo-pg-prodrug: ester prodrug, active acid, slide 46 SAR');
  const all = Object.keys(PLAN).map(k => DIA[k]).join('');
  check(!/corneal esterase/i.test(all), 'no "corneal esterase": slide 29 lists esterase among the conjunctiva’s enzymes');
}
{
  const tp = path.join(H, 'decks', 'DEENT_Lecture_11.18_transcript.txt');
  if (fs.existsSync(tp)) {
    const n = fs.readFileSync(tp, 'utf8').length;
    const bad = cited.filter(([, a, b]) => a < 0 || b > n || a > b);
    check(cited.length > 10 && !bad.length, 'every T@ offset cited lies inside the 11/18 transcript (' + n + ' characters)', bad.map(x => x.join(' ')).join('; '));
  } else notes.push('NOT RUN: T@ offsets (src/decks/DEENT_Lecture_11.18_transcript.txt is not here)');
}

notes.forEach(n => console.log(n));
console.log((fails ? 'FAIL' : 'PASS') + ': diagrams_oo_check.js: ' + passes + ' passed, ' + fails + ' failed (' +
  Object.keys(PLAN).length + ' figures, ' + Object.values(PLAN).reduce((a, p) => a + p.steps, 0) + ' steps; ' + cited.length + ' transcript citations)');
process.exit(fails ? 1 : 0);

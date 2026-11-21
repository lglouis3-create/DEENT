#!/usr/bin/env node
/* diagrams_lg_check.js: Dr. Lam's glaucoma therapeutics figures (diagrams_lg.js, Exam 3).

     node diagrams_lg_check.js

   1. course.js lists diagrams_lg.js after figs2.js; the file adds each figure to DIA and DIA_NAMES
      and lists all five, once, in one DIAGRAMS group named for Dr. Lam and Exam 3.
   2. Each figure is a step-through with the planned number of steps, one dot per step and the
      planned panel height; each figure opens with its Purpose line; the figcaption names
      Lam_Glaucoma.pdf with slide numbers and a transcript place (T@, 11/19); each step's drawn
      caption cites a slide.
   3. STEPPERS.md rules a script can see: every drawn shape has a data-k, unique inside its step;
      no shape has its own transform; opacity only as an attribute; no colour written into the
      markup; every shape inside the 360-wide panel and above the caption band; each step caption
      at most three lines (none clipped).
   4. Text size: every font size the file's CSS sets is at least 11 units.
   5. Source rules: the printed numbers (33%, 20-30%, 18-27%, 15-26%, 51%, 5, 10 and 15 minutes,
      the frequencies, the class pairs of the three combination products), the order of the six
      classes, the Rho-kinase inhibitor as once daily, no drug named for the carbonic anhydrase
      inhibitor in Simbrinza, no figurative words. Every T@ offset cited lies inside her part of the
      11/19 transcript (35,742 to the end) when src/decks/ holds it (NOT RUN otherwise).
   Prints FAIL lines and a PASS or FAIL summary; exits non-zero on a failure. */

'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const H = __dirname, rd = f => fs.readFileSync(path.join(H, f), 'utf8');
let fails = 0, passes = 0;
const notes = [];
const check = (ok, what, detail) => {
  if (ok) passes++; else { fails++; console.log('FAIL: ' + what + (detail != null ? ' (' + detail + ')' : '')); }
};

const GROUP = 'Glaucoma drugs and counseling (Dr. Lam)';
const PLAN = {
  'lg-sequence':       {steps: 6, h: 372},
  'lg-administration': {steps: 5, h: 300},
  'lg-eyelid':         {steps: 5, h: 292},
  'lg-problems':       {steps: 5, h: 304},
  'lg-combos':         {steps: 4, h: 346},
};
const CAP_BAND = 57;            // three caption lines and the "Step n of m" line, from the bottom of the panel

// 1. course.js order and registration
const sbC = {module: {}, require};
vm.createContext(sbC);
vm.runInContext(rd('course.js') + '\nthis.F = (typeof COURSE !== "undefined" ? COURSE : module.exports).files;', sbC);
const F = sbC.F || [];
const fi = F.indexOf('figs2.js'), oi = F.indexOf('diagrams_lg.js');
if (oi < 0) notes.push('NOTE: course.js does not list diagrams_lg.js yet (registering it is a separate step)');
else check(oi > fi && fi >= 0, 'course.js files lists diagrams_lg.js after figs2.js', JSON.stringify([fi, oi]));

const sb = {console};
vm.createContext(sb);
vm.runInContext(rd('diagrams.js') + '\n' + rd('diagrams_lg.js') +
  '\nthis.X = {DIA, DIA_NAMES, DIAGRAMS, P: DIAGRAMS_LG_PURPOSE, OO: DIAGRAMS_LG};', sb);
const {DIA, DIA_NAMES, DIAGRAMS, P, OO} = sb.X;
const groups = DIAGRAMS.filter(([name]) => name === GROUP);
check(groups.length === 1, 'one DIAGRAMS group named "' + GROUP + '"', groups.length);
const grouped = DIAGRAMS.flatMap(([, keys]) => keys);
for (const k of Object.keys(PLAN)) {
  check(typeof DIA[k] === 'string', k + ' is in DIA');
  check(!!DIA_NAMES[k], k + ' has a name in DIA_NAMES');
  check(grouped.filter(x => x === k).length === 1 && groups[0] && groups[0][1].includes(k), k + ' is listed once, in the Exam 3 group');
}
check(Object.keys(OO.figs).every(k => /^lg-/.test(k) && PLAN[k]), 'every figure in the file has an lg- key and a plan', Object.keys(OO.figs).join(', '));

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
  check(/Lam_Glaucoma\.pdf/.test(cap) && /slides? \d/.test(cap), k + ': figcaption names the deck and its slides');
  check(/lecture 11\/19, T@\d+/.test(cap), k + ': figcaption names the 11/19 transcript place');
  for (const m of html.matchAll(/T@(\d+)(?:–@(\d+))?/g)) cited.push([k, +m[1], m[2] ? +m[2] : +m[1]]);
  const svgOnly = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '').replace(/<p class="dnpurpose">[\s\S]*?<\/p>/, '');
  check(!/(fill|stroke|stop-color)="#|(fill|stroke)="(rgb|hsl)|style="[^"]*(#[0-9a-f]{3}|rgb\()/i.test(svgOnly), k + ': no colour written into the markup');
  check(!FIGURATIVE.test(svgOnly), k + ': no figurative words drawn', (svgOnly.match(FIGURATIVE) || [])[0]);
  check(!/(double|triple) bond/i.test(html), k + ': functional groups named, not double or triple bonds');
  steps.forEach((s, i) => {
    const capLines = [...s.matchAll(/<text class="lbl xs capt lg-cap"[^>]*>([^<]*)<\/text>/g)].map(m => m[1]);
    check(capLines.length >= 1 && capLines.length <= 3, `${k} step ${i + 1}: caption of one to three lines`, capLines.length);
    check(/\((?:[^)]*\b)?slides? \d/.test(capLines.join(' ')), `${k} step ${i + 1}: drawn caption cites a slide`, capLines.join(' ').slice(0, 80));
    check(/T@\d+/.test(capLines.join(' ')) || (k === 'lg-eyelid' && i === 4), `${k} step ${i + 1}: drawn caption cites a transcript place`, capLines.join(' ').slice(0, 80));
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
  const src = rd('diagrams_lg.js');
  const w = +(src.match(/CAP_W = (\d+)/) || [])[1];
  const capsSrc = [...src.matchAll(/^\s*\['([^'\n]+)', [^\n]*\],?$/gm)].map(m => m[1]).filter(x => /\(slides? \d/.test(x));
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
  const unsized = [...used].filter(c => /^lg-/.test(c) && !sized.has(c));
  check(!unsized.length, 'every lg- text class has its own size', unsized.join(', '));
  const plainLbl = Object.values(OO.figs).join('').match(/<text class="lbl(?: (?:sm|xs))?"/g);
  check(!plainLbl, 'no text left at the engine’s 8.5 or 10 unit label sizes', plainLbl && plainLbl.length);
}

// 5. source rules (drawn text, the step captions included)
const drawn = k => (DIA[k] || '').replace(/<figcaption>[\s\S]*?<\/figcaption>/, '').replace(/aria-label="[^"]*"/, '');
{
  const sq = drawn('lg-sequence');
  const idx = ['Prostaglandin analog', 'Beta blocker', 'Alpha-2 agonist', 'Topical CAI', 'Cholinergic', 'Rho-kinase inhibitor'].map(x => sq.indexOf('>' + x + '<'));
  check(idx.every((v, i) => v > 0 && (i === 0 || v > idx[i - 1])), 'lg-sequence: six classes in the order of slide 63', idx.join(','));
  for (const x of ['up to 33%', '20–30%', '18–27%', '15–26%', 'once daily', 'twice daily', 'three times daily', 'four times daily', 'once daily, evening', '51%', 'brinzolamide'])
    check(sq.includes(x), 'lg-sequence: prints ' + x);
  check(/Rho-kinase inhibitor is last: hemorrhage/.test(sq) && !/Rho-kinase[^<]*(three|four) times/.test(sq), 'lg-sequence: Rho-kinase inhibitor is last for hemorrhage and cost, once daily');
  const ad = drawn('lg-administration');
  check((ad.match(/>5 min</g) || []).length >= 2 && ad.includes('>10 min<') && /15 minutes/.test(ad), 'lg-administration: 5, 10 and 15 minute waits');
  check(/Solutions/.test(ad) && /Suspensions/.test(ad) && /Ointments and gel-forming solutions/.test(ad) && /Timolol gel-forming solution is in the third group/.test(ad), 'lg-administration: order and where timolol gel falls');
  check(ad.indexOf('>Solutions<') < ad.indexOf('>Suspensions<') && ad.indexOf('>Suspensions<') < ad.indexOf('>Ointments and gel-forming solutions<'), 'lg-administration: solution, suspension, ointment order');
  const el = drawn('lg-eyelid');
  check(/do not squeeze or rub/.test(el) && /1–2 minutes/.test(el) && /nasolacrimal drainage/.test(el) && /systemic absorption/.test(el), 'lg-eyelid: press 1-2 minutes, not squeezed; drainage and absorption');
  check(/touches nothing/.test(el) && /Wash your hands/.test(el) && /pocket/.test(el), 'lg-eyelid: hands, tip, pocket');
  const pb = drawn('lg-problems');
  for (const x of ['Indication', 'Effectiveness', 'Safety', 'Adherence', 'Intolerance (side effects)', 'Inadequate response', 'preservative-free', 'latanoprost to bimatoprost', 'Timoptic XE gel']) check(pb.includes(x), 'lg-problems: prints ' + x);
  const cb = drawn('lg-combos');
  for (const x of ['Combigan', 'Cosopt,', 'Cosopt PF', 'Simbrinza', 'twice daily', 'three times daily']) check(cb.includes(x), 'lg-combos: prints ' + x);
  check(/Simbrinza: brinzolamide \(CAI\) \+ brimonidine/.test(cb), 'lg-combos: Simbrinza is named as brinzolamide + brimonidine (her 11/20 email)');
  const last = cb.split(/<g class="st[ "]/).pop();
  check((last.match(/>twice daily</g) || []).length === 2 && (last.match(/>three times daily</g) || []).length === 1, 'lg-combos: two twice-daily products and one three-times-daily');
  const all = Object.keys(PLAN).map(k => DIA[k]).join('');
  check(!/(double|triple) bond/i.test(all), 'no double/triple bond wording');
}
{
  const tp = path.join(H, 'decks', 'DEENT_Lecture_11.19_transcript.txt');
  if (fs.existsSync(tp)) {
    const n = fs.readFileSync(tp, 'utf8').length;
    const bad = cited.filter(([, a, b]) => a < 35742 || b > n || a > b);
    check(cited.length > 10 && !bad.length, 'every T@ offset cited lies inside her part of the 11/19 transcript (35742 to ' + n + ')', bad.map(x => x.join(' ')).join('; '));
  } else notes.push('NOT RUN: T@ offsets (src/decks/DEENT_Lecture_11.19_transcript.txt is not here)');
}

notes.forEach(n => console.log(n));
console.log((fails ? 'FAIL' : 'PASS') + ': diagrams_lg_check.js: ' + passes + ' passed, ' + fails + ' failed (' +
  Object.keys(PLAN).length + ' figures, ' + Object.values(PLAN).reduce((a, p) => a + p.steps, 0) + ' steps; ' + cited.length + ' transcript citations)');
process.exit(fails ? 1 : 0);

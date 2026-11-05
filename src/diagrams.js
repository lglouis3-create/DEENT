/* ==========================================================================
   DIAGRAMS — figures drawn as inline SVG
   ==========================================================================
   A figure is a string of SVG markup wrapped in <figure class="fig">. Figures
   are written here rather than cropped from a slide when the point is a process
   or a relation: they stay sharp at any size, cost almost nothing in file size,
   and follow the page's light and dark colours.

   Three ways a figure reaches the reader:
     a question's concept block   `svg: DIA.key` on the question
     a reading tab                `<!--DIA:key-->` in reference.js / tell.js / guide.js
     the Diagrams tab             listed in DIAGRAMS below

   `figure(inner, cap, h)` wraps plain SVG. `stepper(key, title, steps, h, cap,
   footer)` builds a step-through: one group per step, with Back, Next, Replay
   step, Play all and a dot per step. The engine (views.js) animates the move
   between two steps, so authoring a step-through means writing each step's end
   state and nothing about the motion. See STEPPERS.md before writing one; the
   two rules that matter most are repeated here:

     1. A shape that is the same thing in two steps carries the same `data-k`.
        That is what makes it glide instead of fading out and back in.
     2. A shape that should keep its own opacity sets the `opacity` attribute,
        not a CSS class; the fade-in animates from 0 to whatever that is.

   Figures below are drawn from Dr. Smith's slides; each caption names the slide.
   ========================================================================== */
const DIA_W = 360;                                  // every figure is drawn 360 wide
const DIA_H = 200;

/* The arrow marker is defined inside each figure, since a figure can be moved
   into a question, a reading tab or the Diagrams tab and has to carry its own. */
const figure = (inner, cap, h = DIA_H) => `<figure class="fig"><svg viewBox="0 0 ${DIA_W} ${h}" role="img" aria-label="${
  String(cap || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().replace(/"/g, '&quot;')}">
  <defs><marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
  <path d="M0 0 L10 5 L0 10 z" fill="currentColor" opacity="0.65"/></marker></defs>${inner}</svg>${
  cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;

/* Captions are drawn inside the panel so a step's own words travel with it.
   Three lines at most; the third is clipped rather than overflowing the box. */
const wrapLines = (t, n = 76) => {
  const out = []; let cur = '';
  String(t).split(' ').forEach(w => {
    if ((cur + ' ' + w).trim().length > n) { out.push(cur.trim()); cur = w; } else cur += ' ' + w;
  });
  out.push(cur.trim());
  if (out.length > 3) { out.length = 3; out[2] = out[2].replace(/.{2}$/, '…'); }
  return out.filter(Boolean);
};

/* steps = [[caption, inner, tag?], …]. The caption of the active step is drawn
   in the band at the bottom of the panel, which is why `h` has to leave room
   for it (about 34px for a one-line caption). Captions carry class `capt` so
   the engine fades them rather than trying to glide them. */
function stepper(key, title, steps, h = DIA_H, cap = '', footer = '') {
  let g = title ? `<text class="title" x="${DIA_W / 2}" y="11" text-anchor="middle">${title}</text>` : '';
  steps.forEach((st, i) => {
    const lines = wrapLines(st[0]);
    g += `<g class="st${i === 0 ? ' on' : ''}" data-step="${i + 1}">${st[1]}` +
      `<text class="lbl sm capt" x="6" y="${h - 12 - lines.length * 10}" text-anchor="start">Step ${i + 1} of ${steps.length}${st[2] ? ' · ' + st[2] : ''}</text>` +
      lines.map((l, k) => `<text class="lbl xs capt" x="6" y="${h - 2 - (lines.length - 1 - k) * 10}" text-anchor="start">${l}</text>`).join('') +
      `</g>`;
  });
  const dots = steps.map((st, i) =>
    `<button class="sdot${i === 0 ? ' on' : ''}" data-go="dot" data-i="${i}" aria-label="Go to step ${i + 1}"></button>`).join('');
  const controls = `<div class="anim" data-anim="${key}">` +
    `<button class="btn ghost" data-go="-1">◀ Back</button>` +
    `<button class="btn ghost" data-go="1">Next ▶</button>` +
    `<button class="btn ghost" data-go="replay">↻ Replay step</button>` +
    `<button class="btn ghost" data-go="play">▶ Play all</button>` +
    `<span class="sdots">${dots}</span>` +
    (footer ? `<span class="meta">${footer}</span>` : '') + `</div>`;
  return figure(g, cap, h).replace('</svg>', '</svg>' + controls);
}

/* ---------- Acne lesion cascade (Skin-Pathophys-Students-2026.pdf slide 34) ----
   Each lesion box keeps its data-k from the step it first appears in, so the
   cascade grows one stage at a time. */
const ACNE_CASCADE = (() => {
  const box = (x, y, w, t, k) => `<rect class="box" data-k="b${k}" x="${x}" y="${y}" width="${w}" height="26" rx="6"/>` +
    `<text class="lbl sm" data-k="t${k}" x="${x + w / 2}" y="${y + 17}" text-anchor="middle">${t}</text>`;
  const arr = (d, k) => `<path class="arrow" data-k="a${k}" d="${d}"/>`;
  const why = (x, y, t, k) => `<text class="lbl xs" data-k="w${k}" x="${x}" y="${y}" text-anchor="middle">${t}</text>`;
  const s1 = box(10, 22, 100, 'Normal follicle', 1);
  const s2 = s1 + arr('M112 35 L238 35', 1) + why(175, 30, 'abnormal keratinization', 1) + box(240, 22, 110, 'Microcomedone', 2);
  const s3 = s2 + arr('M295 50 L295 76', 2) + why(312, 66, 'more sebum', 2) + box(240, 78, 110, 'Closed comedone', 3);
  const s4 = s3 + arr('M238 91 L112 91', 3) + why(175, 86, 'opens: dilated pore', 3) + box(10, 78, 100, 'Open comedone', 4);
  const s5 = s4 + arr('M295 106 L295 132', 4) + box(240, 134, 110, 'Papule', 5) +
    arr('M238 147 L112 147', 5) + why(175, 142, 'pus: dilated pore', 5) + box(10, 134, 100, 'Pustule', 6);
  const s6 = s5 + arr('M295 162 L295 188', 6) + why(326, 178, 'foreign body response', 6) + box(240, 190, 110, 'Nodule or cyst', 7);
  return stepper('acne-cascade', 'Cascade of acne lesions', [
    ['A normal follicle: keratinocytes move up and shed, and sebum flows out.', s1],
    ['Abnormal keratinization: cells stick in the follicle and form a microcomedone.', s2],
    ['Increased sebum production turns it into a closed comedone.', s3],
    ['If the closed comedone opens, it becomes an open comedone, seen as a dilated pore.', s4],
    ['If it does not open, a papule forms; white cells and pus make it a pustule.', s5],
    ['A foreign body response to the papule gives a nodule or cyst, which does not drain.', s6],
  ], 262, 'After Skin-Pathophys-Students-2026.pdf slide 34 (DiPiro, Pharmacotherapy 12e); lecture 10/29, T 452–471.');
})();

/* ---------- Nuclear receptor: direct and indirect action (Skin-PCol slides 5–6) -- */
const NR_ACTION = (() => {
  const box = (x, y, w, h, k) => `<rect class="box" data-k="${k}" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>`;
  const lbl = (x, y, t, k, c = 'lbl sm') => `<text class="${c}" data-k="${k}" x="${x}" y="${y}" text-anchor="middle">${t}</text>`;
  const nucleus = box(10, 96, 340, 92, 'nuc') + lbl(180, 182, 'Nucleus (DNA)', 'nucl', 'lbl xs');
  const drug = (x, y) => `<circle class="mark" data-k="drug" cx="${x}" cy="${y}" r="8"/>` + lbl(x, y - 12, 'drug', 'dl', 'lbl xs');
  const rec = (x, y, k) => box(x - 22, y - 10, 44, 20, k) + lbl(x, y + 4, 'receptor', 'l' + k, 'lbl xs');
  const s1 = nucleus + drug(60, 34) + rec(180, 60, 'r1');
  const s2 = nucleus + `<circle class="mark" data-k="drug" cx="168" cy="60" r="8"/>` + rec(180, 60, 'r1') +
    lbl(270, 64, 'drug–receptor complex', 'cx', 'lbl xs');
  const dir = nucleus + box(60, 128, 90, 22, 'gre') + lbl(105, 143, 'GRE', 'grel') +
    `<circle class="mark" data-k="drug" cx="86" cy="116" r="7"/><circle class="mark" data-k="drug2" cx="124" cy="116" r="7"/>` +
    lbl(105, 172, 'two complexes: genes up or down', 'dtxt', 'lbl xs');
  const ind = dir + box(210, 128, 110, 22, 'tf') + lbl(265, 143, 'NF-kB / AP-1', 'tfl') +
    `<circle class="mark" data-k="drug3" cx="265" cy="116" r="7"/>` +
    lbl(265, 172, 'one complex holds the factor off DNA', 'itxt', 'lbl xs');
  return stepper('nr-action', 'Nuclear receptor binders: direct and indirect', [
    ['The drug crosses the cell membrane to reach its receptor inside the cell.', s1],
    ['Drug and receptor form a drug–receptor complex.', s2],
    ['Direct: two complexes bind a response element (glucocorticoid: GRE) and raise anti-inflammatory or lower inflammatory gene expression.', dir],
    ['Indirect: one complex binds a transcription factor (NF-kB, AP-1) so it cannot drive inflammatory genes at the TRE.', ind],
  ], 230, 'After Skin-PCol-Students-2026.pdf slides 5–6; lecture 10/29, T 639–746.');
})();

const DIA = {
  'acne-cascade': ACNE_CASCADE,
  'nr-action': NR_ACTION,
};

const DIAGRAMS = [
  ['Lecture 1: pathophysiology (Smith)', ['acne-cascade']],
  ['Lecture 1: pharmacology (Smith)', ['nr-action']],
];

const DIA_NAMES = {};

/* ==========================================================================
   DIAGRAM_FX_FB: anatomy builders for the lacrimal system, the tear film, the layered
   cornea and the front of the eye (Agent B, Exam 3 diagrams round 2)
   ==========================================================================
   Course file, loaded after diagram_fx.js (course.js `files`). It REPLACES three builders of
   diagram_fx.js (`Anat.lacrimal`, `Anat.tearFilm`, `Anat.cornea`), adds `Anat.eyeFront`, and adds
   `Anat.fbStepper`, the step-through markup with the 11.5-unit caption that diagrams_oo.js and
   diagrams_lg.js write (3 lines of 56 characters at most). It does not edit diagram_fx.js.

   Same rules as diagram_fx.js: every builder returns shapes only (no <svg>, no <defs>, no transform
   attribute, no colours, no gradients, no filters); classes only, so light and dark follow the page;
   stable data-k ids; `hi` adds a halo behind a part, `dim` draws a part at opacity 0.4, `label`
   adds a part's label and leader. Every builder has `.anchor(name, opts)` and `.flows` (paths in
   the builder's own coordinates, mapped with the same x, y, s options).

   Sources (the lecture slides; the drawing is vector, redrawn, no slide pixels):
     lacrimal    Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slide 5 (Goodman & Gilman 14e: orbital and
                 palpebral parts of the lacrimal gland, ducts, superior and inferior puncta, canaliculi,
                 lacrimal sac, nasolacrimal duct, its opening) and Lam_Glaucoma.pdf slide 72 (lacrimal
                 gland, ductus, upper and lower punctum, upper and lower canaliculus, lacrimal sac,
                 nasolacrimal duct, nasal cavity) and slide 73 (the pouch of the lower lid).
     tearFilm    Smith slide 6 (three layers: anterior lipids from the meibomian glands, middle aqueous
                 from the main and accessory lacrimal glands, posterior mucins from goblet cells) and
                 Sikazwe_OOO_mc.pdf slide 29 (lipid layer, aqueous layer, cornea, mucin layer).
     cornea      Sikazwe slide 29 ("Lipid / Water / Lipid sandwich"; less drug entry).
     eyeFront    Sikazwe slide 29 (the eye, cornea) and slide 30 (corneal route, conjunctival and
                 scleral route, aqueous humor).
   ========================================================================== */
const DIAGRAM_FX_FB_CSS = `
.fig .fb-t{fill:var(--text);font-size:11.5px}
.fig .fb-tb{fill:var(--text);font-size:11.5px;font-weight:700}
.fig .fb-ts{fill:var(--text-dim);font-size:11.5px}
.fig .fb-k{fill:var(--accent);font-size:11.5px;font-weight:700}
.fig .fb-w{fill:var(--bad);font-size:11.5px;font-weight:700}
.fig .fb-ok{fill:var(--ok);font-size:11.5px;font-weight:700}
.fig .fb-title{font-size:12.5px}
.fig .lbl.sm.capt.fb-caph{font-size:11.5px;font-weight:700}
.fig .lbl.xs.capt.fb-cap{font-size:11.5px;fill:var(--text)}
.fig .fb-iris{fill:none;stroke:var(--text-dim);stroke-width:4;stroke-linecap:round}
.fig .fb-lash{fill:none;stroke:var(--text-dim);stroke-width:1.3;stroke-linecap:round}
.fig .fb-eyew{fill:var(--paper);stroke:none}
.fig .fb-pupil{fill:var(--text);stroke:none}
.fig .fb-lidc{fill:none;stroke:var(--text-dim);stroke-width:2;stroke-linecap:round}
.fig .fb-pocket{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.4}
.fig .fb-press{fill:none;stroke:var(--accent);stroke-width:2.2}
.fig .fb-blk{fill:none;stroke:var(--bad);stroke-width:3.2;stroke-linecap:round}
.fig .fb-drop{fill:var(--accent);stroke:var(--accent);stroke-width:1}
.fig .fb-bot{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.5}
.fig .fb-bag{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.3}
.fig .fb-drug{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.2}
.fig .fb-cell{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.4}
.fig .fb-rec{fill:none;stroke:var(--accent);stroke-width:2.2;stroke-linecap:round}
.fig .fb-cyt{fill:none;stroke:var(--bad);stroke-width:3.2;stroke-dasharray:.1 7;stroke-linecap:round}
.fig .fb-enz{fill:var(--at-p);fill-opacity:.4;stroke:var(--at-p);stroke-width:1.2}
.fig .fb-nerve{fill:none;stroke:var(--ok);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.fig .fb-air{fill:none;stroke:var(--text-dim);stroke-width:1;stroke-dasharray:3 3}
.fig .fb-arr{fill:none;stroke:var(--text-dim);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.fig .fb-arrh{fill:var(--text-dim)}
`;
if (typeof document !== 'undefined' && document.head && !document.getElementById('diagramFxFbCss')) {
  const s = document.createElement('style'); s.id = 'diagramFxFbCss'; s.textContent = DIAGRAM_FX_FB_CSS; document.head.appendChild(s);
}

(() => {
  if (typeof Anat === 'undefined') return;
  const ell = Anat.ell;
  const has = (arr, id) => !!arr && arr.indexOf(id) >= 0;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const opa = (o, id) => (o.dim && o.dim.indexOf(id) >= 0) ? ' opacity="0.4"' : '';
  const LH = 12.5;
  const label = (f, id, l) => {
    const [lx, ly] = l.at, an = l.anchor || 'start', cls = l.bold ? 'an-tb' : 'an-t';
    let s = l.lines.map((t, i) => `<text class="${cls}" data-k="an-${id}-t${i}" x="${f.X(lx)}" y="${f.Y(ly + i * LH)}" text-anchor="${an}">${esc(t)}</text>`).join('');
    if (l.to) {
      const [fx, fy] = l.from || [lx, ly + (l.lines.length - 1) * LH + 3];
      s += `<path class="an-lead" data-k="an-${id}-l" d="${f.d(`M${fx} ${fy} L${l.to[0]} ${l.to[1]}`)}"/>`;
    }
    return s;
  };
  /* A builder from a table of parts: part {cls, d | lines, halo, skip, lbl:{lines, at, anchor, to, from}}.
     `parts` may be a function of the options. Draw order is `order`; halos come after the shapes, the labels last. */
  const mk = (parts, order, anchors, dflt, flows) => {
    const fn = (o = {}) => {
      o = Object.assign({}, dflt, o);
      const f = Anat.frame(o), P = typeof parts === 'function' ? parts(o) : parts;
      let out = '', halos = '', labs = '';
      order.forEach(id => {
        const p = P[id]; if (!p || p.skip) return;
        if (p.lines) out += p.lines.map((ln, i) => `<path class="${p.cls}" data-k="an-${id}${i}" d="${f.d(ln)}"${opa(o, id)}/>`).join('');
        else out += `<path class="${p.cls}" data-k="an-${id}" d="${f.d(p.d)}"${opa(o, id)}/>`;
        if (has(o.hi, id) && (p.d || p.halo)) halos += `<path class="fx-glow fx-breathe" data-k="an-${id}-hl" d="${f.d(p.halo || p.d)}"/>`;
        if (has(o.label, id) && p.lbl) labs += label(f, id, Object.assign({}, p.lbl, (o.lab || {})[id]));
      });
      return out + halos + labs;
    };
    fn.parts = order.slice();
    fn.flows = flows || {};
    fn.anchor = (name, o = {}) => { o = Object.assign({}, dflt, o); const f = Anat.frame(o), a = anchors[name]; return a ? f.at(a[0], a[1]) : null; };
    fn.frame = o => Anat.frame(Object.assign({}, dflt, o));
    return fn;
  };

  /* =======================================================================
     lacrimal: the lacrimal system, front view of the right eye, the way Smith slide 5 and Lam slide 72
     draw it: lacrimal gland above and outside the eye, its ducts, the eye with its lids, the puncta at
     the inner corner, the canaliculi, the lacrimal sac, the nasolacrimal duct and its opening in the
     nasal cavity. Default origin y = 14 (room for a label above the gland); about 304 x 234 at s = 1.
     opts: pocket (lower lid pulled out into a pouch, Lam slide 73), closed (eyelids closed).
     Parts (an-<id>): nose gland ducts eyew iris pupil lidU lidL lidLp lidC lash pocket can1 can2 pup1 pup2 sac nld
     Flows (unshifted, `Anat.lacrimal.flows`): tear (gland duct onto the eye), drain (upper punctum,
     canaliculus, sac, nasolacrimal duct, to the nasal cavity), stub (punctum to the inner corner only).
     ======================================================================= */
  const LAC = o => ({
    nose: {cls: 'an-bone', d: 'M196 210 C196 194 246 190 272 196 C298 204 300 230 270 234 C236 238 196 228 196 210 Z',
      lbl: {lines: ['Nasal cavity'], at: [262, 222], anchor: 'middle'}},
    gland: {cls: 'an-gland', d: 'M22 34 C30 20 66 18 84 28 C94 36 84 50 64 52 C42 56 18 48 22 34 Z M44 56 C58 54 76 58 84 66 C82 76 62 78 48 72 C40 68 38 60 44 56 Z',
      lbl: {lines: ['Lacrimal gland'], at: [6, 12], to: [38, 24], from: [30, 16]}},
    ducts: {cls: 'an-lid', lines: ['M52 76 L58 94', 'M65 77 L70 90', 'M78 76 L82 86'],
      lbl: {lines: ['Ducts'], at: [2, 90], to: [51, 82], from: [32, 86]}},
    eyew: {cls: 'fb-eyew', d: 'M40 112 C66 78 150 72 186 116 C158 150 72 146 40 112 Z', skip: !!o.closed},
    iris: {cls: 'an-lens', d: ell(116, 112, 21, 21), skip: !!o.closed},
    pupil: {cls: 'fb-pupil', d: ell(116, 112, 8, 8), skip: !!o.closed},
    lidU: {cls: 'an-lid', d: 'M40 112 C66 78 150 72 186 116', skip: !!o.closed},
    lidL: {cls: 'an-lid', d: 'M40 112 C72 146 158 150 186 116', skip: !!o.closed || !!o.pocket},
    pocket: {cls: 'fb-pocket', d: 'M48 122 C74 172 160 176 184 122 C158 150 74 146 48 122 Z', skip: !o.pocket,
      lbl: {lines: ['pocket'], at: [116, 184], anchor: 'middle'}},
    lidLp: {cls: 'an-lid', d: 'M40 112 C58 112 52 118 48 122 C74 172 160 176 184 122 C186 120 186 118 186 116', skip: !o.pocket},
    lidC: {cls: 'fb-lidc', d: 'M40 112 C80 124 150 128 186 116', skip: !o.closed},
    lash: {cls: 'fb-lash', skip: !o.closed, lines: [0.1, 0.2, 0.32, 0.44, 0.56, 0.68, 0.8].map(t => {
      const u = 1 - t, x = u * u * u * 40 + 3 * u * u * t * 80 + 3 * u * t * t * 150 + t * t * t * 186, y = u * u * u * 112 + 3 * u * u * t * 124 + 3 * u * t * t * 128 + t * t * t * 116;
      const dx = 3 * u * u * (80 - 40) + 6 * u * t * (150 - 80) + 3 * t * t * (186 - 150), dy = 3 * u * u * (124 - 112) + 6 * u * t * (128 - 124) + 3 * t * t * (116 - 128), n = Math.hypot(dx, dy);
      const nx = -dy / n, ny = dx / n, q = v => Math.round(v * 10) / 10;
      return `M${q(x)} ${q(y)} L${q(x + nx * 7)} ${q(y + ny * 7)}`;
    })},
    can1: {cls: 'an-tube', d: 'M174 104 C186 94 206 94 220 102',
      lbl: {lines: ['Canaliculi'], at: [190, 66], to: [200, 94], from: [206, 70]}},
    can2: {cls: 'an-tube', d: 'M176 125 C190 134 208 134 220 124'},
    pup1: {cls: 'an-proc', d: ell(174, 104, 3.6, 3.6),
      lbl: {lines: ['Upper punctum'], at: [128, 48], to: [172, 101], from: [160, 52]}},
    pup2: {cls: 'an-proc', d: ell(176, 125, 3.6, 3.6),
      lbl: {lines: ['Lower punctum'], at: [132, 168], to: [175, 129], from: [160, 156]}},
    sac: {cls: 'an-duct', d: 'M215 98 C215 88 237 88 237 98 L238 132 C237 142 215 142 214 132 Z',
      lbl: {lines: ['Lacrimal sac'], at: [248, 88], to: [238, 100], from: [247, 86]}},
    nld: {cls: 'an-duct', d: 'M220 138 C221 160 223 182 226 204 L236 204 C235 182 233 160 232 138 Z',
      lbl: {lines: ['Nasolacrimal', 'duct'], at: [246, 156], to: [234, 166], from: [245, 158]}},
  });
  const LAC_ORDER = ['nose', 'gland', 'ducts', 'eyew', 'iris', 'pupil', 'lidU', 'lidL', 'lidLp', 'lidC', 'lash', 'pocket', 'can1', 'can2', 'pup1', 'pup2', 'sac', 'nld'];
  Anat.lacrimal = mk(LAC, LAC_ORDER, {gland: [54, 36], ducts: [66, 84], eye: [116, 112], iris: [116, 112], pup1: [174, 104], pup2: [176, 125],
    sac: [226, 114], nld: [227, 176], nose: [248, 212], medial: [188, 116], pouch: [116, 160], dropEnd: [227, 202]}, {y: 14}, {
    tear: 'M68 94 C76 104 84 110 94 116',
    drain: 'M174 104 C186 94 206 94 220 102 L226 112 L227 136 L228 200',
    stub: 'M174 104 C183 97 194 95 202 97',
  });

  /* =======================================================================
     tearFilm: the three layers of the tears on the cornea, a section with the air side at the top
     (Smith slide 6: lipids from the meibomian glands, aqueous from the lacrimal glands, mucins from
     goblet cells; Sikazwe slide 29: lipid layer, aqueous layer, cornea, mucin layer). Bars 86 wide at
     x 0-86, labels to the right of them; bottom anchored at y = 80 (cornea 62-80).
     opts.thin: the aqueous layer drawn thin (low production) instead of thick; the aqueous bar has a
     different key per state, so the two cross-fade, and the lipid layer above it glides.
     ======================================================================= */
  const TEARP = o => {
    const aq = o.thin ? 13 : 30, top = 49 - aq, lipTop = top - 13;      // mucin 49-62; aqueous above it; lipid above that
    const p = {
      cornea: {cls: 'an-cornea', d: 'M0 62 L86 62 L86 80 L0 80 Z', lbl: {lines: ['Cornea'], at: [94, 75]}},
      mucin: {cls: 'an-mucin', d: 'M0 49 L86 49 L86 62 L0 62 Z', lbl: {lines: ['Mucin layer'], at: [94, 59]}},
      lipid: {cls: 'an-lipid', d: `M0 ${lipTop} L86 ${lipTop} L86 ${top} L0 ${top} Z`, lbl: {lines: ['Lipid layer'], at: [94, lipTop + 10]}},
    };
    p[o.thin ? 'wthin' : 'wthick'] = {cls: 'an-water', d: `M0 ${top} L86 ${top} L86 49 L0 49 Z`, lbl: {lines: ['Aqueous layer'], at: [94, top + aq / 2 + 4]}};
    return p;
  };
  Anat.tearFilm = mk(TEARP, ['cornea', 'mucin', 'wthick', 'wthin', 'lipid'], {lipid: [43, 30], water: [43, 42], mucin: [43, 56], cornea: [43, 71]}, {});

  /* =======================================================================
     cornea: the cornea drawn as the lipid / water / lipid sandwich of Sikazwe slide 29, a block 130
     wide (x 0-130), the tear on top. Bands 18, 26, 18 tall; each carries its word inside (Lipid,
     Water, Lipid). Part `top` is the "Cornea" heading above the block.
     Parts: l1 w l2 top.
     ======================================================================= */
  const CORP = () => ({
    l1: {cls: 'an-lipid', d: 'M0 18 L130 18 L130 36 L0 36 Z', lbl: {lines: ['Lipid'], at: [65, 31], anchor: 'middle'}},
    w: {cls: 'an-water', d: 'M0 36 L130 36 L130 62 L0 62 Z', lbl: {lines: ['Water'], at: [65, 53], anchor: 'middle'}},
    l2: {cls: 'an-lipid', d: 'M0 62 L130 62 L130 80 L0 80 Z', lbl: {lines: ['Lipid'], at: [65, 75], anchor: 'middle'}},
    top: {cls: 'an-cornea', d: 'M0 18 L130 18', lbl: {lines: ['Cornea'], at: [65, 10], anchor: 'middle', bold: true}},
  });
  Anat.cornea = mk(CORP, ['l1', 'w', 'l2', 'top'], {l1: [65, 27], w: [65, 49], l2: [65, 71], top: [65, 18], bottom: [65, 80]}, {});

  /* =======================================================================
     eyeFront: the front of the eye cut through the middle, front up, after Sikazwe slide 29 (eye with
     cornea) and slide 30 (corneal route, conjunctival and scleral route, aqueous humor): the cornea
     dome, the aqueous humor under it, the sclera and the conjunctiva on each side. About 190 x 130 at
     s = 1 (x 0-190, y 52-182); the dome's top is at the middle.
     Parts: ah lens iris sclera cornea conj (an-<id>). The lens and the iris are drawn grey and unlabelled (the slides name neither).
     Anchors: corneaTop, corneaMid, conjL, conjR, scleraL, ah.
     ======================================================================= */
  const EF = () => ({
    ah: {cls: 'an-fluid', d: 'M52 104 Q95 68 138 104 C152 118 160 130 162 140 L28 140 C30 130 38 118 52 104 Z',
      lbl: {lines: ['Aqueous', 'humor'], at: [112, 116], anchor: 'middle'}},
    lens: {cls: 'an-lens', d: Anat.ell(95, 160, 34, 20)},
    iris: {cls: 'fb-iris', lines: ['M28 141 L66 141', 'M124 141 L162 141']},
    sclera: {cls: 'an-sclera', lines: ['M42 100 C26 112 14 140 12 182 L24 182 C26 148 36 122 52 104 Z', 'M148 100 C164 112 176 140 178 182 L166 182 C164 148 154 122 138 104 Z'],
      lbl: {lines: ['Sclera'], at: [2, 196], to: [17, 176], from: [14, 186]}},
    cornea: {cls: 'an-cornea', d: 'M42 100 Q95 52 148 100 L138 104 Q95 68 52 104 Z',
      lbl: {lines: ['Cornea'], at: [95, 64], anchor: 'middle', bold: true}},
    conj: {cls: 'an-conj', lines: ['M38 96 C22 110 8 140 5 182', 'M152 96 C168 110 182 140 185 182'],
      lbl: {lines: ['Conjunctiva'], at: [166, 86], to: [160, 102], from: [172, 90]}},
  });
  Anat.eyeFront = mk(EF, ['ah', 'lens', 'iris', 'sclera', 'cornea', 'conj'], {corneaTop: [95, 76], conjL: [14, 130], conjR: [176, 130], scleraL: [17, 170], ah: [95, 120], corneaL: [60, 90], corneaR: [130, 90], bottom: [95, 182]}, {});

  /* the step-through markup: the structure stepper() writes with an 11.5-unit caption (wrapped at 56
     characters, three lines at most), as diagrams_oo.js and diagrams_lg.js do; the title is drawn at y = 13 */
  const W = 360, CAP_W = 56, CAP_DY = 13;
  const wrap = t => {
    const out = []; let cur = '';
    String(t).split(' ').forEach(w => { if ((cur + ' ' + w).trim().length > CAP_W) { out.push(cur.trim()); cur = w; } else cur += ' ' + w; });
    out.push(cur.trim());
    return out.filter(Boolean);
  };
  Anat.fbStepper = (key, title, steps, h, cap) => {
    let g = `<text class="title fb-title" x="${W / 2}" y="13" text-anchor="middle">${esc(title)}</text>`;
    steps.forEach((st, i) => {
      const lines = wrap(st[0]);
      if (lines.length > 3) lines.length = 3;          // diagrams_fb_check.js fails a caption over three lines
      g += `<g class="st${i === 0 ? ' on' : ''}" data-step="${i + 1}">${st[1]}` +
        `<text class="lbl sm capt fb-caph" x="6" y="${h - 5 - lines.length * CAP_DY}" text-anchor="start">Step ${i + 1} of ${steps.length}</text>` +
        lines.map((l, k) => `<text class="lbl xs capt fb-cap" x="6" y="${h - 5 - (lines.length - 1 - k) * CAP_DY}" text-anchor="start">${esc(l)}</text>`).join('') +
        `</g>`;
    });
    const dots = steps.map((st, i) => `<button class="sdot${i === 0 ? ' on' : ''}" data-go="dot" data-i="${i}" aria-label="Go to step ${i + 1}"></button>`).join('');
    const controls = `<div class="anim" data-anim="${key}">` +
      `<button class="btn ghost" data-go="-1">◀ Back</button><button class="btn ghost" data-go="1">Next ▶</button>` +
      `<button class="btn ghost" data-go="replay">↻ Replay step</button><button class="btn ghost" data-go="play">▶ Play all</button>` +
      `<span class="sdots">${dots}</span></div>`;
    return figure(g, cap, h).replace('</svg>', '</svg>' + controls);
  };
  Anat.fbWrap = wrap;
})();

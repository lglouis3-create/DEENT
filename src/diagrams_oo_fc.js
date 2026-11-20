/* ==========================================================================
   DIAGRAMS_OO_FC: oo-cerumen and oo-fluoride redrawn on the anatomical visual system
   ==========================================================================
   Course file, loaded after diagrams_oo.js, diagram_fx.js and diagram_fx_fc.js (course.js `files`). It
   re-assigns DIA['oo-cerumen'] and DIA['oo-fluoride'] (same keys, same names, same Purpose lines, same
   number of steps, the same step captions and the same figcaptions as diagrams_oo.js, so every fact,
   number and citation is unchanged); the group in DIAGRAMS already lists both keys.

   Pictures: Anat.ear after Sikazwe_OOO_mc.pdf slide 5 (ear drum, Eustachian tube, ear wax, ear canal;
   the outer ear, middle ear and cochlea are drawn neutral and unlabelled) and Anat.tooth after slides
   16-18 (plaque and gums, enamel, the hydroxyapatite lattice and fluoride replacing the OH groups).
   Chemistry (slide 8 scheme, slide 17 formulas, slide 18 limit) stays as text lines under the picture.
   Step markup as diagrams_oo.js writes it (11.5-unit caption wrapped at 50 characters, at most three
   lines). STEPPERS.md rules: the same part keeps one data-k in every step, data-k values are unique in
   a step, opacity only as an attribute, no transform attribute, colours only as classes.
   ========================================================================== */
(() => {
  if (typeof DIA === 'undefined' || typeof figure !== 'function' || typeof Anat === 'undefined' || !Anat.tooth.zoomR) return;
  const W = 360;
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const T = (x, y, s, k, c = 'oo-t', a = 'start') =>
    `<text class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" text-anchor="${a}">${esc(s)}</text>`;
  const A = (d, k, c = 'arrow') => `<path class="${c}" data-k="${k}" d="${d}"/>`;
  const R = (x, y, w, h, k, c = 'box', rx = 6) =>
    `<rect class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${rx}"/>`;
  const Ls = (x, y, arr, k, c = 'oo-t', a = 'start', dy = 14) => arr.map((s, i) => T(x, y + i * dy, s, k + i, c, a)).join('');

  const CAP_W = 50, CAP_DY = 13;
  const wrap = t => {
    const out = []; let cur = '';
    String(t).split(' ').forEach(w => {
      if ((cur + ' ' + w).trim().length > CAP_W) { out.push(cur.trim()); cur = w; } else cur += ' ' + w;
    });
    out.push(cur.trim());
    return out.filter(Boolean);
  };
  function fcStepper(key, title, steps, h, cap) {
    let g = `<text class="title oo-title" x="${W / 2}" y="13" text-anchor="middle">${esc(title)}</text>`;
    steps.forEach((st, i) => {
      const lines = wrap(st[0]);
      if (lines.length > 3) lines.length = 3;
      g += `<g class="st${i === 0 ? ' on' : ''}" data-step="${i + 1}">${st[1]}` +
        `<text class="lbl sm capt oo-caph" x="6" y="${h - 5 - lines.length * CAP_DY}" text-anchor="start">Step ${i + 1} of ${steps.length}</text>` +
        lines.map((l, k) => `<text class="lbl xs capt oo-cap" x="6" y="${h - 5 - (lines.length - 1 - k) * CAP_DY}" text-anchor="start">${esc(l)}</text>`).join('') +
        `</g>`;
    });
    const dots = steps.map((st, i) =>
      `<button class="sdot${i === 0 ? ' on' : ''}" data-go="dot" data-i="${i}" aria-label="Go to step ${i + 1}"></button>`).join('');
    const controls = `<div class="anim" data-anim="${key}">` +
      `<button class="btn ghost" data-go="-1">◀ Back</button>` +
      `<button class="btn ghost" data-go="1">Next ▶</button>` +
      `<button class="btn ghost" data-go="replay">↻ Replay step</button>` +
      `<button class="btn ghost" data-go="play">▶ Play all</button>` +
      `<span class="sdots">${dots}</span></div>`;
    return figure(g, cap, h).replace('</svg>', '</svg>' + controls);
  }

  /* ---------------------------------------------------------------------
     oo-cerumen: carbamide peroxide (Debrox) in the ear
     Sources as diagrams_oo.js: slide 8 (scheme: carbamide peroxide, dissociation, urea + H2O2,
     catalase, O2; "Effervescence breaks up ear wax"), slide 6 (Debrox: non-water, non-oil based),
     slide 5 (the ear drawing); 11/18 T@7762-@9600.
     --------------------------------------------------------------------- */
  const CERUMEN = (() => {
    const h = 356;
    const E = {x: 22, y: 34, s: 0.9};
    const DIM = ['bone', 'pinna', 'concha', 'fold', 'mid', 'coch'];
    const ear = (o = {}) => Anat.ear(Object.assign({}, E, {dim: DIM}, o));
    const Y = 226;                                      // top of the chemistry strip

    /* step 1: the complex, and the wax it will meet */
    const s1 = ear({wax: 'whole', label: ['drum', 'wax', 'canal', 'eust']}) +
      R(10, Y, 222, 66, 'cpb', 'oo-act') +
      T(20, Y + 18, 'Carbamide peroxide (Debrox)', 'cp1', 'oo-tb') +
      T(20, Y + 34, '1:1 urea · H₂O₂ complex', 'cp2') +
      T(20, Y + 50, 'in glycerol or propylene glycol', 'cp3', 'oo-ts') +
      T(242, Y + 18, 'urea stabilizes', 'st1', 'oo-ts') + T(242, Y + 32, 'the H₂O₂', 'st2', 'oo-ts');

    /* step 2: applied in the ear, the complex slowly dissociates */
    const cpS = R(10, Y, 132, 30, 'cpb', 'box') + T(76, Y + 19, 'Carbamide peroxide', 'cp1', 'oo-tb', 'middle');
    const s2 = ear({wax: 'whole', label: ['drum', 'wax', 'canal', 'eust']}) +
      Anat.flow('M244 88 L222 88', 'f-in', Object.assign({}, E, {hs: 0.8})) +
      Anat.lead(226, -5, 230, 82, 'dbx-l', E) + Anat.text(226, -8, 'Debrox', 'dbx-t', Object.assign({}, E, {anchor: 'middle'})) +
      cpS + Anat.flow(`M146 ${Y + 15} L172 ${Y + 15}`, 'f-dis', {lane: false, hs: 0.8}) +
      R(178, Y, 62, 30, 'ub') + T(209, Y + 19, 'Urea', 'ut', 'oo-t', 'middle') +
      R(250, Y, 76, 30, 'hb', 'oo-act') + T(288, Y + 19, 'H₂O₂', 'ht', 'oo-tb', 'middle') +
      T(159, Y + 52, 'slowly dissociates', 'dl', 'oo-k', 'middle') + T(288, Y + 52, 'the active ingredient', 'hact', 'oo-ts', 'middle');

    /* step 3: catalase in the cerumen breaks H2O2 down */
    const s3 = ear({wax: 'whole', hi: ['wax'], label: ['drum', 'wax', 'canal', 'eust']}) +
      Anat.pulse(180, 87, 38, 'pl', Object.assign({}, E, {ry: 26})) +
      R(10, Y, 76, 30, 'hb', 'oo-act') + T(48, Y + 19, 'H₂O₂', 'ht', 'oo-tb', 'middle') +
      A(`M92 ${Y + 15} L170 ${Y + 15}`, 'a3') + T(131, Y + 10, 'catalase', 'ct1', 'oo-k', 'middle') + T(131, Y + 31, '(in cerumen)', 'ct2', 'oo-ts', 'middle') +
      R(176, Y, 108, 30, 'pb') + T(230, Y + 19, 'O₂ + water', 'pt', 'oo-tb', 'middle') +
      T(230, Y + 52, 'a rapid reaction', 'fast', 'oo-ts', 'middle');

    /* step 4: the bubbles break up the wax */
    const s4 = ear({wax: 'broken', bubbles: true, label: ['drum', 'canal', 'eust']}) +
      `<path class="fc-bub" data-k="lg1" d="M22 ${Y + 12} m-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0"/>` +
      T(36, Y + 16, 'O₂ bubbles', 'bt', 'oo-t') +
      `<path class="an-wax" data-k="lg2" d="M18 ${Y + 38} L32 ${Y + 38} L32 ${Y + 52} L18 ${Y + 52} Z"/>` +
      T(40, Y + 50, 'wax broken up', 'bk', 'oo-tb');

    return fcStepper('oo-cerumen', 'Carbamide peroxide in the ear', [
      ['Carbamide peroxide is a 1:1 complex of urea and H₂O₂; the urea stabilizes the H₂O₂ (slide 8; T@7762, T@9225).', s1],
      ['Applied in the ear, the complex slowly dissociates to urea and H₂O₂, the active ingredient (slide 8; T@8076).', s2],
      ['Catalase, present in cerumen, rapidly breaks H₂O₂ down to oxygen and water (slide 8; T@8295).', s3],
      ['The O₂ bubbles (effervescence) break up the ear wax: a chemical change gives a mechanical effect (slide 8; T@8777).', s4],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slide 8 (scheme: carbamide peroxide, dissociation, urea + H₂O₂, catalase, O₂) and slide 6 (Debrox among the ' +
      'non-water, non-oil based cerumenolytics); Dr. Sikazwe, lecture 11/18, T@7762–@9600 (glycerol or propylene glycol; catalase in cerumen; urea ' +
      'stabilizes the H₂O₂, which on its own effervesces at once). The ear is drawn after slide 5 (ear drum, Eustachian tube, ear wax, ear canal).');
  })();

  /* ---------------------------------------------------------------------
     oo-fluoride: hydroxyapatite to fluorapatite
     Sources as diagrams_oo.js: slide 16 (plaque, sugars to acids, acid drinks), slide 17
     (hydroxyapatite Ca10(PO4)6(OH)2; fluoride ions convert it into fluorapatite Ca10(PO4)6F2, more
     resistant to acid erosion; NaF, SnF2, Na2PO3F), slide 18 (mineralization; >2 mg/L, fluorosis);
     11/18 T@16816-@22054.
     --------------------------------------------------------------------- */
  const FLUORIDE = (() => {
    const h = 344;
    const E = {x: 60, y: 24, s: 0.92};
    const tooth = (o = {}) => Anat.tooth(Object.assign({}, E, o));
    const Y = 214;
    const zc = Anat.tooth.anchor('zoom', E), zb = Anat.tooth.anchor('zoomBottom', E);
    const zlab = (txt, k) => T(zc[0], zb[1] + 15, txt, k, 'oo-tb', 'middle');

    /* step 1 */
    const s1 = tooth({label: ['enamel', 'gum'], hi: ['enamel']}) + zlab('Hydroxyapatite', 'zl') +
      T(10, Y + 14, 'Enamel: hydroxyapatite', 'en1', 'oo-tb') +
      T(10, Y + 38, 'Ca₁₀(PO₄)₆(OH)₂', 'en2', 'oo-f') +
      T(10, Y + 60, 'vulnerable to acid erosion', 'vu', 'oo-w');

    /* step 2 */
    const s2 = tooth({label: ['enamel', 'plaque'], plaque: true, hi: ['plaque']}) + zlab('Hydroxyapatite', 'zl') +
      Anat.flow('M-48 62 C-34 62 -14 64 8 72', 'f-ac', Object.assign({}, E, {hs: 0.85})) + Anat.text(-52, 50, 'Acids', 'ac-t', Object.assign({}, E, {cls: 'oo-k'})) +
      R(10, Y, 150, 64, 'ac') + Ls(18, Y + 16, ['Bacteria convert', 'sugars into acids', '(lactic, propionic);', 'acid drinks'], 'ac') +
      T(172, Y + 16, 'saliva pH falls', 'lo', 'oo-w') +
      T(172, Y + 36, 'enamel erodes → cavities', 'er', 'oo-w') +
      T(172, Y + 56, 'enamel: hydroxyapatite', 'en1', 'oo-ts');

    /* step 3 */
    const s3 = tooth({label: ['enamel'], fluoride: true, hi: ['zoom']}) + zlab('Fluorapatite', 'zl') +
      Anat.flow('M-48 62 C-34 62 -14 64 8 72', 'f-fl', Object.assign({}, E, {hs: 0.85})) + Anat.text(-52, 50, 'F⁻', 'fl-t', Object.assign({}, E, {cls: 'oo-k'})) +
      R(10, Y, 150, 62, 'fs', 'oo-act') + Ls(18, Y + 16, ['F⁻ from NaF,', 'SnF₂, Na₂PO₃F'], 'fs') + T(18, Y + 48, 'toothpaste or gel', 'fsg', 'oo-ts') +
      T(172, Y + 14, 'F⁻ replaces the OH groups', 'rep', 'oo-k') +
      T(172, Y + 32, 'Fluorapatite', 'fa1', 'oo-tb') + T(172, Y + 50, 'Ca₁₀(PO₄)₆F₂', 'fa2', 'oo-f') +
      T(172, Y + 68, 'more resistant to acid erosion', 'rs', 'oo-ok');

    /* step 4 */
    const s4 = tooth({label: ['enamel'], fluoride: true, hi: ['enamel']}) + zlab('Fluorapatite', 'zl') +
      Anat.flow('M-48 40 C-34 42 -14 52 8 64', 'f-ca', Object.assign({}, E, {hs: 0.85, drift: true})) +
      Anat.text(-54, 22, 'Ca²⁺ and', 'ca-t', Object.assign({}, E, {cls: 'oo-k'})) + Anat.text(-54, 34, 'phosphate', 'ca-t2', Object.assign({}, E, {cls: 'oo-k'})) +
      Ls(10, Y + 14, ['F⁻ also recruits Ca²⁺ and phosphate from saliva', 'onto enamel (mineralization)'], 'mi') +
      T(10, Y + 54, 'Fluoride above 2 mg/L: enamel fluorosis', 'fl', 'oo-w');

    return fcStepper('oo-fluoride', 'Fluoride and tooth enamel', [
      ['Enamel is hydroxyapatite, Ca₁₀(PO₄)₆(OH)₂, which acid can erode (slide 17; T@18815).', s1],
      ['Plaque bacteria turn sugars into acids, and acid drinks add more; saliva pH falls and enamel erodes (slide 16; T@16816).', s2],
      ['Fluoride ions replace the hydroxy groups: fluorapatite, Ca₁₀(PO₄)₆F₂, is more resistant to acid erosion (slide 17; T@19345).', s3],
      ['Fluoride also enhances mineral deposition, but too much (above 2 mg/L) can cause enamel fluorosis (slide 18; T@20715, T@21310).', s4],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slides 16–18 (formulas and the 2 mg/L limit as the slides print them); Dr. Sikazwe, lecture 11/18, ' +
      'T@16816 (lactic and propionic acid), T@18815–@19474 (hydroxy group replaced by fluoride), T@20715 (calcium and phosphate recruited from ' +
      'saliva), T@21310–@22054 (fluorosis: white spots that can turn brown). The tooth and its enlarged lattice are schematic: the slides draw no tooth section.');
  })();

  const PURPOSE = {
    'oo-cerumen': 'Shows how carbamide peroxide releases hydrogen peroxide in the ear and how catalase turns it into oxygen bubbles, so you can explain how Debrox breaks up ear wax.',
    'oo-fluoride': 'Shows enamel’s hydroxyapatite turning into fluorapatite with fluoride, so you can say why fluoride protects against acid erosion and when too much causes fluorosis.'
  };
  const FIGS = {'oo-cerumen': CERUMEN, 'oo-fluoride': FLUORIDE};
  Object.keys(FIGS).forEach(k => {
    const h = FIGS[k], m = h.match(/^<figure class="fig[^"]*">/);
    DIA[k] = (m && h.indexOf('dnpurpose') < 0) ? m[0] + '<p class="dnpurpose"><b>Purpose.</b> ' + esc(PURPOSE[k]) + '</p>' + h.slice(m[0].length) : h;
  });
})();

/* ==========================================================================
   DIAGRAMS_OO: Dr. Sikazwe's otic, oral and ophthalmic medicinal chemistry
   (Exam 3), drawn as step-throughs
   ==========================================================================
   Loaded after figs2.js. Uses `figure` and the step markup of `stepper` from
   diagrams.js and adds six figures to DIA, their names to DIA_NAMES and one
   group to DIAGRAMS (DIAGRAMS.push, as figs2.js does). Keys start `oo-`, so the
   Diagrams tab files the group under Exam 3 (examfold_ui.js).

     oo-cerumen      carbamide peroxide in the ear        slides 6, 8; 11/18 T@7762-@9600
     oo-fluoride     hydroxyapatite to fluorapatite        slides 16-18; 11/18 T@16816-@22054
     oo-eye-entry    cornea and conjunctiva routes         slides 29-30; 11/18 T@43104-@45400
     oo-imidazoline  aryl imidazoline SAR, three drugs     slides 31-32; 11/18 T@46183-@50385
     oo-ache         AChE inhibitors by functional group   slides 41-43, 68 (slides alone)
     oo-pg-prodrug   FP agonist ester prodrugs             slides 29, 44-48 (slides alone)

   Sources: Sikazwe_OOO_mc.pdf (file page numbers) and the 11/18 lecture
   transcript (T@ = character offset in DEENT_Lecture_11.18_transcript.txt).
   The 11/18 lecture reached slide 32; slides 33-68 are drawn from the slides
   alone. Every label, number and claim comes from those places; functional
   groups are named (ester, carbamate, imidazoline), and the slides' and his
   qualifiers ("most", "may", "about") are kept.

   Step markup is the one `stepper` writes (groups .st, dots, controls), built
   here with a larger caption (11.5 units, wrapped at 50 characters) because the
   figures are drawn about 350 px wide on a phone and text under 11 px is hard
   to read there. STEPPERS.md rules: the same thing keeps the same data-k in
   every step; data-k values are unique in a step; opacity only as an attribute;
   no shape has its own transform; colours are course CSS variables or
   currentColor, and every coloured mark has a text label.
   Check: node diagrams_oo_check.js (and stepper_test.js for the motion).
   ========================================================================== */
const DIAGRAMS_OO = (() => {
  if (typeof DIA === 'undefined' || typeof figure !== 'function') return null;
  const W = 360;
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  /* text: x, y, words, key, class, anchor */
  const T = (x, y, s, k, c = 'oo-t', a = 'start') =>
    `<text class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" text-anchor="${a}">${esc(s)}</text>`;
  const L = (p, q, k, c = 'oo-bd') =>
    `<line class="${c}" data-k="${k}" x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(q[0])}" y2="${r1(q[1])}"/>`;
  const A = (d, k, c = 'arrow') => `<path class="${c}" data-k="${k}" d="${d}"/>`;
  const R = (x, y, w, h, k, c = 'box', rx = 6) =>
    `<rect class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${rx}"/>`;
  const C = (x, y, r, k, c = 'oo-bub') => `<circle class="${c}" data-k="${k}" cx="${r1(x)}" cy="${r1(y)}" r="${r}"/>`;
  /* several lines of text, 14 units apart */
  const Ls = (x, y, arr, k, c = 'oo-t', a = 'start', dy = 14) => arr.map((s, i) => T(x, y + i * dy, s, k + i, c, a)).join('');

  /* ---- step markup: the structure stepper() writes, with an 11.5-unit caption ---- */
  const CAP_W = 50, CAP_DY = 13;
  const wrap = t => {
    const out = []; let cur = '';
    String(t).split(' ').forEach(w => {
      if ((cur + ' ' + w).trim().length > CAP_W) { out.push(cur.trim()); cur = w; } else cur += ' ' + w;
    });
    out.push(cur.trim());
    return out.filter(Boolean);
  };
  function ooStepper(key, title, steps, h, cap) {
    let g = `<text class="title oo-title" x="${W / 2}" y="13" text-anchor="middle">${esc(title)}</text>`;
    steps.forEach((st, i) => {
      const lines = wrap(st[0]);
      if (lines.length > 3) lines.length = 3;          // diagrams_oo_check.js fails a caption over three lines
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
     Slide 8 (scheme: carbamide peroxide, dissociation, urea + H2O2, catalase,
     O2; "Effervescence breaks up ear wax"); slide 6 (Debrox: non-water,
     non-oil based); 11/18 T@7762-@9600 (glycerol or propylene glycol; slow
     dissociation; catalase present in cerumen; oxygen and water; urea
     stabilizes H2O2; H2O2 alone effervesces at once).
     --------------------------------------------------------------------- */
  const CERUMEN = (() => {
    const h = 312;
    const cp = R(10, 26, 220, 62, 'cpb') +
      T(20, 44, 'Carbamide peroxide (Debrox)', 'cp1', 'oo-tb') +
      T(20, 60, '1:1 urea · H₂O₂ complex', 'cp2') +
      T(20, 76, 'in glycerol or propylene glycol', 'cp3', 'oo-ts');
    const stab = T(240, 44, 'urea stabilizes', 'st1', 'oo-ts') + T(240, 58, 'the H₂O₂', 'st2', 'oo-ts');
    const wax = R(196, 210, 150, 30, 'wax', 'oo-wax') + T(271, 230, 'cerumen (ear wax)', 'waxt', 'oo-t', 'middle');
    const s1 = cp + stab + wax;

    const diss = A('M50 90 L50 116', 'a1') + A('M145 90 L145 116', 'a2') + T(156, 107, 'slowly dissociates', 'dl', 'oo-k', 'start');
    const urea = R(10, 118, 80, 30, 'ub') + T(50, 138, 'Urea', 'ut', 'oo-t', 'middle');
    const hp = R(100, 118, 90, 30, 'hb', 'oo-act') + T(145, 138, 'H₂O₂', 'ht', 'oo-tb', 'middle');
    const act = T(145, 164, 'the active ingredient', 'hact', 'oo-ts', 'middle');
    const s2 = cp + wax + diss + urea + hp + act;

    const cat = A('M192 133 L248 133', 'a3') + T(222, 98, 'catalase', 'ct1', 'oo-k', 'middle') + T(222, 112, '(in cerumen)', 'ct2', 'oo-ts', 'middle');
    const prod = R(252, 118, 98, 30, 'pb') + T(301, 138, 'O₂ + water', 'pt', 'oo-tb', 'middle');
    const fast = T(301, 164, 'a rapid reaction', 'fast', 'oo-ts', 'middle');
    const s3 = cp + wax + urea + hp + act + cat + prod + fast;

    const bubbles = C(276, 190, 4, 'bu1') + C(292, 182, 5, 'bu2') + C(310, 192, 4, 'bu3') + C(326, 184, 5, 'bu4') + C(300, 202, 3, 'bu5') +
      T(186, 194, 'O₂ bubbles', 'bt', 'oo-t', 'end');
    const broken = R(196, 214, 44, 24, 'wx1', 'oo-wax') + R(250, 220, 40, 22, 'wx2', 'oo-wax') + R(300, 212, 46, 26, 'wx3', 'oo-wax') +
      T(186, 232, 'wax broken up', 'bk', 'oo-tb', 'end');
    const s4 = cp + urea + hp + act + cat + prod + bubbles + broken;

    return ooStepper('oo-cerumen', 'Carbamide peroxide in the ear', [
      ['Carbamide peroxide is a 1:1 complex of urea and H₂O₂; the urea stabilizes the H₂O₂ (slide 8; T@7762, T@9225).', s1],
      ['Applied in the ear, the complex slowly dissociates to urea and H₂O₂, the active ingredient (slide 8; T@8076).', s2],
      ['Catalase, present in cerumen, rapidly breaks H₂O₂ down to oxygen and water (slide 8; T@8295).', s3],
      ['The O₂ bubbles (effervescence) break up the ear wax: a chemical change gives a mechanical effect (slide 8; T@8777).', s4],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slide 8 (scheme: carbamide peroxide, dissociation, urea + H₂O₂, catalase, O₂) and slide 6 (Debrox among the ' +
      'non-water, non-oil based cerumenolytics); Dr. Sikazwe, lecture 11/18, T@7762–@9600 (glycerol or propylene glycol; catalase in cerumen; urea ' +
      'stabilizes the H₂O₂, which on its own effervesces at once).');
  })();

  /* ---------------------------------------------------------------------
     oo-fluoride: hydroxyapatite to fluorapatite
     Slide 16 (causes: plaque bacteria convert sugars into acids; acid
     drinks); slide 17 (hydroxyapatite Ca10(PO4)6(OH)2 vulnerable to acid
     erosion; fluoride ions convert it into fluorapatite Ca10(PO4)6F2, more
     resistant to acid erosion; NaF, SnF2, Na2PO3F); slide 18 (mineralization;
     >2 mg/L fluoride can cause enamel fluorosis); 11/18 T@16816 (lactic and
     propionic acid), T@18815-@22054.
     --------------------------------------------------------------------- */
  const FLUORIDE = (() => {
    const h = 340;
    const enamel = R(150, 30, 200, 56, 'en') +
      T(250, 48, 'Enamel: hydroxyapatite', 'en1', 'oo-tb', 'middle') +
      T(250, 70, 'Ca₁₀(PO₄)₆(OH)₂', 'en2', 'oo-f', 'middle');
    const vuln = T(250, 102, 'vulnerable to acid erosion', 'vu', 'oo-w', 'middle');
    const s1 = enamel + vuln;

    const acid = R(10, 30, 128, 86, 'ac') + Ls(18, 48, ['Bacteria convert', 'sugars into acids', '(lactic, propionic);', 'acid drinks'], 'ac', 'oo-t');
    const hit = A('M140 64 L148 64', 'a1');
    const low = T(74, 132, 'saliva pH falls', 'lo', 'oo-w', 'middle');
    const ero = T(250, 118, 'enamel erodes → cavities', 'er', 'oo-w', 'middle');
    const s2 = enamel + vuln + acid + hit + low + ero;

    const src = R(10, 150, 128, 58, 'fs', 'oo-act') + Ls(18, 168, ['F⁻ from NaF,', 'SnF₂, Na₂PO₃F'], 'fs', 'oo-t') +
      T(18, 198, 'toothpaste or gel', 'fsg', 'oo-ts');
    const conv = A('M140 179 L148 179', 'a2') + T(250, 140, 'F⁻ replaces the OH groups', 'rep', 'oo-k', 'middle');
    const fa = R(150, 150, 200, 58, 'fa', 'oo-act') +
      T(250, 168, 'Fluorapatite', 'fa1', 'oo-tb', 'middle') + T(250, 190, 'Ca₁₀(PO₄)₆F₂', 'fa2', 'oo-f', 'middle');
    const res = T(250, 224, 'more resistant to acid erosion', 'rs', 'oo-ok', 'middle');
    const s3 = enamel + vuln + acid + hit + low + src + conv + fa + res;

    const mine = Ls(10, 246, ['F⁻ also recruits Ca²⁺ and phosphate from saliva', 'onto enamel (mineralization)'], 'mi', 'oo-t');
    const flu = T(10, 278, 'Fluoride above 2 mg/L: enamel fluorosis', 'fl', 'oo-w', 'start');
    const s4 = enamel + vuln + src + conv + fa + res + mine + flu;

    return ooStepper('oo-fluoride', 'Fluoride and tooth enamel', [
      ['Enamel is hydroxyapatite, Ca₁₀(PO₄)₆(OH)₂, which acid can erode (slide 17; T@18815).', s1],
      ['Plaque bacteria turn sugars into acids, and acid drinks add more; saliva pH falls and enamel erodes (slide 16; T@16816).', s2],
      ['Fluoride ions replace the hydroxy groups: fluorapatite, Ca₁₀(PO₄)₆F₂, is more resistant to acid erosion (slide 17; T@19345).', s3],
      ['Fluoride also enhances mineral deposition, but too much (above 2 mg/L) can cause enamel fluorosis (slide 18; T@20715, T@21310).', s4],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slides 16–18 (formulas and the 2 mg/L limit as the slides print them); Dr. Sikazwe, lecture 11/18, ' +
      'T@16816 (lactic and propionic acid), T@18815–@19474 (hydroxy group replaced by fluoride), T@20715 (calcium and phosphate recruited from ' +
      'saliva), T@21310–@22054 (fluorosis: white spots that can turn brown).');
  })();

  /* ---------------------------------------------------------------------
     oo-eye-entry: how a drop gets into the eye
     Slide 29 (cornea: lipid/water/lipid sandwich, less drug entry;
     conjunctiva: influx and efflux transporters, esterase/CYP enzymes, more
     drug entry); slide 30 (flow: topical drug in tear; ocular absorption
     <10% of the dose; corneal route primary, small lipophilic drugs;
     conjunctival and scleral route, large hydrophilic drugs; aqueous humor;
     ocular bioavailability; systemic absorption >50%, major routes
     conjunctiva of eyes and nose); 11/18 T@43104-@45400.
     --------------------------------------------------------------------- */
  const ENTRY = (() => {
    const h = 350;
    const tear = `<ellipse class="box" data-k="tear" cx="180" cy="38" rx="96" ry="16"/>` + T(180, 42, 'Topical drug in tear', 'teart', 'oo-tb', 'middle');
    const oc = A('M140 56 L110 76', 'a1') + T(100, 90, 'Ocular absorption', 'oc1', 'oo-t', 'middle') + T(100, 104, 'under 10% of the dose', 'oc2', 'oo-w', 'middle');
    const sy = A('M220 56 L250 76', 'a2') + T(268, 90, 'Systemic absorption', 'sy1', 'oo-t', 'middle') + T(268, 104, 'over 50% of the dose', 'sy2', 'oo-w', 'middle') +
      T(268, 118, 'mainly conjunctiva, nose', 'sy3', 'oo-ts', 'middle');
    const s1 = tear + oc + sy;

    const ocS = tear + A('M140 56 L110 76', 'a1') + T(100, 90, 'Ocular absorption', 'oc1', 'oo-t', 'middle') + T(100, 104, 'under 10% of the dose', 'oc2', 'oo-w', 'middle');
    const cor = A('M60 110 L60 132', 'a3') + R(10, 134, 160, 106, 'corb', 'oo-lip') +
      T(90, 151, 'Cornea', 'cor1', 'oo-tb', 'middle') +
      R(24, 158, 132, 9, 'ly1', 'oo-lyl') + R(24, 167, 132, 9, 'ly2', 'oo-lyw') + R(24, 176, 132, 9, 'ly3', 'oo-lyl') +
      T(90, 199, 'lipid / water / lipid', 'cor2', 'oo-t', 'middle') +
      T(90, 214, 'less drug entry', 'cor3', 'oo-w', 'middle') +
      T(90, 230, 'small, lipophilic drugs', 'cor4', 'oo-tb', 'middle');
    const s2 = ocS + cor;

    const con = A('M140 110 L270 132', 'a4') + R(190, 134, 160, 106, 'conb', 'oo-hyd') +
      T(270, 151, 'Conjunctiva', 'con1', 'oo-tb', 'middle') +
      T(270, 168, 'influx and efflux', 'con2', 'oo-t', 'middle') + T(270, 182, 'transporters;', 'con3', 'oo-t', 'middle') +
      T(270, 199, 'esterase, CYP enzymes', 'con4', 'oo-t', 'middle') +
      T(270, 214, 'more drug entry', 'con5', 'oo-ok', 'middle') +
      T(270, 230, 'large, hydrophilic drugs', 'con6', 'oo-tb', 'middle');
    const s3 = ocS + cor + con;

    const aq = A('M90 242 L160 256', 'a5') + A('M270 242 L200 256', 'a6') + R(110, 258, 140, 26, 'aqb') + T(180, 276, 'Ocular bioavailability', 'aqt', 'oo-tb', 'middle');
    const s4 = ocS + cor + con + aq;

    return ooStepper('oo-eye-entry', 'How an eye drop gets into the eye', [
      ['Of a drop in the tear film, under 10% of the dose is absorbed into the eye and over 50% systemically (slide 30).', s1],
      ['The cornea is a lipid / water / lipid sandwich: less drug gets in, and it is the route for small, lipophilic drugs (slides 29–30; T@43104).', s2],
      ['The conjunctiva has transporters and enzymes; more drug gets in, by the route for large, hydrophilic drugs (slides 29–30; T@44206).', s3],
      ['Both routes lead to the drug’s ocular bioavailability; the conjunctiva’s enzymes can activate a prodrug (slide 30; T@44422, T@45075).', s4],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slide 29 (cornea and conjunctiva) and slide 30 (eye drug ADME flow: under 10% ocular, over 50% systemic; ' +
      'corneal route primary for small, lipophilic drugs; conjunctival and scleral route for large, hydrophilic drugs); Dr. Sikazwe, lecture 11/18, ' +
      'T@43104–@45400 (tightly packed cells; a larger surface; conjunctival enzymes and prodrugs).');
  })();

  /* ---------------------------------------------------------------------
     oo-imidazoline: aryl imidazoline SAR and the three alpha-2 agonists
     Slide 31 (structures; ClogP: clonidine 1.5, apraclonidine HCl 0.87,
     brimonidine tartrate 1.2; alpha-2 agonists decrease intraocular fluid
     production and increase outflow); slide 32 (aryl imidazoline core;
     X=CH2 alpha-1 agonists; X=NH2 alpha-2 agonists, as printed); 11/18
     T@46183-@50385 (clonidine the prototype, lipophilic enough to reach the
     brain, CNS effects; apraclonidine the amine analog, less lipophilic, half-
     life about 8 h; brimonidine the pyrazine analog, the most potent, highly
     alpha-2 selective, a thousandfold more potent, half-life 3 to 4 h; linker
     carbon: most alpha-1, linker amine: most alpha-2).
     Drawn skeleton: rings as regular polygons, bonds in currentColor.
     --------------------------------------------------------------------- */
  const IMID = (() => {
    const h = 350, b = 24, cx = 92, cy = 100;
    const P = deg => [cx + b * Math.cos(deg * Math.PI / 180), cy - b * Math.sin(deg * Math.PI / 180)];
    const v = [0, 60, 120, 180, 240, 300].map(P);
    const benz = [0, 1, 2, 3, 4, 5].map(i => L(v[i], v[(i + 1) % 6], 'bz' + i)).join('');
    const inner = (p, q, c, k) => {
      const m = t => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
      const s = m(0.2), e = m(0.8), f = 0.22;
      return L([s[0] + (c[0] - s[0]) * f, s[1] + (c[1] - s[1]) * f], [e[0] + (c[0] - e[0]) * f, e[1] + (c[1] - e[1]) * f], k);
    };
    const benzDb = inner(v[0], v[1], [cx, cy], 'bd0') + inner(v[2], v[3], [cx, cy], 'bd2') + inner(v[4], v[5], [cx, cy], 'bd4');
    // linker X and the imidazoline ring (regular pentagon, C2 pointing at the linker)
    const xPos = [v[0][0] + 24, v[0][1]];
    const bondX1 = L(v[0], [xPos[0] - 9, xPos[1]], 'bx1');
    const Rp = 22 / (2 * Math.sin(Math.PI / 5)), pc = [xPos[0] + 30 + Rp, cy];
    const pv = [180, 108, 36, -36, -108].map(d => [pc[0] + Rp * Math.cos(d * Math.PI / 180), pc[1] - Rp * Math.sin(d * Math.PI / 180)]);
    // pv: 0 C2, 1 N1(H), 2 C5, 3 C4, 4 N3
    const toward = (p, q, d) => { const dx = q[0] - p[0], dy = q[1] - p[1], n = Math.hypot(dx, dy); return [p[0] + dx / n * d, p[1] + dy / n * d]; };
    const bondX2 = L([xPos[0] + 9, xPos[1]], pv[0], 'bx2');
    const imid = L(pv[0], toward(pv[1], pv[0], 7), 'im01') + L(toward(pv[1], pv[2], 7), pv[2], 'im12') + L(pv[2], pv[3], 'im23') +
      L(pv[3], toward(pv[4], pv[3], 6), 'im34') + L(toward(pv[4], pv[0], 6), pv[0], 'im40') +
      inner(pv[0], toward(pv[4], pv[0], 6), pc, 'imdb') +
      T(pv[1][0], pv[1][1] + 4, 'N', 'n1', 'oo-n', 'middle') + T(pv[1][0], pv[1][1] - 10, 'H', 'n1h', 'oo-n', 'middle') +
      T(pv[4][0], pv[4][1] + 5, 'N', 'n3', 'oo-n', 'middle');
    const xLbl = s => T(xPos[0], xPos[1] + 4, s, 'X', 'oo-x', 'middle');
    const core = benz + benzDb + bondX1 + bondX2 + imid;
    // substituents: two ortho positions (60 and 300 degrees), para (180)
    const out = (p, d) => toward(p, [cx, cy], -d);
    const sub = (p, s, k, a = 'middle') => { const e = out(p, 13), t = out(p, 22); return L(p, e, 'sb' + k) + T(t[0], t[1] + 4, s, 'sl' + k, 'oo-cl', a); };
    const clUp = sub(v[1], 'Cl', 'u'), clDn = sub(v[5], 'Cl', 'd');
    const nh2 = (() => { const e = out(v[3], 13); return L(v[3], e, 'sbp') + T(e[0] - 2, e[1] + 4, 'H₂N', 'slp', 'oo-n', 'end'); })();
    const br = sub(v[1], 'Br', 'u');
    // brimonidine: a pyrazine ring fused on the 120-180 degree edge
    const c2 = [cx + 2 * b * Math.cos(Math.PI / 6) * Math.cos(150 * Math.PI / 180), cy - 2 * b * Math.cos(Math.PI / 6) * Math.sin(150 * Math.PI / 180)];
    const Q = deg => [c2[0] + b * Math.cos(deg * Math.PI / 180), c2[1] - b * Math.sin(deg * Math.PI / 180)];
    const q = [0, 60, 120, 180, 240, 300].map(Q);     // q[0] = v[2], q[5] = v[3]; N at q[1] and q[4]
    const pyr = L(q[0], toward(q[1], q[0], 6), 'pz01') + L(toward(q[1], q[2], 6), q[2], 'pz12') + L(q[2], q[3], 'pz23') +
      L(q[3], toward(q[4], q[3], 6), 'pz34') + L(toward(q[4], q[5], 6), q[5], 'pz45') +
      inner(q[2], q[3], c2, 'pzd1') + inner(toward(q[1], q[2], 6), q[2], c2, 'pzd2') +
      T(q[1][0], q[1][1] + 4, 'N', 'pn1', 'oo-n', 'middle') + T(q[4][0], q[4][1] + 4, 'N', 'pn4', 'oo-n', 'middle');
    const name = s => T(10, 32, s, 'name', 'oo-tb', 'start');
    const parts = T(cx, 148, 'aryl', 'p1', 'oo-ts', 'middle') + T(xPos[0], 148, 'linker', 'p2', 'oo-ts', 'middle') +
      T(pc[0] + 4, 148, 'imidazoline', 'p3', 'oo-ts', 'middle');

    // the ClogP scale (slide 31): a vertical axis from 0.8 (bottom) to 1.6 (top)
    const ax = 230, yv = c => 152 - (c - 0.8) / 0.8 * 90;
    const axis = L([ax, yv(1.6)], [ax, yv(0.8)], 'axis', 'oo-axis') + T(ax, 48, 'ClogP', 'axt', 'oo-tb', 'middle') +
      T(ax - 6, yv(1.6) + 4, '1.6', 'ax16', 'oo-ts', 'end') + T(ax - 6, yv(0.8) + 4, '0.8', 'ax08', 'oo-ts', 'end') +
      L([ax - 3, yv(1.6)], [ax + 3, yv(1.6)], 'tk16', 'oo-axis') + L([ax - 3, yv(0.8)], [ax + 3, yv(0.8)], 'tk08', 'oo-axis');
    const mk = (c, s, k) => C(ax, yv(c), 4, 'm' + k, 'oo-mk') + T(ax + 9, yv(c) + 4, s, 'mt' + k, 'oo-t', 'start');
    const mClo = mk(1.5, 'clonidine 1.5', 'c'), mBri = mk(1.2, 'brimonidine 1.2', 'b'), mApr = mk(0.87, 'apraclonidine 0.87', 'a');
    const more = T(ax + 9, 170, '↑ more lipophilic', 'axm', 'oo-ts', 'start');

    const s1 = name('Aryl imidazoline core') + core + xLbl('X') + parts +
      Ls(10, 190, ['An aromatic ring (aryl) joined through one linker', 'atom, X, to the imidazoline ring.'], 'd1');
    const s2 = name('Aryl imidazoline core') + core + xLbl('X') + parts +
      T(10, 190, 'X = CH₂: most are α1-receptor agonists', 'd2a', 'oo-tb') +
      T(10, 210, 'X = NH: most are α2-receptor agonists', 'd2b', 'oo-tb') +
      T(10, 228, '(the slide prints X=NH₂)', 'd2c', 'oo-ts');
    const s3 = name('Clonidine: the prototype') + core + xLbl('NH') + clUp + clDn + axis + more + mClo +
      Ls(10, 190, ['Lipophilic enough to get into the brain,', 'where it brings several CNS effects', '(unwanted when treating glaucoma).'], 'd3');
    const s4 = name('Apraclonidine: the amine analog') + core + xLbl('NH') + clUp + clDn + nh2 + axis + more + mClo + mApr +
      Ls(10, 190, ['The added amine (H₂N) lowers ClogP: less', 'lipophilic, so it gets into the brain less.', 'Half-life about 8 h.'], 'd4');
    const s5 = name('Brimonidine: the pyrazine analog') + core + xLbl('NH') + br + pyr + axis + more + mClo + mApr + mBri +
      Ls(10, 190, ['The most potent of the series and highly', 'α2-selective: about 1,000-fold more potent', 'than clonidine and apraclonidine (in class).', 'Half-life 3–4 h.'], 'd5');

    return ooStepper('oo-imidazoline', 'Imidazoline α-agonists: SAR', [
      ['The SAR core: an aryl ring linked by one atom, X, to an imidazoline (slide 32; T@49986).', s1],
      ['With a CH₂ linker most agents are α1 agonists; with an NH linker most are α2 agonists (slide 32; T@50385).', s2],
      ['Clonidine, the prototype (ClogP 1.5), reaches the brain and brings CNS effects (slide 31; T@46183, T@46562).', s3],
      ['Apraclonidine adds an amine: ClogP 0.87, less lipophilic, less brain entry (slide 31; T@47174, T@47684).', s4],
      ['Brimonidine, the pyrazine analog (ClogP 1.2), is the most potent and highly α2-selective (slide 31; T@47934, T@48347).', s5],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slide 31 (structures; ClogP: clonidine 1.5, apraclonidine HCl 0.87, brimonidine tartrate 1.2; α2 agonists ' +
      'lower intraocular fluid production and raise outflow) and slide 32 (aryl imidazoline core; X=CH₂ α1, X=NH₂ α2 as printed; the drawn linker ' +
      'is the NH of the three drugs); Dr. Sikazwe, lecture 11/18, T@46183–@50385 (prototype, CNS effects, the amine and pyrazine analogs, potency, ' +
      'half-lives; “most” for each linker).');
  })();

  /* ---------------------------------------------------------------------
     oo-ache: acetylcholinesterase inhibitors by functional group
     Slide 41 (AChE inactivates ACh to acetic acid + choline; indirect-acting
     cholinergics inhibit AChE, raising ACh levels; increase fluid outflow);
     slide 42 (organophosphates; echothiophate iodide, an irreversible AChE
     inhibitor; extent of AChE inhibition depends on the FG present:
     phosphoryl > carbamate > ester; scheme: diethyl phosphoryl AChE
     (inactive), H2O, aging, loss of C2H5-OH, AChE irreversibly inactive);
     slide 43 (Question-2: intermediate duration); slide 68 (Question 5:
     irreversible inhibition). Slides alone (the 11/18 lecture ended at
     slide 32).
     --------------------------------------------------------------------- */
  const ACHE = (() => {
    const h = 360;
    const ach = R(10, 26, 140, 44, 'achb') + T(80, 44, 'Acetylcholine (ACh)', 'ach1', 'oo-tb', 'middle') + T(80, 61, 'an ester', 'ach2', 'oo-t', 'middle');
    const arr = A('M154 48 L236 48', 'a1') + T(195, 38, 'AChE', 'enz', 'oo-k', 'middle');
    const prod = R(240, 26, 110, 44, 'prb') + T(295, 44, 'acetic acid', 'pr1', 'oo-t', 'middle') + T(295, 61, '+ choline', 'pr2', 'oo-t', 'middle');
    const inact = T(195, 88, 'ACh is inactivated', 'ina', 'oo-ts', 'middle');
    const s1 = ach + arr + prod + inact;

    const block = L([185, 42], [205, 60], 'x1', 'oo-x2') + L([205, 42], [185, 60], 'x2', 'oo-x2');
    const up = T(195, 88, 'Inhibitor blocks AChE: ACh levels ↑', 'up1', 'oo-w', 'middle') + T(195, 104, '→ fluid outflow ↑', 'up2', 'oo-ok', 'middle');
    const s2 = ach + arr + prod + block + up;

    const head = T(180, 128, 'Extent of AChE inhibition depends on the group', 'hd', 'oo-tb', 'middle');
    const row = (y, n, name, form, note, k, cls) => R(10, y, 340, 34, 'rb' + k, cls) +
      T(20, y + 14, n + '  ' + name, 'rn' + k, 'oo-tb') + T(20, y + 28, form, 'rf' + k, 'oo-f2') + T(342, y + 21, note, 'rt' + k, 'oo-ts', 'end');
    const rows = row(136, '1', 'Phosphoryl', 'R1O–P(=O)(R2)–OR3', 'most', 'p', 'oo-act') + T(180, 184, '>', 'g1', 'oo-tb', 'middle') +
      row(188, '2', 'Carbamate', 'R1–NH–C(=O)–O–R2', 'intermediate', 'c', 'box') + T(180, 236, '>', 'g2', 'oo-tb', 'middle') +
      row(240, '3', 'Ester', 'R1–C(=O)–O–R2', 'least', 'e', 'box');
    const s3 = ach + arr + prod + block + up + head + rows;

    const p1 = row(136, '1', 'Phosphoryl', 'R1O–P(=O)(R2)–OR3', 'most', 'p', 'oo-act');
    const echo = T(20, 190, 'Echothiophate iodide (an organophosphate):', 'ec1', 'oo-tb') +
      R(10, 198, 140, 56, 'eb1') + T(80, 214, 'AChE–O–P(=O)', 'ef1', 'oo-f2', 'middle') + T(80, 229, '(OC₂H₅)₂', 'ef1b', 'oo-f2', 'middle') + T(80, 246, 'AChE inactive', 'ef2', 'oo-ts', 'middle') +
      A('M152 226 L206 226', 'a2') + T(179, 218, 'H₂O', 'ag0', 'oo-k', 'middle') + T(179, 270, 'aging: loses', 'ag1', 'oo-k', 'middle') + T(179, 284, 'C₂H₅–OH', 'ag2', 'oo-k', 'middle') +
      R(208, 198, 142, 56, 'eb2', 'oo-act') + T(279, 214, 'AChE–O–P(=O)', 'ef3', 'oo-f2', 'middle') + T(279, 229, '(OC₂H₅)OH', 'ef3b', 'oo-f2', 'middle') +
      T(279, 246, 'irreversibly inactive', 'ef4', 'oo-w', 'middle');
    const s4 = ach + arr + prod + block + up + head + p1 + echo;

    return ooStepper('oo-ache', 'AChE inhibitors: ester, carbamate, phosphoryl', [
      ['Acetylcholinesterase (AChE) hydrolyzes ACh, an ester, to acetic acid and choline, inactivating it (slide 41).', s1],
      ['Indirect-acting cholinergics inhibit AChE, so ACh levels rise and fluid outflow increases (slide 41).', s2],
      ['The extent of inhibition depends on the group: phosphoryl > carbamate > ester, so the carbamate is intermediate (slides 42–43).', s3],
      ['Echothiophate’s phosphoryl group binds AChE; aging (loss of an ethyl group as ethanol) leaves it irreversibly inactive (slide 42).', s4],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slide 41 (ACh hydrolysis by AChE; indirect-acting cholinergics raise ACh and fluid outflow), slide 42 ' +
      '(echothiophate iodide, an irreversible AChE inhibitor; the aging scheme; phosphoryl > carbamate > ester in the extent of inhibition), ' +
      'slide 43 (Question-2: intermediate duration) and slide 68 (Question 5: irreversible inhibition). From the slides alone: the 11/18 lecture ' +
      'ended at slide 32. Group formulas as slide 42 draws them; the scheme’s enzyme-bound O is written AChE–O.');
  })();

  /* ---------------------------------------------------------------------
     oo-pg-prodrug: prostaglandin FP agonists as ester prodrugs
     Slide 44 (all increase fluid outflow via PGF or FP receptor activation;
     structures: bimatoprost an ethyl amide; travoprost, latanoprost and
     tafluprost isopropyl esters; latanoprostene bunod an ester; tafluprost
     with two F at C-15); slide 45 (latanoprost (prodrug) to latanoprost acid
     (active) by esterase); slide 46 (SAR: acids and amides active, esters
     prodrugs; C-15 = OH or halogens prevent 15-OH oxidation; positions 1 and
     15); slides 47-48 (omidenepag isopropyl and netarsudil, ester prodrugs
     that need esterase hydrolysis); slide 29 (esterase among the
     conjunctiva's enzymes). Slides alone.
     --------------------------------------------------------------------- */
  const PG = (() => {
    const h = 340, b = 20;
    // cyclopentane ring, its two HO groups (C-9 and C-11, the ring carbons next to the two chains), the upper (alpha) chain to C-1 and the lower chain through C-15
    const pc = [52, 92], Rp = b / (2 * Math.sin(Math.PI / 5));
    const pv = [90, 18, -54, -126, 162].map(d => [pc[0] + Rp * Math.cos(d * Math.PI / 180), pc[1] - Rp * Math.sin(d * Math.PI / 180)]);
    const ring = [0, 1, 2, 3, 4].map(i => L(pv[i], pv[(i + 1) % 5], 'rg' + i)).join('');
    const ho = L(pv[4], [pv[4][0] - 10, pv[4][1] - 10], 'ho1b') + T(pv[4][0] - 10, pv[4][1] - 14, 'HO', 'ho1', 'oo-o', 'end') +
      L(pv[2], [pv[2][0], pv[2][1] + 12], 'ho2b') + T(pv[2][0], pv[2][1] + 25, 'HO', 'ho2', 'oo-o', 'middle');
    const zig = (start, n, dir, k) => {
      const pts = [start]; let up = dir;
      for (let i = 0; i < n; i++) { const p = pts[pts.length - 1]; pts.push([p[0] + b * Math.cos(Math.PI / 6), p[1] + (up ? -b / 2 : b / 2)]); up = !up; }
      return {pts, svg: pts.slice(1).map((p, i) => L(pts[i], p, k + i)).join('')};
    };
    const upper = zig(pv[0], 7, true, 'u');           // ends at C-1
    const c1 = upper.pts[upper.pts.length - 1];
    const lower = zig(pv[1], 6, false, 'w');
    const c15 = lower.pts[3];
    const oh15 = L(c15, [c15[0], c15[1] + 14], 'oh15b') + T(c15[0], c15[1] + 27, 'OH', 'oh15', 'oo-o', 'middle') +
      T(c15[0], c15[1] - 8, '15', 'n15', 'oo-num', 'middle');
    const omega = T(lower.pts[6][0] + 6, lower.pts[6][1] + 4, 'alkyl or phenyl', 'om', 'oo-ts', 'start');
    const skel = ring + ho + upper.svg + lower.svg + oh15 + omega;
    const n1 = T(c1[0], c1[1] + 14, '1', 'n1', 'oo-num', 'middle');
    const end = (s, cls) => L(c1, [c1[0] + 12, c1[1] - 7], 'endb') + T(c1[0] + 14, c1[1] - 6, s, 'end', cls, 'start');
    const tag = (s, cls) => T(c1[0] + 14, c1[1] + 10, s, 'endt', cls, 'start');

    const s1 = T(10, 30, 'PGF2α', 'nm', 'oo-tb') + skel + n1 + end('COOH', 'oo-o') + tag('acid', 'oo-ok') +
      Ls(10, 172, ['All the FP agonists ↑ fluid outflow by activating', 'the PGF (FP) receptor.', 'Key places: C-1 (the acid) and C-15 (the OH).'], 'd1');
    const s2 = T(10, 30, 'Latanoprost (prodrug)', 'nm', 'oo-tb') + skel + n1 + end('COO–iPr', 'oo-o') + tag('isopropyl ester', 'oo-w') +
      Ls(10, 172, ['The C-1 acid is made an isopropyl ester: a prodrug.', 'Isopropyl esters also: travoprost, tafluprost;', 'latanoprostene bunod is an ester too.'], 'd2');
    const s3 = T(10, 30, 'Latanoprost acid (active)', 'nm', 'oo-tb') + skel + n1 + end('COOH', 'oo-o') + tag('acid, active (esterase)', 'oo-ok') +
      Ls(10, 172, ['An esterase hydrolyzes the ester back to the acid.', 'Slide 29 lists esterase among the', 'conjunctiva’s enzymes.'], 'd3');
    const s4 = T(10, 30, 'SAR (slide 46)', 'nm', 'oo-tb') + skel + n1 + end('COOH / CONH–', 'oo-o') + tag('acid or amide: active', 'oo-ok') +
      Ls(10, 172, ['Acids (–COOH) and amides (–CONH–) are active', 'drugs (bimatoprost is an amide); esters are', 'prodrugs. C-15: OH or halogens (tafluprost: two F)', 'prevent 15-OH oxidation.'], 'd4') +
      Ls(10, 236, ['Omidenepag isopropyl and netarsudil are ester', 'prodrugs needing esterase too (slides 47–48).'], 'd5', 'oo-ts');

    return ooStepper('oo-pg-prodrug', 'Prostaglandin FP agonists: ester prodrugs', [
      ['PGF2α carries a carboxylic acid at C-1 and an OH at C-15; FP agonists raise fluid outflow (slides 44, 46).', s1],
      ['Latanoprost carries an isopropyl ester at C-1, so it is a prodrug (slides 44–46).', s2],
      ['An esterase hydrolyzes the ester to latanoprost acid, the active drug (slide 45; esterase, slide 29).', s3],
      ['Acids and amides are active, esters are prodrugs; a halogen for the C-15 OH stops oxidation to a ketone (slides 46–48).', s4],
    ], h, 'Drawn after Sikazwe_OOO_mc.pdf slide 44 (all FP agonists raise fluid outflow through the PGF/FP receptor; the five structures), slide 45 ' +
      '(latanoprost, prodrug, to latanoprost acid, active, by esterase), slide 46 (SAR: acids and amides active, esters prodrugs; C-15 OH or ' +
      'halogens), slides 47–48 (omidenepag isopropyl and netarsudil, ester prodrugs activated by esterase) and slide 29 (esterase among the ' +
      'conjunctiva’s enzymes). From the slides alone: the 11/18 lecture ended at slide 32. The skeleton is simplified (ring, the two chains, C-1 and C-15).');
  })();

  return {
    figs: {'oo-cerumen': CERUMEN, 'oo-fluoride': FLUORIDE, 'oo-eye-entry': ENTRY, 'oo-imidazoline': IMID, 'oo-ache': ACHE, 'oo-pg-prodrug': PG},
    names: {'oo-cerumen': 'Carbamide peroxide in the ear',
      'oo-fluoride': 'Fluoride: hydroxyapatite to fluorapatite',
      'oo-eye-entry': 'Eye drops: cornea and conjunctiva routes',
      'oo-imidazoline': 'Imidazoline α-agonists: SAR, clonidine to brimonidine',
      'oo-ache': 'AChE inhibitors: ester, carbamate, phosphoryl',
      'oo-pg-prodrug': 'Prostaglandin FP agonists: ester prodrugs'},
    css: '.fig .oo-title{font-size:12.5px}' +
      '.fig .lbl.sm.capt.oo-caph{font-size:11.5px;font-weight:700}.fig .lbl.xs.capt.oo-cap{font-size:11.5px;fill:var(--text)}' +
      '.fig .oo-t{fill:var(--text);font-size:11.5px}.fig .oo-tb{fill:var(--text);font-size:11.5px;font-weight:700}' +
      '.fig .oo-ts{fill:var(--text-dim);font-size:11.5px}.fig .oo-k{fill:var(--accent);font-size:11.5px;font-weight:700}' +
      '.fig .oo-w{fill:var(--bad);font-size:11.5px;font-weight:700}.fig .oo-ok{fill:var(--ok);font-size:11.5px;font-weight:700}' +
      '.fig .oo-f{fill:var(--text);font-size:14px;font-weight:600}.fig .oo-f2{fill:var(--text);font-size:11.5px;font-family:ui-monospace,Menlo,Consolas,monospace}' +
      '.fig .oo-n{fill:var(--at-n);font-size:12px;font-weight:600}.fig .oo-o{fill:var(--at-o);font-size:12px;font-weight:600}' +
      '.fig .oo-cl{fill:var(--at-x);font-size:12px;font-weight:600}.fig .oo-x{fill:var(--accent);font-size:12.5px;font-weight:700}' +
      '.fig .oo-num{fill:var(--accent);font-size:11.5px;font-weight:700}' +
      '.fig .oo-bd{stroke:currentColor;stroke-width:1.5;fill:none;stroke-linecap:round}' +
      '.fig .oo-axis{stroke:var(--text-dim);stroke-width:1.2;fill:none}.fig .oo-mk{fill:var(--accent)}' +
      '.fig .oo-x2{stroke:var(--bad);stroke-width:3;fill:none;stroke-linecap:round}' +
      '.fig .oo-act{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.3}' +
      '.fig .oo-wax{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.2}' +
      '.fig .oo-bub{fill:none;stroke:var(--accent);stroke-width:1.4}' +
      '.fig .oo-lip{fill:var(--surface);stroke:var(--at-s);stroke-width:1.4}.fig .oo-hyd{fill:var(--surface);stroke:var(--at-n);stroke-width:1.4}' +
      '.fig .oo-lyl{fill:var(--warn-bg);stroke:var(--warn);stroke-width:0.8}.fig .oo-lyw{fill:var(--accent-bg);stroke:var(--accent);stroke-width:0.8}',
  };
})();

/* One sentence per figure, written into the figure's markup as purpose_ui.js does it, so each figure
   opens with its Purpose line wherever it is drawn. */
const DIAGRAMS_OO_PURPOSE = {
  'oo-cerumen': 'Shows how carbamide peroxide releases hydrogen peroxide in the ear and how catalase turns it into oxygen bubbles, so you can explain how Debrox breaks up ear wax.',
  'oo-fluoride': 'Shows enamel’s hydroxyapatite turning into fluorapatite with fluoride, so you can say why fluoride protects against acid erosion and when too much causes fluorosis.',
  'oo-eye-entry': 'Shows the two routes an eye drop takes into the eye, the cornea and the conjunctiva, so you can predict the route from a drug’s lipophilicity and size.',
  'oo-imidazoline': 'Builds the aryl imidazoline SAR and the three α2 agonists with their ClogP values, so you can link the linker atom to α1 or α2 activity and lipophilicity to brain entry.',
  'oo-ache': 'Shows how acetylcholinesterase inhibitors raise acetylcholine and how the ester, carbamate and phosphoryl groups rank, so you can name the group behind each extent of inhibition.',
  'oo-pg-prodrug': 'Shows latanoprost as an isopropyl ester prodrug activated by esterase to the acid, so you can tell an active prostaglandin agonist from a prodrug by its C-1 group.'
};

if (DIAGRAMS_OO) {
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  Object.keys(DIAGRAMS_OO.figs).forEach(k => {
    const h = DIAGRAMS_OO.figs[k], m = h.match(/^<figure class="fig[^"]*">/);
    DIA[k] = (m && DIAGRAMS_OO_PURPOSE[k] && h.indexOf('dnpurpose') < 0)
      ? m[0] + '<p class="dnpurpose"><b>Purpose.</b> ' + esc(DIAGRAMS_OO_PURPOSE[k]) + '</p>' + h.slice(m[0].length) : h;
  });
  if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, DIAGRAMS_OO.names);
  if (typeof DIAGRAMS !== 'undefined') DIAGRAMS.push(['Ear, mouth and eye drug chemistry (Dr. Sikazwe)', Object.keys(DIAGRAMS_OO.figs)]);
  if (typeof document !== 'undefined' && document.head && !document.getElementById('diagramsoocss')) {
    const s = document.createElement('style'); s.id = 'diagramsoocss';
    s.textContent = DIAGRAMS_OO.css + '.dnpurpose{margin:2px 0 8px;font-size:13.5px;line-height:1.45}';
    document.head.appendChild(s);
  }
}

/* ==========================================================================
   MECHANISM STEP-THROUGHS, DR. SMITH (Skin-PCol-Students-2026.pdf)
   ==========================================================================
   Louis, 2026-11-08/09, on his annotated PCol slides: "Why didn't we make and
   generate the MOA of these? Please do so as its information that needed and
   help in solidifying ones understanding by seeing an animation of it in a
   different way" (and "Also with these as well" for the folate cycle and
   co-stimulation).

   Five step-throughs, drawn with the stepper() of diagrams.js and following
   STEPPERS.md (same data-k for the same thing in every step; opacity set as an
   attribute; nothing rotated). Loaded after diagrams.js and reactions.js: adds
   the figures to DIA, their names to DIA_NAMES and their keys to the Diagrams
   group "Mechanisms drawn from Dr. Smith’s slides" (else Skin Pharmacology).

   Every label is from her slide or her words in class; the sources are named in
   each figure's caption and in the walkthrough parts that show a step:
     PC   Skin-PCol-Students-2026.pdf slide number
     T1030 / T1103   the lecture-only transcripts of 10/30 and 11/03, by line
   Held items (reviews/OPEN_QUESTIONS.md) are left off: the step the macrolides
   block (slide 42 caption vs slide 47) and the MHC class in signal 1 (slide 63
   figure vs her "MHC1" at T1103 289). Her slip at T1103 54-55 (clindamycin
   "binding together of the amino acids") is resolved to the slide 46 wording,
   translocation, as in L3-011.

   Colour is never the only cue: a blocked step carries a drawn cross and the
   word of the drug beside it; a step that stops is also drawn faint.
   ========================================================================== */
(() => {
  if (typeof DIA === 'undefined' || typeof stepper !== 'function') return;
  const B = 'style="fill:var(--bad);font-weight:700"';          // a drug that blocks: red, bold
  const box = (x, y, w, h, k, extra = '') => `<rect class="box" data-k="${k}" x="${x}" y="${y}" width="${w}" height="${h}" rx="5"${extra}/>`;
  const t = (x, y, s, k, c = 'lbl sm', a = 'middle', extra = '') => `<text class="${c}" data-k="${k}" x="${x}" y="${y}" text-anchor="${a}"${extra}>${s}</text>`;
  const ar = (d, k, extra = '') => `<path class="arrow" data-k="${k}" d="${d}"${extra}/>`;
  // a cross drawn over a step the drug blocks
  const cross = (cx, cy, k, r = 6) => `<path data-k="${k}" d="M${cx - r} ${cy - r} L${cx + r} ${cy + r} M${cx + r} ${cy - r} L${cx - r} ${cy + r}" style="stroke:var(--bad);stroke-width:2.6;fill:none;stroke-linecap:round"/>`;
  const faint = ' opacity="0.3"';

  /* ---------- 1. PDE-4 inhibitors: cAMP (PC 32-34; T1030 430-472) ----------
     After the slide 32 figure (Katzung 15e ch. 2, the cAMP second messenger
     pathway), redrawn as a schematic. */
  const PDE4 = (() => {
    const mem = `<rect class="shape" data-k="mem" x="4" y="32" width="352" height="20" rx="3" opacity="0.6"/>` + t(352, 46, 'Membrane', 'meml', 'lbl xs', 'end');
    const rec = t(20, 24, 'Agonist', 'ag', 'lbl xs') + ar('M20 26 L20 33', 'aga') +
      box(6, 34, 28, 16, 'rec') + t(20, 46, 'Rec', 'recl', 'lbl xs') + ar('M35 42 L44 42', 'a1') +
      box(46, 34, 30, 16, 'gs') + t(61, 46, 'Gs', 'gsl', 'lbl xs') + ar('M77 42 L88 42', 'a2') +
      box(90, 34, 30, 16, 'ac') + t(105, 46, 'AC', 'acl', 'lbl xs');
    const make = (camp = 'cAMP') => rec + ar('M105 51 L105 84', 'a3') +
      t(36, 94, 'ATP', 'atp') + ar('M52 90 L146 90', 'a4') + t(172, 94, camp, 'camp', 'lbl', 'middle', ' style="font-weight:700"') +
      t(112, 64, 'adenylyl cyclase (AC)', 'acn', 'lbl xs', 'start') + t(112, 74, 'makes cAMP from ATP', 'acn2', 'lbl xs', 'start');
    const s1 = mem + make();
    const pde = (dim = '') => ar('M196 90 L268 90', 'a5') + t(300, 94, '5′-AMP', 'amp', 'lbl sm', 'middle', dim) +
      t(232, 106, 'PDE', 'pde') + t(232, 116, 'breaks down cAMP', 'pden', 'lbl xs');
    const s2 = s1 + pde();
    const kin = (d = '') =>
      ar('M178 98 L194 126', 'k1', d) + t(204, 140, 'R₂C₂', 'r2c2', 'lbl sm', 'middle', d) +
      ar('M222 134 L246 130', 'k2', d) + t(250, 134, 'R₂·cAMP₄', 'r2c', 'lbl xs', 'start', d) +
      ar('M222 140 L246 150', 'k3', d) + t(250, 156, '2C (catalytic)', 'c2', 'lbl xs', 'start', d) +
      ar('M262 160 L242 176', 'k4', d) + t(232, 188, 'S', 's', 'lbl sm', 'middle', d) + ar('M240 184 L272 184', 'k5', d) +
      t(276, 188, 'S~P', 'sp', 'lbl sm', 'start', d) + ar('M300 184 L314 184', 'k6', d) + t(354, 188, 'Response', 'resp', 'lbl xs', 'end', d) +
      t(276, 204, 'S = substrate protein', 'sn', 'lbl xs', 'middle', d);
    const s3 = s2 + kin();
    const inh = cross(232, 90, 'x1') + t(254, 66, 'PDE4 inhibitor', 'inh', 'lbl sm', 'middle', ' ' + B) +
      t(254, 77, 'crisaborole, apremilast', 'inh2', 'lbl xs');
    const s4 = mem + make('cAMP ↑') + pde(faint) + kin() + inh;
    const eff = box(4, 116, 168, 94, 'effb') +
      t(10, 130, 'More cAMP in the cell:', 'e1', 'lbl sm', 'start') +
      t(10, 143, 'smooth muscle relaxes', 'e2', 'lbl xs', 'start') +
      t(10, 154, 'inflammatory cells are inhibited:', 'e3', 'lbl xs', 'start') +
      t(10, 165, 'less cytokine, less inflammation', 'e4', 'lbl xs', 'start') +
      t(10, 179, 'PDE4 is the main isoform in', 'e5', 'lbl xs', 'start') +
      t(10, 190, 'mast cells, eosinophils, neutrophils,', 'e6', 'lbl xs', 'start') +
      t(10, 201, 'T lymphocytes, macrophages', 'e7', 'lbl xs', 'start');
    const s5 = mem + make('cAMP ↑') + pde(faint) + kin(faint) + inh + eff;
    return stepper('fig-pde4-camp', 'PDE-4 inhibitors: why cAMP rises', [
      ['An agonist acts on its receptor (Rec); the stimulatory G protein (Gs) activates adenylyl cyclase (AC), which makes cyclic AMP (cAMP) from ATP.', s1],
      ['Phosphodiesterase (PDE) breaks down cAMP to 5′-AMP, so the cAMP is cleared.', s2],
      ['cAMP frees the catalytic (C) subunits of its kinase, which phosphorylate substrate proteins (S) to give the response. She said this part of the figure is not the key point.', s3, 'slide figure'],
      ['A PDE4 inhibitor blocks the breakdown, so cAMP builds up. Crisaborole (topical, atopic dermatitis) and apremilast (oral, psoriasis) share this mechanism.', s4],
      ['More cAMP relaxes smooth muscle and inhibits inflammatory cells, so less cytokine and less inflammation: a nonsteroidal anti-inflammatory.', s5],
    ], 262, 'After Skin-PCol-Students-2026.pdf slide 32 (Katzung, Basic &amp; Clinical Pharmacology 15e, ch. 2, redrawn as a schematic) and slides 33–34; lecture 10/30, T 430–472 (crisaborole and apremilast: T 448–466). PDE4 breaks down cAMP (Louis\'s note on slide 32).');
  })();

  /* ---------- 2. Ribosome: where the antibiotics bind (PC 42-47) ----------
     After the slide 42 figure (Katzung 14e), redrawn. Elongation steps 1-4 as in
     its caption; the drugs as on slides 42, 43, 46 and 47. */
  const RIBO = (() => {
    const ribo = `<rect class="shape" data-k="r50" x="70" y="28" width="196" height="88" rx="40"/>` + t(168, 42, '50S', 'l50') +
      `<rect class="shape" data-k="r30" x="92" y="124" width="152" height="40" rx="18"/>` + t(168, 156, '30S', 'l30') +
      `<path data-k="mrna" d="M50 120 L276 120" style="stroke:var(--text-dim);stroke-width:3;fill:none"/>` + t(52, 133, 'mRNA', 'mr', 'lbl xs', 'start') +
      t(312, 40, '70S ribosome', 'l70') + t(312, 52, '= 50S + 30S', 'l70b', 'lbl xs') +
      `<rect data-k="sd" x="118" y="82" width="42" height="36" rx="4" fill="none" style="stroke:var(--text-dim);stroke-dasharray:3 2"/>` +
      `<rect data-k="sa" x="178" y="82" width="42" height="36" rx="4" fill="none" style="stroke:var(--text-dim);stroke-dasharray:3 2"/>` +
      t(139, 136, 'donor site', 'sdl', 'lbl xs') + t(199, 136, 'acceptor site', 'sal', 'lbl xs');
    // a tRNA with its amino acid on top; the chain of amino acids 1-5 rides on the tRNA that holds it
    const trna = (x, y, n, k) => box(x, y, 22, 18, k) + t(x + 11, y + 13, n, k + 'l', 'lbl xs');
    const aa = (x, y, k) => `<circle class="mark" data-k="${k}" cx="${x}" cy="${y}" r="5"/>`;
    const chain = (x, y) => aa(x, y, 'aa5') + aa(x - 10, y - 9, 'aa4') + aa(x - 20, y - 18, 'aa3') + aa(x - 30, y - 27, 'aa2') + aa(x - 40, y - 36, 'aa1') +
      `<path data-k="ch" d="M${x} ${y} L${x - 40} ${y - 36}" style="stroke:var(--accent);stroke-width:1.5;fill:none"/>`;
    const legend = t(6, 212, 'Steps: 1 tRNA in · 2 peptide bond · 3 tRNA out · 4 translocation', 'leg', 'lbl xs', 'start');
    const start = ribo + trna(128, 96, 't5', 't5') + chain(139, 82) +
      trna(284, 92, 't6', 't6') + aa(295, 80, 'aa6') + t(295, 126, 'charged tRNA', 't6n', 'lbl xs');
    const s1 = start;
    const in6 = ribo + trna(128, 96, 't5', 't5') + chain(139, 82) + trna(188, 96, 't6', 't6') + aa(199, 82, 'aa6') +
      ar('M282 100 L226 100', 'in', faint) + t(250, 94, '1', 'n1', 'lbl sm');
    const s2 = in6 + legend;
    const s3 = in6 + `<path data-k="bond" d="M144 82 L194 82" style="stroke:var(--accent);stroke-width:2.4;fill:none"/>` + t(169, 76, '2', 'n2', 'lbl sm') + legend;
    // step 3 and 4: t5 leaves; t6 with the chain (now 1-6) shifts to the donor site
    const s4 = ribo + trna(22, 62, 't5', 't5') + t(4, 94, 'uncharged tRNA', 'unc', 'lbl xs', 'start') + t(4, 104, 'released', 'unc2', 'lbl xs', 'start') +
      ar('M118 96 L48 74', 'out') + t(86, 76, '3', 'n3', 'lbl sm') +
      trna(128, 96, 't6', 't6') + aa(139, 82, 'aa6') + chain(129, 73) + t(169, 110, '4', 'n4', 'lbl sm') + legend;
    // the drug steps go back to the moment before step 1, where each one acts
    const tri = (x, y, k, up = true) => `<path data-k="${k}" d="${up ? `M${x - 7} ${y + 6} L${x + 7} ${y + 6} L${x} ${y - 6} z` : `M${x - 7} ${y - 6} L${x + 7} ${y - 6} L${x} ${y + 6} z`}" style="fill:var(--bad)"/>`;
    const T = tri(199, 151, 'trT') + t(199, 177, 'T', 'trTl', 'lbl sm', 'middle', ' ' + B) +
      ar('M282 100 L226 100', 'in') + cross(252, 100, 'x1');
    const legT = t(6, 190, 'T  tetracyclines: 30S, block step 1', 'lgT', 'lbl xs', 'start');
    const s5 = start + T + legT + legend;
    const C50 = tri(169, 60, 'trC', false) + t(158, 64, 'C', 'trCl', 'lbl sm', 'end', ' ' + B) +
      tri(169, 101, 'trCl2') + t(169, 92, 'Cl', 'trCll', 'lbl xs', 'middle', ' ' + B);
    const legC = t(6, 201, 'C  chloramphenicol: 50S, blocks step 2', 'lgC', 'lbl xs', 'start') +
      t(190, 190, 'Cl  clindamycin: 50S, blocks step 4', 'lgCl', 'lbl xs', 'start');
    const s6 = start + T + legT + C50 + legC + legend;
    const M = tri(232, 58, 'trM', false) + t(243, 62, 'M', 'trMl', 'lbl sm', 'start', ' ' + B);
    const legM = t(190, 201, 'M  macrolides: 50S', 'lgM', 'lbl xs', 'start');
    const s7 = start + T + legT + C50 + legC + M + legM + legend;
    return stepper('fig-ribosome', 'Bacterial ribosome: where the antibiotics bind', [
      ['The bacterial ribosome (70S) is a 50S and a 30S subunit on the mRNA. The growing chain (amino acids 1 to 5) sits on the tRNA in the donor site.', s1],
      ['Step 1: a charged tRNA, carrying amino acid 6, binds the acceptor site.', s2],
      ['Step 2: peptide bond formation links the growing chain to amino acid 6.', s3],
      ['Step 3: the uncharged tRNA is released. Step 4: translocation, the new chain with its tRNA shifts over to the donor site.', s4],
      ['Tetracyclines (sarecycline, minocycline, doxycycline) bind the 30S subunit irreversibly and block the charged tRNA from the acceptor site (step 1).', s5],
      ['On the 50S subunit: chloramphenicol blocks peptide bond formation (step 2); clindamycin prevents translocation (step 4).', s6],
      ['The macrolides (erythromycin, azithromycin) also bind the 50S subunit. Tetracyclines, clindamycin and macrolides are bacteriostatic.', s7],
    ], 270, 'After Skin-PCol-Students-2026.pdf slide 42 (Katzung 14e figure and caption, redrawn) and slides 43, 46, 47; lecture 10/30, T 585–609; 11/03, T1103 20–36, 53–56, 65–68. The slides give two different steps for the macrolides (slide 42: peptide bond; slide 47: translocation), so only their subunit is drawn.');
  })();

  /* ---------- 3. Folate pathway in bacteria (PC 48-50) ----------
     After the slide 49 figure (Goodman & Gilman 14e, ch. 57), redrawn. */
  const FOLP = (() => {
    const X = 210;
    const node = (y, s, k, dim = '') => t(X, y, s, k, 'lbl', 'middle', ' style="font-weight:600"' + dim);
    const top = node(36, 'Pteridine + PABA', 'n1') + ar(`M${X} 42 L${X} 84`, 'a1') + t(X - 8, 66, 'dihydropteroate synthase', 'e1', 'lbl xs', 'end') +
      node(98, 'Dihydropteroic acid', 'n2');
    const rest = (dim = '') => ar(`M${X} 104 L${X} 146`, 'a2', dim) + t(X - 8, 128, 'dihydrofolate synthase', 'e2', 'lbl xs', 'end', dim) + t(X + 8, 124, '+ glutamate', 'glu', 'lbl xs', 'start', dim) +
      node(160, 'Dihydrofolic acid', 'n3', dim) + ar(`M${X} 166 L${X} 208`, 'a3', dim) + t(X - 8, 190, 'dihydrofolate reductase', 'e3', 'lbl xs', 'end', dim) +
      t(X + 8, 176, 'NADPH → NADP', 'nad', 'lbl xs', 'start', dim) + node(222, 'Tetrahydrofolic acid', 'n4', dim);
    const out = (dim = '') => ar(`M${X} 228 L${X} 246`, 'a4', dim) + t(X, 260, 'purines → DNA → cells divide', 'pur', 'lbl sm', 'middle', dim);
    const why = t(6, 256, 'folate is used to', 'why1', 'lbl xs', 'start') + t(6, 266, 'make purines', 'why2', 'lbl xs', 'start');
    const s1 = top;
    const s2 = top + rest();
    const s3 = s2 + out() + why;
    const sulfa = cross(X, 63, 'x1') + t(X + 12, 56, 'sulfonamides', 'su', 'lbl sm', 'start', ' ' + B) +
      t(X + 12, 67, 'compete with PABA:', 'su2', 'lbl xs', 'start') + t(X + 12, 77, 'sulfamethoxazole; dapsone', 'su3', 'lbl xs', 'start') +
      t(X + 12, 86, '(leprosy) acts the same way', 'su4', 'lbl xs', 'start');
    const s4 = top + sulfa + rest(' opacity="0.55"') + out(' opacity="0.55"') + why;
    const tmp = cross(X, 190, 'x2') + t(X + 12, 192, 'trimethoprim', 'tm', 'lbl sm', 'start', ' ' + B) +
      t(X + 12, 203, 'inhibits bacterial DHFR', 'tm2', 'lbl xs', 'start');
    const s5 = top + sulfa + rest(' opacity="0.55"') + tmp + out(faint) +
      t(X, 272, 'no purines: the bacteria cannot divide', 'stop', 'lbl xs', 'middle', ' style="font-weight:700"') + why;
    return stepper('fig-folate-path', 'Folate pathway in bacteria: two blocks in sequence', [
      ['Bacteria make their own folate: dihydropteroate synthase joins pteridine and PABA (para-aminobenzoic acid) into dihydropteroic acid.', s1],
      ['With glutamate it becomes dihydrofolic acid; dihydrofolate reductase (NADPH to NADP) then makes tetrahydrofolic acid.', s2],
      ['Folate is needed to make purines, two of the DNA bases, so a cell without it cannot divide.', s3],
      ['Sulfonamides such as sulfamethoxazole compete with PABA and block the first step. Dapsone, for leprosy, acts like the sulfonamides.', s4],
      ['Trimethoprim inhibits bacterial dihydrofolate reductase. Two blocks in sequence: the combination is much more effective than either drug alone.', s5, 'sequential block'],
    ], 322, 'After Skin-PCol-Students-2026.pdf slides 48–49 (Goodman &amp; Gilman 14e, ch. 57, figure and caption, redrawn) and slide 50 (dapsone in leprosy); lecture 11/03, T1103 73–98. Louis\'s note on slide 49: folic acid is for the production of purines, so cells can\'t divide. Methotrexate blocks the human enzyme: see “Methotrexate and the folate cycle”.',
      '<button type="button" class="chip" data-jump="guide:g-fig-folate-cycle">Methotrexate and the folate cycle</button>');
  })();

  /* ---------- 4. Methotrexate and the folate cycle (PC 59-61) ----------
     After the slide 60 figure (Katzung Fig 33-3), redrawn; only the parts she
     taught (T1103 228-237). The figure's vitamin B12 loop (N5-methyltetra-
     hydrofolate, cobalamin, homocysteine to methionine) is left out: she did not
     discuss it. */
  const FOLC = (() => {
    const cx = 170, cy = 132, r = 60;
    const P = a => [+(cx + r * Math.cos(a * Math.PI / 180)).toFixed(1), +(cy + r * Math.sin(a * Math.PI / 180)).toFixed(1)];
    const [thx, thy] = P(135), [dhx, dhy] = P(45), [tpx, tpy] = P(270);
    const arc = (a, b, k, dim = '') => `<path class="arrow" data-k="${k}" d="M${a[0]} ${a[1]} A${r} ${r} 0 0 1 ${b[0]} ${b[1]}"${dim}/>`;
    const diet = t(300, 248, 'Folic acid (from diet)', 'fa', 'lbl sm') + ar(`M292 238 L${dhx + 12} ${dhy + 20}`, 'a0') +
      t(292, 216, 'folate reductase', 'fr0', 'lbl xs', 'start');
    const dhf = t(dhx + 4, dhy + 14, 'Dihydrofolate', 'dhf', 'lbl sm', 'start');
    const thf = t(thx - 4, thy + 14, 'Tetrahydrofolate', 'thf', 'lbl sm', 'end');
    const red = (dim = '') => arc(P(45), P(135), 'ared', dim) + t(cx, cy + r + 13, 'folate reductase (DHFR)', 'fr', 'lbl xs', 'middle', dim);
    const s1 = diet + dhf;
    const s2 = s1 + red() + thf;
    const meth = (dim = '') => arc(P(135), P(270), 'ash', dim) + t(cx, tpy - 6, 'N⁵,N¹⁰-methylenetetrahydrofolate', 'mth', 'lbl sm', 'middle', dim) +
      t(cx - 34, cy - 4, 'serine trans-', 'sh1', 'lbl xs', 'middle', dim) + t(cx - 34, cy + 6, 'hydroxymethylase', 'sh2', 'lbl xs', 'middle', dim) +
      t(42, 156, 'Serine', 'ser', 'lbl xs', 'middle', dim) + `<path class="arrow" data-k="sga" d="M50 150 Q76 132 50 114"${dim}/>` + t(42, 110, 'Glycine', 'gly', 'lbl xs', 'middle', dim) +
      ar(`M${cx} ${tpy - 18} L${cx} 40`, 'apur', dim) + t(cx, 34, 'Purines', 'pur', 'lbl sm', 'middle', dim);
    const s3 = s2 + meth();
    const tsyn = (dim = '') => arc(P(270), P(45), 'ats', dim) + t(cx + 34, cy - 4, 'thymidylate', 'ts1', 'lbl xs', 'middle', dim) + t(cx + 34, cy + 6, 'synthase', 'ts2', 'lbl xs', 'middle', dim) +
      t(272, 84, 'dUMP', 'dump', 'lbl xs', 'middle', dim) + `<path class="arrow" data-k="tsa" d="M262 88 Q246 102 262 116"${dim}/>` + t(272, 124, 'dTMP', 'dtmp', 'lbl xs', 'middle', dim) +
      ar('M282 128 L306 146', 'adna', dim) + t(318, 160, 'DNA synthesis', 'dna', 'lbl sm', 'middle', dim);
    const s4 = s3 + tsyn();
    const mtx = cross(cx, cy + r, 'x1', 7) + t(cx, cy + r + 26, 'methotrexate blocks it', 'mtx', 'lbl sm', 'middle', ' ' + B) +
      t(cx, cy + r + 37, '(a folic acid analog)', 'mtx2', 'lbl xs');
    const s5 = diet + dhf + red() + thf + meth(faint) + tsyn(faint) + mtx +
      t(cx, cy + 26, 'less THF:', 'lo1', 'lbl xs', 'middle', ' style="font-weight:700"') + t(cx, cy + 36, 'fewer purines, less dTMP', 'lo2', 'lbl xs');
    return stepper('fig-folate-cycle', 'Methotrexate and the folate cycle', [
      ['Folic acid from the diet is reduced to dihydrofolate (folate reductase).', s1],
      ['Folate reductase, dihydrofolate reductase (DHFR), turns dihydrofolate into tetrahydrofolate (THF).', s2],
      ['Serine transhydroxymethylase (serine to glycine) makes N⁵,N¹⁰-methylenetetrahydrofolate, which goes on to the purines.', s3],
      ['Thymidylate synthase turns dUMP into dTMP for DNA synthesis, which gives dihydrofolate back: a cycle.', s4],
      ['Methotrexate, a folic acid analog, inhibits DHFR: less THF, fewer purines and less dTMP, so keratinocytes cannot keep proliferating.', s5],
    ], 300, 'After Skin-PCol-Students-2026.pdf slide 60 (Katzung Fig 33-3, redrawn; its vitamin B12 loop is left out, as it was not discussed) and slide 59; lecture 11/03, T1103 212–236. Louis\'s notes on slide 60: dihydrofolate "from diet"; folate reductase is "where methotrexate is working". The same reduction in structures (Dr. Sikazwe): Guide, Medicinal Chemistry, "Folate reduction by DHFR".',
      '<button type="button" class="chip" data-jump="guide:rx-folate">Folate reduction by DHFR (structures)</button>');
  })();

  /* ---------- 5. Abatacept: inhibitor of co-stimulation (PC 63; PC 25) ----------
     After the slide 63 figure (Katzung Fig 55-7), redrawn with only what she
     taught for it (T1103 269-357): no LFA-3/CD2, CD40/CD40L, ICAM-1/LFA-1,
     alefacept, ipilimumab or efalizumab. Signal 1 is labelled "MHC + antigen":
     its class is held (reviews/OPEN_QUESTIONS.md, Lecture 3 Smith, item 1). */
  const COSTIM = (() => {
    const cells = `<rect class="shape" data-k="apc" x="4" y="24" width="96" height="176" rx="40"/>` +
      t(52, 104, 'Antigen-', 'apcl', 'lbl sm') + t(52, 116, 'presenting', 'apcl2', 'lbl sm') + t(52, 128, 'cell', 'apcl3', 'lbl sm') + t(52, 142, '(dendritic cell)', 'apcl4', 'lbl xs') +
      `<rect class="shape" data-k="tc" x="260" y="24" width="96" height="176" rx="40"/>` + t(308, 112, 'T cell', 'tcl', 'lbl sm');
    // receptors drawn as short bars from each cell's edge
    const stub = (x1, x2, y, k) => `<path data-k="${k}" d="M${x1} ${y} L${x2} ${y}" style="stroke:var(--text);stroke-width:3;fill:none;stroke-linecap:round"/>`;
    const sig1 = stub(100, 140, 172, 'mhc') + t(118, 166, 'MHC + antigen', 'mhcl', 'lbl xs', 'start') +
      stub(220, 260, 172, 'tcr') + t(242, 186, 'TCR', 'tcrl', 'lbl xs', 'middle') +
      `<path data-k="s1l" d="M140 172 L220 172" style="stroke:var(--text-dim);stroke-width:1.4;stroke-dasharray:4 3;fill:none"/>` + t(180, 186, 'signal 1', 's1t', 'lbl sm');
    const cd80 = (y, k) => stub(100, 140, y, k) + t(104, y - 5, 'CD80/86', k + 'l', 'lbl xs', 'start');
    const cd28 = stub(220, 260, 60, 'cd28') + t(256, 54, 'CD28', 'cd28l', 'lbl xs', 'end');
    const ctla = stub(220, 260, 110, 'ctla') + t(256, 104, 'CTLA-4', 'ctlal', 'lbl xs', 'end');
    const s1 = cells + sig1 + cd80(60, 'b1') + cd28 + ctla + cd80(110, 'b2');
    const pos = `<path data-k="pos" d="M140 60 L220 60" style="stroke:var(--ok);stroke-width:2.4;fill:none"/>` + t(180, 74, '+ signal 2', 'post', 'lbl sm') +
      t(180, 84, 'positive: activate', 'posn', 'lbl xs');
    const s2 = s1 + pos + t(308, 132, 'activates,', 'act1', 'lbl xs') + t(308, 142, 'makes IL-2', 'act2', 'lbl xs');
    const neg = `<path data-k="neg" d="M140 110 L220 110" style="stroke:var(--bad);stroke-width:2.4;stroke-dasharray:6 3;fill:none"/>` + t(180, 124, '− signal 2', 'negt', 'lbl sm') +
      t(180, 134, 'negative: stop', 'negn', 'lbl xs');
    const s3 = s1 + pos + neg + t(308, 132, 'activation', 'act1', 'lbl xs') + t(308, 142, 'stops, no IL-2', 'act2', 'lbl xs') +
      t(180, 148, 'same CD80/86, other receptor', 'same', 'lbl xs');
    // abatacept: the CTLA-4 extracellular part (two arms) on a human IgG Fc stem
    const abat = (x, y, k) => `<path data-k="${k}" d="M${x} ${y - 8} L${x + 10} ${y} L${x} ${y + 8} M${x + 10} ${y} L${x + 28} ${y}" style="stroke:var(--bad);stroke-width:2.6;fill:none;stroke-linecap:round"/>`;
    const drug = abat(150, 36, 'ab') + t(196, 30, 'abatacept', 'abl', 'lbl sm', 'start', ' ' + B) +
      t(196, 41, 'CTLA-4 part + IgG Fc', 'abl2', 'lbl xs', 'start');
    const s4 = s1 + drug + t(180, 138, 'made like CTLA-4: higher', 'aff1', 'lbl xs') + t(180, 148, 'binding affinity for CD80/86', 'aff2', 'lbl xs');
    const s5 = cells + sig1 + cd80(60, 'b1') + cd28 + ctla + cd80(110, 'b2') + abat(142, 60, 'ab') + t(196, 30, 'abatacept', 'abl', 'lbl sm', 'start', ' ' + B) +
      t(196, 41, 'CTLA-4 part + IgG Fc', 'abl2', 'lbl xs', 'start') + cross(200, 60, 'x1') +
      t(180, 80, 'no + signal 2', 'no2', 'lbl sm', 'middle', ' style="font-weight:700"') +
      t(308, 132, 'not activated,', 'act1', 'lbl xs') + t(308, 142, 'no IL-2', 'act2', 'lbl xs') +
      t(180, 216, 'inhibitor of co-stimulation', 'name', 'lbl sm', 'middle', ' ' + B);
    return stepper('fig-costim', 'Abatacept: inhibitor of co-stimulation', [
      ['Signal 1: the antigen-presenting cell holds the antigen on MHC, and the T cell receptor (TCR) binds it, which alerts the T cell.', s1],
      ['Positive signal 2 (co-stimulation): CD80/86 on the antigen-presenting cell binds CD28 on the T cell, so the T cell activates and makes IL-2.', s2],
      ['Negative signal 2: the same CD80/86 binds CTLA-4 on the T cell instead, and T-cell activation stops.', s3],
      ['Abatacept is a fusion protein: the extracellular part of CTLA-4 fused to human IgG Fc, which gives it structure. Made like CTLA-4, it probably binds CD80/86 more strongly than CD28 does.', s4],
      ['Abatacept occupies CD80/86, so CD28 cannot bind: no positive signal 2, no T-cell activation, no IL-2.', s5],
    ], 270, 'After Skin-PCol-Students-2026.pdf slide 63 (Katzung Fig 55-7, redrawn with only the molecules she taught for it) and slide 25 (signals 1 and 2); lecture 11/03, T1103 269–357. Louis\'s notes on slide 63: CD80/86 with CD28 is a positive signal 2, with CTLA-4 a negative one; the CTLA-4 part gives "higher binding affinity", the Fc part is "to give it structure"; "inhibits the positive signal 2". The MHC class in signal 1 is not drawn (held, reviews/OPEN_QUESTIONS.md).');
  })();

  const ADD = {'fig-pde4-camp': PDE4, 'fig-ribosome': RIBO, 'fig-folate-path': FOLP, 'fig-folate-cycle': FOLC, 'fig-costim': COSTIM};
  const NAMES = {
    'fig-pde4-camp': 'PDE-4 inhibitors: why cAMP rises',
    'fig-ribosome': 'Bacterial ribosome: where the antibiotics bind',
    'fig-folate-path': 'Folate pathway in bacteria: sulfonamides and trimethoprim',
    'fig-folate-cycle': 'Methotrexate and the folate cycle',
    'fig-costim': 'Abatacept: inhibitor of co-stimulation',
  };
  Object.assign(DIA, ADD);
  if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, NAMES);
  if (typeof DIAGRAMS !== 'undefined' && Array.isArray(DIAGRAMS)) {
    const grp = re => DIAGRAMS.find(x => Array.isArray(x) && re.test(x[0]) && Array.isArray(x[1]));
    const g = grp(/Mechanisms drawn from Dr\. Smith/) || grp(/Skin Pharmacology/);
    if (g) g[1].push(...Object.keys(ADD)); else DIAGRAMS.push(['Skin Pharmacology (Dr. Smith)', Object.keys(ADD)]);
  }
})();

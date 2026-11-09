/* ==========================================================================
   DIAGRAMS for the narrated walkthrough of Dr. Sikazwe's assigned vitamin D
   reading (walk_rd.js): Bikle DD. Vitamin D: Production, Metabolism, and
   Mechanism of Action. Endotext (MDText.com), last update June 15, 2025.
   Loaded after diagrams.js and reactions.js; adds to DIA and DIAGRAMS.
   Schematics drawn for this drill from the paper's text (section named in each
   caption); the paper's own figures are not copied. Step-through rules: STEPPERS.md
   (same data-k for the same thing in every step; opacity as an attribute).
   ========================================================================== */
(function () {
  if (typeof DIA === 'undefined' || typeof stepper !== 'function') return;
  const box = (x, y, w, h, k) => `<rect class="box" data-k="${k}" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>`;
  const t = (x, y, s, k, c = 'lbl sm', a = 'middle') => `<text class="${c}" data-k="${k}" x="${x}" y="${y}" text-anchor="${a}">${s}</text>`;
  const arr = (d, k) => `<path class="arrow" data-k="${k}" d="${d}"/>`;
  const dot = (x, y, k) => `<circle class="mark" data-k="${k}" cx="${x}" cy="${y}" r="6"/>`;
  // a labelled box: one or two lines centred in it
  const nb = (x, y, w, h, k, l1, l2, c = 'lbl sm') => box(x, y, w, h, 'b' + k) +
    (l2 ? t(x + w / 2, y + h / 2 - 2, l1, 't' + k, c) + t(x + w / 2, y + h / 2 + 9, l2, 'u' + k, 'lbl xs')
        : t(x + w / 2, y + h / 2 + 4, l1, 't' + k, c));

  /* ---------- 1. Vitamin D3 in the skin ('Cutaneous Production of Vitamin D3') ---------- */
  const SKIN = (() => {
    const dhc = nb(10, 26, 130, 28, 'dhc', '7-Dehydrocholesterol', 'epidermis');
    const pre = nb(220, 26, 130, 28, 'pre', 'Previtamin D3', 'ring B open');
    const uv = arr('M142 40 L218 40', 'a1') + t(180, 35, 'UVB, 290–310 nm', 'l1', 'lbl xs') + t(180, 52, 'breaks ring B', 'l1b', 'lbl xs');
    const s1 = dhc + uv + pre;
    const d3 = nb(220, 88, 130, 28, 'd3', 'Vitamin D3', 'cholecalciferol');
    const heat = arr('M285 56 L285 86', 'a2') + t(291, 69, 'body heat,', 'l2', 'lbl xs', 'start') + t(291, 79, 'no enzyme', 'l2b', 'lbl xs', 'start');
    const s2 = s1 + heat + d3;
    const lum = nb(10, 88, 130, 28, 'lum', 'Lumisterol, tachysterol', 'inactive; revert in the dark');
    const sup = nb(10, 146, 130, 28, 'sup', 'Suprasterols, 5,6-trans-D3', 'inactive', 'lbl xs');
    const more = arr('M224 56 L144 92', 'a3') + t(172, 66, 'more UV', 'l3', 'lbl xs', 'end') +
      arr('M218 112 L144 150', 'a5') + t(170, 122, 'more UV', 'l5', 'lbl xs', 'end');
    const lim = t(180, 192, 'Prolonged sun does not make toxic amounts of D3', 'lim', 'lbl xs');
    const s3 = s2 + lum + sup + more + lim;
    const dbp = nb(220, 146, 130, 28, 'dbp', 'To the blood', 'bound to DBP');
    const out = arr('M285 118 L285 144', 'a6');
    const fac = t(180, 206, 'Less made with: melanin · high latitude, winter · clothing, sunscreen', 'fac', 'lbl xs');
    const s4 = s3 + dbp + out + fac;
    return stepper('fig-vitd-skin', 'Vitamin D3 in the skin', [
      ['UVB light breaks ring B of 7-dehydrocholesterol: previtamin D3.', s1],
      ['Previtamin D3 rearranges to vitamin D3 with body heat, slowly: no enzyme.', s2],
      ['More UV turns previtamin D3 and D3 into inactive products: the skin limits its own output.', s3],
      ['Vitamin D3 leaves the skin on vitamin D binding protein (DBP). Pigment, latitude, season, clothing and sunscreen lower production.', s4],
    ], 252, 'Drawn from Bikle, Endotext 2025, &ldquo;Cutaneous Production of Vitamin D3&rdquo; and the Overview (D3 leaves the skin bound to DBP). The isomerization is thermal: none forms at 0 °C, slowly at 37 °C.');
  })();

  /* ---------- 2. Transport in blood ('Transport in Blood') ---------- */
  const TRANSPORT = (() => {
    const blood = box(10, 22, 340, 92, 'blood') + t(18, 35, 'Blood', 'bl', 'lbl xs', 'start');
    const dbp = nb(20, 42, 140, 30, 'dbp', 'On DBP: 85–88%', 'made mainly in the liver');
    const alb = nb(20, 78, 140, 28, 'alb', 'On albumin: 12–15%');
    const free = nb(200, 42, 140, 30, 'free', 'Free: very little', '25OHD 0.03% · calcitriol 0.4%');
    const s1 = blood + dbp + alb + free;
    const cell = nb(200, 150, 140, 40, 'cell', 'Most cells', 'take up the free form');
    const s2 = s1 + cell + arr('M270 74 L270 148', 'af') + t(276, 120, 'free hormone', 'lf', 'lbl xs', 'start');
    const meg = nb(20, 150, 140, 40, 'meg', 'Kidney, placenta, parathyroid', 'megalin–cubilin: bound form in', 'lbl xs');
    const s3 = s2 + meg + arr('M90 108 L90 148', 'am') + t(96, 132, 'bound form', 'lm', 'lbl xs', 'start');
    const low = t(180, 208, 'Low DBP (liver disease, nephrotic syndrome): total level falls, free level can be normal', 'low', 'lbl xs');
    const s4 = s3 + low;
    return stepper('fig-vitd-transport', 'Vitamin D in the blood', [
      ['Vitamin D and its metabolites travel bound: mostly to DBP, the rest to albumin.', s1],
      ['Most cells take up only the free, unbound form (the free hormone hypothesis); DBP is a reservoir.', s2],
      ['Kidney, placenta and parathyroid take up DBP-bound metabolites through megalin–cubilin; in the kidney this prevents loss in urine.', s3],
      ['Low DBP lowers the total level measured without necessarily lowering the free level.', s4],
    ], 262, 'Drawn from Bikle, Endotext 2025, &ldquo;Transport in Blood&rdquo; and the Overview.');
  })();

  /* ---------- 3. Making and breaking calcitriol, and their control ---------- */
  const REG = (() => {
    const d25 = nb(125, 22, 110, 28, 'd25', '25OHD', 'from the liver');
    const act = nb(10, 86, 150, 30, 'act', 'Calcitriol, 1,25(OH)2D', 'active hormone');
    const cat = nb(200, 86, 150, 30, 'cat', '24-hydroxylated forms', '→ calcitroic acid, inactive');
    const e1 = arr('M150 52 L100 84', 'e1') + t(114, 64, 'CYP27B1', 'e1l', 'cl', 'end');
    const e2 = arr('M210 52 L260 84', 'e2') + t(246, 64, 'CYP24A1', 'e2l', 'cl', 'start');
    const e3 = arr('M162 108 L198 108', 'e3');
    const s1 = d25 + act + cat + e1 + e2 + e3 + t(180, 130, 'In the kidney tubule: both enzymes, same mitochondria', 'kid', 'lbl xs');
    const pth = nb(10, 146, 110, 40, 'pth', 'PTH', 'CYP27B1 ↑ · CYP24A1 ↓');
    const s2 = s1 + pth;
    const fgf = nb(125, 146, 110, 40, 'fgf', 'FGF23, Ca, phosphate', 'CYP27B1 ↓ · CYP24A1 ↑');
    const s3 = s2 + fgf + t(180, 198, 'High phosphate → bone makes FGF23', 'php', 'lbl xs');
    const self = nb(240, 146, 110, 40, 'self', 'Calcitriol', '24A1↑ · FGF23↑ · PTH↓');
    const s4 = s3 + self;
    const ext = t(180, 212, 'Other tissues: TNF-α and IFN-γ raise CYP27B1; macrophages lack working CYP24A1', 'ext', 'lbl xs') +
      t(180, 222, '(sarcoidosis: calcitriol and calcium rise)', 'ext2', 'lbl xs');
    const s5 = s4 + ext;
    return stepper('fig-vitd-regulation', 'Calcitriol: made by CYP27B1, broken down by CYP24A1', [
      ['CYP27B1 (1α-hydroxylase) makes calcitriol; CYP24A1 (24-hydroxylase) starts breaking down 25OHD and calcitriol.', s1],
      ['PTH stimulates CYP27B1 and inhibits CYP24A1 in the kidney.', s2],
      ['FGF23, calcium and phosphate do the opposite: the two enzymes are regulated as mirror images.', s3],
      ['Calcitriol induces CYP24A1 (its own breakdown), raises FGF23 and lowers PTH: feedback against toxicity.', s4],
      ['Outside the kidney, cytokines drive CYP27B1; in macrophages the brake is missing.', s5],
    ], 262, 'Drawn from Bikle, Endotext 2025, &ldquo;Renal Production of 1,25(OH)2D&rdquo;, &ldquo;Renal Production of 24,25(OH)2D&rdquo;, &ldquo;Fibroblast Growth Factor (FGF23)&rdquo; and the Overview.');
  })();

  /* ---------- 4. The vitamin D receptor ('Mechanism of Action') ---------- */
  const VDR = (() => {
    const cell = t(18, 32, 'Cytoplasm', 'cyto', 'lbl xs', 'start');
    const nuc = box(10, 88, 340, 118, 'nuc') + t(18, 100, 'Nucleus', 'nucl', 'lbl xs', 'start');
    const dna = `<path class="ax" data-k="dna" d="M20 180 L340 180"/>` + t(330, 194, 'DNA', 'dnal', 'lbl xs', 'end');
    const s1 = cell + nuc + dna + box(150, 40, 70, 22, 'vdr') + t(185, 55, 'VDR', 'vdrl') + dot(160, 51, 'lig') +
      t(185, 76, 'calcitriol binds; helix 12 closes', 'h12', 'lbl xs') + t(60, 52, 'calcitriol enters the cell', 'enter', 'lbl xs');
    const pair = box(100, 150, 60, 22, 'rxr') + t(130, 165, 'RXR', 'rxrl') + box(164, 150, 60, 22, 'vdr') + t(194, 165, 'VDR', 'vdrl') + dot(174, 161, 'lig');
    const vdre = box(100, 174, 124, 12, 'vdre') + t(162, 200, 'VDRE: two 6-base half sites, 3 apart', 'vdrel', 'lbl xs');
    const gene = arr('M250 180 L322 180', 'gene') + t(286, 174, 'gene', 'genel', 'lbl xs');
    const s2 = cell + nuc + dna + pair + vdre + gene;
    const coa = box(100, 112, 124, 24, 'co') + t(162, 128, 'SRC → HAT: opens chromatin', 'col', 'lbl xs') +
      box(232, 112, 108, 24, 'med') + t(286, 128, 'Mediator → RNA pol II', 'medl', 'lbl xs') + t(300, 150, 'mRNA ↑', 'up', 'cl');
    const s3 = s2 + coa;
    const rep = box(100, 112, 124, 24, 'cr') + t(162, 128, 'corepressor → HDAC: closes', 'crl', 'lbl xs') + t(300, 150, 'gene ↓', 'down', 'cl') +
      t(286, 108, 'e.g. PTH gene', 'eg', 'lbl xs');
    const s4 = s2 + rep;
    return stepper('fig-vdr-action', 'How calcitriol changes gene expression', [
      ['Calcitriol enters the cell and binds the vitamin D receptor (VDR); helix 12 closes over it.', s1],
      ['VDR pairs with RXR; the pair binds a vitamin D response element (VDRE), RXR on the upstream half site.', s2],
      ['Coactivators: SRC proteins bring histone acetyltransferases; Mediator links to RNA polymerase II. The gene is read.', s3],
      ['Or the gene is turned down: corepressors bring histone deacetylases; negative VDREs, as in the PTH gene.', s4],
    ], 250, 'Drawn from Bikle, Endotext 2025, &ldquo;Mechanism of Action&rdquo; and &ldquo;VDR and Transcriptional Regulation&rdquo;.');
  })();

  /* ---------- 5. Calcium-regulating organs ('Target Tissue Responses') ---------- */
  const TARGETS = (() => {
    const chain = (labs, k) => labs.map((l, i) => nb(10 + i * 86, 60, 74, 40, k + i, l[0], l[1], 'lbl xs')).join('') +
      [0, 1, 2].map(i => arr(`M${86 + i * 86} 80 L${95 + i * 86} 80`, k + 'a' + i)).join('');
    const s1 = t(180, 34, 'Intestinal cell (duodenum)', 'h1', 'lbl sm') +
      chain([['Gut lumen', 'calcium'], ['TRPV6', 'channel: entry'], ['Calbindin', 'in vesicles'], ['PMCA1b pump', 'out, uses ATP']], 'g') +
      t(180, 124, 'Calcitriol induces the channel, calbindin and pump; also raises phosphate uptake', 'n1', 'lbl xs');
    const s2 = t(180, 34, 'Kidney, distal tubule', 'h2', 'lbl sm') +
      chain([['Tubule fluid', 'calcium'], ['TRPV5', 'channel'], ['Calbindin-D28k', 'carries'], ['PMCA1b pump', 'to blood']], 'k') +
      t(180, 124, 'Most calcium is reabsorbed earlier, without vitamin D; phosphate: PTH and FGF23', 'n2', 'lbl xs');
    const s3 = t(180, 34, 'Bone', 'h3', 'lbl sm') +
      nb(10, 56, 110, 40, 'ob', 'Osteoblast, osteocyte', 'VDR here', 'lbl xs') + arr('M122 76 L156 76', 'b1') +
      nb(158, 56, 70, 40, 'rl', 'RANKL', 'induced') + arr('M230 76 L250 76', 'b2') +
      nb(252, 56, 98, 40, 'oc', 'Osteoclast', 'forms, resorbs bone', 'lbl xs') +
      t(180, 118, 'Also helps osteoblasts mature: formation and resorption', 'n3', 'lbl xs') +
      t(180, 130, 'Much of the bone effect is the calcium and phosphate supply', 'n3b', 'lbl xs');
    const s4 = t(180, 34, 'Parathyroid gland and two feedback loops', 'h4', 'lbl sm') +
      nb(10, 56, 110, 40, 'pg', 'Parathyroid', 'PTH gene ↓, CaSR ↑', 'lbl xs') +
      nb(240, 56, 110, 40, 'bn', 'Bone', 'FGF23 ↑', 'lbl xs') + nb(125, 110, 110, 34, 'kd', 'Kidney CYP27B1', 'makes calcitriol', 'lbl xs') +
      arr('M70 98 L128 124', 'p1') + t(84, 124, 'less PTH', 'p1l', 'lbl xs', 'end') +
      arr('M290 98 L232 124', 'p2') + t(276, 124, 'FGF23 lowers it', 'p2l', 'lbl xs', 'start') +
      t(180, 160, 'Calcitriol and analogs treat secondary hyperparathyroidism in kidney failure', 'n4', 'lbl xs');
    return stepper('fig-vitd-targets', 'Calcitriol in the calcium-regulating organs', [
      ['Gut: calcium in through TRPV6, across on calbindin, out by the PMCA1b pump. This is the calcium absorption that limits the analogs.', s1],
      ['Kidney: in the distal tubule, TRPV5, calbindin-D28k and the same pump.', s2],
      ['Bone: through osteoblasts, calcitriol induces RANKL, which drives osteoclast formation.', s3],
      ['Parathyroid: calcitriol suppresses PTH and raises the calcium sensor; it also raises FGF23 from bone. Both lower calcitriol production.', s4],
    ], 214, 'Drawn from Bikle, Endotext 2025, &ldquo;Target Tissue Responses: Calcium Regulating Organs&rdquo; (Intestine, Bone, Kidney) and &ldquo;Parathyroid Gland&rdquo;, &ldquo;Fibroblast Growth Factor (FGF23)&rdquo;.');
  })();

  /* ---------- 6. Skin: keratinocytes and immunity ('Skin', 'Immune System') ---------- */
  const KERA = (() => {
    const top = nb(10, 26, 160, 32, 'up', 'Upper layers', 'more calcium, differentiated');
    const bas = nb(10, 66, 160, 32, 'bas', 'Basal layer', 'dividing; CYP27B1 here');
    const path = t(270, 40, 'The whole pathway in one cell:', 'p0', 'lbl xs') + t(270, 52, '7-DHC → D3 → 25OHD → calcitriol', 'p1', 'lbl xs') +
      t(270, 70, 'TNF-α, IFN-γ raise CYP27B1', 'p2', 'lbl xs') + t(270, 82, 'calcitriol raises CYP24A1', 'p3', 'lbl xs');
    const s1 = top + bas + path;
    const dif = box(185, 100, 165, 62, 'dif') + t(268, 114, 'Calcitriol, with calcium:', 'd0', 'lbl xs') +
      t(268, 126, 'CaSR ↑, phospholipase C ↑', 'd1', 'lbl xs') + t(268, 138, 'involucrin, transglutaminase ↑', 'd2', 'lbl xs') +
      t(268, 154, 'stops dividing, differentiates', 'd3', 'cl');
    const s2 = s1 + dif;
    const inn = nb(10, 172, 170, 34, 'inn', 'Innate: strengthened', 'TLR2 → CYP27B1 → cathelicidin', 'lbl xs');
    const s3 = s2 + inn;
    const ada = nb(186, 172, 164, 34, 'ada', 'Adaptive: restrained', 'Th1, Th17 ↓ · Th2, Treg ↑', 'lbl xs');
    const pso = t(180, 220, 'Th17 drives psoriasis; atopic dermatitis (a Th2 disease) may worsen', 'ps1', 'lbl xs');
    const s4 = s3 + ada + pso;
    return stepper('fig-vitd-keratinocyte', 'Vitamin D in the skin: keratinocytes and immunity', [
      ['Keratinocytes alone have the whole pathway; their CYP27B1 is driven by cytokines.', s1],
      ['Calcitriol and calcium make keratinocytes stop dividing and differentiate: the antiproliferative action used in psoriasis.', s2],
      ['Innate immunity: calcitriol induces cathelicidin, an antimicrobial peptide, in keratinocytes and macrophages.', s3],
      ['Adaptive immunity: calcitriol slows dendritic cells and T cells and shifts T helper cells from Th1 and Th17 to Th2 and Treg.', s4],
    ], 262, 'Drawn from Bikle, Endotext 2025, &ldquo;Skin&rdquo;, &ldquo;Immune System&rdquo; (adaptive and innate; Keratinocytes) and the Overview.');
  })();

  /* ---------- 7. Evidence and intake (Abstract, Overview, Cancer, Heart) ---------- */
  const EVID = figure(
    `<text class="title" x="180" y="12" text-anchor="middle">Beyond bone: promise and proof</text>` +
    box(10, 22, 165, 118, 'l') + t(92, 36, 'Animal or observational studies', 'lh', 'lbl xs') +
    ['cancer', 'blood pressure, heart disease', 'autoimmune disease', 'respiratory infection, COVID-19'].map((s, i) => t(92, 54 + i * 14, s, 'li' + i, 'lbl xs')).join('') +
    t(92, 124, 'benefit suggested', 'lr', 'cl') +
    box(185, 22, 165, 118, 'r') + t(268, 36, 'Randomized trials, people not deficient', 'rh', 'lbl xs') +
    ['cancer incidence: no fall', 'cancer deaths: may fall', 'heart disease, fractures: no', 'prediabetes to diabetes: fewer', 'autoimmune disease: fewer (one study)'].map((s, i) => t(268, 54 + i * 14, s, 'ri' + i, 'lbl xs')).join('') +
    t(180, 160, 'Intake 800–2000 IU a day; blood 25OHD 20–50 ng/mL', 'in', 'lbl sm') +
    t(180, 174, '(the reading: likely range, still debated)', 'in2', 'lbl xs'),
    'Drawn from Bikle, Endotext 2025: the Abstract and Overview, &ldquo;Cancer&rdquo;, &ldquo;Pancreatic Beta-Cells&rdquo;, &ldquo;Immune System&rdquo;, &ldquo;Heart&rdquo;.', 184);

  const ADD = {'fig-vitd-skin': SKIN, 'fig-vitd-transport': TRANSPORT, 'fig-vitd-regulation': REG, 'fig-vdr-action': VDR,
               'fig-vitd-targets': TARGETS, 'fig-vitd-keratinocyte': KERA, 'fig-vitd-evidence': EVID};
  Object.keys(ADD).forEach(k => { DIA[k] = ADD[k]; });
  if (typeof DIAGRAMS !== 'undefined' && Array.isArray(DIAGRAMS))
    DIAGRAMS.push(['Vitamin D reading (assigned by Dr. Sikazwe)', Object.keys(ADD)]);
})();

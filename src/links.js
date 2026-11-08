/* ==========================================================================
   READING LINKS: the section that teaches each question
   ==========================================================================
   A question's "Explain more" row and the Weak spots plan ("What to review
   next") send the reader to the section named here. The plan groups questions
   by the label of their first link, so each label names one section.

   Each entry lists concept ids exactly as the questions carry them; a concept
   is matched whole, at the start of the key views.js builds (concept, fg, sub,
   tags), so "clinda-topical" does not catch "clinda-topical-absorb". Where two
   subtopics share a concept id, "concept@sub" picks one of them.

   A concept is listed only where the section's text states the fact the
   question keys (checked row by row against tell.js, reference.js and
   guide.js). Concepts with no such section stay unlisted and fall back to the
   question's own explanation. The core check (test.js) accepts the guide, tell
   and ref tabs only, so the Atlas boards and the drawn figures are not linked
   from here. links_check.js checks every target against the built page.
   ========================================================================== */
const READ_LINKS = (() => {
  const S = {
    // Lecture 1, Smith 10/29 (Pathophys and PCol 1-15)
    g1:      ['guide', 'gobj-l1-1', 'Guide: skin structure and sebum (Skin Pathophysiology)'],
    g2:      ['guide', 'gobj-l1-2', 'Guide: epidemiology of the three diseases (Skin Pathophysiology)'],
    g3:      ['guide', 'gobj-l1-3', 'Guide: etiologies and pathologies (Skin Pathophysiology)'],
    g4:      ['guide', 'gobj-l1-4', 'Guide: general mechanism of each class (Skin Pharmacology)'],
    t1d:     ['tell',  'tell-l1-diseases', 'Tell apart: the three diseases'],
    t1r:     ['tell',  'tell-l1-drugs', 'Tell apart: nuclear receptor binders'],
    rClass:  ['ref',   'ref-l1-classes', 'Reference: drug classes by disease'],
    rAcne:   ['ref',   'ref-l1-acnemap', 'Reference: acne pathology and drugs'],
    rNR:     ['ref',   'ref-l1-nr', 'Reference: nuclear receptors'],
    rCS:     ['ref',   'ref-l1-steroids', 'Reference: topical corticosteroids'],
    rTgt:    ['ref',   'ref-targets', 'Reference: drug targets, write it first'],
    // Smith 10/30 and 11/03 (PCol 16-76)
    t2:      ['tell',  'tell-l2', 'Tell apart: Skin Pharmacology slides 16–42 (Smith 10/30)'],
    r2:      ['ref',   'ref-l2', 'Reference: Skin Pharmacology slides 16–42 (Smith 10/30)'],
    t3:      ['tell',  'tell-l3', 'Tell apart: Skin Pharmacology slides 43–76 (Smith 11/03)'],
    r3:      ['ref',   'ref-l3', 'Reference: Skin Pharmacology slides 43–76 (Smith 11/03)'],
    // Sikazwe 11/03 and 11/04 (DPAW)
    ts3:     ['tell',  'tell-s3', 'Tell apart: Medicinal Chemistry DPAW pp. 1–26 (Sikazwe 11/03)'],
    rs3:     ['ref',   'ref-s3', 'Reference: Medicinal Chemistry DPAW pp. 1–26 (Sikazwe 11/03)'],
    ts4:     ['tell',  'tell-s4', 'Tell apart: Medicinal Chemistry DPAW pp. 27–71 (Sikazwe 11/04)'],
    rs4:     ['ref',   'ref-s4', 'Reference: Medicinal Chemistry DPAW pp. 27–71 (Sikazwe 11/04)'],
    // Sun exposure deck, Smith (added 2026-11-08 with the guide sections by objective)
    gS0:     ['guide', 'gobj-sun-pso', 'Guide: psoralens (Sun Exposure)'],
    gS1:     ['guide', 'gobj-sun-1', 'Guide: types of UV radiation (Sun Exposure)'],
    gS4:     ['guide', 'gobj-sun-4', 'Guide: MED, SPF, broad spectrum, substantivity (Sun Exposure)'],
    gS2:     ['guide', 'gobj-sun-2', 'Guide: sunblocks vs sunscreens (Sun Exposure)'],
    gSp:     ['guide', 'gobj-sun-photo', 'Guide: photosensitizing drugs (Sun Exposure)'],
    tS:      ['tell',  'tell-sun', 'Tell apart: sun protection (Smith)'],
    rSun:    ['ref',   'ref-sun', 'Reference: SPF, skin types, substantivity'],
  };
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const one = c => {
    const [concept, sub] = c.split('@');
    return sub ? `${esc(concept)} \\S* ?${esc(sub)}(?: |$)` : `${esc(concept)}(?: |$)`;
  };
  const row = (concepts, ...keys) =>
    [new RegExp('^(?:' + concepts.trim().split(/\s+/).map(one).join('|') + ')'), keys.map(k => S[k])];

  return {
    byKey: [
      /* ---- Drug targets across Dr. Smith's lectures (added 2026-11-07, her Exam 1 hints);
              listed first so these target questions open the targets list ---------- */
      row('crisaborole-target pimecrolimus-target cyclosporine-cyclophilin tacrolimus-fkbp calcipotriene-moa', 'rTgt', 'r2'),
      row('sarecycline-target risan-target tet-30s clinda-50s smx-paba tmp-dhfr dup-target secu-target brod-receptor ' +
          'uste-p40 rux-jak12 abat-mech mtx-mech tnf-class-mech', 'rTgt', 'r3'),
      row('retinoid-target', 'rTgt', 'g4'),
      row('tgt-ad tgt-acne-abx tgt-ker-cyto tgt-pso-small tgt-biologics sunblock-ingredient organic-ingredient sunscreen-families-match', 'rTgt'),
      row('tgt-tnf-make sarecycline-narrow tet-less-photo tet-anti-inflam doxy-mino-lipid tnf-why-pso tnf-bbw-young tofa-gi-perf', 'r3'),
      row('tgt-retinoids', 'r2'),
      row('bbw-which-drug', 'r2', 'r3'),
      row('oral-cni-boxed-content', 'r2'),
      row('ad-atopic-assoc ad-trend-sex pso-prevalence pso-prevalence-factors acne-adult-sex', 'g2'),
      row('pso-trigger ad-initial-trigger acne-trigger', 'g3'),
      /* ---- Lecture 1, pathophysiology (Smith 10/29) ---------------------- */
      row('stratum-corneum keratinocyte-migration sebum-composition sebum-function', 'g1'),
      row('ad-incidence hygiene-hypothesis ad-inheritance pso-epi acne-epi acne-genetics', 'g2'),
      row('sentinel-ad sentinel-pso th1-th2-balance pso-cell-cycle', 't1d', 'g3'),
      row('ad-vs-pso-keratinocytes th1-cytokines th2-consequences psoriatic-arthritis acne-exacerbating-types pso-core', 't1d'),
      row('ad-initial-reaction ad-ige-later flg-barrier flg-penetrance pso-cytokines pso-drug-triggers ' +
          'acne-four-factors pacnes-lipase pso-systemic@path', 'g3'),
      row('ad-drug-classes acne-drug-classes', 'rClass'),
      row('acne-drug-map salicylic-target', 'rAcne'),

      /* ---- Lecture 1, pharmacology (Smith 10/29, PCol 1-15) -------------- */
      row('nrb-common-mech', 'g4', 't1r'),
      row('nrb-direct nrb-indirect nrb-complex-count hsp90-cbg cs-local-ae cs-low-potency-systemic rar-vs-rxr rxr-apoptosis', 't1r', 'g4'),
      row('rare nrb-tfs nrb-three-classes vdr-rxr', 'rNR'),
      row('cs-face-potency cs-maintenance', 'rCS', 'g4'),
      row('cs-occlusion retinoid-acne-pd retinoid-comedone retinoid-aging', 'g4'),

      /* ---- Lecture 2, Smith 10/30 (PCol 16-42) --------------------------- */
      row('ret-worse-first ret-photosens-vs-sunburn ret-photosens-mech signal-1 signal-2 signal-3 signal-cascade-il2 ' +
          'cni-site-in-figure cyclosporine-cyclophilin tacrolimus-fkbp immunophilin-pair oral-cni-shared-ae ' +
          'ribosome-subunits tetracycline-30s macrolide-50s tetra-vs-macrolide sulfur-comedogenic bpo-moa', 't2'),
      row('tretinoin-absorption tretinoin-micro adapalene-sun-stable adapalene-bpo adapalene-vs-tretinoin ' +
          'tazarotene-uses tazarotene-vs-adapalene tazarotene-pregnancy isotretinoin-children ipledge ' +
          'acitretin-indication acitretin-liver acitretin-half-life acitretin-pregnancy acitretin-ethanol acitretin-blood iso-vs-aci ' +
          'pimecrolimus-skin topical-cni-age topical-cni-ad topical-cni-burning topical-cni-cancer ' +
          'cyclosporine-gingival tacrolimus-neuropathy cni-cyp3a4 ' +
          'crisaborole-use crisaborole-hypersens apremilast-vs-crisaborole apremilast-ae apremilast-depression apremilast-cyp3a4 ' +
          'bpo-benzoic bpo-sensitizer bpo-oxidant sulfur-bacteriostatic sulfur-h2s sulfur-ae ' +
          'salicylic-moa salicylic-3-6 salicylic-over-6 salicylic-40 salicylic-diabetes-pvd', 't2', 'r2'),
      row('ret-flare-window ret-optimal-8-12 isotretinoin-indication isotretinoin-common-ae ' +
          'calcipotriene-class calcipotriene-local-ae calcipotriene-steroid calcipotriene-systemic calcipotriene-100g calcipotriene-reversal ' +
          'topical-cni-systemic oral-cyclosporine-use cyclosporine-formulations crisaborole-ae-rates bpo-counsel salicylism-additive', 'r2'),

      /* ---- Lecture 3, Smith 11/03 (PCol 43-76) --------------------------- */
      row('pos-signal-2 neg-signal-2', 't3'),
      row('tet-30s clinda-50s ribosome-subunit-tell ribosome-classes smx-paba tmp-dhfr dapsone-leprosy-mech dapsone-acne-mech ' +
          'clinda-vehicle metro-vehicle shale-vs-coal coal-photo-carc coal-oozing anth-ae se-zn mtx-vs-tmp ' +
          'abat-structure abat-mech abat-costim dup-target dup-both secu-target ixe-vs-secu brod-receptor bind-cytokine human-list ' +
          'uste-p40 p19-vs-p40 gusel-vs-tildra risan inflix-chimeric inflix-ada inflix-infusion-why inflix-lupus adalim ' +
          'etan-structure certo-peg tnf-bbw jak-small rux-jak12 upa tofa-bbw bbw-classes tofa-oral', 't3', 'r3'),
      row('tet-colitis tet-young tet-photo tet-ae-list mino-oto tet-pregnancy clinda-oral-ae clinda-topical-absorb clinda-resistance ' +
          'macro-ddi macro-topical dapsone-uses metro-use metro-mech coal-mech coal-phenol anth-source anth-mech anth-intertrig ' +
          'mtx-mech mtx-analog mtx-folate-cycle mtx-pd mtx-liver mtx-blood mtx-pregnancy mtx-dispense ' +
          'dup-eye dup-common secu-ae il23-th17 uste-vaccine uste-allergy uste-common uste-pres risan-severe ' +
          'tnf-class-mech etan-ae inflix-premed tnf-human mtx-thf', 'r3'),

      /* ---- Sun exposure deck, Smith (Sun 2-25), added 2026-11-08 ------------ */
      row('psoralen-uva-range psoralen-effects psoralen-melanin psoralen-ae psoralen-cataract psoralen-why', 'gS0'),
      row('uvb-range uvb-vs-uva-glass uva-phototoxic uvb-sunburn-vitd uva-dermis-smith uva-uvb-shared tanning-timing', 'tS', 'gS1'),
      row('uv-peak-hours uv-index severe-burn-risk tan-not-protective sunburn-mediators sunburn-timing severe-sunburn', 'gS1'),
      row('med-def spf-def spf-uvb-only broad-spectrum cancer-claim spf15-block spf-vs-broad spf-by-skin-type spf-photosensitizing vehicle-substantivity', 'tS', 'gS4'),
      row('skin-type-i', 'rSun'),
      row('reapply-interval substantivity-def', 'gS4'),
      row('sunblock-use sunblock-ae benzophenones-facts aminobenzoates-facts anthranilates-facts dibenzoylmethane-facts ' +
          'salicylates-cinnamates sunscreen-reaction-risk', 'tS', 'gS2'),
      row('sunscreen-refer sunscreen-systemic', 'gS2'),
      row('photosens-drugs', 'gSp'),

      /* ---- Lecture 3, Sikazwe 11/03 (DPAW 1-26); Smith's psoralen slide -- */
      row('soft-drug hard-drug crisaborole-sult crisaborole-ugt eczema-components goals-ecz-vs-pso psoriasis-components ' +
          'puva alpha-beta-face numbering-vs-orientation hc-to-clobetasol-not-metab 11bhsd-oxidoreductase autox-anthralin-vs-psoralen', 'ts3'),
      row('crisaborole-logp deboronation two-enzymes-count two-enzymes-names jak-diff-class jak-sequestered jak-active-metab jak-thalf ' +
          'uvc-range uva-range uvb-lower ozone-uvb uva-deepest uva-penetration coal-tar-content tar-photosens coal-tar-uvb shale-tar-source ' +
          'petrolatum lanolin silicone-advantage dimethicone-vs-cyclo anthralin-autox anthralin-radicals anthralin-mito ' +
          'psoralen-dna psoralen-uva-role which-drug-intercalates psoralen-mech ' +
          'gc-sar-four sar-11-beta sar-9-alpha sar-c1c2 hc-thalf-metab hc-doa-protein 11bhsd-enzyme cortisone-inactive-why', 'ts3', 'rs3'),
      row('crisaborole-class crisaborole-boron crisaborole-thalf crisaborole-zn-mg crisaborole-boron-role jak-3a4 jak-minor-cyp ' +
          'emollient-role tar-moa anthralin-class anthralin-stain anthralin-systemic anthralin-dendrimer ' +
          'psoralen-class psoralen-3a4 psoralen-jak-interaction steroid-skeleton ring-d gr-hbond-type gr-hbond-count gr-hbond-groups ' +
          'hc-reference hc-dual-activity potency-bases clobetasol-superpotent potency-low-example hc-logp hc-bioavail hc-urine', 'rs3'),

      /* ---- Lecture 4, Sikazwe 11/04 (DPAW 27-71); Smith's sunblock slides */
      row('limus-structure mtx-affinity mtx-vs-folic aha-definition aha-identify', 'ts4'),
      row('limus-difference limus-skin-binding limus-moa limus-lactone lactone-vs-lactam calcipotriene-vs-calcitriol vitd-hypercalcemia secosteroid ' +
          'csa-activation csa-lactam apremilast-class apremilast-metab apremilast-3a4 tofacitinib-class tofacitinib-3a4 ' +
          'ga-vs-sa-logp ga-surface ga-metab ha-itch sa-glycine sa-bha sulfur-particle zno-size bpo-two-actions bpo-radical ' +
          'iso-geometric iso-c13 tret-iso-route etretinate-acitretin etretinate-removed tazarotene-prodrug retinoid-cooh gen3-members retinoid-gen-basis ' +
          'aa-steroid aa-biosynthesis flutamide-moa azole-3a4 tet-vs-steroid doxy-mino-food tet-cross-allergy ' +
          'zno-mech chromophore avobenzone meradimate-vs-avobenzone ensulizole octocrylene oxybenzone bemotrizinol ha-mw ' +
          'sunblock-vs-sunscreen organic-mech', 'ts4', 'rs4'),
      row('vitd-antiproliferative mtx-pteridine mtx-dhfr mtx-sar-parts mtx-sar-aromatic mtx-sar-alkylation mtx-sar-nme ' +
          'csa-structure csa-moa csa-bioavailability csa-grapefruit apremilast-moa ce-enzymes retinoid-nuclear tazarotene-alkyne ' +
          'ga-deeper-peel sulfur-thiolysis cysteine-disulfide sulfur-drawbacks bpo-class retinoid-teratogen oc-acne oc-steroid ' +
          'azelaic-diacid clinda-topical tet-chelation octinoxate paba-allergy salicylate-hydrolysis photostability-rank uva-uvb-coverage ' +
          'hq-moa hq-storage aha-wrinkle aha-sources ha-film ha-structure topical-ret-collagen sunblock-products', 'rs4'),
    ],
    bySub: {},
    byLecture: {},
  };
})();

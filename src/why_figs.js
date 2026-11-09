/* ==========================================================================
   REACTION FIGURES BESIDE THE WHY, PHAR 4346 DEENT: data
   --------------------------------------------------------------------------
   Louis, 2026-11-08: "for questions like this I think it would help to have
   the image of the reaction in the Hear the why as the explanation is being
   narrated." Question id -> the reaction figure of reactions.js (DIA key) and,
   for a step-through, the step the question is about (1-based; the figure's
   steps are cumulative, so the last step shows the whole scheme).
   why_ui.js shows it after the question is answered only: in the why box while
   "Hear the why" plays (and after), and as "Show the reaction" under the
   explanation. Reviewed one by one (2026-11-08): a question is mapped only when
   its stem, key or teach is about the drawn reaction itself; structure-only,
   target-only and formulation questions are left out. Dr. Sikazwe's figures
   carry Dr. Sikazwe's questions only. Checked by whyfig_check.js.
   ========================================================================== */
const WHY_FIGS = {
  // Crisaborole (slides 7, 9): 1 parent, 2 deboronation, 3 oxidation to the acid, 4 phase 2
  'S3-010': {fig: 'rx-crisaborole', step: 4, why: 'soft drug = the predictable route of the whole scheme'},
  'S3-014': {fig: 'rx-crisaborole', step: 2, why: 'spontaneous hydrolytic deboronation'},
  'S3-015': {fig: 'rx-crisaborole', step: 3, why: 'benzyl alcohol to the acid by two enzymes'},
  'S3-016': {fig: 'rx-crisaborole', step: 3, why: 'ADH then ALDH to the carboxylic acid'},
  'S3-017': {fig: 'rx-crisaborole', step: 2, why: 'deboronation limits systemic exposure'},
  'S3-019': {fig: 'rx-crisaborole', step: 2, why: 'the deboronated product has no boron'},
  'S3-021': {fig: 'rx-crisaborole', step: 4, why: 'Polleve-1: steps 3 and 4 of the scheme'},
  'S3-022': {fig: 'rx-crisaborole', step: 4, why: 'step 3, sulfation'},
  'S3-023': {fig: 'rx-crisaborole', step: 4, why: 'step 4, glucuronidation'},
  // Hydrocortisone (slide 26): 1 parent, 2 11β-HSD, 3 5β-reductase, 4 3α-HSD
  'S3-097': {fig: 'rx-hydrocortisone', step: 4, why: 'short half-life because of this metabolism'},
  'S3-099': {fig: 'rx-hydrocortisone', step: 2, why: '11β-HSD makes cortisone'},
  'S3-100': {fig: 'rx-hydrocortisone', step: 2, why: 'the 11β-OH that 11β-HSD oxidizes'},
  'S3-101': {fig: 'rx-hydrocortisone', step: 2, why: 'cortisone has the C11 ketone'},
  'S3-102': {fig: 'rx-hydrocortisone', step: 2, why: '11β-HSD oxidizes and reduces back'},
  // Vitamin D3 (slide 27): 1 7-DHC, 2 ring B opened in the skin, 3 25-hydroxylation, 4 1α-hydroxylation
  'S4-006': {fig: 'rx-vitd', step: 2, why: 'UV light opens ring B'},
  'S4-007': {fig: 'rx-vitd', step: 5, why: 'the first arrow, in the skin'},
  'S4-013': {fig: 'rx-vitd', step: 2, why: 'pre-D3 to D3, still the first arrow'},
  'S4-014': {fig: 'rx-vitd', step: 2, why: 'UVB drives the first arrow'},
  'S4-008': {fig: 'rx-vitd', step: 5, why: '25-hydroxylation in the liver'},
  'S4-009': {fig: 'rx-vitd', step: 5, why: 'the 25-hydroxylase'},
  'S4-012': {fig: 'rx-vitd', step: 3, why: '25-OH-cholecalciferol, inactive circulating form'},
  'S4-010': {fig: 'rx-vitd', step: 5, why: '1α-hydroxylation in the kidney'},
  'S4-011': {fig: 'rx-vitd', step: 4, why: '1-α-hydroxylase makes calcitriol'},
  // Anthralin (slide 17)
  'S3-054': {fig: 'rx-anthralin', why: 'spontaneous autoxidation'},
  'S3-055': {fig: 'rx-anthralin', why: 'the two radicals it forms'},
  'S3-057': {fig: 'rx-anthralin', why: 'carbon black at the end of the scheme'},
  // Psoralen + UVA (slide 18)
  'S3-064': {fig: 'rx-psoralen', why: 'intercalation and UVA crosslink'},
  'S3-065': {fig: 'rx-psoralen', why: 'UVA activates the double bonds'},
  'S3-066': {fig: 'rx-psoralen', why: 'the drug that crosslinks DNA'},
  // Folate reduction by DHFR (slide 30)
  'S4-029': {fig: 'rx-folate', why: 'methotrexate competes at DHFR'},
  'S4-030': {fig: 'rx-folate', why: 'tetrahydrofolic acid is the product blocked'},
  'S4-031': {fig: 'rx-folate', why: 'methotrexate and folic acid at DHFR'},
  // Apremilast (slide 34)
  'S4-046': {fig: 'rx-apremilast', why: 'O-demethylation then O-glucuronidation'},
  // Glycolic and salicylic acid (slide 43): 1 GA by ADH/ALDH, 2 SA glycine conjugate
  'S4-060': {fig: 'rx-hydroxyacids', step: 1, why: 'GA to the diacid by two enzymes'},
  'S4-062': {fig: 'rx-hydroxyacids', step: 2, why: 'SA glycine conjugation'},
  // Benzoyl peroxide (slide 47)
  'S4-069': {fig: 'rx-bpo', why: 'benzoic acid and the benzoyl radical'},
  'S4-070': {fig: 'rx-bpo', why: 'the peroxide bond breaks to the radical'},
  // Etretinate to acitretin (slide 50)
  'S4-078': {fig: 'rx-etretinate', why: 'CEs turn etretinate into acitretin'},
  // Tazarotene to tazarotenic acid (slides 29, 51)
  'S4-023': {fig: 'rx-tazarotene', why: 'ester hydrolysis by CE activates it'},
  'S4-024': {fig: 'rx-tazarotene', why: 'the CE arrow'},
  'S4-081': {fig: 'rx-tazarotene', why: 'the prodrug needs CE to expose the acid'},
};

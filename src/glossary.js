/* Term glosses for the questions' explanations (see the kit's template for the format).
   `cs: true` (read by gloss_ui.js, a course file): the term is glossed only where the text has it
   in the case written here. RARE carries it, because the core looks for a term without regard to
   case and "rare" is an ordinary word in 16 explanations. */
const GLOSS = [
 {k:'pilosebaceous', p:'pilosebaceous unit', d:'the hair follicle together with its sebaceous gland (Pathophys slide 30; T 407–411)',
  skip:/hair follicle (together )?with its sebaceous gland/i},
 {k:'koebner', p:'Koebner', d:'psoriasis lesions appearing at previously clear skin after trauma (Pathophys slide 24)',
  skip:/previously clear skin/i},
 {k:'filaggrin', p:'filaggrins?', d:'proteins from profilaggrin, the FLG gene product, that help form the skin barrier (Pathophys slide 15)',
  skip:/profilaggrin, which is degraded|FLG encodes/i},
 {k:'gre', p:'\\bGRE\\b', d:'glucocorticoid response element, the DNA site the glucocorticoid–receptor complex binds (PCol slide 7)',
  skip:/glucocorticoid response element/i},
 {k:'rare', p:'\\bRARE\\b', d:'retinoic acid response element, the DNA site retinoid receptors bind (PCol slide 7)',
  skip:/retinoic acid response element/i, cs:true},
 {k:'hsp90', p:'Hsp90', d:'heat shock protein 90, which holds the steroid receptor until the steroid binds (PCol slide 10)',
  skip:/chaperones? the receptor/i},
 {k:'cbg', p:'\\bCBG\\b', d:'corticosteroid-binding globulin, which carries the steroid in the blood (PCol slide 10)',
  skip:/corticosteroid-binding globulin/i},
 {k:'microcomedone', p:'microcomedone', d:'the first acne lesion, formed from a normal follicle by abnormal keratinization (Pathophys slide 34)',
  skip:/normal follicle → microcomedone|forms first/i},
];

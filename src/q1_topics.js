/* ==========================================================================
   TOPICS and the Lecture 1 questions (Dr. Smith, Thursday 10/29/2026).
   Sources: Skin-Pathophys-Students-2026.pdf (PP, slides 2-38) and
   Skin-PCol-Students-2026.pdf (PC, slides 1-15), with the lecture transcript
   (T, line numbers of DEENT_10_29_Lecture_Only_Transcript.txt). Every fact
   below is cited to a slide or marked (T).
   Left out on purpose (Dr. Smith said she would not test them): types of
   dermatitis (PP 9), types of psoriasis (PP 25), oral corticosteroid adverse
   effects (PC 13), estrogen on PP 36, the RAR/RXR drug table, specific
   topical steroid products (medicinal chemistry, Lectures 3-4 per the syllabus).
   ========================================================================== */
const TOPICS = [
 {id:'skin', name:'Skin structure and sebum', prof:'Smith', open:true,
  cite:'Lecture 1 (10/29) — Skin-Pathophys-Students-2026.pdf, slides 5–6',
  subs:[
   {id:'layers', name:'Layers and keratinocytes', cite:'slide 5'},
   {id:'sebum',  name:'Sebaceous gland and sebum', cite:'slide 6'}]},
 {id:'ad', name:'Atopic dermatitis', prof:'Smith',
  cite:'Lecture 1 (10/29) — Skin-Pathophys-Students-2026.pdf, slides 8–17',
  subs:[
   {id:'clin',  name:'Definition, epidemiology, signs, triggers', cite:'slides 8–12'},
   {id:'path',  name:'Barrier, T cells, IgE and cytokines', cite:'slides 13, 16'},
   {id:'gene',  name:'Genetics and filaggrin', cite:'slides 14–15'},
   {id:'drugs', name:'Drug classes for AD', cite:'slide 17'}]},
 {id:'pso', name:'Psoriasis', prof:'Smith',
  cite:'Lecture 1 (10/29) — Skin-Pathophys-Students-2026.pdf, slides 19–28',
  subs:[
   {id:'clin',  name:'Definition and epidemiology', cite:'slides 19–20'},
   {id:'path',  name:'Immune pathway and cell cycle', cite:'slides 21–23'},
   {id:'fact',  name:'Contributing factors, nails and joints', cite:'slides 24, 26'},
   {id:'tx',    name:'Treatment rationale and drug classes', cite:'slides 27–28'}]},
 {id:'acne', name:'Acne', prof:'Smith',
  cite:'Lecture 1 (10/29) — Skin-Pathophys-Students-2026.pdf, slides 30–37',
  subs:[
   {id:'clin',  name:'Definition and epidemiology', cite:'slides 30–31'},
   {id:'path',  name:'The four factors and P. acnes', cite:'slides 32–33'},
   {id:'casc',  name:'Lesion cascade and exacerbating factors', cite:'slides 34–35'},
   {id:'drugs', name:'Pathology-to-drug map', cite:'slides 36–37'}]},
 {id:'cmp', name:'The three diseases compared', prof:'Smith',
  cite:'Lecture 1 (10/29) — Skin-Pathophys-Students-2026.pdf, slides 19, 38',
  subs:[
   {id:'poll', name:'Her polls on the major pathology', cite:'slide 38'},
   {id:'diff', name:'What separates them', cite:'slides 10, 19–20, 31'}]},
 {id:'nrb', name:'Nuclear receptor binders', prof:'Smith',
  cite:'Lecture 1 (10/29) — Skin-PCol-Students-2026.pdf, slides 5–7',
  subs:[
   {id:'mech', name:'Direct and indirect action', cite:'slides 5–6'},
   {id:'recs', name:'Receptors and response elements', cite:'slide 7'}]},
 {id:'cs', name:'Corticosteroids', prof:'Smith',
  cite:'Lecture 1 (10/29) — Skin-PCol-Students-2026.pdf, slides 8–12',
  subs:[
   {id:'mech', name:'Uses and mechanism', cite:'slides 8–10'},
   {id:'top',  name:'Topical use', cite:'slide 11'},
   {id:'ae',   name:'Topical adverse effects', cite:'slide 12'}]},
 {id:'ret', name:'Retinoids: mechanism', prof:'Smith',
  cite:'Lecture 1 (10/29) — Skin-PCol-Students-2026.pdf, slides 14–15',
  subs:[
   {id:'rec', name:'RAR and RXR', cite:'slide 14'},
   {id:'pd',  name:'Effects in acne, psoriasis and aging', cite:'slide 15'}]},
];

const PP = 'Lecture 1 (Skin-Pathophys-Students-2026.pdf)';
const PC = 'Lecture 1 (Skin-PCol-Students-2026.pdf)';

const QUESTIONS = [
/* ---- Skin structure ----------------------------------------------------- */
{id:'L1-001', skill:'patho', prof:'Smith', tier:'new', topic:'skin', sub:'layers', concept:'stratum-corneum',
 tags:['recall'], source:'both',
 stem:'Which layer is made of flattened keratinocytes that no longer have a nucleus?',
 options:[
  {t:'Stratum corneum', correct:true, why:'The outermost layer of the epidermis; keratinocytes arrive there flat, full of keratin and without a nucleus (slide 5; T 39–48).'},
  {t:'Stratum basale', correct:false, why:'The innermost epidermal layer, where keratinocytes start out cuboidal (T 37–41).'},
  {t:'Dermis', correct:false, why:'The middle layer of the skin, with blood vessels and nerve endings, below the epidermis (T 34–37).'},
  {t:'Hypodermis', correct:false, why:'The inner layer, with blood vessels, adipose tissue and some nerve endings (T 34–36).'}],
 teach:'Keratinocytes begin cuboidal in the stratum basale, move up, flatten, make keratin and lose the nucleus. In the stratum corneum the flat cells lie in overlapping layers that keep bacteria out and fluid in (slide 5; T 39–54).',
 cite:PP+' slide 5; T 37–54'},

{id:'L1-002', skill:'patho', prof:'Smith', tier:'new', topic:'skin', sub:'layers', concept:'keratinocyte-migration',
 tags:['process'], source:'both',
 stem:'As a keratinocyte moves from the stratum basale to the stratum corneum, which change takes place?',
 options:[
  {t:'It flattens and makes keratin', correct:true, why:'Cells start cuboidal at the stratum basale and flatten as they rise, producing keratin (slide 5; T 39–46).'},
  {t:'It becomes cuboidal', correct:false, why:'Reverses the direction: cuboidal is the starting shape at the stratum basale (T 39–41).'},
  {t:'It moves down into the dermis', correct:false, why:'Keratinocytes move up toward the skin surface, not down (T 41–43).'},
  {t:'It begins to secrete sebum', correct:false, why:'Sebum comes from the sebaceous gland (slide 6), not from maturing keratinocytes.'}],
 teach:'Normal keratinization is the movement of keratinocytes upward with flattening (T 426–427). Atopic dermatitis and psoriasis are both diseases in which the cells of the outer layer do not lie flat in an orderly way (T 54–59).',
 cite:PP+' slide 5; T 39–59, 426–427'},

{id:'L1-003', skill:'patho', prof:'Smith', tier:'new', topic:'skin', sub:'sebum', concept:'sebum-composition', multi:true,
 tags:['list'], source:'slide',
 stem:'Which components make up sebum? Select all that apply.',
 options:[
  {t:'Glycerides', correct:true, why:'Listed on slide 6 as a component of sebum.'},
  {t:'Wax esters', correct:true, why:'Listed on slide 6 as a component of sebum.'},
  {t:'Cholesterol', correct:true, why:'Listed on slide 6 as a component of sebum.'},
  {t:'Free fatty acids', correct:false, why:'These are made in the follicle when P. acnes lipase breaks down sebum glycerides (slide 33), not secreted as sebum.'},
  {t:'Keratin', correct:false, why:'Keratin is made by keratinocytes as they mature (T 45–46), not by the sebaceous gland.'}],
 teach:'The sebaceous gland secretes sebum into the hair follicle; it flows up onto the skin and slows water loss. Sebum is greatest on the face, scalp, back and neck (slide 6; T 69–78).',
 cite:PP+' slides 6, 33; T 44–46, 69–78'},

{id:'L1-004', skill:'patho', prof:'Smith', tier:'new', topic:'skin', sub:'sebum', concept:'sebum-function',
 tags:['recall'], source:'both',
 stem:'What does sebum do for normal skin?',
 options:[
  {t:'Slows water loss from the skin', correct:true, why:'Slide 6: sebum "retards water loss from the skin"; she compared it to a lotion (T 72–75).'},
  {t:'Kills Propionibacterium acnes', correct:false, why:'P. acnes lipase breaks sebum glycerides into free fatty acids that irritate the follicle (slide 33); sebum does not kill it.'},
  {t:'Forms the stratum corneum', correct:false, why:'The stratum corneum is flattened keratinocytes (slide 5), not sebum.'},
  {t:'Suppresses IgE production', correct:false, why:'IgE suppression is the work of TH1 cytokines (slide 16), not sebum.'}],
 teach:'Sebum flows up the hair shaft from the sebaceous gland and coats the skin. Its output rises through puberty with hormonal change (slide 6; T 69–78).',
 cite:PP+' slide 6; T 69–78'},

{id:'L1-005', skill:'patho', prof:'Smith', tier:'new', topic:'skin', sub:'sebum', concept:'follicle-lining',
 tags:['recall'], source:'transcript',
 stem:'Which cells line the hair follicle and the sebaceous gland?',
 options:[
  {t:'Cuboidal keratinocytes', correct:true, why:'(T 60–68) The same cuboidal keratinocytes line both and move up to become the stratum corneum.'},
  {t:'Flattened corneocytes', correct:false, why:'Corneocytes are the flattened, nucleus-free cells at the top of the epidermis (T 46–48), not the lining.'},
  {t:'Dermal mast cells', correct:false, why:'Mast cells are immune cells whose growth rises with TH2 activity in AD (slide 16).'},
  {t:'Activated T cells', correct:false, why:'T cells drive inflammation in AD and psoriasis; they do not line the follicle.'}],
 teach:'Because the follicle lining is keratinocytes that must move upward, a failure of that movement inside the follicle plugs it in acne (slide 33; T 78–80, 436–447).',
 cite:PP+' slides 6, 33; T 60–80, 436–447'},

/* ---- Atopic dermatitis: clinical ---------------------------------------- */
{id:'L1-010', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'ad-primary-symptom',
 tags:['recall'], source:'slide',
 stem:'What is the primary symptom of atopic dermatitis?',
 options:[
  {t:'Pruritus', correct:true, why:'Slide 8: "Pruritus is the primary symptom"; AD is a chronic, pruritic, inflammatory skin disease.'},
  {t:'Joint pain', correct:false, why:'Joint involvement belongs to psoriatic arthritis (slide 26).'},
  {t:'Comedones', correct:false, why:'Comedones are acne lesions (slide 34).'},
  {t:'Nail pitting', correct:false, why:'Pitting is a feature of nail psoriasis (slide 26).'}],
 teach:'AD is the most common type of dermatitis and is often called eczema; she uses the word eczema to mean AD (slide 8; T 82–89).',
 cite:PP+' slide 8; T 82–89'},

{id:'L1-011', skill:'epi', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'ad-incidence',
 tags:['numbers'], source:'slide',
 stem:'In developed countries, about what share of children and of adults have atopic dermatitis?',
 options:[
  {t:'15–30% of children; 2–10% of adults', correct:true, why:'The figures on slide 10.'},
  {t:'2–10% of children; 15–30% of adults', correct:false, why:'Swaps the two ranges; AD is more common in children (slide 10).'},
  {t:'About 3% of the population', correct:false, why:'About 3% of the US population is the psoriasis figure (slide 20).'},
  {t:'About 90% over a lifetime', correct:false, why:'A lifetime prevalence near 90% is the acne figure (slide 31).'}],
 teach:'Slide 10 gives incidence in developed countries: 15% to 30% of children and 2% to 10% of adults. Prevalence has risen over recent decades in developed and developing countries.',
 cite:PP+' slides 10, 20, 31'},

{id:'L1-012', skill:'epi', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'hygiene-hypothesis',
 tags:['concept'], source:'both',
 stem:'Atopic dermatitis is less common in rural areas than in urban areas. Which explanation goes with this?',
 options:[
  {t:'Little early infection exposure raises allergy risk', correct:true, why:'The hygiene hypothesis as slide 10 states it (T 111–116).'},
  {t:'Rural children carry FLG variants less often than urban children', correct:false, why:'Slide 10 does not tie the rural difference to FLG; it gives the hygiene hypothesis.'},
  {t:'Sun exposure in rural areas suppresses TH2 cells', correct:false, why:'Not a reason given; sun exposure is named for psoriasis prevalence (slide 20).'},
  {t:'Rural diets are lower in dairy', correct:false, why:'Dairy is discussed as a possible acne factor (slide 35), not AD.'}],
 teach:'Slide 10 pairs the lower rural prevalence with the hygiene hypothesis: the absence of early childhood exposure to infectious agents increases susceptibility to allergic diseases.',
 cite:PP+' slide 10; T 111–116'},

{id:'L1-013', skill:'epi', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'ad-inheritance',
 tags:['numbers'], source:'slide',
 stem:'How much higher is the risk of atopic dermatitis in a child when both parents are atopic?',
 options:[
  {t:'Three- to fivefold', correct:true, why:'Slide 10: three- to fivefold when both parents are atopic.'},
  {t:'Two- to threefold', correct:false, why:'This is the figure for one atopic parent (slide 10).'},
  {t:'Sevenfold', correct:false, why:'A 7-fold increase is the psoriatic keratinocyte turnover figure (slide 23).'},
  {t:'81% likelihood', correct:false, why:'81% is the likelihood of acne when both parents had acne (slide 35).'}],
 teach:'Slide 10: AD risk is two- to threefold higher with one atopic parent and three- to fivefold higher if both parents are atopic. AD also travels with asthma and rhinitis, the other atopic conditions.',
 cite:PP+' slides 10, 23, 35'},

{id:'L1-014', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'ad-site-by-age',
 tags:['recall'], source:'both',
 stem:'Where is atopic dermatitis most often found in adults compared with children?',
 options:[
  {t:'Adults: hands and feet; children: face and scalp', correct:true, why:'Slide 11; (T 142–144).'},
  {t:'Adults: face and scalp; children: hands and feet', correct:false, why:'Reverses the two age groups on slide 11.'},
  {t:'Both: elbows and knees', correct:false, why:'Not a distribution given for AD on slide 11.'},
  {t:'Both: face, upper back and chest', correct:false, why:'This is where acne vulgaris is typically located (slide 30).'}],
 teach:'Slide 11 lists the signs: red to brownish-gray patches, itch that can be severe at night, small vesicles that leak and crust, thickened or cracked skin, and raw skin from scratching. Location differs with age.',
 cite:PP+' slides 11, 30; T 142–144'},

{id:'L1-015', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'ad-secondary-infection',
 tags:['reasoning'], source:'both',
 stem:'Why are secondary bacterial infections common in atopic dermatitis?',
 options:[
  {t:'Scratching breaks the skin and lets pathogens in', correct:true, why:'(T 144–148) "as you itch, you\'re breaking your skin"; slide 11 lists secondary bacterial infections as common.'},
  {t:'IgE directly suppresses neutrophils', correct:false, why:'Not a mechanism given; slide 16 ties IgE to eosinophils and mast cells.'},
  {t:'Sebum output falls in AD', correct:false, why:'Sebum is not part of the AD story on slides 13–16.'},
  {t:'Keratinocytes divide too fast to form a barrier', correct:false, why:'Rapid division is psoriasis (slide 23); the AD barrier problem is structural (slide 15).'}],
 teach:'In AD the itch drives scratching, scratching breaks the skin, and broken skin lets bacteria in. Slide 13 lists colonization with pathologic organisms as one of the features of the disease.',
 cite:PP+' slides 11, 13; T 144–148'},

{id:'L1-016', skill:'counsel', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'ad-triggers', multi:true,
 tags:['list'], source:'both',
 stem:'Which factors make atopic dermatitis worse? Select all that apply.',
 options:[
  {t:'Long, hot baths or showers', correct:true, why:'Slide 12; she advised cool baths and showers instead (T 151–152).'},
  {t:'Wool or man-made fabrics', correct:true, why:'Slide 12; (T 160–162).'},
  {t:'Rapid temperature change or low humidity', correct:true, why:'Slide 12; (T 156–158).'},
  {t:'Cotton clothing', correct:false, why:'Cotton or smooth silk is what she recommended instead of wool (T 161–162).'},
  {t:'Moisturizers with emollients', correct:false, why:'Dry skin is a trigger; moisturizers are encouraged to keep the skin hydrated (T 152–155).'}],
 teach:'Slide 12: allergens (foods, soaps, detergents, fragrances, chemicals), long hot baths, dry skin, stress, sweating, rapid temperature change or low humidity, solvents and cleaners, and wool or man-made fabrics.',
 cite:PP+' slide 12; T 149–162'},

/* ---- Atopic dermatitis: pathophysiology --------------------------------- */
{id:'L1-020', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'path', concept:'ad-initial-reaction',
 tags:['mechanism'], source:'both',
 stem:'At the start of atopic dermatitis, what kind of reaction do embedded or ingested allergens cause?',
 options:[
  {t:'T-cell mediated and IgE-independent', correct:true, why:'Slide 13: "T-cell mediated (but IgE-independent) reactions"; (T 175–180) "at first, ... this is not an IgE mediated T cell activation".'},
  {t:'IgE-mediated type 1 hypersensitivity', correct:false, why:'She said it is "not like a type 1 hypersensitivity reaction yet" (T 179–180); IgE comes later.'},
  {t:'Antibody-mediated, with no T cells involved', correct:false, why:'Slide 13 says T-cell mediated.'},
  {t:'A non-immune irritant reaction', correct:false, why:'T cells are activated (slide 13; T 175–177).'}],
 teach:'Allergens embedded in the skin, or eaten, activate T cells. The early reaction does not depend on IgE. After repeated exposure the reactions become IgE-mediated, that is, allergic (slide 13; T 173–190).',
 note:'At T 179 she said "it\'s not T cell, it\'s not IgE mediated"; slide 13 and her sentences before it (T 175–177) say T cells are activated. Keyed to the slide.',
 cite:PP+' slide 13; T 173–190'},

{id:'L1-021', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'path', concept:'ad-ige-later',
 tags:['mechanism'], source:'both',
 stem:'Once atopic dermatitis is established, how do reactions to later exposures change?',
 options:[
  {t:'They become IgE-mediated allergic reactions', correct:true, why:'(T 187–190) "with subsequent exposures ... are then IgE mediated. So then it\'s an allergic response"; slide 13: "subsequent increased IgE".'},
  {t:'They stop involving T cells', correct:false, why:'T cells keep "cranking up" as the disease proceeds (T 188–189).'},
  {t:'They shift toward TH1', correct:false, why:'AD deviates toward TH2 (slide 13).'},
  {t:'They become independent of allergens', correct:false, why:'The later reactions are allergic responses to exposures (T 189–190).'}],
 teach:'Order of events in AD: T-cell activation without IgE at first, a shift toward TH2, then IgE-mediated reactions on later exposures (slide 13).',
 cite:PP+' slide 13; T 183–190'},

{id:'L1-022', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'path', concept:'th1-th2-balance',
 tags:['recall'], source:'both',
 stem:'How does the T-helper balance in atopic dermatitis differ from that of most people?',
 options:[
  {t:'More TH2 than TH1 cells', correct:true, why:'Slide 16: "AD patients tend to have more TH2 than TH1 cells"; (T 185–187).'},
  {t:'More TH1 than TH2 cells', correct:false, why:'Most people have a few more TH1 than TH2 cells (T 185–186); AD is the reverse.'},
  {t:'Loss of TH2 cells', correct:false, why:'AD has increased TH2 activity (slide 16).'},
  {t:'Equal TH1 and TH2 cells', correct:false, why:'Slide 13 names "immune deviation toward TH2".'}],
 teach:'She noted that this imbalance develops later in the disease, not at its onset (T 258–263).',
 cite:PP+' slides 13, 16; T 183–187, 258–263'},

{id:'L1-023', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'path', concept:'th1-cytokines',
 tags:['cytokines'], source:'slide',
 stem:'Which pair of cytokines suppresses IgE production?',
 options:[
  {t:'Interferon-gamma and IL-12', correct:true, why:'Slide 16: TH1 cells produce these, and they suppress IgE production.'},
  {t:'Interleukin-5 and interleukin-13', correct:false, why:'These are TH2 cytokines that increase IgE production (slide 16).'},
  {t:'Tumor necrosis factor-alpha and IL-17', correct:false, why:'These are named as psoriasis cytokines (slide 21).'},
  {t:'Interleukin-4 and interleukin-10', correct:false, why:'These are released with increased TH2 activity (slide 16).'}],
 teach:'TH1: interferon-gamma and IL-12, which lower IgE. TH2: IL-5 and IL-13, which raise IgE; increased TH2 activity also releases IL-3, IL-4 and IL-10. She pointed out that some of these cytokines are drug targets on the drug list (slide 16; T 263–265).',
 cite:PP+' slides 16, 21; T 254–265'},

{id:'L1-024', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'path', concept:'th2-consequences', multi:true,
 tags:['list'], source:'slide',
 stem:'Increased TH2 activity in atopic dermatitis leads to which results? Select all that apply.',
 options:[
  {t:'Blood eosinophilia', correct:true, why:'Slide 16.'},
  {t:'Increased total serum IgE', correct:true, why:'Slide 16.'},
  {t:'Increased growth and development of mast cells', correct:true, why:'Slide 16.'},
  {t:'Keratinocyte hyperproliferation', correct:false, why:'This is the core change in psoriasis (slide 19), not a TH2 result in AD.'},
  {t:'Increased sebum production', correct:false, why:'Increased sebum is an acne factor driven by androgens (slide 32).'}],
 teach:'Slide 16: TH2 activity releases IL-3, IL-4, IL-5, IL-10 and IL-13, giving blood eosinophilia, raised total serum IgE and more mast cell growth. Some AD therapies antagonize these cytokines.',
 cite:PP+' slides 16, 19, 32'},

{id:'L1-025', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'gene', concept:'flg-barrier',
 tags:['mechanism'], source:'both',
 stem:'How do FLG gene variants contribute to atopic dermatitis?',
 options:[
  {t:'Little or no profilaggrin, so the skin barrier lets allergens in', correct:true, why:'Slide 15: reduced or no profilaggrin causes skin permeability barrier dysfunction, with penetration of allergens; (T 213–222).'},
  {t:'Too much filaggrin, so keratinocytes divide too fast', correct:false, why:'The variants reduce filaggrin; fast division is psoriasis (slide 23).'},
  {t:'They shift T-helper cells toward TH1', correct:false, why:'FLG is a structural-protein gene; AD shifts toward TH2 (slides 14, 16).'},
  {t:'They raise sebum output in the follicle', correct:false, why:'Sebum is part of acne, not the FLG story (slide 32).'}],
 teach:'FLG encodes profilaggrin, which is degraded to filaggrins. Filaggrins help the epidermis differentiate and form the barrier, and their breakdown products are natural moisturizers. AD patients with FLG variants have more persistent disease (slide 15).',
 note:'Slide 15 says FLG variants carry "greater risk for multiple allergies"; she said "multiple triggers" (T 222–223). No question keys on that wording.',
 cite:PP+' slide 15; T 203–223'},

{id:'L1-026', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'gene', concept:'filaggrin-moisturizer',
 tags:['recall'], source:'slide',
 stem:'What role do filaggrin breakdown products play in normal skin?',
 options:[
  {t:'They act as natural moisturizers', correct:true, why:'Slide 15: "filaggrin breakdown products are natural moisturizers".'},
  {t:'They activate T cells', correct:false, why:'T-cell activation comes from allergens (slide 13), not filaggrin products.'},
  {t:'They are the free fatty acids that irritate follicles', correct:false, why:'Those come from P. acnes lipase acting on sebum (slide 33).'},
  {t:'They bind the glucocorticoid response element', correct:false, why:'The GRE is bound by the glucocorticoid–receptor complex (PC slide 7).'}],
 teach:'FLG → profilaggrin → filaggrins → epidermal differentiation and barrier; filaggrin breakdown products moisturize (slide 15).',
 cite:PP+' slide 15'},

{id:'L1-027', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'gene', concept:'flg-penetrance',
 tags:['reasoning'], source:'both',
 stem:'About 40% of people lacking FLG do not develop atopic dermatitis. What does that indicate?',
 options:[
  {t:'Other genes or proteins also contribute to AD', correct:true, why:'Slide 15: "there is more to the AD story"; her answer to the room: other FLG variants, or another protein, may be involved (T 226–236).'},
  {t:'FLG plays no role in AD', correct:false, why:'FLG variants do cause barrier dysfunction and more persistent disease (slide 15); the gene is simply not high-penetrance.'},
  {t:'AD is caused by the environment alone', correct:false, why:'Slide 14: AD has a genetic component.'},
  {t:'FLG variants protect against AD', correct:false, why:'FLG variants increase barrier dysfunction (slide 15).'}],
 teach:'She described FLG as "not what we call a high penetrance gene" (T 235–236). The reason to know this: finding the other causes may give new drug targets (T 236–243).',
 cite:PP+' slide 15; T 223–243'},

{id:'L1-028', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'gene', concept:'ad-gene-groups',
 tags:['recall'], source:'slide',
 stem:'Which two major groups of genes are involved in atopic dermatitis?',
 options:[
  {t:'Epidermal structural proteins and immune system elements', correct:true, why:'Slide 14 names these two groups.'},
  {t:'Androgen receptors and sebaceous gland enzymes', correct:false, why:'Androgens drive acne (slide 32), not AD.'},
  {t:'Keratinocyte cell-cycle genes and lipase genes', correct:false, why:'The cell-cycle defect is psoriasis (slide 23); lipase is a P. acnes enzyme (slide 33).'},
  {t:'Glucocorticoid and retinoic acid receptors', correct:false, why:'These are drug targets (PC slide 7), not the AD gene groups.'}],
 teach:'FLG is the structural-protein example (slide 15); the immune genes regulate the TH1/TH2 balance and IgE, and had not been identified (slide 16; T 199–202).',
 cite:PP+' slides 14–16'},

{id:'L1-029', skill:'class', prof:'Smith', tier:'new', topic:'ad', sub:'drugs', concept:'ad-drug-classes', multi:true,
 tags:['list'], source:'both',
 stem:'Which drug classes are used to treat atopic dermatitis? Select all that apply.',
 options:[
  {t:'Calcineurin inhibitors', correct:true, why:'Slide 17.'},
  {t:'PDE-4 inhibitors', correct:true, why:'Slide 17.'},
  {t:'IL-4 receptor alpha / IL-13 receptor antagonists', correct:true, why:'Slide 17.'},
  {t:'JAK inhibitors', correct:true, why:'Slide 17.'},
  {t:'Keratolytics', correct:false, why:'Keratolytics are listed for acne (slide 37).'},
  {t:'TNF-alpha inhibitors', correct:false, why:'TNF-alpha inhibitors are listed for psoriasis (slide 28), not AD (slide 17).'}],
 teach:'Slide 17 lists five classes for AD: corticosteroids, calcineurin inhibitors, a PDE-4 inhibitor, IL-4 receptor alpha/IL-13 receptor antagonists and a JAK inhibitor. "These categories of medications should be on your drug list with the indication for atopic dermatitis" (T 280–281).',
 cite:PP+' slides 17, 28, 37; T 276–281'},

/* ---- Psoriasis ---------------------------------------------------------- */
{id:'L1-030', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'clin', concept:'pso-core',
 tags:['recall'], source:'both',
 stem:'What is happening to the keratinocytes in psoriasis?',
 options:[
  {t:'Hyperproliferation with incomplete differentiation', correct:true, why:'Slide 19; (T 286–294).'},
  {t:'Gaps between cells from too little filaggrin', correct:false, why:'This is the structural problem of AD (slide 15; T 294–298).'},
  {t:'They stick in the follicle and fail to shed', correct:false, why:'This is acne formation (slide 33).'},
  {t:'They die by apoptosis', correct:false, why:'Apoptosis is the effect of RXR-targeting retinoids (PC slide 14).'}],
 teach:'Psoriasis is a chronic disease of recurrent thickened, red, scaly plaques, driven by keratinocyte hyperproliferation and incomplete differentiation, and it is a T-cell-mediated systemic inflammatory disease (slide 19).',
 cite:PP+' slide 19; T 283–300'},

{id:'L1-031', skill:'tell', prof:'Smith', tier:'new', topic:'cmp', sub:'diff', concept:'ad-vs-pso-keratinocytes',
 tags:['tell'], source:'transcript',
 stem:'What separates the keratinocyte problem in atopic dermatitis from that in psoriasis?',
 options:[
  {t:'AD: barrier defect; psoriasis: fast division, poor maturation', correct:true, why:'(T 294–300) "that\'s kind of the big difference": AD is a structural problem from lack of profilaggrin and filaggrins; psoriasis is hyperproliferation and incomplete differentiation.'},
  {t:'AD: fast division, poor maturation; psoriasis: barrier defect', correct:false, why:'Reverses the two diseases.'},
  {t:'AD: excess sebum output; psoriasis: P. acnes in the follicle', correct:false, why:'Both of these are acne factors (slide 32).'},
  {t:'Both: the same keratinocyte defect in different body sites', correct:false, why:'She stressed that the keratinocyte problem differs between the two (T 299–300).'}],
 teach:'Her question to the room (T 295–297): what is going on in AD skin? Answer: a structural problem from too little profilaggrin and filaggrin. In psoriasis the cells proliferate and do not differentiate.',
 cite:PP+' slides 15, 19; T 294–300'},

{id:'L1-032', skill:'epi', prof:'Smith', tier:'new', topic:'pso', sub:'clin', concept:'pso-epi',
 tags:['numbers'], source:'slide',
 stem:'Which statement about psoriasis epidemiology is correct?',
 options:[
  {t:'About 30% of patients have a first-degree relative with psoriasis', correct:true, why:'Slide 20.'},
  {t:'It affects about 15–30% of children in developed countries', correct:false, why:'That is the AD figure (slide 10); psoriasis affects about 3% of the US population (slide 20).'},
  {t:'It affects women far more often than men', correct:false, why:'Slide 20: males and females equally.'},
  {t:'It is rare among immune-mediated inflammatory diseases', correct:false, why:'Slide 20: the most common immune-mediated inflammatory disease worldwide.'}],
 teach:'Slide 20: a genetic basis that probably needs environmental triggers; about 3% of the US population; prevalence varies with climate, sun exposure and ethnicity; males and females equally; about 30% have a first-degree relative with psoriasis.',
 note:'Onset age is not asked: slide 20 says "most patients have onset before 40" and she said most patients start "about age 40" (T 308–309).',
 cite:PP+' slides 10, 20'},

{id:'L1-033', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'path', concept:'pso-cytokines', multi:true,
 tags:['cytokines'], source:'both',
 stem:'Which cytokines do APCs, T cells and keratinocytes release in psoriasis? Select all that apply.',
 options:[
  {t:'TNF-alpha', correct:true, why:'Slide 21 and the slide 22 caption; (T 315–322).'},
  {t:'IL-23', correct:true, why:'Slide 21; (T 315–322).'},
  {t:'IL-17', correct:true, why:'Slide 21; (T 315–322).'},
  {t:'IL-5', correct:false, why:'IL-5 is a TH2 cytokine that raises IgE in AD (slide 16).'},
  {t:'IL-10', correct:false, why:'IL-10 is released with increased TH2 activity in AD (slide 16).'}],
 teach:'Psoriasis probably starts with a trauma (bug bite, skin infection) that sets off an abnormal immune response. APCs present antigen to T cells; APCs, T cells and keratinocytes release TNF-alpha, interferon-gamma, IL-23 and IL-17; the result is keratinocyte hyperproliferation and chronic systemic inflammation (slides 21–22).',
 cite:PP+' slides 16, 21–22; T 313–329'},

{id:'L1-034', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'path', concept:'pso-cell-cycle',
 tags:['numbers'], source:'both',
 stem:'In psoriatic skin, how long do keratinocytes take to divide and to mature and shed?',
 options:[
  {t:'1.5 days to divide; 4 days to mature and shed', correct:true, why:'Slide 23; (T 349–353).'},
  {t:'13 days to divide; 26 days to mature and shed', correct:false, why:'These are the normal epidermis figures (slide 23).'},
  {t:'4 days to divide; 1.5 days to mature and shed', correct:false, why:'Swaps the two psoriatic figures on slide 23.'},
  {t:'26 days to divide; 13 days to mature and shed', correct:false, why:'Swaps the two normal figures on slide 23.'}],
 teach:'Slide 23: normal keratinocytes take 13 days to divide and 26 days to mature, migrate and shed; psoriatic keratinocytes take 1.5 and 4 days, which the slide calls a 7-fold increase. T cells drive the hyperproliferation, and altered maturation gives thick, scaly plaques.',
 cite:PP+' slide 23; T 347–360'},

{id:'L1-035', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'fact', concept:'koebner',
 tags:['definition'], source:'both',
 stem:'What is the Koebner response?',
 options:[
  {t:'New lesions at previously clear skin after trauma', correct:true, why:'Slide 24; (T 363–368): friction, venipuncture, bites, surgery or pressure.'},
  {t:'A flare of acne from occlusion of the skin', correct:false, why:'That is acne mechanica (slide 35).'},
  {t:'Worsening of AD after a long hot bath', correct:false, why:'A trigger for AD (slide 12), not the Koebner response.'},
  {t:'Joint pain that comes before skin lesions', correct:false, why:'In psoriatic arthritis skin lesions usually come before joint involvement (slide 26).'}],
 teach:'Slide 24 lists contributing factors for psoriasis: climate, stress, infection and trauma. The Koebner response is lesions appearing where the skin was injured.',
 cite:PP+' slides 24, 26, 35; T 361–368'},

{id:'L1-036', skill:'adverse', prof:'Smith', tier:'new', topic:'pso', sub:'fact', concept:'pso-drug-triggers',
 tags:['drugs'], source:'both',
 stem:'Which medications are most commonly linked to worsening psoriasis?',
 options:[
  {t:'Lithium and beta blockers', correct:true, why:'Slide 24: "Most common is lithium and Beta blockers"; (T 368–369).'},
  {t:'Phenytoin and isoniazid', correct:false, why:'These are on the drug-induced acne list (slide 35).'},
  {t:'Corticosteroids and retinoids', correct:false, why:'These are psoriasis treatments (slides 27–28).'},
  {t:'Calcineurin inhibitors and JAK inhibitors', correct:false, why:'These are drug classes used for psoriasis (slide 28).'}],
 teach:'Medications are one of the contributing factors on slide 24, alongside climate, stress, infection and trauma.',
 cite:PP+' slides 24, 28, 35; T 368–369'},

{id:'L1-037', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'fact', concept:'psoriatic-arthritis',
 tags:['recall'], source:'both',
 stem:'Which feature fits psoriatic arthritis?',
 options:[
  {t:'Asymmetric joint involvement, without rheumatoid factor', correct:true, why:'Slide 26: asymmetric involvement of hands, feet and knees; lacks the rheumatoid factor elevation seen in rheumatoid arthritis; (T 379–385).'},
  {t:'Joint pain that usually comes before skin lesions', correct:false, why:'Slide 26: skin lesions usually precede joint involvement.'},
  {t:'Symmetric involvement with raised rheumatoid factor', correct:false, why:'This describes rheumatoid arthritis, which she contrasted (T 380–383).'},
  {t:'Pitting and onycholysis of the joints', correct:false, why:'Pitting, ridging, discoloration and onycholysis describe nail psoriasis (slide 26).'}],
 teach:'Slide 26 adds two types: nail psoriasis (pitting, ridging, discoloration, onycholysis) and psoriatic arthritis (asymmetric, skin first, no rheumatoid factor).',
 cite:PP+' slide 26; T 376–385'},

{id:'L1-038', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'path', concept:'pso-systemic',
 tags:['reasoning'], source:'both',
 stem:'Why must comorbidities be managed in psoriasis?',
 options:[
  {t:'Its inflammation becomes systemic', correct:true, why:'Slide 21: comorbidities are a consequence of chronic inflammation; (T 328–332) "this becomes a systemic inflammatory condition".'},
  {t:'Its drugs cause heart disease', correct:false, why:'The comorbidities follow from chronic inflammation (slide 21), not from the drugs.'},
  {t:'It spreads to others by infection', correct:false, why:'Infection is a contributing trigger (slide 24); the disease is immune-mediated, not contagious.'},
  {t:'Its plaques block drug absorption', correct:false, why:'Not a reason given on slides 21 or 27.'}],
 teach:'She named heart disease and rheumatoid arthritis as examples of conditions linked to the systemic inflammation (T 328–332). Slide 27 lists managing comorbidities as part of the treatment rationale.',
 cite:PP+' slides 21, 27; T 328–332'},

{id:'L1-039', skill:'tell', prof:'Smith', tier:'new', topic:'pso', sub:'tx', concept:'pso-rationale',
 tags:['tell'], source:'slide',
 stem:'In the psoriasis treatment rationale, retinoids are used for which purpose?',
 options:[
  {t:'To affect keratinocyte turnover', correct:true, why:'Slide 27: "Use medications that affect cell turnover (retinoids)".'},
  {t:'To modulate the abnormal immune response', correct:false, why:'Slide 27 names topical corticosteroids and biologic response modifiers for this.'},
  {t:'To reduce sebum production', correct:false, why:'Sebum is an acne target (slide 36).'},
  {t:'To replace missing filaggrin', correct:false, why:'Filaggrin is the AD barrier protein (slide 15); no drug on these slides replaces it.'}],
 teach:'Slide 27: treatment follows the pathophysiology. Immune-modulating agents (topical corticosteroids, biologic response modifiers) for the immune response, retinoids for cell turnover, plus managing comorbidities, patient-specific therapy and quality of life.',
 cite:PP+' slides 15, 27, 36'},

/* ---- Acne --------------------------------------------------------------- */
{id:'L1-040', skill:'patho', prof:'Smith', tier:'new', topic:'acne', sub:'clin', concept:'acne-definition',
 tags:['definition'], source:'slide',
 stem:'Acne vulgaris is a disease of which structure?',
 options:[
  {t:'The pilosebaceous unit', correct:true, why:'Slide 30: a common, self-limiting disease of the pilosebaceous units, typically on the face, upper back and chest.'},
  {t:'The stratum basale', correct:false, why:'The stratum basale is where keratinocytes start (slide 5); acne begins in the follicle.'},
  {t:'The dermal blood vessels', correct:false, why:'Not the site named on slide 30.'},
  {t:'The hypodermis', correct:false, why:'The hypodermis is the inner fat-containing layer (slide 5).'}],
 teach:'The pilosebaceous unit is the hair follicle together with its sebaceous gland (T 407–411).',
 cite:PP+' slides 5, 30; T 407–411'},

{id:'L1-041', skill:'epi', prof:'Smith', tier:'new', topic:'acne', sub:'clin', concept:'acne-epi',
 tags:['numbers'], source:'slide',
 stem:'Which statement about acne epidemiology is correct?',
 options:[
  {t:'Lifetime prevalence approaches 90%', correct:true, why:'Slide 31.'},
  {t:'It usually begins in the mid-twenties', correct:false, why:'Slide 31: usual onset is at puberty; most patients have symptoms into their mid-twenties.'},
  {t:'Boys have milder acne than girls during puberty', correct:false, why:'Slide 31: in puberty acne is often more severe in boys.'},
  {t:'It is uncommon in dermatology practice', correct:false, why:'Slide 31: the most common disease treated by dermatologists.'}],
 teach:'Slide 31: acne is triggered with the start of androgen production, usually at puberty, with the highest incidence in adolescents. Women often have more severe forms than men in adulthood.',
 cite:PP+' slide 31'},

{id:'L1-042', skill:'patho', prof:'Smith', tier:'new', topic:'acne', sub:'path', concept:'acne-four-factors', multi:true,
 tags:['list'], source:'both',
 stem:'Increased androgen production leads to which factors in acne? Select all that apply.',
 options:[
  {t:'Increased sebum production', correct:true, why:'Slide 32.'},
  {t:'Altered keratinization in the follicle duct', correct:true, why:'Slide 32: alteration in the keratinization process of the ductal epidermis.'},
  {t:'Colonization of the duct with Propionibacterium acnes', correct:true, why:'Slide 32.'},
  {t:'Inflammation', correct:true, why:'Slide 32: production of inflammation with release of inflammatory mediators.'},
  {t:'Skin barrier dysfunction from FLG variants', correct:false, why:'This is the AD mechanism (slide 15).'}],
 teach:'Slide 32 names four factors set off by androgens. In acne the keratinization is altered: the follicle cells stick together and fail to move up and shed (slide 33; T 426–427, 559–573).',
 note:'Slide 32 words the second factor as "alteration in the keratinization process and hyperproliferation of ductal epidermis". In class she said keratinocyte hyperproliferation "is not one of the components of acne. This is a feature of psoriasis" (T 573–577). The option is worded without "hyperproliferation"; the conflict is flagged in reviews/OPEN_QUESTIONS.md.',
 cite:PP+' slides 15, 32; T 422–436'},

{id:'L1-043', skill:'patho', prof:'Smith', tier:'new', topic:'acne', sub:'path', concept:'pacnes-lipase',
 tags:['mechanism'], source:'slide',
 stem:'How does Propionibacterium acnes produce inflammation in the follicle?',
 options:[
  {t:'Its lipase makes irritating free fatty acids from sebum', correct:true, why:'Slide 33.'},
  {t:'It degrades profilaggrin in the follicle epidermis', correct:false, why:'Profilaggrin is the AD barrier protein (slide 15).'},
  {t:'It makes keratinocytes release IL-23 and IL-17', correct:false, why:'These are the psoriasis cytokines (slide 21).'},
  {t:'It raises androgen production in the gland', correct:false, why:'Androgens act upstream and lead to colonization (slide 32), not the other way round.'}],
 teach:'Slide 33: P. acnes produces lipase, which breaks down glyceride from sebum into free fatty acids; these irritate the follicular walls and have an antigenic effect.',
 note:'She said "glycerin" (T 448); slide 33 says glyceride. Keyed to the slide.',
 cite:PP+' slides 15, 21, 32–33; T 447–452'},

{id:'L1-044', skill:'patho', prof:'Smith', tier:'new', topic:'acne', sub:'path', concept:'acne-plug',
 tags:['mechanism'], source:'both',
 stem:'What plugs the follicle channel in acne?',
 options:[
  {t:'Sticky skin cells with sebum', correct:true, why:'Slide 33: the channel is plugged by skin cells and sebum; (T 436–447) the sebum becomes stickier with androgens.'},
  {t:'Eosinophils and mast cells from the dermis', correct:false, why:'These rise with TH2 activity in AD (slide 16).'},
  {t:'Free fatty acids from sebum', correct:false, why:'Free fatty acids irritate the follicle wall (slide 33); the plug is cells and sebum.'},
  {t:'Filaggrin breakdown products in the duct', correct:false, why:'These are natural moisturizers in the epidermis (slide 15).'}],
 teach:'Slide 33: skin cells stick together and are not shed, the channel is plugged by those cells and sebum, and the normal flow of sebum is blocked.',
 cite:PP+' slide 33; T 436–447'},

{id:'L1-045', skill:'patho', prof:'Smith', tier:'new', topic:'acne', sub:'casc', concept:'acne-cascade-first',
 tags:['figure'], source:'slide',
 stem:'In the cascade of acne lesions, which lesion forms first from a normal follicle, through abnormal keratinization?',
 options:[
  {t:'Microcomedone', correct:true, why:'Slide 34: normal follicle → (abnormal keratinization) → microcomedone.'},
  {t:'Closed comedone', correct:false, why:'Slide 34: the closed comedone follows the microcomedone, with increased sebum production.'},
  {t:'Papule', correct:false, why:'Slide 34: a papule comes from a closed comedone.'},
  {t:'Nodule or cyst', correct:false, why:'Slide 34: the last step, after a foreign body response to a papule.'}],
 teach:'Slide 34: normal follicle → microcomedone → closed comedone; a closed comedone may open to an open comedone (dilated pore) or become a papule; a papule may become a pustule or, through a foreign body response, a nodule or cyst.',
 cite:PP+' slide 34'},

{id:'L1-046', skill:'patho', prof:'Smith', tier:'new', topic:'acne', sub:'casc', concept:'acne-nodule',
 tags:['figure'], source:'both',
 stem:'Which acne lesion results from a foreign body response to a papule and does not drain?',
 options:[
  {t:'Nodule or cyst', correct:true, why:'Slide 34; (T 467–470) "It doesn\'t open, it doesn\'t drain, it\'s permanent there".'},
  {t:'Pustule', correct:false, why:'A pustule fills with pus and, if it opens, leaves a dilated pore (slide 34; T 464–466).'},
  {t:'Open comedone', correct:false, why:'An open comedone is a closed comedone that has opened (slide 34).'},
  {t:'Microcomedone', correct:false, why:'The first lesion, from abnormal keratinization (slide 34).'}],
 teach:'Slide 34 places the nodule or cyst at the end of the cascade, after a foreign body response to a closed papule.',
 cite:PP+' slide 34; T 462–470'},

{id:'L1-047', skill:'tell', prof:'Smith', tier:'new', topic:'acne', sub:'casc', concept:'acne-exacerbating-types',
 tags:['tell'], source:'slide',
 stem:'A football player develops acne where the helmet rests on the skin. Which type of acne is this?',
 options:[
  {t:'Acne mechanica', correct:true, why:'Slide 35: anything that occludes the skin or irritates it; (T 476–480) she gave the helmet as the example.'},
  {t:'Acne cosmetica', correct:false, why:'Slide 35: from comedogenic oils in cosmetics.'},
  {t:'Acne medicamentosa', correct:false, why:'Slide 35: drug-induced acne.'},
  {t:'Occupational acne', correct:false, why:'Slide 35: excessive dirt, vaporized cooking oil, some industrial chemicals.'}],
 teach:'Slide 35 groups exacerbating factors: humidity and sweating, acne mechanica, occupational acne, acne cosmetica, stress, hormones, drug-induced acne, genetics and possibly a high-glycemic diet or dairy.',
 cite:PP+' slide 35; T 474–490'},

{id:'L1-048', skill:'epi', prof:'Smith', tier:'new', topic:'acne', sub:'casc', concept:'acne-genetics',
 tags:['numbers'], source:'slide',
 stem:'If both parents had acne, what is the likelihood that their child has acne?',
 options:[
  {t:'81%', correct:true, why:'Slide 35: "If both parents had acne, there is an 81% likelihood of having acne".'},
  {t:'30%', correct:false, why:'About 30% of psoriasis patients have a first-degree relative with psoriasis (slide 20).'},
  {t:'40%', correct:false, why:'About 40% of people lacking FLG do not develop AD (slide 15).'},
  {t:'90%', correct:false, why:'Lifetime prevalence of acne approaches 90% (slide 31).'}],
 teach:'Slide 35 lists genetics among the exacerbating factors for acne.',
 cite:PP+' slides 15, 20, 31, 35'},

{id:'L1-049', skill:'class', prof:'Smith', tier:'new', topic:'acne', sub:'drugs', concept:'acne-drug-map', multi:true,
 tags:['figure'], source:'slide',
 stem:'In the acne pathogenesis figure, which drugs act on both P. acnes proliferation and abnormal keratinization? Select all that apply.',
 options:[
  {t:'Benzoyl peroxide', correct:true, why:'Slide 36 lists benzoyl peroxide in both the P. acnes box and the keratinization box.'},
  {t:'Isotretinoin', correct:true, why:'Slide 36 lists isotretinoin in the P. acnes, keratinization and sebum boxes.'},
  {t:'Salicylic acid', correct:false, why:'Slide 36 lists salicylic acid only against abnormal keratinization.'},
  {t:'Intralesional corticosteroids', correct:false, why:'Slide 36 lists these only against the inflammatory response.'}],
 teach:'"This is a good slide to help orient you on the different pathological components of acne and then the class of medications that we use to go after each of those components" (T 509–510). P. acnes: benzoyl peroxide, topical/oral antibiotics, isotretinoin. Keratinization: salicylic acid, benzoyl peroxide, topical retinoids, isotretinoin. Inflammation: corticosteroids, topical/oral antibiotics. Sebum: antiandrogens, isotretinoin, antibiotics, corticosteroids, estrogens (slide 36).',
 note:'Estrogen appears on slide 36, but she said "I am not covering estrogen as one of our medications" (T 535–536); no question asks about it.',
 cite:PP+' slide 36; T 496–512'},

{id:'L1-050', skill:'class', prof:'Smith', tier:'new', topic:'acne', sub:'drugs', concept:'salicylic-target', dupOf:'L1-049',
 tags:['figure'], source:'slide',
 stem:'In the acne pathogenesis figure, salicylic acid is placed against which component?',
 options:[
  {t:'Abnormal keratinization', correct:true, why:'Slide 36.'},
  {t:'P. acnes proliferation', correct:false, why:'Slide 36 puts benzoyl peroxide, antibiotics and isotretinoin there, not salicylic acid.'},
  {t:'Abnormal sebum', correct:false, why:'Slide 36 puts antiandrogens, isotretinoin, antibiotics and corticosteroids there.'},
  {t:'The inflammatory response', correct:false, why:'Slide 36 puts corticosteroids and antibiotics there.'}],
 teach:'Salicylic acid appears once in the figure, with the agents that act on abnormal keratinization (slide 36).',
 cite:PP+' slide 36'},

{id:'L1-051', skill:'class', prof:'Smith', tier:'new', topic:'acne', sub:'drugs', concept:'acne-drug-classes', multi:true,
 tags:['list'], source:'slide',
 stem:'Which drug classes are used to treat acne? Select all that apply.',
 options:[
  {t:'Keratolytics', correct:true, why:'Slide 37.'},
  {t:'Antibiotics', correct:true, why:'Slide 37.'},
  {t:'Nuclear receptor binders', correct:true, why:'Slide 37.'},
  {t:'Antiandrogens', correct:true, why:'Slide 37.'},
  {t:'Calcineurin inhibitors', correct:false, why:'Listed for AD (slide 17) and psoriasis (slide 28), not acne.'}],
 teach:'Slide 37 lists four classes for acne. She grouped the drugs by pharmacological class across all three diseases because many cross over (T 594–606).',
 cite:PP+' slides 17, 28, 37'},

/* ---- The three diseases compared: her polls (verbatim) ------------------ */
{id:'L1-060', skill:'tell', prof:'Smith', tier:'new', topic:'cmp', sub:'poll', concept:'sentinel-ad',
 tags:['poll','verbatim'], source:'both',
 stem:'What is one of the major pathologies of atopic dermatitis?',
 options:[
  {t:'Skin barrier dysfunction', correct:true, why:'Her PollEv answer (slide 38; T 516–529): the cells do not lie flat and leave gaps big enough for allergens.'},
  {t:'Keratinocyte hyperproliferation', correct:false, why:'The major pathology of psoriasis (slide 38 poll 2; T 543–553).'},
  {t:'Excess sebum production', correct:false, why:'The major pathology of acne (slide 38 poll 3; T 530).'}],
 teach:'She called these three "the sentinel pathologies of the three different skin conditions" (T 517–518): AD, barrier dysfunction; psoriasis, keratinocyte hyperproliferation; acne, excess sebum.',
 quote:'PollEv, 10/29, slide 38',
 cite:PP+' slide 38; T 516–529'},

{id:'L1-061', skill:'tell', prof:'Smith', tier:'new', topic:'cmp', sub:'poll', concept:'sentinel-pso', dupOf:'L1-030',
 tags:['poll','verbatim'], source:'both',
 stem:'What is one of the major pathologies of psoriasis?',
 options:[
  {t:'Keratinocyte hyperproliferation', correct:true, why:'Her PollEv answer (slide 38; T 534–553): trauma sets off an immune response, T cells and keratinocytes release cytokines, and keratinocytes proliferate too fast.'},
  {t:'Skin barrier dysfunction', correct:false, why:'The major pathology of AD (slide 38 poll 1).'},
  {t:'Excess sebum production', correct:false, why:'The major pathology of acne (slide 38 poll 3).'}],
 teach:'Follow-up she asked the room: "So why does that hyperproliferation occur?" (T 543–544). Trauma, an out-of-control immune response, and cytokines from T cells and keratinocytes.',
 quote:'PollEv, 10/29, slide 38',
 cite:PP+' slide 38; T 534–553'},

/* L1-062 (her acne poll) is held out of scored practice: slide 32 lists
   "hyperproliferation of ductal epidermis" as an acne factor, which makes the
   distractor "Keratinocyte hyperproliferation" defensible from the slide, while
   in class she ruled it out (T 573-577). Flagged in reviews/OPEN_QUESTIONS.md;
   the poll is kept verbatim in STYLE.md. */

/* ---- Nuclear receptor binders -------------------------------------------- */
{id:'L1-070', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'mech', concept:'nrb-common-mech',
 tags:['mechanism'], source:'both',
 stem:'What mechanism do nuclear receptor binders share?',
 options:[
  {t:'They change DNA transcription', correct:true, why:'PC slide 5: nuclear receptors modulate protein synthesis directly or indirectly by inhibiting or promoting DNA transcription; (T 639–645).'},
  {t:'They block a cell-surface receptor', correct:false, why:'Their receptors are inside the cell; the drug crosses the membrane first (T 650–660).'},
  {t:'They inhibit a membrane enzyme', correct:false, why:'Not the mechanism on PC slide 5.'},
  {t:'They kill P. acnes', correct:false, why:'That is an antibacterial action (PP slide 36), not a receptor mechanism.'}],
 teach:'The nuclear receptor binders for DEENT act on three receptors: glucocorticoid, retinoic acid (RAR/RXR) and vitamin D (PC slide 7; T 748–764). Their effects come through gene expression, which "can go both ways" (T 746).',
 cite:PC+' slides 5, 7; T 639–660, 746–764'},

{id:'L1-071', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'mech', concept:'nrb-direct',
 tags:['mechanism'], source:'both',
 stem:'In the direct mechanism, what does the glucocorticoid–receptor complex do?',
 options:[
  {t:'Binds a response element on DNA', correct:true, why:'PC slide 6; (T 680–683) "either enhance the expression of anti-inflammatory proteins, or decrease the expression of inflammatory proteins".'},
  {t:'Binds NF-kB or AP-1 instead', correct:false, why:'That is the indirect mechanism (PC slides 5–6).'},
  {t:'Binds Hsp90 in the nucleus', correct:false, why:'Hsp90 chaperones the receptor and comes off when the steroid binds (PC slide 10; T 800–804).'},
  {t:'Stays in the cytoplasm', correct:false, why:'The complex moves into the nucleus (T 660–670).'}],
 teach:'"The points you wanna remember are glucocorticoids, whether they\'re endogenous or whether they are drugs, they will bind to their nuclear receptor, move down into the gene, and either enhance the expression of anti-inflammatory proteins, or decrease the expression of inflammatory proteins" (T 680–683).',
 cite:PC+' slides 6–7; T 650–683'},

{id:'L1-072', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'mech', concept:'nrb-indirect',
 tags:['mechanism'], source:'both',
 stem:'In the indirect mechanism, how does a drug–receptor complex lower inflammatory gene expression?',
 options:[
  {t:'It holds NF-kB or AP-1 off the DNA', correct:true, why:'PC slide 5: the complex binds a transcription factor, preventing it from binding to DNA; PC slide 6 shows NF-kB and AP-1; (T 723–746).'},
  {t:'Two complexes bind a response element', correct:false, why:'That is the direct mechanism (PC slide 5).'},
  {t:'It degrades the cytokine outside the cell', correct:false, why:'The cytokine still activates the transcription factor; the complex blocks the factor (T 723–735).'},
  {t:'It blocks Hsp90 from leaving the receptor', correct:false, why:'Hsp90 comes off when the steroid binds (PC slide 10; T 800–804).'}],
 teach:'Cytokines activate NF-kB and AP-1, which act at the TRE to drive inflammatory genes. The drug–receptor complex binds these factors so they cannot (PC slides 5–6; T 723–746). "It\'s OK just to learn it to this depth" (T 740–741).',
 cite:PC+' slides 5–6, 10; T 723–746'},

{id:'L1-073', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'mech', concept:'nrb-complex-count',
 tags:['tell'], source:'slide',
 stem:'How many drug–receptor complexes does each nuclear receptor mechanism require?',
 options:[
  {t:'Direct: two; indirect: one', correct:true, why:'PC slide 5.'},
  {t:'Direct: one; indirect: two', correct:false, why:'Reverses the two mechanisms on PC slide 5.'},
  {t:'Both: one', correct:false, why:'PC slide 5: the direct mechanism requires two complexes.'},
  {t:'Both: two', correct:false, why:'PC slide 5: the indirect mechanism requires only one complex.'}],
 teach:'In the direct mechanism two complexes dimerize on a response element such as the GRE; in the indirect mechanism one complex binds a transcription factor (PC slide 5).',
 note:'This is on the slide; she said she would return to these bullets after the figure (T 647–649), and the transcript does not show her reading them.',
 cite:PC+' slide 5'},

{id:'L1-074', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'recs', concept:'rare',
 tags:['recall'], source:'slide',
 stem:'Which DNA binding site is paired with the retinoid receptors?',
 options:[
  {t:'Retinoic acid response element', correct:true, why:'PC slides 7 and 14.'},
  {t:'Glucocorticoid response element', correct:false, why:'The GRE is the site for the glucocorticoid receptor (PC slide 7).'},
  {t:'Nuclear factor kappa B site', correct:false, why:'NF-kB is a transcription factor that the indirect mechanism blocks (PC slide 7).'},
  {t:'Filaggrin gene promoter', correct:false, why:'FLG is the AD barrier gene (PP slide 15), not a retinoid response element.'}],
 teach:'PC slide 7 pairs each DEENT nuclear receptor with its DNA binding site: glucocorticoid receptor with the GRE, RAR/RXR with the RARE. The transcription factors that work with them are NF-kB and AP-1.',
 cite:PC+' slides 7, 14'},

{id:'L1-075', skill:'mech', prof:'Smith', tier:'new', topic:'nrb', sub:'recs', concept:'nrb-tfs',
 tags:['recall'], source:'slide',
 stem:'Which transcription factors work with the DEENT nuclear receptors?',
 options:[
  {t:'NF-kB and AP-1', correct:true, why:'PC slides 6–7.'},
  {t:'Glucocorticoid and vitamin D receptors', correct:false, why:'These are receptors, not transcription factors (PC slide 7).'},
  {t:'FLG and profilaggrin', correct:false, why:'These are the AD barrier gene and its protein (PP slide 15).'},
  {t:'CBG and Hsp90', correct:false, why:'These carry the steroid and chaperone the receptor (PC slide 10).'}],
 teach:'"I want to be sure you know that we have glucocorticoid receptors. We\'ve got retinoic acid receptors, and we\'ve got vitamin D receptors" (T 750–751). NF-kB and AP-1 are the transcription factors (PC slide 7).',
 cite:PC+' slides 6–7, 10; T 748–761'},

/* ---- Corticosteroids ----------------------------------------------------- */
{id:'L1-080', skill:'mech', prof:'Smith', tier:'new', topic:'cs', sub:'mech', concept:'cs-types',
 tags:['recall'], source:'both',
 stem:'The adrenal cortex makes two types of corticosteroid. Which type is the focus in dermatology?',
 options:[
  {t:'Glucocorticoids', correct:true, why:'PC slide 8 names glucocorticoids and mineralocorticoids; (T 769–773) dermatology focuses on glucocorticoids.'},
  {t:'Mineralocorticoids', correct:false, why:'The other type on PC slide 8; she corrected herself to glucocorticoids (T 772).'},
  {t:'Androgens', correct:false, why:'Androgens drive acne (PP slide 32); they are not the corticosteroid types on PC slide 8.'},
  {t:'Retinoids', correct:false, why:'Retinoids are vitamin A–like nuclear receptor binders (PC slide 14).'}],
 teach:'PC slide 8: endogenous corticosteroids affect carbohydrate, lipid and protein metabolism, fluid and electrolyte balance, and the function of the cardiovascular, kidney, muscle, endocrine, nervous and immune systems.',
 cite:PC+' slide 8; T 769–776'},

{id:'L1-081', skill:'class', prof:'Smith', tier:'new', topic:'cs', sub:'mech', concept:'cs-uses', multi:true,
 tags:['list'], source:'slide',
 stem:'Which are therapeutic uses of corticosteroids? Select all that apply.',
 options:[
  {t:'Autoimmune diseases', correct:true, why:'PC slide 9.'},
  {t:'Allergic reactions', correct:true, why:'PC slide 9.'},
  {t:'Transplant rejection, with other immunosuppressants', correct:true, why:'PC slide 9.'},
  {t:'Blocking a first-dose cytokine storm', correct:true, why:'PC slide 9.'},
  {t:'Killing P. acnes in the follicle', correct:false, why:'Antibacterial action on P. acnes belongs to benzoyl peroxide, antibiotics and isotretinoin (PP slide 36).'}],
 teach:'PC slide 9 lists four therapeutic uses. In the skin the reason is immunosuppression (PC slide 11).',
 note:'She said "first dose cytokine syndrome" (T 782); PC slide 9 says "first-dose cytokine storm". The option uses the slide wording.',
 cite:PC+' slides 9, 11; PP slide 36'},

{id:'L1-082', skill:'mech', prof:'Smith', tier:'new', topic:'cs', sub:'mech', concept:'hsp90-cbg',
 tags:['mechanism'], source:'both',
 stem:'What does Hsp90 do in corticosteroid signaling?',
 options:[
  {t:'Holds the receptor until the steroid binds', correct:true, why:'(T 800–804) "those heat shock protein chaperones only come off when the steroid binds"; PC slide 10 (Katzung Fig 39-4).'},
  {t:'Carries the steroid in the bloodstream to the cell', correct:false, why:'Corticosteroid-binding globulin (CBG) carries the steroid in the circulation (T 786–790, 800–801).'},
  {t:'Binds the GRE in place of the steroid receptor', correct:false, why:'The steroid–receptor complex binds the GRE (PC slides 6, 10).'},
  {t:'Breaks down the steroid inside the target cell', correct:false, why:'Not its role in the figure; it keeps the receptor from acting at random (T 790–796).'}],
 teach:'"Steroids are carried around by the cortical binding globulin. And then we\'ve got some things that help prevent our nuclear receptors from going nuts, and those heat shock protein chaperones only come off when the steroid binds" (T 800–804). The complex then dimerizes, enters the nucleus and binds the GRE.',
 cite:PC+' slide 10; T 783–806'},

{id:'L1-083', skill:'mech', prof:'Smith', tier:'new', topic:'cs', sub:'mech', concept:'hsp90-cbg', dupOf:'L1-082',
 tags:['mechanism'], source:'both',
 stem:'Which protein carries corticosteroids in the circulation?',
 options:[
  {t:'Corticosteroid-binding globulin', correct:true, why:'PC slide 10 (Katzung Fig 39-4); (T 786–790, 800–801).'},
  {t:'Heat shock protein 90', correct:false, why:'Hsp90 chaperones the receptor inside the cell (T 790–804).'},
  {t:'Profilaggrin', correct:false, why:'Profilaggrin is the FLG gene product in the epidermis (PP slide 15).'},
  {t:'NF-kB', correct:false, why:'NF-kB is a transcription factor (PC slide 7).'}],
 teach:'In the blood, CBG carries the steroid; in the cell, Hsp90 holds the receptor until the steroid binds (PC slide 10; T 800–804).',
 cite:PC+' slide 10; T 783–806'},

{id:'L1-084', skill:'counsel', prof:'Smith', tier:'new', topic:'cs', sub:'top', concept:'cs-face-potency',
 tags:['counseling'], source:'both',
 stem:'Which topical corticosteroid potency is appropriate for the face?',
 options:[
  {t:'Low potency', correct:true, why:'PC slide 11; (T 818–819) "You don\'t want to use anything more potent than a low potency product on the face".'},
  {t:'Medium potency', correct:false, why:'PC slide 11 gives medium potency for the body.'},
  {t:'High potency', correct:false, why:'High potency is for short-term exacerbations, not the face (PC slide 11).'},
  {t:'Any potency on occluded skin', correct:false, why:'Occlusion increases absorption and should be avoided (T 829–834).'}],
 teach:'PC slide 11: match the product to the severity and the site. Low potency (hydrocortisone 1%) for the face, medium (betamethasone valerate 0.1%) for the body.',
 cite:PC+' slide 11; T 815–821'},

{id:'L1-085', skill:'counsel', prof:'Smith', tier:'new', topic:'cs', sub:'top', concept:'cs-maintenance',
 tags:['counseling'], source:'both',
 stem:'Which topical corticosteroid potency is used for long-duration maintenance therapy?',
 options:[
  {t:'Low potency', correct:true, why:'PC slide 11; (T 821–823) low potency is the only class for long-duration maintenance.'},
  {t:'Medium potency', correct:false, why:'Mid-strength products are for short-term management of exacerbations (PC slide 11).'},
  {t:'High potency', correct:false, why:'High potency is for short-term management of exacerbations (PC slide 11).'},
  {t:'Whichever potency cleared the flare', correct:false, why:'Slide 11 separates maintenance (low) from exacerbations (mid and high).'}],
 teach:'Low potency for maintenance; mid-strength and high potency for short courses during exacerbations (PC slide 11).',
 cite:PC+' slide 11; T 821–823'},

{id:'L1-086', skill:'counsel', prof:'Smith', tier:'new', topic:'cs', sub:'top', concept:'cs-occlusion',
 tags:['counseling'], source:'both',
 stem:'Why should a topical corticosteroid not be applied to occluded or abraded skin?',
 options:[
  {t:'Too much reaches the systemic circulation', correct:true, why:'(T 829–834) "you\'ll get too much absorption into the systemic circulation"; PC slide 11: hydration or occlusion alters absorption.'},
  {t:'The steroid is inactivated by sweat', correct:false, why:'Not a reason given; the concern is more absorption, not less activity.'},
  {t:'The vehicle cannot penetrate', correct:false, why:'The opposite: occluded or broken skin lets more drug through (T 826–834).'},
  {t:'It raises sebum production', correct:false, why:'Sebum is not part of the steroid absorption discussion (PC slide 11).'}],
 teach:'The goal in AD and psoriasis is a local effect in the skin. Wet or occluded skin, or a change of vehicle, alters absorption (PC slide 11; T 826–834).',
 cite:PC+' slide 11; T 826–834'},

{id:'L1-087', skill:'adverse', prof:'Smith', tier:'new', topic:'cs', sub:'ae', concept:'cs-local-ae', multi:true,
 tags:['list'], source:'slide',
 stem:'Which are local adverse effects of topical corticosteroids? Select all that apply.',
 options:[
  {t:'Striae and skin atrophy', correct:true, why:'PC slide 12, local adverse effects.'},
  {t:'Perioral dermatitis', correct:true, why:'PC slide 12, local adverse effects.'},
  {t:'Telangiectasias', correct:true, why:'PC slide 12, local adverse effects.'},
  {t:'Hypothalamic-pituitary-adrenal axis suppression', correct:false, why:'PC slide 12 lists this as a systemic adverse effect.'},
  {t:'Growth retardation in children', correct:false, why:'PC slide 12 lists this as a systemic adverse effect.'}],
 teach:'PC slide 12, local: striae and atrophy, perioral dermatitis, acne, rosacea, telangiectasias, purpura, focal hypertrichosis, allergic contact dermatitis (often from the vehicle). Systemic: HPA axis suppression, infections, hyperglycemia, cataracts, glaucoma, growth retardation in children.',
 cite:PC+' slide 12; T 834–857'},

{id:'L1-088', skill:'adverse', prof:'Smith', tier:'new', topic:'cs', sub:'ae', concept:'cs-low-potency-systemic',
 tags:['statement'], source:'both',
 stem:'Which statement about systemic adverse effects of topical corticosteroids is correct?',
 options:[
  {t:'They can occur with low-potency products', correct:true, why:'PC slide 12; (T 861–865) "don\'t think that just because it\'s low potency, you couldn\'t end up with systemic effects", since low potency is used long-term.'},
  {t:'They are limited to high-potency products', correct:false, why:'She warned about low-potency products as well (T 861–865).'},
  {t:'They do not depend on body surface area covered', correct:false, why:'PC slide 12: risk relates to the percentage of body surface area covered.'},
  {t:'They do not depend on the duration of use', correct:false, why:'PC slide 12: risk relates to duration of use.'}],
 teach:'PC slide 12: systemic risk relates to potency, site of application, occlusiveness, percentage of body surface area and duration of use.',
 cite:PC+' slide 12; T 847–865'},

{id:'L1-089', skill:'adverse', prof:'Smith', tier:'new', topic:'cs', sub:'ae', concept:'cs-infection',
 tags:['reasoning'], source:'both',
 stem:'Why do topical corticosteroids raise the risk of infection?',
 options:[
  {t:'They are immunosuppressive', correct:true, why:'Her question to the room, answered "these drugs are immunosuppressive" (T 852–854); PC slide 12 lists infections.'},
  {t:'They strip sebum from the skin', correct:false, why:'Not a mechanism given on PC slide 12.'},
  {t:'They feed P. acnes', correct:false, why:'P. acnes feeds on sebum glycerides (PP slide 33), not steroids.'},
  {t:'They raise IgE levels', correct:false, why:'Glucocorticoids decrease inflammatory protein expression (T 680–683).'}],
 teach:'The purpose of topical steroids in AD and psoriasis is to suppress the immune system in the skin (T 873–879); the same immunosuppression raises the risk of infection (PC slide 12; T 852–854).',
 cite:PC+' slides 11–12; T 852–854, 873–879'},

/* ---- Retinoids: mechanism ------------------------------------------------ */
{id:'L1-090', skill:'tell', prof:'Smith', tier:'new', topic:'ret', sub:'rec', concept:'rar-vs-rxr',
 tags:['tell'], source:'both',
 stem:'Retinoids that act mainly through RARs are used for acne, psoriasis and photoaging. Why?',
 options:[
  {t:'They mainly affect differentiation and growth', correct:true, why:'PC slide 14; (T 897–899) "drugs binding up the RARs affect genes that are driving cellular differentiation and proliferation".'},
  {t:'They mainly induce apoptosis', correct:false, why:'PC slide 14: RXR-targeting retinoids predominantly induce apoptosis.'},
  {t:'They mainly block IgE production', correct:false, why:'IgE is regulated by TH1 and TH2 cytokines (PP slide 16).'},
  {t:'They mainly bind the GRE on DNA', correct:false, why:'Retinoid receptors bind the RARE (PC slides 7, 14).'}],
 teach:'PC slide 14: RAR-targeting retinoids treat disorders of differentiation and proliferation (acne, psoriasis, photoaging); RXR-targeting retinoids induce apoptosis and are used in cancers such as Kaposi sarcoma.',
 note:'At T 901–903 she said the skin drugs target "RXRs"; the sentence before (T 897–899), the sentence after ("we\'re wanting that RAR effect", T 903–904) and PC slide 14 all say RAR. Keyed to RAR.',
 cite:PC+' slide 14; T 880–904'},

{id:'L1-091', skill:'tell', prof:'Smith', tier:'new', topic:'ret', sub:'rec', concept:'rxr-apoptosis',
 tags:['tell'], source:'both',
 stem:'What effect do RXR-targeting retinoids predominantly have?',
 options:[
  {t:'They induce apoptosis', correct:true, why:'PC slide 14; (T 899–901).'},
  {t:'They promote collagen synthesis', correct:false, why:'Collagen synthesis is a retinoid effect in aging skin (PC slide 15), not the RXR cancer effect.'},
  {t:'They suppress sebum production', correct:false, why:'Not the RXR effect on PC slide 14.'},
  {t:'They increase keratinocyte cohesion', correct:false, why:'Retinoids decrease cohesion between epidermal cells (PC slide 15).'}],
 teach:'RAR: differentiation and proliferation, for skin disease. RXR: apoptosis, for cancers (PC slide 14).',
 cite:PC+' slides 14–15; T 892–901'},

{id:'L1-092', skill:'mech', prof:'Smith', tier:'new', topic:'ret', sub:'pd', concept:'retinoid-acne-pd',
 tags:['mechanism'], source:'both',
 stem:'How do retinoids act in acne?',
 options:[
  {t:'Less cell cohesion and faster turnover', correct:true, why:'PC slide 15: decreased cohesion between epidermal cells and increased epidermal cell turnover; (T 912–916).'},
  {t:'They block IL-17 receptors in the skin', correct:false, why:'IL-17A inhibitors are a separate psoriasis drug class (PP slide 28).'},
  {t:'More cell cohesion in the follicle', correct:false, why:'The reverse: they decrease cohesion so the cells move out (PC slide 15).'},
  {t:'They block androgen receptors', correct:false, why:'That is the antiandrogen class (PP slide 37).'}],
 teach:'PC slide 15: less cohesion and faster turnover lead to expulsion of open comedones and conversion of closed comedones into open ones.',
 cite:PC+' slide 15; PP slides 28, 37; T 911–916'},

{id:'L1-093', skill:'mech', prof:'Smith', tier:'new', topic:'ret', sub:'pd', concept:'retinoid-comedone',
 tags:['mechanism'], source:'slide',
 stem:'What happens to comedones under retinoid treatment?',
 options:[
  {t:'Open comedones are expelled and closed comedones become open', correct:true, why:'PC slide 15.'},
  {t:'Closed comedones become nodules', correct:false, why:'Nodules come from a foreign body response to a papule (PP slide 34), not from retinoid action.'},
  {t:'Open comedones close over', correct:false, why:'Reverses the direction on PC slide 15.'},
  {t:'Comedones are unchanged while inflammation falls', correct:false, why:'PC slide 15 describes direct effects on comedones.'}],
 teach:'This follows from less cohesion and faster turnover of epidermal cells (PC slide 15).',
 cite:PC+' slide 15; PP slide 34'},

{id:'L1-094', skill:'mech', prof:'Smith', tier:'new', topic:'ret', sub:'pd', concept:'retinoid-aging',
 tags:['mechanism'], source:'both',
 stem:'With prolonged use for aging skin, which effects do retinoids have?',
 options:[
  {t:'More collagen, new vessels, thicker epidermis', correct:true, why:'PC slide 15; (T 920–928).'},
  {t:'Less collagen, fewer vessels, thinner epidermis', correct:false, why:'The reverse of PC slide 15.'},
  {t:'Apoptosis of dermal cells in the wrinkle', correct:false, why:'Apoptosis is the RXR effect in cancer (PC slide 14).'},
  {t:'More sebum to moisturize the skin', correct:false, why:'Not listed on PC slide 15.'}],
 teach:'PC slide 15: for aging, prolonged use promotes dermal collagen synthesis, new blood vessel formation and thickening of the epidermis.',
 cite:PC+' slides 14–15; T 920–928'},

{id:'L1-095', skill:'mech', prof:'Smith', tier:'new', topic:'ret', sub:'pd', concept:'retinoid-psoriasis',
 tags:['recall'], source:'both',
 stem:'What is known about the retinoid mechanism in psoriasis?',
 options:[
  {t:'Unknown; possibly anti-inflammatory and antiproliferative', correct:true, why:'PC slide 15; (T 916–920).'},
  {t:'They kill psoriatic T cells by inducing apoptosis', correct:false, why:'Apoptosis is linked to RXR targeting in cancers (PC slide 14), not stated for psoriasis.'},
  {t:'They replace the missing filaggrin in the plaque', correct:false, why:'Filaggrin belongs to AD (PP slide 15).'},
  {t:'They block IL-17 receptors on keratinocytes', correct:false, why:'IL-17 inhibitors are a separate drug class (PP slide 28).'}],
 teach:'PC slide 15 states the psoriasis mechanism as unknown, possibly anti-inflammatory and antiproliferative; in the treatment rationale retinoids are the cell-turnover agents (PP slide 27).',
 cite:PC+' slide 15; PP slides 27–28; T 916–920'},

/* ---- Added 2026-11-07 for Dr. Smith's Exam 1 hints (epidemiology, etiology,
   why corticosteroids, retinoid target). Hint text pasted by Louis 2026-11-07. */
{id:'L1-096', skill:'epi', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'ad-atopic-assoc',
 tags:['recall'], source:'both',
 stem:'Atopic dermatitis is often associated with which other atopic conditions?',
 options:[
  {t:'Asthma and rhinitis', correct:true, why:'Slide 10: an inheritance pattern and association with asthma and rhinitis (atopic conditions); (T 121–125) a child with AD, asthma and rhinitis is responding to things they are allergic to.'},
  {t:'Psoriatic arthritis and nail pitting', correct:false, why:'These go with psoriasis (Pathophys slide 26), not with AD.'},
  {t:'Acne and rosacea', correct:false, why:'Acne is a pilosebaceous disease (slide 30); rosacea is what topical metronidazole is usually used for (PCol slide 51). Neither is an atopic condition.'},
  {t:'Hypertension and kidney disease', correct:false, why:'These are adverse effects of oral calcineurin inhibitors (PCol slide 30), not atopic conditions.'}],
 teach:'Slide 10: AD has an inheritance pattern and goes with asthma and rhinitis, the atopic conditions. The risk of AD is two- to threefold higher with one atopic parent and three- to fivefold higher with two.',
 cite:PP+' slide 10; T 121–125'},

{id:'L1-097', skill:'epi', prof:'Smith', tier:'new', topic:'ad', sub:'clin', concept:'ad-trend-sex',
 tags:['recall'], source:'both',
 stem:'Which statement about the epidemiology of atopic dermatitis is correct?',
 options:[
  {t:'Its prevalence has risen over recent decades', correct:true, why:'Slide 10: prevalence has increased in developed and developing countries during the last decades (T 105–106).'},
  {t:'It affects males far more often than females', correct:false, why:'Slide 10: it affects males and females similarly (T 121).'},
  {t:'It is more common in rural than in urban areas', correct:false, why:'Slide 10 gives the reverse: a lower prevalence in rural areas, explained by the hygiene hypothesis.'},
  {t:'It is more common in adults than in children', correct:false, why:'Slide 10: 15–30% of children against 2–10% of adults in developed countries.'}],
 teach:'Slide 10: 15–30% of children and 2–10% of adults in developed countries; prevalence rising; males and females alike; lower in rural areas (hygiene hypothesis). She added that the figure is expected to level out at about 20% as these children grow up (T 108–109).',
 cite:PP+' slide 10; T 102–121'},

{id:'L1-098', skill:'epi', prof:'Smith', tier:'new', topic:'pso', sub:'clin', concept:'pso-prevalence',
 tags:['numbers'], source:'both',
 stem:'About what share of the US population has psoriasis?',
 options:[
  {t:'About 3%', correct:true, why:'Slide 20: "Affects about 3% of the US population" (T 305).'},
  {t:'About 15–30%', correct:false, why:'That is the share of children in developed countries with AD (slide 10).'},
  {t:'About 2–10%', correct:false, why:'That is the share of adults in developed countries with AD (slide 10).'},
  {t:'About 90%', correct:false, why:'That is the lifetime prevalence of acne (slide 31).'}],
 teach:'Psoriasis is the most common immune-mediated inflammatory disease worldwide and affects about 3% of the US population; the prevalence in other countries varies (slide 20; T 304–306).',
 cite:PP+' slides 10, 20, 31; T 304–306'},

{id:'L1-099', skill:'epi', prof:'Smith', tier:'new', topic:'pso', sub:'clin', concept:'pso-prevalence-factors',
 tags:['recall'], source:'both',
 stem:'Which factors are thought to affect how common psoriasis is in a population?',
 options:[
  {t:'Climate, sun exposure and ethnicity', correct:true, why:'Slide 20; (T 306–307) the prevalence varies with ethnicity and geographic location, "maybe because climate, sun exposure, and ethnicity are ... linked".'},
  {t:'Little infection exposure in early childhood', correct:false, why:'That is the hygiene hypothesis, given for the rural–urban difference in AD (slide 10).'},
  {t:'Androgen production at puberty', correct:false, why:'Androgens trigger acne (slides 31–32).'},
  {t:'A high glycemic index diet and dairy', correct:false, why:'Diet is listed as a possible acne factor (slide 35).'}],
 teach:'Slide 20: psoriasis has a genetic basis that probably requires environmental triggers; climate, sun exposure and ethnicity are thought to affect prevalence; males and females are affected equally.',
 cite:PP+' slides 10, 20, 31–35; T 301–308'},

{id:'L1-100', skill:'patho', prof:'Smith', tier:'new', topic:'pso', sub:'path', concept:'pso-trigger',
 tags:['process'], source:'both',
 stem:'How is psoriasis thought to start in a person with the genetic predisposition?',
 options:[
  {t:'Skin trauma triggers an abnormal immune response', correct:true, why:'Slide 21: probably starts with some trauma (bug bite, skin infection) that triggers an abnormal immune response (T 313–316).'},
  {t:'Loss of profilaggrin lets allergens into the skin', correct:false, why:'That is the FLG barrier story of AD (slide 15).'},
  {t:'Androgens raise sebum and plug the follicle', correct:false, why:'That is the start of acne (slides 32–33).'},
  {t:'An IgE-mediated reaction to an ingested food', correct:false, why:'Ingested allergens are part of the AD story, and there the first reactions are IgE-independent (slide 13).'}],
 teach:'After the trigger, APCs present antigen to T cells in the skin; APCs, T cells and keratinocytes release cytokines such as TNF-α, IL-23 and IL-17, which drive keratinocyte hyperproliferation and chronic systemic inflammation (slides 21–22; T 316–322).',
 cite:PP+' slides 13, 15, 20–22, 32–33; T 301–302, 313–322'},

{id:'L1-101', skill:'epi', prof:'Smith', tier:'new', topic:'acne', sub:'clin', concept:'acne-adult-sex',
 tags:['numbers'], source:'slide',
 stem:'Among adults aged 25 to 58, how common is acne in women compared with men?',
 options:[
  {t:'About 12% of women; 3% of men', correct:true, why:'Slide 31: 12% of girls age 25–58, with periodic premenstrual flares until menopause; 3% of males age 25–58.'},
  {t:'About 3% of women; 12% of men', correct:false, why:'Swaps the two figures (slide 31).'},
  {t:'About 12% of women; 12% of men', correct:false, why:'Slide 31 gives different figures for the two sexes: 12% and 3%.'},
  {t:'About 81% of women; 3% of men', correct:false, why:'81% is the likelihood of acne when both parents had acne (slide 35).'}],
 teach:'Slide 31: in puberty acne is often more severe in boys, while women often have more severe forms during adulthood. In women it can ebb and flow with the menstrual cycle (T 417–418).',
 note:'The transcript garbles the age range ("between the ages of 25, which is a little later than 58", T 415–416); keyed to slide 31.',
 cite:PP+' slides 31, 35; T 415–421'},

{id:'L1-102', skill:'patho', prof:'Smith', tier:'new', topic:'acne', sub:'clin', concept:'acne-trigger',
 tags:['recall'], source:'both',
 stem:'What triggers acne in children?',
 options:[
  {t:'The start of androgen production', correct:true, why:'Slide 31: triggered in children with the start of androgen production; usual onset at puberty (T 413–414). Slide 32: increased androgen production leads to the factors of acne.'},
  {t:'A filaggrin defect in the skin barrier', correct:false, why:'That is the barrier problem of AD (slide 15).'},
  {t:'T-cell activation after skin trauma', correct:false, why:'That is how psoriasis is thought to start (slide 21).'},
  {t:'Little infection exposure early in life', correct:false, why:'That is the hygiene hypothesis for AD (slide 10).'}],
 teach:'Androgens raise sebum output and alter keratinization in the duct; P. acnes colonizes the duct and inflammation follows (slide 32; T 422–428).',
 cite:PP+' slides 10, 15, 21, 31–32; T 413–414, 422–428'},

{id:'L1-103', skill:'patho', prof:'Smith', tier:'new', topic:'ad', sub:'path', concept:'ad-initial-trigger',
 tags:['process'], source:'both',
 stem:'What is thought to set off the first skin inflammation in atopic dermatitis?',
 options:[
  {t:'Cytokines from irritated or scratched keratinocytes', correct:true, why:'Slide 13: the initial mechanisms are unknown, but neuropeptides, irritation or scratching may release proinflammatory cytokines from keratinocytes (T 163–169).'},
  {t:'An IgE-mediated reaction on the first allergen exposure', correct:false, why:'Slide 13: the first reactions to embedded or ingested allergens are T-cell mediated but IgE-independent; IgE comes later.'},
  {t:'P. acnes lipase acting on sebum in the follicle', correct:false, why:'That is how inflammation arises in acne (slide 33).'},
  {t:'A reaction to lithium or a beta blocker', correct:false, why:'These are the medications most often linked to worsening psoriasis (slide 24).'}],
 teach:'Slide 13: the features of AD are skin barrier dysfunction, immune deviation toward TH2 and then increased IgE, complicated by colonization with pathologic organisms.',
 cite:PP+' slides 13, 24, 33; T 163–178'},

{id:'L1-104', skill:'mech', prof:'Smith', tier:'new', topic:'cs', sub:'mech', concept:'cs-why-ad-pso',
 tags:['mechanism','reasoning'], source:'both',
 stem:'Why are topical corticosteroids used to treat atopic dermatitis and psoriasis?',
 options:[
  {t:'They suppress immune system activity', correct:true, why:'PCol slide 11: used to treat psoriasis and AD because they are immunosuppressive; (T 873–877) "They\'re going to suppress the activity of the immune system", lowering inflammatory cytokines.'},
  {t:'They crosslink DNA to slow cell division', correct:false, why:'That is the proposed action of coal tar (PCol slide 53).'},
  {t:'They kill P. acnes in the follicle', correct:false, why:'Antibacterial activity against P. acnes belongs to benzoyl peroxide (PCol slide 36).'},
  {t:'They block the IL-4 receptor alpha subunit', correct:false, why:'That is dupilumab (PCol slide 64).'}],
 teach:'Both diseases have an overactive immune component: TH2 deviation in AD (Pathophys slide 16) and a T-cell-mediated inflammatory cascade in psoriasis (Pathophys slides 19, 21). The glucocorticoid–receptor complex changes transcription, lowering inflammatory cytokines and possibly raising anti-inflammatory ones (PCol slides 5–7; T 873–877).',
 cite:PC+' slides 5–7, 11, 36, 53, 64; T 873–877'},

{id:'L1-105', skill:'mech', prof:'Smith', tier:'new', topic:'ret', sub:'rec', concept:'retinoid-target',
 tags:['mechanism'], source:'both',
 stem:'Which receptors do retinoids such as tretinoin bind to change gene expression?',
 options:[
  {t:'Retinoic acid receptors, RAR and RXR', correct:true, why:'PCol slide 14: retinoids bind two families of nuclear receptors, RARs and RXRs, which form RAR–RXR heterodimers and bind the RARE (T 895–904).'},
  {t:'The vitamin D receptor', correct:false, why:'Calcipotriene acts through the vitamin D receptor (PCol slide 21).'},
  {t:'The glucocorticoid receptor', correct:false, why:'Corticosteroids bind the glucocorticoid receptor (PCol slide 7).'},
  {t:'Cytokine receptors on the cell surface', correct:false, why:'Retinoid receptors are nuclear receptors (PCol slides 7, 14); cytokine receptors are blocked by drugs such as brodalumab (PCol slide 66).'}],
 teach:'Tretinoin is all-trans retinoic acid (PCol slide 17). For acne, psoriasis and photoaging the wanted effect is through the RARs, which drive differentiation and proliferation; RXR-targeting retinoids mainly induce apoptosis (PCol slide 14; T 895–904).',
 cite:PC+' slides 7, 14, 17, 21; T 895–904'}
];

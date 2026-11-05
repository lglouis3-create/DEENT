/* ==========================================================================
   Lecture 2 questions (Dr. Smith, Friday 10/30/2026).
   Source: Skin-PCol-Students-2026.pdf slides 16-42 (the PDF page number is the
   slide number), with the lecture transcript (T, line numbers of
   DEENT_10_30_Lecture_Only_Transcript.txt). Slide 43 was left for 11/03.
   Left out on purpose:
   - retinoid structures (naphthoic acid derivative, acetylenic retinoid,
     metabolite of etretinate): "I'm not gonna test you on these, these
     structures of the retinoids" (T 102-103);
   - the kinds of T cells: "I'm not going to test you on the different kinds of
     T cells" (T 260-261);
   - the adenylyl cyclase and G-protein detail of slide 32 ("that's not the
     important part of this figure", T 437);
   - conflicts listed in the notes file: the vitamin D receptor response
     element (PC slide 7 vs slide 21), the labelled status of topical calcineurin
     inhibitors in psoriasis, the macrolide step on the ribosome (slide 42 vs
     slide 47), crisaborole long-term safety.
   ========================================================================== */
const D2 = 'Lecture 2 (Skin-PCol-Students-2026.pdf)';

TOPICS.push(
 {id:'l2-tret', name:'Topical retinoids', prof:'Smith',
  cite:'Lecture 2 (10/30) — Skin-PCol-Students-2026.pdf, slides 16–18',
  subs:[
   {id:'couns', name:'Counseling: onset, amount, application', cite:'slide 16'},
   {id:'ae',    name:'Side effects and sun protection', cite:'slide 16'},
   {id:'prod',  name:'Tretinoin, adapalene, tazarotene', cite:'slides 17–18'}]},
 {id:'l2-oret', name:'Oral retinoids', prof:'Smith',
  cite:'Lecture 2 (10/30) — Skin-PCol-Students-2026.pdf, slides 19–20',
  subs:[
   {id:'iso', name:'Isotretinoin', cite:'slide 19'},
   {id:'aci', name:'Acitretin', cite:'slide 20'}]},
 {id:'l2-vitd', name:'Vitamin D analog: calcipotriene', prof:'Smith',
  cite:'Lecture 2 (10/30) — Skin-PCol-Students-2026.pdf, slides 21–22',
  subs:[
   {id:'mech',  name:'Mechanism and pharmacological effect', cite:'slide 21'},
   {id:'ae',    name:'Topical and systemic side effects', cite:'slide 22'},
   {id:'recap', name:'The three nuclear receptor binding classes', cite:'slides 21–22'}]},
 {id:'l2-tcell', name:'Calcineurin inhibitors: T-cell signals and mechanism', prof:'Smith',
  cite:'Lecture 2 (10/30) — Skin-PCol-Students-2026.pdf, slides 23–26',
  subs:[
   {id:'intro', name:'Uses and general action', cite:'slide 24'},
   {id:'sig',   name:'Signals 1, 2 and 3', cite:'slide 25'},
   {id:'mech',  name:'Calcineurin, NFAT and the immunophilins', cite:'slide 26'}]},
 {id:'l2-cni', name:'Calcineurin inhibitor products', prof:'Smith',
  cite:'Lecture 2 (10/30) — Skin-PCol-Students-2026.pdf, slides 27–30',
  subs:[
   {id:'top',  name:'Topical pimecrolimus and tacrolimus', cite:'slides 27–28'},
   {id:'oral', name:'Oral cyclosporine and tacrolimus', cite:'slides 29–30'}]},
 {id:'l2-pde', name:'PDE-4 inhibitors', prof:'Smith',
  cite:'Lecture 2 (10/30) — Skin-PCol-Students-2026.pdf, slides 31–34',
  subs:[
   {id:'mech', name:'cAMP and inflammatory cells', cite:'slide 32'},
   {id:'cris', name:'Crisaborole', cite:'slide 33'},
   {id:'apr',  name:'Apremilast', cite:'slide 34'}]},
 {id:'l2-ker', name:'Keratolytics', prof:'Smith',
  cite:'Lecture 2 (10/30) — Skin-PCol-Students-2026.pdf, slides 35–40',
  subs:[
   {id:'bpo', name:'Benzoyl peroxide', cite:'slides 35–37'},
   {id:'sul', name:'Sulfur', cite:'slide 38'},
   {id:'sal', name:'Salicylic acid', cite:'slides 39–40'}]},
 {id:'l2-abx', name:'Acne antibiotics: the ribosome', prof:'Smith',
  cite:'Lecture 2 (10/30) — Skin-PCol-Students-2026.pdf, slides 41–42',
  subs:[
   {id:'ribo', name:'Binding sites on the bacterial ribosome', cite:'slides 41–42'}]}
);

QUESTIONS.push(
/* ---- Topical retinoids: counseling --------------------------------------- */
{id:'L2-001', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'couns', concept:'ret-worse-first',
 tags:['counseling','cue'], source:'both',
 stem:'A teenager two weeks into topical retinoid treatment says the acne is worse. What explains this?',
 options:[
  {t:'Peeling brings up comedones from below', correct:true, why:'(T 20–28) as keratinocytes peel off "you\'re uncovering any [comedones] that haven\'t yet come to the surface"; slide 16: more comedones in the first 4–6 weeks, then improvement.'},
  {t:'The retinoid is feeding P. acnes in the pores', correct:false, why:'Retinoids act on keratinocyte cohesion and turnover (PC slide 15), not on bacterial growth.'},
  {t:'An allergic contact dermatitis', correct:false, why:'Slide 16: allergic contact dermatitis is rare; the early flare is expected (T 20–25).'},
  {t:'The drug raises sebum production', correct:false, why:'Not a retinoid effect on slide 16; isotretinoin is linked to reduced sebaceous gland size and function (slide 19).'}],
 teach:'One of her counseling points: as the retinoid helps keratinocytes peel, comedones that were still under the surface come up, so acne looks worse for a few weeks. As those comedones open and drain and fewer new ones form, the skin improves (slide 16; T 20–28).',
 cite:D2+' slide 16; T 20–28'},

{id:'L2-002', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'couns', concept:'ret-flare-window',
 tags:['numbers'], source:'slide',
 stem:'During which period of topical retinoid treatment for acne may more comedones appear?',
 options:[
  {t:'The first 4–6 weeks', correct:true, why:'Slides 16 and 17: more comedones may appear during the first 4–6 weeks, then improve.'},
  {t:'The first 2–3 days', correct:false, why:'Too short; slide 16 gives 4–6 weeks.'},
  {t:'Weeks 8–12 of treatment', correct:false, why:'8–12 weeks is the time to optimal clinical improvement (slide 16).'},
  {t:'After 6 months', correct:false, why:'The flare is early in treatment, in the first 4–6 weeks (slide 16).'}],
 teach:'Two numbers on slide 16: the flare of comedones in the first 4–6 weeks, and optimal improvement at 8–12 weeks.',
 cite:D2+' slides 16–17; T 20–28'},

{id:'L2-003', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'couns', concept:'ret-optimal-8-12',
 tags:['counseling','cue','numbers'], source:'both',
 stem:'When should a patient starting a topical retinoid for acne expect optimal clinical improvement?',
 options:[
  {t:'In 8–12 weeks', correct:true, why:'Slide 16; (T 28–30) "counsel your patients that you might not see optimal improvement for, you know, 8 to 12 weeks".'},
  {t:'In 1–2 weeks', correct:false, why:'Early weeks can look worse (slide 16; T 20–25).'},
  {t:'In 4–6 weeks', correct:false, why:'4–6 weeks is the period when more comedones may appear (slide 16).'},
  {t:'In 6–12 months', correct:false, why:'Slide 16 gives 8–12 weeks.'}],
 teach:'Counsel patients that improvement takes 8–12 weeks and to stick with treatment through the early flare (slide 16; T 28–30).',
 cite:D2+' slide 16; T 28–30'},

{id:'L2-004', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'couns', concept:'ret-amount',
 tags:['counseling'], source:'both',
 stem:'How much topical retinoid should a patient with acne apply?',
 options:[
  {t:'Enough for slight erythema and mild peeling', correct:true, why:'Slide 16; (T 31) "only use enough to just cause a slight erythema with mild peeling".'},
  {t:'Enough to cause visible blistering', correct:false, why:'Blistering means the product is too strong (slide 16; T 46–48).'},
  {t:'A thick layer left on overnight under a dressing', correct:false, why:'Not part of her counseling; irritation calls for less, not more (slide 16; T 31–35).'},
  {t:'As much as needed to stop the peeling', correct:false, why:'Mild peeling is the expected effect (slide 16).'}],
 teach:'The goal is slight erythema with mild peeling. More irritation than that means the strength is too high for that patient (slide 16; T 31–35).',
 cite:D2+' slide 16; T 31–35'},

{id:'L2-005', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'couns', concept:'ret-too-irritating',
 tags:['counseling','case'], source:'both',
 stem:'Three weeks into topical retinoid treatment, a patient has marked burning and peeling. What is the best advice?',
 options:[
  {t:'Ask the provider about strength or schedule', correct:true, why:'Slide 16: decrease concentration or frequency as needed; (T 35–41) they should not wait 8–12 weeks to adjust.'},
  {t:'Continue unchanged until week 12', correct:false, why:'(T 37–41) "They don\'t need to wait 8 to 12 weeks"; waiting could damage the skin.'},
  {t:'Apply it twice as often to build up tolerance', correct:false, why:'The reverse of slide 16, which lowers the concentration or frequency.'},
  {t:'Apply it to damp skin to dilute it', correct:false, why:'Slide 16: apply to dry skin.'}],
 teach:'Too much irritation means the product is too strong. The provider may change the product or the dosing schedule; this is not a reason to wait for the 8–12 week mark (slide 16; T 31–41).',
 cite:D2+' slide 16; T 31–41'},

{id:'L2-006', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'couns', concept:'ret-dry-skin',
 tags:['counseling'], source:'both',
 stem:'A patient washes the face before applying a topical retinoid. When should the retinoid go on?',
 options:[
  {t:'After the skin has air-dried', correct:true, why:'Slide 16: apply to dry skin; (T 41–43) let the skin air dry first.'},
  {t:'While the skin is still damp', correct:false, why:'(T 41–42) "Don\'t put it on moist skin."'},
  {t:'Mixed into the face wash', correct:false, why:'Not her advice; she said wash, let the skin dry, then apply (T 41–43).'},
  {t:'Under a moisturizer applied first', correct:false, why:'Not part of the slide 16 counseling.'}],
 teach:'Apply to dry skin only. After washing, let the skin air dry before applying (slide 16; T 41–43).',
 note:'The transcript gives the drying time as "1015 minutes" (T 43), most likely "10–15 minutes"; the item does not key on the number.',
 cite:D2+' slide 16; T 41–43'},

{id:'L2-007', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'couns', concept:'ret-avoid-sites', multi:true,
 tags:['counseling','list'], source:'both',
 stem:'Which areas should a patient avoid when applying a topical retinoid? Select all that apply.',
 options:[
  {t:'Corners of the nose', correct:true, why:'Slide 16; (T 43–45).'},
  {t:'Corners of the eyes and mouth', correct:true, why:'Slide 16; (T 43–45).'},
  {t:'Mucous membranes', correct:true, why:'Slide 16; (T 44) "for sure the mucous membranes".'},
  {t:'Comedones on the forehead', correct:false, why:'Comedone-bearing skin is what the retinoid treats (slide 16).'}],
 teach:'Those areas are very thin, so peeling there is unwanted (T 43–45). Slide 16: avoid the corners of the nose, eyes and mouth, and mucous membranes.',
 cite:D2+' slide 16; T 43–45'},

/* ---- Topical retinoids: side effects ------------------------------------- */
{id:'L2-008', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-tret', sub:'ae', concept:'ret-too-strong',
 tags:['reasoning'], source:'both',
 stem:'A patient using a topical retinoid has blistering, peeling and crusting. What does this indicate?',
 options:[
  {t:'The product is too strong', correct:true, why:'(T 46–48) "This for sure would be a response indicating that the product is too strong for them"; slide 16 lists these side effects.'},
  {t:'A secondary bacterial infection', correct:false, why:'These are listed as retinoid side effects on slide 16, not signs of infection.'},
  {t:'The expected early comedone flare', correct:false, why:'The early flare is more comedones (slide 16), not blistering.'},
  {t:'A rare allergic contact dermatitis', correct:false, why:'Slide 16 lists allergic contact dermatitis separately, as rare.'}],
 teach:'Slide 16 lists erythema and dryness (early, then resolving) and blistering, peeling, crusting, burning and edema. Too much of these means the strength is too high (T 45–48).',
 cite:D2+' slide 16; T 45–48'},

{id:'L2-009', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-tret', sub:'ae', concept:'ret-uv-tumor',
 tags:['counseling','mechanism'], source:'both',
 stem:'Why should patients on topical retinoids avoid sun exposure and use sunscreen?',
 options:[
  {t:'They may raise the tumor risk from UV light', correct:true, why:'Slide 16: may increase the tumorigenic potential of ultraviolet radiation (animal data); (T 48–53).'},
  {t:'Sunlight turns them into a sensitizer', correct:false, why:'Being a potent contact sensitizer is a benzoyl peroxide effect (slide 37).'},
  {t:'Sunlight greatly raises their systemic absorption', correct:false, why:'Not a reason given on slide 16.'},
  {t:'UV light makes them comedogenic', correct:false, why:'The comedone flare comes from peeling (T 20–28), not from UV light.'}],
 teach:'Peeling off outer layers leaves the skin more sensitive to UV radiation. Slide 16: retinoids may increase the tumorigenic potential of UV radiation, from animal studies, so counsel patients to avoid or minimize sun exposure and use a sunscreen (T 48–53).',
 cite:D2+' slide 16; T 48–53'},

{id:'L2-010', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-tret', sub:'ae', concept:'ret-uv-tumor', dupOf:'L2-009',
 tags:['recall'], source:'both',
 stem:'What kind of evidence links topical retinoids to the tumorigenic potential of UV radiation?',
 options:[
  {t:'Animal studies', correct:true, why:'Slide 16: data from animal studies; (T 50–53) "if we\'re seeing it in our animal studies ... it\'s probably something we need to mention".'},
  {t:'Large human cohort studies', correct:false, why:'(T 51) "We may not have really super strong data in human studies".'},
  {t:'Case reports of melanoma', correct:false, why:'Not the source named on slide 16.'},
  {t:'In vitro keratinocyte cultures', correct:false, why:'Slide 16 names animal studies.'}],
 teach:'The data are from animals, not strong human studies, but the risk is still enough to counsel sun avoidance and sunscreen (slide 16; T 50–53).',
 cite:D2+' slide 16; T 48–53'},

{id:'L2-011', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-tret', sub:'ae', concept:'ret-photosens-vs-sunburn',
 tags:['room','reasoning'], source:'transcript',
 stem:'Adapalene is sun stable. Why does a patient using it still need sun protection?',
 options:[
  {t:'Peeling leaves less protection from the sun', correct:true, why:'Her answer to a student (T 126–130): "The reason why their risk for sunburn increases is because you\'re peeling off outer layers of your skin."'},
  {t:'Sunlight changes its structure on the skin surface', correct:false, why:'That is photosensitivity, which adapalene does not cause because it does not change structure in sunlight (T 123–127; slide 18).'},
  {t:'It is a potent contact sensitizer', correct:false, why:'That is benzoyl peroxide (slide 37).'},
  {t:'It raises sebum and blocks pores', correct:false, why:'Not a retinoid effect; retinoids loosen keratinocytes (T 20–28).'}],
 teach:'Two different sun problems (T 122–130): photosensitivity is an immune-based reaction when sunlight changes the retinoid\'s structure; it looks like a burn but is not one. Sunburn risk rises with any peeling retinoid because outer skin layers are removed. Adapalene avoids the first but not the second.',
 cite:D2+' slides 16, 18; T 53–54, 117–130'},

{id:'L2-012', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tret', sub:'ae', concept:'ret-photosens-mech',
 tags:['room','mechanism'], source:'transcript',
 stem:'What causes retinoid photosensitivity, as distinct from sunburn?',
 options:[
  {t:'An immune reaction after UV alters the drug', correct:true, why:'(T 123–125) "it\'s an immune response based from the fact that the retinoid, when sunlight hits it, can change structure and cause this weird reaction".'},
  {t:'Loss of the outer skin layers', correct:false, why:'Loss of outer layers is why sunburn risk rises (T 128–130).'},
  {t:'Hypercalcemia in the dermis', correct:false, why:'Hypercalcemia is a calcipotriene systemic effect (slide 22).'},
  {t:'Oxidation of proteins in the stratum corneum', correct:false, why:'Oxidant bleaching is a benzoyl peroxide caution (slide 37).'}],
 teach:'Slide 16 lists photosensitivity separately from the UV tumor risk. In class she separated photosensitivity (a structure change of the drug in sunlight, triggering an immune reaction) from sunburn (thinner protection from peeling) (T 53–54, 122–130).',
 cite:D2+' slide 16; T 53–54, 122–130'},

{id:'L2-013', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-tret', sub:'ae', concept:'ret-early-dryness',
 tags:['recall'], source:'slide',
 stem:'What is the usual course of erythema and dryness from a topical retinoid?',
 options:[
  {t:'Seen early, then resolves with use', correct:true, why:'Slide 16: erythema and dryness occur in the first few weeks of use, then resolve with continued use.'},
  {t:'Begins after a year of use', correct:false, why:'Slide 16 places it in the first few weeks.'},
  {t:'Worsens steadily while on the drug', correct:false, why:'Slide 16: it resolves with continued use.'},
  {t:'Means it must be stopped at once', correct:false, why:'Mild erythema is the target (slide 16; T 31); stronger irritation calls for adjustment (T 31–37).'}],
 teach:'Slide 16: erythema and dryness in the first few weeks, then resolution with continued use. Allergic contact dermatitis is rare.',
 cite:D2+' slide 16; T 45–55'},

/* ---- Topical retinoid products ------------------------------------------- */
{id:'L2-014', skill:'pk', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'tretinoin-absorption',
 tags:['numbers'], source:'both',
 stem:'About how much topical tretinoin reaches the systemic circulation?',
 options:[
  {t:'Less than 10%', correct:true, why:'Slide 17; (T 61–62) "a little bit less than 10% absorption into the circulation".'},
  {t:'About 50%', correct:false, why:'Slide 17 gives less than 10%.'},
  {t:'More than 90%', correct:false, why:'Slide 17 gives less than 10%.'},
  {t:'Zero, it stays in the skin', correct:false, why:'(T 62) "you do absorb some of it, even when you use it topically".'}],
 teach:'Tretinoin is the acid form of vitamin A (all-trans retinoic acid, ATRA), used for acne. Less than 10% is absorbed, so some drug does reach the circulation from topical use (slide 17; T 60–62).',
 cite:D2+' slide 17; T 60–62'},

{id:'L2-015', skill:'class', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'tretinoin-identity',
 tags:['recall'], source:'both',
 stem:'Which retinoid is the acid form of vitamin A, also known as ATRA?',
 options:[
  {t:'Tretinoin', correct:true, why:'Slide 17: acid form of vitamin A; all-trans retinoic acid or ATRA.'},
  {t:'Adapalene', correct:false, why:'Adapalene resembles retinoic acid but is a different compound (slide 18).'},
  {t:'Acitretin', correct:false, why:'Acitretin is an oral retinoid for psoriasis (slide 20).'},
  {t:'Calcipotriene', correct:false, why:'Calcipotriene is a vitamin D analog (slide 21).'}],
 teach:'Tretinoin (ATRA) is the acid form of vitamin A and is used topically for acne (slide 17; T 60–62).',
 cite:D2+' slide 17; T 60–62'},

{id:'L2-016', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'tretinoin-micro',
 tags:['counseling','case'], source:'both',
 stem:'A patient finds standard topical tretinoin too irritating. Which change fits?',
 options:[
  {t:'A timed-release microsphere tretinoin', correct:true, why:'Slide 17: the microsphere timed-release formulation may be less irritating for sensitive patients; (T 64–68).'},
  {t:'Add benzoyl peroxide to the tretinoin', correct:false, why:'(T 72–73) other retinoids should not be combined with it: "It\'s way too irritating to the skin." Adapalene is the exception (slide 18).'},
  {t:'Switch to oral isotretinoin', correct:false, why:'Isotretinoin is for severe cystic acne that resists standard therapy (slide 19).'},
  {t:'Apply it to damp skin', correct:false, why:'Slide 16: apply to dry skin.'}],
 teach:'Tretinoin comes as a timed-release topical formulation with microspheres (brand Retin-A Micro), often better for patients sensitive to the standard product (slide 17; T 64–68).',
 cite:D2+' slides 17–18; T 64–73'},

{id:'L2-017', skill:'tell', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'adapalene-sun-stable',
 tags:['tell'], source:'both',
 stem:'Which topical retinoid is photochemically stable and does not cause photosensitivity?',
 options:[
  {t:'Adapalene', correct:true, why:'Slide 18: "sun stable", photochemically stable; (T 71–72) "one that doesn\'t cause photosensitivity. It\'s stable when sunlight hits it".'},
  {t:'Tazarotene', correct:false, why:'Slide 18: tazarotene causes photosensitivity (T 77–78).'},
  {t:'Tretinoin', correct:false, why:'Slide 16 lists photosensitivity among the topical retinoid side effects; adapalene is the one marked stable (slide 18).'},
  {t:'Calcipotriene', correct:false, why:'Not a retinoid; slide 22 lists mild photosensitivity for it.'}],
 teach:'Adapalene: sun stable, can be used with benzoyl peroxide, less irritating than tretinoin, for mild to moderate acne. Tazarotene: causes photosensitivity (slide 18; T 68–78).',
 cite:D2+' slide 18; T 68–78'},

{id:'L2-018', skill:'tell', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'adapalene-bpo',
 tags:['tell','counseling'], source:'both',
 stem:'Which topical retinoid may be used in combination with benzoyl peroxide?',
 options:[
  {t:'Adapalene', correct:true, why:'Slide 18; (T 72–73) adapalene "can be used in combination with benzoyl peroxide".'},
  {t:'Tretinoin', correct:false, why:'(T 72–73) "Some of our other retinoids, you should not use them together. It\'s way too irritating to the skin."'},
  {t:'Tazarotene', correct:false, why:'Slide 18 gives the benzoyl peroxide combination for adapalene, not tazarotene (T 72–73).'},
  {t:'Isotretinoin', correct:false, why:'Isotretinoin is oral, for severe cystic acne (slide 19).'}],
 teach:'Adapalene is photochemically stable and may be combined with benzoyl peroxide; the other retinoids are too irritating with it (slide 18; T 71–73).',
 cite:D2+' slide 18; T 71–73'},

{id:'L2-019', skill:'tell', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'adapalene-vs-tretinoin',
 tags:['tell'], source:'both',
 stem:'How does adapalene compare with tretinoin for a patient with acne?',
 options:[
  {t:'Less irritating; for mild to moderate acne', correct:true, why:'Slide 18: less irritating than tretinoin, for mild to moderate acne; (T 73–75).'},
  {t:'More irritating; for severe cystic acne', correct:false, why:'Severe cystic acne is the oral isotretinoin indication (slide 19).'},
  {t:'More teratogenic; given orally', correct:false, why:'Adapalene is topical (slide 18); the oral retinoids are isotretinoin and acitretin (slides 19–20).'},
  {t:'Photosensitizing; also used for plaque psoriasis', correct:false, why:'That describes tazarotene (slide 18).'}],
 teach:'Adapalene binds the same receptors as retinoic acid, is less irritating than tretinoin and is used for mild to moderate acne (slide 18; T 69–75).',
 cite:D2+' slide 18; T 68–75'},

{id:'L2-020', skill:'tell', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'tazarotene-uses', multi:true,
 tags:['tell','list'], source:'both',
 stem:'For which conditions is topical tazarotene used? Select all that apply.',
 options:[
  {t:'Psoriasis', correct:true, why:'Slide 18; (T 76–77) "We also use this product for psoriasis, not just acne".'},
  {t:'Mild to moderately severe facial acne', correct:true, why:'Slide 18.'},
  {t:'Wrinkles', correct:true, why:'Slide 18; (T 77) "we also will use it for wrinkles".'},
  {t:'Atopic dermatitis', correct:false, why:'Not a tazarotene use on slide 18; topical calcineurin inhibitors and crisaborole are the AD drugs taught this day (slides 27, 33).'}],
 teach:'Of the topical retinoids, tazarotene covers psoriasis as well as acne and wrinkles. It causes photosensitivity and needs contraceptive counseling (slide 18; T 75–81).',
 cite:D2+' slide 18; T 75–81'},

{id:'L2-021', skill:'tell', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'tazarotene-vs-adapalene',
 tags:['tell'], source:'both',
 stem:'Which statement separates tazarotene from adapalene?',
 options:[
  {t:'Tazarotene causes photosensitivity', correct:true, why:'Slide 18: tazarotene causes photosensitivity; adapalene is photochemically stable (T 71–72, 77–78).'},
  {t:'Tazarotene is given orally', correct:false, why:'Both are topical retinoids (slide 18).'},
  {t:'Tazarotene is less irritating', correct:false, why:'Slide 18 gives "less irritating than tretinoin" for adapalene.'},
  {t:'Tazarotene binds the vitamin D receptor', correct:false, why:'Calcipotriene binds the VDR (slide 21); tazarotene is a retinoid.'}],
 teach:'Adapalene: sun stable, combinable with benzoyl peroxide, mild to moderate acne. Tazarotene: photosensitivity, psoriasis, acne and wrinkles, possibly more absorption, contraceptive counseling (slide 18; T 68–81).',
 cite:D2+' slide 18; T 68–81'},

{id:'L2-022', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-tret', sub:'prod', concept:'tazarotene-pregnancy',
 tags:['counseling'], source:'both',
 stem:'A woman of childbearing age is prescribed topical tazarotene. Which counseling applies?',
 options:[
  {t:'Use it after contraceptive counseling', correct:true, why:'Slide 18: use by women of childbearing age after contraceptive counseling; not in pregnancy; (T 78–81).'},
  {t:'No precaution, as it is topical', correct:false, why:'(T 78) "you get a bit more absorption possibly from it", and retinoids cause birth defects (T 80).'},
  {t:'Avoid ethanol for 2 months after', correct:false, why:'That is the acitretin rule (slide 20).'},
  {t:'Enroll in iPLEDGE before the first dose', correct:false, why:'iPLEDGE is the isotretinoin program (slide 19).'}],
 teach:'Retinoids cause birth defects (T 80). Tazarotene may be absorbed a bit more, so women of childbearing age use it after contraceptive counseling, and it is not used in pregnancy (slide 18; T 78–81).',
 cite:D2+' slide 18; T 78–81'},

/* ---- Oral retinoids: isotretinoin ---------------------------------------- */
{id:'L2-023', skill:'tell', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'isotretinoin-indication',
 tags:['tell'], source:'both',
 stem:'Which patient is the best candidate for oral isotretinoin?',
 options:[
  {t:'Severe cystic acne resistant to standard therapy', correct:true, why:'Slide 19: severe cystic acne recalcitrant to standard therapies; (T 83–84).'},
  {t:'Mild comedonal acne as the first treatment choice', correct:false, why:'Mild to moderate acne fits a topical retinoid such as adapalene (slide 18).'},
  {t:'Pustular psoriasis', correct:false, why:'That is the acitretin indication (slide 20).'},
  {t:'Mild atopic dermatitis in a child', correct:false, why:'Isotretinoin is for acne, and it is avoided in children (slide 19; T 96–98).'}],
 teach:'Isotretinoin is the oral retinoid for severe cystic acne that has resisted other therapies (slide 19; T 81–84).',
 cite:D2+' slide 19; T 81–84'},

{id:'L2-024', skill:'mech', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'isotretinoin-mech',
 tags:['mechanism'], source:'both',
 stem:'What is known about how isotretinoin works in cystic acne?',
 options:[
  {t:'Unknown; it may shrink sebaceous glands', correct:true, why:'Slide 19: mechanism not known; appears to inhibit sebaceous gland size and function; (T 84–90).'},
  {t:'It kills P. acnes on the ribosome', correct:false, why:'Ribosome binding is the antibiotic mechanism (slide 42).'},
  {t:'It blocks calcineurin in activated T cells', correct:false, why:'That is cyclosporine and tacrolimus (slide 26).'},
  {t:'It raises cAMP in mast cells', correct:false, why:'That is the PDE-4 inhibitor mechanism (slide 32).'}],
 teach:'In cystic acne the comedones never open, stay in the skin and become infected (T 86–88). Isotretinoin\'s mechanism is unknown, but it appears to reduce sebaceous gland size and sebum production (slide 19; T 84–90).',
 cite:D2+' slide 19; T 84–90'},

{id:'L2-025', skill:'patho', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'cystic-acne',
 tags:['recall'], source:'transcript',
 stem:'What happens to the comedones in cystic acne?',
 options:[
  {t:'They stay closed and become infected', correct:true, why:'(T 86–88) the comedones "never open ... they just stay in the skin and get really, really infected".'},
  {t:'They open up and drain to the skin surface', correct:false, why:'That is the improvement a topical retinoid aims for (T 25–28).'},
  {t:'They turn into psoriatic plaques', correct:false, why:'Plaques belong to psoriasis, a different disease (slide 21).'},
  {t:'They lose sebum and dry out', correct:false, why:'Not her description of cystic acne (T 86–88).'}],
 teach:'Cystic acne: closed comedones that never open, stay in the skin and become heavily infected. This is why reducing sebum output with isotretinoin helps (T 86–90).',
 cite:D2+' slide 19; T 86–90'},

{id:'L2-026', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'isotretinoin-common-ae', multi:true,
 tags:['list'], source:'both',
 stem:'Which are common adverse effects of oral isotretinoin? Select all that apply.',
 options:[
  {t:'Dryness and itching of the skin', correct:true, why:'Slide 19; (T 90–92) even taken orally it causes skin side effects.'},
  {t:'Dryness of the mucous membranes', correct:true, why:'Slide 19; (T 92).'},
  {t:'Changes in lipid levels', correct:true, why:'Slide 19: lipid abnormalities; (T 92–93) "a systemic side effect is it can affect some of your lipid levels".'},
  {t:'Gingival hyperplasia', correct:false, why:'Gingival hyperplasia is a cyclosporine side effect (slide 30).'},
  {t:'Hypercalcemia and hypercalciuria', correct:false, why:'Calcipotriene systemic effects (slide 22).'}],
 teach:'Slide 19, common: dryness and itching of skin and mucous membranes; lipid abnormalities. Less common: headache, corneal opacities, pseudotumor cerebri, inflammatory bowel disease, anorexia, alopecia, muscle and joint pain, reversible on stopping.',
 cite:D2+' slide 19; T 90–96'},

{id:'L2-027', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'isotretinoin-less-common-ae', multi:true,
 tags:['list'], source:'slide',
 stem:'Which are less common adverse effects of oral isotretinoin? Select all that apply.',
 options:[
  {t:'Pseudotumor cerebri', correct:true, why:'Slide 19, less common side effects.'},
  {t:'Corneal opacities', correct:true, why:'Slide 19, less common side effects.'},
  {t:'Inflammatory bowel disease', correct:true, why:'Slide 19, less common side effects.'},
  {t:'Peripheral neuropathy', correct:false, why:'Neuropathy is the tacrolimus-specific side effect (slide 30).'},
  {t:'Nephrotoxicity', correct:false, why:'Nephrotoxicity belongs to cyclosporine and tacrolimus (slide 30).'}],
 teach:'Slide 19: headache, corneal opacities, pseudotumor cerebri, IBD, anorexia, alopecia, muscle and joint pain; reversible when the drug is stopped. (T 93–96) "these are quite significant sometimes", and patients probably need to stop the drug.',
 cite:D2+' slide 19; T 93–96'},

{id:'L2-028', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'isotretinoin-children',
 tags:['adverse'], source:'both',
 stem:'Why is oral isotretinoin generally avoided in children?',
 options:[
  {t:'Skeletal hyperostosis can occur', correct:true, why:'Slide 19: skeletal hyperostosis possible in children; (T 96–98) skeletal development problems, "so we really don\'t use these in kids".'},
  {t:'Gingival hyperplasia is likely', correct:false, why:'A cyclosporine side effect (slide 30).'},
  {t:'Children cannot absorb it', correct:false, why:'Not a reason given; the concern is skeletal (slide 19).'},
  {t:'It is not FDA approved under 2 years', correct:false, why:'The under-2 rule belongs to topical calcineurin inhibitors (slide 27).'}],
 teach:'Isotretinoin can cause skeletal development problems (skeletal hyperostosis) in children (slide 19; T 96–98).',
 cite:D2+' slide 19; T 96–98'},

{id:'L2-029', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'ipledge',
 tags:['counseling'], source:'both',
 stem:'Why must patients and prescribers of isotretinoin take part in iPLEDGE?',
 options:[
  {t:'Teratogenicity is a significant risk', correct:true, why:'Slide 19: teratogenicity is a significant risk; iPLEDGE registration and follow-up must be used; (T 98–101).'},
  {t:'It causes fatal hepatitis', correct:false, why:'Fatal hepatitis is reported with acitretin (slide 20).'},
  {t:'It is a controlled substance', correct:false, why:'Not the reason on slide 19.'},
  {t:'Blood levels need checking each week', correct:false, why:'Blood level monitoring applies to oral cyclosporine (slide 29).'}],
 teach:'iPLEDGE registers patients on isotretinoin; women pledge to use contraception, and men are enrolled as well (slide 19; T 98–101, 130–132).',
 cite:D2+' slide 19; T 98–101, 130–132'},

{id:'L2-030', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-oret', sub:'iso', concept:'ipledge-men',
 tags:['room'], source:'transcript',
 stem:'Why are men enrolled in the iPLEDGE program for isotretinoin?',
 options:[
  {t:'Sperm can be affected', correct:true, why:'Her answer to a student (T 130–132): "we have now found that uh sperm is affected as well ... men have to be enrolled as well, so they\'ve got to use their own protection".'},
  {t:'Men have more hepatotoxicity', correct:false, why:'Hepatotoxicity is the added acitretin risk (slide 20), not a reason for enrollment.'},
  {t:'Men absorb more of the drug', correct:false, why:'Not the reason she gave (T 130–132).'},
  {t:'To watch for skeletal hyperostosis', correct:false, why:'Skeletal hyperostosis is a concern in children (slide 19).'}],
 teach:'In class: men are enrolled too because sperm is affected, so they use their own protection (T 130–132).',
 note:'Taught in answer to a student; slide 19 and Katzung ch 61 (K61 880–884) describe the contraception rules for women only. Not a conflict: the slide is silent on men.',
 cite:D2+' slide 19; T 130–132'},

/* ---- Oral retinoids: acitretin ------------------------------------------- */
{id:'L2-031', skill:'tell', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'acitretin-indication',
 tags:['tell'], source:'both',
 stem:'For which condition is oral acitretin used?',
 options:[
  {t:'Psoriasis, especially pustular forms', correct:true, why:'Slide 20; (T 103–104) "for treating psoriasis, especially when it\'s pustular".'},
  {t:'Severe cystic acne', correct:false, why:'The isotretinoin indication (slide 19).'},
  {t:'Mild to moderate atopic dermatitis in adults', correct:false, why:'AD drugs this day were the topical calcineurin inhibitors and crisaborole (slides 27, 33).'},
  {t:'Wrinkles and photoaging', correct:false, why:'Wrinkles are a topical tazarotene use (slide 18).'}],
 teach:'Two oral retinoids: isotretinoin for severe cystic acne, acitretin for psoriasis, especially pustular (slides 19–20).',
 cite:D2+' slides 19–20; T 101–104'},

{id:'L2-032', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'acitretin-liver',
 tags:['adverse','counseling'], source:'both',
 stem:'Which adverse effect of acitretin, beyond those of isotretinoin, calls for liver function monitoring?',
 options:[
  {t:'Hepatotoxicity, including fatal hepatitis', correct:true, why:'Slide 20; (T 104–106) hepatotoxicity has resulted in fatalities, so liver function should be checked.'},
  {t:'Nephrotoxicity needing dose changes', correct:false, why:'Nephrotoxicity is the calcineurin inhibitor concern (slide 30).'},
  {t:'Hypercalcemia from vitamin D action', correct:false, why:'That is calcipotriene (slide 22).'},
  {t:'Lymphoma from long-term immune suppression', correct:false, why:'A boxed warning for oral calcineurin inhibitors (slide 30).'}],
 teach:'Acitretin has the same adverse effects as isotretinoin plus hepatotoxicity, with fatal hepatitis reported; check liver function at some frequency (slide 20; T 104–106).',
 cite:D2+' slide 20; T 104–106'},

{id:'L2-033', skill:'pk', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'acitretin-half-life',
 tags:['pk','reasoning'], source:'both',
 stem:'What property of acitretin explains its long waits for pregnancy and blood donation after treatment?',
 options:[
  {t:'A half-life of months', correct:true, why:'Slide 20: very long half-life, months; (T 107) "This has a very, very long half-life, half-life for months".'},
  {t:'Strong CYP3A4 induction', correct:false, why:'CYP3A4 appears with calcineurin inhibitors and apremilast (slides 30, 34), not as the acitretin reason.'},
  {t:'Binding to the vitamin D receptor', correct:false, why:'That is calcipotriene (slide 21).'},
  {t:'Poor oral absorption', correct:false, why:'Not a reason given; the issue is persistence in the body (T 107–116).'}],
 teach:'The long half-life means the retinoid stays in the body long after the last dose; hence the waits before pregnancy and blood donation (slide 20; T 107–116).',
 cite:D2+' slide 20; T 107–116'},

{id:'L2-034', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'acitretin-pregnancy',
 tags:['counseling','numbers'], source:'slide',
 stem:'After stopping acitretin, how long must a woman avoid becoming pregnant?',
 options:[
  {t:'At least 3 years', correct:true, why:'Slide 20: must not be used by women who may become pregnant during treatment or for at least 3 years after it is stopped.'},
  {t:'1 week', correct:false, why:'Far too short for a drug with a half-life of months (slide 20).'},
  {t:'Until the next menstrual period', correct:false, why:'Slide 20 gives at least 3 years.'},
  {t:'No wait once the drug is stopped', correct:false, why:'The drug persists for months after the last dose (T 107–109).'}],
 teach:'Slide 20: teratogenic; no pregnancy during treatment or for at least 3 years after it is stopped; in the USA prescribers use the Do Your P.A.R.T. program. In class: "months" before trying to get pregnant because of the long half-life (T 107–109).',
 note:'In class she said "months" (T 107–109) without a figure; the slide and Katzung ch 61 (K61 941–942) give at least 3 years. No option is a span of months.',
 cite:D2+' slide 20; T 107–109'},

{id:'L2-035', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'acitretin-ethanol',
 tags:['counseling','numbers'], source:'both',
 stem:'What should a patient taking acitretin be told about alcohol?',
 options:[
  {t:'Avoid it during and for 2 months after', correct:true, why:'Slide 20; (T 109–112) "ethanol needs to be avoided while people are taking acitretin, and for 2 months after discontinuing therapy".'},
  {t:'Avoid it for 3 days after each daily dose', correct:false, why:'Slide 20: during treatment and 2 months after.'},
  {t:'Drinking is fine with food', correct:false, why:'(T 112) "There\'s drug interactions with the ethanol and the acitretin".'},
  {t:'Avoid it for 3 years after', correct:false, why:'3 years is the wait for blood donation and pregnancy (slide 20).'}],
 teach:'Acitretin: no ethanol during treatment and for 2 months after; no blood donation and no pregnancy for 3 years after (slide 20; T 109–116).',
 note:'She gave only "drug interactions with the ethanol" (T 112). Katzung ch 61 (K61 938–939, support) explains that acitretin with ethanol forms etretinate, which can stay in plasma and fat for years.',
 cite:D2+' slide 20; T 109–112'},

{id:'L2-036', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'acitretin-blood',
 tags:['counseling','cue','numbers'], source:'both',
 stem:'A patient who stopped acitretin a year ago wants to donate blood. What applies?',
 options:[
  {t:'Wait until 3 years after stopping', correct:true, why:'Slide 20; (T 113–116) "You have to wait 3 years. After discontinuing therapy"; "That\'s a pretty odd statement to make that you gotta wait 3 years, right?"'},
  {t:'Donate now; it has cleared', correct:false, why:'With a half-life of months, the drug persists (T 113–115).'},
  {t:'Wait 2 months after stopping', correct:false, why:'2 months is the ethanol rule (slide 20).'},
  {t:'Donate if liver function tests are normal', correct:false, why:'Liver monitoring is for hepatotoxicity (slide 20), not for donation.'}],
 teach:'Blood with acitretin in it could cause birth defects in a recipient, and the drug stays for a long time, so no donation during treatment and for 3 years after (slide 20; T 113–116).',
 cite:D2+' slide 20; T 113–116'},

{id:'L2-037', skill:'tell', prof:'Smith', tier:'new', topic:'l2-oret', sub:'aci', concept:'iso-vs-aci',
 tags:['tell'], source:'both',
 stem:'Which feature belongs to acitretin and not to isotretinoin?',
 options:[
  {t:'No blood donation for 3 years after', correct:true, why:'Slide 20 (acitretin); (T 113–116).'},
  {t:'Teratogenic risk in pregnancy', correct:false, why:'Both are teratogenic (slides 19–20).'},
  {t:'Dryness of skin and mucous membranes', correct:false, why:'Shared: acitretin\'s adverse effects are similar to isotretinoin\'s (slide 20).'},
  {t:'Given orally', correct:false, why:'Both are oral retinoids (slides 19–20).'}],
 teach:'Acitretin: psoriasis (pustular), hepatotoxicity, half-life of months, ethanol 2 months, blood and pregnancy 3 years. Isotretinoin: severe cystic acne, lipid changes, skeletal hyperostosis in children, iPLEDGE (slides 19–20).',
 cite:D2+' slides 19–20; T 81–116'},

/* ---- Calcipotriene ------------------------------------------------------- */
{id:'L2-038', skill:'class', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'mech', concept:'calcipotriene-class',
 tags:['class'], source:'both',
 stem:'Calcipotriene, used topically for psoriasis, belongs to which class?',
 options:[
  {t:'Vitamin D analog', correct:true, why:'Slide 21; (T 133–135) vitamin D analogs are the next nuclear receptor binding group; calcipotriene is the example.'},
  {t:'Retinoid', correct:false, why:'Retinoids are a separate nuclear receptor binding group (slides 16–20).'},
  {t:'Calcineurin inhibitor', correct:false, why:'Cyclosporine, tacrolimus and pimecrolimus (slides 26–27).'},
  {t:'PDE-4 inhibitor', correct:false, why:'Crisaborole and apremilast (slides 33–34).'}],
 teach:'Calcipotriene looks like vitamin D and binds the vitamin D receptor (T 134–136; slide 21).',
 cite:D2+' slide 21; T 132–136'},

{id:'L2-039', skill:'mech', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'mech', concept:'calcipotriene-moa',
 tags:['mechanism'], source:'both',
 stem:'How does calcipotriene act in psoriasis?',
 options:[
  {t:'It binds the VDR and changes gene expression', correct:true, why:'Slide 21: acts through the vitamin D receptor; the complex modulates genes for epidermal differentiation and inflammation; (T 135–141).'},
  {t:'It binds cyclophilin and then blocks calcineurin', correct:false, why:'That is cyclosporine (slide 26).'},
  {t:'It inhibits PDE4 and raises cAMP', correct:false, why:'That is crisaborole and apremilast (slide 32).'},
  {t:'It is reduced to hydrogen sulfide', correct:false, why:'That is sulfur (slide 38).'}],
 teach:'Calcipotriene binds the VDR; the complex pairs with RXR-alpha, binds DNA and changes expression of genes that help keratinocytes differentiate properly and that decrease immune activity (slide 21; T 135–146).',
 cite:D2+' slide 21; T 135–146'},

{id:'L2-040', skill:'mech', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'mech', concept:'vdr-rxr',
 tags:['mechanism'], source:'both',
 stem:'With which receptor does the calcipotriene–vitamin D receptor complex heterodimerize?',
 options:[
  {t:'RXR-alpha', correct:true, why:'Slide 21: the VDR–drug complex heterodimerizes with RXR-α; (T 137–138).'},
  {t:'Glucocorticoid receptor', correct:false, why:'The GR is the corticosteroid receptor (PC slide 7).'},
  {t:'T-cell receptor', correct:false, why:'The TCR receives antigen in signal 1 (slide 25).'},
  {t:'CD25', correct:false, why:'CD25 is the IL-2 receptor subunit in signal 3 (slide 25).'}],
 teach:'VDR plus drug, then a heterodimer with RXR-alpha, then DNA binding and altered gene expression (slide 21; T 135–141).',
 note:'Where the dimer binds on DNA is held out: PC slide 7 (10/29) lists the TRE for this group, slide 21 says vitamin D response elements, and in class she said "its DNA response element" (T 138). See the notes file.',
 cite:D2+' slide 21; T 135–141'},

{id:'L2-041', skill:'mech', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'mech', concept:'calcipotriene-pd', multi:true,
 tags:['mechanism','list'], source:'both',
 stem:'Which are pharmacological effects of calcipotriene in psoriatic skin? Select all that apply.',
 options:[
  {t:'Inhibits keratinocyte proliferation', correct:true, why:'Slide 21; (T 147–148) "inhibit that crazy keratinocyte proliferation".'},
  {t:'Promotes keratinocyte differentiation', correct:true, why:'Slide 21; (T 148) "promote them to properly mature".'},
  {t:'Decreases inflammatory cytokine release', correct:true, why:'Slide 21; (T 151–152).'},
  {t:'Increases cohesion between keratinocytes', correct:false, why:'Not a calcipotriene effect; retinoids decrease cohesion (PC slide 15).'}],
 teach:'In psoriasis keratinocytes divide out of control and do not mature. Calcipotriene slows proliferation, promotes maturation and lowers inflammatory cytokines (slide 21; T 142–152).',
 cite:D2+' slide 21; T 142–152'},

{id:'L2-042', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'ae', concept:'calcipotriene-local-ae', multi:true,
 tags:['list'], source:'both',
 stem:'Which are topical side effects of calcipotriene? Select all that apply.',
 options:[
  {t:'Burning and itching', correct:true, why:'Slide 22; (T 153–157) the most common are discomfort at the application site.'},
  {t:'Skin atrophy and hyperpigmentation', correct:true, why:'Slide 22.'},
  {t:'Mild photosensitivity', correct:true, why:'Slide 22; (T 164–165) protect patients from sun exposure.'},
  {t:'Bleaching of hair and fabrics', correct:false, why:'Bleaching comes from benzoyl peroxide, an oxidant (slide 37).'},
  {t:'Sulfur odor', correct:false, why:'A side effect of sulfur (slide 38).'}],
 teach:'Slide 22: burning, itching, erythema, dry skin, skin atrophy, hyperpigmentation, folliculitis, mild photosensitivity. The most common is discomfort at the application site (T 153–157).',
 cite:D2+' slide 22; T 153–165'},

{id:'L2-043', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'ae', concept:'calcipotriene-steroid',
 tags:['counseling'], source:'both',
 stem:'What can reduce the application-site irritation of calcipotriene?',
 options:[
  {t:'A topical corticosteroid with it', correct:true, why:'Slide 22: concomitant topical corticosteroids reduce the irritation; (T 165–167).'},
  {t:'Benzoyl peroxide applied along with it', correct:false, why:'Benzoyl peroxide itself irritates the skin (slide 37).'},
  {t:'Applying it to damp skin', correct:false, why:'Not her advice for calcipotriene (T 165–167).'},
  {t:'Using more than 100 g a week', correct:false, why:'Above 100 g a week brings hypercalcemia risk (slide 22).'}],
 teach:'Applying a corticosteroid with calcipotriene can reduce the application discomfort (slide 22; T 165–167).',
 cite:D2+' slide 22; T 165–167'},

{id:'L2-044', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'ae', concept:'calcipotriene-systemic',
 tags:['adverse'], source:'both',
 stem:'Which systemic side effects can occur with topical calcipotriene?',
 options:[
  {t:'Hypercalcemia and hypercalciuria', correct:true, why:'Slide 22; (T 167–169).'},
  {t:'Hyperkalemia and hypertension', correct:false, why:'Hypertension appears with oral calcineurin inhibitors (slide 30), not calcipotriene.'},
  {t:'Lipid abnormalities and alopecia', correct:false, why:'Isotretinoin side effects (slide 19).'},
  {t:'Weight loss and depression', correct:false, why:'Apremilast side effects (slide 34).'}],
 teach:'Because it acts like vitamin D, topical calcipotriene can raise blood calcium and urinary calcium excretion (slide 22; T 167–171).',
 cite:D2+' slide 22; T 167–171'},

{id:'L2-045', skill:'mech', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'ae', concept:'calcipotriene-hypercalcemia-why',
 tags:['room','cue','reasoning'], source:'transcript',
 stem:'Why can topical calcipotriene raise blood calcium?',
 options:[
  {t:'It alters genes for calcium transport', correct:true, why:'Her answer to the room (T 177–188): acting like vitamin D, it likely raises expression of gut calcium transporter genes, and maybe affects PTH; "I\'m just theorizing".'},
  {t:'It dissolves calcium from the stratum corneum', correct:false, why:'Not a mechanism given (T 169–191).'},
  {t:'It inhibits calcineurin in the kidney', correct:false, why:'Calcineurin inhibition is cyclosporine and tacrolimus (slide 26).'},
  {t:'It contains calcium in its vehicle', correct:false, why:'Not a mechanism given; the effect comes from vitamin D-like gene expression (T 177–181).'}],
 teach:'Vitamin D helps absorb calcium from the gut, and PTH helps the kidney reabsorb it. A drug that looks and acts like vitamin D likely changes expression of genes behind those steps. "sometimes you don\'t know every single step, but you can say, oh, I bet this is what is happening" (T 172–191).',
 note:'She stated this as reasoning, not established fact: "we\'ve never really nailed it down" (T 175–176), "I don\'t know exactly which genes" (T 186).',
 cite:D2+' slide 22; T 169–191'},

{id:'L2-046', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'ae', concept:'calcipotriene-100g',
 tags:['numbers','counseling'], source:'both',
 stem:'Above what cumulative weekly dose of calcipotriene do hypercalcemia and hypercalciuria develop?',
 options:[
  {t:'100 g a week', correct:true, why:'Slide 22; (T 191–193) "when your cumulative weekly dose exceeds the recommended 100 g per week".'},
  {t:'10 g a week', correct:false, why:'Slide 22 gives 100 g a week.'},
  {t:'30 g a week', correct:false, why:'Slide 22 gives 100 g a week.'},
  {t:'500 g a week', correct:false, why:'Slide 22 gives 100 g a week.'}],
 teach:'The weekly dose is limited to the recommended 100 g so that calcium levels do not rise (slide 22; T 191–194).',
 cite:D2+' slide 22; T 191–196'},

{id:'L2-047', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'ae', concept:'calcipotriene-reversal',
 tags:['adverse'], source:'both',
 stem:'What happens to calcipotriene-induced hypercalcemia when the drug is stopped?',
 options:[
  {t:'It resolves within days', correct:true, why:'Slide 22: resolves within days of discontinuation; (T 194–196).'},
  {t:'It persists for about 3 years', correct:false, why:'3 years belongs to acitretin (slide 20).'},
  {t:'It needs dialysis to clear', correct:false, why:'Slide 22: it resolves within days of stopping.'},
  {t:'It turns into hypocalcemia', correct:false, why:'Not stated; calcium levels fall back (T 194–195).'}],
 teach:'Lowering or stopping the dose clears the high calcium, and the product might be restarted at a lower dose (slide 22; T 194–196).',
 cite:D2+' slide 22; T 191–196'},

{id:'L2-048', skill:'class', prof:'Smith', tier:'new', topic:'l2-vitd', sub:'recap', concept:'nrb-three-classes', multi:true,
 tags:['room','class'], source:'transcript',
 stem:'Which drug groups for skin disease bind a nuclear receptor and alter gene expression? Select all that apply.',
 options:[
  {t:'Corticosteroids', correct:true, why:'(T 197–200) the first of three nuclear receptor binding subcategories.'},
  {t:'Retinoids', correct:true, why:'(T 199).'},
  {t:'Vitamin D analogs', correct:true, why:'(T 199–200) "all of them have the basic same general mechanism ... They bind to a nuclear receptor and affect gene expression".'},
  {t:'Calcineurin inhibitors', correct:false, why:'They act in the T-cell signal cascade in the cytoplasm (slides 25–26).'},
  {t:'PDE-4 inhibitors', correct:false, why:'They block cAMP breakdown (slide 32).'}],
 teach:'"What do the steroids do? What do the retinoids do? What do the vitamin D analogs do? ... Which genes expression might be being affected" (T 204–207). Steroids lower inflammatory and raise anti-inflammatory cytokine genes; calcipotriene changes differentiation and immune genes.',
 cite:D2+' slides 21–22; T 196–207'},

/* ---- Calcineurin inhibitors: uses, T-cell signals, mechanism ------------- */
{id:'L2-049', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'intro', concept:'cni-general',
 tags:['mechanism'], source:'both',
 stem:'What is the general action of calcineurin inhibitors in atopic dermatitis and psoriasis?',
 options:[
  {t:'Less T-cell and mast cell activation', correct:true, why:'Slide 24: inhibit activation of T cells and mast cells, blocking proinflammatory cytokines and mediators; an immunosuppressant (T 211–215).'},
  {t:'More keratinocyte cohesion', correct:false, why:'Not a calcineurin inhibitor effect (slide 24).'},
  {t:'Less sebum and smaller glands', correct:false, why:'That is linked to isotretinoin (slide 19).'},
  {t:'Bacteriostasis against P. acnes in follicles', correct:false, why:'That describes sulfur (slide 38).'}],
 teach:'Calcineurin inhibitors reduce the extent and severity of symptoms of AD and psoriasis; they do not cure them (T 211–213). They are immunosuppressants (slide 24).',
 cite:D2+' slide 24; T 211–215'},

{id:'L2-050', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'intro', concept:'cni-goal',
 tags:['recall'], source:'both',
 stem:'What is the treatment goal of calcineurin inhibitors in atopic dermatitis?',
 options:[
  {t:'Reduce symptom extent and severity', correct:true, why:'Slide 24; (T 212–213) "They don\'t stop it. They\'re just trying to treat the symptoms".'},
  {t:'Cure the disease after one full course', correct:false, why:'(T 212) "They don\'t stop it."'},
  {t:'Replace the missing filaggrin', correct:false, why:'Filaggrin is the AD barrier protein (Lecture 1, PP slide 15), not a CNI target.'},
  {t:'Kill bacteria on the skin', correct:false, why:'Antibiotics are for acne (T 574–582).'}],
 teach:'Slide 24: used for AD and psoriasis to reduce extent and severity of symptoms.',
 cite:D2+' slide 24; T 211–215'},

{id:'L2-051', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'sig', concept:'signal-1',
 tags:['figure','room'], source:'both',
 stem:'What is signal 1 between an antigen-presenting cell and a CD4+ T cell?',
 options:[
  {t:'Antigen on MHC II binding the TCR', correct:true, why:'Slide 25: APC MHC II plus antigen binds the T-cell receptor; (T 222–233) "that\'s called signal one".'},
  {t:'CD80/86 binding CD28', correct:false, why:'That is signal 2, the confirmatory co-signal (slide 25).'},
  {t:'IL-2 binding CD25', correct:false, why:'That is signal 3 (slide 25).'},
  {t:'Dephosphorylated NFAT entering the nucleus', correct:false, why:'NFAT acts inside the cell after signals 1 and 2 (slide 26).'}],
 teach:'Signal 1: the APC holds out antigen on MHC class II and the T-cell receptor takes it; this is the first step in activating the T cell (slide 25; T 220–233, 240–241).',
 note:'On 11/03 she said "MHC1" for the same figure (T1103 289); on 10/30 (T 222) and on slide 25 it is MHC II. Keyed to MHC II.',
 cite:D2+' slide 25; T 220–241'},

{id:'L2-052', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'sig', concept:'signal-2',
 tags:['figure'], source:'both',
 stem:'Which interaction is signal 2, the confirmatory co-signal, in T-cell activation?',
 options:[
  {t:'CD80/86 on the APC binding CD28', correct:true, why:'Slide 25; (T 234–244, 267–268).'},
  {t:'Antigen on MHC II binding the TCR', correct:false, why:'That is signal 1 (slide 25).'},
  {t:'IL-2 binding the CD25 subunit', correct:false, why:'That is signal 3 (slide 25).'},
  {t:'Cyclosporine binding cyclophilin', correct:false, why:'That is the drug mechanism (slide 26), not a cell signal.'}],
 teach:'Signal 2 confirms that the APC wants the T cell to activate against the antigen it showed (T 234–239). After signals 1 and 2 a signal transduction cascade leads to IL-2 transcription (slide 25; T 244–249).',
 cite:D2+' slide 25; T 233–249'},

{id:'L2-053', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'sig', concept:'signal-3',
 tags:['figure'], source:'both',
 stem:'What is signal 3 in T-cell activation, and what does it start?',
 options:[
  {t:'IL-2 binding CD25; proliferation', correct:true, why:'Slide 25: IL-2 binds T-cell CD25 (IL-2 receptor), initiating T-cell proliferation; (T 250–257, 264–269).'},
  {t:'CD80/86 binding CD28; IL-2 release', correct:false, why:'That is signal 2 (slide 25).'},
  {t:'MHC II binding the TCR; apoptosis', correct:false, why:'MHC II with the TCR is signal 1, which activates the T cell (slide 25).'},
  {t:'cAMP binding PDE4; cytokine release', correct:false, why:'cAMP and PDE4 belong to the PDE-4 inhibitor mechanism (slide 32).'}],
 teach:'IL-2 leaves the T cell and binds the CD25 subunit of the IL-2 receptor on the same or other T cells. A second cascade to the nucleus turns on genes for proliferation (slide 25; T 249–257).',
 cite:D2+' slide 25; T 249–269'},

{id:'L2-054', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'sig', concept:'signal-cascade-il2',
 tags:['room','figure'], source:'both',
 stem:'What does the signal cascade after signals 1 and 2 lead the T cell to express?',
 options:[
  {t:'Interleukin 2', correct:true, why:'Her question to the room (T 286–287), answered "IL 2"; slide 25: signal cascade initiates IL-2 transcription.'},
  {t:'Calmodulin', correct:false, why:'Calmodulin activates calcineurin within the cascade (slide 26); it is not the expressed product.'},
  {t:'Cyclophilin', correct:false, why:'Cyclophilin is the protein cyclosporine binds (slide 26).'},
  {t:'Phosphodiesterase 4', correct:false, why:'PDE4 belongs to a separate drug class (slide 32).'}],
 teach:'"Some of the genes that get expressed as a result of this signal transduction is the production of interleukin 2" (T 246–248).',
 cite:D2+' slide 25; T 244–249, 286–287'},

{id:'L2-055', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'sig', concept:'cni-site-in-figure',
 tags:['figure','room'], source:'both',
 stem:'Where in T-cell activation do calcineurin inhibitors act?',
 options:[
  {t:'In the cascade after signals 1 and 2', correct:true, why:'(T 281–290) "Our calcineurin inhibitors work within this signal cascade ... that comes after signal 1 and signal 2"; slide 25 notes.'},
  {t:'On the MHC II molecule of the APC', correct:false, why:'They act inside the T cell, not on the APC (T 283–290).'},
  {t:'On the CD25 subunit of the IL-2 receptor', correct:false, why:'CD25 is where IL-2 binds in signal 3 (slide 25).'},
  {t:'At the CD28 co-stimulation receptor', correct:false, why:'CD28 is the T-cell side of signal 2 (slide 25).'}],
 teach:'The cascade after signals 1 and 2 ends in IL-2 expression. Calcineurin inhibitors work in that cascade, so IL-2 falls (slide 25; T 280–298).',
 cite:D2+' slide 25; T 280–298'},

{id:'L2-056', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'sig', concept:'cni-consequence',
 tags:['room','reasoning'], source:'both',
 stem:'A calcineurin inhibitor lowers IL-2 expression. Which sequence follows?',
 options:[
  {t:'Less T-cell proliferation, less inflammation', correct:true, why:'(T 290–303) less IL-2, fewer T cells proliferating, a suppressed immune system, and less inflammation; the room answered "Inflammation" (T 299–301).'},
  {t:'More T-cell proliferation, then less itching', correct:false, why:'Reverses the direction: less IL-2 means less proliferation (T 292–294).'},
  {t:'More IgE, then more mast cells', correct:false, why:'Mast cell activity falls with T-cell suppression (T 362–365).'},
  {t:'Less cAMP, then relaxation of smooth muscle cells', correct:false, why:'Smooth muscle relaxation follows a rise in cAMP with PDE-4 inhibitors (slide 32).'}],
 teach:'"If you decrease interleukin 2, you decrease the T cells replicating, responding, proliferating, and then you decrease the activity in general of the immune system, and that helps decrease inflammation" (T 301–303).',
 cite:D2+' slide 25; T 290–303'},

{id:'L2-057', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'calcineurin-normal',
 tags:['mechanism','figure'], source:'both',
 stem:'In an activated T cell, what does calcineurin normally do?',
 options:[
  {t:'Removes a phosphate from NFAT', correct:true, why:'Slide 26 (Golan Fig 44-5); (T 323–328) "the calcineurin removes that phosphate, and that activates the NFAT".'},
  {t:'Adds a phosphate to NFAT', correct:false, why:'NFAT is inactive when phosphorylated; calcineurin removes the phosphate (T 323).'},
  {t:'Breaks down cAMP to 5\'-AMP', correct:false, why:'That is phosphodiesterase (slide 32).'},
  {t:'Binds IL-2 at the cell surface', correct:false, why:'IL-2 binds CD25 of its receptor (slide 25).'}],
 teach:'Calcium and calmodulin activate calcineurin, a phosphatase. It dephosphorylates NFAT; active NFAT enters the nucleus and drives IL-2 expression (slide 26; T 319–331).',
 note:'At T 322 she said calcineurin "phosphorylates a transcription factor"; the next line (T 323), her repeat (T 328, "it\'ll [dephosphorylate] this transcription factor NFAT") and the slide 26 notes all describe removal of the phosphate. Keyed to dephosphorylation.',
 cite:D2+' slide 26; T 319–331'},

{id:'L2-058', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'nfat-state',
 tags:['mechanism'], source:'both',
 stem:'In which state is the transcription factor NFAT inactive?',
 options:[
  {t:'When it is phosphorylated', correct:true, why:'(T 322–323) "It is inactive when it\'s phosphorylated"; slide 26.'},
  {t:'When calcineurin is active', correct:false, why:'Active calcineurin dephosphorylates and activates NFAT (T 323–324).'},
  {t:'When it is in the nucleus', correct:false, why:'Active NFAT goes to the nucleus to drive IL-2 (T 324).'},
  {t:'When calcium is high', correct:false, why:'Calcium with calmodulin activates calcineurin, which activates NFAT (T 320–324).'}],
 teach:'Phosphorylated NFAT is inactive; calcineurin removes the phosphate, NFAT moves to the nucleus and IL-2 is expressed (slide 26; T 319–331).',
 cite:D2+' slide 26; T 319–331'},

{id:'L2-059', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'cyclosporine-cyclophilin',
 tags:['mechanism','figure'], source:'both',
 stem:'How does cyclosporine inhibit calcineurin?',
 options:[
  {t:'Its complex with cyclophilin binds calcineurin', correct:true, why:'Slide 26; (T 333–336, 343–345) cyclosporine binds cyclophilin and the complex binds and inactivates calcineurin.'},
  {t:'Its complex with FKBP binds calcineurin', correct:false, why:'FKBP is the tacrolimus partner (slide 26; T 351–353).'},
  {t:'It binds the IL-2 receptor CD25', correct:false, why:'Not the cyclosporine mechanism (slide 26).'},
  {t:'It competes with calcium for binding to calmodulin', correct:false, why:'Not the mechanism given; the drug–cyclophilin complex inactivates calcineurin (T 343–345).'}],
 teach:'Cyclosporine enters the T cell and binds cyclophilin; that complex binds calcineurin and inactivates it, so NFAT is not activated and IL-2 is not expressed (slide 26; T 333–346).',
 cite:D2+' slide 26; T 333–346'},

{id:'L2-060', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'tacrolimus-fkbp',
 tags:['mechanism','figure'], source:'both',
 stem:'Which intracellular protein must tacrolimus bind to inhibit calcineurin?',
 options:[
  {t:'FKBP', correct:true, why:'Slide 26; (T 351–353) "it binds to a different protein called FKBP. This complex is what inactivates calcineurin".'},
  {t:'Cyclophilin', correct:false, why:'Cyclophilin is the cyclosporine partner (T 333–336).'},
  {t:'Calmodulin', correct:false, why:'Calmodulin activates calcineurin with calcium (T 320–321).'},
  {t:'NFAT', correct:false, why:'NFAT is the transcription factor calcineurin activates (T 322–324).'}],
 teach:'Tacrolimus (tac, FK506) inhibits calcineurin by first binding FKBP; cyclosporine binds cyclophilin (slide 26; T 347–355).',
 cite:D2+' slide 26; T 347–355'},

{id:'L2-061', skill:'tell', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'immunophilin-pair',
 tags:['tell'], source:'both',
 stem:'Which pairing of calcineurin inhibitor and binding protein is correct?',
 options:[
  {t:'Cyclosporine–cyclophilin; tacrolimus–FKBP', correct:true, why:'Slide 26; (T 351–355): tacrolimus binds FKBP, cyclosporine binds cyclophilin, and each complex inactivates calcineurin.'},
  {t:'Cyclosporine–FKBP; tacrolimus–cyclophilin', correct:false, why:'Swaps the partners (T 353–355).'},
  {t:'Both bind cyclophilin', correct:false, why:'Tacrolimus binds a different protein, FKBP (T 351–352).'},
  {t:'Both bind NFAT directly', correct:false, why:'Each drug–protein complex binds calcineurin, not NFAT (slide 26).'}],
 teach:'Two drugs, two partners, one target: each drug–immunophilin complex inactivates calcineurin, so NFAT stays inactive and IL-2 is not made (slide 26; T 333–355).',
 cite:D2+' slide 26; T 333–355'},

{id:'L2-062', skill:'mech', prof:'Smith', tier:'new', topic:'l2-tcell', sub:'mech', concept:'cni-not-together',
 tags:['room','reasoning'], source:'both',
 stem:'Why are cyclosporine and tacrolimus not given together?',
 options:[
  {t:'Their combined immunosuppression is too much', correct:true, why:'Her question to the room, answered "It\'d be too much" (T 356–357); slide 26 notes: normally not given together.'},
  {t:'They bind the same protein and compete', correct:false, why:'They bind different proteins, cyclophilin and FKBP (slide 26).'},
  {t:'One is topical and one is oral', correct:false, why:'Both are used orally as immunosuppressants (slide 30; T 355–356).'},
  {t:'Tacrolimus strongly induces cyclosporine metabolism', correct:false, why:'Not the reason given (T 356–357).'}],
 teach:'Both inhibit calcineurin and both are immunosuppressants; given together, the suppression would be too much (slide 26; T 355–357).',
 cite:D2+' slide 26; T 355–357'},

/* ---- Topical calcineurin inhibitors -------------------------------------- */
{id:'L2-063', skill:'tell', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'topical-cni-ad',
 tags:['tell'], source:'both',
 stem:'Topical pimecrolimus and tacrolimus are approved for which condition?',
 options:[
  {t:'Atopic dermatitis', correct:true, why:'Slide 27; (T 358–359) "Pimecrolimus and tacrolimus for atopic dermatitis".'},
  {t:'Severe cystic acne', correct:false, why:'Oral isotretinoin (slide 19).'},
  {t:'Pustular psoriasis', correct:false, why:'Oral acitretin (slide 20).'},
  {t:'Warts and corns', correct:false, why:'High-strength salicylic acid (slide 40).'}],
 teach:'Topical calcineurin inhibitors are approved for AD in adults and children older than 2. Their use in psoriasis came later (slide 27; T 358–377).',
 note:'Whether psoriasis is now a labelled use is held out: slide 27 and the drug chart say off label; she said "it may now be on label" (T 375).',
 cite:D2+' slide 27; T 357–377'},

{id:'L2-064', skill:'mech', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'topical-cni-itch',
 tags:['counseling'], source:'both',
 stem:'How soon do topical calcineurin inhibitors relieve the itch of atopic dermatitis?',
 options:[
  {t:'Within the first few days', correct:true, why:'Slide 27: both significantly relieve pruritus after the first few days; (T 365–367).'},
  {t:'After 8–12 weeks', correct:false, why:'8–12 weeks is the topical retinoid timeline for acne (slide 16).'},
  {t:'After 4–6 weeks of a flare', correct:false, why:'4–6 weeks is the retinoid comedone flare (slide 16).'},
  {t:'Within minutes of the first dose', correct:false, why:'Slide 27 gives the first few days.'}],
 teach:'By lowering T cells and then mast cells, they reduce inflammation and the itch within a few days (slide 27; T 362–367).',
 cite:D2+' slide 27; T 362–367'},

{id:'L2-065', skill:'tell', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'pimecrolimus-skin',
 tags:['tell'], source:'both',
 stem:'What advantage does topical pimecrolimus have over topical tacrolimus?',
 options:[
  {t:'Less systemic absorption', correct:true, why:'Slide 27: may preferentially distribute to the skin rather than the circulation; (T 368–373) "It is better at staying in the skin".'},
  {t:'Approved for infants under 2', correct:false, why:'Neither is approved under 2 years (slide 27; T 376–377).'},
  {t:'No burning on application', correct:false, why:'Burning is the most common topical CNI adverse effect (slide 28).'},
  {t:'Inhibits PDE4 as well', correct:false, why:'Both are calcineurin inhibitors; PDE4 is crisaborole (slide 33).'}],
 teach:'Little systemic absorption is wanted: the aim is to lower T-cell activity in the skin without broad immunosuppression. Pimecrolimus stays in the skin better than tacrolimus (slide 27; T 367–373).',
 note:'She called pimecrolimus "a slightly different formulation than the Tacrolimus topical products" (T 367–368); slide 27 and the drug chart treat them as two drugs. The item keys on skin retention, which all sources share.',
 cite:D2+' slide 27; T 367–373'},

{id:'L2-066', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'topical-cni-age',
 tags:['counseling','cue','numbers'], source:'both',
 stem:'A parent asks about topical pimecrolimus for an 18-month-old with atopic dermatitis. What applies?',
 options:[
  {t:'It is not FDA approved under age 2', correct:true, why:'Slide 27; (T 376–377) "you cannot use this product in children younger than 2. It\'s not FDA approved."'},
  {t:'It is approved from birth', correct:false, why:'Slide 27: adults and children older than 2.'},
  {t:'It is approved from 6 months', correct:false, why:'Slide 27 gives older than 2 years.'},
  {t:'It is approved if used on the face', correct:false, why:'The age limit does not depend on site (slide 27).'}],
 teach:'Both topical calcineurin inhibitors are approved for AD in adults and children older than 2; use below 2 is not FDA approved (slide 27; T 373–377).',
 cite:D2+' slide 27; T 373–377'},

{id:'L2-067', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'topical-cni-burning',
 tags:['adverse'], source:'both',
 stem:'What is the most common adverse effect of topical calcineurin inhibitors?',
 options:[
  {t:'Transient burning at the site', correct:true, why:'Slide 28; (T 378–379) "the most common is, again, the burning and application site".'},
  {t:'Nephrotoxicity from absorbed drug', correct:false, why:'Nephrotoxicity is an oral CNI effect (slide 30).'},
  {t:'Gingival hyperplasia', correct:false, why:'An oral cyclosporine effect (slide 30).'},
  {t:'Bleaching of fabrics', correct:false, why:'Benzoyl peroxide (slide 37).'}],
 teach:'Slide 28: transient burning at the site is most common; then the potential for local skin carcinogenesis and, with high blood levels, infections.',
 cite:D2+' slide 28; T 378–384'},

{id:'L2-068', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'topical-cni-cancer',
 tags:['adverse','counseling','mechanism'], source:'both',
 stem:'Why is sun protection advised with topical calcineurin inhibitors?',
 options:[
  {t:'Immune suppression may allow skin cancer', correct:true, why:'Slide 28: potential for local skin carcinogenesis, so sun protection; (T 379–381) "you are affecting the immune system\'s ability to fight any tumors starting".'},
  {t:'Sunlight changes their structure', correct:false, why:'Structure change in sunlight is her explanation of retinoid photosensitivity (T 123–125).'},
  {t:'They thin the stratum corneum', correct:false, why:'Peeling and loss of outer layers is the retinoid sunburn reason (T 128–130).'},
  {t:'They cause hypercalcemia with sun exposure', correct:false, why:'Hypercalcemia is calcipotriene (slide 22).'}],
 teach:'The immune system helps clear early tumors; suppressing it in the skin raises the potential for local skin carcinogenesis, so patients need sun protection (slide 28; T 379–381).',
 cite:D2+' slide 28; T 379–381'},

{id:'L2-069', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-cni', sub:'top', concept:'topical-cni-systemic',
 tags:['adverse'], source:'both',
 stem:'What risk follows high blood levels from a topical calcineurin inhibitor?',
 options:[
  {t:'More susceptibility to infection', correct:true, why:'Slide 28: potential systemic effects if high blood levels are reached (infections); (T 381–383).'},
  {t:'Hypercalcemia and hypercalciuria', correct:false, why:'Systemic calcipotriene effects (slide 22).'},
  {t:'Skeletal hyperostosis', correct:false, why:'Isotretinoin in children (slide 19).'},
  {t:'Salicylism', correct:false, why:'Salicylate overdose from salicylic acid (slide 40).'}],
 teach:'Absorbed drug immunosuppresses the whole patient and raises the risk of infection (slide 28; T 381–384).',
 cite:D2+' slide 28; T 381–384'},

/* ---- Oral calcineurin inhibitors ----------------------------------------- */
{id:'L2-070', skill:'tell', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'oral-cyclosporine-use',
 tags:['tell'], source:'both',
 stem:'For which skin condition is oral cyclosporine used?',
 options:[
  {t:'Severe psoriasis', correct:true, why:'Slide 29: cyclosporine used to treat psoriasis; (T 385–386) "orally for treating uh bad psoriasis".'},
  {t:'Mild acne', correct:false, why:'Not a cyclosporine use (slide 29).'},
  {t:'Warts and corns', correct:false, why:'High-strength salicylic acid (slide 40).'},
  {t:'Severe cystic acne', correct:false, why:'Oral isotretinoin (slide 19).'}],
 teach:'The topical calcineurin inhibitors are for AD; oral cyclosporine is for bad psoriasis (slides 27, 29; T 384–386).',
 cite:D2+' slide 29; T 384–386'},

{id:'L2-071', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'cyclosporine-formulations',
 tags:['counseling','cue'], source:'both',
 stem:'What applies to the microemulsion and the original oral cyclosporine formulations?',
 options:[
  {t:'They are not interchangeable', correct:true, why:'Slide 29 (Micromedex): not bioequivalent and cannot be used interchangeably; (T 387, 394–395) "They are not equivalent for oral cyclosporine".'},
  {t:'They can be swapped dose for dose', correct:false, why:'(T 387) "They are not dosing equivalent".'},
  {t:'They differ in color, not in dose', correct:false, why:'They differ in bioavailability (slide 29).'},
  {t:'One is for topical use', correct:false, why:'Both are oral formulations (slide 29).'}],
 teach:'Two oral cyclosporine products: Neoral, a microemulsion, and Sandimmune, the original. They are not bioequivalent; blood levels and dose adjustments help prevent toxicity (slide 29; T 386–396).',
 cite:D2+' slide 29; T 386–396'},

{id:'L2-072', skill:'pk', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'cyclosporine-bioavail', lowYield:true,
 tags:['pk'], source:'slide',
 stem:'How does the microemulsion oral cyclosporine formulation compare with the original one?',
 options:[
  {t:'It has higher bioavailability', correct:true, why:'Slide 29 (Micromedex): the microemulsion (Neoral) has increased bioavailability compared with Sandimmune.'},
  {t:'It has lower bioavailability', correct:false, why:'Reverses slide 29.'},
  {t:'It is absorbed more erratically', correct:false, why:'Slide 29: absorption of the original (Sandimmune) during chronic use can be erratic.'},
  {t:'It needs no blood level checks', correct:false, why:'Slide 29: blood levels and dose adjustments are necessary to help prevent toxicity.'}],
 teach:'Slide 29: Neoral (microemulsion) has higher bioavailability; Sandimmune absorption can be erratic in chronic use. She left the detail to be read and to Dr. Patel and the renal module (T 390–395).',
 note:'lowYield: she said "I\'ll let you read this" and that the difference will be covered by Dr. Patel and in the renal module (T 390–394).',
 cite:D2+' slide 29; T 386–396'},

{id:'L2-073', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'oral-cni-boxed',
 tags:['adverse','mechanism'], source:'both',
 stem:'Why does oral cyclosporine carry a boxed warning for lymphoma and other malignancies?',
 options:[
  {t:'It suppresses immune surveillance of cancer', correct:true, why:'Slide 30; (T 399–403) the immune system identifies and fights cancer cells, so suppressing it removes some of that defense.'},
  {t:'It damages DNA in lymphocytes', correct:false, why:'Not the reason she gave (T 399–403).'},
  {t:'It raises IL-2 in T cells', correct:false, why:'It lowers IL-2 (slide 26).'},
  {t:'Sunlight changes its chemical structure in skin', correct:false, why:'That is her explanation of retinoid photosensitivity (T 123–125).'}],
 teach:'Slide 30, boxed warning: increased risk of lymphoma and other malignancies, particularly of the skin, and of bacterial, viral, fungal and protozoal infections, including opportunistic infections.',
 cite:D2+' slide 30; T 396–403'},

{id:'L2-074', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'oral-cni-shared-ae', multi:true,
 tags:['list','tell'], source:'both',
 stem:'Which adverse effects are shared by oral cyclosporine and tacrolimus? Select all that apply.',
 options:[
  {t:'Nephrotoxicity', correct:true, why:'Slide 30, both; (T 403–407).'},
  {t:'Hypertension', correct:true, why:'Slide 30, both; (T 404).'},
  {t:'Upper respiratory tract infections', correct:true, why:'Slide 30, both; (T 404–405).'},
  {t:'Gingival hyperplasia', correct:false, why:'Slide 30: cyclosporine only.'},
  {t:'Neuropathies', correct:false, why:'Slide 30: tacrolimus only.'}],
 teach:'Slide 30, both drugs: nephrotoxicity, hypertension, upper respiratory tract infections, cough and headache; plus opportunistic infections in immunosuppressed patients (T 403–406). Cyclosporine: gingival hyperplasia. Tacrolimus: neuropathies.',
 cite:D2+' slide 30; T 403–419'},

{id:'L2-075', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'oral-cni-nephro',
 tags:['adverse','cue'], source:'both',
 stem:'Which adverse effect of oral calcineurin inhibitors is significant enough that the drug sometimes has to be stopped?',
 options:[
  {t:'Nephrotoxicity', correct:true, why:'Slide 30; (T 406–408) "nephrotoxicity is significant for both of these drugs ... Sometimes we have to take the patients off".'},
  {t:'Headache', correct:false, why:'Listed as a common side effect (slide 30), not the one she singled out.'},
  {t:'Cough', correct:false, why:'Listed as a common side effect (slide 30).'},
  {t:'Application-site burning', correct:false, why:'A topical CNI effect (slide 28).'}],
 teach:'Nephrotoxicity is significant with both cyclosporine and tacrolimus and can require taking patients off them (slide 30; T 406–408).',
 cite:D2+' slide 30; T 403–408'},

{id:'L2-076', skill:'tell', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'cyclosporine-gingival',
 tags:['tell'], source:'both',
 stem:'Which adverse effect is specific to cyclosporine among the calcineurin inhibitors?',
 options:[
  {t:'Gingival hyperplasia', correct:true, why:'Slide 30: cyclosporine only; (T 408–409).'},
  {t:'Neuropathies', correct:false, why:'Slide 30: tacrolimus only.'},
  {t:'Nephrotoxicity', correct:false, why:'Slide 30: both drugs.'},
  {t:'Upper respiratory tract infections', correct:false, why:'Slide 30: both drugs.'}],
 teach:'Drug-specific effects on slide 30: cyclosporine, gingival hyperplasia; tacrolimus, neuropathies (T 408–410).',
 cite:D2+' slide 30; T 408–410'},

{id:'L2-077', skill:'tell', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'tacrolimus-neuropathy',
 tags:['tell','cue'], source:'both',
 stem:'Which adverse effect is specific to tacrolimus among the calcineurin inhibitors?',
 options:[
  {t:'Neuropathies', correct:true, why:'Slide 30: tacrolimus only; (T 418–419) "tact causes uh neuropathies".'},
  {t:'Gingival hyperplasia', correct:false, why:'Slide 30: cyclosporine only.'},
  {t:'Upper respiratory tract infections', correct:false, why:'Slide 30: both drugs.'},
  {t:'Nephrotoxicity', correct:false, why:'Slide 30: both drugs.'}],
 teach:'Tacrolimus causes neuropathies, with tingling in the hands and feet (slide 30; T 409–419).',
 note:'The drug chart lists tacrolimus only as topical (Protopic); slide 30 and the lecture teach the oral side effects of both drugs.',
 cite:D2+' slide 30; T 408–419'},

{id:'L2-078', skill:'tell', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'tacrolimus-neuropathy', dupOf:'L2-077',
 tags:['case','tell'], source:'both',
 stem:'A transplant patient on an oral calcineurin inhibitor reports tingling in the hands and feet. Which drug is most likely?',
 options:[
  {t:'Tacrolimus', correct:true, why:'Slide 30: neuropathies with tacrolimus only; (T 412–419) patients on tacrolimus complained of tingling in their hands and feet.'},
  {t:'Cyclosporine', correct:false, why:'Cyclosporine\'s specific effect is gingival hyperplasia (slide 30).'},
  {t:'Pimecrolimus', correct:false, why:'A topical calcineurin inhibitor for AD (slide 27).'},
  {t:'Apremilast', correct:false, why:'A PDE-4 inhibitor; its side effects are GI distress, headache, weight loss and depression (slide 34).'}],
 teach:'Tingling in the hands and feet points to the tacrolimus-specific neuropathy (slide 30; T 409–419).',
 cite:D2+' slide 30; T 408–419'},

{id:'L2-079', skill:'pk', prof:'Smith', tier:'new', topic:'l2-cni', sub:'oral', concept:'cni-cyp3a4',
 tags:['interaction'], source:'both',
 stem:'Why do cyclosporine and tacrolimus have many drug interactions?',
 options:[
  {t:'They are metabolized by CYP3A4', correct:true, why:'Slide 30; (T 419–421) "they are metabolized by the CYP3A4 P450".'},
  {t:'They are metabolized by CYP2D6', correct:false, why:'Slide 30 names CYP3A4.'},
  {t:'They are excreted unchanged', correct:false, why:'They are metabolized, by CYP3A4 (slide 30).'},
  {t:'They bind calcium in the gut', correct:false, why:'Not the reason; the interactions come from CYP3A4 metabolism (slide 30).'}],
 teach:'Many drugs share CYP3A4, so there are many chances for interactions with both oral calcineurin inhibitors (slide 30; T 419–421). Apremilast is also metabolized by CYP3A4 (slide 34).',
 cite:D2+' slides 30, 34; T 419–421'},

/* ---- PDE-4 inhibitors ---------------------------------------------------- */
{id:'L2-080', skill:'mech', prof:'Smith', tier:'new', topic:'l2-pde', sub:'mech', concept:'pde-breaks-camp',
 tags:['mechanism','cue','figure'], source:'both',
 stem:'What does phosphodiesterase do to cAMP?',
 options:[
  {t:'Breaks it down to 5\'-AMP', correct:true, why:'Slide 32; (T 437–439) "What\'s important here is that you know that the cyclic AMP ... will be broken down by phosphodiesterase".'},
  {t:'Makes it from ATP', correct:false, why:'Adenylyl cyclase makes cAMP (slide 32 figure; T 438).'},
  {t:'Adds a phosphate to it', correct:false, why:'It hydrolyzes cAMP to 5\'-AMP (slide 32 caption; T 439).'},
  {t:'Moves it into the nucleus', correct:false, why:'Not the PDE role (slide 32).'}],
 teach:'Adenylyl cyclase makes cAMP; phosphodiesterase breaks it down to 5\'-AMP. Inhibiting PDE raises cAMP (slide 32; T 437–441).',
 cite:D2+' slide 32; T 433–441'},

{id:'L2-081', skill:'mech', prof:'Smith', tier:'new', topic:'l2-pde', sub:'mech', concept:'pde4-camp-effects',
 tags:['mechanism'], source:'both',
 stem:'What follows when a PDE-4 inhibitor raises cellular cAMP?',
 options:[
  {t:'Inflammatory cells are inhibited', correct:true, why:'Slide 32: increased cAMP gives smooth muscle relaxation and inhibition of inflammatory cells; (T 440–444) less cytokine production.'},
  {t:'Inflammatory cells are activated', correct:false, why:'Reverses slide 32.'},
  {t:'Smooth muscle contracts', correct:false, why:'Slide 32: smooth muscle relaxes.'},
  {t:'NFAT is dephosphorylated', correct:false, why:'NFAT dephosphorylation is calcineurin\'s action (slide 26).'}],
 teach:'PDE-4 inhibitors are nonsteroidal anti-inflammatory drugs: more cAMP means less activity of inflammatory cells, less cytokine production and less inflammation (slide 32; T 430–448).',
 cite:D2+' slide 32; T 430–448'},

{id:'L2-082', skill:'mech', prof:'Smith', tier:'new', topic:'l2-pde', sub:'mech', concept:'pde4-isoform',
 tags:['mechanism'], source:'both',
 stem:'Why does inhibiting the PDE4 isoform in particular reduce skin inflammation?',
 options:[
  {t:'PDE4 is the main isoform in inflammatory cells', correct:true, why:'Slide 32: PDE4 is the predominant isoform in inflammatory cells, including mast cells, eosinophils, neutrophils, T lymphocytes and macrophages; (T 444–446).'},
  {t:'PDE4 is mainly found in keratinocytes of the epidermis', correct:false, why:'Slide 32 places PDE4 in inflammatory cells.'},
  {t:'PDE4 makes IL-2 in T cells', correct:false, why:'IL-2 comes from the calcineurin–NFAT pathway (slide 26).'},
  {t:'PDE4 is the receptor for vitamin D', correct:false, why:'The VDR is the vitamin D receptor (slide 21).'}],
 teach:'There are many PDE isoforms, but PDE4 predominates in mast cells, eosinophils, neutrophils, T lymphocytes and macrophages, so its inhibition targets inflammatory cells (slide 32; T 444–448).',
 cite:D2+' slide 32; T 444–448'},

{id:'L2-083', skill:'tell', prof:'Smith', tier:'new', topic:'l2-pde', sub:'cris', concept:'crisaborole-use',
 tags:['tell','numbers'], source:'both',
 stem:'For which patient is crisaborole 2% ointment approved?',
 options:[
  {t:'Age 2 or older with mild to moderate AD', correct:true, why:'Slide 33; (T 449–451).'},
  {t:'Any age with severe chronic plaque psoriasis', correct:false, why:'The oral PDE-4 inhibitor for psoriasis is apremilast (slide 34).'},
  {t:'Age 12 or older with cystic acne', correct:false, why:'Severe cystic acne is oral isotretinoin (slide 19).'},
  {t:'Under 2 with mild atopic dermatitis', correct:false, why:'Slide 33: 2 years of age and older.'}],
 teach:'Crisaborole: topical PDE-4 inhibitor, 2% ointment, mild to moderate AD, patients 2 years and older (slide 33; T 448–451).',
 cite:D2+' slide 33; T 448–451'},

{id:'L2-084', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-pde', sub:'cris', concept:'crisaborole-hypersens',
 tags:['counseling','cue'], source:'both',
 stem:'A patient using crisaborole develops urticaria and swelling where it is applied. What should the patient do?',
 options:[
  {t:'Stop using it at once', correct:true, why:'Slide 33: hypersensitivity; discontinue immediately; (T 459–460) "you need to have your patients stop using this product immediately".'},
  {t:'Continue; it fades in a few weeks', correct:false, why:'Continued use could cause a systemic hypersensitivity reaction (T 455–458).'},
  {t:'Apply a thinner layer', correct:false, why:'Hypersensitivity calls for stopping, not dose reduction (slide 33).'},
  {t:'Add a topical corticosteroid', correct:false, why:'A steroid with the drug reduces calcipotriene irritation (slide 22); it is not her advice here.'}],
 teach:'Crisaborole hypersensitivity (contact urticaria, severe pruritus, swelling, erythema) is uncommon, under 1%, but more significant than the application-site pain: enough drug reaches the circulation that continued use could cause a systemic reaction (slide 33; T 453–461).',
 cite:D2+' slide 33; T 453–461'},

{id:'L2-085', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-pde', sub:'cris', concept:'crisaborole-ae-rates', lowYield:true,
 tags:['numbers'], source:'both',
 stem:'In about what share of crisaborole patients does application-site pain occur?',
 options:[
  {t:'About 4%', correct:true, why:'Slide 33: application site pain in 4% of patients; (T 451–452).'},
  {t:'Less than 1%', correct:false, why:'Under 1% is the rate for hypersensitivity (slide 33; T 460).'},
  {t:'About 40%', correct:false, why:'Slide 33 gives 4%.'},
  {t:'About 90%', correct:false, why:'Slide 33 gives 4%.'}],
 teach:'Slide 33: application site pain 4%; hypersensitivity less than 1%, but the more significant risk (T 451–461).',
 cite:D2+' slide 33; T 451–461'},

{id:'L2-086', skill:'tell', prof:'Smith', tier:'new', topic:'l2-pde', sub:'apr', concept:'apremilast-vs-crisaborole',
 tags:['tell'], source:'both',
 stem:'How does apremilast differ from crisaborole?',
 options:[
  {t:'It is oral and used for psoriasis', correct:true, why:'Slide 34; (T 464–466) "This is oral, and we use this to treat psoriasis".'},
  {t:'It inhibits calcineurin, not PDE4', correct:false, why:'Both are PDE-4 inhibitors with the same mechanism (T 465–466).'},
  {t:'It is topical and used for acne', correct:false, why:'Apremilast is oral (slide 34).'},
  {t:'It is a 2% ointment for children', correct:false, why:'That describes crisaborole (slide 33).'}],
 teach:'Same mechanism, different route and use: crisaborole is a topical ointment for AD; apremilast is oral for psoriasis, so its side effects differ (slides 33–34; T 464–467).',
 cite:D2+' slides 33–34; T 448–467'},

{id:'L2-087', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-pde', sub:'apr', concept:'apremilast-ae', multi:true,
 tags:['list'], source:'both',
 stem:'Which are side effects of apremilast? Select all that apply.',
 options:[
  {t:'Diarrhea and nausea', correct:true, why:'Slide 34; (T 467) "lots of GI distress".'},
  {t:'Headache', correct:true, why:'Slide 34; (T 467).'},
  {t:'Weight loss', correct:true, why:'Slide 34; (T 468–470).'},
  {t:'Gingival hyperplasia', correct:false, why:'A cyclosporine effect (slide 30).'},
  {t:'Hypercalciuria', correct:false, why:'A calcipotriene systemic effect (slide 22).'}],
 teach:'Slide 34: diarrhea, nausea and headache; caution in depressed patients; weight loss. Because it is oral, the side effects differ from topical crisaborole (T 466–470).',
 cite:D2+' slide 34; T 464–470'},

{id:'L2-088', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-pde', sub:'apr', concept:'apremilast-depression',
 tags:['counseling'], source:'both',
 stem:'In which patients should apremilast be used with caution?',
 options:[
  {t:'Patients with depression', correct:true, why:'Slide 34: use cautiously in depressed patients; (T 467–468) "It can exacerbate their depression".'},
  {t:'Patients under 2 years old', correct:false, why:'The under-2 limit belongs to topical CNIs and crisaborole (slides 27, 33).'},
  {t:'Patients who donate blood', correct:false, why:'The blood donation rule is for acitretin (slide 20).'},
  {t:'Patients with peripheral vascular disease', correct:false, why:'That caution is for salicylic acid (slide 40).'}],
 teach:'Apremilast can worsen depression (slide 34; T 467–468).',
 cite:D2+' slide 34; T 467–468'},

{id:'L2-089', skill:'pk', prof:'Smith', tier:'new', topic:'l2-pde', sub:'apr', concept:'apremilast-cyp3a4',
 tags:['interaction'], source:'both',
 stem:'Which drugs should be avoided with apremilast, and why?',
 options:[
  {t:'Strong CYP3A4 inducers; they cut its effect', correct:true, why:'Slide 34: don\'t use with strong CYP3A4 inducers; (T 470–472) "if you want the drugs to be effective, you don\'t want to have patients also on 3A4 enzyme inducers".'},
  {t:'Strong CYP3A4 inducers; they raise its toxicity', correct:false, why:'Inducers speed its metabolism and reduce its effect (T 470–472).'},
  {t:'Topical steroids; they block PDE4', correct:false, why:'Not an interaction given; steroids are nuclear receptor binders (T 197–200).'},
  {t:'Ethanol; it forms a toxic metabolite', correct:false, why:'The ethanol rule belongs to acitretin (slide 20).'}],
 teach:'Apremilast is metabolized by CYP3A4; strong inducers lower its levels and its efficacy (slide 34; T 470–472).',
 cite:D2+' slide 34; T 470–472'},

/* ---- Keratolytics -------------------------------------------------------- */
{id:'L2-090', skill:'class', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'keratolytic-class',
 tags:['room','class'], source:'both',
 stem:'What do keratolytics do, and which skin disease are they mainly used for?',
 options:[
  {t:'Break up the outer keratinocytes; acne', correct:true, why:'Slide 35: keratolytics break down keratinocytes; her questions to the room (T 479–482), answered "Acne".'},
  {t:'Inhibit calcineurin in activated T cells; AD', correct:false, why:'That is the calcineurin inhibitor class (slide 24).'},
  {t:'Bind the VDR; psoriasis', correct:false, why:'That is calcipotriene (slide 21).'},
  {t:'Raise cAMP in mast cells; AD', correct:false, why:'That is the PDE-4 inhibitor class (slide 32).'}],
 teach:'Keratolytics help the outer keratinocyte layer break apart, which opens covered comedones. They are old products whose mechanisms are often not known (slide 35; T 478–485).',
 cite:D2+' slide 35; T 478–485'},

{id:'L2-091', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'bpo-moa',
 tags:['mechanism'], source:'both',
 stem:'What is the postulated mechanism of benzoyl peroxide in acne?',
 options:[
  {t:'Antimicrobial plus peeling and comedolytic', correct:true, why:'Slide 36; (T 486–489) "So antimicrobial and peeling".'},
  {t:'Shrinking the sebaceous glands', correct:false, why:'Linked to isotretinoin (slide 19).'},
  {t:'Binding the 30S subunit of the bacterial ribosome', correct:false, why:'That is the tetracycline mechanism (slide 42).'},
  {t:'Reduction to hydrogen sulfide', correct:false, why:'That is sulfur (slide 38).'}],
 teach:'Benzoyl peroxide is thought to act against P. acnes and to help the skin peel, breaking open comedones (slide 36; T 486–489).',
 cite:D2+' slide 36; T 486–489'},

{id:'L2-092', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'bpo-pd', multi:true,
 tags:['mechanism','list'], source:'both',
 stem:'Which are pharmacological effects of benzoyl peroxide in acne? Select all that apply.',
 options:[
  {t:'Loosens keratinocytes', correct:true, why:'Slide 36; (T 489–490).'},
  {t:'Increases keratinocyte turnover', correct:true, why:'Slide 36; (T 490–493).'},
  {t:'Prevents closure of follicles', correct:true, why:'Slide 36; (T 494–495).'},
  {t:'Reduces sebum production', correct:false, why:'Reduced sebaceous gland function is linked to isotretinoin (slide 19).'}],
 teach:'Slide 36: loosens keratinocytes, increases their turnover, prevents closure of follicles, and acts against P. acnes. Faster movement up and out of the follicle keeps follicles from closing (T 489–496).',
 cite:D2+' slide 36; T 489–496'},

{id:'L2-093', skill:'pk', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'bpo-benzoic',
 tags:['mechanism'], source:'both',
 stem:'After penetrating the stratum corneum and follicles, benzoyl peroxide is converted to which probable active compound?',
 options:[
  {t:'Benzoic acid', correct:true, why:'Slide 36; (T 498–500) "It\'s probably the benzoic acid that is active".'},
  {t:'Hydrogen sulfide', correct:false, why:'Sulfur is reduced to hydrogen sulfide (slide 38).'},
  {t:'Salicylic acid', correct:false, why:'A separate keratolytic (slide 39).'},
  {t:'Retinoic acid', correct:false, why:'Tretinoin is retinoic acid (slide 17).'}],
 teach:'Benzoyl peroxide penetrates the stratum corneum and follicular openings and is metabolized to benzoic acid, probably the active compound (slide 36; T 497–500).',
 cite:D2+' slide 36; T 497–500'},

{id:'L2-094', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'bpo-sensitizer',
 tags:['adverse','cue'], source:'both',
 stem:'A patient develops swollen, scaly eyelids after using benzoyl peroxide near the eyes. Which property explains this?',
 options:[
  {t:'It is a potent contact sensitizer', correct:true, why:'Slide 37; (T 500–501, 508) "it is a very potent sensitizer".'},
  {t:'It causes photosensitivity', correct:false, why:'Photosensitivity is listed for retinoids and calcipotriene (slides 16, 22), not benzoyl peroxide (slide 37).'},
  {t:'It is comedogenic', correct:false, why:'Comedogenic is a sulfur side effect (slide 38).'},
  {t:'It raises the blood salicylate level', correct:false, why:'Salicylism belongs to salicylic acid (slide 40).'}],
 teach:'Slide 37: skin irritation (drying, peeling, burning, blistering, scaling, edema); a potent contact sensitizer; keep it away from the eyes and mucous membranes.',
 cite:D2+' slide 37; T 500–510'},

{id:'L2-095', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'bpo-counsel', multi:true,
 tags:['counseling','tell'], source:'both',
 stem:'Which counseling points apply to benzoyl peroxide? Select all that apply.',
 options:[
  {t:'Keep it away from the eyes', correct:true, why:'Slide 37; (T 509–510).'},
  {t:'Keep it off mucous membranes', correct:true, why:'Slide 37; (T 509–510).'},
  {t:'It can bleach hair and colored fabrics', correct:true, why:'Slide 37; (T 510–511).'},
  {t:'Avoid alcohol for 2 months after', correct:false, why:'That is the acitretin rule (slide 20).'},
  {t:'Keep weekly use under 100 g', correct:false, why:'That is the calcipotriene limit (slide 22).'}],
 teach:'Slide 37 cautions: avoid the eyes and mucous membranes; as an oxidant it can bleach hair and colored fabrics.',
 cite:D2+' slide 37; T 509–515'},

{id:'L2-096', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'bpo', concept:'bpo-oxidant',
 tags:['reasoning'], source:'both',
 stem:'Why can benzoyl peroxide bleach hair and colored fabrics?',
 options:[
  {t:'It is an oxidant', correct:true, why:'Slide 37; (T 510–511) "it is an oxidant. It is really good at bleaching hair and fabrics".'},
  {t:'It is reduced to hydrogen sulfide', correct:false, why:'That is sulfur (slide 38).'},
  {t:'It is a strong acid', correct:false, why:'Slide 37 gives oxidant as the reason.'},
  {t:'It changes structure in sunlight', correct:false, why:'Her explanation of retinoid photosensitivity (T 123–125).'}],
 teach:'As an oxidant, benzoyl peroxide can bleach hair and colored fabrics (slide 37; T 510–515).',
 cite:D2+' slide 37; T 510–515'},

{id:'L2-097', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sul', concept:'sulfur-bacteriostatic',
 tags:['mechanism'], source:'both',
 stem:'What antibacterial effect does sulfur have in acne?',
 options:[
  {t:'Bacteriostatic: it stops bacterial growth', correct:true, why:'Slide 38; (T 516–518) "it doesn\'t kill off the bacteria, but it helps prevent them from, uh, proliferating".'},
  {t:'Bactericidal: it kills P. acnes', correct:false, why:'(T 517) "it doesn\'t kill off the bacteria".'},
  {t:'It binds the 50S subunit of the bacterial ribosome', correct:false, why:'That is chloramphenicol and the macrolides (slide 42).'},
  {t:'It has no antibacterial effect', correct:false, why:'Slide 38: bacteriostatic properties.'}],
 teach:'Sulfur is a mild keratolytic with bacteriostatic properties (slide 38; T 515–518).',
 cite:D2+' slide 38; T 515–518'},

{id:'L2-098', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sul', concept:'sulfur-h2s',
 tags:['mechanism'], source:'both',
 stem:'How does sulfur promote peeling in acne?',
 options:[
  {t:'Hydrogen sulfide inflames keratinocytes', correct:true, why:'Slide 38: sulfur is reduced to hydrogen sulfide inside keratinocytes, causing inflammation that promotes peeling and unblocking of plugs; (T 518–524).'},
  {t:'Benzoic acid loosens keratinocytes', correct:false, why:'Benzoic acid is the benzoyl peroxide metabolite (slide 36).'},
  {t:'It solubilizes stratum corneum proteins', correct:false, why:'That is salicylic acid (slide 39).'},
  {t:'It binds the RAR on keratinocytes', correct:false, why:'RAR binding belongs to retinoids (PC slide 14).'}],
 teach:'A little inflammation from hydrogen sulfide seems to help peeling and opening of comedones, even though acne itself has an inflammatory component (slide 38; T 518–524).',
 cite:D2+' slide 38; T 518–524'},

{id:'L2-099', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sul', concept:'sulfur-ae', multi:true,
 tags:['list','tell'], source:'both',
 stem:'Which are side effects of topical sulfur? Select all that apply.',
 options:[
  {t:'Skin irritation and redness', correct:true, why:'Slide 38; (T 524–525).'},
  {t:'Comedogenic flare', correct:true, why:'Slide 38: comedogenic; (T 526–527).'},
  {t:'Sulfur odor', correct:true, why:'Slide 38; (T 529–530) "It smells like sulfur".'},
  {t:'Bleaching of fabrics', correct:false, why:'Benzoyl peroxide, an oxidant (slide 37).'},
  {t:'Salicylism', correct:false, why:'Salicylic acid (slide 40).'}],
 teach:'Slide 38: redness, skin irritation, peeling, comedogenic, sulfur odor.',
 cite:D2+' slide 38; T 524–534'},

{id:'L2-100', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sul', concept:'sulfur-comedogenic',
 tags:['reasoning','counseling'], source:'transcript',
 stem:'Why is sulfur called comedogenic when it is used to treat acne?',
 options:[
  {t:'Peeling uncovers comedones under the surface', correct:true, why:'(T 526–527) "just like the retinoids, as you start getting those keratinocytes to slough off the skin, you\'re uncovering some subsurface [comedones]".'},
  {t:'It feeds P. acnes in the follicle', correct:false, why:'Sulfur is bacteriostatic against bacteria (slide 38).'},
  {t:'It increases sebum production', correct:false, why:'Not a mechanism given (T 524–528).'},
  {t:'It thickens the stratum corneum over the follicle', correct:false, why:'It promotes peeling (slide 38).'}],
 teach:'Like retinoids, sulfur can make acne look worse early because peeling brings up hidden comedones; patients should keep using it through that stage (T 526–529).',
 cite:D2+' slide 38; T 524–529'},

{id:'L2-101', skill:'mech', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'salicylic-moa',
 tags:['mechanism'], source:'both',
 stem:'What is the proposed mechanism of salicylic acid in acne?',
 options:[
  {t:'Solubilizes stratum corneum surface proteins', correct:true, why:'Slide 39: may solubilize cell surface proteins that keep the stratum corneum intact; (T 537–541).'},
  {t:'Is reduced to hydrogen sulfide in cells', correct:false, why:'That is sulfur (slide 38).'},
  {t:'Is metabolized to benzoic acid', correct:false, why:'That is benzoyl peroxide (slide 36).'},
  {t:'Binds the 30S subunit of the bacterial ribosome', correct:false, why:'That is the tetracyclines (slide 42).'}],
 teach:'Dissolving the proteins that keep the stratum corneum intact loosens keratinocytes and promotes shedding, opening comedones (slide 39; T 537–541).',
 cite:D2+' slide 39; T 534–541'},

{id:'L2-102', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'salicylic-peel-not-desquamate',
 tags:['cue','counseling'], source:'both',
 stem:'What degree of skin effect is the therapeutic goal with salicylic acid for acne?',
 options:[
  {t:'Mild peeling', correct:true, why:'(T 541–543) "the effects of it is should be peeling only. That\'s what we want therapeutically mild peeling"; slide 39.'},
  {t:'Deep desquamation', correct:false, why:'(T 544–545) desquamation peels off deeper layers: "You don\'t want that happening".'},
  {t:'Ulceration of the comedone', correct:false, why:'Ulceration is a side effect of high concentrations (slide 40).'},
  {t:'No visible change in the skin', correct:false, why:'Mild peeling is the intended effect (T 543).'}],
 teach:'Slide 39: effects range from peeling to desquamation. The goal is mild peeling; desquamation removes deeper layers and is unwanted (T 541–545).',
 cite:D2+' slide 39; T 541–545'},

{id:'L2-103', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'salicylic-3-6',
 tags:['numbers','cue'], source:'both',
 stem:'Which salicylic acid concentration is used for acne, dandruff and psoriasis?',
 options:[
  {t:'3–6%', correct:true, why:'Slide 40; (T 546–547) "You want to use products that are only 3 to 6% salicylic acid".'},
  {t:'0.1–0.5%', correct:false, why:'Slide 40 gives 3–6%.'},
  {t:'10–20%', correct:false, why:'Above 6% can cause skin damage (T 547).'},
  {t:'Up to 40%', correct:false, why:'Up to 40% is for warts and corns (slide 40).'}],
 teach:'Slide 40: 3–6% for dandruff, acne and psoriasis; greater than 6% may damage skin; up to 40% for wart and corn removal.',
 cite:D2+' slide 40; T 545–552'},

{id:'L2-104', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'salicylic-over-6',
 tags:['numbers'], source:'both',
 stem:'What is the risk of salicylic acid above 6% on normal skin?',
 options:[
  {t:'Skin damage from peeling too deeply', correct:true, why:'(T 547–548) "Greater than 6% can cause skin damage. You\'ll desquamate or you\'ll peel too deeply"; slide 40.'},
  {t:'Photosensitivity from structure change', correct:false, why:'Her explanation of retinoid photosensitivity (T 123–125).'},
  {t:'Bleaching of hair', correct:false, why:'Benzoyl peroxide (slide 37).'},
  {t:'Hypercalcemia', correct:false, why:'Calcipotriene (slide 22).'}],
 teach:'Above 6% the peeling goes too deep and can damage skin (slide 40; T 547–548).',
 note:'Slide 40 prints "6% - may cause skin damage" without a "greater than" sign; she said "Greater than 6% can cause skin damage" (T 547), and Katzung ch 61 agrees (support). Keyed to greater than 6%.',
 cite:D2+' slide 40; T 545–548'},

{id:'L2-105', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'salicylic-40',
 tags:['counseling'], source:'both',
 stem:'How should a 40% salicylic acid product be used?',
 options:[
  {t:'On a wart or corn, not the skin beside it', correct:true, why:'Slide 40: up to 40% for wart and corn removal; (T 548–552) apply it to the wart or corn, not the healthy skin beside it.'},
  {t:'Spread thinly over the acne-prone skin of the face', correct:false, why:'(T 549–550) "Do not use those products on the skin for acne".'},
  {t:'As a daily face wash', correct:false, why:'Face washes are low-strength keratolytics (T 534–536); 40% damages healthy skin (T 552).'},
  {t:'On scalp psoriasis plaques', correct:false, why:'Psoriasis uses 3–6% (slide 40).'}],
 teach:'High-strength salicylic acid is for thick warts and corns, applied to the lesion; on healthy skin it causes damage (slide 40; T 548–552).',
 cite:D2+' slide 40; T 548–552'},

{id:'L2-106', skill:'adverse', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'salicylism',
 tags:['room','adverse'], source:'both',
 stem:'What is salicylism?',
 options:[
  {t:'Salicylate overdose', correct:true, why:'Slide 40; her question to the room (T 555–557): "the term we use for uh a salicylate um overdose ... That\'s a dangerous situation."'},
  {t:'Salicylate contact allergy', correct:false, why:'Allergic reactions are listed separately on slide 40.'},
  {t:'Deep peeling from salicylate', correct:false, why:'That is desquamation (T 541–545).'},
  {t:'Salicylate-induced ulceration', correct:false, why:'Ulceration with high concentrations is a separate side effect (slide 40).'}],
 teach:'Slide 40 side effects: irritation of normal skin, ulceration at high concentrations, allergic reactions (urticaria, anaphylaxis, erythema), and salicylism, a dangerous level of salicylate in the blood (T 552–557).',
 cite:D2+' slide 40; T 552–557'},

{id:'L2-107', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'salicylism-additive',
 tags:['room','interaction','counseling'], source:'transcript',
 stem:'A patient using a salicylic acid acne product also rubs a salicylate muscle cream on sore joints. What is the concern?',
 options:[
  {t:'Added salicylate raises the salicylism risk', correct:true, why:'Her question to the room (T 557–563): topical salicylate products used like NSAIDs "you\'ll definitely contribute to salicyism, absorbing too much of the salicylate".'},
  {t:'The cream chemically inactivates the salicylic acid', correct:false, why:'Not stated; the concern is additive salicylate (T 561–563).'},
  {t:'The two products bleach the skin', correct:false, why:'Bleaching is a benzoyl peroxide caution (slide 37).'},
  {t:'The cream blocks CYP3A4', correct:false, why:'CYP3A4 interactions belong to calcineurin inhibitors and apremilast (slides 30, 34).'}],
 teach:'Salicylate is absorbed from the skin. Topical salicylate pain products (her example was a muscle rub) add to the salicylate from keratolytics and contribute to salicylism (T 557–563).',
 cite:D2+' slide 40; T 555–563'},

{id:'L2-108', skill:'counsel', prof:'Smith', tier:'new', topic:'l2-ker', sub:'sal', concept:'salicylic-diabetes-pvd',
 tags:['counseling'], source:'both',
 stem:'Why should salicylic acid be used carefully on the extremities of patients with diabetes or peripheral vascular disease?',
 options:[
  {t:'Their damaged skin heals poorly', correct:true, why:'Slide 40; (T 563–567) "people with those conditions have difficulties healing their skin, especially on their extremities".'},
  {t:'They absorb less of the drug', correct:false, why:'Not the reason given (T 563–567).'},
  {t:'It raises their blood glucose', correct:false, why:'Not a reason given; the concern is ulceration that heals poorly (T 565–567).'},
  {t:'It causes peripheral neuropathy', correct:false, why:'Neuropathy is the tacrolimus side effect (slide 30).'}],
 teach:'Ulceration or deep desquamation of the skin is a problem for patients who heal poorly, so take care on the extremities in diabetes and peripheral vascular disease (slide 40; T 563–568).',
 cite:D2+' slide 40; T 563–568'},

/* ---- Acne antibiotics: the ribosome -------------------------------------- */
{id:'L2-109', skill:'class', prof:'Smith', tier:'new', topic:'l2-abx', sub:'ribo', concept:'abx-for-acne',
 tags:['room'], source:'transcript',
 stem:'Of atopic dermatitis, psoriasis and acne, which is treated with antibiotics aimed at its own disease process?',
 options:[
  {t:'Acne', correct:true, why:'Her question to the room (T 574–576): "Acne, right? You\'ve got a bacteria contributing to the disease."'},
  {t:'Atopic dermatitis', correct:false, why:'In AD a secondary infection is evaluated for the organism involved; these antibiotics target P. acnes (T 580–582).'},
  {t:'Psoriasis', correct:false, why:'Psoriasis drugs this day were the retinoids, calcipotriene, calcineurin inhibitors and apremilast (slides 18–34).'},
  {t:'Each of the three to a similar degree', correct:false, why:'(T 582) "these antibiotics are for treating the the acne bacteria, the P acnes".'}],
 teach:'Acne has a bacterial component, P. acnes, so antibiotics are part of acne therapy. Secondary bacterial infection in AD needs its own evaluation (T 574–582).',
 cite:D2+' slide 41; T 574–582'},

{id:'L2-110', skill:'mech', prof:'Smith', tier:'new', topic:'l2-abx', sub:'ribo', concept:'ribosome-subunits',
 tags:['figure','room'], source:'both',
 stem:'Which two subunits make up the bacterial ribosome that acne antibiotics target?',
 options:[
  {t:'50S and 30S', correct:true, why:'Slide 42 caption: the 70S ribosome with its 50S and 30S subunits; (T 587–588).'},
  {t:'60S and 40S', correct:false, why:'Slide 42 gives 50S and 30S for the bacterial ribosome.'},
  {t:'70S and 50S', correct:false, why:'70S is the whole ribosome; its subunits are 50S and 30S (slide 42).'},
  {t:'80S and 30S', correct:false, why:'Slide 42 gives 50S and 30S.'}],
 teach:'The ribosome builds proteins by linking amino acids brought by tRNAs; the large 50S subunit sits on top, the 30S below (slide 42; T 586–600).',
 cite:D2+' slide 42; T 586–600'},

{id:'L2-111', skill:'mech', prof:'Smith', tier:'new', topic:'l2-abx', sub:'ribo', concept:'tetracycline-30s',
 tags:['figure','mechanism'], source:'both',
 stem:'How do tetracyclines block bacterial protein synthesis?',
 options:[
  {t:'Bind 30S; block entry of the charged tRNA', correct:true, why:'Slide 42 caption: bind the 30S subunit and prevent binding of the incoming charged tRNA (step 1); (T 604–606).'},
  {t:'Bind 50S; block peptide bond formation', correct:false, why:'Slide 42 caption: that is chloramphenicol.'},
  {t:'Bind 30S; block release of the old tRNA', correct:false, why:'The caption places tetracycline action at step 1, entry of the charged tRNA (slide 42).'},
  {t:'Bind 50S; block entry of the charged tRNA', correct:false, why:'Tetracyclines bind the 30S subunit (slide 42).'}],
 teach:'"They prevent the new amino acid from being brought into the ribosome" (T 605–606): tetracyclines bind 30S and stop the charged tRNA entering the acceptor site (slide 42).',
 cite:D2+' slide 42; T 600–607'},

{id:'L2-112', skill:'mech', prof:'Smith', tier:'new', topic:'l2-abx', sub:'ribo', concept:'macrolide-50s',
 tags:['figure','mechanism'], source:'both',
 stem:'To which ribosomal subunit do macrolides bind?',
 options:[
  {t:'50S', correct:true, why:'Slide 42 caption: chloramphenicol and macrolides bind the 50S subunit; (T 600–602).'},
  {t:'30S', correct:false, why:'Tetracyclines bind the 30S subunit (slide 42).'},
  {t:'40S', correct:false, why:'Not a bacterial ribosome subunit on slide 42.'},
  {t:'60S', correct:false, why:'Not a bacterial ribosome subunit on slide 42.'}],
 teach:'Slide 42: chloramphenicol and macrolides bind 50S; tetracyclines bind 30S.',
 note:'The step macrolides block is held out: the slide 42 caption says peptide bond formation; slide 47 (taught 11/03) says translocation. The subunit is the same in both.',
 cite:D2+' slides 42, 47; T 600–604'},

{id:'L2-113', skill:'mech', prof:'Smith', tier:'new', topic:'l2-abx', sub:'ribo', concept:'chloramphenicol-step', lowYield:true,
 tags:['figure','mechanism'], source:'both',
 stem:'Chloramphenicol binds the 50S subunit. Which step of protein synthesis does it block?',
 options:[
  {t:'Peptide bond formation', correct:true, why:'Slide 42 caption: chloramphenicol binds 50S and blocks peptide bond formation (step 2); (T 600–603) "they prevent this linking of the new amino acid".'},
  {t:'Entry of the charged tRNA', correct:false, why:'That is the tetracycline step (slide 42).'},
  {t:'Release of the uncharged tRNA', correct:false, why:'Step 3 on slide 42; not the chloramphenicol site.'},
  {t:'Folding of the finished protein', correct:false, why:'Not shown on slide 42.'}],
 teach:'Slide 42 caption: tRNA entry (step 1), peptide bond formation (step 2), release of the uncharged tRNA (step 3), translocation (step 4). Chloramphenicol blocks step 2; tetracyclines block step 1.',
 note:'lowYield: chloramphenicol appears only in the figure and is not on the drug chart.',
 cite:D2+' slide 42; T 583–607'},

{id:'L2-114', skill:'tell', prof:'Smith', tier:'new', topic:'l2-abx', sub:'ribo', concept:'tetra-vs-macrolide',
 tags:['tell','figure'], source:'both',
 stem:'What separates tetracyclines from macrolides at the bacterial ribosome?',
 options:[
  {t:'Tetracyclines bind 30S; macrolides bind 50S', correct:true, why:'Slide 42 caption; (T 600–606) "That\'s a little bit different than the tetracycline class".'},
  {t:'Tetracyclines bind 50S; macrolides bind 30S', correct:false, why:'Swaps the subunits (slide 42).'},
  {t:'Both bind 30S at different steps', correct:false, why:'Macrolides bind 50S (slide 42).'},
  {t:'Both act on the cell wall', correct:false, why:'Both act on the ribosome (slide 42).'}],
 teach:'Tetracyclines: 30S, block entry of the charged tRNA. Chloramphenicol and macrolides: 50S (slide 42; T 600–607).',
 cite:D2+' slide 42; T 600–607'}
);

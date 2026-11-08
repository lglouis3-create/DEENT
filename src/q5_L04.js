/* ==========================================================================
   Lecture 4 questions (Dr. Sikazwe, Wednesday 11/04/2026, medicinal chemistry).
   Source: f26-DEENT-DPAW-mc.pdf, PDF pages 27–71 ("slide N" below = PDF page;
   the printed slide number is the PDF page minus 1 from p.23 on), with the
   11/04 lecture transcript (T@n = byte offset from grep -bo in
   DEENT_Lecture_11.04_transcript.txt). The vitamin D take-home reading
   (Bikle, Endotext) carries the pathway items, as he assigned it for a
   2-point question (T@985–1200, T@3530–4160).
   Left out on purpose: icotrokinra, slide 36 ("this is FYI for now ... Next
   year, I'll probably examine students on this", T@17124–17278); the
   monoclonal antibody PK slide 37 ("don't worry about this slide ... So skip
   this slide", T@17779–17972); Polleve-4 (slide 45; the count was not said
   aloud, T@23865); bemotrizinol "no" vs "low" skin absorption (slide 66 vs
   T@45290) is not asked as a magnitude. His list of slides to avoid
   (promised by Friday 11/06, T@48924) had not arrived when this was written.
   ========================================================================== */
const S4 = 'Lecture 4 (f26-DEENT-DPAW-mc.pdf)';

TOPICS.push(
 {id:'s4-vitd', name:'Psoriasis topical agents: vitamin D analogs', prof:'Sikazwe',
  cite:'slide 27; Vitamin D reading (Endotext) · taught 11/04 (Lecture 4)',
  subs:[
   {id:'analog', name:'Calcitriol and calcipotriene', cite:'slide 27'},
   {id:'path',   name:'Take-home: reactions, organs, enzymes', cite:'slide 27; reading lines 5–14, 60–71'}]},
 {id:'s4-limus', name:'Psoriasis topical agents: pimecrolimus and tacrolimus', prof:'Sikazwe',
  cite:'slides 28, 32 · taught 11/04 (Lecture 4)',
  subs:[
   {id:'pk',    name:'Skin protein binding and permeation', cite:'slide 28'},
   {id:'class', name:'Lactone classification (Polleve-3)', cite:'slides 28, 32'}]},
 {id:'s4-psret', name:'Psoriasis topical/oral agents: retinoids', prof:'Sikazwe',
  cite:'slide 29 · taught 11/04 (Lecture 4)',
  subs:[
   {id:'taz', name:'Tazarotene, acitretin, isotretinoin', cite:'slide 29'}]},
 {id:'s4-mtx', name:'Psoriasis systemic agents: methotrexate', prof:'Sikazwe',
  cite:'slides 30–31 · taught 11/04 (Lecture 4)',
  subs:[
   {id:'mech', name:'Pteridine, DHFR and folic acid', cite:'slide 30'},
   {id:'sar',  name:'MTX SAR', cite:'slide 31'}]},
 {id:'s4-sys', name:'Psoriasis systemic agents: cyclosporine and apremilast', prof:'Sikazwe',
  cite:'slides 33–34 · taught 11/04 (Lecture 4)',
  subs:[
   {id:'csa', name:'Cyclosporine', cite:'slide 33'},
   {id:'apr', name:'Apremilast', cite:'slide 34'}]},
 {id:'s4-acne', name:'Acne: terminology, components, pharmacotherapy', prof:'Sikazwe',
  cite:'slides 40–42 (not on his assigned slides) · taught 11/04 (Lecture 4)',
  subs:[
   {id:'terms', name:'Terminology and components', cite:'slides 40–41'},
   {id:'drugs', name:'Pharmacotherapy groups', cite:'slide 42'}]},
 {id:'s4-kera', name:'Acne: keratolytics', prof:'Sikazwe',
  cite:'slides 43–47 · taught 11/04 (Lecture 4)',
  subs:[
   {id:'ha',  name:'Glycolic and salicylic acid; hydroxy acid SAR', cite:'slides 43–44'},
   {id:'s',   name:'Sulfur', cite:'slide 46'},
   {id:'bpo', name:'Benzoyl peroxide', cite:'slide 47'}]},
 {id:'s4-ret', name:'Acne: retinoids by generation', prof:'Sikazwe',
  cite:'slides 48–51 · taught 11/04 (Lecture 4)',
  subs:[
   {id:'gen',  name:'Properties and teratogenicity', cite:'slide 48'},
   {id:'g1',   name:'1st generation: tretinoin and isotretinoin', cite:'slide 49'},
   {id:'g2',   name:'2nd generation: etretinate and acitretin', cite:'slide 50'},
   {id:'g3',   name:'3rd generation and ADMET', cite:'slide 51'}]},
 {id:'s4-horm', name:'Acne: hormones (estrogens, antiandrogens)', prof:'Sikazwe',
  cite:'slides 52–53 · taught 11/04 (Lecture 4)',
  subs:[
   {id:'oc', name:'Oral contraceptives', cite:'slide 52'},
   {id:'aa', name:'Antiandrogens', cite:'slide 53'}]},
 {id:'s4-abx', name:'Acne: antibiotics', prof:'Sikazwe',
  cite:'slides 54–55 · taught 11/04 (Lecture 4)',
  subs:[
   {id:'misc', name:'Azelaic acid, clindamycin, erythromycin', cite:'slide 54'},
   {id:'tet',  name:'Tetracyclines', cite:'slide 55'}]},
 {id:'s4-sun', name:'Wrinkle: sunblocks and sunscreens', prof:'Sikazwe',
  cite:'slides 58–66 (58–60 not on his assigned slides) · taught 11/04 (Lecture 4)',
  subs:[
   {id:'uv',    name:'Wrinkle causes and UV bands (Polleve-5)', cite:'slides 58–60'},
   {id:'inorg', name:'Zinc oxide and titanium dioxide', cite:'slide 61'},
   {id:'org',   name:'Organic sunscreens', cite:'slides 62–66'}]},
 /* Questions on pages outside Dr. Sikazwe's assigned pages for Exam 1 (his list of
    11/06: printed slides 7-9, 12, 15-22, 24-33, 42-54, 60-65). Not material he told
    the class to exclude: that is icotrokinra (p. 36) and the antibody PK slide (p. 37),
    which carry no questions. These carry lowYield (off practice papers) and
    unassigned (course.js pool filters: in no Exam 1 pool, so out of the pool cards on
    Weak spots and the exam-date scheduling). IDs and citations are unchanged. */
 {id:'sk-beyond', optional:true, name:'Beyond the Exam 1 assigned pages (optional)', prof:'Sikazwe',
  cite:'Not on Dr. Sikazwe\'s assigned slides for Exam 1 (his list of 11/06). Kept for optional practice; not on Exam 1 practice papers. f26-DEENT-DPAW-mc.pdf, Lectures 3–4',
  subs:[
   {id:'skin', name:'Review of skin anatomy: layers and sebum', cite:'slide 2'},
   {id:'ecz',  name:'Eczema: components, goals and drug list (11/03)', cite:'slides 4, 6, 13–14, 17–18, 25'},
   {id:'pso',  name:'Psoriasis', cite:'slides 13–14, 16–17'},
   {id:'hc',   name:'Hydrocortisone as reference; its derivatives (11/03)', cite:'slides 7, 18, 24–26'},
   {id:'tof',  name:'Tofacitinib (11/04)', cite:'slide 35'},
   {id:'acne', name:'Acne', cite:'slides 40–41'},
   {id:'uv',   name:'UV bands: the slide 58 figure', cite:'slide 58'},
   {id:'wrk',  name:'Wrinkles: causes, hydroquinone, AHAs, hyaluronic acid, topical retinoids (11/04)', cite:'slides 58, 67–70'}]}
);

QUESTIONS.push(
/* ---- Vitamin D analogs (slide 27) ---------------------------------------- */
{id:'S4-001', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'analog', concept:'vitd-antiproliferative',
 tags:['mechanism'], source:'both',
 stem:'Which property of vitamin D analogs is the reason they are used in psoriasis?',
 options:[
  {t:'They are antiproliferative', correct:true, why:'Slide 27 lists two properties, bone health and antiproliferative; "They have anti-proliferative property" (T@1505–1580).'},
  {t:'They raise blood calcium levels', correct:false, why:'Raising calcium absorption is the effect that limits their use, not the reason for it (T@1580–2000).'},
  {t:'They inhibit the calcineurin enzyme', correct:false, why:'Calcineurin inhibition is the mechanism of pimecrolimus, tacrolimus and cyclosporine (slides 28, 33).'},
  {t:'They block the binding of folic acid', correct:false, why:'Competing with folic acid at DHFR is how methotrexate works (slide 30).'}],
 teach:'Slide 27 gives vitamin D analogs two properties: 1) bone health and 2) antiproliferative. The antiproliferative property is why calcitriol and calcipotriene are used in psoriasis; the bone (calcium) property is what limits them (T@1505–2830).',
 cite:S4+' slide 27; T@1505–1580'},

{id:'S4-002', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'analog', concept:'vitd-hypercalcemia',
 tags:['adverse'], source:'both',
 stem:'What is the limiting factor for using vitamin D analogs in psoriasis?',
 options:[
  {t:'Hypercalcemia', correct:true, why:'Vitamin D increases calcium absorption into the blood; "this becomes the limiting factor" (T@1580–2000); the annotation on the student copy of slide 27 reads "hypercalcemia - becomes the limiting factor".'},
  {t:'Teratogenicity', correct:false, why:'Teratogenicity is the major limitation of the retinoids (slide 48; T@27300–27450).'},
  {t:'Skin atrophy', correct:false, why:'Not a limitation he gave for vitamin D analogs; the limit he named is the calcium effect (T@1580–2000).'},
  {t:'Hepatic first-pass loss', correct:false, why:'First-pass loss by CYP3A4 limits oral cyclosporine (slide 33), not vitamin D analogs.'}],
 teach:'Vitamin D increases absorption of calcium from the GI tract into the bloodstream. If the blood already has too much calcium (hypercalcemia), these molecules are best avoided; that calcium effect is the limiting factor for calcitriol and calcipotriene (slide 27; T@1580–2000, T@2700–2758).',
 cite:S4+' slide 27; T@1580–2000'},

{id:'S4-003', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'analog', concept:'vitd-hypercalcemia', dupOf:'S4-002',
 tags:['counsel'], source:'transcript',
 stem:'A patient with psoriasis already has a high blood calcium level. Which topical agent is the poorest choice?',
 options:[
  {t:'Calcipotriene', correct:true, why:'A vitamin D analog; it enhances calcium absorption from the GI tract into blood, so existing hypercalcemia argues against it (T@1800–2000, T@2700–2758).'},
  {t:'Tazarotene', correct:false, why:'A topical retinoid prodrug (slide 29); calcium is not its limitation.'},
  {t:'Pimecrolimus', correct:false, why:'A topical calcineurin inhibitor with high skin protein binding (slide 28); no calcium effect was taught.'},
  {t:'Salicylic acid', correct:false, why:'A keratolytic beta-hydroxy acid (slide 43); calcium is not its limitation.'}],
 teach:'"If you already the bloodstream already has too much calcium in it, then you probably don\'t want to use these molecules" (T@1800–1900). Both calcitriol and calcipotriene carry this limit (T@2700–2758).',
 cite:S4+' slide 27; T@1800–2000, T@2700–2758'},

{id:'S4-004', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'analog', concept:'calcipotriene-vs-calcitriol',
 tags:['compare'], source:'both',
 stem:'How does calcipotriene compare with calcitriol in its effect on calcium absorption?',
 options:[
  {t:'Both enhance calcium absorption', correct:true, why:'The attempt to lower the calcium effect "didn\'t work ... Both molecules wind up ... enhanced calcium absorption from the GI tract into blood" (T@2373–2758).'},
  {t:'Calcipotriene has no calcium effect', correct:false, why:'That was the goal of the analog, but it was not achieved (T@2373–2600).'},
  {t:'Calcipotriene lowers blood calcium', correct:false, why:'Neither molecule lowers calcium; both raise its absorption (T@2600–2758).'},
  {t:'Calcitriol has no calcium effect', correct:false, why:'Calcitriol, the active vitamin D3, has both properties: antiproliferative and calcium absorption (T@2450–2550).'}],
 teach:'Calcipotriene was developed from calcitriol to keep the antiproliferative action and lower the calcium absorption property. It did not succeed, so both are limited by hypercalcemia (slide 27; T@2373–2758).',
 cite:S4+' slide 27; T@2373–2758'},

{id:'S4-005', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'analog', concept:'secosteroid',
 tags:['classification'], source:'slide',
 stem:'Calcitriol and calcipotriene belong to which chemical class?',
 options:[
  {t:'Secosteroids', correct:true, why:'Slide 27: "Calcitriol (Rocaltrol) & Calcipotriene (Dovonex) are Secosteroids".'},
  {t:'Pteridines', correct:false, why:'Methotrexate is the pteridine (slide 30).'},
  {t:'Lactones', correct:false, why:'Pimecrolimus and tacrolimus are the macrolide lactones (slides 28, 32).'},
  {t:'Isoindolines', correct:false, why:'Apremilast is the isoindoline (slide 34).'}],
 teach:'A secosteroid is a steroid with one ring opened. On the slide 27 pathway the B ring of 7-dehydrocholesterol is opened to give cholecalciferol, which he described as a move "to an open molecule" (T@2989–3200).',
 cite:S4+' slide 27; T@2989–3200'},

/* ---- Vitamin D3 biosynthesis: the take-home (slide 27 + reading) ---------- */
{id:'S4-006', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-step1-reaction',
 tags:['take-home','pathway'], source:'both',
 stem:'What reaction begins the conversion of 7-dehydrocholesterol into vitamin D3?',
 options:[
  {t:'UV light opens the B ring', correct:true, why:'The reading: D3 is made in the skin from 7-dehydrocholesterol "by UV irradiation, which breaks the B ring to form pre-D3" (Vitamin D reading (Endotext), lines 60–61); "light is going to be involved" (T@4371).'},
  {t:'25-hydroxylation in the liver', correct:false, why:'That is a later step, D3 to 25-hydroxycholecalciferol (reading lines 63–67).'},
  {t:'1-alpha-hydroxylation in the kidney', correct:false, why:'That is the last step, to calcitriol (slide 27; reading lines 67–68).'},
  {t:'Glucuronidation by a UGT enzyme', correct:false, why:'Glucuronidation was taught for the apremilast metabolite (slide 34), not for vitamin D synthesis.'}],
 teach:'The slide 27 take-home asks for the reaction, the organs and the enzymes from 7-dehydrocholesterol to calcitriol (T@3530–3660). Step 1: in the skin, UV light breaks the B ring of 7-dehydrocholesterol to give pre-D3, which isomerizes to D3, cholecalciferol (Vitamin D reading (Endotext), lines 60–62). No enzyme is named for this light-driven step.',
 cite:S4+' slide 27; T@2989–3430, T@4330–4410'},

{id:'S4-007', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-step1-organ',
 tags:['take-home','pathway'], source:'both',
 stem:'In which organ is 7-dehydrocholesterol converted to cholecalciferol (vitamin D3)?',
 options:[
  {t:'Skin', correct:true, why:'"Vitamin D3 is produced in the skin from 7-dehydrocholesterol by UV irradiation" (Vitamin D reading (Endotext), line 60).'},
  {t:'Liver', correct:false, why:'The liver makes 25-hydroxycholecalciferol from D3 (reading lines 63–65).'},
  {t:'Kidney', correct:false, why:'The kidney makes calcitriol from 25-hydroxycholecalciferol (reading lines 67–68).'},
  {t:'Small intestine', correct:false, why:'The intestine absorbs calcium in response to vitamin D (T@1580–1700); it is not where D3 is made from 7-dehydrocholesterol.'}],
 teach:'Organs along the slide 27 pathway: skin (7-dehydrocholesterol to D3, with light), liver (D3 to 25-OH-cholecalciferol), kidney (25-OH-cholecalciferol to calcitriol by 1-alpha-hydroxylase) (Vitamin D reading (Endotext), lines 5–8, 60–68). D3 leaves the skin bound to vitamin D binding protein (lines 62–63).',
 cite:S4+' slide 27; T@3530–3813'},

{id:'S4-008', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-25-organ',
 tags:['take-home','pathway'], source:'both',
 stem:'In which organ is cholecalciferol mainly converted to 25-hydroxycholecalciferol?',
 options:[
  {t:'Liver', correct:true, why:'"The liver and other tissues metabolize vitamin D ... to 25OHD, the principal circulating form" (Vitamin D reading (Endotext), lines 63–65; also lines 7–8).'},
  {t:'Skin', correct:false, why:'The skin makes D3 from 7-dehydrocholesterol with UV light (reading line 60).'},
  {t:'Kidney', correct:false, why:'The kidney does the next step, 1-hydroxylation to calcitriol (reading lines 67–68).'},
  {t:'Parathyroid gland', correct:false, why:'PTH stimulates the renal 1-hydroxylase (reading lines 72–73); the gland does not do the 25-hydroxylation.'}],
 teach:'Slide 27 leaves the organ of this arrow as "organ??" for the take-home (T@3530–3813). The reading names the liver for 25-hydroxylation, with CYP2R1 the most important 25-hydroxylase (Vitamin D reading (Endotext), lines 63–67).',
 cite:S4+' slide 27; T@3530–3813'},

{id:'S4-009', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-25-enzyme',
 tags:['take-home','pathway'], source:'both',
 stem:'Which enzyme is the most important 25-hydroxylase acting on vitamin D3?',
 options:[
  {t:'CYP2R1', correct:true, why:'"Several enzymes have 25-hydroxylase activity, but CYP2R1 is the most important" (Vitamin D reading (Endotext), lines 65–67).'},
  {t:'CYP27B1', correct:false, why:'CYP27B1 is the 1-hydroxylase that makes calcitriol (reading lines 67–68, 13–14).'},
  {t:'CYP24A1', correct:false, why:'CYP24A1 is the 24-hydroxylase that starts catabolism of 25OHD and calcitriol (reading lines 77–81).'},
  {t:'CYP3A4', correct:false, why:'CYP3A4 was taught for cyclosporine, apremilast and tofacitinib metabolism (slides 33–35).'}],
 teach:'Enzymes along the pathway (Vitamin D reading (Endotext)): no enzyme for the light step in skin (lines 60–62); 25-hydroxylase, mainly CYP2R1, in the liver (lines 63–67); 1-alpha-hydroxylase, CYP27B1, mainly in the kidney (lines 67–68); CYP24A1 for catabolism (lines 77–81).',
 cite:S4+' slide 27; T@3530–3813'},

{id:'S4-010', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-1a-organ',
 tags:['take-home','pathway'], source:'both',
 stem:'In which organ does 25-hydroxycholecalciferol mainly become calcitriol?',
 options:[
  {t:'Kidney', correct:true, why:'25OHD is "further metabolized to 1,25(OH)2D principally in the kidney, by the enzyme CYP27B1" (Vitamin D reading (Endotext), lines 67–68).'},
  {t:'Liver', correct:false, why:'The liver does the step before, the 25-hydroxylation (reading lines 63–65).'},
  {t:'Skin', correct:false, why:'The skin makes D3 with UV light (reading line 60); keratinocytes can make some calcitriol, but the principal site is the kidney (lines 67–68, 74–75).'},
  {t:'Pancreas', correct:false, why:'Not a site of this step in the reading (lines 67–70).'}],
 teach:'Slide 27 gives the enzyme of this step, 1-alpha-hydroxylase, and asks for the organ: "here, I\'ve already given you the enzyme, and you can fit in what organ is here" (T@3813). The reading: principally the kidney (Vitamin D reading (Endotext), lines 67–68).',
 cite:S4+' slide 27; T@3813–3900'},

{id:'S4-011', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-1a-enzyme',
 tags:['take-home','pathway'], source:'both',
 stem:'Which enzyme converts 25-hydroxycholecalciferol to calcitriol?',
 options:[
  {t:'1-alpha-hydroxylase', correct:true, why:'Slide 27 labels this arrow "(1-α-hydroxylase)"; the reading names it CYP27B1, the renal 1-hydroxylase (Vitamin D reading (Endotext), lines 13–14, 67–68).'},
  {t:'24-hydroxylase', correct:false, why:'CYP24A1 24-hydroxylates 25OHD and calcitriol as the first catabolic step (reading lines 77–82).'},
  {t:'Dihydrofolate reductase', correct:false, why:'DHFR is the methotrexate target in folate reduction (slide 30).'},
  {t:'Carboxylesterase', correct:false, why:'Carboxylesterases activate the ester prodrugs tazarotene and etretinate (slides 29, 50).'}],
 teach:'Calcitriol is 1,25-dihydroxycholecalciferol, the active vitamin D3 on slide 27. The last hydroxyl, at carbon 1, is added by 1-alpha-hydroxylase (CYP27B1), mainly in the kidney (Vitamin D reading (Endotext), lines 67–71).',
 cite:S4+' slide 27; T@3813–3900'},

{id:'S4-012', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-circulating',
 tags:['take-home','pathway'], source:'slide',
 stem:'Which form of vitamin D3 is the inactive form that circulates in the blood?',
 options:[
  {t:'25-OH-cholecalciferol', correct:true, why:'Slide 27 labels it "Inactive circulating Vit. D3"; the reading calls 25OHD "the principal circulating form of vitamin D" (Vitamin D reading (Endotext), lines 64–65).'},
  {t:'1,25-Di-OH-cholecalciferol', correct:false, why:'Calcitriol (1,25-di-OH-cholecalciferol) is the active vitamin D3 (slide 27).'},
  {t:'7-Dehydrocholesterol', correct:false, why:'The starting sterol in skin, before any light step (slide 27).'},
  {t:'Calcipotriene', correct:false, why:'A synthetic analog used topically for psoriasis (slide 27), not a natural circulating form.'}],
 teach:'Slide 27 pathway: 7-dehydrocholesterol → cholecalciferol (vitamin D3) → 25-OH-cholecalciferol (inactive, circulating) → calcitriol, 1,25-di-OH-cholecalciferol (active vitamin D3).',
 cite:S4+' slide 27; T@2758–2989'},

{id:'S4-013', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-isomerization',
 tags:['take-home','pathway'], source:'both',
 stem:'After UV light opens the B ring of 7-dehydrocholesterol, what turns pre-vitamin D3 into vitamin D3?',
 options:[
  {t:'An isomerization in the skin', correct:true, why:'"Pre-D3 isomerizes to D3" (Vitamin D reading (Endotext), lines 61–62), still in the skin.'},
  {t:'A hydroxylation in the liver', correct:false, why:'Hydroxylation at C25 in the liver comes after D3 is formed (reading lines 63–67).'},
  {t:'A conjugation with glycine', correct:false, why:'Glycine conjugation was taught for salicylic acid (slide 43; T@22443).'},
  {t:'An ester hydrolysis by CE enzymes', correct:false, why:'Ester hydrolysis activates tazarotene and etretinate (slides 29, 50).'}],
 teach:'He described the first change as "a move from this molecule to an open ... molecule" followed by "other biotransformations" (T@2989–3430). The reading splits the skin events: UV opens the B ring to pre-D3, pre-D3 isomerizes to D3, and continued UV gives tachysterol and lumisterol (Vitamin D reading (Endotext), lines 60–62).',
 cite:S4+' slide 27; T@2989–3430'},

{id:'S4-014', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-vitd', sub:'path', concept:'vitd-uvb',
 tags:['take-home','pathway'], source:'both',
 stem:'Which band of sunlight drives vitamin D3 production in the skin?',
 options:[
  {t:'UVB', correct:true, why:'"Vitamin D production in the skin under the influence of sunlight (UVB)" (Vitamin D reading (Endotext), line 5).'},
  {t:'UVC', correct:false, why:'UVC rays usually do not get through the ozone layer (slide 58 figure); the reading names UVB (line 5).'},
  {t:'Visible light', correct:false, why:'The reading names UVB, not visible light (line 5).'},
  {t:'Infrared', correct:false, why:'Not named in the reading; the light step is driven by UVB (line 5).'}],
 teach:'In class he said only that "light is going to be involved" (T@4371). The assigned reading names the band: sunlight UVB, maximized at exposures that do not burn the skin (Vitamin D reading (Endotext), lines 5–6).',
 note:'The band (UVB) comes from the assigned reading, not his words; he said "light" (T@4371).',
 cite:S4+' slide 27; T@4330–4410'},

/* ---- Pimecrolimus and tacrolimus (slides 28, 32) ------------------------- */
{id:'S4-015', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'pk', concept:'limus-difference',
 tags:['compare','take-home'], source:'both',
 stem:'Pimecrolimus and tacrolimus differ most in which property?',
 options:[
  {t:'Absorption through the skin', correct:true, why:'"there are similarities in lipophilicity, structure, um, mechanism, but this is the biggest thing. They differ in this particular PK property, absorption through the skin" (T@5890–6070); slide 28 Notes.'},
  {t:'Their lipophilicity (log P)', correct:false, why:'Their log P values are similar (cLogP 6.0 and 5.8, slide 28; T@4780).'},
  {t:'Their mechanism of action', correct:false, why:'Both are calcineurin inhibitors that lower cytokine release (slide 28).'},
  {t:'Their overall ring structure', correct:false, why:'The structures are similar; they differ at Cl vs OH and ethyl vs allyl (T@4645–4780).'}],
 teach:'Slide 28 Notes: "similar in lipophilicity, structure, mechanism, but differ in skin permeation". Pimecrolimus has higher non-specific skin protein binding and stays in skin; tacrolimus has low skin protein binding and can reach the circulation.',
 cite:S4+' slide 28; T@5890–6070'},

{id:'S4-016', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'pk', concept:'limus-skin-binding',
 tags:['pk'], source:'both',
 stem:'Why does topical pimecrolimus cause few systemic adverse reactions?',
 options:[
  {t:'High non-specific skin protein binding', correct:true, why:'"Because of high non-specific protein binding. So it\'s, it binds to the skin ... so that it doesn\'t get into systemic circulation" (T@5075–5300); slide 28 "(low systemic ADRs)".'},
  {t:'It is too hydrophilic to enter skin', correct:false, why:'It is very lipophilic (cLogP 6.0, slide 28; T@4780).'},
  {t:'It is a prodrug needing a skin enzyme', correct:false, why:'No activation step was taught for pimecrolimus; the prodrugs were tazarotene and etretinate (slides 29, 50).'},
  {t:'It is cleared rapidly by CYP3A4 in skin', correct:false, why:'Not the explanation he gave; skin protein binding is (T@5075–5300).'}],
 teach:'Despite a high log P, pimecrolimus does not penetrate skin highly because it binds skin proteins. Keeping a topical drug out of the circulation is an advantage, "because we don\'t want what we apply to the skin to wind up systemic circulation" (T@4931–5300).',
 cite:S4+' slide 28; T@4931–5300'},

{id:'S4-017', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'pk', concept:'limus-skin-binding', dupOf:'S4-016',
 tags:['pk'], source:'both',
 stem:'Why is tacrolimus more likely than pimecrolimus to reach the systemic circulation after topical use?',
 options:[
  {t:'Low skin protein binding', correct:true, why:'Slide 28: "Tacrolimus - low skin protein binding"; "So that means it can do the opposite, can go in" (T@5414–5530).'},
  {t:'A much higher log P value', correct:false, why:'Its cLogP (5.8) is close to pimecrolimus (6.0) (slide 28).'},
  {t:'A smaller, non-cyclic structure', correct:false, why:'Both are macrocyclic lactones of similar structure (slides 28, 32).'},
  {t:'Activation by skin carboxylesterases', correct:false, why:'Carboxylesterases activate tazarotene and etretinate, not tacrolimus (slides 29, 50).'}],
 teach:'Because tacrolimus can enter the circulation, "you see people saying don\'t use tacrolimus as much" (T@5531–5700). The pair differs in this one PK property, skin permeation (slide 28).',
 cite:S4+' slide 28; T@5414–5700'},

{id:'S4-018', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'class', concept:'limus-structure',
 tags:['structure'], source:'both',
 stem:'Which structural features separate pimecrolimus from tacrolimus?',
 options:[
  {t:'Cl vs OH, and ethyl vs allyl', correct:true, why:'"The only points of difference are that chlorine and that methyl [the highlighted group is ethyl] group, and here you have that [all]ylic group and hydroxy" (T@4600–4780); highlighted on slide 28.'},
  {t:'A lactam vs a lactone ring', correct:false, why:'Both are lactones (macrolides) (slides 28, 32); the lactam is cyclosporine (slide 33).'},
  {t:'Aromatic vs non-aromatic rings', correct:false, why:'Aromatic ring count classifies retinoids (slides 49–51), not the limus pair.'},
  {t:'An ester prodrug vs an active acid', correct:false, why:'That separates tazarotene from tazarotenic acid (slide 29).'}],
 teach:'On slide 28 pimecrolimus carries a chlorine on the cyclohexyl ring and an ethyl group; tacrolimus carries a hydroxyl in that position and an allyl group. Otherwise the macrolide skeletons match.',
 cite:S4+' slide 28; T@4534–4780'},

{id:'S4-019', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'pk', concept:'limus-moa', lowYield:true,
 tags:['mechanism'], source:'both',
 stem:'What is the mechanism of pimecrolimus and tacrolimus?',
 options:[
  {t:'Calcineurin inhibition', correct:true, why:'Slide 28: "MoA: Calcineurin inhibitors - ↓ release of inflammatory cytokines"; (T@5784).'},
  {t:'Phosphodiesterase-4 inhibition', correct:false, why:'PDE4 inhibition is apremilast (slide 34).'},
  {t:'JAK inhibition', correct:false, why:'JAK inhibition is tofacitinib (slide 35).'},
  {t:'DHFR inhibition', correct:false, why:'DHFR inhibition is methotrexate (slide 30).'}],
 teach:'He said he was "Not so worried about mechanism of action" for this pair (T@5702): they inhibit calcineurin and in the end suppress the release of inflammatory cytokines. The point he stressed was skin permeation.',
 cite:S4+' slide 28; T@5702–5890'},

{id:'S4-020', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'class', concept:'limus-lactone',
 tags:['poll','verbatim'], source:'both',
 img:'s4-polleve3',
 stem:'Due to the selected functionality, this Limus drug molecule may be chemically classified as a ........ (The circled group is the -C(=O)-O- link inside the large ring of pimecrolimus.)',
 options:[
  {t:'Lactam', correct:false, why:'A lactam is a cyclic amide: "These are cyclic what amides, right?" (T@11620–11662); that is cyclosporine (slide 33).'},
  {t:'Lactone', correct:true, why:'"this is now part of a cyclic what? Structure And that is an ester functional group ... Are they called lactones? Yes." (T@11453–11700); Polleve-3 key, slide 32.'},
  {t:'Steroid', correct:false, why:'"Are they called steroids? Careful now. So, no, no, no." (T@11700); steroids have four fused rings A–D (slide 52).'},
  {t:'Pteridine', correct:false, why:'Pteridine is the ring system of methotrexate (slide 30).'}],
 teach:'A cyclic ester is a lactone; a cyclic amide is a lactam. The limus drugs are "Macrolide or lactone immunosuppressants" (slide 28). He framed this item: "If you had a molecule like this, and I circle a functional group ... how can we chemically classify this?" and "it could be a question just that simple" (T@11280–11870).',
 quote:'Polleve, 11/04, slide 32',
 cite:S4+' slides 28, 32; T@11280–11870'},

{id:'S4-021', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-limus', sub:'class', concept:'lactone-vs-lactam',
 tags:['structure'], source:'both',
 stem:'Which pairing of drug and ring functional group is correct?',
 options:[
  {t:'Cyclosporine, cyclic amide (lactam)', correct:true, why:'Cyclosporine is an 11 amino acid cyclic peptide; "the cyclic peptide ... can be described then as a what? And a lactam" (slide 33; T@12150–12254).'},
  {t:'Tacrolimus, 11 amino acid cyclic peptide', correct:false, why:'Tacrolimus is a macrolide lactone (slides 28, 32); the 11 amino acid cyclic peptide is cyclosporine (slide 33).'},
  {t:'Pimecrolimus, cyclic peroxide bond', correct:false, why:'Pimecrolimus is a lactone, a cyclic ester (slide 32); the peroxide is benzoyl peroxide (slide 47).'},
  {t:'Cyclosporine, cyclic ester (lactone)', correct:false, why:'Its ring is built from amide (peptide) bonds, so it is a lactam (T@12100–12254).'}],
 teach:'Peptide bonds are amide bonds; closing a chain of them into a ring makes a cyclic amide, a lactam (cyclosporine, slide 33). Closing a ring through an ester makes a lactone (pimecrolimus, tacrolimus; slides 28, 32).',
 cite:S4+' slides 32–33; T@11453–11720, T@12100–12254'},

/* ---- Retinoids for psoriasis (slide 29) ---------------------------------- */
{id:'S4-022', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-psret', sub:'taz', concept:'tazarotene-alkyne',
 tags:['structure'], source:'both',
 stem:'Tazarotene is described chemically as which kind of retinoid?',
 options:[
  {t:'An acetylenic (alkyne) retinoid', correct:true, why:'Slide 29: "An Acetylenic retinoid"; "acetylinic is our kind [alkyne]. Retinoid" (T@6884–6942).'},
  {t:'A non-aromatic 13-cis retinoid', correct:false, why:'That describes isotretinoin, a 1st-generation retinoid (slide 49).'},
  {t:'A mono-aromatic ethyl ester', correct:false, why:'That describes etretinate, 2nd generation (slide 50).'},
  {t:'A steroid with four fused rings', correct:false, why:'Retinoids derive from vitamin A (retinol), not the steroid nucleus (slide 48).'}],
 teach:'Tazarotene carries a carbon–carbon triple bond (alkyne, "acetylenic") linking its ring systems, and an ethyl ester at the end. It is applied topically and also counted with the 3rd-generation, poly-aromatic retinoids (slides 29, 51).',
 cite:S4+' slide 29; T@6800–6942'},

{id:'S4-023', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-psret', sub:'taz', concept:'tazarotene-prodrug',
 tags:['prodrug'], source:'both',
 stem:'How is tazarotene activated after it is applied to the skin?',
 options:[
  {t:'Ester hydrolysis by carboxylesterases', correct:true, why:'"it\'s also what? And Esther. Pro-drug. So that ... it needs ester hydrolysis by. CE enzymes, right, for activation" (T@6942–7082); "CE" arrow on slide 29.'},
  {t:'Complexation with the cyclophilin receptor', correct:false, why:'Complexation with cyclophilin activates cyclosporine (slide 33).'},
  {t:'Oxidation of its alkyne by CYP3A4', correct:false, why:'No oxidation step was taught; activation is ester hydrolysis (slide 29).'},
  {t:'Cleavage of a peroxide bond', correct:false, why:'Peroxide bond cleavage is how benzoyl peroxide acts (slide 47).'}],
 teach:'Tazarotene (ethyl ester prodrug) → carboxylesterase → tazarotenic acid, the active metabolite with a free carboxylic acid (slides 29, 51; T@6942–7125, T@30193–30300).',
 cite:S4+' slides 29, 51; T@6942–7125'},

{id:'S4-024', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-psret', sub:'taz', concept:'ce-enzymes', dupOf:'S4-023',
 tags:['room'], source:'transcript',
 stem:'What are the "CE" enzymes that activate ester prodrugs such as tazarotene?',
 options:[
  {t:'Carboxylesterases', correct:true, why:'"What are CE enzymes? Mhm. Carboxyl estraes [carboxylesterases]." (T@7082–7125).'},
  {t:'Cytochrome enzymes', correct:false, why:'CYP enzymes (e.g., 3A4) metabolize cyclosporine, apremilast and tofacitinib (slides 33–35); CE stands for carboxylesterase.'},
  {t:'Calcineurin enzymes', correct:false, why:'Calcineurin is the phosphatase blocked by the limus drugs and cyclosporine (slides 28, 33).'},
  {t:'Cholinesterases', correct:false, why:'Not the enzymes he named; CE = carboxylesterase (T@7082–7125).'}],
 teach:'Carboxylesterases hydrolyze esters to the carboxylic acid and an alcohol. In this lecture they activate tazarotene (slides 29, 51) and convert etretinate to acitretin (slide 50).',
 cite:S4+' slide 29; T@7082–7125'},

{id:'S4-025', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-psret', sub:'taz', concept:'retinoid-cooh',
 tags:['structure'], source:'transcript',
 fg:'tretinoin', stem:'Which functional group do the active retinoids share at one end of the molecule?',
 options:[
  {t:'A carboxylic acid', correct:true, why:'"they have this common functional group at the end, this carboxylic acid. So that\'s an important common feature" (T@7222–7330).'},
  {t:'A primary alcohol', correct:false, why:'Retinol (vitamin A1), the parent compound, ends in an alcohol (slide 49); the active drugs end in the acid.'},
  {t:'A sulfonic acid', correct:false, why:'The sulfonic acid belongs to ensulizole, a sunscreen (slide 64; T@43100).'},
  {t:'A tertiary amide', correct:false, why:'Not the shared group; the shared group is the carboxylic acid (T@7222).'}],
 teach:'Adapalene and trifarotene are directly active "because they have this exposed carboxylic acid"; tazarotene and etretinate are esters that must be hydrolyzed to reveal it (T@30193–30300; slides 50–51).',
 cite:S4+' slides 29, 51; T@7222–7330, T@30193–30300'},

{id:'S4-026', skill:'class', prof:'Sikazwe', tier:'new', topic:'s4-psret', sub:'taz', concept:'psoriasis-retinoid-routes', multi:true,
 tags:['list'], source:'both',
 stem:'Which retinoids are given orally for psoriasis? Select all that apply.',
 options:[
  {t:'Acitretin', correct:true, why:'Slide 29 "Oral Agent(s): Acitretin"; (T@7393).'},
  {t:'Isotretinoin', correct:true, why:'Slide 29 "Oral Agent(s): ... Isotretinoin"; (T@7393).'},
  {t:'Tazarotene', correct:false, why:'Slide 29 lists tazarotene as the topical agent.'},
  {t:'Calcipotriene', correct:false, why:'A vitamin D analog (secosteroid), not a retinoid (slide 27).'}],
 teach:'Slide 29: topical tazarotene; oral acitretin and isotretinoin. All come from vitamin A (retinol) and normalize keratinization and cell proliferation through nuclear receptors (T@6470–6640, T@7393–7550).',
 cite:S4+' slide 29; T@6640–7550'},

{id:'S4-027', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-psret', sub:'taz', concept:'retinoid-nuclear',
 tags:['mechanism'], source:'both',
 stem:'How do retinoids bring about their effect in psoriasis?',
 options:[
  {t:'They bind RAR/RXR nuclear receptors', correct:true, why:'"Retinoids bind to what? ... RXR and so on, receptors ... Nuclear receptors, and they bring about this normalization" (T@6470–6640); slide 29 "normalize keratinization & proliferation".'},
  {t:'They inhibit dihydrofolate reductase', correct:false, why:'That is methotrexate (slide 30).'},
  {t:'They block PDE4 and raise cAMP', correct:false, why:'That is apremilast (slide 34).'},
  {t:'They break keratin disulfide bonds', correct:false, why:'Thiolysis of disulfide bonds is how sulfur is thought to act (slide 46).'}],
 teach:'Retinoids are RAR and RXR agonists (slide 48). Through these nuclear receptors they normalize keratinization and cell proliferation (slide 29).',
 cite:S4+' slides 29, 48; T@6470–6640'},

/* ---- Methotrexate (slides 30–31) ----------------------------------------- */
{id:'S4-028', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'mech', concept:'mtx-pteridine',
 tags:['classification'], source:'both',
 fg:'methotrexate', stem:'Methotrexate is classified chemically as which of the following?',
 options:[
  {t:'A pteridine', correct:true, why:'Slide 30 "A pteridine"; "chemically we classify it as a pteridine based on this group here" (T@8238–8330).'},
  {t:'A lactone', correct:false, why:'The lactones are the limus macrolides (slides 28, 32).'},
  {t:'An isoindoline', correct:false, why:'Apremilast is the isoindoline (slide 34).'},
  {t:'A pyrrolopyrimidine', correct:false, why:'Tofacitinib is the pyrrolopyrimidine (slide 35).'}],
 teach:'The pteridine is the fused two-ring, nitrogen-rich heterocycle at the left of the methotrexate structure (boxed orange on slide 31). Folic acid carries the same ring system, which is why the two compete at DHFR (slide 30).',
 cite:S4+' slides 30–31; T@8238–8330'},

{id:'S4-029', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'mech', concept:'mtx-dhfr',
 tags:['mechanism'], source:'both',
 stem:'How does methotrexate produce its antiproliferative effect in psoriasis?',
 options:[
  {t:'It competitively inhibits DHFR', correct:true, why:'Slide 30: "Competitively Inhibits Dihydrofolate Reductase (DHFR), for DNA/RNA synthesis"; it "sits in the same enzyme cavity and competitively inhibits the binding of what? Folic acid" (T@8800–9200).'},
  {t:'It inhibits calcineurin phosphatase', correct:false, why:'Calcineurin is inhibited by cyclosporine and the limus drugs (slides 28, 33).'},
  {t:'It binds the RAR/RXR receptors', correct:false, why:'RAR/RXR binding is the retinoid mechanism (slides 29, 48).'},
  {t:'It inhibits JAK signaling', correct:false, why:'JAK inhibition is tofacitinib, which may be given with methotrexate (slide 35).'}],
 teach:'DHFR reduces folic acid to tetrahydrofolic acid, an essential cofactor for DNA synthesis (slide 30 scheme). With methotrexate in the enzyme cavity, tetrahydrofolic acid is not made, DNA is not synthesized and cells cannot multiply (T@8700–9500).',
 cite:S4+' slide 30; T@8545–9500'},

{id:'S4-030', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'mech', concept:'mtx-thf',
 tags:['mechanism'], source:'both',
 stem:'Which product does methotrexate keep the cell from making?',
 options:[
  {t:'Tetrahydrofolic acid', correct:true, why:'Slide 30: folic acid → DHFR → tetrahydrofolic acid, "Essential co-factor for DNA synthesis"; (T@8700–8800).'},
  {t:'Cyclic adenosine monophosphate', correct:false, why:'cAMP rises with PDE4 inhibition by apremilast (slide 34).'},
  {t:'Calcitriol', correct:false, why:'Calcitriol is the active vitamin D3 made by 1-alpha-hydroxylase (slide 27).'},
  {t:'Testosterone', correct:false, why:'Testosterone synthesis is lowered by spironolactone and ketoconazole (slide 53).'}],
 teach:'Folic acid comes from folate (vitamin B9); DHFR turns it into tetrahydrofolic acid for DNA synthesis. Methotrexate blocks that reduction, so DNA synthesis and cell proliferation fall (slide 30; T@8511–9500).',
 cite:S4+' slide 30; T@8511–9500'},

{id:'S4-031', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'mech', concept:'mtx-affinity',
 tags:['compare'], source:'transcript',
 stem:'At dihydrofolate reductase, how does methotrexate compare with folic acid?',
 options:[
  {t:'It has a higher affinity for the enzyme', correct:true, why:'"in terms of affinity values. Methotrexate has higher love for that enzyme than what? Folic acid." (T@9150–9300).'},
  {t:'It has a lower affinity for the enzyme', correct:false, why:'The reverse; methotrexate outcompetes folic acid (T@9150–9300).'},
  {t:'It binds a separate allosteric site', correct:false, why:'It sits in the same enzyme cavity, so the inhibition is competitive (T@8900–9100; slide 30).'},
  {t:'It is a substrate turned into a cofactor', correct:false, why:'Folic acid is the substrate; methotrexate is the inhibitor (slide 30).'}],
 teach:'Competitive inhibition: methotrexate and folic acid look alike and compete for the same DHFR cavity; methotrexate binds more tightly, so folic acid is not reduced (slide 30; T@8700–9300).',
 cite:S4+' slide 30; T@8700–9300'},

{id:'S4-032', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'sar', concept:'mtx-vs-folic',
 tags:['structure'], source:'both',
 stem:'Which structural differences separate methotrexate from folic acid?',
 options:[
  {t:'An N-methyl group and an amine', correct:true, why:'"the only points of difference are going to be this methyl group and that amine" (T@8700–8800): MTX has N-CH3 and NH2 where folic acid has N-H and OH (slide 31).'},
  {t:'A lactone ring and a chlorine', correct:false, why:'Those features belong to pimecrolimus (slides 28, 32).'},
  {t:'A missing glutamic acid portion', correct:false, why:'Both carry the glutamic acid portion (slide 31).'},
  {t:'A non-aromatic pteridine ring', correct:false, why:'The pteridine of methotrexate is aromatic, as the SAR requires (slide 31).'}],
 teach:'Slide 31 draws MTX beside folic acid for comparison: same pteridine, p-aminobenzoic acid and glutamic acid parts. MTX has NH2 on the pteridine where folic acid has OH, and N-CH3 where folic acid has N-H (T@8700–8800, T@11050–11200).',
 cite:S4+' slides 30–31; T@8700–8800'},

{id:'S4-033', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'sar', concept:'mtx-sar-parts', multi:true,
 tags:['sar','list'], source:'both',
 stem:'Which structural parts are required for methotrexate-like activity? Select all that apply.',
 options:[
  {t:'Pteridine ring', correct:true, why:'Slide 31 SAR item 1; "One, the teridine ring" (T@10109).'},
  {t:'p-Aminobenzoic acid portion', correct:true, why:'Slide 31 SAR item 1; "2, the paraaminobenzoic acid" (T@10150).'},
  {t:'Glutamic acid portion', correct:true, why:'Slide 31 SAR item 1; "it also needed glutamic acid" (T@10200).'},
  {t:'Isoindoline ring', correct:false, why:'The isoindoline is apremilast\'s ring system (slide 34).'},
  {t:'Ethyl ester on the glutamate acid group', correct:false, why:'An ethyl ester makes a prodrug (tazarotene, etretinate; slides 29, 50); not part of the MTX SAR.'}],
 teach:'From several molecules made alongside methotrexate, the SAR (slide 31): pteridine ring, p-aminobenzoic acid and glutamic acid; the pteridine must stay aromatic; alkylating the aromatic amines lowers activity; N-CH3 is essential (T@10096–10900).',
 cite:S4+' slide 31; T@10096–10230'},

{id:'S4-034', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'sar', concept:'mtx-sar-aromatic',
 tags:['sar'], source:'both',
 stem:'In the methotrexate SAR, what happens if the double bonds of the pteridine ring are changed so the ring is no longer aromatic?',
 options:[
  {t:'Activity is lost', correct:true, why:'Slide 31: "Pteridine ring should remain aromatic"; "if you change the double bonds within that pteridine ring, you\'re messing up the activity" (T@10402–10583).'},
  {t:'Activity increases', correct:false, why:'The reverse of slide 31.'},
  {t:'It becomes a prodrug', correct:false, why:'No prodrug was taught in the MTX SAR; the prodrugs were the esters tazarotene and etretinate (slides 29, 50).'},
  {t:'It gains skin protein binding', correct:false, why:'Skin protein binding was taught for pimecrolimus (slide 28), not the MTX SAR.'}],
 teach:'The pteridine needs to be left "plain and left alone ... just a teteridine structure intact one" (T@10700–10800).',
 cite:S4+' slide 31; T@10402–10800'},

{id:'S4-035', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'sar', concept:'mtx-sar-alkylation',
 tags:['sar'], source:'both',
 stem:'In the methotrexate SAR, what is the effect of alkylating the aromatic amines on the pteridine ring?',
 options:[
  {t:'Activity decreases', correct:true, why:'Slide 31: "Aromatic N-alkylation ↓activity"; "If you alkylate any one of those, you also drop the activity" (T@10583–10750).'},
  {t:'Activity increases', correct:false, why:'The reverse of slide 31.'},
  {t:'Lipophilicity falls', correct:false, why:'Not the SAR point; the point is lost activity (slide 31).'},
  {t:'Folic acid binds better', correct:false, why:'Not stated; the SAR item is the drop in MTX activity (slide 31).'}],
 teach:'The amines on the pteridine are aromatic amines; they must stay unsubstituted. The one N-methyl that is required is the N-CH3 between the pteridine and the benzoyl ring (slide 31).',
 cite:S4+' slide 31; T@10583–10750'},

{id:'S4-036', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'sar', concept:'mtx-sar-nme',
 tags:['sar'], source:'both',
 stem:'In the methotrexate SAR, which group is essential for activity?',
 options:[
  {t:'The N-CH3 group', correct:true, why:'Slide 31: "N-CH3 - essential for activity"; "this amethylation [N-methylation] here is also essential for activity" (T@10851).'},
  {t:'An ester on the glutamate', correct:false, why:'Not part of the SAR; the glutamic acid stays as the acid (slide 31).'},
  {t:'A chlorine on the benzene ring', correct:false, why:'A chlorine marks pimecrolimus (slide 28), not methotrexate.'},
  {t:'A cyclic peptide backbone', correct:false, why:'That is cyclosporine (slide 33).'}],
 teach:'With this SAR "we have a blueprint for making molecules that would behave like this" (T@10900–11050). N-CH3 is one of the two features that separate MTX from folic acid (slide 31).',
 cite:S4+' slide 31; T@10851–11050'},

{id:'S4-037', skill:'class', prof:'Sikazwe', tier:'new', topic:'s4-mtx', sub:'mech', concept:'mtx-multitarget',
 tags:['recall'], source:'both',
 stem:'Besides psoriasis, in which conditions is methotrexate used?',
 options:[
  {t:'Cancer and arthritic conditions', correct:true, why:'"It is used in cancer chemotherapy. It is used in some arthritic conditions. And here we are using it for psoriasis" (T@7980–8200).'},
  {t:'Acne and age spots', correct:false, why:'Not uses he gave for methotrexate; acne drugs are on slide 42, hydroquinone treats age spots (slide 67).'},
  {t:'Fungal infection and hypertension', correct:false, why:'Not uses he gave; azole antifungals were taught for their 3A4 inhibition (slide 53).'},
  {t:'Hypocalcemia and bone loss', correct:false, why:'Calcium and bone relate to the vitamin D analogs (slide 27).'}],
 teach:'"So, that means it has multi-target capabilities. And it can act in different mechanisms" (T@8150–8238). Slide 30 adds immunosuppressant and anti-inflammatory activities to the antiproliferative action.',
 cite:S4+' slide 30; T@7980–8238'},

/* ---- Cyclosporine (slide 33) ---------------------------------------------- */
{id:'S4-038', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'csa-structure',
 tags:['structure'], source:'both',
 stem:'How is cyclosporine described structurally?',
 options:[
  {t:'An 11 amino acid cyclic peptide', correct:true, why:'Slide 33: "11 Amino Acid cyclic peptide"; (T@12014–12100).'},
  {t:'A macrolide lactone with chlorine', correct:false, why:'That is pimecrolimus (slides 28, 32).'},
  {t:'A pteridine with glutamic acid', correct:false, why:'That is methotrexate (slides 30–31).'},
  {t:'A secosteroid with an open B ring', correct:false, why:'That describes the vitamin D analogs (slide 27).'}],
 teach:'"When we say peptides, we are simply talking about these amide bonds" (T@12100–12150). A ring of amide bonds is a cyclic amide, a lactam (T@12150–12254).',
 cite:S4+' slide 33; T@12014–12254'},

{id:'S4-039', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'csa-lactam', dupOf:'S4-021',
 tags:['room'], source:'transcript',
 fg:'cyclosporine', stem:'Because it is a cyclic peptide, cyclosporine can be classified chemically as what?',
 options:[
  {t:'A lactam', correct:true, why:'"So, here, the cyclic peptide, this can be described then as a what? And a lactam, right? cyclic lactam too." (T@12150–12254).'},
  {t:'A lactone', correct:false, why:'A lactone is a cyclic ester, as in the limus drugs (slide 32).'},
  {t:'A steroid', correct:false, why:'Steroids have the fused A–D ring nucleus (slide 52).'},
  {t:'A peroxide', correct:false, why:'The peroxide is benzoyl peroxide (slide 47).'}],
 teach:'Polleve-3 asked for lactone on the limus macrocycle (slide 32); he contrasted it with the lactam, a cyclic amide, which is what a cyclic peptide is (T@11620–11700, T@12150–12254).',
 cite:S4+' slide 33; T@12150–12254'},

{id:'S4-040', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'csa-activation',
 tags:['prodrug'], source:'both',
 stem:'Cyclosporine is called a "prodrug". How is it activated?',
 options:[
  {t:'By complexing with cyclophilin', correct:true, why:'Slide 33: "Activated by complexation with cyclophilin receptor"; "how it\'s bioactivated is not metabolic. It\'s simply by its binding to its receptor" (T@12289–12500).'},
  {t:'By CYP3A4 oxidation in the liver', correct:false, why:'CYP3A4 metabolizes and inactivates cyclosporine in first pass (slide 33); activation is not metabolic.'},
  {t:'By carboxylesterase hydrolysis', correct:false, why:'That activates the ester prodrugs tazarotene and etretinate (slides 29, 50).'},
  {t:'By UV light breaking a ring', correct:false, why:'UV opens the B ring of 7-dehydrocholesterol (slide 27; reading lines 60–61).'}],
 teach:'The cyclosporine–cyclophilin complex is the active species; it inhibits calcineurin phosphatase and T-cell signaling (slide 33; T@12430–12700).',
 cite:S4+' slide 33; T@12289–12700'},

{id:'S4-041', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'csa-moa',
 tags:['mechanism'], source:'both',
 stem:'What does the cyclosporine–cyclophilin complex inhibit?',
 options:[
  {t:'Calcineurin phosphatase', correct:true, why:'Slide 33: "Inhibits calcineurin phosphatase & T-cell signaling"; (T@12430–12700).'},
  {t:'Phosphodiesterase 4', correct:false, why:'PDE4 is inhibited by apremilast (slide 34).'},
  {t:'Janus kinase', correct:false, why:'JAK is inhibited by tofacitinib (slide 35).'},
  {t:'Dihydrofolate reductase', correct:false, why:'DHFR is inhibited by methotrexate (slide 30).'}],
 teach:'Cyclosporine is an immunosuppressant (slide 33). Blocking calcineurin phosphatase blocks T-cell signaling, the same calcineurin target as pimecrolimus and tacrolimus (slide 28).',
 cite:S4+' slide 33; T@12430–12700'},

{id:'S4-042', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'csa-bioavailability',
 tags:['pk','numbers'], source:'both',
 stem:'Why is the oral bioavailability of cyclosporine about 30%?',
 options:[
  {t:'First-pass metabolism by CYP3A4', correct:true, why:'Slide 33: "PO bioavailability = 30% - 1st pass effect ... Extensively metabolized by 3A4"; (T@12824–13060).'},
  {t:'Peptidase breakdown in the stomach', correct:false, why:'Not the reason he gave for cyclosporine; he ascribed it to first-pass metabolism by 3A4 (T@12860–13060).'},
  {t:'High skin protein binding', correct:false, why:'Skin protein binding explains topical pimecrolimus (slide 28).'},
  {t:'Chelation with dietary calcium', correct:false, why:'Chelation with food cations lowers tetracycline absorption (slide 55).'}],
 teach:'"The or[al] bioavailability is uh. Very poor ... 30%. This is ascribed to first pass metabolism ... carried out by 3F4 [3A4]" (T@12824–13060). Slide 33 also lists log P = 4 and T1/2 = 19 h.',
 cite:S4+' slide 33; T@12824–13060'},

{id:'S4-043', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'csa', concept:'csa-grapefruit',
 tags:['room','interaction'], source:'both',
 stem:'What would be the effect of co-administering cyclosporine with grapefruit juice?',
 options:[
  {t:'Higher cyclosporine blood levels', correct:true, why:'"So you can enhance what blood levels of this because you\'ve blocked out this first pass metabolism" (T@13190–13550); annotation on the student copy of slide 33: "↑ bioavailability of cyclosporin".'},
  {t:'Lower cyclosporine blood levels', correct:false, why:'The reverse; grapefruit juice blocks the 3A4 first-pass loss (T@13450–13550).'},
  {t:'Faster activation by cyclophilin', correct:false, why:'Activation by cyclophilin binding is not changed by grapefruit juice; first-pass metabolism is (slide 33).'},
  {t:'No change, since it is not metabolized', correct:false, why:'Cyclosporine is extensively metabolized by 3A4 (slide 33).'}],
 teach:'Grapefruit juice blocks the CYP3A4 first-pass metabolism of oral cyclosporine, so more reaches the blood. "So we can probably use that to our advantage too. The doctor may, may say, take this with what? Grapefruit juice." (T@13550–13690).',
 cite:S4+' slide 33; T@13190–13690'},

/* ---- Apremilast (slide 34) ------------------------------------------------ */
{id:'S4-044', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'apremilast-class',
 tags:['classification'], source:'slide',
 stem:'Apremilast belongs to which chemical class?',
 options:[
  {t:'Isoindoline', correct:true, why:'Slide 34: "An Isoindoline" (ring drawn in magenta).'},
  {t:'Pyrrolopyrimidine', correct:false, why:'Tofacitinib is the pyrrolopyrimidine (slide 35).'},
  {t:'Pteridine', correct:false, why:'Methotrexate is the pteridine (slide 30).'},
  {t:'Benzimidazole', correct:false, why:'Ensulizole, a sunscreen, is the benzimidazole (slide 64).'}],
 teach:'Slide 34 marks the isoindoline (a benzene ring fused to a five-membered nitrogen ring, here as the dione) in apremilast. Its methoxy and ethoxy groups sit on the other aromatic ring, where O-demethylation occurs.',
 cite:S4+' slide 34; T@13698–13800'},

{id:'S4-045', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'apremilast-moa',
 tags:['mechanism'], source:'both',
 stem:'What is the mechanism of apremilast in psoriasis?',
 options:[
  {t:'PDE4 inhibition, raising cAMP', correct:true, why:'Slide 34: "MoA: Phosphodiesterase (PDE4) Inhibitor; Leads to ↑ cAMP"; inhibition "leads to Decreases in ... these pro-inflammatory molecules" (T@13698–13900).'},
  {t:'JAK inhibition, lowering cytokines', correct:false, why:'That is tofacitinib (slide 35).'},
  {t:'Calcineurin inhibition in T cells', correct:false, why:'That is cyclosporine (slide 33) and the limus drugs (slide 28).'},
  {t:'DHFR inhibition, lowering DNA synthesis', correct:false, why:'That is methotrexate (slide 30).'}],
 teach:'Apremilast is used for psoriatic arthritis and moderate to severe plaque psoriasis (slide 34). The point he wanted taken from this slide was its reliance on CYP3A4 (T@13908–13990).',
 cite:S4+' slide 34; T@13698–13990'},

{id:'S4-046', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'apremilast-metab',
 tags:['metabolism'], source:'both',
 stem:'Which sequence describes the main metabolism of apremilast?',
 options:[
  {t:'O-demethylation by 3A4, then O-glucuronidation', correct:true, why:'Slide 34: "3A4 maj. (1A2 & 2A6 minor) via O-[demethylation] and O-[glucuronidation]"; scheme O-demethylation → -OH metabolite → O-Gluc; "These are UGTs" (T@14076–14300).'},
  {t:'Ester hydrolysis by CE, then glycine conjugation', correct:false, why:'CE hydrolysis is tazarotene and etretinate (slides 29, 50); glycine conjugation is salicylic acid (slide 43).'},
  {t:'Alcohol then aldehyde dehydrogenase to a diacid', correct:false, why:'That two-enzyme route is glycolic acid (slide 43; T@20934–21110).'},
  {t:'25-hydroxylation, then 1-alpha-hydroxylation', correct:false, why:'That is the vitamin D3 pathway (slide 27).'}],
 teach:'Phase 1: CYP3A4 (major; 1A2 and 2A6 minor) removes the methyl from an aryl methyl ether, giving an -OH metabolite. Phase 2: UGTs glucuronidate that -OH (slide 34; T@14076–14300).',
 cite:S4+' slide 34; T@14076–14300'},

{id:'S4-047', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sys', sub:'apr', concept:'apremilast-3a4',
 tags:['interaction','take-home'], source:'both',
 stem:'Which interaction caution did he stress for apremilast?',
 options:[
  {t:'Avoid CYP3A4 inhibitors and inducers', correct:true, why:'"whatever you do, here, again, avoid what? 384 [3A4] Inhibitors 304 [3A4] Inducers" (T@14290–14360); "the reliance of this molecule on 3A4 for its metabolism" (T@13908–13990).'},
  {t:'Avoid dairy products taken with each dose', correct:false, why:'Food (dairy) lowers tetracycline absorption (slide 55), not apremilast.'},
  {t:'Avoid folic acid supplements', correct:false, why:'Folic acid is the substrate methotrexate competes with (slide 30); not an apremilast caution.'},
  {t:'Avoid use with high blood calcium', correct:false, why:'Hypercalcemia limits the vitamin D analogs (slide 27).'}],
 teach:'Because CYP3A4 is the major route, a 3A4 inhibitor can raise and a 3A4 inducer can lower apremilast exposure. The same caution applies to tofacitinib (slide 35; T@15000–15120).',
 cite:S4+' slide 34; T@13908–14385'},

/* ---- Tofacitinib (slide 35) ----------------------------------------------- */
{id:'S4-048', skill:'class', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'tof', concept:'tofacitinib-class', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['classification'], source:'both',
 stem:'Tofacitinib is which chemical class, with which mechanism?',
 options:[
  {t:'A pyrrolopyrimidine JAK inhibitor', correct:true, why:'Slide 35: "A pyrrolopyrimidine; MoA: Janus kinase (JAK) Inhibitor"; "another Tib that works via a similar mechanism as a JAK inhibitor" (T@14560–14700).'},
  {t:'An isoindoline PDE4 inhibitor', correct:false, why:'That is apremilast (slide 34).'},
  {t:'A pteridine DHFR inhibitor', correct:false, why:'That is methotrexate (slide 30).'},
  {t:'A cyclic peptide calcineurin inhibitor', correct:false, why:'That is cyclosporine (slide 33).'}],
 teach:'Tofacitinib works by the same mechanism as the JAK "-tinibs" taught for eczema on 11/03 (T@14505–14700), and it may be used adjunctively with methotrexate (slide 35).',
 cite:S4+' slide 35; T@14505–14700'},

{id:'S4-049', skill:'pk', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'tof', concept:'tofacitinib-3a4', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['metabolism','numbers'], source:'both',
 stem:'Which statement about tofacitinib metabolism is correct?',
 options:[
  {t:'About 70% is metabolized by CYP3A4', correct:true, why:'Slide 35: "70% Metabolized by 3A4 (maj pathway)"; "extensively metabolized by 3F4 [3A4] and other CP enzymes" (T@14947–15050).'},
  {t:'It is activated by carboxylesterases', correct:false, why:'No activation step was taught; 3A4 deactivates it (T@14850–14950).'},
  {t:'It is excreted unchanged in feces', correct:false, why:'Not taught for tofacitinib; it is extensively metabolized (slide 35).'},
  {t:'It is cleared by glycine conjugation', correct:false, why:'Glycine conjugation was taught for salicylic acid (slide 43).'}],
 teach:'Tofacitinib is "not well profiled" for PK, but depends on 3A4 for deactivation, and 13 metabolites are known (slide 35; T@14700–15000). "So again, the concern here is that you caution against inhibitors ... and induces [inducers]. Of 3 or 4 [3A4]" (T@15050–15130).',
 cite:S4+' slide 35; T@14700–15130'},

/* ---- Acne: terms, components, drug groups (slides 40–42) ------------------ */
{id:'S4-050', skill:'patho', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'acne', concept:'acne-components', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.', multi:true,
 tags:['list'], source:'both',
 stem:'Which are major components of acne? Select all that apply.',
 options:[
  {t:'Increased sebum production', correct:true, why:'Slide 41; "there\'s increased sebum production, sebum oil" (T@18431–18560).'},
  {t:'Excessive follicular keratinization', correct:true, why:'Slide 41; "Excessive keratinization, keratin also starts folding in those hair follicles" (T@18560–18650).'},
  {t:'Bacterial (P. acnes) growth', correct:true, why:'Slide 41; P. acnes lives harmlessly on skin until conditions let it flourish (T@18700–18900).'},
  {t:'Inflammation', correct:true, why:'Slide 41; (T@18850–18950).'},
  {t:'Loss of filaggrin in the skin barrier layer', correct:false, why:'Filaggrin loss belongs to atopic dermatitis (Lecture 1), not the acne components on slide 41.'}],
 teach:'Slide 41 pairs each component with a goal: decrease sebaceous gland activity, normalize follicular keratinization, decrease P. acnes colonization, decrease inflammation. The drug groups follow: hormones (sebum), keratolytics and retinoids (keratinization), antibiotics (P. acnes) (T@18950–19400).',
 cite:S4+' slide 41; T@18431–19387'},

{id:'S4-051', skill:'patho', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'acne', concept:'pilosebaceous-unit', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['terms'], source:'both',
 stem:'What makes up a pilosebaceous unit?',
 options:[
  {t:'A small hair follicle and a sebaceous gland', correct:true, why:'Slide 40: "Pilosebaceous unit: small hair follicle + sebaceous gland"; he asked the class to carry acne vulgaris, sebaceous glands and P. acnes with them (T@18180–18380).'},
  {t:'A sweat gland and a dermal capillary bed', correct:false, why:'Not the definition on slide 40.'},
  {t:'Keratinocytes and melanocytes of the basal layer', correct:false, why:'Not the definition on slide 40.'},
  {t:'A hair follicle and an apocrine sweat gland', correct:false, why:'The gland in the unit is the sebaceous gland, which makes sebum (slide 40).'}],
 teach:'Slide 40 terms: acne vulgaris (common acne) is a condition of the pilosebaceous units; sebum is the oily secretion of the sebaceous glands; Propionibacterium acnes is the principal acne bacterium.',
 cite:S4+' slide 40; T@18084–18431'},

{id:'S4-052', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-acne', sub:'drugs', concept:'keratolytic-def',
 tags:['mechanism'], source:'both',
 stem:'What do keratolytics do in acne?',
 options:[
  {t:'Break up keratin to promote shedding', correct:true, why:'"these are agents that will break up what keratin. To promote desquamation, shedding of the skin" (T@19463–19560); slide 42 "Keratolytics (promote skin shedding)".'},
  {t:'Suppress sebaceous gland hormones', correct:false, why:'That is the role of the hormones (OCs and antiandrogens) (slides 52–53).'},
  {t:'Bind RAR/RXR to normalize growth', correct:false, why:'That is the retinoids (slide 48).'},
  {t:'Kill P. acnes by blocking protein synthesis', correct:false, why:'Killing P. acnes is the role of antibiotics (slides 54–55).'}],
 teach:'Slide 42 drug groups for acne: keratolytics (glycolic acid, salicylic acid, sulfur, benzoyl peroxide), retinoids, hormones, antibiotics.',
 cite:S4+' slide 42; T@19387–20199'},

{id:'S4-053', skill:'class', prof:'Sikazwe', tier:'new', topic:'s4-acne', sub:'drugs', concept:'keratolytic-members', multi:true,
 tags:['list'], source:'both',
 stem:'Which agents are acne keratolytics? Select all that apply.',
 options:[
  {t:'Glycolic acid', correct:true, why:'Slide 42 keratolytic (AHA); (T@19560).'},
  {t:'Salicylic acid', correct:true, why:'Slide 42 keratolytic; (T@19580).'},
  {t:'Sulfur', correct:true, why:'Slide 42 keratolytic; "even elemental sulfur" (T@19600).'},
  {t:'Benzoyl peroxide', correct:true, why:'Slide 42 keratolytic; (T@19650).'},
  {t:'Ethinyl estradiol', correct:false, why:'An estrogen in oral contraceptives, the hormone group (slide 52).'},
  {t:'Clindamycin', correct:false, why:'An antibiotic (slide 54).'}],
 teach:'The four keratolytics on slide 42 act at the skin surface. Benzoyl peroxide also releases a radical that kills bacteria (slide 47).',
 cite:S4+' slide 42; T@19387–19700'},

{id:'S4-054', skill:'patho', prof:'Sikazwe', tier:'new', topic:'s4-acne', sub:'terms', concept:'pacnes-gram',
 tags:['recall'], source:'transcript',
 stem:'How does P. acnes stain?',
 options:[
  {t:'Gram positive', correct:true, why:'"Now this is a gram positive, right? Pacin [P. acnes] is gram. Positive bacteria." (T@35047–35100); annotation on the student copy of slide 54.'},
  {t:'Gram negative', correct:false, why:'The reverse of what he said (T@35047).'},
  {t:'Acid-fast', correct:false, why:'Not stated for P. acnes; he called it gram positive (T@35047).'},
  {t:'It does not take a stain', correct:false, why:'He called it gram positive (T@35047).'}],
 teach:'P. acnes lives harmlessly on everyone\'s skin; when sebum and keratin build up in the follicle, it flourishes and drives inflammation, so knocking it down with antibiotics knocks down inflammation (T@18700–18950).',
 cite:S4+' slide 54; T@35047–35100'},

/* ---- Hydroxy acids (slides 43–44) ---------------------------------------- */
{id:'S4-055', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'aha-definition',
 tags:['structure'], source:'both',
 stem:'What makes glycolic acid an alpha-hydroxy acid?',
 options:[
  {t:'Its OH is on the carbon next to the COOH', correct:true, why:'"the hydroxy group is on the atom that is alpha to the carboxylic acid. Or next to." (T@20199–20470); slide 44 "OH on alpha-C (i.e., carbon next to -CO2H)".'},
  {t:'Its OH is two carbons from the COOH', correct:false, why:'That is a beta-hydroxy acid, like salicylic acid (T@22100–22230).'},
  {t:'It has an aromatic ring right beside the acid', correct:false, why:'The aromatic ring is in salicylic acid and raises its log P (T@21537–21656).'},
  {t:'It has two carboxylic acid groups', correct:false, why:'A diacid describes azelaic acid (slide 54) and the diacid metabolite of glycolic acid (slide 43; T@20850).'}],
 teach:'Hydroxy acid SAR (slide 44): a COOH group; most have the OH on the alpha carbon, the carbon next to CO2H; R is mostly alkyl. Glycolic acid is HO-CH2-COOH.',
 cite:S4+' slides 43–44; T@20199–20470'},

{id:'S4-056', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'sa-bha',
 tags:['structure','room'], source:'transcript',
 stem:'Salicylic acid is which kind of hydroxy acid, and why?',
 options:[
  {t:'Beta; its OH is two carbons from the COOH', correct:true, why:'"This is the alpha carbon. This one is called the beta carbon. So this is a beta hydroxy acid ... 2 carbon removed from the carboxylic acid" (T@22090–22230).'},
  {t:'Alpha; its OH is next to the COOH carbon', correct:false, why:'The carbon next to the COOH is the alpha carbon, and salicylic acid has no OH there (T@22090–22230).'},
  {t:'Alpha; its COOH sits on an aromatic ring', correct:false, why:'An aromatic ring does not make an acid alpha; the position of the OH relative to the COOH does (slide 44; T@22090–22230).'},
  {t:'Beta; it carries two COOH groups', correct:false, why:'Salicylic acid has one COOH (slide 43); two COOH groups describe a diacid such as azelaic acid (slide 54).'}],
 teach:'Count from the carboxyl carbon: the next carbon is alpha, the one after is beta. In salicylic acid the OH is on the ring carbon two away from the COOH carbon (the beta carbon) (T@22090–22230).',
 cite:S4+' slide 43; T@22090–22230'},

{id:'S4-057', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'ga-vs-sa-logp',
 tags:['compare','numbers'], source:'both',
 stem:'Why does salicylic acid penetrate skin a little deeper than glycolic acid?',
 options:[
  {t:'Its aromatic ring makes it more lipophilic', correct:true, why:'SA log P "1 to 2. Because of this aromatic group. Because that\'s lipophilic" vs GA log P about 1 (T@20705, T@21537–21760); slide 43 "More lipophilic than glycolic acid".'},
  {t:'It has a much higher pKa than glycolic acid', correct:false, why:'Both have a pKa of about 3 (T@20564, T@21768).'},
  {t:'It is a smaller molecule', correct:false, why:'GA is the small molecule that stays on the surface (T@21150–21300).'},
  {t:'It is a prodrug ester', correct:false, why:'Salicylic acid is the acid; the esters that hydrolyze to it are the salicylate sunscreens (slide 64).'}],
 teach:'Glycolic acid: hydrophilic, log P about 1, acts mostly on the surface; deeper peels need higher concentrations. Salicylic acid: log P about 1–2, used for deeper work and skin peels (slide 43; T@20690–21760).',
 cite:S4+' slide 43; T@20690–21760'},

{id:'S4-058', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'ga-surface',
 tags:['pk','numbers'], source:'both',
 stem:'Glycolic acid has a log P of about 1. What does that mean for where it acts?',
 options:[
  {t:'It acts mostly on the skin surface', correct:true, why:'"it\'s a hydrophilic. So log p value is around 1. So it\'s going to act mostly on the surface" (T@20660–20780); slide 43 "Hydrophilic Acid".'},
  {t:'It reaches the dermis and the blood easily', correct:false, why:'It is hydrophilic and small and "won\'t penetrate the skin that well" (T@21150–21300).'},
  {t:'It is held by skin protein binding', correct:false, why:'Skin protein binding was taught for pimecrolimus (slide 28).'},
  {t:'It must be hydrolyzed before it acts', correct:false, why:'Glycolic acid is already the active acid (slide 43).'}],
 teach:'To reach deeper with glycolic acid, "you have to use what? Higher concentrations of this" (T@21408; slide 43 "Higher concs. - for deeper skin peels").',
 cite:S4+' slide 43; T@20564–21450'},

{id:'S4-059', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'ga-deeper-peel',
 tags:['counsel'], source:'both',
 stem:'How is a deeper skin peel obtained with glycolic acid?',
 options:[
  {t:'By using a higher concentration', correct:true, why:'Slide 43: "Higher concs. - for deeper skin peels"; (T@21408).'},
  {t:'By converting it to an ester prodrug', correct:false, why:'No ester of glycolic acid was taught; the ester prodrugs were retinoids (slides 29, 50).'},
  {t:'By using a large particle size', correct:false, why:'Particle size was taught for sulfur (small is better) and zinc oxide (large is better) (slides 46, 61).'},
  {t:'By combining it with a 3A4 inhibitor', correct:false, why:'Glycolic acid has minimal metabolism by ADH and ALDH, not 3A4 (slide 43; T@20780–21110).'}],
 teach:'Glycolic acid kills surface skin cells and promotes desquamation; a higher concentration reaches deeper layers (T@21300–21450).',
 cite:S4+' slide 43; T@21300–21450'},

{id:'S4-060', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'ga-metab',
 tags:['room','metabolism'], source:'both',
 stem:'How many enzymes metabolize the small amount of glycolic acid that reaches the blood, and which are they?',
 options:[
  {t:'Two: alcohol and aldehyde dehydrogenase', correct:true, why:'"So I would ask you, how many enzymes are involved in this place. Two enzymes, right? ... alcohol dehydrogenase and aldehyde dehydrogenase" (T@20942–21110).'},
  {t:'One: CYP3A4', correct:false, why:'CYP3A4 metabolizes cyclosporine, apremilast and tofacitinib (slides 33–35).'},
  {t:'Two: CYP3A4 and a UDP-glucuronosyltransferase', correct:false, why:'That pair handles apremilast (slide 34).'},
  {t:'One: an acyl synthetase', correct:false, why:'The acyl synthetase forms the glycine conjugate of salicylic acid (slide 43).'}],
 teach:'Glycolic acid has minimal metabolism by drug-metabolizing enzymes; the alcohol carbon is oxidized through the aldehyde to a second acid, giving the diacid shown on slide 43 (T@20780–21110).',
 cite:S4+' slide 43; T@20780–21110'},

{id:'S4-061', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'ha-itch',
 tags:['adverse','numbers'], source:'both',
 stem:'Glycolic and salicylic acid both have a pKa of about 3. Which complaint follows from this?',
 options:[
  {t:'Itching', correct:true, why:'"because it\'s an acid, some people may complain of what? Itching, right? Lo[w] PKA" (T@21790–21900); pKa about 3 for both (T@20564, T@21768).'},
  {t:'Photosensitivity', correct:false, why:'Photosensitivity was mentioned with PABA sunscreens (T@42050–42150).'},
  {t:'Bone and enamel staining', correct:false, why:'Staining comes from tetracycline chelation (slide 55).'},
  {t:'Hypercalcemia', correct:false, why:'Hypercalcemia limits the vitamin D analogs (slide 27).'}],
 teach:'Low pKa means a strong acid on the skin; "the same goes for if ... it\'s a base, high base, you put it on the skin, they complain about itching" (T@21857–21960).',
 cite:S4+' slide 43; T@20564, T@21768–21960'},

{id:'S4-062', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'sa-glycine',
 tags:['metabolism','numbers'], source:'both',
 stem:'How is most systemically absorbed salicylic acid metabolized?',
 options:[
  {t:'About 75% by glycine conjugation', correct:true, why:'"75% amino acid conjugation to a glycine conjugate" (T@22443–22520); slide 43 "AA-Conjugation".'},
  {t:'About 70% by CYP3A4 oxidation', correct:false, why:'70% by 3A4 is tofacitinib (slide 35).'},
  {t:'About 30% by first-pass hydrolysis', correct:false, why:'30% is the oral bioavailability of cyclosporine (slide 33).'},
  {t:'Mostly by glucuronidation of a phenol', correct:false, why:'O-glucuronidation was taught for the apremilast metabolite (slide 34).'}],
 teach:'Salicylic acid in the circulation is mostly conjugated with the amino acid glycine (an acyl synthetase step, noted on slide 43) to the glycine conjugate.',
 cite:S4+' slide 43; T@22380–22600'},

{id:'S4-063', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'aha-identify',
 tags:['structure'], source:'both',
 stem:'Which compound is an alpha-hydroxy acid?',
 options:[
  {t:'2-Hydroxypropanoic acid', correct:true, why:'The OH is on C2, the carbon next to the COOH; this is lactic acid, an AHA from milk (slide 68; T@46989).'},
  {t:'3-Hydroxybutanoic acid', correct:false, why:'The OH is on C3, two carbons from the COOH: a beta-hydroxy acid (T@22100–22230).'},
  {t:'2-Methylbutanedioic acid', correct:false, why:'No hydroxyl at all; a hydroxy acid needs an OH (slide 44).'},
  {t:'2-Hydroxybenzoic acid', correct:false, why:'Salicylic acid: its OH is on the ring carbon two from the COOH, the beta carbon (T@22090–22230).'}],
 teach:'Slide 44 SAR: a COOH, an OH on the alpha carbon (next to CO2H), R mostly alkyl. He walked the class through the same test on the Polleve-4 figure: "Hydroxy group needs to be ... on the carbon that is next to the carboxylic acid" (T@23455–23880).',
 cite:S4+' slides 44, 68; T@22839–23200, T@23455–23880'},

{id:'S4-064', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'ha-sar',
 tags:['sar'], source:'both',
 stem:'In the hydroxy acid SAR, which group is mostly found at R on the alpha carbon of active keratolytic acids?',
 options:[
  {t:'An alkyl group', correct:true, why:'Slide 44: "R - mostly alkyl"; "mostly archal [alkyl] groups can be put on that same alpha ... atom" (T@23060–23200).'},
  {t:'A peroxide group', correct:false, why:'The peroxide is benzoyl peroxide (slide 47), not the hydroxy acid R group.'},
  {t:'A sulfonic acid', correct:false, why:'A sulfonic acid is in ensulizole (slide 64).'},
  {t:'A chlorine atom', correct:false, why:'Not part of the slide 44 SAR.'}],
 teach:'"carboxylic acid must be present, and also they must possess a hydroxy ... on the alpha carbon ... You can decorate this with ... aromatic groups, archal [alkyl] groups, but mostly archal groups" (T@22839–23200).',
 cite:S4+' slide 44; T@22839–23200'},

{id:'S4-120', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'ha', concept:'aha-count',
 tags:['poll','verbatim','structure'], source:'both',
 img:'s4-polleve4',
 note:'He did not say the count aloud ("So how many? OK.", T@23865). Keyed from the slide figure and his stated definition (T@23455–23600; slide 44) (course decision of 2026-11-08).',
 stem:'How many alpha-hydroxy acids are in the figure below?',
 options:[
  {t:'One', correct:false, why:'Glycolic acid is not the only one: tartaric acid and the cyclopropyl diacid also carry an OH on a carbon next to a COOH.'},
  {t:'Two', correct:false, why:'Tartaric acid, glycolic acid and the cyclopropyl diacid all qualify; each has an OH on the carbon next to a COOH.'},
  {t:'Three', correct:true, why:'Tartaric acid, glycolic acid and the cyclopropyl diacid: "Hydroxy group needs to be ... on the carbon that is next to the carboxylic acid" (T@23455–23600).'},
  {t:'Four', correct:false, why:'The cyclohexane acid has its OH on the ring carbon two from the COOH, so it is beta; isobutyric acid has no OH.'}],
 teach:'Apply slide 44 to each structure: find each COOH, step to the carbon next to it (alpha), and look for an OH there. Tartaric acid (top centre), HOOC-CH(OH)-CH(OH)-COOH: each OH sits next to a COOH; yes. Glycolic acid (top right), HO-CH2-COOH: yes. Isobutyric acid (left), (CH3)2CH-COOH: no OH at all; no. The cyclopropyl diacid (bottom), HOOC-C(cyclopropane)-CH(OH)-COOH: the OH carbon is next to the right-hand COOH; yes, even though it is two carbons from the other COOH. 2-Hydroxycyclohexane-1-carboxylic acid (right): the COOH is on C1 and the OH on C2, two carbons from the acid carbon, a beta-hydroxy acid like salicylic acid; no.',
 quote:'Polleve, 11/04, slide 45',
 cite:S4+' slides 44–45; T@22839–23200, T@23455–23880'},

/* ---- Sulfur (slide 46)----------------------------------------------------- */
{id:'S4-065', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'s', concept:'sulfur-thiolysis',
 tags:['mechanism'], source:'both',
 stem:'By what chemical process is sulfur thought to act as a keratolytic?',
 options:[
  {t:'Thiolysis of keratin disulfide bonds', correct:true, why:'Slide 46: "CBDA: Thiolysis. S reduces or breaks the disulfide bonds in keratin"; "mechanism of action, less clear, but there\'s a hint that dialysis [thiolysis] is at play" (T@25100–25500).'},
  {t:'Release of a benzoyl radical', correct:false, why:'The radical comes from benzoyl peroxide (slide 47).'},
  {t:'Lowering skin pH as an alpha-hydroxy acid', correct:false, why:'That is glycolic and salicylic acid (slide 43).'},
  {t:'Binding to RAR/RXR receptors', correct:false, why:'That is the retinoids (slide 48).'}],
 teach:'Keratin is held together by disulfide bonds between cysteine residues. Sulfur is thought to break these (thiolysis), which promotes desquamation (slide 46; T@25200–25550).',
 cite:S4+' slide 46; T@25100–25550'},

{id:'S4-066', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'s', concept:'cysteine-disulfide',
 tags:['room'], source:'transcript',
 stem:'Which amino acid forms the disulfide bonds in keratin that sulfur breaks?',
 options:[
  {t:'Cysteine', correct:true, why:'"Where do you find the sulfide bonds in amino acid? Cysteine, right?" (T@25488–25550).'},
  {t:'Glycine', correct:false, why:'Glycine conjugates salicylic acid (slide 43); it has no sulfur.'},
  {t:'Glutamic acid', correct:false, why:'Glutamic acid is part of methotrexate (slide 31); it has no sulfur.'},
  {t:'Tyrosine', correct:false, why:'Tyrosinase (melanin synthesis) is inhibited by hydroquinone (slide 67); tyrosine has no sulfur.'}],
 teach:'Disulfide (S–S) bridges between cysteine side chains hold keratin together; breaking them by thiolysis loosens keratin (slide 46).',
 cite:S4+' slide 46; T@25400–25550'},

{id:'S4-067', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'s', concept:'sulfur-particle',
 tags:['counsel'], source:'transcript',
 stem:'How does particle size affect topical sulfur?',
 options:[
  {t:'Small particles are more effective', correct:true, why:'"this needs to be very what small particle. So. Large particle sulfur, less effective." (T@24650–24760).'},
  {t:'Large particles are more effective', correct:false, why:'That is the rule for zinc oxide and titanium dioxide, not sulfur (slide 61; T@38748–38830).'},
  {t:'Size has no effect on its action', correct:false, why:'"The size is important here" (T@24600–24700).'},
  {t:'Nano particles turn it transparent', correct:false, why:'Transparency of nano particles was taught for zinc oxide (T@38830–39000).'}],
 teach:'Two size rules in this lecture run in opposite directions: sulfur needs small particles (T@24650–24760); the inorganic sunblocks reflect better as large particles (slide 61; T@38748–38830).',
 cite:S4+' slide 46; T@24600–24760'},

{id:'S4-068', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'s', concept:'sulfur-drawbacks', multi:true,
 tags:['room','adverse'], source:'transcript',
 stem:'Which drawbacks of sulfur did he name? Select all that apply.',
 options:[
  {t:'Allergies', correct:true, why:'"What are some of the drawbacks to using sulfur? Cause of allergies." (T@24170–24230).'},
  {t:'Smell', correct:true, why:'"And some people just uh detest sulfur for what? Smell." (T@24230–24285).'},
  {t:'Teratogenicity', correct:false, why:'Teratogenicity is the retinoid limitation (slide 48).'},
  {t:'Tooth staining', correct:false, why:'Staining of bone and enamel is a tetracycline effect (slide 55).'}],
 teach:'Sulfur is used alone (e.g., in petrolatum) or in mixtures with sodium sulfacetamide or zinc oxide (slide 46; T@24760–24900).',
 cite:S4+' slide 46; T@24170–24285'},

/* ---- Benzoyl peroxide (slide 47) ----------------------------------------- */
{id:'S4-069', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'bpo', concept:'bpo-two-actions',
 tags:['mechanism'], source:'both',
 stem:'What are the two chemical actions of benzoyl peroxide on the skin?',
 options:[
  {t:'It lowers skin pH and makes free radicals', correct:true, why:'Slide 47 "CBDA: pH lowering & free radicals"; "It does two things. It lowers the pH, skin pH, and it also produces free radicals" (T@25825–25900).'},
  {t:'It breaks keratin disulfides and absorbs UVB', correct:false, why:'Breaking disulfides is sulfur (slide 46); absorbing UVB is a sunscreen property (slides 63–64).'},
  {t:'It blocks DHFR and raises cAMP', correct:false, why:'DHFR is methotrexate (slide 30); cAMP rise is apremilast (slide 34).'},
  {t:'It chelates calcium and binds RAR', correct:false, why:'Chelation is tetracycline (slide 55); RAR binding is the retinoids (slide 48).'}],
 teach:'The peroxide (O–O) bond breaks to give benzoic acid, which lowers skin pH (keratolytic), and a benzoyl radical, which kills bacteria (anti-inflammatory). Benzoic acid is excreted in urine (slide 47; T@26000–26600).',
 cite:S4+' slide 47; T@25608–26600'},

{id:'S4-070', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'bpo', concept:'bpo-radical',
 tags:['structure'], source:'both',
 stem:'When the peroxide bond of benzoyl peroxide breaks, which product kills bacteria?',
 options:[
  {t:'The benzoyl radical', correct:true, why:'"The benzo a radical. Go to kill some of the Bacteria" (T@26253–26330); slide 47 scheme.'},
  {t:'Benzoic acid', correct:false, why:'Benzoic acid lowers skin pH and gives the keratolytic effect (T@26109–26250).'},
  {t:'Salicylic acid', correct:false, why:'Salicylic acid forms from hydrolysis of salicylate sunscreens (slide 64), not from benzoyl peroxide.'},
  {t:'A colored benzoquinone', correct:false, why:'Benzoquinone is the colored, inactive breakdown product of hydroquinone (slide 67).'}],
 teach:'"keratolytic coming from here [benzoic acid], and benzoyl peroxide, killing off bacteria. Anti-inflammatory" (T@26450–26600).',
 cite:S4+' slide 47; T@26000–26600'},

{id:'S4-071', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-kera', sub:'bpo', concept:'bpo-class',
 tags:['classification','numbers'], source:'both',
 stem:'Which description of benzoyl peroxide is correct?',
 options:[
  {t:'A peroxide, log P 3.5, penetrates skin well', correct:true, why:'Slide 47 "peroxide chemical class" and "(log P = 3.5)"; "it has a little piece of lipophilic. It penetrates skin well" (T@25991).'},
  {t:'A lactone, log P 6.0, stays bound to skin', correct:false, why:'cLogP 6.0 and skin binding describe pimecrolimus (slide 28).'},
  {t:'A hydroxy acid, log P 1, acts on the surface', correct:false, why:'That describes glycolic acid (slide 43).'},
  {t:'A sulfonic acid, log P 1, washes off in water', correct:false, why:'That describes ensulizole (slide 64).'}],
 teach:'Benzoyl peroxide is absorbed by skin and forms benzoic acid, which is excreted in urine (slide 47).',
 cite:S4+' slide 47; T@25608–26000'},

/* ---- Retinoids by generation (slides 48–51) ------------------------------- */
{id:'S4-072', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'gen', concept:'retinoid-teratogen',
 tags:['adverse','take-home'], source:'both',
 stem:'What is the major limitation of the retinoids?',
 options:[
  {t:'Teratogenicity', correct:true, why:'Slide 48 "Teratogenic"; "This is the major limitation ... If they are teratogenic, can everyone use them? No ... this is a caution that you all need to make sure you carry that with you" (T@27150–27450).'},
  {t:'Hypercalcemia', correct:false, why:'Hypercalcemia limits the vitamin D analogs (slide 27).'},
  {t:'Strong CYP3A4 inhibition', correct:false, why:'Strong 3A4 inhibition belongs to the azoles such as ketoconazole (slide 53).'},
  {t:'PABA allergy', correct:false, why:'PABA allergy limits PABA sunscreens (slide 63).'}],
 teach:'Retinoids are potent; less concentrated products may be usable, "but there\'s always that caveat" (T@27450–27700). The same teratogenicity worry carries into topical retinoids for wrinkles (slide 70; T@48700–48760).',
 cite:S4+' slide 48; T@27150–27700'},

{id:'S4-073', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'gen', concept:'retinoid-effects', multi:true,
 tags:['list'], source:'both',
 stem:'Which effects do retinoids have as RAR/RXR agonists? Select all that apply.',
 options:[
  {t:'Anti-inflammatory', correct:true, why:'Slide 48; (T@26900–27000).'},
  {t:'Anti-proliferative', correct:true, why:'Slide 48; (T@26900–27000).'},
  {t:'Decreased sebum production', correct:true, why:'Slide 48 "↓ Sebum production"; "even they suppress sebum oil production" (T@27000–27050).'},
  {t:'Increased sebum production', correct:false, why:'The reverse of slide 48.'},
  {t:'Inhibited testosterone synthesis', correct:false, why:'That is spironolactone and ketoconazole (slide 53).'}],
 teach:'All are derivatives of vitamin A1 (retinol), the "parent compound" (slides 48–49). Besides these effects, slide 48 lists teratogenic.',
 cite:S4+' slide 48; T@26805–27100'},

{id:'S4-074', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g1', concept:'retinoid-gen-basis',
 tags:['classification'], source:'both',
 stem:'On what structural basis are retinoids divided into 1st, 2nd and 3rd generations?',
 options:[
  {t:'Number of aromatic rings', correct:true, why:'1st gen non-aromatic, 2nd gen mono-aromatic, 3rd gen poly-aromatic (slides 49–51; T@27705–27800, T@28898–28950, T@30027–30100).'},
  {t:'Number of double bonds in the chain', correct:false, why:'Not the basis on slides 49–51; the double bond geometry separates tretinoin and isotretinoin within the 1st generation.'},
  {t:'Whether they are esters or acids', correct:false, why:'Ester prodrugs occur in more than one generation (etretinate 2nd, tazarotene 3rd; slides 50–51).'},
  {t:'Route: topical, oral or both', correct:false, why:'Route varies within a generation (tretinoin topical, isotretinoin oral; slide 49).'}],
 teach:'1st (non-aromatic): tretinoin, isotretinoin. 2nd (mono-aromatic): etretinate, acitretin. 3rd (poly-aromatic): adapalene, trifarotene, tazarotene. "we may be on 4th generation retinoids" (T@29947).',
 cite:S4+' slides 49–51; T@27705–30160'},

{id:'S4-075', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g1', concept:'iso-geometric',
 tags:['structure'], source:'both',
 stem:'How are tretinoin and isotretinoin related structurally?',
 options:[
  {t:'They are geometric (cis/trans) isomers', correct:true, why:'Slide 49 "Geometric isomer of Tretinoin"; "this relationship, C strands [cis-trans] is called geometric isomerism" (T@28187, T@28620–28720).'},
  {t:'One is the ethyl ester prodrug of the other', correct:false, why:'That is etretinate and acitretin (slide 50).'},
  {t:'One has an extra aromatic ring', correct:false, why:'Both are non-aromatic 1st-generation retinoids (slide 49).'},
  {t:'They are mirror-image enantiomers', correct:false, why:'They differ in double bond geometry, not in a chiral center (T@28100–28540).'}],
 teach:'Tretinoin is all-trans retinoic acid; isotretinoin is 13-cis retinoic acid. "that\'s the only difference. Other than that, both of them are active" (T@28448–28540); they are given by different routes (slide 49).',
 cite:S4+' slide 49; T@28100–28720'},

{id:'S4-076', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g1', concept:'iso-c13',
 tags:['structure','room'], source:'both',
 stem:'Numbering the chain from the ring carbon marked 1 on the structure, at which carbon is the cis double bond of isotretinoin?',
 options:[
  {t:'The double bond at carbon 13', correct:true, why:'"if you were to count the carbons ... you start 1 from here ... when you land over here, this is 13 ... 13 carbon cis" (T@28100–28470); slide 49 "13-cis retinoic acid".'},
  {t:'The double bond at carbon 9', correct:false, why:'He counted to C13 for the cis bond (T@28100–28470).'},
  {t:'The double bond in the ring', correct:false, why:'The ring double bond is the same in both; the change is at C13 of the chain (slide 49).'},
  {t:'Several double bonds in the chain', correct:false, why:'The others stay trans: "they are all trans up to here, but here. Sis" (T@28300–28420).'}],
 teach:'Carbon 1 is the ring carbon carrying the two methyl groups, as he numbered it on slide 49; counting along the chain, the double bond at carbon 13, the last before the COOH, is cis in isotretinoin. In tretinoin every chain double bond is trans; in isotretinoin the one at C13 is cis (slide 49).',
 cite:S4+' slide 49; T@28100–28540'},

{id:'S4-077', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g1', concept:'tret-iso-route',
 tags:['counsel'], source:'both',
 stem:'By which routes are tretinoin and isotretinoin used for acne?',
 options:[
  {t:'Tretinoin topically; isotretinoin orally', correct:true, why:'Slide 49 notes "topical" (tretinoin) and "orally" (isotretinoin); "tretinoin is used, I think this is topical. And this one is used. Uh, orally." (T@27800–27920).'},
  {t:'Tretinoin orally; isotretinoin topically', correct:false, why:'The reverse of slide 49.'},
  {t:'Both are given by injection', correct:false, why:'Neither is injected; tretinoin is topical and isotretinoin oral (slide 49).'},
  {t:'Both orally, as ester prodrugs', correct:false, why:'Both are active acids (T@28470–28540); the ester prodrugs are etretinate and tazarotene.'}],
 teach:'Tretinoin was the first retinoid for acne (slide 49). Because both isomers are active, they are simply given by different routes (T@28470–28600).',
 cite:S4+' slide 49; T@27705–28600'},

{id:'S4-078', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g2', concept:'etretinate-acitretin',
 tags:['prodrug'], source:'both',
 stem:'How are etretinate and acitretin related?',
 options:[
  {t:'Carboxylesterases turn etretinate into acitretin', correct:true, why:'Slide 50: etretinate "Ethyl Ester prodrug"; acitretin "Active form of Etretinate"; "This requires bioactivation to this. CEs are involved" (T@29200–29300).'},
  {t:'Acitretin is the 13-cis geometric isomer of etretinate', correct:false, why:'The 13-cis relationship is isotretinoin to tretinoin (slide 49).'},
  {t:'CYP3A4 turns acitretin into etretinate', correct:false, why:'The direction is etretinate to acitretin, and the enzymes are carboxylesterases (slide 50).'},
  {t:'They belong to different generations', correct:false, why:'Both are 2nd-generation, mono-aromatic retinoids (slide 50).'}],
 teach:'Etretinate (ethyl ester, T1/2 120 days, highly lipophilic, narrow therapeutic index, teratogenic) was removed from the US market in 1998. Its active form, acitretin, is now given directly (slide 50; T@28898–29700).',
 cite:S4+' slide 50; T@28898–29700'},

{id:'S4-079', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g2', concept:'etretinate-removed',
 tags:['adverse','numbers'], source:'both',
 stem:'Which properties led to the removal of etretinate from the US market?',
 options:[
  {t:'A narrow therapeutic index and teratogenicity', correct:true, why:'Slide 50: "Narrow TI; Teratogenic (removed from U.S. market in 1998)"; "it came with things like this narrow therapeutic index, quite teratogenic, so they removed it" (T@28950–29100).'},
  {t:'Poor skin penetration and a very short half-life', correct:false, why:'Etretinate is highly lipophilic with a T1/2 of 120 days (slide 50).'},
  {t:'Strong CYP3A4 inhibition and liver injury', correct:false, why:'Strong 3A4 inhibition belongs to the azoles (slide 53).'},
  {t:'PABA-type allergy and photosensitivity', correct:false, why:'Those limit PABA sunscreens (slide 63).'}],
 teach:'Acitretin, the active form, has "some retention of teratogenicity, but not to the extent of" etretinate (T@29300–29450; annotation on the student copy of slide 50).',
 cite:S4+' slide 50; T@28898–29500'},

{id:'S4-080', skill:'class', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g3', concept:'gen3-members', multi:true,
 tags:['list','classification'], source:'both',
 stem:'Which are 3rd-generation (poly-aromatic) retinoids? Select all that apply.',
 options:[
  {t:'Adapalene', correct:true, why:'Slide 51: adapalene, the first synthetic retinoid; poly-aromatic (T@30027–30100).'},
  {t:'Trifarotene', correct:true, why:'Slide 51; (T@30100).'},
  {t:'Tazarotene', correct:true, why:'Slide 51, "a prodrug"; (T@30100–30160).'},
  {t:'Acitretin', correct:false, why:'2nd generation, mono-aromatic (slide 50).'},
  {t:'Isotretinoin', correct:false, why:'1st generation, non-aromatic (slide 49).'}],
 teach:'3rd-generation retinoids carry several aromatic rings (he counted "12 here, 123 here", T@30027–30100). Adapalene and trifarotene are directly active; tazarotene is an ester prodrug (slide 51).',
 cite:S4+' slide 51; T@30014–30300'},

{id:'S4-081', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g3', concept:'tazarotene-prodrug', dupOf:'S4-023',
 tags:['prodrug'], source:'both',
 stem:'Among the 3rd-generation retinoids, why are adapalene and trifarotene directly active while tazarotene is not?',
 options:[
  {t:'They have an exposed carboxylic acid', correct:true, why:'"these two. Directly active because they have this exposed carboxylic acid ... But [tazarotene] is a prodrug carboxyestrase is [needed]" (T@30193–30300); boxed COOH groups on slide 51.'},
  {t:'They have fewer aromatic rings', correct:false, why:'All three are poly-aromatic (slide 51).'},
  {t:'They are the 13-cis isomers', correct:false, why:'Cis/trans isomerism was taught for the 1st generation (slide 49).'},
  {t:'They are activated by complexing with cyclophilin', correct:false, why:'Cyclophilin complexation activates cyclosporine (slide 33).'}],
 teach:'Tazarotene is an ethyl ester; carboxylesterase hydrolysis gives tazarotenic acid (active) (slides 29, 51).',
 cite:S4+' slide 51; T@30193–30300'},

{id:'S4-082', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-ret', sub:'g3', concept:'retinoid-skin-retention',
 tags:['pk'], source:'both',
 stem:'Topical retinoids are lipophilic. What is their systemic absorption, and why does that matter?',
 options:[
  {t:'Low, so fewer systemic adverse effects', correct:true, why:'Slide 51 "Have low systemic absorption (< systemic AEs)"; "somehow they get retained in the skin, and the explanation is not that clear" (T@30382–30700).'},
  {t:'High, so systemic toxicity is common', correct:false, why:'The reverse of slide 51.'},
  {t:'Low, because they are too hydrophilic to enter', correct:false, why:'Slide 51: "All are lipophilic"; the retention is not well explained (T@30382–30500).'},
  {t:'High, because they are prodrugs', correct:false, why:'Not stated; only some are prodrugs, and absorption is low for all (slide 51).'}],
 teach:'"we always worry whatever you put on the skin, is it going to find itself in systemic circulation" (T@30500–30600). Retinoids are lipophilic yet retained in skin, so they can be used topically (T@30600–30892).',
 cite:S4+' slide 51; T@30382–30892'},

/* ---- Hormones (slides 52–53) --------------------------------------------- */
{id:'S4-083', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'oc', concept:'oc-acne',
 tags:['mechanism','room'], source:'both',
 stem:'How do combined oral contraceptives help acne in women?',
 options:[
  {t:'They suppress sebum oil production', correct:true, why:'"Essentially, what they do is they suppress [sebum] ... oil production" (T@31400–31500); slide 52 "OCs act against hormonal triggers of acne".'},
  {t:'They kill P. acnes on the skin', correct:false, why:'That is the antibiotics (slides 54–55).'},
  {t:'They break up keratin in the follicle', correct:false, why:'That is the keratolytics (slide 42).'},
  {t:'They block the androgen receptor', correct:false, why:'Receptor blockade is flutamide (slide 53).'}],
 teach:'"What are OCs? Oral contraceptives" (T@30883). Ethinyl estradiol with norgestimate or with drospirenone; all are steroids (A, B, C, D rings). Structurally steroids, mechanistically sebum suppressors (slide 52; T@31000–31600).',
 cite:S4+' slide 52; T@30883–31600'},

{id:'S4-084', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'oc', concept:'oc-steroid',
 tags:['structure'], source:'both',
 stem:'Ethinyl estradiol, norgestimate and drospirenone share which structural class?',
 options:[
  {t:'Steroids', correct:true, why:'"these are all going to be what? Steroids, right? Because you know the structure of steroids A, B, C, D" (T@31000–31200); "Steroids" annotation on the student copy of slide 52.'},
  {t:'Tetracyclines', correct:false, why:'Tetracyclines have four rings fused in a line, not the steroid nucleus (slide 55; T@35205–35450).'},
  {t:'Pteridines', correct:false, why:'The pteridine is methotrexate (slide 30).'},
  {t:'Lactams', correct:false, why:'The lactam is cyclosporine (slide 33).'}],
 teach:'The steroid nucleus is four fused rings labeled A, B, C, D (three six-membered, one five-membered). Spironolactone is also a steroid (slide 53).',
 cite:S4+' slide 52; T@31000–31300'},

{id:'S4-085', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'aa', concept:'aa-steroid',
 tags:['room','structure'], source:'both',
 stem:'Which of these acne antiandrogen agents is a steroid?',
 options:[
  {t:'Spironolactone', correct:true, why:'"Which one is the steroid? This one, right? OK, so this guy, spironolactone" (T@32075–32200); slide 53 "Steroidal AA - Spironolactone".'},
  {t:'Flutamide', correct:false, why:'"This is non-steroid molecule" (T@32761); slide 53 "Non-steroidal AA".'},
  {t:'Ketoconazole', correct:false, why:'An azole antifungal, listed with the non-steroidal agents (slide 53); "This is not a steroid" (T@32315).'},
  {t:'Sodium sulfacetamide', correct:false, why:'Mixed with sulfur in acne products (slide 46); not a steroid and not an antiandrogen.'}],
 teach:'Slide 53: steroidal antiandrogen spironolactone; non-steroidal flutamide and ketoconazole. Spironolactone carries the A–D steroid nucleus with a lactone ring at C17.',
 cite:S4+' slide 53; T@32075–32300'},

{id:'S4-086', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'aa', concept:'aa-biosynthesis',
 tags:['mechanism'], source:'transcript',
 stem:'How do spironolactone and ketoconazole lower androgen effects in acne?',
 options:[
  {t:'They decrease testosterone biosynthesis', correct:true, why:'"spironolactone and ketoconazole. These ... Diminish Testosterone ... Biosynthesis" (T@32150–32300); "here, we\'re using [it] to block the biosynthesis of testosterone" (T@32640–32720).'},
  {t:'They block testosterone at its receptor', correct:false, why:'Receptor blockade is flutamide\'s mechanism (T@32761–32980).'},
  {t:'They raise estrogen synthesis', correct:false, why:'Not the mechanism given; estrogens are supplied by OCs (slide 52).'},
  {t:'They kill P. acnes in the follicle', correct:false, why:'That is the antibiotics (slide 54).'}],
 teach:'Both lower testosterone production; flutamide instead keeps testosterone from binding its receptor. "you have a steroidal approach, a non-steroidal approach, and you just differentiate them by how they work. This is the take-home message from this slide." (T@32983–33140).',
 note:'Slide 53 places ketoconazole under the "Non-steroidal AA" heading with flutamide; in class he grouped it with spironolactone by mechanism (biosynthesis). Both agree that ketoconazole is not a steroid; this item asks the mechanism only. The keyed mechanism is Dr. Sikazwe\'s statement in his lecture; Dr. Smith\'s slide (Pathophys 37) gives only the antiandrogen class for acne and states no mechanism for spironolactone.',
 cite:S4+' slide 53; T@32150–32720'},

{id:'S4-087', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'aa', concept:'flutamide-moa',
 tags:['compare','take-home'], source:'both',
 stem:'What separates flutamide from spironolactone in acne therapy?',
 options:[
  {t:'Non-steroid; blocks testosterone at its receptor', correct:true, why:'"Flutamide ... This is non-steroid molecule, and ... it prevents. Testosterone ... From binding. 2, its receptor" (T@32723–32980); slide 53 "Non-steroidal AA".'},
  {t:'Steroid; lowers testosterone biosynthesis', correct:false, why:'That describes spironolactone (T@32150–32300).'},
  {t:'Azole antifungal; strongly inhibits CYP3A4 enzymes', correct:false, why:'That describes ketoconazole (T@32338–32620).'},
  {t:'Estrogen; suppresses sebum in women', correct:false, why:'That describes ethinyl estradiol in OCs (slide 52).'}],
 teach:'Take-home of slide 53: steroidal vs non-steroidal approaches, told apart by how they work (T@32983–33140). Both estrogenic and anti-androgenic agents end in less sebum production (slide 53; T@33140–33630).',
 cite:S4+' slide 53; T@32723–33140'},

{id:'S4-088', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-horm', sub:'aa', concept:'azole-3a4',
 tags:['interaction','take-home'], source:'both',
 stem:'Which interaction property should come to mind whenever an azole antifungal such as ketoconazole is used?',
 options:[
  {t:'Strong CYP3A4 inhibition', correct:true, why:'"Azores [azoles] are strong inhibitors of what? C[YP] enzymes. So 384 [3A4]. Strong 3F4 inhibitor. Always when you see Ezo antifugo\'s [azole antifungals]. Have that enzyme inhibition. At the front of your mind." (T@32338–32640).'},
  {t:'Strong CYP3A4 induction', correct:false, why:'The reverse; azoles inhibit 3A4 (T@32338–32640).'},
  {t:'Carboxylesterase activation', correct:false, why:'Carboxylesterases activate ester prodrugs such as tazarotene (slide 29).'},
  {t:'Chelation of dietary calcium', correct:false, why:'Chelation is a tetracycline property (slide 55).'}],
 teach:'Put this beside the 3A4-dependent drugs of the lecture: cyclosporine (first pass by 3A4), apremilast and tofacitinib (avoid 3A4 inhibitors and inducers) (slides 33–35).',
 cite:S4+' slide 53; T@32300–32640'},

/* ---- Antibiotics (slides 54–55) ------------------------------------------ */
{id:'S4-089', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'misc', concept:'azelaic-diacid',
 tags:['structure'], source:'both',
 stem:'How is azelaic acid described chemically?',
 options:[
  {t:'A C9 dicarboxylic acid (diacid)', correct:true, why:'Slide 54 "A C9 bi-carboxylic acid"; "It\'s a dyacid. Or biacid, meaning to carboxylic acid, and small linear antibiotic" (T@34051–34300).'},
  {t:'A cyclic macrolide lactone', correct:false, why:'Erythromycin is the macrolide (slide 54); azelaic acid is small and linear.'},
  {t:'A linear four-ring tetracycline', correct:false, why:'That is the tetracycline class (slide 55).'},
  {t:'A sulfur-containing lincomycin', correct:false, why:'That is clindamycin (slide 54).'}],
 teach:'He asked the class to tell the antibiotic structures apart: small linear molecules (azelaic acid) through large cyclic ones (erythromycin) (T@34560–34700). Slide 54 also calls azelaic acid an anti-inflammatory agent.',
 cite:S4+' slide 54; T@34051–34300, T@34560–34700'},

{id:'S4-090', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'misc', concept:'clinda-topical', lowYield:true,
 tags:['counsel'], source:'slide',
 stem:'Why is clindamycin used topically for acne?',
 options:[
  {t:'Because of its GI toxicity', correct:true, why:'Slide 54: clindamycin "Used topically due to GI toxicity".'},
  {t:'Because it is unstable at low pH', correct:false, why:'Instability at pH 4 or lower is listed for erythromycin (slide 54).'},
  {t:'Because dairy blocks its absorption', correct:false, why:'Food (dairy) affects tetracycline absorption (slide 55).'},
  {t:'Because it is a C9 diacid', correct:false, why:'That is azelaic acid (slide 54).'}],
 teach:'Clindamycin is a lincomycin, a sulfur-containing antibiotic from S. lincolnensis (slide 54). He left antibiotic detail to the ID course: "So, here, I\'m not going to belabor the point" (T@34430–34541).',
 cite:S4+' slide 54; T@34300–34541'},

{id:'S4-091', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'tet', concept:'tet-vs-steroid',
 tags:['structure','take-home'], source:'both',
 cmp:['tetracycline','hydrocortisone'], stem:'Both tetracyclines and steroids have four rings. How do the ring arrangements differ?',
 options:[
  {t:'Tetracycline rings run in a line; steroid rings are stacked', correct:true, why:'"be able to identify them 1234. One plan[e] ... linear ... in steroids, they\'re stacked ... 4 rings stuck. This one is just ... one linear molecule" (T@35205–35450).'},
  {t:'Tetracyclines have five rings; steroids have four', correct:false, why:'He counted four rings in tetracyclines, "1234" (T@35205).'},
  {t:'Steroid rings run in a line; tetracycline rings are stacked', correct:false, why:'The reverse of what he described (T@35205–35450).'},
  {t:'Tetracycline rings are non-aromatic', correct:false, why:'Not the distinction he drew; he contrasted linear vs stacked fusion (T@35205–35450).'}],
 teach:'"visually, can you identify tetracyclines and distinguish them from steroids? That is something you can visually do" (T@36837–36940). Compare the linear tetracycline drawings on slide 55 with the A–B–C–D steroid nucleus on slides 52–53.',
 cite:S4+' slides 53, 55; T@35205–35450, T@36837–36940'},

{id:'S4-092', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'tet', concept:'tet-chelation',
 tags:['adverse','mechanism'], source:'both',
 stem:'Why do tetracyclines stain and weaken bone and tooth enamel?',
 options:[
  {t:'They chelate calcium into insoluble salts', correct:true, why:'Slide 55 "Chealation: Al3+, Ca2+, Mg2+, Fe3+ ... insoluble salts"; in bone "you have a lot of what? Calcium ... they form these insoluble sals [salts] that then remain there" (T@35634–36100).'},
  {t:'They inhibit 1-alpha-hydroxylase', correct:false, why:'1-alpha-hydroxylase makes calcitriol (slide 27); not the tetracycline effect.'},
  {t:'They are teratogenic retinoids', correct:false, why:'Teratogenicity is the retinoid limitation (slide 48).'},
  {t:'They raise blood calcium levels like vitamin D', correct:false, why:'Raising calcium absorption is a vitamin D analog effect (slide 27).'}],
 teach:'Accumulation in bone and enamel with staining and weakening is "a limitation for the use of tetracyclines" (T@35634–35900).',
 cite:S4+' slide 55; T@35634–36100'},

{id:'S4-093', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'tet', concept:'doxy-mino-food',
 tags:['pk','numbers'], source:'both',
 stem:'How do doxycycline and minocycline differ from tetracycline?',
 options:[
  {t:'Food does not affect their absorption; longer acting', correct:true, why:'Slide 55: "Food does NOT affect absorption; Are lipophilic & longer acting" (doxy t1/2 11–13 h, mino 14–22 h vs tetracycline 8.5 h); made "to overcome this food absorption issue" (T@36210–36400).'},
  {t:'Dairy blocks their absorption, and they are shorter acting', correct:false, why:'That describes tetracycline itself (slide 55).'},
  {t:'They are hydrophilic and renally cleared', correct:false, why:'Slide 55 calls them lipophilic.'},
  {t:'They lack the four-ring structure', correct:false, why:'They keep the tetracycline four-ring structure, which is why cross-reactivity occurs (slide 55).'}],
 teach:'Tetracycline: absorption affected by food (e.g., dairy), t1/2 8.5 h. Doxycycline and minocycline were made to overcome the food effect; they are lipophilic and longer acting (slide 55).',
 cite:S4+' slide 55; T@36210–36400'},

{id:'S4-094', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-abx', sub:'tet', concept:'tet-cross-allergy',
 tags:['counsel','room'], source:'both',
 stem:'A patient is allergic to tetracycline. What is expected if doxycycline or minocycline is given instead?',
 options:[
  {t:'Likely cross-allergy, from structural similarity', correct:true, why:'"Are they going to be allergic to it as well? ... If you give them minocycline, are they going to be allergic to it? Why? Uh-huh, structural similarity." (T@36452–36790); slide 55 "Cross reactivities due to structure similarity".'},
  {t:'No allergy expected, since their side chains differ', correct:false, why:'The shared four-ring structure carries the cross-reactivity (slide 55).'},
  {t:'Allergy to doxycycline but not minocycline', correct:false, why:'He asked about both and gave the same answer (T@36600–36790).'},
  {t:'Allergy when taken with dairy', correct:false, why:'Dairy affects tetracycline absorption, not allergy (slide 55).'}],
 teach:'Drugs that share a core structure tend to share allergy; the tetracyclines are the example on slide 55.',
 cite:S4+' slide 55; T@36452–36800'},

/* ---- Wrinkle, UV and sun protection (slides 58–66) ----------------------- */
{id:'S4-095', skill:'patho', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'wrinkle-causes', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.', multi:true,
 tags:['list'], source:'both',
 stem:'Which causes of fine, coarse and pigmentary skin changes did he give? Select all that apply.',
 options:[
  {t:'UV radiation', correct:true, why:'Slide 58 item 1; (T@37380–37450).'},
  {t:'Smoking', correct:true, why:'Slide 58 item 2; "habits like smoking" (T@37403–37450).'},
  {t:'Xenobiotic exposure', correct:true, why:'Slide 58 item 3; "exposure to just chemicals" (T@37440–37500).'},
  {t:'Low hyaluronic acid intake', correct:false, why:'Hyaluronic acid falls with age and can be supplemented topically (slide 69); intake is not a cause he gave.'},
  {t:'High calcium intake', correct:false, why:'Not a cause on slide 58.'}],
 teach:'"Environment plays a big role, so UV radiation, habits like smoking, and exposure to just chemicals" (T@37350–37500).',
 cite:S4+' slide 58; T@37300–37511'},

{id:'S4-096', skill:'patho', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'uv', concept:'uva-penetration', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06). This slide 58 figure gives UVA as 320–400 nm; his slides 62–63 give 315–400 nm.',
 tags:['poll','verbatim'], source:'both',
 stem:'What UVR band is more skin penetrating?',
 options:[
  {t:'100 - 280 nm', correct:false, why:'UVC; on the slide 58 figure UVC rays usually do not get through the ozone layer.'},
  {t:'280 - 320 nm', correct:false, why:'UVB; it reaches the skin surface but penetrates less deeply than UVA (slide 58 figure; T@37600–37700).'},
  {t:'320 - 400 nm', correct:true, why:'UVA: "which one is more skin penetrating? Which one? A. So remember that. And so that can disrupt skin at deeper layers" (T@37511–37700).'},
  {t:'400 - 700 nm', correct:false, why:'Visible light, not a UVR band.'}],
 teach:'"A question could simply be. Given the UV radiation ... which one is more skin penetrating? Which one? A." (T@37511–37611). UVA (about 315/320–400 nm; slides 59, 62) reaches and disrupts deeper skin layers.',
 quote:'Polleve, 11/04, slide 59',
 cite:S4+' slides 58–59; T@37511–37700'},

{id:'S4-097', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'inorg', concept:'zno-mech',
 tags:['mechanism'], source:'both',
 stem:'How do zinc oxide and titanium dioxide protect the skin?',
 options:[
  {t:'They reflect or scatter UVA and UVB', correct:true, why:'Slide 61: "Metal oxides which physically reflect or scatter light; Are broad spectrum (UVA/B)"; "they block both UVA UVB" (T@38519–38748).'},
  {t:'They absorb UVB and release it as heat', correct:false, why:'Absorbing light as chromophores and releasing heat is how organic sunscreens work (slide 62).'},
  {t:'They absorb UVA and then photodegrade', correct:false, why:'Photodegradation was taught for organic sunscreens such as avobenzone (slide 62).'},
  {t:'They inhibit melanin synthesis', correct:false, why:'That is hydroquinone (slide 67).'}],
 teach:'The inorganic sunblocks are inert (do not irritate the skin) and come in micronized forms; they can be combined with organic sunscreens for wider coverage (slide 61; T@39200–39400).',
 cite:S4+' slide 61; T@38519–38748'},

{id:'S4-098', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'inorg', concept:'zno-size',
 tags:['counsel','take-home'], source:'both',
 stem:'How does particle size affect zinc oxide as a sunblock?',
 options:[
  {t:'Larger particles are more effective', correct:true, why:'"Size Matters here. It\'s important. Larger size ... particle size. Is More effective" (T@38748–38830); annotation on the student copy of slide 61.'},
  {t:'Smaller particles are more effective', correct:false, why:'That is the rule for sulfur (T@24650–24760); nano zinc oxide loses reflective properties (T@38830–39000).'},
  {t:'Size does not change its action', correct:false, why:'"Size Matters here" (T@38748).'},
  {t:'Nano size improves its reflection', correct:false, why:'Nano-sized zinc oxide turns transparent and starts losing reflective properties (T@38921–39050).'}],
 teach:'Nano zinc oxide looks transparent rather than white, which some users prefer, but it reflects less; the same size rule holds for titanium dioxide (T@38830–39200).',
 cite:S4+' slide 61; T@38748–39200'},

{id:'S4-099', skill:'mech', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'chromophore',
 tags:['mechanism'], source:'both',
 stem:'How do organic chemical sunscreens protect the skin?',
 options:[
  {t:'Chromophores absorb UV and release heat', correct:true, why:'Slide 62: "Chromophores which absorb UVA/B & convert it into harmless heat"; (T@39895–40160).'},
  {t:'Metal oxides reflect UV from the skin', correct:false, why:'Reflection is the inorganic sunblocks (slide 61).'},
  {t:'They speed the repair of UV-damaged skin DNA', correct:false, why:'Not the mechanism on slide 62.'},
  {t:'They block tyrosinase in melanocytes', correct:false, why:'Tyrosinase inhibition is hydroquinone (slide 67).'}],
 teach:'"These are functional groups that can absorb what? Light ... they convert that photon energy, light energy into harmless heat energy" (T@39895–40160).',
 cite:S4+' slide 62; T@39895–40160'},

{id:'S4-100', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'photodegradation',
 tags:['terms'], source:'both',
 stem:'What does photodegradation of a sunscreen mean?',
 options:[
  {t:'The light it absorbs also degrades it', correct:true, why:'"when they say photodegradation, that means the same light they\'re absorbing is also degrading them" (T@40950–41140); annotation on the student copy of slide 62.'},
  {t:'It is broken down by skin esterases', correct:false, why:'That is ester hydrolysis, e.g., of the salicylate sunscreens (slide 64).'},
  {t:'It is metabolized by CYP3A4 in the liver', correct:false, why:'Not the meaning of photodegradation (T@40950–41140).'},
  {t:'It reflects light away from the skin', correct:false, why:'Reflection is how the inorganic sunblocks act (slide 61).'}],
 teach:'The photodegradation half-life sets how often a sunscreen must be reapplied (T@40860–40950). The photodegradation half-life sets how often a sunscreen must be reapplied (T@40860–40950).',
 cite:S4+' slide 62; T@40700–41140'},

{id:'S4-101', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'avobenzone',
 tags:['counsel','numbers'], source:'both',
 stem:'Based on its photodegradation half-life, how often should avobenzone be reapplied?',
 options:[
  {t:'Reapply about every 2 hours', correct:true, why:'"photo. Degradation ... half-life. Of about what? 2 hours. So that means after every 2 hours, the person has to come up and ... reapply" (T@40700–40950); annotation on the student copy of slide 62 "t1/2 = 2hrs".'},
  {t:'Reapply about every 12 hours', correct:false, why:'About 12 hours is ensulizole (T@42930).'},
  {t:'Reapply after each swim', correct:false, why:'Reapplying after swimming was the ensulizole drawback (T@43160–43270).'},
  {t:'Apply once a day before sun', correct:false, why:'With a 2-hour photodegradation half-life, once a day is too little (T@40860–40950).'}],
 teach:'Avobenzone, a dibenzoylmethane, absorbs the full UVA spectrum and some UVB, has low skin absorption, and is rapidly degraded by UVA (slide 62; T@40499–40950).',
 cite:S4+' slide 62; T@40499–40950'},

{id:'S4-102', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'meradimate-vs-avobenzone',
 tags:['compare'], source:'both',
 stem:'How does meradimate compare with avobenzone as a UVA sunscreen?',
 options:[
  {t:'It is degraded by light even faster', correct:true, why:'"It\'s even more rapidly. Degraded. Whereas this might be 2 hours you apply, you probably don\'t have 2 hours essentially with Meradime" (T@41300–41530); annotation on the student copy of slide 62 "more rapidly degraded".'},
  {t:'It is far more photostable', correct:false, why:'The reverse (T@41300–41530).'},
  {t:'It also blocks UVB by reflection', correct:false, why:'Meradimate is an anthranilate that absorbs UVA (slide 62); reflection is the metal oxides (slide 61).'},
  {t:'It is highly absorbed through the skin', correct:false, why:'High skin absorption was the benzophenone worry (slide 65).'}],
 teach:'Both UVA absorbers photodegrade; "that gives you a point of distinction": meradimate (anthranilate) degrades faster than avobenzone (dibenzoylmethane) (slide 62; T@41158–41549).',
 cite:S4+' slide 62; T@41158–41549'},

{id:'S4-103', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'octinoxate',
 tags:['adverse','numbers'], source:'both',
 stem:'Which limitations apply to octinoxate, a UVB cinnamate?',
 options:[
  {t:'Absorbed through skin; degrades in 1–2 h', correct:true, why:'"Problem Absorbed Through Skin Limitation ... The photo degradation. 1 to 2 hours" (T@41549–41760); annotation on the student copy of slide 63.'},
  {t:'PABA allergy and photosensitivity', correct:false, why:'Those limit PABA and padimate O (slide 63; T@41918–42260).'},
  {t:'Washes off in water; degrades in 12 h', correct:false, why:'That is ensulizole (slide 64; T@42816–43400).'},
  {t:'Very low skin absorption due to its high MW', correct:false, why:'High molecular weight limits the skin absorption of bemotrizinol (slide 66).'}],
 teach:'"So you\'re making choices, right? Which one are you going to ... suggest to ... your client?" (T@41760–41900): the sunscreen choice weighs skin absorption and photodegradation half-life.',
 cite:S4+' slide 63; T@41549–41900'},

{id:'S4-104', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'paba-allergy',
 tags:['adverse'], source:'both',
 stem:'Why are PABA and padimate O rarely used as sunscreens?',
 options:[
  {t:'Some people are allergic to PABA', correct:true, why:'"these are even rarely used ... Because some ... people are allergic to paba ... Paraaminobenzoic acid. Allergies" (T@41918–42100); annotation on the student copy of slide 63.'},
  {t:'They photodegrade within minutes', correct:false, why:'He gave allergy as the reason (T@41918–42100).'},
  {t:'They are absorbed and teratogenic', correct:false, why:'Teratogenicity is the retinoid concern (slide 48).'},
  {t:'They wash off when swimming', correct:false, why:'Washing off was the ensulizole drawback (T@43160–43270).'}],
 teach:'PABA (p-aminobenzoic acid) and padimate O are UVB absorbers. "there\'s also photosensitivity that comes ... with that, but I\'ll just say parba allergies" (T@42100–42260).',
 cite:S4+' slide 63; T@41918–42267'},

{id:'S4-105', skill:'chem', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'salicylate-hydrolysis',
 tags:['structure'], source:'both',
 stem:'Why do the salicylate sunscreens homosalate and octisalate provide some analgesia?',
 options:[
  {t:'Their esters hydrolyze to salicylic acid', correct:true, why:'"They are esters, right, so they can undergo hydrolysis to give you salicylic acid" (T@42535–42620); slide 64 "SA FG. absorbs UVB & provides analgesia".'},
  {t:'They release a benzoyl radical', correct:false, why:'The benzoyl radical comes from benzoyl peroxide (slide 47).'},
  {t:'They block calcineurin in skin nerves', correct:false, why:'Calcineurin inhibition is pimecrolimus and tacrolimus (slide 28).'},
  {t:'They reflect heat and light away from the skin', correct:false, why:'Not the explanation; analgesia comes from the salicylic acid released (T@42400–42620).'}],
 teach:'Salicylates are UVB absorbers that "were supposed to be photo stable", though "even that is what. Question mark" (T@42280–42720).',
 cite:S4+' slide 64; T@42280–42720'},

{id:'S4-106', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'ensulizole',
 tags:['counsel','numbers','room'], source:'both',
 stem:'What is the main drawback of ensulizole as a sunscreen?',
 options:[
  {t:'It must be reapplied after swimming', correct:true, why:'"swim, right? When you come out of water, guess what? You need to reapply ... water soluble coming from that sulfonic acid" (T@43160–43400).'},
  {t:'It photodegrades in about 2 hours', correct:false, why:'Ensulizole\'s photodegradation half-life is about 12 hours, the most photostable to that point (T@42930–43050).'},
  {t:'It is highly absorbed through the skin', correct:false, why:'High skin absorption (log P about 4) is the benzophenone worry (slide 65).'},
  {t:'It causes PABA-type allergy', correct:false, why:'PABA allergy limits PABA and padimate O (slide 63).'}],
 teach:'Ensulizole is a benzimidazole UVB absorber with a sulfonic acid; log P 1, water soluble; photodegradation half-life about 12 h (annotation on the student copy of slide 64; T@42816–43400).',
 cite:S4+' slide 64; T@42816–43400'},

{id:'S4-107', skill:'adverse', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'oxybenzone',
 tags:['adverse','numbers'], source:'both',
 stem:'What is the concern with oxybenzone and the other benzophenones?',
 options:[
  {t:'Log P about 4; highly absorbed through skin', correct:true, why:'"Log P About 4. Hi[ghly] absorbed. Through skin. That\'s a worry" (T@43589–43700); annotation on the student copy of slide 65.'},
  {t:'Log P about 1; washes off in water', correct:false, why:'That is ensulizole (slide 64).'},
  {t:'A photodegradation half-life of about 90 hours', correct:false, why:'About 90 hours is the photostability of octocrylene (T@44090).'},
  {t:'They block UVB but not UVA', correct:false, why:'Benzophenones absorb full UVB and considerable UVA (slide 65).'}],
 teach:'"We don\'t know what these molecules are going to do after that, so that is a worry. It\'s a drawback. But if you use them ... you get UVB UVA coverage" (T@43700–43900).',
 cite:S4+' slide 65; T@43589–43900'},

{id:'S4-108', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'octocrylene',
 tags:['counsel','numbers'], source:'both',
 stem:'Why is octocrylene added to sunscreens that contain oxybenzone?',
 options:[
  {t:'It photostabilizes the other filters', correct:true, why:'"this is being used ... to provide stability to even what? Oxobenzene [oxybenzone] ... it\'s also providing photo stability to the other components" (T@44585–44800); annotation on the student copy of slide 65 "used as an additive sunscreen".'},
  {t:'It lowers skin absorption of oxybenzone', correct:false, why:'Not the reason he gave; the reason is photostability (T@44585–44800).'},
  {t:'It reflects light like zinc oxide', correct:false, why:'Octocrylene is an organic cinnamate absorber (slide 65); reflection is the metal oxides (slide 61).'},
  {t:'It hydrolyzes to salicylic acid', correct:false, why:'Hydrolysis to salicylic acid is the salicylates (slide 64).'}],
 teach:'Octocrylene is "the best performing in terms of photo stability", half-life about 90 hours; it is lipophilic and oily, so it stays on after swimming (T@43958–44500).',
 cite:S4+' slide 65; T@43958–44800'},

{id:'S4-109', skill:'tell', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'photostability-rank',
 tags:['compare','numbers'], source:'both',
 stem:'Which order runs from most to least photostable?',
 options:[
  {t:'Octocrylene > ensulizole > avobenzone', correct:true, why:'Photodegradation half-lives: octocrylene about 90 h (T@44090), ensulizole about 12 h (T@42930), avobenzone about 2 h (T@40860).'},
  {t:'Avobenzone > ensulizole > octocrylene', correct:false, why:'The reverse order (T@40860, T@42930, T@44090).'},
  {t:'Ensulizole > octocrylene > avobenzone', correct:false, why:'Octocrylene (about 90 h) outlasts ensulizole (about 12 h) (T@42930, T@44090).'},
  {t:'Octocrylene > avobenzone > ensulizole', correct:false, why:'Avobenzone (about 2 h) degrades faster than ensulizole (about 12 h) (T@40860, T@42930).'}],
 teach:'Photodegradation half-lives he gave: meradimate under 2 h, avobenzone about 2 h, octinoxate 1–2 h, bemotrizinol about 4–8 h, ensulizole about 12 h, octocrylene about 90 h (slides 62–66; T@40860–45290).',
 cite:S4+' slides 62, 64, 65; T@40860, T@42930, T@44090'},

{id:'S4-110', skill:'pk', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'bemotrizinol',
 tags:['pk','numbers'], source:'both',
 stem:'What limits the skin absorption of bemotrizinol?',
 options:[
  {t:'Its high molecular weight', correct:true, why:'Slide 66: skin absorption limited "due to high MW (627.81)"; "they say this low skin absorption for this one is because ... this is a high molecular weight molecule" (T@45550–45700).'},
  {t:'Its sulfonic acid group', correct:false, why:'The sulfonic acid makes ensulizole water soluble (slide 64).'},
  {t:'Its rapid photodegradation', correct:false, why:'Bemotrizinol is photostable, half-life about 4–8 h (T@45200–45290).'},
  {t:'High skin protein binding', correct:false, why:'Skin protein binding was taught for pimecrolimus (slide 28).'}],
 teach:'Bemotrizinol (BEMT), a methoxybenzene–triazine UVB/UVA absorber that "came from Europe", is photostable and lipophilic (slide 66; T@45151–45410). "this is the information that you start using aside from just saying, yeah, use this" (T@45410).',
 note:'Slide 66 says "no skin absorption"; he said "law [low]. Skin Absorption" (T@45290). This item asks only the reason (high MW), on which both agree.',
 cite:S4+' slide 66; T@45151–45700'},

{id:'S4-111', skill:'class', prof:'Sikazwe', tier:'new', topic:'s4-sun', sub:'org', concept:'uva-uvb-coverage', multi:true,
 tags:['list'], source:'slide',
 stem:'Which organic sunscreens cover both UVB and UVA? Select all that apply.',
 options:[
  {t:'Oxybenzone', correct:true, why:'Slide 65: benzophenones, UVB/UVA, "Absorb full UVB & considerable UVA".'},
  {t:'Octocrylene', correct:true, why:'Slide 65: cinnamate, UVB/UVA, "Absorb full UVB + UVA".'},
  {t:'Bemotrizinol', correct:true, why:'Slide 66: UVB/UVA, "Absorbs UVB & UVA".'},
  {t:'Ensulizole', correct:false, why:'A UVB (280–315 nm) benzimidazole (slide 64).'},
  {t:'Meradimate', correct:false, why:'A UVA anthranilate (slide 62).'}],
 teach:'By band (slides 62–66): UVA, avobenzone and meradimate; UVB, octinoxate, cinoxate, PABA, padimate O, homosalate, octisalate, ensulizole; UVB/UVA, oxybenzone, sulisobenzone, dioxybenzone, octocrylene, bemotrizinol. The inorganic zinc oxide and titanium dioxide are broad spectrum (slide 61).',
 cite:S4+' slides 62–66'},

/* ---- Hydroquinone, AHAs, hyaluronic acid, topical retinoids (slides 67–70) */
{id:'S4-112', skill:'mech', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'hq-moa', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['mechanism'], source:'both',
 stem:'How does hydroquinone lighten age spots?',
 options:[
  {t:'It inhibits melanin biosynthesis', correct:true, why:'Slide 67: "Inhibits melanin biosyn. via tyrosinase inhibition"; "It inhibits melanin. And melanin-like molecules ... synthesis" (T@46178–46250).'},
  {t:'It reflects UV from melanocytes', correct:false, why:'Reflection is the inorganic sunblocks (slide 61).'},
  {t:'It peels the pigmented layer away', correct:false, why:'Peeling is what the AHAs do (slide 68); hydroquinone acts on melanin synthesis.'},
  {t:'It stimulates collagen production', correct:false, why:'Collagen stimulation is the AHAs and topical retinoids (slides 68, 70).'}],
 teach:'Hydroquinone is used topically for whitening or depigmentation of age spots (slide 67; T@45749–45880).',
 cite:S4+' slide 67; T@45749–46250'},

{id:'S4-113', skill:'counsel', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'hq-storage', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['counsel','take-home'], source:'both',
 stem:'How should hydroquinone be stored, and why?',
 options:[
  {t:'Amber bottle away from air; it oxidizes', correct:true, why:'"It\'s in amber bottle intact, not exposed to light, because once you expose it to light and air, it degrades into colored molecules. Like benzoquinone, which is inactive" (T@45882–46160); slide 67 "Protect from light and O2".'},
  {t:'Refrigerated, because it hydrolyzes when warm', correct:false, why:'He gave light and air, not heat, as the problem (T@45882–46160).'},
  {t:'Clear bottle; light activates it', correct:false, why:'Light degrades it to inactive benzoquinone (T@46000–46160).'},
  {t:'Tightly capped; it absorbs moisture', correct:false, why:'Absorbing moisture (hygroscopic) describes hyaluronic acid film (slide 69).'}],
 teach:'"make sure if this is being sold out of your establishment, make sure it\'s well protected" (T@45882–45995). The colored product, benzoquinone, is inactive.',
 cite:S4+' slide 67; T@45882–46160'},

{id:'S4-114', skill:'mech', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'aha-wrinkle', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['mechanism'], source:'both',
 stem:'How do alpha-hydroxy acids improve fine wrinkles?',
 options:[
  {t:'They remove dead cells and boost collagen', correct:true, why:'Slide 68: "Promote dead skin cells removal & stimulate collagen production"; "you\'re promoting de[squa]mation and collagen production at the same time" (T@46324–46600).'},
  {t:'They reflect UVA from the dermis', correct:false, why:'Reflection is zinc oxide and titanium dioxide (slide 61).'},
  {t:'They inhibit tyrosinase in skin melanocytes', correct:false, why:'Tyrosinase inhibition is hydroquinone (slide 67).'},
  {t:'They block androgen receptors', correct:false, why:'Androgen receptor blockade is flutamide (slide 53).'}],
 teach:'AHAs on slide 68 and their sources: glycolic (sugar cane/beet), lactic (milk), tartaric (grapes), malic (apples/grapes), citric.',
 cite:S4+' slide 68; T@46324–46700'},

{id:'S4-115', skill:'class', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'aha-sources', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['recall'], source:'both',
 stem:'Which alpha-hydroxy acid is found in milk?',
 options:[
  {t:'Lactic acid', correct:true, why:'Slide 68 "Lactic (milk)"; "Lactic acid is in milk, right? OK, alpha hydroxy acid" (T@46989–47060).'},
  {t:'Glycolic acid', correct:false, why:'Glycolic acid comes from sugar cane or beet (slide 68).'},
  {t:'Tartaric acid', correct:false, why:'Tartaric acid comes from grapes (slide 68).'},
  {t:'Malic acid', correct:false, why:'Malic acid comes from apples and grapes (slide 68).'}],
 teach:'Lactic acid (2-hydroxypropanoic acid) has its OH on the carbon next to the COOH, the alpha carbon, which makes it an AHA (slides 44, 68).',
 cite:S4+' slide 68; T@46900–47060'},

{id:'S4-116', skill:'mech', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'ha-film', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['mechanism'], source:'both',
 stem:'How does topical hyaluronic acid keep skin plump?',
 options:[
  {t:'It forms a film that holds moisture', correct:true, why:'Slide 69: "Creates a hygroscopic viscoelastic film that maintains skin moisture"; (T@47540–47750).'},
  {t:'It inhibits melanin synthesis', correct:false, why:'That is hydroquinone (slide 67).'},
  {t:'It binds RAR receptors to make more collagen', correct:false, why:'Collagen stimulation through retinoid receptors is the topical retinoids (slide 70).'},
  {t:'It reflects UVB from the dermis', correct:false, why:'Reflection is the inorganic sunblocks (slide 61).'}],
 teach:'Hyaluronic acid is an endogenous mucopolysaccharide, part of the skin, important for moisture, elasticity and plumpness; it is non-antigenic and non-immunogenic (slide 69; T@47069–47600).',
 cite:S4+' slide 69; T@47069–47750'},

{id:'S4-117', skill:'pk', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'ha-mw', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['pk'], source:'both',
 stem:'How does molecular weight change where topical hyaluronic acid acts?',
 options:[
  {t:'High MW stays on top; low MW goes deeper', correct:true, why:'Slide 69: "high MW HA stays on the skin surface....Low MW HA penetrates into deeper skin"; (T@47917–48100).'},
  {t:'Low MW stays on top; high MW goes deeper', correct:false, why:'The reverse of slide 69.'},
  {t:'Molecular weight has no effect', correct:false, why:'Slide 69: "MW influences skin penetration".'},
  {t:'High MW is absorbed into the blood', correct:false, why:'High MW HA stays on the surface (slide 69).'}],
 teach:'"as we age, we start losing out on what? Hyaluronic acid. So we can supplement it" (T@48100–48250). "It may not seem that important, but somebody may come with a question. These are still over the counter things." (T@48260–48370).',
 cite:S4+' slide 69; T@47917–48370'},

{id:'S4-118', skill:'chem', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'ha-structure', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['structure'], source:'both',
 stem:'What kind of molecule is hyaluronic acid?',
 options:[
  {t:'An endogenous polysaccharide', correct:true, why:'Slide 69: "an endogenous mucopolysaccharide"; "this is a polysaccharide ... repeating of these units" (T@47417–47540).'},
  {t:'A synthetic peptide', correct:false, why:'It is a sugar polymer made in the body (slide 69).'},
  {t:'A small alpha-hydroxy acid like lactic acid', correct:false, why:'The AHAs are small acids on slide 68; hyaluronic acid is a large polysaccharide.'},
  {t:'A metal oxide', correct:false, why:'The metal oxides are zinc oxide and titanium dioxide (slide 61).'}],
 teach:'Being part of us, it "doesn\'t have antigenic activity or even immunogenic reactions to it, so advantages" (T@47540–47650).',
 cite:S4+' slide 69; T@47069–47650'},

{id:'S4-119', skill:'mech', prof:'Sikazwe', tier:'new', topic:'sk-beyond', sub:'wrk', concept:'topical-ret-collagen', lowYield:true, unassigned:true, note:'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: pp. 7-9, 12, 15-22, 24-33, 42-54, 60-65). Her numbers are the ones printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.',
 tags:['mechanism'], source:'both',
 stem:'Why are topical retinoids used for wrinkles, and what caution stays with them?',
 options:[
  {t:'They boost collagen; teratogenicity remains', correct:true, why:'Slide 70 "Topical retinoids: Stimulate the skin\'s collagen production"; "still the worry is that these come with that ... teratogenicity worry" (T@48376–48760).'},
  {t:'They reflect UV; skin irritation remains', correct:false, why:'Reflection is the inert metal oxides (slide 61).'},
  {t:'They block melanin synthesis; light exposure remains', correct:false, why:'Blocking melanin synthesis and light sensitivity of the product are hydroquinone (slide 67).'},
  {t:'They hold moisture; hypercalcemia remains', correct:false, why:'Holding moisture is hyaluronic acid (slide 69); hypercalcemia limits vitamin D analogs (slide 27).'}],
 teach:'Slide 70 lists tretinoin (ATRA), isotretinoin and tazarotene. Retinoids normalize keratin and "do the same to collagen production" (T@48376–48600).',
 cite:S4+' slide 70; T@48376–48760'}
);

/* ==========================================================================
   Lecture 8 questions, part 2 (Dr. Patel, warts, corns and calluses
   therapeutics), taught Thursday 11/12/2026 at the end of class. Exam 2.
   DRAFT for Louis.
   Source: Patel_Warts-Corns-Calluses.pdf (20 pages; "slide N" = PDF page;
   only printed slide text is cited, not handwriting) and the transcript
   (T@n 11/12 = character offset in DEENT_Lecture_11.12_transcript.txt; the
   start of the passage quoted). No PollEv questions were asked in this
   lecture; the cases are written in the format of her earlier polls.
   Her frame: "Pay attention to how many days you're using the products for.
   How many times can we repeat it for, OK? When do we refer the patient?
   Those are big things with this PowerPoint" (T@94913-95016).
   Two salicylic acid schedules, by lesion:
   - Wart (slide 10): 40% removed after 48 hours, repeated every 48 hours, up
     to 12 weeks; 17% 1-2 times a day, up to 12 weeks.
   - Corn or callus (slide 17): 17% no more than twice daily for up to 14
     days; 40% removed within 48 hours, reapplied every 48 hours, no longer
     than 14 days (no more than 7 applications).
   Not keyed:
   - Recurrent warts: slide 4 "Recurrent or recalcitrant warts should be
     referred"; she said "if you see reoccurrence of the wart, that's when we
     need treatment" (T@88519). No item asks what to do for a wart that came
     back. Items that refer a wart do so after the full 12 weeks or 3
     cryotherapy treatments (the product limit on slides 10-11 plus
     "recalcitrant" on slide 4).
   - Callus pain: slide 5 "Usually not painful, but pain may occur ... where
     significant pressure may occur"; she first said "corns and calluses can
     be painful", then "corns, painful regardless, but callous, when a weight
     is applied on the foot" (T@89136-89254). Items follow slide 5 and her
     second sentence.
   - Things she said that are not on a slide: Epsom salt or an exfoliator for
     dead tissue (T@93304); orthotics as "prescription-based footwear"
     (T@93801).
   - Complementary therapy details (slide 12) are used only as wrong options;
     she listed them and said salicylic acid "is the most effective"
     (T@92571-92731).
   - OTC cryotherapy ingredients (slide 9) and the brand table (slide 16):
     not spoken; one case names a slide 16 brand.
   ========================================================================== */
const P8CQ = 'Lecture 8 (Patel_Warts-Corns-Calluses.pdf)';

TOPIC_DECKS.push(
  {id:'p8c', exam:2, name:'Warts, Corns and Calluses Therapeutics (Dr. Patel)', file:'Patel_Warts-Corns-Calluses.pdf', when:'taught 11/12 (Exam 2)',
   topics:['p8c-tell', 'p8c-wart', 'p8c-wartsa', 'p8c-cryo', 'p8c-corn', 'p8c-cornsa']});

TOPICS.push(
 {id:'p8c-tell', name:'Wart, corn or callus: telling them apart', prof:'Patel',
  cite:'slides 5, 13 · taught 11/12 (Lecture 8)', subs:[
   {id:'tell', name:'Location, look, pain, size, cause, treatment', cite:'slides 5, 13'}]},
 {id:'p8c-wart', name:'Warts: HPV, types, which are self-treatable, non-drug care', prof:'Patel',
  cite:'slides 4, 6–8 · taught 11/12 (Lecture 8)', subs:[
   {id:'hpv',      name:'Cause and subtypes', cite:'slide 4'},
   {id:'types',    name:'Wart types and self-treatment', cite:'slide 6'},
   {id:'nonpharm', name:'Non-drug care', cite:'slide 8'}]},
 {id:'p8c-wartsa', name:'Warts: salicylic acid 40% and 17%', prof:'Patel',
  cite:'slides 9–10, 12 · taught 11/12 (Lecture 8)', subs:[
   {id:'use', name:'Directions, duration, referral', cite:'slides 9–10'}]},
 {id:'p8c-cryo', name:'Warts: OTC cryotherapy', prof:'Patel',
  cite:'slides 9, 11 · taught 11/12 (Lecture 8)', subs:[
   {id:'use', name:'Seconds, repeat, number of treatments', cite:'slide 11'}]},
 {id:'p8c-corn', name:'Corns and calluses: non-drug care', prof:'Patel',
  cite:'slides 13–15 · taught 11/12 (Lecture 8)', subs:[
   {id:'nonpharm', name:'Non-drug care', cite:'slide 15'}]},
 {id:'p8c-cornsa', name:'Corns and calluses: salicylic acid, who cannot use it, 14 days', prof:'Patel',
  cite:'slides 16–17 · taught 11/12 (Lecture 8)', subs:[
   {id:'excl', name:'Who should not use it', cite:'slide 16'},
   {id:'use',  name:'Directions, 14 days, referral', cite:'slide 17'}]}
);

QUESTIONS.push(
/* ---- Telling them apart (slides 5, 13) ------------------------------------ */
{id:'P8C-001', skill:'tell', prof:'Patel', tier:'new', topic:'p8c-tell', sub:'tell', concept:'p8c-identify-corn',
 tags:['case','know-this','tell'], source:'both',
 stem:'A 45-year-old runner with no medical conditions has a small, raised, sharply demarcated lesion with a central core over the joint of the fifth toe. It is painful. What is this patient’s primary problem?',
 options:[
  {t:'Common wart', correct:false, why:'Slide 6: common warts are dome-shaped papules with a rough surface, commonly on the hands; slide 5: rough cauliflower-like appearance.'},
  {t:'Plantar wart', correct:false, why:'Slide 6: flat, callus-like lesions on the feet with disruption of normal skin markings; no central core.'},
  {t:'Corn', correct:true, why:'Slide 5: over bony prominences in the feet; "Raised, sharply demarcated, hyperkeratotic lesions with a central core"; painful. Slide 13 (T@88809, T@92981 11/12).'},
  {t:'Callus', correct:false, why:'Slide 5: weight-bearing areas; broad-based with diffuse borders; usually not painful.'}],
 teach:'"Corns, we’re talking about the bony area of the feet. Callous, we’re talking about the sole part of the feet where weight is based" (T@92796 11/12).',
 cite:P8CQ+' slides 5–6, 13; T@88809, T@92796, T@92981 11/12'},

{id:'P8C-002', skill:'tell', prof:'Patel', tier:'new', topic:'p8c-tell', sub:'tell', concept:'p8c-identify-callus',
 tags:['case','know-this','tell'], source:'both',
 stem:'A 38-year-old man with no medical conditions who often walks barefoot has a raised, yellowish thickening of the skin on the ball of the foot. It is 3 cm wide with diffuse borders, the skin ridges run through it in a normal pattern, and it does not hurt. What is this patient’s primary problem?',
 options:[
  {t:'Callus', correct:true, why:'Slide 5: weight-bearing areas of the feet; "Raised, yellowish thickening of the skin; broad-based with diffuse borders; normal pattern of skin ridges"; a few millimeters to several centimeters; friction, walking barefoot (T@89775 11/12).'},
  {t:'Corn', correct:false, why:'Slide 5: sharply demarcated with a central core, a few millimeters to 1 cm, painful, over bony prominences.'},
  {t:'Plantar wart', correct:false, why:'Slide 5: plantar warts disrupt normal skin ridges; here the ridges are normal.'},
  {t:'Mosaic wart', correct:false, why:'Slide 6: multiple, closely grouped plantar warts.'}],
 teach:'Callus: broad, yellowish, diffuse borders, normal ridges. Corn: small, sharp border, central core, painful (slide 5).',
 cite:P8CQ+' slides 5–6, 13; T@88936, T@89775 11/12'},

{id:'P8C-003', skill:'tell', prof:'Patel', tier:'new', topic:'p8c-tell', sub:'tell', concept:'p8c-plantar-wart-vs-callus',
 tags:['tell','know-this'], source:'slide',
 stem:'A flat, thickened lesion is on the sole of the foot. Which finding points to a plantar wart and away from a callus?',
 options:[
  {t:'Pain when pressure is applied to it', correct:false, why:'Pressure on the sole makes a wart or a callus painful (slide 5).'},
  {t:'Disruption of the normal skin ridges', correct:true, why:'Slide 5: "plantar warts disrupt normal skin ridges"; a callus keeps the "normal pattern of skin ridges". Slide 6: plantar warts are callus-like "with disruption of normal skin markings".'},
  {t:'Yellowish thickening of the skin', correct:false, why:'Slide 5: a callus feature.'},
  {t:'A broad base with diffuse borders', correct:false, why:'Slide 5: a callus feature.'}],
 teach:'"So what are the difference between all three?" (T@88664 11/12): location, look, pain, size, timing, cause (slide 5).',
 cite:P8CQ+' slides 5–6; T@88664 11/12'},

{id:'P8C-004', skill:'tell', prof:'Patel', tier:'new', topic:'p8c-tell', sub:'tell', concept:'p8c-size',
 tags:['numbers','tell'], source:'both',
 stem:'How large may a wart grow?',
 options:[
  {t:'A few millimeters to 1 cm', correct:false, why:'Slide 5: the size of a corn.'},
  {t:'A few millimeters to several centimeters', correct:false, why:'Slide 5: the size of a callus.'},
  {t:'About 3 inches in diameter', correct:false, why:'3 inches is the self-treatment size limit for wounds (Wound Care slide 7).'},
  {t:'About 1 inch in diameter', correct:true, why:'Slide 5: "Varies; may grow to approximately 1 inch in diameter". "With warts, 1 inch in diameter, corns, 1 centimeter" (T@89383 11/12).'}],
 teach:'Wart about 1 inch; corn a few millimeters to 1 cm; callus a few millimeters to several centimeters (slide 5).',
 cite:P8CQ+' slide 5; T@89383 11/12'},

{id:'P8C-005', skill:'patho', prof:'Patel', tier:'new', topic:'p8c-wart', sub:'hpv', concept:'p8c-wart-cause-layer',
 tags:['two-facts'], source:'both',
 stem:'What causes a wart, and which skin layer does it involve?',
 options:[
  {t:'HPV infection; limited to the epidermis', correct:true, why:'Slide 4: "Caused by human papillomavirus (HPV) ... Limited to epidermis". Slide 5: "HPV infection of the epidermal layer" (T@88223, T@88332 11/12).'},
  {t:'HPV infection; extends into the dermis', correct:false, why:'Slide 4: limited to the epidermis.'},
  {t:'Friction; limited to the epidermis', correct:false, why:'Friction causes corns and calluses (slide 5).'},
  {t:'Friction; extends into the dermis', correct:false, why:'Friction causes corns and calluses (slide 5); a wart is limited to the epidermis (slide 4).'}],
 teach:'Transmission: other humans, auto-inoculation, fomites (slide 4).',
 cite:P8CQ+' slides 4–5; T@88223, T@88332, T@89775 11/12'},

{id:'P8C-006', skill:'patho', prof:'Patel', tier:'new', topic:'p8c-wart', sub:'hpv', concept:'p8c-hpv-1-feet',
 tags:['know-this','recall'], source:'both',
 stem:'Which HPV subtype is linked to warts on the feet?',
 options:[
  {t:'HPV-2', correct:false, why:'Slide 4: a hand subtype (HPV-2, HPV-4, HPV-27, HPV-57).'},
  {t:'HPV-4', correct:false, why:'Slide 4: a hand subtype.'},
  {t:'HPV-1', correct:true, why:'Slide 4: "Feet – subtype HPV-1". "So know that feet is HPV 1 and the other types are on the hands" (T@88454 11/12).'},
  {t:'HPV-27', correct:false, why:'Slide 4: a hand subtype.'}],
 teach:'Feet: HPV-1. Hands: HPV-2, -4, -27, -57 (slide 4).',
 cite:P8CQ+' slide 4; T@88454 11/12'},

/* ---- Wart types and self-treatment (slide 6) ------------------------------ */
{id:'P8C-007', skill:'case', prof:'Patel', tier:'new', topic:'p8c-wart', sub:'types', concept:'p8c-flat-wart-refer',
 tags:['case','know-this','refer'], source:'both',
 stem:'A parent brings a 9-year-old with no medical conditions who has several smooth, flat-topped, yellow-brown papules on the cheek. The parent asks for a wart remover. What is the most appropriate recommendation?',
 options:[
  {t:'Self-care: salicylic acid 40% pad, changed every 48 hours', correct:false, why:'Correct schedule for a self-treatable wart (slide 10), but flat warts are not self-treatable (slide 6), and the slide 16 warning excludes warts on the face.'},
  {t:'Self-care: salicylic acid 17% liquid 1–2 times a day', correct:false, why:'Correct schedule for a self-treatable wart (slide 10); flat warts are not self-treatable (slide 6).'},
  {t:'Refer: OTC wart products are not used in children', correct:false, why:'Slide 6 lists common warts in children and adolescents as self-treatable; the wart type and the face are the reasons here.'},
  {t:'Refer: flat warts on the face are not self-treatable', correct:true, why:'Slide 6: Flat (verruca plana), face, children: "Smooth, flat-topped, yellow-brown papules"; self-treatable: No. "Know what is self-treatable and know what is not self-treatable" (T@90202 11/12).'}],
 teach:'Self-treatable: common and plantar. Not: flat, mosaic, periungual, filiform (slide 6).',
 cite:P8CQ+' slides 6, 10, 16; T@90202 11/12'},

{id:'P8C-008', skill:'case', prof:'Patel', tier:'new', topic:'p8c-wart', sub:'types', concept:'p8c-mosaic-wart',
 tags:['case','know-this','two-facts'], source:'both',
 stem:'A 17-year-old with no medical conditions has many closely grouped warts on the sole of one foot. Which wart type is this, and can it be self-treated?',
 options:[
  {t:'Plantar wart; self-treatable', correct:false, why:'A single plantar wart is self-treatable; multiple, closely grouped plantar warts are a mosaic wart (slide 6).'},
  {t:'Mosaic wart; not self-treatable', correct:true, why:'Slide 6: Mosaic, feet, adolescents and young adults: "Multiple, closely grouped plantar warts"; self-treatable: No.'},
  {t:'Mosaic wart; self-treatable', correct:false, why:'Slide 6: mosaic warts are not self-treatable.'},
  {t:'Filiform wart; not self-treatable', correct:false, why:'Slide 6: filiform warts are on the face, rapidly growing, with threadlike projections.'}],
 teach:'"Know what is self-treatable and know what is not self-treatable" (T@90202 11/12).',
 cite:P8CQ+' slide 6; T@90202 11/12'},

{id:'P8C-009', skill:'case', prof:'Patel', tier:'new', topic:'p8c-wart', sub:'types', concept:'p8c-self-treatable-types', multi:true,
 tags:['list','know-this'], source:'both',
 stem:'Which wart types are self-treatable? Select all that apply.',
 options:[
  {t:'Common wart on the hand', correct:true, why:'Slide 6: Common (verruca vulgaris): Yes.'},
  {t:'Plantar wart on the foot', correct:true, why:'Slide 6: Plantar (verruca plantaris): Yes.'},
  {t:'Flat wart on the face', correct:false, why:'Slide 6: No.'},
  {t:'Periungual wart around the nail', correct:false, why:'Slide 6: No (persons who bite their nails; thickened, fissured, cauliflower-textured skin around the nail plate).'},
  {t:'Filiform wart on the face', correct:false, why:'Slide 6: No.'}],
 teach:'Slide 6 marks two types as self-treatable: common and plantar.',
 cite:P8CQ+' slide 6; T@90066, T@90202 11/12'},

{id:'P8C-010', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-wart', sub:'nonpharm', concept:'p8c-wart-nonpharm', multi:true,
 tags:['list','counsel'], source:'both',
 stem:'A patient is treating a plantar wart. Which non-drug measures should the pharmacist counsel on? Select all that apply.',
 options:[
  {t:'Wash hands before and after touching the wart', correct:true, why:'Slide 8 (T@90398 11/12).'},
  {t:'Use a designated towel to dry the affected area', correct:true, why:'Slide 8.'},
  {t:'Keep the wart covered', correct:true, why:'Slide 8 (T@90663 11/12).'},
  {t:'Shave the wart down each week', correct:false, why:'Slide 8: avoid cutting, shaving or picking at warts.'},
  {t:'Go barefoot in public bathrooms', correct:false, why:'Slide 8: use foot coverings in bathrooms or public spaces.'}],
 teach:'Also: avoid sharing towels, razors, socks, shoes; for a plantar wart, padding (lamb’s wool or moleskin) over pressure points (slide 8).',
 cite:P8CQ+' slide 8; T@90398–90745 11/12'},

/* ---- Warts: salicylic acid (slides 9-10, 12) ------------------------------ */
{id:'P8C-011', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-wartsa', sub:'use', concept:'p8c-wart-sa40-directions',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 22-year-old with no medical conditions has a common wart on a finger and chooses salicylic acid 40% pads. Which directions are correct?',
 options:[
  {t:'Remove after 48 hours; repeat every 48 hours; up to 14 days', correct:false, why:'14 days (7 applications) is the corn and callus limit (slide 17); for a wart it is up to 12 weeks (slide 10).'},
  {t:'Apply a new pad 1–2 times a day; up to 12 weeks', correct:false, why:'1–2 times a day is the 17% liquid, gel or stick schedule (slide 10).'},
  {t:'Remove after 48 hours; repeat every 48 hours; up to 12 weeks', correct:true, why:'Slide 10: "Remove plaster/pad/strip/stick after 48 hours. Repeat procedure every 48 hours as needed until the wart resolves. These products may be used for up to 12 weeks" (T@91458, T@91534 11/12).'},
  {t:'Remove after 6 days; repeat every 6 days; up to 2 months', correct:false, why:'That is the duct tape schedule (slide 12).'}],
 teach:'Trim the plaster to fit the wart and cover with occlusive tape; keep the disc off healthy tissue (slide 10; T@91257 11/12).',
 cite:P8CQ+' slides 9–10, 12, 17; T@91257–91534 11/12'},

{id:'P8C-012', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-wartsa', sub:'use', concept:'p8c-wart-sa17-directions',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 16-year-old with no medical conditions has a plantar wart and chooses salicylic acid 17% liquid. Which directions are correct?',
 options:[
  {t:'One drop at a time; up to twice daily; up to 14 days', correct:false, why:'That is the 17% schedule for a corn or callus (slide 17).'},
  {t:'One drop at a time; 1–2 times a day; up to 12 weeks', correct:true, why:'Slide 10: "Apply 1 drop at a time to cover the wart ... Repeat procedure 1–2 times a day until the wart resolves. This product may be used for up to 12 weeks" (T@91612–91887 11/12).'},
  {t:'One drop at a time; every 48 hours; up to 12 weeks', correct:false, why:'Every 48 hours is the 40% plaster, pad or strip schedule (slide 10).'},
  {t:'One drop at a time; 1–2 times a day; up to 3 treatments', correct:false, why:'3 treatments is the cryotherapy limit (slide 11).'}],
 teach:'Let the solution dry completely, then cover with a self-adhesive disc or occlusive tape; protect adjacent healthy skin (slide 10).',
 cite:P8CQ+' slides 10–11, 17; T@91612–91887 11/12'},

{id:'P8C-013', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-wartsa', sub:'use', concept:'p8c-wart-prep-soak',
 tags:['numbers','counsel'], source:'both',
 stem:'How is the skin prepared before an OTC salicylic acid or cryotherapy product is used on a wart?',
 options:[
  {t:'Soak in warm water for 5 minutes; wash and dry', correct:true, why:'Slides 10–11: "Before treatment, soak the affected area in warm water for 5 minutes. Wash and dry the affected area thoroughly" (T@91204 11/12).'},
  {t:'Soak in warm water for 5 minutes; leave it damp', correct:false, why:'The area is washed and dried thoroughly (slides 10–11).'},
  {t:'Coat the wart with petroleum jelly; wash and dry', correct:false, why:'Petroleum jelly goes on the healthy surrounding skin as protection (slide 17), not on the lesion.'},
  {t:'Soak in warm water for 48 hours under tape; dry', correct:false, why:'48 hours is how long a 40% plaster stays on (slide 10); the soak is 5 minutes.'}],
 teach:'Wash hands before and after use (slides 10–11).',
 cite:P8CQ+' slides 10–11, 17; T@91112, T@91204 11/12'},

{id:'P8C-014', skill:'case', prof:'Patel', tier:'new', topic:'p8c-wartsa', sub:'use', concept:'p8c-wart-12-weeks-refer',
 tags:['case','know-this','refer','numbers'], source:'both',
 stem:'A 25-year-old with no medical conditions has applied salicylic acid 17% gel to a common wart on the hand twice daily for 12 weeks. The wart is unchanged. What is the most appropriate recommendation?',
 options:[
  {t:'Continue the gel for 12 more weeks', correct:false, why:'Slide 10: the product may be used for up to 12 weeks.'},
  {t:'Increase the gel to 4 times a day', correct:false, why:'Slide 10: 1–2 times a day.'},
  {t:'Use the gel every 48 hours instead', correct:false, why:'Every 48 hours is the 40% schedule (slide 10); the 12-week limit has been reached.'},
  {t:'Stop the gel and refer the patient', correct:true, why:'Slide 10: up to 12 weeks. Slide 4: "Recurrent or recalcitrant warts should be referred". "How many days you’re using the products for ... When do we refer the patient?" (T@94913–95016 11/12).'}],
 teach:'Wart: salicylic acid up to 12 weeks. Corn or callus: up to 14 days (slides 10, 17).',
 note:'Referral here joins two slide lines: the 12-week product limit (slide 10) and "recalcitrant warts should be referred" (slide 4). No slide or spoken sentence says "refer at 12 weeks" in those words; each wrong option breaks a slide 10 limit on its own.',
 cite:P8CQ+' slides 4, 10; T@91887, T@94913 11/12'},

{id:'P8C-015', skill:'case', prof:'Patel', tier:'new', topic:'p8c-wartsa', sub:'use', concept:'p8c-wart-most-effective',
 tags:['case','two-facts'], source:'both',
 stem:'A 20-year-old with no medical conditions has a common wart on the hand and asks which option is the most effective to start with. What should the pharmacist recommend?',
 options:[
  {t:'Salicylic acid 17% liquid, 1–2 times a day', correct:true, why:'"In general, um, the salicylic acid is the most effective to treat the warts" (T@92731 11/12); slide 10 schedule.'},
  {t:'Duct tape, changed every 6 days for up to 2 months', correct:false, why:'A complementary therapy (slide 12): "it is available to use", but salicylic acid is the most effective (T@92571–92731 11/12).'},
  {t:'Dietary zinc 10 mg/kg/day', correct:false, why:'Slide 12: small study.'},
  {t:'Topical vitamin A once a day', correct:false, why:'Slide 12: case report only; no frequency is given.'}],
 teach:'Slide 12 complementary therapies: vitamin A (case report), zinc (small study), garlic extract (small study), duct tape.',
 cite:P8CQ+' slides 10, 12; T@92571, T@92731 11/12'},

/* ---- Warts: cryotherapy (slides 9, 11) ------------------------------------ */
{id:'P8C-016', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-cryo', sub:'use', concept:'p8c-cryo-seconds',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 19-year-old with no medical conditions will use an OTC cryotherapy product on a plantar wart. How is the applicator used on the wart?',
 options:[
  {t:'Until a halo appears; about 20 seconds', correct:false, why:'About 20 seconds is for common warts (slide 11).'},
  {t:'Until a halo appears; about 40 seconds', correct:true, why:'Slide 11: "Apply to the wart until a ‘halo’ appears around the wart ... Approximately 20 seconds for common warts; Approximately 40 seconds for plantar warts" (T@92292–92391 11/12).'},
  {t:'Until a halo appears; about 5 minutes', correct:false, why:'5 minutes is the warm-water soak before treatment (slide 11).'},
  {t:'Three times in a row; about 20 seconds each', correct:false, why:'3 is the maximum number of treatments, each 2 weeks apart (slide 11).'}],
 teach:'Common wart 20 seconds; plantar wart 40 seconds (slide 11).',
 cite:P8CQ+' slide 11; T@92292–92391 11/12'},

{id:'P8C-017', skill:'case', prof:'Patel', tier:'new', topic:'p8c-cryo', sub:'use', concept:'p8c-cryo-repeat-2-weeks',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 23-year-old with no medical conditions used an OTC cryotherapy product on a common wart 5 days ago. The wart is still there, and the patient wants to treat it again today. What is the most appropriate recommendation?',
 options:[
  {t:'Repeat today; treatments are 48 hours apart', correct:false, why:'48 hours is the salicylic acid 40% interval (slide 10).'},
  {t:'Wait; repeat 2 weeks after the first treatment', correct:true, why:'Slide 11: "Repeat after 2 weeks if needed. This product may be used for up to 3 treatments" (T@92487 11/12).'},
  {t:'Wait; repeat 12 weeks after the first treatment', correct:false, why:'12 weeks is the salicylic acid limit for warts (slide 10).'},
  {t:'Repeat today; up to 7 applications are allowed', correct:false, why:'7 applications is the 40% plaster limit for corns and calluses (slide 17).'}],
 teach:'"How many times can we repeat it for" (T@94913 11/12): cryotherapy after 2 weeks, up to 3 treatments.',
 cite:P8CQ+' slides 10–11, 17; T@92487, T@94913 11/12'},

{id:'P8C-018', skill:'case', prof:'Patel', tier:'new', topic:'p8c-cryo', sub:'use', concept:'p8c-cryo-3-treatments',
 tags:['case','know-this','refer','numbers'], source:'both',
 stem:'A 28-year-old with no medical conditions has used an OTC cryotherapy product on a common wart 3 times, 2 weeks apart. The wart is still present. What is the most appropriate recommendation?',
 options:[
  {t:'Give a fourth treatment in 2 weeks', correct:false, why:'Slide 11: up to 3 treatments.'},
  {t:'Give a fourth treatment for 40 seconds', correct:false, why:'40 seconds is the plantar wart time (slide 11); the 3-treatment limit has been reached.'},
  {t:'Stop cryotherapy and refer the patient', correct:true, why:'Slide 11: "This product may be used for up to 3 treatments". Slide 4: recalcitrant warts should be referred. "May only use up to 3 treatments" (T@92487 11/12).'},
  {t:'Continue every 2 weeks for up to 12 weeks', correct:false, why:'12 weeks is the salicylic acid limit (slide 10); cryotherapy stops at 3 treatments (slide 11).'}],
 teach:'Cryotherapy: repeat after 2 weeks, 3 treatments at most (slide 11).',
 note:'Referral here joins two slide lines: the 3-treatment limit (slide 11) and "recalcitrant warts should be referred" (slide 4). No slide or spoken sentence says "refer after 3 treatments" in those words; each wrong option breaks the slide 11 limit on its own.',
 cite:P8CQ+' slides 4, 10–11; T@92487, T@95016 11/12'},

{id:'P8C-019', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-cryo', sub:'use', concept:'p8c-cryo-counseling', multi:true,
 tags:['list','counsel'], source:'both',
 stem:'Which counseling points are correct for an OTC cryotherapy wart product? Select all that apply.',
 options:[
  {t:'Soak the area in warm water for 5 minutes first', correct:true, why:'Slide 11.'},
  {t:'Keep it away from heat sources; it is flammable', correct:true, why:'Slide 11: "These products are flammable. Do not use near heat sources."'},
  {t:'Discard a single-use applicator after one use', correct:true, why:'Slide 11 (T@92428 11/12).'},
  {t:'Hold the canister close to the face to aim it', correct:false, why:'Slide 11: do not hold the canister close to the face, body, or clothing (T@92018 11/12).'},
  {t:'Apply for about 40 seconds on a common wart', correct:false, why:'Slide 11: about 20 seconds for common warts; 40 seconds for plantar warts.'}],
 teach:'A file or pumice stone may be used to lightly abrade the surface of plantar warts (slide 11).',
 cite:P8CQ+' slide 11; T@92018–92428 11/12'},

{id:'P8C-020', skill:'tell', prof:'Patel', tier:'new', topic:'p8c-tell', sub:'tell', concept:'p8c-cryo-warts-only',
 tags:['tell','two-facts'], source:'both',
 stem:'For which lesion is an OTC cryotherapy product an appropriate self-treatment?',
 options:[
  {t:'Corn on the top of a toe', correct:false, why:'Slide 5: corns are treated by alleviating the cause and with salicylic acid.'},
  {t:'Callus on the heel', correct:false, why:'Slide 5: calluses are treated by alleviating the cause and with salicylic acid.'},
  {t:'Common wart on the hand', correct:true, why:'Slide 5, warts: "treatment with salicylic acid or cryotherapy"; slide 6: common warts are self-treatable; slide 9 lists cryotherapy as a wart remover (T@90995 11/12).'},
  {t:'Flat wart on the face', correct:false, why:'Slide 6: flat warts are not self-treatable.'}],
 teach:'Salicylic acid treats warts, corns and calluses (T@90006 11/12); cryotherapy is for warts (slides 5, 9).',
 cite:P8CQ+' slides 5–6, 9; T@90006, T@90995 11/12'},

/* ---- Corns and calluses (slides 13-17) ------------------------------------ */
{id:'P8C-021', skill:'case', prof:'Patel', tier:'new', topic:'p8c-cornsa', sub:'excl', concept:'p8c-corn-diabetes',
 tags:['case','know-this','refer'], source:'both',
 stem:'A 61-year-old man with type 2 diabetes has a painful corn on the fourth toe. He asks for Dr. Scholl’s Duragel Corn Remover (salicylic acid 40%). What is the most appropriate recommendation?',
 options:[
  {t:'Apply it; remove within 48 hours; treat up to 14 days', correct:false, why:'Correct schedule for a patient who qualifies (slide 17); diabetes is on the do-not-use list (slide 16).'},
  {t:'Use the 17% liquid instead, up to twice daily', correct:false, why:'The warning covers salicylic acid 17% and 40% products alike (slide 16; T@94147 11/12).'},
  {t:'Apply it; limit treatment to 3 applications', correct:false, why:'3 is the cryotherapy treatment limit for warts (slide 11); with diabetes the product is not used (slide 16).'},
  {t:'Do not use salicylic acid; refer him', correct:true, why:'Slide 16: "Do not use if you are diabetic, or if you have poor blood circulation." "If a patient is diabetic, that is also not the time to use these agents" (T@94074 11/12).'}],
 teach:'"Understand patient specifics matter" (T@95722 11/12). Diabetes or poor blood circulation: no salicylic acid corn or callus remover (slide 16).',
 cite:P8CQ+' slides 11, 16–17; T@94074, T@94147, T@95722 11/12'},

{id:'P8C-022', skill:'case', prof:'Patel', tier:'new', topic:'p8c-cornsa', sub:'excl', concept:'p8c-corn-sa-exclusions', multi:true,
 tags:['list','know-this'], source:'both',
 stem:'In which situations should an OTC salicylic acid corn and callus remover not be used? Select all that apply.',
 options:[
  {t:'The patient has diabetes', correct:true, why:'Slide 16 (T@94074 11/12).'},
  {t:'The patient has poor blood circulation', correct:true, why:'Slide 16.'},
  {t:'The skin is irritated, infected or reddened', correct:true, why:'Slide 16 (T@93973 11/12).'},
  {t:'The lesion is a mole or a birthmark', correct:true, why:'Slide 16.'},
  {t:'The lesion is a callus on the heel of a healthy adult', correct:false, why:'A callus in a patient with no exclusion is treated with salicylic acid (slides 5, 17).'}],
 teach:'Slide 16 also lists warts with hair growing from them, genital warts, warts on the face, and warts on mucous membranes.',
 cite:P8CQ+' slides 5, 16–17; T@93973, T@94074 11/12'},

{id:'P8C-023', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-cornsa', sub:'use', concept:'p8c-corn-sa40-directions',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 34-year-old with no medical conditions has a corn on the fifth toe and chooses a salicylic acid 40% plaster. Which directions are correct?',
 options:[
  {t:'Remove within 48 hours; reapply every 48 hours; up to 12 weeks', correct:false, why:'12 weeks is the limit for a wart (slide 10); for a corn or callus it is 14 days (slide 17).'},
  {t:'Remove within 48 hours; reapply every 48 hours; up to 14 days', correct:true, why:'Slide 17: "Remove the plaster/pad and occlusive tape within 48 hours ... reapply the plaster every 48 hours as needed ... do not treat for longer than 14 days—that is, use no more than 7 applications" (T@94465, T@94581 11/12).'},
  {t:'Apply a new plaster twice daily; up to 14 days', correct:false, why:'Twice daily is the 17% liquid schedule (slide 17).'},
  {t:'Remove after 2 weeks; reapply for up to 3 treatments', correct:false, why:'2 weeks and 3 treatments are the cryotherapy numbers for warts (slide 11).'}],
 teach:'"Very similar to the wart treatment. You’re not gonna use it longer than 14 days" (T@94465–94581 11/12).',
 cite:P8CQ+' slides 10–11, 17; T@94465, T@94581 11/12'},

{id:'P8C-024', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-cornsa', sub:'use', concept:'p8c-corn-sa17-directions',
 tags:['case','numbers','two-facts'], source:'slide',
 stem:'A 29-year-old with no medical conditions has a callus on the heel and chooses salicylic acid 17% liquid in a collodion-like vehicle. Which directions are correct?',
 options:[
  {t:'1–2 times a day for up to 12 weeks', correct:false, why:'That is the 17% schedule for a wart (slide 10).'},
  {t:'Every 48 hours for up to 14 days', correct:false, why:'Every 48 hours is the 40% plaster schedule (slide 17).'},
  {t:'Up to twice daily for up to 7 days', correct:false, why:'7 is the number of 40% plaster applications in 14 days (slide 17); the 17% liquid is used for up to 14 days.'},
  {t:'Up to twice daily for up to 14 days', correct:true, why:'Slide 17: "Apply product no more than twice daily for up to 14 days. Morning and evening usually are the most convenient times."'}],
 teach:'One drop at a time until the area is well covered; do not overuse; let the drops dry and harden (slide 17; T@94311, T@94386 11/12).',
 cite:P8CQ+' slides 10, 17; T@94311, T@94386 11/12'},

{id:'P8C-025', skill:'case', prof:'Patel', tier:'new', topic:'p8c-cornsa', sub:'use', concept:'p8c-corn-14-days-refer',
 tags:['case','know-this','refer','numbers'], source:'both',
 stem:'A 40-year-old with no medical conditions has used salicylic acid 40% plasters on a corn every 48 hours for 14 days. The corn is still there. What is the most appropriate recommendation?',
 options:[
  {t:'Stop and seek medical attention', correct:true, why:'Slide 17: "Seek medical attention if redness or irritation of the skin occurs or if corn or callus is not removed after 14 days of treatment." "Once you’ve hit that 7 applications and if it still hasn’t seen benefit, then that’s when you would go ahead and refer over to the provider" (T@94630 11/12).'},
  {t:'Continue the plasters for up to 12 weeks', correct:false, why:'12 weeks is the limit for a wart (slide 10).'},
  {t:'Change to the 17% liquid for 14 more days', correct:false, why:'Not removed after 14 days of treatment means medical attention (slide 17).'},
  {t:'Change to cryotherapy, repeated after 2 weeks', correct:false, why:'Cryotherapy is a wart treatment (slides 5, 9, 11).'}],
 teach:'"When do we refer the patient? Those are big things with this PowerPoint" (T@95016 11/12).',
 cite:P8CQ+' slides 5, 10, 17; T@94581, T@94630, T@95016 11/12'},

{id:'P8C-026', skill:'dose', prof:'Patel', tier:'new', topic:'p8c-cornsa', sub:'use', concept:'p8c-corn-7-applications',
 tags:['numbers','know-this'], source:'both',
 stem:'A salicylic acid 40% plaster is reapplied every 48 hours for the longest time allowed for a corn. What is the maximum number of applications?',
 options:[
  {t:'3', correct:false, why:'3 is the maximum number of cryotherapy treatments for a wart (slide 11).'},
  {t:'7', correct:true, why:'Slide 17: "do not treat for longer than 14 days—that is, use no more than 7 applications" (14 days ÷ 2 days = 7; T@94630 11/12).'},
  {t:'12', correct:false, why:'12 is the number of weeks salicylic acid may be used on a wart (slide 10).'},
  {t:'14', correct:false, why:'14 is the number of days; one plaster covers 48 hours (slide 17).'}],
 teach:'14 days at one plaster per 48 hours = 7 applications (slide 17).',
 cite:P8CQ+' slides 10–11, 17; T@94581, T@94630 11/12'},

{id:'P8C-027', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-cornsa', sub:'use', concept:'p8c-corn-sa-healthy-skin',
 tags:['case','counsel'], source:'slide',
 stem:'While a patient applies salicylic acid 17% liquid to a callus, some of it runs onto the healthy skin beside it. What should the patient do?',
 options:[
  {t:'Let it dry, then cover it with occlusive tape', correct:false, why:'Drying and covering apply to the treated lesion (slides 10, 17), not to healthy skin.'},
  {t:'Rub petroleum jelly over it and leave it on', correct:false, why:'Petroleum jelly is put on the healthy skin beforehand as protection (slide 17); after contact the solution is washed off.'},
  {t:'Wash it off at once with soap and water', correct:true, why:'Slide 17: "Do not let adjacent areas of normal healthy skin come in contact with product. If this happens, immediately wash off the solution with soap and water."'},
  {t:'Soak the foot in warm water for 5 minutes', correct:false, why:'The 5-minute soak is the step before treatment (slide 17).'}],
 teach:'Slide 17: a coating of petroleum jelly on the healthy surrounding skin protects it; cap the container tightly to prevent evaporation, which would raise the concentration.',
 cite:P8CQ+' slides 10, 17; T@94311 11/12'},

{id:'P8C-028', skill:'counsel', prof:'Patel', tier:'new', topic:'p8c-corn', sub:'nonpharm', concept:'p8c-corn-nonpharm', multi:true,
 tags:['list','counsel'], source:'both',
 stem:'A healthy adult has a callus on the ball of the foot. Which non-drug measures are appropriate? Select all that apply.',
 options:[
  {t:'Soak the area in warm water for 5 minutes daily', correct:true, why:'Slide 15 (T@93238 11/12).'},
  {t:'Use circular foam or gel cushioning pads', correct:true, why:'Slide 15: to relieve pressure (T@93393 11/12).'},
  {t:'Wear well-fitting, non-binding footwear', correct:true, why:'Slide 15. "Oftentimes footwear tends to be the most common cause" (T@93710 11/12).'},
  {t:'Scrub away the healthy skin around the callus', correct:false, why:'Slide 17: "Do not debride the healthy skin"; slide 15: remove any dead tissue gently.'},
  {t:'Walk barefoot to reduce friction', correct:false, why:'Slide 5: walking barefoot is a cause of calluses.'}],
 teach:'Slide 15: daily 5-minute warm soak; remove dead tissue gently; cushioning pads; well-fitting, non-binding footwear; orthotics. Goal: prevent recurrence by correcting underlying causes (slide 14).',
 cite:P8CQ+' slides 5, 14–15, 17; T@93238–93710 11/12'}
);

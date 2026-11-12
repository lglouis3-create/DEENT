/* ==========================================================================
   Lecture 8 questions, part 1 (Dr. Patel, wound care therapeutics), taught
   Thursday 11/12/2026 at the end of class. Exam 2. DRAFT for Louis.
   Source: Patel_Wound-Care.pdf (29 pages; "slide N" = PDF page; only printed
   slide text is cited, not handwriting) and the transcript (T@n 11/12 =
   character offset in DEENT_Lecture_11.12_transcript.txt; the start of the
   passage quoted). No PollEv questions were asked in this lecture; the cases
   are written in the format of her earlier polls.
   Her frame: "I'm gonna tell you guys exactly what I want you guys to know.
   There's more information in these slides for your reference" (T@77775);
   "All that I mentioned, key terms, key points is what I want you to know"
   (T@87898).
   Burn cases: no item uses exactly 2%, 10%, 15%, 20% or 25% BSA (category
   edges on slide 16). Minor cases say "superficial"; moderate and major cases
   say "superficial partial-thickness", the wording of slide 16.
   Not keyed:
   - A deep partial-thickness or full-thickness burn under 2% BSA: slide 16
     lists it under "Minor - Self-Care", slide 7 excludes "Deep partial
     thickness, full thickness, or subdermal skin injuries" from
     self-treatment, and slide 17 excludes a "Moderate to severe burn to BSA
     of 2% or more". Unresolved; no item asks whether such a burn is self-care.
   - How long each stage takes ("different stages of the wound may take
     months, and stage one oftentimes takes weeks", T@78858): not on slide 6.
     Items key only "the higher the stage, the longer" (T@79102).
   - Aquaphor: slide 13 has antibiotic ointments reducing healing and
     "Aquaphor ointment was superior in this trial"; she said "in terms of
     antibiotic-containing ointments, Aquaphor has one" (T@82655).
   - Antiseptic as the "first step" ("First aid antiseptics, of course,
     cleaning the skin, first step", T@83282) against slide 27 and T@87422
     (water or saline first). Items key water or saline.
   - Dressing brand names she spoke ("Nexederm", "tattoo band-aids") that are
     not on slides 8-9.
   - Slides 21-24 and 26 (local and systemic factors, Rx drugs, comorbidities,
     chronic wound debridement): read as lists; no items.
   ========================================================================== */
const P8WQ = 'Lecture 8 (Patel_Wound-Care.pdf)';

TOPIC_DECKS.push(
  {id:'p8w', exam:2, name:'Wound Care Therapeutics (Dr. Patel)', file:'Patel_Wound-Care.pdf', when:'taught 11/12 (Exam 2)',
   topics:['p8w-stage', 'p8w-self', 'p8w-dress', 'p8w-otc', 'p8w-burn', 'p8w-heal']});

TOPICS.push(
 {id:'p8w-stage', name:'Wound stages and healing phases', prof:'Patel',
  cite:'slides 5–6, 27 · taught 11/12 (Lecture 8)', subs:[
   {id:'stage', name:'The four stages (by depth)', cite:'slide 5'},
   {id:'phase', name:'Three healing phases; time by stage', cite:'slides 6, 27'}]},
 {id:'p8w-self', name:'Wounds: who can self-treat, first step, when to refer', prof:'Patel',
  cite:'slides 7, 27 · taught 11/12 (Lecture 8)', subs:[
   {id:'excl',  name:'Exclusions for self-treatment', cite:'slide 7'},
   {id:'first', name:'First step: cleanse', cite:'slide 27'}]},
 {id:'p8w-dress', name:'Dressings', prof:'Patel',
  cite:'slides 8–9 · taught 11/12 (Lecture 8)', subs:[
   {id:'type', name:'Advantages and disadvantages by dressing type', cite:'slides 8–9'}]},
 {id:'p8w-otc', name:'First-aid antibiotics, anesthetics and antiseptics', prof:'Patel',
  cite:'slides 11–15, 19–20 · taught 11/12 (Lecture 8)', subs:[
   {id:'abx',  name:'Topical antibiotics', cite:'slides 11, 20'},
   {id:'anes', name:'Topical anesthetics', cite:'slides 14, 20'},
   {id:'asep', name:'Antiseptics', cite:'slides 15, 19'}]},
 {id:'p8w-burn', name:'Burns: severity by BSA, exclusions, minor burn care', prof:'Patel',
  cite:'slides 16–20 · taught 11/12 (Lecture 8)', subs:[
   {id:'sev',  name:'Minor, moderate, major (adult and child)', cite:'slide 16'},
   {id:'excl', name:'Exclusions for self-treatment of burns', cite:'slides 16–17'},
   {id:'tx',   name:'Minor burn: non-drug and OTC', cite:'slides 18–20'}]},
 {id:'p8w-heal', name:'What impairs wound healing', prof:'Patel',
  cite:'slide 25 · taught 11/12 (Lecture 8)', subs:[
   {id:'smoke', name:'Smoking', cite:'slide 25'}]}
);

QUESTIONS.push(
/* ---- Stages and phases (slides 5-6, 27) ----------------------------------- */
{id:'P8W-001', skill:'case', prof:'Patel', tier:'new', topic:'p8w-stage', sub:'stage', concept:'p8w-stage-2',
 tags:['case','know-this'], source:'both',
 stem:'A 40-year-old has a wound on the shin: a blister with partial-thickness skin loss that involves the epidermis and part of the dermis. Which stage is this wound?',
 options:[
  {t:'Stage 1', correct:false, why:'Slide 5, stage 1: no loss of skin layers; reddened, non-blanching, unbroken skin.'},
  {t:'Stage 2', correct:true, why:'Slide 5: "Stage 2 – Blister or partial-thickness skin loss, involves all the epidermis and part of the dermis" (T@78487 11/12).'},
  {t:'Stage 3', correct:false, why:'Slide 5, stage 3: full-thickness skin loss; the entire epidermis, dermis and dermal appendages.'},
  {t:'Stage 4', correct:false, why:'Slide 5, stage 4: further involves subcutaneous tissue, underlying muscle, tendon and bone.'}],
 teach:'Staging "is based on the depth of the wound" (T@78420 11/12). "There’s 4 stages of a wound, so know each stage" (T@87265 11/12).',
 cite:P8WQ+' slides 5, 27; T@78420, T@78487, T@87265 11/12'},

{id:'P8W-002', skill:'case', prof:'Patel', tier:'new', topic:'p8w-stage', sub:'stage', concept:'p8w-stage-4',
 tags:['case','know-this'], source:'both',
 stem:'A bedbound 70-year-old has a wound over the hip. The skin loss is full thickness, and muscle and tendon are visible at its base. Which stage is this wound?',
 options:[
  {t:'Stage 1', correct:false, why:'Slide 5, stage 1: unbroken skin, no loss of skin layers.'},
  {t:'Stage 2', correct:false, why:'Slide 5, stage 2: partial thickness; the epidermis and part of the dermis.'},
  {t:'Stage 3', correct:false, why:'Slide 5, stage 3: full-thickness skin loss that may involve the subcutaneous tissues; muscle and tendon belong to stage 4.'},
  {t:'Stage 4', correct:true, why:'Slide 5: "Stage 4 – Further involves the subcutaneous tissue, underlying muscle, tendon and bone". "Stage 4 is the worst stage ... possible muscle, tendon, and bone" (T@78745 11/12).'}],
 teach:'Stage 3 stops at the subcutaneous tissue; stage 4 reaches muscle, tendon and bone (slide 5).',
 cite:P8WQ+' slide 5; T@78602, T@78745 11/12'},

{id:'P8W-003', skill:'patho', prof:'Patel', tier:'new', topic:'p8w-stage', sub:'phase', concept:'p8w-phase-order',
 tags:['know-this','recall'], source:'both',
 stem:'In which order do the three phases of wound healing occur?',
 options:[
  {t:'Proliferative, inflammatory, remodeling', correct:false, why:'Slide 6: inflammation starts within minutes (hemostasis, then inflammation); proliferation follows.'},
  {t:'Inflammatory, remodeling, proliferative', correct:false, why:'Slide 6: remodeling is the last phase (weeks to months).'},
  {t:'Inflammatory, proliferative, remodeling', correct:true, why:'Slide 27: "Wound healing has three phases: Inflammatory, Proliferative, Remodeling"; slide 6 timeline. "Understand that there’s 3 healing phases" (T@87332 11/12).'},
  {t:'Remodeling, inflammatory, proliferative', correct:false, why:'Slide 6: remodeling (epidermis maturation, wound contraction, scar maturation) comes last.'}],
 teach:'Slide 6: inflammation (minutes to days), proliferation (days to weeks: reepithelialization, angiogenesis, fibroplasia), remodeling (weeks to months).',
 cite:P8WQ+' slides 6, 27; T@78858, T@87332 11/12'},

{id:'P8W-004', skill:'patho', prof:'Patel', tier:'new', topic:'p8w-stage', sub:'phase', concept:'p8w-stage-healing-time',
 tags:['two-facts'], source:'transcript',
 stem:'One patient has a stage 1 wound and another has a stage 3 wound. How do the wounds compare?',
 options:[
  {t:'Stage 3 heals more slowly; staging follows depth', correct:true, why:'"The higher the stage, the longer the duration of healing, the lower the stage, the shorter duration of healing ... we’re thinking about the depth of the wound" (T@79102 11/12); staging "is based on the depth of the wound" (T@78420 11/12).'},
  {t:'Stage 1 heals more slowly; staging follows depth', correct:false, why:'The lower the stage, the shorter the healing (T@79102 11/12).'},
  {t:'Stage 3 heals more slowly; staging follows diameter', correct:false, why:'Staging is by depth (T@78420 11/12). Diameter (larger than 3 inches) is a self-treatment exclusion (slide 7).'},
  {t:'Both heal at the same rate; staging follows diameter', correct:false, why:'Healing time rises with the stage, and the stage is the depth (T@78420, T@79102 11/12).'}],
 teach:'Higher stage = deeper wound = longer healing (T@79102 11/12).',
 cite:P8WQ+' slides 5–6; T@78420, T@79102 11/12'},

/* ---- Self-treatment exclusions (slide 7) ---------------------------------- */
{id:'P8W-005', skill:'case', prof:'Patel', tier:'new', topic:'p8w-self', sub:'excl', concept:'p8w-selfcare-ok',
 tags:['case','know-this'], source:'both',
 stem:'A 24-year-old man with no medical conditions scraped his forearm on pavement 1 hour ago. The abrasion is 2 inches in diameter. After rinsing, no debris is left in it. What is the most appropriate recommendation?',
 options:[
  {t:'Refer: the wound is larger than the size limit', correct:false, why:'Slide 7 excludes injuries larger than 3 inches in diameter; his is 2 inches.'},
  {t:'Refer: the forearm is an excluded location', correct:false, why:'Slide 7 excludes the face, hands, feet, major joints, genitals and perineum.'},
  {t:'Self-care: pour hydrogen peroxide into it, then dress it', correct:false, why:'Slide 19: antiseptics go on intact skin at the edges of the wound; they reduce healing if used within the wound. Hydrogen peroxide "could cause cytotoxicity to the wound itself" (T@83362 11/12).'},
  {t:'Self-care: cleanse with water or saline, then dress it', correct:true, why:'No exclusion on slide 7 applies. Slide 27: "First step: Cleanse wounds with clean water or saline"; "Use dressings that are appropriate to the wound" (T@87422, T@87736 11/12).'}],
 teach:'Check the slide 7 list first (location, size over 3 inches, cause, depth, infection, medical conditions, foreign matter, chronic), then cleanse and dress.',
 cite:P8WQ+' slides 7, 19, 27; T@79287, T@83362, T@87422 11/12'},

{id:'P8W-006', skill:'case', prof:'Patel', tier:'new', topic:'p8w-self', sub:'excl', concept:'p8w-excl-3-inches',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 30-year-old woman with no medical conditions fell from a bicycle today. She has an abrasion on the thigh that is 4 inches in diameter. What is the most appropriate recommendation?',
 options:[
  {t:'Refer: it is larger than 3 inches in diameter', correct:true, why:'Slide 7: "Injuries larger than 3 inches in diameter". "If it is larger than 3 inches in diameter, it is also excluded" (T@79395 11/12).'},
  {t:'Refer: the thigh is an excluded location', correct:false, why:'Slide 7 excludes the face, hands, feet, major joints, genitals and perineum; the reason here is the size.'},
  {t:'Self-care: cleanse, then cover with a gauze dressing', correct:false, why:'A wound larger than 3 inches is excluded from self-treatment (slide 7).'},
  {t:'Self-care: topical antibiotic 1 to 3 times a day', correct:false, why:'1 to 3 times a day is the antibiotic direction (slide 20), but this wound is over the 3-inch limit (slide 7).'}],
 teach:'"The list that’s listed here for you, I need you to know them" (T@79663 11/12).',
 cite:P8WQ+' slides 7, 20; T@79395, T@79663 11/12'},

{id:'P8W-007', skill:'case', prof:'Patel', tier:'new', topic:'p8w-self', sub:'excl', concept:'p8w-excl-location',
 tags:['case','know-this'], source:'both',
 stem:'A 33-year-old man with no medical conditions cut the palm of his hand on a can lid 30 minutes ago. The laceration is 1 inch long and the bleeding has stopped. What is the most appropriate recommendation?',
 options:[
  {t:'Self-care: it is under 3 inches in diameter', correct:false, why:'The size is under the limit, but the hand is an excluded location (slide 7).'},
  {t:'Self-care: cleanse, then apply an adhesive bandage', correct:false, why:'These are the steps for a wound that qualifies; a wound on the hand does not (slide 7).'},
  {t:'Refer: the hand is an excluded location', correct:true, why:'Slide 7: "Face, hands, feet, major joints, genitals, or perineum". "If it includes the face, hands, feet, major joints, any private areas completely self-excluded" (T@79287 11/12).'},
  {t:'Refer: a laceration is an excluded wound type', correct:false, why:'Lacerations are one of the acute wound types (slide 4); slide 7 does not exclude them by type.'}],
 teach:'Location alone excludes self-treatment: face, hands, feet, major joints, genitals, perineum (slide 7).',
 cite:P8WQ+' slides 4, 7; T@79287 11/12'},

{id:'P8W-008', skill:'case', prof:'Patel', tier:'new', topic:'p8w-self', sub:'excl', concept:'p8w-excl-bite',
 tags:['case','know-this'], source:'both',
 stem:'A 27-year-old woman with no medical conditions was bitten on the forearm by a neighbor’s cat 2 hours ago. There are two small punctures and no redness. What is the most appropriate recommendation?',
 options:[
  {t:'Self-care: the wound is under 3 inches', correct:false, why:'Size is not the issue; a wound secondary to an animal or human bite is excluded (slide 7).'},
  {t:'Refer: bite wounds are excluded', correct:true, why:'Slide 7: "Secondary to animal or human bite". "Bites from animals, humans" (T@79796 11/12).'},
  {t:'Self-care: cleanse; topical antibiotic for 7 days', correct:false, why:'Bite wounds are excluded from self-treatment (slide 7).'},
  {t:'Refer: the forearm is an excluded location', correct:false, why:'The forearm is not on the slide 7 location list; the bite is the reason.'}],
 teach:'Punctures include bites and sharp objects (slide 4); a bite from an animal or a human is referred (slide 7).',
 cite:P8WQ+' slides 4, 7; T@79796 11/12'},

{id:'P8W-009', skill:'case', prof:'Patel', tier:'new', topic:'p8w-self', sub:'excl', concept:'p8w-excl-diabetes',
 tags:['case','know-this'], source:'both',
 stem:'A 52-year-old man with type 2 diabetes scraped his shin yesterday. The abrasion is 1 inch in diameter with no redness or drainage. What is the most appropriate recommendation?',
 options:[
  {t:'Self-care: the size is under 3 inches', correct:false, why:'The size is under the limit, but a preexisting disorder such as diabetes is an exclusion (slide 7).'},
  {t:'Self-care: the shin is not an excluded location', correct:false, why:'True of the location, but diabetes is an exclusion (slide 7).'},
  {t:'Refer: the shin is an excluded location', correct:false, why:'Slide 7 lists the face, hands, feet, major joints, genitals and perineum.'},
  {t:'Refer: diabetes can complicate healing', correct:true, why:'Slide 7: "Preexisting medical disorders that could complicate management, prolong recovery, or affect mortality, such as diabetes". Diabetes is also a comorbidity that impairs wound healing (slide 24; T@86087 11/12).'}],
 teach:'"Understand patient specifics matter" (T@95722 11/12).',
 cite:P8WQ+' slides 7, 24; T@86087, T@95722 11/12'},

{id:'P8W-010', skill:'counsel', prof:'Patel', tier:'new', topic:'p8w-self', sub:'excl', concept:'p8w-refer-7-days',
 tags:['case','numbers','refer'], source:'both',
 stem:'A 22-year-old with no medical conditions has self-treated a forearm abrasion for 8 days with cleansing and adhesive bandages. It is not red or draining, but it has not healed. What is the most appropriate recommendation?',
 options:[
  {t:'Continue self-care for up to 14 days', correct:false, why:'14 days is the limit for corn and callus products (Warts, Corns and Calluses slide 17), not for wounds.'},
  {t:'Refer: it has not healed by 7 days', correct:true, why:'Slide 7: "Worsen or has not healed in 24-48 hours and/or 7 days". "Again, 7-day policy applies here" (T@79459 11/12).'},
  {t:'Continue; change to a hydrocolloid dressing', correct:false, why:'A hydrocolloid gives a moist healing environment (slide 9), but past 7 days without healing the patient is referred (slide 7).'},
  {t:'Continue; add a topical antibiotic 1 to 3 times a day', correct:false, why:'With antibiotics too, no improvement within 7 days means seeing a primary care provider (slide 20).'}],
 teach:'Refer when the wound worsens or has not healed in 24–48 hours and/or 7 days (slide 7).',
 cite:P8WQ+' slides 7, 9, 20; T@79459 11/12'},

{id:'P8W-011', skill:'case', prof:'Patel', tier:'new', topic:'p8w-self', sub:'excl', concept:'p8w-excl-list', multi:true,
 tags:['list','know-this'], source:'both',
 stem:'Which of these exclude a wound or burn from self-treatment? Select all that apply.',
 options:[
  {t:'Circumferential burn', correct:true, why:'Slide 7.'},
  {t:'Foreign matter left in the wound after irrigation', correct:true, why:'Slide 7: "Containing foreign matter after irrigation".'},
  {t:'Suspected non-accidental injury', correct:true, why:'Slide 7 (T@79796 11/12).'},
  {t:'Chronic wound', correct:true, why:'Slide 7. "It’s a chronic wound, so it’s not healing" (T@80007 11/12).'},
  {t:'Abrasion 2 inches in diameter on a healthy adult’s forearm', correct:false, why:'Under the 3-inch limit, not an excluded location, no excluded cause (slide 7).'}],
 teach:'Slide 7: location; larger than 3 inches; worse or not healed in 24–48 hours and/or 7 days; chemical, electrical or inhalation burns; bites; deep partial thickness or deeper; suspected non-accidental injury; signs of infection; circumferential burns; disorders such as diabetes; foreign matter after irrigation; chronic wound.',
 cite:P8WQ+' slide 7; T@79663–80007 11/12'},

{id:'P8W-012', skill:'counsel', prof:'Patel', tier:'new', topic:'p8w-self', sub:'first', concept:'p8w-first-step-cleanse',
 tags:['case','know-this'], source:'both',
 stem:'A 19-year-old with no medical conditions has a fresh 1-inch abrasion on the forearm with dirt in it. What is the first step in treating this wound?',
 options:[
  {t:'Apply a topical antibiotic ointment', correct:false, why:'Slide 11: the antibiotic is applied after cleansing and before bandaging.'},
  {t:'Apply povidone-iodine within the wound', correct:false, why:'Antiseptics may cause cytotoxicity (slide 15) and reduce healing if used within the wound (slide 19).'},
  {t:'Cleanse it with clean water or saline', correct:true, why:'Slide 27: "First step: Cleanse wounds with clean water or saline". "First step in treating a wound, cleaning the area, cleansing it with water or saline" (T@87422 11/12).'},
  {t:'Cover it with a hydrocolloid dressing', correct:false, why:'Dressing comes after cleansing (slides 11, 27).'}],
 teach:'Cleanse, then antibiotic if indicated, then bandage (slides 11, 27).',
 cite:P8WQ+' slides 11, 15, 19, 27; T@81569, T@87422 11/12'},

/* ---- Dressings (slides 8-9) ----------------------------------------------- */
{id:'P8W-013', skill:'tell', prof:'Patel', tier:'new', topic:'p8w-dress', sub:'type', concept:'p8w-film-not-absorptive',
 tags:['tell','know-this'], source:'both',
 stem:'A wound is producing a large amount of exudate. Under which dressing is maceration a concern because the dressing is not absorptive?',
 options:[
  {t:'Gauze dressing (Kerlix)', correct:false, why:'Slide 8: gauze is highly absorbent for wounds with exudate.'},
  {t:'Nonadherent dressing (Adaptic)', correct:false, why:'Slide 8: a lightly coated porous dressing; its listed disadvantages are no moist environment, a secondary dressing and frequent changes.'},
  {t:'Hydrocolloid dressing (DuoDERM)', correct:false, why:'Slide 9: hydrocolloids manage exudate by particle swelling.'},
  {t:'Transparent adhesive film (Tegaderm)', correct:true, why:'Slide 9: "Dressings are not absorptive ... With large amounts of exudate, maceration may occur."'}],
 teach:'"Know the advantages, know the disadvantages of each of them" (T@80276 11/12). Films: semi-occlusive, gas-permeable, easy inspection, not absorptive (slide 9).',
 cite:P8WQ+' slides 8–9; T@80276, T@80925 11/12'},

{id:'P8W-014', skill:'tell', prof:'Patel', tier:'new', topic:'p8w-dress', sub:'type', concept:'p8w-gauze-disadvantages', multi:true,
 tags:['list','know-this'], source:'both',
 stem:'Which are disadvantages of a gauze dressing? Select all that apply.',
 options:[
  {t:'A secondary dressing such as surgical tape is required', correct:true, why:'Slide 8.'},
  {t:'A moist healing environment is not provided unless it is used with another product', correct:true, why:'Slide 8 (e.g., a skin protectant).'},
  {t:'Removal may cause bleeding or pain', correct:true, why:'Slide 8.'},
  {t:'It is impermeable to gases', correct:false, why:'That is a hydrocolloid disadvantage (slide 9); gauze is nonocclusive (slide 8).'},
  {t:'It is not absorptive', correct:false, why:'That is a transparent film disadvantage (slide 9); gauze is highly absorbent (slide 8).'}],
 teach:'Gauze: available, cost effective, highly absorbent, nonocclusive; but no moist environment alone, nonselective debridement, painful removal, secondary dressing, frequent changes (slide 8).',
 cite:P8WQ+' slides 8–9; T@80168, T@80276 11/12'},

/* ---- First-aid antibiotics, anesthetics, antiseptics ---------------------- */
{id:'P8W-015', skill:'counsel', prof:'Patel', tier:'new', topic:'p8w-otc', sub:'abx', concept:'p8w-abx-when-applied',
 tags:['recall'], source:'both',
 stem:'When is an OTC first-aid antibiotic applied to a minor wound?',
 options:[
  {t:'After cleansing and before bandaging', correct:true, why:'Slide 11: "Apply after cleansing and before bandaging". "So before the bandage, right? But after the cleansing" (T@81569 11/12).'},
  {t:'Before cleansing and before bandaging', correct:false, why:'Cleansing is the first step (slide 27).'},
  {t:'After cleansing and after bandaging', correct:false, why:'It goes on before the bandage (slide 11).'},
  {t:'In place of cleansing, before bandaging', correct:false, why:'It does not replace cleansing (slides 11, 27).'}],
 teach:'Bacitracin, neomycin, polymyxin B sulfate: preventative, limited evidence of efficacy (slide 11).',
 cite:P8WQ+' slides 11, 27; T@81519, T@81569 11/12'},

{id:'P8W-016', skill:'counsel', prof:'Patel', tier:'new', topic:'p8w-otc', sub:'abx', concept:'p8w-abx-directions',
 tags:['case','numbers','refer'], source:'slide',
 stem:'A 28-year-old with a minor burn on the forearm asks how to use an ointment of polymyxin B, neomycin and bacitracin. Which directions are correct?',
 options:[
  {t:'Up to 4 times daily; relief lasts 15 to 45 minutes', correct:false, why:'These are the topical anesthetic facts (slide 20).'},
  {t:'1 to 3 times a day; see a provider if no better in 7 days', correct:true, why:'Slide 20: "when used 1 to 3 times a day ... If improvement is not seen within 7 days, the patient should see a primary care provider."'},
  {t:'1 to 3 times a day; may be used for up to 12 weeks', correct:false, why:'12 weeks is the limit for salicylic acid on warts (Warts, Corns and Calluses slide 10); here the check is at 7 days (slide 20).'},
  {t:'Every 48 hours; see a provider if no better in 14 days', correct:false, why:'48 hours and 14 days belong to salicylic acid 40% plasters for corns and calluses (Warts, Corns and Calluses slide 17).'}],
 teach:'"We’re using it for a short period of time, and we’re using it on a smaller area of a wound" (T@82489 11/12).',
 cite:P8WQ+' slide 20; T@82489, T@85143 11/12'},

{id:'P8W-017', skill:'adverse', prof:'Patel', tier:'new', topic:'p8w-otc', sub:'abx', concept:'p8w-neomycin-systemic',
 tags:['two-facts'], source:'both',
 stem:'A patient spreads a first-aid antibiotic over a large area of skin. Which ingredient can cause systemic toxicity?',
 options:[
  {t:'Bacitracin', correct:false, why:'Slide 20 names neomycin for systemic toxicity and polymyxin B for hypersensitivity.'},
  {t:'Neomycin', correct:true, why:'Slide 20: "Systemic toxicity can occur with Neomycin". Slide 11: "Toxicity risk increases with large areas of application" (T@81702 11/12).'},
  {t:'Polymyxin B sulfate', correct:false, why:'Slide 20: polymyxin B can cause hypersensitivity reactions.'},
  {t:'Chlorhexidine', correct:false, why:'An antiseptic (slide 15); its concern is cytotoxicity that reduces wound healing.'}],
 teach:'Neomycin: systemic toxicity. Polymyxin B: hypersensitivity (slide 20).',
 cite:P8WQ+' slides 11, 15, 20; T@81702 11/12'},

{id:'P8W-018', skill:'counsel', prof:'Patel', tier:'new', topic:'p8w-otc', sub:'anes', concept:'p8w-anesthetic-directions',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 30-year-old with a minor burn that has broken skin asks how to use an OTC lidocaine product for the pain. Which directions are correct?',
 options:[
  {t:'Apply liberally; up to 4 times daily', correct:false, why:'Slide 20: small quantities and low concentrations on broken skin, to prevent systemic absorption.'},
  {t:'Apply a small amount; repeat every 15 to 45 minutes', correct:false, why:'15 to 45 minutes is how long the relief lasts; the maximum is 4 times daily (slide 20).'},
  {t:'Apply a small amount; up to 4 times daily', correct:true, why:'Slide 20: "Apply for pain maximum up to 4 times daily. Care should be taken to apply small quantities and low concentrations to broken skin to prevent systemic absorption."'},
  {t:'Apply liberally; repeat every 15 to 45 minutes', correct:false, why:'Wrong amount and wrong frequency (slide 20). "I want you guys to understand the systemic toxicity of overuse of this product" (T@85399 11/12).'}],
 teach:'Slide 20: systemic toxicity can be caused by lidocaine; relief lasts 15 to 45 minutes, so continuous pain control cannot be achieved.',
 cite:P8WQ+' slide 20; T@85276, T@85399 11/12'},

{id:'P8W-019', skill:'adverse', prof:'Patel', tier:'new', topic:'p8w-otc', sub:'anes', concept:'p8w-benzocaine-methemoglobinemia',
 tags:['case','know-this'], source:'both',
 stem:'A parent has applied a benzocaine spray, an antibiotic ointment (polymyxin B, neomycin, bacitracin) and hydrogen peroxide to a child’s burn several times a day. The child now has bluish skin and shortness of breath. Which is the most likely cause?',
 options:[
  {t:'Methemoglobinemia from absorbed benzocaine', correct:true, why:'Slide 14: "Benzocaine – if systemic absorption- methemoglobinemia, risk of cyanosis, dyspnea, syncope, seizures, coma".'},
  {t:'Systemic toxicity from absorbed neomycin', correct:false, why:'Slide 20 lists systemic toxicity with neomycin, but cyanosis and dyspnea are tied to benzocaine methemoglobinemia (slide 14).'},
  {t:'Hypersensitivity reaction to polymyxin B', correct:false, why:'Polymyxin B can cause hypersensitivity (slide 20); cyanosis with dyspnea is the benzocaine picture (slide 14).'},
  {t:'Cytotoxicity from hydrogen peroxide', correct:false, why:'Antiseptic cytotoxicity reduces wound healing locally (slide 15).'}],
 teach:'"I want you guys to understand the systemic toxicity of overuse of this product" (T@85399 11/12). Benzocaine: methemoglobinemia (slide 14); lidocaine: systemic toxicity (slide 20).',
 cite:P8WQ+' slides 14–15, 20; T@82797, T@85399 11/12'},

{id:'P8W-020', skill:'counsel', prof:'Patel', tier:'new', topic:'p8w-otc', sub:'asep', concept:'p8w-antiseptic-where',
 tags:['case','two-facts'], source:'both',
 stem:'A patient pours hydrogen peroxide into an open wound twice a day. Where and when is a topical antiseptic correctly applied?',
 options:[
  {t:'Within the wound, before debris is removed', correct:false, why:'Slide 19: reduces healing if used within the wound; used after the removal of any debris.'},
  {t:'Within the wound, after debris is removed', correct:false, why:'Slide 19: "Reduces healing if used within wound."'},
  {t:'On intact skin at the wound edges, before debris is removed', correct:false, why:'Slide 19: "Only use on intact skin after the removal of any debris."'},
  {t:'On intact skin at the wound edges, after debris is removed', correct:true, why:'Slide 19: "Only use on intact skin after the removal of any debris. Apply the product to the edges of the wound." Slide 15: may cause cytotoxicity reducing wound healing (T@83362 11/12).'}],
 teach:'Antiseptics on slide 15: chlorhexidine, hydrogen peroxide, povidone-iodine.',
 cite:P8WQ+' slides 15, 19; T@83362, T@84998 11/12'},

/* ---- Burns (slides 16-20) ------------------------------------------------- */
{id:'P8W-021', skill:'case', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'sev', concept:'p8w-burn-minor-adult',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 34-year-old man with no medical conditions has a superficial burn on the back and upper arm from hot water. It is red with no blisters and covers 8% of his body surface area. How is this burn classified and managed?',
 options:[
  {t:'Minor; self-care', correct:true, why:'Slide 16, Minor – Self-Care: "<15% BSA superficial burn (adult)". "A minor BSA in an adult is less than 15%, in a child is less than 10%" (T@83577 11/12).'},
  {t:'Moderate; self-care', correct:false, why:'Moderate burns need referral, and an adult is moderate at 15%–25% BSA (slide 16).'},
  {t:'Moderate; needs referral', correct:false, why:'Adult moderate is 15%–25% BSA superficial partial thickness (slide 16); 8% is minor.'},
  {t:'Major; needs referral', correct:false, why:'Adult major is over 25% BSA (slide 16).'}],
 teach:'Adult: minor under 15%, moderate 15%–25%, major over 25%. Child: under 10%, 10–20%, over 20% (slide 16).',
 cite:P8WQ+' slide 16; T@83448, T@83577 11/12'},

{id:'P8W-022', skill:'case', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'sev', concept:'p8w-burn-moderate-child',
 tags:['case','know-this','numbers','two-facts'], source:'both',
 stem:'A 6-year-old with no medical conditions has a superficial partial-thickness burn on the back and thigh that covers 14% of body surface area. How is this burn classified and managed?',
 options:[
  {t:'Minor; self-care', correct:false, why:'14% would be minor for an adult (under 15%); a child is minor under 10% (slide 16).'},
  {t:'Moderate; self-care', correct:false, why:'The category is right, but a moderate burn needs referral (slide 16).'},
  {t:'Moderate; needs referral', correct:true, why:'Slide 16, Moderate – Need Referral: "10-20% BSA superficial partial thickness burn (child)". "Moderate, you need referral ... 10 to 20% for a child" (T@83767 11/12).'},
  {t:'Major; needs referral', correct:false, why:'A child is major above 20% BSA (slide 16).'}],
 teach:'The child cut-offs sit 5 points under the adult ones: 10% and 20% against 15% and 25% (slide 16).',
 cite:P8WQ+' slide 16; T@83577, T@83767 11/12'},

{id:'P8W-023', skill:'case', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'sev', concept:'p8w-burn-major-adult',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 41-year-old woman with no medical conditions has a superficial partial-thickness burn over the back and both thighs that covers 30% of her body surface area. How is this burn classified and managed?',
 options:[
  {t:'Minor; self-care', correct:false, why:'Adult minor is under 15% BSA (slide 16).'},
  {t:'Moderate; self-care', correct:false, why:'Moderate is 15%–25% in an adult, and it needs referral (slide 16).'},
  {t:'Moderate; needs referral', correct:false, why:'30% is above the adult moderate range of 15%–25% (slide 16).'},
  {t:'Major; needs referral', correct:true, why:'Slide 16, Major – Need referral: ">25% BSA superficial partial thickness burn (adult)". "A major burn needs referral as well, so greater than 25%, and that is in an adult" (T@83938 11/12).'}],
 teach:'Anything other than a minor burn is referred: "anything besides minor would be straight referral" (T@84806 11/12).',
 cite:P8WQ+' slide 16; T@83938, T@84806 11/12'},

{id:'P8W-024', skill:'case', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'sev', concept:'p8w-burn-deep-2-10',
 tags:['case','know-this','numbers'], source:'both',
 stem:'A 30-year-old man with no medical conditions has a full-thickness burn on the thigh that covers 4% of his body surface area. How is this burn classified and managed?',
 options:[
  {t:'Minor; self-care', correct:false, why:'The under-15% adult figure is for superficial burns; a full-thickness burn of 2%–10% is moderate (slide 16).'},
  {t:'Moderate; needs referral', correct:true, why:'Slide 16, Moderate – Need Referral: "2%-10% BSA deep partial thickness or full thickness burn not involving eyes, ears, face or genitalia" (T@83767 11/12). Slide 7 also excludes full-thickness injuries.'},
  {t:'Major; needs referral', correct:false, why:'A deep partial-thickness or full-thickness burn is major above 10% BSA (slide 16).'},
  {t:'Moderate; self-care', correct:false, why:'Moderate burns need referral (slide 16).'}],
 teach:'Deep partial-thickness or full-thickness burns: 2%–10% moderate, over 10% major (slide 16).',
 cite:P8WQ+' slides 7, 16–17; T@83767 11/12'},

{id:'P8W-025', skill:'case', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'excl', concept:'p8w-burn-poor-risk',
 tags:['case','two-facts'], source:'both',
 stem:'A 45-year-old woman with type 2 diabetes has a superficial burn on the forearm from hot water. It is red with no blisters and covers 3% of her body surface area. How is this burn classified and managed?',
 options:[
  {t:'Minor; self-care with cool water and a skin protectant', correct:false, why:'The size alone would be minor, but slide 16 puts poor-risk patients (diabetes) under major, and slide 17 excludes patients with diabetes.'},
  {t:'Minor; self-care with a topical anesthetic up to 4 times daily', correct:false, why:'The anesthetic direction is right for a minor burn (slide 20), but diabetes excludes self-treatment (slides 16–17).'},
  {t:'Moderate; referral because a child’s limit applies', correct:false, why:'She is an adult; the reason for referral is diabetes (slides 16–17).'},
  {t:'Major; referral because she is a poor-risk patient', correct:true, why:'Slide 16, Major – Need referral: "All poor risk patients (diabetes, cancer, psychiatric disability, neurologic injury, other chronic illness)". Slide 17: "Patients with Diabetes or multiple medical disorders" (T@84316 11/12).'}],
 teach:'Read the patient before the percentage: diabetes, advanced age and immunocompromise exclude self-treatment of a burn (slide 17).',
 cite:P8WQ+' slides 16–17, 20; T@84316, T@95722 11/12'},

{id:'P8W-026', skill:'case', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'excl', concept:'p8w-burn-hand',
 tags:['case','two-facts'], source:'both',
 stem:'A 26-year-old with no medical conditions has a superficial burn on the palm of the hand from a hot pan. It is red with no blisters and covers 1% of body surface area. What is the most appropriate recommendation?',
 options:[
  {t:'Refer: burns involving the hands are excluded', correct:true, why:'Slide 17: "Burns involving eyes, ears, face, hands, feet or perineum". "Involving eyes, ears, face, hands, feet" (T@84155 11/12).'},
  {t:'Self-care: under 15% BSA in an adult is minor', correct:false, why:'The size is minor (slide 16), but the hand is an excluded location (slides 7, 17).'},
  {t:'Self-care: cool water, then a skin protectant', correct:false, why:'These are minor burn measures (slides 18–19); the location excludes self-treatment (slide 17).'},
  {t:'Refer: thermal burns are excluded', correct:false, why:'Chemical, electrical and inhalation burns are excluded by type (slides 7, 17); thermal burns are not.'}],
 teach:'Burn exclusions by location: eyes, ears, face, hands, feet, perineum (slide 17).',
 cite:P8WQ+' slides 7, 16–19; T@84155 11/12'},

{id:'P8W-027', skill:'case', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'excl', concept:'p8w-burn-chemical',
 tags:['case'], source:'both',
 stem:'A 35-year-old with no medical conditions splashed drain cleaner on the forearm 10 minutes ago. A red area covers about 1% of body surface area. What is the most appropriate recommendation?',
 options:[
  {t:'Self-care: under 15% BSA in an adult is minor', correct:false, why:'The BSA categories do not override the burn type; chemical burns are excluded (slides 7, 17).'},
  {t:'Self-care: cool water and aloe vera for 7 days', correct:false, why:'Cool water and aloe vera are minor burn measures (slide 18); a chemical burn is referred after first aid (slide 17).'},
  {t:'Refer if it has not healed in 7 days', correct:false, why:'The 7-day check is for wounds that qualified for self-care (slide 7); a chemical burn is referred now (slide 17).'},
  {t:'Give first aid, then refer', correct:true, why:'Slide 17: "Chemical burns (first aid then refer)". "Chemical burns, electrical burns" are excluded (T@84155 11/12).'}],
 teach:'Chemical: first aid, then refer. Electrical and inhalation: refer (slide 17).',
 cite:P8WQ+' slides 7, 17–18; T@84155 11/12'},

{id:'P8W-028', skill:'case', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'excl', concept:'p8w-burn-excl-list', multi:true,
 tags:['list','know-this'], source:'both',
 stem:'Which of these exclude a burn from self-treatment? Select all that apply.',
 options:[
  {t:'Electrical burn', correct:true, why:'Slide 17: "Electrical or inhalation burns" (T@84155 11/12).'},
  {t:'Immunocompromised patient', correct:true, why:'Slide 17. "Immunocompromised patients also are self-excluded because of that risk of infection" (T@84416 11/12).'},
  {t:'Burn involving the feet', correct:true, why:'Slide 17: eyes, ears, face, hands, feet or perineum.'},
  {t:'Person of advanced age', correct:true, why:'Slide 17 (T@84316 11/12).'},
  {t:'Superficial burn of 5% BSA on a healthy adult’s forearm', correct:false, why:'Minor: under 15% BSA superficial in an adult (slide 16); no exclusion on slide 17 applies.'}],
 teach:'Slide 17: moderate to severe burn of 2% BSA or more; eyes, ears, face, hands, feet, perineum; chemical (first aid then refer); electrical or inhalation; advanced age; diabetes or multiple medical disorders; immunocompromised.',
 cite:P8WQ+' slides 16–17; T@84155–84416 11/12'},

{id:'P8W-029', skill:'counsel', prof:'Patel', tier:'new', topic:'p8w-burn', sub:'tx', concept:'p8w-minor-burn-otc', multi:true,
 tags:['list'], source:'both',
 stem:'A healthy adult has a minor superficial burn on the forearm. Which are appropriate OTC options? Select all that apply.',
 options:[
  {t:'Acetaminophen or an NSAID for pain', correct:true, why:'Slide 19: OTC systemic analgesics (acetaminophen, NSAIDs) (T@84734 11/12).'},
  {t:'A skin protectant such as petrolatum', correct:true, why:'Slide 19: skin protectants (allantoin, cocoa butter, petrolatum, Aquaphor) (T@84952 11/12).'},
  {t:'A topical antibiotic 1 to 3 times a day', correct:true, why:'Slide 20: may reduce the incidence of infection and promote healing when used 1 to 3 times a day (T@85143 11/12).'},
  {t:'Hydrogen peroxide applied within the burn', correct:false, why:'Slide 19: antiseptics go on intact skin at the edges; they reduce healing if used within the wound.'},
  {t:'Salicylic acid 17% liquid twice daily', correct:false, why:'A wart, corn and callus product (Warts, Corns and Calluses slides 10, 17), not a burn treatment.'}],
 teach:'Non-drug for a minor burn: cool water (reduces burning sensation, decreases morbidity), honey, aloe vera (slide 18; T@84501 11/12).',
 cite:P8WQ+' slides 18–20; T@84501–85143 11/12'},

/* ---- Smoking (slide 25) --------------------------------------------------- */
{id:'P8W-030', skill:'patho', prof:'Patel', tier:'new', topic:'p8w-heal', sub:'smoke', concept:'p8w-smoking-necrosis',
 tags:['numbers','two-facts'], source:'both',
 stem:'A patient with a healing wound smokes 2 packs per day. Which statement about smoking and wound healing is correct?',
 options:[
  {t:'3 times the frequency of flap necrosis; nicotine causes vasoconstriction', correct:false, why:'3 times is the figure for 1 pack per day (slide 25).'},
  {t:'6 times the frequency of flap necrosis; nicotine causes vasodilation', correct:false, why:'Slide 25: nicotine acts via the sympathetic system; vasoconstriction and limited distal perfusion.'},
  {t:'6 times the frequency of flap necrosis; nicotine causes vasoconstriction', correct:true, why:'Slide 25: "2ppd = 6x frequency of flap necrosis"; nicotine: "Vasoconstriction and limit distal perfusion; 1 cigarette = vasoconstriction > 90 min". "Notice the pack per day" (T@86371 11/12).'},
  {t:'3 times the frequency of flap necrosis; carbon monoxide raises oxygen delivery', correct:false, why:'Slide 25: carbon monoxide shifts the oxygen-hemoglobin curve to the left and decreases tissue oxygen delivery; 2 packs per day is 6 times.'}],
 teach:'Slide 25: 1 ppd = 3x, 2 ppd = 6x. She said "3 times frequency of necrosis ... 2 packs per day doubles the frequency" (T@86371, T@86431 11/12): double the 3x, which is the slide’s 6x.',
 cite:P8WQ+' slide 25; T@86298–86735 11/12'}
);

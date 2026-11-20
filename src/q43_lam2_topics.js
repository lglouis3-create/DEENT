/* q43_lam2_topics.js: topics for Dr. Lam's 11/20 lecture (Lecture 13, Exam 3): ophthalmic disorders other than glaucoma (lo-*), oral disorders (lr-*), otic disorders (lt-*).
   Decks: Lam_OphthalmicDisorders.pdf (58 slides), Lam_OralDisorders_slides.pdf (84), Lam_OticDisorders_slides.pdf (44). Transcript DEENT_Lecture_11.20_transcript.txt. */
TOPIC_DECKS.push(
  {id:'lo', exam:3, name:'Ophthalmic disorders other than glaucoma (Dr. Lam)', file:'Lam_OphthalmicDisorders.pdf', when:'taught 11/20 (Exam 3)',
   topics:['lo-de-collect', 'lo-de-assess', 'lo-de-plan', 'lo-de-rx', 'lo-cj-collect', 'lo-cj-plan', 'lo-gen', 'lo-case']},
  {id:'lr', exam:3, name:'Oral disorders (Dr. Lam)', file:'Lam_OralDisorders_slides.pdf', when:'taught 11/20 (Exam 3)',
   topics:['lr-tooth', 'lr-ras', 'lr-hsl', 'lr-diff', 'lr-dry']},
  {id:'lt', exam:3, name:'Otic disorders (Dr. Lam)', file:'Lam_OticDisorders_slides.pdf', when:'taught 11/20 (Exam 3)',
   topics:['lt-cer', 'lt-cerrx', 'lt-water', 'lt-diff', 'lt-impl', 'lt-case']});

TOPICS.push(
 {id:'lo-de-collect', name:'Dry eye: risk factors, drugs and presentation', prof:'Lam',
  cite:'slides 4–7 · taught 11/20 (Lecture 13)', subs:[
   {id:'drugs', name:'Drugs and preservatives that contribute to dry eye', cite:'slide 6'},
   {id:'pres',  name:'What dry eye looks and feels like', cite:'slide 7'}]},
 {id:'lo-de-assess', name:'Dry eye: goals, referral and exclusions', prof:'Lam',
  cite:'slides 9–11 · taught 11/20 (Lecture 13)', subs:[
   {id:'goal',  name:'Treatment goals', cite:'slide 9'},
   {id:'refer', name:'Refer every first-time patient, OTC tears meanwhile', cite:'slide 10'},
   {id:'excl',  name:'Exclusions for self-treatment', cite:'slide 11'}]},
 {id:'lo-de-plan', name:'Dry eye: non-drug measures and OTC lubricants', prof:'Lam',
  cite:'slides 13–16 · taught 11/20 (Lecture 13)', subs:[
   {id:'nondrug', name:'Non-drug measures matched to the cause', cite:'slide 13'},
   {id:'tears',   name:'Artificial tears: frequency, duration, preservative-free', cite:'slide 14'},
   {id:'oint',    name:'Bland ointments and gels', cite:'slide 15'},
   {id:'supp',    name:'Supplements', cite:'slide 16'}]},
 {id:'lo-de-rx', name:'Dry eye: prescription drugs and their counseling', prof:'Lam',
  cite:'slides 17–22 · taught 11/20 (Lecture 13)', subs:[
   {id:'cyc',   name:'Topical cyclosporine', cite:'slide 18'},
   {id:'lif',   name:'Lifitegrast', cite:'slide 19'},
   {id:'cs',    name:'Topical corticosteroids', cite:'slide 20'},
   {id:'var',   name:'Varenicline nasal spray and TEAR', cite:'slides 21–22'},
   {id:'class', name:'Which drug is which', cite:'slides 17–21'},
   {id:'dur',   name:'Expected length of therapy', cite:'slides 18–21'},
   {id:'ae',    name:'Side effects by drug', cite:'slides 18–21'}]},
 {id:'lo-cj-collect', name:'Conjunctivitis: telling allergic, bacterial and viral apart', prof:'Lam',
  cite:'slides 26–31 · taught 11/20 (Lecture 13)', subs:[
   {id:'diff', name:'The itch rule and the differentiation table', cite:'slides 28–29'},
   {id:'excl', name:'Exclusions for self-treatment', cite:'slide 30'},
   {id:'goal', name:'Treatment goals', cite:'slide 31'}]},
 {id:'lo-cj-plan', name:'Conjunctivitis: treatment of allergic conjunctivitis', prof:'Lam',
  cite:'slides 33–41 · taught 11/20 (Lecture 13)', subs:[
   {id:'nondrug', name:'Non-drug measures', cite:'slides 33–34'},
   {id:'first',   name:'First line: artificial tears plus a dual-acting agent', cite:'slides 35–36'},
   {id:'dual',    name:'OTC dual-acting agents', cite:'slide 37'},
   {id:'rx',      name:'Prescription dual-acting agents (recognize)', cite:'slide 37'},
   {id:'cet',     name:'Ophthalmic cetirizine', cite:'slide 38'},
   {id:'decon',   name:'Ophthalmic decongestants (recognize)', cite:'slide 39'},
   {id:'oral',    name:'Second-generation oral antihistamines', cite:'slide 40'},
   {id:'fu',      name:'Referral after 72 hours', cite:'slide 41'}]},
 {id:'lo-gen', name:'Ophthalmic products in general: preservatives, order, lenses, technique, storage', prof:'Lam',
  cite:'slides 42–50 · taught 11/20 (Lecture 13)', subs:[
   {id:'pres',  name:'Preservatives and preservative-free products', cite:'slide 43'},
   {id:'order', name:'Waits between products and the order of application', cite:'slides 44–45'},
   {id:'lens',  name:'Contact lenses', cite:'slide 46'},
   {id:'tech',  name:'Eye drop and ointment technique', cite:'slides 48–49'},
   {id:'store', name:'Discard after 30 days and refrigeration', cite:'slide 50'}]},
 {id:'lo-case', name:'Her two ophthalmic practice cases', prof:'Lam',
  cite:'slides 51–57 · taught 11/20 (Lecture 13)', subs:[
   {id:'allergic', name:'Case 1: itchy, watery eyes and three products', cite:'slides 51–54'},
   {id:'dry',      name:'Case 2: gritty eyes', cite:'slides 55–57'}]});

TOPICS.push(
 {id:"lr-tooth", name:"Tooth hypersensitivity versus toothache", prof:'Lam',
  cite:"slides 6\u201323 \u00b7 taught 11/20 (Lecture 13)", subs:[
   {id:"path", name:"Pathophysiology and how to tell them apart", cite:"slides 7, 9"},
   {id:"excl", name:"Exclusions to self-care and severe pain", cite:"slide 11"},
   {id:"pharm", name:"Initial regimen and desensitizing ingredients", cite:"slides 14\u201315"},
   {id:"couns", name:"Counseling and follow up", cite:"slides 16\u201318"},
   {id:"case", name:"Patient cases: referral and the stepwise plan", cite:"slides 20\u201323"}]},
 {id:"lr-ras", name:"Canker sores (recurrent aphthous stomatitis)", prof:'Lam',
  cite:"slides 24\u201340 \u00b7 taught 11/20 (Lecture 13)", subs:[
   {id:"etio", name:"Precipitating factors", cite:"slide 26"},
   {id:"pres", name:"Presentation and prodrome", cite:"slide 27"},
   {id:"assess", name:"Goals and when to refer", cite:"slides 29\u201330"},
   {id:"nonpharm", name:"Non-drug care", cite:"slide 32"},
   {id:"anes", name:"Topical anesthetics", cite:"slide 34"},
   {id:"debr", name:"Oral debriding agents", cite:"slides 35\u201336"},
   {id:"prot", name:"Topical oral protectants", cite:"slide 37"},
   {id:"rinse", name:"Rinses and baking soda paste", cite:"slide 38"},
   {id:"sys", name:"Systemic analgesics", cite:"slide 39"},
   {id:"refer", name:"Referral and follow up", cite:"slide 40"}]},
 {id:"lr-hsl", name:"Cold sores (herpes simplex labialis)", prof:'Lam',
  cite:"slides 41\u201367 \u00b7 taught 11/20 (Lecture 13)", subs:[
   {id:"path", name:"Cause, triggers and the lesion stages", cite:"slides 43\u201345"},
   {id:"assess", name:"Exclusions to self-care", cite:"slides 48\u201349"},
   {id:"nonpharm", name:"Non-drug care", cite:"slide 50"},
   {id:"anti", name:"Docosanol: first line", cite:"slides 51\u201353"},
   {id:"analg", name:"Topical and systemic analgesics", cite:"slides 54\u201355"},
   {id:"avoid", name:"Triple antibiotic, complementary products and steroids", cite:"slides 56\u201358"},
   {id:"follow", name:"Follow up and referral", cite:"slides 59\u201360"},
   {id:"case", name:"Patient cases", cite:"slides 62\u201367"}]},
 {id:"lr-diff", name:"Cold sore versus canker sore", prof:'Lam',
  cite:"slides 46\u201347 \u00b7 taught 11/20 (Lecture 13)", subs:[
   {id:"diff", name:"Location and look", cite:"slides 27, 45, 47"},
   {id:"treat", name:"Choosing the product for the right condition", cite:"slides 33, 51"}]},
 {id:"lr-dry", name:"Dry mouth (xerostomia)", prof:'Lam',
  cite:"slides 70\u201384 \u00b7 taught 11/20 (Lecture 13)", subs:[
   {id:"risk", name:"Risk factors and drugs that cause it", cite:"slides 72\u201375"},
   {id:"pres", name:"Clinical presentation", cite:"slide 76"},
   {id:"assess", name:"Treatment goals", cite:"slide 78"},
   {id:"nonpharm", name:"Non-drug care", cite:"slide 81"},
   {id:"pharm", name:"Artificial saliva", cite:"slides 82\u201383"},
   {id:"follow", name:"Follow up", cite:"slide 84"}]});

TOPICS.push(
 {id:'lt-cer', name:'Cerumen: collect and assess', prof:'Lam',
  cite:'slides 5–11 · taught 11/20 (Lecture 13)', subs:[
   {id:'role',  name:'Role of earwax', cite:'slide 7'},
   {id:'risk',  name:'Risk factors for impacted cerumen', cite:'slide 7'},
   {id:'pres',  name:'Clinical presentation', cite:'slide 8'},
   {id:'excl',  name:'Exclusions to self-care', cite:'slides 10, 14'},
   {id:'goal',  name:'Treatment goals', cite:'slide 11'}]},
 {id:'lt-cerrx', name:'Cerumen: plan, implement and follow up', prof:'Lam',
  cite:'slides 12–17 · taught 11/20 (Lecture 13)', subs:[
   {id:'nonpharm', name:'Washcloth, ear-cleaning tool and irrigation', cite:'slide 13'},
   {id:'drug',     name:'Carbamide peroxide 6.5%: directions, cotton ball, irrigation', cite:'slide 14'},
   {id:'notrec',   name:'Not recommended: other cerumenolytics and ear candles', cite:'slide 15'},
   {id:'fu',       name:'Follow up: the PCP after 4 days', cite:'slide 16'}]},
 {id:'lt-water', name:'Water-clogged ear: collect, assess and plan', prof:'Lam',
  cite:'slides 18–31 · taught 11/20 (Lecture 13)', subs:[
   {id:'cause',    name:'Causes of trapped water', cite:'slides 20–21'},
   {id:'excl',     name:'Exclusions to self-care', cite:'slide 26'},
   {id:'goal',     name:'Treatment goals', cite:'slide 27'},
   {id:'nonpharm', name:'Towel, earplugs, bathing cap, petroleum jelly cotton, hair dryer', cite:'slides 29–30'},
   {id:'drug',     name:'Isopropyl alcohol drying drops', cite:'slide 31'}]},
 {id:'lt-diff', name:'Differentiating the otic disorders', prof:'Lam',
  cite:'slides 22–25 · taught 11/20 (Lecture 13)', subs:[
   {id:'three',  name:'Water-clogged ear, cerumen impaction and swimmer\'s ear (the main slide)', cite:'slide 23'},
   {id:'others', name:'Other ear disorders: ruptured eardrum, otitis media, foreign object, trauma', cite:'slides 24–25'}]},
 {id:'lt-impl', name:'Ear drops: administration, counseling and follow up', prof:'Lam',
  cite:'slides 32–35 · taught 11/20 (Lecture 13)', subs:[
   {id:'drops', name:'Instilling ear drops in adults and children', cite:'slide 33'},
   {id:'fu',    name:'Monitoring and when to refer', cite:'slide 34'}]},
 {id:'lt-case', name:'Otic patient cases', prof:'Lam',
  cite:'slides 36–44 · practice cases, not worked in class (Lecture 13)', subs:[
   {id:'c1', name:'Mother and 12-year-old: wetness, fullness and discharge after swimming', cite:'slides 36–37'},
   {id:'c2', name:'72-year-old with fullness and itching', cite:'slides 39–44'},
   {id:'c3', name:'New cases built on her objectives', cite:'slides 8–16, 23–34'}]}
);


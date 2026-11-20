/* ==========================================================================
   Otic / oral / ophthalmic medicinal chemistry topics (Dr. Sikazwe, Lectures 11-12, Exam 3).
   Deck: Sikazwe_OOO_mc.pdf (68 slides; "slide N" = PDF page = the printed number). Taught Wed 11/18 (slides 1-32:
   otic, oral, ophthalmic chemical classes, glaucoma basics and ADME, the alpha 2 agonists) and Thu 11/19 (the rest:
   from the beta antagonists on). Transcript: DEENT_Lecture_11.18_transcript.txt; the 11/19 transcript is not in yet.
   Dr. Sikazwe (11/18): "where there's more information, there will be more questions"; the ophthalmic part has the most;
   the otitis, ototoxicity and tinnitus slides are FYI ("it won't be on the exam"), so no question is written on slides 10-13.
   ========================================================================== */
TOPIC_DECKS.push(
  {id:'ooo', exam:3, name:'Otic, oral and ophthalmic medicinal chemistry (Dr. Sikazwe)', file:'Sikazwe_OOO_mc.pdf', when:'taught 11/18, 11/19 (Exam 3)',
   topics:['oo-otic', 'oo-oral', 'oo-oph', 'oo-a2', 'oo-bb', 'oo-cai', 'oo-chol', 'oo-pg', 'oo-de', 'oo-ac', 'oo-beyond']});

TOPICS.push(
 {id:'oo-otic', name:'Earwax: cerumenolytics (docusate, carbamide peroxide)', prof:'Sikazwe',
  cite:'slides 4–9 · taught 11/18 (Lecture 11)', subs:[
   {id:'docu',  name:'Docusate sodium: surfactant, why it is not absorbed', cite:'slide 7'},
   {id:'carb',  name:'Carbamide peroxide: hydrogen peroxide, catalase, oxygen', cite:'slide 8'},
   {id:'prep',  name:'Cerumenolytics grouped by preparation', cite:'slides 6, 9'}]},
 {id:'oo-oral', name:'Tooth decay, gingivitis and pain: toothpastes, rinses, fillings, whiteners', prof:'Sikazwe',
  cite:'slides 15–25 · taught 11/18 (Lecture 11)', subs:[
   {id:'cause', name:'Causes of tooth decay', cite:'slide 16'},
   {id:'fluor', name:'Fluoride: hydroxyapatite to fluorapatite, remineralization, fluorosis', cite:'slides 17–18'},
   {id:'nonf',  name:'Non-fluoride toothpastes', cite:'slide 19'},
   {id:'rinse', name:'Mouth rinses: fluoride, bicarbonate, peroxide, biguanides and quaternary ammoniums, benzocaine', cite:'slides 20–21'},
   {id:'fill',  name:'Fillings: amalgams and resins', cite:'slides 22–23'},
   {id:'white', name:'Teeth whitening', cite:'slides 24–25'}]},
 {id:'oo-oph', name:'Ophthalmic drug classes, glaucoma and how eye drugs are absorbed', prof:'Sikazwe',
  cite:'slides 26–30 · taught 11/18 (Lecture 11)', subs:[
   {id:'fg',    name:'Functional groups and chemical classes of the eye drugs', cite:'slide 27'},
   {id:'gl',    name:'Glaucoma: raised pressure and the treatment goals', cite:'slide 28'},
   {id:'adme',  name:'Cornea and conjunctiva: lipophilic and hydrophilic drugs', cite:'slides 29–30'}]},
 {id:'oo-a2', name:'Alpha 2 agonists: imidazolines and their SAR', prof:'Sikazwe',
  cite:'slides 31–32 · taught 11/18 (Lecture 11)', subs:[
   {id:'class', name:'Clonidine, apraclonidine, brimonidine', cite:'slide 31'},
   {id:'sar',   name:'SAR: aryl imidazoline core, the linker atom', cite:'slide 32'}]},
 {id:'oo-bb', name:'Beta antagonists: aryloxypropanolamines', prof:'Sikazwe',
  cite:'slides 33–34 · taught 11/19 (Lecture 12)', subs:[
   {id:'class', name:'Chemical class and drugs', cite:'slide 33'},
   {id:'sar',   name:'SAR', cite:'slide 34'}]},
 {id:'oo-cai', name:'Carbonic anhydrase inhibitors: sulfonamides (zolamides)', prof:'Sikazwe',
  cite:'slides 35–38 · taught 11/19 (Lecture 12)', subs:[
   {id:'enz',   name:'The enzyme and its zinc', cite:'slide 35'},
   {id:'sulf',  name:'Sulfonamides: the key functional group', cite:'slides 36–38'}]},
 {id:'oo-chol', name:'Cholinergic agents: carbamates, esters, organophosphates', prof:'Sikazwe',
  cite:'slides 40–43 · taught 11/19 (Lecture 12)', subs:[
   {id:'dir',   name:'Direct-acting: carbamates and esters', cite:'slide 40'},
   {id:'ind',   name:'Indirect-acting: acetylcholinesterase inhibitors', cite:'slides 41–43'}]},
 {id:'oo-pg', name:'Prostaglandin analogs, EP2 agonist and Rho kinase inhibitor', prof:'Sikazwe',
  cite:'slides 44–48 · taught 11/19 (Lecture 12)', subs:[
   {id:'pg',    name:'Prostaglandins and prodrug activation', cite:'slides 44–46'},
   {id:'ep2',   name:'Omidenepag isopropyl', cite:'slide 47'},
   {id:'rock',  name:'Netarsudil (isoquinoline)', cite:'slide 48'}]},
 {id:'oo-de', name:'Dry eye disease: the chemistry of its drugs', prof:'Sikazwe',
  cite:'slides 49–51 · taught 11/19 (Lecture 12)', subs:[
   {id:'drugs', name:'Dry eye pharmacotherapy and lifitegrast', cite:'slides 49–51'}]},
 {id:'oo-ac', name:'Self-assessment questions he kept (Dr. Sikazwe)', prof:'Sikazwe',
  cite:'slides 62–68 · questions 3, 4 and 5; taught 11/19 (Lecture 12)', subs:[
   {id:'self',  name:'Self-assessment questions 3, 4 and 5', cite:'slides 65–68'}]},
 {id:'oo-beyond', name:'Not on Exam 3: allergic conjunctivitis, steroids, direct-acting cholinergic SAR', prof:'Sikazwe',
  cite:'Dr. Sikazwe, 11/19: reading ends at slide 51 (allergic conjunctivitis goes to the antihistamine lecture), "we are not focusing on steroids", self-assessment questions 1 and 2 skipped, and "Don\'t expect a question on this SAR" (slide 40). Kept for practice; marked low-yield and left off Exam 3 practice papers. Sikazwe_OOO_mc.pdf, slides 40, 52–60',
  subs:[
   {id:'h1',   name:'H1 antihistamines', cite:'slides 53–54'},
   {id:'dec',  name:'Imidazoline decongestants', cite:'slide 55'},
   {id:'mcs',  name:'Mast cell stabilizers', cite:'slide 56'},
   {id:'dual', name:'Dual-acting agents (self-assessment question 2)', cite:'slides 57, 64'},
   {id:'gc',   name:'Glucocorticoids and the steroid carbon numbering (self-assessment question 1)', cite:'slides 58–60, 63'},
   {id:'dsar', name:'Direct-acting cholinergics: the slide 40 SAR', cite:'slide 40'}]}
);

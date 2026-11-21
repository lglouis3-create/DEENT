/* Spoken narration for six Exam 3 drawn figures of Dr. Sikazwe's otic, oral and ophthalmic
   medicinal chemistry (diagrams_oo.js, diagrams_oo_fc.js, diagrams_fb.js). Sources: Sikazwe_OOO_mc.pdf
   (file page numbers) and the 11/18 and 11/19 lecture transcripts. The src field is never spoken. */
var DIA_NARR = (typeof DIA_NARR !== 'undefined' && DIA_NARR) || {};

DIA_NARR['oo-cerumen'] = {steps: [
  {text: 'This figure shows how carbamide peroxide, sold as Debrox, breaks up ear wax, called cerumen. It comes from Doctor Sikazwe\'s otic lecture on cerumenolytics. Carbamide peroxide is a one to one complex of urea and hydrogen peroxide, H two O two, formulated in glycerol or propylene glycol. The urea stabilizes the hydrogen peroxide, which alone would effervesce at once.',
   src: 'Sikazwe slides 6, 8; 11/18 T@7762, T@9225'},
  {text: 'Applied in the canal, the complex dissociates slowly into urea and hydrogen peroxide. Hydrogen peroxide is the active ingredient. Because the urea holds it in the complex, it is released gradually.',
   src: 'Sikazwe slide 8 (dissociation scheme; CBDA line); 11/18 T@8076'},
  {text: 'Catalase, an antioxidant enzyme present in cerumen itself, rapidly breaks hydrogen peroxide down to molecular oxygen, O two, and two molecules of water. The slide\'s scheme draws the oxygen; the water is from his explanation.',
   src: 'Sikazwe slide 8 (catalase arrow to O2); 11/18 T@8295'},
  {text: 'The oxygen released inside the wax bubbles and effervesces, and the slide states that effervescence breaks up ear wax. The cause is chemical, but the effect on the wax is mechanical. So Debrox dissociates to release hydrogen peroxide, catalase converts it to oxygen, and the bubbling breaks up the cerumen.',
   src: 'Sikazwe slide 8; 11/18 T@8777'},
]};

DIA_NARR['oo-fluoride'] = {steps: [
  {text: 'This figure shows how fluoride protects enamel, from Doctor Sikazwe\'s oral lecture on preventing tooth decay. Enamel is made of hydroxyapatite, C A ten, P O four taken six times, O H taken two times. Hydroxyapatite is vulnerable to acid erosion, and he stressed that this comes from chronic exposure, not a single event.',
   src: 'Sikazwe slide 17; 11/18 T@18815'},
  {text: 'Bacteria form plaque and convert sugars into acids, mainly lactic acid and propionic acid. Acid drinks add acid, and smoking alters saliva pH and promotes bacterial growth. As saliva pH falls, acid erodes the hydroxyapatite, and cavities can form.',
   src: 'Sikazwe slide 16; 11/18 T@16816'},
  {text: 'Fluoride ions, F minus, come from sodium fluorophosphate, stannous fluoride and sodium fluoride in toothpastes and gels. They replace the hydroxy groups of hydroxyapatite, so O H two becomes F two and the enamel becomes fluorapatite, C A ten, P O four taken six times, F two. Fluorapatite is more resistant to acid erosion. Because this conversion happens only with continued exposure, fluoride is used daily.',
   src: 'Sikazwe slide 17; 11/18 T@19345'},
  {text: 'Fluoride has two further effects. It enhances mineral deposition, called mineralization: fluoride recruits calcium and phosphate ions from saliva onto the enamel. But too much fluoride, above two milligrams per liter, causes enamel fluorosis. This is mainly a problem in children, whose enamel is still developing. It starts as white spots that can turn brown.',
   src: 'Sikazwe slide 18; 11/18 T@20715, T@21310-@22054'},
]};

DIA_NARR['oo-eye-entry'] = {steps: [
  {text: 'This figure shows how an eye drop gets into the eye, from Doctor Sikazwe\'s glaucoma lecture. Of the dose in the tear film, under ten percent is absorbed into the eye. Over fifty percent is absorbed systemically, mainly through the conjunctiva of the eyes and through the nose.',
   src: 'Sikazwe slide 30; 11/18 T@43104-@45400'},
  {text: 'The first route is the cornea, a lipid, water, lipid sandwich. A drug must cross tightly packed cells, dissolve in the first lipid layer, pass through the water layer, and dissolve again in the second lipid layer. So less drug enters this way. The cornea is the primary route for small, lipophilic drugs.',
   src: 'Sikazwe slides 29, 30; 11/18 T@43104'},
  {text: 'The second route is the conjunctiva, which covers the white of the eye and folds into the eyelid. Its surface is larger, so more drug enters. It has influx and efflux transporters and esterase and C Y P enzymes. The conjunctiva is the route for large, hydrophilic drugs.',
   src: 'Sikazwe slides 29, 30; 11/18 T@44206'},
  {text: 'Both routes lead through the aqueous humor to ocular bioavailability, so the route a drug takes follows from its size and lipophilicity. Because the conjunctiva has enzymes, it can convert a prodrug to its active form, which is why some eye drugs are given as prodrugs.',
   src: 'Sikazwe slide 30; 11/18 T@44422, T@45075'},
]};

DIA_NARR['oo-imidazoline'] = {steps: [
  {text: 'This figure shows the structure of the imidazoline alpha two agonists used in glaucoma, from Doctor Sikazwe\'s lecture on adrenergic agents. Alpha two agonists decrease intraocular fluid production and increase outflow. The minimum structure with activity, the S A R, is an aryl ring joined through one linker atom, X, to an imidazoline ring.',
   src: 'Sikazwe slides 31, 32; 11/18 T@49986'},
  {text: 'The linker atom decides the receptor. With a carbon linker, most agents are alpha one agonists. With an amine linker, most are alpha two selective. The slide prints X equals N H two for alpha two; the drugs that follow have an N H linker.',
   src: 'Sikazwe slide 32; 11/18 T@50385'},
  {text: 'Clonidine, the prototype, has a C log P of one point five. It is lipophilic enough to enter the brain, where it causes unwanted central nervous system effects, including hypotension. For glaucoma that is a disadvantage.',
   src: 'Sikazwe slide 31; 11/18 T@46183, T@46562'},
  {text: 'Apraclonidine is the amine analog: an H two N group is added to the ring. Its C log P is zero point eight seven, so it is less lipophilic and enters the brain poorly, which removes the central nervous system concern. Its half-life is about eight hours.',
   src: 'Sikazwe slide 31; 11/18 T@47174, T@47684'},
  {text: 'Brimonidine is the pyrazine analog, with a C log P of one point two. It is the most potent of the series, highly alpha two selective, and about a thousandfold more potent than apraclonidine and clonidine, so a small drop suffices with less entry into the brain. Its half-life is three to four hours, so it is instilled more often than apraclonidine.',
   src: 'Sikazwe slide 31; 11/18 T@47934, T@48347'},
]};

DIA_NARR['oo-ache'] = {steps: [
  {text: 'This figure shows how acetylcholinesterase inhibitors are ranked by functional group, from Doctor Sikazwe\'s glaucoma lecture on cholinergic agents. Acetylcholinesterase, A C h E, hydrolyzes acetylcholine, an ester, to acetic acid and choline, and so inactivates it.',
   src: 'Sikazwe slide 41; 11/19 T@17300-@18000'},
  {text: 'Indirect-acting cholinergics inhibit A C h E. Less acetylcholine is broken down, so acetylcholine levels rise and fluid outflow increases.',
   src: 'Sikazwe slide 41; 11/19 T@17300-@18400'},
  {text: 'The extent of inhibition depends on the functional group: phosphoryl is greater than carbamate, which is greater than ester. He gave the same order for duration of action, with amide placed between carbamate and ester as mild. So the carbamate gives intermediate inhibition and the phosphoryl group the most.',
   src: 'Sikazwe slides 42, 43; 11/19 T@21200-@22600'},
  {text: 'Echothiophate iodide, an organophosphate, is an irreversible A C h E inhibitor. Its phosphoryl group binds the enzyme, which is then inactive. With water, aging follows: one ethyl group is lost as ethanol and a P O H group remains, leaving the enzyme irreversibly inactive. The phosphoryl group therefore gives irreversible inhibition.',
   src: 'Sikazwe slide 42 (echothiophate, aging scheme; slide 68 poses the irreversible-inhibition question); 11/19 T@18900-@20400'},
]};

DIA_NARR['oo-pg-prodrug'] = {steps: [
  {text: 'This figure shows why most prostaglandin agonists for glaucoma are prodrugs, from Doctor Sikazwe\'s lecture. All of them increase fluid outflow by activating the prostaglandin F receptor, the F P receptor. The drawing is the natural P G F two alpha: a ring with two hydroxyl groups, a chain ending at carbon one as a carboxylic acid, and a chain with a hydroxyl at carbon fifteen. Analogs are used because the natural molecule is too unstable.',
   src: 'Sikazwe slides 44, 46; 11/19 T@22500-@23300'},
  {text: 'Latanoprost has an isopropyl ester at carbon one instead of the acid, so it is a prodrug. Travoprost and tafluprost are isopropyl esters too, and latanoprostene bunod is also an ester. Bimatoprost is an amide, and amides are active as they are.',
   src: 'Sikazwe slides 44, 45, 46; 11/19 T@23000-@23800'},
  {text: 'An esterase hydrolyzes the ester to a carboxylic acid, giving latanoprost acid, the active drug. The conjunctiva has esterase, so it can perform this activation.',
   src: 'Sikazwe slides 45, 29; 11/19 T@23800-@24300'},
  {text: 'The S A R: acids and amides are active, and esters are prodrugs. At carbon fifteen, a halogen in place of the hydroxyl prevents oxidation of the fifteen hydroxyl to a ketone, which stabilizes the molecule; tafluprost has two fluorines there. Omidenepag isopropyl, an E P two agonist, and netarsudil, a rho kinase inhibitor, are also ester prodrugs that need esterase.',
   src: 'Sikazwe slides 44, 46, 47, 48; 11/19 T@24700-@29500'},
]};

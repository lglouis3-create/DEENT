/* ==========================================================================
   Eye topics (Dr. Smith, Lectures 9-10, Exam 3): the deck folder and the topic cards the question files use.
   Deck: Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf (74 slides; "slide N" = PDF page).
   Taught Fri 11/13 (ophthalmic physiology: slides 1-45 to the Ac block) and Tue 11/17 (from the carbonic anhydrase
   inhibitors to the end). Transcripts: DEENT_Lecture_11.13_transcript.txt, DEENT_Lecture_11.17_transcript.txt.
   ========================================================================== */
TOPIC_DECKS.push(
  {id:'eye', exam:3, name:'Eye: anatomy, glaucoma, allergic conjunctivitis, dry eye (Dr. Smith)', file:'Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf', when:'taught 11/13 and 11/17 (Exam 3)',
   topics:['ey-anat', 'ey-glpath', 'ey-in', 'ey-out', 'ey-ac', 'ey-de']});

TOPICS.push(
 {id:'ey-anat', name:'Eye structure, tears and the pharmacology the eye shares with the body', prof:'Smith',
  cite:'slides 2–8 · taught 11/13 (Lecture 9)', subs:[
   {id:'struct', name:'Structures of the eye', cite:'slide 4'},
   {id:'lacr',   name:'Lacrimal system, drainage and the counseling point', cite:'slide 5'},
   {id:'tears',  name:'The three layers of tears', cite:'slide 6'},
   {id:'auto',   name:'Cholinergic and adrenergic effects in the eye', cite:'slides 7–8'}]},
 {id:'ey-glpath', name:'Glaucoma pathophysiology: aqueous humor, inflow and outflow', prof:'Smith',
  cite:'slides 10–16 · taught 11/13 (Lecture 9)', subs:[
   {id:'types',  name:'Open angle and closed angle glaucoma', cite:'slides 13–14'},
   {id:'flow',   name:'Aqueous humor: made by the ciliary body, inflow, outflow routes', cite:'slides 14–15'},
   {id:'recep',  name:'Receptors and enzymes in the ciliary body and meshwork', cite:'slide 16'}]},
 {id:'ey-in', name:'Glaucoma drugs that decrease inflow', prof:'Smith',
  cite:'slides 17–29 · taught 11/13 and 11/17 (Lectures 9–10)', subs:[
   {id:'bb',   name:'Beta receptor antagonists', cite:'slides 17–20'},
   {id:'a2',   name:'Alpha 2 agonists', cite:'slides 21–24'},
   {id:'cai',  name:'Carbonic anhydrase inhibitors', cite:'slides 25–29'},
   {id:'acid', name:'Why carbonic anhydrase inhibitors cause metabolic acidosis', cite:'slide 27'}]},
 {id:'ey-out', name:'Glaucoma drugs that increase outflow', prof:'Smith',
  cite:'slides 30–45 · taught 11/17 (Lecture 10)', subs:[
   {id:'m3',    name:'M3 agonists (direct parasympathomimetics)', cite:'slides 30–33'},
   {id:'ache',  name:'Acetylcholinesterase inhibitor', cite:'slides 34–35'},
   {id:'pg',    name:'Prostaglandin agonists', cite:'slides 36–39'},
   {id:'rock',  name:'Rho kinase inhibitor', cite:'slides 40–43'},
   {id:'combo', name:'Combination products', cite:'slides 44–45'}]},
 {id:'ey-ac', name:'Allergic conjunctivitis', prof:'Smith',
  cite:'slides 46–59 · taught 11/17 (Lecture 10)', subs:[
   {id:'hist',  name:'Histamine and the allergic response', cite:'slides 48–49'},
   {id:'h1',    name:'Ophthalmic H1 inverse agonists and mast cell stabilization', cite:'slides 50–54'},
   {id:'a2',    name:'Alpha 2 agonists (vasoconstrictors) and the combination', cite:'slides 55–59'}]},
 {id:'ey-de', name:'Dry eye', prof:'Smith',
  cite:'slides 60–73 · taught 11/17 (Lecture 10)', subs:[
   {id:'what',  name:'What dry eye is and who gets it', cite:'slide 62'},
   {id:'cni',   name:'Cyclosporine and the calcineurin pathway', cite:'slides 63–67'},
   {id:'cs',    name:'Loteprednol', cite:'slides 68–69'},
   {id:'lfa',   name:'Lifitegrast', cite:'slides 70–71'},
   {id:'var',   name:'Intranasal varenicline', cite:'slides 72–73'}]}
);

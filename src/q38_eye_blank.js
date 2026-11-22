/* q38_eye_blank.js: fill-in-the-blank items on the mechanisms of action of the eye drugs (Dr. Smith, Lectures 9-10, Exam 3).
   Written 2026-11-20 from Dr. Smith's Exam 3 study hints (emailed to the class, pasted by Louis 2026-11-20): "Know all the mechanisms of
   action of the drugs in the slide deck and the small details given in class that differentiate the drugs within a class ... I have
   three fill in the blank questions on this exam. They are questions regarding mechanism of action. Please study to the details
   presented in class."
   Sources: Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 18-19 (beta receptor antagonists), 22 (alpha 2 agonists), 26-27 (carbonic
   anhydrase inhibitors), 32 and 34 (M3 agonists, acetylcholinesterase inhibitor), 37-38 (prostaglandin agonists), 41 (Rho kinase
   inhibitor), 51 and 53-54 (ophthalmic antihistamines), 64-67 (cyclosporine, calcineurin), 71 (lifitegrast), 73 (varenicline);
   DEENT_Lecture_11.13_transcript.txt (beta receptor antagonists T@43786-44986, alpha 2 agonists T@48774-49762, carbonic anhydrase
   inhibitors T@54945) and DEENT_Lecture_11.17_transcript.txt (kidney explanation T@17631, M3 and cholinesterase drugs T@23508-29210,
   prostaglandin agonists T@31127-33195, Rho kinase T@35051, antihistamines T@43646-51894, calcineurin T@60322-60519, lifitegrast T@64103,
   varenicline T@67584). Character offsets into those files; each offset was found by script.
   Format as on Exam 1 ("Calcipotriene binds to what ___ receptor"): one blank, one term; `accept[0]` is the answer shown; the other
   entries are the wordings a student could type (alpha and beta forms, abbreviations, the slide's spelling). Grading is strict: a one-letter
   slip, or another receptor subtype, is wrong. `dupOf` names the multiple-choice item that tests the same fact. EB-003 and EB-015 have no
   multiple-choice item that keys the same fact (EI-003 and EI-007 test the carteolol neighbours, EL-012 gives the H4 receptor in its
   stem and keys the cell), so they stand alone with their own concepts.
   EB-021..023 (2026-11-22) ask drug to target in the form of her Exam 1 blanks; EB-023 repeats BL2-005 for the Exam 3 pool.
   Not duplicated here: tacrolimus binds FKBP, because it already exists as BL2-004; cyclosporine binds cyclophilin is BL2-005 (the
   same drawing as slide 66 of this deck; on 11/17, T@60682, she asked whether the class had seen the question and said she was picky on it).
   Conflicts and notes:
   (1) Slide 66 prints "Cyclophillin" (two l); the lecture says "cyclophyllin". Not asked in this file.
   (2) The beta receptor on the ciliary epithelium is beta 1 and beta 2 (11/13 T@37782); the slide says "beta-adrenergic". EB-001 accepts
       the class name and the pair.
   (3) The nitric oxide remark for latanoprostene bunod is handwriting on slide 38; the item cites the lecture (T@33195) as EO-022 does. */
(() => {
const D = 'Lectures 9–10 (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)';
const mk = (id, skill, topic, sub, concept, dupOf, stem, accept, why, cite) => {
  const q = {id, type:'blank', skill, prof:'Smith', tier:'new', topic, sub, concept, tags:['blank','mechanism'], source:'both'};
  if (dupOf) q.dupOf = dupOf;
  Object.assign(q, {stem, accept, why, cite: D + ' ' + cite});
  return q;
};
QUESTIONS.push(

// ---------- beta receptor antagonists ----------
mk('EB-001','mech','ey-in','bb','b-ey-bb-receptor','EI-001',
 'Timolol lowers intraocular pressure by blocking ___ receptors on the epithelium of the ciliary body.',
 ['beta', 'beta adrenergic', 'beta receptor', 'beta receptors', 'beta adrenergic receptor', 'beta adrenergic receptors', 'beta 1 and beta 2', 'beta1 and beta2', 'beta 1 and 2', 'beta 1, beta 2'],
 'Slide 18: the drug "blocks the beta-adrenergic receptor on the ciliary body" and reduces aqueous humor production. In class: "they block the beta adrenergic receptor on the ciliary body" (T@43786 11/13); the epithelium carries beta 1, beta 2 and alpha 2 receptors (T@37782 11/13).',
 'slide 18; T@43786 11/13'),

mk('EB-002','tell','ey-in','bb','b-ey-betaxolol-b1','EI-007',
 'Betaxolol differs from timolol, levobunolol and carteolol because it is relatively ___ selective.',
 ['beta 1', 'beta1', 'b1', 'beta one', 'beta 1 selective', 'beta1 selective'],
 'Slide 19: betaxolol is the "relatively beta 1-selective agent"; timolol, levobunolol and carteolol are nonspecific. In class: "The betaxolol is relatively beta one selective" (T@44851 11/13).',
 'slide 19; T@44851 11/13'),

mk('EB-003','tell','ey-in','bb','b-ey-carteolol-isa',null,
 'Carteolol is a nonspecific beta receptor antagonist that also has intrinsic ___ activity.',
 ['sympathomimetic', 'sympathomimetic activity', 'intrinsic sympathomimetic', 'intrinsic sympathomimetic activity', 'ISA'],
 'Slide 19: carteolol is the "nonspecific blocker with intrinsic sympathomimetic activity". In class it is the one on the drug list that is "really non-specific, but it has some intrinsic sympathomimatic activity" (T@44986 11/13).',
 'slide 19; T@44986 11/13'),

// ---------- alpha 2 agonists ----------
mk('EB-004','mech','ey-in','a2','b-ey-a2-receptor','EI-018',
 'Brimonidine and apraclonidine decrease aqueous humor production by agonizing ___ receptors on the ciliary body.',
 ['alpha 2', 'alpha2', 'a2', 'alpha 2 adrenergic', 'alpha 2 receptor', 'alpha 2 receptors', 'alpha 2 adrenergic receptor', 'alpha 2 adrenergic receptors'],
 'Slide 22: the drugs bind "alpha 2 receptors on the ciliary body" and decrease the rate of aqueous humor production. In class: "We know the alpha 2 receptors are expressed by those epithelial cells on the ciliary body ... by agonizing the alpha 2, you\'re getting a decrease again in the production of the aqueous humor" (T@48774 11/13).',
 'slide 22; T@48774 11/13'),

mk('EB-005','tell','ey-in','a2','b-ey-brimonidine-neuroprotect','EI-019',
 'Of the alpha 2 agonists used for glaucoma, ___ is also thought to protect the optic nerve.',
 ['brimonidine', 'brimonidine tartrate', 'Alphagan', 'Alphagan P'],
 'Slide 22 marks neuroprotection "(brimonidine)". In class: "Another feature of that medication is that it is neuroprotective. This medication seems to protect somehow the health of the optic nerve" (T@49762 11/13); apraclonidine is not given this effect.',
 'slide 22; T@49762 11/13'),

// ---------- carbonic anhydrase inhibitors ----------
mk('EB-006','mech','ey-in','cai','b-ey-cai-carbonic-acid','EI-026',
 'Carbonic anhydrase inhibitors prevent the conversion of carbon dioxide and water to ___.',
 ['carbonic acid', 'H2CO3'],
 'Slide 26: inhibition of carbonic anhydrase "will prevent the conversion of CO2 and water to carbonic acid". In class: "it will convert carbon dioxide and water to carbonic acid" (T@54945 11/13). Bicarbonate is what carbonic acid then gives, not the enzyme\'s product.',
 'slide 26; T@54945 11/13'),

mk('EB-007','mech','ey-in','acid','b-ey-cai-acidosis-bicarb','EI-029',
 'Without carbonic acid in a proximal tubule cell, less ___ is sent into the blood, and the blood pH falls.',
 ['bicarbonate', 'bicarb', 'HCO3', 'bicarbonate ion'],
 'Slide 27 shows the proximal tubule: the inhibited enzyme gives no carbonic acid, so no bicarbonate crosses to the blood side and the pH drops, which is metabolic acidosis. In class: "you don\'t produce the carbonic acid, therefore it\'s not present to disassociate into the bicarb. Therefore, bicarb is not going out into the blood. And your blood pH will fall" (T@17631 11/17).',
 'slide 27; T@17631 11/17'),

// ---------- parasympathomimetics ----------
mk('EB-008','mech','ey-out','m3','b-ey-m3-subtype','EO-001',
 'Carbachol and pilocarpine lower intraocular pressure as agonists at the muscarinic receptor subtype ___.',
 ['M3', 'M3 receptor', 'muscarinic M3', 'M3 muscarinic', 'muscarinic 3'],
 'Slide 32: "Agonist at M3 receptor on sphincter muscle and trabecular meshwork"; contraction increases outflow. In class: "Carbachol and pilocarpine are the 2 M3 agonists that we use for glaucoma" (T@23508 11/17).',
 'slide 32; T@23508 11/17'),

mk('EB-009','mech','ey-out','ache','b-ey-ache-enzyme','EO-006',
 'Echothiophate raises acetylcholine in the eye by irreversibly inhibiting ___.',
 ['acetylcholinesterase', 'AChE', 'cholinesterase', 'acetyl cholinesterase'],
 'Slide 34: "Irreversible acetylcholinesterase inhibitor; results in increase of acetylcholine". In class: "They are irreversible inhibitors of the enzyme ... by inhibiting that enzyme, you get more acetylcholine agonizing the M3 receptors" (T@29210 11/17).',
 'slide 34; T@29210 11/17'),

// ---------- prostaglandin agonists and Rho kinase inhibitor ----------
mk('EB-010','mech','ey-out','pg','b-ey-pg-receptor','EO-016',
 'Latanoprost and the other prostaglandin agonists act at the ___ receptor on the ciliary muscle.',
 ['PGF2 alpha', 'PGF2alpha', 'PGF2a', 'prostaglandin F2 alpha', 'prostaglandin F2alpha', 'prostaglandin F2a', 'FP', 'FP receptor'],
 'Slide 37: "Agonist at the PGF2α receptor causing relaxation of the ciliary muscle". In class: "It\'s called the PGF2 alpha receptor. When that receptor is agonized, you get relaxation of the ciliary muscle" (T@31127 11/17).',
 'slide 37; T@31127 11/17'),

mk('EB-011','mech','ey-out','rock','b-ey-rhoa-target','EO-028',
 'Netarsudil lowers intraocular pressure by inhibiting the activity of ___ kinase.',
 ['RhoA', 'Rho', 'RhoA kinase', 'Rho kinase', 'ROCK', 'Rho associated kinase', 'Rho associated protein kinase'],
 'Slide 41: the drug "inhibits RhoA kinase activity"; RhoA is a GTP-binding protein. In class: "this medication inhibits a protein called RhoA, and it has kinasing activity" (T@35051 11/17).',
 'slide 41; T@35051 11/17'),

mk('EB-012','tell','ey-out','pg','b-ey-lbn-no','EO-022',
 'Latanoprostene bunod is metabolized to a donor of ___, which adds vasodilation.',
 ['nitric oxide', 'NO', 'nitric oxide donor'],
 'Slide 38 notes a donor of this molecule beside latanoprostene bunod (handwriting). In class: "when it\'s metabolized, it will be a donator of nitric oxide ... NO causes vasodilation" (T@33195 11/17).',
 'slide 38; T@33195 11/17'),

// ---------- ophthalmic antihistamines ----------
mk('EB-013','mech','ey-ac','h1','b-ey-h1-inverse','EL-003',
 'Ophthalmic antihistamines act at the H1 receptor as ___ agonists.',
 ['inverse', 'inverse agonist', 'inverse agonists'],
 'Slide 51: "H1 inverse agonists (reduce constitutive activity of receptor and compete with histamine binding to the receptor)". In class: "that\'s the official pharmacological mechanism of these drugs, traditionally called antihistamines" (T@43646 11/17).',
 'slide 51; T@43646 11/17'),

mk('EB-014','tell','ey-ac','h1','b-ey-cetirizine-no-mcs','EL-008',
 'Cetirizine is an ophthalmic H1 inverse agonist that lacks ___ stabilization.',
 ['mast cell', 'mast cells', 'mast cell stabilization', 'mast cell stabilizing'],
 'Slide 53 lists cetirizine as "H1 inverse agonist" with no stabilization; the other antihistamines on slides 53-54 have it. In class: "which one does not have mast cell stabilizing activity? Yep, cetirizine" (T@51788 11/17).',
 'slides 53, 54; T@51788 11/17'),

mk('EB-015','tell','ey-ac','h1','b-ey-alcaftadine-h4',null,
 'Alcaftadine antagonizes ___ receptors in addition to H1 receptors.',
 ['H4', 'H4 receptor', 'H4 receptors', 'histamine H4', 'histamine 4', 'H-4 receptor'],
 'Slide 53: alcaftadine has "H4 receptor antagonism (may explain its superiority in treating allergic conjunctivitis)". In class: "alcaptadine hits the H4 receptor as well as the H1 receptor" (T@48900 11/17).',
 'slide 53; T@48900 11/17'),

mk('EB-016','tell','ey-ac','h1','b-ey-epinastine-h2','EL-010',
 'Epinastine also antagonizes ___ receptors, which may reduce eyelid swelling.',
 ['H2', 'H2 receptor', 'H2 receptors', 'histamine H2', 'histamine 2'],
 'Slide 54: epinastine is "also H2 antagonist, which may reduce eyelid edema". In class: "it\'s also an H2 antagonist, so histamine 2 receptor antagonist, and that activity is thought to help with reducing eyelid swelling" (T@51043 11/17).',
 'slide 54; T@51043 11/17'),

// ---------- dry eye ----------
mk('EB-017','mech','ey-de','cni','b-ey-cyclosporine-calcineurin','ED-007',
 'Cyclosporine, bound to cyclophilin, inhibits ___, which lowers IL-2 production in dry eye.',
 ['calcineurin'],
 'Slides 64-67: cyclosporine is a calcineurin inhibitor; the drug-cyclophilin complex inhibits calcineurin, so IL-2 is not made. In class: "Cyclosporin binds to cyclophyllin, and that complex is what\'s inhibiting calcineurin" (T@60519 11/17).',
 'slides 64, 66, 67; T@60519 11/17'),

mk('EB-018','mech','ey-de','cni','b-ey-calcineurin-nfat','ED-011',
 'Calcineurin, activated by calcium and calmodulin, dephosphorylates ___, the transcription factor that drives IL-2 expression.',
 ['NFAT', 'nuclear factor of activated T cells'],
 'Slide 66 (Golan Fig 44-5) shows inactive NFAT becoming active NFAT and entering the nucleus to turn on the IL-2 gene. In class: "It\'ll dephosphorylate NFAT, allowing NFAT, which is a transcription factor, to express IL-2" (T@60322 11/17).',
 'slide 66; T@60322 11/17'),

mk('EB-019','mech','ey-de','lfa','b-ey-lifitegrast-lfa1','ED-018',
 'Lifitegrast binds ___ on leukocytes and blocks its interaction with ICAM-1.',
 ['LFA-1', 'LFA1', 'lymphocyte function-associated antigen 1', 'lymphocyte function associated antigen one'],
 'Slide 71: lifitegrast is a lymphocyte function-associated antigen 1 antagonist; this cell surface protein is found on leukocytes. In class: "when the drug lifitegrast binds to LFA1, it blocks the interaction with cell adhesion molecules like ICAM-1" (T@64103 11/17).',
 'slide 71; T@64103 11/17'),

mk('EB-020','mech','ey-de','var','b-ey-varenicline-nachr','ED-024',
 'Intranasal varenicline increases tear production by agonizing ___ acetylcholine receptors in the nasal cavity.',
 ['nicotinic', 'nicotine', 'nicotinic acetylcholine', 'nAChR', 'nACh'],
 'Slide 73: a nicotinic acetylcholine receptor agonist that activates the trigeminal parasympathetic pathway. In class: "the nicotine receptors in the nasal cavity where the drug binds, agonizing those receptors, activates the trigeminal nerve" (T@67584 11/17).',
 'slide 73; T@67584 11/17'),

// ---------- the drug-to-target form of her Exam 1 blanks ("Calcipotriene is a drug that binds to ___"), added 2026-11-22 ----------
mk('EB-021','mech','ey-in','cai','b-ey-cai-enzyme','EB-006',
 'Dorzolamide and brinzolamide decrease aqueous humor production by inhibiting the enzyme ___.',
 ['carbonic anhydrase', 'carbonic anhydrase enzyme', 'CA', 'carbonic anhydrase (CA)'],
 'Slide 26: "Inhibition of carbonic anhydrase (CA) will prevent the conversion of CO2 and water to carbonic acid", which reduces the sodium and bicarbonate available for secretion. Slide 28 lists dorzolamide and brinzolamide as the ophthalmic members of the class. In class: "it will convert carbon dioxide and water to carbonic acid" (T@54945 11/13).',
 'slides 26, 28; T@54945 11/13'),

mk('EB-022','mech','ey-ac','h1','b-ey-h1-receptor','EB-013',
 'Ketotifen, olopatadine and the other ophthalmic antihistamines are inverse agonists at the histamine ___ receptor.',
 ['H1', 'H1 receptor', 'histamine H1', 'H 1', 'H-1', 'histamine 1'],
 'Slide 51: "H1 inverse agonists (reduce constitutive activity of receptor and compete with histamine binding to the receptor)". Slides 53 and 54 give each listed drug as an H1 inverse agonist. In class: "that\'s the official pharmacological mechanism of these drugs, traditionally called antihistamines" (T@43646 11/17).',
 'slides 51, 53, 54; T@43646 11/17'),

mk('EB-023','mech','ey-de','cni','b-ey-cyclosporine-cyclophilin','EB-017',
 'Cyclosporine binds the protein ___, and that complex inhibits calcineurin.',
 ['cyclophilin', 'cyclophilins', 'cyclophillin', 'cyclophyllin'],
 'Slide 66 labels the protein ("Cyclophillin" as printed) in the T-cell figure. In class: "Cyclosporin binds to cyclophyllin, and that complex is what\'s inhibiting calcineurin, and tacrolimus is binding to FKBP" (T@60519 11/17); Dr. Smith added that she was picky on the FKBP question on purpose.',
 'slide 66; T@60519 11/17')
);
})();

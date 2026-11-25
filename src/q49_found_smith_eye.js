/* q49_found_smith_eye.js: foundation items for Dr. Smith's eye lectures (Exam 3), written 2026-11-25 from the coverage audit
   (/tmp/jobs4/deliver2/coverage_smith_eye.csv). Each item tests ONE directly stated fact: a one-sentence stem, four options of one or
   two words or one short phrase, no patient case. Tags: 'foundation', 'recall' and one of anatomy, fact, adverse, class, mechanism.
   Sources: Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf (slide N = PDF page); DEENT_Lecture_11.13_transcript.txt and
   DEENT_Lecture_11.17_transcript.txt (T@n = character offset into that file, cited 11/13 and 11/17).
   Facts left out on purpose (conflict, number, or only a distractor risk), recorded in the audit:
   (1) phenylephrine: slide 57 lists it under "alpha 2 agonists", slide 8 under alpha 1; no item tests its receptor (EG-004 handles the list).
   (2) dissociation products of carbonic acid: slide 26 (sodium and bicarbonate) differs from 11/17 T@5420 (hydrogen ion and bicarbonate); no item asks it.
   (3) acidosis with the topical carbonic anhydrase inhibitors: 11/17 T@16780 allows it "to a much lesser extent"; the item names the oral drugs.
   (4) allergic reaction with apraclonidine: slide 24 lists it under systemic effects, 11/13 T@52001 describes it in the eye; the item does not ask where.
   (5) "taste perversion" is listed for the beta receptor antagonists (slide 20) and a bitter or sour taste for the carbonic anhydrase inhibitors (slide 29): no item keys a taste effect.
   (6) numbers (prevalence 7% to 33%, hyperemia 53%, 5% to 25%, 15 minutes) are not asked here; the 'numbers' items in q26 own them.
   (7) oral carbonic anhydrase inhibitors and echothiophate are both "for patients refractory to other therapy" (11/13 T@59041; 11/17 T@26954): the echothiophate item does not offer an oral carbonic anhydrase inhibitor as an option.
   Drug chart (DrugChart_Ophthalmics.pdf): not used for any item (pending the owner's approval). */
(() => {
const D = 'Lectures 9–10 (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)';
// opts: [text, why]; the keyed option is first; k = 0..3 is the place it takes among the options.
function mk(id, topic, sub, skill, kind, concept, stem, k, opts, teach, cite) {
  const rest = opts.slice(1).map(o => ({t:o[0], correct:false, why:o[1]}));
  const options = rest.slice();
  options.splice(k, 0, {t:opts[0][0], correct:true, why:opts[0][1]});
  return {id, skill, prof:'Smith', tier:'new', topic, sub, concept, tags:['foundation', 'recall', kind], source:'both',
          stem, options, teach, cite: D + ' ' + cite};
}
QUESTIONS.push(

// ---------- eye structure, tears, autonomic effects (slides 4-7) ----------
mk('FE-001','ey-anat','struct','patho','anatomy','ey-found-iris',
 'Which structure is the colored part of the eye?', 2, [
 ['Iris','Slide 4 and T@5542 11/13: the iris sits in front of the lens and is the colored part of the eye (blue, green, brown).'],
 ['Sclera','Slide 4 and T@6009 11/13: the sclera is the white part of the eye, a firm outer coat.'],
 ['Choroid','T@6717 11/13: the choroid is the blood-vessel-filled tissue that lines the eyeball and feeds the retina.'],
 ['Cornea','T@6305 11/13: the cornea is clear tissue, continuous with the sclera, in front of the iris and lens.']],
 'The iris is the colored part of the eye, in front of the lens (slide 4; T@5542 11/13).',
 'slide 4; T@5542 11/13'),

mk('FE-002','ey-anat','struct','patho','anatomy','ey-found-sclera',
 'Which structure is the firm white outer coat of the eyeball?', 0, [
 ['Sclera','Slide 4 and T@6009 11/13: the white part of the eye is the sclera, which is firm and goes all the way around the eyeball.'],
 ['Iris','Slide 4: the iris is the colored ring in front of the lens (T@5542 11/13).'],
 ['Retina','Slide 4: the retina lines the back of the eye and holds the rods and cones (T@5431 11/13).'],
 ['Choroid','T@6717 11/13: the choroid is the blood-vessel-filled tissue lining the inside of the eyeball.']],
 'The sclera is the firm white part of the eye; it is continuous with the clear cornea (slide 4; T@6009 11/13).',
 'slide 4; T@6009 11/13'),

mk('FE-003','ey-anat','struct','patho','anatomy','ey-found-cornea',
 'Which clear structure at the front of the eye is continuous with the sclera?', 3, [
 ['Cornea','T@6305 11/13: the cornea is "similar tissue to the sclera, it just has become not opaque", and it is continuous with the sclera (slide 4).'],
 ['Lens','Slide 4 and T@5327 11/13: the lens lies behind the iris, held by suspensory ligaments to the ciliary body.'],
 ['Retina','Slide 4 and T@5431 11/13: the retina lines the back of the eye and holds the rods and cones.'],
 ['Choroid','T@6717 11/13: the choroid is the blood-vessel-filled tissue lining the eyeball, not a clear front structure.']],
 'The cornea is clear, similar tissue to the sclera, and is continuous with it (slide 4; T@6305 11/13).',
 'slide 4; T@6305 11/13'),

mk('FE-004','ey-anat','struct','patho','anatomy','ey-found-lens',
 'Through which structure is light refracted and concentrated toward the back of the eye?', 1, [
 ['Lens','T@5327 11/13: "this is the lens, all right, through which light gets refracted and ... concentrated ... to the back of the eye" (slide 4).'],
 ['Iris','Slide 4 and slide 7: the iris muscles set the pupil size; the iris is not where light is refracted and concentrated.'],
 ['Sclera','Slide 4: the sclera is the white outer coat of the eyeball.'],
 ['Choroid','T@6717 11/13: the choroid supplies blood to the retina; it does not focus light.']],
 'The lens refracts and concentrates light onto the retina at the back of the eye (slide 4; T@5327 11/13).',
 'slide 4; T@5327 11/13'),

mk('FE-005','ey-anat','struct','patho','anatomy','ey-found-retina',
 'Which layer at the back of the eye contains the rods and cones?', 0, [
 ['Retina','T@5431 11/13: the retina is where the rods and cones are, the light-sensing receptors at the back of the eye (slide 4).'],
 ['Choroid','T@6717 11/13: the choroid is the vascular lining that supplies blood to the retina; the rods and cones are in the retina.'],
 ['Sclera','Slide 4: the sclera is the firm white outer coat.'],
 ['Cornea','T@6305 11/13: the cornea is the clear tissue in front of the iris and lens.']],
 'The rods and cones are the light-sensing receptors of the retina (slide 4; T@5431 11/13).',
 'slide 4; T@5431 11/13'),

mk('FE-006','ey-anat','struct','patho','anatomy','ey-found-optic-nerve',
 'Which structure carries the visual image from the eye to the brain?', 3, [
 ['Optic nerve','T@6535 11/13: the nerves of the rods and cones bundle into the optic nerve, which sends the image to the brain (slide 4).'],
 ['Suspensory ligaments','T@7479 11/13: the suspensory ligaments hold the lens to the ciliary body; they do not carry signals.'],
 ['Nasolacrimal duct','Slide 5: the nasolacrimal duct drains tears into the back of the nose.'],
 ['Ciliary body','Slide 4: the ciliary body is a muscular ring that makes aqueous humor.']],
 'The optic nerve carries the retina\'s signals to the brain (slide 4; T@6535 11/13).',
 'slide 4; T@6535 11/13'),

mk('FE-007','ey-anat','struct','patho','anatomy','ey-found-front-chamber',
 'Which liquid fills the front chamber of the eye?', 1, [
 ['Aqueous humor','T@7949 11/13: the front chamber is filled with a less gelatinous liquid; slides 14 and 15 name it aqueous humor, made by the ciliary body.'],
 ['Vitreous humor','Slide 4 and T@7915 11/13: the vitreous is the gelatinous liquid in the back chamber.'],
 ['Lacrimal fluid','Slide 6: tears coat the outside of the conjunctiva and cornea; they are not the liquid inside the eye.'],
 ['Cerebrospinal fluid','Not part of the eye anatomy on slide 4 or slide 14.']],
 'Front chamber: aqueous humor. Back chamber: gelatinous vitreous (slide 4; slide 14; T@7949 11/13).',
 'slides 4, 14; T@7949 11/13'),

mk('FE-008','ey-anat','tears','patho','anatomy','ey-found-tear-lipid',
 'Which part of the tear film do the meibomian glands make?', 2, [
 ['Lipid layer','Slide 6 and T@12771 11/13: the anterior layer is mostly lipids, produced by the meibomian glands along the eyelid margin.'],
 ['Aqueous layer','Slide 6: the middle aqueous layer is produced by the main lacrimal gland and the accessory lacrimal glands.'],
 ['Mucin layer','Slide 6: the posterior layer is mucins made by conjunctival goblet cells.'],
 ['Corneal epithelium','Slide 6 lists three tear layers; the corneal epithelium is not one of them.']],
 'Meibomian glands make the anterior lipid layer of the tears (slide 6; T@12771 11/13).',
 'slide 6; T@12771 11/13'),

mk('FE-009','ey-anat','tears','patho','anatomy','ey-found-tear-aqueous',
 'Which layer makes up most of the tear film?', 3, [
 ['Aqueous layer','Slide 6 and T@12921 11/13: the middle aqueous layer is about 98% of the tear film and is the largest component.'],
 ['Lipid layer','Slide 6: the anterior lipid layer comes from the meibomian glands and is a small part of the film.'],
 ['Mucin layer','Slide 6: the posterior mucin layer comes from the conjunctival goblet cells.'],
 ['Corneal epithelium','Not one of the three tear layers on slide 6.']],
 'The aqueous layer, made by the main and accessory lacrimal glands, is most of the tear film (slide 6; T@12921 11/13).',
 'slide 6; T@12921 11/13'),

mk('FE-010','ey-anat','tears','patho','anatomy','ey-found-tear-mucin',
 'Which part of the tear film do the goblet cells of the conjunctiva make?', 1, [
 ['Mucin layer','Slide 6 and T@13322 11/13: the posterior layer is a mixture of mucins produced by goblet cells in the conjunctiva.'],
 ['Lipid layer','Slide 6: the lipid layer comes from the meibomian glands at the eyelid margin.'],
 ['Aqueous layer','Slide 6: the aqueous layer comes from the lacrimal glands and the accessory lacrimal glands.'],
 ['Corneal epithelium','Not one of the three tear layers on slide 6.']],
 'Goblet cells in the conjunctiva make the posterior mucin layer of the tears (slide 6; T@13322 11/13).',
 'slide 6; T@13322 11/13'),

mk('FE-011','ey-anat','auto','patho','fact','ey-found-adrenergic-ciliary',
 'Adrenergic stimulation relaxes the ciliary muscle, which allows which kind of vision?', 0, [
 ['Far vision','Slide 7: adrenergic stimulation causes the ciliary muscle to relax, allowing for far vision.'],
 ['Near vision','Slide 7: near vision (accommodation) follows cholinergic contraction of the ciliary body.'],
 ['Night vision','Slide 7 gives no night vision effect for the ciliary muscle.'],
 ['Color vision','Slide 7 gives no color vision effect for the ciliary muscle.']],
 'Adrenergic stimulation relaxes the ciliary muscle (far vision) and produces aqueous humor; cholinergic stimulation contracts it (near vision) (slide 7).',
 'slide 7'),

// ---------- glaucoma pathophysiology (slides 11-16) ----------
mk('FE-012','ey-glpath','types','patho','fact','ey-found-poag-cause',
 'What is primary open angle glaucoma related to?', 2, [
 ['Poor aqueous drainage','Slide 13 and T@20971 11/13: open angle glaucoma is related to the drainage system not working effectively, so the liquid does not drain out as it should.'],
 ['Eye shape in the socket','Slide 13: that describes primary angle closure glaucoma, which is more closely connected with the shape of the eye and how it sits in the socket.'],
 ['Low tear production','Slide 62: reduced tear production is the problem in dry eye, not in glaucoma.'],
 ['Histamine release','Slide 48: histamine release from mast cells drives allergic conjunctivitis.']],
 'Open angle glaucoma is related to drainage that is not working effectively (slide 13; T@20971 11/13).',
 'slide 13; T@20971 11/13'),

mk('FE-013','ey-glpath','types','patho','fact','ey-found-poag-onset',
 'How does primary open angle glaucoma usually begin?', 3, [
 ['Gradually, without symptoms','Slide 13 and T@21022 11/13: the onset is usually gradual and asymptomatic until visual field loss occurs.'],
 ['Suddenly, with severe pain','Slide 13: significant pain with a quick rise in pressure describes primary angle closure glaucoma, a medical emergency.'],
 ['With itchy, red eyes','Slide 49 and slide 52: itching and redness are the symptoms of allergic conjunctivitis.'],
 ['With dry, gritty eyes','Slide 62: dryness is the complaint in dry eye.']],
 'Open angle glaucoma is usually gradual and asymptomatic until visual field loss occurs (slide 13; T@21022 11/13).',
 'slide 13; T@21022 11/13'),

mk('FE-014','ey-glpath','types','patho','fact','ey-found-glaucoma-optic-nerve',
 'Which structure is damaged when intraocular pressure stays high in glaucoma?', 1, [
 ['Optic nerve','Slide 13 and T@19671 11/13: glaucoma is a progressive eye disease that can lead to vision loss due to optic nerve damage.'],
 ['Ciliary body','Slide 14: the ciliary body makes aqueous humor; slide 13 names the optic nerve as the damaged structure.'],
 ['Choroid','T@6717 11/13: the choroid supplies blood to the retina; slide 13 names the optic nerve as the damaged structure.'],
 ['Lacrimal gland','Slide 5 and slide 6: the lacrimal glands make tears; they are involved in dry eye, not in glaucoma damage.']],
 'High intraocular pressure damages the optic nerve and can lead to vision loss (slide 13; T@19671 11/13).',
 'slide 13; T@19671 11/13'),

mk('FE-015','ey-glpath','flow','patho','anatomy','ey-found-schlemm',
 'Aqueous humor leaves the trabecular meshwork into which canal?', 0, [
 ['Schlemm\'s canal','Slide 15 and T@32236 11/13: the main route is the trabecular meshwork and Schlemm\'s canal, which empties into blood vessels.'],
 ['Lacrimal canaliculus','Slide 5: the canaliculi carry tears from the puncta toward the lacrimal sac.'],
 ['Nasolacrimal duct','Slide 5: the nasolacrimal duct drains tears into the back of the nose.'],
 ['Posterior chamber','Slide 15: the posterior chamber is where aqueous humor first enters, behind the iris, before it reaches the angle.']],
 'The trabecular meshwork drains into Schlemm\'s canal, which empties into blood vessels (slide 15; T@32236 11/13).',
 'slides 14, 15; T@32236 11/13'),

mk('FE-016','ey-glpath','flow','patho','fact','ey-found-main-route',
 'Which outflow route carries most of the aqueous humor out of the eye?', 3, [
 ['Trabecular route','T@32692 11/13: the most important outflow route is through the trabecular meshwork and Schlemm\'s canal (slides 14, 15).'],
 ['Uveoscleral route','T@32692 11/13: the uveoscleral route carries less of the liquid.'],
 ['Nasolacrimal route','Slide 5: that route drains tears from the eye surface, not aqueous humor from inside the eye.'],
 ['Choroidal route','The choroid is the blood-vessel lining that supplies the retina (T@6717 11/13), not an aqueous humor outflow route.']],
 'Most aqueous humor leaves by the trabecular meshwork and Schlemm\'s canal; the uveoscleral route carries less (slides 14, 15; T@32692 11/13).',
 'slides 14, 15; T@32692 11/13'),

// ---------- drugs that decrease inflow (slides 17-29) ----------
mk('FE-017','ey-in','bb','tell','fact','ey-found-levobunolol',
 'Which nonspecific beta receptor antagonist also has some alpha adrenergic effects?', 2, [
 ['Levobunolol','T@45855 11/13: "Levobunolol, it has some alpha adrenergic effects"; it is one of the nonspecific blockers on slide 19.'],
 ['Timolol','Slide 19: timolol is a nonspecific blocker; T@45855 11/13 names no alpha adrenergic effect for it.'],
 ['Betaxolol','Slide 19: betaxolol is the relatively beta 1 selective drug.'],
 ['Carteolol','Slide 19: carteolol is nonspecific with intrinsic sympathomimetic activity.']],
 'Levobunolol is a nonspecific beta blocker with some alpha adrenergic effects (slide 19; T@45855 11/13).',
 'slide 19; T@45855 11/13'),

mk('FE-018','ey-in','bb','tell','fact','ey-found-timolol-gel',
 'Which beta receptor antagonist is available as a gel given once daily?', 1, [
 ['Timolol','T@46338 11/13: timolol comes in a gel formulation that can be given once a day, which helps patients who forget doses.'],
 ['Betaxolol','Slide 19: betaxolol is relatively beta 1 selective; T@46338 11/13 names no once-daily gel for it.'],
 ['Carteolol','Slide 19: carteolol has intrinsic sympathomimetic activity; T@46338 11/13 names no once-daily gel for it.'],
 ['Levobunolol','Slide 19: levobunolol has some alpha adrenergic effects; T@46338 11/13 names no once-daily gel for it.']],
 'Timolol comes as a gel that is given once a day (T@46338 11/13).',
 'slide 19; T@46338 11/13'),

mk('FE-019','ey-in','bb','adverse','adverse','ey-found-bb-adverse',
 'Which adverse effect do topical beta receptor antagonists cause?', 0, [
 ['Insomnia and depression','Slide 20 and T@47637 11/13: headache, insomnia, taste perversion, depression and impotence are listed among the other effects.'],
 ['Cataract formation','Slide 35: cataracts are listed for the acetylcholinesterase inhibitor.'],
 ['Iris darkening','Slide 39: increased brown pigmentation of the iris is listed for the prostaglandin agonists.'],
 ['Conjunctival hemorrhage','Slide 43: conjunctival hemorrhage is listed for the Rho kinase inhibitor.']],
 'Insomnia, headache, depression and impotence are among the other effects listed for topical beta receptor antagonists (slide 20; T@47637 11/13).',
 'slide 20; T@47637 11/13'),

mk('FE-020','ey-in','a2','tell','fact','ey-found-apraclonidine-post-op',
 'Which glaucoma drug is used to prevent a rise in pressure after cataract surgery?', 3, [
 ['Apraclonidine','T@51245 11/13: apraclonidine is used postoperatively to prevent increases in intraocular pressure after eye surgery such as cataract surgery (slide 23).'],
 ['Latanoprost','Slide 37: latanoprost is a prostaglandin agonist for long-term outflow therapy; the lecture does not use it for the post-surgery rise.'],
 ['Pilocarpine','Slide 32: pilocarpine is an M3 agonist for outflow; the lecture does not use it for the post-surgery rise.'],
 ['Netarsudil','Slide 41: netarsudil is a Rho kinase inhibitor for outflow; the lecture does not use it for the post-surgery rise.']],
 'Apraclonidine is used to prevent a rise in intraocular pressure after eye surgery such as cataract surgery (slide 23; T@51245 11/13).',
 'slide 23; T@51245 11/13'),

mk('FE-021','ey-in','a2','tell','fact','ey-found-brimonidine-long-term',
 'Which alpha 2 agonist is the better choice for long-term glaucoma therapy?', 1, [
 ['Brimonidine','T@51660 11/13: brimonidine is the better choice for chronic treatment; it lacks the allergic response profile and has two bonus mechanisms (slide 22).'],
 ['Apraclonidine','T@51660 11/13: apraclonidine can cause an allergic response, so it is not used long term.'],
 ['Naphazoline','Slide 57: naphazoline is an ophthalmic vasoconstrictor for redness, not a glaucoma drug.'],
 ['Oxymetazoline','Slide 57: oxymetazoline is an ophthalmic vasoconstrictor for redness, not a glaucoma drug.']],
 'For long-term glaucoma therapy with an alpha 2 agonist, brimonidine is chosen over apraclonidine (slide 23; T@51660 11/13).',
 'slides 22, 23; T@51660 11/13'),

mk('FE-022','ey-in','a2','adverse','adverse','ey-found-apraclonidine-allergy',
 'An allergic response is a significant adverse effect of which glaucoma drug?', 2, [
 ['Apraclonidine','Slide 24 lists allergic reaction for apraclonidine; T@52228 11/13: it can cause an allergic type response, so it is not used long term.'],
 ['Brimonidine','T@52330 11/13: brimonidine does not have the allergic response profile; its listed effects are foreign body sensation, oral dryness and fatigue (slide 24).'],
 ['Timolol','Slide 20: the beta receptor antagonists are listed for stinging, bradycardia and bronchospasm, not for an allergic response.'],
 ['Latanoprost','Slide 39: blurred vision, stinging, lid edema, hyperemia and pigmentation are listed for the prostaglandin agonists, not an allergic response.']],
 'Apraclonidine can cause an allergic response, which is why it is not used for long-term treatment (slide 24; T@52228 11/13).',
 'slide 24; T@52228 11/13'),

mk('FE-023','ey-in','a2','class','class','ey-found-apraclonidine-class',
 'Apraclonidine belongs to which class of glaucoma drugs?', 3, [
 ['Alpha 2 agonists','Slide 23 lists apraclonidine and brimonidine as the alpha 2 agonist examples; they decrease aqueous humor production (slide 22).'],
 ['Beta receptor antagonists','Slide 19 lists timolol, betaxolol, carteolol and levobunolol as the beta receptor antagonists.'],
 ['Prostaglandin agonists','Slide 38 lists bimatoprost, latanoprost, latanoprostene bunod, travoprost and tafluprost.'],
 ['Rho kinase inhibitors','Slide 42 lists netarsudil as the Rho kinase inhibitor.']],
 'Apraclonidine and brimonidine are the alpha 2 agonists used for glaucoma (slide 23).',
 'slide 23'),

mk('FE-024','ey-in','cai','class','class','ey-found-acetazolamide-class',
 'Acetazolamide belongs to which class of glaucoma drugs?', 0, [
 ['Carbonic anhydrase inhibitors','Slide 28 lists acetazolamide, methazolamide, dorzolamide and brinzolamide as the carbonic anhydrase inhibitor examples.'],
 ['Beta receptor antagonists','Slide 19 lists timolol, betaxolol, carteolol and levobunolol.'],
 ['Prostaglandin agonists','Slide 38 lists bimatoprost, latanoprost, latanoprostene bunod, travoprost and tafluprost.'],
 ['Rho kinase inhibitors','Slide 42 lists netarsudil as the Rho kinase inhibitor.']],
 'Acetazolamide is an oral carbonic anhydrase inhibitor (slide 28).',
 'slide 28'),

mk('FE-025','ey-in','cai','tell','fact','ey-found-cai-first-form',
 'Which form of a carbonic anhydrase inhibitor is usually tried first for glaucoma?', 2, [
 ['Ophthalmic drops','T@59041 11/13: "we\'re gonna opt for our ophthalmic products first"; an oral drug is added later if drops and combinations do not control the pressure (slide 28).'],
 ['Oral tablets','T@59041 11/13: oral acetazolamide or methazolamide is added later, for a patient refractory to other therapies.'],
 ['Intravenous doses','Slide 28 lists only oral and ophthalmic carbonic anhydrase inhibitors.'],
 ['Nasal spray','Slide 28 lists only oral and ophthalmic carbonic anhydrase inhibitors.']],
 'Ophthalmic carbonic anhydrase inhibitors come first; an oral one is added when the pressure is not controlled (slide 28; T@59041 11/13).',
 'slide 28; T@59041 11/13'),

mk('FE-026','ey-in','acid','adverse','adverse','ey-found-cai-acidosis',
 'Which acid-base disturbance can oral carbonic anhydrase inhibitors cause?', 1, [
 ['Metabolic acidosis','Slide 29 lists systemic acidosis for the oral drugs; slide 27 and T@16780 11/17: the blood pH falls because less bicarbonate is returned to the blood.'],
 ['Metabolic alkalosis','Slide 27: the pH falls, so the disturbance is acidosis, not alkalosis.'],
 ['Respiratory acidosis','Slide 27 locates the problem in the kidney bicarbonate handling, a metabolic cause, not in the lungs.'],
 ['Respiratory alkalosis','Slide 27 locates the problem in the kidney bicarbonate handling, a metabolic cause, not in the lungs.']],
 'Oral carbonic anhydrase inhibitors can cause metabolic acidosis by reducing bicarbonate returned to the blood (slides 27, 29; T@16780 11/17).',
 'slides 27, 29; T@16780 11/17'),

// ---------- drugs that increase outflow (slides 30-45) ----------
mk('FE-027','ey-out','m3','tell','fact','ey-found-carbachol-longer',
 'Which M3 agonist is very potent and acts longer than pilocarpine?', 0, [
 ['Carbachol','T@26432 11/17: "Carbacol is very potent, its duration of action is longer than pilocarpine" and it is less allergenic.'],
 ['Pilocarpine','T@26432 11/17: pilocarpine is the shorter-acting M3 agonist, with more potential for an allergic reaction in the eye.'],
 ['Echothiophate','Slide 34: echothiophate is an irreversible acetylcholinesterase inhibitor, not an M3 agonist.'],
 ['Latanoprost','Slide 37: latanoprost is a prostaglandin agonist, not an M3 agonist.']],
 'Carbachol is very potent and longer acting than pilocarpine, and less allergenic (slide 31; T@26432 11/17).',
 'slide 31; T@26432 11/17'),

mk('FE-028','ey-out','m3','class','class','ey-found-carbachol-class',
 'Carbachol belongs to which class of glaucoma drugs?', 3, [
 ['Direct M3 agonists','Slide 31: carbachol and pilocarpine are the direct acting M3 agonists; they contract the trabecular meshwork to increase outflow (slide 32).'],
 ['Alpha 2 agonists','Slide 23 lists apraclonidine and brimonidine.'],
 ['Rho kinase inhibitors','Slide 42 lists netarsudil.'],
 ['Prostaglandin agonists','Slide 38 lists bimatoprost, latanoprost, latanoprostene bunod, travoprost and tafluprost.']],
 'Carbachol and pilocarpine are the direct acting M3 agonists (slide 31).',
 'slide 31'),

mk('FE-029','ey-out','ache','tell','fact','ey-found-echothiophate-refractory',
 'Which of these glaucoma drugs is usually kept for pressure that other drugs fail to control?', 1, [
 ['Echothiophate','T@26954 11/17: the acetylcholinesterase inhibitor is often used only when patients are really refractory to other glaucoma drugs; it causes more eye irritation than pilocarpine.'],
 ['Carbachol','T@26432 11/17: carbachol is the M3 agonist used more often.'],
 ['Latanoprost','Slide 37: latanoprost is a prostaglandin agonist; the lecture does not reserve it for refractory patients.'],
 ['Timolol','Slide 18: timolol is a beta receptor antagonist; the lecture does not reserve it for refractory patients.']],
 'Echothiophate is limited to patients refractory to other drugs (slide 31; T@26954 11/17).',
 'slide 31; T@26954 11/17'),

mk('FE-030','ey-out','ache','adverse','adverse','ey-found-ache-cataract',
 'Which class of glaucoma drugs can cause cataracts?', 2, [
 ['Cholinesterase inhibitors','Slide 35 lists cataracts for the acetylcholinesterase inhibitor; T@29697 11/17: this is another reason its use is limited.'],
 ['Beta receptor antagonists','Slide 20 lists stinging, decreased corneal sensitivity, bradycardia and bronchospasm for this class, not cataracts.'],
 ['Alpha 2 agonists','Slide 24 lists foreign body sensation, oral dryness and fatigue, not cataracts.'],
 ['Prostaglandin agonists','Slide 39 lists iris and lash pigmentation and hypertrichosis, not cataracts.']],
 'Cataracts are listed for the acetylcholinesterase inhibitor echothiophate (slide 35; T@29697 11/17).',
 'slide 35; T@29697 11/17'),

mk('FE-031','ey-out','pg','mech','mechanism','ey-found-pg-ciliary-relax',
 'Prostaglandin agonists act at the PGF2 alpha receptor to cause what in the ciliary muscle?', 0, [
 ['Relaxation','Slide 37 and T@31157 11/17: agonism at the PGF2 alpha receptor causes relaxation of the ciliary muscle, which opens uveoscleral outflow.'],
 ['Contraction','Slide 32: contraction of smooth muscle and the meshwork is the effect of the M3 agonists.'],
 ['Fibrosis','Slide 41: fibrosis-related proteins in the meshwork are what the Rho kinase inhibitor reduces.'],
 ['Muscle spasm','Slide 33: painful ciliary muscle spasm is an adverse effect of the M3 agonists.']],
 'Prostaglandin agonists relax the ciliary muscle through the PGF2 alpha receptor (slide 37; T@31157 11/17).',
 'slide 37; T@31157 11/17'),

mk('FE-032','ey-out','rock','adverse','adverse','ey-found-netarsudil-hyperemia',
 'Which adverse effect is the most common with netarsudil?', 3, [
 ['Conjunctival hyperemia','Slide 43 and T@36856 11/17: conjunctival hyperemia is the most common effect, from vasodilation as vascular smooth muscle relaxes.'],
 ['Corneal verticillata','Slide 43: corneal verticillata is among the other, less frequent effects.'],
 ['Conjunctival hemorrhage','Slide 43: conjunctival hemorrhage is among the other, less frequent effects.'],
 ['Instillation site pain','Slide 43: instillation site pain is among the other, less frequent effects.']],
 'Conjunctival hyperemia is the most common adverse effect of netarsudil (slide 43; T@36856 11/17).',
 'slide 43; T@36856 11/17'),

mk('FE-033','ey-out','combo','tell','fact','ey-found-combo-latanoprost',
 'Latanoprost is combined with which drug in a combination eye drop?', 1, [
 ['Netarsudil','Slide 45 lists latanoprost and netarsudil as a combination product.'],
 ['Timolol','Slide 45: timolol is combined with dorzolamide and with brimonidine, not with latanoprost.'],
 ['Brinzolamide','Slide 45: brinzolamide is combined with brimonidine.'],
 ['Dorzolamide','Slide 45: dorzolamide is combined with timolol.']],
 'Combination products: timolol and dorzolamide; timolol and brimonidine; brinzolamide and brimonidine; latanoprost and netarsudil (slide 45).',
 'slide 45'),

mk('FE-034','ey-out','combo','tell','fact','ey-found-combo-brinzolamide',
 'Brinzolamide is combined with which drug in a combination eye drop?', 2, [
 ['Brimonidine','Slide 45 lists brinzolamide and brimonidine as a combination product.'],
 ['Timolol','Slide 45: timolol is combined with dorzolamide and with brimonidine.'],
 ['Latanoprost','Slide 45: latanoprost is combined with netarsudil.'],
 ['Netarsudil','Slide 45: netarsudil is combined with latanoprost.']],
 'Brinzolamide and brimonidine form one of the four combination products (slide 45).',
 'slide 45'),

mk('FE-035','ey-out','pg','class','class','ey-found-latanoprost-class',
 'Latanoprost belongs to which class of glaucoma drugs?', 0, [
 ['Prostaglandin agonists','Slide 38 lists latanoprost with bimatoprost, latanoprostene bunod, travoprost and tafluprost; they act at the PGF2 alpha receptor (slide 37).'],
 ['Direct M3 agonists','Slide 31 lists carbachol and pilocarpine.'],
 ['Beta receptor antagonists','Slide 19 lists timolol, betaxolol, carteolol and levobunolol.'],
 ['Rho kinase inhibitors','Slide 42 lists netarsudil.']],
 'Latanoprost is a prostaglandin agonist (slide 38).',
 'slide 38'),

// ---------- allergic conjunctivitis (slides 47-59) ----------
mk('FE-036','ey-ac','hist','patho','mechanism','ey-found-h1-bronchoconstriction',
 'Which histamine receptor mediates bronchoconstriction and contraction of the gut?', 3, [
 ['H1','Slide 49 and T@42919 11/17: bronchoconstriction and contraction of the gut are mediated by H1 receptors.'],
 ['H2','Slide 54: H2 antagonism by epinastine may reduce eyelid edema; slide 49 assigns bronchoconstriction to H1.'],
 ['H3','Not named on slide 49 for any effect of histamine release.'],
 ['H4','Slide 53: H4 receptors are on eosinophils (alcaftadine); slide 49 assigns bronchoconstriction to H1.']],
 'Histamine acts on H1 receptors to cause bronchoconstriction and gut contraction (slide 49; T@42919 11/17).',
 'slide 49; T@42919 11/17'),

mk('FE-037','ey-ac','h1','adverse','adverse','ey-found-cetirizine-drowsy',
 'Which ophthalmic antihistamine can still cause drowsiness despite negligible CNS penetration?', 1, [
 ['Cetirizine','Slide 53 and T@50778 11/17: cetirizine has negligible CNS penetration but still causes drowsiness in sensitive people.'],
 ['Alcaftadine','Slide 53: alcaftadine has little CNS penetration and a low incidence of side effects.'],
 ['Epinastine','Slide 54: epinastine is noted for H1 inverse agonism, mast cell stabilization and H2 antagonism, not for drowsiness.'],
 ['Olopatadine','Slide 54: olopatadine is noted for mast cell stabilization and a nasal spray form, not for drowsiness.']],
 'Cetirizine can cause drowsiness even though it penetrates the CNS very little (slide 53; T@50778 11/17).',
 'slide 53; T@50778 11/17'),

mk('FE-038','ey-ac','h1','mech','mechanism','ey-found-prophylaxis-property',
 'Which property lets an ophthalmic antihistamine be started before the pollen season?', 2, [
 ['Mast cell stabilization','T@46866 11/17: stabilized mast cells do not release histamine when the pollen arrives, so these drugs are used prophylactically (slide 51).'],
 ['Anticholinergic activity','Slide 53: anticholinergic activity is a side effect profile point (azelastine), not a way to prevent histamine release.'],
 ['H4 receptor antagonism','Slide 53: alcaftadine blocks H4 receptors on eosinophils, which does not stop mast cells from releasing histamine.'],
 ['Vasoconstriction','Slide 56: vasoconstriction by alpha 2 agonists reduces redness; it does not prevent histamine release.']],
 'Mast cell stabilization prevents histamine release, so these antihistamines are started before the pollen season (slide 51; T@46866 11/17).',
 'slide 51; T@46866 11/17'),

mk('FE-039','ey-ac','a2','class','fact','ey-found-naphazoline-pheniramine',
 'Naphazoline/pheniramine combines an alpha 2 agonist with which drug class?', 0, [
 ['H1 inverse agonist','Slide 59 and T@54037 11/17: pheniramine is the antihistamine; naphazoline is the alpha 2 agonist that constricts vessels.'],
 ['Beta receptor antagonist','Slide 19: beta receptor antagonists are glaucoma drugs.'],
 ['Calcineurin inhibitor','Slide 64: calcineurin inhibitors such as cyclosporine are dry eye drugs.'],
 ['LFA-1 antagonist','Slide 71: lifitegrast is the LFA-1 antagonist for dry eye.']],
 'Naphazoline/pheniramine pairs an alpha 2 agonist (redness) with an antihistamine (itch) in one drop (slide 59; T@54037 11/17).',
 'slide 59; T@54037 11/17'),

// ---------- dry eye (slides 61-73) ----------
mk('FE-040','ey-de','what','patho','fact','ey-found-kcs',
 'Which term is another name for dry eye?', 3, [
 ['Keratoconjunctivitis sicca','Slide 62 and T@56122 11/17: dry eye is also called keratoconjunctivitis sicca.'],
 ['Allergic conjunctivitis','Slides 46 to 48: the allergic response of the conjunctiva to a histamine release.'],
 ['Open angle glaucoma','Slide 13: a drainage problem that raises intraocular pressure.'],
 ['Angle closure glaucoma','Slide 13: a blocked angle caused by the shape of the eye.']],
 'Dry eye is also called keratoconjunctivitis sicca (slide 62; T@56122 11/17).',
 'slide 62; T@56122 11/17'),

mk('FE-041','ey-de','cni','class','class','ey-found-cyclosporine-class',
 'Ophthalmic cyclosporine belongs to which drug class?', 1, [
 ['Calcineurin inhibitor','Slide 64 and T@58973 11/17: cyclosporine is a calcineurin inhibitor class immunosuppressant (slide 66: it inhibits production of IL-2).'],
 ['Corticosteroid','Slide 69: loteprednol is the corticosteroid used for dry eye.'],
 ['LFA-1 antagonist','Slide 71: lifitegrast is the LFA-1 antagonist.'],
 ['Nicotinic agonist','Slide 72: intranasal varenicline is the nicotinic acetylcholine receptor agonist.']],
 'Cyclosporine is a calcineurin inhibitor (slide 64).',
 'slide 64; T@58973 11/17'),

mk('FE-042','ey-de','cs','class','class','ey-found-loteprednol-class',
 'Loteprednol belongs to which drug class?', 2, [
 ['Corticosteroid','Slide 68 and T@63574 11/17: loteprednol is the topical corticosteroid used for dry eye, for its anti-inflammatory properties (slide 69).'],
 ['Calcineurin inhibitor','Slide 64: cyclosporine is the calcineurin inhibitor.'],
 ['LFA-1 antagonist','Slide 71: lifitegrast is the LFA-1 antagonist.'],
 ['Nicotinic agonist','Slide 72: intranasal varenicline is the nicotinic acetylcholine receptor agonist.']],
 'Loteprednol is a topical corticosteroid used for dry eye (slides 68, 69).',
 'slides 68, 69; T@63574 11/17'),

mk('FE-043','ey-de','lfa','adverse','adverse','ey-found-lifitegrast-adverse',
 'Which adverse effect does lifitegrast cause?', 0, [
 ['Application site irritation','Slide 71 and T@65285 11/17: application site irritation and reduced visual acuity are the listed effects.'],
 ['Iris and eyelid pigmentation','Slide 39: increased brown pigmentation of the iris and eyelids is listed for the prostaglandin agonists.'],
 ['Conjunctival hemorrhage','Slide 43: conjunctival hemorrhage is listed for the Rho kinase inhibitor.'],
 ['Painful ciliary muscle spasm','Slide 33: painful ciliary muscle spasm is listed for the M3 agonists.']],
 'Lifitegrast causes application site irritation and reduced visual acuity (slide 71; T@65285 11/17).',
 'slide 71; T@65285 11/17'),

mk('FE-044','ey-de','lfa','counsel','fact','ey-found-lifitegrast-contacts',
 'What should a contact lens wearer do when starting lifitegrast?', 3, [
 ['Remove lenses before the drop','Slide 71 and T@65621 11/17: remove contact lenses before use and reinsert them 15 minutes after instillation, because the drug may discolor lenses.'],
 ['Keep lenses in during dosing','Slide 71 says to remove the lenses before the drop.'],
 ['Rinse lenses with the drop','Slide 71 says the lenses should be out, not rinsed with the drug.'],
 ['Switch to daily lenses','Slide 71 gives no lens-type advice; the point is to take lenses out.']],
 'Contact lens wearers remove lenses before lifitegrast, because the drug may discolor them (slide 71; T@65621 11/17).',
 'slide 71; T@65621 11/17'),

mk('FE-045','ey-de','var','patho','fact','ey-found-varenicline-origin',
 'What was intranasal varenicline traditionally used for?', 1, [
 ['Smoking cessation','Slide 73 and T@66910 11/17: varenicline was first marketed to help with smoking cessation, then licensed as a nasal spray for dry eye.'],
 ['Allergic rhinitis','Slide 53 and slide 54: azelastine and olopatadine are the antihistamines that are also nasal sprays for allergic rhinitis.'],
 ['Nasal congestion','Slide 56: alpha 2 agonists are also used as nasal vasoconstrictors.'],
 ['Migraine prevention','Not a use given for varenicline on slide 73.']],
 'Varenicline was first used for smoking cessation; the 0.03-mg nasal spray was licensed for dry eye in 2021 (slide 73; T@66910 11/17).',
 'slide 73; T@66910 11/17')
);
})();

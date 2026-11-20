/* q37_sik_practice.js: Exam 3 (Dr. Sikazwe, Lectures 11-12), new items built on the four practice questions he attached to his
   email of 11/20 (Q1 non-fluoride toothpaste actives and how they work; Q2 the functional groups that classify the anti-glaucoma
   drugs; Q3 the N-dealkylated products of brinzolamide and dorzolamide; Q4 the fluoride true/false). Deck Sikazwe_OOO_mc.pdf
   (slides 5-8, 15-21, 27-31, 33-48 and self-assessment 3-5 are his stated reading); transcripts DEENT_Lecture_11.18_transcript.txt
   and DEENT_Lecture_11.19_transcript.txt (T@n = character offset).
   Q4 as written ends "and can erode teeth in children". The slides and recordings say excess fluoride (>2 mg/L) causes fluorosis
   (white spots, later brown stain); acid erosion is what fluorapatite resists. His sentence is therefore not keyed; OP2-012 to
   OP2-014 test each fact the slides state. Q3 says "N-dealkylated"; slide 37 and the 11/19 recording say CYP N-deethylation, so the
   structure items use the ethylamino group. Structures (images sk-*, images_add.json): PubChem names dorzolamide (CID 5284549) and
   brinzolamide (CID 68844); the Atlas holds neither. */
QUESTIONS.push(
{id:"OP2-001", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oral", sub:"nonf", concept:"oo-p-nf-list",
 tags:["practice-q1", "list"], source:"both",
 stem:"A student answers the practice question \"List the non-fluoride toothpaste active ingredients\" with four ingredients. Which list is correct?",
 options:[
  {t:"Sodium bicarbonate, nanohydroxyapatite, calcium sodium phosphosilicate, chlorhexidine gluconate", correct:false, why:"Chlorhexidine gluconate is a biguanide mouth-rinse agent (slide 21), not a toothpaste ingredient on slide 19."},
  {t:"Sodium fluoride, nanohydroxyapatite, calcium sodium phosphosilicate, amorphous calcium phosphate", correct:false, why:"Sodium fluoride is a fluoride source (slide 17), so it is excluded from a non-fluoride list."},
  {t:"Sodium bicarbonate, nanohydroxyapatite, calcium sodium phosphosilicate, amorphous calcium phosphate", correct:true, why:"These four are the non-fluoride toothpaste ingredients of slide 19: an abrasive and pH modifier, and three remineralizers."},
  {t:"Sodium bicarbonate, carbamide peroxide, calcium sodium phosphosilicate, amorphous calcium phosphate", correct:false, why:"Carbamide peroxide (10%) is a mouth-rinse agent for canker sores (slide 20), not a toothpaste ingredient on slide 19."}],
 teach:"Slide 19 headed the non-fluoride toothpastes as abrasives, pH modifiers and remineralizers, and lists sodium bicarbonate, nanohydroxyapatite, calcium sodium phosphosilicate and amorphous calcium phosphate. The rinse agents (carbamide peroxide, chlorhexidine, cetylpyridinium) sit on slides 20 and 21, and the fluoride sources on slide 17.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 17, 19–21; T@22699 11/18; T@23946 11/18"},

{id:"OP2-002", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-oral", sub:"nonf", concept:"oo-p-nf-remin-three", multi:true,
 tags:["practice-q1", "select-all"], source:"both",
 stem:"Select all that apply. No partial credit will be given. Which non-fluoride ingredients remineralize enamel?",
 options:[
  {t:"Nanohydroxyapatite", correct:true, why:"Its 50–1000 nm crystals bond to the hydroxyapatite of the tooth (slide 19)."},
  {t:"Sodium bicarbonate", correct:false, why:"It is an abrasive and a pH-elevating agent (slide 19), not a remineralizer."},
  {t:"Calcium sodium phosphosilicate", correct:true, why:"A bioactive glass that reacts with oral fluids to deposit crystalline hydroxycarbonate apatite (slide 19)."},
  {t:"Cetylpyridinium chloride", correct:false, why:"A cationic pyridinium salt of the mouth rinses that binds bacteria (slide 21), not a remineralizer."},
  {t:"Amorphous calcium phosphate", correct:true, why:"A reactive salt mixture that releases Ca2+ and PO4 ions on contact with saliva to remineralize enamel (slide 19)."}],
 teach:"On slide 19 only sodium bicarbonate is labelled an abrasive and pH modifier; nanohydroxyapatite, calcium sodium phosphosilicate and amorphous calcium phosphate are the three reactive remineralizers. The cationic rinse agents act on bacteria instead (slide 21).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 19, 21; T@23218 11/18; T@23946 11/18"},

{id:"OP2-003", type:'match', skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-oral", sub:"nonf", concept:"oo-p-nf-how",
 tags:["practice-q1", "match"], source:"both",
 stem:"Match each non-fluoride toothpaste ingredient to how it works.", left:"Ingredient", right:"How it works",
 pairs:[
  {l:"Sodium bicarbonate", r:"Abrasive that also raises the pH of the mouth", why:"Slide 19: an abrasive and mouth pH elevating agent; the gritty particles remove plaque and the base neutralizes acid (T@22699 11/18)."},
  {l:"Nanohydroxyapatite", r:"Crystals that bond to the hydroxyapatite of the tooth", why:"Slide 19: 50–1000 nm crystals which bond to hydroxyapatite (T@23218 11/18)."},
  {l:"Calcium sodium phosphosilicate", r:"Bioactive glass that deposits hydroxycarbonate apatite", why:"Slide 19: it reacts with oral fluids to deposit crystalline hydroxycarbonate apatite (T@23616 11/18)."},
  {l:"Amorphous calcium phosphate", r:"Salt mixture that releases calcium and phosphate ions", why:"Slide 19: on contact with saliva it releases Ca2+ and PO4 ions to remineralize enamel (T@23946 11/18)."}],
 teach:"The practice question asks for the ingredients and how each works. Sodium bicarbonate is the abrasive and pH modifier; the other three are remineralizers that bond to, deposit or supply the mineral of enamel.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 19; T@22699–23946 11/18"},

{id:"OP2-004", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oral", sub:"rinse", concept:"oo-p-nf-rinse-only",
 tags:["practice-q1", "two-facts"], source:"both",
 stem:"Which ingredient is a mouth-rinse agent on slide 20 but is not one of the non-fluoride toothpaste ingredients on slide 19?",
 options:[
  {t:"Sodium bicarbonate", correct:false, why:"It appears on both slides: a toothpaste abrasive and pH modifier (slide 19) and a rinse that raises saliva pH (slide 20)."},
  {t:"Nanohydroxyapatite", correct:false, why:"A toothpaste remineralizer on slide 19; it is not among the rinses of slide 20."},
  {t:"Carbamide peroxide", correct:true, why:"Slide 20 lists carbamide peroxide (10%) in the rinses, for canker sores; it is not on the toothpaste list of slide 19."},
  {t:"Calcium sodium phosphosilicate", correct:false, why:"A toothpaste remineralizer on slide 19; it is not among the rinses of slide 20."}],
 teach:"Sodium bicarbonate is the only non-fluoride ingredient on both slides. Carbamide peroxide, the source of hydrogen peroxide, belongs to the rinses and is used for canker sores (slide 20).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 19, 20; T@25417 11/18"},

{id:"OP2-005", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-p-fg-slide27-set", multi:true,
 tags:["practice-q2", "select-all"], source:"both",
 stem:"Select all that apply. No partial credit will be given. Which of these are drawn on slide 27 as groups that classify the ophthalmic drugs?",
 options:[
  {t:"Imidazoline", correct:true, why:"Drawn on slide 27: the five-membered ring with two nitrogens of clonidine, apraclonidine and brimonidine (slide 31)."},
  {t:"Biguanide", correct:false, why:"The class of chlorhexidine, a mouth-rinse agent (slide 21); it is not drawn on slide 27."},
  {t:"Carbamate", correct:true, why:"Drawn on slide 27: the N-C(=O)-O group, as in carbachol (slide 40)."},
  {t:"Pyridinium salt", correct:false, why:"The class of cetylpyridinium chloride, a mouth-rinse agent (slide 21); it is not drawn on slide 27."},
  {t:"Sulfonamide", correct:true, why:"Drawn on slide 27: sulfur with two oxygens bonded to a nitrogen, the group of the zolamides (slide 36)."},
  {t:"Alkyne", correct:false, why:"No carbon-carbon triple-bond group is drawn on slide 27."},
  {t:"Prostaglandin skeleton", correct:true, why:"Drawn on slide 27: a five-membered carbon ring bearing two long chains, the skeleton of the FP agonists (slide 44)."}],
 teach:"Practice question 2 asks for the groups that classify the anti-glaucoma drugs. Slide 27 draws eight: imidazoline, sulfone, sulfonamide, aryloxypropanolamine, carbamate, ester, and the prostaglandin and steroid skeletons. The rinse classes of slide 21 are not among them.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 21, 27, 31, 36, 40, 44; T@37527–38276 11/18"},

{id:"OP2-006", type:'match', skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-p-fg-drug-class",
 tags:["practice-q2", "match"], source:"both",
 stem:"Match each glaucoma drug to the group or skeleton that classifies it.", left:"Drug", right:"Classifying group",
 pairs:[
  {l:"Timolol maleate", r:"Aryloxypropanolamine", why:"Slide 33: the aromatic ring, then oxygen, then the three-carbon propanolamine chain (T@38276 11/18)."},
  {l:"Brimonidine tartrate", r:"Imidazoline", why:"Slide 31: the alpha 2 agonists are imidazolines (T@37539 11/18)."},
  {l:"Dorzolamide HCl", r:"Sulfonamide", why:"Slide 36: the zolamides are sulfonamides, \"all of them\" (T@11949 11/19)."},
  {l:"Latanoprost", r:"Prostaglandin skeleton", why:"Slide 44: the FP receptor agonists are prostaglandins."}],
 teach:"Each class of glaucoma drug has one classifying group or skeleton on slide 27, so a drawn drug is named by the group it carries: aryloxypropanolamine (beta antagonists), imidazoline (alpha 2 agonists), sulfonamide (carbonic anhydrase inhibitors), prostaglandin (FP agonists).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 27, 31, 33, 36, 44; T@37527–38276 11/18; T@11949 11/19"},

{id:"OP2-007", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-p-fg-draw-carbamate", img:"sk-fg-five",
 tags:["practice-q2", "structure"], source:"both",
 stem:"Five groups are drawn as on slide 27, with plain lines for the carbon ends. Which numbered group is the carbamate?",
 options:[
  {t:"Group 1", correct:false, why:"Imidazoline: a five-membered ring with two nitrogens, one as C=N (slide 31)."},
  {t:"Group 2", correct:false, why:"Sulfone: sulfur with two oxygens and two carbon neighbors, no nitrogen on the sulfur."},
  {t:"Group 3", correct:false, why:"Sulfonamide: sulfur with two oxygens, one carbon and an N-H nitrogen."},
  {t:"Group 4", correct:true, why:"Carbamate: a carbonyl carbon carrying both an NH2 group and an O-alkyl group (slide 40, carbachol)."},
  {t:"Group 5", correct:false, why:"Ester: a carbonyl carbon carrying an O-alkyl group and a carbon, with no nitrogen."}],
 teach:"A carbamate is an ester whose carbonyl carbon also carries a nitrogen: N-C(=O)-O. Group 5, the ester, has a carbon where group 4 has the nitrogen. Group 2 has no nitrogen and group 3 has one on the sulfur.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 27, 40; T@38100 11/18"},

{id:"OP2-008", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"sulf", concept:"oo-p-fg-circled-ab", img:"sk-dorz-circled",
 tags:["practice-q2", "structure"], source:"both",
 stem:"Two groups are marked A and B on the drawn dorzolamide. Which pair names them?",
 options:[
  {t:"A is a sulfone; B is a sulfonamide", correct:false, why:"Reversed: A has a nitrogen on the sulfur (sulfonamide), and B has two carbons on the sulfur (sulfone)."},
  {t:"A is a sulfonamide; B is a sulfone", correct:true, why:"A is the SO2NH2 group that docks with zinc (slide 38); B is the ring sulfur with two oxygens bonded to two carbons, the sulfone of slide 27."},
  {t:"A is a sulfonamide; B is a sulfonamide", correct:false, why:"B has no nitrogen on its sulfur; the sulfur is bonded to two carbons."},
  {t:"A is a carbamate; B is a sulfone", correct:false, why:"A has no carbonyl carbon; it is sulfur with two oxygens and a nitrogen."}],
 teach:"Name a circled sulfur group by what is on the sulfur: a nitrogen gives a sulfonamide, two carbons give a sulfone. Dorzolamide has both; the sulfonamide A is the zinc-binding group, so the drug is classified as a sulfonamide (slide 36).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 27, 36, 38; T@37653–37746 11/18; T@11949 11/19"},

{id:"OP2-009", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"sulf", concept:"oo-p-deethyl-dorz-structure", img:"sk-dorz-meta",
 tags:["practice-q3", "structure"], source:"both",
 stem:"Dorzolamide (the parent drug drawn) undergoes the CYP reaction printed on slide 37. Which numbered structure is the N-deethylated metabolite?",
 options:[
  {t:"Structure 1", correct:false, why:"The ethylamino group is intact; the methyl on the ring carbon next to the sulfone is missing, which is not the step on slide 37."},
  {t:"Structure 2", correct:false, why:"The nitrogen still carries a two-carbon chain, now ending in OH; this is hydroxylation of the ethyl group, not its removal."},
  {t:"Structure 3", correct:true, why:"The ethyl group is removed from the nitrogen, leaving NH2; the sulfonamide, the sulfone and the ring methyl are unchanged."},
  {t:"Structure 4", correct:false, why:"The ethylamino group is intact; the SO2NH2 group is missing, and that group docks with zinc (slide 38)."}],
 teach:"N-deethylation takes the ethyl group off the nitrogen, so the secondary ethylamino group becomes a primary amine. Every other group stays as drawn, including the sulfonamide on the thiophene ring (slide 37).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 36, 37; T@12420 11/19; T@12629 11/19"},

{id:"OP2-010", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"sulf", concept:"oo-p-deethyl-brinz-structure", img:"sk-brinz-meta",
 tags:["practice-q3", "structure", "hard"], source:"both",
 stem:"Brinzolamide (the parent drug drawn) carries an alkyl group on each of two nitrogens. Slide 37 gives CYP N-deethylation. Which numbered structure is its N-deethylated metabolite?",
 options:[
  {t:"Structure 1", correct:false, why:"The methoxypropyl chain is missing from the ring nitrogen, while the ethylamino group is intact; slide 37 names the ethyl, not this chain."},
  {t:"Structure 2", correct:false, why:"The ethylamino group is intact; the SO2NH2 group is missing, and that group docks with zinc (slide 38)."},
  {t:"Structure 3", correct:false, why:"The nitrogen still carries a two-carbon chain, now ending in OH; this is hydroxylation of the ethyl group, not its removal."},
  {t:"Structure 4", correct:true, why:"The ethyl group is removed from the amine nitrogen, leaving NH2; the methoxypropyl chain on the ring nitrogen and the sulfonamide stay."}],
 teach:"The reaction is CYP N-deethylation, a form of N-dealkylation. Brinzolamide has two N-alkyl groups, so the ethyl on the exocyclic amine is the one removed; the methoxypropyl chain on the ring nitrogen stays (slide 37, 11/19).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 36, 37; T@12420 11/19; T@12629 11/19"},

{id:"OP2-011", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"sulf", concept:"oo-p-deethyl-active-role",
 tags:["practice-q3", "adme"], source:"both",
 stem:"The N-deethylated metabolites of dorzolamide and brinzolamide are active. What does that mean for the activity of the parent drugs?",
 options:[
  {t:"The parent drugs are prodrugs that act only through the metabolites", correct:false, why:"The parent drugs are themselves the zolamide carbonic anhydrase inhibitors (slide 36); the prodrugs of slides 45–48 are the esters."},
  {t:"The metabolites probably contribute to the overall activity of the parent drugs", correct:true, why:"Slide 37 prints that the N-deethylated metabolites are active; in lecture they probably contribute to the overall activity of the parent drugs (T@12769 11/19)."},
  {t:"The metabolites compete with the parent drugs and lower the overall effect", correct:false, why:"Active metabolites add to the activity of the parent, as stated on slide 37 and in lecture."},
  {t:"The metabolites are inactive and serve only to eliminate the parent drugs", correct:false, why:"Slide 37 prints the opposite: the N-deethylated metabolites are active."}],
 teach:"Slide 37 pairs two statements: both drugs undergo CYP N-deethylation, and the N-deethylated metabolites are active. In lecture the metabolites probably contribute to the overall activity of the parent drugs.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 37; T@12700 11/19; T@12769 11/19"},

{id:"OP2-012", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-oral", sub:"fluor", concept:"oo-p-fluoride-supported", multi:true,
 tags:["practice-q4", "select-all"], source:"both",
 stem:"Select all that apply. No partial credit will be given. Which statements about fluoride ions in toothpaste or gel do slides 17 and 18 support?",
 options:[
  {t:"They convert hydroxyapatite into fluorapatite", correct:true, why:"Slide 17: fluoride ions convert hydroxyapatite, Ca10(PO4)6(OH)2, into fluorapatite, Ca10(PO4)6F2."},
  {t:"They raise the pH of the mouth and neutralize acid", correct:false, why:"That role belongs to sodium bicarbonate (slide 19); fluoride acts on the mineral of enamel."},
  {t:"They enhance mineral deposition onto enamel", correct:true, why:"Slide 18: fluoride enhances mineral deposition (mineralization), recruiting calcium and phosphate ions from saliva (T@20715 11/18)."},
  {t:"They make enamel less resistant to acid erosion", correct:false, why:"Slide 17: fluorapatite is more resistant to acid erosion than hydroxyapatite."},
  {t:"Above 2 mg/L they can cause enamel fluorosis", correct:true, why:"Slide 18: too much fluoride (>2 mg/L) can cause enamel fluorosis."}],
 teach:"Slides 17 and 18 give three actions of fluoride: it forms fluorapatite from hydroxyapatite, it enhances mineral deposition, and in excess it causes enamel fluorosis. Raising pH belongs to sodium bicarbonate (slide 19).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 17, 18, 19; T@20583–21431 11/18"},

{id:"OP2-013", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-oral", sub:"fluor", concept:"oo-p-fluorosis-look",
 tags:["practice-q4", "two-facts"], source:"both",
 stem:"A child whose enamel is still developing receives too much fluoride. What results, and how does it appear?",
 options:[
  {t:"Enamel dissolves in acid, because fluoride lowers the resistance of the mineral", correct:false, why:"Slide 17 gives the opposite: fluorapatite is more resistant to acid erosion than hydroxyapatite."},
  {t:"Enamel fluorosis, seen as white spots that can later stain brown", correct:true, why:"Slide 18: too much fluoride (>2 mg/L) causes enamel fluorosis; in lecture it begins as white spots and can brown as stains are incorporated (T@21646 11/18)."},
  {t:"Enamel fluorosis, seen as brown stain only, with no white spots", correct:false, why:"In lecture fluorosis starts as white spots; the brown stain comes later (T@21646 11/18)."},
  {t:"Failure of enamel to deposit calcium and phosphate, because fluoride blocks mineralization", correct:false, why:"Slide 18: fluoride enhances mineral deposition (mineralization)."}],
 teach:"Too much fluoride in a child, whose enamel is not fully developed, causes fluorosis: white spots that can later turn brown from stains (11/18). Acid erosion is a different problem, and fluorapatite resists it (slide 17).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 17, 18; T@21431–22143 11/18; T@1871 11/19"},

{id:"OP2-014", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-oral", sub:"fluor", concept:"oo-p-fluoride-not-supported",
 tags:["practice-q4", "two-facts"], source:"both",
 stem:"Which statement about fluoride toothpaste is NOT supported by slides 17 and 18?",
 options:[
  {t:"Fluorapatite is more resistant to acid erosion than hydroxyapatite", correct:false, why:"Supported by slide 17."},
  {t:"Fluoride ions enhance the deposition of calcium and phosphate onto enamel", correct:false, why:"Supported by slide 18 (mineral deposition; T@20715 11/18)."},
  {t:"Fluorapatite dissolves more easily in acid than hydroxyapatite", correct:true, why:"Not supported: slide 17 says fluorapatite is more resistant to acid erosion."},
  {t:"Too much fluoride in children can cause enamel fluorosis", correct:false, why:"Supported by slide 18 (>2 mg/L)."}],
 teach:"The slides link fluoride to three facts: fluorapatite resists acid erosion, mineral deposition is enhanced, and excess fluoride causes fluorosis in children. A statement that fluoride makes enamel dissolve more easily reverses the first fact.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 17, 18; T@18882 11/18; T@20583 11/18"}
);

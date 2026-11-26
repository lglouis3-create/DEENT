/* q36_ooo_1119.js: Exam 3 (Dr. Sikazwe, Lecture 12), new items written after the 11/19 lecture (his first hour of
   /home/user/DEENT/src/decks/DEENT_Lecture_11.19_transcript.txt). Covers what he stressed on 11/19 that the slide-only items of
   q28-q31 did not: the three components of dry eye disease and its anti-inflammatory approaches, the cyclosporine blanks of slide 50
   (no metabolism in the eye = enhanced local activity; low systemic exposure = minimal systemic side effects), lifitegrast, netarsudil
   (ROCK1 and ROCK2, ester prodrug), the aryloxypropanolamine class (count the three carbons; 12 to 24 hours; mixed beta 1 and 2),
   bicarbonate and the CAI generations, aging and the duration ranking of the cholinergic groups, the prostaglandin SAR extras, EP2
   selectivity, and harder versions of the self-assessment questions he kept (3, 4, 5). Source: Sikazwe_OOO_mc.pdf and the 11/19
   transcript. Not covered (he excluded them): slides 52-60 and self-assessment questions 1 and 2; the slide 40 SAR.
   Slide vs speech: slide 42 prints three groups (phosphoryl > carbamate > ester); the four-group order here (amide between the carbamate
   and the ester) is his speech. The slide 39 poll answer was not said aloud. */
QUESTIONS.push(
{id:"OB-001", skill:"tell", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"class", concept:"oo-b-count-three-carbons", dupOf:"OP-001",
 tags:["hard", "tell"], source:"both",
 stem:"Four candidate beta antagonists are described by the atoms that link the aromatic ring to the amine nitrogen. Which one is an aryloxypropanolamine?",
 options:[
  {t:"Ring, O, two carbons (the second bearing OH), then the amine N", correct:false, why:"The oxygen is present, but two carbons make an ethanol, not a propanol: with two carbons the name no longer fits (11/19)."},
  {t:"Ring, O, three carbons (the middle one bearing OH), then N", correct:true, why:"Oxygen next to the ring gives the oxy; three carbons with the alcohol give the propanol; the amine completes the class."},
  {t:"Ring, three carbons (the first bearing OH), then N", correct:false, why:"Three carbons are present, but no oxygen sits next to the ring, so it is not an oxy compound."},
  {t:"Ring, two carbons (the first bearing OH), then N", correct:false, why:"No oxygen and two carbons: this is the arylethanolamine pattern of molecule X (slide 34)."}],
 teach:"Aryl ring, then an oxygen (oxy), then a three-carbon chain carrying the alcohol (propanol), then the amine. Count the three carbons: with two carbons it is no longer propanol (slides 33, 34).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 33, 34; T@3813 11/19"},

{id:"OB-002", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"class", concept:"oo-b-ciliary-first-line",
 tags:["hard", "two-facts"], source:"both",
 stem:"Timolol and the other beta antagonists were once the first-line glaucoma drugs. Which class has replaced them as first line?",
 options:[
  {t:"Prostaglandin (FP) agonists", correct:true, why:"He said the beta antagonists have succumbed to the prostaglandins, which are first line now; the beta antagonists remain an option (11/19, T@3377)."},
  {t:"Alpha 2 agonists", correct:false, why:"The alpha 2 agonists are another class (slide 31), not the one that replaced the beta antagonists."},
  {t:"Carbonic anhydrase inhibitors", correct:false, why:"The zolamides are a separate class (slide 36), not the replacement for the beta antagonists."},
  {t:"Cholinergic agents", correct:false, why:"The cholinergic drugs are a separate class (slides 41-43), not first line."}],
 teach:"The beta antagonists were once all first line; they have given way to the prostaglandins, which are first line now, and they remain an option (slide 33). Their beta receptors sit in the ciliary body, which makes aqueous humor.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 28, 33; T@3377 11/19"},

{id:"OB-003", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"class", concept:"oo-b-duration-12-24",
 tags:["hard", "reasoning"], source:"both",
 stem:"What duration of action do the aryloxypropanolamine beta antagonists have?",
 options:[
  {t:"2 to 4 hours", correct:false, why:"The duration given was longer: 12 to 24 hours."},
  {t:"6 to 8 hours", correct:false, why:"The duration given was longer: 12 to 24 hours."},
  {t:"12 to 24 hours", correct:true, why:"He gave the duration of action of these drugs as 12 to 24 hours, so a few drops are enough (11/19; T@3642)."},
  {t:"48 to 72 hours", correct:false, why:"The duration given was shorter: 12 to 24 hours."}],
 teach:"The beta antagonists have durations of action of 12 to 24 hours, which makes them useful with few drops. They also carry systemic side effects, so little should enter the circulation (slide 33).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 33; T@3997 11/19"},

{id:"OB-004", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"sar", concept:"oo-b-mixed-s-isomer",
 tags:["hard", "two-facts"], source:"both",
 stem:"Most aryloxypropanolamine beta antagonists act at which receptors, and which hydroxy isomer is more active?",
 options:[
  {t:"Beta 1 and beta 2; S isomer", correct:true, why:"Most are mixed acting at beta 1 and beta 2, and the S isomers of the hydroxy carbon are the more active ones (slide 34; T@6622)."},
  {t:"Beta 1 and beta 2; R isomer", correct:false, why:"The mixed action is right, but the S isomers are the more active ones."},
  {t:"Beta 1 only; R isomer", correct:false, why:"Most are mixed acting, and the S isomer is the active one."},
  {t:"Beta 2 only; S isomer", correct:false, why:"The isomer is right, but most of the class is mixed beta 1 and beta 2 acting."}],
 teach:"Slide 34: most have mixed beta 1 plus beta 2 activities; S-OH isomers are preferred; a true para substitution (betaxolol, positions 1 and 4) tends to give better beta 1 selectivity.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 34; T@6622 11/19; T@6865 11/19"},

{id:"OB-005", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"enz", concept:"oo-b-bicarbonate-water-movement",
 tags:["hard", "two-facts"], source:"both",
 stem:"Which statement links bicarbonate to aqueous humor and to the action of the zolamides?",
 options:[
  {t:"Bicarbonate draws water into the posterior chamber; the zolamides speed its production", correct:false, why:"Blocking the enzyme lowers bicarbonate production, so the zolamides slow it."},
  {t:"Bicarbonate carries aqueous humor out of the eye; the zolamides slow its production", correct:false, why:"Bicarbonate is part of aqueous humor production, not of outflow."},
  {t:"Bicarbonate draws water into the posterior chamber; the zolamides slow its production", correct:true, why:"Bicarbonate promotes osmotic water movement into the posterior chamber, so it contributes to aqueous humor production, and the zolamides block the enzyme that makes it (slides 35, 36; 11/19)."},
  {t:"Bicarbonate opens the outflow channels; the zolamides close them", correct:false, why:"The zolamides lower intraocular fluid production; they do not act on the outflow channels (slide 36)."}],
 teach:"CO2 + H2O gives carbonic acid, which dissociates to bicarbonate and H+; the bicarbonate promotes osmotic water movement into the posterior chamber. Blocking carbonic anhydrase lowers that production, so less aqueous humor forms (slide 35).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 35, 36; T@9136 11/19"},

{id:"OB-006", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"sulf", concept:"oo-b-first-vs-second-gen",
 tags:["hard", "two-facts"], source:"both",
 stem:"Acetazolamide and methazolamide differ from brinzolamide and dorzolamide in being ......",
 options:[
  {t:"Polar and given orally in high doses", correct:true, why:"Their ClogP values are low (-0.3 and 0.13); they are polar, given orally at high doses and carry systemic side effects (slide 36; T@10401)."},
  {t:"Lipophilic and given orally in high doses", correct:false, why:"The oral agents are the polar ones."},
  {t:"Polar and instilled topically in small doses", correct:false, why:"The topical, small-dose agents are the lipophilic ones (ClogP 2 and 7)."},
  {t:"Lipophilic and instilled topically in small doses", correct:false, why:"That describes brinzolamide and dorzolamide, not the older drugs."}],
 teach:"Log P separates the generations (slide 36): acetazolamide (-0.3) and methazolamide (0.13) are polar, oral, high-dose and carry systemic side effects; dorzolamide (2) and brinzolamide (7) are lipophilic, topical, small-dose and carry fewer. The second generation is what is mostly used now.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 36; T@10401 11/19"},

{id:"OB-007", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"sulf", concept:"oo-b-second-gen-pair",
 tags:["hard", "tell"], source:"both",
 stem:"Which two carbonic anhydrase inhibitors are the lipophilic, topically instilled second-generation agents?",
 options:[
  {t:"Acetazolamide and methazolamide", correct:false, why:"ClogP -0.3 and 0.13: the polar first-generation pair, given by mouth."},
  {t:"Acetazolamide and dorzolamide", correct:false, why:"Acetazolamide is polar and belongs to the first generation."},
  {t:"Methazolamide and brinzolamide", correct:false, why:"Methazolamide (ClogP 0.13) is polar and belongs to the first generation."},
  {t:"Brinzolamide and dorzolamide", correct:true, why:"Slide 36 prints ClogP 7 and 2 for these two, the lipophilic pair instilled as drops."}],
 teach:"Second generation (lipophilic, topical, small doses, fewer systemic side effects): brinzolamide and dorzolamide. First generation (polar, oral, high doses): acetazolamide and methazolamide.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 36; T@10535 11/19"},

{id:"OB-008", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"sulf", concept:"oo-b-deethylation-product",
 tags:["hard", "two-facts"], source:"both",
 stem:"CYP N-deethylation of dorzolamide acts on its ethylamino group. Which change and which activity result?",
 options:[
  {t:"The ethyl group is lost, leaving an amine; the metabolite is inactive", correct:false, why:"The N-deethylated metabolites are active."},
  {t:"The ethyl group is lost, leaving an amine; the metabolite stays active", correct:true, why:"N-deethylation removes the ethyl group from the nitrogen, and the N-deethylated metabolites are active and contribute to the activity of the parent (slide 37; 11/19)."},
  {t:"A hydroxyl is added to the ethyl group of the nitrogen; the metabolite stays active", correct:false, why:"Deethylation removes the ethyl group; it does not add a hydroxyl to it."},
  {t:"The sulfonamide is cleaved; the metabolite is inactive", correct:false, why:"The reaction is at the nitrogen of the ethylamino group, and the sulfonamide that binds zinc stays."}],
 teach:"Brinzolamide and dorzolamide undergo CYP N-deethylation (the ethyl group leaves the nitrogen); the N-deethylated metabolites are active and probably add to the activity of the parent drugs (slide 37).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 37; T@12420 11/19"},

{id:"OB-009", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-cai", sub:"sulf", concept:"oo-b-binding-counts",
 tags:["hard", "two-facts"], source:"both",
 stem:"In the carbonic anhydrase active site, how many hydrogen bonds hold the sulfonamide group of a zolamide, and what other interaction does it make?",
 options:[
  {t:"Three hydrogen bonds; one ionic interaction with zinc", correct:true, why:"The SO2NH2 group is held by hydrogen bonds and by an ionic (electrostatic) interaction with Zn (slide 38; 11/19)."},
  {t:"Two hydrogen bonds; one ionic interaction with zinc", correct:false, why:"Three hydrogen bonds hold the group, not two."},
  {t:"Three hydrogen bonds; one covalent bond to zinc", correct:false, why:"The zinc interaction is ionic (electrostatic), not covalent, and zinc is important for binding."},
  {t:"One hydrogen bond; three ionic interactions", correct:false, why:"This reverses the counts."}],
 teach:"Slide 38 panel B: three hydrogen bonds (to Gln92 and Thr199) and one ionic (electrostatic) interaction between the SO2NH2 group and Zn2+. Zinc is important for binding.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 38; T@14540 11/19"},

{id:"OB-010", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-chol", sub:"dir", concept:"oo-b-why-not-acetylcholine",
 tags:["hard", "two-facts"], source:"both",
 stem:"Acetylcholine itself cannot serve as the eye drop. Which pair of problems rules it out?",
 options:[
  {t:"It binds poorly to muscarinic receptors, and its charge slows movement of the drug", correct:false, why:"It activates the same muscarinic receptors that the direct-acting agents use."},
  {t:"It is hydrolyzed quickly, and it has low affinity for muscarinic receptors", correct:false, why:"Affinity for the muscarinic receptor is not the problem; the direct-acting agents act at the same receptors."},
  {t:"It is hydrolyzed quickly, and its charge slows movement of the drug", correct:true, why:"Acetylcholine can hydrolyze immediately, which makes it useless, and its charges slow its movement; it also goes anywhere and causes adverse effects (11/19)."},
  {t:"It binds acetylcholinesterase irreversibly, and it is hydrolyzed quickly", correct:false, why:"Irreversible binding to the enzyme is the organophosphate, not acetylcholine."}],
 teach:"Acetylcholine is hydrolyzed at once, its charges slow its movement, and it reaches many sites with adverse effects, so molecules that mimic it (direct-acting agents) are used (slide 40).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 40, 41; T@15712 11/19"},

{id:"OB-011", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-chol", sub:"ind", concept:"oo-b-four-group-rank",
 tags:["hard", "two-facts"], source:"both",
 stem:"Which order ranks four cholinergic functional groups from the longest to the shortest duration of acetylcholinesterase inhibition?",
 options:[
  {t:"Phosphoryl, amide, carbamate, ester", correct:false, why:"The carbamate is the intermediate group, above the amide."},
  {t:"Phosphoryl, carbamate, amide, ester", correct:true, why:"Phosphoryl is longest, the carbamate intermediate, the amide mild and the ester shortest (11/19)."},
  {t:"Carbamate, phosphoryl, amide, ester", correct:false, why:"The phosphoryl group is the longest acting."},
  {t:"Phosphoryl, carbamate, ester, amide", correct:false, why:"The ester is the shortest, below the amide."}],
 teach:"Slide 42 prints phosphoryl > carbamate > ester; in lecture he added the amide as a mild duration between the carbamate and the ester. Slide 68 draws all four groups.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 42, 43, 68; T@21483 11/19"},

{id:"OB-012", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-chol", sub:"ind", concept:"oo-b-aging-antidote",
 tags:["hard", "two-facts"], source:"both",
 stem:"Aging of the echothiophate bond to acetylcholinesterase happens by which change?",
 options:[
  {t:"O-deethylation, leaving a hydroxy group", correct:true, why:"An ethyl group is removed and a hydroxy group is left, a covalent and irreversibly bound enzyme (slide 42; T@19719)."},
  {t:"O-demethylation, leaving a hydroxy group", correct:false, why:"He stressed O-deethylation, not O-demethylation: the group removed is an ethyl group."},
  {t:"Hydrolysis of the bond to the enzyme, which frees the enzyme", correct:false, why:"The bond to the enzyme stays; aging makes it irreversible."},
  {t:"Oxidation of an ethyl group to a carboxylic acid", correct:false, why:"Aging removes the ethyl group; it does not oxidize it."}],
 teach:"Slide 42: the phosphorylated enzyme loses C2H5-OH (aging) and becomes irreversibly inactive. He described it as removal of an ethyl group leaving a hydroxy group, and said the antidote for organophosphate toxicity (2-PAM, handwritten on the slide) works only before this maturation.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 42; T@19719 11/19; T@20270 11/19"},

{id:"OB-013", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-chol", sub:"ind", concept:"oo-b-irreversible-long-activity",
 tags:["hard", "reasoning"], source:"both",
 stem:"Echothiophate, an organophosphate, is a long-acting indirect cholinergic. Why?",
 options:[
  {t:"It is hydrolyzed by esterases to a long-lived metabolite", correct:false, why:"Esterase activation describes the ester prodrugs, not echothiophate (slides 45, 47, 48)."},
  {t:"It binds the muscarinic receptor with high affinity", correct:false, why:"It is an indirect-acting agent: it inhibits acetylcholinesterase rather than binding the receptor."},
  {t:"Its zinc contact holds it in the enzyme", correct:false, why:"Zinc binding is the carbonic anhydrase inhibitor mechanism (slide 38)."},
  {t:"It binds the enzyme covalently, and the bond ages to an irreversible one", correct:true, why:"The phosphoryl group forms a covalent bond that ages to an irreversible one, which gives long activity (slide 42; T@18998)."}],
 teach:"Irreversible inhibitors give long activity. The phosphoryl group of echothiophate forms a covalent bond with the enzyme that matures (ages) into an irreversible one (slide 42).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 41, 42; T@18998 11/19"},

{id:"OB-014", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-chol", sub:"ind", concept:"oo-b-intermediate-and-shortest",
 tags:["hard", "two-facts"], source:"both",
 stem:"Which pair gives the cholinergic functional group with intermediate duration of acetylcholinesterase inhibition and the one with the shortest duration?",
 options:[
  {t:"Amide; ester", correct:false, why:"The amide is mild, below the carbamate; the intermediate group is the carbamate."},
  {t:"Carbamate; ester", correct:true, why:"The carbamate is intermediate and the ester has the shortest duration (slide 42; 11/19)."},
  {t:"Carbamate; amide", correct:false, why:"The ester, not the amide, is the shortest."},
  {t:"Ester; carbamate", correct:false, why:"This reverses them."}],
 teach:"Duration of AChE inhibition: phosphoryl (longest), carbamate (intermediate), amide (mild), ester (shortest). Question-2 (slide 43) asks for the intermediate group.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 42, 43; T@22201 11/19"},

{id:"OB-015", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-chol", sub:"dir", concept:"oo-b-muscarinic-outflow",
 tags:["hard", "two-facts"], source:"both",
 stem:"Direct-acting cholinergics mimic acetylcholine at which receptors of the ciliary body, and what is the effect on aqueous humor?",
 options:[
  {t:"Nicotinic receptors; improved outflow", correct:false, why:"The receptors named for the ciliary body are muscarinic."},
  {t:"Muscarinic receptors; reduced production", correct:false, why:"The effect described is on outflow."},
  {t:"Muscarinic receptors; improved outflow", correct:true, why:"They activate the muscarinic receptors that acetylcholine activates, which improves the outflow of aqueous humor (11/19)."},
  {t:"Nicotinic receptors; reduced production", correct:false, why:"Both parts are off: muscarinic receptors, and improved outflow."}],
 teach:"Muscarinic receptors are in the ciliary body; activating them with direct-acting cholinergics (carbachol, pilocarpine) enhances outflow of aqueous humor (slide 40).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 40; T@15294 11/19"},

{id:"OB-016", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-pg", sub:"pg", concept:"oo-b-pg-lipophilic-potent",
 tags:["hard", "reasoning"], source:"both",
 stem:"What lipophilicity and potency do the prostaglandin analogs have as a class?",
 options:[
  {t:"Highly lipophilic, with a log P above 3, and quite potent", correct:true, why:"He described the analogs as highly lipophilic, with log P values above 3, and quite potent (11/19)."},
  {t:"Highly lipophilic, with a log P above 3, but weakly potent", correct:false, why:"They are described as potent."},
  {t:"Hydrophilic, with a negative log P, and quite potent", correct:false, why:"They are lipophilic, not hydrophilic."},
  {t:"Moderately polar, with a log P near 1.4, and quite potent", correct:false, why:"A log P near 1.4 is that of timolol and carteolol (slide 33), not of the prostaglandin analogs."}],
 teach:"The FP agonists are highly lipophilic (log P above 3) and potent; the esters are prodrugs bioactivated by carboxylesterases to the carboxylic acid (slides 44-46).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 44, 45, 46; T@24079 11/19"},

{id:"OB-017", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-pg", sub:"pg", concept:"oo-b-unstable-and-halogen",
 tags:["hard", "two-facts"], source:"both",
 stem:"Natural PGF2 alpha is too unstable for use, so analogs were made. What does a halogen at C-15 prevent?",
 options:[
  {t:"Oxidation of the 15-OH to a ketone", correct:true, why:"C-15 is OH or a halogen; the halogen prevents oxidation of the 15-OH and stabilizes the molecule (slide 46; T@25877)."},
  {t:"Hydrolysis of the C-1 ester", correct:false, why:"Esters are hydrolyzed for activation (slide 46); the halogen is at C-15, not C-1."},
  {t:"Glucuronidation of the 15-OH", correct:false, why:"The halogen was described as preventing oxidation, not conjugation."},
  {t:"Reduction of the chain double bond", correct:false, why:"The halogen at C-15 prevents oxidation of the 15-OH, not reduction of a double bond."}],
 teach:"Slide 46: C-15 is OH or a halogen (halogens prevent 15-OH oxidation). The natural PGF2 alpha was too unstable, so stable analogs were made.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 44, 46; T@23166 11/19; T@25877 11/19"},

{id:"OB-018", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-pg", sub:"pg", concept:"oo-b-c15-ketone",
 tags:["hard", "reasoning"], source:"both",
 stem:"Oxidation of the C-15 hydroxy group of a PGF2 alpha analog would give which functional group?",
 options:[
  {t:"Aldehyde", correct:false, why:"A secondary alcohol does not give an aldehyde."},
  {t:"Carboxylic acid", correct:false, why:"The carboxylic acid is at C-1, the end that esters or amides replace."},
  {t:"Ester", correct:false, why:"Esters sit at C-1 in the prodrugs and are made from the acid, not from oxidation at C-15."},
  {t:"Ketone", correct:true, why:"Oxidizing the secondary alcohol at C-15 gives a ketone, which is why halogens at C-15 stabilize the molecule (11/19)."}],
 teach:"Halogens at C-15 prevent oxidation of the 15-OH, which would turn it into a ketone (slide 46).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 46; T@25797 11/19"},

{id:"OB-019", skill:"tell", prof:'Sikazwe', tier:'new', topic:"oo-pg", sub:"ep2", concept:"oo-b-ep2-vs-fp",
 tags:["hard", "two-facts"], source:"both",
 stem:"Omidenepag isopropyl is chemically classified as a ......",
 options:[
  {t:"Pyridine sulfonamide", correct:true, why:"With the chemical classification changing, it is no longer a prostaglandin; it is a pyridine sulfonamide (slide 47; T@26887)."},
  {t:"Prostaglandin", correct:false, why:"The prostaglandin analogs are the PGF2 alpha derivatives; omidenepag is no longer a prostaglandin structure."},
  {t:"Isoquinoline", correct:false, why:"Isoquinoline is the class of netarsudil (slide 48)."},
  {t:"Imidazoline", correct:false, why:"The imidazolines are the alpha 2 agonists (slide 31)."}],
 teach:"Omidenepag isopropyl (approved in 2022) is a selective PGE2 (EP2) receptor agonist, a pyridine sulfonamide rather than a prostaglandin structure, and an ester prodrug activated by esterases to a carboxylic acid (slide 47).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 44, 47; T@26887 11/19"},

{id:"OB-020", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-pg", sub:"ep2", concept:"oo-b-ep2-selectivity",
 tags:["hard", "reasoning"], source:"both",
 stem:"Omidenepag isopropyl is selective for the EP2 receptor. What does that selectivity minimize?",
 options:[
  {t:"Activation by esterases", correct:false, why:"Esterase hydrolysis still activates the prodrug."},
  {t:"Entry through the cornea", correct:false, why:"Selectivity is about which receptors the drug activates, not how it enters."},
  {t:"Off-target activity", correct:true, why:"Receptor selectivity minimizes off-target activities (11/19)."},
  {t:"Binding to carbonic anhydrase", correct:false, why:"The drug does not act on carbonic anhydrase; it acts on the EP2 receptor."}],
 teach:"He said a selective receptor target minimizes off-target activities (slide 47).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 47; T@26386 11/19"},

{id:"OB-021", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-pg", sub:"rock", concept:"oo-b-rock-isoforms-activation",
 tags:["hard", "two-facts"], source:"both",
 stem:"Netarsudil is an isoquinoline Rho kinase inhibitor. Which enzymes does the class act on, and how is the prodrug activated?",
 options:[
  {t:"ROCK1 and ROCK2; CYP N-deethylation to the active metabolite", correct:false, why:"N-deethylation is the metabolism of brinzolamide and dorzolamide (slide 37)."},
  {t:"Carbonic anhydrase I and II; esterase hydrolysis to the active metabolite", correct:false, why:"Carbonic anhydrase is the zinc enzyme of the zolamides (slide 35), not the Rho kinase target."},
  {t:"ROCK1 and ROCK2; aging of a phosphorylated enzyme", correct:false, why:"Aging belongs to the organophosphate and acetylcholinesterase (slide 42)."},
  {t:"ROCK1 and ROCK2; esterase hydrolysis to the active metabolite", correct:true, why:"He named the two known Rho kinases, ROCK1 and ROCK2, and said the ester prodrug is hydrolyzed by CE enzymes to the active metabolite (slide 48; 11/19)."}],
 teach:"Slide 48: netarsudil (ClogP 5) is an ester prodrug needing esterase hydrolysis to netarsudil-M1. He said there are mostly two Rho kinases, ROCK1 and ROCK2. (The slide arrow reads DMEs?; he said CE enzymes.)",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 48; T@27850 11/19; T@27628 11/19"},

{id:"OB-022", skill:"patho", prof:'Sikazwe', tier:'new', topic:"oo-beyond", sub:"de", lowYield:true, note:"Not on Exam 3: his emailed reading list for Exam 3 (11/20) ends at slide 48; dry eye disease is slides 49–51. Kept for optional practice.", concept:"oo-b-ded-three-components",
 tags:["hard", "reasoning"], source:"both",
 stem:"Which three components make up dry eye disease?",
 options:[
  {t:"Low tear production, high tear evaporation, ocular surface inflammation", correct:true, why:"He gave reduced tear production, increased tear evaporation and ocular surface inflammation (11/19)."},
  {t:"Low tear production, high tear drainage, ocular surface infection", correct:false, why:"Evaporation and inflammation were given, not drainage and infection."},
  {t:"High tear production, high tear evaporation, ocular surface inflammation", correct:false, why:"Tear production is reduced, not raised."},
  {t:"Low tear production, low tear evaporation, ocular surface inflammation", correct:false, why:"Evaporation is increased, which leads to dryness."}],
 teach:"Dry eye has three components: reduced tear production, increased tear evaporation and ocular surface inflammation; the treatments target those components (slides 49-51).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 49, 50, 51; T@28220 11/19"},

{id:"OB-023", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-beyond", sub:"de", lowYield:true, note:"Not on Exam 3: his emailed reading list for Exam 3 (11/20) ends at slide 48; dry eye disease is slides 49–51. Kept for optional practice.", concept:"oo-b-ded-target-component",
 tags:["hard", "two-facts"], source:"both",
 stem:"Cyclosporine and lifitegrast act on which component of dry eye disease, and with what effect on T cells?",
 options:[
  {t:"Reduced tear production; less T-cell activation", correct:false, why:"The T-cell effect is right, but these drugs work on the inflammation component."},
  {t:"Ocular surface inflammation; less T-cell activation", correct:true, why:"Both lower T-cell activation to reduce inflammation, one through calcineurin and one through the LFA-1 cascade (slides 49-51; 11/19)."},
  {t:"Increased tear evaporation in the eye; more T-cell activation", correct:false, why:"They do not act on evaporation, and they lower T-cell activation."},
  {t:"Ocular surface inflammation; more T-cell activation", correct:false, why:"The inflammation is the target, but T-cell activation falls."}],
 teach:"Anti-inflammatory approaches in dry eye: calcineurin inhibition (cyclosporine) and the LFA-1 cascade (lifitegrast) both lead to less T-cell activation; short-term steroids are a third; artificial tears if these fail.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 49, 50, 51; T@29086 11/19"},

{id:"OB-024", skill:"adverse", prof:'Sikazwe', tier:'new', topic:"oo-beyond", sub:"de", lowYield:true, note:"Not on Exam 3: his emailed reading list for Exam 3 (11/20) ends at slide 48; dry eye disease is slides 49–51. Kept for optional practice.", concept:"oo-b-ded-steroid-short-term",
 tags:["hard", "reasoning"], source:"both",
 stem:"Where do topical steroids fit among the anti-inflammatory approaches to dry eye disease?",
 options:[
  {t:"Long-term anti-inflammatory use, in place of calcineurin inhibition and lifitegrast", correct:false, why:"They are short-term, not long-term."},
  {t:"Short-term replacement of tears when other drugs fail", correct:false, why:"Artificial tears are what he named for when these fail."},
  {t:"Short-term anti-inflammatory use, because prolonged use harms the eye", correct:true, why:"He said steroids cannot be used on a prolonged basis and are short-term (11/19)."},
  {t:"Long-term blockade of ICAM-1 binding to LFA-1", correct:false, why:"That is lifitegrast, not a steroid."}],
 teach:"Dry eye approaches: calcineurin inhibition, the LFA-1 cascade, short-term steroids (not for prolonged use), then artificial tears if these fail (slide 49).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 49; T@29379 11/19"},

{id:"OB-025", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-beyond", sub:"de", lowYield:true, note:"Not on Exam 3: his emailed reading list for Exam 3 (11/20) ends at slide 48; dry eye disease is slides 49–51. Kept for optional practice.", concept:"oo-b-cyclosporine-chain",
 tags:["hard", "two-facts"], source:"both",
 stem:"For cyclosporine, which pair of consequences follows from no metabolism in the eye and from low systemic exposure?",
 options:[
  {t:"Reduced local activity; minimal systemic side effects", correct:false, why:"Without metabolism in the eye, local activity is enhanced."},
  {t:"Enhanced local activity; minimal systemic side effects", correct:true, why:"No metabolism in the eye gives enhanced local activity, and low systemic exposure gives minimal systemic side effects (slide 50; 11/19)."},
  {t:"Enhanced local activity; more systemic side effects", correct:false, why:"Low systemic exposure means fewer systemic side effects."},
  {t:"Reduced local activity; more systemic side effects and more exposure", correct:false, why:"Both consequences are reversed."}],
 teach:"Slide 50, answered in lecture: no metabolism in the eye = enhanced local activity; low systemic exposure = minimal systemic side effects.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 50; T@30502 11/19"},

{id:"OB-026", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-beyond", sub:"de", lowYield:true, note:"Not on Exam 3: his emailed reading list for Exam 3 (11/20) ends at slide 48; dry eye disease is slides 49–51. Kept for optional practice.", concept:"oo-b-cyclosporine-penetrates-local",
 tags:["hard", "reasoning"], source:"both",
 stem:"What follows for cyclosporine from a log P of 4 and no metabolism in the eye?",
 options:[
  {t:"It penetrates the eye and is activated there by esterases", correct:false, why:"No metabolism in the eye was the point; esterase activation describes the ester prodrugs."},
  {t:"It penetrates the eye and is converted to active metabolites", correct:false, why:"No metabolism in the eye means it is not converted there."},
  {t:"It penetrates the eye and its activity stays local", correct:true, why:"The lipophilic drug can penetrate the eye, and with no metabolism there its activity stays local (slide 50; 11/19)."},
  {t:"It cannot penetrate the eye, so it acts through the conjunctiva", correct:false, why:"A log P of 4 means it can penetrate the eye."}],
 teach:"Cyclosporine is lipophilic (log P 4), so it can penetrate the eye; with no ocular metabolism it stays active locally and little reaches the circulation.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 50; T@29798 11/19"},

{id:"OB-027", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-beyond", sub:"de", lowYield:true, note:"Not on Exam 3: his emailed reading list for Exam 3 (11/20) ends at slide 48; dry eye disease is slides 49–51. Kept for optional practice.", concept:"oo-b-lifitegrast-fate",
 tags:["hard", "two-facts"], source:"both",
 stem:"How much of lifitegrast reaches the circulation, and what happens to what does?",
 options:[
  {t:"It is minimal, and what enters the circulation is N-deethylated by CYP", correct:false, why:"N-deethylation is the metabolism of brinzolamide and dorzolamide (slide 37)."},
  {t:"It is high, and what enters the circulation is eliminated unchanged", correct:false, why:"The exposure is minimal."},
  {t:"It is minimal, and what enters the circulation is hydrolyzed by esterases", correct:false, why:"Esterase hydrolysis activates ester prodrugs; lifitegrast is eliminated mostly unchanged."},
  {t:"It is minimal, and what enters the circulation is eliminated unchanged", correct:true, why:"Lifitegrast has minimal systemic exposure, and what reaches the circulation leaves intact (slide 51; 11/19)."}],
 teach:"Slide 51: lifitegrast (a phenylalanine, log P 4) is eliminated mostly unchanged; in lecture, minimal systemic exposure, and whatever gets into the circulation gets out intact.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 51; T@31409 11/19"},

{id:"OB-028", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-ac", sub:"self", concept:"oo-b-selfassess-cai-zinc", dupOf:"OA-050",
 tags:["hard", "two-facts"], source:"both",
 stem:"A new carbonic anhydrase inhibitor should bind in the active site. Which group should its structure carry, and which metal does that group contact?",
 options:[
  {t:"Sulfonamide; zinc", correct:true, why:"The SO2NH2 group forms ionic and hydrogen-bond interactions with zinc and Thr199, and the functional group is essential for binding (slide 38; 11/19)."},
  {t:"Sulfone; zinc", correct:false, why:"A sulfone has no nitrogen on the sulfur; the binding group is the sulfonamide."},
  {t:"Carbamate; zinc", correct:false, why:"The carbamate is a cholinergic group (slide 42)."},
  {t:"Sulfonamide; calcium", correct:false, why:"The group is right, but the metal in the active site is zinc."}],
 teach:"Self-assessment Question 3 (slide 65): the key functional group in the carbonic anhydrase inhibitor chemical basis of drug action is the sulfonamide.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 36, 38, 65; T@12023 11/19"},

{id:"OB-029", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-ac", sub:"self", concept:"oo-b-selfassess-imidazoline-class", dupOf:"OA-051",
 tags:["hard", "two-facts"], source:"both",
 stem:"An imidazoline ring is present in which class of eye drugs?",
 options:[
  {t:"Alpha 2 agonists", correct:true, why:"The imidazoline is present in the alpha 2 agonists (clonidine, apraclonidine, brimonidine) (slides 31, 66; 11/19)."},
  {t:"Beta antagonists", correct:false, why:"The beta antagonists are aryloxypropanolamines (slide 33)."},
  {t:"Prostaglandin receptor agonists", correct:false, why:"The prostaglandins have a cyclopentane core (slide 44)."},
  {t:"Carbonic anhydrase inhibitors", correct:false, why:"The carbonic anhydrase inhibitors are sulfonamides (slide 36)."}],
 teach:"Self-assessment Question 4 (slide 66): the drawn imidazoline is present in the alpha 2 agonists.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 66; T@34671 11/19"},

{id:"OB-030", skill:"tell", prof:'Sikazwe', tier:'new', topic:"oo-ac", sub:"self", concept:"oo-b-selfassess-pg-core", dupOf:"OA-052",
 tags:["hard", "two-facts"], source:"both",
 stem:"A cyclopentane ring carries two adjacent chains. Which class has this core, and which receptor do its members activate?",
 options:[
  {t:"Prostaglandin; the muscarinic receptor", correct:false, why:"The prostaglandin analogs activate the FP receptor; the muscarinic receptor is the target of acetylcholine and its mimics."},
  {t:"Prostaglandin; the FP receptor", correct:true, why:"The prostaglandin core is a cyclopentane with two chains, and the analogs activate the PGF (FP) receptor (slides 44, 67; 11/19)."},
  {t:"Imidazoline; the alpha 2 receptor", correct:false, why:"The imidazoline is a five-membered ring with two nitrogens, not a cyclopentane carrying chains."},
  {t:"Aryloxypropanolamine; the beta receptor", correct:false, why:"The aryloxypropanolamines carry an aromatic ring, and they block beta receptors."}],
 teach:"Self-assessment Question 5 (slide 67): the drawn core is the prostaglandin skeleton, present in the prostaglandin receptor agonists (slide 44).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 44, 67; T@34892 11/19"},

{id:"OB-031", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-ac", sub:"self", concept:"oo-b-selfassess-irreversible-rank", dupOf:"OA-053",
 tags:["hard", "two-facts"], source:"both",
 stem:"In cholinergic drugs, which functional group exhibits irreversible acetylcholinesterase inhibition?",
 options:[
  {t:"Carbamate", correct:false, why:"The carbamate has an intermediate duration; it is not irreversible."},
  {t:"Ester", correct:false, why:"The ester has the shortest duration; it is not irreversible."},
  {t:"Amide", correct:false, why:"The amide has a mild duration; it is not irreversible."},
  {t:"Phosphoryl", correct:true, why:"Slide 68 asks for the irreversible group, the phosphoryl group (the one he called Z), which has the longest duration (11/19)."}],
 teach:"Self-assessment Question 5, second part (slide 68): the phosphoryl group (the one he called Z) gives irreversible inhibition; the other groups drawn are the amide, the ester and the carbamate.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 42, 68; T@35098 11/19"}
);

/* q29_ooo_oph_a.js: Exam 3 (Dr. Sikazwe, Lecture 11), ophthalmic chemical classes, glaucoma, eye ADME, alpha 2 agonists, beta antagonists.
   Sources: Sikazwe_OOO_mc.pdf slides 27-34 ("slide N" = PDF page); DEENT_Lecture_11.18_transcript.txt from "There are a whole bunch of
   chemical classes" (T@37527) to the end of the SAR (T@50500); slides 33-34 are slide-only (taught 11/19, transcript not yet available).
   Notes: the lecture's "Cell phone" is read as sulfone; slide 27 shows S(=O)2 between two methyls, so the key rests on the slide.
   The lecture's "roclonidine" is apraclonidine; items use the slide structure (H2N on the ring) and ClogP, not the spoken name.
   Normal IOP is not asked (T@40076). Slide 32 prints "X=NH2"; the slide 31 structures show NH, which is keyed. No half-life item:
   the transcript's half-lives (8 h, 3 to 4 h) cannot be tied to a drug from the slide. Items OP-025, OP-029, OP-037, OP-044
   were removed as duplicates of OP-019/020, OP-028, OP-036, OP-043 (verification pass). */
QUESTIONS.push(
{id:"OP-001", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-class-levobunolol",
 tags:["class", "naming"], source:"both",
 stem:"Levobunolol HCl is chemically classified as a(n) ......",
 options:[
  {t:"Imidazoline", correct:false, why:"Slide 31: the imidazolines are clonidine, apraclonidine and brimonidine."},
  {t:"Aryloxypropanolamine", correct:true, why:"Slide 33: levobunolol HCl (Betagan) is drawn with an aromatic ring joined through O to a three-carbon alcohol and amine chain; T@38474 and T@38887: he asks what chemical class a drug belongs to."},
  {t:"Arylethanolamine", correct:false, why:"Slide 34: the arylethanolamines have the ring bonded directly to a two-carbon alcohol and amine chain, with no oxygen between."},
  {t:"Zolamide", correct:false, why:"Slide 36: the zolamides are the sulfonamide carbonic anhydrase inhibitors, such as dorzolamide."}],
 teach:"The aryloxypropanolamines (slides 33, 34) are the beta antagonists: timolol, betaxolol, levobunolol, carteolol. He said the question could be simply what chemical class a drug belongs to (T@38887).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 33, 34, 36; T@38474 11/18; T@38887 11/18"},

{id:"OP-002", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-name-parts",
 tags:["class", "naming"], source:"both",
 stem:"In the name aryloxypropanolamine, which structural features do the parts \"oxy\" and \"propanol\" stand for?",
 options:[
  {t:"An oxygen next to the aromatic ring; three carbons with the alcohol", correct:true, why:"T@38474: the oxygen sits right next to the aromatic group (\"oxy\"); the rest, three carbons carrying the alcohol and the amine, is the propanolamine."},
  {t:"An oxygen inside the aromatic ring; three carbons carrying the alcohol", correct:false, why:"The oxygen of \"oxy\" is outside the ring, joining the ring to the chain (slide 27)."},
  {t:"An oxygen next to the aromatic ring; two carbons carrying the alcohol", correct:false, why:"Two carbons would be an ethanolamine (the arylethanolamines of slide 34); the class name says propanol, three carbons."},
  {t:"An oxygen next to the amine; three carbons carrying the alcohol", correct:false, why:"The oxygen sits next to the aromatic group, at the ring end of the chain, not at the amine (T@38474)."}],
 teach:"Aryl = aromatic ring; oxy = oxygen next to it; propanolamine = three carbons, with the alcohol and the amine (T@38474, slide 27). Count the three carbons: with two carbons it is no longer propanol (11/19).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 27, 33; T@38474 11/18; T@3642 11/19; T@3813 11/19"},

{id:"OP-003", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-imidazoline",
 tags:["class"], source:"both",
 stem:"A drug contains a five-membered ring with two nitrogens, one as NH and one as C=N, and two saturated ring carbons. Which functional group or class is this?",
 options:[
  {t:"Imidazole", correct:false, why:"The aromatic imidazole ring has no saturated carbons; the drawn ring has two saturated carbons, which makes it an imidazoline."},
  {t:"Pyrrolidine", correct:false, why:"A pyrrolidine has one nitrogen and no C=N."},
  {t:"Imidazoline", correct:true, why:"Slide 27 first structure; slide 31: the ring in clonidine, apraclonidine and brimonidine (T@37527)."},
  {t:"Piperazine", correct:false, why:"A piperazine is a six-membered ring with two nitrogens."}],
 teach:"The imidazoline ring (slide 27) is the group in the alpha 2 agonists clonidine, apraclonidine and brimonidine (slide 31).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 27, 31; T@37527 11/18"},

{id:"OP-004", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-sulfonamide",
 tags:["class"], source:"both",
 stem:"A group has a sulfur atom carrying two oxygens, bonded to one carbon and to an N-H nitrogen. What is the functional group?",
 options:[
  {t:"Sulfone", correct:false, why:"A sulfone has the sulfur bonded to two carbons and no nitrogen (slide 27, second structure)."},
  {t:"Sulfonamide", correct:true, why:"Slide 27 (third structure); T@37746: sulfonamide, \"very common\", like carboxylic acid and ester."},
  {t:"Sulfoxide", correct:false, why:"A sulfoxide has one oxygen on the sulfur, not two."},
  {t:"Carbamate", correct:false, why:"A carbamate has a carbonyl carbon with N and O attached (slide 27), with no sulfur."}],
 teach:"Sulfonamide = S(=O)2 with a nitrogen; sulfone = S(=O)2 flanked by two carbons (slide 27).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 27; T@37746 11/18"},

{id:"OP-005", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-sulfone",
 tags:["class"], source:"both",
 stem:"A group has a sulfur atom carrying two oxygens and bonded to two carbons, with no nitrogen on the sulfur. What is it?",
 options:[
  {t:"Sulfonamide", correct:false, why:"A sulfonamide has a nitrogen on the sulfur (slide 27, third structure)."},
  {t:"Sulfoxide", correct:false, why:"A sulfoxide has one oxygen on the sulfur; the lecture contrasts it with the sulfone (T@37683)."},
  {t:"Thioether", correct:false, why:"A thioether has a sulfur with no oxygens."},
  {t:"Sulfone", correct:true, why:"Slide 27, second structure: a sulfur with two oxygens between two carbons."}],
 teach:"Sulfone: S(=O)2 between two carbons. Sulfonamide: S(=O)2 with a nitrogen. The lecture warns against calling the sulfone a sulfoxide (T@37683).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 27; T@37653 11/18"},

{id:"OP-006", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-carbamate",
 tags:["class"], source:"slide",
 stem:"A group has a carbonyl carbon that carries an NH2 group and an O-CH3 group. What is the functional group?",
 options:[
  {t:"Carbamate", correct:true, why:"Slide 27: H2N-C(=O)-O-CH3, a carbonyl carbon bonded to a nitrogen and to O-alkyl."},
  {t:"Ester", correct:false, why:"An ester has the carbonyl carbon bonded to a carbon and to O-alkyl (slide 27, sixth structure); no nitrogen."},
  {t:"Amide", correct:false, why:"An amide has the carbonyl carbon bonded to a nitrogen but carries no O-alkyl group."},
  {t:"Carboxylic acid", correct:false, why:"A carboxylic acid carries an OH on the carbonyl carbon."}],
 teach:"Carbamate = N-C(=O)-O. Ester = C-C(=O)-O (slide 27).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 27"},

{id:"OP-007", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-ester",
 tags:["class", "reverse"], source:"slide",
 stem:"Which functional group is drawn as CH3-C(=O)-O-CH3?",
 options:[
  {t:"Carbamate", correct:false, why:"A carbamate has a nitrogen on the carbonyl carbon: H2N-C(=O)-O-CH3 (slide 27)."},
  {t:"Carboxylic acid", correct:false, why:"A carboxylic acid carries an OH on the carbonyl carbon, with no O-alkyl group."},
  {t:"Ester", correct:true, why:"Slide 27: the ester is C-C(=O)-O-alkyl, here CH3-C(=O)-O-CH3."},
  {t:"Sulfone", correct:false, why:"A sulfone is a sulfur with two oxygens between two carbons (slide 27), not a carbonyl."}],
 teach:"Ester = C-C(=O)-O-alkyl; carbamate = N-C(=O)-O-alkyl (slide 27). Know what each group looks like (T@37527).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 27; T@37527 11/18"},

{id:"OP-008", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-prostaglandin-skeleton",
 tags:["class"], source:"both",
 stem:"A skeleton has a single five-membered carbon ring with two long carbon chains on adjacent ring carbons. Which chemical class has this skeleton?",
 options:[
  {t:"Steroid", correct:false, why:"A steroid skeleton has four fused rings (slide 27, bottom right)."},
  {t:"Prostaglandin", correct:true, why:"Slide 27 (cyclopentane with two chains); T@38276: \"prostaglandins\", the newer first-line agents."},
  {t:"Aryloxypropanolamine", correct:false, why:"This class has an aromatic ring and a propanolamine chain (slide 27)."},
  {t:"Imidazoline", correct:false, why:"The imidazoline is a five-membered ring with two nitrogens, not a carbon ring with chains."}],
 teach:"Prostaglandin skeleton: cyclopentane carrying two side chains (slide 27). T@38276 calls it the newer first-line class.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 27; T@38276 11/18"},

{id:"OP-009", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-steroid-skeleton",
 tags:["class"], source:"both",
 stem:"A skeleton is made of four fused carbon rings: three six-membered and one five-membered, with two methyl groups at ring junctions. What is its chemical class?",
 options:[
  {t:"Prostaglandin", correct:false, why:"A prostaglandin has one five-membered ring with two chains (slide 27), not fused rings."},
  {t:"Aryl imidazoline", correct:false, why:"The aryl imidazolines have an aromatic ring joined to an imidazoline (slide 31)."},
  {t:"Aryloxypropanolamine", correct:false, why:"This class has a side chain on an aromatic ring (slide 27), not four fused carbon rings."},
  {t:"Steroid", correct:true, why:"Slide 27, bottom right structure; T@38177: \"we can call this as what? steroid\"."}],
 teach:"The steroid skeleton is the four-ring fused framework with two methyls (slide 27).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 27; T@38177 11/18"},

{id:"OP-010", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-sulfur-groups", multi:true,
 tags:["class", "list"], source:"slide",
 stem:"Which two of these groups contain a sulfur atom? Select all that apply.",
 options:[
  {t:"Carbamate", correct:false, why:"The carbamate is N-C(=O)-O; it has no sulfur."},
  {t:"Sulfonamide", correct:true, why:"Slide 27: sulfur with two oxygens and a nitrogen."},
  {t:"Ester", correct:false, why:"The ester is C-C(=O)-O; it has no sulfur."},
  {t:"Sulfone", correct:true, why:"Slide 27: sulfur with two oxygens between two carbons."}],
 teach:"Sulfonamide and sulfone each have an S(=O)2; carbamate and ester are built on a carbonyl carbon (slide 27).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 27"},

{id:"OP-011", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-same-class-betaxolol",
 tags:["class"], source:"both",
 stem:"Which drug belongs to the same chemical class as betaxolol?",
 options:[
  {t:"Brimonidine", correct:false, why:"Slide 31: brimonidine is an imidazoline."},
  {t:"Latanoprost", correct:false, why:"Slide 44: latanoprost is a prostaglandin."},
  {t:"Dorzolamide HCl", correct:false, why:"Slide 36: dorzolamide is a sulfonamide (a zolamide)."},
  {t:"Timolol", correct:true, why:"Slide 33: timolol, betaxolol, levobunolol and carteolol are all aryloxypropanolamines."}],
 teach:"Aryloxypropanolamines (slide 33): timolol, betaxolol, levobunolol, carteolol. Imidazolines (slide 31): clonidine, apraclonidine, brimonidine. Zolamides (slide 36). Prostaglandins (slide 44).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 33, 36, 44; T@38474 11/18"},

{id:"OP-012", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"fg", concept:"oo-fg-same-class-clonidine",
 tags:["class"], source:"both",
 stem:"Which drug belongs to the same chemical class as clonidine?",
 options:[
  {t:"Timolol", correct:false, why:"Slide 33: timolol is an aryloxypropanolamine."},
  {t:"Brimonidine", correct:true, why:"Slide 31: clonidine, apraclonidine and brimonidine are imidazolines (T@49411: \"all these are ... imidazolines\")."},
  {t:"Latanoprost", correct:false, why:"Slide 44: latanoprost is a prostaglandin."},
  {t:"Carteolol", correct:false, why:"Slide 33: carteolol is an aryloxypropanolamine."}],
 teach:"Imidazolines: clonidine, apraclonidine, brimonidine (slide 31).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 33, 44; T@49411 11/18"},

{id:"OP-013", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-class-brimonidine",
 tags:["class", "mech"], source:"both",
 stem:"What are the chemical class and the receptor action of brimonidine?",
 options:[
  {t:"Imidazoline; beta antagonist", correct:false, why:"Slide 31 groups the imidazolines as alpha 2 agonists; the beta antagonists are the aryloxypropanolamines (slide 33)."},
  {t:"Aryloxypropanolamine; alpha 2 agonist", correct:false, why:"Brimonidine has no propanolamine chain; the aryloxypropanolamines are beta antagonists (slide 33)."},
  {t:"Aryloxypropanolamine; beta antagonist", correct:false, why:"That pair describes timolol (slide 33), not brimonidine."},
  {t:"Imidazoline; alpha 2 agonist", correct:true, why:"Slide 31: brimonidine is listed under imidazolines, alpha 2-receptor agonists."}],
 teach:"Imidazolines are alpha 2 agonists (slide 31); aryloxypropanolamines are beta antagonists (slide 33).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 33; T@49411 11/18"},

{id:"OP-014", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"class", concept:"oo-bb-class-timolol",
 tags:["class", "mech"], source:"slide",
 stem:"Timolol carries a thiadiazole ring bonded through an oxygen to a three-carbon chain with an alcohol and a tert-butylamino group. What are its chemical class and its effect on aqueous humor?",
 options:[
  {t:"Aryloxypropanolamine; decreases production", correct:true, why:"Slide 33: timolol maleate, aryloxypropanolamine, beta antagonist that decreases aqueous humor production."},
  {t:"Aryloxypropanolamine; increases aqueous humor outflow", correct:false, why:"Slide 33 gives the beta antagonists a decrease in aqueous humor production, not an increase in outflow."},
  {t:"Arylethanolamine; decreases aqueous humor production", correct:false, why:"The chain is attached through an oxygen and has three carbons, so the class is the aryloxypropanolamine (slide 34 defines the arylethanolamine)."},
  {t:"Imidazoline; decreases aqueous humor production", correct:false, why:"An imidazoline has no propanolamine chain (slide 31)."}],
 teach:"Slide 33: aryloxypropanolamines are beta antagonists that lower aqueous humor production; the heteroaryl ring of timolol counts as the aryl.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 33, 34; T@3086 11/19"},

{id:"OP-015", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"gl", concept:"oo-gl-why-pressure",
 tags:["patho"], source:"both",
 stem:"Aqueous humor is produced continuously. What causes the intraocular pressure to rise in glaucoma?",
 options:[
  {t:"A fall in the production of aqueous humor", correct:false, why:"A fall in production would lower the pressure; the treatment goals decrease production (slide 28)."},
  {t:"A rise in the permeability of the conjunctiva", correct:false, why:"The conjunctiva is a route for drug absorption (slide 29), not the cause of raised pressure."},
  {t:"Resistance to the outflow of aqueous humor", correct:true, why:"Slide 28: the problem is raised IOP; T@40944: if there is a blockade or resistance to the outflow, the pressure comes up."},
  {t:"A rise in the outflow of aqueous humor", correct:false, why:"More outflow lowers the pressure; the goals include an increase in outflow (slide 28)."}],
 teach:"Slide 28: raised IOP is the problem. Pressure rises when aqueous humor is produced and cannot leave (T@40944).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 28; T@40944 11/18"},

{id:"OP-016", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"gl", concept:"oo-gl-production-only",
 tags:["mech"], source:"both",
 stem:"Which class of glaucoma drugs lowers intraocular pressure only by decreasing aqueous humor production?",
 options:[
  {t:"Prostaglandin receptor agonists", correct:false, why:"Slide 44: they increase fluid outflow."},
  {t:"Cholinergic agents", correct:false, why:"Slide 40: the direct-acting cholinergics increase fluid outflow."},
  {t:"Beta antagonists", correct:true, why:"Slide 33: beta antagonists decrease aqueous humor production; slide 28 lists decreased production as one treatment goal."},
  {t:"Rho kinase inhibitors", correct:false, why:"Slide 48: netarsudil increases fluid outflow."}],
 teach:"Slide 28 goals: decrease production, increase outflow, or both. Beta antagonists: production down (slide 33). Prostaglandin agonists, direct cholinergics and Rho kinase inhibitors: outflow up (slides 44, 40, 48).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 28, 33, 40, 44, 48; T@41181 11/18"},

{id:"OP-017", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"gl", concept:"oo-gl-adrenergic-pair",
 tags:["class"], source:"both",
 stem:"Which pair of drug classes are the adrenergic agents used for glaucoma?",
 options:[
  {t:"Alpha 1 agonists and beta agonists", correct:false, why:"Slide 28 lists the alpha 2 agonists and the beta antagonists."},
  {t:"Alpha 2 antagonists and beta agonists", correct:false, why:"Slide 28 lists the alpha 2 agonists and the beta antagonists."},
  {t:"Alpha 1 antagonists and beta antagonists", correct:false, why:"Slide 28 lists the alpha 2 agonists, not alpha 1 antagonists, with the beta antagonists."},
  {t:"Alpha 2 agonists and beta antagonists", correct:true, why:"Slide 28 lists adrenergic agents as alpha 2 agonists and beta antagonists; T@41581."}],
 teach:"Adrenergic agents on slide 28: alpha 2 agonists and beta antagonists. The others on the list are CAIs, cholinergic agents, prostaglandin receptor agonists and Rho kinase inhibitors.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 28; T@41581 11/18"},

{id:"OP-018", skill:"mech", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-vs-bb-mech",
 tags:["mech", "two-facts"], source:"slide",
 stem:"Brimonidine and timolol both lower intraocular pressure. How do they differ in their effect on aqueous humor?",
 options:[
  {t:"Brimonidine lowers production and raises outflow; timolol lowers production", correct:true, why:"Slide 31: alpha 2 agonists decrease intraocular fluid production and increase outflow; slide 33: beta antagonists decrease aqueous humor production."},
  {t:"Brimonidine lowers production; timolol raises outflow", correct:false, why:"Slide 33 gives timolol a decrease in production; slide 31 gives brimonidine both effects."},
  {t:"Brimonidine raises outflow without changing production; timolol lowers production and raises outflow", correct:false, why:"Slide 31 gives brimonidine a decrease in production as well as an increase in outflow; slide 33 gives timolol a decrease in production."},
  {t:"Both raise outflow without changing production", correct:false, why:"Both lower production (slides 31 and 33); brimonidine raises outflow as well."}],
 teach:"Alpha 2 agonists: production down and outflow up (slide 31). Beta antagonists: production down (slide 33).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 33"},

{id:"OP-019", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"adme", concept:"oo-adme-cornea-hydrophilic",
 tags:["pk"], source:"both",
 stem:"A large, hydrophilic drug is instilled in the eye. Through which route does most of it enter?",
 options:[
  {t:"Cornea", correct:false, why:"Slide 30: the cornea is the entry route for lipophilic drugs; T@45075: primary route for small lipophilic drugs."},
  {t:"Both equally", correct:false, why:"Slide 29: the cornea allows less drug entry and the conjunctiva more."},
  {t:"Conjunctiva", correct:true, why:"Slide 30: hydrophilic drugs enter via the conjunctiva; T@45075: the conjunctiva is the major route for large hydrophilic drugs."},
  {t:"Sclera", correct:false, why:"Slide 29 gives the cornea and the conjunctiva as the absorption routes."}],
 teach:"Slide 30: lipophilic drugs enter via the cornea, hydrophilic drugs via the conjunctiva.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 29, 30; T@45075 11/18"},

{id:"OP-020", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"adme", concept:"oo-adme-cornea-lipophilic",
 tags:["pk"], source:"both",
 stem:"A small lipophilic drug is instilled in the eye. Which tissue is its primary entry route?",
 options:[
  {t:"Conjunctiva", correct:false, why:"Slide 30 and T@45075: the conjunctiva is the main route for large hydrophilic drugs."},
  {t:"Cornea", correct:true, why:"Slide 30; T@45075: the cornea is the primary route for small lipophilic drugs."},
  {t:"Iris", correct:false, why:"Neither slide 29 nor slide 30 names the iris as an absorption route."},
  {t:"Eyelid skin", correct:false, why:"Slide 29: absorption is via the cornea and the conjunctiva."}],
 teach:"Cornea: small lipophilic drugs. Conjunctiva: large hydrophilic drugs (T@45075).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 29, 30; T@45075 11/18"},

{id:"OP-021", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"adme", concept:"oo-adme-cornea-sandwich",
 tags:["pk"], source:"both",
 stem:"Why does the cornea allow less drug entry than the conjunctiva?",
 options:[
  {t:"Influx and efflux transporters pump the drug back out", correct:false, why:"Slide 29 lists the transporters under the conjunctiva, not the cornea."},
  {t:"Esterase and CYP enzymes break the drug down first", correct:false, why:"Slide 29 lists the esterase and CYP enzymes under the conjunctiva."},
  {t:"Its lipid, water, lipid layers must be crossed in turn", correct:true, why:"Slide 29: cornea = lipid/water/lipid sandwich, less drug entry; T@43104 walks through the dissolving steps."},
  {t:"It is one lipid layer that blocks hydrophilic drugs", correct:false, why:"Slide 29 gives the cornea a lipid/water/lipid sandwich, not a single lipid layer; the conjunctiva is the route for hydrophilic drugs (slide 30)."}],
 teach:"Cornea: lipid/water/lipid sandwich, less entry (slide 29). Conjunctiva: transporters and enzymes, more entry (slide 29).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 29; T@43104 11/18"},

{id:"OP-022", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"adme", concept:"oo-adme-conj-features",
 tags:["pk"], source:"both",
 stem:"Which pair of features does the conjunctiva have?",
 options:[
  {t:"A lipid, water, lipid sandwich, and esterase and CYP enzymes", correct:false, why:"The sandwich belongs to the cornea (slide 29)."},
  {t:"Influx and efflux transporters, and a lipid, water, lipid sandwich", correct:false, why:"The sandwich belongs to the cornea (slide 29)."},
  {t:"Influx and efflux transporters, and esterase and CYP enzymes", correct:true, why:"Slide 29, conjunctiva: influx and efflux transporters; esterase/CYP enzymes; more drug entry (T@44234)."},
  {t:"Tightly packed cells, and esterase and CYP enzymes", correct:false, why:"The lecture places the tightly packed cells in the cornea route (T@43239)."}],
 teach:"Conjunctiva (slide 29): influx and efflux transporters, esterase and CYP enzymes, more drug entry.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 29; T@44234 11/18"},

{id:"OP-023", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"adme", concept:"oo-adme-prodrug-conj",
 tags:["pk", "prodrug"], source:"both",
 stem:"Why can an ester prodrug be effective when instilled in the eye?",
 options:[
  {t:"Corneal lipid layers hydrolyze it into the active drug", correct:false, why:"Slide 29 lists the enzymes under the conjunctiva; the cornea feature is the lipid/water/lipid sandwich."},
  {t:"Efflux transporters in the cornea convert it", correct:false, why:"Transporters move drugs; they do not convert them, and slide 29 places them in the conjunctiva."},
  {t:"Conjunctival esterases can hydrolyze it to the drug", correct:true, why:"Slide 29: the conjunctiva has esterase/CYP enzymes; T@44312: prodrugs are instilled because conjunctival metabolism bioactivates them."},
  {t:"The tear film removes the ester group", correct:false, why:"The slides give the conjunctival enzymes as the activating step."}],
 teach:"Conjunctival esterase and CYP enzymes can bioactivate a prodrug (slide 29, T@44312).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 29; T@44312 11/18"},

{id:"OP-024", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-oph", sub:"adme", concept:"oo-adme-more-entry",
 tags:["pk"], source:"both",
 stem:"Which absorption route allows more drug entry into the eye, and why?",
 options:[
  {t:"The cornea, because its surface is larger than that of the conjunctiva", correct:false, why:"Slide 29: the cornea allows less drug entry."},
  {t:"The conjunctiva, because its surface is larger", correct:true, why:"Slide 29: the conjunctiva allows more drug entry; T@43940: a larger surface where molecules can get in."},
  {t:"The cornea, because the drug dissolves readily in its layers", correct:false, why:"Slide 29: the lipid/water/lipid sandwich limits entry (T@43104)."},
  {t:"The conjunctiva, because its lipid, water, lipid sandwich is thicker", correct:false, why:"Slide 29: the lipid/water/lipid sandwich is the cornea's feature; the conjunctiva has transporters and enzymes."}],
 teach:"More drug enters through the conjunctiva (slide 29), which provides a larger surface (T@43940).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 29; T@43940 11/18"},

{id:"OP-026", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-why-brimonidine",
 tags:["chem", "pk"], source:"both",
 stem:"Why is brimonidine preferred over clonidine for glaucoma?",
 options:[
  {t:"It is more potent, and its lower log P limits brain entry", correct:true, why:"Slide 31: ClogP clonidine 1.5, brimonidine 1.2; T@46562 to T@48263: clonidine is lipophilic enough to reach the brain; brimonidine is about 1,000-fold more potent than the other two, so a tiny drop works."},
  {t:"It has a higher log P, so more drug crosses the cornea", correct:false, why:"Slide 31 gives brimonidine the lower ClogP (1.2 against 1.5)."},
  {t:"It acts on alpha 1 receptors, which control aqueous humor outflow", correct:false, why:"Brimonidine is an alpha 2 agonist, highly selective (slide 31, T@48186)."},
  {t:"It has an amino group on the ring, which lowers its log P", correct:false, why:"The ring amino group is on apraclonidine; brimonidine carries a bromine on a fused pyrazine ring (slide 31)."}],
 teach:"Brimonidine: ClogP 1.2 against 1.5 for clonidine, alpha 2 selective, about 1,000-fold more potent than the other two (T@48263), so a small drop gives the effect with less CNS worry.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 31; T@48263 11/18"},

{id:"OP-027", skill:"adverse", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-clonidine-cns",
 tags:["adverse", "pk"], source:"both",
 stem:"Which problem makes clonidine less desirable as an eye drop?",
 options:[
  {t:"It is too hydrophilic to enter the conjunctiva", correct:false, why:"Clonidine has the highest ClogP of the three (slide 31); the problem raised is CNS entry."},
  {t:"It cannot activate alpha 2 receptors in the eye", correct:false, why:"Clonidine is the alpha 2 agonist prototype (slide 31)."},
  {t:"It enters the brain, causing CNS effects", correct:true, why:"Slide 31 (ClogP 1.5); T@46589: lipophilic enough to get into the brain, bringing several unwanted CNS effects."},
  {t:"It lacks the imidazoline ring found in the other two", correct:false, why:"Clonidine contains the imidazoline ring (slide 31)."}],
 teach:"Clonidine, ClogP 1.5, is lipophilic enough to enter the brain; it is less desirable for glaucoma because of those CNS effects (T@46740).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 31; T@46740 11/18"},

{id:"OP-028", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-lowest-logp",
 tags:["pk", "numbers"], source:"slide",
 stem:"Which of these drugs has the lowest printed ClogP or Log P?",
 options:[
  {t:"Clonidine", correct:false, why:"Slide 31: clonidine ClogP 1.5."},
  {t:"Brimonidine", correct:false, why:"Slide 31: brimonidine ClogP 1.2."},
  {t:"Timolol", correct:false, why:"Slide 33: timolol Log P 1.4."},
  {t:"Apraclonidine", correct:true, why:"Slide 31: apraclonidine ClogP 0.87, the lowest; T@47120: less lipophilic, so it does not get into the brain that well."}],
 teach:"Apraclonidine (ClogP 0.87) is the least lipophilic of the series, so less of it reaches the brain and the CNS worry is reduced (slide 31, T@47120).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 33; T@47120 11/18"},

{id:"OP-030", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-apraclonidine-change",
 tags:["chem", "reverse"], source:"both",
 stem:"What structural change turns clonidine into apraclonidine, and what does it do to the log P?",
 options:[
  {t:"An amino group is added to the aromatic ring; log P falls", correct:true, why:"Slide 31: apraclonidine has an H2N on the ring that clonidine lacks; ClogP 1.5 to 0.87 (T@47120)."},
  {t:"An amino group is added to the aromatic ring; log P rises sharply", correct:false, why:"An amino group increases polarity; slide 31 prints a lower value, 0.87."},
  {t:"A bromine replaces a chlorine; log P falls", correct:false, why:"Bromine appears in brimonidine (slide 31); apraclonidine keeps both chlorines and gains an amino group."},
  {t:"The imidazoline is replaced by an imidazole; log P rises", correct:false, why:"Apraclonidine keeps the imidazoline ring (slide 31)."}],
 teach:"Apraclonidine = clonidine plus an aromatic amino group (slide 31, T@47120); ClogP 0.87 against 1.5.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 31; T@47120 11/18"},

{id:"OP-031", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-brimonidine-ring",
 tags:["chem"], source:"both",
 stem:"In brimonidine, which aromatic system carries the imidazoline-NH group in place of clonidine's dichlorobenzene?",
 options:[
  {t:"A benzene ring with two chlorines and an amino group", correct:false, why:"That is apraclonidine (slide 31)."},
  {t:"A benzene ring with two chlorines", correct:false, why:"That is clonidine (slide 31)."},
  {t:"A benzene ring fused to a pyrazine, with one bromine", correct:true, why:"Slide 31: brimonidine's ring contains two nitrogens (red) fused to the benzene and bears Br; T@47960: a pyrazine analog."},
  {t:"A benzene ring fused to a cyclohexanone, with an oxygen on the ring", correct:false, why:"That is the levobunolol ring system (slide 33)."}],
 teach:"Brimonidine: bromine-bearing benzo-fused pyrazine joined to the imidazoline through NH (slide 31, T@47960).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 31; T@47960 11/18"},

{id:"OP-032", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-potency",
 tags:["chem", "numbers"], source:"both",
 stem:"Compared with clonidine and apraclonidine, brimonidine is ......",
 options:[
  {t:"about 1,000-fold less potent but alpha 2 selective", correct:false, why:"T@48263: it is about 1,000-fold more potent, not less."},
  {t:"about equally potent and more lipophilic than both", correct:false, why:"T@48263: about 1,000-fold more potent; slide 31: its ClogP (1.2) is below clonidine's (1.5)."},
  {t:"about 1,000-fold more potent and highly alpha 2 selective", correct:true, why:"T@47960 to T@48263: the most potent of the series, highly selective for alpha 2, about 1,000-fold more potent than the other two."},
  {t:"about 1,000-fold more potent but less alpha 2 selective", correct:false, why:"T@48080: it is highly selective for alpha 2."}],
 teach:"Brimonidine is about 1,000-fold more potent than clonidine and apraclonidine and highly alpha 2 selective (T@48263).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 31; T@48263 11/18"},

{id:"OP-034", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-a2", sub:"class", concept:"oo-a2-brand-class",
 tags:["class", "names"], source:"slide",
 stem:"Alphagan products contain which drug, and what is its chemical class?",
 options:[
  {t:"Timolol maleate; imidazoline", correct:false, why:"Slide 33: timolol maleate is Timoptic, and it is an aryloxypropanolamine."},
  {t:"Brimonidine tartrate; aryloxypropanolamine", correct:false, why:"Slide 31: brimonidine is an imidazoline."},
  {t:"Brimonidine tartrate; imidazoline", correct:true, why:"Slide 31: Brimonidine Tartrate (Alphagan products), an imidazoline alpha 2 agonist."},
  {t:"Apraclonidine HCl; aryloxypropanolamine", correct:false, why:"Slide 31: apraclonidine HCl is Iopidine, and it is an imidazoline."}],
 teach:"Alphagan = brimonidine tartrate, an imidazoline (slide 31). Iopidine = apraclonidine HCl (slide 31). The brand names are printed on the slides; the classes are what he asks.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 33"},

{id:"OP-035", skill:"chem", prof:'Sikazwe', tier:'new', lowYield:true, topic:"oo-beyond", sub:"sar32", note:"Not on Exam 3: slide 32 (aryl imidazoline SAR) is not on his emailed reading list for Exam 3 (slides 27-31, 33-48). Kept for optional practice.",  concept:"oo-a2-sar-nh-alpha2",
 tags:["sar"], source:"both",
 stem:"Clonidine, apraclonidine and brimonidine each have an NH linker between the aryl ring and the imidazoline. What receptor selectivity does this linker give?",
 options:[
  {t:"Alpha 1 agonism", correct:false, why:"Slide 32: a CH2 linker gives alpha 1 agonists (T@50385)."},
  {t:"Beta 1 antagonism", correct:false, why:"Beta antagonists are the aryloxypropanolamines (slide 33)."},
  {t:"Alpha 2 agonism", correct:true, why:"Slide 32: linker X = NH gives alpha 2 agonists; T@50420: if amine, then alpha 2 selective."},
  {t:"Alpha 2 antagonism", correct:false, why:"The aryl imidazoline SAR gives agonists, not antagonists (slide 32)."}],
 teach:"Aryl imidazoline core: X = NH gives alpha 2 agonists; X = CH2 gives alpha 1 agonists (slide 32). The slide prints the NH linker as NH2; the structures on slide 31 show NH.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 32; T@50420 11/18"},

{id:"OP-036", skill:"chem", prof:'Sikazwe', tier:'new', lowYield:true, topic:"oo-beyond", sub:"sar32", note:"Not on Exam 3: slide 32 (aryl imidazoline SAR) is not on his emailed reading list for Exam 3 (slides 27-31, 33-48). Kept for optional practice.",  concept:"oo-a2-sar-ch2",
 tags:["sar", "reverse"], source:"both",
 stem:"An aryl imidazoline has a CH2 group between the aromatic ring and the imidazoline. Which receptor activity does the SAR predict?",
 options:[
  {t:"Alpha 2 agonist", correct:false, why:"Slide 32: X = NH gives alpha 2 agonists."},
  {t:"Alpha 1 agonist", correct:true, why:"Slide 32: X = CH2 gives alpha 1 agonists; T@50385."},
  {t:"Alpha 2 antagonist", correct:false, why:"The SAR gives agonists, not antagonists (slide 32)."},
  {t:"Beta 1 antagonist", correct:false, why:"Beta antagonists are the aryloxypropanolamines (slide 33)."}],
 teach:"Linker atom decides the alpha subtype: CH2, alpha 1; NH, alpha 2 (slide 32).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 32; T@50385 11/18"},

{id:"OP-038", skill:"chem", prof:'Sikazwe', tier:'new', lowYield:true, topic:"oo-beyond", sub:"sar32", note:"Not on Exam 3: slide 32 (aryl imidazoline SAR) is not on his emailed reading list for Exam 3 (slides 27-31, 33-48). Kept for optional practice.",  concept:"oo-a2-sar-min",
 tags:["sar"], source:"both",
 stem:"Which framework is the minimum structure for alpha agonist activity in these drugs?",
 options:[
  {t:"An aryl ring and an imidazoline joined by CH2 or NH", correct:true, why:"Slide 32: aryl imidazoline core with linker X; T@49771: aromatic ring connected to the imidazoline, the linker carbon or nitrogen."},
  {t:"An imidazoline ring by itself, with no aromatic ring", correct:false, why:"T@49771: the aromatic ring and the imidazoline together must be present."},
  {t:"An aryl ring joined to a pyrrolidine through a linker atom", correct:false, why:"Slide 32 shows an imidazoline, not a pyrrolidine."},
  {t:"An aryl ring joined to a carbamate through a linker atom", correct:false, why:"The core on slide 32 is an imidazoline."}],
 teach:"Slide 32: aryl imidazoline core; the linker is CH2 (alpha 1) or NH (alpha 2).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 32; T@49771 11/18"},

{id:"OP-039", skill:"mech", prof:'Sikazwe', tier:'new', dupOf:"OP-016", topic:"oo-bb", sub:"class", concept:"oo-bb-mech",
 tags:["mech"], source:"slide",
 stem:"How do the aryloxypropanolamine beta antagonists lower intraocular pressure?",
 options:[
  {t:"They increase uveoscleral outflow", correct:false, why:"Slide 33 lists only a decrease in production."},
  {t:"They increase aqueous humor production", correct:false, why:"Raising production would raise pressure."},
  {t:"They decrease aqueous humor production", correct:true, why:"Slide 33: beta-antagonists lower aqueous humor production."},
  {t:"They inhibit an enzyme that makes the humor", correct:false, why:"Enzyme inhibition is the mechanism of the carbonic anhydrase inhibitors (slide 28)."}],
 teach:"Beta antagonists: aqueous humor production down (slide 33).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 33; T@3086 11/19"},

{id:"OP-040", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"sar", concept:"oo-bb-moleculeX",
 tags:["class"], source:"slide",
 stem:"A compound has an aromatic ring bonded directly to a CH(OH)-CH2-NH chain, with no oxygen between the ring and the chain. What is its class?",
 options:[
  {t:"Aryloxypropanolamine", correct:false, why:"Slide 34: the aryloxypropanolamine has an oxygen between the ring and a three-carbon chain."},
  {t:"Arylethanolamine", correct:true, why:"Slide 34: the blue arylethanolamine pattern is ring-CH(OH)-CH2-NH-R, with no oxygen between the ring and the chain."},
  {t:"Aryl imidazoline", correct:false, why:"No imidazoline ring is present (slide 31)."},
  {t:"Prostaglandin", correct:false, why:"The prostaglandin skeleton is a carbon five-membered ring with two chains (slide 27)."}],
 teach:"Slide 34 contrasts the aryloxypropanolamine (green, with the oxygen and three carbons) and the arylethanolamine (blue, ring-CH(OH)-CH2-NH), the pattern drawn in the example labeled Molecule X. He called this series the ethanolamines: no oxygen and two carbons (11/19).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 34; T@5949 11/19"},

{id:"OP-041", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"sar", concept:"oo-bb-potency",
 tags:["sar"], source:"slide",
 stem:"Compared with the arylethanolamines, what is the potency of the aryloxypropanolamines as beta antagonists?",
 options:[
  {t:"Lower", correct:false, why:"Slide 34 marks the aryloxypropanolamines as the more potent."},
  {t:"The same", correct:false, why:"Slide 34 prints a potency difference."},
  {t:"Higher at beta 2 receptors but not at beta 1", correct:false, why:"Slide 34 states the potency difference without limiting it to a receptor."},
  {t:"Higher", correct:true, why:"Slide 34: aryloxypropanolamines (> potent) versus arylethanolamines."}],
 teach:"Aryloxypropanolamines are more potent than the arylethanolamines (slide 34).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 34; T@5432 11/19"},

{id:"OP-042", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"sar", concept:"oo-bb-stereo",
 tags:["sar"], source:"slide",
 stem:"For an aryloxypropanolamine beta antagonist, which configuration at the hydroxyl-bearing carbon is preferred?",
 options:[
  {t:"S", correct:true, why:"Slide 34: S-OH isomers are preferred."},
  {t:"R", correct:false, why:"Slide 34 prefers the S isomer."},
  {t:"A 50:50 mixture of R and S", correct:false, why:"Slide 34 states a preference for the S-OH isomer."},
  {t:"Neither; the carbon is not stereogenic", correct:false, why:"The carbon bearing the OH has four different groups; slide 34 states a stereochemical preference."}],
 teach:"Slide 34: S-OH isomers are preferred.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 34; T@6865 11/19"},

{id:"OP-043", skill:"chem", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"sar", concept:"oo-bb-betaxolol-selectivity",
 tags:["sar"], source:"slide",
 stem:"Betaxolol has its two ring substituents at C1 and C4 of the benzene ring. What selectivity do most compounds with this para pattern show?",
 options:[
  {t:"Beta 2 antagonism", correct:false, why:"Slide 34 assigns the para compounds to beta 1."},
  {t:"Alpha 2 agonism", correct:false, why:"Alpha 2 agonism belongs to the NH-linked aryl imidazolines (slide 32)."},
  {t:"Beta 1 antagonism", correct:true, why:"Slide 34: most p-aryloxypropanolamines (e.g., betaxolol) are beta 1 antagonists."},
  {t:"Alpha 1 agonism", correct:false, why:"Alpha 1 agonism belongs to the CH2-linked aryl imidazolines (slide 32)."}],
 teach:"Most aryloxypropanolamines have mixed beta 1 and beta 2 activity; most para-substituted ones, such as betaxolol, are beta 1 antagonists (slide 34). He said a true para substitution tends to give better beta 1 selectivity (11/19).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 34; T@7019 11/19"},

{id:"OP-045", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"class", concept:"oo-bb-logp-highest",
 tags:["pk", "numbers"], source:"slide",
 stem:"Which beta antagonist has the highest printed Log P?",
 options:[
  {t:"Levobunolol", correct:false, why:"Slide 33 prints 2.2, below betaxolol (2.5)."},
  {t:"Timolol", correct:false, why:"Slide 33 prints 1.4 for timolol."},
  {t:"Carteolol", correct:false, why:"Slide 33 prints 1.4 for carteolol."},
  {t:"Betaxolol", correct:true, why:"Slide 33 prints betaxolol Log P 2.5, the highest of the four beta antagonists drawn; levobunolol is 2.2, timolol and carteolol 1.4."}],
 teach:"Slide 33 Log P values: betaxolol 2.5, levobunolol 2.2, timolol 1.4, carteolol 1.4.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 33; T@4215 11/19"},

{id:"OP-046", skill:"pk", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"class", concept:"oo-bb-logp-pair", multi:true,
 tags:["pk", "numbers", "list"], source:"slide",
 stem:"Which two beta antagonists share the same printed Log P of 1.4? Select all that apply.",
 options:[
  {t:"Betaxolol", correct:false, why:"Slide 33 prints betaxolol Log P 2.5, not 1.4."},
  {t:"Timolol", correct:true, why:"Slide 33: timolol Log P = 1.4."},
  {t:"Levobunolol", correct:false, why:"Slide 33 prints levobunolol Log P 2.2, not 1.4."},
  {t:"Carteolol", correct:true, why:"Slide 33: carteolol LogP = 1.4."}],
 teach:"Timolol and carteolol, 1.4 each; betaxolol 2.5 and levobunolol 2.2 (slide 33).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 33; T@4215 11/19"},

{id:"OP-047", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"class", concept:"oo-bb-brand-class",
 tags:["class", "names"], source:"slide",
 stem:"Betagan products contain which drug, and what is its chemical class?",
 options:[
  {t:"Levobunolol HCl; aryloxypropanolamine", correct:true, why:"Slide 33: Levobunolol HCl (Betagan products), an aryloxypropanolamine beta antagonist."},
  {t:"Levobunolol HCl; imidazoline", correct:false, why:"Slide 31: the imidazolines are clonidine, apraclonidine and brimonidine."},
  {t:"Betaxolol HCl; imidazoline", correct:false, why:"Slide 33: Betoptic is betaxolol HCl, an aryloxypropanolamine, not an imidazoline."},
  {t:"Carteolol HCl; arylethanolamine", correct:false, why:"Slide 33: Ocupress is carteolol HCl, and it is an aryloxypropanolamine."}],
 teach:"Betagan = levobunolol HCl; Betoptic = betaxolol; Ocupress = carteolol; Timoptic = timolol; all aryloxypropanolamines (slide 33).",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slides 31, 33"},

{id:"OP-048", skill:"class", prof:'Sikazwe', tier:'new', topic:"oo-bb", sub:"class", concept:"oo-bb-class-carteolol",
 tags:["class"], source:"slide",
 stem:"Carteolol has a ring system attached through an oxygen to a three-carbon chain bearing an alcohol and a tert-butylamino group. What is its chemical class?",
 options:[
  {t:"Arylethanolamine", correct:false, why:"The oxygen and the third carbon place it in the aryloxypropanolamine class (slides 33 and 34)."},
  {t:"Aryloxypropanolamine", correct:true, why:"Slide 33: carteolol HCl (Ocupress) is drawn with the O-CH2-CH(OH)-CH2-NH-tBu chain of the aryloxypropanolamines."},
  {t:"Aryl imidazoline", correct:false, why:"No imidazoline ring is present (slide 31)."},
  {t:"Carbamate", correct:false, why:"The chain ends in an amine; the carbamate is N-C(=O)-O (slide 27)."}],
 teach:"Carteolol (slide 33): aryloxypropanolamine.",
 cite:"Lectures 11–12 (Sikazwe_OOO_mc.pdf) slide 33"}
);

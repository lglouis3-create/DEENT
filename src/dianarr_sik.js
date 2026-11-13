/* Spoken narration for the drawn step-through figures of Dr. Sikazwe's material
   (reactions.js rx-*, cbda.js cb-*, figs2.js fig-steroid) and of his assigned vitamin D
   reading (diagrams_rd.js fig-vitd-*, fig-vdr-action). One entry per drawn step, in the
   figure's order; a static figure has one entry. Written 2026-11-09 from each step's
   caption, the figure's data and sources, DPAW (f26-DEENT-DPAW-mc.pdf; DPAW n = PDF page),
   his transcripts (T = 11/03 lecture-only line; T@ = 11/04 character offset), walk_mc.js,
   walk_rd.js and Bikle DD, Endotext 2025 (section named). Held items kept as the figures
   keep them: rx-vitd steps 2-4 leave the slide 27 blanks open; Zn3+ as printed; slide 25's
   OH on C21; UV limits as each slide prints them. The src field is never spoken. */
var DIA_NARR = (typeof DIA_NARR !== 'undefined' && DIA_NARR) || {};

/* ---------- Reactions (reactions.js) ---------- */
DIA_NARR['rx-crisaborole'] = {steps: [
  {text: 'Crisaborole is a benzoxaborole, a drug built around a boron atom, and a soft drug, one designed to be metabolized predictably to inactive products. After it is applied, it collects in the skin, in the dermis. The next steps follow the drug that misses its target.',
   src: 'DPAW 7; 11/03 T 664–711'},
  {text: 'Step one is hydrolytic deboronation. The water in the skin removes the boron spontaneously, with no enzyme, leaving the benzyl alcohol product. Without its boron, this product can no longer bind P D E four, so less active drug reaches the rest of the body.',
   src: 'DPAW 7, 9; 11/03 T 699–704'},
  {text: 'Step two oxidizes the C H two O H group to a carboxylic acid, giving the benzoic acid product. Two enzymes do it: alcohol dehydrogenase, then aldehyde dehydrogenase. Doctor Sikazwe stressed: no C Y P enzymes.',
   src: 'DPAW 9; 11/03 T 705–709, 768–769'},
  {text: 'Steps three and four are phase two conjugations of the benzyl alcohol product. Step three is sulfation, by sulfotransferases. Step four is glucuronidation, by U G T enzymes. The route marked three, four gives both. The slide draws each tag over both hydroxyl groups without saying which one reacts. The class poll on this scheme was keyed to steps three and four.',
   src: 'DPAW 9 (Polleve-1); 11/03 T 758–777'}]};

DIA_NARR['rx-hydrocortisone'] = {steps: [
  {text: 'Hydrocortisone is the reference glucocorticoid. Under fifteen percent is absorbed through normal skin, and its half-life is only one to two hours, because it is metabolized quickly. The next steps show that metabolism.',
   src: 'DPAW 26 (printed 25)'},
  {text: 'Eleven beta hydroxysteroid dehydrogenase oxidizes the hydroxyl group on carbon eleven to a ketone, giving cortisone, which is inactive. The paired arrows mean it also reduces cortisone back. Doctor Sikazwe said hydrocortisone ping pongs with cortisone this way, and cortisone is its major metabolite.',
   src: 'DPAW 26; 11/03 T 1189–1196; 11/04 T@650–@800'},
  {text: 'Five beta reductase reduces the double bond between carbons four and five, in ring A. The product, five beta dihydrocortisol, is inactive.',
   src: 'DPAW 26 (highlighted box)'},
  {text: 'Three alpha hydroxysteroid dehydrogenase then reduces the ketone on carbon three to an alpha hydroxyl, giving urocortisol, also inactive. Cortisone and urocortisol are the forms found in urine.',
   src: 'DPAW 26 (highlighted box)'}]};

DIA_NARR['rx-vitd'] = {steps: [
  {text: 'This is the slide\'s vitamin D scheme, the take-home Doctor Sikazwe tied to his assigned reading. It starts with seven-dehydrocholesterol, an intact steroid with all four rings, A to D, and two double bonds in ring B, at carbons five and seven. The next three steps keep the slide\'s blanks open, so you can answer them yourself.',
   src: 'DPAW 27 (printed 26); 11/03 T 603–606'},
  {text: 'First, a reaction opens ring B, and the slide asks you to name the reaction and the organ. In class he said only that light is involved. The product is cholecalciferol, vitamin D three. With ring B open, it is a secosteroid.',
   src: 'DPAW 27; 11/04 T@4330–@4410'},
  {text: 'Next, a hydroxyl is added at carbon twenty-five, in another organ, which the slide again leaves for you to name. The product, twenty-five hydroxycholecalciferol, is the inactive form that circulates in the blood.',
   src: 'DPAW 27'},
  {text: 'Last, the one enzyme the slide prints, one alpha hydroxylase, adds a hydroxyl at carbon one. That gives calcitriol, one twenty-five dihydroxycholecalciferol, the active form. The organ is left blank. The reactions, the organs and the enzymes are what his two-point take-home question asks for.',
   src: 'DPAW 27; 11/04 T@3000–@4100'},
  {text: 'The answers come from the reading, not the slide. In the skin, with no enzyme, U V B light opens ring B, giving previtamin D three, which turns into vitamin D three by a slow, heat-driven step. In the liver, a twenty-five hydroxylase, mainly C Y P two R one, adds the twenty-five hydroxyl. In the kidney, one alpha hydroxylase, C Y P twenty-seven B one, makes calcitriol.',
   src: 'Bikle 2025, Overview; Cutaneous Production of Vitamin D3; Hepatic Production of 25OHD; Renal Production of 1,25(OH)2D; 11/03 T 603–606; 11/04 T@2873–@4440'}]};

DIA_NARR['rx-anthralin'] = {steps: [
  {text: 'Anthralin oxidizes itself spontaneously, with no enzyme: autoxidation. One electron passes to oxygen, giving two radicals, the superoxide anion and the anthranyl radical. These cytotoxic radicals are the chemical basis of its action. They also polymerize to anthralin brown and carbon black, the stains, which are not part of the treatment.',
   src: 'DPAW 17; 11/03 T 928–953'}]};

DIA_NARR['rx-psoralen'] = {steps: [
  {text: 'Psoralen intercalates, slipping between D N A base pairs. U V A light, three hundred fifteen to four hundred nanometers on his slide, then activates two of its double bonds, one in the pyrone ring and one in the furan ring. Each adds to the double bond of a thymine, a pyrimidine base, so the two strands are crosslinked and D N A synthesis stops. The drug itself, methoxsalen, is eight-methoxypsoralen.',
   src: 'DPAW 18; 11/03 T 955–976'}]};

DIA_NARR['rx-folate'] = {steps: [
  {text: 'Dihydrofolate reductase, D H F R, reduces folic acid to tetrahydrofolic acid, an essential cofactor for D N A synthesis. Methotrexate sits in the same D H F R cavity and competes with folic acid, so less tetrahydrofolic acid is made, and less D N A.',
   src: 'DPAW 30 (printed 29); 11/04 T@8850–@9000'}]};

DIA_NARR['rx-apremilast'] = {steps: [
  {text: 'Apremilast, Otezla, is extensively metabolized; the slide shows its metabolites as boxes, not structures. C Y P three A four, the major enzyme, with one A two and two A six as minor ones, removes a methyl from a methoxy group, an O-demethylation, leaving a hydroxyl metabolite. U G T enzymes then attach a glucuronide to that hydroxyl.',
   src: 'DPAW 34 (printed 33); 11/04 T@14063–@14300'}]};

DIA_NARR['rx-hydroxyacids'] = {steps: [
  {text: 'Glycolic acid is an alpha hydroxy acid. It is hydrophilic, with a log P of about one, so it acts at the skin surface and is metabolized very little. What is metabolized is oxidized by two enzymes, alcohol dehydrogenase and then aldehyde dehydrogenase, to a diacid, oxalic acid.',
   src: 'DPAW 43 (printed 42); 11/04 T@20818–@21000'},
  {text: 'Salicylic acid is a beta hydroxy acid. The slide labels its arrow amino acid conjugation and leaves the product as a question mark. Doctor Sikazwe named it aloud: seventy-five percent of what reaches the circulation is conjugated with glycine, giving the glycine conjugate, salicyluric acid.',
   src: 'DPAW 43; 11/04 T@22430–@22480'}]};

DIA_NARR['rx-bpo'] = {steps: [
  {text: 'Benzoyl peroxide, with a log P of three point five, is absorbed by the skin, where its peroxide bond, the oxygen to oxygen bond, breaks. One product, benzoic acid, lowers skin p H, the keratolytic effect, and is excreted in urine. The other, the benzoyl radical, kills bacteria.',
   src: 'DPAW 47 (printed 46); 11/04 T@25800–@26300'}]};

DIA_NARR['rx-etretinate'] = {steps: [
  {text: 'Etretinate is an ethyl ester prodrug: half-life one hundred twenty days, narrow therapeutic index, teratogenic. The slide leaves its arrow unlabelled; Doctor Sikazwe said carboxylesterases hydrolyze the ester, bioactivating it to acitretin, Soriatane, a second-generation retinoid. Since etretinate left the market, acitretin, the active form, is given directly.',
   src: 'DPAW 50 (printed 49); 11/04 T@28850–@29700'}]};

DIA_NARR['rx-tazarotene'] = {steps: [
  {text: 'Tazarotene is a prodrug, an ethyl ester. The slide labels its arrow with question marks. Doctor Sikazwe\'s answer: carboxylesterases hydrolyze the ester to tazarotenic acid, the active form.',
   src: 'DPAW 51 (printed 50); 11/04 T@7013–@7120, @30227–@30300'}]};

/* ---------- Chemical basis of drug action (cbda.js) ---------- */
DIA_NARR['cb-crisaborole'] = {steps: [
  {text: 'Crisaborole is a benzoxaborole, a drug that carries a boron atom, and the boron is the part that binds. It inhibits P D E four, which raises cyclic A M P and lowers inflammatory cytokines. Only intact drug, the part that escapes deboronation in the skin, reaches the enzyme.',
   src: 'DPAW 7; 11/03 T 786–793'},
  {text: 'In the P D E four active site, the boron coordinates two cations, zinc and magnesium; Doctor Sikazwe said that is the basis of its action. The boron now holds a third oxygen, which bridges the two ions. The histidine and aspartate residues are drawn as the slide prints them.',
   src: 'DPAW 7 (inset, J Med Chem 2021;64(24):17706–17727); 11/03 T 712–719'},
  {text: 'The drug binds the active site and stays there, so P D E four cannot break down cyclic A M P. Cyclic A M P rises, and fewer inflammatory cytokines are made.',
   src: 'DPAW 7 (MoA); 11/03 T 790–793'}]};

DIA_NARR['cb-mtx'] = {steps: [
  {text: 'Folic acid is the substrate. The enzyme dihydrofolate reductase, D H F R, reduces it to tetrahydrofolic acid, which the cell needs for D N A synthesis. Methotrexate blocks this reaction.',
   src: 'DPAW 30; 11/04 T@8900–@9100'},
  {text: 'Methotrexate has the same three parts as folic acid, colored as the slide colors them: an aromatic pteridine ring, para-aminobenzoic acid, and glutamic acid. It differs at two places: an amino group where folic acid has a hydroxyl on the pteridine, and a methyl on the nitrogen where folic acid has a hydrogen.',
   src: 'DPAW 31'},
  {text: 'Methotrexate sits in the same enzyme cavity and competitively inhibits the binding of folic acid, because it has the higher affinity for D H F R. Folic acid cannot be processed, no tetrahydrofolic acid is made, and D N A synthesis falls.',
   src: 'DPAW 30; 11/04 T@9000–@9230'}]};

DIA_NARR['cb-cyclosporine'] = {steps: [
  {text: 'Cyclosporine is a cyclic peptide of eleven amino acids, closed by amide bonds, so it is a lactam, a cyclic amide. It is described as a prodrug. Its oral bioavailability is only thirty percent, because C Y P three A four metabolizes it on first pass.',
   src: 'DPAW 33; 11/04 T@12270–@12900'},
  {text: 'Its bioactivation is not metabolic. In Doctor Sikazwe\'s words, it is simply its binding to its receptor, cyclophilin. The cyclosporine cyclophilin complex is the active form.',
   src: 'DPAW 33; 11/04 T@12378–@12520'},
  {text: 'The complex binds the active site of calcineurin, a phosphatase, an enzyme that removes phosphate groups. With calcineurin blocked, T cell signaling falls.',
   src: 'DPAW 33; 11/04 T@12520–@12620'}]};

DIA_NARR['cb-tetracycline'] = {steps: [
  {text: 'Tetracycline is recognized by four six-membered rings fused in a straight line; a steroid\'s rings are angled instead. It is a broad spectrum antibiotic.',
   src: 'DPAW 55; 11/04 T@35100–@35500'},
  {text: 'Tetracycline chelates metal ions, forming insoluble salts. The slide lists aluminum, calcium, magnesium, iron, zinc and bismuth, and prints zinc as three plus, though zinc\'s ion is two plus. The salt is drawn as a bracket, because neither the slide nor the lecture names the atoms that bind the metal.',
   src: 'DPAW 55; 11/04 T@35844–@36050'},
  {text: 'Bone and tooth enamel are rich in calcium, so the salts deposit there, staining and weakening them. In the gut, food such as dairy lowers its absorption; its half-life is eight point five hours. Food does not affect doxycycline or minocycline.',
   src: 'DPAW 55; 11/04 T@35700–@36300'}]};

DIA_NARR['cb-salicylates'] = {steps: [
  {text: 'Homosalate and octisalate are esters of salicylic acid, used as U V B absorbers; the salicylate part absorbs U V B, two hundred eighty to three hundred fifteen nanometers on his slide. The shading marks the ester bond. They are supposed to be photostable, but the slide puts a question mark on that.',
   src: 'DPAW 64; 11/04 T@42460–@42700'},
  {text: 'Doctor Sikazwe said that as esters they can undergo hydrolysis to give salicylic acid, which provides analgesia. The slide draws no arrow; the hydrolysis is his spoken explanation. The alcohol part also released is not named on the slide.',
   src: 'DPAW 64; 11/04 T@42498–@42640'}]};

DIA_NARR['cb-hydroxyacids'] = {steps: [
  {text: 'Count from the carboxylic acid carbon: the carbon next to it is alpha, the one after it beta. Glycolic acid carries its hydroxyl group on the alpha carbon, so it is an alpha hydroxy acid. Salicylic acid carries it on the beta carbon, so it is a beta hydroxy acid.',
   src: 'DPAW 43–44; 11/04 T@22100–@22330'},
  {text: 'The slide\'s structure activity rules for hydroxy acids: one or more carboxylic acid groups; in most, the hydroxyl on the alpha carbon, the carbon next to the carboxylic acid; and the rest of the molecule mostly an alkyl group.',
   src: 'DPAW 44 (SAR)'}]};

DIA_NARR['cb-antiandrogens'] = {steps: [
  {text: 'There are two ways to go after testosterone. Spironolactone, a steroid, and ketoconazole, an azole, diminish testosterone biosynthesis. Keep in mind that azole antifungals strongly inhibit C Y P three A four.',
   src: 'DPAW 53; 11/04 T@32237–@32700'},
  {text: 'Flutamide, which is not a steroid, works the other way: it blocks the receptor, so testosterone cannot bind to it. The two approaches differ by how they work: lowering the hormone, or blocking its receptor.',
   src: 'DPAW 53; 11/04 T@32680–@33000'}]};

DIA_NARR['cb-retinoids'] = {steps: [
  {text: 'First-generation retinoids are non-aromatic. Tretinoin is all-trans retinoic acid, used topically; isotretinoin is thirteen-cis retinoic acid, taken by mouth. The ringed double bond is at carbon thirteen, counted from the carboxylic acid end: trans in tretinoin, cis in isotretinoin. They are geometric isomers.',
   src: 'DPAW 49; 11/04 T@28100–@28700'},
  {text: 'Third-generation retinoids are poly-aromatic, and what is exposed at the end matters. Adapalene and trifarotene end in a free carboxylic acid, so they are active as applied. Tazarotene ends in an ethyl ester, a prodrug that carboxylesterases hydrolyze to tazarotenic acid.',
   src: 'DPAW 51; 11/04 T@29800–@30300'}]};

DIA_NARR['cb-limus'] = {steps: [
  {text: 'Pimecrolimus and tacrolimus are macrolide lactones: the large ring is closed by a cyclic ester, shaded here. Both are calcineurin inhibitors, and both are very lipophilic, with similar calculated log P values, six point zero and five point eight.',
   src: 'DPAW 28; DPAW 32 (Polleve-3)'},
  {text: 'They differ at only two places, ringed: pimecrolimus has a chlorine where tacrolimus has a hydroxyl, and an ethyl group where tacrolimus has an allyl. Pimecrolimus binds skin proteins strongly, so it stays in the skin with few systemic adverse effects. Tacrolimus has low skin protein binding and can enter the systemic circulation.',
   src: 'DPAW 28; 11/04 T@4400–@5600'}]};

DIA_NARR['cb-gc-potency'] = {steps: [
  {text: 'The dashed arrow from hydrocortisone, low potency, to clobetasol propionate, super-potent, is not metabolism. Clobetasol propionate is made from the hydrocortisone skeleton by structural changes, and those changes raise the potency.',
   src: 'DPAW 25; 11/03 T 1175–1179'},
  {text: 'The ringed changes: a double bond between carbons one and two, a nine alpha fluorine, a sixteen methyl, a seventeen propionate ester, and a twenty-one chlorine. The first two are structure activity features that raise potency. The slide draws a hydroxyl on carbon twenty-one; the marketed drug has the chlorine shown here. Doctor Sikazwe said these derivatives need not be known by heart. Potency also rests on the vehicle and the concentration.',
   src: 'DPAW 25, 20 (SAR); 11/03 T 1152–1154; reviews/OPEN_QUESTIONS.md (slide 25 C21)'}]};

/* ---------- Steroid skeleton (figs2.js) ---------- */
DIA_NARR['fig-steroid'] = {steps: [
  {text: 'A steroid is recognized by its skeleton of four fused rings, a tetracyclic system. Rings A, B and C have six members, and ring D has five.',
   src: 'DPAW 20; 11/03 T 990–996'},
  {text: 'Stereochemistry tells which face a group points to. A hashed bond points away from you, the alpha face. A wedge points toward you, the beta face. Each ring atom can carry a group on one face or the other.',
   src: 'DPAW 20; 11/03 T 997–1001'},
  {text: 'Numbering: carbons one to ten run around rings A and B, and eleven to seventeen through rings C and D. Carbon eighteen is the methyl on carbon thirteen, nineteen the methyl on carbon ten, and twenty and twenty-one the side chain on carbon seventeen. The number gives the position; alpha or beta is separate.',
   src: 'DPAW 20–21; 11/03 T 1002–1017, 1084–1093'},
  {text: 'Four features increase anti-inflammatory activity: a double bond between carbons one and two, a halogen on carbon six in the alpha position, a halogen on carbon nine, also alpha, and a hydroxyl on carbon eleven in the beta position.',
   src: 'DPAW 20 (SAR); 11/03 T 1019–1072'},
  {text: 'In the glucocorticoid receptor, six hydrogen bonds hold the steroid: two to the ketone on carbon three, and one each to the eleven beta hydroxyl, the seventeen alpha hydroxyl, the ketone on carbon twenty, and the hydroxyl on carbon twenty-one. Each bond is to a receptor residue printed on the slide.',
   src: 'DPAW 23 (printed 22); 11/03 T 1126–1139'},
  {text: 'Self-test. Only carbons one, eleven and seventeen are labeled now. Doctor Sikazwe said that if you know where these three are, you can number the rest. Try numbering every carbon, then step back to check.',
   src: 'DPAW 20–21; 11/03 T 1097–1099'}]};

/* ---------- Vitamin D reading (diagrams_rd.js) ---------- */
DIA_NARR['fig-vitd-skin'] = {steps: [
  {text: 'In the epidermis, the U V B part of sunlight, two hundred ninety to three hundred ten nanometers, breaks ring B of seven-dehydrocholesterol. The opened product is previtamin D three. This is the first step of the take-home: light, no enzyme.',
   src: 'Bikle 2025, Cutaneous Production of Vitamin D3; 11/04 T@4371'},
  {text: 'Previtamin D three then rearranges into vitamin D three, cholecalciferol, with no enzyme and no light. Body heat drives it: none forms at zero degrees Celsius, and at body temperature it forms slowly.',
   src: 'Bikle 2025, Cutaneous Production of Vitamin D3'},
  {text: 'More U V light turns previtamin D three into lumisterol and tachysterol, inactive products that can revert to previtamin D three in the dark, and turns vitamin D three into suprasterols and five six trans vitamin D three, also inactive. So the skin limits its own output, and prolonged sun does not make toxic amounts.',
   src: 'Bikle 2025, Cutaneous Production of Vitamin D3'},
  {text: 'Vitamin D three leaves the skin bound to vitamin D binding protein, D B P. Less is made with more melanin, at high latitude and in winter, and under clothing or sunscreen.',
   src: 'Bikle 2025, Cutaneous Production of Vitamin D3; Overview'}]};

DIA_NARR['fig-vitd-transport'] = {steps: [
  {text: 'In the blood, vitamin D and its metabolites travel bound: eighty-five to eighty-eight percent to vitamin D binding protein, made mainly in the liver, and twelve to fifteen percent to albumin. Very little is free: about zero point zero three percent of twenty-five hydroxyvitamin D and zero point four percent of calcitriol.',
   src: 'Bikle 2025, Transport in Blood'},
  {text: 'Most cells take up only the free, unbound form. This is the free hormone hypothesis, and the binding protein is a circulating reservoir.',
   src: 'Bikle 2025, Transport in Blood'},
  {text: 'The exceptions are the kidney, placenta and parathyroid gland, whose megalin cubilin complex takes up metabolites still bound to the protein. In the kidney, this keeps vitamin D from being lost in the urine.',
   src: 'Bikle 2025, Transport in Blood'},
  {text: 'When the binding protein is low, as in liver disease or nephrotic syndrome, the measured total level falls, but the free level can be normal, so the patient may not be deficient.',
   src: 'Bikle 2025, Transport in Blood; Overview'}]};

DIA_NARR['fig-vitd-regulation'] = {steps: [
  {text: 'In the kidney tubule, two enzymes in the same mitochondria set the calcitriol level. C Y P twenty-seven B one, the one alpha hydroxylase, makes calcitriol from twenty-five hydroxyvitamin D. C Y P twenty-four A one, the twenty-four hydroxylase, starts breaking both down, toward calcitroic acid, which is inactive.',
   src: 'Bikle 2025, Renal Production of 1,25(OH)2D; Renal Production of 24,25(OH)2D'},
  {text: 'Parathyroid hormone, P T H, stimulates C Y P twenty-seven B one and inhibits C Y P twenty-four A one in the kidney, so more calcitriol is made and less is broken down.',
   src: 'Bikle 2025, Renal Production of 1,25(OH)2D; Renal Production of 24,25(OH)2D'},
  {text: 'F G F twenty-three, calcium and phosphate do the opposite: they lower C Y P twenty-seven B one and raise C Y P twenty-four A one. High phosphate makes bone release F G F twenty-three. The two enzymes are regulated as mirror images.',
   src: 'Bikle 2025, Renal Production of 1,25(OH)2D; Fibroblast Growth Factor (FGF23)'},
  {text: 'Calcitriol limits itself. It induces C Y P twenty-four A one, its own breakdown, raises F G F twenty-three and lowers parathyroid hormone. This feedback protects against vitamin D toxicity.',
   src: 'Bikle 2025, Renal Production of 24,25(OH)2D; Fibroblast Growth Factor (FGF23); Overview'},
  {text: 'Outside the kidney, the control differs: tumor necrosis factor alpha and interferon gamma raise C Y P twenty-seven B one. Macrophages lack a working twenty-four hydroxylase, so the brake is missing; in sarcoidosis, calcitriol and calcium rise.',
   src: 'Bikle 2025, Renal Production of 1,25(OH)2D; Overview (macrophages, sarcoidosis)'}]};

DIA_NARR['fig-vdr-action'] = {steps: [
  {text: 'Calcitriol enters the cell and binds the vitamin D receptor, V D R, a nuclear hormone receptor. Binding moves the receptor\'s last helix, helix twelve, to close over the pocket, forming the surface where coactivators bind.',
   src: 'Bikle 2025, Mechanism of Action; VDR and Transcriptional Regulation'},
  {text: 'The receptor pairs with the retinoid X receptor, R X R, and the pair binds a vitamin D response element in the D N A: two half sites of six bases, three bases apart. R X R takes the upstream half site, the vitamin D receptor the downstream one.',
   src: 'Bikle 2025, VDR and Transcriptional Regulation'},
  {text: 'Coactivators then switch the gene on. S R C proteins bring histone acetyltransferases, which open the chromatin, and the Mediator complex links to R N A polymerase two. The gene is read, and its m R N A rises.',
   src: 'Bikle 2025, VDR and Transcriptional Regulation'},
  {text: 'Or the gene is turned down. Corepressors bring histone deacetylases, which close the chromatin. The receptor also binds negative response elements, as in the parathyroid hormone gene, to turn genes down.',
   src: 'Bikle 2025, VDR and Transcriptional Regulation; Parathyroid Gland'}]};

DIA_NARR['fig-vitd-targets'] = {steps: [
  {text: 'In the duodenum, calcium enters the intestinal cell through the T R P V six channel, crosses the cell on calbindin in vesicles, and is pumped out by P M C A one b, using A T P. Calcitriol induces all three and raises phosphate uptake. This calcium absorption is why hypercalcemia limits the vitamin D analogs.',
   src: 'Bikle 2025, Target Tissue Responses: Intestine; DPAW 27'},
  {text: 'In the kidney\'s distal tubule, calcitriol uses a similar set: the T R P V five channel, calbindin D twenty-eight k, and the same pump. Most calcium is reabsorbed earlier, without vitamin D, and phosphate is controlled mainly by parathyroid hormone and F G F twenty-three.',
   src: 'Bikle 2025, Target Tissue Responses: Kidney'},
  {text: 'In bone, calcitriol acts through osteoblasts and osteocytes, which carry the receptor. It induces RANK ligand, which drives osteoclasts to form and resorb bone, and it helps osteoblasts mature. Much of its bone effect comes from the calcium and phosphate supply.',
   src: 'Bikle 2025, Target Tissue Responses: Bone'},
  {text: 'In the parathyroid gland, calcitriol suppresses the parathyroid hormone gene and raises the calcium sensing receptor. It also raises F G F twenty-three from bone. Both loops lower calcitriol production. Calcitriol and its analogs treat secondary hyperparathyroidism in kidney failure.',
   src: 'Bikle 2025, Parathyroid Gland; Fibroblast Growth Factor (FGF23)'}]};

DIA_NARR['fig-vitd-keratinocyte'] = {steps: [
  {text: 'Keratinocytes alone have the whole pathway, from seven-dehydrocholesterol to vitamin D three, twenty-five hydroxyvitamin D and calcitriol. Their C Y P twenty-seven B one, in the dividing basal layer, is raised by tumor necrosis factor alpha and interferon gamma, and calcitriol raises C Y P twenty-four A one.',
   src: 'Bikle 2025, Skin; Keratinocytes'},
  {text: 'Calcitriol, with calcium, makes keratinocytes stop dividing and differentiate. It raises the calcium sensing receptor and phospholipase C, and switches on genes such as involucrin and transglutaminase. This antiproliferative action is the one used in psoriasis.',
   src: 'Bikle 2025, Skin; Overview'},
  {text: 'Innate immunity is strengthened. In keratinocytes and macrophages, a signal through the toll-like receptor T L R two raises C Y P twenty-seven B one, and the calcitriol made induces cathelicidin, an antimicrobial peptide.',
   src: 'Bikle 2025, Immune System (innate; Keratinocytes)'},
  {text: 'Adaptive immunity is restrained. Calcitriol slows dendritic cells and T cells, and shifts T helper cells from Th one and Th seventeen toward Th two and regulatory T cells. Th seventeen drives psoriasis; atopic dermatitis, a Th two disease, may worsen.',
   src: 'Bikle 2025, Immune System (adaptive)'}]};

DIA_NARR['fig-vitd-evidence'] = {steps: [
  {text: 'Animal and observational studies suggest benefit in cancer, heart disease and blood pressure, autoimmune disease, and respiratory infection including COVID nineteen. Randomized trials in people not deficient show less: cancer incidence did not fall, though cancer deaths may; heart disease and fractures were not prevented; fewer went from prediabetes to diabetes; one study found less autoimmune disease. The reading\'s likely range, still debated: eight hundred to two thousand international units a day, a blood twenty-five hydroxyvitamin D of twenty to fifty nanograms per milliliter.',
   src: 'Bikle 2025, Abstract; Overview; Cancer; Pancreatic Beta-Cells; Immune System; Heart'}]};

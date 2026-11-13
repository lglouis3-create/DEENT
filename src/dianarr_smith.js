/* ==========================================================================
   DRAWN STEP-THROUGH NARRATION: DR. SMITH'S FIGURES, PHAR 4346 DEENT
   --------------------------------------------------------------------------
   Louis, 2026-11-09: "Also can the diagram have narration explaining the steps
   of each as a walk through?" Spoken text for each step of Dr. Smith's drawn
   step-throughs (diagrams.js, figs2.js, moa_figs.js), played by dianarr_ui.js.

   Schema (shared with dianarr_sik.js):
     DIA_NARR['<DIA key>'] = {steps: [{text, src}, ...]}  one entry per drawn
     step, in order (a static figure has one); `text` is spoken exactly as
     stored, `src` is never spoken or shown.
   Audio: audio/dn-<key>-<step 1-based>.mp3, manifest key 'dn-<key>-<n>' in
   audio_manifest.js (hash rule of narration_hash.js).

   Texts come from each step's caption, the figure's sources and Dr. Smith's
   slides and transcripts, as the figures do. Held items are spoken as drawn:
   signal 1 of fig-cni-nfat is MHC class II (PCol 25, 10/30 T 222), signal 1 of
   fig-costim is "MHC" with no class (OPEN_QUESTIONS L3 1); the macrolides get
   their subunit only (OPEN_QUESTIONS L2 3, L3 14); clindamycin prevents
   translocation (PCol 46; L3-011).
   ========================================================================== */
var DIA_NARR = (typeof DIA_NARR !== 'undefined' && DIA_NARR) || {};

DIA_NARR['acne-cascade'] = {steps: [
  {text: 'The cascade of acne lesions, one stage per step, starts from a normal follicle: keratinocytes move up and are shed, and sebum flows out to the skin surface.', src: 'PP 34; 10/29 T 452-471'},
  {text: 'Abnormal keratinization comes first. The cells stick together inside the follicle instead of shedding, and they form a microcomedone, the first and smallest plugged follicle.', src: 'PP 34; 10/29 T 452-460'},
  {text: 'With increased sebum production, the microcomedone becomes a closed comedone, whose opening is shut, so the sebum cannot get out.', src: 'PP 34; 10/29 T 455-462'},
  {text: 'If the closed comedone opens, it becomes an open comedone, which is seen on the skin as a dilated pore.', src: 'PP 34; 10/29 T 460-464'},
  {text: 'If the closed comedone does not open, a papule forms, a raised, often red bump. White blood cells enter it and pus forms, which makes it a pustule. A pustule that opens also leaves a dilated pore.', src: 'PP 34; 10/29 T 462-466'},
  {text: 'A foreign body response to the papule, an immune reaction against its contents, turns it into a nodule or cyst. A nodule or cyst does not open and does not drain, so it stays deep in the skin.', src: 'PP 34; 10/29 T 466-471'},
]};

DIA_NARR['nr-action'] = {steps: [
  {text: 'This figure shows how corticosteroids act, through the glucocorticoid receptor. The drug crosses the cell membrane and reaches its receptor, a protein inside the cell that acts on genes in the nucleus.', src: 'PC 5-6, 10; 10/29 T 639-700'},
  {text: 'The corticosteroid binds the glucocorticoid receptor, and the two form a drug-receptor complex. The complex is what acts on the genes, by one of two routes, direct or indirect.', src: 'PC 5-6, 10; 10/29 T 639-700'},
  {text: 'In the direct route, two drug-receptor complexes bind a response element, a stretch of D N A that controls a family of genes. For a glucocorticoid it is the glucocorticoid response element. Binding raises the expression of anti-inflammatory genes or lowers the expression of inflammatory ones.', src: 'PC 5; 10/29 T 660-720'},
  {text: 'In the indirect route, one complex is enough. It binds a transcription factor, such as N F kappa B or activator protein one, called A P one. The bound factor is kept off the D N A, so it cannot drive the inflammatory genes. Doctor Smith said there are some data that glucocorticoids also work this way.', src: 'PC 6; 10/29 T 720-746'},
]};

DIA_NARR['nr-rar'] = {steps: [
  {text: 'This figure shows how retinoids act. Retinoids have vitamin A-like activity. They bind two families of receptors inside the cell, the retinoic acid receptors, called R A R and R X R.', src: 'PC 7, 14'},
  {text: 'When a retinoid binds them, an R A R and an R X R form a heterodimer, a pair of two different receptor proteins, called R A R R X R.', src: 'PC 14'},
  {text: 'The heterodimer moves into the nucleus and binds D N A at the retinoic acid response element, called the R A R E. This binding changes gene transcription.', src: 'PC 7, 14'},
  {text: 'Which receptor the retinoid targets decides the effect. Retinoids that target R A Rs mainly affect cell differentiation and proliferation, so they treat acne, psoriasis and photoaging. Retinoids that target R X Rs mainly induce apoptosis, which is cell death, and are used in cancers such as Kaposi sarcoma.', src: 'PC 14'},
]};

DIA_NARR['nr-vdr'] = {steps: [
  {text: 'This figure shows how the vitamin D analog calcipotriene acts. Calcipotriene is used for psoriasis. It exerts its effects through the vitamin D receptor, called V D R.', src: 'PC 21'},
  {text: 'The V D R drug complex forms a heterodimer with R X R alpha, a second receptor protein.', src: 'PC 21'},
  {text: 'This V D R R X R complex binds vitamin D response elements on D N A.', src: 'PC 21'},
  {text: 'Binding increases the expression of genes that modulate epidermal differentiation and inflammation. The drug inhibits keratinocyte proliferation, promotes keratinocyte differentiation and decreases the release of inflammatory cytokines, which improves psoriatic plaques.', src: 'PC 21'},
]};

DIA_NARR['fig-cni-nfat'] = {steps: [
  {text: 'This figure shows how a helper T cell is activated, and where the calcineurin inhibitors act. Signal one: the antigen-presenting cell holds an antigen on M H C class two, and the T cell receptor binds it. This alerts the C D four positive T cell.', src: 'PC 25; 10/30 T 216-233 (MHC II per slide and T 222)'},
  {text: 'Signal two is the confirmatory signal. C D eighty and C D eighty-six on the antigen-presenting cell bind C D twenty-eight on the T cell. Together, signals one and two start a signal cascade inside the T cell.', src: 'PC 25; 10/30 T 233-247'},
  {text: 'In that cascade, calcium and calmodulin, a calcium-binding protein, activate the enzyme calcineurin. This is the enzyme the calcineurin inhibitors block.', src: 'PC 26; 10/30 T 318-321'},
  {text: 'Calcineurin removes the phosphate from N F A T, a transcription factor that is inactive while it is phosphorylated. Active N F A T enters the nucleus, and the gene for interleukin two, called I L two, is expressed.', src: 'PC 26; 10/30 T 321-330 ("phosphorylates" resolved)'},
  {text: 'Signal three: I L two leaves the cell and binds C D twenty-five, part of the I L two receptor. This makes the T cell proliferate.', src: 'PC 25; 10/30 T 248-269'},
  {text: 'Cyclosporine binds a protein called cyclophilin, and tacrolimus binds a different protein, F K B P. Each complex binds calcineurin and inactivates it, so N F A T stays phosphorylated, less I L two is made, and fewer T cells proliferate. Pimecrolimus is similar in mechanism to tacrolimus. Cyclosporine and tacrolimus are not given together.', src: 'PC 26; 10/30 T 292-299, 331-357; DPAW 28, 33'},
]};

DIA_NARR['fig-il-axis'] = {steps: [
  {text: 'This figure shows what each cytokine biologic binds. Dupilumab, a human antibody, binds the alpha subunit of the interleukin four receptor, called I L four R alpha. The I L four and the I L thirteen receptor complexes both use that subunit, so dupilumab blocks signaling by both cytokines.', src: 'PC 64; 11/03 T 365-374'},
  {text: 'Interleukin twelve and interleukin twenty-three, I L twelve and I L twenty-three, both carry a subunit called p forty. Ustekinumab, a human antibody, binds p forty, so it blocks both cytokines.', src: 'PC 67; 11/03 T 443-448'},
  {text: 'I L twenty-three also carries p nineteen, which I L twelve does not. Guselkumab, a human antibody, and tildrakizumab and risankizumab, both humanized, bind p nineteen, so they block I L twenty-three only.', src: 'PC 68-69; 11/03 T 469-482'},
  {text: 'I L twelve and I L twenty-three bind the I L twelve receptor beta one on C D four T cells and natural killer cells. That drives the formation of T H one and T H seventeen cells, so blocking these cytokines suppresses those inflammatory T cells.', src: 'PC 67; 11/03 T 448-451, 478-480'},
  {text: 'Keratinocytes are the major target of I L seventeen. It makes them release more inflammatory cytokines and drives epidermal hyperproliferation and barrier dysfunction. Secukinumab, a human antibody, and ixekizumab, a humanized one, bind the cytokine I L seventeen A. Brodalumab, a human antibody, binds its receptor, I L seventeen receptor A, instead.', src: 'PC 65-66; 11/03 T 399-428'},
]};

DIA_NARR['fig-spf'] = {steps: [
  {text: 'This figure builds the measures of sun protection. The first is the minimal erythemal dose, or M E D: the smallest single dose of ultraviolet radiation that produces clearly outlined redness, called erythema, on the exposed skin.', src: 'Sun 12; recording 00:09:35-00:10:28'},
  {text: 'The sun protection factor, or S P F, compares two of these doses: the dose that gives one M E D on skin with the sunscreen, divided by the dose that gives one M E D on skin without it. Burning is caused by ultraviolet B, so S P F measures U V B protection and says nothing about ultraviolet A.', src: 'Sun 13; recording 00:10:28-00:11:33'},
  {text: 'S P F fifteen blocks about ninety-three percent of incoming U V B, S P F thirty about ninety-seven percent, and S P F fifty about ninety-eight percent. So each step up in S P F adds less protection.', src: 'Sun 15; recording 00:14:25-00:14:47'},
  {text: 'U V A protection is measured by the critical wavelength method. The critical wavelength is the wavelength by which ninety percent of the light the product absorbs has been absorbed. A product with a critical wavelength of three hundred seventy nanometers or more may be labeled broad spectrum. A broad spectrum product with S P F fifteen or more may claim it decreases the risk of skin cancer and early aging caused by the sun.', src: 'Sun 14; recording 00:12:10-00:13:37'},
]};

DIA_NARR['fig-block-vs-screen'] = {steps: [
  {text: 'This figure compares sunblocks and sunscreens. Without a product, both ultraviolet A and ultraviolet B reach the skin. The two professors give different band limits. Doctor Smith: U V B from two hundred ninety to three hundred twenty nanometers, U V A from three hundred twenty to four hundred. Doctor Sikazwe: U V B from two hundred eighty to three hundred fifteen, U V A from three hundred fifteen to four hundred.', src: 'Sun 8; DPAW 62-64'},
  {text: 'A sunblock, the physical kind, uses inorganic particles, zinc oxide or titanium dioxide, that scatter or reflect the light. Doctor Smith said they reflect visible, ultraviolet and infrared radiation. Doctor Sikazwe said large particles work better, and nanosized ones are clear but reflect less.', src: 'Sun 20; DPAW 61; 11/04 T@38200-@38720'},
  {text: 'A sunscreen, the organic kind, works the opposite way. Its chromophores, light-absorbing organic compounds, absorb U V B, U V A or both, and convert the energy to heat. Doctor Sikazwe called it harmless heat.', src: 'Sun 22; DPAW 62'},
  {text: 'The light a sunscreen absorbs also breaks it down, which is called photodegradation, so a sunscreen has to be reapplied. Doctor Sikazwe gave avobenzone a half-life of about two hours.', src: 'DPAW 62; 11/04 T@39860-@40700'},
]};

DIA_NARR['fig-pde4-camp'] = {steps: [
  {text: 'This figure shows why P D E four inhibitors raise cyclic A M P, a messenger inside the cell. An agonist binds its receptor on the membrane. The stimulatory G protein, G s, then activates adenylyl cyclase, which makes cyclic A M P from A T P.', src: 'PC 32; 10/30 T 430-448'},
  {text: 'Phosphodiesterase, or P D E, breaks cyclic A M P down to five prime A M P, so the cyclic A M P is cleared.', src: 'PC 32 (Louis\'s note); 10/30 T 430-448'},
  {text: 'While it lasts, cyclic A M P frees the catalytic subunits of its protein kinase, and they phosphorylate substrate proteins to give the response. Doctor Smith said this part of the figure is not the key point.', src: 'PC 32; 10/30 T 430-448'},
  {text: 'A P D E four inhibitor blocks phosphodiesterase four, so the breakdown stops and cyclic A M P builds up. Crisaborole, applied to the skin for atopic dermatitis, and apremilast, taken by mouth for psoriasis, share this mechanism.', src: 'PC 33-34; 10/30 T 448-466'},
  {text: 'More cyclic A M P relaxes smooth muscle and inhibits inflammatory cells, so less cytokine is made and inflammation falls. P D E four is the main form in mast cells, eosinophils, neutrophils, T lymphocytes and macrophages. That makes these drugs nonsteroidal anti-inflammatories.', src: 'PC 32; 10/30 T 430-472'},
]};

DIA_NARR['fig-ribosome'] = {steps: [
  {text: 'This figure shows the bacterial ribosome and where the antibiotics bind. The seventy S ribosome is a large fifty S subunit and a small thirty S subunit, sitting on the messenger R N A. The growing chain, amino acids one to five, sits on a transfer R N A in the donor site.', src: 'PC 42; 10/30 T 585-609'},
  {text: 'Step one of protein synthesis: a charged transfer R N A, carrying amino acid six, binds the acceptor site, beside the growing chain.', src: 'PC 42; 10/30 T 585-609'},
  {text: 'Step two: peptide bond formation links the growing chain to amino acid six, so the chain is now one amino acid longer.', src: 'PC 42; 10/30 T 585-609'},
  {text: 'Step three: the uncharged transfer R N A is released. Step four is translocation: the longer chain, with its transfer R N A, shifts over to the donor site, and the cycle can repeat.', src: 'PC 42; 10/30 T 585-609; 11/03 T 20-26'},
  {text: 'Tetracyclines, such as sarecycline, minocycline and doxycycline, bind the thirty S subunit irreversibly. They block the charged transfer R N A from the acceptor site, which is step one, so no new amino acid can be added.', src: 'PC 43; 11/03 T 26-36'},
  {text: 'Two drugs act on the fifty S subunit. Chloramphenicol blocks peptide bond formation, step two. Clindamycin prevents translocation, step four.', src: 'PC 42, 46; 11/03 T 53-56 (resolved to translocation, L3-011)'},
  {text: 'The macrolides, erythromycin and azithromycin, also bind the fifty S subunit. Tetracyclines, clindamycin and the macrolides are all bacteriostatic: they keep the bacteria from multiplying rather than killing them.', src: 'PC 43, 46, 47 (macrolide step held: subunit only); 11/03 T 65-68'},
]};

DIA_NARR['fig-folate-path'] = {steps: [
  {text: 'This figure shows how bacteria make their own folate, and two drugs that block it in sequence. First, the enzyme dihydropteroate synthase joins pteridine and para-aminobenzoic acid, called P A B A, into dihydropteroic acid.', src: 'PC 48-49; 11/03 T 73-89'},
  {text: 'With glutamate, dihydropteroic acid becomes dihydrofolic acid. Then dihydrofolate reductase, using N A D P H, turns it into tetrahydrofolic acid.', src: 'PC 49; 11/03 T 73-89'},
  {text: 'Folate is needed to make purines, two of the D N A bases. Without it, a cell cannot divide.', src: 'PC 49 (Louis\'s note); 11/03 T 73-89'},
  {text: 'The first block: sulfonamides, such as sulfamethoxazole, compete with P A B A and block the first step. Dapsone, used for leprosy, acts the same way as the sulfonamides.', src: 'PC 49-50; 11/03 T 80-98'},
  {text: 'The second block: trimethoprim inhibits the bacterial dihydrofolate reductase. With two blocks in sequence, the combination is much more effective than either drug alone. With no purines, the bacteria cannot divide.', src: 'PC 49; 11/03 T 73-89'},
]};

DIA_NARR['fig-folate-cycle'] = {steps: [
  {text: 'This figure shows the folate cycle in human cells, where methotrexate acts. Folic acid from the diet is reduced to dihydrofolate by folate reductase.', src: 'PC 60 (Louis\'s note "from diet"); 11/03 T 212-236'},
  {text: 'Folate reductase, also called dihydrofolate reductase, or D H F R, then turns dihydrofolate into tetrahydrofolate. This is the step methotrexate blocks.', src: 'PC 60; 11/03 T 212-228'},
  {text: 'Serine transhydroxymethylase, turning serine into glycine, makes N five, N ten methylene tetrahydrofolate, which goes on to make the purines.', src: 'PC 60; 11/03 T 228-236'},
  {text: 'Thymidylate synthase turns d U M P into d T M P for D N A synthesis, which gives back dihydrofolate. So the pathway is a cycle.', src: 'PC 60; 11/03 T 228-236'},
  {text: 'Methotrexate, a folic acid analog, inhibits D H F R. Less tetrahydrofolate means fewer purines and less d T M P, so keratinocytes cannot keep proliferating. Trimethoprim blocks the bacterial form of this enzyme; methotrexate blocks the human one.', src: 'PC 59-60; 11/03 T 212-236'},
]};

DIA_NARR['fig-costim'] = {steps: [
  {text: 'This figure shows co-stimulation and how abatacept blocks it. Signal one: the antigen-presenting cell, a dendritic cell, holds the antigen on M H C, and the T cell receptor binds it. This alerts the T cell.', src: 'PC 25, 63; 11/03 T 269-308 (MHC class held, OPEN_QUESTIONS L3 1)'},
  {text: 'Positive signal two, called co-stimulation: C D eighty and eighty-six on the antigen-presenting cell bind C D twenty-eight on the T cell. The T cell activates and makes interleukin two.', src: 'PC 63; 11/03 T 269-308'},
  {text: 'Negative signal two: the same C D eighty and eighty-six bind a different receptor on the T cell, C T L A four. The T cell then stops: no activation, no interleukin two.', src: 'PC 63; 11/03 T 269-308'},
  {text: 'Abatacept is a fusion protein: the extracellular part of C T L A four joined to the F c part of a human I G G antibody, which gives it structure. Made like C T L A four, it probably binds C D eighty and eighty-six more strongly than C D twenty-eight does.', src: 'PC 63; 11/03 T 274-281, 314-340'},
  {text: 'Abatacept occupies C D eighty and eighty-six, so C D twenty-eight cannot bind them. There is no positive signal two, the T cell does not activate, and no interleukin two is made. That is why abatacept is called an inhibitor of co-stimulation.', src: 'PC 63; 11/03 T 340-357'},
]};

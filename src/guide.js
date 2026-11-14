/* ==========================================================================
   GUIDES: one section per learning objective, grouped by slide deck
   ==========================================================================
   Order (Louis, 2026-11-08): Dr. Smith's Skin Pathophysiology deck (her five
   objectives, slide 3), her Skin Pharmacology deck (five objectives, slide 3),
   her sun-exposure deck (five objectives, slide 6, plus the psoralen slides
   2-4), then Dr. Sikazwe's DPAW deck (his objectives, p. 3), section by
   section over his assigned pages for Exam 1 (11/06); then Dr. Patel's Dermatitis
   Therapeutics deck (Exam 2; her seven objectives, slides 7-8; DT = that deck's slide,
   T@ = 11/06 transcript byte offset).

   Anchors links.js uses are kept: gobj-l1-1 (skin structure), gobj-l1-2
   (epidemiology), gobj-l1-3 (etiology and pathology), gobj-l1-4 (general
   mechanisms by drug class, now Skin Pharmacology objective 2). Every fact is
   cited: PP = Skin-Pathophys-Students-2026.pdf slide, PCol =
   Skin-PCol-Students-2026.pdf slide, Sun = DEENT_Sun_Exposure_2026.pdf slide,
   DPAW = f26-DEENT-DPAW-mc.pdf file page; T = lecture-only transcript line
   (10/29, 10/30, 11/03), audio = sun-lecture recording time, T@ = 11/04 time.
   Long tables are not repeated here; the chips jump to Tell apart, Reference,
   the Drug list and the Atlas.
   ========================================================================== */
const GUIDE_HTML = `
<h2>Guides by slide deck and learning objective</h2>
<p class="sub">Each deck's own learning objectives, one section per objective, with what the lecture taught for it and the slide it comes from. PP = Skin-Pathophys-Students-2026.pdf, PCol = Skin-PCol-Students-2026.pdf, Sun = DEENT_Sun_Exposure_2026.pdf, DPAW = f26-DEENT-DPAW-mc.pdf, where "slide N" is the PDF page number, the same number the questions cite (from PDF page 23 on, the number printed on the slide is one lower, his list of 11/06; the numbering question is still open with Louis); (T) = said in lecture. Nothing here is scored.</p>

<h2 class="gdeck" id="gdeck-pp">Skin Pathophysiology (Dr. Smith, 10/29)</h2>

<section class="gobj" id="gobj-l1-1">
<h3>Skin Pathophysiology · Objective 1: basic structures and functions of the skin</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Describe the basic structures and functions of the skin</b><i>PP 4&ndash;6</i></div>
<div class="gpt"><h5>Layers and keratinocytes (PP 5)</h5><ul><li>Epidermis (outer), dermis (middle; vessels and nerves), hypodermis (inner; vessels, adipose, some nerve endings) (T 32&ndash;37).</li><li>Keratinocytes start cuboidal in the stratum basale, move up, flatten, make keratin and lose the nucleus by the stratum corneum (T 39&ndash;48). The flat cells of the stratum corneum lie in overlapping layers that keep bacteria out and fluid in (T 48&ndash;54).</li></ul></div>
<div class="gpt"><h5>Sebum (PP 6)</h5><ul><li>Made by the sebaceous gland: glycerides, wax esters and cholesterol; retards water loss; most on face, scalp, back and neck.</li><li>(T) &ldquo;the most important thing to remember here is we have [sebum] produced by the sebaceous gland, and these cuboidal keratinocytes, they do move on up&rdquo; (T 78&ndash;80).</li></ul></div>
<div class="gtell"><b>Where each disease starts from this anatomy</b><ul><li>AD: a barrier defect in the epidermis (filaggrin, PP 15). Psoriasis: keratinocytes divide too fast and do not mature (PP 19, 23). Acne: the pilosebaceous unit, with more sebum (PP 30, 32).</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-2">
<h3>Skin Pathophysiology · Objective 2: epidemiology of the three diseases</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Differentiate between the epidemiologic aspects of the three diseases</b><i>PP 10, 20, 31, 35</i></div>
<table class="reftab"><thead><tr><th style="width:18%">Disease</th><th>Incidence or prevalence, as each slide words it</th><th>Sex and age</th><th>Family and setting</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b> (PP 10)</td><td>Incidence in developed countries: 15&ndash;30% of children, 2&ndash;10% of adults; prevalence has increased over recent decades</td><td>Males and females alike</td><td>Lower in rural areas (hygiene hypothesis); goes with asthma and rhinitis (atopic conditions); two- to threefold risk with one atopic parent, three- to fivefold with two</td></tr>
<tr><td><b>Psoriasis</b> (PP 20)</td><td>About 3% of the US population; the most common immune-mediated inflammatory disease worldwide; varies with climate, sun exposure and ethnicity</td><td>Males and females equally; any age, but most patients have onset before 40</td><td>A genetic basis that probably needs environmental triggers; about 30% have a first-degree relative with it</td></tr>
<tr><td><b>Acne</b> (PP 31, 35)</td><td>Lifetime prevalence approaches 90%; the most common disease treated by dermatologists</td><td>Onset at puberty with androgens; ages 25&ndash;58: 12% of women, 3% of men; more severe in boys in puberty, in women in adulthood</td><td>81% likelihood if both parents had acne (PP 35)</td></tr>
</tbody></table>
<div class="gtell"><b>Tell apart</b><ul><li>3% is psoriasis; 15&ndash;30% of children is AD; about 90% lifetime is acne.</li><li>Family numbers: AD two- to threefold (one parent) and three- to fivefold (two); psoriasis about 30% first-degree relative; acne 81% with both parents.</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-3">
<h3>Skin Pathophysiology · Objective 3: etiologies and pathologies</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Describe the etiologies and pathologies for each of these three conditions</b><i>PP 8&ndash;16, 19&ndash;26, 30&ndash;35</i></div>
<div class="gpt"><h5>Atopic dermatitis (PP 8&ndash;16)</h5><ul>
<li>Definition: a chronic, pruritic inflammatory skin disease, often called eczema; pruritus is the primary symptom (PP 8).</li>
<li>Signs: red to brownish-gray patches, itch worst at night, small vesicles that leak and crust, thickened or scaly skin; hands and feet in adults, face and scalp in children; secondary bacterial infection common (PP 11).</li>
<li>Exacerbating factors: allergens (foods, soaps, detergents, fragrances), long hot baths, dry skin, stress, sweating, rapid temperature change or low humidity, wool or man-made fabrics (PP 12).</li>
<li>The first trigger is unknown: neuropeptides, irritation or scratching may release proinflammatory cytokines from keratinocytes; allergens may cause T-cell mediated, IgE-independent reactions (PP 13; T 163&ndash;169).</li>
<li>Features: skin barrier dysfunction; deviation toward TH2; then increased IgE; complicated by colonization with pathologic organisms (PP 13).</li>
<li>Genes: epidermal structural proteins and immune-system genes (PP 14). FLG &rarr; profilaggrin &rarr; filaggrins &rarr; barrier; variants let allergens in. About 40% of people lacking FLG do not develop AD (PP 15).</li>
<li>TH1 cytokines (interferon-gamma, IL-12) suppress IgE; TH2 cytokines (IL-5, IL-13) increase it. AD has more TH2 activity: IL-3, IL-4, IL-5, IL-10, IL-13, blood eosinophilia, high total IgE, more mast cells. &ldquo;Some of our therapies antagonize these cytokines&rdquo; (PP 16).</li></ul></div>
<div class="gpt"><h5>Psoriasis (PP 19&ndash;26)</h5><ul>
<li>Definition: recurrent exacerbations and remissions of thickened, erythematous, scaly plaques; keratinocyte hyperproliferation and incomplete differentiation; a T-cell-mediated systemic inflammatory disease (PP 19).</li>
<li>Trauma (bug bite, skin infection) &rarr; APCs present antigen to T cells &rarr; TNF-alpha, interferon-gamma, IL-23, IL-17 &rarr; keratinocyte hyperproliferation and chronic systemic inflammation; comorbidities follow from the chronic inflammation (PP 21&ndash;22).</li>
<li>Keratinocytes: 1.5 days to divide and 4 to shed, against 13 and 26 normally (PP 23).</li>
<li>Contributing factors: climate, stress, infections, trauma (Koebner response: lesions at previously clear sites after friction, venipuncture, bites, surgery or pressure), medications, most commonly lithium and beta blockers (PP 24).</li>
<li>Nail psoriasis: pitting, ridging, discoloration, onycholysis. Psoriatic arthritis: asymmetric (hands, feet, knees), skin lesions usually first, no rheumatoid factor elevation (PP 26).</li></ul></div>
<div class="gpt"><h5>Acne (PP 30&ndash;35)</h5><ul>
<li>Definition: a common, self-limiting disease of the pilosebaceous units, on the face, upper back and chest (PP 30).</li>
<li>Androgens &rarr; more sebum, altered keratinization and hyperproliferation of the ductal epidermis, P. acnes colonization of the duct, inflammation (PP 32).</li>
<li>Skin cells stick together and plug the channel with sebum. P. acnes lipase turns sebum glycerides into free fatty acids, which irritate the follicle wall and are antigenic (PP 33).</li>
<li>Exacerbating factors: humidity and sweating; acne mechanica (occlusion or irritation), occupational acne, acne cosmetica (comedogenic oils); stress; hormones; drug-induced acne (phenytoin, isoniazid, phenobarbital, lithium, steroids, azathioprine, quinine, rifampin and others); genetics; high glycemic index diet, perhaps dairy (PP 35).</li></ul></div>
<!--DIA:acne-cascade-->
<div class="gpoll"><b>Her polls (PP 38)</b><ul><li>Major pathology of AD: skin barrier dysfunction (TRUE); keratinocyte hyperproliferation (FALSE, psoriasis); excess sebum (FALSE, acne).</li><li>Major pathology of psoriasis: keratinocyte hyperproliferation (TRUE).</li><li>Major pathology of acne: excess sebum production (TRUE). Keratinocyte hyperproliferation is FALSE: &ldquo;This is a feature of psoriasis&rdquo; (T 573&ndash;577).</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="tell:tell-l1-diseases">Tell apart: the three diseases</button></div>
</section>

<section class="gobj" id="gobj-pp-4">
<h3>Skin Pathophysiology · Objective 4: classes of medications for each condition</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>List the classes of medications used to treat each of these conditions</b><i>PP 17, 28, 37</i></div>
<table class="reftab"><thead><tr><th style="width:18%">Disease</th><th>Classes on her slide</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b> (PP 17)</td><td>Corticosteroids; calcineurin inhibitors; PDE-4 inhibitor; IL-4 receptor alpha/IL-13 receptor antagonists; JAK inhibitor</td></tr>
<tr><td><b>Psoriasis</b> (PP 28)</td><td>Corticosteroids; DNA synthesis inhibitors; dihydrofolate reductase inhibitor/T-cell and cytokine suppressors; T-cell inhibitors; TNF-alpha inhibitors; JAK inhibitors; IL-12 &amp; IL-13 inhibitors (as printed); IL-23 inhibitor; IL-17A inhibitor; nuclear receptor binders; psoralens; calcineurin inhibitors; cytotoxic agents</td></tr>
<tr><td><b>Acne</b> (PP 37)</td><td>Keratolytics; antibiotics; nuclear receptor binders; antiandrogens</td></tr>
</tbody></table>
<div class="gtell"><b>Classes on more than one list</b><ul><li>Corticosteroids and calcineurin inhibitors: AD and psoriasis. JAK inhibitors: AD and psoriasis. Nuclear receptor binders: psoriasis and acne (PP 17, 28, 37).</li><li>Only acne: keratolytics, antibiotics, antiandrogens. Only AD: PDE-4 inhibitor and IL-4R&alpha;/IL-13R antagonists on PP 17 (apremilast, a PDE-4 inhibitor, is taught for psoriasis on PCol 34).</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-l1-classes">Reference: drug classes by disease</button><button type="button" class="chip" data-jump="ref:ref-l1-acnemap">Reference: acne pathology and drugs</button></div>
</section>

<section class="gobj" id="gobj-pp-5">
<h3>Skin Pathophysiology · Objective 5: general mechanisms of the drug classes</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Describe the general mechanisms of actions of the drug classes used to treat these three conditions</b><i>PP 16, 27, 36</i></div>
<div class="gpt"><h5>Each pathology and the classes aimed at it</h5><ul>
<li>AD: TH2 cytokines drive IgE; &ldquo;some of our therapies antagonize these cytokines&rdquo; (PP 16): dupilumab blocks IL-4R&alpha;, shared by the IL-4 and IL-13 receptors (PCol 64). Corticosteroids and calcineurin inhibitors suppress the immune response (PCol 11, 27).</li>
<li>Psoriasis treatment rationale (PP 27): agents that modulate the abnormal immune response (topical corticosteroids, biologic response modifiers) and medications that affect cell turnover (retinoids); manage comorbidities; patient-specific; quality of life.</li>
<li>Acne (PP 36): P. acnes proliferation &rarr; benzoyl peroxide, antibiotics, isotretinoin; abnormal keratinization &rarr; salicylic acid, benzoyl peroxide, topical retinoids, isotretinoin; inflammation &rarr; corticosteroids, antibiotics; abnormal sebum &rarr; antiandrogens, isotretinoin.</li></ul></div>
<div class="gask"><b>Mechanism of each class</b><ul><li>The class-by-class mechanisms are in Skin Pharmacology, Objective 2, below.</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="guide:gobj-l1-4">Guide: general mechanism of each class</button><button type="button" class="chip" data-jump="ref:ref-l1-acnemap">Reference: acne pathology and drugs</button></div>
</section>

<h2 class="gdeck" id="gdeck-pc">Skin Pharmacology (Dr. Smith, 10/29, 10/30, 11/03)</h2>
<div class="gask"><b>Her Exam 1 hints (pasted by Louis, 2026-11-07)</b><ul><li>&ldquo;The drugs in each pharmacological class (know the drug table); The general mechanism of action for each drug class. This includes being able to explain why that MOA is good for treating the skin conditions it is indicated for.; The details of the MOAs differentiate the drugs within the class; ... Know Black Box warning adverse drug reactions&rdquo;.</li><li>&ldquo;Know what the drugs target.&rdquo; Fill-in-the-blanks focus on drug mechanisms. She asks with generic names only (10/29, T 618&ndash;621).</li></ul></div>

<section class="gobj" id="gobj-pc-1">
<h3>Skin Pharmacology · Objective 1: which medications treat AD, psoriasis and acne</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>List which medications are used for treating atopic dermatitis, psoriasis, and acne</b><i>PCol 8&ndash;76; Sun 3; PP 17, 28, 37</i></div>
<table class="reftab"><thead><tr><th style="width:14%">Disease</th><th>Her slide names the disease for the drug</th><th style="width:34%">Her class list names the class; the drug's use is not on her slide</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b></td><td>Topical corticosteroids (PCol 11); pimecrolimus, tacrolimus topical, adults and children over 2 (PCol 27); crisaborole topical (PCol 33); dupilumab, moderate-to-severe AD in adults (PCol 64)</td><td>JAK inhibitor (PP 17): ruxolitinib and upadacitinib are on the drug chart's AD page (p. 2) and on Dr. Sikazwe's eczema page (DPAW 8); her PCol 76 gives their mechanisms only</td></tr>
<tr><td><b>Psoriasis</b></td><td>Corticosteroids (PCol 11); tazarotene (PCol 18); acitretin (PCol 20); calcipotriene (PCol 21); cyclosporine oral (PCol 29); apremilast oral (PCol 34); antipsoriatic cytotoxic agents: coal tar, anthralin, shale tar, selenium sulfide, zinc pyrithione (PCol 52&ndash;57); methotrexate (PCol 59); IL-17 inhibitors secukinumab, ixekizumab, brodalumab (PCol 65&ndash;66); risankizumab, moderate to severe plaque psoriasis (PCol 69); methoxsalen with UVA (Sun 3; audio 00:29&ndash;01:20)</td><td>Plaques named, disease not: ustekinumab (PCol 67) and the TNF-&alpha; inhibitors etanercept, infliximab, adalimumab, golimumab, certolizumab pegol (PCol 70) reduce the number and size of plaques. Class on PP 28, drug on the chart's psoriasis pages (pp. 4&ndash;5): guselkumab, tildrakizumab-asmn (IL-23 inhibitor), tofacitinib (JAK inhibitors). Abatacept: co-stimulation mechanism on PCol 63, listed on the chart's psoriasis pages</td></tr>
<tr><td><b>Acne</b></td><td>Tretinoin, adapalene, tazarotene topical (PCol 16&ndash;18); isotretinoin oral, severe cystic acne (PCol 19); benzoyl peroxide, sulfur, salicylic acid (PCol 36&ndash;39); sarecycline, minocycline, doxycycline (PCol 43&ndash;45); clindamycin (PCol 46); erythromycin, azithromycin (PCol 47); dapsone topical gel (PCol 50)</td><td>Antiandrogen (PP 37): spironolactone is on the chart's acne page (p. 3). Trimethoprim/sulfamethoxazole: mechanism only on PCol 48&ndash;49; chart p. 3</td></tr>
<tr><td><b>Other uses on her slides</b></td><td>Metronidazole: rosacea (PCol 51). Shale tar: also eczema, rosacea, acute otitis (PCol 57). Tazarotene: also wrinkles (PCol 18)</td><td>&mdash;</td></tr>
</tbody></table>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="drugs:">Drug list: every chart drug as a card</button><button type="button" class="chip" data-jump="ref:ref-targets">Reference: drug targets, write it first</button></div>
</section>

<section class="gobj" id="gobj-l1-4">
<h3>Skin Pharmacology · Objective 2: general mechanism of each class, and why it helps</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>Explain the general mechanisms of action of each pharmacological drug class</b><i>PCol 5&ndash;76; Sun 3</i></div>
<div class="gpt"><h5>Nuclear receptor binders (PCol 5&ndash;7): corticosteroids, retinoids, vitamin D analog</h5><ul><li>The drug binds a receptor inside the cell; the complex acts directly at a response element or indirectly by binding NF-kB or AP-1, to promote or inhibit transcription.</li><li>(T) &ldquo;either enhance the expression of anti-inflammatory proteins, or decrease the expression of inflammatory proteins&rdquo; (T 680&ndash;683).</li></ul></div>
<div class="gpt"><h5><b>Corticosteroids</b> · PCol 8&ndash;11</h5><ul><li><b>Target, mechanism:</b> Glucocorticoid receptor; CBG carries the steroid in blood; Hsp90 leaves the receptor when the steroid binds; the complex binds the GRE</li><li><b>Why it helps:</b> Immunosuppressive, so used for psoriasis and AD (PCol 11; T 873&ndash;875). Low potency (hydrocortisone 1%) for the face and for long-term maintenance; medium potency (betamethasone valerate 0.1%) for the body; mid-strength to high potency for short-term exacerbations; avoid occluded or abraded skin</li></ul></div>
<!--DIA:nr-action-->
<div class="gpt"><h5><b>Retinoids</b> (tretinoin, adapalene, tazarotene, isotretinoin, acitretin) · PCol 14&ndash;15, 19</h5><ul><li><b>Target, mechanism:</b> RAR: differentiation and proliferation (acne, psoriasis, photoaging); RXR: apoptosis (Kaposi sarcoma)</li><li><b>Why it helps:</b> Acne: less cohesion between epidermal cells, faster turnover; open comedones expelled, closed ones opened. Psoriasis: precise mechanism unknown, may be anti-inflammatory and antiproliferative. Aging: more collagen, new vessels, thicker epidermis. Isotretinoin: appears to inhibit sebaceous gland size and function (PCol 19)</li></ul></div>
<!--DIA:nr-rar-->
<div class="gpt"><h5><b>Vitamin D analog</b> (calcipotriene) · PCol 21</h5><ul><li><b>Target, mechanism:</b> Vitamin D receptor, which pairs with RXR-&alpha;</li><li><b>Why it helps:</b> Inhibits proliferation, promotes keratinocyte differentiation, decreases inflammatory cytokine release (psoriasis)</li></ul></div>
<!--DIA:nr-vdr-->
<div class="gpt"><h5><b>Calcineurin inhibitors</b> (pimecrolimus, tacrolimus, cyclosporine) · PCol 24&ndash;27</h5><ul><li><b>Target, mechanism:</b> Cyclosporine binds cyclophilin, tacrolimus binds FKBP; the complex inhibits calcineurin, so less IL-2 is made for T-cell proliferation (in the cascade after signals 1 and 2)</li><li><b>Why it helps:</b> Inhibits activation of T cells and mast cells, blocking proinflammatory cytokines and mediators; topical CNIs relieve pruritus after the first few days of treatment (PCol 27)</li><li><b>Uses of the class:</b> &ldquo;used to treat atopic dermatitis, psoriasis&rdquo; (Dr. Smith, PCol 24). The slide gives this for the class; the drug chart lists each drug&rsquo;s own indication.</li></ul></div>
<div class="f2fig" id="fig-cni-nfat"><!--DIA:fig-cni-nfat--></div>
<div class="gpt"><h5><b>PDE-4 inhibitors</b> (crisaborole, apremilast) · PCol 32&ndash;34</h5><ul><li><b>Target, mechanism:</b> PDE-4, the main PDE isoform in inflammatory cells; cAMP is not broken down</li><li><b>Why it helps:</b> More cAMP inhibits mast cells, eosinophils, neutrophils and T cells (AD: crisaborole; psoriasis: apremilast)</li></ul></div>
<div id="g-fig-pde4-camp"><!--DIA:fig-pde4-camp--></div>
<div class="gpt"><h5><b>Keratolytics</b> (benzoyl peroxide, sulfur, salicylic acid) · PCol 35&ndash;39</h5><ul><li><b>Target, mechanism:</b> BPO: antimicrobial against P. acnes plus peeling and comedolytic (benzoic acid probable active form). Sulfur: reduced to hydrogen sulfide in keratinocytes; bacteriostatic. Salicylic acid: solubilizes the cell surface proteins that hold the stratum corneum together</li><li><b>Why it helps:</b> Break down keratin so cells slough, follicles stay open, plugs clear (acne)</li></ul></div>
<div class="gpt"><h5><b>Antibiotics/antimicrobials</b> · PCol 42&ndash;50</h5><ul><li><b>Target, mechanism:</b> Tetracyclines: 30S, block aminoacyl-tRNA at the acceptor site. Clindamycin, macrolides: 50S, prevent translocation. All bacteriostatic. Sulfamethoxazole competes with PABA; trimethoprim inhibits bacterial DHFR. Dapsone (acne): anti-inflammatory, neutrophils a possible site</li><li><b>Why it helps:</b> A bacterium (P. acnes) contributes to acne (10/30 T 574&ndash;576); tetracycline efficacy in acne may depend more on anti-inflammatory activity (PCol 45)</li></ul></div>
<div id="g-fig-ribosome"><!--DIA:fig-ribosome--></div>
<div id="g-fig-folate-path"><!--DIA:fig-folate-path--></div>
<div class="gpt"><h5><b>Cytotoxic agents</b> (coal tar, anthralin, shale tar, selenium sulfide, zinc pyrithione) · PCol 53&ndash;57</h5><ul><li><b>Target, mechanism:</b> Coal tar: antiproliferative, anti-inflammatory, crosslinks DNA. Anthralin: may act on keratinocyte mitochondria; prevents T-lymphocyte activation. Shale tar: unknown. Selenium sulfide, zinc pyrithione: cytostatic and antifungal</li><li><b>Why it helps:</b> Decrease the rate of epidermal cell turnover (psoriasis)</li></ul></div>
<div class="gpt"><h5><b>DHFR inhibitor</b> (methotrexate) · PCol 59</h5><ul><li><b>Target, mechanism:</b> Folic acid analog; inhibits DHFR, so less THF and fewer purines; cell death; may be directly anti-inflammatory</li><li><b>Why it helps:</b> Reduces keratinocyte hyperproliferation and the number of T cells (psoriasis)</li></ul></div>
<div id="g-fig-folate-cycle"><!--DIA:fig-folate-cycle--></div>
<div class="gpt"><h5><b>Co-stimulation inhibitor</b> (abatacept) · PCol 63</h5><ul><li><b>Target, mechanism:</b> Fusion protein (CTLA-4 domain + IgG Fc) binds CD80/86 on APCs, so CD28 cannot bind</li><li><b>Why it helps:</b> Blocks the positive second signal needed for T-cell activation</li></ul></div>
<div id="g-fig-costim"><!--DIA:fig-costim--></div>
<div class="gpt"><h5><b>IL-4R&alpha; antagonist</b> (dupilumab) · PCol 64</h5><ul><li><b>Target, mechanism:</b> IL-4 receptor alpha subunit, shared by the IL-4 and IL-13 receptors</li><li><b>Why it helps:</b> IL-4 and IL-13 promote IgE synthesis; blocking lowers proinflammatory cytokines, chemokines and IgE (AD)</li></ul></div>
<div class="gpt"><h5><b>IL-17 inhibitors</b> (secukinumab, ixekizumab, brodalumab) · PCol 65&ndash;66</h5><ul><li><b>Target, mechanism:</b> Secukinumab, ixekizumab: IL-17A cytokine. Brodalumab: IL-17 receptor A</li><li><b>Why it helps:</b> Keratinocytes are the main IL-17 target in psoriasis (hyperproliferation, barrier dysfunction); blocking reduces number and size of plaques</li></ul></div>
<div class="gpt"><h5><b>IL-12/23 and IL-23 inhibitors</b> (ustekinumab; guselkumab, tildrakizumab-asmn, risankizumab) · PCol 67&ndash;69</h5><ul><li><b>Target, mechanism:</b> Ustekinumab: p40, shared by IL-12 and IL-23. The others: p19 of IL-23</li><li><b>Why it helps:</b> Suppress proinflammatory Th1 and Th17 cells; less release of proinflammatory cytokines and chemokines</li></ul></div>
<div class="f2fig" id="fig-il-axis"><!--DIA:fig-il-axis--></div>
<div class="gpt"><h5><b>TNF-&alpha; inhibitors</b> (etanercept, infliximab, adalimumab, golimumab, certolizumab pegol) · PCol 70&ndash;74</h5><ul><li><b>Target, mechanism:</b> Bind TNF-&alpha;, keeping it from its receptors on inflammatory cells</li><li><b>Why it helps:</b> TNF-&alpha; is an inflammatory cytokine; blocking it reduces the number and size of plaques</li></ul></div>
<div class="gpt"><h5><b>JAK inhibitors</b> (tofacitinib, ruxolitinib, upadacitinib) · PCol 75&ndash;76</h5><ul><li><b>Target, mechanism:</b> Inhibit Janus kinase; small molecules that get inside the cell (T 570&ndash;573)</li><li><b>Why it helps:</b> Inhibit the production of inflammatory cytokines</li></ul></div>
<div class="gpt"><h5><b>Psoralens</b> (methoxsalen + UVA) · Sun 3; PCol 78</h5><ul><li><b>Target, mechanism:</b> With UV light of 320&ndash;340 nm, psoralens intercalate into DNA</li><li><b>Why it helps:</b> Antiproliferative, immunosuppressive, anti-inflammatory: normalizes keratinocytes, reorganizes blood vessels, cytotoxic to T cells; increases melanin</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-targets">Reference: drug targets, write it first</button><button type="button" class="chip" data-jump="tell:tell-l1-drugs">Tell apart: nuclear receptor binders</button></div>
</section>

<section class="gobj" id="gobj-pc-3">
<h3>Skin Pharmacology · Objective 3: differences between drugs in the same class</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>Explain the differences between the drugs within the same class</b><i>PCol 16&ndash;76</i></div>
<table class="reftab"><thead><tr><th style="width:17%">Class</th><th>What separates the drugs</th><th style="width:10%">Slide</th></tr></thead><tbody>
<tr><td><b>Topical retinoids</b></td><td>Tretinoin: &lt;10% absorbed; microsphere form less irritating. Adapalene: photochemically stable, can be combined with benzoyl peroxide, less irritating, mild to moderate acne. Tazarotene: photosensitivity, psoriasis, acne and wrinkles, not in pregnancy</td><td>PCol 17&ndash;18</td></tr>
<tr><td><b>Oral retinoids</b></td><td>Isotretinoin: severe cystic acne, lipid changes, skeletal hyperostosis in children, iPLEDGE (men too). Acitretin: psoriasis (pustular), hepatotoxicity, half-life of months, no ethanol for 2 months, no blood donation or pregnancy for 3 years</td><td>PCol 19&ndash;20</td></tr>
<tr><td><b>Calcineurin inhibitors</b></td><td>Pimecrolimus stays in the skin better than topical tacrolimus. Cyclosporine binds cyclophilin, tacrolimus FKBP. Cyclosporine only: gingival hyperplasia; tacrolimus only: neuropathies. Cyclosporine's Neoral (microemulsion) and Sandimmune are not bioequivalent and not interchangeable</td><td>PCol 26&ndash;30</td></tr>
<tr><td><b>PDE-4 inhibitors</b></td><td>Crisaborole: topical 2% ointment, mild to moderate AD, 2 years and older. Apremilast: oral, psoriasis, GI effects, headache, weight loss, caution in depression</td><td>PCol 33&ndash;34</td></tr>
<tr><td><b>Keratolytics</b></td><td>BPO: antimicrobial and comedolytic, sensitizer, bleaches. Sulfur: bacteriostatic, hydrogen sulfide, comedogenic, odor. Salicylic acid: 3&ndash;6% for acne, &gt;6% damages tissue, up to 40% for warts and corns</td><td>PCol 36&ndash;40</td></tr>
<tr><td><b>Antibiotics</b></td><td>Tetracyclines 30S; clindamycin and macrolides 50S. Doxycycline and minocycline more lipid soluble; minocycline and sarecycline may be less photosensitizing; sarecycline narrower spectrum; minocycline ototoxicity. Clindamycin: water-based gel or lotion better tolerated; metronidazole: gel more drying, cream or lotion better tolerated</td><td>PCol 43&ndash;51</td></tr>
<tr><td><b>Cytotoxic agents</b></td><td>Coal tar photosensitizing and carcinogenic; shale tar not photosensitizing and less irritating; anthralin stains and has no systemic effects; selenium sulfide and zinc pyrithione cytostatic and antifungal</td><td>PCol 53&ndash;57</td></tr>
<tr><td><b>IL-17, IL-12/23, IL-23</b></td><td>Secukinumab (human) and ixekizumab (humanized) bind IL-17A; brodalumab binds the receptor. Ustekinumab binds p40 (IL-12 and IL-23); guselkumab (human), tildrakizumab-asmn and risankizumab (humanized) bind p19</td><td>PCol 66&ndash;69</td></tr>
<tr><td><b>TNF-&alpha; inhibitors</b></td><td>Etanercept: two p75 TNF receptors + IgG1 Fc. Infliximab: chimeric, IV, anti-drug antibodies, infusion reactions, lupus-like syndrome. Adalimumab: human, SubQ, less antigenic. Golimumab: human. Certolizumab pegol: pegylated Fab, every 2 weeks, may extend to 4 after 3 doses</td><td>PCol 71&ndash;74</td></tr>
<tr><td><b>JAK inhibitors</b></td><td>Tofacitinib: oral, boxed warning. Ruxolitinib: JAK1 and JAK2, topical and oral. Upadacitinib: more potent at JAK1 and JAK2 than JAK3 and TYK2 in an enzyme assay; selectivity unsettled</td><td>PCol 76</td></tr>
</tbody></table>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="tell:tell-l2">Tell apart: Smith 10/30</button><button type="button" class="chip" data-jump="tell:tell-l3">Tell apart: Smith 11/03</button></div>
</section>

<section class="gobj" id="gobj-pc-4">
<h3>Skin Pharmacology · Objective 4: drug interactions discussed in class</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>List the drug interactions discussed in class</b><i>PCol 18, 20, 22, 30, 34, 40, 47, 67; 10/30 T 470&ndash;472, 557&ndash;563</i></div>
<table class="reftab"><thead><tr><th style="width:22%">Drug</th><th>Interaction</th><th style="width:12%">Slide</th></tr></thead><tbody>
<tr><td><b>Cyclosporine, tacrolimus</b> (oral)</td><td>Multiple drug interactions because they are metabolized by CYP3A4</td><td>PCol 30</td></tr>
<tr><td><b>Apremilast</b></td><td>Metabolized by CYP3A4: patients should not also be on CYP3A4 enzyme inducers, which lower its effect</td><td>PCol 34; 10/30 T 470&ndash;472</td></tr>
<tr><td><b>Erythromycin, azithromycin</b></td><td>Orally, many drug interactions. Topically, burning and drying, especially when combined with benzoyl peroxide</td><td>PCol 47</td></tr>
<tr><td><b>Adapalene + benzoyl peroxide</b></td><td>Adapalene can be combined with benzoyl peroxide; the other retinoids are &ldquo;way too irritating&rdquo; with it</td><td>PCol 18; 10/30 T 72&ndash;73</td></tr>
<tr><td><b>Salicylic acid</b></td><td>Salicylism (a salicylate overdose, PCol 40): other topical salicylates, such as a salicylate muscle rub, add to the salicylate absorbed (10/30 T 557&ndash;563)</td><td>PCol 40; 10/30 T 557&ndash;563</td></tr>
<tr><td><b>Calcipotriene + topical steroid</b></td><td>The steroid reduces calcipotriene's irritation</td><td>PCol 22</td></tr>
<tr><td><b>Acitretin + ethanol</b></td><td>Ethanol must be strictly avoided during treatment and for 2 months after</td><td>PCol 20</td></tr>
<tr><td><b>Ustekinumab + live vaccines</b></td><td>Live vaccines are not given with it: stop at least 15 weeks before a live vaccine; resume at least 2 weeks after</td><td>PCol 67</td></tr>
<tr><td><b>Ustekinumab + allergy immunotherapy</b></td><td>Caution in patients receiving allergy immunotherapy (serious allergic reactions are a side effect)</td><td>PCol 67</td></tr>
</tbody></table>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="tell:tell-smith-safety">Tell apart: boxed warnings, pregnancy, interactions</button><button type="button" class="chip" data-jump="guide:gobj-mc-ddi">Guide: interactions Dr. Sikazwe named</button></div>
</section>

<section class="gobj" id="gobj-pc-5">
<h3>Skin Pharmacology · Objective 5: side effects, contraindications and boxed warnings</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>List the side effects and contraindications discussed in class</b><i>PCol 12&ndash;76; Sun 4</i></div>
<h4>Boxed (black box) warnings on her slides</h4>
<table class="reftab"><thead><tr><th style="width:22%">Drug or class</th><th>Boxed warning</th><th style="width:12%">Slide</th></tr></thead><tbody>
<tr><td><b>Oral calcineurin inhibitors</b> (cyclosporine; tacrolimus)</td><td>Increased risk of lymphoma and other malignancies, particularly of the skin; increased susceptibility to bacterial, viral, fungal and protozoal infections, including opportunistic infection</td><td>PCol 30</td></tr>
<tr><td><b>TNF-&alpha; inhibitors</b> (all five)</td><td>Serious infections that may lead to hospitalization or death; lymphoma and other malignancies, some fatal, reported in children and adolescents</td><td>PCol 70; T 498&ndash;500</td></tr>
<tr><td><b>Tofacitinib</b></td><td>Severe infection, lymphoma and other malignancies; also caution in patients at high risk for GI perforation</td><td>PCol 76</td></tr>
</tbody></table>
<h4>Side effects and contraindications by drug</h4>
<div class="gpt"><ul>
<li><b>Topical corticosteroids</b> (PCol 11&ndash;12): Local: striae, atrophy, perioral dermatitis, acne, rosacea, telangiectasia, purpura, hypertrichosis, allergic contact dermatitis. Systemic: HPA suppression, infection, hyperglycemia, cataracts, glaucoma, growth retardation; possible even with low potency (T 861&ndash;865). <i>Cautions:</i> Avoid occluded or abraded skin; low potency (hydrocortisone 1%) for the face, medium potency (betamethasone valerate 0.1%) for the body, low potency for long maintenance (PCol 11).</li>
<li><b>Topical retinoids</b> (PCol 16, 18): Erythema and dryness early; photosensitivity; comedones may flare in weeks 4&ndash;6; may raise the tumorigenic potential of UV. <i>Cautions:</i> Apply to dry skin; avoid corners of nose, eyes, mouth and mucous membranes; sun protection. Tazarotene: not in pregnancy, contraceptive counseling.</li>
<li><b>Isotretinoin</b> (PCol 19): Common: dryness and itching of skin and mucous membranes, lipid abnormalities. Less common, reversible when the drug is stopped: headache, corneal opacities, pseudotumor cerebri, inflammatory bowel disease, anorexia, alopecia, muscle and joint pain. Skeletal hyperostosis possible in children. <i>Cautions:</i> Teratogen; iPLEDGE, men enrolled too (T 130&ndash;132).</li>
<li><b>Acitretin</b> (PCol 20): Hepatotoxicity, with fatal hepatitis. <i>Cautions:</i> Teratogenic: no pregnancy during treatment or for 3 years after; no blood donation for 3 years; no ethanol for 2 months.</li>
<li><b>Calcipotriene</b> (PCol 22): Burning, itching, atrophy, hyperpigmentation, folliculitis, mild photosensitivity; hypercalcemia and hypercalciuria above 100 g a week, resolving in days.</li>
<li><b>Topical pimecrolimus, tacrolimus</b> (PCol 27&ndash;28): Burning at the site; potential local skin carcinogenesis; infection if blood levels get high. <i>Cautions:</i> Over 2 years of age; sun protection.</li>
<li><b>Oral cyclosporine, tacrolimus</b> (PCol 29&ndash;30): Nephrotoxicity, hypertension, upper respiratory infections (most common), cough, headache; cyclosporine gingival hyperplasia; tacrolimus neuropathies. <i>Cautions:</i> Boxed warning (above); blood levels to prevent toxicity.</li>
<li><b>Crisaborole</b> (PCol 33): Application-site pain 4%; hypersensitivity &lt;1%. <i>Cautions:</i> Stop at once for hypersensitivity; 2 years and older.</li>
<li><b>Apremilast</b> (PCol 34): Diarrhea, nausea, headache, weight loss. <i>Cautions:</i> Use cautiously in depression.</li>
<li><b>Benzoyl peroxide</b> (PCol 36&ndash;37): Irritation; potent contact sensitizer; bleaches hair and fabric. <i>Cautions:</i> Avoid eyes and mucous membranes.</li>
<li><b>Sulfur</b> (PCol 38): Irritation, comedogenic, odor.</li>
<li><b>Salicylic acid</b> (PCol 39&ndash;40): Irritation and inflammation of normal skin; ulceration at high concentrations; allergic urticaria, anaphylaxis, erythema; salicylism, a salicylate overdose, to which other topical salicylates add (10/30 T 557&ndash;563); tissue damage above 6%. <i>Cautions:</i> Caution on extremities in diabetes or peripheral vascular disease.</li>
<li><b>Tetracyclines</b> (PCol 44&ndash;45): N/V/D, pseudomembranous colitis (stop if blood in stool), discolored teeth and bones in the young, photosensitivity, superinfection; minocycline ototoxicity. <i>Cautions:</i> Not in pregnancy or under 8 years.</li>
<li><b>Clindamycin</b> (PCol 46): Pseudomembranous colitis, impaired liver function; about 10% absorbed topically; resistance.</li>
<li><b>Macrolides</b> (PCol 47): Oral N/V/D, epigastric pain; topical burning and drying; resistance.</li>
<li><b>Coal tar</b> (PCol 54): Photosensitizing, carcinogenic. <i>Cautions:</i> Avoid even low concentrations in acute dermatitis with vesiculation or oozing; use in pregnancy not studied.</li>
<li><b>Anthralin</b> (PCol 56): Irritation, severe conjunctivitis, staining of skin, hair and clothes; no systemic effects. <i>Cautions:</i> Caution, if at all, on face and intertriginous areas.</li>
<li><b>Methotrexate</b> (PCol 61): Cumulative liver toxicity (most significant); nausea, pulmonary toxicity, myelosuppression, megaloblastic anemia, lymphoma, pancytopenia (rare). <i>Cautions:</i> Abortifacient and teratogenic; separate counting tray and gloves.</li>
<li><b>Dupilumab</b> (PCol 64): Nasopharyngitis, headache; eye effects can be dose limiting, and some patients stop the drug for them (11/03 T 385&ndash;389).</li>
<li><b>Secukinumab</b> (PCol 66): Infection, nasopharyngitis about 12% (PCol 66); can exacerbate Crohn's disease (11/03 T 414&ndash;415). <i>Cautions:</i> Evaluate for tuberculosis first.</li>
<li><b>Ustekinumab</b> (PCol 67): Upper respiratory infection most common; serious infection; malignancy; posterior leukoencephalopathy. <i>Cautions:</i> Serious allergic reactions, including angioedema and anaphylaxis (PCol 67): the patient cannot receive it again (11/03 T 455&ndash;456); caution with allergy immunotherapy; TB evaluation; live vaccines (Objective 4).</li>
<li><b>Risankizumab</b> (PCol 69): Severe infection, TB reactivation, skin cancer (less common).</li>
<li><b>Etanercept, infliximab, adalimumab, certolizumab</b> (PCol 71&ndash;74): Etanercept: injection site, case reports of pancytopenia and demyelination. Infliximab: anti-drug antibodies, infusion reactions, lupus-like syndrome. Adalimumab: injection site, infection. Certolizumab: URTI, rash, UTI. <i>Cautions:</i> Class boxed warning (above).</li>
<li><b>Methoxsalen (PUVA)</b> (Sun 4; PCol 79): Pruritus, nausea, erythema and blistering, hyperpigmentation, skin aging, skin cancer, cataracts.</li>
</ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-l2">Reference: Smith 10/30 drugs</button><button type="button" class="chip" data-jump="ref:ref-l3">Reference: Smith 11/03 drugs</button><button type="button" class="chip" data-jump="tell:tell-smith-safety">Tell apart: boxed warnings, pregnancy, interactions</button></div>
</section>

<h2 class="gdeck" id="gdeck-sun">Sun Exposure and Psoralens (Dr. Smith, recorded lecture)</h2>
<p class="prose">Objectives on Sun 6: describe the types of ultraviolet radiation; categorize sunscreens and sunblocks into pharmacological or therapeutic classes; differentiate the mechanisms of action of products for protection from sunburn; define MED, SPF and substantivity; differentiate sunblocks and sunscreens. The psoralen slides (Sun 2&ndash;4) repeat PCol 77&ndash;79.</p>

<section class="gobj" id="gobj-sun-pso">
<h3>Sun Exposure · Psoralen chromophores (Sun 2&ndash;4)</h3>
<div class="gbar"><span>Slides</span><b>Methoxsalen: mechanism, effects and side effects</b><i>Sun 3&ndash;4; PCol 78&ndash;79</i></div>
<div class="gpt"><ul>
<li>PUVA combines UVA light with a psoralen; with UV light of 320&ndash;340 nm the psoralen intercalates into DNA, so cells can no longer divide (Sun 3; audio 00:29&ndash;01:20).</li>
<li>Effects: normalizes the number and arrangement of keratinocytes; reorganizes cutaneous blood vessels; cytotoxic to T cells; increases melanin pigmentation (used for uneven pigmentation, not for psoriasis; audio 01:47&ndash;02:10) (Sun 3).</li>
<li>Side effects: pruritus, nausea, erythema and blistering, hyperpigmentation, increased skin aging, increased skin cancer risk, cataracts (Sun 4).</li></ul></div>
</section>

<section class="gobj" id="gobj-sun-1">
<h3>Sun Exposure · Objective 1: types of ultraviolet radiation</h3>
<div class="gbar"><span>Objective (Sun 6)</span><b>Describe the types of ultraviolet radiation</b><i>Sun 7&ndash;11</i></div>
<table class="reftab"><thead><tr><th style="width:20%"></th><th>UVB</th><th>UVA</th></tr></thead><tbody>
<tr><td><b>Wavelength</b></td><td>290&ndash;320 nm; more energetic</td><td>320&ndash;400 nm; less energetic</td></tr>
<tr><td><b>Dr. Sikazwe&rsquo;s numbers</b></td><td>280&ndash;315 nm (DPAW 12, 63)</td><td>315 (or 320)&ndash;400 nm (DPAW 12, 18, 62; 11/03 T 817&ndash;818). Each professor&rsquo;s numbers are keyed in his or her own questions</td></tr>
<tr><td><b>Ozone and glass</b></td><td>About 90% filtered by ozone; does not pass glass</td><td>Minimally filtered; passes glass</td></tr>
<tr><td><b>Depth</b></td><td>&mdash;</td><td>Penetrates further into the dermis</td></tr>
<tr><td><b>Damage</b></td><td>Sunburn; photoaging, immunosuppression, skin cancers; greatest intensity 10:00 am to 4:00 pm</td><td>Most phototoxic reactions with drugs and chemicals; photoaging, immunosuppression, skin cancers</td></tr>
<tr><td><b>Other</b></td><td>Produces vitamin D3 in the skin</td><td>Tanning: immediate pigmentation 5&ndash;10 minutes after exposure, lasts 24&ndash;48 h; delayed pigmentation after 48&ndash;72 h, peaks at 7&ndash;10 days (Sun 10)</td></tr>
</tbody></table>
<div class="gpt"><ul>
<li>Risk factors: the UV index, which rates the amount of UV rays reaching the earth&rsquo;s surface at a given time and place (the higher, the greater the exposure; it depends on time of day, season, altitude and latitude, ozone and land cover), skin melanin, the product's SPF, cumulative exposure; one severe sunburn before age 18 doubles the lifetime risk of skin cancers (Sun 7).</li>
<li>Sunburn: an acute inflammatory reaction (endothelial swelling, red cells leaking from capillaries; histamine, cytokines, prostaglandins); symptoms are mild erythema, tenderness and edema; reddening peaks at 12&ndash;24 h, then melanogenesis gives a tan over 2&ndash;3 days. A severe sunburn is a second-degree burn with blisters and can bring fever, chills, weakness and shock (Sun 11).</li>
<li>A deeper tan does not protect the skin from sun damage (audio 07:09&ndash;07:30).</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="tell:tell-sun">Tell apart: sun protection</button></div>
</section>

<section class="gobj" id="gobj-sun-4">
<h3>Sun Exposure · Objective 4: MED, SPF, broad spectrum and substantivity</h3>
<div class="gbar"><span>Objective (Sun 6)</span><b>Define MED, SPF and substantivity</b><i>Sun 12&ndash;17, 19</i></div>
<div class="gpt"><ul>
<li><b>MED</b>: the minimum single dose of UV radiation that produces clearly marginated erythema in the irradiated site (Sun 12).</li>
<li><b>SPF</b>: the ratio of the dose of sunlight that produces sunburn with the sunscreen to the dose that does without it. The higher the SPF, the less likely a burn and the longer the time in the sun. SPF is primarily a measure of UVB protection and says nothing about UVA (Sun 13).</li>
<li>SPF 15 blocks about 93% of UVB, SPF 30 about 97%, SPF 50 about 98% (Sun 15).</li>
<li><b>Broad spectrum</b>: UVA protection is tested by the critical wavelength method; a CW of 370 nm or more may be labeled &ldquo;broad spectrum&rdquo;; broad spectrum with SPF 15 or more may claim it &ldquo;decreases risk of skin cancer and early aging caused by the sun&rdquo; (Sun 14).</li>
<li>Selection: skin types I&ndash;II, SPF &gt; 30; lupus, SPF &gt; 40; photosensitizing drugs, SPF &gt; 45; skin types III&ndash;V, SPF 15&ndash;24. Apply the correct amount at the correct time; reapply every 90&ndash;120 minutes; adding a higher SPF after 1 MED does not help much (Sun 16&ndash;17).</li>
<li><b>Substantivity</b>: how well a sunscreen adheres and stays after water and sweat. Oils best (unpleasant); alcohols worst; creams better than alcohol bases; polyacrylamide bases good. Choose waterproof, water-resistant or sweat-resistant products (Sun 19).</li></ul></div>
<div class="f2fig" id="fig-spf"><!--DIA:fig-spf--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-sun">Reference: SPF, skin types, substantivity</button><button type="button" class="chip" data-jump="tell:tell-sun">Tell apart: sun protection</button></div>
</section>

<section class="gobj" id="gobj-sun-2">
<h3>Sun Exposure · Objectives 2, 3 and 5: sunblocks vs sunscreens, classes and mechanisms</h3>
<div class="gbar"><span>Objectives (Sun 6)</span><b>Categorize sunscreens and sunblocks; differentiate their mechanisms; differentiate sunblocks and sunscreens</b><i>Sun 20&ndash;25</i></div>
<table class="reftab"><thead><tr><th style="width:20%"></th><th>Sunblocks (physical sunscreens)</th><th>Organic sunscreens</th></tr></thead><tbody>
<tr><td><b>Ingredients</b></td><td>Zinc oxide, titanium dioxide (UVA and UVB)</td><td>Families: benzophenones, anthranilates, dibenzoylmethanes, aminobenzoates, cinnamates, salicylates; products may combine them</td></tr>
<tr><td><b>Mechanism</b></td><td>Inorganic particles scatter or reflect visible, UV and infrared radiation</td><td>Organic compounds absorb UVB and/or UVA and convert it to heat</td></tr>
<tr><td><b>Use and notes</b></td><td>Prominent areas (nose, ears) and where sun exposure cannot be limited; microsize and nanosize forms less opaque; not easily washed off but melt in hot sun; protection falls after 2 hours of direct sun</td><td>&mdash;</td></tr>
<tr><td><b>Side effects</b></td><td>May occlude pores (miliaria, folliculitis, acne); may stain clothing; less likely to irritate</td><td>Most have been linked to skin reactions; risk higher with PABA, avobenzone and oxybenzone</td></tr>
</tbody></table>
<div class="f2fig" id="fig-block-vs-screen"><!--DIA:fig-block-vs-screen--></div>
<div class="gpt"><h5>One point per sunscreen family (Sun 24)</h5><ul>
<li>Benzophenones: poor substantivity; can cause sensitization.</li>
<li>Anthranilates: only in combination products, for broad UV coverage.</li>
<li>Dibenzoylmethanes: activity starts to fall after 15 minutes.</li>
<li>Aminobenzoates: most effective UVB absorbers; may stain clothing.</li>
<li>Cinnamates: adhere poorly; depend on the vehicle for substantivity.</li>
<li>Salicylates: adhere poorly; easily removed by water or sweat.</li></ul></div>
<div class="gpt"><h5>Safety (Sun 25)</h5><ul><li>Reactions: irritant, allergic, phototoxic, photoallergic; rash, vesicles, hives or an exaggerated sunburn: refer.</li><li>Studies found plasma levels above the FDA threshold of 0.5 ng/mL; implications not yet known.</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:tgt-padimate">Reference: sunscreen ingredients and their families</button><button type="button" class="chip" data-jump="atlas:at-b-sunscreens">Atlas: sunblocks and sunscreens</button></div>
</section>

<section class="gobj" id="gobj-sun-photo">
<h3>Sun Exposure · Drugs that cause photosensitivity</h3>
<div class="gbar"><span>Slides</span><b>Photosensitizing drugs and sun protection</b><i>Sun 8, 17&ndash;18</i></div>
<div class="gpt"><ul>
<li>Sun 18 shows an APhA table of drug categories linked to photosensitivity; patients on such drugs need sun protection counseling (audio 17:27&ndash;17:48) and SPF &gt; 45 (Sun 17). UVA causes most drug phototoxic reactions (Sun 8).</li>
<li>Photosensitizing drugs on her pharmacology slides: tazarotene (PCol 18); topical retinoids (PCol 16); tetracyclines, with minocycline and sarecycline possibly less (PCol 44&ndash;45); coal tar (PCol 54); calcipotriene, mild (PCol 22); psoralens (Sun 3).</li>
<li>Sun protection counseled for other reasons: adapalene is sun stable, but peeling still raises sunburn risk (10/30 T 122&ndash;130); topical pimecrolimus and tacrolimus carry a potential for local skin cancer (PCol 28). Shale tar is not photosensitizing (PCol 57).</li></ul></div>
</section>

<h2 class="gdeck" id="gdeck-mc">Dermatology Medicinal Chemistry (Dr. Sikazwe, DPAW, 11/03&ndash;11/04)</h2>

<section class="gobj" id="gobj-mc-0">
<h3>Medicinal Chemistry · His objectives and the assigned pages</h3>
<div class="gbar"><span>Objectives (DPAW slide 3)</span><b>ASSESS: targets, drug classes. PLAN: CBDA, ADMET, functional groups and SAR, drug interactions</b><i>DPAW slide 3</i></div>
<div class="gpt"><ul>
<li>ASSESS: identify the therapeutic targets; identify, and pharmacologically and chemically classify, the drug classes and drugs (DPAW slide 3).</li>
<li>PLAN: the chemical and pharmacological basis of drug action (CBDA), indication and contraindication; ADMET and how it changes with patient factors; physicochemical properties, functional groups and SAR; drug interactions that may influence the plan (DPAW slide 3).</li>
<li>Assigned for Exam 1 (his list of 11/06): printed slides 7&ndash;9, 12, 15&ndash;22, 24&ndash;33, 42&ndash;54, 60&ndash;65, which are PDF pages 7&ndash;9, 12, 15&ndash;23, 25&ndash;34, 43&ndash;55, 61&ndash;66. Here, as in the questions, slides are numbered by PDF page, so the assigned slides are 7&ndash;9, 12, 15&ndash;23, 25&ndash;34, 43&ndash;55 and 61&ndash;66; the sections below follow them.</li></ul></div>
</section>

<section class="gobj" id="gobj-mc-ecz">
<h3>Medicinal Chemistry · Eczema pharmacotherapy (DPAW slides 7&ndash;9)</h3>
<div class="gbar"><span>Pages</span><b>Crisaborole; ruxolitinib and upadacitinib</b><i>DPAW slides 7&ndash;9</i></div>
<div class="gpt"><ul>
<li>Crisaborole: a benzoxaborole (boron-based) soft drug, designed for predictable metabolism to inactive, harmless products; log P 3, accumulates in the dermis; t&frac12; 12 h. Spontaneous hydrolytic deboronation (no enzyme) &rarr; benzyl alcohol &rarr; ADH, then ALDH (two enzymes, no CYPs) &rarr; benzoic acid &rarr; SULT and UGT conjugates (Polleve-1, slide 9). CBDA: the boron coordinates Zn<sup>2+</sup> and Mg<sup>2+</sup> in the PDE4 active site (slide 7).</li>
<li>Ruxolitinib and upadacitinib: same pharmacological class (JAK inhibitors), different chemical classes (names not to be recalled). Ruxolitinib t&frac12; 3 h, CYP3A4/2C9, some active hydroxyl metabolites; upadacitinib t&frac12; 8&ndash;16 h, CYP3A4/2D6, no active metabolites; both log P about 2, kept in the skin by formulation (slide 8).</li></ul></div>
<div class="rxfig" id="rx-crisaborole"><!--DIA:rx-crisaborole--></div>
<div class="rxfig" id="cb-crisaborole"><!--DIA:cb-crisaborole--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-eczema">Atlas: eczema drugs</button><button type="button" class="chip" data-jump="tell:tell-s3">Tell apart: Sikazwe 11/03</button><button type="button" class="chip" data-jump="ref:ref-s3">Reference: Sikazwe 11/03</button></div>
</section>

<section class="gobj" id="gobj-mc-psotop">
<h3>Medicinal Chemistry · Psoriasis: UV and topical agents (DPAW slides 12, 15&ndash;23, 25&ndash;29)</h3>
<div class="gbar"><span>Pages</span><b>UV; emollients and tars; anthralin; 8-MOP; glucocorticoids; vitamin D; limus drugs; retinoids</b><i>DPAW slides 12&ndash;29</i></div>
<div class="gpt"><h5>UV radiation (slides 12, 18, 62&ndash;63)</h5><ul><li>UVC 100&ndash;280 nm, blocked by ozone; UVB 280&ndash;315 nm, about 90% blocked by ozone, used with coal tar; UVA 315&ndash;400 nm (&ldquo;315 or 320&rdquo; depending on the source, 11/03 T 817&ndash;818), deepest, used in PUVA (slide 18: UVA 315&ndash;400 nm). Slides 62&ndash;63 print UVA 315&ndash;400 and UVB 280&ndash;315 nm.</li><li>Dr. Smith&rsquo;s numbers differ (Sun 8: UVB 290&ndash;320, UVA 320&ndash;400; PUVA 320&ndash;340, Sun 3). Each professor&rsquo;s numbers are the ones keyed in that professor&rsquo;s questions.</li></ul></div>
<div class="gpt"><h5>Emollients and tars (slides 15&ndash;16)</h5><ul><li>Petrolatum: linear hydrocarbons over 25 carbons, the most effective emollient; lanolin: fatty acid esters from wool grease, odor; dimethicone (linear Si&ndash;O) and cyclomethicone (cyclic Si&ndash;O): hypoallergenic, non-comedogenic. Emollients fill gaps between scales and prevent water loss.</li><li>Coal tar: phenols, PAHs, heterocycles; photosensitizing; used with UVB. Shale tar (ichthammol, from sedimentary rock) and wood tars (pine, birch, juniper): not photosensitizing.</li></ul></div>
<div class="gpt"><h5>Anthralin and 8-MOP (slides 17&ndash;19)</h5><ul><li>Anthralin (dithranol): a hydroxyanthrone; spontaneous autoxidation gives the anthranyl radical and superoxide anion, which act on keratinocyte mitochondria; brown anthralin products and carbon black stain; log P 4 (lipophilic).</li><li>8-MOP (methoxsalen): a furanocoumarin; intercalates into DNA and, with UVA, covalently crosslinks pyrimidine bases; partially inhibits CYP3A4.</li><li>Polleve-2 (slide 19): the two do not both act by autoxidation.</li></ul></div>
<div class="rxfig" id="rx-anthralin"><!--DIA:rx-anthralin--></div>
<div class="rxfig" id="rx-psoralen"><!--DIA:rx-psoralen--></div>
<div class="gpt"><h5>Glucocorticoids (slides 20&ndash;23, 25&ndash;26)</h5><ul><li>Steroid skeleton: four fused rings, A&ndash;C six-membered, D five-membered. Potency up with: C1&ndash;C2 double bond, 6&alpha;-halogen, 9&alpha;-halogen, 11&beta;-OH. &alpha; = hashed bond (away), &beta; = wedge (toward the viewer); numbering and orientation are independent (slides 20&ndash;22).</li><li>Six hydrogen bonds in the receptor: C3=O (two), 11&beta;-OH, 17&alpha;-OH, C20=O, C21-OH (slide 23).</li><li>Potency (slide 25): clobetasol propionate 0.05% super-potent; betamethasone dipropionate 0.05% potent; betamethasone valerate 0.1% medium; hydrocortisone acetate 0.5% and 1% low. Potency depends on structure, vehicle and concentration. The hydrocortisone-to-clobetasol arrow is a structural change, not metabolism.</li><li>Hydrocortisone (slide 26): under 15% absorbed through skin against 95% orally; t&frac12; 1&ndash;2 h (metabolism) but duration 8&ndash;12 h (protein binding); 11&beta;-HSD converts it to and from cortisone (11-ketone, inactive).</li></ul></div>
<div class="f2fig" id="fig-steroid"><!--DIA:fig-steroid--></div>
<div class="rxfig" id="rx-hydrocortisone"><!--DIA:rx-hydrocortisone--></div>
<div class="rxfig" id="cb-gc-potency"><!--DIA:cb-gc-potency--></div>
<div class="gpt"><h5>Vitamin D, limus drugs, retinoids (slides 27&ndash;29)</h5><ul><li>Calcitriol and calcipotriene: secosteroids; calcipotriene was meant to lose the calcium effect but still raises GI calcium absorption; hypercalcemia is the limiting factor (slide 27).</li><li>Pimecrolimus vs tacrolimus: both macrolide lactones and calcineurin inhibitors with similar cLogP (6.0, 5.8); pimecrolimus has high non-specific skin protein binding and stays in the skin (low systemic ADRs), tacrolimus low binding and enters the circulation; structure: Cl and ethyl (pimecrolimus) vs OH and allyl (tacrolimus) (slide 28).</li><li>Tazarotene: acetylenic (alkyne) retinoid, ethyl ester prodrug hydrolyzed by carboxylesterases to tazarotenic acid; with acitretin and isotretinoin for psoriasis (slide 29).</li></ul></div>
<div class="rxfig" id="rx-vitd"><!--DIA:rx-vitd--></div>
<div class="rxfig" id="cb-limus"><!--DIA:cb-limus--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-psoriasis-topical">Atlas: emollients, anthralin, psoralen</button><button type="button" class="chip" data-jump="atlas:at-a-glucocorticoids">Atlas: glucocorticoids</button><button type="button" class="chip" data-jump="atlas:at-a-vitamin-d">Atlas: vitamin D</button><button type="button" class="chip" data-jump="atlas:at-a-limus">Atlas: limus drugs</button><button type="button" class="chip" data-jump="tell:tell-s3">Tell apart: Sikazwe 11/03</button><button type="button" class="chip" data-jump="tell:tell-s4">Tell apart: Sikazwe 11/04</button></div>
</section>

<section class="gobj" id="gobj-mc-psosys">
<h3>Medicinal Chemistry · Psoriasis: systemic agents (DPAW slides 30&ndash;34)</h3>
<div class="gbar"><span>Pages</span><b>Methotrexate; lactone vs lactam; cyclosporine; apremilast</b><i>DPAW slides 30&ndash;34</i></div>
<div class="gpt"><ul>
<li>Methotrexate: a pteridine; competitive DHFR inhibitor, also immunosuppressant and anti-inflammatory. Against folic acid it has NH<sub>2</sub> (folic acid OH) on the pteridine and N&ndash;CH<sub>3</sub> (folic acid N&ndash;H), and binds DHFR with higher affinity. SAR: pteridine (aromatic), p-aminobenzoic acid and glutamic acid parts; no alkylation of the aromatic N; the N&ndash;CH<sub>3</sub> is essential (slides 30&ndash;31).</li>
<li>Polleve-3 (slide 32): lactone = cyclic ester (pimecrolimus, tacrolimus); lactam = cyclic amide (cyclosporine).</li>
<li>Cyclosporine: an 11-amino-acid cyclic peptide; activated by forming a complex with cyclophilin (not by metabolism), then inhibits calcineurin; oral bioavailability 30% (first pass by CYP3A4); log P 4; t&frac12; 19 h; grapefruit juice raises levels (slide 33).</li>
<li>Apremilast: an isoindoline; PDE4 inhibitor, raises cAMP; CYP3A4 (major) O-demethylation then UGT O-glucuronidation; avoid CYP3A4 inhibitors and inducers (slide 34).</li></ul></div>
<div class="rxfig" id="rx-folate"><!--DIA:rx-folate--></div>
<div class="rxfig" id="cb-mtx"><!--DIA:cb-mtx--></div>
<div class="rxfig" id="cb-cyclosporine"><!--DIA:cb-cyclosporine--></div>
<div class="rxfig" id="rx-apremilast"><!--DIA:rx-apremilast--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-psoriasis-systemic">Atlas: retinoids and systemic agents</button><button type="button" class="chip" data-jump="atlas:at-a-features">Atlas: lactone and lactam</button><button type="button" class="chip" data-jump="guide:fig-cni-nfat">Figure: calcineurin, NFAT and IL-2 (Dr. Smith)</button><button type="button" class="chip" data-jump="ref:ref-s4">Reference: Sikazwe 11/04</button></div>
</section>

<section class="gobj" id="gobj-mc-acne">
<h3>Medicinal Chemistry · Acne (DPAW slides 43&ndash;55)</h3>
<div class="gbar"><span>Pages</span><b>Keratolytics; retinoids by generation; hormones; antibiotics</b><i>DPAW slides 43&ndash;55</i></div>
<div class="gpt"><h5>Keratolytics (slides 43&ndash;47)</h5><ul><li>Glycolic acid: alpha-hydroxy acid, hydrophilic, log P about 1, acts at the surface; ADH then ALDH to the diacid. Salicylic acid: beta-hydroxy acid with an aromatic ring, log P about 1&ndash;2, deeper; 75% glycine conjugate. Both pKa about 3 (itching).</li><li>Alpha vs beta: the OH on the carbon next to the COOH (alpha) or two carbons away (beta) (slide 44).</li><li>Sulfur: thiolysis of keratin disulfide (cysteine) bonds; small particles work better. Benzoyl peroxide: a peroxide; benzoic acid lowers skin pH (keratolytic) and the benzoyl radical kills bacteria; log P 3.5 (slides 46&ndash;47).</li></ul></div>
<div class="rxfig" id="rx-hydroxyacids"><!--DIA:rx-hydroxyacids--></div>
<div class="rxfig" id="cb-hydroxyacids"><!--DIA:cb-hydroxyacids--></div>
<div class="rxfig" id="rx-bpo"><!--DIA:rx-bpo--></div>
<div class="gpt"><h5>Retinoids by generation (slides 48&ndash;51)</h5><ul><li>1st generation (non-aromatic): tretinoin (all-trans, topical) and isotretinoin (13-cis, oral), geometric isomers, both active.</li><li>2nd generation (mono-aromatic): etretinate, an ethyl ester prodrug (t&frac12; 120 days, narrow therapeutic index, off the US market 1998), hydrolyzed by carboxylesterases to acitretin, the active form.</li><li>3rd generation (poly-aromatic): adapalene and trifarotene, directly active (exposed COOH); tazarotene, ester prodrug. The class is teratogenic.</li></ul></div>
<div class="rxfig" id="rx-etretinate"><!--DIA:rx-etretinate--></div>
<div class="rxfig" id="rx-tazarotene"><!--DIA:rx-tazarotene--></div>
<div class="rxfig" id="cb-retinoids"><!--DIA:cb-retinoids--></div>
<div class="gpt"><h5>Hormones (slides 52&ndash;53)</h5><ul><li>Oral contraceptives (ethinyl estradiol with norgestimate or drospirenone) lower sebum in females. Spironolactone (steroidal) and ketoconazole (non-steroidal azole, strong CYP3A4 inhibitor) lower testosterone biosynthesis; flutamide (non-steroidal) blocks testosterone at its receptor.</li></ul></div>
<div class="rxfig" id="cb-antiandrogens"><!--DIA:cb-antiandrogens--></div>
<div class="gpt"><h5>Antibiotics (slides 54&ndash;55)</h5><ul><li>Azelaic acid: a C9 dicarboxylic acid, antibacterial and anti-inflammatory. Clindamycin: topical because of GI toxicity. Erythromycin: poor oral absorption, unstable at pH 4 or below.</li><li>Tetracycline: four rings fused in a line (a steroid's rings are angular); chelates Al<sup>3+</sup>, Ca<sup>2+</sup>, Mg<sup>2+</sup>, Fe<sup>3+</sup>, Zn<sup>3+</sup> (printed so on slide 55; zinc&rsquo;s ion is Zn<sup>2+</sup>), Bi<sup>3+</sup>, forming insoluble salts that can build up in bone and enamel; food (dairy) cuts absorption; t&frac12; 8.5 h. Doxycycline and minocycline: food has no effect, lipophilic, t&frac12; 11&ndash;13 h and 14&ndash;22 h; cross-allergy from structural similarity.</li></ul></div>
<div class="rxfig" id="cb-tetracycline"><!--DIA:cb-tetracycline--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-b-acne-keratolytics">Atlas: keratolytics</button><button type="button" class="chip" data-jump="atlas:at-b-retinoids">Atlas: retinoids</button><button type="button" class="chip" data-jump="atlas:at-b-hormones">Atlas: hormones</button><button type="button" class="chip" data-jump="atlas:at-b-antibiotics">Atlas: antibiotics</button><button type="button" class="chip" data-jump="tell:tell-s4">Tell apart: Sikazwe 11/04</button></div>
</section>

<section class="gobj" id="gobj-mc-sun">
<h3>Medicinal Chemistry · Sunblocks and sunscreens (DPAW slides 61&ndash;66)</h3>
<div class="gbar"><span>Pages</span><b>Inorganic sunblocks and organic sunscreens by UV band</b><i>DPAW slides 61&ndash;66</i></div>
<table class="reftab"><thead><tr><th style="width:18%">Band</th><th>Agents and the point he made</th><th style="width:10%">Slide</th></tr></thead><tbody>
<tr><td><b>Sunblocks</b></td><td>Zinc oxide, titanium dioxide: reflect and scatter UVA and UVB; inert; large particles work better (nano forms are transparent and reflect less)</td><td>61</td></tr>
<tr><td><b>All organics</b></td><td>Chromophores absorb UV and convert it to heat; they photodegrade</td><td>62</td></tr>
<tr><td><b>UVA</b></td><td>Avobenzone (dibenzoylmethane): low skin absorption, photodegradation t&frac12; about 2 h. Meradimate (anthranilate): degrades faster than avobenzone</td><td>62</td></tr>
<tr><td><b>UVB</b></td><td>Octinoxate (cinnamate): absorbed through skin, t&frac12; 1&ndash;2 h. PABA, padimate O: PABA allergy. Homosalate, octisalate (salicylates): ester hydrolyzed to salicylic acid. Ensulizole (benzimidazole): water soluble, log P 1, t&frac12; about 12 h, reapply after swimming</td><td>63&ndash;64</td></tr>
<tr><td><b>UVB/UVA</b></td><td>Oxybenzone (benzophenone): log P about 4, highly absorbed through skin. Octocrylene: lipophilic, t&frac12; about 90 h, photostabilizes other sunscreens. Bemotrizinol: MW 627.81, limited skin absorption, photostable</td><td>65&ndash;66</td></tr>
</tbody></table>
<div class="rxfig" id="cb-salicylates"><!--DIA:cb-salicylates--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-b-sunscreens">Atlas: sunblocks and sunscreens</button><button type="button" class="chip" data-jump="guide:gobj-sun-2">Guide: Dr. Smith's sunblocks vs sunscreens</button><button type="button" class="chip" data-jump="guide:fig-block-vs-screen">Figure: sunblocks vs sunscreens (both professors)</button></div>
</section>

<section class="gobj" id="gobj-mc-ddi">
<h3>Medicinal Chemistry · Drug interactions he named</h3>
<div class="gbar"><span>Objective (DPAW slide 3)</span><b>Explain drug interactions that may influence the therapeutic plan</b><i>DPAW slides 7&ndash;55</i></div>
<table class="reftab"><thead><tr><th style="width:22%">Drug</th><th>Interaction or enzyme</th><th style="width:10%">Slide</th></tr></thead><tbody>
<tr><td><b>Crisaborole</b></td><td>No CYPs: ADH and ALDH, then SULT and UGT</td><td>7, 9</td></tr>
<tr><td><b>Ruxolitinib; upadacitinib</b></td><td>CYP3A4 and 2C9; CYP3A4 and 2D6</td><td>8</td></tr>
<tr><td><b>Methoxsalen (8-MOP)</b></td><td>Several CYPs; partially inhibits CYP3A4</td><td>18</td></tr>
<tr><td><b>Cyclosporine</b></td><td>First pass by CYP3A4; grapefruit juice raises levels</td><td>33</td></tr>
<tr><td><b>Apremilast</b></td><td>CYP3A4 major (1A2, 2A6 minor); avoid CYP3A4 inhibitors and inducers</td><td>34</td></tr>
<tr><td><b>Ketoconazole</b></td><td>Strong CYP3A4 inhibitor</td><td>53</td></tr>
<tr><td><b>Tetracycline</b></td><td>Chelates Al<sup>3+</sup>, Ca<sup>2+</sup>, Mg<sup>2+</sup>, Fe<sup>3+</sup>, Zn<sup>3+</sup> (as printed; Zn<sup>2+</sup>), Bi<sup>3+</sup>; food (dairy) cuts absorption; not so for doxycycline and minocycline</td><td>55</td></tr>
</tbody></table>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="guide:gobj-pc-4">Guide: interactions Dr. Smith named</button></div>
</section>
<h2 class="gdeck" id="gdeck-p5">Dermatitis Therapeutics (Dr. Patel, 11/06; Exam 2)</h2>
<p class="sub">DT = Patel_Dermatitis-Therapeutics-Student.pdf, slide = PDF page; T@ = place in the 11/06 lecture transcript; PollEv = her in-class polls of 11/06. Her seven objectives (DT 7&ndash;8), one section each.</p>
<div class="gask"><b>How she asks (11/06)</b><ul><li>&ldquo;Poll everywhere will always be utilized in my lectures. This is how ... you guys learn a little bit more about my exam questions&rdquo; (T@1918&ndash;2297). Her polls were case-based: a tube size to dispense, severity and status, first-line maintenance, prescription details, counseling, when to follow up.</li><li>&ldquo;There will be a calculation on the exam&rdquo; (T@11799). &ldquo;I will always tell you what&rsquo;s available in the exam question. So remember to always round up&rdquo; (T@9636).</li><li>Not asked: pediatric fingertip units (FYI, T@8797), infant dupilumab dosing (T@50408), newborn and infant age definitions (T@71019).</li></ul></div>

<section class="gobj" id="gobj-p5-1">
<h3>Dermatitis Therapeutics · Objective 1: the self-care interview and the patient care process</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>Perform the components of the SCHOLAR-MAC/QuEST and the Pharmacist&rsquo;s Patient Care Process in the self-care interview for dermatologic conditions</b><i>DT 26, 28, 49, 69</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Patient care process <span class="g2-src">(DT 28; T@27992)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col" class="g2-n">Step</th><th scope="col">Patient care process</th></tr></thead>
<tbody>
<tr><td class="g2-n"><span class="g2-num">1</span></td><td>Collect</td></tr>
<tr><td class="g2-n"><span class="g2-num">2</span></td><td>Assess</td></tr>
<tr><td class="g2-n"><span class="g2-num">3</span></td><td>Plan</td></tr>
<tr><td class="g2-n"><span class="g2-num">4</span></td><td>Implement</td></tr>
<tr><td class="g2-n"><span class="g2-num">5</span></td><td>Follow-up (monitor and evaluate)</td></tr>
</tbody>
</table>
<p class="g2-p">Around patient-centered care.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Her cases are written as <span class="g2-src">(DT 26, 69; T@24148&ndash;24910)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">CC</th><td>Chief complaint, the patient&rsquo;s own words</td></tr>
<tr><th scope="row">HPI</th><td>History of present illness</td></tr>
<tr><th scope="row">PMH</th><td>Past medical history</td></tr>
<tr><th scope="row">Current meds</th><td></td></tr>
<tr><th scope="row">Other</th><td>OTC products</td></tr>
<tr><th scope="row">Physical assessment</th><td></td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p5-2">
<h3>Dermatitis Therapeutics · Objective 2: name the condition from signs, symptoms and history</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>Determine the dermatologic condition based on the patient&rsquo;s signs and symptoms and history</b><i>DT 15&ndash;25, 56&ndash;60</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Atopic dermatitis <span class="g2-src">(DT 17&ndash;22)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table g2-kv">
<caption>The condition <span class="g2-src">(DT 17)</span></caption>
<tbody>
<tr><th scope="row">Other name</th><td>Also known as <b>eczema</b></td></tr>
<tr><th scope="row">Type</th><td>Very common chronic or relapsing inflammatory skin disorder</td></tr>
<tr><th scope="row">Start</th><td>Often develops in childhood</td></tr>
<tr><th scope="row">Hallmark symptom</th><td><b>Pruritus</b></td></tr>
<tr><th scope="row">Cure</th><td>No cure</td></tr>
<tr><th scope="row">Spread</th><td>Not contagious</td></tr>
</tbody>
</table>
<table class="g2-table g2-kv">
<caption>Initiation and prevention <span class="g2-src">(DT 18)</span></caption>
<tbody>
<tr><th scope="row">Initiation</th><td>Disrupted barrier (FLG mutation or dryness) &rarr; allergen and irritant influx &rarr; inflammatory T-cell responses</td></tr>
<tr><th scope="row">Prevention</th><td>Emollient therapy improves the barrier and blocks the inflammatory cascade</td></tr>
</tbody>
</table>
</div>
<div>
<p class="g2-sub">Risk factors <span class="g2-src">(DT 19)</span></p>
<ul>
<li>Personal or family history of atopic disorders (atopic triad: allergic rhinitis, asthma, AD; atopic march adds food allergies)</li>
<li>Loss-of-function FLG mutation</li>
<li>Urban environment</li>
<li>Smaller family size</li>
<li>Higher parental education</li>
</ul>
<table class="g2-table g2-kv">
<caption>Triggers <span class="g2-src">(DT 20)</span></caption>
<tbody>
<tr><th scope="row">Irritants</th><td>Tobacco smoke, air pollution, cosmetics, fragrances, astringents, soaps, scrubs, detergents, dyes, preservatives</td></tr>
<tr><th scope="row">Allergens</th><td>Foods; wool and polyester clothing; dust mites, pollens, pet dander, molds</td></tr>
<tr><th scope="row">Environment</th><td>Extreme temperatures, low humidity</td></tr>
<tr><th scope="row">Personal</th><td>Stress, excessive washing and sanitizing</td></tr>
</tbody>
</table>
</div>
</div>
<table class="g2-table g2-stack">
<caption>By age <span class="g2-src">(DT 21)</span></caption>
<thead><tr><th scope="col">Age</th><th scope="col">Quality</th><th scope="col">Region</th><th scope="col">Timing</th></tr></thead>
<tbody>
<tr><th scope="row">Infancy (0&ndash;2 y)</th><td><span class="g2-lab">Quality</span>Erythematous papular rash that tends to ooze</td><td><span class="g2-lab">Region</span>Face, scalp, trunk, arms, legs</td><td><span class="g2-lab">Timing</span>Most common onset <b>3&ndash;6 months</b>; majority by age one</td></tr>
<tr><th scope="row">Childhood (2&ndash;puberty)</th><td><span class="g2-lab">Quality</span>Dry, flaky, rough, cracked skin, crusting, lichenification</td><td><span class="g2-lab">Region</span>Face, creases of the neck, elbows, wrists, knees, ankles</td><td><span class="g2-lab">Timing</span>Up to <b>90%</b> by age 5</td></tr>
<tr><th scope="row">Adulthood</th><td><span class="g2-lab">Quality</span>More diffuse, underlying erythema, dry scaly skin, lichenification</td><td><span class="g2-lab">Region</span>Less on the face; more on hands, neck, inner elbows, back of knees, ankles</td><td><span class="g2-lab">Timing</span>May resolve by adulthood (<b>70&ndash;90%</b>)</td></tr>
</tbody>
</table>
<p class="g2-p">Earlier onset, longer persistence <span class="g2-src">(DT 22; T@20296)</span>.</p>
<table class="g2-table g2-stack">
<caption>By severity <span class="g2-src">(DT 23)</span></caption>
<thead><tr><th scope="col">Severity</th><th scope="col">SCORAD</th><th scope="col">Description</th></tr></thead>
<tbody>
<tr><th scope="row">Mild</th><td><span class="g2-lab">SCORAD</span><b>&lt; 25</b></td><td>Areas of dry skin, infrequent itching (with or without small areas of redness); little impact on activities, sleep and psychosocial wellbeing</td></tr>
<tr><th scope="row">Moderate</th><td><span class="g2-lab">SCORAD</span><b>25&ndash;50</b></td><td>Mild characteristics with frequent itching; moderate impact on everyday activities and sleep</td></tr>
<tr><th scope="row">Severe</th><td><span class="g2-lab">SCORAD</span><b>&gt; 50</b></td><td>Widespread dry skin, incessant itching, redness, thickening, bleeding, oozing, severe limitation to activities, nightly loss of sleep</td></tr>
</tbody>
</table>
<div class="gtell"><b>Status (DT 24; T@22171&ndash;22904, T@26757)</b><ul><li>Acute: acutely inflamed papules, vesicles, exudate and crusts; no dryness.</li><li>Subacute: <b>dry</b>, inflamed papules, patches or plaques.</li><li>Chronic: <b>lichenified</b> papules or plaques (she calls lichenification the silvery, scaly plaque, T@18613).</li></ul></div>
<p class="g2-sub">Complications <span class="g2-src">(DT 25)</span></p>
<ul>
<li>Sleep disturbances</li>
<li>Depression</li>
<li>Quality of life of patient and family</li>
<li>Skin infections (S. aureus; prone to herpes simplex virus)</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Diaper and incontinence-associated dermatitis <span class="g2-src">(DT 56&ndash;60)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Causes</th><td>Occlusion, moisture, microbes, GI proteolytic enzymes and bile salts, mechanical chafing and friction, alkaline skin pH <span class="g2-src">(DT 56)</span></td></tr>
<tr><th scope="row">Signs</th><td>Erythema in patches (buttocks, upper thighs, abdomen, genital region); red to bright red, shiny, wet-looking patches; graded A slight to E severe <span class="g2-src">(DT 58)</span></td></tr>
<tr><th scope="row">Not a sign</th><td><p class="g2-said"><span class="g2-k">Said in class</span>No lichenification <span class="g2-src">(T@72543)</span></p></td></tr>
<tr><th scope="row">Adults</th><td>Category 1 persistent redness, category 2 skin loss; A without, B with clinical signs of infection <span class="g2-src">(GLOBIAD, DT 60)</span></td></tr>
</tbody>
</table>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Another name for atopic dermatitis <span class="g2-tap">Show answer</span></summary><p>Eczema <span class="g2-src">(T@24148)</span></p></details>
<details class="g2-self"><summary>The 21-year-old (dry, inflamed, no infection, no lichenified plaques, SCORAD 40) <span class="g2-tap">Show answer</span></summary><p>Moderate, subacute <span class="g2-src">(T@25991&ndash;26757)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p5-3">
<h3>Dermatitis Therapeutics · Objective 3: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>DT 33, 36, 65&ndash;68</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> AD on OTC self-care <span class="g2-src">(DT 33)</span></h5>
<div class="g2-tiles g2-wide">
<div class="g2-tile"><span class="g2-tile-label">AD self-treatment not improved or worse: refer after</span><span class="g2-tile-num">2&ndash;3 days</span><span class="g2-src">(DT 33)</span></div>
<div class="g2-tile"><span class="g2-tile-label">On a topical steroid: the follow-up figure is</span><span class="g2-tile-num">7 days</span><span class="g2-src">(DT 36, 52; her poll)</span></div>
</div>
<p class="g2-p">The two figures are recorded in OPEN_QUESTIONS (Lecture 5, item 2).</p>
<div class="g2-tiles g2-wide">
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1% not resolved: seek assistance at</span><span class="g2-tile-num">7 days</span><span class="g2-src">(DT 36)</span></div>
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1%: never past</span><span class="g2-tile-num">2 weeks</span><span class="g2-src">(DT 36)</span></div>
</div>
<p class="g2-p">Atrophy of the skin or infection while using the topical steroid: <b>discontinue and refer</b>.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Diaper dermatitis, do not use as self-care products <span class="g2-src">(DT 65)</span></h5>
<ul>
<li>Topical antifungals (miconazole)</li>
<li>Topical antibacterials</li>
<li>Topical anesthetics (benzocaine, lidocaine)</li>
<li>Hydrocortisone or other topical corticosteroid</li>
</ul>
<p class="g2-p">The diaper area is a large share of a baby&rsquo;s body surface area, and topical products can cause systemic side effects.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Exclusions for self-treatment of diaper dermatitis <span class="g2-src">(DT 68, &ldquo;please know this list&rdquo;, T@80993)</span></h5>
<div class="g2-two">
<ul>
<li>Lesions <b>&gt; 7 days</b></li>
<li>No improvement in <b>7 days</b> despite care</li>
<li>Secondary infection (viral, bacterial, fungal)</li>
<li>Lesions part of or caused by another disease</li>
<li>Rash outside the diaper region</li>
<li>Possible urinary tract infection</li>
<li>Broken skin (ulceration, blistering, peeling)</li>
</ul>
<ul>
<li>Onion-skin appearance or bullae</li>
<li>Oozing, blood, vesicles or pus</li>
<li>Chronic or frequently recurrent lesions</li>
<li>Constitutional symptoms (fever, diarrhea, nausea, vomiting, swollen inguinal lymph nodes, rapid pulse, rash elsewhere)</li>
<li>Behavioral changes (lethargy, incessant crying)</li>
<li>Comorbid conditions (HIV, organ transplant, immunosuppressive therapy, hepatitis with skin manifestations)</li>
</ul>
</div>
</div>
</section>

<section class="gobj" id="gobj-p5-4">
<h3>Dermatitis Therapeutics · Objective 4: treatment goals</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>List appropriate treatment goals</b><i>DT 27, 61</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Goals on her slide, by condition</h5>
<div class="g2-two">
<div>
<p class="g2-sub">Atopic dermatitis <span class="g2-src">(DT 27)</span></p>
<ul>
<li>Eliminate triggers</li>
<li>Reduce symptoms (pruritus, dermatitis)</li>
<li>Prevent future flare-ups</li>
<li>Prevent secondary infections</li>
<li>Minimize adverse drug reactions (do not use oral antibiotics or topical antibiotics over large areas of skin)</li>
<li>Reduce trans-epidermal water loss (TEWL)</li>
</ul>
</div>
<div>
<p class="g2-sub">Diaper / incontinence dermatitis <span class="g2-src">(DT 61)</span></p>
<ul>
<li>Relieve the symptoms</li>
<li>Get rid of the dermatitis</li>
<li>Prevent secondary infection</li>
<li>Prevent recurrences</li>
</ul>
</div>
</div>
</div>
</section>

<section class="gobj" id="gobj-p5-5">
<h3>Dermatitis Therapeutics · Objective 5: non-drug therapy</h3>
<div class="gbar"><span>Objective (DT 7)</span><b>Recommend appropriate non-drug therapy</b><i>DT 29&ndash;32, 51, 57, 59, 62</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Atopic dermatitis</h5>
<div class="g2-two">
<div>
<table class="g2-table g2-kv">
<caption>Fix the skin barrier <span class="g2-src">(DT 29)</span></caption>
<tbody>
<tr><th scope="row">Don&rsquo;t strip the weakened epidermis</th><td>Gentle cleansers, limit bathing time</td></tr>
<tr><th scope="row">Help re-establish it</th><td>Thick emollients, hydration</td></tr>
<tr><th scope="row">Reduce inflammation</th><td>Topical medications</td></tr>
</tbody>
</table>
<p class="g2-sub">Non-drug treatments <span class="g2-src">(DT 30)</span></p>
<ul>
<li>Bathing practices</li>
<li>Gentle cleansers</li>
<li>Wet wraps (short-term, not with TCIs)</li>
<li>Soft cotton clothing</li>
<li>Avoid known triggers</li>
<li>Decrease stress</li>
</ul>
<table class="g2-table g2-kv">
<caption>Bathing <span class="g2-src">(DT 31)</span></caption>
<tbody>
<tr><th scope="row">Bath</th><td><b>10-minute</b> lukewarm bath, gentle cleansers, pat dry</td></tr>
<tr><th scope="row">Added daily</th><td>Oatmeal or baking soda may be added daily</td></tr>
<tr><th scope="row">Bleach</th><td>Bleach <b>0.005%</b> sodium hypochlorite (&frac12; cup per full tub) <b>twice a week</b> for moderate&ndash;severe AD to prevent recurrent bacterial infection (can irritate; her last-line advice, T@32279)</td></tr>
<tr><th scope="row">After the bath</th><td>Occlusive moisturizer right after the bath</td></tr>
</tbody>
</table>
</div>
<div>
<p class="g2-sub">Counseling <span class="g2-src">(DT 51)</span></p>
<ul>
<li>Avoid triggers</li>
<li>No tight clothing</li>
<li>Moderate temperature</li>
<li>Short tepid showers or baths with a non-soap cleanser</li>
<li>Sponge baths in place of full-body bathing</li>
<li>Pat dry</li>
<li>Cool tap-water compresses <b>5&ndash;20 min, 4&ndash;6 times daily</b> for weeping lesions (not with TCIs)</li>
<li>Short clean nails, cotton gloves or socks at night</li>
</ul>
</div>
</div>
<table class="g2-table g2-stack">
<caption>OTC moisturizer <span class="g2-src">(DT 32)</span></caption>
<thead><tr><th scope="col">Type</th><th scope="col">Examples</th><th scope="col">Comments</th></tr></thead>
<tbody>
<tr><th scope="row">Petroleum-containing</th><td><span class="g2-lab">Examples</span>Aquaphor (petrolatum); Eucerin (petrolatum, mineral oil); Lubriderm (mineral oil, lanolin, petrolatum)</td><td><span class="g2-lab">Comments</span>Occlusive; can be greasy, uncomfortable; the most effective, thickest and longest-lasting (T@34639)</td></tr>
<tr><th scope="row">Ceramide-containing</th><td><span class="g2-lab">Examples</span>CeraVe (glycerin, petroleum, ceramides, hyaluronic acid); Aveeno eczema therapy (oatmeal, ceramides)</td><td><span class="g2-lab">Comments</span>Creams; provide a barrier</td></tr>
<tr><th scope="row">Urea-containing</th><td><span class="g2-lab">Examples</span>Carmol 10%, 20%; Lac-Hydrin 5%</td><td><span class="g2-lab">Comments</span>Humectant; burning, stinging, irritation on broken skin</td></tr>
<tr><th scope="row">Emollient lotions</th><td><span class="g2-lab">Examples</span>Cetaphil lotion, Keri Original, Neutrogena lotion</td><td><span class="g2-lab">Comments</span>Less effective; apply <b>3 times a day or more</b>, after bathing or washing</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Diaper and incontinence dermatitis</h5>
<div class="g2-two">
<div>
<p class="g2-sub">Infants <span class="g2-src">(DT 57)</span></p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Newborns: change the diaper every</span><span class="g2-tile-num">2 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Infants: change the diaper every</span><span class="g2-tile-num">3&ndash;4 hours</span></div>
</div>
<ul>
<li>Disposable diapers mean fewer rashes</li>
<li>Clean at every change (no difference between cloth, water, mild soap or alcohol-free wipe)</li>
<li>Dry before barrier cream</li>
<li>Breastfeeding means fewer rashes (pH)</li>
</ul>
<p class="g2-sub">Adults <span class="g2-src">(DT 59)</span></p>
<ul>
<li>Bath oil or pH-neutral cleansing foam, patting with a soft cloth</li>
<li>Skin hydration</li>
<li>Barrier cream</li>
<li>Pressure sore prevention</li>
<li>Good nutrition (protein, vitamins)</li>
</ul>
</div>
<div>
<table class="g2-table g2-kv">
<caption>ABCDE <span class="g2-src">(DT 62)</span></caption>
<tbody>
<tr><th scope="row"><b>A</b>ir</th><td>Air dry, diaper-free time</td></tr>
<tr><th scope="row"><b>B</b>arrier</th><td>Protectant liberally at each change</td></tr>
<tr><th scope="row"><b>C</b>leansing</th><td>Soft cloth and warm water, or a baby wipe when stool is present</td></tr>
<tr><th scope="row"><b>D</b>iaper</th><td>Change every <b>2 hours</b> and as soon as soiled; disposable if affordable</td></tr>
<tr><th scope="row"><b>E</b>ducation</th><td>Education of parents and caregivers</td></tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section class="gobj" id="gobj-p5-6">
<h3>Dermatitis Therapeutics · Objective 6: recommend the best treatment</h3>
<div class="gbar"><span>Objective (DT 8)</span><b>Dosing frequency and maximum days; onset; length of treatment; amount to dispense and tube size; adverse effects; contraindications and interactions</b><i>DT 10&ndash;13, 34&ndash;48, 52, 63&ndash;64</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Quantity: fingertip units <span class="g2-src">(DT 10&ndash;13)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table g2-kv">
<caption>Adult fingertip unit (FTU) and tube sizes <span class="g2-src">(DT 10; T@7221)</span></caption>
<tbody>
<tr><th scope="row">Adult FTU</th><td><b>= 0.5 g</b></td></tr>
<tr><th scope="row">Tubes</th><td>15, 30, 45, 60, 80, 100 g</td></tr>
<tr><th scope="row">Rounding</th><td>Always round up to an available size</td></tr>
</tbody>
</table>
<p class="g2-sub">Formula and worked amounts <span class="g2-src">(DT 13)</span></p>
<p class="g2-formula"><span class="g2-k">Formula</span>Grams = FTU &times; 0.5 g &times; applications a day &times; days</p>
<table class="g2-table g2-work g2-stack">
<thead><tr><th scope="col">Case</th><th scope="col">Arithmetic</th><th scope="col">Grams</th><th scope="col">Tube</th></tr></thead>
<tbody>
<tr><th scope="row">Face and neck BID 2 weeks</th><td>1.25 g &times; 2 &times; 14</td><td>= 35 g</td><td class="g2-ans">&rarr; 45 g</td></tr>
<tr><th scope="row">One side of trunk BID 2 weeks</th><td>3.5 g &times; 28</td><td>= 98 g</td><td class="g2-ans">&rarr; 100 g</td></tr>
</tbody>
</table>
<details class="g2-self"><summary>Her poll, face and neck TID 14 days <span class="g2-tap">Show answer</span></summary><p>1.25 &times; 3 &times; 14 = 52.5 g &rarr; <b>60 g</b> <span class="g2-src">(T@11444&ndash;11799)</span></p></details>
</div>
<div>
<table class="g2-table">
<caption>Adult FTU per area <span class="g2-src">(DT 11)</span></caption>
<thead><tr><th scope="col">Area</th><th scope="col" class="g2-n">FTU</th></tr></thead>
<tbody>
<tr><td>Scalp</td><td class="g2-n">3</td></tr>
<tr><td>Face and neck</td><td class="g2-n">2.5</td></tr>
<tr><td>One hand (front and back, with fingers)</td><td class="g2-n">1</td></tr>
<tr><td>One arm with the hand</td><td class="g2-n">4</td></tr>
<tr><td>Elbows</td><td class="g2-n">1</td></tr>
<tr><td>Both soles</td><td class="g2-n">1.5</td></tr>
<tr><td>One foot with toes</td><td class="g2-n">2</td></tr>
<tr><td>One leg with the foot</td><td class="g2-n">8</td></tr>
<tr><td>Buttocks</td><td class="g2-n">4</td></tr>
<tr><td>Knees</td><td class="g2-n">1</td></tr>
<tr><td>Trunk both sides (7 each side)</td><td class="g2-n">14</td></tr>
</tbody>
</table>
</div>
</div>
<div class="g2-btns"><button type="button" class="g2-primary" onclick="show('ftu')">Practice fingertip-unit calculations</button><button type="button" class="chip" data-jump="ref:ref-p5-ftu">Reference: fingertip units</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Step-care algorithm <span class="g2-src">(DT 47&ndash;48)</span></h5>
<div class="g2-ladder">
<div class="g2-rung"><div class="g2-sev">Everyone</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Basic management</span><p>Skin care, moisturizer, warm baths or showers with non-soap cleansers, trigger avoidance.</p></div>
</div></div>
<div class="g2-rung g2-s1"><div class="g2-sev">Non-lesional and mild</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k g2-acute">Acute</span><p><b>Low-to-medium potency TCS</b> twice daily for <b>3&ndash;7 days beyond clearance</b> (consider TCI, crisaborole).</p><p class="g2-said"><span class="g2-k">Said in class</span>Start low <span class="g2-src">(T@56572)</span></p></div>
</div></div>
<div class="g2-rung g2-s2"><div class="g2-sev">Moderate</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k g2-acute">Acute (moderate and severe)</span><p><b>Medium-to-high potency TCS</b> twice daily for <b>3&ndash;7 days beyond clearance</b>.</p></div>
<div class="g2-cell"><span class="g2-k g2-maint">Maintenance</span><ul>
<li><b>Low-potency TCS</b> 1&ndash;2 times daily (including face); <b>medium potency</b> 1&ndash;2 times weekly (except face)</li>
<li><span class="g2-or">OR</span> <b>TCI</b> 1&ndash;2 times daily or 2&ndash;3 times weekly</li>
<li><span class="g2-or">OR</span> <b>crisaborole 2%</b> twice daily</li>
</ul></div>
</div></div>
<div class="g2-rung g2-s3"><div class="g2-sev">Severe</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k g2-acute">Acute</span><ul>
<li><b>Medium-to-high potency TCS</b> twice daily for <b>3&ndash;7 days beyond clearance</b> (moderate and severe)</li>
<li>Wet wraps</li>
<li>Short-term hospitalization</li>
</ul></div>
<div class="g2-cell"><span class="g2-k g2-maint">Maintenance</span><ul>
<li>Referral to an AD specialist</li>
<li>Phototherapy</li>
<li>Dupilumab</li>
<li>Systemic immunosuppressants (cyclosporine A, methotrexate, mycophenolate mofetil, azathioprine, not FDA-approved for AD; corticosteroids, not for long-term maintenance)</li>
</ul></div>
</div></div>
</div>
<div class="g2-note"><span class="g2-k">Moderate and severe, acute: not resolved in 7 days</span><p>Consider nonadherence, infection, misdiagnosis, contact allergy to medications, referral.</p></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Drugs for atopic dermatitis <span class="g2-src">(DT 34&ndash;46)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table">
<caption>Order <span class="g2-src">(DT 48; T@57389)</span></caption>
<thead><tr><th scope="col">Line</th><th scope="col">Drug</th></tr></thead>
<tbody>
<tr><th scope="row">First line</th><td>Topical corticosteroid</td></tr>
<tr><th scope="row">Second</th><td>TCI <span class="g2-src">(DT 38)</span></td></tr>
<tr><th scope="row">Third</th><td>Crisaborole <span class="g2-src">(DT 41)</span></td></tr>
<tr><th scope="row">Moderate&ndash;severe AD after topicals</th><td>Dupilumab or tralokinumab <span class="g2-src">(DT 43, 45)</span></td></tr>
<tr><th scope="row">Last, refractory</th><td>JAK inhibitors <span class="g2-src">(DT 46)</span></td></tr>
</tbody>
</table>
<p class="g2-p">Mechanisms: see the pharmacology and medicinal chemistry guides above <span class="g2-src">(DT 35, 38, 41, 43)</span>.</p>
</div>
<div>
<p class="g2-sub">Onset <span class="g2-src">(DT 52, 38)</span></p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Topical steroid onset: starts working in</span><span class="g2-tile-num">24&ndash;48 h</span></div>
<div class="g2-tile"><span class="g2-tile-label">TCI onset: starts working in</span><span class="g2-tile-num">1&ndash;8 weeks</span></div>
</div>
<p class="g2-sub">Length of treatment</p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1% BID: maximum length of treatment</span><span class="g2-tile-num">3&ndash;7 days</span><span class="g2-src">(DT 36)</span></div>
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1% BID: seek help at</span><span class="g2-tile-num">7 days</span><span class="g2-src">(DT 36)</span></div>
<div class="g2-tile"><span class="g2-tile-label">OTC hydrocortisone 1% BID: never past</span><span class="g2-tile-num">2 weeks</span><span class="g2-src">(DT 36)</span></div>
<div class="g2-tile"><span class="g2-tile-label">TCI: reassess at</span><span class="g2-tile-num">6 weeks</span><span class="g2-src">(DT 40)</span></div>
</div>
</div>
</div>
<table class="g2-table g2-kv">
<caption>Potency and vehicle</caption>
<tbody>
<tr><th scope="row">Potency</th><td>See Reference, &ldquo;Dr. Patel: topical corticosteroid potency&rdquo;.</td></tr>
<tr><th scope="row">Vehicle</th><td>Ointment &gt; cream &gt; lotion &gt; solution &gt; gel &gt; spray <span class="g2-src">(DT 37)</span></td></tr>
<tr><th scope="row">Face</th><td>Hydrocortisone 1% is the one steroid for the face <span class="g2-src">(DT 36; T@37425)</span></td></tr>
<tr><th scope="row">Products</th><td><p class="g2-said"><span class="g2-k">Said in class</span>For AD, single-ingredient products only <span class="g2-src">(T@41713)</span></p></td></tr>
<tr><th scope="row">Absorption</th><td>Topical steroid absorption varies with age, skin integrity, skin thickness and anatomic location <span class="g2-src">(DT 35)</span></td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p5-tcs">Reference: steroid potency</button><button type="button" class="chip" data-jump="ref:ref-p5-drugs">Reference: AD drugs by line</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Counseling for a topical steroid <span class="g2-src">(DT 35, 52)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Hands</th><td>Wash hands before and after</td></tr>
<tr><th scope="row">Where</th><td>Apply to a clean, dry area</td></tr>
<tr><th scope="row">Emollient</th><td>Emollient within <b>3 minutes</b> after bathing while the skin is still damp</td></tr>
<tr><th scope="row">How much</th><td>A thin layer rubbed in gently until it vanishes</td></tr>
<tr><th scope="row">How often</th><td><b>1&ndash;2 times daily</b></td></tr>
<tr><th scope="row">Storage</th><td>Store cool, dry, room temperature (not the bathroom, T@37049)</td></tr>
<tr><th scope="row">After applying</th><td>Do not wrap, which raises absorption, and let it air dry <b>3&ndash;5 minutes</b> before clothing <span class="g2-src">(T@40748)</span></td></tr>
<tr><th scope="row">Seasons</th><td>Lesions can worsen in winter and summer</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Diaper dermatitis products <span class="g2-src">(DT 63&ndash;64)</span></h5>
<div class="g2-two">
<table class="g2-table g2-kv">
<caption>Skin protectants (17 FDA-approved ingredients) <span class="g2-src">(DT 63)</span></caption>
<tbody>
<tr><th scope="row">Amount</th><td>Liberally at every change</td></tr>
<tr><th scope="row">Old product</th><td>Old product removed gently</td></tr>
<tr><th scope="row">Coverage</th><td>Red areas fully covered</td></tr>
<tr><th scope="row">Duration</th><td>Continued after healing</td></tr>
</tbody>
</table>
<table class="g2-table g2-stack">
<caption>Ingredients <span class="g2-src">(DT 64)</span></caption>
<thead><tr><th scope="col">Product</th><th scope="col">Strength</th><th scope="col">What it is</th></tr></thead>
<tbody>
<tr><th scope="row">Zinc oxide</th><td><span class="g2-lab">Strength</span><b>1&ndash;40%</b></td><td>The active ingredient (common, excellent, thick and tacky)</td></tr>
<tr><th scope="row">Petrolatum</th><td><span class="g2-lab">Strength</span><b>30&ndash;100%</b></td><td>The ointment base</td></tr>
<tr><th scope="row">A &amp; D Ointment</th><td></td><td>Has lanolin and petrolatum, no zinc oxide</td></tr>
</tbody>
</table>
</div>
</div>
<div class="gpoll"><b>Her polls (the 21-year-old)</b>
<details class="g2-self"><summary>First-line maintenance <span class="g2-tap">Show answer</span></summary><p>Basic management + topical corticosteroid <span class="g2-src">(T@58910&ndash;59410)</span></p></details>
<details class="g2-self"><summary>Prescription details <span class="g2-tap">Show answer</span></summary><p>Hydrocortisone 1%, thin layer BID for 3&ndash;7 days; start low, as he is not on a steroid now <span class="g2-src">(T@59799&ndash;60609)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p5-7">
<h3>Dermatitis Therapeutics · Objective 7: follow-up</h3>
<div class="gbar"><span>Objective (DT 8)</span><b>Provide follow-up recommendations</b><i>DT 33, 36, 48, 52, 66</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Follow-up</h5>
<div class="g2-two">
<div>
<p class="g2-sub">Topical steroid for AD <span class="g2-src">(DT 36, 52)</span></p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Topical steroid for AD: improvement in</span><span class="g2-tile-num">24&ndash;48 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Topical steroid for AD: refer if not better after</span><span class="g2-tile-num">7 days</span></div>
<div class="g2-tile"><span class="g2-tile-label">Topical steroid for AD: never past</span><span class="g2-tile-num">2 weeks</span></div>
</div>
<p class="g2-said"><span class="g2-k">Said in class</span>Her poll answer: 7 days <span class="g2-src">(T@68450)</span></p>
<p class="g2-p">Atrophy or infection on a topical steroid: <b>discontinue and refer</b> <span class="g2-src">(DT 33)</span>.</p>
</div>
<div>
<table class="g2-table g2-kv">
<caption>Diaper dermatitis at 7 days <span class="g2-src">(DT 66)</span></caption>
<tbody>
<tr><th scope="row">Improved but not healed</th><td>Continue until healed</td></tr>
<tr><th scope="row">Not healed, not improved or worse</th><td><b>Refer</b></td></tr>
</tbody>
</table>
<p class="g2-said"><span class="g2-k">Said in class</span>Her poll answer: 7 days <span class="g2-src">(T@82496)</span></p>
<p class="g2-sub">JAK inhibitors</p>
<p class="g2-said"><span class="g2-k">Said in class</span>Specialty follow-up every <b>2 weeks</b> <span class="g2-src">(T@55363)</span></p>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Pharmacist role and access <span class="g2-src">(DT 50, 53)</span></h5>
<div class="g2-two">
<div>
<p class="g2-sub">Pharmacist role <span class="g2-src">(DT 50)</span></p>
<ul>
<li>Improve adherence through education</li>
<li>Therapy optimization and monitoring</li>
<li>Recommend moisturizers and OTC products</li>
<li>Patient-friendly education on the plan</li>
<li>Accessible support</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>The SCORAD score is the physician&rsquo;s to calculate <span class="g2-src">(T@21052)</span></p>
</div>
<div>
<p class="g2-sub">Access <span class="g2-src">(DT 53)</span></p>
<ul>
<li>Barriers: high out-of-pocket costs, limited formularies, prior authorization and step therapy</li>
<li>Manufacturer patient assistance programs and grant foundations help patients with limited or no coverage</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>A denied prior authorization goes to appeal and a peer-to-peer conversation; the PCP writes the statement <span class="g2-src">(T@66410)</span></p>
</div>
</div>
</div>
</section>

<h2 class="gdeck" id="gdeck-p6">Acne Therapeutics (Dr. Patel, 11/10; Exam 2)</h2>
<p class="sub">AT = Patel_Acne-Therapeutics-Student.pdf, slide = PDF page; T@ = place in the 11/10 lecture transcript; PollEv = her in-class polls of 11/10. Her nine objectives (AT 2), one section each.</p>
<div class="gask"><b>How she asks (11/10)</b><ul><li>&ldquo;All questions are fair game in terms of multiple choice, select all possible, fill in the blank ... calculations ... matching&rdquo;; &ldquo;I do create questions based on the objectives that I start off with&rdquo; (T@2398).</li><li>Severity words: one, some, many. &ldquo;Those are the terms that I will also use on my cases on the exam ... I&rsquo;m not gonna tell you like 10&rdquo; (T@13918).</li><li>Cases: &ldquo;what is first line for that severity? ... know exactly what has the patient tried and what is left to try&rdquo; (T@60314). Pregnancy tests: &ldquo;I said it twice because hint, it&rsquo;s a question&rdquo; (T@49632).</li></ul></div>

<section class="gobj" id="gobj-p6-1">
<h3>Acne Therapeutics · Objective 1: classify the stage and severity of acne</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Classify stages of acne</b><i>AT 5&ndash;8</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Stages: the lesions <span class="g2-src">(AT 5&ndash;6; T@6156&ndash;7508)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Lesion</th><th scope="col">Group</th><th scope="col">Description</th></tr></thead>
<tbody>
<tr><th scope="row">Open comedone</th><td>Non-inflammatory</td><td>Blackhead</td></tr>
<tr><th scope="row">Closed comedone</th><td>Non-inflammatory</td><td>Whitehead</td></tr>
<tr><th scope="row">Papule</th><td>Inflammatory</td><td>Raised, red, no pus</td></tr>
<tr><th scope="row">Pustule</th><td>Inflammatory</td><td>Visible white pus</td></tr>
<tr><th scope="row">Nodule or cyst</th><td>Inflammatory</td><td>Large, under the skin; worst stage</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Severity: the grades <span class="g2-src">(AT 7&ndash;8)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Grade</th><th scope="col">Non-inflammatory</th><th scope="col">Inflammatory</th><th scope="col">Nodules; scarring</th></tr></thead>
<tbody>
<tr><th scope="row">Mildly clear</th><td><span class="g2-lab">Non-inflammatory</span>Rare; no more than 1 small lesion</td><td></td><td></td></tr>
<tr><th scope="row">Mild</th><td><span class="g2-lab">Non-inflammatory</span>Some</td><td><span class="g2-lab">Inflammatory</span>No more than a few papules and pustules</td><td><span class="g2-lab">Nodules; scarring</span>No nodules; minimal scarring</td></tr>
<tr><th scope="row">Moderate</th><td><span class="g2-lab">Non-inflammatory</span>Many</td><td><span class="g2-lab">Inflammatory</span>Some</td><td><span class="g2-lab">Nodules; scarring</span>No more than one nodule; mild scarring possible</td></tr>
<tr><th scope="row">Severe</th><td><span class="g2-lab">Non-inflammatory</span>Many</td><td><span class="g2-lab">Inflammatory</span>Many</td><td><span class="g2-lab">Nodules; scarring</span>A few nodules; moderate to extensive scarring</td></tr>
</tbody>
</table>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Case 1 (16-year-old, some open and closed comedones, no inflammation) <span class="g2-tap">Show answer</span></summary><p>Mild acne <span class="g2-src">(T@12560&ndash;14612)</span></p></details>
<details class="g2-self"><summary>Case 2 (cysts on cheek, back and shoulders) <span class="g2-tap">Show answer</span></summary><p>Severe; &ldquo;is it no more than one cystic lesion or is it more than one?&rdquo; <span class="g2-src">(T@68494&ndash;69094)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p6-2">
<h3>Acne Therapeutics · Objective 2: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>AT 9&ndash;11, 17&ndash;18</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Exclusions for self-care <span class="g2-src">(AT 18)</span></h5>
<ul>
<li>Severe acne</li>
<li>Possible rosacea</li>
<li>Exacerbating factors</li>
<li>Comedogenic drugs</li>
</ul>
<p class="g2-p">A straight referral to dermatology <span class="g2-src">(T@19247&ndash;19941)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Drugs that cause or worsen acne <span class="g2-src">(AT 10)</span></h5>
<ul>
<li>Corticosteroids, androgens, progesterone contraceptives</li>
<li>TCAs, lithium, antiepileptics, aripiprazole, SSRIs</li>
<li>Vitamins B1, B6, B12</li>
<li>Dactinomycin, cyclosporine, sirolimus</li>
<li>Isoniazid, rifampin, ethionamide</li>
<li>Iodine, bromine, chlorine</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Complications <span class="g2-src">(AT 11)</span></h5>
<p class="g2-p">Anxiety, depression, scarring.</p>
<p class="g2-said"><span class="g2-k">Said in class</span>Scarring the most common <span class="g2-src">(T@11250)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Testing <span class="g2-src">(AT 17)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Routine</th><td>No routine endocrine or microbiologic testing</td></tr>
<tr><th scope="row">Exception</th><td>High suspicion of PCOS or another hormonal disorder</td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p6-3">
<h3>Acne Therapeutics · Objective 3: treatment goals and the overall approach</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Recommend appropriate non-pharmacologic and pharmacologic therapy</b><i>AT 3, 13, 47</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Goals <span class="g2-src">(AT 13)</span></h5>
<ul>
<li>Alleviate symptoms</li>
<li>Reduce the number and severity of lesions</li>
<li>Improve appearance</li>
<li>Slow progression</li>
<li>Limit duration and recurrence</li>
<li>Prevent long-term scarring and hyperpigmentation</li>
</ul>
<p class="g2-p">No cure <span class="g2-src">(AT 3; T@11895)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Plan <span class="g2-src">(AT 47; T@71629)</span></h5>
<ul>
<li>The smallest number of agents at the lowest possible dosages</li>
<li>Topical before oral</li>
<li>Taper over time, never stop abruptly</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p6-4">
<h3>Acne Therapeutics · Objective 4: non-drug counseling</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Counsel patients on non-pharmacologic strategies</b><i>AT 19, 24, 43</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Cleansing <span class="g2-src">(AT 19; T@20370, T@28136)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">How often</th><td>Cleanse twice a day with a mild soap or non-soap cleanser</td></tr>
<tr><th scope="row">Avoid</th><td>No abrasive products, devices or excessive cleansing</td></tr>
<tr><th scope="row">Order</th><td>Remove dirt and makeup with an oil-based cleanser before a water-based one</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Vehicle by skin type <span class="g2-src">(AT 24)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Skin type</th><th scope="col">Vehicle</th></tr></thead>
<tbody>
<tr><th scope="row">Oily to normal</th><td>Gels, solutions, lotions</td></tr>
<tr><th scope="row">Normal to dry</th><td>Lotions and creams</td></tr>
</tbody>
</table>
<p class="g2-p">Ointments and bars not usually recommended.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Shaving <span class="g2-src">(AT 43)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Razor</th><td>Electric or safety razor</td></tr>
<tr><th scope="row">Beard</th><td>Soften the beard</td></tr>
<tr><th scope="row">How</th><td>Shave lightly and infrequently with a sharp blade, in the direction of hair growth, each area once</td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p6-5">
<h3>Acne Therapeutics · Objective 5: OTC and prescription-only products</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Recognize non-prescription and prescription-only products</b><i>AT 22&ndash;33</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> OTC agents <span class="g2-src">(AT 23)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">OTC agent</th><th scope="col">Bactericidal</th><th scope="col">Keratolytic</th><th scope="col">Comedolytic</th></tr></thead>
<tbody>
<tr><th scope="row">Benzoyl peroxide</th><td><span class="g2-lab">Bactericidal</span>Yes</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>Yes</td></tr>
<tr><th scope="row">Topical retinoid</th><td><span class="g2-lab">Bactericidal</span>No</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>Yes</td></tr>
<tr><th scope="row">Alpha and beta hydroxy acids</th><td><span class="g2-lab">Bactericidal</span>No</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>Yes</td></tr>
<tr><th scope="row">Sulfur</th><td><span class="g2-lab">Bactericidal</span>No</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>Yes</td></tr>
<tr><th scope="row">Resorcinol</th><td><span class="g2-lab">Bactericidal</span>Yes (and antifungal)</td><td><span class="g2-lab">Keratolytic</span>Yes</td><td><span class="g2-lab">Comedolytic</span>No</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> First-line agent</h5>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Benzoyl peroxide targets all three ... So that means that benzoyl peroxide will be our first-line agent&rdquo; <span class="g2-src">(T@24800)</span></p>
<p class="g2-p">See Reference, &ldquo;Dr. Patel: acne agents&rdquo;.</p>
</div>
</section>

<section class="gobj" id="gobj-p6-6">
<h3>Acne Therapeutics · Objective 6: guidelines, algorithm and first-line agents</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Apply guidelines and algorithms; recognize first-line agents</b><i>AT 20, 25, 40</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Step by step <span class="g2-src">(T@54687, T@57819, T@59132)</span></h5>
<div class="g2-ladder">
<div class="g2-rung"><div class="g2-sev">First</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">In this order</span><ul>
<li>One agent</li>
<li>Then the other</li>
<li>Then combinations of two</li>
<li>Then three</li>
</ul></div>
</div></div>
<div class="g2-rung g2-s2"><div class="g2-sev">After the topical combinations</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Next</span><p>An oral antibiotic</p></div>
</div></div>
<div class="g2-rung g2-s3"><div class="g2-sev">Absolute last line</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Last</span><p>Isotretinoin</p></div>
</div></div>
</div>
<div class="g2-note"><span class="g2-k">Order</span><p>Topical before oral.</p></div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p6-alg">Reference: acne algorithm by severity</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Topical antibiotics <span class="g2-src">(AT 25, 31; T@28783, T@36940)</span></h5>
<p class="g2-p">Topical antibiotics are not used alone: always with BP, to reduce resistance.</p>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Case 1 first line <span class="g2-tap">Show answer</span></summary><p>Benzoyl peroxide BID to affected areas; &ldquo;keyword in this question? First line&rdquo; <span class="g2-src">(T@66568)</span></p></details>
<details class="g2-self"><summary>Case 2 next line after 8 months of doxycycline + retinoid + BP, irregular periods <span class="g2-tap">Show answer</span></summary><p>Combined oral contraceptive over spironolactone <span class="g2-src">(T@69094&ndash;69647)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p6-7">
<h3>Acne Therapeutics · Objective 7: topical product by symptoms</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Recommend appropriate topical products based on patient symptoms</b><i>AT 23&ndash;31</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Benzoyl peroxide <span class="g2-src">(AT 23, 26)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Strength</th><td><b>2.5&ndash;10%</b> OTC</td></tr>
<tr><th scope="row">How often</th><td><b>1&ndash;2 times daily</b></td></tr>
<tr><th scope="row">Irritation</th><td>Irritation settles in <b>1&ndash;2 weeks</b></td></tr>
<tr><th scope="row">Adverse effects</th><td>Drying, photosensitivity, bleaches hair and clothing</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Adapalene (Differin) 0.1% OTC <span class="g2-src">(AT 27; T@30492&ndash;31851)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">When</th><td>At night; BP in the morning</td></tr>
<tr><th scope="row">Not with</th><td>Not with sulfur, resorcinol, salicylic acid or vitamin C</td></tr>
<tr><th scope="row">Also use</th><td>Moisturizer and sunscreen</td></tr>
<tr><th scope="row">Age</th><td>Over <b>12 years</b></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Salicylic acid, AHAs, tea tree oil</h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Salicylic acid</th><td>Once or twice daily as a cleanser or gel; maximum effect <b>4&ndash;6 weeks</b>; limited efficacy data <span class="g2-src">(AT 29)</span></td></tr>
<tr><th scope="row">AHAs</th><td>Trial form; <b>2&ndash;4 weeks</b> between peels; sunscreen <span class="g2-src">(AT 28)</span></td></tr>
<tr><th scope="row">Tea tree oil</th><td>In a lotion or gel vehicle <span class="g2-src">(AT 30)</span></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Prescription <span class="g2-src">(AT 31)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Topical antibiotics</th><td>Wait <b>30 minutes</b> to shave or apply cosmetics</td></tr>
<tr><th scope="row">Azelaic acid</th><td>For post-inflammatory dyspigmentation</td></tr>
<tr><th scope="row">Dapsone</th><td>G6PD; CBC, reticulocytes</td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p6-8">
<h3>Acne Therapeutics · Objective 8: counseling on drug and non-drug therapy</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Counseling points for non-drug and drug therapies</b><i>AT 33&ndash;38, 41&ndash;43</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Topicals <span class="g2-src">(AT 42)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Before</th><td>Wash, pat dry, wait <b>20&ndash;30 minutes</b></td></tr>
<tr><th scope="row">Apply</th><td>A thin layer in the evening, avoiding eyes, ears, nostrils, mouth</td></tr>
<tr><th scope="row">If irritation</th><td>Decrease frequency</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Orals <span class="g2-src">(AT 42)</span></h5>
<ul>
<li>Swallow whole with a full glass of water</li>
<li>May take after eating</li>
<li>Caution driving at night</li>
<li>Sunscreen</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Tetracyclines and TMP/SMX</h5>
<table class="g2-table g2-kv">
<caption>Tetracyclines <span class="g2-src">(AT 33; T@39928)</span></caption>
<tbody>
<tr><th scope="row">Age</th><td>Over <b>12 years</b> only (tooth discoloration)</td></tr>
<tr><th scope="row">Adverse effect</th><td>Photosensitivity</td></tr>
<tr><th scope="row">Pregnancy</th><td>Avoid in pregnancy</td></tr>
<tr><th scope="row">Re-evaluate</th><td>Re-evaluate at <b>3&ndash;4 months</b></td></tr>
</tbody>
</table>
<p class="g2-p">TMP/SMX only with macrolide and tetracycline allergy, not in sulfur allergy.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> COC <span class="g2-src">(AT 34&ndash;36)</span></h5>
<ul>
<li>Female wanting contraception</li>
<li>Over 14 or 2 years past menarche</li>
<li>Non-smoker under 35</li>
<li>VTE risk</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Isotretinoin and iPledge</h5>
<p class="g2-p">See Reference, &ldquo;Dr. Patel: isotretinoin and iPledge&rdquo;.</p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p6-ipledge">Reference: isotretinoin and iPledge</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Best COC candidate <span class="g2-tap">Show answer</span></summary><p>The 22-year-old who does not want to be pregnant (not DVT, not a 35-year-old smoker, not 12) <span class="g2-src">(T@45257&ndash;46636)</span></p></details>
<details class="g2-self"><summary>NOT an isotretinoin counseling point <span class="g2-tap">Show answer</span></summary><p>Dairy <span class="g2-src">(T@69647&ndash;70327)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p6-9">
<h3>Acne Therapeutics · Objective 9: side effects, expectations, monitoring</h3>
<div class="gbar"><span>Objective (AT 2)</span><b>Side effects, expectations of treatment, education</b><i>AT 37&ndash;38, 41, 44, 48</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Expectations and monitoring</h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Time to see visible benefits</span><span class="g2-tile-num">8 weeks or more</span><span class="g2-src">(AT 41)</span></div>
</div>
<p class="g2-sub">Response and monitoring <span class="g2-src">(AT 44)</span></p>
<div class="g2-two">
<div>
<table class="g2-table">
<thead><tr><th scope="col">Expectation</th><th scope="col">When</th></tr></thead>
<tbody>
<tr><td>Lesion count down <b>10&ndash;25%</b></td><td>Within 4&ndash;8 weeks</td></tr>
<tr><td>Lesion count down <b>&gt;50%</b></td><td>Within 2&ndash;4 months</td></tr>
<tr><td>Comedones resolve</td><td>By 3&ndash;4 months</td></tr>
</tbody>
</table>
</div>
<div>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Patient</th><td>Patient monitors daily</td></tr>
<tr><th scope="row">Pharmacist</th><td>Pharmacist every <b>4&ndash;8 weeks</b></td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> No response <span class="g2-src">(AT 48)</span></h5>
<ul>
<li>Check adherence and use</li>
<li>Change the vehicle to suit the skin type</li>
<li>Avoid overuse of cleansers</li>
</ul>
</div>
</section>

<h2 class="gdeck" id="gdeck-p7">Scaly Dermatoses Therapeutics (Dr. Patel, 11/10&ndash;11/11; Exam 2)</h2>
<p class="sub">SD = Patel_Scaly-Dermatoses-Therapeutics-Student.pdf (11/11 version), slide = PDF page; T@ = place in the 11/10 or 11/11 transcript, dated; PollEv = her polls of 11/10 and 11/11. Her seven objectives (SD 2&ndash;3), one section each.</p>
<div class="gask"><b>How she asks (11/10&ndash;11/11)</b><ul><li>Adult fingertip units again: &ldquo;hint, please know this chart, OK? So adult only&rdquo; (SD 4; T@76480 11/10).</li><li>Biologics: &ldquo;know the generic names, know the brand names, understand what class to follow through, and exactly what&rsquo;s bolded on the slide&rdquo; (T@22212 11/11); TNF-&alpha; in heart failure: &ldquo;I&rsquo;m saying this twice for a reason&rdquo; (T@22212 11/11).</li><li>&ldquo;Know exactly what we would trial with a mild to moderate patient or a moderate to severe patient first&rdquo; (T@33701 11/11). Not asked: cyclosporine dosing (T@17897 11/11), the exact turnover multiples (T@83726 11/10), severity tools other than BSA (T@10671 11/11).</li></ul></div>

<section class="gobj" id="gobj-p7-1">
<h3>Scaly Dermatoses · Objective 1: the patient interview and care process</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>Perform the components of the Patient-Centered Care / STEPS process in the patient interview for dermatologic conditions</b><i>SD 29&ndash;30, 48</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> The care process <span class="g2-src">(SD 29)</span></h5>
<p class="g2-p">Collect, assess, plan, implement, follow-up (monitor and evaluate) around patient-centered care.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Factors in choosing psoriasis therapy <span class="g2-src">(SD 30)</span></h5>
<ul>
<li>Age and sex</li>
<li>Socioeconomic status</li>
<li>Severity</li>
<li>Location of lesions</li>
<li>Past and current treatment</li>
<li>Comorbidities</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Age is huge&rdquo; <span class="g2-src">(T@9650 11/11)</span></p>
</div>
</section>

<section class="gobj" id="gobj-p7-2">
<h3>Scaly Dermatoses · Objective 2: dandruff, seborrheic dermatitis or psoriasis?</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>Determine if the patient has rosacea, psoriasis, psoriatic arthritis, seborrhea or dandruff by typical signs and symptoms and patient history</b><i>SD 6, 8, 11&ndash;13, 21&ndash;27, 31</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> The three conditions compared <span class="g2-src">(SD 6)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Feature</th><th scope="col">Dandruff</th><th scope="col">Seborrheic dermatitis</th><th scope="col">Psoriasis</th></tr></thead>
<tbody>
<tr><th scope="row">Location</th><td><span class="g2-lab">Dandruff</span>Scalp</td><td><span class="g2-lab">Seborrheic dermatitis</span>Scalp, face, trunk</td><td><span class="g2-lab">Psoriasis</span>Scalp, elbows, knees, trunk, lower extremities</td></tr>
<tr><th scope="row">Exacerbating factors</th><td><span class="g2-lab">Dandruff</span>Generally stable; dry climate, cold, stress</td><td><span class="g2-lab">Seborrheic dermatitis</span>Immunosuppression, neurologic conditions, environment, stress</td><td><span class="g2-lab">Psoriasis</span>Environment, infection, medications, stress, alcohol, tobacco</td></tr>
<tr><th scope="row">Appearance</th><td><span class="g2-lab">Dandruff</span>Thin, white or grey flakes</td><td><span class="g2-lab">Seborrheic dermatitis</span>Macules, patches, thin plaques of yellow, oily scales on red skin</td><td><span class="g2-lab">Psoriasis</span>Discrete symmetrical red plaques, sharp borders; silvery white scales, bleeding points</td></tr>
<tr><th scope="row">Inflammation; hyperplasia</th><td><span class="g2-lab">Dandruff</span>Absent; absent</td><td><span class="g2-lab">Seborrheic dermatitis</span>Present; present</td><td><span class="g2-lab">Psoriasis</span>Present; present</td></tr>
<tr><th scope="row">Turnover</th><td><span class="g2-lab">Dandruff</span>Slowest</td><td><span class="g2-lab">Seborrheic dermatitis</span>Second fastest</td><td><span class="g2-lab">Psoriasis</span>Fastest</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Dandruff and seborrheic dermatitis: cause and who gets it</h5>
<div class="g2-two">
<div>
<table class="g2-table g2-kv">
<caption>Dandruff <span class="g2-src">(SD 8; T@84375 11/10)</span></caption>
<tbody>
<tr><th scope="row">Cause</th><td>Malassezia</td></tr>
<tr><th scope="row">Inflammation</th><td>Non-inflammatory, the mild inflammation is secondary to scratching</td></tr>
<tr><th scope="row">Onset</th><td>Puberty onset</td></tr>
</tbody>
</table>
</div>
<div>
<table class="g2-table g2-kv">
<caption>Seborrheic dermatitis <span class="g2-src">(SD 11&ndash;12)</span></caption>
<tbody>
<tr><th scope="row">Cause</th><td>Malassezia</td></tr>
<tr><th scope="row">Infants</th><td>Cradle cap, scalp only, up to <b>30 months</b></td></tr>
<tr><th scope="row">Adults</th><td>Yellow greasy scales on head, ears, face; men &gt; women</td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Psoriasis <span class="g2-src">(SD 21, 26)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">How common</th><td><b>3%</b> of the US</td></tr>
<tr><th scope="row">Age</th><td>Peaks at <b>20&ndash;30</b> and <b>50&ndash;60 years</b></td></tr>
<tr><th scope="row">Sex</th><td>No gender preference</td></tr>
<tr><th scope="row">Type</th><td>Plaque type <b>&gt;80%</b></td></tr>
<tr><th scope="row">Plaques</th><td>Plaques red-violet, at least <b>0.5 cm</b>, well demarcated, silver flaking scales</td></tr>
<tr><th scope="row">Itch</th><td>Pruritus in <b>&gt;50%</b></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Severity by BSA <span class="g2-src">(SD 31)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Severity</th><th scope="col">BSA</th></tr></thead>
<tbody>
<tr><th scope="row">Mild</th><td><b>&le; 5%</b></td></tr>
<tr><th scope="row">Moderate</th><td><b>&ge; 8%</b></td></tr>
<tr><th scope="row">Severe</th><td><b>&ge; 10%</b> (&ldquo;corrected to 10% ... follow this slide&rdquo;, T@10484 11/11)</td></tr>
</tbody>
</table>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Dandruff case <span class="g2-tap">Show answer</span></summary><p>Malassezia; mild presentation; non-medicated shampoo <span class="g2-src">(T@81752, T@82442 11/10)</span></p></details>
<details class="g2-self"><summary>Adult and infant cases <span class="g2-tap">Show answer</span></summary><p>Seborrheic dermatitis <span class="g2-src">(T@94640, T@95306 11/10)</span></p></details>
<details class="g2-self"><summary>Psoriasis case, BSA 7% <span class="g2-tap">Show answer</span></summary><p>Mild to moderate psoriasis; &ldquo;like a 9%&rdquo; would be moderate to severe <span class="g2-src">(T@34825&ndash;35074 11/11)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p7-3">
<h3>Scaly Dermatoses · Objective 3: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>SD 9, 16, 18, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Dandruff and adult seborrheic dermatitis <span class="g2-src">(SD 16; T@89612 11/10)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Self-care</th><td>OTC shampoos</td></tr>
<tr><th scope="row">Refer</th><td>Seborrheic dermatitis that worsens or lasts longer than <b>7 days</b>: consult a health care provider</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Infants <span class="g2-src">(SD 18; T@95994 11/10)</span></h5>
<ul>
<li>No ketoconazole</li>
<li>No corticosteroids</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Non-prescription or prescribed</h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Non-prescription</th><td>Mild to moderate scaly dermatoses can often be managed with topical non-prescription products <span class="g2-src">(SD 51)</span></td></tr>
<tr><th scope="row">Prescribed</th><td>Systemic and biologic psoriasis therapy is prescribed and often specialty <span class="g2-src">(SD 40, 47)</span></td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p7-4">
<h3>Scaly Dermatoses · Objective 4: treatment goals</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>List treatment goals</b><i>SD 9, 14, 28</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Dandruff <span class="g2-src">(SD 9)</span></h5>
<ul>
<li>Reduce epidermal turnover and Malassezia</li>
<li>Minimize visible scaling and itching</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Psoriasis <span class="g2-src">(SD 28)</span></h5>
<ul>
<li>Minimize plaques and scales</li>
<li>Alleviate pruritus</li>
<li>Reduce flare-ups</li>
<li>Treat associated conditions (hypertension, dyslipidemia, diabetes, depression)</li>
<li>Screen lifestyle factors (stress, smoking, obesity)</li>
<li>Counsel</li>
<li>Cost-effective therapy</li>
<li>Avoid adverse effects</li>
<li>Quality of life</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p7-5">
<h3>Scaly Dermatoses · Objective 5: non-drug therapy</h3>
<div class="gbar"><span>Objective (SD 2)</span><b>Recommend appropriate non-drug therapy</b><i>SD 15, 18, 33&ndash;34</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Seborrheic dermatitis scale softening <span class="g2-src">(SD 15)</span></h5>
<ul>
<li>Mineral or olive oil, or a cream with salicylic acid or sulfur</li>
<li>Dishwashing liquid for tough scale</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Infants <span class="g2-src">(SD 18)</span></h5>
<ul>
<li>Massage with baby or vegetable oil, non-medicated shampoo, soft bristle brush</li>
<li>Face: mild soap and emollient</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Psoriasis, every patient <span class="g2-src">(SD 33&ndash;34; T@11707&ndash;12577 11/11)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Lifestyle</th><td>Reduce stress, regular exercise, weight management (BMI <b>18.5&ndash;24.9</b>), moderate alcohol, stop smoking</td></tr>
<tr><th scope="row">Skin care</th><td>Moisturizers, oatmeal baths, sunscreen <b>SPF 30+</b> with UVA protection</td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p7-6">
<h3>Scaly Dermatoses · Objective 6: recommend the best treatment</h3>
<div class="gbar"><span>Objective (SD 3)</span><b>Dosing frequency and maximum days; topical vs oral; onset; length of treatment; adverse effects; contraindications and interactions</b><i>SD 4, 7, 9, 16&ndash;18, 35&ndash;45</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> OTC chart <span class="g2-src">(SD 7)</span></h5>
<ul>
<li>Hydrocortisone 1% <b>not for dandruff</b></li>
<li>Sulfur <b>not for psoriasis</b></li>
</ul>
<p class="g2-p">Shampoo schedules: see Reference, &ldquo;Dr. Patel: dandruff and seborrheic dermatitis&rdquo;.</p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p7-shampoo">Reference: shampoo schedules</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Psoriasis: therapy by severity</h5>
<div class="g2-ladder">
<div class="g2-rung g2-s1"><div class="g2-sev">Mild to moderate</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Order of therapy</span><ul>
<li><b>Topical agents first</b></li>
<li>Systemic agent <b>last line</b></li>
<li>Non-drug care for all</li>
</ul><p><span class="g2-src">(SD 35)</span></p></div>
</div></div>
<div class="g2-rung g2-s3"><div class="g2-sev">Moderate to severe</div><div class="g2-cells">
<div class="g2-cell"><span class="g2-k">Order of therapy</span><ul>
<li><b>Systemic agent</b> (most likely methotrexate) &plusmn; topical</li>
<li>Then a more potent systemic or a biologic</li>
<li>Biologics <b>last line</b></li>
</ul><p><span class="g2-src">(SD 37; T@14941&ndash;15451 11/11)</span></p></div>
</div></div>
</div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p7-sys">Reference: psoriasis systemic agents</button><button type="button" class="chip" data-jump="ref:ref-p7-bio">Reference: biologics</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Topicals <span class="g2-src">(SD 36)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Agent</th><th scope="col">Use</th></tr></thead>
<tbody>
<tr><th scope="row">Corticosteroids</th><td>The most effective, <b>2&ndash;4 times daily</b>, <b>&le; 4 weeks</b></td></tr>
<tr><th scope="row">Calcipotriene</th><td></td></tr>
<tr><th scope="row">Tazarotene, adapalene</th><td>At bedtime</td></tr>
<tr><th scope="row">Anthralin</th><td><b>&le; 2 hours</b> on thick plaques</td></tr>
<tr><th scope="row">Coal tar</th><td>Overnight</td></tr>
<tr><th scope="row">Salicylic acid shampoo</th><td>For the scalp</td></tr>
<tr><th scope="row">Pimecrolimus</th><td>For intertriginous areas</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p7-pso">Reference: psoriasis severity and topicals</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Adult seborrheic dermatitis, first line <span class="g2-tap">Show answer</span></summary><p>Ketoconazole shampoo <span class="g2-src">(T@94640 11/10)</span></p></details>
<details class="g2-self"><summary>Infant scalp <span class="g2-tap">Show answer</span></summary><p>Massage with baby oil <span class="g2-src">(T@95994 11/10)</span></p></details>
<details class="g2-self"><summary>Psoriasis case, OTC agent <span class="g2-tap">Show answer</span></summary><p>Topical corticosteroids <span class="g2-src">(T@35288 11/11)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p7-7">
<h3>Scaly Dermatoses · Objective 7: follow-up</h3>
<div class="gbar"><span>Objective (SD 3)</span><b>Provide follow-up recommendations</b><i>SD 16, 38&ndash;39, 48, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Seborrheic dermatitis</h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Seborrheic dermatitis: refer when worse or lasting longer than</span><span class="g2-tile-num">7 days</span><span class="g2-src">(SD 16)</span></div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Psoriasis</h5>
<div class="g2-two">
<div>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Psoriasis: contact the patient in</span><span class="g2-tile-num">1&ndash;2 weeks</span><span class="g2-src">(SD 48; T@31466, T@36225 11/11)</span></div>
</div>
<p class="g2-p">SD 51 reads &ldquo;a week after self-treatment begins&rdquo;.</p>
</div>
<div>
<table class="g2-table">
<caption>Expected response <span class="g2-src">(SD 38&ndash;39)</span></caption>
<thead><tr><th scope="col">Drug</th><th scope="col">Response</th></tr></thead>
<tbody>
<tr><th scope="row">Methotrexate</th><td><b>3&ndash;6 weeks</b></td></tr>
<tr><th scope="row">Apremilast</th><td>By <b>week 4</b></td></tr>
<tr><th scope="row">Acitretin</th><td>Maximum at <b>3&ndash;6 months</b></td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Biologics <span class="g2-src">(SD 40&ndash;41)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">TB</th><td>TB screening before and during, PPD every year</td></tr>
<tr><th scope="row">Labs</th><td>CBC and LFTs for TNF-&alpha; inhibitors</td></tr>
</tbody>
</table>
</div>
</section>

<h2 class="gdeck" id="gdeck-p8o">Outdoor Exposure Therapeutics (Dr. Patel, 11/12; Exam 2)</h2>
<p class="sub">OE = Patel_Outdoor-Exposures-Student.pdf, slide = PDF page; T@ = place in the 11/12 transcript; PollEv = her polls of 11/12. Her seven objectives (OE 3), one section each.</p>
<div class="gask"><b>How she asks (11/12)</b><ul><li>&ldquo;4 to 5 questions per lecture hour is how we calculate it out&rdquo; (T@1239 11/12). &ldquo;Multiple choice, select all and then fill in the blank for my portion. Fill in the blank is calculations&rdquo; (T@96227 11/12).</li><li>Adult fingertip units: &ldquo;It&rsquo;s come back 3 times now, so make sure you practice calculations with this only adult conversion chart&rdquo; (OE 5; T@1737 11/12).</li><li>&ldquo;Pay attention to the age of the patient. Pay attention to certain key facts like we practice [in] Poll Everywhere&rdquo; (T@45397 11/12); &ldquo;make note of the certain duration of time&rdquo; (T@20438 11/12).</li><li>Not asked: repellent ingredients (T@11557 11/12); types of mosquito (T@13776 11/12); doses for the flea-borne diseases (T@15070 11/12); the antivenin protocol on OE 59 (T@42049 11/12).</li></ul></div>

<section class="gobj" id="gobj-p8o-1">
<h3>Outdoor Exposures · Objective 1: which exposure is it?</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Determine if the patient has an insect bite, sting, plant dermatitis, lice, scabies, envenomated snake bite or rabies exposure by typical signs and symptoms and patient history</b><i>OE 8, 10, 20, 27&ndash;28, 42, 50, 52, 58, 62</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Signs and history by exposure</h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Exposure</th><th scope="col">Signs and history</th></tr></thead>
<tbody>
<tr><th scope="row">Plant dermatitis</th><td>Itching, then erythema, then vesicles and papules; small blisters in a line; rash <b>2&ndash;48 hours</b> after contact with poison ivy, oak or sumac, lasting <b>1&ndash;3 weeks</b> <span class="g2-src">(OE 8, 10)</span></td></tr>
<tr><th scope="row">Insect bite</th><td>Mosquitoes, fleas, bedbugs, ticks, chiggers; <b>nonvenomous</b>; mild pruritus, erythema, papules <span class="g2-src">(OE 20)</span></td></tr>
<tr><th scope="row">Insect sting</th><td>Bees, wasps, yellow jackets, hornets, fire ants; <b>venomous</b>; pain, pruritus, irritation <span class="g2-src">(OE 20)</span></td></tr>
<tr><th scope="row">Vector-borne disease</th><td>Fever, headache, myalgias, rash <b>2&ndash;14 days</b> after a tick bite; murine typhus: rash from the trunk to the arms and legs <b>5&ndash;6 days</b> after the first symptoms <span class="g2-src">(OE 27&ndash;28)</span></td></tr>
<tr><th scope="row">Head lice</th><td>Itching, scratch marks, live moving lice, nits within <b>4 mm</b> of the scalp; shared personal items <span class="g2-src">(OE 42, 48)</span></td></tr>
<tr><th scope="row">Scabies</th><td>Inflammation and itching on fingers, wrists, buttocks, armpits, skin folds; prolonged physical contact <span class="g2-src">(OE 50)</span></td></tr>
<tr><th scope="row">Spider</th><td><b>Brown recluse:</b> fever, blood in urine, rash, joint pain within <b>48 hours</b>, necrosis. <b>Black widow:</b> abdominal pain like appendicitis, muscle pain, sweating, swollen eyelids <span class="g2-src">(OE 52)</span></td></tr>
<tr><th scope="row">Pit viper</th><td>Graded minimal, moderate or severe by local, systemic and coagulation signs <span class="g2-src">(OE 58)</span></td></tr>
<tr><th scope="row">Rabies exposure</th><td>A bite (raccoons, bats, foxes, skunks, cats, dogs), or saliva on a scratch, open wound or mucous membrane <span class="g2-src">(OE 62)</span></td></tr>
</tbody>
</table>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Pay attention to what insects fall under the bites versus the stings&rdquo; <span class="g2-src">(T@10123 11/12)</span></p>
<p class="g2-said"><span class="g2-k">Said in class</span>Pit viper grades: &ldquo;local, systemic and coagulation, minimum, moderate, and severe&rdquo; <span class="g2-src">(T@41933 11/12)</span></p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-bites">Reference: bites and stings</button><button type="button" class="chip" data-jump="ref:ref-p8-venom">Reference: spiders, snakes, rabies</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8o-2">
<h3>Outdoor Exposures · Objective 2: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>OE 12, 16, 31, 36, 40, 44, 53, 56, 62</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Plant dermatitis, refer <span class="g2-src">(OE 16)</span></h5>
<ul>
<li>No improvement after <b>7 days</b></li>
<li>Worse</li>
<li>A large area of the face or swollen eyelids</li>
<li>Genitalia</li>
<li>Secondary infection</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Bites, refer <span class="g2-src">(OE 31, 40)</span></h5>
<ul>
<li>Symptoms after <b>7 days</b> of treatment or worse during it</li>
<li>Fever, joint pain, lymph node enlargement, neurologic symptoms</li>
<li>A suspected vector-borne disease</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Stings, emergency care <span class="g2-src">(OE 36)</span></h5>
<ul>
<li>A severe reaction history</li>
<li>Hives, dizziness, nausea or vomiting, difficulty breathing at any time after the sting</li>
</ul>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-bites">Reference: bites and stings</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Under 2 years <span class="g2-src">(OE 12, 25, 39)</span></h5>
<p class="g2-p">No hydrocortisone, local anesthetic or counterirritant.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Lice, not self-care <span class="g2-src">(OE 44)</span></h5>
<div class="g2-two">
<div>
<ul>
<li>No live lice seen</li>
<li>Allergy to chrysanthemums, ragweed or an ingredient</li>
<li>Secondary skin infection</li>
<li>Eyelids or eyebrows</li>
<li>Pregnancy or breast-feeding</li>
<li>Active tumors</li>
</ul>
</div>
<div>
<p class="g2-sub">Age</p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Pyrethrins: not self-care under</span><span class="g2-tile-num">2 years</span></div>
<div class="g2-tile"><span class="g2-tile-label">Permethrin: not self-care under</span><span class="g2-tile-num">2 months</span></div>
</div>
</div>
</div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-lice">Reference: lice and scabies</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">6.</span> Never self-care <span class="g2-src">(OE 53, 56, 62)</span></h5>
<ul>
<li>Venomous spider bite</li>
<li>Snake bite (emergency room)</li>
<li>Rabies exposure (referral for prophylaxis)</li>
</ul>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>A hunter with symptoms after a tick exposure <span class="g2-tap">Show answer</span></summary><p>Immediate medical referral (not a cold and flu product, not watching for 3&ndash;5 days) <span class="g2-src">(T@21518 11/12)</span></p></details>
<details class="g2-self"><summary>Wasp or bee sting with hives and swelling <span class="g2-tap">Show answer</span></summary><p>Immediate referral to the emergency room <span class="g2-src">(T@23898 11/12)</span></p></details>
<details class="g2-self"><summary>When is OTC lice treatment not appropriate <span class="g2-tap">Show answer</span></summary><p>&ldquo;Pay attention to the age category&rdquo; <span class="g2-src">(T@33447 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8o-3">
<h3>Outdoor Exposures · Objective 3: treatment goals</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Apply treatment goals to recommendations</b><i>OE 11, 23, 35, 42, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Plant dermatitis <span class="g2-src">(OE 11)</span></h5>
<ul>
<li>Treat the inflammation</li>
<li>Relieve itching and excessive scratching</li>
<li>Relieve the debris from oozing, crusting and scaling</li>
<li>Minimize medication adverse effects</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Insect bites <span class="g2-src">(OE 23)</span></h5>
<ul>
<li>Relieve symptoms</li>
<li>Prevent secondary bacterial infections</li>
<li>Minimize medication adverse effects</li>
<li>Identify and eradicate transmissible diseases</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Stings <span class="g2-src">(OE 35)</span></h5>
<ul>
<li>Relieve itching and pain</li>
<li>Minimize medication adverse effects</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Lice <span class="g2-src">(OE 42)</span></h5>
<ul>
<li>Kill adult and nymph lice</li>
<li>Remove eggs and nits</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Scabies <span class="g2-src">(OE 51)</span></h5>
<ul>
<li>Kill the mites and eggs</li>
<li>Reduce symptoms</li>
<li>Minimize medication adverse effects</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8o-4">
<h3>Outdoor Exposures · Objective 4: non-drug therapy</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Recommend appropriate non-drug therapy</b><i>OE 9, 14, 21, 24, 35, 38, 43</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Plant <span class="g2-src">(OE 9, 11, 14)</span></h5>
<div class="g2-two">
<div>
<ul>
<li>Protective clothing and gloves</li>
<li>After exposure remove urushiol as soon as possible, large volumes of water, then soap and water including under the nails</li>
<li>Cool soaks</li>
<li>Colloidal oatmeal bath <b>15&ndash;20 minutes twice daily</b></li>
</ul>
</div>
<div>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Urushiol enters the skin within</span><span class="g2-tile-num">10 minutes</span><span class="g2-src">(OE 8)</span></div>
</div>
</div>
</div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-plant">Reference: plant dermatitis</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Bites</h5>
<div class="g2-two">
<div>
<p class="g2-sub">Bites and tick <span class="g2-src">(OE 24)</span></p>
<ul>
<li>Ice pack promptly</li>
<li>No scratching, nails trimmed</li>
<li>No rough clothing over the bite</li>
<li><b>Tick:</b> tweezers at the head, pull gently, clean with rubbing alcohol, keep the tick in a plastic bag</li>
</ul>
</div>
<div>
<p class="g2-sub">Prevention <span class="g2-src">(OE 21)</span></p>
<ul>
<li>Repellent</li>
<li>Covered skin</li>
<li>Pant legs cuffed into socks</li>
<li>No standing water</li>
</ul>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Stings <span class="g2-src">(OE 35, 38)</span></h5>
<ul>
<li>Remove the stinger and venom sac without squeezing</li>
<li>Soap and water</li>
<li>Ice or a cold pack</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Lice <span class="g2-src">(OE 43)</span></h5>
<ul>
<li>FDA-approved nit comb</li>
<li>No shared combs, brushes, towels, hats</li>
<li>Clothing, bedding, brushes and combs washed in hot water</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8o-5">
<h3>Outdoor Exposures · Objective 5: recommend the best treatment</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Dosing frequency and max days of use; length of treatment; onset; adverse effects; contraindications and interactions</b><i>OE 5, 12&ndash;15, 25, 27&ndash;30, 39, 45, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Topical OTC chart <span class="g2-src">(OE 12&ndash;13)</span></h5>
<p class="g2-p">The class, the condition and the comment for each <span class="g2-src">(T@6763 11/12)</span>.</p>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Diphenhydramine cream</th><td>Not on plant dermatitis, sunburn, chicken pox or broken skin</td></tr>
<tr><th scope="row">The &ldquo;caines&rdquo;</th><td>Not under occlusion or on broken skin; methemoglobinemia</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-otc">Reference: topical OTC chart</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Plant dermatitis <span class="g2-src">(OE 12&ndash;15)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Presentation</th><th scope="col">Treatment</th></tr></thead>
<tbody>
<tr><th scope="row">Itch</th><td>An oral antihistamine</td></tr>
<tr><th scope="row">Dry lesions</th><td>Hydrocortisone, an anesthetic or a counterirritant</td></tr>
<tr><th scope="row">Weeping lesions</th><td>An astringent (aluminum acetate)</td></tr>
</tbody>
</table>
<p class="g2-p"><b>No</b> topical antihistamine or topical antibiotic.</p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-plant">Reference: plant dermatitis</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Bites and stings <span class="g2-src">(OE 25, 39)</span></h5>
<p class="g2-p">Protectant, hydrocortisone, anesthetic, counterirritant or oral antihistamine.</p>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Anesthetics and counterirritants: how often</span><span class="g2-tile-num">3&ndash;4 times daily</span></div>
<div class="g2-tile"><span class="g2-tile-label">Anesthetics and counterirritants: not longer than</span><span class="g2-tile-num">7 days</span></div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Antibiotic by disease <span class="g2-src">(OE 27&ndash;30)</span></h5>
<div class="g2-two">
<table class="g2-table">
<thead><tr><th scope="col">Disease</th><th scope="col">Antibiotic</th></tr></thead>
<tbody>
<tr><th scope="row">Murine typhus</th><td>Doxycycline</td></tr>
<tr><th scope="row">Lyme prophylaxis within <b>72 hours</b> of detaching the tick</th><td>Doxycycline <b>200 mg once</b></td></tr>
<tr><th scope="row">Rickettsial fevers</th><td>Doxycycline</td></tr>
<tr><th scope="row">STARI</th><td>No antibiotic</td></tr>
</tbody>
</table>
<table class="g2-table">
<caption>Erythema migrans</caption>
<thead><tr><th scope="col">Antibiotic</th><th scope="col" class="g2-n">Days</th></tr></thead>
<tbody>
<tr><td>Doxycycline</td><td class="g2-n">10</td></tr>
<tr><td>Amoxicillin</td><td class="g2-n">14</td></tr>
<tr><td>Cefuroxime axetil</td><td class="g2-n">14</td></tr>
<tr><td>Azithromycin (second line)</td><td class="g2-n">7</td></tr>
</tbody>
</table>
</div>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-vector">Reference: antibiotic by disease</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Lice <span class="g2-src">(OE 45)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Product</th><th scope="col" class="g2-n">Age</th></tr></thead>
<tbody>
<tr><td>Pyrethrins and malathion</td><td class="g2-n">over 2 years</td></tr>
<tr><td>Permethrin and dimethicone</td><td class="g2-n">over 2 months</td></tr>
<tr><td>Ivermectin, benzyl alcohol, spinosad</td><td class="g2-n">over 6 months</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-lice">Reference: lice and scabies</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">6.</span> Scabies <span class="g2-src">(OE 51)</span></h5>
<p class="g2-p">A list of options with no first, second or third line <span class="g2-src">(T@35653 11/12)</span>.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">7.</span> Quantity <span class="g2-src">(OE 5)</span></h5>
<p class="g2-formula"><span class="g2-k">Formula</span>Grams = fingertip units &times; 0.5 g &times; applications a day &times; days</p>
<p class="g2-p">Rounded up to the tube size.</p>
<details class="g2-self"><summary>Her poll, hydrocortisone 1% to both feet twice daily for 3 days <span class="g2-tap">Show answer</span></summary><p><b>15 grams</b> <span class="g2-src">(T@1904 11/12)</span></p></details>
<div class="g2-btns"><button type="button" class="g2-primary" onclick="show('ftu')">Practice fingertip-unit calculations</button><button type="button" class="chip" data-jump="ref:ref-p5-ftu">Reference: fingertip units</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Poison ivy itch <span class="g2-tap">Show answer</span></summary><p>Diphenhydramine by mouth (&ldquo;any oral antihistamine&rdquo;, T@9933 11/12); not the aluminum acetate compress, not diphenhydramine 2% cream.</p></details>
<details class="g2-self"><summary>Poison ivy, to reduce weeping <span class="g2-tap">Show answer</span></summary><p>Aluminum acetate <span class="g2-src">(T@9484 11/12)</span></p></details>
<details class="g2-self"><summary>Bedbug itch, neomycin allergy <span class="g2-tap">Show answer</span></summary><p>Oral diphenhydramine; not witch hazel, not Neosporin <span class="g2-src">(T@19887 11/12)</span></p></details>
<details class="g2-self"><summary>Head lice, 10 years old <span class="g2-tap">Show answer</span></summary><p>Permethrin; not malathion, not lindane <span class="g2-src">(T@33250 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8o-6">
<h3>Outdoor Exposures · Objective 6: monitoring and follow-up</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Provide monitoring and follow-up recommendations</b><i>OE 13, 16, 31, 36, 39, 47, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Self-care limit <span class="g2-src">(OE 13, 16, 31, 36, 39)</span></h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">The self-care limit for plant dermatitis, bites, stings and topical antibiotics is</span><span class="g2-tile-num">Seven days</span></div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Lice <span class="g2-src">(OE 47)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Repeat</th><td>Repeat in <b>7 to 10 days</b> if lice or nits are seen</td></tr>
<tr><th scope="row">Follow up</th><td>Follow up with the caregiver in <b>a week</b></td></tr>
<tr><th scope="row">Refer</th><td>Live lice after <b>2 rounds one week apart</b>, refer for a prescription product</td></tr>
</tbody>
</table>
<p class="g2-p">OE 42 prints &ldquo;in 7 days&rdquo;; see Reference.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Scabies <span class="g2-src">(OE 51)</span></h5>
<p class="g2-p">Itch can last <b>4 weeks</b> after treatment; an oral antihistamine <span class="g2-src">(T@36103 11/12)</span>.</p>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Maximum treatment duration for self-care <span class="g2-tap">Show answer</span></summary><p>Seven days (not three, ten or fourteen) <span class="g2-src">(T@20142 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8o-7">
<h3>Outdoor Exposures · Objective 7: actions after an outdoor exposure</h3>
<div class="gbar"><span>Objective (OE 3)</span><b>Counsel a patient on the actions needed after an &ldquo;outdoor exposure&rdquo;</b><i>OE 9, 24, 35, 47, 53, 56, 62&ndash;63, 65</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Lice product <span class="g2-src">(OE 45, 47)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col" class="g2-n">Step</th><th scope="col">Lice product</th></tr></thead>
<tbody>
<tr><td class="g2-n"><span class="g2-num">1</span></td><td>No conditioner first</td></tr>
<tr><td class="g2-n"><span class="g2-num">2</span></td><td>Enough to wet the dry hair and scalp</td></tr>
<tr><td class="g2-n"><span class="g2-num">3</span></td><td>A full <b>10 minutes</b></td></tr>
<tr><td class="g2-n"><span class="g2-num">4</span></td><td>Rinse</td></tr>
<tr><td class="g2-n"><span class="g2-num">5</span></td><td>Nit comb in sections</td></tr>
<tr><td class="g2-n"><span class="g2-num">6</span></td><td>No re-washing for <b>1&ndash;2 days</b></td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-lice">Reference: lice and scabies</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Spider bite <span class="g2-src">(OE 53)</span></h5>
<ul>
<li>Soap and water</li>
<li>Cold pack</li>
<li>Elevate the limb</li>
<li>Acetaminophen</li>
<li>Emergency room</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Snake bite <span class="g2-src">(OE 56)</span></h5>
<ul>
<li>Calm and still</li>
<li>A photo, no capture</li>
<li>Remove jewelry and tight clothing</li>
<li>Soap and water</li>
<li><b>Immobilize</b>, even with or slightly lower than the heart</li>
<li>Call poison control, <b>1-800-222-1222</b>, and transport</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Biggest thing to remember, immobilize&rdquo; <span class="g2-src">(T@39310 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Rabies <span class="g2-src">(OE 62&ndash;63)</span></h5>
<p class="g2-p">Wash with soap and water at once; prophylaxis as soon as possible, &ldquo;urgency, not emergency&rdquo; <span class="g2-src">(T@44130 11/12)</span>.</p>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Patient</th><th scope="col">Prophylaxis</th><th scope="col">Vaccine days</th></tr></thead>
<tbody>
<tr><th scope="row">Not previously vaccinated</th><td>Immune globulin plus vaccine</td><td><span class="g2-lab">Vaccine</span>on days <b>0, 3, 7, 14</b></td></tr>
<tr><th scope="row">Previously vaccinated</th><td>No immune globulin; vaccine</td><td><span class="g2-lab">Vaccine</span>on days <b>0 and 3</b></td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-venom">Reference: spiders, snakes, rabies</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Counseling points for the lice patient and his mother (open response) <span class="g2-tap">Show answer</span></summary><p>Her answer: dry hair, 10 minutes, rinse, nit comb, repeat in 7 to 10 days <span class="g2-src">(T@33250&ndash;34351 11/12)</span></p></details>
</div>
</section>

<h2 class="gdeck" id="gdeck-p8s">Sun Exposure Therapeutics (Dr. Patel, 11/12; Exam 2)</h2>
<p class="sub">SE = Patel_Sun-Exposure-Student.pdf, slide = PDF page; T@ = place in the 11/12 transcript; PollEv = her polls of 11/12. Her seven objectives (SE 3&ndash;4), one section each. Dr. Smith&rsquo;s Exam 1 sun lecture is a separate deck with its own guide above.</p>
<div class="gask"><b>How she asks (11/12)</b><ul><li>&ldquo;Learning objectives very similar to all my lecture slides, so please review it. This is how I create my questions&rdquo; (T@46619 11/12).</li><li>&ldquo;For exam purposes, broad spectrum SPF greater than or equal to 15&rdquo; (T@53466 11/12); &ldquo;So hint, broad-spectrum SPF greater than or equal to 15 ... Know how much to apply. Know how often to apply&rdquo; (T@66751 11/12).</li><li>&ldquo;For her questions, pay attention to what she&rsquo;s focused on. For my questions, recommendation in terms of treatment ... if I ask you a question that&rsquo;s specific to an age, like I&rsquo;ll make it obvious&rdquo; (T@56238&ndash;56572 11/12).</li><li>Reference only: UVA against UVB detail, left to Dr. Smith&rsquo;s and Dr. Sikazwe&rsquo;s slides (T@47346 11/12); the anti-aging approaches table on SE 41 (T@70385 11/12); plant extracts on SE 51 (T@75069 11/12).</li></ul></div>

<section class="gobj" id="gobj-p8s-1">
<h3>Sun Exposure · Objective 1: the self-care interview</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>Perform the components of the SCHOLAR-MAC/QuEST and the Pharmacist&rsquo;s Patient Care Process in the self-care interview for dermatologic conditions</b><i>SE 8&ndash;11, 19</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> History for sun protection <span class="g2-src">(SE 19)</span></h5>
<ul>
<li>Allergies</li>
<li>Skin sensitivities or disorders</li>
<li>Current medications and complementary products</li>
<li>Excluded from sunscreens</li>
<li>Photosensitizing agents</li>
<li>A previous adverse reaction to a sunscreen</li>
<li>Exposure and use pattern</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Photosensitizing drugs she named <span class="g2-src">(SE 10; T@49890&ndash;50187 11/12)</span></h5>
<ul>
<li>Doxycycline and the tetracyclines</li>
<li>Ibuprofen</li>
<li>Combined oral contraceptives</li>
<li>Retinoids</li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Highlight the ones that we&rsquo;ve talked about to treat our derm conditions&rdquo; <span class="g2-src">(T@50187 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Highest risk <span class="g2-src">(SE 8&ndash;9)</span></h5>
<ul>
<li>Fitzpatrick types I and II</li>
<li>Blonde, red or light brown hair</li>
<li>A blistering sunburn</li>
<li>Tanning beds</li>
<li>A family member with melanoma</li>
<li>Immunosuppressive medications</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8s-2">
<h3>Sun Exposure · Objective 2: name the condition</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>Determine the dermatologic condition based on the patient&rsquo;s signs and symptoms and history</b><i>SE 24, 28, 39&ndash;40</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunburn <span class="g2-src">(SE 24)</span></h5>
<div class="g2-tiles g2-wide">
<div class="g2-tile"><span class="g2-tile-label">After exposure, sunburn symptoms start at about</span><span class="g2-tile-num">4 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Sunburn erythema peaks at around</span><span class="g2-tile-num">24 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Sunburn may last up to</span><span class="g2-tile-num">5 days</span></div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Suspicious lesion, ABCDE <span class="g2-src">(SE 28)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">A</th><td>Asymmetry</td></tr>
<tr><th scope="row">B</th><td>Border irregular</td></tr>
<tr><th scope="row">C</th><td>Color uneven</td></tr>
<tr><th scope="row">D</th><td>Diameter, most larger than <b>6 millimeters</b></td></tr>
<tr><th scope="row">E</th><td>Evolving over weeks or months</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Photoaging and chronologic aging <span class="g2-src">(SE 40)</span></h5>
<div class="g2-two">
<div>
<p class="g2-sub">Photoaging</p>
<ul>
<li>Coarse wrinkles</li>
<li>Leathery skin</li>
<li>Lentigines</li>
<li>Yellow cobblestone appearance</li>
<li>Telangiectasis</li>
</ul>
</div>
<div>
<p class="g2-sub">Chronologic aging</p>
<ul>
<li>Thin skin</li>
<li>Fine wrinkles</li>
<li>Xerosis</li>
<li>Laxity</li>
</ul>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Glogau types <span class="g2-src">(SE 39)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Type</th><th scope="col">Wrinkles</th><th scope="col">Age</th></tr></thead>
<tbody>
<tr><th scope="row">I</th><td>Mild, no wrinkles</td><td><span class="g2-lab">Age</span><b>20&ndash;30 years</b> <span class="g2-src">(T@68961 11/12)</span></td></tr>
<tr><th scope="row">II</th><td>Wrinkles in motion</td><td><span class="g2-lab">Age</span><b>30&ndash;40</b></td></tr>
<tr><th scope="row">III</th><td>Wrinkles at rest</td><td><span class="g2-lab">Age</span><b>50 or older</b></td></tr>
<tr><th scope="row">IV</th><td>Only wrinkles</td><td><span class="g2-lab">Age</span><b>60 or older</b></td></tr>
</tbody>
</table>
</div>
</section>

<section class="gobj" id="gobj-p8s-3">
<h3>Sun Exposure · Objective 3: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>SE 13, 30, 37, 46, 48</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunburn, not self-care <span class="g2-src">(SE 30)</span></h5>
<ul>
<li>Large areas of blistering</li>
<li>Fever</li>
<li>Extreme pain</li>
<li>Headache or confusion</li>
<li>Lightheadedness or vision changes</li>
<li>Severe swelling</li>
<li>Signs of infection</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Excluded from sunscreen <span class="g2-src">(SE 13)</span></h5>
<ul>
<li>Under <b>6 months</b> of age</li>
<li>Allergy to all sunscreen ingredients</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> ABCDE rule <span class="g2-src">(SE 37)</span></h5>
<p class="g2-p">A lesion that meets the ABCDE rule is seen by a health care provider.</p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Hydroquinone and chemical peels</h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Hydroquinone</th><td>When prescribed by a licensed provider <span class="g2-src">(SE 48)</span></td></tr>
<tr><th scope="row">Chemical peels</th><td><p class="g2-said"><span class="g2-k">Said in class</span>Not self-applied OTC <span class="g2-src">(T@72287 11/12)</span></p></td></tr>
</tbody>
</table>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Can she use the product on her four-month-old <span class="g2-tap">Show answer</span></summary><p>The infant wears protective clothing and sunlight is restricted (not applying it twice daily before exposure; not waiting until over 7 or over 8 months of age) <span class="g2-src">(T@66129&ndash;66269 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8s-4">
<h3>Sun Exposure · Objective 4: treatment goals</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>List treatment goals</b><i>SE 13, 29, 42</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunburn <span class="g2-src">(SE 29)</span></h5>
<ul>
<li>Hydration</li>
<li>Relieve pain</li>
<li>Provide physical protection</li>
<li>Reduce the chances of infection or scarring</li>
<li>Minimize medication adverse effects</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Sun protection <span class="g2-src">(SE 13)</span></h5>
<ul>
<li>Everyone should wear sunscreen</li>
<li>UV radiation causes premature skin aging and skin cancers</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Photoaging: no goals slide; prevention <span class="g2-src">(SE 42, 53)</span></h5>
<ul>
<li>Photoaging is preventable and cumulative</li>
<li>Sunscreen, protective clothing, less exposure to air pollution and smoking</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8s-5">
<h3>Sun Exposure · Objective 5: non-drug therapy</h3>
<div class="gbar"><span>Objective (SE 3)</span><b>Recommend appropriate non-drug therapy</b><i>SE 12, 29, 37, 53</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sun safety <span class="g2-src">(SE 12, 37)</span></h5>
<ul>
<li>Limit sun from <b>10 am to 4 pm</b></li>
<li>Check the UV index, a cloudy day is not protective</li>
<li>Wide-brimmed hat (<b>4 inches</b>)</li>
<li>Tight-weave clothing</li>
<li>Sunglasses with UV protection</li>
<li>Shade</li>
<li>No tanning beds</li>
<li>Snow and sand reflect UV radiation</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Sunburn <span class="g2-src">(SE 29)</span></h5>
<ul>
<li>The first treatment is non-drug</li>
<li>Within the past <b>20 minutes</b>, cool water or cool wet cloths</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Photoaging <span class="g2-src">(SE 53)</span></h5>
<ul>
<li>Face cleaned <b>twice daily</b> with a mild cleanser</li>
<li>Moisturizer <b>twice daily or more often</b>, lips included</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8s-6">
<h3>Sun Exposure · Objective 6: recommend the best treatment</h3>
<div class="gbar"><span>Objective (SE 4)</span><b>Dosing frequency and max days of use; onset; length of treatment; common and rare but serious adverse effects; contraindications and interactions</b><i>SE 14&ndash;18, 21, 31&ndash;33, 43&ndash;49, 54</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunscreen <span class="g2-src">(SE 14&ndash;15)</span></h5>
<div class="g2-two">
<table class="g2-table g2-kv">
<caption>Which product</caption>
<tbody>
<tr><th scope="row">Spectrum</th><td>Broad spectrum</td></tr>
<tr><th scope="row">SPF</th><td>SPF <b>&ge; 15</b>, prefer <b>30+</b></td></tr>
<tr><th scope="row">Water</th><td>Water resistant for swimming or sweating</td></tr>
</tbody>
</table>
<table class="g2-table g2-kv">
<caption>Applying it <span class="g2-src">(SE 21)</span></caption>
<tbody>
<tr><th scope="row">Amount</th><td>About <b>1 ounce</b></td></tr>
<tr><th scope="row">When</th><td><b>15 minutes</b> before</td></tr>
<tr><th scope="row">Reapply</th><td>Reapply every <b>40&ndash;80 minutes</b> and after towel drying</td></tr>
</tbody>
</table>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Sensitive skin or a previous reaction <span class="g2-src">(SE 17)</span></h5>
<p class="g2-p"><b>Zinc oxide or titanium dioxide</b>; avoid PABA.</p>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;What two ingredients are most effective, OK? Zinc oxide, titanium dioxide&rdquo; <span class="g2-src">(T@55166 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Sunburn <span class="g2-src">(SE 31&ndash;33)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Product</th><th scope="col">Use</th></tr></thead>
<tbody>
<tr><th scope="row">Systemic analgesic</th><td>For the first <b>1&ndash;2 days</b></td></tr>
<tr><th scope="row">Skin protectant</th><td>After <b>24 hours</b></td></tr>
<tr><th scope="row">Aloe vera</th><td>On intact skin as an alternative</td></tr>
<tr><th scope="row">First-aid antiseptics and topical anesthetics</th><td><b>Not recommended</b></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Photoaging <span class="g2-src">(SE 43&ndash;49, 54)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Product</th><th scope="col">Use</th></tr></thead>
<tbody>
<tr><th scope="row">Retinoid</th><td>Once at bedtime to dry skin, SPF 30+ by day</td></tr>
<tr><th scope="row">Alpha hydroxy acid</th><td>To dry skin within <b>15 minutes</b> of cleansing</td></tr>
<tr><th scope="row">Hydroquinone 4%</th><td>For hyperpigmentation, <b>three months at most</b>, with sunscreen, not FDA-approved for OTC sale, ochronosis</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-sun">Reference: sunscreen, sunburn, photoaging</button><button type="button" class="chip" data-jump="ref:ref-p8-smithpatel">Reference: Dr. Smith and Dr. Patel compared</button></div>
</div>
<div class="gpoll"><b>Her polls</b>
<details class="g2-self"><summary>Sunburn pain and tenderness <span class="g2-tap">Show answer</span></summary><p>Oral ibuprofen (not topical bacitracin, hydrocortisone or benzocaine) <span class="g2-src">(T@65246 11/12)</span></p></details>
<details class="g2-self"><summary>Daily use to prevent skin cancer <span class="g2-tap">Show answer</span></summary><p>Water-resistant broad-spectrum sunscreen, SPF 50 (not SPF 10; not SPF 30 without broad spectrum; not clothing and hats alone) <span class="g2-src">(T@65588&ndash;65673 11/12)</span></p></details>
<details class="g2-self"><summary>Hyperpigmentation <span class="g2-tap">Show answer</span></summary><p>Hydroquinone (not benzoyl peroxide, sodium hyaluronate or lactic acid) <span class="g2-src">(T@76234 11/12)</span></p></details>
</div>
</section>

<section class="gobj" id="gobj-p8s-7">
<h3>Sun Exposure · Objective 7: follow-up</h3>
<div class="gbar"><span>Objective (SE 4)</span><b>Provide follow-up recommendations</b><i>SE 34, 37, 53</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sunburn <span class="g2-src">(SE 34)</span></h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Sunburn: refer if progressed or worse after</span><span class="g2-tile-num">24&ndash;48 hours</span></div>
<div class="g2-tile"><span class="g2-tile-label">Sunburn: refer if not healed in</span><span class="g2-tile-num">7 days</span></div>
</div>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;7-day policy applies here as well&rdquo; <span class="g2-src">(T@64695 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Sunscreen <span class="g2-src">(SE 37)</span></h5>
<ul>
<li>Stop any product that causes redness, itching, rash or exaggerated sunburn</li>
<li>On a photosensitizing drug, sunscreen and protective clothing every day</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Photoaging <span class="g2-src">(SE 53)</span></h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Photoaging: results take at least</span><span class="g2-tile-num">four weeks</span></div>
</div>
</div>
</section>

<h2 class="gdeck" id="gdeck-p8w">Wound Care Therapeutics (Dr. Patel, 11/12; Exam 2)</h2>
<p class="sub">WC = Patel_Wound-Care.pdf, slide = PDF page; T@ = place in the 11/12 transcript. Her three objectives (WC 2), one section each. No PollEv questions were asked in this lecture.</p>
<div class="gask"><b>How she asks (11/12)</b><ul><li>&ldquo;I&rsquo;m gonna tell you guys exactly what I want you guys to know. There&rsquo;s more information in these slides for your reference&rdquo; (T@77775 11/12); &ldquo;All that I mentioned, key terms, key points is what I want you to know&rdquo; (T@87898 11/12).</li><li>Self-care exclusions: &ldquo;I need you to know them&rdquo; (WC 7; T@79663 11/12). Dressings: &ldquo;Know the advantages, know the disadvantages&rdquo; (WC 8&ndash;9; T@80276 11/12). Burn categories: &ldquo;I want you to know&rdquo; (WC 16; T@83577 11/12).</li></ul></div>

<section class="gobj" id="gobj-p8w-1">
<h3>Wound Care · Objective 1: wound type and severity</h3>
<div class="gbar"><span>Objective (WC 2)</span><b>Identify wound type and severity</b><i>WC 4&ndash;6, 16</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Types <span class="g2-src">(WC 4)</span></h5>
<ul>
<li>Abrasions</li>
<li>Punctures (bites, sharp objects)</li>
<li>Lacerations</li>
<li>Burns (thermal, electrical, chemical, UV radiation)</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Stages by depth <span class="g2-src">(WC 5)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col" class="g2-n">Stage</th><th scope="col">Depth</th></tr></thead>
<tbody>
<tr><td class="g2-n">1</td><td>Unbroken, reddened, non-blanching skin</td></tr>
<tr><td class="g2-n">2</td><td>Blister or partial-thickness loss (epidermis and part of the dermis)</td></tr>
<tr><td class="g2-n">3</td><td>Full-thickness loss</td></tr>
<tr><td class="g2-n">4</td><td>Into subcutaneous tissue, muscle, tendon and bone</td></tr>
</tbody>
</table>
<p class="g2-said"><span class="g2-k">Said in class</span>The higher the stage, the longer the healing <span class="g2-src">(T@79102 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Healing phases <span class="g2-src">(WC 6, 27)</span></h5>
<ul>
<li>Inflammatory</li>
<li>Proliferative</li>
<li>Remodeling</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Burns <span class="g2-src">(WC 16)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Category</th><th scope="col">Adult</th><th scope="col">Child</th><th scope="col">Or</th></tr></thead>
<tbody>
<tr><th scope="row">Minor</th><td><span class="g2-lab">Adult</span><b>Under 15%</b> BSA superficial in an adult</td><td><span class="g2-lab">Child</span><b>Under 10%</b> in a child</td><td></td></tr>
<tr><th scope="row">Moderate</th><td><span class="g2-lab">Adult</span><b>15%&ndash;25%</b> adult</td><td><span class="g2-lab">Child</span><b>10&ndash;20%</b> child</td><td></td></tr>
<tr><th scope="row">Major</th><td><span class="g2-lab">Adult</span><b>Over 25%</b> adult</td><td><span class="g2-lab">Child</span><b>Over 20%</b> child</td><td>Or eyes, ears, face, genitalia, inhalation or electrical burns, poor-risk patients</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-wound">Reference: wound stages and burn categories</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8w-2">
<h3>Wound Care · Objective 2: assess and recommend treatment</h3>
<div class="gbar"><span>Objective (WC 2)</span><b>Assess and recommend treatment for wounds</b><i>WC 3, 8&ndash;11, 14&ndash;15, 18&ndash;20, 25, 27</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Goals <span class="g2-src">(WC 3)</span></h5>
<ul>
<li>Facilitate healing</li>
<li>Reduce scarring</li>
<li>Prevent secondary bacterial skin infection</li>
<li>Refer if necessary</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Order <span class="g2-src">(WC 27; T@82489, T@87422 11/12)</span></h5>
<ol>
<li>Cleanse with clean water or saline</li>
<li>An antibiotic only when indicated</li>
<li>Then a dressing suited to the wound</li>
<li>A moist healing environment</li>
</ol>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> First-aid antibiotics <span class="g2-src">(WC 11, 20)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Drugs</th><td>Bacitracin, neomycin, polymyxin B</td></tr>
<tr><th scope="row">When</th><td>After cleansing and before bandaging</td></tr>
<tr><th scope="row">How often</th><td><b>1 to 3 times a day</b></td></tr>
<tr><th scope="row">Toxicity</th><td>Neomycin systemic toxicity with large areas</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Topical anesthetics <span class="g2-src">(WC 14, 20)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">How often</th><td><b>Up to 4 times daily</b></td></tr>
<tr><th scope="row">Relief</th><td>Relief for <b>15 to 45 minutes</b></td></tr>
<tr><th scope="row">Broken skin</th><td>Small amounts on broken skin</td></tr>
<tr><th scope="row">Benzocaine</th><td>Methemoglobinemia</td></tr>
</tbody>
</table>
<p class="g2-said"><span class="g2-k">Said in class</span>&ldquo;Understand the systemic toxicity of overuse&rdquo; <span class="g2-src">(T@85399 11/12)</span></p>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Antiseptics <span class="g2-src">(WC 15, 19)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Where</th><td>Intact skin at the wound edges</td></tr>
<tr><th scope="row">Inside the wound</th><td>Inside the wound they reduce healing</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">6.</span> Dressings <span class="g2-src">(WC 8&ndash;9)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Dressing</th><th scope="col">Absorption</th><th scope="col">Moist environment</th><th scope="col">Notes</th></tr></thead>
<tbody>
<tr><th scope="row">Gauze</th><td><span class="g2-lab">Absorption</span>Absorbs</td><td><span class="g2-lab">Moist environment</span>Gives no moist environment</td><td><span class="g2-lab">Notes</span>Needs frequent changes</td></tr>
<tr><th scope="row">Hydrocolloid</th><td></td><td><span class="g2-lab">Moist environment</span>Gives a moist environment</td><td><span class="g2-lab">Notes</span>For uninfected wounds only</td></tr>
<tr><th scope="row">Transparent film</th><td><span class="g2-lab">Absorption</span>Film is not absorptive</td><td><span class="g2-lab">Moist environment</span>Gives a moist environment</td><td><span class="g2-lab">Notes</span>For uninfected wounds only</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">7.</span> Minor burn <span class="g2-src">(WC 18&ndash;20)</span></h5>
<ul>
<li>Cool water</li>
<li>Acetaminophen or an NSAID</li>
<li>Skin protectant</li>
<li>Antibiotic or anesthetic as above</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">8.</span> Smoking <span class="g2-src">(WC 25)</span></h5>
<table class="g2-table">
<thead><tr><th scope="col">Smoking</th><th scope="col">Flap necrosis</th></tr></thead>
<tbody>
<tr><td>1 pack per day</td><td><b>3 times</b> the flap necrosis</td></tr>
<tr><td>2 packs</td><td><b>6 times</b></td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-wound">Reference: wound products and burns</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8w-3">
<h3>Wound Care · Objective 3: referral and follow-up</h3>
<div class="gbar"><span>Objective (WC 2)</span><b>Provide appropriate referral and/or follow-up for wound care</b><i>WC 7, 16&ndash;17, 20</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Refer a wound <span class="g2-src">(WC 7)</span></h5>
<ul>
<li>Face, hands, feet, major joints, genitals or perineum</li>
<li>Larger than <b>3 inches</b></li>
<li>Animal or human bite</li>
<li>Chemical, electrical, inhalation or circumferential burn</li>
<li>Deep partial thickness or deeper</li>
<li>Signs of infection</li>
<li>Diabetes or another disorder that complicates management</li>
<li>Foreign matter after irrigation</li>
<li>Chronic wound</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Follow-up <span class="g2-src">(WC 7; T@79459 11/12)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Wound</th><td>Worse or not healed in <b>24&ndash;48 hours</b> and/or <b>7 days</b></td></tr>
<tr><th scope="row">Topical antibiotic</th><td>Topical antibiotic with no improvement within <b>7 days</b>: primary care provider <span class="g2-src">(WC 20)</span></td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Refer a burn <span class="g2-src">(WC 16&ndash;17)</span></h5>
<ul>
<li>Moderate or major</li>
<li><b>2% BSA</b> or more of a moderate to severe burn</li>
<li>Eyes, ears, face, hands, feet or perineum</li>
<li>Chemical (after first aid), electrical or inhalation</li>
<li>Advanced age</li>
<li>Diabetes or multiple medical disorders</li>
<li>Immunocompromised</li>
</ul>
</div>
</section>

<h2 class="gdeck" id="gdeck-p8c">Warts, Corns and Calluses Therapeutics (Dr. Patel, 11/12; Exam 2)</h2>
<p class="sub">WCC = Patel_Warts-Corns-Calluses.pdf, slide = PDF page; T@ = place in the 11/12 transcript. Her seven objectives (WCC 2&ndash;3), one section each. No PollEv questions were asked in this lecture.</p>
<div class="gask"><b>How she asks (11/12)</b><ul><li>&ldquo;Pay attention to how many days you&rsquo;re using the products for. How many times can we repeat it for, OK? When do we refer the patient? Those are big things with this PowerPoint&rdquo; (T@94913 11/12).</li><li>Wart types: &ldquo;Know what is self-treatable&rdquo; (WCC 6; T@90202 11/12).</li></ul></div>

<section class="gobj" id="gobj-p8c-1">
<h3>Warts, Corns and Calluses · Objective 1: the self-care interview</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>Perform the components of the SCHOLAR-MAC/QuEST and the Pharmacist&rsquo;s Patient Care Process in the self-care interview for dermatologic conditions</b><i>WCC 5&ndash;6, 16</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Answers that change the plan</h5>
<ul>
<li>Where the lesion is and what it looks like <span class="g2-src">(WCC 5&ndash;6)</span></li>
<li>Diabetes or poor blood circulation; irritated, infected or reddened skin; a mole or birthmark <span class="g2-src">(WCC 16)</span></li>
</ul>
<p class="g2-said"><span class="g2-k">Said in class</span>Footwear &ldquo;tends to be the most common cause&rdquo; of corns and calluses <span class="g2-src">(T@93710 11/12)</span></p>
</div>
</section>

<section class="gobj" id="gobj-p8c-2">
<h3>Warts, Corns and Calluses · Objective 2: wart, corn or callus?</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>Determine the dermatologic condition based on the patient&rsquo;s signs and symptoms and history</b><i>WCC 4&ndash;6, 13</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Wart, corn or callus</h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Lesion</th><th scope="col">Cause or site</th><th scope="col">Appearance</th><th scope="col">Skin ridges</th><th scope="col">Pain</th><th scope="col">Size</th></tr></thead>
<tbody>
<tr><th scope="row">Wart <span class="g2-src">(WCC 4&ndash;5)</span></th><td><span class="g2-lab">Cause or site</span>HPV, limited to the epidermis; hands HPV-2, -4, -27, -57, feet HPV-1</td><td><span class="g2-lab">Appearance</span>Rough, cauliflower-like</td><td><span class="g2-lab">Skin ridges</span>A plantar wart disrupts the skin ridges</td><td></td><td></td></tr>
<tr><th scope="row">Corn <span class="g2-src">(WCC 5, 13)</span></th><td><span class="g2-lab">Cause or site</span>Over a bony prominence of the foot</td><td><span class="g2-lab">Appearance</span>Small, raised, sharply demarcated, with a central core</td><td></td><td><span class="g2-lab">Pain</span>Painful</td><td><span class="g2-lab">Size</span>A few millimeters to <b>1 cm</b></td></tr>
<tr><th scope="row">Callus <span class="g2-src">(WCC 5, 13)</span></th><td><span class="g2-lab">Cause or site</span>Weight-bearing areas</td><td><span class="g2-lab">Appearance</span>Broad base, diffuse borders, yellowish</td><td><span class="g2-lab">Skin ridges</span>Normal skin ridges</td><td><span class="g2-lab">Pain</span>Usually not painful</td><td><span class="g2-lab">Size</span>A few millimeters to several centimeters</td></tr>
</tbody>
</table>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-wcc">Reference: wart, corn or callus</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8c-3">
<h3>Warts, Corns and Calluses · Objective 3: is the patient a self-care candidate?</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>Determine if the patient is an appropriate self-care candidate</b><i>WCC 6, 16</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Self-treatable warts <span class="g2-src">(WCC 6)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table">
<caption>Self-treatable</caption>
<thead><tr><th scope="col">Wart</th><th scope="col">Site</th></tr></thead>
<tbody>
<tr><th scope="row">Common warts</th><td>Hands</td></tr>
<tr><th scope="row">Plantar warts</th><td>Feet</td></tr>
</tbody>
</table>
</div>
<div>
<table class="g2-table">
<caption>Not self-treatable</caption>
<thead><tr><th scope="col">Wart</th><th scope="col">Site or form</th></tr></thead>
<tbody>
<tr><th scope="row">Flat</th><td>Face</td></tr>
<tr><th scope="row">Mosaic</th><td>Grouped plantar</td></tr>
<tr><th scope="row">Periungual</th><td>Around the nail</td></tr>
<tr><th scope="row">Filiform</th><td>Face</td></tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> No salicylic acid <span class="g2-src">(WCC 16)</span></h5>
<ul>
<li>Diabetes</li>
<li>Poor blood circulation</li>
<li>Irritated, infected or reddened skin</li>
<li>Moles or birthmarks</li>
<li>Face, genital or mucous membrane warts</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8c-4">
<h3>Warts, Corns and Calluses · Objective 4: treatment goals</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>List treatment goals</b><i>WCC 7, 14</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Warts <span class="g2-src">(WCC 7)</span></h5>
<ul>
<li>Eliminate signs and symptoms</li>
<li>Remove the lesion without scarring</li>
<li>Prevent recurrence</li>
<li>Prevent the spread of HPV</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Corns and calluses <span class="g2-src">(WCC 14)</span></h5>
<ul>
<li>Symptomatic relief</li>
<li>Remove the corn or callus</li>
<li>Prevent recurrence by correcting the cause</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8c-5">
<h3>Warts, Corns and Calluses · Objective 5: non-drug therapy</h3>
<div class="gbar"><span>Objective (WCC 2)</span><b>Recommend appropriate non-drug therapy</b><i>WCC 8, 15</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Warts <span class="g2-src">(WCC 8)</span></h5>
<ul>
<li>No cutting, shaving or picking</li>
<li>Hands washed before and after touching the wart</li>
<li>A designated towel</li>
<li>No shared towels, razors, socks or shoes</li>
<li>The wart kept covered</li>
<li>Foot coverings in bathrooms and public spaces</li>
<li>Padding over a plantar wart</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Corns and calluses <span class="g2-src">(WCC 15)</span></h5>
<ul>
<li>Soak <b>5 minutes</b> in warm water daily</li>
<li>Remove dead tissue gently</li>
<li>Circular foam or gel cushioning pads</li>
<li>Well-fitting, non-binding footwear</li>
<li>Orthotics</li>
</ul>
</div>
</section>

<section class="gobj" id="gobj-p8c-6">
<h3>Warts, Corns and Calluses · Objective 6: recommend the best treatment</h3>
<div class="gbar"><span>Objective (WCC 3)</span><b>Dosing frequency and max days of use; onset; length of treatment; amount of topical product and tube size; adverse effects; contraindications and interactions</b><i>WCC 9&ndash;12, 16&ndash;17</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Wart, salicylic acid <span class="g2-src">(WCC 10)</span></h5>
<div class="g2-two">
<div>
<table class="g2-table">
<thead><tr><th scope="col">Product</th><th scope="col">Directions</th></tr></thead>
<tbody>
<tr><th scope="row">40% pad</th><td>Removed after <b>48 hours</b> and repeated every <b>48 hours</b></td></tr>
<tr><th scope="row">17% liquid</th><td><b>1&ndash;2 times a day</b></td></tr>
</tbody>
</table>
</div>
<div>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Wart, salicylic acid, either the pad or the liquid: for up to</span><span class="g2-tile-num">12 weeks</span></div>
</div>
<p class="g2-said"><span class="g2-k">Said in class</span>Salicylic acid &ldquo;is the most effective&rdquo; <span class="g2-src">(T@92731 11/12)</span></p>
</div>
</div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Wart, cryotherapy <span class="g2-src">(WCC 11)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Common wart</th><td><b>About 20 seconds</b> for a common wart</td></tr>
<tr><th scope="row">Plantar wart</th><td><b>About 40 seconds</b> for a plantar wart</td></tr>
<tr><th scope="row">Repeat</th><td>Repeated after <b>2 weeks</b> if needed</td></tr>
<tr><th scope="row">Maximum</th><td>Up to <b>3 treatments</b></td></tr>
<tr><th scope="row">Use</th><td>Warts only</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Corn or callus, salicylic acid <span class="g2-src">(WCC 17)</span></h5>
<table class="g2-table g2-stack">
<thead><tr><th scope="col">Product</th><th scope="col">Directions</th><th scope="col">Length of use</th></tr></thead>
<tbody>
<tr><th scope="row">17%</th><td><span class="g2-lab">Directions</span>No more than <b>twice daily</b></td><td><span class="g2-lab">Length of use</span>For up to <b>14 days</b></td></tr>
<tr><th scope="row">40% plaster</th><td><span class="g2-lab">Directions</span>Removed within <b>48 hours</b>, reapplied every <b>48 hours</b></td><td><span class="g2-lab">Length of use</span>No longer than <b>14 days</b> (7 applications)</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Before each <span class="g2-src">(WCC 10, 17)</span></h5>
<ul>
<li>Wash, soak <b>5 minutes</b> in warm water, dry</li>
<li>Keep the product off healthy skin</li>
</ul>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">5.</span> Amount and tube size</h5>
<p class="g2-p">Objective 6.4 names the amount and tube size of a topical product; this deck has no worked calculation. The adult fingertip-unit chart is in Reference.</p>
<div class="g2-btns"><button type="button" class="chip" data-jump="ref:ref-p8-wcc">Reference: salicylic acid and cryotherapy directions</button><button type="button" class="chip" data-jump="ref:ref-p5-ftu">Reference: fingertip units</button></div>
</div>
</section>

<section class="gobj" id="gobj-p8c-7">
<h3>Warts, Corns and Calluses · Objective 7: follow-up</h3>
<div class="gbar"><span>Objective (WCC 3)</span><b>Provide follow-up recommendations</b><i>WCC 4, 10&ndash;11, 17</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Corn or callus <span class="g2-src">(WCC 17; T@94630 11/12)</span></h5>
<table class="g2-table g2-kv">
<tbody>
<tr><th scope="row">Medical attention</th><td>Medical attention if redness or irritation occurs, or if it is not removed after <b>14 days</b> of treatment</td></tr>
<tr><th scope="row">Time to resolve</th><td>It may take several days to months to resolve</td></tr>
</tbody>
</table>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Wart <span class="g2-src">(WCC 10&ndash;11)</span></h5>
<div class="g2-tiles">
<div class="g2-tile"><span class="g2-tile-label">Wart: the product limit of salicylic acid is</span><span class="g2-tile-num">12 weeks</span></div>
<div class="g2-tile"><span class="g2-tile-label">Wart: the product limit of cryotherapy is</span><span class="g2-tile-num">3 treatments</span></div>
</div>
<p class="g2-p">WCC 4 prints &ldquo;Recurrent or recalcitrant warts should be referred&rdquo;; she said &ldquo;if you see reoccurrence of the wart, that&rsquo;s when we need treatment&rdquo; (T@88519 11/12); see Reference.</p>
</div>
</section>
`;

/* ==========================================================================
   TOPICS TAB, GROUPED BY SLIDE DECK (Louis, 2026-11-08)
   ==========================================================================
   The core lists TOPICS in array order with no grouping. TOPIC_DECKS
   (q1_topics.js) names each deck's topics in slide order. Once every question
   file has pushed its topics, this orders TOPICS by deck, marks each topic
   with its deck, and on the Topics tab puts each deck's topic cards in a
   folder: a heading button (deck name, file, dates, question count, a chevron)
   that opens and closes them. Folders start closed (Louis, 2026-11-08: "a
   collapse folder that way it reduces the scrolling need"); the ones a reader
   opens are remembered on this device only, under `<NS>:deckOpen` (a list of
   deck ids), never in the progress or history keys. A filter that leaves a
   deck no topic leaves no folder. An optional topic (outside the exam) stays
   outside the folders, after them, with its own "Optional" label in view.
   If something opens a topic card inside a closed folder (the core's "Learn a
   topic" fallback, a test), the folder opens with it. Topic ids, sub ids and
   questions are unchanged, and progress is kept by question id, so nothing
   stored changes. */
(function topicsByDeck(){
  if (typeof TOPICS === 'undefined' || typeof TOPIC_DECKS === 'undefined') return;
  const rank = {};
  TOPIC_DECKS.forEach((d, di) => d.topics.forEach((id, ti) => { rank[id] = [di, ti]; }));
  const sorted = TOPICS.map((t, i) => ({t, k: rank[t.id] || [TOPIC_DECKS.length, i]}))
    .sort((a, b) => a.k[0] - b.k[0] || a.k[1] - b.k[1]).map(x => x.t);
  sorted.forEach((t, i) => {
    TOPICS[i] = t;
    const d = TOPIC_DECKS.find(x => x.topics.includes(t.id));
    if (d) t.deck = d.id;
  });
  if (typeof renderTopics !== 'function' || typeof document === 'undefined') return;

  const KEY = () => { let ns; try { ns = NS; } catch (e) { ns = COURSE.ns; } return ns + ':deckOpen'; };
  const readOpen = () => {
    try { const v = JSON.parse(localStorage.getItem(KEY()) || '[]'); return new Set(Array.isArray(v) ? v : []); }
    catch (e) { return new Set(); }
  };
  const saveOpen = set => { try { localStorage.setItem(KEY(), JSON.stringify([...set])); } catch (e) { /* this device only */ } };
  const CSS = `
.deckfold{margin:14px 0 0}
.deckfold>h3{margin:0;font-size:inherit}
.deckbtn{display:flex;align-items:center;gap:12px;width:100%;min-height:44px;text-align:left;
  background:var(--paper);color:var(--text);border:1px solid var(--line);border-radius:var(--r,10px);padding:10px 14px}
.deckbtn:hover{border-color:var(--accent)}
.deckbtn:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.deckbtn .decktxt{flex:1;min-width:0}
.deckbtn .deckname{display:block;font-size:16px;font-weight:600;line-height:1.3}
.deckbtn .deckmeta{display:block;font-size:13px;color:var(--text-dim);margin-top:2px;overflow-wrap:anywhere}
.deckbtn .deckchev{flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--accent);font-weight:500}
.deckbtn .deckchev i{font-style:normal;display:inline-block;font-size:18px;line-height:1;transition:transform .15s}
.deckbtn[aria-expanded="true"] .deckchev i{transform:rotate(90deg)}
.deckbtn[aria-expanded="true"]{border-color:var(--accent);background:var(--accent-bg)}
.deckbody{padding:8px 0 0 10px;border-left:3px solid var(--accent-bg);margin-left:6px}
.deckbody[hidden]{display:none}
.examfold{margin:16px 0 0}
.examfold>h3{margin:0;font-size:inherit}
.exambtn{border-width:2px}
.exambtn .deckname{font-size:17px;font-weight:700}
.exambody{padding:2px 0 0 6px}
.exambody[hidden]{display:none}
@media (prefers-reduced-motion: reduce){.deckbtn .deckchev i{transition:none}}`;
  const addCss = () => {
    if (document.getElementById('deckcss')) return;
    const s = document.createElement('style'); s.id = 'deckcss'; s.textContent = CSS; document.head.appendChild(s);
  };

  /* Exam folders (Louis, 2026-11-10: "Group the lecture per exam like intro to pharmacology/
     pharmacokinetics where the lecture are closed in an exam 1 folder"). Each deck folder goes
     into the folder of the exam its deck is on (TOPIC_DECKS `exam`); an optional topic stays
     after the folders, its "Optional" label in view (the core's optional_test). The active exam's folder starts open and the others
     closed; a reader's own open or close is kept on this device under `<NS>:examOpen`
     ({exam number: true|false}), never in progress or history. */
  const EKEY = () => KEY().replace(/deckOpen$/, 'examOpen');
  const readEx = () => { try { const v = JSON.parse(localStorage.getItem(EKEY()) || '{}'); return v && typeof v === 'object' ? v : {}; } catch (err) { return {}; } };
  const saveEx = v => { try { localStorage.setItem(EKEY(), JSON.stringify(v)); } catch (err) { /* this device only */ } };
  const activeN = () => { const m = String(COURSE.activeExam || '').match(/(\d+)$/); return m ? +m[1] : null; };
  function groupByExam(el, cards, shown, e) {
    const examOf = t => (TOPIC_DECKS.find(x => x.id === t.deck) || {}).exam;
    const nums = [...new Set(shown.map(examOf).filter(n => n != null))].sort((a, b) => a - b);
    if (nums.length < 1) return;
    const saved = readEx();
    nums.forEach(n => {
      const decks = [...el.querySelectorAll('section.deckfold')].filter(s => (TOPIC_DECKS.find(x => x.id === s.dataset.deck) || {}).exam === n);
      if (!decks.length) return;
      const ex = (COURSE.exams || []).find(x => x.id === 'exam' + n) || {};
      const lec = (COURSE.lectures || []).find(l => l.exam === n && l.module);
      const title = lec ? lec.module.replace(/^(Exam \d+): /, '$1 · ') : 'Exam ' + n;
      const tops = shown.filter(t => examOf(t) === n && !t.optional);
      const q = tops.reduce((s, t) => s + poolFor(t.id, null).length, 0);
      const isOpen = n in saved ? !!saved[n] : n === activeN();
      const sec = document.createElement('section');
      sec.className = 'examfold'; sec.dataset.exam = String(n);
      sec.innerHTML = `<h3><button type="button" class="deckbtn exambtn" id="exambtn-${n}" aria-expanded="${isOpen}" aria-controls="exambody-${n}">` +
        `<span class="decktxt"><span class="deckname">${e(title)}</span>` +
        `<span class="deckmeta">${ex.date ? e(ex.date) + ' · ' : ''}${decks.length} lecture deck${decks.length === 1 ? '' : 's'} · ${q} questions</span></span>` +
        `<span class="deckchev" aria-hidden="true">${isOpen ? 'Close' : 'Open'} <i>›</i></span></button></h3>` +
        `<div class="exambody" id="exambody-${n}" role="region" aria-labelledby="exambtn-${n}"${isOpen ? '' : ' hidden'}></div>`;
      decks[0].before(sec);
      const body = sec.querySelector('.exambody'), btn = sec.querySelector('.exambtn');
      decks.forEach(d => body.appendChild(d));
      const set = (on, keep) => {
        btn.setAttribute('aria-expanded', String(on)); body.hidden = !on;
        btn.querySelector('.deckchev').firstChild.textContent = (on ? 'Close' : 'Open') + ' ';
        if (!keep) return;
        const now = readEx(); now[n] = on; saveEx(now);
      };
      btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true', true));
      // a topic card opened by code in a closed exam folder brings the folder open
      // (the deck folder's listener, inside this one, clears the drawn-open mark)
      body.addEventListener('toggle', ev => {
        const c = ev.target;
        if (!c || !c.matches || !c.matches('details.topic') || c.dataset.drawnOpen) return;
        if (c.open && body.hidden) set(true, false);
      }, true);
    });
  }

  const base = renderTopics;
  renderTopics = function(){
    const r = base.apply(this, arguments);
    try {
      const el = document.getElementById('v-topics');
      if (!el || !el.querySelectorAll || !document.createElement) return r;
      const cards = [...el.querySelectorAll('details.topic')];
      const shown = TOPICS.filter(t => poolFor(t.id, null).length);
      if (cards.length !== shown.length) return r;
      addCss();
      const e = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;'})[c]);
      const open = readOpen();
      const folded = (t, i) => !t.optional && TOPIC_DECKS.some(x => x.id === t.deck) ? i : -1;
      let fold = null;
      shown.forEach((t, i) => {
        if (folded(t, i) < 0) { fold = null; return; }
        if (!fold || fold.deck !== t.deck) {
          const d = TOPIC_DECKS.find(x => x.id === t.deck);
          const mine = shown.filter(x => x.deck === d.id && !x.optional);
          const n = mine.reduce((s, x) => s + poolFor(x.id, null).length, 0);
          const isOpen = open.has(d.id);
          const sec = document.createElement('section');
          sec.className = 'deckfold'; sec.dataset.deck = d.id;
          sec.innerHTML = `<h3><button type="button" class="deckbtn" id="deckbtn-${e(d.id)}" aria-expanded="${isOpen}" aria-controls="deckbody-${e(d.id)}">` +
            `<span class="decktxt"><span class="deckname">${e(d.name)}</span>` +
            `<span class="deckmeta">${e(d.file)} · ${e(d.when)} · ${n} questions</span></span>` +
            `<span class="deckchev" aria-hidden="true">${mine.length} topic${mine.length === 1 ? '' : 's'} <i>›</i></span></button></h3>` +
            `<div class="deckbody" id="deckbody-${e(d.id)}" role="region" aria-labelledby="deckbtn-${e(d.id)}"${isOpen ? '' : ' hidden'}></div>`;
          cards[i].before(sec);
          fold = {deck: t.deck, body: sec.querySelector('.deckbody'), btn: sec.querySelector('.deckbtn')};
          const {body, btn} = fold, id = d.id;
          const set = (on, keep) => {
            btn.setAttribute('aria-expanded', String(on)); body.hidden = !on;
            if (!keep) return;
            const now = readOpen(); if (on) now.add(id); else now.delete(id); saveOpen(now);
          };
          btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true', true));
          // a topic card opened by code inside a closed folder brings its folder open
          // (a card the core drew open fires one toggle of its own as it is drawn; that one is not a reason)
          body.addEventListener('toggle', ev => {
            const c = ev.target;
            if (!c || !c.matches || !c.matches('details.topic')) return;
            if (c.dataset.drawnOpen) { delete c.dataset.drawnOpen; return; }
            if (c.open && body.hidden) set(true, false);
          }, true);
        }
        if (cards[i].open) cards[i].dataset.drawnOpen = '1';
        fold.body.appendChild(cards[i]);
      });
      groupByExam(el, cards, shown, e);
    } catch (err) { /* the list stays as the core drew it */ }
    return r;
  };
})();

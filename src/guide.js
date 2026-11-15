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

<section class="gobj" id="gobj-sk-1">
<h3>Dr. Sikazwe, assigned slides · crisaborole, the JAK inhibitors and Polleve-1</h3>
<div class="gbar"><span>Objective (DPAW 7, 8, 9)</span><b>For crisaborole he says &ldquo;maybe emphasize ADM and chemical basis of drug action&rdquo; (the slide says ADMET) and mechanisms of action are not asked; for the two JAK inhibitors he stresses local action from formulation, the half-lives, the shared CYP 3A4 and the active metabolites; slide 9 is a practice set</b><i>DPAW slide 7, 8, 9</i></div>
<div class="gpt g2-block"><h5>Crisaborole: a soft drug that loses its boron (DPAW slide 7) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Crisaborole is a benzoxaborole: a benzene ring fused to a five-membered ring that contains boron carrying an OH (B-OH), joined through an oxygen to a second benzene ring that carries a nitrile (NC). A soft drug is built to undergo predictable metabolism, so it is inactivated and leaves harmless; a hard drug does not undergo metabolism.</p>
<p class="g2-p"><b>Mechanism and ADMET.</b> PDE4 inhibition raises cAMP and lowers inflammatory cytokines. Log P = 3 (dermis accumulation); half-life 12 h; he adds that once-a-day application is possible <span class="g2-src">(11/03 T 697)</span>. The slide leaves a blank after &ldquo;Hydrolytic deboronation limits systemic exposure to&rdquo;; the recording does not fill it in.</p>
<p class="g2-p"><b>The drawing, step by step.</b> Crisaborole accumulates in skin <span class="g2-src">(11/03 T 699)</span>. The first arrow (?) is loss of the boron by hydrolysis with water in the skin, no enzyme, which gives the benzyl alcohol drawn next (a CH2OH group and a ring OH where the boron ring was). The second arrow (??) converts that alcohol to the benzoic acid, a carboxylic acid, in two enzyme steps. Phase 2 conjugates such as glucuronides can follow <span class="g2-src">(11/03 T 710)</span>.</p>
<p class="g2-p"><b>Chemical basis of drug action (CBDA).</b> In the PDE4 active site the boron coordinates two cations, zinc and magnesium. The slide labels His 238, His 274, Asp 275 and Asp 392 around them (J Med Chem 2021, 64(24)).</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So that now if I were to ask you what is a hard drug, a hard drug doesn't go what? Metabolism.&rdquo; <span class="g2-src">(11/03 T 668-669)</span></li>
<li>&ldquo;crishabo is designed to be a soft drug. What does soft drug mean? It means it has to be, uh, it has to, it's a drug that is designed to undergo predictable metabolism.&rdquo; <span class="g2-src">(11/03 T 664-666)</span> [he said 'crishabo': crisaborole]</li>
<li>&ldquo;That step is not enzymatic. Spontaneous, just in the presence of water in skin, it breaks up&rdquo; <span class="g2-src">(11/03 T 701-702)</span></li>
<li>&ldquo;How many enzymes are involved here? To give you carboxylic acid. How many enzymes? 2.&rdquo; <span class="g2-src">(11/03 T 706-707)</span></li>
<li>&ldquo;So alcohol dehydrogenase, and then what? How they hide dehydrogenase, two enzymes. Not 3, not 4, not sips, 2 enzymes.&rdquo; <span class="g2-src">(11/03 T 708-709)</span> [he said 'How they hide dehydrogenase': aldehyde dehydrogenase]</li>
<li>&ldquo;It sits in there by having this boron group coordinate to two. Cations, right? Magnesium, and what? Zinc. That is the basis.&rdquo; <span class="g2-src">(11/03 T 713-714)</span></li>
<li>&ldquo;Non-enzymatic is spontaneous. No, phosphodiesterase 4 is the target.&rdquo; <span class="g2-src">(11/03 T 727)</span> [answering a student&rsquo;s question: PDE4 is the target enzyme; the deboronation needs no enzyme]</li>
</ul></div>
<p class="g2-p"><span class="g2-k">Not needed</span> &ldquo;Now, am I going to be asking you about mechanisms of action? No.&rdquo; <span class="g2-src">(11/03 T 680-681)</span></p>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS3-001 BS3-002 KX-001 KX-002 KX-005 KX-012 S3-008 S3-009 S3-010 S3-011 S3-012 S3-013 S3-014 S3-015 S3-016 S3-017 S3-018 S3-019 S3-020 S3-024 S3-025 S3-029 S3-048 S3-053 S3-054 S3-056 S3-058 S3-059 S3-061 S3-063 S3-064 S3-065 S3-066 S3-082 S3-083 S3-087 S3-088 S3-095 S3-103 S3H-001 S3H-002 S3H-003 S3H-004 S3H-005 S3H-008 S3H-009 S3H-011 S4H-011 S4H-015 S4H-017 S4H-021" data-qlabel="DPAW slide 7">Practice these (51)</button></div>
</div>
<div class="gpt g2-block"><h5>Ruxolitinib and upadacitinib: two topical JAK inhibitors (DPAW slide 8) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Ruxolitinib and upadacitinib are the two Janus kinase (JAK) inhibitors available topically for eczema. Both act by JAK inhibition, which ends in less cytokine signaling and less inflammation <span class="g2-src">(11/03 T 734-736)</span>. Their chemical classes differ: ruxolitinib is a pyrrolopyrimidine (blue ring system, with a pyrazole, a cyclopentyl group and a nitrile side chain); upadacitinib is an imidazopyrrolopyridine (magenta ring system, with a CF3 side chain). He gave log P as about 2 for both <span class="g2-src">(11/03 T 737)</span>, which would predict passage through skin, but the formulations keep them in the skin.</p>
<table class="g2-table g2-stack">
<caption>ADMET on the slide <span class="g2-src">(DPAW slide 8)</span></caption>
<thead><tr><th scope="col">Drug</th><th scope="col">Half-life</th><th scope="col">Enzymes</th><th scope="col">Note</th></tr></thead>
<tbody>
<tr><th scope="row">Ruxolitinib</th><td><span class="g2-lab">Half-life</span><b>3 h</b></td><td><span class="g2-lab">Enzymes</span>3A4/2C9 substrate</td><td>Some active metabolites</td></tr>
<tr><th scope="row">Upadacitinib</th><td><span class="g2-lab">Half-life</span><b>8&ndash;16 h</b></td><td><span class="g2-lab">Enzymes</span>3A4/2D6 substrate</td><td></td></tr>
</tbody>
</table>
<p class="g2-p"><b>Conflict to read carefully.</b> He said one drug is shorter-lived (multiple applications) and the other longer-lived (fewer applications), and that one has active hydroxylated metabolites and the other has none, without naming which is which <span class="g2-src">(11/03 T 742-744, 752-754)</span>. The slide names them: ruxolitinib 3 h with some active metabolites, upadacitinib 8&ndash;16 h with no metabolite note. An exam written from his lecture would key the slide&rsquo;s pairing.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So if the question was, are these chemicals, are these similar chemical, no, they are not, they are different because they are structurally different&rdquo; <span class="g2-src">(11/03 T 732-733)</span></li>
<li>&ldquo;Pay attention to the fact that these are both R3A4 as the major enzyme isoform for them, right? They are substrates of that.&rdquo; <span class="g2-src">(11/03 T 745-747)</span> [he said 'R3A4': 3A4]</li>
<li>&ldquo;Let me say caution I can't spell caution. Inhibitors And indus of what? Of 3F4. OK? Because those can, can have a say on what? The half-life of the drug.&rdquo; <span class="g2-src">(11/03 T 747-749)</span> [he said 'caution', 'indus' and '3F4': inhibitors and inducers of 3A4]</li>
<li>&ldquo;This one has no active metabolites. This one has at least the hydroxylated metabolites that form the hydroxy group. Some of these hydroxylated metabolites. are active.&rdquo; <span class="g2-src">(11/03 T 752-754)</span></li>
<li>&ldquo;these are formulated. OK, that is a different formulated to. Be sequestered. They sequestered. In the skin.&rdquo; <span class="g2-src">(11/03 T 738-739)</span></li>
<li>&ldquo;And there's some uh aspect to their half-lives. One is shorter lives, the, the other one is longer-lived, OK? So, shorter-lived, multiple applications, right? Longer lives, fewer applications.&rdquo; <span class="g2-src">(11/03 T 742-744)</span></li>
</ul></div>
<p class="g2-p"><span class="g2-k">Not needed</span> &ldquo;I am not going to bother you with trying to remember this, but this is just to distinguish that, yes, this is different from that functional group.&rdquo; <span class="g2-src">(11/03 T 730-732)</span> [he is speaking of the chemical class names of the two drugs]</p>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-003 KX-004 KX-005 S3-003 S3-008 S3-013 S3-016 S3-024 S3-025 S3-026 S3-027 S3-028 S3-029 S3-030 S3-061 S3-063 S3-098 S3H-001 S3H-002 S3H-005 S4-049 S4H-011 S4H-014" data-qlabel="DPAW slide 8">Practice these (23)</button></div>
</div>
<div class="gpt g2-block"><h5>Polleve-1: which crisaborole steps are glucuronidation (DPAW slide 9) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> A PollEv poll: &ldquo;Crisaborole&rsquo;s metabolic scheme indicates that steps ........... involve glucuronidation?&rdquo; with options (A) Steps 1 and 2, (B) Steps 2 and 3, (C) Steps 3 and 4. The scheme has four numbered arrows from crisaborole. Arrow 1 is the hydrolytic deboronation to the benzyl alcohol. Arrow 2 is the alcohol to the carboxylic acid. Arrow 3 attaches a sulfate (SO3) to the benzyl alcohol, a phase 2 step by sulfotransferases. Arrow 4 attaches a glucuronide (Gluc) to it, by UGT, also phase 2. The arrow marked 3,4 leads to a product carrying both SO3 and Gluc.</p>
<p class="g2-p"><b>Two readings.</b> Strictly, on the drawing only arrow 4 and the combined 3,4 arrow add a glucuronide; arrow 3 alone adds the sulfate. He keyed &ldquo;3 and 4&rdquo; <span class="g2-src">(11/03 T 776-777)</span>. Both readings select option C, the only option that contains step 4, so an exam written from the lecture keys Steps 3 and 4.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So this step would be the hydrolytic deboronination, right? This one, right? And then you get step two.&rdquo; <span class="g2-src">(11/03 T 767-768)</span></li>
<li>&ldquo;So, what enzyme would be that phase two enzyme? Selhorans is, right?&rdquo; <span class="g2-src">(11/03 T 772)</span> [he said 'Selhorans': sulfotransferases (SULT)]</li>
<li>&ldquo;when we say these can also form what? Gluronides. So, what enzyme is that? UGT. Remember these things, folks.&rdquo; <span class="g2-src">(11/03 T 773-774)</span></li>
<li>&ldquo;So, if the question was, what steps involve glucuronidation, then you would choose which one.&rdquo; <span class="g2-src">(11/03 T 774-775)</span></li>
<li>&ldquo;3 and 4 steps involve gluchroidation because I've, I've shown you this, right?&rdquo; <span class="g2-src">(11/03 T 776-777)</span> [he said 'gluchroidation': glucuronidation]</li>
</ul></div>
<div class="gpoll"><b>His poll</b>
<details class="g2-self"><summary>Which steps involve glucuronidation? (A) Steps 1 and 2 (B) Steps 2 and 3 (C) Steps 3 and 4 <span class="g2-tap">Show answer</span></summary><p>(C) Steps 3 and 4 <span class="g2-src">(11/03 T 774-777)</span></p></details>
</div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-001 S3-014 S3-016 S3-020 S3-021 S3-022 S3-023 S3-028 S3-102 S3-103 S3H-002 S3H-003" data-qlabel="DPAW slide 9">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-2">
<h3>Dr. Sikazwe, assigned slides · UV terminology and emollients</h3>
<div class="gbar"><span>Objective (DPAW 12, 15)</span><b>He asks you to know what is in UVR (&ldquo;know those limits&rdquo;), and for emollients to see that they are &ldquo;just palliative, what? Care&rdquo; (palliative care, not treatment of the disease)</b><i>DPAW slide 12, 15</i></div>
<div class="gpt g2-block"><h5>Terminology: UV bands, ozone, PUVA, antimetabolite, keratinocytes (DPAW slide 12) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> UVR is ultraviolet radiation. The spectrum bar runs from ultraviolet (UVC, UVB, UVA) through visible to infrared, with wavelength marks at 100, 280, 315, 400 and 700 nm. Each band has a box under it. A skin cross-section beside it shows how far each band travels: UVA goes deepest.</p>
<table class="g2-table g2-stack">
<caption>The three ultraviolet bands <span class="g2-src">(DPAW slide 12; 11/03 T 813-819)</span></caption>
<thead><tr><th scope="col">Band</th><th scope="col">Range on the slide (nm)</th><th scope="col">Range he said (nm)</th><th scope="col">Slide box</th></tr></thead>
<tbody>
<tr><th scope="row">UVC</th><td><span class="g2-lab">Range on the slide (nm)</span>100&ndash;280</td><td><span class="g2-lab">Range he said (nm)</span>100 to 280</td><td>Extremely dangerous; blocked by the ozone layer</td></tr>
<tr><th scope="row">UVB</th><td><span class="g2-lab">Range on the slide (nm)</span>280&ndash;315</td><td><span class="g2-lab">Range he said (nm)</span>280 to 315 or 320</td><td>Skin cancer, cataracts, sunburn</td></tr>
<tr><th scope="row">UVA</th><td><span class="g2-lab">Range on the slide (nm)</span>315&ndash;400</td><td><span class="g2-lab">Range he said (nm)</span>315 or 320 to 400</td><td>Premature aging, wrinkling of the skin, implicated in skin cancer</td></tr>
</tbody>
</table>
<p class="g2-p"><b>Terms on the slide.</b> Ozone blocks 100% of UVC and 90% of UVB, so about 10% of UVB reaches the skin <span class="g2-src">(11/03 T 820-823)</span>. PUVA is psoralen plus ultraviolet A light. An antimetabolite is an enzyme-substrate mimic that inhibits cellular metabolism; he said such molecules mimic natural metabolites and disrupt making DNA and RNA <span class="g2-src">(11/03 T 831-834)</span>. Keratinocytes are epidermal skin cells; in psoriasis they proliferate excessively <span class="g2-src">(11/03 T 843-845)</span>.</p>
<p class="g2-p"><b>Two readings of the limits.</b> He accepts 315 or 320 nm for the UVA start and the UVB end, &ldquo;depending on the literature you pick&rdquo;; the slide&rsquo;s axis marks 315, and slide 16 writes UVB as 280&ndash;320 nm. For visible light the slide&rsquo;s axis ends at 700 nm while he said 400 to 800. An exam from his lecture would key the band order, the 280 and 400 nm limits and the slide&rsquo;s 315; visible light has no single key.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;there are limits on the wavelengths that describe what? What is UVC, what is UVA, what is UVB. OK. So, know those limits.&rdquo; <span class="g2-src">(11/03 T 813-814)</span></li>
<li>&ldquo;So, UVA is going to go up to 400, right? So, but it starts at either, depending on the literature you pick, it will be 315 or 320 nanometers to 400 nanometers.&rdquo; <span class="g2-src">(11/03 T 817-818)</span></li>
<li>&ldquo;And then UVB then becomes what? 280 to either 315 or what? 320 nanometers.&rdquo; <span class="g2-src">(11/03 T 819)</span></li>
<li>&ldquo;The ozone layer, if we don't damage it, right? We're good. It blocks most of that. And it also blocks like 90% of UVB.&rdquo; <span class="g2-src">(11/03 T 820-822)</span></li>
<li>&ldquo;this is UV what? A. This can never be UVB. This can never be UVC because it's where UVA and it's given that range.&rdquo; <span class="g2-src">(11/03 T 828-830)</span></li>
<li>&ldquo;These are simply molecules that mimic. Natural Molecules&rdquo; <span class="g2-src">(11/03 T 832)</span></li>
<li>&ldquo;These are simply skin cells, right? Made out of what? Keratin.&rdquo; <span class="g2-src">(11/03 T 835)</span></li>
<li>&ldquo;And then here, what goes in the furthest. UVA, the deepest, right?&rdquo; <span class="g2-src">(11/03 T 838-839)</span></li>
<li>&ldquo;A question could simply be. Given the UV radiation, when we talked about UV radiation, which one is more skin penetrating? Which one? A.&rdquo; <span class="g2-src">(11/04 T@37498-37634)</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S3-031 S3-032 S3-033 S3-034 S3-035 S3-036 S3-037 S3-038 S3-042 S3-051 S3H-009 S4H-011" data-qlabel="DPAW slide 12">Practice these (12)</button></div>
</div>
<div class="gpt g2-block"><h5>Topical agents: emollients (DPAW slide 15) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Emollients are listed as mostly water emulsions that prevent skin water loss; he also said they can contain oil and water, and some are 100% petrolatum with no water <span class="g2-src">(11/03 T 869, 873)</span>. They fill the gaps between scales and soften them, which reduces dryness and itching, so they do not treat the disease.</p>
<ul>
<li><b>Petrolatum</b> (Vaseline): the most effective emollient on the slide; a linear hydrocarbon chain of more than 25 carbons. The slide shows the yellow jelly.</li>
<li><b>Lanolin</b>: odorous wool grease; a mixture of fatty acid esters. The slide shows sheep because it comes from sheep wool. He said the odor keeps some people from using it <span class="g2-src">(11/03 T 877-879)</span>.</li>
<li><b>Silicone-based</b>: hypoallergenic and non-comedogenic (no comedone formation: no blackheads or whiteheads). Two are drawn.</li>
</ul>
<table class="g2-table g2-stack">
<caption>The two silicones <span class="g2-src">(DPAW slide 15; 11/03 T 885-887)</span></caption>
<thead><tr><th scope="col">Name</th><th scope="col">Structure on the slide</th></tr></thead>
<tbody>
<tr><th scope="row">Dimethicone</th><td>Linear chain of alternating silicon and oxygen, repeated n times, with two plain lines drawn on each silicon (the methyl groups the name dimethicone names)</td></tr>
<tr><th scope="row">Cyclomethicone</th><td>Ring of five Si(CH3)2 units joined through oxygen, labeled a pentamer</td></tr>
</tbody>
</table>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;the key thing is that they prevent the loss of water and soften the scaling.&rdquo; <span class="g2-src">(11/03 T 870)</span></li>
<li>&ldquo;just hydrocarbons, right? About 25, a chain of hydrocarbons, uh, preferably greater than 25 carbons, linear, right?&rdquo; <span class="g2-src">(11/03 T 872-873)</span></li>
<li>&ldquo;And you see them, they look like that, but they are obtained from sheep wool.&rdquo; <span class="g2-src">(11/03 T 881)</span></li>
<li>&ldquo;these come with the advantage that is that they are hypoallergenic. And they don't promote Coon. Formation. So blackhead, whiteheads, right?&rdquo; <span class="g2-src">(11/03 T 882-883)</span> [he said 'Coon. Formation': comedone formation]</li>
<li>&ldquo;you have dimethicone. These are linear. So this is linear silicon. And oxygen chains, silicon and oxygen chains, linear. Then you you can have some that are cyclic. This is where you see cyclomethicone.&rdquo; <span class="g2-src">(11/03 T 885-887)</span></li>
<li>&ldquo;Again, are we treating the disease here? We, we just palliative, what? Care.&rdquo; <span class="g2-src">(11/03 T 889-890)</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S3-009 S3-043 S3-044 S3-045 S3-046 S3-047 S3-049 S3-052 S3H-006" data-qlabel="DPAW slide 15">Practice these (9)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-3">
<h3>Dr. Sikazwe, assigned slides · tars and anthralin</h3>
<div class="gbar"><span>Objective (DPAW 16, 17)</span><b>Tars: he says &ldquo;it&#39;s for you to decipher what is going on&rdquo; (the old-school uses); anthralin: it is lipophilic by its log P, so &ldquo;do not apply too much of that. Because it will go systemic.&rdquo;</b><i>DPAW slide 16, 17</i></div>
<div class="gpt g2-block"><h5>Topical agents: coal, shale and wood tars (DPAW slide 16) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Tars: the mechanism of action is unknown, but they may have antiproliferative activity. The slide separates three tars by whether they sensitize the skin to light (photosensitizing). The only drawing is a photograph of a coal tar solution bottle.</p>
<table class="g2-table g2-stack">
<caption>Three kinds of tar <span class="g2-src">(DPAW slide 16)</span></caption>
<thead><tr><th scope="col">Tar</th><th scope="col">Photosensitizing?</th><th scope="col">On the slide</th></tr></thead>
<tbody>
<tr><th scope="row">Coal tar (refined coal tar)</th><td><span class="g2-lab">Photosensitizing?</span><b>Yes</b></td><td>Mixture of phenols, PAHs and heterocyclic compounds; may be used with UVB (280&ndash;320 nm)</td></tr>
<tr><th scope="row">Shale tars (ichthammol)</th><td><span class="g2-lab">Photosensitizing?</span><b>No</b></td><td>Non-photosensitizer; he said they come from distilling sedimentary rock <span class="g2-src">(11/03 T 903)</span></td></tr>
<tr><th scope="row">Wood tars</th><td><span class="g2-lab">Photosensitizing?</span><b>No</b></td><td>Non-photosensitizing; he said they come from pine, birch and juniper trees <span class="g2-src">(11/03 T 908-909)</span></td></tr>
</tbody>
</table>
<p class="g2-p">PAHs are polycyclic aromatic hydrocarbons. With coal tar the patient applies it and is then exposed to UVB light, and the photosensitizing effect is the downside. He called some of these old treatments that are no longer there, though old-school physicians may still choose them <span class="g2-src">(11/03 T 898-900)</span>. Slide 16 writes UVB as 280&ndash;320 nm while the axis of slide 12 marks 315; he accepted either end (see DPAW slide 12).</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;TAs work through an unclear mechanism. And Some people swear that these have what anti-proliferative activities as well.&rdquo; <span class="g2-src">(11/03 T 890-891)</span> [he said 'TAs': tars]</li>
<li>&ldquo;You have phenols, polycyclic aromatic hydrocarbons, and other heterocyclic compounds in there.&rdquo; <span class="g2-src">(11/03 T 895-896)</span></li>
<li>&ldquo;this also can be used in phototherapy. The patient lathers on this, then they're exposed to light, and here they are saying UVB.&rdquo; <span class="g2-src">(11/03 T 897-898)</span></li>
<li>&ldquo;The downside is that these are, this is the quotas are photosynthesizing. They sensitize the skin to the sun or to light, OK?&rdquo; <span class="g2-src">(11/03 T 901-902)</span> [he said 'the quotas' and 'photosynthesizing': coal tar, photosensitizing]</li>
<li>&ldquo;So, this also is a useful advantage non- photosensitizer.&rdquo; <span class="g2-src">(11/03 T 907-908)</span> [shale tars]</li>
<li>&ldquo;And also advantage, non-photosensitizing.&rdquo; <span class="g2-src">(11/03 T 910)</span> [wood tars]</li>
<li>&ldquo;So given the choice you have that that that. You want to choose which one is going to benefit the patient most. The one that gives them less headache, right?&rdquo; <span class="g2-src">(11/03 T 910-912)</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-006 S3-033 S3-037 S3-041 S3-044 S3-045 S3-046 S3-048 S3-049 S3-050 S3-051 S3-052 S3-060 S3H-007 S4H-003" data-qlabel="DPAW slide 16">Practice these (15)</button></div>
</div>
<div class="gpt g2-block"><h5>Topical agents: anthralin (dithranol) (DPAW slide 17) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Anthralin (dithranol) is a hydroxyanthrone from 1915 <span class="g2-src">(11/03 T 918-920)</span>: a tricyclic ring system with a ketone on the middle ring and an OH on each outer ring, log P = 4. Lassar&rsquo;s paste combines anthralin, ZnO, paraffin and salicylic acid; he said it is probably no longer used but may return <span class="g2-src">(11/03 T 921-922)</span>. Dendrimer formulations (nano-sized anthralin) improve pharmacokinetic properties and duration of action or half-life, because of itching and stability problems <span class="g2-src">(11/03 T 923-926)</span>.</p>
<p class="g2-sub">CBDA: how the radicals form and what they do <span class="g2-src">(DPAW slide 17)</span></p>
<ol>
<li>Anthralin is lipophilic (log P 4), so too much applied goes systemic.</li>
<li>Anthralin auto-oxidizes with no enzyme <span class="g2-src">(11/03 T 939-941)</span>. On the drawing, the arrow marked e leads to the anthranyl radical (red dot on the middle ring) together with the superoxide anion, O2 with a dot and minus sign.</li>
<li>These two radicals disrupt keratinocyte mitochondria, which stops cell respiration and kills cells, so the keratinocyte proliferation is normalized <span class="g2-src">(11/03 T 929-933)</span>.</li>
</ol>
<p class="g2-p"><b>The stain is not the treatment.</b> The slide note says anthralin autoxidizes to radicals, ROS and inactive compounds and stains fabrics permanently. The radicals polymerize into anthralin brown and then carbon black, the large polycyclic structure drawn.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;the key thing is that this is going to be a lipophilic molecule based on its what? Log p value. So watch out, do not apply too much of that. Because it will go systemic.&rdquo; <span class="g2-src">(11/03 T 927-928)</span></li>
<li>&ldquo;it will go and Disrupt Uh, kerato keratinocyte. Mitochondria.&rdquo; <span class="g2-src">(11/03 T 929-930)</span> [he said 'kerato keratinocyte': keratinocyte]</li>
<li>&ldquo;So you have two answers in this, right? Mechanism CBDA, chemical basis of drug action. It generates two radicals. One is superoxide anion&rdquo; <span class="g2-src">(11/03 T 934-936)</span> [he said 'CBDA': chemical basis of drug action]</li>
<li>&ldquo;So we can say anthralin undergoes spontaneous. Oxidation or auto-oxidation to generate what? These cytotoxic radicals. Does that involve enzymes? No.&rdquo; <span class="g2-src">(11/03 T 939-941)</span></li>
<li>&ldquo;So, Anthralin brown and carbon black. They are not part of the treatment.&rdquo; <span class="g2-src">(11/03 T 949)</span></li>
<li>&ldquo;Are those part of the treatment? No, that's part of the stain. Nothing to do with treatment.&rdquo; <span class="g2-src">(11/03 T 951-952)</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-006 S3-006 S3-008 S3-041 S3-043 S3-045 S3-048 S3-053 S3-054 S3-055 S3-056 S3-057 S3-058 S3-059 S3-060 S3-061 S3-064 S3-065 S3-066 S3-067 S3-082 S3-095 S3-097 S3-098 S3-103 S3H-008 S3H-009 S3H-013 S4H-003 S4H-019" data-qlabel="DPAW slide 17">Practice these (30)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-4">
<h3>Dr. Sikazwe, assigned slides · Psoralens and the autoxidation check</h3>
<div class="gbar"><span>Objective (DPAW 18, 19)</span><b>Psoralen is the one molecule he mentions whose chemical basis of drug action includes DNA intercalation; the slide 19 poll checks it against anthralin's autoxidation</b><i>DPAW slide 18, 19</i></div>
<div class="gpt g2-block"><h5>Psoralens: a furanocoumarin that crosslinks DNA under UVA light (DPAW slide 18) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> The example is 8-methoxypsoralen (8-MOP, logP = 2), a furanocoumarin: a furan ring fused to a coumarin ring. Psoralen plus UVA light (315&ndash;400 nm) is PUVA. Metabolism (ADMET on the slide): several CYPs handle it, and it partially inhibits CYP3A4. Chemical basis of drug action (CBDA): antiproliferative; it binds covalently to DNA pyrimidine bases and lowers DNA synthesis.</p>
<p>The drawing reads left to right. 8-MOP sits beside two thymine (pyrimidine) bases on DNA strands, with its pyrone ring toward one and its furan ring toward the other. The arrow labeled hv is UVA light. In the product, a cyclobutane ring joins the pyrone side to one thymine and another cyclobutane ring joins the furan side to the other thymine, so the drug links the two strands. The boxed 3D picture is labeled "Intercalated DNA = Disrupted DNA synthesis": the drug lies between the base pairs.</p>
<p>The order he taught: the drug is taken by mouth or applied, it inserts between DNA base pairs (intercalation), light is then given, and the light promotes the crosslinking. The crosslinked DNA is distorted and can no longer be normal DNA, so new cell production falls.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;So, chemically, this can be grouped as a furanocoumarin, because this has a furan ring and a coumarin ring.&rdquo; <span class='g2-src'>(11/03 T 958-960)</span></p>
<p>&ldquo;in terms of uh uh what you should know in terms of metabolism, that it partially inhibits 3F4. That's something to take home, right? It partially inhibits 3 or 4.&rdquo; [he said '3F4' and '3 or 4': CYP3A4] <span class='g2-src'>(11/03 T 961-963)</span></p>
<p>&ldquo;it coherently binds DNA. It goes and inserts in between DNA base pairs. And crosslinks or bridges those DNA based pairs. That process is also called intercalation.&rdquo; [he said 'coherently': covalently] <span class='g2-src'>(11/03 T 963-965)</span></p>
<p>&ldquo;Exposure to that light promotes the what? The cross-linking.&rdquo; <span class='g2-src'>(11/03 T 969-970)</span></p>
<p>&ldquo;So I would have a check question like this. I know this is not working right, but a true or false? The chemical basis of drug action, both anthralin and soarin involves autooxidation. True or false?&rdquo; [he said 'soarin': psoralen] <span class='g2-src'>(11/03 T 977-979)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS3-003 KX-006 KX-012 S3-003 S3-006 S3-008 S3-031 S3-032 S3-037 S3-043 S3-048 S3-049 S3-051 S3-053 S3-054 S3-056 S3-058 S3-059 S3-060 S3-061 S3-062 S3-063 S3-064 S3-065 S3-066 S3-067 S3-068 S3-069 S3-082 S3-087 S3-088 S3H-004 S3H-008 S3H-009 S3H-011" data-qlabel="DPAW slide 18">Practice these (35)</button></div>
</div>
<div class="gpt g2-block"><h5>Poll: does autoxidation explain both anthralin and 8-MOP? (DPAW slide 19) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> A poll slide with no teaching text: "TRUE/FALSE: The chemical basis of drug action for both Anthralin and 8-methoxypsoralen involves autooxidation." Both answer bars (True, False) are empty.</p>
<p>Autoxidation is oxidation that happens on its own, with no enzyme: anthralin is an unstable molecule that, once applied, spontaneously generates cytotoxic radicals (11/03 T 938-941). Psoralen works differently: its chemical basis of drug action is intercalation and crosslinking of DNA, with UVA light (DPAW slide 18). The slides therefore tie autoxidation to anthralin only.</p>
<details class="g2-self"><summary>Check question: both anthralin and 8-MOP act by autoxidation, true or false? <span class="g2-tap">Show answer</span></summary><p><b>False</b> if keyed from the lecture content: autoxidation belongs to anthralin (11/03 T 938-941), and 8-MOP intercalates and crosslinks DNA (DPAW slide 18).</p></details>
<div class="g2-note"><span class="g2-k">Unresolved</span><p>His full answer is not in the recording. After asking "which one has auto oxidation?" the transcript shows only "An ing." and then cuts to the next heading ("Glucocorticoid medicinal chemistry") (11/03 T 979-982). "An ing." is probably the start of "anthralin", which matches the answer above; that answer is reasoned from slides 17 and 18 and his lecture, not quoted from him.</p></div>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;So I would have a check question like this. I know this is not working right, but a true or false? The chemical basis of drug action, both anthralin and soarin involves autooxidation. True or false?&rdquo; [he said 'soarin': psoralen] <span class='g2-src'>(11/03 T 977-979)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-006 S3-064 S3-067 S3H-008 S3H-009" data-qlabel="DPAW slide 19">Practice these (5)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-5">
<h3>Dr. Sikazwe, assigned slides · Glucocorticoid structure, numbering and receptor binding</h3>
<div class="gbar"><span>Objective (DPAW 20&ndash;23)</span><b>Know what a steroid looks like, how its carbons are numbered and which way each group faces, so the SAR can be described; the glucocorticoid is held in its receptor by hydrogen bonding</b><i>DPAW slide 20, 21, 22, 23</i></div>
<div class="gpt g2-block"><h5>Steroid skeleton, alpha and beta, and the four SAR requirements (DPAW slide 20) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> Glucocorticoids are corticosteroids, which he shortens to steroids. He names three things he wants known here: structure, stereochemistry and numbering <span class="g2-src">(11/03 T 987-990)</span>. The structure is tetracyclic: four fused rings labeled A, B, C and D. Rings A, B and C are six-membered and ring D is five-membered. He said a skeleton stacked this way is probably a steroid <span class="g2-src">(11/03 T 992-994)</span>.</p>
<p>Stereochemistry on a steroid: a hashed bond points away from the viewer and is alpha; a bold wedge points toward the viewer and is beta. The slide also shows the skeleton numbered 1 to 27 (ring atoms 1&ndash;17, methyls 18 and 19, side chain 20&ndash;27); numbering and orientation are separate ideas.</p>
<table class="g2-table">
<caption>SAR: anti-inflammatory activity is increased by these four features <span class="g2-src">(DPAW slide 20)</span></caption>
<thead><tr><th scope="col">Position</th><th scope="col">Required group</th><th scope="col">Orientation</th></tr></thead>
<tbody>
<tr><th scope="row">C1&ndash;C2</th><td>Alkene (the slide writes "C1-C2 db")</td><td>Not stated on the slide</td></tr>
<tr><th scope="row">C6</th><td>Halogen, X</td><td>Alpha (hashed)</td></tr>
<tr><th scope="row">C9</th><td>Halogen, X</td><td>Alpha (hashed)</td></tr>
<tr><th scope="row">C11</th><td>Hydroxyl, OH</td><td>Beta (wedge)</td></tr>
</tbody>
</table>
<p>These four are the minimal stereochemistry and substituents for anti-inflammatory activity. He asked the class to know exactly these four.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;I would like for you to know the, what steroids look like, right? And you'll see it's a four-membered ring, you know, rings are attached, are stacked a certain way. I want you to know that because that's important.&rdquo; [he said 'four-membered ring': a four-ring (tetracyclic) system, which he states correctly at T 990-993] <span class='g2-src'>(11/03 T 628-630)</span></p>
<p>&ldquo;So, in terms of structure, these are tetracyclic. OK? These are tetracyclic structures. 4 rings fused together, but the stacking of these rings is in a certain way.&rdquo; <span class='g2-src'>(11/03 T 990-991)</span></p>
<p>&ldquo;bonds that you see that are hushed, that are pointing away from you, they are called alpha-facing, alpha- face. Bonds&rdquo; [he said 'hushed': hashed] <span class='g2-src'>(11/03 T 997-999)</span></p>
<p>&ldquo;The SAR of uh serial of uh glu corticoid is a little bit complex, but I'm limiting you to 4 things. I want you to know 12341234 items.&rdquo; [he said 'serial': the transcription is unclear; he is counting 1, 2, 3, 4] <span class='g2-src'>(11/03 T 1020-1021)</span></p>
<p>&ldquo;If I give you that structure, what are the quintessential elements that need to be there for this glucocorticoid to be active?&rdquo; <span class='g2-src'>(11/03 T 1021-1022)</span></p>
<p>&ldquo;we need to know that there is a, a double bond present between carbon one. And 2&rdquo; <span class='g2-src'>(11/03 T 1023-1024)</span></p>
<p>&ldquo;OK, so, so that this 6th, uh, atom needs to have a halogen on it, and the orientation of that halogen needs to be what? Alpha.&rdquo; <span class='g2-src'>(11/03 T 1067-1069)</span></p>
<p>&ldquo;And then the 9th position is this, this 9 atom. Needs to also have a halogen. The orientation of that halogen needs to be what? alpha as well.&rdquo; <span class='g2-src'>(11/03 T 1069-1070)</span></p>
<p>&ldquo;And then the 11th carbon. Needs to have a hydroxy group on it. And this orientation needs to be what? Better.&rdquo; [he said 'Better': beta] <span class='g2-src'>(11/03 T 1070-1072)</span></p>
<p>&ldquo;The two are not related. Orientation is different from numbering.&rdquo; <span class='g2-src'>(11/03 T 1054)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-007 S3-009 S3-024 S3-053 S3-068 S3-069 S3-070 S3-071 S3-072 S3-073 S3-074 S3-075 S3-076 S3-077 S3-078 S3-079 S3-080 S3-083 S3-084 S3-090 S3-100 S3-101 S3H-010 S3H-011" data-qlabel="DPAW slide 20">Practice these (24)</button></div>
</div>
<div class="gpt g2-block"><h5>Numbering the steroid carbons, and describing a substituent (DPAW slide 21) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> "Remember steroid C- atom numbering": a steroid skeleton with the four rings, two angular methyl groups and a branched side chain at C17, and no numbers on it. The numbered version of the same skeleton is on slide 20.</p>
<p>Numbering is positional: carbon 1 is carbon 1 whatever its orientation. Start at C1 in ring A and loop through rings A and B to C10, the ring A/B junction carbon. C11 is the starting point of a second path through rings C and D that ends at C17. The two angular methyls are then 18 (on C13) and 19 (on C10), and the side chain continues from C17 as 20, 21 and onward.</p>
<p>To describe a substituent, give its carbon number and its orientation, for example "C-15, alpha-Cl" for a chlorine on that carbon drawn hashed. He framed the question as: with a chlorine placed on the skeleton, describe it.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;Always this is going to be one. So if you know where your 1 is, you know where your 11 is, and your 17, you're good to go. OK, but practice that.&rdquo; <span class='g2-src'>(11/03 T 1098-1099)</span></p>
<p>&ldquo;and I put chlorine here and I say, describe that. You need to tell me that is what?&rdquo; <span class='g2-src'>(11/03 T 1076-1077)</span></p></div>
<div class="g2-note"><span class="g2-k">Unresolved: C-15 or C-16</span><p>Reading 1: counting back from C17 ("This is 17. 16, so this is 15"), he calls his example chlorine "a C-15. Alpha CL" (11/03 T 1077). Reading 2: after he says that putting the group the other way makes it beta, a student asks "Why is it?" and he answers "Carbon, carbon 16" (11/03 T 1075-1084), which leaves open whether his example sat on C-15 or C-16. An exam written from his lecture would key the stated answer, C-15 with alpha for a hashed chlorine; the sources do not settle the carbon number, so no question in the bank asks about the chlorine position.</p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S3-072 S3-073 S3-074 S3-075" data-qlabel="DPAW slide 21">Practice these (4)</button></div>
</div>
<div class="gpt g2-block"><h5>Second build of the numbering slide: the loops and the methyls (DPAW slide 22)</h5>
<p><b>On the slide.</b> Slide 22 repeats the title and number of slide 21 (printed 21): the same "Remember steroid C- atom numbering" skeleton shown a second time. The teaching he gave with it follows the path of the numbers.</p>
<p>From C1, the path covers rings A and B and stops at C10. C11 is a new starting point, and its path snakes up to C17. The methyl nearest C17 is 18 and the next is 19, which he describes as skipping from one methyl to the other. The side chain then gives 20 and 21, then 22, 23 and onward. Orientation (alpha or beta) is separate: any ring carbon can face either way.</p>
<p>Steroid numbering is not identical across courses. He said the endocrine instructor may number steroids slightly differently (11/03 T 1126-1128); for his material this numbering is the one used.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;For my material now, this is the numbering that we're going to go with, OK?&rdquo; <span class='g2-src'>(11/03 T 1128-1129)</span></p>
<p>&ldquo;What I'm saying is for now, let's contend with this numbering.&rdquo; <span class='g2-src'>(11/03 T 1125-1126)</span></p>
<p>&ldquo;This snakes, the numbering snakes all the way up to what? 17. Right?&rdquo; <span class='g2-src'>(11/03 T 1087-1088)</span></p>
<p>&ldquo;Think of stereochemistry. Any of those atoms could have stereo chemistry, either this way or facing you. OK. The numbering is, is positional.&rdquo; <span class='g2-src'>(11/03 T 1039-1041)</span></p></div>
</div>
<div class="gpt g2-block"><h5>Glucocorticoid chemical basis of drug action: hydrogen bonding (DPAW slide 23) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> The title line reads "Glucocorticoid: CBDA: .......- bonding" (the blank is hydrogen), with the reference Foye Chapter 28, pages 1112&ndash;13. The drawing shows a glucocorticoid sitting in the glucocorticoid receptor, captioned "Key glucocorticoid receptor-ligand binding residues." Six dashed lines join the drug's oxygen-bearing groups to amino acids lining the pocket: Asn 564, Arg 611, Gln 570, Gln 642 and Thr 739.</p>
<p>Reading the picture: the C3 ketone takes two hydrogen bonds (Arg 611 and Gln 570); the 11-hydroxyl and the C21 hydroxyl each bond to Asn 564; the C20 ketone bonds to Thr 739; the 17-hydroxyl bonds to Gln 642. Every dashed line is a hydrogen bond, so the answer to "what type of interaction" is hydrogen bonding and the count is six.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;So, their chemical basis of drug action. is going to be due to hydrogen bonding interactions. How many of them? 1234566 hydrogen bonding. Interactions.&rdquo; [he is counting to six] <span class='g2-src'>(11/03 T 1133-1135)</span></p>
<p>&ldquo;So, the question might be just counting the number of hydrogen bonds, or do you see any uh non-hydrogen bonds involved here? These are all hydrogen bonds.&rdquo; <span class='g2-src'>(11/03 T 1137-1139)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS3-004 S3-056 S3-064 S3-066 S3-074 S3-082 S3-083 S3-084 S3-100 S3-101 S3H-008 S3H-011" data-qlabel="DPAW slide 23">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-6">
<h3>Dr. Sikazwe, assigned slides · Glucocorticoid potency rankings</h3>
<div class="gbar"><span>Objective (DPAW 25)</span><b>Potency rankings of topical glucocorticoids are driven by structure, the delivery vehicle and the concentration</b><i>DPAW slide 25</i></div>
<div class="gpt g2-block"><h5>Potency classes and what drives them (DPAW slide 25) <span class="g2-star" title="Likely on the exam" aria-label="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> "Glucocorticoid potency rankings for topical agents is based on: 1) Structure; 2) Delivery vehicle; 3) Concentration (% in formulation)." Four classes come with one example each.</p>
<table class="g2-table">
<caption>Potency class and slide example <span class="g2-src">(DPAW slide 25)</span></caption>
<thead><tr><th scope="col">Class</th><th scope="col">Example on the slide</th></tr></thead>
<tbody>
<tr><th scope="row">Super-potent</th><td>Clobetasol propionate 0.05% cream and ointment (the slide spells it "Clobesterol Proprionate")</td></tr>
<tr><th scope="row">Potent</th><td>Betamethasone dipropionate 0.05% cream and ointment</td></tr>
<tr><th scope="row">Medium potency</th><td>Betamethasone valerate 0.1% cream</td></tr>
<tr><th scope="row">Low potency</th><td>Hydrocortisone acetate 0.5% and 1% creams and ointments</td></tr>
</tbody>
</table>
<p>The drawing shows hydrocortisone, a dashed arrow, and clobetasol propionate, with the changes in color. Compared with hydrocortisone, clobetasol propionate has a C1=C2 alkene, a 9alpha-fluorine, a 16-methyl and a 17-propionate ester. Hydrocortisone is the natural product and the reference molecule for glucocorticoid activity; the others are derivatives of it <span class="g2-src">(11/03 T 1140-1145)</span>. He said structural changes can raise or lower lipophilicity (fat preference) or change how the molecule binds in the receptor, and so change potency <span class="g2-src">(11/03 T 1145-1148)</span>. The drawing is a structural change, not metabolism.</p>
<p>Delivery vehicle: many of these agents are formulated in propylene glycol, which he said lets the molecule penetrate the skin and reach the receptor site <span class="g2-src">(11/03 T 1160-1163)</span>. Concentration is the third basis; he called it the easiest to determine because creams carry the numbers <span class="g2-src">(11/03 T 1163-1164)</span>.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;So lipophilicity can be manipulated, for instance, lipohilicity. Can be manipulated structurally.&rdquo; <span class='g2-src'>(11/03 T 1157-1158)</span></p>
<p>&ldquo;A lot of these agents you see them co-formulated or delivered in a vehicle called propylene. Glycol. OK? So, that also can enhance the potency of these molecules&rdquo; <span class='g2-src'>(11/03 T 1160-1162)</span></p>
<p>&ldquo;So, just know that these potency rankings are going to be driven by the structure. The delivery vehicle, as well as what? The amount, the percentage that is there in the molecule.&rdquo; <span class='g2-src'>(11/03 T 1173-1175)</span></p>
<p>&ldquo;So this is not metabolism, it's just an example of a structural manipulation that then changes the potency of the drug.&rdquo; <span class='g2-src'>(11/03 T 1177-1179)</span></p></div>
<div class="g2-note"><span class="g2-k">Not needed</span><p>The structures of the hydrocortisone derivatives (betamethasone, desonide, clobetasol, fluticasone, triamcinolone, shown on the unassigned slide 24): &ldquo;It's now for you to memorize this. No, it's just know that parent drug is that, then you can have derivatives of that.&rdquo; <span class="g2-src">(11/03 T 1152-1154)</span></p></div>
<div class="g2-note"><span class="g2-k">Unresolved: does a smaller percentage mean more potent?</span><p>Reading 1 (his words): "The tinier the percentage, right, means the more potent it is, right?" (11/03 T 1165). He then said that a cream labeled 0.05 means &ldquo;it's highly potent&rdquo; (11/03 T 1168-1170). Reading 2 (the slide): concentration is one of three bases, and the examples do not follow percentage alone: clobetasol propionate and betamethasone dipropionate are both 0.05% but in different classes (structure), and the slide does not say what happens when one drug's percentage changes. An exam written from his lecture would key his spoken rule when comparing the percentages of the slide examples (0.05% above 0.1% above 0.5% and 1%), and would not key a rule from percentage alone when the structures differ.</p></div>
<div class="g2-said"><span class='g2-k'>He said</span>
<p>&ldquo;The tinier the percentage, right, means the more potent it is, right?&rdquo; <span class='g2-src'>(11/03 T 1165)</span></p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-007 S3-007 S3-080 S3-085 S3-088 S3-089 S3-090 S3-091 S3-092 S3-093 S3-094 S3H-012" data-qlabel="DPAW slide 25">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-7">
<h3>Dr. Sikazwe, assigned slides · hydrocortisone ADME and vitamin D analogs</h3>
<div class="gbar"><span>Objective (DPAW 26, 27)</span><b>Hydrocortisone, &ldquo;if you don't understand anything else that is going on&rdquo;: it goes back and forth between cortisone and hydrocortisone. Vitamin D analogs: a take-home reading, worth 2 points</b><i>DPAW slide 26, 27</i></div>
<div class="gpt"><h5>Hydrocortisone ADME (DPAW slide 26) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Hydrocortisone is a glucocorticoid applied to the skin. The slide gives its ADME (absorption, distribution, metabolism, excretion) in four lines. Less than 15% is absorbed through normal skin, compared with 95% by mouth (oral bioavailability is the fraction of a dose that reaches the blood). The half-life is 1&ndash;2 h and the slide blanks the reason, which is metabolism. The duration of action is 8&ndash;12 h and the blank is protein binding. Cortisone and urocortisol are the forms found in urine.</p>
<p>He explained that hydrocortisone has a log P of about 1.5, so it is not very lipophilic and does not penetrate skin well. He said it lingers in the skin because it is bound there (protein binding), which he gave as the reason for the long duration of action, while metabolism gives the short half-life.</p>
<p>The drawing shows three conversions. Hydrocortisone and cortisone are joined by a double-headed arrow, with the enzyme 11beta-hydroxysteroid dehydrogenase (11beta-HSD). Hydrocortisone also goes to 5beta-dihydrocortisol (5beta-reductase), and that goes to urocortisol (3alpha-HSD). Cortisone, 5beta-dihydrocortisol and urocortisol are marked inactive. The 11 in 11beta is carbon 11 of the steroid ring system.</p>
<p><b>Two readings, stated both ways.</b> (1) His words and the double arrow: the drug &ldquo;ping pongs&rdquo;, so hydrocortisone is inactivated to cortisone and cortisone can come back to active hydrocortisone. (2) The slide also calls cortisone the inactive metabolite found in urine, and he said he would not separate the two isozymes (types 1 and 2), only &ldquo;this family&rdquo;. The recording stops mid-sentence at 11/03 T 1196, before he says why the back-conversion matters. An exam written from his lecture would key the enzyme (11beta-HSD) and the interconversion in both directions; which isozyme does which direction was not taught, so the question bank keeps that detail out of scored practice.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;So, you have about, when you apply, about Less than 15% skin bioavailable. Versus if you take it orally, you see oralbi will be very high.&rdquo; <span class='g2-src'>(11/03 T 1185-1187)</span></li>
<li>&ldquo;It has a, a short half-life due to, please write this, metabolism. All right, and then its duration of action is due to high. Protein binding.&rdquo; <span class='g2-src'>(11/03 T 1187-1188)</span></li>
<li>&ldquo;this is the major metabolite of uh hydrocortisone, and the enzyme involved in that is this 1, 11 beta hydrosteroid dehydrogenase, 11 beta HSD.&rdquo; <span class='g2-src'>(11/03 T 1191-1193)</span></li>
<li>&ldquo;And this is the enzyme I mentioned that you need to pay attention to. OK. So what does 11, the number 11, stand for? The carbon, right? So this also can be written as C11 better, right?&rdquo; [he said 'better': beta] <span class='g2-src'>(11/04 T@737-922)</span></li>
</ul></div>
<p>Also on record: &ldquo;And this is important because When you apply this, it goes inactive. And guess what? comes back activated.&rdquo; <span class="g2-src">(11/03 T 1195-1196)</span></p>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS3-005 KX-007 S3-013 S3-016 S3-078 S3-085 S3-086 S3-094 S3-095 S3-096 S3-097 S3-098 S3-099 S3-100 S3-101 S3-102 S3-103 S3H-001 S3H-013" data-qlabel="DPAW slide 26">Practice these (19)</button></p>
</div>
<div class="gpt"><h5>Vitamin D analogs (DPAW slide 27) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Vitamin D analogs have two uses: bone health, and antiproliferative action (slowing cell multiplication), which is why they treat psoriasis. Calcitriol (Rocaltrol) and calcipotriene (Dovonex) are secosteroids, steroid-like molecules with one ring opened. Calcitriol raises calcium absorption from the gut into the blood. In hypercalcemia (too much calcium in the blood) these drugs are not wanted, so hypercalcemia is the limiting factor for their use. Calcipotriene was an attempt to lower the calcium effect while keeping the antiproliferative one. He said that attempt did not work: both drugs still enhance calcium absorption and both are limited by hypercalcemia.</p>
<p>The drawing is a pathway from 7-dehydrocholesterol to cholecalciferol (vitamin D3), then 25-OH-cholecalciferol (the inactive circulating form), then calcitriol by 1-alpha-hydroxylase. The reactions, organs and enzymes are blanks to fill from the take-home reading (Bikle, Endotext, the link on slide 2); that reading places the steps in skin, liver and kidney (Bikle, Endotext 2025, as used in the practice items).</p>
<p><b>Points.</b> The reading is worth 2 points. The question asks for one of three things: the reaction, the organ or the enzyme.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;I have assigned this as a reading assignment that you can do, and out of that you get 2 points.&rdquo; <span class='g2-src'>(11/04 T@1264-1359)</span></li>
<li>&ldquo;That they can affect bone health. What that means is that vitamin D increases the absorption of calcium into the bloodstream.&rdquo; <span class='g2-src'>(11/04 T@1645-1770)</span></li>
<li>&ldquo;Why is that there is a condition called hyper. Casemia. If you already the bloodstream already has too much calcium in it, then you probably don't want to use these molecules.&rdquo; [he said 'Casemia': calcemia, in hypercalcemia] <span class='g2-src'>(11/04 T@1909-2084)</span></li>
<li>&ldquo;so this becomes the limiting. Factor. For their use.&rdquo; <span class='g2-src'>(11/04 T@2112-2164)</span></li>
<li>&ldquo;One, the reaction. 2 The organs where these reactions occur, and 3. The enzymes. Involved OK.&rdquo; <span class='g2-src'>(11/04 T@3533-3626)</span></li>
<li>&ldquo;The question will be very simple and straightforward. Uh, asking you to determine one of these things, all right?&rdquo; <span class='g2-src'>(11/04 T@4082-4195)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BKX-001 BKX-002 KX-008 KX-012 S4-001 S4-002 S4-003 S4-004 S4-005 S4-006 S4-007 S4-008 S4-009 S4-010 S4-011 S4-012 S4-013 S4-014 S4H-001 S4H-002 S4H-003 S4H-009 XS-009" data-qlabel="DPAW slide 27">Practice these (23)</button></p>
</div>
</section>

<section class="gobj" id="gobj-sk-8">
<h3>Dr. Sikazwe, assigned slides · pimecrolimus, tacrolimus and cyclosporine</h3>
<div class="gbar"><span>Objective (DPAW 28, 32, 33)</span><b>The two topical &ldquo;limus&rdquo; drugs are alike in lipophilicity, structure and mechanism but differ in skin absorption; classify a cyclic molecule from the group circled; cyclosporine with grapefruit juice</b><i>DPAW slide 28, 32, 33</i></div>
<div class="gpt"><h5>Pimecrolimus and tacrolimus (DPAW slide 28) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Both drugs are macrolide (large-ring) or lactone (cyclic ester) immunosuppressants and both are calcineurin inhibitors. The slide gives the mechanism as calcineurin inhibition, which decreases the release of inflammatory cytokines; he said he was not so worried about the mechanism here. The slide says the two are similar in lipophilicity, structure and mechanism but differ in skin permeation.</p>
<p>Pimecrolimus has higher non-specific skin protein binding, so it does not get into the systemic circulation and systemic adverse effects are low. Tacrolimus has low skin protein binding, so it can go in and enter the systemic circulation. His point is that the difference between the two is this pharmacokinetic property, absorption through the skin.</p>
<p>The drawing places them side by side: cLogP 6.0 for pimecrolimus and 5.8 for tacrolimus, so both are very lipophilic (he said the log P values are similar). Both drawings show the same large ring, a six-membered ring containing a nitrogen, and a cyclohexyl ring at the top. The differences are colored: a chlorine on the cyclohexyl ring of pimecrolimus where tacrolimus has a hydroxyl, and a short ethyl group where tacrolimus has an allyl group.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;Structure is similar. The only points of difference are that chlorine and that methyl group, and here you have that ylic group and hydroxy.&rdquo; [on the slide the pairs are chlorine versus hydroxyl, and ethyl versus allyl] <span class='g2-src'>(11/04 T@4610-4749)</span></li>
<li>&ldquo;they, they do not, uh, penetrate the skin highly, especially Pimecrolimus. It does not penetrate the skin highly. Why? Because Of high non-specific protein binding.&rdquo; <span class='g2-src'>(11/04 T@4927-5091)</span></li>
<li>&ldquo;But tacrolimus. On the other hand, has low skin. Binding. So that means it can do the opposite, can go in, OK?&rdquo; <span class='g2-src'>(11/04 T@5366-5476)</span></li>
<li>&ldquo;And because they are cyclic molecules, right? OK? So they have this. Group there We can call them, we can classify them chemically. Differently.&rdquo; <span class='g2-src'>(11/04 T@6097-6241)</span></li>
<li>&ldquo;So let's uh look at that question. It will come up.&rdquo; <span class='g2-src'>(11/04 T@6276-6327)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-003 KX-018 KX-019 S4-015 S4-016 S4-017 S4-018 S4-019 S4-020 S4-071 S4H-004 S4H-012 XS-007" data-qlabel="DPAW slide 28">Practice these (13)</button></p>
</div>
<div class="gpt"><h5>Polleve-3: classify the limus drug by the circled group (DPAW slide 32) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> This is his PollEv (live poll) question: &ldquo;Due to the selected functionality, this Limus drug molecule may be chemically classified as a ........&rdquo; The options are (A) lactam, (B) lactone, (C) steroid, (D) pteridine. The drawing is the pimecrolimus macrocycle (it carries the chlorine) with a red circle around the ester group in the ring, next to the six-membered ring that contains the nitrogen.</p>
<p>The reasoning has two steps. The circled group is an ester. An ester that is part of a ring is a cyclic ester, and cyclic esters are lactones. A lactam is the cyclic amide, which is a different group. A steroid is a four-ring skeleton and a pteridine is the ring system of methotrexate, so neither fits a macrocycle with an ester in it. The key is B, lactone, which agrees with the heading of slide 28, &ldquo;Macrolide or lactone immunosuppressants&rdquo;.</p>
<p><b>Unresolved points.</b> The transcript is garbled where he moves from lactones toward amides (around 11/04 T@11500-11600), and the poll results are not spoken. He ends on lactones and rejects steroids, so an exam written from his lecture keys lactone.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;I hinted on a question. If you had a molecule like this, and I circle a functional group, and I say, based on this circled feature, Uh, how can we chemically classify this?&rdquo; <span class='g2-src'>(11/04 T@11267-11439)</span></li>
<li>&ldquo;Are they called lactones? Yes. Are they called steroids? Careful now. So, no, no, no. OK. All right.&rdquo; <span class='g2-src'>(11/04 T@11649-11749)</span></li>
<li>&ldquo;So, it could be a question just that simple, just for you to understand the chemical structures you're dealing with.&rdquo; <span class='g2-src'>(11/04 T@11750-11866)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="S4-020 S4-021 S4H-012" data-qlabel="DPAW slide 32">Practice these (3)</button></p>
</div>
<div class="gpt"><h5>Cyclosporine (DPAW slide 33) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Cyclosporine is an immunosuppressant, an 11 amino acid cyclic peptide. Peptide means the units are joined by amide links, so a cyclic peptide is also a cyclic amide, a lactam. The slide calls it a prodrug, activated by complexation with the cyclophilin receptor; he said it is activated simply by binding its receptor and not by metabolism. The complex inhibits calcineurin phosphatase and T-cell signaling. The ribbon diagram shows cyclophilin A with cyclosporin bound.</p>
<p>ADMET (absorption, distribution, metabolism, excretion, toxicity) from the slide: oral bioavailability 30% because of the first-pass effect, logP 4, half-life 19 h, extensively metabolized by 3A4. He did not read the logP and half-life aloud.</p>
<p>He asked: what happens when cyclosporine is given with grapefruit juice? He said the blood levels go up because the first-pass metabolism is blocked, and the enzyme that carries out that metabolism is 3A4. He asked this question aloud; it is not printed on the slide.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;It is also described as an 11 amino acid cyclic peptide. When we say peptides, we are simply talking about these amide bonds&rdquo; <span class='g2-src'>(11/04 T@11974-12098)</span></li>
<li>&ldquo;So, here, the cyclic peptide, this can be described then as a what? And a lactam, right? cyclic lactam too.&rdquo; <span class='g2-src'>(11/04 T@12152-12259)</span></li>
<li>&ldquo;this is described as a prodrug, and how it's bioactivated is not metabolic. It's simply by its binding to its receptor. When it binds and forms that complex with the receptor, it gets activated.&rdquo; <span class='g2-src'>(11/04 T@12268-12462)</span></li>
<li>&ldquo;The or bioavailability is uh. Very poor for this molecule, right? 30%. This is ascribed to first pass metabolism&rdquo; <span class='g2-src'>(11/04 T@12781-12893)</span></li>
<li>&ldquo;that first pass metabolism and ultimate metabolism of this molecule is carried out by 3F4.&rdquo; [he said '3F4': CYP3A4] <span class='g2-src'>(11/04 T@12955-13045)</span></li>
<li>&ldquo;Of Cylo Plus Grapefruit juice, G F G JF. What would be the effect? Of co-administering these two. What would you expect?&rdquo; [he said 'Cylo': cyclosporine] <span class='g2-src'>(11/04 T@13256-13376)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-002 KX-009 KX-010 KX-019 S4-021 S4-038 S4-039 S4-040 S4-041 S4-042 S4-043 S4H-011 S4H-012 S4H-013 XS-008" data-qlabel="DPAW slide 33">Practice these (15)</button></p>
</div>
</section>

<section class="gobj" id="gobj-sk-9">
<h3>Dr. Sikazwe, assigned slides · retinoids, methotrexate and apremilast in psoriasis</h3>
<div class="gbar"><span>Objective (DPAW 29, 30, 31, 34)</span><b>The retinoids used in psoriasis; methotrexate as a multi-target drug and the structure features it needs; apremilast&rsquo;s reliance on 3A4 for metabolism</b><i>DPAW slide 29, 30, 31, 34</i></div>
<div class="gpt"><h5>Retinoids in psoriasis: tazarotene (DPAW slide 29) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Retinoids are derived from vitamin A and normalize keratinization (skin cell maturation) and proliferation. The topical agent is tazarotene (Tazorac), described as an acetylenic retinoid, meaning it contains an alkyne. The oral agents are acitretin (Soriatane) and isotretinoin (Accutane). The slide says &ldquo;slides 46-49&rdquo; for the fuller description of retinoids; in class he said to correct this to 47 through 50, which are DPAW slides 48 to 51 (11/04 T@6327-6380 and T@7600-7650).</p>
<p>The drawing shows tazarotene as an ethyl ester with an arrow to its active metabolite, the free carboxylic acid. An ester prodrug is inactive until a carboxylesterase (CE enzyme) removes the ethyl group by hydrolysis in the skin. Acitretin has an aromatic ring and a chain of carbon-carbon alkenes ending in a carboxylic acid; isotretinoin has a trimethylcyclohexene ring and a similar chain with one cis alkene marked in red, also ending in a carboxylic acid. Retinoids act on nuclear receptors (RAR and RXR), and the carboxylic acid at the end is their common feature.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;Retinoids bind to what? These are non-receptors, RXR and so on, receptors, right? Nuclear receptors&rdquo; [he said 'non-receptors': nuclear receptors] <span class='g2-src'>(11/04 T@6457-6556)</span></li>
<li>&ldquo;And it's also what? And Esther. Pro-drug. So that when you give it, when you apply it to the skin, it needs ester hydrolysis by. CE enzymes, right, for activation.&rdquo; [he said 'Esther': ester] <span class='g2-src'>(11/04 T@6905-7068)</span></li>
<li>&ldquo;What are CE enzymes? Mhm. Carboxyl estraes.&rdquo; [carboxylesterases] <span class='g2-src'>(11/04 T@7069-7112)</span></li>
<li>&ldquo;And what you start seeing with all these retinoids is that they have this common functional group at the end, this carboxylic acid. So that's an important common feature that they need to have.&rdquo; <span class='g2-src'>(11/04 T@7135-7328)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-004 KX-009 KX-013 KX-014 S4-022 S4-023 S4-024 S4-025 S4-026 S4-027 S4-049 S4H-005 S4H-012 S4H-013 XS-001" data-qlabel="DPAW slide 29">Practice these (15)</button></p>
</div>
<div class="gpt"><h5>Methotrexate (DPAW slide 30) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Methotrexate (MTX; Folex, Mexate) is classified chemically as a pteridine, a two-ring nitrogen system. It is antiproliferative: it competitively inhibits dihydrofolate reductase (DHFR), the enzyme that makes tetrahydrofolic acid, which the slide calls an essential co-factor for DNA synthesis. It also has immunosuppressant and anti-inflammatory activities. He called it multi-target, since it is used in cancer, in arthritic conditions and here in psoriasis.</p>
<p>The box on the slide shows folic acid being reduced by DHFR to tetrahydrofolic acid. Methotrexate is an antimetabolite, an analog of folic acid (vitamin B9). He said the only points of difference are &ldquo;this methyl group and that amine&rdquo;. On the drawing these are the N-CH3 (folic acid has N-H there) and the NH2 on the pteridine ring (folic acid has OH there). It sits in the same enzyme cavity and has higher affinity than folic acid, so it blocks folic acid. Without tetrahydrofolic acid there is no DNA synthesis, and the cells cannot multiply.</p>
<p><b>Wording.</b> In this passage he does not say &ldquo;dihydrofolate reductase&rdquo; aloud. He says the enzyme that processes folic acid into the required tetrahydrofolic acid, so DHFR comes from the slide.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;So, chemically we classify it as a pteridine based on this group here. That's the pteridine feature.&rdquo; <span class='g2-src'>(11/04 T@8221-8321)</span></li>
<li>&ldquo;Methotrexate goes in there and sits in the same enzyme cavity and competitively inhibits the binding of what? Folic acid.&rdquo; <span class='g2-src'>(11/04 T@8972-9093)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-001 KX-012 S4-028 S4-029 S4-030 S4-031 S4-032 S4-037 S4H-003 S4H-011 S4H-015" data-qlabel="DPAW slide 30">Practice these (11)</button></p>
</div>
<div class="gpt"><h5>Methotrexate structure-activity relationship (DPAW slide 31) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> The structure-activity relationship (SAR) lists what a molecule needs to behave like methotrexate: a pteridine ring, p-aminobenzoic acid and glutamic acid. The pteridine ring should remain aromatic. Aromatic N-alkylation decreases activity. The N-CH3 is essential for activity.</p>
<p>In the drawing the pteridine is brown, the p-aminobenzoyl ring is red, and glutamic acid is green; the N-CH3 and the NH2 on the pteridine are blue. Folic acid sits beside it for comparison, with an OH on the pteridine and N-H in place of N-CH3 (both blue). Reading the SAR as a design rule: keep all three parts, keep the pteridine aromatic, do not alkylate the aromatic amines, and keep the N-methyl.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;These molecules that were going to behave like uh methotrexate had to have the following features. One, the teridine ring, which is this. 2, the paraaminobenzoic acid, the ACE group. And you, it also needed glutamic acid.&rdquo; [he said 'teridine': pteridine; 'the ACE group': the p-aminobenzoic acid group] <span class='g2-src'>(11/04 T@9997-10218)</span></li>
<li>&ldquo;the requirement was that when you have a pteridine ring, it should remain aromatic. So, if you change the double bonds within that pteridine ring, you're messing up the activity of that molecule.&rdquo; <span class='g2-src'>(11/04 T@10332-10527)</span></li>
<li>&ldquo;These are aromatic amines, right? If you alkylate any one of those, you also drop the activity.&rdquo; <span class='g2-src'>(11/04 T@10617-10712)</span></li>
<li>&ldquo;And they also noticed that this amethylation here is also essential for activity. So this is the SAR that came with this.&rdquo; [he said 'amethylation': the N-methyl group] <span class='g2-src'>(11/04 T@10806-10927)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="BS4-001 KX-011 S4-028 S4-032 S4-033 S4-034 S4-035 S4-036 S4H-010" data-qlabel="DPAW slide 31">Practice these (9)</button></p>
</div>
<div class="gpt"><h5>Apremilast (Otezla) (DPAW slide 34) <span class="g2-star" title="Likely on the exam">&starf;</span></h5>
<p><b>On the slide.</b> Apremilast (Otezla) treats psoriatic arthritis and moderate to severe plaque psoriasis. It is an isoindoline (the pink ring system with two carbonyls) and a phosphodiesterase-4 (PDE4) inhibitor; blocking PDE4 raises cAMP and lowers pro-inflammatory molecules. It is extensively metabolized, 3A4 major and 1A2 and 2A6 minor, via two steps. The text line leaves both names blank (&ldquo;via O-&hellip; and O-&hellip;&rdquo;); the drawing labels the first arrow O-demethylation and ends in a box marked O-Gluc (the glucuronide). Glucuronidation of the -OH metabolite is done by UGTs. His take-home point is the reliance on 3A4, so avoid 3A4 inhibitors and 3A4 inducers.</p>
<p><b>Conflict, stated both ways.</b> The slide arrow and the 11/04 lecture both say O-demethylation: removing a methyl group from the methoxy on the phenyl ring, leaving the -OH metabolite. The drawing also carries an ethoxy group. The Exam 1 question showed a picture that indicated the ethyl group, which would be O-deethylation. Both are removal of an alkyl group from an aryl ether. An exam written from his lecture keys O-demethylation, but an item that circles the ethyl group asks for O-deethylation, so read which group is marked.</p>
<div class="g2-said"><span class='g2-k'>He said</span>
<ul>
<li>&ldquo;what I wanted to take from here is just simply the reliance of this molecule on 3A4 for its metabolism, and you see some of the metabolism that you see are going to be Odimethylation,&rdquo; [he said 'Odimethylation': O-demethylation] <span class='g2-src'>(11/04 T@13895-14078)</span></li>
<li>&ldquo;So all demethylation. And once that occurs, then you get this O metabolite, right, hydroxymetabolite, which then can be glucuronidated or glue. These are UGTs.&rdquo; <span class='g2-src'>(11/04 T@14108-14267)</span></li>
<li>&ldquo;So, whatever you do, here, again, avoid what? 384 Inhibitors 304 Inducers&rdquo; [he said '384' and '304': 3A4] <span class='g2-src'>(11/04 T@14272-14345)</span></li>
</ul></div>
<p><b>Practice.</b> <button type="button" class="chip g2-primary" data-qids="KX-012 S4-044 S4-045 S4-046 S4-047 S4H-011 S4H-014 S4H-015 XS-006 XS-012" data-qlabel="DPAW slide 34">Practice these (10)</button></p>
</div>
</section>

<section class="gobj" id="gobj-sk-10">
<h3>Dr. Sikazwe, assigned slides · Hydroxy acid keratolytics</h3>
<div class="gbar"><span>Objective (DPAW slides 43, 44, 45)</span><b>Know what makes a hydroxy acid an alpha-hydroxy acid, how glycolic acid and salicylic acid differ, and apply the definition to a set of structures</b><i>DPAW slide 43, 44, 45</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Glycolic acid and salicylic acid (DPAW slide 43) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Hydroxy acids are keratolytics. Under salicylic acid the slide says increased hydration, and that a low pH causes the lower skin layers to swell, soften and desquamate (shed). <b>Glycolic acid (GA)</b>, HO-CH2-COOH, is an alpha-hydroxy acid: the OH sits on the carbon next to the carboxylic acid. It is hydrophilic, and higher concentrations give deeper skin peels. He gave a pKa of about 3 (an acid, so a low pKa) and a log P of about 1: water soluble, small, so it acts mostly on the surface. The arrow marked DMEs (drug-metabolizing enzymes) leads to a product with two carboxylic acids; he said two enzymes do this, alcohol dehydrogenase and aldehyde dehydrogenase.</p>
<p class="g2-p"><b>Salicylic acid (SA)</b> is drawn as a benzene ring with a carboxylic acid and an OH on the next ring carbon. The slide calls it more lipophilic than glycolic acid; he gave a log P of 1 to 2 because of the aromatic ring. Because it is an acid, some people complain of itching. The ring carbon next to the acid is the alpha carbon and carries no OH; the OH is on the next one, so he called it a beta-hydroxy acid (&ldquo;2 carbon removed from the carboxylic acid&rdquo;). Of what reaches the systemic circulation, 75% is conjugated with an amino acid to a glycine conjugate; the slide shows this product only as a question mark.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;And because this is also an acid, it's going to be water soluble, so it's a hydrophilic. So log p value is around 1. So it's going to act mostly on the surface when you give it.&rdquo; <span class="g2-src">11/04 T@20585-20762</span></li>
<li>&ldquo;So, minimal. Metabolism. Leads you to this. Diaccid So I would ask you, how many enzymes are involved in this place. Two enzymes, right? OK. Remember that tandem of enzymes, alcohol dehydrogenase and aldehyde dehydrogenase.&rdquo; [he said 'Diaccid': diacid] <span class="g2-src">11/04 T@20877-21100</span></li>
<li>&ldquo;So this is a beta hydroxy acid. OK. 2 carbon removed from the carboxylic acid.&rdquo; <span class="g2-src">11/04 T@22163-22241</span></li>
<li>&ldquo;This undergoes metabolism, 75%. Whatever gets in systemic circulation, 75% amino acid conjugation to a glycine conjugate.&rdquo; <span class="g2-src">11/04 T@22359-22480</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-055 S4-056 S4-057 S4-058 S4-059 S4-060 S4-061 S4-062 S4-071 S4H-016 S4H-017 S4H-018 S4H-019 XS-003" data-qlabel="DPAW slide 43">Practice these (14)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Hydroxy acid structure-activity relationship (DPAW slide 44) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> The drawing is a generic alpha-hydroxy acid, HO2C-C(alpha)(OH)-R, with the alpha carbon in red and R in blue. The structure-activity relationship (SAR) has three parts: a COOH group (or groups); an OH on the alpha carbon, the carbon next to the CO2H, on most of them; and R, mostly alkyl. He added that R can also be an aromatic group, and that alkyl groups are the usual choice on that same alpha carbon, and the molecules still work. These are small acids, and this is the keratolytic class.</p>
<p class="g2-p">A hydroxy acid is named for its OH. The position of that OH, alpha or beta, is what separates glycolic acid (alpha) from salicylic acid (beta) on slide 43.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So this hydroxy group needs to be on the alpha atom, 2, the carboxylic acid, and you can do some things.&rdquo; <span class="g2-src">11/04 T@22949-23053</span></li>
<li>&ldquo;You can decorate this with, you know, aromatic groups, archal groups, but mostly archal groups can be put on that same alpha alpha atom. And you still have molecules that work, OK?&rdquo; [he said 'archal': alkyl] <span class="g2-src">11/04 T@23054-23234</span></li>
<li>&ldquo;So, just an exercise, can you determine or group which ones are alpha hydroxy aids? How many alpha hydroxy acids do we have?&rdquo; <span class="g2-src">11/04 T@23288-23412</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-055 S4-063 S4-064 S4-120 S4H-018 XS-003" data-qlabel="DPAW slide 44">Practice these (6)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Poll: how many alpha-hydroxy acids are in the figure? (DPAW slide 45)</h5>
<p class="g2-p"><b>On the slide.</b> His PollEv question is &ldquo;How many alpha-hydroxy acids are in the figure below?&rdquo; with the options One, Two, Three, Four. The figure holds five small carboxylic acids. To test each one, find the carboxylic acid, step to the carbon next to it (the alpha carbon) and look for an OH on that carbon.</p>
<ul>
<li>Top center, HOOC-CH(OH)-CH(OH)-COOH: each OH is on a carbon next to a carboxylic acid. Yes.</li>
<li>Top right, glycolic acid: yes.</li>
<li>Left, (CH3)2CH-COOH: no OH other than the one in the carboxylic acid itself. No.</li>
<li>Bottom, with a cyclopropane ring: the CH(OH) carbon is next to the right-hand carboxylic acid. Yes.</li>
<li>Right, with a cyclohexane ring: the carboxylic acid is on ring carbon 1 and the OH on ring carbon 2, one carbon farther than alpha. No.</li>
</ul>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;How do we define alpha hydroxy? Hydroxy group needs to be next to the what? on the carbon that is next to the carboxylic acid.&rdquo; <span class="g2-src">11/04 T@23505-23631</span></li>
<li>&ldquo;What about this one? No? What about this one? Yes, look at that, that next to the carboxylic acid, yes. What about this one? No. So how many? OK.&rdquo; <span class="g2-src">11/04 T@23723-23868</span></li>
</ul></div>
<div class="g2-note"><span class="g2-k">Conflict: the count was never said aloud</span><p>He did not say the count. He ended with &ldquo;So how many? OK.&rdquo; and moved on to sulfur, and the answers from the room are cut from the recording. Applying his definition to the five structures gives three (the top-center, top-right and bottom structures). An exam written from his lecture would key Three, as the practice question does; his own count is not on record.</p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-120" data-qlabel="DPAW slide 45">&#9733; Practice these (1)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-11">
<h3>Dr. Sikazwe, assigned slides · Sulfur and benzoyl peroxide</h3>
<div class="gbar"><span>Objective (DPAW slides 46, 47)</span><b>Know the drawbacks of sulfur and how it is thought to work, and the two things benzoyl peroxide does on the skin</b><i>DPAW slide 46, 47</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Sulfur (DPAW slide 46) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Sulfur is used alone or in mixtures: sulfur with sodium sulfacetamide (Plexion, Avar) or sulfur with zinc oxide. The mechanism line is under CBDA (chemical basis of drug action): <b>thiolysis</b>. Sulfur reduces or breaks the disulfide bonds in keratin. The drawing shows a keratin helix held by S-S bridges, a thiolysis arrow, and the same helix with free SH groups.</p>
<p class="g2-p">Keratin is a protein, and its disulfide bonds are between cysteine residues, the amino acid he named. He called the evidence anecdotal and the mechanism less clear. Two drawbacks he named: allergy and smell. Particle size matters: it must be small, and large-particle sulfur is less effective.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;Uh, what are some of the drawbacks to using sulfur? Cause of allergies. And some people just uh detest sulfur for what? Smell.&rdquo; <span class="g2-src">11/04 T@24147-24273</span></li>
<li>&ldquo;this needs to be very what small particle. So. Large particle sulfur, less effective.&rdquo; <span class="g2-src">11/04 T@24663-24748</span></li>
<li>&ldquo;there's some, uh, anecdotal evidence that this molecule works by thiolysis. That sulfur goes and breaks these. Disulfide bonds present in keratin.&rdquo; <span class="g2-src">11/04 T@25122-25268</span></li>
<li>&ldquo;Where do you find the sulfide bonds in amino acid? Cysteine, right?&rdquo; [he said 'sulfide bonds': disulfide bonds] <span class="g2-src">11/04 T@25475-25542</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS4-005 S4-021 S4-065 S4-066 S4-067 S4-068 S4H-019 S4H-020" data-qlabel="DPAW slide 46">Practice these (8)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Benzoyl peroxide (DPAW slide 47) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Benzoyl peroxide (BPO) is in Oxy-10, Clearasil and ProActiv products, and the slide names its chemical class, peroxide. It does two things: lowers pH and forms free radicals. The note on the slide says it is absorbed by the skin and forms benzoic acid, which is excreted in urine. The drawing has BPO (log P = 3.5) breaking into benzoic acid and a benzoyl radical (a radical, marked with a red dot on an oxygen).</p>
<p class="g2-p">Because it has a lipophilic part, it penetrates the skin well. Then the peroxide bond (O-O) breaks, giving two products with two different jobs: benzoic acid lowers the skin pH, which supports the keratolytic activity; the benzoyl radical kills bacteria.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;It does two things. It lowers the pH, skin pH, and it also produces free radicals.&rdquo; <span class="g2-src">11/04 T@25789-25871</span></li>
<li>&ldquo;so benzoic acid brings to the fore lowering of what? Skin pH. So you can promote even this keratolytic activity from that.&rdquo; <span class="g2-src">11/04 T@26093-26215</span></li>
<li>&ldquo;Then this one here. The benzo a radical. Go to kill some of the Bacteria.&rdquo; [he said 'benzo a radical': benzoyl radical] <span class="g2-src">11/04 T@26216-26289</span></li>
<li>&ldquo;So, keratolytic coming from here, and benzoyl peroxide, killing off bacteria. Anti-inflammatory&rdquo; <span class="g2-src">11/04 T@26496-26591</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-021 S4-069 S4-070 S4-071 S4H-019 S4H-021" data-qlabel="DPAW slide 47">Practice these (6)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-12">
<h3>Dr. Sikazwe, assigned slides · Retinoids by generation</h3>
<div class="gbar"><span>Objective (DPAW slides 48, 49, 50, 51)</span><b>Know that retinoids are vitamin A derivatives with anti-inflammatory, anti-proliferative and sebum-lowering effects, that teratogenicity limits them, and how the three generations differ</b><i>DPAW slide 48, 49, 50, 51</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Retinoids: what they are (DPAW slide 48) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Tretinoin, isotretinoin, acitretin, adapalene, tazarotene and trifarotene are derivatives of vitamin A1 (retinol). The drawing is retinol: a trimethylcyclohexene ring, a chain of alternating alkenes (a polyene) and a terminal CH2-OH, with an arrow to a box labeled RETINOIDS. The slide lists them as retinoic receptor (RAR and RXR) agonists with four effects: anti-inflammatory, anti-proliferative, decreased sebum production and teratogenic effects. In class he read out the first three and then the teratogenic caution; the RAR and RXR line was not read out on this slide.</p>
<p class="g2-p">Teratogenic means able to cause birth defects, so not everyone can use a retinoid. He called this the major limitation of these potent molecules, said part of it depends on the concentration, and told students to carry the caution with them.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So they have several properties anti-inflammatory, anti-prohiferative, even they suppress sebum oil production.&rdquo; [he said 'prohiferative': proliferative] <span class="g2-src">11/04 T@27032-27143</span></li>
<li>&ldquo;So if they are teratogenic, can everybody use them? If they are teratogenic, can everyone use them? No.&rdquo; <span class="g2-src">11/04 T@27255-27358</span></li>
<li>&ldquo;So, this is a caution that you all need to make sure you carry that with you.&rdquo; <span class="g2-src">11/04 T@27363-27440</span></li>
<li>&ldquo;Maybe the less concentrated ones can be used, but there's always that caveat.&rdquo; <span class="g2-src">11/04 T@27552-27629</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-027 S4-072 S4-073 S4H-003 S4H-009" data-qlabel="DPAW slide 48">Practice these (5)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> First generation, non-aromatic: tretinoin and isotretinoin (DPAW slide 49) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Retinol sits in a box as the parent compound. <b>Tretinoin</b> (Retin-A products) was the first retinoid for acne and is all-trans retinoic acid: every alkene in the chain is trans, and the chain ends in a carboxylic acid. He said he thinks tretinoin is topical. <b>Isotretinoin</b> (Accutane, for example) is 13-cis retinoic acid, and he said it is used orally: the alkene at carbon 13 is cis, highlighted in pink. The two are geometric isomers of each other, with the same atoms and only the orientation at that one alkene different. Neither has an aromatic ring.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;You have what are called the first gen retinoids. They are non-aromatic. There is no aromatic group in them. This is where we find tretinoin and isotretinoin.&rdquo; <span class="g2-src">11/04 T@27663-27821</span></li>
<li>&ldquo;So tretinoin is used, I think this is topical. And this one is used. Uh, orally.&rdquo; [the slide does not state the routes; it lists Retin-A products for tretinoin and Accutane for isotretinoin] <span class="g2-src">11/04 T@27822-27902</span></li>
<li>&ldquo;So, this is a cis retinoic acid, 13 in particular, 13 carbon cis. And that's the only difference.&rdquo; <span class="g2-src">11/04 T@28384-28481</span></li>
<li>&ldquo;So this relationship, C strands is called geometric isomerism. these are geometric. Isomers. C strands relationship.&rdquo; [he said 'C strands': cis-trans] <span class="g2-src">11/04 T@28609-28725</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-013 KX-014 S4-074 S4-075 S4-076 S4-077 S4H-005 S4H-006 S4H-007 S4H-008 XS-001 XS-002" data-qlabel="DPAW slide 49">Practice these (12)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">3.</span> Second generation, mono-aromatic: etretinate and acitretin (DPAW slide 50) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> <b>Etretinate</b> is an ethyl ester prodrug with one aromatic ring (carrying an OMe and three methyls) and a polyene chain. The slide notes: t1/2 120 days, highly lipophilic, narrow therapeutic index (TI), teratogenic, removed from the US market in 1998. An arrow leads to <b>acitretin</b> (Soriatane), the active form of etretinate, which is the free carboxylic acid. He did not say the 120 days or the 1998 date. He said the ester needs bioactivation by CEs (carboxylesterases), that acitretin keeps some teratogenicity but not to the extent of etretinate, and that acitretin is now used directly.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;The second class is monoaromatic.&rdquo; <span class="g2-src">11/04 T@28865-28898</span></li>
<li>&ldquo;it came with things like this narrow therapeutic index, quite teratogenic, so they removed it from the market.&rdquo; <span class="g2-src">11/04 T@28978-29088</span></li>
<li>&ldquo;Luckily somebody was observant enough that. This requires bioactivation to this. CEs are involved to get you to here.&rdquo; <span class="g2-src">11/04 T@29089-29206</span></li>
<li>&ldquo;Yes, there's some retention of teratogenicity, but not to the extent of the treatment.&rdquo; [he said 'treatment': etretinate] <span class="g2-src">11/04 T@29296-29382</span></li>
<li>&ldquo;So 2nd gen monoaromatics, that's where you find aci acid retin.&rdquo; [he said 'aci acid retin': acitretin] <span class="g2-src">11/04 T@29679-29742</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-014 S4-074 S4-078 S4-079 S4H-005 S4H-006 S4H-007 XS-001" data-qlabel="DPAW slide 50">Practice these (8)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">4.</span> Third generation, poly-aromatic: adapalene, tazarotene, trifarotene (DPAW slide 51) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> <b>Adapalene</b> (Differin) is the first synthetic retinoid, <b>trifarotene</b> (Aklief) is also on the list, and <b>tazarotene</b> (Tazorac) is a prodrug. The drawing shows tazarotene, an ethyl ester, with an arrow marked ?? to tazarotenic acid, the active form. Adapalene and trifarotene are directly active because they carry an exposed carboxylic acid; the ester is what makes tazarotene a prodrug, and he said a carboxylesterase bioactivates it. General ADMET (absorption, distribution, metabolism, excretion, toxicity): all are lipophilic and have low systemic absorption, which means fewer systemic adverse effects. He said they are retained in the skin, and that the explanation is not clear.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So now you have 3rd generation, we may be on 4th generation retinoids, uh, but the 3rd generation has all these polyaromatic, poly several aromatic features.&rdquo; <span class="g2-src">11/04 T@29902-30059</span></li>
<li>&ldquo;That's where you find adapalin, triperrotin, tazerrotin.&rdquo; [he said 'adapalin, triperrotin, tazerrotin': adapalene, trifarotene, tazarotene] <span class="g2-src">11/04 T@30105-30161</span></li>
<li>&ldquo;these two. Directly active because they have this exposed carboxylic acid, right? But. Is a prodrug carboxyestrase is. To get it bioactivated&rdquo; [the unnamed prodrug is tazarotene, per the slide] <span class="g2-src">11/04 T@30169-30310</span></li>
<li>&ldquo;if we were to look at log p values, they're quite lipophilic. OK, but somehow they get retained in the skin, and the explanation is not that clear.&rdquo; <span class="g2-src">11/04 T@30325-30472</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-013 KX-014 S4-023 S4-025 S4-074 S4-080 S4-081 S4-082 S4H-005 S4H-006 S4H-007 XS-001" data-qlabel="DPAW slide 51">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-13">
<h3>Dr. Sikazwe, assigned slides · Hormonal acne therapy</h3>
<div class="gbar"><span>Objective (DPAW slides 52, 53)</span><b>Know that the hormonal agents lower sebum production, that estrogens are steroids, and how the steroidal and non-steroidal antiandrogens differ in how they work</b><i>DPAW slide 52, 53</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Estrogens in oral contraceptives (DPAW slide 52) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> The title line is &ldquo;OCs act against hormonal triggers of acne&rdquo;. OCs are oral contraceptives, used here as hormonal adjunct therapy in females: ethinyl estradiol with norgestimate (Ortho Tri-Cyclen Lo), and ethinyl estradiol with drospirenone (Yasmin, Yaz). The reason noted on the slide is sebum oil production. The drawing shows all three structures. In the annotated copy the rings are lettered A to D on norgestimate, and he said &ldquo;A, B, C, D&rdquo; as he described the steroid nucleus:</p>
<ul>
<li>ethinyl estradiol: aromatic A ring, 3-OH, 17-ethynyl (an alkyne), 17-OH</li>
<li>norgestimate: oxime at C3, 17-acetate, 17-ethynyl, 13-ethyl</li>
<li>drospirenone: cyclopropane rings, a spiro lactone at C17, 3-keto-4-ene</li>
</ul>
<p class="g2-p">All three share the four-ring steroid nucleus, so structurally they are steroids; mechanistically they suppress sebum oil production by normalizing the hormones.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;So all these, let me just say, these are, these are all going to be what? Steroids, right? Because you know the structure of steroids A, B, C, D&rdquo; <span class="g2-src">11/04 T@31021-31165</span></li>
<li>&ldquo;Essentially, what they do is they suppress Bomb production. That's the C bomb oil production.&rdquo; [he said 'Bomb' and 'C bomb': sebum] <span class="g2-src">11/04 T@31372-31465</span></li>
<li>&ldquo;So structurally, they're steroids, right? They're mechanistically, they're suppressing sebum oil production.&rdquo; <span class="g2-src">11/04 T@31579-31687</span></li>
<li>&ldquo;So here you find ethno estradiol, ethno estradiol, co-formulated with these agents also.&rdquo; [he said 'ethno estradiol': ethinyl estradiol] <span class="g2-src">11/04 T@31233-31321</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-015 S4-083 S4-084 S4H-022 S4H-023 XS-011" data-qlabel="DPAW slide 52">Practice these (6)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Antiandrogens (DPAW slide 53) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<table class="g2-table g2-stack">
<caption>Antiandrogens (AAs) on the slide</caption>
<thead><tr><th scope="col">Type</th><th scope="col">Drug</th><th scope="col">What the drawing shows</th></tr></thead>
<tbody>
<tr><th scope="row">Steroidal AA</th><td><span class="g2-lab">Drug</span>Spironolactone (Aldactone)</td><td><span class="g2-lab">Drawing</span>A steroid with a spiro-lactone and a 7alpha-thioacetyl group</td></tr>
<tr><th scope="row">Non-steroidal AA</th><td><span class="g2-lab">Drug</span>Flutamide (Eulexin)</td><td><span class="g2-lab">Drawing</span>An anilide with CF3 and NO2</td></tr>
<tr><th scope="row">Non-steroidal AA</th><td><span class="g2-lab">Drug</span>Ketoconazole</td><td><span class="g2-lab">Drawing</span>Imidazole, dioxolane, dichlorophenyl and acetylpiperazine</td></tr>
</tbody>
</table>
<p class="g2-p"><b>What each approach does.</b> Some of these diminish testosterone biosynthesis (the slide's note on spironolactone and ketoconazole); flutamide prevents testosterone from binding to its receptor, so testosterone cannot activate its pathways. For ketoconazole he stressed that azoles are strong CYP3A4 inhibitors. Both the estrogenic agents on slide 52 and the antiandrogens lead to less sebum.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;Azores are strong inhibitors of what? C enzymes. So 384. Strong 3F4 inhibitor.&rdquo; [he said 'Azores': azoles; 'C enzymes': CYP enzymes; '384' and '3F4': CYP3A4] <span class="g2-src">11/04 T@32466-32544</span></li>
<li>&ldquo;Always when you see Ezo antifugo's. Have that enzyme inhibition. At the front of your mind.&rdquo; [he said 'Ezo antifugo's': azole antifungals] <span class="g2-src">11/04 T@32545-32636</span></li>
<li>&ldquo;It blocks testosterone from binding to its receptor, so testosterone cannot activate. It's pathways, OK?&rdquo; <span class="g2-src">11/04 T@32865-32969</span></li>
<li>&ldquo;So you have a steroidal approach, a non-steroidal approach, and you just differentiate them by how they work. This is the take-home message from this slide.&rdquo; <span class="g2-src">11/04 T@32970-33126</span></li>
<li>&ldquo;So you have less sebum production being being produced in both cases when you use anti-androgens as well as estrogenic compounds.&rdquo; <span class="g2-src">11/04 T@33442-33571</span></li>
</ul></div>
<div class="g2-note"><span class="g2-k">Conflict: which drugs lower testosterone biosynthesis</span><p>In the transcript he says &ldquo;Which one is the steroid? This one, right? OK, so this guy, spironolactone and ketoconazole. These Uh, Diminish Testosterone Testosterone. Biosynthesis. Decrease testosterone biosynthesis, that's the mechanism of action, so it's a steroid. This is not a steroid.&rdquo; (11/04 T@32062-32300). Reading 1 (the slide): spironolactone is the one steroid; ketoconazole and flutamide are non-steroidal. Reading 2 (the speech as transcribed): the sentence names spironolactone and ketoconazole together as lowering testosterone biosynthesis, says &ldquo;so it&rsquo;s a steroid&rdquo; (spironolactone), then &ldquo;This is not a steroid&rdquo; and goes on about the azole (ketoconazole). The handwriting on the slide brackets both drawings with &ldquo;these diminish testosterone biosynthesis&rdquo;. The two agree once the speech is read as: spironolactone and ketoconazole lower biosynthesis, flutamide blocks the receptor, and only spironolactone is a steroid. An exam written from his lecture would key the slide's classification.</p></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-010 KX-015 S4-085 S4-086 S4-087 S4-088 S4-091 S4H-022 S4H-023 XS-004 XS-005 XS-011 XS-012" data-qlabel="DPAW slide 53">Practice these (13)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-14">
<h3>Dr. Sikazwe, assigned slides · Antibiotics for acne</h3>
<div class="gbar"><span>Objective (DPAW slides 54, 55)</span><b>Recognize the antibiotic structures, from small linear azelaic acid to cyclic erythromycin, and identify tetracyclines and tell them apart from steroids</b><i>DPAW slide 54, 55</i></div>
<div class="gpt g2-block"><h5><span class="g2-num">1.</span> Azelaic acid, clindamycin, erythromycin (DPAW slide 54) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> The target organism is P. acnes, a gram-positive bacterium. Three agents, in the order he gave them:</p>
<ul>
<li><b>Azelaic acid</b> (Azelex): a C9 bi-carboxylic acid (a diacid) and an anti-inflammatory agent. The drawing is a linear nine-carbon diacid.</li>
<li><b>Clindamycin</b>: a lincomycin (the slide says a sulfur antibiotic from S. lincolnensis), used topically because of GI (gastrointestinal) toxicity.</li>
<li><b>Erythromycin</b>: a macrolide with poor PO (oral) absorption, unstable at pH 4 or lower; structural modifications (acid salts and esters) increase water and lipid solubilities. The drawing is a large ring with two sugars attached.</li>
</ul>
<p class="g2-p">He placed them as options in turn: azelaic acid first, then clindamycin if that does not work, then erythromycin. What he asked students to do with the drawings is sort them by shape: small linear molecules (azelaic acid), through clindamycin, up to the large cyclic macrolide.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;Azylic acid, very unusual, but very common in a lot of over these over the counter antibiotics for skin conditions, right? It's a very unusual molecule. It's a dyacid.&rdquo; [he said 'Azylic acid' and 'dyacid': azelaic acid and diacid] <span class="g2-src">11/04 T@34038-34205</span></li>
<li>&ldquo;If that doesn't work, you have options of using clindamycin. If that doesn't work, you can use erythromycin.&rdquo; <span class="g2-src">11/04 T@34274-34382</span></li>
<li>&ldquo;Now, here, you should be able to uh distinguish, right? Just the cyclic, some of the cyclic, some non-cyclic. And then the other ones are linear.&rdquo; <span class="g2-src">11/04 T@34747-34892</span></li>
<li>&ldquo;You can run from small linear molecules to large cyclic molecules as antibiotics.&rdquo; <span class="g2-src">11/04 T@34938-35019</span></li>
</ul></div>
<div class="g2-said"><span class="g2-k">Not needed</span>The antibiotic detail belongs to a later course. He said: &ldquo;Now, A lot of the antibiotic stock is going to be covered in. What course is coming up for you? ID, right? So, here, I'm not going to belabor the point.&rdquo; <span class="g2-src">11/04 T@34387-34539</span> He did not read out the clindamycin and erythromycin lines of the slide (lincomycin class, S. lincolnensis, GI toxicity, pH 4, acid salts and esters).</div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="S4-054 S4-089 S4-090 XS-003 XS-004" data-qlabel="DPAW slide 54">Practice these (5)</button></div>
</div>
<div class="gpt g2-block"><h5><span class="g2-num">2.</span> Tetracyclines (DPAW slide 55) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p class="g2-p"><b>On the slide.</b> Tetracycline is broad spectrum. It chelates the metal ions Al3+, Ca2+, Mg2+, Fe3+, Zn (printed Zn3+ on the slide) and Bi3+, forming insoluble salts; a photo shows stained teeth. Its absorption is affected by food (for example dairy), and T1/2 is 8.5 h. <b>Doxycycline and minocycline</b>: food does not affect absorption; both are lipophilic and longer acting (doxycycline t1/2 = 11 to 13 h; minocycline 14 to 22 h). The note: cross reactivities due to structure similarity. The drawings are tetracycline (a linear, fused four-ring core with a 6-OH, 4-dimethylamino, 2-carboxamide and many OH and C=O groups), doxycycline, and minocycline (7-dimethylamino).</p>
<p class="g2-p">He did not read out the half-lives or the metal list. He explained the bone and tooth problem this way: bone and enamel hold a lot of calcium, the drug chelates it, and the insoluble salts stay and weaken the bone or enamel structure and stain. Doxycycline and minocycline were made to overcome the food-absorption problem. A patient allergic to tetracycline is likely to react to these two as well, because of the structural similarity.</p>
<div class="g2-said"><span class="g2-k">He said</span><ul>
<li>&ldquo;Tetracyclines, be able to identify them 1234.&rdquo; [the transcript text &lsquo;1234&rsquo; is unclear; he goes on to say tetracyclines are linear four-ring molecules] <span class="g2-src">11/04 T@35192-35237</span></li>
<li>&ldquo;steroids, they're stacked, right? You see they're stacking, 4 rings stuck. This one is just one planet, one linear molecule.&rdquo; <span class="g2-src">11/04 T@35302-35426</span></li>
<li>&ldquo;one thing that they worry about with the use of tetracycline is the fact that this molecule can accumulate in bone. OK, and even enamel and start standing.&rdquo; [he said 'standing': staining] <span class="g2-src">11/04 T@35525-35680</span></li>
<li>&ldquo;in bone, you have a lot of what? Calcium. OK. And then when they kill it they form these insoluble sals that then remain there. And weaken the bone structure or enamel structure.&rdquo; [he said 'kill it': chelate it] <span class="g2-src">11/04 T@35916-36094</span></li>
<li>&ldquo;this main thing, absorption, being affected by food. So two versions of tetracycline were then That made to overcome this food absorption issue. OK? So, you have doxycycline and minocycline coming out of that.&rdquo; <span class="g2-src">11/04 T@36180-36389</span></li>
<li>&ldquo;Are they going to be allergic to it as well? OK. If you give them minocycline, are they going to be allergic to it? Why? Uh-huh, structural similarity.&rdquo; <span class="g2-src">11/04 T@36630-36781</span></li>
<li>&ldquo;All right, so visually, can you identify tetracyclines and distinguish them from steroids? That is something you can visually do, right?&rdquo; <span class="g2-src">11/04 T@36805-36941</span></li>
</ul></div>
<p class="g2-sub">Practice</p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="BS4-006 S4-091 S4-092 S4-093 S4-094 S4H-013 S4H-024 S4H-025 XS-004 XS-005" data-qlabel="DPAW slide 55">Practice these (10)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-15">
<h3>Dr. Sikazwe, assigned slides · Sunblocks and the first organic sunscreens</h3>
<div class="gbar"><span>Objective (DPAW slides 61, 62)</span><b>Know the two metal oxide sunblockers, zinc oxide and titanium dioxide, that reflect light, and know that the organic sunscreens carry chromophores (functional groups that absorb light) and turn that energy into heat</b><i>DPAW slide 61, 62</i></div>
<div class="gpt"><h5>Sunblocks: zinc oxide and titanium dioxide (DPAW slide 61) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> The inorganic chemical sunblocks are zinc oxide (ZnO) and titanium dioxide (TiO2). They are metal oxides that physically reflect or scatter light, whereas the organic sunscreens on the next slides absorb it. They are broad spectrum: they cover both UVA and UVB. The slide also states that they are inert, do not irritate the skin, and come in micronized formulations.</p>
<p>The handwritten note says size matters, and the photograph shows why. On one half of the face the zinc oxide particles are large and the film looks white. On the other half the particles are nanosized and the film looks transparent. The rule he gave: the larger the particle, the better the reflection, so the transparent nano form gives up some of its reflective power. This holds for both zinc oxide and titanium oxide. He also said some products combine a metal oxide with an organic sunscreen, and that the metal oxides are the two physical reflectors while the other agents are organic molecules.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;we have two metal oxides, zinc oxide and titanium oxide that we can put on our, on our skin. Very useful. These are broad spectra inactivity. OK, they block both UVA UVB.&rdquo; [he said &lsquo;broad spectra inactivity&rsquo;: broad-spectrum activity] <span class="g2-src">11/04 T@38555-38725</span></p>
<p>&ldquo;Now, Size Matters here. It's important. Larger size Roger particle size. Is More effective.&rdquo; [he said &lsquo;Roger particle size&rsquo;: larger particle size] <span class="g2-src">11/04 T@38730-38821</span></p>
<p>&ldquo;Large size is more effective. So for both zinc oxide as well as titanium oxide.&rdquo; <span class="g2-src">11/04 T@39280-39359</span></p>
<p>&ldquo;This same zinc oxide, it moved from being white to transparent, nano size. That's start losing some of its reflective properties.&rdquo; <span class="g2-src">11/04 T@39024-39153</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 S4-097 S4-098 S4H-019 S4H-020 S4H-026 XS-010" data-qlabel="DPAW slide 61">Practice these (7)</button></div>
</div>
<div class="gpt"><h5>Organic sunscreens, part 1: dibenzoylmethanes and anthranilates (DPAW slide 62) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> Organic chemical sunscreens contain chromophores, functional groups that absorb UVA and UVB and convert it into harmless heat. This slide covers the two classes that absorb UVA (315-400 nm).</p>
<ul>
<li><b>Dibenzoylmethanes:</b> the product is avobenzone, a 1,3-diketone with a methoxyphenyl ring and a tert-butylphenyl ring. It absorbs the full spectrum of UVA and some UVB. It is rapidly degraded by UVA. The handwritten notes read low skin absorption and a photodegradation half-life (t1/2) of about 2 hours. He explained why low skin absorption matters: he does not want these molecules to seep into the systemic circulation (the blood).</li>
<li><b>Anthranilates:</b> meradimate (a menthyl ester of anthranilic acid) absorbs UVA. The note reads even more rapidly degraded than avobenzone.</li>
</ul>
<p>Photodegradation means the same light the molecule absorbs also breaks it down. With a half-life of about 2 hours, the person has to reapply about every 2 hours. Meradimate lasts less than that, which is the point of distinction between the two classes.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;the organic uh molecules contain what are called chromophores. These are functional groups that can absorb what? Light.&rdquo; <span class="g2-src">11/04 T@39833-39952</span></p>
<p>&ldquo;once they absorb light, they convert that photon energy, light energy into harmless heat energy.&rdquo; <span class="g2-src">11/04 T@40000-40096</span></p>
<p>&ldquo;What you need to know about this one, it has a a law. Skin absorption.&rdquo; [he said &lsquo;a law&rsquo;: a low skin absorption] <span class="g2-src">11/04 T@40552-40622</span></p>
<p>&ldquo;Why is this important? We don't want that worry. That these things are going to seep into what? Systemic circulation, OK?&rdquo; <span class="g2-src">11/04 T@40623-40744</span></p>
<p>&ldquo;Then they have a photo. Degradation. Catch my spelling on that degradation, half-life. Of about what? 2 hours. So that means after every 2 hours, the person has to come up and do it, reapply.&rdquo; <span class="g2-src">11/04 T@40745-40936</span></p>
<p>&ldquo;Whereas this might be 2 hours you apply, you probably don't have 2 hours essentially with Meradime. OK. So, that gives you a point of distinction.&rdquo; [he said &lsquo;Meradime&rsquo;: meradimate] <span class="g2-src">11/04 T@41334-41480</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 S4-099 S4-100 S4-101 S4-102 S4-109 S4-111 S4H-026 S4H-027 S4H-031 XS-010" data-qlabel="DPAW slide 62">Practice these (11)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-16">
<h3>Dr. Sikazwe, assigned slides · UVB sunscreens: cinnamates, PABAs, salicylates, benzimidazoles</h3>
<div class="gbar"><span>Objective (DPAW slides 63, 64)</span><b>Choose among the UVB-absorbing sunscreen classes by their drawbacks: skin absorption, photodegradation half-life, allergy and water solubility</b><i>DPAW slide 63, 64</i></div>
<div class="gpt"><h5>Organic sunscreens, part 2: cinnamates and PABAs (DPAW slide 63)</h5>
<p><b>On the slide.</b> Both classes absorb UVB (280-315 nm).</p>
<ul>
<li><b>Cinnamates:</b> octinoxate and cinoxate. Octinoxate is the only one drawn: a 4-methoxycinnamate 2-ethylhexyl ester. The handwritten notes beside it say absorbed through skin and photodegradation half-life (t1/2) 1-2 hours.</li>
<li><b>PABAs (p-aminobenzoic acids):</b> PABA (&ldquo;rarely used&rdquo; on the slide) and padimate O. The drawing shows PABA and, beside it, its 2-ethylhexyl ester. The handwritten notes read &ldquo;rarely used&rdquo; and &ldquo;some ppl have allergies&rdquo;.</li>
</ul>
<p>Two drawbacks decide the choice here. Octinoxate passes into the skin, and it breaks down within 1-2 hours of light exposure. PABA and padimate O are UVB absorbers that are rarely used because of PABA allergy; he added photosensitivity but said he would give just PABA allergy as the reason. He did not name cinoxate in the lecture; it appears only as a bullet on the slide.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;So octocinome. Uh, Problem Absorbed Through Skin Limitation. OK. The photo degradation. 1 to 2 hours.&rdquo; [he said &lsquo;octocinome&rsquo;: octinoxate] <span class="g2-src">11/04 T@41651-41752</span></p>
<p>&ldquo;these are even rarely used. OK. Why? Because some, some people are allergic to paba. Paba. Paraaminobenzoic acid. Allergies.&rdquo; <span class="g2-src">11/04 T@41911-42035</span></p>
<p>&ldquo;these two are going to be rarely used. Because of that OK, so these are UVB absorbers.&rdquo; [&lsquo;these two&rsquo;: padimate (he said &lsquo;pardiment&rsquo;) and PABA] <span class="g2-src">11/04 T@42147-42233</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 KX-017 S4-103 S4-104 S4-111 S4H-028 S4H-032 XS-003" data-qlabel="DPAW slide 63">Practice these (8)</button></div>
</div>
<div class="gpt"><h5>Organic sunscreens, part 3: salicylates and benzimidazoles (DPAW slide 64) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> Both classes absorb UVB (280-315 nm).</p>
<ul>
<li><b>Salicylates</b> absorb UVB and, the slide says, provide analgesia (pain relief): homosalate and octisalate. Both are drawn as esters of salicylic acid. The handwritten notes say they are supposed to be photostable (suggestion) and that they give you salicylic acid.</li>
<li><b>Benzimidazoles:</b> ensulizole, drawn as 2-phenylbenzimidazole-5-sulfonic acid. The handwritten notes read more photostable, t1/2 = 12 hrs, log P = 1, water soluble.</li>
</ul>
<p>Salicylates are esters, so they can be hydrolyzed to salicylic acid. His caution about their photostability was a question mark: a suggestion, not a settled fact. The &ldquo;more photostable&rdquo; note belongs to ensulizole, which he called more photostable than anything seen so far. For ensulizole, the sulfonic acid makes it water soluble, so the product has to be reapplied after the person comes out of water. The 12 h figure is its photodegradation half-life.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;And the other advantage was that they were supposed, they provide analgesia&rdquo; <span class="g2-src">11/04 T@42327-42402</span></p>
<p>&ldquo;They are esters, right, so they can undergo hydrolysis to give you salicylic acid.&rdquo; <span class="g2-src">11/04 T@42538-42620</span></p>
<p>&ldquo;So I said there is this suggestion that they are photo stable. But again, even that is what. Question mark.&rdquo; <span class="g2-src">11/04 T@42621-42728</span></p>
<p>&ldquo;This benzimidazole and Sulizo. It has a log P Of one It is water soluble. Photo degradation. Tea Half-Life? It's about 12 hours.&rdquo; [he said &lsquo;Sulizo&rsquo;: ensulizole] <span class="g2-src">11/04 T@42798-42926</span></p>
<p>&ldquo;So this is photo stable, right? More for the stable. Than anything that we've seen so far.&rdquo; <span class="g2-src">11/04 T@42927-43017</span></p>
<p>&ldquo;So, water soluble coming from that sulfonic acid. They need to reapply.&rdquo; <span class="g2-src">11/04 T@43273-43344</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 KX-017 KX-018 S4-071 S4-105 S4-106 S4-109 S4-111 S4H-021 S4H-030 S4H-031 S4H-032" data-qlabel="DPAW slide 64">Practice these (12)</button></div>
</div>
</section>

<section class="gobj" id="gobj-sk-17">
<h3>Dr. Sikazwe, assigned slides · Broad-coverage sunscreens: benzophenones, octocrylene, bemotrizinol</h3>
<div class="gbar"><span>Objective (DPAW slides 65, 66)</span><b>Know why octocrylene is co-formulated as an additive, why benzophenones are a worry for skin absorption, and why bemotrizinol shows low skin absorption (high molecular weight)</b><i>DPAW slide 65, 66</i></div>
<div class="gpt"><h5>Organic sunscreens, part 4: benzophenones and octocrylene (DPAW slide 65) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> These agents cover UVB and UVA.</p>
<ul>
<li><b>Benzophenones</b> absorb full UVB and considerable UVA: oxybenzone (benzophenone-3), sulisobenzone (benzophenone-4), dioxybenzone (benzophenone-8). Oxybenzone is drawn as 2-hydroxy-4-methoxybenzophenone.</li>
<li><b>Cinnamates</b> that absorb full UVB + UVA: octocrylene, a 2-ethylhexyl ester that carries a cyano group and two phenyl rings.</li>
</ul>
<p>The handwritten notes beside the oxybenzone drawing read log P = 4 and highly absorbed through skin. He said the same of the benzophenones: log P about 4, highly absorbed through the skin, which is the worry, because what the molecules do after that is not known. Octocrylene is the best performer for photostability (handwritten: very high photostability, t1/2 = 90 hrs) and is lipophilic and oily, so it stays on the skin after swimming. The note beside it says it is used as an additive sunscreen: it is co-formulated with other sunscreens, such as oxybenzone, to give them photostability.</p>
<p>The ADMET line on the slide reads: lipophilic, with &ldquo;hydrophilic&rdquo; struck through; esters hydrolyze to inactive acids that are eliminated in urine. He said to remove &ldquo;hydrophilic&rdquo; because it was misleading, so the line reads just lipophilic. He said octocrylene is an ester: some of it may get into the systemic circulation, but it is hydrolyzed.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;So we find benzophenones. Yeah Log P About 4. Hi absorbed. Through skin. That's a worry, right? Highly absorbed through the skin.&rdquo; <span class="g2-src">11/04 T@43565-43694</span></p>
<p>&ldquo;So, okrele. has come on the market. This is the best performing in terms of photo stability, very high. Photo Stability Tea have about. 90 hours.&rdquo; [he said &lsquo;okrele&rsquo;: octocrylene] <span class="g2-src">11/04 T@43941-44086</span></p>
<p>&ldquo;Aside from it doing its own thing, it's also providing photo stability to the other components in there.&rdquo; <span class="g2-src">11/04 T@44752-44856</span></p>
<p>&ldquo;So, this is used. Or co-formulated with us as An additive. Sunscreen. Very important.&rdquo; <span class="g2-src">11/04 T@44526-44611</span></p>
<p>&ldquo;So this, this one is a nester. Some of it may get into systemic circulation, but you get hydrolyzed.&rdquo; [he said &lsquo;nester&rsquo;: an ester] <span class="g2-src">11/04 T@44989-45089</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-016 S4-107 S4-108 S4-109 S4-111 S4H-027 S4H-028 S4H-029 S4H-030 S4H-031" data-qlabel="DPAW slide 65">Practice these (10)</button></div>
</div>
<div class="gpt"><h5>Organic sunscreens, part 5: bemotrizinol (DPAW slide 66) <span class="g2-star" title="Likely on the exam">&#9733;</span></h5>
<p><b>On the slide.</b> Methoxybenzene and triazines absorb UVB and UVA. The example is bemotrizinol (BEMT), drawn as a 1,3,5-triazine core carrying two 2-hydroxyphenyl rings with 2-ethylhexyloxy chains and a 4-methoxyphenyl. The notes read: photostable, t1/2 = 4-8 hrs, low skin absorption, a molecule that came from Europe. The typed ADMET line: photostable, lipophilic but no skin absorption due to high MW (molecular weight, 627.81).</p>
<p>The reason for the low absorption is size: a molecule this large (627.81) does not pass into the skin well, even though it is lipophilic. That is a property to weigh before recommending a product, which is how he said to read these agents.</p>
<p><b>Conflict, &ldquo;no&rdquo; versus &ldquo;low&rdquo; skin absorption.</b> The typed slide line says no skin absorption. The handwriting and his words say low skin absorption (he corrected himself aloud). An exam written from his lecture keys low skin absorption because of the high molecular weight; the existing items do not ask the difference between no and low.</p>
<div class="g2-said"><span class="g2-k">He said</span>
<p>&ldquo;Now, there's a molecule that came from Europe. This one. Very useful molecule. It's photo stable. And he have. About 4 to 8 hours. All right? And, sorry, law. Skin Absorption.&rdquo; [he said &lsquo;law&rsquo;: low] <span class="g2-src">11/04 T@45123-45298</span></p>
<p>&ldquo;So, they say this low skin absorption for this one is because it's, this is a high molecular weight molecule.&rdquo; <span class="g2-src">11/04 T@45549-45658</span></p>
</div>
<p class="g2-p"><b>Practice</b></p>
<div class="g2-btns"><button type="button" class="chip g2-primary" data-qids="KX-018 S4-110 S4-111 S4H-029 S4H-030 S4H-031" data-qlabel="DPAW slide 66">Practice these (6)</button></div>
</div>
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

/* ==========================================================================
   GUIDES: one section per learning objective, grouped by slide deck
   ==========================================================================
   Order (Louis, 2026-11-08): Dr. Smith's Skin Pathophysiology deck (her five
   objectives, slide 3), her Skin Pharmacology deck (five objectives, slide 3),
   her sun-exposure deck (five objectives, slide 6, plus the psoralen slides
   2-4), then Dr. Sikazwe's DPAW deck (his objectives, p. 3), section by
   section over his assigned pages for Exam 1 (11/06).

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
<h3>Skin Pathophysiology &middot; Objective 1: basic structures and functions of the skin</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Describe the basic structures and functions of the skin</b><i>PP 4&ndash;6</i></div>
<div class="gpt"><h5>Layers and keratinocytes (PP 5)</h5><ul><li>Epidermis (outer), dermis (middle; vessels and nerves), hypodermis (inner; vessels, adipose, some nerve endings) (T 32&ndash;37).</li><li>Keratinocytes start cuboidal in the stratum basale, move up, flatten, make keratin and lose the nucleus by the stratum corneum (T 39&ndash;48). The flat cells of the stratum corneum lie in overlapping layers that keep bacteria out and fluid in (T 48&ndash;54).</li></ul></div>
<div class="gpt"><h5>Sebum (PP 6)</h5><ul><li>Made by the sebaceous gland: glycerides, wax esters and cholesterol; retards water loss; most on face, scalp, back and neck.</li><li>(T) &ldquo;the most important thing to remember here is we have [sebum] produced by the sebaceous gland, and these cuboidal keratinocytes, they do move on up&rdquo; (T 78&ndash;80).</li></ul></div>
<div class="gtell"><b>Where each disease starts from this anatomy</b><ul><li>AD: a barrier defect in the epidermis (filaggrin, PP 15). Psoriasis: keratinocytes divide too fast and do not mature (PP 19, 23). Acne: the pilosebaceous unit, with more sebum (PP 30, 32).</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-2">
<h3>Skin Pathophysiology &middot; Objective 2: epidemiology of the three diseases</h3>
<div class="gbar"><span>Objective (PP 3)</span><b>Differentiate between the epidemiologic aspects of the three diseases</b><i>PP 10, 20, 31, 35</i></div>
<table class="reftab"><thead><tr><th style="width:18%">Disease</th><th>Incidence or prevalence, as each slide words it</th><th>Sex and age</th><th>Family and setting</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b> (PP 10)</td><td>Incidence in developed countries: 15&ndash;30% of children, 2&ndash;10% of adults; prevalence has increased over recent decades</td><td>Males and females alike</td><td>Lower in rural areas (hygiene hypothesis); goes with asthma and rhinitis (atopic conditions); two- to threefold risk with one atopic parent, three- to fivefold with two</td></tr>
<tr><td><b>Psoriasis</b> (PP 20)</td><td>About 3% of the US population; the most common immune-mediated inflammatory disease worldwide; varies with climate, sun exposure and ethnicity</td><td>Males and females equally; any age, but most patients have onset before 40</td><td>A genetic basis that probably needs environmental triggers; about 30% have a first-degree relative with it</td></tr>
<tr><td><b>Acne</b> (PP 31, 35)</td><td>Lifetime prevalence approaches 90%; the most common disease treated by dermatologists</td><td>Onset at puberty with androgens; ages 25&ndash;58: 12% of women, 3% of men; more severe in boys in puberty, in women in adulthood</td><td>81% likelihood if both parents had acne (PP 35)</td></tr>
</tbody></table>
<div class="gtell"><b>Tell apart</b><ul><li>3% is psoriasis; 15&ndash;30% of children is AD; about 90% lifetime is acne.</li><li>Family numbers: AD two- to threefold (one parent) and three- to fivefold (two); psoriasis about 30% first-degree relative; acne 81% with both parents.</li></ul></div>
</section>

<section class="gobj" id="gobj-l1-3">
<h3>Skin Pathophysiology &middot; Objective 3: etiologies and pathologies</h3>
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
<h3>Skin Pathophysiology &middot; Objective 4: classes of medications for each condition</h3>
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
<h3>Skin Pathophysiology &middot; Objective 5: general mechanisms of the drug classes</h3>
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
<h3>Skin Pharmacology &middot; Objective 1: which medications treat AD, psoriasis and acne</h3>
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
<h3>Skin Pharmacology &middot; Objective 2: general mechanism of each class, and why it helps</h3>
<div class="gbar"><span>Objective (PCol 3)</span><b>Explain the general mechanisms of action of each pharmacological drug class</b><i>PCol 5&ndash;76; Sun 3</i></div>
<div class="gpt"><h5>Nuclear receptor binders (PCol 5&ndash;7): corticosteroids, retinoids, vitamin D analog</h5><ul><li>The drug binds a receptor inside the cell; the complex acts directly at a response element or indirectly by binding NF-kB or AP-1, to promote or inhibit transcription.</li><li>(T) &ldquo;either enhance the expression of anti-inflammatory proteins, or decrease the expression of inflammatory proteins&rdquo; (T 680&ndash;683).</li></ul></div>
<!--DIA:nr-action-->
<div class="gpt"><h5><b>Corticosteroids</b> &middot; PCol 8&ndash;11</h5><ul><li><b>Target, mechanism:</b> Glucocorticoid receptor; CBG carries the steroid in blood; Hsp90 leaves the receptor when the steroid binds; the complex binds the GRE</li><li><b>Why it helps:</b> Immunosuppressive, so used for psoriasis and AD (PCol 11; T 873&ndash;875). Low potency (hydrocortisone 1%) for the face and for long-term maintenance; medium potency (betamethasone valerate 0.1%) for the body; mid-strength to high potency for short-term exacerbations; avoid occluded or abraded skin</li></ul></div>
<div class="gpt"><h5><b>Retinoids</b> (tretinoin, adapalene, tazarotene, isotretinoin, acitretin) &middot; PCol 14&ndash;15, 19</h5><ul><li><b>Target, mechanism:</b> RAR: differentiation and proliferation (acne, psoriasis, photoaging); RXR: apoptosis (Kaposi sarcoma)</li><li><b>Why it helps:</b> Acne: less cohesion between epidermal cells, faster turnover; open comedones expelled, closed ones opened. Psoriasis: precise mechanism unknown, may be anti-inflammatory and antiproliferative. Aging: more collagen, new vessels, thicker epidermis. Isotretinoin: appears to inhibit sebaceous gland size and function (PCol 19)</li></ul></div>
<div class="gpt"><h5><b>Vitamin D analog</b> (calcipotriene) &middot; PCol 21</h5><ul><li><b>Target, mechanism:</b> Vitamin D receptor, which pairs with RXR-&alpha;</li><li><b>Why it helps:</b> Inhibits proliferation, promotes keratinocyte differentiation, decreases inflammatory cytokine release (psoriasis)</li></ul></div>
<div class="gpt"><h5><b>Calcineurin inhibitors</b> (pimecrolimus, tacrolimus, cyclosporine) &middot; PCol 24&ndash;27</h5><ul><li><b>Target, mechanism:</b> Cyclosporine binds cyclophilin, tacrolimus binds FKBP; the complex inhibits calcineurin, so less IL-2 is made for T-cell proliferation (in the cascade after signals 1 and 2)</li><li><b>Why it helps:</b> Inhibits activation of T cells and mast cells, blocking proinflammatory cytokines and mediators; topical CNIs relieve pruritus after the first few days of treatment (PCol 27)</li><li><b>Uses of the class:</b> &ldquo;used to treat atopic dermatitis, psoriasis&rdquo; (Dr. Smith, PCol 24). The slide gives this for the class; the drug chart lists each drug&rsquo;s own indication.</li></ul></div>
<div class="gpt"><h5><b>PDE-4 inhibitors</b> (crisaborole, apremilast) &middot; PCol 32&ndash;34</h5><ul><li><b>Target, mechanism:</b> PDE-4, the main PDE isoform in inflammatory cells; cAMP is not broken down</li><li><b>Why it helps:</b> More cAMP inhibits mast cells, eosinophils, neutrophils and T cells (AD: crisaborole; psoriasis: apremilast)</li></ul></div>
<div class="gpt"><h5><b>Keratolytics</b> (benzoyl peroxide, sulfur, salicylic acid) &middot; PCol 35&ndash;39</h5><ul><li><b>Target, mechanism:</b> BPO: antimicrobial against P. acnes plus peeling and comedolytic (benzoic acid probable active form). Sulfur: reduced to hydrogen sulfide in keratinocytes; bacteriostatic. Salicylic acid: solubilizes the cell surface proteins that hold the stratum corneum together</li><li><b>Why it helps:</b> Break down keratin so cells slough, follicles stay open, plugs clear (acne)</li></ul></div>
<div class="gpt"><h5><b>Antibiotics/antimicrobials</b> &middot; PCol 42&ndash;50</h5><ul><li><b>Target, mechanism:</b> Tetracyclines: 30S, block aminoacyl-tRNA at the acceptor site. Clindamycin, macrolides: 50S, prevent translocation. All bacteriostatic. Sulfamethoxazole competes with PABA; trimethoprim inhibits bacterial DHFR. Dapsone (acne): anti-inflammatory, neutrophils a possible site</li><li><b>Why it helps:</b> A bacterium (P. acnes) contributes to acne (10/30 T 574&ndash;576); tetracycline efficacy in acne may depend more on anti-inflammatory activity (PCol 45)</li></ul></div>
<div class="gpt"><h5><b>Cytotoxic agents</b> (coal tar, anthralin, shale tar, selenium sulfide, zinc pyrithione) &middot; PCol 53&ndash;57</h5><ul><li><b>Target, mechanism:</b> Coal tar: antiproliferative, anti-inflammatory, crosslinks DNA. Anthralin: may act on keratinocyte mitochondria; prevents T-lymphocyte activation. Shale tar: unknown. Selenium sulfide, zinc pyrithione: cytostatic and antifungal</li><li><b>Why it helps:</b> Decrease the rate of epidermal cell turnover (psoriasis)</li></ul></div>
<div class="gpt"><h5><b>DHFR inhibitor</b> (methotrexate) &middot; PCol 59</h5><ul><li><b>Target, mechanism:</b> Folic acid analog; inhibits DHFR, so less THF and fewer purines; cell death; may be directly anti-inflammatory</li><li><b>Why it helps:</b> Reduces keratinocyte hyperproliferation and the number of T cells (psoriasis)</li></ul></div>
<div class="gpt"><h5><b>Co-stimulation inhibitor</b> (abatacept) &middot; PCol 63</h5><ul><li><b>Target, mechanism:</b> Fusion protein (CTLA-4 domain + IgG Fc) binds CD80/86 on APCs, so CD28 cannot bind</li><li><b>Why it helps:</b> Blocks the positive second signal needed for T-cell activation</li></ul></div>
<div class="gpt"><h5><b>IL-4R&alpha; antagonist</b> (dupilumab) &middot; PCol 64</h5><ul><li><b>Target, mechanism:</b> IL-4 receptor alpha subunit, shared by the IL-4 and IL-13 receptors</li><li><b>Why it helps:</b> IL-4 and IL-13 promote IgE synthesis; blocking lowers proinflammatory cytokines, chemokines and IgE (AD)</li></ul></div>
<div class="gpt"><h5><b>IL-17 inhibitors</b> (secukinumab, ixekizumab, brodalumab) &middot; PCol 65&ndash;66</h5><ul><li><b>Target, mechanism:</b> Secukinumab, ixekizumab: IL-17A cytokine. Brodalumab: IL-17 receptor A</li><li><b>Why it helps:</b> Keratinocytes are the main IL-17 target in psoriasis (hyperproliferation, barrier dysfunction); blocking reduces number and size of plaques</li></ul></div>
<div class="gpt"><h5><b>IL-12/23 and IL-23 inhibitors</b> (ustekinumab; guselkumab, tildrakizumab-asmn, risankizumab) &middot; PCol 67&ndash;69</h5><ul><li><b>Target, mechanism:</b> Ustekinumab: p40, shared by IL-12 and IL-23. The others: p19 of IL-23</li><li><b>Why it helps:</b> Suppress proinflammatory Th1 and Th17 cells; less release of proinflammatory cytokines and chemokines</li></ul></div>
<div class="gpt"><h5><b>TNF-&alpha; inhibitors</b> (etanercept, infliximab, adalimumab, golimumab, certolizumab pegol) &middot; PCol 70&ndash;74</h5><ul><li><b>Target, mechanism:</b> Bind TNF-&alpha;, keeping it from its receptors on inflammatory cells</li><li><b>Why it helps:</b> TNF-&alpha; is an inflammatory cytokine; blocking it reduces the number and size of plaques</li></ul></div>
<div class="gpt"><h5><b>JAK inhibitors</b> (tofacitinib, ruxolitinib, upadacitinib) &middot; PCol 75&ndash;76</h5><ul><li><b>Target, mechanism:</b> Inhibit Janus kinase; small molecules that get inside the cell (T 570&ndash;573)</li><li><b>Why it helps:</b> Inhibit the production of inflammatory cytokines</li></ul></div>
<div class="gpt"><h5><b>Psoralens</b> (methoxsalen + UVA) &middot; Sun 3; PCol 78</h5><ul><li><b>Target, mechanism:</b> With UV light of 320&ndash;340 nm, psoralens intercalate into DNA</li><li><b>Why it helps:</b> Antiproliferative, immunosuppressive, anti-inflammatory: normalizes keratinocytes, reorganizes blood vessels, cytotoxic to T cells; increases melanin</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-targets">Reference: drug targets, write it first</button><button type="button" class="chip" data-jump="tell:tell-l1-drugs">Tell apart: nuclear receptor binders</button></div>
</section>

<section class="gobj" id="gobj-pc-3">
<h3>Skin Pharmacology &middot; Objective 3: differences between drugs in the same class</h3>
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
<h3>Skin Pharmacology &middot; Objective 4: drug interactions discussed in class</h3>
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
<h3>Skin Pharmacology &middot; Objective 5: side effects, contraindications and boxed warnings</h3>
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
<h3>Sun Exposure &middot; Psoralen chromophores (Sun 2&ndash;4)</h3>
<div class="gbar"><span>Slides</span><b>Methoxsalen: mechanism, effects and side effects</b><i>Sun 3&ndash;4; PCol 78&ndash;79</i></div>
<div class="gpt"><ul>
<li>PUVA combines UVA light with a psoralen; with UV light of 320&ndash;340 nm the psoralen intercalates into DNA, so cells can no longer divide (Sun 3; audio 00:29&ndash;01:20).</li>
<li>Effects: normalizes the number and arrangement of keratinocytes; reorganizes cutaneous blood vessels; cytotoxic to T cells; increases melanin pigmentation (used for uneven pigmentation, not for psoriasis; audio 01:47&ndash;02:10) (Sun 3).</li>
<li>Side effects: pruritus, nausea, erythema and blistering, hyperpigmentation, increased skin aging, increased skin cancer risk, cataracts (Sun 4).</li></ul></div>
</section>

<section class="gobj" id="gobj-sun-1">
<h3>Sun Exposure &middot; Objective 1: types of ultraviolet radiation</h3>
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
<h3>Sun Exposure &middot; Objective 4: MED, SPF, broad spectrum and substantivity</h3>
<div class="gbar"><span>Objective (Sun 6)</span><b>Define MED, SPF and substantivity</b><i>Sun 12&ndash;17, 19</i></div>
<div class="gpt"><ul>
<li><b>MED</b>: the minimum single dose of UV radiation that produces clearly marginated erythema in the irradiated site (Sun 12).</li>
<li><b>SPF</b>: the ratio of the dose of sunlight that produces sunburn with the sunscreen to the dose that does without it. The higher the SPF, the less likely a burn and the longer the time in the sun. SPF is primarily a measure of UVB protection and says nothing about UVA (Sun 13).</li>
<li>SPF 15 blocks about 93% of UVB, SPF 30 about 97%, SPF 50 about 98% (Sun 15).</li>
<li><b>Broad spectrum</b>: UVA protection is tested by the critical wavelength method; a CW of 370 nm or more may be labeled &ldquo;broad spectrum&rdquo;; broad spectrum with SPF 15 or more may claim it &ldquo;decreases risk of skin cancer and early aging caused by the sun&rdquo; (Sun 14).</li>
<li>Selection: skin types I&ndash;II, SPF &gt; 30; lupus, SPF &gt; 40; photosensitizing drugs, SPF &gt; 45; skin types III&ndash;V, SPF 15&ndash;24. Apply the correct amount at the correct time; reapply every 90&ndash;120 minutes; adding a higher SPF after 1 MED does not help much (Sun 16&ndash;17).</li>
<li><b>Substantivity</b>: how well a sunscreen adheres and stays after water and sweat. Oils best (unpleasant); alcohols worst; creams better than alcohol bases; polyacrylamide bases good. Choose waterproof, water-resistant or sweat-resistant products (Sun 19).</li></ul></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="ref:ref-sun">Reference: SPF, skin types, substantivity</button><button type="button" class="chip" data-jump="tell:tell-sun">Tell apart: sun protection</button></div>
</section>

<section class="gobj" id="gobj-sun-2">
<h3>Sun Exposure &middot; Objectives 2, 3 and 5: sunblocks vs sunscreens, classes and mechanisms</h3>
<div class="gbar"><span>Objectives (Sun 6)</span><b>Categorize sunscreens and sunblocks; differentiate their mechanisms; differentiate sunblocks and sunscreens</b><i>Sun 20&ndash;25</i></div>
<table class="reftab"><thead><tr><th style="width:20%"></th><th>Sunblocks (physical sunscreens)</th><th>Organic sunscreens</th></tr></thead><tbody>
<tr><td><b>Ingredients</b></td><td>Zinc oxide, titanium dioxide (UVA and UVB)</td><td>Families: benzophenones, anthranilates, dibenzoylmethanes, aminobenzoates, cinnamates, salicylates; products may combine them</td></tr>
<tr><td><b>Mechanism</b></td><td>Inorganic particles scatter or reflect visible, UV and infrared radiation</td><td>Organic compounds absorb UVB and/or UVA and convert it to heat</td></tr>
<tr><td><b>Use and notes</b></td><td>Prominent areas (nose, ears) and where sun exposure cannot be limited; microsize and nanosize forms less opaque; not easily washed off but melt in hot sun; protection falls after 2 hours of direct sun</td><td>&mdash;</td></tr>
<tr><td><b>Side effects</b></td><td>May occlude pores (miliaria, folliculitis, acne); may stain clothing; less likely to irritate</td><td>Most have been linked to skin reactions; risk higher with PABA, avobenzone and oxybenzone</td></tr>
</tbody></table>
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
<h3>Sun Exposure &middot; Drugs that cause photosensitivity</h3>
<div class="gbar"><span>Slides</span><b>Photosensitizing drugs and sun protection</b><i>Sun 8, 17&ndash;18</i></div>
<div class="gpt"><ul>
<li>Sun 18 shows an APhA table of drug categories linked to photosensitivity; patients on such drugs need sun protection counseling (audio 17:27&ndash;17:48) and SPF &gt; 45 (Sun 17). UVA causes most drug phototoxic reactions (Sun 8).</li>
<li>Photosensitizing drugs on her pharmacology slides: tazarotene (PCol 18); topical retinoids (PCol 16); tetracyclines, with minocycline and sarecycline possibly less (PCol 44&ndash;45); coal tar (PCol 54); calcipotriene, mild (PCol 22); psoralens (Sun 3).</li>
<li>Sun protection counseled for other reasons: adapalene is sun stable, but peeling still raises sunburn risk (10/30 T 122&ndash;130); topical pimecrolimus and tacrolimus carry a potential for local skin cancer (PCol 28). Shale tar is not photosensitizing (PCol 57).</li></ul></div>
</section>

<h2 class="gdeck" id="gdeck-mc">Dermatology Medicinal Chemistry (Dr. Sikazwe, DPAW, 11/03&ndash;11/04)</h2>

<section class="gobj" id="gobj-mc-0">
<h3>Medicinal Chemistry &middot; His objectives and the assigned pages</h3>
<div class="gbar"><span>Objectives (DPAW slide 3)</span><b>ASSESS: targets, drug classes. PLAN: CBDA, ADMET, functional groups and SAR, drug interactions</b><i>DPAW slide 3</i></div>
<div class="gpt"><ul>
<li>ASSESS: identify the therapeutic targets; identify, and pharmacologically and chemically classify, the drug classes and drugs (DPAW slide 3).</li>
<li>PLAN: the chemical and pharmacological basis of drug action (CBDA), indication and contraindication; ADMET and how it changes with patient factors; physicochemical properties, functional groups and SAR; drug interactions that may influence the plan (DPAW slide 3).</li>
<li>Assigned for Exam 1 (his list of 11/06): printed slides 7&ndash;9, 12, 15&ndash;22, 24&ndash;33, 42&ndash;54, 60&ndash;65, which are PDF pages 7&ndash;9, 12, 15&ndash;23, 25&ndash;34, 43&ndash;55, 61&ndash;66. Here, as in the questions, slides are numbered by PDF page, so the assigned slides are 7&ndash;9, 12, 15&ndash;23, 25&ndash;34, 43&ndash;55 and 61&ndash;66; the sections below follow them.</li></ul></div>
</section>

<section class="gobj" id="gobj-mc-ecz">
<h3>Medicinal Chemistry &middot; Eczema pharmacotherapy (DPAW slides 7&ndash;9)</h3>
<div class="gbar"><span>Pages</span><b>Crisaborole; ruxolitinib and upadacitinib</b><i>DPAW slides 7&ndash;9</i></div>
<div class="gpt"><ul>
<li>Crisaborole: a benzoxaborole (boron-based) soft drug, designed for predictable metabolism to inactive, harmless products; log P 3, accumulates in the dermis; t&frac12; 12 h. Spontaneous hydrolytic deboronation (no enzyme) &rarr; benzyl alcohol &rarr; ADH, then ALDH (two enzymes, no CYPs) &rarr; benzoic acid &rarr; SULT and UGT conjugates (Polleve-1, slide 9). CBDA: the boron coordinates Zn<sup>2+</sup> and Mg<sup>2+</sup> in the PDE4 active site (slide 7).</li>
<li>Ruxolitinib and upadacitinib: same pharmacological class (JAK inhibitors), different chemical classes (names not to be recalled). Ruxolitinib t&frac12; 3 h, CYP3A4/2C9, some active hydroxyl metabolites; upadacitinib t&frac12; 8&ndash;16 h, CYP3A4/2D6, no active metabolites; both log P about 2, kept in the skin by formulation (slide 8).</li></ul></div>
<div class="rxfig" id="rx-crisaborole"><!--DIA:rx-crisaborole--></div>
<div class="rxfig" id="cb-crisaborole"><!--DIA:cb-crisaborole--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-eczema">Atlas: eczema drugs</button><button type="button" class="chip" data-jump="tell:tell-s3">Tell apart: Sikazwe 11/03</button><button type="button" class="chip" data-jump="ref:ref-s3">Reference: Sikazwe 11/03</button></div>
</section>

<section class="gobj" id="gobj-mc-psotop">
<h3>Medicinal Chemistry &middot; Psoriasis: UV and topical agents (DPAW slides 12, 15&ndash;23, 25&ndash;29)</h3>
<div class="gbar"><span>Pages</span><b>UV; emollients and tars; anthralin; 8-MOP; glucocorticoids; vitamin D; limus drugs; retinoids</b><i>DPAW slides 12&ndash;29</i></div>
<div class="gpt"><h5>UV radiation (slides 12, 18, 62&ndash;63)</h5><ul><li>UVC 100&ndash;280 nm, blocked by ozone; UVB 280&ndash;315 nm, about 90% blocked by ozone, used with coal tar; UVA 315&ndash;400 nm (&ldquo;315 or 320&rdquo; depending on the source, 11/03 T 817&ndash;818), deepest, used in PUVA (slide 18: UVA 315&ndash;400 nm). Slides 62&ndash;63 print UVA 315&ndash;400 and UVB 280&ndash;315 nm.</li><li>Dr. Smith&rsquo;s numbers differ (Sun 8: UVB 290&ndash;320, UVA 320&ndash;400; PUVA 320&ndash;340, Sun 3). Each professor&rsquo;s numbers are the ones keyed in that professor&rsquo;s questions.</li></ul></div>
<div class="gpt"><h5>Emollients and tars (slides 15&ndash;16)</h5><ul><li>Petrolatum: linear hydrocarbons over 25 carbons, the most effective emollient; lanolin: fatty acid esters from wool grease, odor; dimethicone (linear Si&ndash;O) and cyclomethicone (cyclic Si&ndash;O): hypoallergenic, non-comedogenic. Emollients fill gaps between scales and prevent water loss.</li><li>Coal tar: phenols, PAHs, heterocycles; photosensitizing; used with UVB. Shale tar (ichthammol, from sedimentary rock) and wood tars (pine, birch, juniper): not photosensitizing.</li></ul></div>
<div class="gpt"><h5>Anthralin and 8-MOP (slides 17&ndash;19)</h5><ul><li>Anthralin (dithranol): a hydroxyanthrone; spontaneous autoxidation gives the anthranyl radical and superoxide anion, which act on keratinocyte mitochondria; brown anthralin products and carbon black stain; log P 4 (lipophilic).</li><li>8-MOP (methoxsalen): a furanocoumarin; intercalates into DNA and, with UVA, covalently crosslinks pyrimidine bases; partially inhibits CYP3A4.</li><li>Polleve-2 (slide 19): the two do not both act by autoxidation.</li></ul></div>
<div class="rxfig" id="rx-anthralin"><!--DIA:rx-anthralin--></div>
<div class="rxfig" id="rx-psoralen"><!--DIA:rx-psoralen--></div>
<div class="gpt"><h5>Glucocorticoids (slides 20&ndash;23, 25&ndash;26)</h5><ul><li>Steroid skeleton: four fused rings, A&ndash;C six-membered, D five-membered. Potency up with: C1&ndash;C2 double bond, 6&alpha;-halogen, 9&alpha;-halogen, 11&beta;-OH. &alpha; = hashed bond (away), &beta; = wedge (toward the viewer); numbering and orientation are independent (slides 20&ndash;22).</li><li>Six hydrogen bonds in the receptor: C3=O (two), 11&beta;-OH, 17&alpha;-OH, C20=O, C21-OH (slide 23).</li><li>Potency (slide 25): clobetasol propionate 0.05% super-potent; betamethasone dipropionate 0.05% potent; betamethasone valerate 0.1% medium; hydrocortisone acetate 0.5% and 1% low. Potency depends on structure, vehicle and concentration. The hydrocortisone-to-clobetasol arrow is a structural change, not metabolism.</li><li>Hydrocortisone (slide 26): under 15% absorbed through skin against 95% orally; t&frac12; 1&ndash;2 h (metabolism) but duration 8&ndash;12 h (protein binding); 11&beta;-HSD converts it to and from cortisone (11-ketone, inactive).</li></ul></div>
<div class="rxfig" id="rx-hydrocortisone"><!--DIA:rx-hydrocortisone--></div>
<div class="rxfig" id="cb-gc-potency"><!--DIA:cb-gc-potency--></div>
<div class="gpt"><h5>Vitamin D, limus drugs, retinoids (slides 27&ndash;29)</h5><ul><li>Calcitriol and calcipotriene: secosteroids; calcipotriene was meant to lose the calcium effect but still raises GI calcium absorption; hypercalcemia is the limiting factor (slide 27).</li><li>Pimecrolimus vs tacrolimus: both macrolide lactones and calcineurin inhibitors with similar cLogP (6.0, 5.8); pimecrolimus has high non-specific skin protein binding and stays in the skin (low systemic ADRs), tacrolimus low binding and enters the circulation; structure: Cl and ethyl (pimecrolimus) vs OH and allyl (tacrolimus) (slide 28).</li><li>Tazarotene: acetylenic (alkyne) retinoid, ethyl ester prodrug hydrolyzed by carboxylesterases to tazarotenic acid; with acitretin and isotretinoin for psoriasis (slide 29).</li></ul></div>
<div class="rxfig" id="rx-vitd"><!--DIA:rx-vitd--></div>
<div class="rxfig" id="cb-limus"><!--DIA:cb-limus--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-psoriasis-topical">Atlas: emollients, anthralin, psoralen</button><button type="button" class="chip" data-jump="atlas:at-a-glucocorticoids">Atlas: glucocorticoids</button><button type="button" class="chip" data-jump="atlas:at-a-vitamin-d">Atlas: vitamin D</button><button type="button" class="chip" data-jump="atlas:at-a-limus">Atlas: limus drugs</button><button type="button" class="chip" data-jump="tell:tell-s3">Tell apart: Sikazwe 11/03</button><button type="button" class="chip" data-jump="tell:tell-s4">Tell apart: Sikazwe 11/04</button></div>
</section>

<section class="gobj" id="gobj-mc-psosys">
<h3>Medicinal Chemistry &middot; Psoriasis: systemic agents (DPAW slides 30&ndash;34)</h3>
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
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-a-psoriasis-systemic">Atlas: retinoids and systemic agents</button><button type="button" class="chip" data-jump="atlas:at-a-features">Atlas: lactone and lactam</button><button type="button" class="chip" data-jump="ref:ref-s4">Reference: Sikazwe 11/04</button></div>
</section>

<section class="gobj" id="gobj-mc-acne">
<h3>Medicinal Chemistry &middot; Acne (DPAW slides 43&ndash;55)</h3>
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
<h3>Medicinal Chemistry &middot; Sunblocks and sunscreens (DPAW slides 61&ndash;66)</h3>
<div class="gbar"><span>Pages</span><b>Inorganic sunblocks and organic sunscreens by UV band</b><i>DPAW slides 61&ndash;66</i></div>
<table class="reftab"><thead><tr><th style="width:18%">Band</th><th>Agents and the point he made</th><th style="width:10%">Slide</th></tr></thead><tbody>
<tr><td><b>Sunblocks</b></td><td>Zinc oxide, titanium dioxide: reflect and scatter UVA and UVB; inert; large particles work better (nano forms are transparent and reflect less)</td><td>61</td></tr>
<tr><td><b>All organics</b></td><td>Chromophores absorb UV and convert it to heat; they photodegrade</td><td>62</td></tr>
<tr><td><b>UVA</b></td><td>Avobenzone (dibenzoylmethane): low skin absorption, photodegradation t&frac12; about 2 h. Meradimate (anthranilate): degrades faster than avobenzone</td><td>62</td></tr>
<tr><td><b>UVB</b></td><td>Octinoxate (cinnamate): absorbed through skin, t&frac12; 1&ndash;2 h. PABA, padimate O: PABA allergy. Homosalate, octisalate (salicylates): ester hydrolyzed to salicylic acid. Ensulizole (benzimidazole): water soluble, log P 1, t&frac12; about 12 h, reapply after swimming</td><td>63&ndash;64</td></tr>
<tr><td><b>UVB/UVA</b></td><td>Oxybenzone (benzophenone): log P about 4, highly absorbed through skin. Octocrylene: lipophilic, t&frac12; about 90 h, photostabilizes other sunscreens. Bemotrizinol: MW 627.81, limited skin absorption, photostable</td><td>65&ndash;66</td></tr>
</tbody></table>
<div class="rxfig" id="cb-salicylates"><!--DIA:cb-salicylates--></div>
<div style="display:flex;flex-wrap:wrap;gap:7px;margin:8px 0"><button type="button" class="chip" data-jump="atlas:at-b-sunscreens">Atlas: sunblocks and sunscreens</button><button type="button" class="chip" data-jump="guide:gobj-sun-2">Guide: Dr. Smith's sunblocks vs sunscreens</button></div>
</section>

<section class="gobj" id="gobj-mc-ddi">
<h3>Medicinal Chemistry &middot; Drug interactions he named</h3>
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
@media (prefers-reduced-motion: reduce){.deckbtn .deckchev i{transition:none}}`;
  const addCss = () => {
    if (document.getElementById('deckcss')) return;
    const s = document.createElement('style'); s.id = 'deckcss'; s.textContent = CSS; document.head.appendChild(s);
  };

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
    } catch (err) { /* the list stays as the core drew it */ }
    return r;
  };
})();

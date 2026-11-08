const REFERENCE_HTML = `
<h2>Reference</h2>
<p class="sub">The tables the questions keep coming back to, each with the slide it was copied from. The course drug chart is a guide only (course introduction deck). Nothing here is scored.</p>

<h3 id="ref-l1-classes">Skin Pathophysiology (Dr. Smith): drug classes by disease, slides 17, 28, 37</h3>
<table class="reftab"><thead><tr><th style="width:20%">Disease</th><th>Drug classes on the slide</th><th style="width:16%">Slide</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b></td><td>Corticosteroids; calcineurin inhibitors; PDE-4 inhibitor; IL-4 receptor alpha/IL-13 receptor antagonists; JAK inhibitor</td><td>Pathophys 17</td></tr>
<tr><td><b>Psoriasis</b></td><td>Corticosteroids; DNA synthesis inhibitors; dihydrofolate reductase inhibitor/T-cell and cytokine suppressors; T-cell inhibitors; TNF-alpha inhibitors; JAK inhibitors; IL-12 &amp; IL-13 inhibitors (as printed; see note); IL-23 inhibitor; IL-17A inhibitor; nuclear receptor binders; psoralens; calcineurin inhibitors; cytotoxic agents</td><td>Pathophys 28</td></tr>
<tr><td><b>Acne</b></td><td>Keratolytics; antibiotics; nuclear receptor binders; antiandrogens</td><td>Pathophys 37</td></tr>
</tbody></table>
<p class="prose">Note: slide 28 prints "IL-12 &amp; IL-13 inhibitors"; slide 21 names IL-23, not IL-13, among the psoriasis cytokines, and the drug chart lists ustekinumab as an IL-12 &amp; IL-23 inhibitor. No question keys on this line until it is settled.</p>

<h3 id="ref-l1-acnemap">Skin Pathophysiology (Dr. Smith): acne pathology and the drugs aimed at it, slide 36</h3>
<table class="reftab"><thead><tr><th style="width:28%">Component</th><th>Drugs in the figure</th></tr></thead><tbody>
<tr><td><b>P. acnes proliferation</b></td><td>Benzoyl peroxide; topical/oral antibiotics; isotretinoin</td></tr>
<tr><td><b>Abnormal keratinization of follicle</b></td><td>Salicylic acid; benzoyl peroxide; topical retinoids; isotretinoin</td></tr>
<tr><td><b>Inflammatory response</b></td><td>Intralesional corticosteroids; oral corticosteroids; topical/oral antibiotics</td></tr>
<tr><td><b>Abnormal sebum</b></td><td>Antiandrogens; isotretinoin; topical/oral antibiotics; corticosteroids; estrogens (not covered in class, T 535–536)</td></tr>
</tbody></table>

<!--DIA:acne-cascade-->

<h3 id="ref-l1-nr">Skin Pharmacology (Dr. Smith): nuclear receptors for DEENT, slide 7</h3>
<table class="reftab"><thead><tr><th style="width:34%">Receptor</th><th>DNA binding site on the slide</th></tr></thead><tbody>
<tr><td><b>Glucocorticoid receptor</b></td><td>GRE, glucocorticoid response element</td></tr>
<tr><td><b>Retinoic acid receptors RAR/RXR</b></td><td>RARE, retinoic acid response element</td></tr>
<tr><td><b>Vitamin D receptor</b></td><td>Slide 7 lists TRE, transcription factor response element; see note</td></tr>
</tbody></table>
<p class="prose">Transcription factors that work with them: NF-kB and AP-1 (slide 7). Note: slide 21 of the same deck (taught 10/30) says the vitamin D receptor–RXR dimer binds vitamin D response elements; no question keys the vitamin D binding site until this is settled.</p>

<!--DIA:nr-action-->

<h3 id="ref-l1-steroids">Skin Pharmacology (Dr. Smith): topical corticosteroids, slide 11</h3>
<table class="reftab"><thead><tr><th style="width:30%">Situation</th><th>Potency on the slide</th></tr></thead><tbody>
<tr><td><b>Face</b></td><td>Low potency (hydrocortisone 1%)</td></tr>
<tr><td><b>Body</b></td><td>Medium potency (betamethasone valerate 0.1%)</td></tr>
<tr><td><b>Long-duration maintenance</b></td><td>Low potency</td></tr>
<tr><td><b>Short-term exacerbations</b></td><td>Mid-strength and high potency</td></tr>
</tbody></table>
<p class="prose">Specific steroid products and their potency classes belong to the medicinal chemistry lectures (T 585–587; syllabus: Sikazwe, Lectures 3–4).</p>

<h3 id="ref-l2">Skin Pharmacology (Dr. Smith): drugs on slides 16–42 (10/30)</h3>
<table class="reftab"><thead><tr><th>Drug</th><th>Class</th><th>Route</th><th>Use (this lecture)</th><th>Key adverse effects / counseling</th><th>Slide</th></tr></thead><tbody>
<tr><td><b>Tretinoin</b></td><td>Retinoid</td><td>Topical</td><td>Acne</td><td><span class="ln">&lt;10% absorbed</span><span class="ln">flare 4-6 wk</span><span class="ln">optimum 8-12 wk</span><span class="ln">microsphere form less irritating</span></td><td>16-17</td></tr>
<tr><td><b>Adapalene</b></td><td>Retinoid</td><td>Topical</td><td>Mild to moderate acne</td><td><span class="ln">Sun stable</span><span class="ln">with BPO (benzoyl peroxide)</span><span class="ln">less irritating than tretinoin</span></td><td>18</td></tr>
<tr><td><b>Tazarotene</b></td><td>Retinoid</td><td>Topical</td><td>Psoriasis, acne, wrinkles</td><td><span class="ln">Photosensitivity</span><span class="ln">contraceptive counseling</span><span class="ln">not in pregnancy</span></td><td>18</td></tr>
<tr><td><b>Isotretinoin</b></td><td>Retinoid</td><td>Oral</td><td>Severe cystic acne, recalcitrant</td><td><span class="ln">Dry skin/mucosa, lipids</span><span class="ln">skeletal hyperostosis in children</span><span class="ln">teratogen, iPLEDGE</span></td><td>19</td></tr>
<tr><td><b>Acitretin</b></td><td>Retinoid</td><td>Oral</td><td>Psoriasis, esp. pustular</td><td><span class="ln">Hepatotoxicity (fatal hepatitis)</span><span class="ln">half-life months</span><span class="ln">ethanol 2 mo</span><span class="ln">blood donation and pregnancy 3 yr</span></td><td>20</td></tr>
<tr><td><b>Calcipotriene</b></td><td>Vitamin D analog</td><td>Topical</td><td>Psoriasis</td><td><span class="ln">Burning/itching, atrophy, hyperpigmentation, folliculitis, mild photosensitivity</span><span class="ln">steroid reduces irritation</span><span class="ln">hypercalcemia/hypercalciuria &gt;100 g/week, resolves in days</span></td><td>21-22</td></tr>
<tr><td><b>Pimecrolimus</b></td><td>Calcineurin inhibitor</td><td>Topical</td><td>AD (atopic dermatitis; &gt;2 yr)</td><td><span class="ln">Burning</span><span class="ln">local carcinogenesis potential (sun protection)</span><span class="ln">infection if absorbed</span><span class="ln">stays in skin</span></td><td>27-28</td></tr>
<tr><td><b>Tacrolimus</b></td><td>Calcineurin inhibitor</td><td>Topical / oral</td><td>AD (topical)</td><td>Topical as above; oral: nephrotoxicity, HTN (hypertension), URTI (upper respiratory tract infection), neuropathies, CYP3A4</td><td>27-30</td></tr>
<tr><td><b>Cyclosporine</b></td><td>Calcineurin inhibitor</td><td>Oral</td><td>Severe psoriasis</td><td><span class="ln">Boxed: lymphoma/malignancy, infections</span><span class="ln">nephrotoxicity, HTN, gingival hyperplasia</span><span class="ln">CYP3A4</span><span class="ln">two formulations not interchangeable</span></td><td>29-30</td></tr>
<tr><td><b>Crisaborole</b></td><td>PDE-4 inhibitor</td><td>Topical 2% ointment</td><td>Mild to moderate AD, ≥2 yr</td><td>Site pain 4%; hypersensitivity &lt;1%, stop at once</td><td>33</td></tr>
<tr><td><b>Apremilast</b></td><td>PDE-4 inhibitor</td><td>Oral</td><td>Psoriasis</td><td><span class="ln">Diarrhea, nausea, headache, weight loss</span><span class="ln">caution in depression</span><span class="ln">avoid CYP3A4 enzyme inducers (10/30 T 470–472)</span></td><td>34</td></tr>
<tr><td><b>Benzoyl peroxide</b></td><td>Keratolytic</td><td>Topical</td><td>Acne</td><td><span class="ln">Irritation</span><span class="ln">potent contact sensitizer</span><span class="ln">avoid eyes/mucosa</span><span class="ln">oxidant bleaches hair/fabric</span></td><td>36-37</td></tr>
<tr><td><b>Sulfur</b></td><td>Keratolytic</td><td>Topical</td><td>Acne</td><td><span class="ln">Bacteriostatic</span><span class="ln">H2S</span><span class="ln">irritation, comedogenic, odor</span></td><td>38</td></tr>
<tr><td><b>Salicylic acid</b></td><td>Keratolytic</td><td>Topical</td><td>Acne (dandruff, psoriasis)</td><td><span class="ln">3-6%</span><span class="ln">&gt;6% damage</span><span class="ln">up to 40% warts/corns</span><span class="ln">salicylism (additive topical salicylates)</span><span class="ln">caution diabetes/PVD (peripheral vascular disease)</span></td><td>39-40</td></tr>
</tbody></table>

<h3 id="ref-l3">Skin Pharmacology (Dr. Smith): drugs on slides 43–76 (11/03)</h3>
<table class="reftab"><thead><tr><th>Drug</th><th>Class / make</th><th>Target or mechanism</th><th>Route (as taught)</th><th>Key adverse effect (AE) or warning</th><th>Slide</th></tr></thead><tbody>
<tr><td><b>Sarecycline, minocycline, doxycycline</b></td><td>Tetracyclines</td><td>30S; block aminoacyl-tRNA at acceptor site; bacteriostatic</td><td>Oral (acne)</td><td><span class="ln">GI N/V/D (nausea, vomiting, diarrhea), pseudomembranous colitis (stop if blood in stool), teeth/bone in young, photosensitivity, superinfection</span><span class="ln">not in pregnancy or under 8 y</span><span class="ln">minocycline ototoxicity.</span><span class="ln"><b class="lb">Slide 45:</b></span><span class="ln chain">analogs absorb better from the GI tract than tetracycline</span><span class="ln chain">doxycycline and minocycline more lipid soluble (enter the follicle better)</span><span class="ln chain">minocycline and sarecycline may be less photosensitizing</span><span class="ln chain">sarecycline narrower spectrum</span><span class="ln chain">acne efficacy may depend more on anti-inflammatory activity</span></td><td>43–45</td></tr>
<tr><td><b>Clindamycin</b></td><td>Lincosamide (chart)</td><td>50S; prevents translocation; bacteriostatic</td><td>Oral, topical</td><td><span class="ln">Pseudomembranous colitis, impaired liver function</span><span class="ln">~10% topical absorption</span><span class="ln">resistance</span></td><td>46</td></tr>
<tr><td><b>Erythromycin, azithromycin</b></td><td>Macrolides</td><td>50S; prevents translocation; bacteriostatic</td><td>Oral, topical</td><td><span class="ln">Oral N/V/D, epigastric pain, many drug interactions (metabolism)</span><span class="ln">topical burning/drying esp. with benzoyl peroxide</span><span class="ln">resistance</span></td><td>47</td></tr>
<tr><td><b>Trimethoprim/sulfamethoxazole</b></td><td>Sulfonamide/pyrimidine</td><td><span class="ln"><b class="lb">SMX (sulfamethoxazole):</b> PABA competition</span><span class="ln"><b class="lb">TMP (trimethoprim):</b> DHFR</span></td><td>—</td><td>— (not covered)</td><td>48–49</td></tr>
<tr><td><b>Dapsone</b></td><td>Sulfone</td><td><span class="ln"><b class="lb">Leprosy:</b> PABA antagonist</span><span class="ln"><b class="lb">acne:</b> anti-inflammatory (neutrophils), not fully understood</span></td><td>Topical gel (acne)</td><td>—</td><td>50</td></tr>
<tr><td><b>Metronidazole</b></td><td>Nitroimidazole</td><td>Unknown; Demodex brevis or neutrophil effect</td><td>Topical (rosacea)</td><td>Gel drying; cream/lotion better tolerated</td><td>51</td></tr>
<tr><td><b>Coal tar</b></td><td>Cytotoxic agent</td><td>Antiproliferative, anti-inflammatory, DNA crosslinking; phenolics antipruritic</td><td>Topical, OTC</td><td>Photosensitizing, carcinogenic; caution on oozing/vesicular skin</td><td>53–54</td></tr>
<tr><td><b>Anthralin</b></td><td>Cytotoxic agent; synthetic chrysarobin</td><td>Antiproliferative (mitochondria), prevents T-lymphocyte activation</td><td>Ointment, SCAT</td><td><span class="ln">Irritation, severe conjunctivitis, staining</span><span class="ln">no systemic AEs</span><span class="ln">avoid face and intertriginous areas</span></td><td>55–56</td></tr>
<tr><td><b>Shale tar (ichthammol)</b></td><td>Cytotoxic agent</td><td>Unknown</td><td>Topical; ear drops</td><td>Not photosensitizing; less irritating</td><td>57</td></tr>
<tr><td><b>Selenium sulfide, zinc pyrithione</b></td><td>Cytotoxic agents</td><td>Cytostatic and antifungal; MOA unknown</td><td>Shampoo</td><td>—</td><td>57</td></tr>
<tr><td><b>Methotrexate</b></td><td>DHFR (dihydrofolate reductase) inhibitor; folic acid analog</td><td><span class="ln">↓THF (tetrahydrofolate) → ↓purines, dTMP</span><span class="ln">↓T cells</span></td><td>Tablet</td><td><span class="ln">Cumulative liver toxicity (most significant)</span><span class="ln">rare blood dyscrasias (blood counts)</span><span class="ln">abortifacient, teratogenic</span><span class="ln">separate counting tray, gloves</span></td><td>59–61</td></tr>
<tr><td><b>Abatacept</b></td><td>Fusion protein (CTLA-4 ECD (extracellular domain) + human IgG Fc); inhibitor of co-stimulation</td><td><span class="ln">Binds CD80/86 on APC (antigen-presenting cell)</span><span class="ln">blocks positive signal 2</span></td><td>—</td><td>—</td><td>63</td></tr>
<tr><td><b>Dupilumab</b></td><td>Human IgG4 mAb (monoclonal antibody)</td><td>IL-4Rα (blocks IL-4 and IL-13)</td><td>SubQ</td><td>Nasopharyngitis, headache; eye effects can be dose limiting</td><td>64</td></tr>
<tr><td><b>Secukinumab</b></td><td>Human IgG1 mAb</td><td>IL-17A cytokine</td><td>SubQ</td><td>Infection (TB evaluation first), nasopharyngitis ~12%, Crohn's exacerbation</td><td>66</td></tr>
<tr><td><b>Ixekizumab</b></td><td>Humanized IgG4 mAb</td><td>IL-17A cytokine</td><td>—</td><td>—</td><td>66</td></tr>
<tr><td><b>Brodalumab</b></td><td>Human IgG2 mAb</td><td>IL-17RA receptor</td><td>—</td><td>—</td><td>66</td></tr>
<tr><td><b>Ustekinumab</b></td><td>Human mAb</td><td>p40 of IL-12 and IL-23; ↓Th1/Th17</td><td>SubQ</td><td><span class="ln">URTI most common</span><span class="ln">serious allergy (do not re-give)</span><span class="ln">serious infection (TB evaluation)</span><span class="ln">live vaccines: stop ≥15 wk before, resume ≥2 wk after</span><span class="ln">malignancy</span><span class="ln">posterior leukoencephalopathy</span></td><td>67</td></tr>
<tr><td><b>Guselkumab</b></td><td>Human IgG1λ mAb</td><td>p19 of IL-23</td><td>—</td><td>—</td><td>68</td></tr>
<tr><td><b>Tildrakizumab-asmn</b></td><td>Humanized IgG1κ mAb</td><td>p19 of IL-23</td><td>—</td><td>—</td><td>68</td></tr>
<tr><td><b>Risankizumab</b></td><td>Humanized IgG1 mAb</td><td>p19 of IL-23</td><td>SubQ or IV</td><td>Severe infection, TB reactivation, skin cancer (less common)</td><td>69</td></tr>
<tr><td><b>TNF-α inhibitor class</b></td><td>—</td><td><span class="ln">Bind TNF-α, an inflammatory cytokine, keeping it from its receptors</span><span class="ln">fewer and smaller plaques</span></td><td>—</td><td><span class="ln"><b class="lb">BBW (black box warning):</b> serious infections</span><span class="ln">lymphoma and other malignancies (some fatal, reported in children and adolescents)</span></td><td>70</td></tr>
<tr><td><b>Etanercept</b></td><td>Fusion protein: two p75 soluble TNF receptors + human IgG1 Fc</td><td>TNF</td><td>SubQ</td><td>Injection site; case reports pancytopenia, demyelination</td><td>71</td></tr>
<tr><td><b>Infliximab</b></td><td>Chimeric mAb (mouse/human IgG1)</td><td>TNF</td><td>IV</td><td>Anti-drug antibodies (14–40%, slide), infusion reactions (premedicate), infection, lupus-like syndrome</td><td>72</td></tr>
<tr><td><b>Adalimumab</b></td><td>Human IgG1 mAb</td><td>TNF</td><td>SubQ</td><td>Injection site, infection; less antigenic</td><td>73</td></tr>
<tr><td><b>Golimumab</b></td><td>Human mAb</td><td>TNF</td><td>—</td><td>—</td><td>74</td></tr>
<tr><td><b>Certolizumab pegol</b></td><td>Pegylated Fab of humanized mAb</td><td>TNF</td><td><span class="ln">SubQ q2w (every 2 weeks)</span><span class="ln">may extend to q4w (every 4 weeks) after 3 doses</span></td><td>URTI, rash, UTI</td><td>74</td></tr>
<tr><td><b>Tofacitinib</b></td><td>Small molecule JAK inhibitor</td><td>JAK</td><td>Oral</td><td>BBW severe infection, lymphoma, other malignancy; caution GI perforation</td><td>76</td></tr>
<tr><td><b>Ruxolitinib</b></td><td>Small molecule JAK inhibitor</td><td>JAK1, JAK2</td><td>Topical and oral (slide 76); see conflict</td><td>—</td><td>76</td></tr>
<tr><td><b>Upadacitinib</b></td><td>Small molecule JAK inhibitor</td><td>JAK1, JAK2, maybe JAK3/TYK2</td><td>—</td><td>—</td><td>76</td></tr>
</tbody></table>

<h3 id="ref-targets">Drug targets: write it first, then check</h3>
<p class="prose">Every drug on the course dermatology drug chart, in the chart's order of pages, with its target or mechanism as Dr. Smith's slides give it; each row opens to show it. Dr. Smith: "Be able to not just recognize a drugs target, but be able to write it down" (Exam 1 hints, 2026-11-07). The chart is a guide; the slides decide the content. The lice and scabies page (chart p. 7) is left out: Dr. Smith, 10/29: &ldquo;I don't cover these medications&rdquo; (T 590&ndash;593). Where a drug is not on her slides, the row says whose statement each part is (Dr. Sikazwe, or the chart). The Drug list tab shows these rows card by card.</p>
<h4>Atopic dermatitis (drug chart p. 2)</h4>
<table class="reftab"><thead><tr><th>Drug</th><th style="width:24%">Source</th></tr></thead><tbody>
<tr id="tgt-crisaborole"><td><details><summary><b>Crisaborole</b></summary><span class="tg">Phosphodiesterase 4 (PDE-4)</span>: <span class="mo">cAMP is not broken down, so inflammatory cells are inhibited</span></details></td><td>PCol 32–33; 10/30 T 430–450</td></tr>
<tr id="tgt-pimecrolimus"><td><details><summary><b>Pimecrolimus</b></summary><span class="tg">Calcineurin</span>: <span class="mo">less IL-2, less T-cell and mast cell activation</span></details></td><td>PCol 24–27; 10/30 T 360–365</td></tr>
<tr id="tgt-tacrolimus"><td><details><summary><b>Tacrolimus</b></summary><span class="tg">FKBP</span>; <span class="mo">the complex inhibits calcineurin</span></details></td><td>PCol 26</td></tr>
<tr id="tgt-dupilumab"><td><details><summary><b>Dupilumab</b></summary><span class="tg">IL-4 receptor alpha subunit, shared by the IL-4 and IL-13 receptors</span></details></td><td>PCol 64</td></tr>
<tr id="tgt-ruxolitinib"><td><details><summary><b>Ruxolitinib</b></summary><span class="tg">JAK1 and JAK2</span></details></td><td>PCol 76; T 574–576</td></tr>
<tr id="tgt-upadacitinib"><td><details><summary><b>Upadacitinib</b></summary><span class="tg">JAK</span>: <span class="mo">more potent at JAK1 and JAK2 than JAK3 and TYK2 in an enzyme assay; selectivity unsettled</span></details></td><td>PCol 76; T 576–578</td></tr>
</tbody></table>
<h4>Acne (drug chart p. 3)</h4>
<table class="reftab"><thead><tr><th>Drug</th><th style="width:24%">Source</th></tr></thead><tbody>
<tr id="tgt-bpo"><td><details><summary><b>Benzoyl peroxide</b></summary><span class="tg">Antimicrobial against P. acnes, plus peeling and comedolytic effects</span>; <span class="mo">benzoic acid is the probable active form</span></details></td><td>PCol 36</td></tr>
<tr id="tgt-sulfur"><td><details><summary><b>Sulfur</b></summary><span class="mo">Reduced to hydrogen sulfide in keratinocytes, which promotes peeling</span>; <span class="tg">bacteriostatic</span></details></td><td>PCol 38</td></tr>
<tr id="tgt-salicylic"><td><details><summary><b>Salicylic acid</b></summary><span class="tg">Solubilizes the cell surface proteins that keep the stratum corneum intact</span></details></td><td>PCol 39</td></tr>
<tr id="tgt-tetracyclines"><td><details><summary><b>Sarecycline, minocycline, doxycycline</b></summary><span class="tg">30S ribosomal subunit</span>: <span class="mo">blocks aminoacyl-tRNA binding at the acceptor site</span></details></td><td>PCol 43; T 27–31</td></tr>
<tr id="tgt-clindamycin"><td><details><summary><b>Clindamycin</b></summary><span class="tg">50S ribosomal subunit</span>: <span class="mo">prevents translocation</span></details></td><td>PCol 46; T 53–55</td></tr>
<tr id="tgt-macrolides"><td><details><summary><b>Erythromycin, azithromycin</b></summary><span class="tg">50S ribosomal subunit</span></details></td><td>PCol 47</td></tr>
<tr id="tgt-tmpsmx"><td><details><summary><b>Trimethoprim/sulfamethoxazole</b></summary><span class="mo">Sulfamethoxazole: competes with PABA, blocking dihydrofolic acid synthesis.</span> <span class="tg">Trimethoprim: bacterial dihydrofolate reductase</span></details></td><td>PCol 48–49</td></tr>
<tr id="tgt-dapsone"><td><details><summary><b>Dapsone</b></summary><span class="tg">Leprosy: PABA antagonist.</span> <span class="mo">Acne (topical gel): anti-inflammatory; neutrophils a possible site</span></details></td><td>PCol 50</td></tr>
<tr id="tgt-metronidazole"><td><details><summary><b>Metronidazole</b></summary><span class="tg">Unknown: may act on Demodex brevis or on neutrophil function</span></details></td><td>PCol 51</td></tr>
<tr id="tgt-topretinoids"><td><details><summary><b>Tretinoin, adapalene</b></summary><span class="tg">Retinoic acid receptors RAR and RXR</span> <span class="mo">(nuclear receptors; RAR–RXR binds the RARE)</span></details></td><td>PCol 14, 17–18</td></tr>
<tr id="tgt-isotretinoin"><td><details><summary><b>Isotretinoin</b></summary><span class="tg">Retinoid (RAR/RXR)</span>; <span class="mo">in cystic acne the mechanism is not known; appears to inhibit sebaceous gland size and function</span></details></td><td>PCol 14, 19</td></tr>
<tr id="tgt-spironolactone"><td><details><summary><b>Spironolactone</b></summary><span class="tg" data-by="smith" data-cite="Pathophys 37">Dr. Smith: antiandrogen (her slide gives the class for acne, not the drug's target or mechanism).</span> <span class="mo" data-by="sikazwe" data-cite="DPAW 53; 11/04 T@32150–32300">Dr. Sikazwe: diminishes testosterone biosynthesis.</span> Two lecturers' statements, kept apart.</details></td><td>Pathophys 37 (Smith); DPAW 53, 11/04 T@32150–32300 (Sikazwe)</td></tr>
</tbody></table>
<h4>Psoriasis (drug chart pp. 4–5)</h4>
<table class="reftab"><thead><tr><th>Drug</th><th style="width:24%">Source</th></tr></thead><tbody>
<tr id="tgt-coaltar"><td><details><summary><b>Coal tar</b></summary><span class="tg">Antiproliferative and anti-inflammatory</span>; <span class="mo">crosslinks DNA to inhibit cell division (mechanism not fully known)</span></details></td><td>PCol 53</td></tr>
<tr id="tgt-shaletar"><td><details><summary><b>Shale tar (ichthammol)</b></summary><span class="tg">Cytotoxic; mechanism unknown</span></details></td><td>PCol 57</td></tr>
<tr id="tgt-selzinc"><td><details><summary><b>Selenium sulfide, zinc pyrithione</b></summary><span class="tg">Cytostatic and antifungal; mechanism unknown</span></details></td><td>PCol 57</td></tr>
<tr id="tgt-anthralin"><td><details><summary><b>Anthralin</b></summary><span class="tg">Exact mechanism not known: may act on keratinocyte mitochondria</span>, <span class="mo">reducing mitotic activity; also prevents T-lymphocyte activation</span></details></td><td>PCol 55</td></tr>
<tr id="tgt-methotrexate"><td><details><summary><b>Methotrexate</b></summary><span class="tg">Dihydrofolate reductase (DHFR)</span>: <span class="mo">less THF, fewer purines</span></details></td><td>PCol 59; T 215–220</td></tr>
<tr id="tgt-abatacept"><td><details><summary><b>Abatacept</b></summary><span class="tg">CD80/86 on antigen-presenting cells</span>, <span class="mo">so CD28 cannot bind (blocks positive signal 2)</span></details></td><td>PCol 63; T 316–323</td></tr>
<tr id="tgt-tnf"><td><details><summary><b>Etanercept, adalimumab, infliximab, golimumab, certolizumab pegol</b></summary><span class="tg">TNF-α</span>, <span class="mo">kept from its receptors on inflammatory cells</span></details></td><td>PCol 70–74; T 493–495</td></tr>
<tr id="tgt-tofacitinib"><td><details><summary><b>Tofacitinib</b></summary><span class="tg">Janus kinase (JAK)</span></details></td><td>PCol 76</td></tr>
<tr id="tgt-ustekinumab"><td><details><summary><b>Ustekinumab</b></summary><span class="tg">p40 subunit shared by IL-12 and IL-23</span></details></td><td>PCol 67</td></tr>
<tr id="tgt-il23"><td><details><summary><b>Guselkumab, tildrakizumab-asmn, risankizumab</b></summary><span class="tg">p19 subunit of IL-23</span></details></td><td>PCol 68–69</td></tr>
<tr id="tgt-il17a"><td><details><summary><b>Secukinumab, ixekizumab</b></summary><span class="tg">IL-17A cytokine</span></details></td><td>PCol 66</td></tr>
<tr id="tgt-brodalumab"><td><details><summary><b>Brodalumab</b></summary><span class="tg">IL-17 receptor A</span></details></td><td>PCol 66; T 422</td></tr>
<tr id="tgt-acitazar"><td><details><summary><b>Acitretin, tazarotene</b></summary><span class="tg">Retinoic acid receptors RAR and RXR</span></details></td><td>PCol 14, 18, 20</td></tr>
<tr id="tgt-calcipotriene"><td><details><summary><b>Calcipotriene</b></summary><span class="tg">Vitamin D receptor (VDR)</span>, <span class="mo">which pairs with RXR-α</span></details></td><td>PCol 21</td></tr>
<tr id="tgt-methoxsalen"><td><details><summary><b>Methoxsalen</b></summary><span class="tg">DNA</span>: <span class="mo">intercalates after activation by UVA (320–340 nm)</span></details></td><td>PCol 78; Sun 3</td></tr>
<tr id="tgt-cyclosporine"><td><details><summary><b>Cyclosporine</b></summary><span class="tg">Cyclophilin</span>; <span class="mo">the complex inhibits calcineurin</span></details></td><td>PCol 26</td></tr>
<tr id="tgt-apremilast"><td><details><summary><b>Apremilast</b></summary><span class="tg">Phosphodiesterase 4 (PDE-4)</span>, <span class="mo">as crisaborole</span></details></td><td>PCol 34; 10/30 T 464–466</td></tr>
<tr id="tgt-petrolatum"><td><details><summary><b>Petrolatum</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 5">Emollient, no drug target (chart).</span> <span class="mo" data-by="sikazwe" data-cite="DPAW 15">Dr. Sikazwe: fills gaps between scales and prevents water loss</span></details></td><td>Chart p. 5; DPAW 15</td></tr>
<tr id="tgt-zincprot"><td><details><summary><b>Zinc oxide (skin protectant)</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 5">Physical sunscreen, no drug target (chart)</span>; <span class="mo" data-by="smith" data-cite="Sun 20">as a sunblock it scatters and reflects UV</span></details></td><td>Chart p. 5; Sun 20</td></tr>
<tr id="tgt-ketoconazole"><td><details><summary><b>Ketoconazole</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 5">Azole antifungal (chart).</span> <span class="mo" data-by="sikazwe" data-cite="DPAW 53">Dr. Sikazwe: diminishes testosterone biosynthesis; strong CYP3A4 inhibitor</span></details></td><td>Chart p. 5; DPAW 53</td></tr>
</tbody></table>
<h4>Topical steroids (drug chart p. 6)</h4>
<table class="reftab"><thead><tr><th>Drug</th><th style="width:24%">Source</th></tr></thead><tbody>
<tr id="tgt-steroids"><td><details><summary><b>Clobetasol propionate to hydrocortisone (all potency classes)</b></summary><span class="tg">Glucocorticoid receptor</span>; <span class="mo">the drug–receptor complex binds the GRE or holds NF-kB and AP-1 off the DNA</span></details></td><td>PCol 5–7, 10</td></tr>
</tbody></table>
<h4>Sun protection (drug chart p. 1)</h4>
<table class="reftab"><thead><tr><th>Drug</th><th style="width:24%">Source</th></tr></thead><tbody>
<tr id="tgt-padimate"><td><details><summary><b>Padimate O (octyl dimethyl PABA)</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 1">Organic sunscreen (aminobenzoate)</span>: <span class="mo" data-by="smith" data-cite="Sun 22, 24">absorbs UV, mainly UVB, and releases heat</span></details></td><td>Chart p. 1 (ingredient and family); Sun 22, 24</td></tr>
<tr id="tgt-octinoxate"><td><details><summary><b>Octyl methoxycinnamate</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 1">Organic sunscreen (cinnamate)</span>: <span class="mo" data-by="smith" data-cite="Sun 22">absorbs UV and releases heat</span></details></td><td>Chart p. 1 (ingredient and family); Sun 22, 24</td></tr>
<tr id="tgt-salicylates"><td><details><summary><b>Homosalate, 2-ethylhexyl salicylate</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 1">Organic sunscreen (salicylate)</span>: <span class="mo" data-by="smith" data-cite="Sun 22">absorbs UV and releases heat</span></details></td><td>Chart p. 1 (ingredient and family); Sun 22, 24</td></tr>
<tr id="tgt-benzophenones"><td><details><summary><b>Oxybenzone, dioxybenzone</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 1">Organic sunscreen (benzophenone)</span>: <span class="mo" data-by="smith" data-cite="Sun 22">absorbs UV and releases heat</span></details></td><td>Chart p. 1 (ingredient and family); Sun 22, 24</td></tr>
<tr id="tgt-anthranilate"><td><details><summary><b>Menthyl anthranilate</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 1">Organic sunscreen (anthranilate)</span>, <span class="mo" data-by="smith" data-cite="Sun 24">in combination products for broad coverage</span></details></td><td>Chart p. 1 (ingredient and family); Sun 22, 24</td></tr>
<tr id="tgt-avobenzone"><td><details><summary><b>Avobenzone</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 1">Organic sunscreen (dibenzoylmethane)</span>: <span class="mo" data-by="smith" data-cite="Sun 22">absorbs UV and releases heat</span></details></td><td>Chart p. 1 (ingredient and family); Sun 22, 24</td></tr>
<tr id="tgt-bemotrizinol"><td><details><summary><b>Bemotrizinol</b></summary><span class="tg" data-by="chart" data-cite="Chart p. 1">Organic chemical sunscreen (chart)</span>; <span class="mo" data-by="sikazwe" data-cite="DPAW 66">Dr. Sikazwe: UVB/UVA chromophore</span></details></td><td>Chart p. 1; DPAW 66</td></tr>
<tr id="tgt-sunblocks"><td><details><summary><b>Zinc oxide, titanium dioxide</b></summary><span class="tg">Physical sunblock</span>: <span class="mo">inorganic particles scatter or reflect UV (UVA and UVB)</span></details></td><td>Sun 20</td></tr>
<tr id="tgt-anesthetics" data-by="chart"><td><details><summary><b>Benzocaine, dibucaine, tetracaine, lidocaine</b></summary><span class="tg">Chart class: Na channel blockers (topical anesthetics for sunburn relief)</span>; not on her sun slides</details></td><td>Chart p. 1</td></tr>
</tbody></table>

<h3 id="ref-sun">Sun Exposure (Dr. Smith): SPF, skin types and substantivity, slides 15–19</h3>
<table class="reftab"><thead><tr><th style="width:30%">SPF</th><th>UVB blocked (slide 15)</th></tr></thead><tbody>
<tr><td><b>SPF 15</b></td><td>About 93%</td></tr>
<tr><td><b>SPF 30</b></td><td>About 97%</td></tr>
<tr><td><b>SPF 50</b></td><td>About 98%</td></tr>
</tbody></table>
<table class="reftab"><thead><tr><th style="width:14%">Skin type</th><th>Burning and tanning (slide 16)</th><th style="width:30%">SPF (slide 17)</th></tr></thead><tbody>
<tr><td><b>I</b></td><td>Always burns easily, never tans; blue or green eyes, blond or red hair</td><td rowspan="2">Over 30 (increased skin cancer risk)</td></tr>
<tr><td><b>II</b></td><td>Always burns easily, tans minimally; blue, hazel or brown eyes, blond, red or brown hair</td></tr>
<tr><td><b>III</b></td><td>Sometimes burns, tans gradually</td><td rowspan="3">15 to 24</td></tr>
<tr><td><b>IV</b></td><td>Burns minimally, always tans well</td></tr>
<tr><td><b>V</b></td><td>Rarely burns, tans profusely (brown skin)</td></tr>
<tr><td><b>VI</b></td><td>Never burns, deeply pigmented (black skin)</td><td>&mdash;</td></tr>
<tr><td><b>Lupus</b></td><td>&mdash;</td><td>Over 40</td></tr>
<tr><td><b>Photosensitizing drugs</b></td><td>&mdash;</td><td>Over 45</td></tr>
</tbody></table>
<p class="prose">Slide 17 also: start high and go low; adding a higher SPF after 1 MED will not help much; apply the correct amount at the correct time; reapply every 90&ndash;120 minutes.</p>
<table class="reftab"><thead><tr><th style="width:30%">Vehicle</th><th>Substantivity (slide 19)</th></tr></thead><tbody>
<tr><td><b>Oils</b></td><td>Best, but not pleasant dosage forms</td></tr>
<tr><td><b>Polyacrylamide bases</b></td><td>Good: not easily washed off</td></tr>
<tr><td><b>Creams</b></td><td>Better than alcohol-based vehicles</td></tr>
<tr><td><b>Alcohols</b></td><td>Worst</td></tr>
</tbody></table>
<p class="prose">Choose the best substantivity: waterproof, water-resistant or sweat-resistant products (slide 19).</p>

<h3 id="ref-s3">Dermatology Medicinal Chemistry (Dr. Sikazwe): DPAW slides 1–26 (11/03; slide = PDF page)</h3>
<table class="reftab"><thead><tr><th style="width:15%">Drug / agent</th><th style="width:17%">Chemical class</th><th>Key ADME / numbers</th><th style="width:24%">Chemical basis of drug action (CBDA)</th><th style="width:10%">Slide; T</th></tr></thead><tbody>
<tr><td><b>Crisaborole</b></td><td>Benzoxaborole (boron-based), soft drug</td><td><span class="ln"><b class="lb">log P:</b> 3, dermis accumulation</span><span class="ln"><b class="lb">Half-life (t1/2):</b> 12 h</span><span class="ln"><b class="lb">Metabolism:</b></span><span class="ln chain">spontaneous hydrolytic deboronation (non-enzymatic)</span><span class="ln chain">→ benzyl alcohol</span><span class="ln chain">→ benzoic acid, by alcohol dehydrogenase (ADH) then aldehyde dehydrogenase (ALDH)</span><span class="ln chain">→ sulfotransferase (SULT) / UDP-glucuronosyltransferase (UGT) conjugates</span></td><td>Boron coordinates Zn2+ and Mg2+ in PDE4 active site</td><td>7, 9; T 664-801<br><button type="button" class="chip" data-jump="guide:rx-crisaborole">Reaction: crisaborole metabolism</button></td></tr>
<tr><td><b>Ruxolitinib</b></td><td>Pyrrolopyrimidine <span class="nt">(name not to be recalled: Dr. Sikazwe)</span></td><td><span class="ln"><b class="lb">log P:</b> ~2 (spoken); formulated to stay in skin</span><span class="ln"><b class="lb">t1/2:</b> 3 h</span><span class="ln"><b class="lb">CYP (cytochrome P450):</b> 3A4/2C9 substrate</span><span class="ln"><b class="lb">Metabolites:</b> some active OH metabolites</span></td><td>(JAK inhibitor; MoA (mechanism of action) not tested)</td><td>8; T 729-757</td></tr>
<tr><td><b>Upadacitinib</b></td><td>Imidazopyrrolopyridine <span class="nt">(name not to be recalled: Dr. Sikazwe)</span></td><td><span class="ln"><b class="lb">log P:</b> ~2 (spoken)</span><span class="ln"><b class="lb">t1/2:</b> 8-16 h</span><span class="ln"><b class="lb">CYP:</b> 3A4/2D6 substrate</span><span class="ln"><b class="lb">Metabolites:</b> no active metabolites</span></td><td>(JAK inhibitor)</td><td>8; T 729-757</td></tr>
<tr><td><b>Petrolatum</b></td><td>Hydrocarbons, linear, &gt;25 C (carbons)</td><td>Most effective emollient</td><td>Palliative: fills scale gaps, prevents water loss</td><td>15; T 870-875</td></tr>
<tr><td><b>Lanolin</b></td><td>Fatty acid esters (wool grease)</td><td>Odor limits use</td><td>Palliative</td><td>15; T 876-881</td></tr>
<tr><td><b>Dimethicone / cyclomethicone</b></td><td>Silicone, linear / cyclic (pentamer) Si-O</td><td>Hypoallergenic, non-comedogenic</td><td>Palliative</td><td>15; T 882-889</td></tr>
<tr><td><b>Coal tar</b></td><td>Phenols, PAHs (polycyclic aromatic hydrocarbons), heterocycles</td><td>Photosensitizing; with UVB</td><td>MoA unknown, maybe antiproliferative</td><td>16; T 890-902</td></tr>
<tr><td><b>Shale tar (ichthammol)</b></td><td>From sedimentary rock</td><td>Non-photosensitizer</td><td>as tars</td><td>16; T 902-908</td></tr>
<tr><td><b>Wood tars</b></td><td>Pine, birch, juniper</td><td>Non-photosensitizing</td><td>as tars</td><td>16; T 908-911</td></tr>
<tr><td><b>Anthralin (dithranol)</b></td><td>Hydroxyanthrone (1915)</td><td><span class="ln"><b class="lb">log P:</b> 4 (deck only): lipophilic, excess goes systemic</span><span class="ln"><b class="lb">Formulation:</b> Lassar's paste; dendrimer/nano formulations improve PK (pharmacokinetics), DoA (duration of action)</span></td><td><span class="ln chain">Spontaneous autoxidation</span><span class="ln chain">→ anthranyl radical + superoxide anion</span><span class="ln chain">→ keratinocyte mitochondria</span><span class="ln"><b class="lb">Stain:</b> anthralin brown, carbon black = stain</span></td><td>17; T 918-953<br><button type="button" class="chip" data-jump="guide:rx-anthralin">Reaction: anthralin autoxidation</button></td></tr>
<tr><td><b>Methoxsalen (8-MOP)</b></td><td>Furanocoumarin</td><td><span class="ln"><b class="lb">log P:</b> 2 (deck only)</span><span class="ln"><b class="lb">CYP:</b> several CYPs; partially inhibits 3A4</span></td><td>Intercalates, UVA-activated covalent crosslink of DNA pyrimidine bases, decreased DNA synthesis</td><td>18; T 954-976<br><button type="button" class="chip" data-jump="guide:rx-psoralen">Reaction: psoralen + UVA crosslink</button></td></tr>
<tr><td><b>Glucocorticoids</b></td><td>Steroid: tetracyclic, rings A-C six-membered, D five-membered</td><td><span class="ln"><b class="lb">SAR (structure–activity relationship) up:</b></span><span class="ln">C1-C2 db (double bond)</span><span class="ln">6α-X</span><span class="ln">9α-X</span><span class="ln">11β-OH</span></td><td><span class="ln">6 hydrogen bonds in GR (glucocorticoid receptor):</span><span class="ln">(C3=O x2, 11β-OH, 17α-OH, C20=O, C21-OH)</span></td><td>20, 23; T 984-1139</td></tr>
<tr><td><b>Hydrocortisone</b></td><td>Natural cortisol; reference (parent)</td><td><span class="ln"><b class="lb">log P:</b> ~1.5 (spoken)</span><span class="ln"><b class="lb">Absorption:</b> &lt;15% skin vs 95% PO (by mouth)</span><span class="ln"><b class="lb">t1/2:</b> 1-2 h (metabolism)</span><span class="ln"><b class="lb">DoA:</b> 8-12 h (protein binding)</span><span class="ln"><b class="lb">Metabolism:</b> 11β-HSD (11β-hydroxysteroid dehydrogenase) ↔ cortisone (inactive)</span><span class="ln chain">5β-reductase</span><span class="ln chain">→ 5β-dihydrocortisol</span><span class="ln chain">→ 3α-HSD</span><span class="ln chain">→ urocortisol</span><span class="ln">cortisone, urocortisol in urine</span></td><td>GC (glucocorticoid) + MC (mineralocorticoid) activity</td><td>24-26; T 1139-1196<br><button type="button" class="chip" data-jump="guide:rx-hydrocortisone">Reaction: hydrocortisone metabolism</button></td></tr>
<tr><td><b>Potency examples</b></td><td>—</td><td><span class="ln"><b class="lb">Super-potent</b> clobetasol propionate 0.05%</span><span class="ln"><b class="lb">potent</b> betamethasone dipropionate 0.05%</span><span class="ln"><b class="lb">medium</b> betamethasone valerate 0.1%</span><span class="ln"><b class="lb">low</b> hydrocortisone acetate 0.5%/1%</span><span class="ln"><b class="lb">Bases:</b> structure, vehicle (propylene glycol), concentration</span></td><td>—</td><td>25; T 1154-1179</td></tr>
<tr><td><b>UVR</b> (ultraviolet radiation)</td><td>—</td><td><span class="ln"><b class="lb">UVC</b> 100-280</span><span class="ln"><b class="lb">UVB</b> from 280</span><span class="ln"><b class="lb">UVA</b> to 400 (from 315 or 320)</span><span class="ln">ozone blocks UVC and ~90% UVB</span><span class="ln">UVA deepest</span></td><td>—</td><td>12; T 810-839</td></tr>
</tbody></table>

<h3 id="ref-s4">Dermatology Medicinal Chemistry (Dr. Sikazwe): DPAW slides 27–71 (11/04; slide = PDF page)</h3>
<table class="reftab"><thead><tr><th>Drug / agent</th><th>Chemical class (deck)</th><th>Mechanism / CBDA (chemical basis of drug action)</th><th>Key PK (pharmacokinetics) / numbers</th><th>Caution</th><th>Slide</th></tr></thead><tbody>
<tr><td><b>Calcitriol, calcipotriene</b></td><td>Secosteroids (vitamin D analogs)</td><td>Antiproliferative</td><td>Raise GI calcium absorption</td><td>Hypercalcemia (limiting factor)</td><td>27<br><button type="button" class="chip" data-jump="guide:rx-vitd">Reaction: vitamin D3 activation</button></td></tr>
<tr><td><b>Pimecrolimus</b></td><td>Macrolide / lactone</td><td>Calcineurin inhibitor, ↓ cytokines</td><td><span class="ln">cLogP 6.0</span><span class="ln">high non-specific skin protein binding</span></td><td>Low systemic ADRs</td><td>28, 32</td></tr>
<tr><td><b>Tacrolimus</b></td><td>Macrolide / lactone</td><td>Calcineurin inhibitor</td><td><span class="ln">cLogP 5.8</span><span class="ln">low skin protein binding</span></td><td>Systemic entry</td><td>28</td></tr>
<tr><td><b>Tazarotene</b></td><td><span class="ln">Acetylenic (alkyne) retinoid</span><span class="ln">ethyl ester prodrug</span><span class="ln">3rd gen (generation)</span></td><td>RAR/RXR</td><td>CE (carboxylesterase) → tazarotenic acid</td><td>Teratogenic</td><td>29, 51<br><button type="button" class="chip" data-jump="guide:rx-tazarotene">Reaction: tazarotene to tazarotenic acid</button></td></tr>
<tr><td><b>Acitretin</b></td><td>2nd gen mono-aromatic retinoid</td><td>RAR/RXR</td><td>Active form of etretinate</td><td>Some teratogenicity</td><td>29, 50<br><button type="button" class="chip" data-jump="guide:rx-etretinate">Reaction: etretinate to acitretin</button></td></tr>
<tr><td><b>Isotretinoin</b></td><td>1st gen; 13-cis retinoic acid</td><td>RAR/RXR</td><td>Oral</td><td>Teratogenic</td><td>29, 49</td></tr>
<tr><td><b>Tretinoin</b></td><td>1st gen; all-trans retinoic acid</td><td>RAR/RXR</td><td>Topical; first retinoid for acne</td><td>Teratogenic</td><td>49, 70</td></tr>
<tr><td><b>Etretinate</b></td><td>2nd gen; ethyl ester prodrug</td><td>→ acitretin by CE</td><td><span class="ln"><b class="lb">Half-life (t1/2):</b> 120 days</span><span class="ln">highly lipophilic</span></td><td><span class="ln">Narrow TI (therapeutic index)</span><span class="ln">teratogenic</span><span class="ln">removed 1998</span></td><td>50<br><button type="button" class="chip" data-jump="guide:rx-etretinate">Reaction: etretinate to acitretin</button></td></tr>
<tr><td><b>Adapalene, trifarotene</b></td><td>3rd gen poly-aromatic</td><td>Directly active (exposed COOH)</td><td>Low systemic absorption</td><td>Teratogenic (class)</td><td>51</td></tr>
<tr><td><b>Methotrexate</b></td><td>Pteridine</td><td><span class="ln">Competitive DHFR (dihydrofolate reductase) inhibitor</span><span class="ln">also immunosuppressant, anti-inflammatory</span></td><td><span class="ln"><b class="lb">SAR (structure–activity relationship):</b> pteridine (aromatic), PABA, glutamic acid</span><span class="ln">no aromatic N-alkylation</span><span class="ln">N-CH3 essential</span></td><td>—</td><td>30–31<br><button type="button" class="chip" data-jump="guide:rx-folate">Reaction: folate reduction by DHFR</button></td></tr>
<tr><td><b>Cyclosporine</b></td><td>11 amino acid cyclic peptide (lactam)</td><td><span class="ln">Activated by cyclophilin complexation</span><span class="ln">inhibits calcineurin phosphatase, T-cell signaling</span></td><td><span class="ln"><b class="lb">F (bioavailability):</b> 30% (first pass by 3A4)</span><span class="ln"><b class="lb">log P:</b> 4</span><span class="ln"><b class="lb">t1/2:</b> 19 h</span></td><td>Grapefruit juice ↑ levels</td><td>33</td></tr>
<tr><td><b>Apremilast</b></td><td>Isoindoline</td><td>PDE4 inhibitor, ↑ cAMP</td><td><span class="ln chain">3A4 major (1A2, 2A6 minor) O-demethylation</span><span class="ln chain">→ O-glucuronide (UGT, UDP-glucuronosyltransferase)</span></td><td>Avoid 3A4 inhibitors/inducers</td><td>34<br><button type="button" class="chip" data-jump="guide:rx-apremilast">Reaction: apremilast metabolism</button></td></tr>
<tr><td><b>Tofacitinib</b></td><td>Pyrrolopyrimidine</td><td>JAK inhibitor</td><td><span class="ln">70% 3A4</span><span class="ln">13 metabolites</span></td><td><span class="ln">3A4 inhibitors/inducers</span><span class="ln">may be used with MTX (methotrexate)</span></td><td>35</td></tr>
<tr><td><b>Glycolic acid</b></td><td>Alpha-hydroxy acid</td><td>Keratolytic</td><td><span class="ln">pKa ~3, log P ~1, surface</span><span class="ln chain">ADH (alcohol dehydrogenase) + ALDH (aldehyde dehydrogenase)</span><span class="ln chain">→ diacid</span></td><td>Itching; higher conc. for deeper peels</td><td>43, 68<br><button type="button" class="chip" data-jump="guide:rx-hydroxyacids">Reaction: glycolic acid metabolism</button></td></tr>
<tr><td><b>Salicylic acid</b></td><td>Beta-hydroxy acid</td><td>Keratolytic; ↑ hydration</td><td><span class="ln">pKa ~3, log P ~1–2</span><span class="ln">75% glycine conjugation</span></td><td>Itching</td><td>43<br><button type="button" class="chip" data-jump="guide:rx-hydroxyacids">Reaction: salicylic acid conjugation</button></td></tr>
<tr><td><b>Sulfur</b></td><td>Element</td><td>Thiolysis of keratin disulfides (cysteine)</td><td>Small particle size</td><td>Allergies, smell</td><td>46</td></tr>
<tr><td><b>Benzoyl peroxide</b></td><td>Peroxide</td><td><span class="ln">↓ skin pH (benzoic acid)</span><span class="ln">+ free radical (benzoyl radical)</span></td><td><span class="ln"><b class="lb">log P:</b> 3.5</span><span class="ln">benzoic acid in urine</span></td><td>—</td><td>47<br><button type="button" class="chip" data-jump="guide:rx-bpo">Reaction: benzoyl peroxide breakdown</button></td></tr>
<tr><td><b>Ethinyl estradiol + norgestimate / drospirenone</b></td><td>Steroids</td><td>↓ sebum (OCs, oral contraceptives; females)</td><td>—</td><td>—</td><td>52</td></tr>
<tr><td><b>Spironolactone</b></td><td>Steroidal antiandrogen</td><td>↓ testosterone biosynthesis</td><td>—</td><td>—</td><td>53</td></tr>
<tr><td><b>Ketoconazole</b></td><td>Azole (non-steroid)</td><td>↓ testosterone biosynthesis</td><td>—</td><td>Strong CYP3A4 inhibitor</td><td>53</td></tr>
<tr><td><b>Flutamide</b></td><td>Non-steroidal antiandrogen</td><td>Blocks testosterone at its receptor</td><td>—</td><td>—</td><td>53</td></tr>
<tr><td><b>Azelaic acid</b></td><td>C9 dicarboxylic acid</td><td>Antibacterial, anti-inflammatory</td><td>—</td><td>—</td><td>54</td></tr>
<tr><td><b>Clindamycin</b></td><td>Lincomycin</td><td>—</td><td>Topical due to GI toxicity</td><td>—</td><td>54</td></tr>
<tr><td><b>Erythromycin</b></td><td>Macrolide</td><td>—</td><td>Poor PO absorption; unstable at pH ≤4</td><td>—</td><td>54</td></tr>
<tr><td><b>Tetracycline</b></td><td>Tetracycline (linear 4 rings)</td><td>Chelates Al3+, Ca2+, Mg2+, Fe3+, Zn3+ (as printed; zinc ion Zn2+), Bi3+</td><td><span class="ln">Food (dairy) cuts absorption</span><span class="ln"><b class="lb">t1/2:</b> 8.5 h</span></td><td>Bone/enamel staining, weakening</td><td>55</td></tr>
<tr><td><b>Doxycycline, minocycline</b></td><td>Tetracyclines</td><td>—</td><td><span class="ln">Food no effect</span><span class="ln">lipophilic</span><span class="ln"><b class="lb">t1/2:</b> 11–13 h, 14–22 h</span></td><td>Cross-allergy</td><td>55</td></tr>
<tr><td><b>Zinc oxide, titanium dioxide</b></td><td>Metal oxides</td><td>Reflect/scatter; UVA/UVB; inert</td><td>Large particles better</td><td>—</td><td>61</td></tr>
<tr><td><b>Avobenzone</b></td><td>Dibenzoylmethane (UVA)</td><td>Chromophore</td><td><span class="ln">Low skin absorption</span><span class="ln">photodeg. (photodegradation) t1/2 ~2 h</span></td><td>Reapply q2h (every 2 hours)</td><td>62</td></tr>
<tr><td><b>Meradimate</b></td><td>Anthranilate (UVA)</td><td>Chromophore</td><td>Degrades faster than avobenzone</td><td>—</td><td>62</td></tr>
<tr><td><b>Octinoxate</b></td><td>Cinnamate (UVB)</td><td>Chromophore</td><td>Absorbed through skin; t1/2 1–2 h</td><td>—</td><td>63</td></tr>
<tr><td><b>PABA, padimate O</b></td><td>PABAs (UVB)</td><td>Chromophore</td><td>—</td><td>PABA allergy (photosensitivity)</td><td>63</td></tr>
<tr><td><b>Homosalate, octisalate</b></td><td>Salicylates (UVB)</td><td><span class="ln">Chromophore</span><span class="ln">ester → salicylic acid (analgesia)</span></td><td>"supposed to be" photostable</td><td>—</td><td>64</td></tr>
<tr><td><b>Ensulizole</b></td><td>Benzimidazole (UVB)</td><td>Chromophore</td><td><span class="ln">log P 1, water soluble</span><span class="ln"><b class="lb">t1/2:</b> ~12 h</span></td><td>Reapply after swimming</td><td>64</td></tr>
<tr><td><b>Oxybenzone, sulisobenzone, dioxybenzone</b></td><td>Benzophenones (UVB/UVA)</td><td>Chromophore</td><td>log P ~4, highly absorbed</td><td>Absorption worry</td><td>65</td></tr>
<tr><td><b>Octocrylene</b></td><td>Cinnamate (UVB/UVA)</td><td><span class="ln">Chromophore</span><span class="ln">photostabilizer additive</span></td><td><span class="ln"><b class="lb">t1/2:</b> ~90 h</span><span class="ln">lipophilic</span></td><td>—</td><td>65</td></tr>
<tr><td><b>Bemotrizinol</b></td><td>Methoxybenzene &amp; triazine (UVB/UVA)</td><td>Chromophore</td><td><span class="ln"><b class="lb">MW (molecular weight):</b> 627.81</span><span class="ln">photostable t1/2 ~4–8 h</span></td><td>—</td><td>66</td></tr>
<tr><td><b>Hydroquinone</b></td><td>—</td><td>↓ melanin biosynthesis (tyrosinase)</td><td>Degrades to benzoquinone (colored, inactive)</td><td><span class="ln">Amber bottle</span><span class="ln">protect from light and O2</span></td><td>67</td></tr>
<tr><td><b>AHAs (glycolic, lactic, tartaric, malic, citric)</b></td><td>Hydroxy acids</td><td>Remove dead cells, ↑ collagen</td><td><b class="lb">Sources:</b> cane/beet, milk, grapes, apples/grapes</td><td>—</td><td>68</td></tr>
<tr><td><b>Hyaluronic acid</b></td><td>Endogenous mucopolysaccharide</td><td>Hygroscopic viscoelastic film</td><td><span class="ln">High MW surface, low MW deeper</span><span class="ln">declines with age</span></td><td>Non-antigenic</td><td>69</td></tr>
<tr><td><b>Topical retinoids (tretinoin, isotretinoin, tazarotene)</b></td><td>Retinoids</td><td>↑ skin collagen</td><td>—</td><td>Teratogenicity</td><td>70</td></tr>
</tbody></table>
`;

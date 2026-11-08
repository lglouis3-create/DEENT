const REFERENCE_HTML = `
<h2>Reference</h2>
<p class="sub">The tables the questions keep coming back to, each with the slide it was copied from. The course drug chart is a guide only (course introduction deck). Nothing here is scored.</p>

<h3 id="ref-l1-classes">Drug classes by disease (Smith, Lecture 1)</h3>
<table class="reftab"><thead><tr><th style="width:20%">Disease</th><th>Drug classes on the slide</th><th style="width:16%">Slide</th></tr></thead><tbody>
<tr><td><b>Atopic dermatitis</b></td><td>Corticosteroids; calcineurin inhibitors; PDE-4 inhibitor; IL-4 receptor alpha/IL-13 receptor antagonists; JAK inhibitor</td><td>Pathophys 17</td></tr>
<tr><td><b>Psoriasis</b></td><td>Corticosteroids; DNA synthesis inhibitors; dihydrofolate reductase inhibitor/T-cell and cytokine suppressors; T-cell inhibitors; TNF-alpha inhibitors; JAK inhibitors; IL-12 &amp; IL-13 inhibitors (as printed; see note); IL-23 inhibitor; IL-17A inhibitor; nuclear receptor binders; psoralens; calcineurin inhibitors; cytotoxic agents</td><td>Pathophys 28</td></tr>
<tr><td><b>Acne</b></td><td>Keratolytics; antibiotics; nuclear receptor binders; antiandrogens</td><td>Pathophys 37</td></tr>
</tbody></table>
<p class="prose">Note: slide 28 prints "IL-12 &amp; IL-13 inhibitors"; slide 21 names IL-23, not IL-13, among the psoriasis cytokines, and the drug chart lists ustekinumab as an IL-12 &amp; IL-23 inhibitor. No question keys on this line until it is settled.</p>

<h3 id="ref-l1-acnemap">Acne: pathology and the drugs aimed at it (Pathophys 36)</h3>
<table class="reftab"><thead><tr><th style="width:28%">Component</th><th>Drugs in the figure</th></tr></thead><tbody>
<tr><td><b>P. acnes proliferation</b></td><td>Benzoyl peroxide; topical/oral antibiotics; isotretinoin</td></tr>
<tr><td><b>Abnormal keratinization of follicle</b></td><td>Salicylic acid; benzoyl peroxide; topical retinoids; isotretinoin</td></tr>
<tr><td><b>Inflammatory response</b></td><td>Intralesional corticosteroids; oral corticosteroids; topical/oral antibiotics</td></tr>
<tr><td><b>Abnormal sebum</b></td><td>Antiandrogens; isotretinoin; topical/oral antibiotics; corticosteroids; estrogens (not covered in class, T 535–536)</td></tr>
</tbody></table>

<!--DIA:acne-cascade-->

<h3 id="ref-l1-nr">Nuclear receptors for DEENT (PCol 7)</h3>
<table class="reftab"><thead><tr><th style="width:34%">Receptor</th><th>DNA binding site on the slide</th></tr></thead><tbody>
<tr><td><b>Glucocorticoid receptor</b></td><td>GRE, glucocorticoid response element</td></tr>
<tr><td><b>Retinoic acid receptors RAR/RXR</b></td><td>RARE, retinoic acid response element</td></tr>
<tr><td><b>Vitamin D receptor</b></td><td>Slide 7 lists TRE, transcription factor response element; see note</td></tr>
</tbody></table>
<p class="prose">Transcription factors that work with them: NF-kB and AP-1 (slide 7). Note: slide 21 of the same deck (taught 10/30) says the vitamin D receptor–RXR dimer binds vitamin D response elements; no question keys the vitamin D binding site until this is settled.</p>

<!--DIA:nr-action-->

<h3 id="ref-l1-steroids">Topical corticosteroids (PCol 11)</h3>
<table class="reftab"><thead><tr><th style="width:30%">Situation</th><th>Potency on the slide</th></tr></thead><tbody>
<tr><td><b>Face</b></td><td>Low potency (hydrocortisone 1%)</td></tr>
<tr><td><b>Body</b></td><td>Medium potency (betamethasone valerate 0.1%)</td></tr>
<tr><td><b>Long-duration maintenance</b></td><td>Low potency</td></tr>
<tr><td><b>Short-term exacerbations</b></td><td>Mid-strength and high potency</td></tr>
</tbody></table>
<p class="prose">Specific steroid products and their potency classes belong to the medicinal chemistry lectures (T 585–587; syllabus: Sikazwe, Lectures 3–4).</p>

<h3 id="ref-l2">Lecture 2: Smith, 10/30 (Skin-PCol slides 16–42)</h3>
<table class="reftab"><thead><tr><th>Drug</th><th>Class</th><th>Route</th><th>Use (this lecture)</th><th>Key adverse / counseling</th><th>Slide</th></tr></thead><tbody>
<tr><td>Tretinoin</td><td>Retinoid</td><td>Topical</td><td>Acne</td><td>&lt;10% absorbed; flare 4-6 wk; optimum 8-12 wk; microsphere form less irritating</td><td>16-17</td></tr>
<tr><td>Adapalene</td><td>Retinoid</td><td>Topical</td><td>Mild to moderate acne</td><td>Sun stable; with BPO; less irritating than tretinoin</td><td>18</td></tr>
<tr><td>Tazarotene</td><td>Retinoid</td><td>Topical</td><td>Psoriasis, acne, wrinkles</td><td>Photosensitivity; contraceptive counseling; not in pregnancy</td><td>18</td></tr>
<tr><td>Isotretinoin</td><td>Retinoid</td><td>Oral</td><td>Severe cystic acne, recalcitrant</td><td>Dry skin/mucosa, lipids; skeletal hyperostosis in children; teratogen, iPLEDGE</td><td>19</td></tr>
<tr><td>Acitretin</td><td>Retinoid</td><td>Oral</td><td>Psoriasis, esp. pustular</td><td>Hepatotoxicity (fatal hepatitis); half-life months; ethanol 2 mo; blood donation and pregnancy 3 yr</td><td>20</td></tr>
<tr><td>Calcipotriene</td><td>Vitamin D analog</td><td>Topical</td><td>Psoriasis</td><td>Burning/itching, atrophy, hyperpigmentation, folliculitis, mild photosensitivity; steroid reduces irritation; hypercalcemia/hypercalciuria &gt;100 g/week, resolves in days</td><td>21-22</td></tr>
<tr><td>Pimecrolimus</td><td>Calcineurin inhibitor</td><td>Topical</td><td>AD (&gt;2 yr)</td><td>Burning; local carcinogenesis potential (sun protection); infection if absorbed; stays in skin</td><td>27-28</td></tr>
<tr><td>Tacrolimus</td><td>Calcineurin inhibitor</td><td>Topical / oral</td><td>AD (topical)</td><td>Topical as above; oral: nephrotoxicity, HTN, URTI, neuropathies, CYP3A4</td><td>27-30</td></tr>
<tr><td>Cyclosporine</td><td>Calcineurin inhibitor</td><td>Oral</td><td>Severe psoriasis</td><td>Boxed: lymphoma/malignancy, infections; nephrotoxicity, HTN, gingival hyperplasia; CYP3A4; two formulations not interchangeable</td><td>29-30</td></tr>
<tr><td>Crisaborole</td><td>PDE-4 inhibitor</td><td>Topical 2% ointment</td><td>Mild to moderate AD, ≥2 yr</td><td>Site pain 4%; hypersensitivity &lt;1%, stop at once</td><td>33</td></tr>
<tr><td>Apremilast</td><td>PDE-4 inhibitor</td><td>Oral</td><td>Psoriasis</td><td>Diarrhea, nausea, headache, weight loss; caution in depression; avoid strong CYP3A4 inducers</td><td>34</td></tr>
<tr><td>Benzoyl peroxide</td><td>Keratolytic</td><td>Topical</td><td>Acne</td><td>Irritation; potent contact sensitizer; avoid eyes/mucosa; oxidant bleaches hair/fabric</td><td>36-37</td></tr>
<tr><td>Sulfur</td><td>Keratolytic</td><td>Topical</td><td>Acne</td><td>Bacteriostatic; H2S; irritation, comedogenic, odor</td><td>38</td></tr>
<tr><td>Salicylic acid</td><td>Keratolytic</td><td>Topical</td><td>Acne (dandruff, psoriasis)</td><td>3-6%; &gt;6% damage; up to 40% warts/corns; salicylism (additive topical salicylates); caution diabetes/PVD</td><td>39-40</td></tr>
</tbody></table>

<h3 id="ref-l3">Lecture 3: Smith, 11/03 (Skin-PCol slides 43–76)</h3>
<table class="reftab"><thead><tr><th>Drug</th><th>Class / make</th><th>Target or mechanism</th><th>Route (as taught)</th><th>Key AE or warning</th><th>Slide</th></tr></thead><tbody>
<tr><td>Sarecycline, minocycline, doxycycline</td><td>Tetracyclines</td><td>30S; block aminoacyl-tRNA at acceptor site; bacteriostatic</td><td>Oral (acne)</td><td>GI N/V/D, pseudomembranous colitis (stop if blood in stool), teeth/bone in young, photosensitivity, superinfection; not in pregnancy or under 8 y; minocycline ototoxicity. Slide 45: analogs absorb better from the GI tract than tetracycline; doxycycline and minocycline more lipid soluble (enter the follicle better); minocycline and sarecycline may be less photosensitizing; sarecycline narrower spectrum; acne efficacy may depend more on anti-inflammatory activity</td><td>43–45</td></tr>
<tr><td>Clindamycin</td><td>Lincosamide (chart)</td><td>50S; prevents translocation; bacteriostatic</td><td>Oral, topical</td><td>Pseudomembranous colitis, impaired liver function; ~10% topical absorption; resistance</td><td>46</td></tr>
<tr><td>Erythromycin, azithromycin</td><td>Macrolides</td><td>50S; prevents translocation; bacteriostatic</td><td>Oral, topical</td><td>Oral N/V/D, epigastric pain, many drug interactions (metabolism); topical burning/drying esp. with benzoyl peroxide; resistance</td><td>47</td></tr>
<tr><td>Trimethoprim/sulfamethoxazole</td><td>Sulfonamide/pyrimidine</td><td>SMX: PABA competition; TMP: DHFR</td><td>—</td><td>— (not covered)</td><td>48–49</td></tr>
<tr><td>Dapsone</td><td>Sulfone</td><td>Leprosy: PABA antagonist; acne: anti-inflammatory (neutrophils), not fully understood</td><td>Topical gel (acne)</td><td>—</td><td>50</td></tr>
<tr><td>Metronidazole</td><td>Nitroimidazole</td><td>Unknown; Demodex brevis or neutrophil effect</td><td>Topical (rosacea)</td><td>Gel drying; cream/lotion better tolerated</td><td>51</td></tr>
<tr><td>Coal tar</td><td>Cytotoxic agent</td><td>Antiproliferative, anti-inflammatory, DNA crosslinking; phenolics antipruritic</td><td>Topical, OTC</td><td>Photosensitizing, carcinogenic; caution on oozing/vesicular skin</td><td>53–54</td></tr>
<tr><td>Anthralin</td><td>Cytotoxic agent; synthetic chrysarobin</td><td>Antiproliferative (mitochondria), prevents T-lymphocyte activation</td><td>Ointment, SCAT</td><td>Irritation, severe conjunctivitis, staining; no systemic AEs; avoid face and intertriginous areas</td><td>55–56</td></tr>
<tr><td>Shale tar (ichthammol)</td><td>Cytotoxic agent</td><td>Unknown</td><td>Topical; ear drops</td><td>Not photosensitizing; less irritating</td><td>57</td></tr>
<tr><td>Selenium sulfide, zinc pyrithione</td><td>Cytotoxic agents</td><td>Cytostatic and antifungal; MOA unknown</td><td>Shampoo</td><td>—</td><td>57</td></tr>
<tr><td>Methotrexate</td><td>DHFR inhibitor; folic acid analog</td><td>↓THF → ↓purines, dTMP; ↓T cells</td><td>Tablet</td><td>Cumulative liver toxicity (most significant); rare blood dyscrasias (blood counts); abortifacient, teratogenic; separate counting tray, gloves</td><td>59–61</td></tr>
<tr><td>Abatacept</td><td>Fusion protein (CTLA-4 ECD + human IgG Fc); inhibitor of co-stimulation</td><td>Binds CD80/86 on APC; blocks positive signal 2</td><td>—</td><td>—</td><td>63</td></tr>
<tr><td>Dupilumab</td><td>Human IgG4 mAb</td><td>IL-4Rα (blocks IL-4 and IL-13)</td><td>SubQ</td><td>Nasopharyngitis, headache; eye effects can be dose limiting</td><td>64</td></tr>
<tr><td>Secukinumab</td><td>Human IgG1 mAb</td><td>IL-17A cytokine</td><td>SubQ</td><td>Infection (TB evaluation first), nasopharyngitis ~12%, Crohn's exacerbation</td><td>66</td></tr>
<tr><td>Ixekizumab</td><td>Humanized IgG4 mAb</td><td>IL-17A cytokine</td><td>—</td><td>—</td><td>66</td></tr>
<tr><td>Brodalumab</td><td>Human IgG2 mAb</td><td>IL-17RA receptor</td><td>—</td><td>—</td><td>66</td></tr>
<tr><td>Ustekinumab</td><td>Human mAb</td><td>p40 of IL-12 and IL-23; ↓Th1/Th17</td><td>SubQ</td><td>URTI most common; serious allergy (do not re-give); serious infection (TB evaluation); live vaccines: stop ≥15 wk before, resume ≥2 wk after; malignancy; posterior leukoencephalopathy</td><td>67</td></tr>
<tr><td>Guselkumab</td><td>Human IgG1λ mAb</td><td>p19 of IL-23</td><td>—</td><td>—</td><td>68</td></tr>
<tr><td>Tildrakizumab-asmn</td><td>Humanized IgG1κ mAb</td><td>p19 of IL-23</td><td>—</td><td>—</td><td>68</td></tr>
<tr><td>Risankizumab</td><td>Humanized IgG1 mAb</td><td>p19 of IL-23</td><td>SubQ or IV</td><td>Severe infection, TB reactivation, skin cancer (less common)</td><td>69</td></tr>
<tr><td>TNF-α inhibitor class</td><td>—</td><td>Bind TNF-α, an inflammatory cytokine, keeping it from its receptors; fewer and smaller plaques</td><td>—</td><td>BBW: serious infections; lymphoma and other malignancies (some fatal, reported in children and adolescents)</td><td>70</td></tr>
<tr><td>Etanercept</td><td>Fusion protein: two p75 soluble TNF receptors + human IgG1 Fc</td><td>TNF</td><td>SubQ</td><td>Injection site; case reports pancytopenia, demyelination</td><td>71</td></tr>
<tr><td>Infliximab</td><td>Chimeric mAb (mouse/human IgG1)</td><td>TNF</td><td>IV</td><td>Anti-drug antibodies (14–40%, slide), infusion reactions (premedicate), infection, lupus-like syndrome</td><td>72</td></tr>
<tr><td>Adalimumab</td><td>Human IgG1 mAb</td><td>TNF</td><td>SubQ</td><td>Injection site, infection; less antigenic</td><td>73</td></tr>
<tr><td>Golimumab</td><td>Human mAb</td><td>TNF</td><td>—</td><td>—</td><td>74</td></tr>
<tr><td>Certolizumab pegol</td><td>Pegylated Fab of humanized mAb</td><td>TNF</td><td>SubQ q2w; may extend to q4w after 3 doses</td><td>URTI, rash, UTI</td><td>74</td></tr>
<tr><td>Tofacitinib</td><td>Small molecule JAK inhibitor</td><td>JAK</td><td>Oral</td><td>BBW severe infection, lymphoma, other malignancy; caution GI perforation</td><td>76</td></tr>
<tr><td>Ruxolitinib</td><td>Small molecule JAK inhibitor</td><td>JAK1, JAK2</td><td>Topical and oral (slide 76); see conflict</td><td>—</td><td>76</td></tr>
<tr><td>Upadacitinib</td><td>Small molecule JAK inhibitor</td><td>JAK1, JAK2, maybe JAK3/TYK2</td><td>—</td><td>—</td><td>76</td></tr>
</tbody></table>

<h3 id="ref-targets">Drug targets: write it first, then check</h3>
<p class="prose">Every drug on the course dermatology drug chart, in the chart's order of pages, with its target or mechanism as Dr. Smith's slides give it; each row opens to show it. Dr. Smith: "Be able to not just recognize a drugs target, but be able to write it down" (Exam 1 hints, 2026-11-07). The chart is a guide; the slides decide the content. The lice and scabies page (chart p. 7) is not in the Exam 1 lectures and is left out. Where a drug is not on her slides, the row says whose statement each part is (Dr. Sikazwe, or the chart). The Drug list tab shows these rows card by card.</p>
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

<h3 id="ref-s3">Lecture 3: Sikazwe, 11/03 (DPAW pages 1–26)</h3>
<table class="reftab"><thead><tr><th>Drug / agent</th><th>Chemical class</th><th>Key ADME / numbers</th><th>CBDA</th><th>Slide; T</th></tr></thead><tbody>
<tr><td>Crisaborole</td><td>Benzoxaborole (boron-based), soft drug</td><td>log P 3, dermis accumulation; t1/2 12 h; spontaneous hydrolytic deboronation (non-enzymatic) -&gt; benzyl alcohol -&gt; ADH, ALDH -&gt; benzoic acid -&gt; SULT / UGT conjugates</td><td>Boron coordinates Zn2+ and Mg2+ in PDE4 active site</td><td>7, 9; T 664-801</td></tr>
<tr><td>Ruxolitinib</td><td>Pyrrolopyrimidine (name not to be recalled)</td><td>log P ~2 (spoken); formulated to stay in skin; t1/2 3 h; 3A4/2C9 substrate; some active OH metabolites</td><td>(JAK inhibitor; MoA not tested)</td><td>8; T 729-757</td></tr>
<tr><td>Upadacitinib</td><td>Imidazopyrrolopyridine (name not to be recalled)</td><td>log P ~2 (spoken); t1/2 8-16 h; 3A4/2D6 substrate; no active metabolites</td><td>(JAK inhibitor)</td><td>8; T 729-757</td></tr>
<tr><td>Petrolatum</td><td>Hydrocarbons, linear, &gt;25 C</td><td>Most effective emollient</td><td>Palliative: fills scale gaps, prevents water loss</td><td>15; T 870-875</td></tr>
<tr><td>Lanolin</td><td>Fatty acid esters (wool grease)</td><td>Odor limits use</td><td>Palliative</td><td>15; T 876-881</td></tr>
<tr><td>Dimethicone / cyclomethicone</td><td>Silicone, linear / cyclic (pentamer) Si-O</td><td>Hypoallergenic, non-comedogenic</td><td>Palliative</td><td>15; T 882-889</td></tr>
<tr><td>Coal tar</td><td>Phenols, PAHs, heterocycles</td><td>Photosensitizing; with UVB</td><td>MoA unknown, maybe antiproliferative</td><td>16; T 890-902</td></tr>
<tr><td>Shale tar (ichthammol)</td><td>From sedimentary rock</td><td>Non-photosensitizer</td><td>as tars</td><td>16; T 902-908</td></tr>
<tr><td>Wood tars</td><td>Pine, birch, juniper</td><td>Non-photosensitizing</td><td>as tars</td><td>16; T 908-911</td></tr>
<tr><td>Anthralin (dithranol)</td><td>Hydroxyanthrone (1915)</td><td>log P 4 (deck only): lipophilic, excess goes systemic; Lassar's paste; dendrimer/nano formulations improve PK, DoA</td><td>Spontaneous autoxidation -&gt; anthranyl radical + superoxide anion -&gt; keratinocyte mitochondria; anthralin brown, carbon black = stain</td><td>17; T 918-953</td></tr>
<tr><td>Methoxsalen (8-MOP)</td><td>Furanocoumarin</td><td>log P 2 (deck only); several CYPs; partially inhibits 3A4</td><td>Intercalates, UVA-activated covalent crosslink of DNA pyrimidine bases, decreased DNA synthesis</td><td>18; T 954-976</td></tr>
<tr><td>Glucocorticoids</td><td>Steroid: tetracyclic, rings A-C six-membered, D five-membered</td><td>SAR up: C1-C2 db, 6α-X, 9α-X, 11β-OH</td><td>6 hydrogen bonds in GR (C3=O x2, 11β-OH, 17α-OH, C20=O, C21-OH)</td><td>20, 23; T 984-1139</td></tr>
<tr><td>Hydrocortisone</td><td>Natural cortisol; reference (parent)</td><td>log P ~1.5 (spoken); &lt;15% skin vs 95% PO; t1/2 1-2 h (metabolism); DoA 8-12 h (protein binding); 11β-HSD &lt;-&gt; cortisone (inactive); 5β-reductase -&gt; 5β-dihydrocortisol -&gt; 3α-HSD -&gt; urocortisol; cortisone, urocortisol in urine</td><td>GC + MC activity</td><td>24-26; T 1139-1196</td></tr>
<tr><td>Potency examples</td><td>—</td><td>Super-potent clobetasol propionate 0.05%; potent betamethasone dipropionate 0.05%; medium betamethasone valerate 0.1%; low hydrocortisone acetate 0.5%/1%. Bases: structure, vehicle (propylene glycol), concentration</td><td>—</td><td>25; T 1154-1179</td></tr>
<tr><td>UVR</td><td>—</td><td>UVC 100-280; UVB from 280; UVA to 400 (from 315 or 320); ozone blocks UVC and ~90% UVB; UVA deepest</td><td>—</td><td>12; T 810-839</td></tr>
</tbody></table>

<h3 id="ref-s4">Lecture 4: Sikazwe, 11/04 (DPAW pages 27–71)</h3>
<table class="reftab"><thead><tr><th>Drug / agent</th><th>Chemical class (deck)</th><th>Mechanism / CBDA</th><th>Key PK / numbers</th><th>Caution</th><th>Slide</th></tr></thead><tbody>
<tr><td>Calcitriol, calcipotriene</td><td>Secosteroids (vitamin D analogs)</td><td>Antiproliferative</td><td>Raise GI calcium absorption</td><td>Hypercalcemia (limiting factor)</td><td>27</td></tr>
<tr><td>Pimecrolimus</td><td>Macrolide / lactone</td><td>Calcineurin inhibitor, ↓ cytokines</td><td>cLogP 6.0; high non-specific skin protein binding</td><td>Low systemic ADRs</td><td>28, 32</td></tr>
<tr><td>Tacrolimus</td><td>Macrolide / lactone</td><td>Calcineurin inhibitor</td><td>cLogP 5.8; low skin protein binding</td><td>Systemic entry</td><td>28</td></tr>
<tr><td>Tazarotene</td><td>Acetylenic (alkyne) retinoid, ethyl ester prodrug; 3rd gen</td><td>RAR/RXR</td><td>CE → tazarotenic acid</td><td>Teratogenic</td><td>29, 51</td></tr>
<tr><td>Acitretin</td><td>2nd gen mono-aromatic retinoid</td><td>RAR/RXR</td><td>Active form of etretinate</td><td>Some teratogenicity</td><td>29, 50</td></tr>
<tr><td>Isotretinoin</td><td>1st gen; 13-cis retinoic acid</td><td>RAR/RXR</td><td>Oral</td><td>Teratogenic</td><td>29, 49</td></tr>
<tr><td>Tretinoin</td><td>1st gen; all-trans retinoic acid</td><td>RAR/RXR</td><td>Topical; first retinoid for acne</td><td>Teratogenic</td><td>49, 70</td></tr>
<tr><td>Etretinate</td><td>2nd gen; ethyl ester prodrug</td><td>→ acitretin by CE</td><td>t1/2 120 days, highly lipophilic</td><td>Narrow TI, teratogenic, removed 1998</td><td>50</td></tr>
<tr><td>Adapalene, trifarotene</td><td>3rd gen poly-aromatic</td><td>Directly active (exposed COOH)</td><td>Low systemic absorption</td><td>Teratogenic (class)</td><td>51</td></tr>
<tr><td>Methotrexate</td><td>Pteridine</td><td>Competitive DHFR inhibitor; also immunosuppressant, anti-inflammatory</td><td>SAR: pteridine (aromatic), PABA, glutamic acid; no aromatic N-alkylation; N-CH3 essential</td><td>—</td><td>30–31</td></tr>
<tr><td>Cyclosporine</td><td>11 amino acid cyclic peptide (lactam)</td><td>Activated by cyclophilin complexation; inhibits calcineurin phosphatase, T-cell signaling</td><td>F 30% (first pass by 3A4); log P 4; t1/2 19 h</td><td>Grapefruit juice ↑ levels</td><td>33</td></tr>
<tr><td>Apremilast</td><td>Isoindoline</td><td>PDE4 inhibitor, ↑ cAMP</td><td>3A4 major (1A2, 2A6 minor) O-demethylation → O-glucuronide (UGT)</td><td>Avoid 3A4 inhibitors/inducers</td><td>34</td></tr>
<tr><td>Tofacitinib</td><td>Pyrrolopyrimidine</td><td>JAK inhibitor</td><td>70% 3A4; 13 metabolites</td><td>3A4 inhibitors/inducers; may be used with MTX</td><td>35</td></tr>
<tr><td>Glycolic acid</td><td>Alpha-hydroxy acid</td><td>Keratolytic</td><td>pKa ~3, log P ~1, surface; ADH + ALDH → diacid</td><td>Itching; higher conc. for deeper peels</td><td>43, 68</td></tr>
<tr><td>Salicylic acid</td><td>Beta-hydroxy acid</td><td>Keratolytic; ↑ hydration</td><td>pKa ~3, log P ~1–2; 75% glycine conjugation</td><td>Itching</td><td>43</td></tr>
<tr><td>Sulfur</td><td>Element</td><td>Thiolysis of keratin disulfides (cysteine)</td><td>Small particle size</td><td>Allergies, smell</td><td>46</td></tr>
<tr><td>Benzoyl peroxide</td><td>Peroxide</td><td>↓ skin pH (benzoic acid) + free radical (benzoyl radical)</td><td>log P 3.5; benzoic acid in urine</td><td>—</td><td>47</td></tr>
<tr><td>Ethinyl estradiol + norgestimate / drospirenone</td><td>Steroids</td><td>↓ sebum (OCs, females)</td><td>—</td><td>—</td><td>52</td></tr>
<tr><td>Spironolactone</td><td>Steroidal antiandrogen</td><td>↓ testosterone biosynthesis</td><td>—</td><td>—</td><td>53</td></tr>
<tr><td>Ketoconazole</td><td>Azole (non-steroid)</td><td>↓ testosterone biosynthesis</td><td>—</td><td>Strong CYP3A4 inhibitor</td><td>53</td></tr>
<tr><td>Flutamide</td><td>Non-steroidal antiandrogen</td><td>Blocks testosterone at its receptor</td><td>—</td><td>—</td><td>53</td></tr>
<tr><td>Azelaic acid</td><td>C9 dicarboxylic acid</td><td>Antibacterial, anti-inflammatory</td><td>—</td><td>—</td><td>54</td></tr>
<tr><td>Clindamycin</td><td>Lincomycin</td><td>—</td><td>Topical due to GI toxicity</td><td>—</td><td>54</td></tr>
<tr><td>Erythromycin</td><td>Macrolide</td><td>—</td><td>Poor PO absorption; unstable at pH ≤4</td><td>—</td><td>54</td></tr>
<tr><td>Tetracycline</td><td>Tetracycline (linear 4 rings)</td><td>Chelates Al3+, Ca2+, Mg2+, Fe3+, Bi3+</td><td>Food (dairy) cuts absorption; t1/2 8.5 h</td><td>Bone/enamel staining, weakening</td><td>55</td></tr>
<tr><td>Doxycycline, minocycline</td><td>Tetracyclines</td><td>—</td><td>Food no effect; lipophilic; t1/2 11–13 h, 14–22 h</td><td>Cross-allergy</td><td>55</td></tr>
<tr><td>Zinc oxide, titanium dioxide</td><td>Metal oxides</td><td>Reflect/scatter; UVA/UVB; inert</td><td>Large particles better</td><td>—</td><td>61</td></tr>
<tr><td>Avobenzone</td><td>Dibenzoylmethane (UVA)</td><td>Chromophore</td><td>Low skin absorption; photodeg. t1/2 ~2 h</td><td>Reapply q2h</td><td>62</td></tr>
<tr><td>Meradimate</td><td>Anthranilate (UVA)</td><td>Chromophore</td><td>Degrades faster than avobenzone</td><td>—</td><td>62</td></tr>
<tr><td>Octinoxate</td><td>Cinnamate (UVB)</td><td>Chromophore</td><td>Absorbed through skin; t1/2 1–2 h</td><td>—</td><td>63</td></tr>
<tr><td>PABA, padimate O</td><td>PABAs (UVB)</td><td>Chromophore</td><td>—</td><td>PABA allergy (photosensitivity)</td><td>63</td></tr>
<tr><td>Homosalate, octisalate</td><td>Salicylates (UVB)</td><td>Chromophore; ester → salicylic acid (analgesia)</td><td>"supposed to be" photostable</td><td>—</td><td>64</td></tr>
<tr><td>Ensulizole</td><td>Benzimidazole (UVB)</td><td>Chromophore</td><td>log P 1, water soluble; t1/2 ~12 h</td><td>Reapply after swimming</td><td>64</td></tr>
<tr><td>Oxybenzone, sulisobenzone, dioxybenzone</td><td>Benzophenones (UVB/UVA)</td><td>Chromophore</td><td>log P ~4, highly absorbed</td><td>Absorption worry</td><td>65</td></tr>
<tr><td>Octocrylene</td><td>Cinnamate (UVB/UVA)</td><td>Chromophore; photostabilizer additive</td><td>t1/2 ~90 h; lipophilic</td><td>—</td><td>65</td></tr>
<tr><td>Bemotrizinol</td><td>Methoxybenzene &amp; triazine (UVB/UVA)</td><td>Chromophore</td><td>MW 627.81; photostable t1/2 ~4–8 h</td><td>—</td><td>66</td></tr>
<tr><td>Hydroquinone</td><td>—</td><td>↓ melanin biosynthesis (tyrosinase)</td><td>Degrades to benzoquinone (colored, inactive)</td><td>Amber bottle; protect from light and O2</td><td>67</td></tr>
<tr><td>AHAs (glycolic, lactic, tartaric, malic, citric)</td><td>Hydroxy acids</td><td>Remove dead cells, ↑ collagen</td><td>Sources: cane/beet, milk, grapes, apples/grapes</td><td>—</td><td>68</td></tr>
<tr><td>Hyaluronic acid</td><td>Endogenous mucopolysaccharide</td><td>Hygroscopic viscoelastic film</td><td>High MW surface, low MW deeper; declines with age</td><td>Non-antigenic</td><td>69</td></tr>
<tr><td>Topical retinoids (tretinoin, isotretinoin, tazarotene)</td><td>Retinoids</td><td>↑ skin collagen</td><td>—</td><td>Teratogenicity</td><td>70</td></tr>
</tbody></table>
`;

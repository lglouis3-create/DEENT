/* q48_found_smith_skin.js: foundation items for Dr. Smith's skin lectures (Exam 1): one direct fact each, written for the gaps found
   in the coverage audit of 2026-11-25 (every fact on her slides checked against the existing items; see the audit CSV).
   Sources: Skin-Pathophys-Students-2026.pdf (10/29), Skin-PCol-Students-2026.pdf (10/29, 10/30, 11/03) and
   DEENT_Sun_Exposure_2026.pdf (recorded lecture); every key is a statement on the cited slide. The 10/29, 10/30 and 11/03 transcripts
   were not on disk when these were written, so no item cites a transcript line.
   Brand names appear only in the four items tagged 'brand' (she asks by generic name).
   Left out on purpose: facts she excluded (types of dermatitis and of psoriasis, retinoid structures); facts whose slide conflicts with
   her speech or another slide and are held out of scored practice (the acne poll L1-062, the vitamin D response element on slides 7 and 21,
   topical calcineurin inhibitors in psoriasis, the crisaborole long-term safety line). */
(() => {
const PP = 'Lecture 1 (Skin-Pathophys-Students-2026.pdf)';
const PC1 = 'Lecture 1 (Skin-PCol-Students-2026.pdf)';
const PC2 = 'Lecture 2 (Skin-PCol-Students-2026.pdf)';
const PC3 = 'Lecture 3 (Skin-PCol-Students-2026.pdf)';
const SUN = 'Sun exposure lecture (DEENT_Sun_Exposure_2026.pdf)';
// opts[0] is the key; k is where it goes among the four
function mc(id, skill, topic, sub, concept, tag, stem, k, opts, teach, cite) {
  const rest = opts.slice(1).map(o => ({t:o[0], correct:false, why:o[1]}));
  const options = rest.slice(); options.splice(k, 0, {t:opts[0][0], correct:true, why:opts[0][1]});
  return {id, skill, prof:'Smith', tier:'new', topic, sub, concept, tags:['foundation','recall',tag], source:'slide', stem, options, teach, cite};
}
QUESTIONS.push(

/* ---- Skin pathophysiology deck, 10/29 ---------------------------------------------------------------------------------- */
mc('FS-001','patho','skin','sebum','fs-sebum-site','fact',
 'On which area of the skin is sebum found?', 2, [
 ['Scalp','Slide 6 lists the face, scalp, back and neck as sites of sebum.'],
 ['Palms','Not a site on slide 6, which lists the face, scalp, back and neck.'],
 ['Soles','Not a site on slide 6, which lists the face, scalp, back and neck.'],
 ['Nail beds','Not a site on slide 6, which lists the face, scalp, back and neck.']],
 'Sebum (glycerides, wax esters and cholesterol) retards water loss and is found on the face, scalp, back and neck (slide 6).',
 PP+' slide 6; taught 10/29'),

mc('FS-002','patho','ad','clin','fs-ad-definition','fact',
 'Which description fits atopic dermatitis?', 0, [
 ['Chronic, pruritic, inflammatory','Slide 8: atopic dermatitis is a chronic, pruritic inflammatory skin disease.'],
 ['Acute, painful, infectious','Atopic dermatitis is chronic and itchy, not an acute painful infection (slide 8).'],
 ['Chronic, scaly, hyperproliferative','That fits psoriasis (slide 19: thickened scaly plaques, keratinocyte hyperproliferation).'],
 ['Self-limiting, follicular, oily','That fits acne vulgaris, a self-limiting disease of the pilosebaceous unit (slide 30).']],
 'Atopic dermatitis is a chronic, pruritic inflammatory skin disease (slide 8).',
 PP+' slide 8; taught 10/29'),

mc('FS-003','patho','ad','clin','fs-eczema-term','fact',
 'What does the term eczema mean?', 3, [
 ['A general skin inflammation term','Slide 8: eczema is a general term for several types of skin inflammation; atopic dermatitis is the most common.'],
 ['A bacterial infection of the skin','Eczema is inflammation, not an infection (slide 8).'],
 ['Another name for plaque psoriasis','Eczema names several kinds of dermatitis; atopic dermatitis is the most common (slide 8), and psoriasis is a different disease.'],
 ['A hormone-driven skin disorder','Hormones drive acne through androgens (slide 32); eczema is a general term for skin inflammation (slide 8).']],
 'Eczema is a general term for several types of skin inflammation, and atopic dermatitis is the most common kind (slide 8).',
 PP+' slide 8; taught 10/29'),

mc('FS-004','patho','ad','clin','fs-ad-itch-night','fact',
 'When may the itch of atopic dermatitis be most severe?', 1, [
 ['At night','Slide 11: pruritus may be severe, especially at night.'],
 ['At midday','Slide 11 names night as the time the itch may be severe.'],
 ['After meals','Slide 11 names night, not mealtimes.'],
 ['On waking','Slide 11 names night, not the morning.']],
 'Pruritus in atopic dermatitis may be severe, especially at night (slide 11).',
 PP+' slide 11; taught 10/29'),

mc('FS-005','patho','pso','clin','fs-pso-lesion','fact',
 'Which skin lesion is typical of psoriasis?', 3, [
 ['Thick, scaly, erythematous plaques','Slide 19: psoriasis is thickened, erythematous, scaly plaques with recurrent exacerbations and remissions.'],
 ['Weepy vesicles that crust over','Slide 11: small raised vesicles that leak fluid and crust over when scratched are atopic dermatitis.'],
 ['Red patches that look like chapping','Slide 11 describes atopic dermatitis as red to brownish-gray patches that look like chapping.'],
 ['Comedones with inflamed pustules','Comedones and inflamed lesions are acne (slides 30 and 33).']],
 'Psoriasis shows recurrent exacerbations and remissions of thickened, erythematous, scaly plaques (slide 19).',
 PP+' slide 19; taught 10/29'),

mc('FS-006','epi','pso','clin','fs-pso-sex','fact',
 'Which group does psoriasis affect?', 0, [
 ['Both sexes equally','Slide 20: psoriasis affects males and females equally.'],
 ['Mainly adult males','Slide 20: males and females are affected equally.'],
 ['Mainly adult females','Slide 20: males and females are affected equally.'],
 ['Mainly young children','Slide 20: it can present at any age, but most patients have onset before 40.']],
 'Psoriasis affects males and females equally (slide 20).',
 PP+' slide 20; taught 10/29'),

mc('FS-007','epi','pso','clin','fs-pso-onset','fact',
 'Most patients with psoriasis have onset before which age?', 2, [
 ['Age 40','Slide 20: psoriasis can present at any age, but most patients have onset before 40.'],
 ['Age 20','Slide 20 gives 40, not 20.'],
 ['Age 30','Slide 20 gives 40, not 30.'],
 ['Age 50','Slide 20 gives 40, not 50.']],
 'Psoriasis can present at any age, but most patients have onset before 40 (slide 20).',
 PP+' slide 20; taught 10/29'),

mc('FS-008','epi','pso','clin','fs-pso-immune-mediated','fact',
 'Psoriasis is the most common disease of which kind worldwide?', 1, [
 ['Immune-mediated inflammatory disease','Slide 20: psoriasis is the most common immune-mediated inflammatory disease worldwide.'],
 ['Autoimmune blistering disease','Slide 20 names immune-mediated inflammatory disease; psoriasis is a scaly plaque disease, not a blistering one.'],
 ['Bacterial infectious disease','Psoriasis is T-cell mediated inflammation, not an infection (slide 19).'],
 ['Hereditary pigmentary disease','Psoriasis is an immune-mediated inflammatory disease (slide 20), not a pigment disorder.']],
 'Psoriasis is the most common immune-mediated inflammatory disease worldwide (slide 20).',
 PP+' slide 20; taught 10/29'),

mc('FS-009','patho','pso','fact','fs-pso-nail','fact',
 'Which nail change occurs in nail psoriasis?', 0, [
 ['Onycholysis','Slide 26: nail psoriasis causes pitting, ridging, discoloration and onycholysis.'],
 ['Clubbing','Clubbing is not listed on slide 26, which gives pitting, ridging, discoloration and onycholysis.'],
 ['Koilonychia','Koilonychia is not listed on slide 26, which gives pitting, ridging, discoloration and onycholysis.'],
 ['Mees lines','Mees lines are not listed on slide 26, which gives pitting, ridging, discoloration and onycholysis.']],
 'Nail psoriasis shows pitting, ridging, discoloration and onycholysis (slide 26).',
 PP+' slide 26; taught 10/29'),

mc('FS-010','epi','pso','clin','fs-pso-environment','fact',
 'Psoriasis has a genetic basis that probably needs what to become active?', 3, [
 ['Environmental triggers','Slide 20: psoriasis has a genetic basis that probably requires environmental triggers to activate the disease.'],
 ['A second inherited disorder','Slide 20 names environmental triggers, not a second inherited disorder.'],
 ['A chronic bacterial infection','Infection is one possible contributing factor (slide 24), but slide 20 names environmental triggers as the activator.'],
 ['Hormonal changes of puberty','Puberty and androgens trigger acne (slide 31); slide 20 names environmental triggers for psoriasis.']],
 'The genetic basis of psoriasis probably needs environmental triggers to activate the disease (slide 20).',
 PP+' slide 20; taught 10/29'),

mc('FS-011','epi','acne','clin','fs-acne-course','fact',
 'How is the course of acne vulgaris described?', 2, [
 ['Common and self-limiting','Slide 30: acne vulgaris is a common, self-limiting disease of the pilosebaceous units.'],
 ['Rare and progressive','Slide 30 calls acne common and self-limiting.'],
 ['Infectious and contagious','Acne involves P. acnes in the follicle (slide 32) but slide 30 describes it as a common, self-limiting disease.'],
 ['Autoimmune and relapsing','Slide 30 calls acne common and self-limiting; atopic dermatitis and psoriasis are the inflammatory immune diseases of this lecture.']],
 'Acne vulgaris is a common, self-limiting disease of the pilosebaceous units, usually on the face, upper back and chest (slide 30).',
 PP+' slide 30; taught 10/29'),

mc('FS-012','epi','acne','clin','fs-acne-dermatologist','fact',
 'Acne is the most common chronic disease treated by which specialists?', 1, [
 ['Dermatologists','Slide 31: acne is a chronic disease and the most common one treated by dermatologists.'],
 ['Rheumatologists','Slide 31 names dermatologists.'],
 ['Endocrinologists','Slide 31 names dermatologists, even though androgens contribute to acne.'],
 ['Allergists','Slide 31 names dermatologists.']],
 'Acne is a chronic disease and the most common one treated by dermatologists (slide 31).',
 PP+' slide 31; taught 10/29'),

mc('FS-013','patho','acne','path','fs-pacnes-antigenic','fact',
 'Besides making free fatty acids, how does the acne bacterium add to follicle inflammation?', 0, [
 ['It has an antigenic effect','Slide 33: free fatty acids irritate the follicular walls, and P. acnes also has an antigenic effect.'],
 ['It raises androgen production','Increased androgen production comes before acne and raises sebum (slide 32); P. acnes does not make androgens.'],
 ['It sticks skin cells together','Cells that stick together and are not shed plug the channel (slide 33); that is not an effect of P. acnes.'],
 ['It makes wax esters','Wax esters are a component of sebum (slide 6); P. acnes makes a lipase (slide 33).']],
 'P. acnes makes a lipase that frees fatty acids from sebum glycerides; the fatty acids irritate the follicular walls, and the bacterium also has an antigenic effect (slide 33).',
 PP+' slide 33; taught 10/29'),

mc('FS-014','patho','acne','casc','fs-acne-cosmetica','fact',
 'Which type of acne is a mild form caused by comedogenic oils in cosmetics?', 3, [
 ['Acne cosmetica','Slide 35: acne cosmetica is a mild form of acne due to comedogenic oils in cosmetics.'],
 ['Acne mechanica','Slide 35: acne mechanica is acne from anything that occludes or irritates the skin.'],
 ['Occupational acne','Slide 35: occupational acne comes from excessive dirt, vaporized cooking oil or industrial chemicals.'],
 ['Acne medicamentosa','Slide 35: acne medicamentosa is drug-induced acne.']],
 'Slide 35 names four exacerbating types: acne mechanica (occlusion or irritation), occupational acne, acne cosmetica (comedogenic oils in cosmetics) and acne medicamentosa (drugs).',
 PP+' slide 35; taught 10/29'),

mc('FS-015','patho','acne','casc','fs-acne-diet','fact',
 'Which diet is a possible factor in acne?', 1, [
 ['High glycemic index diet','Slide 35 lists a high glycemic index diet as a possible factor; dairy may be one too.'],
 ['Low-fat, high-protein diet','Not listed on slide 35, which names a high glycemic index diet and dairy.'],
 ['High-fiber vegetarian diet','Not listed on slide 35, which names a high glycemic index diet and dairy.'],
 ['Low-sodium Mediterranean diet','Not listed on slide 35, which names a high glycemic index diet and dairy.']],
 'Slide 35 lists a high glycemic index diet as a possible factor in acne, and dairy may be a factor.',
 PP+' slide 35; taught 10/29'),

mc('FS-016','patho','acne','casc','fs-acne-dairy','fact',
 'Which food group may be a factor in acne?', 2, [
 ['Dairy products','Slide 35: a high glycemic index diet and dairy may be factors in acne.'],
 ['Leafy greens','Not listed on slide 35, which names dairy and a high glycemic index diet.'],
 ['Whole grains','Not listed on slide 35, which names dairy and a high glycemic index diet.'],
 ['Fresh fruit','Not listed on slide 35, which names dairy and a high glycemic index diet.']],
 'Dairy and a high glycemic index diet may be factors in acne (slide 35).',
 PP+' slide 35; taught 10/29'),

/* ---- Skin pharmacology deck, 10/29 to 11/03 --------------------------------------------------------------------------- */
mc('FS-017','mech','ret','rec','fs-retinoid-vitamin-a','mechanism',
 'Retinoids have biological activity like which vitamin?', 0, [
 ['Vitamin A','Slide 14: retinoids have vitamin A-like biological activity and act on RARs and RXRs.'],
 ['Vitamin C','Slide 14: retinoids are vitamin A-like.'],
 ['Vitamin D','Vitamin D analogs such as calcipotriene are a separate class that acts on the vitamin D receptor (slide 21).'],
 ['Vitamin E','Slide 14: retinoids are vitamin A-like.']],
 'Retinoids have vitamin A-like biological activity and change gene expression by binding RARs and RXRs (slide 14).',
 PC1+' slide 14; taught 10/29'),

mc('FS-018','adverse','l2-tret','ae','fs-retinoid-acd-rare','adverse',
 'Which topical retinoid effect is rare?', 3, [
 ['Allergic contact dermatitis','Slide 16: allergic contact dermatitis is rare with topical retinoids.'],
 ['Early erythema and dryness','Slide 16: erythema and dryness are expected in the first few weeks.'],
 ['Peeling, crusting and burning','Slide 16 lists peeling, crusting and burning among the effects of topical retinoids.'],
 ['Photosensitivity reaction','Slide 16: topical retinoids may cause photosensitivity.']],
 'Erythema, dryness, peeling and photosensitivity occur with topical retinoids; allergic contact dermatitis is rare (slide 16).',
 PC2+' slide 16; taught 10/30'),

mc('FS-019','class','l2-pde','mech','fs-pde4-nonsteroidal','class',
 'PDE-4 inhibitors are what type of anti-inflammatory drug?', 2, [
 ['Nonsteroidal','Slide 32: a PDE4 inhibitor is a nonsteroidal anti-inflammatory drug.'],
 ['Steroidal','Corticosteroids are the steroid class (slide 8); PDE4 inhibitors are nonsteroidal (slide 32).'],
 ['Biologic','PDE-4 inhibitors are small molecules (crisaborole, apremilast); the biologics are a separate group (slide 62).'],
 ['Antimicrobial','PDE-4 inhibitors raise cAMP and calm inflammatory cells (slide 32); they are not antimicrobials.']],
 'PDE-4 inhibitors are nonsteroidal anti-inflammatory drugs: more cAMP relaxes smooth muscle and inhibits inflammatory cells (slide 32).',
 PC2+' slide 32; taught 10/30'),

mc('FS-020','counsel','l2-pde','cris','fs-crisaborole-hypersensitivity','counsel',
 'What should happen if hypersensitivity to crisaborole occurs?', 1, [
 ['Stop it immediately','Slide 33: with hypersensitivity (contact urticaria, severe pruritus, swelling or erythema), discontinue crisaborole immediately.'],
 ['Apply it less often','Slide 33 says to discontinue immediately, not to reduce the dosing.'],
 ['Add a topical steroid','Slide 33 says to discontinue immediately.'],
 ['Wait for it to resolve','Slide 33 says to discontinue immediately.']],
 'Hypersensitivity to crisaborole can show as contact urticaria, severe pruritus, swelling or erythema, and the drug is discontinued immediately (slide 33).',
 PC2+' slide 33; taught 10/30'),

mc('FS-021','class','l3-abx','clinda','fs-clinda-bacteriostatic','class',
 'What is the antibacterial effect of clindamycin?', 3, [
 ['Bacteriostatic','Slide 46: clindamycin has a bacteriostatic effect; it binds the 50S subunit and prevents translocation.'],
 ['Bactericidal','Slide 46 lists clindamycin as bacteriostatic.'],
 ['Fungicidal','Clindamycin is an antibacterial that acts on the bacterial ribosome (slide 46).'],
 ['Virucidal','Clindamycin is an antibacterial that acts on the bacterial ribosome (slide 46).']],
 'Clindamycin is bacteriostatic: it attaches to the 50S subunit of the bacterial ribosome and prevents translocation (slide 46).',
 PC3+' slide 46; taught 11/03'),

mc('FS-022','adverse','l3-abx','macro','fs-macrolide-oral-ae','adverse',
 'Which side effect occurs with oral erythromycin and azithromycin?', 0, [
 ['Epigastric pain','Slide 47: oral macrolides cause nausea, vomiting, diarrhea and epigastric pain.'],
 ['Tooth discoloration','That belongs to the tetracyclines in the young (slide 44).'],
 ['Gingival hyperplasia','That is specific to cyclosporine (slide 30).'],
 ['Ototoxicity','Slide 45 lists ototoxicity for minocycline.']],
 'Oral erythromycin and azithromycin cause nausea, vomiting, diarrhea and epigastric pain, and have many drug interactions (slide 47).',
 PC3+' slide 47; taught 11/03'),

mc('FS-023','mech','l3-fol','tmpsmx','fs-tmpsmx-sequential','mechanism',
 'Why is TMP/SMX more effective than either drug alone?', 2, [
 ['Two sequential folate blocks','Slide 49: giving a sulfonamide and trimethoprim together blocks the folate pathway at sequential steps, which is much more effective than either alone.'],
 ['Two blocks of one enzyme','Each drug blocks a different step: sulfamethoxazole competes with PABA, trimethoprim inhibits DHFR (slide 48).'],
 ['An added 50S ribosome block','TMP/SMX acts on folate synthesis, not on the ribosome (slide 48).'],
 ['An added cell wall block','TMP/SMX acts on folate synthesis, not on the cell wall (slide 48).']],
 'Sulfamethoxazole and trimethoprim block successive steps of bacterial folate synthesis, so together they are much more effective than either alone (slides 48–49).',
 PC3+' slide 49; taught 11/03'),

mc('FS-024','adverse','l3-fol','metro','fs-metronidazole-ae','adverse',
 'Which side effect occurs with water-based metronidazole gels?', 1, [
 ['Eye watering','Slide 51: dry skin, redness and watering of the eyes with water-based gel formulations.'],
 ['Skin staining','Staining is a coal tar and anthralin effect (slides 54 and 56), not listed for metronidazole.'],
 ['Hair loss','Not listed on slide 51, which gives dry skin, redness and watering of the eyes.'],
 ['Gum overgrowth','Gingival hyperplasia is specific to cyclosporine (slide 30), not listed for metronidazole.']],
 'Topical metronidazole can cause dry skin, redness and watering of the eyes with water-based gels; cream and lotion formulations may be better tolerated (slide 51).',
 PC3+' slide 51; taught 11/03'),

mc('FS-025','class','l3-cytok','dup','fs-dupilumab-igg4','class',
 'Dupilumab is which type of antibody?', 3, [
 ['Human IgG4','Slide 64: dupilumab is a human monoclonal IgG4 antibody.'],
 ['Human IgG1','Human IgG1 describes secukinumab and guselkumab (slides 66 and 68).'],
 ['Humanized IgG4','Humanized IgG4 describes ixekizumab (slide 66).'],
 ['Chimeric IgG1','Chimeric IgG1 describes infliximab (slide 72).']],
 'Dupilumab is a human monoclonal IgG4 antibody that binds the IL-4R alpha subunit (slide 64).',
 PC3+' slide 64; taught 11/03'),

mc('FS-026','counsel','l3-cytok','dup','fs-dupilumab-route','directions',
 'How is dupilumab given?', 1, [
 ['Subcutaneous injection','Slide 64: dupilumab is injectable, given SQ.'],
 ['Intravenous infusion','Infliximab is the TNF inhibitor given by IV infusion (slide 72); dupilumab is given SQ (slide 64).'],
 ['Oral tablet','Tofacitinib is the oral JAK inhibitor (slide 76); dupilumab is an injection (slide 64).'],
 ['Topical ointment','Crisaborole is the topical PDE-4 inhibitor (slide 33); dupilumab is an injection (slide 64).']],
 'Dupilumab is an injectable monoclonal antibody given subcutaneously (slide 64).',
 PC3+' slide 64; taught 11/03'),

mc('FS-027','patho','l3-cytok','il17','fs-il17a-plaques','fact',
 'Which cytokine is found at elevated concentrations in psoriatic plaques?', 0, [
 ['IL-17A','Slide 65: elevated concentrations of IL-17A are found in psoriatic plaques.'],
 ['IL-4','IL-4 is a TH2 cytokine in atopic dermatitis and a dupilumab target (slide 64).'],
 ['IL-5','IL-5 is a TH2 cytokine in atopic dermatitis, not the plaque cytokine on slide 65.'],
 ['IL-13','IL-13 is a TH2 cytokine in atopic dermatitis and a dupilumab target (slide 64).']],
 'Keratinocytes are the major target of IL-17 in psoriasis, and psoriatic plaques contain elevated IL-17A (slide 65).',
 PC3+' slide 65; taught 11/03'),

mc('FS-028','adverse','l3-cytok','il17','fs-secukinumab-npharyngitis','adverse',
 'About what share of secukinumab patients get nasopharyngitis?', 2, [
 ['About 12%','Slide 66: nasopharyngitis occurs in about 12% of patients on secukinumab.'],
 ['About 2%','Slide 66 gives about 12%.'],
 ['About 32%','Slide 66 gives about 12%.'],
 ['About 52%','Slide 66 gives about 12%.']],
 'Secukinumab raises infection risk (patients are evaluated for tuberculosis first), and nasopharyngitis occurs in about 12% (slide 66).',
 PC3+' slide 66; taught 11/03'),

mc('FS-029','adverse','l3-cytok','il23','fs-risankizumab-ae','adverse',
 'Which is a common side effect of risankizumab?', 1, [
 ['Fatigue','Slide 69: the most common effects are fatigue, arthralgia, nasopharyngitis, headache, skin rashes and local injection reactions.'],
 ['Neuropathy','Neuropathies are specific to tacrolimus (slide 30).'],
 ['Gum overgrowth','Gingival hyperplasia is specific to cyclosporine (slide 30).'],
 ['Hearing loss','Slide 45 lists ototoxicity for minocycline.']],
 'Risankizumab commonly causes fatigue, arthralgia, nasopharyngitis, headache, skin rashes and local injection reactions; severe infections, reactivation of tuberculosis and skin cancer are less common (slide 69).',
 PC3+' slide 69; taught 11/03'),

mc('FS-030','counsel','l3-tnf','drugs','fs-etanercept-route','directions',
 'How is etanercept given?', 0, [
 ['Subcutaneous injection','Slide 71: etanercept is given by subcutaneous injection.'],
 ['Intravenous infusion','Slide 72: infliximab, not etanercept, is given by IV infusion.'],
 ['Oral tablet','Tofacitinib is the oral drug (slide 76); etanercept is an injection (slide 71).'],
 ['Topical gel','Etanercept is a fusion protein given by injection (slide 71).']],
 'Etanercept, two p75 TNF receptors linked to the Fc of human IgG1, is given by subcutaneous injection (slide 71).',
 PC3+' slide 71; taught 11/03'),

/* ---- Sun exposure lecture (recorded) ----------------------------------------------------------------------------------- */
mc('FS-031','patho','l3c-uv','tan','fs-sunburn-endothelium','fact',
 'Which structure swells and leaks red blood cells in sunburn?', 1, [
 ['Endothelium','Slide 11: sunburn is an inflammatory response with swelling of the endothelium and leakage of red blood cells from capillaries.'],
 ['Stratum corneum','Slide 11 names the endothelium and capillaries, not the stratum corneum.'],
 ['Sebaceous gland','Slide 11 names the endothelium and capillaries, not the sebaceous gland.'],
 ['Hair follicle','Slide 11 names the endothelium and capillaries, not the hair follicle.']],
 'Sunburn is an inflammatory response: the endothelium swells and red blood cells leak from capillaries (slide 11).',
 SUN+' slide 11'),

mc('FS-032','patho','l3c-uv','tan','fs-sunburn-mild','fact',
 'Which symptoms fit a mild sunburn?', 3, [
 ['Erythema, tenderness and edema','Slide 11: mild sunburn shows erythema, tenderness and edema.'],
 ['Blisters with fever and chills','Slide 11 lists blisters, fever and chills for severe sunburn, not mild.'],
 ['Comedones with inflamed pustules','Comedones and pustules are acne, not sunburn.'],
 ['Weepy vesicles that crust over','Slide 11 gives erythema, tenderness and edema for mild sunburn; weepy crusting vesicles describe atopic dermatitis.']],
 'Mild sunburn gives erythema, tenderness and edema; a severe sunburn can be a second-degree burn with blisters, fever, chills, weakness and shock (slide 11).',
 SUN+' slide 11'),

mc('FS-033','class','l3c-spf','sel','fs-skin-type-ii','fact',
 'Which skin type always burns easily and tans minimally?', 2, [
 ['Type II','Slide 16: type II always burns easily and tans minimally.'],
 ['Type I','Slide 16: type I always burns easily and never tans.'],
 ['Type III','Slide 16: type III sometimes burns and tans gradually.'],
 ['Type IV','Slide 16: type IV burns minimally and always tans well.']],
 'Slide 16: type I always burns, never tans; II always burns, tans minimally; III sometimes burns, tans gradually; IV burns minimally, always tans; V rarely burns; VI never burns.',
 SUN+' slide 16'),

mc('FS-034','class','l3c-spf','sel','fs-skin-type-iii','fact',
 'Which skin type sometimes burns and tans gradually?', 0, [
 ['Type III','Slide 16: type III sometimes burns and tans gradually.'],
 ['Type II','Slide 16: type II always burns easily and tans minimally.'],
 ['Type IV','Slide 16: type IV burns minimally and always tans well.'],
 ['Type V','Slide 16: type V rarely burns and tans profusely.']],
 'Slide 16: type III sometimes burns and tans gradually; type II always burns easily and tans minimally; type IV burns minimally and always tans well.',
 SUN+' slide 16'),

mc('FS-035','class','l3c-spf','sel','fs-skin-type-v','fact',
 'Which skin type rarely burns and tans profusely?', 3, [
 ['Type V','Slide 16: type V rarely burns and tans profusely.'],
 ['Type III','Slide 16: type III sometimes burns and tans gradually.'],
 ['Type IV','Slide 16: type IV burns minimally and always tans well.'],
 ['Type VI','Slide 16: type VI never burns and is deeply pigmented.']],
 'Slide 16: type V rarely burns and tans profusely; type VI never burns and is deeply pigmented.',
 SUN+' slide 16'),

mc('FS-036','class','l3c-spf','sel','fs-skin-type-vi','fact',
 'Which skin type never burns and is deeply pigmented?', 1, [
 ['Type VI','Slide 16: type VI never burns and is deeply pigmented.'],
 ['Type II','Slide 16: type II always burns easily and tans minimally.'],
 ['Type IV','Slide 16: type IV burns minimally and always tans well.'],
 ['Type V','Slide 16: type V rarely burns and tans profusely.']],
 'Slide 16: type VI never burns and is deeply pigmented; type V rarely burns and tans profusely.',
 SUN+' slide 16'),

mc('FS-037','counsel','l3c-prod','sub','fs-substantivity-label','counsel',
 'Which label feature signals good substantivity in a sunscreen?', 2, [
 ['Water resistance','Slide 19: choose a product with the best substantivity: waterproof, water-resistant or sweat-resistant.'],
 ['Higher SPF','SPF measures UVB protection (slide 13), not how well the product stays on after water or sweat.'],
 ['Broad spectrum','Broad spectrum means UVA coverage by critical wavelength (slide 14), not retention on the skin.'],
 ['Fragrance free','Slide 19 names waterproof, water-resistant and sweat-resistant products for substantivity.']],
 'Substantivity is how well a sunscreen stays on after water and perspiration, so choose waterproof, water-resistant or sweat-resistant products (slide 19).',
 SUN+' slide 19'),

mc('FS-038','tell','l3c-prod','blk','fs-sunblock-nanosize','fact',
 'What is the advantage of micro- and nanosize sunblock particles?', 0, [
 ['They are less opaque','Slide 20: microsize and nanosize particle formulations are less opaque and more cosmetically appealing.'],
 ['They absorb UV as heat','Absorbing UV and turning it to heat is how organic sunscreens work (slide 22); sunblocks scatter or reflect.'],
 ['They protect against UVA alone','Zinc oxide and titanium dioxide protect against UVA and UVB (slide 20).'],
 ['They dissolve in water','Sunblocks are inorganic particulates that scatter or reflect radiation, and they are not easily removed with water (slides 20–21).']],
 'Newer microsize and nanosize zinc oxide and titanium dioxide particles are less opaque and more cosmetically appealing (slide 20).',
 SUN+' slide 20'),

mc('FS-039','tell','l3c-prod','safe','fs-physical-less-irritating','adverse',
 'Which sunscreen ingredient is least likely to irritate the skin?', 1, [
 ['Zinc oxide','Slide 25: physical sunscreen ingredients are less likely to cause dermal irritation.'],
 ['Oxybenzone','Slide 25: oxybenzone is among the ingredients with higher risk of dermatologic reactions.'],
 ['Avobenzone','Slide 25: avobenzone is among the ingredients with higher risk of dermatologic reactions.'],
 ['Aminobenzoates','Slide 25 names PABA among the ingredients with higher risk of dermatologic reactions; the aminobenzoates are the PABA family (slide 24).']],
 'Physical sunscreen ingredients (zinc oxide, titanium dioxide) are less likely to cause dermal irritation; most chemical actives have been linked to skin reactions, with higher risk for PABA, avobenzone and oxybenzone (slide 25).',
 SUN+' slide 25'),

/* ---- Brand names on her slides: each its own item, marked brand ------------------------------------------------------- */
mc('FS-040','class','l2-tret','prod','fs-brand-retin-a-micro','brand',
 'Retin-A Micro is a timed-release microsphere form of which drug?', 2, [
 ['Tretinoin','Slide 17: Retin-A Micro is a timed-release microsphere formulation of tretinoin, and may be less irritating for sensitive patients.'],
 ['Adapalene','Slide 18 covers adapalene as a separate topical retinoid that is photochemically stable; it is not the Retin-A Micro drug.'],
 ['Tazarotene','Slide 18 covers tazarotene as a separate topical retinoid for psoriasis, acne and wrinkles; it is not the Retin-A Micro drug.'],
 ['Isotretinoin','Slide 19 describes isotretinoin as the oral retinoid for severe cystic acne.']],
 'Retin-A Micro is tretinoin (all-trans retinoic acid) in timed-release microspheres, which may be less irritating (slide 17). She asks by generic name; the brand is for practice.',
 PC2+' slide 17; taught 10/30'),

mc('FS-041','class','l2-ker','sal','fs-brand-compound-w','brand',
 'Compound W, Duofilm and Freezone contain which drug?', 3, [
 ['Salicylic acid','Slide 40: salicylic acid in strengths up to 40% is used for wart and corn removal (Compound W, Duofilm, Freezone).'],
 ['Benzoyl peroxide','Benzoyl peroxide is an acne keratolytic and oxidant (slides 36–37), not the wart and corn product.'],
 ['Anthralin','Anthralin is a cytotoxic agent for thick psoriatic plaques (slide 55), not the wart and corn product.'],
 ['Coal tar','Coal tar is a cytotoxic agent for psoriasis (slide 53), not the wart and corn product.']],
 'Compound W, Duofilm and Freezone are wart and corn products with up to 40% salicylic acid (slide 40). She asks by generic name; the brands are for practice.',
 PC2+' slide 40; taught 10/30'),

mc('FS-042','class','l2-cni','oral','fs-brand-neoral','brand',
 'Neoral and Sandimmune are brand names of which drug?', 1, [
 ['Cyclosporine','Slide 29: Neoral is a modified microemulsion cyclosporine and Sandimmune the original; they are not bioequivalent.'],
 ['Tacrolimus','Tacrolimus is the other oral calcineurin inhibitor (slide 30); slide 29 gives Neoral and Sandimmune as cyclosporine products.'],
 ['Pimecrolimus','Pimecrolimus is a topical calcineurin inhibitor (slide 27); Neoral and Sandimmune are oral cyclosporine.'],
 ['Methotrexate','Methotrexate is a DHFR inhibitor (slide 59); Neoral and Sandimmune are oral cyclosporine.']],
 'Neoral (microemulsion) and Sandimmune are both oral cyclosporine, but they are not bioequivalent and cannot be used interchangeably (slide 29). She asks by generic name; the brands are for practice.',
 PC2+' slide 29; taught 10/30'),

mc('FS-043','class','l3-abx','clinda','fs-brand-evoclin','brand',
 'Evoclin foam contains which antibiotic?', 0, [
 ['Clindamycin','Slide 46 names the hydroalcoholic vehicle and foam formulation (Evoclin) as a clindamycin product that may dry and irritate the skin.'],
 ['Erythromycin','Slide 47 gives topical erythromycin burning and drying, especially with benzoyl peroxide; Evoclin is not an erythromycin product.'],
 ['Doxycycline','Doxycycline is an oral tetracycline (slide 44); Evoclin is a topical clindamycin foam.'],
 ['Minocycline','Minocycline is an oral tetracycline (slide 45); Evoclin is a topical clindamycin foam.']],
 'Evoclin is a clindamycin foam; hydroalcoholic and foam forms may dry and irritate the skin, while water-based gels and lotions are better tolerated (slide 46). She asks by generic name; the brand is for practice.',
 PC3+' slide 46; taught 11/03')

);
})();

/* q20_abcde.js: the two ABCDE mnemonics, asked as cases (Louis, 2026-11-14: "yes").
   Dr. Patel, 11/06: "I want you guys to remember A B C D E for diaper dermatitis treatment" (T@74574), and the class
   recited it after the case (T@82654). 11/12: "A B C D E rule applies here again, but a little different than diaper
   dermatitis" (T@60584); conclusion: "What does that lesion look like? So remember the pneumonic" (T@77336).
   Sources: Patel_Sun-Exposure-Student.pdf slide 28 (ABCDE rule: skin cancer identifiers) and slide 37;
   Patel_Dermatitis-Therapeutics-Student.pdf slide 62 (Table 36-1, ABCDE mnemonic for diaper dermatitis treatment).
   Each case states the four features the lesion does NOT have, so one identifier is left. */
(() => {
const SUN = 'Lecture 8 (Patel_Sun-Exposure-Student.pdf)';
const DER = 'Lecture 5 (Patel_Dermatitis-Therapeutics-Student.pdf)';
const TS = 'Slide 28: Asymmetry (one half does not match the other), Border that is irregular (ragged, notched or blurred edges; pigment may spread into the surrounding skin), Color that is uneven, Diameter (a change in size; most melanomas are larger than 6 millimeters, about 1/4 inch), Evolving (changed over the past few weeks or months). "What does that lesion look like? So remember the pneumonic" (T@77336 11/12).';
const TD = 'Slide 62: A = Air (air dry frequently, diaper-free time); B = Barrier (skin protectant liberally with each change); C = Cleansing (soft cloth and warm water, or a baby wipe when stool is present); D = Diaper (change every 2 hours and as soon as soiled); E = Education of parents and caregivers. "I want you guys to remember A B C D E for diaper dermatitis treatment" (T@74574 11/06).';
QUESTIONS.push(
{id:'P8S-052', skill:'case', prof:'Patel', tier:'new', topic:'p8s-skin', sub:'abcde', concept:'p8s-abcde-case-asymmetry',
 tags:['case','abcde'], source:'both',
 stem:'A woman shows the pharmacist a mole on her forearm. The shape of one half does not match the other half. Its edges are smooth, it is one even shade of brown, it is 3 millimeters wide, and she says it has looked the same for years. Which ABCDE identifier of skin cancer does the mole show?',
 options:[
  {t:'Asymmetry', correct:true, why:'Slide 28: "Asymmetry: the shape of one half does not match the other half."'},
  {t:'Border', correct:false, why:'Border is an irregular edge: ragged, notched or blurred (slide 28). Her mole has smooth edges.'},
  {t:'Diameter', correct:false, why:'Most melanomas are larger than 6 millimeters (slide 28); hers is 3 millimeters and has not changed in size.'},
  {t:'Evolving', correct:false, why:'Evolving is a mole that has changed over the past few weeks or months (slide 28); hers has looked the same for years.'}],
 teach:TS, cite:SUN+' slide 28; T@60584, T@77336 11/12'},

{id:'P8S-053', skill:'case', prof:'Patel', tier:'new', topic:'p8s-skin', sub:'abcde', concept:'p8s-abcde-case-border',
 tags:['case','abcde'], source:'both',
 stem:'A man has a mole on his back. Its two halves match, it is one even shade of brown, it is 4 millimeters wide and it has not changed. Its edges are notched and blurred, and pigment spreads into the surrounding skin. Which ABCDE identifier of skin cancer does the mole show?',
 options:[
  {t:'Asymmetry', correct:false, why:'Asymmetry is one half not matching the other (slide 28); his two halves match.'},
  {t:'Border', correct:true, why:'Slide 28: "Border that is irregular: the edges are often ragged, notched, or blurred in outline. The pigment may spread into the surrounding skin."'},
  {t:'Color', correct:false, why:'Color is uneven shades within the mole (slide 28). Pigment spreading past the edge is listed under Border, and his mole is one even shade.'},
  {t:'Diameter', correct:false, why:'Most melanomas are larger than 6 millimeters (slide 28); his is 4 millimeters and unchanged.'}],
 teach:TS, cite:SUN+' slide 28; T@60584, T@77336 11/12'},

{id:'P8S-054', skill:'case', prof:'Patel', tier:'new', topic:'p8s-skin', sub:'abcde', concept:'p8s-abcde-case-color',
 tags:['case','abcde'], source:'both',
 stem:'A mole on a patient\'s shoulder has matching halves and a smooth, sharp edge. It is 5 millimeters wide and has not changed. Part of it is tan, part is black, and one area is blue. Which ABCDE identifier of skin cancer does the mole show?',
 options:[
  {t:'Border', correct:false, why:'Border is a ragged, notched or blurred edge (slide 28); this edge is smooth and sharp.'},
  {t:'Color', correct:true, why:'Slide 28: "Color that is uneven: shades of black, brown, and tan may be present. Areas of white, gray, red, pink, or blue may also be seen."'},
  {t:'Diameter', correct:false, why:'Most melanomas are larger than 6 millimeters (slide 28); this one is 5 millimeters and unchanged.'},
  {t:'Evolving', correct:false, why:'Evolving is change over the past few weeks or months (slide 28); this mole has not changed.'}],
 teach:TS, cite:SUN+' slide 28; T@60584, T@77336 11/12'},

{id:'P8S-055', skill:'case', prof:'Patel', tier:'new', topic:'p8s-skin', sub:'abcde', concept:'p8s-abcde-case-diameter',
 tags:['case','abcde','numbers'], source:'both',
 stem:'A patient asks about a mole on his calf. Its halves match, its edge is smooth and it is one even shade of brown. It measures 9 millimeters across. Which ABCDE identifier of skin cancer does the mole show?',
 options:[
  {t:'Asymmetry', correct:false, why:'Asymmetry is one half not matching the other (slide 28); these halves match.'},
  {t:'Border', correct:false, why:'Border is a ragged, notched or blurred edge (slide 28); this edge is smooth.'},
  {t:'Color', correct:false, why:'Color is uneven shades (slide 28); this mole is one even shade.'},
  {t:'Diameter', correct:true, why:'Slide 28: "Melanomas can be tiny, but most are larger than 6 millimeters wide (about 1/4 inch wide)." Nine millimeters is over that size.'}],
 teach:TS, cite:SUN+' slide 28; T@60584, T@60867, T@77336 11/12'},

{id:'P8S-056', skill:'case', prof:'Patel', tier:'new', topic:'p8s-skin', sub:'abcde', concept:'p8s-abcde-case-evolving',
 tags:['case','abcde'], source:'both',
 stem:'A woman has had a 4-millimeter mole on her cheek for years. Its halves match, its edge is smooth and it is one even shade of tan. She says that over the past few weeks it has changed. Which ABCDE identifier of skin cancer does the mole show, and what does the pharmacist advise?',
 options:[
  {t:'Evolving; have a health care provider look at it', correct:true, why:'Slide 28: "Evolving: the mole has changed over the past few weeks or months." Slide 37: a suspicious skin lesion is looked at by a health care provider.'},
  {t:'Evolving; apply broad-spectrum sunscreen and recheck in 3 months', correct:false, why:'The identifier is right. Sunscreen is prevention; a suspicious lesion is looked at by a health care provider (slide 37).'},
  {t:'Diameter; have a health care provider look at it', correct:false, why:'The advice is right. The mole is 4 millimeters, under the 6 millimeters on slide 28; what she reports is change over weeks, which is Evolving.'},
  {t:'Diameter; apply broad-spectrum sunscreen and recheck in 3 months', correct:false, why:'The mole is under 6 millimeters, and a mole that has changed is looked at by a health care provider (slides 28, 37).'}],
 teach:TS, cite:SUN+' slides 28, 37; T@60584, T@77336 11/12'},

{id:'P5-122', skill:'case', prof:'Patel', tier:'new', topic:'p5-dd', sub:'tx', concept:'p5-abcde-case-diaper',
 tags:['case','abcde'], source:'both',
 stem:'A father is treating his 5-month-old\'s diaper rash. He lets the area air dry, cleanses it gently with a soft cloth and warm water, and applies a barrier skin protectant liberally at every change. He changes the diaper every 5 hours during the day. Which letter of the ABCDE mnemonic is he not following?',
 options:[
  {t:'A = Air', correct:false, why:'He lets the area air dry, which is A (slide 62).'},
  {t:'B = Barrier', correct:false, why:'He applies a barrier skin protectant liberally with each change, which is B (slide 62).'},
  {t:'C = Cleansing', correct:false, why:'A soft cloth and warm water is C (slide 62).'},
  {t:'D = Diaper', correct:true, why:'Slide 62: "Change the diaper frequently (every 2 hours) and as soon as it is soiled." Every 5 hours is too long. In class: "A B C D E, every 2 hours" (T@82654 11/06).'}],
 teach:TD, cite:DER+' slide 62; T@74574, T@82654 11/06'},

{id:'P5-123', skill:'case', prof:'Patel', tier:'new', topic:'p5-dd', sub:'tx', concept:'p5-abcde-case-air',
 tags:['case','abcde'], source:'both',
 stem:'A caregiver looks after an adult with incontinence dermatitis. She changes the brief every 2 hours and as soon as it is soiled, cleanses gently with a soft cloth and warm water, and applies a barrier skin protectant with each change. She puts the clean brief on at once, while the skin is still damp. Which letter of the ABCDE mnemonic is she not following?',
 options:[
  {t:'A = Air', correct:true, why:'Slide 62: "Allow diaper area skin to air dry frequently; allow diaper-free time." She closes the brief over damp skin.'},
  {t:'B = Barrier', correct:false, why:'She applies a barrier skin protectant with each change, which is B (slide 62).'},
  {t:'C = Cleansing', correct:false, why:'A soft cloth and warm water is C (slide 62).'},
  {t:'D = Diaper', correct:false, why:'Every 2 hours and as soon as soiled is D (slide 62).'}],
 teach:TD+' The slide covers diaper and incontinence dermatitis; the same routine applies to adults (T@72900 11/06).', cite:DER+' slide 62; T@72900, T@74574 11/06'},

{id:'P8S-057', skill:'tell', prof:'Patel', tier:'new', topic:'p8s-skin', sub:'abcde', concept:'p8s-abcde-two-mnemonics', multi:true,
 tags:['select-all','abcde','two-facts'], source:'both',
 stem:'Select all that apply. Which of these are identifiers in the ABCDE rule for skin cancer?',
 options:[
  {t:'Asymmetry', correct:true, why:'Skin cancer A: the shape of one half does not match the other (Patel Sun Exposure slide 28).'},
  {t:'Barrier', correct:false, why:'Diaper dermatitis B: apply a barrier skin protectant (Patel Dermatitis slide 62). Skin cancer B is Border.'},
  {t:'Color', correct:true, why:'Skin cancer C: color that is uneven (Patel Sun Exposure slide 28).'},
  {t:'Cleansing', correct:false, why:'Diaper dermatitis C (Patel Dermatitis slide 62). Skin cancer C is Color.'},
  {t:'Diameter', correct:true, why:'Skin cancer D: most melanomas are larger than 6 millimeters (Patel Sun Exposure slide 28).'},
  {t:'Education', correct:false, why:'Diaper dermatitis E (Patel Dermatitis slide 62). Skin cancer E is Evolving.'}],
 teach:'"A B C D E rule applies here again, but a little different than diaper dermatitis" (T@60584 11/12). Skin cancer identifiers: Asymmetry, Border, Color, Diameter, Evolving (Patel Sun Exposure slide 28). Diaper dermatitis treatment: Air, Barrier, Cleansing, Diaper, Education (Patel Dermatitis slide 62).',
 cite:SUN+' slide 28; T@60584 11/12'}
);
})();

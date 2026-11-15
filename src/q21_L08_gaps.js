/* q21_L08_gaps.js: Lecture 8 points Dr. Patel stressed that had no question (gap list of 2026-11-15).
   Sources: Patel_Outdoor-Exposures-Student.pdf slides 29 (Lyme, later disease), 36 (bee/wasp/scorpion stings);
   Patel_Sun-Exposure-Student.pdf slides 36-37 (counseling points), 9 (highest risk); Patel_Wound-Care.pdf slide 10
   (minimize scarring), 11, 15; transcript 11/12: Lyme T@17468, scorpion T@23012, Fitzpatrick T@48493 and T@52599,
   counseling points T@66570, scarring T@81163 (character offsets in DEENT_Lecture_11.12_transcript.txt).
   The Fitzpatrick type-by-type behavior is in the transcript only; the slides name types 1, 2 (slide 9) and IV, VI. */
(() => {
const OUT = 'Lecture 8 (Patel_Outdoor-Exposures-Student.pdf)';
const SUN = 'Lecture 8 (Patel_Sun-Exposure-Student.pdf)';
const WND = 'Lecture 8 (Patel_Wound-Care.pdf)';
// a sub for the scarring slide, which the wound topics did not list
try {
  const t = TOPICS.find(x => x.id === 'p8w-heal');
  if (t && !t.subs.some(s => s.id === 'scar')) {
    t.subs.push({id:'scar', name:'Minimizing scarring', cite:'slide 10'});
    t.cite = 'slides 10, 25 · taught 11/12 (Lecture 8)';
  }
} catch (e) {}
QUESTIONS.push(
{id:'P8O-070', skill:'case', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'lyme', concept:'p8o-lyme-neuro-iv',
 tags:['case','numbers','gap'], source:'both',
 stem:'A man is admitted with Lyme disease that has neurologic manifestations. Which treatment and duration does the team choose?',
 options:[
  {t:'Oral doxycycline for 10 days', correct:false, why:'Slide 29: 10 days of oral doxycycline is for the early skin lesion (erythema migrans), not neurologic disease.'},
  {t:'Oral amoxicillin for 14 days', correct:false, why:'Slide 29: amoxicillin 14 days is an early skin lesion regimen; neurologic disease is IV ceftriaxone, penicillin G or oral doxycycline for 14 to 21 days.'},
  {t:'IV ceftriaxone for 14 to 21 days', correct:true, why:'Slide 29: "Neurologic manifestations: treat with IV ceftriaxone, penicillin G or oral doxycycline 14 to 21 days". She said the same for inpatients (T@17468 11/12).'},
  {t:'Oral azithromycin for 7 days', correct:false, why:'Slide 29: azithromycin 7 days is the second-line agent for the early skin lesion.'}],
 teach:'Slide 29: early skin lesion 7 to 14 days by drug (doxycycline 10, amoxicillin 14, cefuroxime 14, azithromycin 7); neurologic manifestations 14 to 21 days; cardiac 14 to 21 days; arthritic oral antibiotics 28 days.',
 cite:OUT+' slide 29; T@17468 11/12'},

{id:'P8O-071', skill:'case', prof:'Patel', tier:'new', topic:'p8o-vector', sub:'lyme', concept:'p8o-lyme-cardiac-oral',
 tags:['case','numbers','gap'], source:'both',
 stem:'A woman with Lyme disease has cardiac manifestations. She is not hospitalized. Which treatment and duration is listed for her?',
 options:[
  {t:'Oral cefuroxime axetil for 14 to 21 days', correct:true, why:'Slide 29: cardiac manifestations, non-hospitalized: oral doxycycline, amoxicillin, cefuroxime axetil or azithromycin for 14 to 21 days.'},
  {t:'Oral doxycycline for 10 days', correct:false, why:'Slide 29: 10 days is the early skin lesion course; cardiac manifestations are 14 to 21 days.'},
  {t:'Oral amoxicillin for 7 days', correct:false, why:'Slide 29: amoxicillin is listed for cardiac disease, but for 14 to 21 days, not 7.'},
  {t:'IV ceftriaxone for 14 to 21 days', correct:false, why:'Slide 29: IV ceftriaxone is for the hospitalized patient with cardiac manifestations; the non-hospitalized patient takes an oral drug.'}],
 teach:'Slide 29 and T@17468 11/12: cardiac manifestations are IV ceftriaxone when hospitalized and an oral antibiotic when not, both for 14 to 21 days.',
 cite:OUT+' slide 29; T@17468 11/12'},

{id:'P8O-072', skill:'case', prof:'Patel', tier:'new', topic:'p8o-sting', sub:'fu', concept:'p8o-scorpion-day7-refer',
 tags:['case','referral','gap'], source:'both',
 stem:'A 30-year-old was stung on the forearm by a scorpion while camping. For 7 days she has used cold packs and a topical product for the pain. It has not improved. She has no hives, dizziness, nausea or trouble breathing. What is the next step?',
 options:[
  {t:'Repeat the same treatment for 7 more days', correct:false, why:'Slide 36: after 7 days of topical treatment without improvement, the patient is triaged to a provider.'},
  {t:'Refer her to a health care provider', correct:true, why:'Slide 36: bee/wasp/scorpion stings, triage to a provider after 7 days of topical treatment. "7-day referral policy applies here as well ... including bee, wasps, and scorpion stings" (T@23012 11/12).'},
  {t:'Add a second topical product for 7 days', correct:false, why:'Slide 36 sends the patient on after 7 days of topical treatment; it does not add another product.'},
  {t:'Recheck her at the pharmacy in 7 days', correct:false, why:'Slide 36: referral, not a second pharmacy check, after 7 days of topical treatment.'}],
 teach:'Slide 36 covers bee, wasp and scorpion stings: emergency care immediately for a severe reaction history, or hives, dizziness, nausea/vomiting or difficulty breathing at any time after the sting; otherwise triage to a provider after 7 days of topical treatment.',
 cite:OUT+' slide 36; T@23012 11/12'},

{id:'P8O-073', skill:'case', prof:'Patel', tier:'new', topic:'p8o-sting', sub:'fu', concept:'p8o-scorpion-emergency',
 tags:['case','referral','gap'], source:'both',
 stem:'A hiker was stung on the foot by a scorpion 2 hours ago. The pain is mild, but he now feels dizzy and has hives on his chest. What does the pharmacist advise?',
 options:[
  {t:'Emergency care immediately', correct:true, why:'Slide 36: bee/wasp/scorpion stings, emergency care immediately for hives, dizziness, N/V or difficulty breathing at any time after the sting.'},
  {t:'Treat the foot with a cold pack and watch for 7 days', correct:false, why:'Slide 36: 7 days of topical treatment is for a sting with no emergency signs; hives and dizziness are emergency signs.'},
  {t:'Apply a topical anesthetic and recheck in 2 days', correct:false, why:'Slide 36: hives and dizziness need emergency care now, not local treatment.'},
  {t:'Recommend a topical antihistamine for the hives', correct:false, why:'Slide 36: hives after a sting call for emergency care; they are not treated at the pharmacy.'}],
 teach:'The 7-day referral rule applies to local symptoms only. Hives, dizziness, nausea/vomiting, difficulty breathing or a severe reaction history is emergency care immediately (slide 36).',
 cite:OUT+' slide 36; T@22511, T@23012 11/12'},

{id:'P8S-058', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'couns', concept:'p8s-expiration-discard',
 tags:['counsel','gap'], source:'both',
 stem:'A man pulls a half-full bottle of sunscreen out of his beach bag. The expiration date on it has passed. What does the pharmacist advise?',
 options:[
  {t:'Apply twice as much of it', correct:false, why:'Slide 36 says to check expiration dates; an expired product is not effective (T@66570), and more of it does not fix that.'},
  {t:'Use it only on cloudy days', correct:false, why:'Slide 36: check expiration dates. An expired sunscreen is discarded, not kept for lighter use (T@66570).'},
  {t:'Throw it out and buy a new one', correct:true, why:'Slide 36: "Check expiration dates". "There may be some that may be expired, but throw them out cause they\'re not effective anymore" (T@66570 11/12).'},
  {t:'Keep it in the shade and reuse it', correct:false, why:'Slide 36 also says to keep the product out of direct sunlight, but storage does not make an expired product effective again (T@66570).'}],
 teach:'Slide 36 counseling points include: check expiration dates and keep the product out of direct sunlight. Expired sunscreen is thrown out (T@66570 11/12).',
 cite:SUN+' slide 36; T@66570 11/12'},

{id:'P8S-059', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'couns', concept:'p8s-snow-sand-reflect',
 tags:['counsel','gap'], source:'both',
 stem:'A man is leaving for a day of skiing. It is 20 degrees outside and he says he will not need sunscreen because it is cold. What does the pharmacist counsel?',
 options:[
  {t:'Snow absorbs UV, so skip sunscreen', correct:false, why:'Slide 37: snow and sand reflect UVR; they do not absorb it.'},
  {t:'Snow reflects UV, so protect exposed skin', correct:true, why:'Slide 37: "Snow and sand reflect UVR, protect exposed skin". "It\'s wintertime, I don\'t need to wear sunscreen. You still do ... it still reflects sunlight" (T@66570 11/12).'},
  {t:'Cold air blocks UV, so skip sunscreen', correct:false, why:'Slide 37: snow and sand reflect UVR, so exposed skin is protected whatever the temperature.'},
  {t:'Snow reflects UV, so reapply every 4 hours', correct:false, why:'The reflection point is right, but slide 36 says to reapply at least every 40 to 80 minutes, as labelled.'}],
 teach:'Slide 37: snow and sand reflect UVR, so exposed skin is protected in winter too, though not to the same extent as in summer (T@66570 11/12).',
 cite:SUN+' slides 36–37; T@66570 11/12'},

{id:'P8S-060', skill:'counsel', prof:'Patel', tier:'new', topic:'p8s-prot', sub:'couns', concept:'p8s-stop-product-reaction',
 tags:['counsel','gap'], source:'both',
 stem:'A woman tried a new sunscreen yesterday. Today her face is red, itchy and has a rash where she applied it. What does the pharmacist advise?',
 options:[
  {t:'Stop using the product', correct:true, why:'Slide 37: "Stop using any product that causes redness, itching, rash or exaggerated sunburn" (T@66570 11/12).'},
  {t:'Apply it less often', correct:false, why:'Slide 37: the product that causes redness, itching or rash is stopped, not used less.'},
  {t:'Continue it with hydrocortisone cream', correct:false, why:'Slide 37: stop any product that causes redness, itching or rash; it is not continued with another product.'},
  {t:'Continue it at a lower amount', correct:false, why:'Slide 37: stop any product that causes redness, itching, rash or exaggerated sunburn.'}],
 teach:'Slide 37: stop any product that causes redness, itching, rash or exaggerated sunburn. A suspicious skin lesion is looked at by a health care provider.',
 cite:SUN+' slide 37; T@66570 11/12'},

{id:'P8S-061', skill:'case', prof:'Patel', tier:'new', topic:'p8s-risk', sub:'risk', concept:'p8s-fitzpatrick-type-4',
 tags:['case','gap'], source:'transcript',
 stem:'A patient has olive skin. He says he rarely burns but often tans. Which Fitzpatrick type is he?',
 options:[
  {t:'Type 2', correct:false, why:'T@48493: type 2 is fair skin that usually burns and sometimes tans.'},
  {t:'Type 3', correct:false, why:'T@48493: type 3 is medium skin that sometimes burns but usually tans.'},
  {t:'Type 4', correct:true, why:'T@48493 11/12: "4 is that olive skin tone. We rarely burn, but we oftentimes tan."'},
  {t:'Type 5', correct:false, why:'T@48493: type 5 is brown skin that rarely burns and tans easily; type 4 is the olive skin tone.'}],
 teach:'T@48493 11/12: 1 very fair, burns easily, cannot tan; 2 fair, usually burns, sometimes tans; 3 medium, sometimes burns, usually tans; 4 olive, rarely burns, often tans; 5 brown, rarely burns, tans easily; 6 dark brown, never burns, always tans. Types 1 and 2 are the highest risk (slide 9).',
 cite:SUN+' slide 9; T@48493, T@52599 11/12'},

{id:'P8W-031', skill:'counsel', prof:'Patel', tier:'new', topic:'p8w-heal', sub:'scar', concept:'p8w-scar-silicone',
 tags:['counsel','gap'], source:'both',
 stem:'A man has a healing cut on his forearm and asks how to keep it from scarring. Which product does the pharmacist suggest?',
 options:[
  {t:'Bacitracin ointment', correct:false, why:'Slide 11: first aid antibiotics are preventative, with limited evidence of efficacy; scar care is not their use (slide 10).'},
  {t:'Silicone sheets or gels', correct:true, why:'Slide 10, minimize scarring: silicone sheets or gels, laser therapy, avoid UVR exposure to the wound, and appropriate and consistent wound care. "Silicone sheets or gels are also an option" (T@81163 11/12).'},
  {t:'Hydrogen peroxide', correct:false, why:'Slide 15: antiseptics such as hydrogen peroxide may cause cytotoxicity, reducing wound healing.'},
  {t:'Povidone-iodine', correct:false, why:'Slide 15: antiseptics such as povidone-iodine may cause cytotoxicity, reducing wound healing; scar care is on slide 10.'}],
 teach:'Slide 10, minimizing scarring: limit UV exposure to the wound, silicone sheets or gels, laser therapy, and appropriate and consistent wound care (T@81163 11/12).',
 cite:WND+' slides 10, 11, 15; T@81163 11/12'}
);
})();

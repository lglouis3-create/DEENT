/* ==========================================================================
   DRUG FACTS: bank questions mapped to Drug list facts (DEENT, course-level)
   --------------------------------------------------------------------------
   TEMPORARY course data for the Drug list tab (druglist_ui.js), to be replaced
   by the shared-kit Drug List feature. Read-only use of the bank: nothing
   here changes a question, and nothing is stored.

   A fact is one field of one Drug list card, `drugId:field` (the card ids of
   druglist_data.js). MAP lists, per bank question id, the facts that question
   tests. It was written on 2026-11-08 from each card's question pattern
   (DRUGLIST.questionsFor) matched against the question's stem and keyed
   answer only, with the field read from the question's skill and stem, then
   reviewed question by question: comparator drugs (named in the stem but not
   what the answer is about), pattern hits on another drug's text (PABA in a
   sulfonamide question), questions on a fact with a recorded conflict
   (metronidazole and rosacea) and the optional pages (lowYield) are left
   out. A question can map to several facts; a question left out is shown on
   no card. druglist_check.js checks that every mapping's question names its
   drug in the stem or keyed answer.

   Fields: FIELDS below. For a drug whose Reference line names no molecular
   target (DRUGLIST.hasTarget false) the `target` field is "How it acts".

   status(): the plan's status words (DEENT Drug List plan §4.1), computed
   from the profile's saved bank answers ({qid, result, conf, at}):
     Not practiced        no answer to any of the fact's questions
     Forgot               the last answer was wrong
     Right, but unsure    the last answer was right with "Not sure" (conf
                          'shaky') or "I guessed" (result 'guessed')
     Remembered           the last answer was right, with no unsure flag
     Kept on a later day  right, and an earlier right answer on an earlier
                          calendar day with only right answers in between
                          (repeats on the same day never count)
   Bank answers are multiple choice: recognition evidence. "Due for review"
   is the core scheduler's state of the questions' concepts, passed in.
   ========================================================================== */
const DRUGFACTS = (() => {
  const FIELDS = {class: 'Class', use: 'Indication', potency: 'Potency class', target: 'Target', mech: 'Mechanism', why: 'Why it helps',
    ae: 'Adverse effects', boxed: 'Boxed warning', photo: 'Photosensitivity', counsel: 'Counseling', pk: 'PK and interactions', chem: 'Chemistry and structure'};
  const MAP = {
    // L1
    'L1-049': ['bpo:target', 'isotretinoin:mech'], 'L1-050': ['salicylic:target'], 'L1-105': ['tretinoin:target'],
    // L2
    'L2-011': ['adapalene:photo'], 'L2-014': ['tretinoin:pk'], 'L2-016': ['tretinoin:counsel'], 'L2-017': ['adapalene:photo'], 'L2-018': ['adapalene:ae'],
    'L2-019': ['adapalene:ae', 'adapalene:use'], 'L2-020': ['tazarotene:use'], 'L2-021': ['tazarotene:photo'], 'L2-022': ['tazarotene:counsel'],
    'L2-023': ['isotretinoin:use'], 'L2-024': ['isotretinoin:why'], 'L2-026': ['isotretinoin:ae'], 'L2-027': ['isotretinoin:ae'], 'L2-028': ['isotretinoin:ae'],
    'L2-029': ['isotretinoin:counsel'], 'L2-030': ['isotretinoin:counsel'], 'L2-031': ['acitretin:use'], 'L2-032': ['acitretin:ae'], 'L2-033': ['acitretin:pk'],
    'L2-034': ['acitretin:counsel'], 'L2-035': ['acitretin:counsel'], 'L2-036': ['acitretin:counsel'], 'L2-037': ['acitretin:counsel'],
    'L2-038': ['calcipotriene:class'], 'L2-039': ['calcipotriene:target'], 'L2-040': ['calcipotriene:target'], 'L2-041': ['calcipotriene:why'],
    'L2-042': ['calcipotriene:ae', 'calcipotriene:photo'], 'L2-043': ['calcipotriene:counsel'], 'L2-044': ['calcipotriene:ae'], 'L2-045': ['calcipotriene:ae'],
    'L2-046': ['calcipotriene:counsel'], 'L2-047': ['calcipotriene:ae'], 'L2-059': ['cyclosporine:target'], 'L2-060': ['tacrolimus:target'],
    'L2-061': ['tacrolimus:target', 'cyclosporine:target'], 'L2-062': ['tacrolimus:counsel', 'cyclosporine:counsel'], 'L2-063': ['pimecrolimus:use', 'tacrolimus:use'],
    'L2-065': ['pimecrolimus:pk'], 'L2-066': ['pimecrolimus:counsel'], 'L2-070': ['cyclosporine:use'], 'L2-071': ['cyclosporine:counsel'],
    'L2-073': ['cyclosporine:boxed'], 'L2-074': ['tacrolimus:ae', 'cyclosporine:ae'], 'L2-076': ['cyclosporine:ae'], 'L2-077': ['tacrolimus:ae'],
    'L2-078': ['tacrolimus:ae'], 'L2-079': ['tacrolimus:pk', 'cyclosporine:pk'], 'L2-083': ['crisaborole:use'], 'L2-084': ['crisaborole:counsel'],
    'L2-086': ['apremilast:use'], 'L2-087': ['apremilast:ae'], 'L2-088': ['apremilast:counsel'], 'L2-089': ['apremilast:pk'], 'L2-091': ['bpo:target'],
    'L2-092': ['bpo:why'], 'L2-093': ['bpo:pk'], 'L2-094': ['bpo:ae'], 'L2-095': ['bpo:counsel'], 'L2-096': ['bpo:ae'], 'L2-097': ['sulfur:target'],
    'L2-098': ['sulfur:why'], 'L2-099': ['sulfur:ae'], 'L2-100': ['sulfur:ae'], 'L2-101': ['salicylic:target'], 'L2-102': ['salicylic:counsel'],
    'L2-103': ['salicylic:use'], 'L2-104': ['salicylic:ae'], 'L2-105': ['salicylic:counsel'], 'L2-106': ['salicylic:ae'], 'L2-107': ['salicylic:counsel'],
    'L2-108': ['salicylic:counsel'], 'L2-115': ['crisaborole:target'], 'L2-116': ['pimecrolimus:target'], 'L2-117': ['cyclosporine:boxed'],
    // L3
    'L3-001': ['minocycline:target', 'doxycycline:target'], 'L3-004': ['doxycycline:counsel'], 'L3-006': ['doxycycline:counsel', 'doxycycline:photo'],
    'L3-008': ['sarecycline:pk', 'minocycline:pk', 'doxycycline:pk'], 'L3-009': ['minocycline:ae'], 'L3-010': ['doxycycline:counsel'], 'L3-011': ['clindamycin:target'],
    'L3-012': ['clindamycin:ae'], 'L3-013': ['clindamycin:ae'], 'L3-014': ['clindamycin:counsel'], 'L3-015': ['clindamycin:ae'], 'L3-016': ['minocycline:target'],
    'L3-017': ['erythromycin:ae', 'azithromycin:ae'], 'L3-018': ['erythromycin:ae'], 'L3-019': ['doxycycline:target', 'clindamycin:target', 'erythromycin:target'],
    'L3-020': ['tmpsmx:target'], 'L3-021': ['tmpsmx:target'], 'L3-023': ['dapsone:target'], 'L3-024': ['dapsone:why'], 'L3-025': ['dapsone:use'],
    'L3-028': ['metronidazole:target'], 'L3-029': ['metronidazole:counsel'], 'L3-030': ['coaltar:why'], 'L3-031': ['coaltar:target'], 'L3-032': ['coaltar:chem'],
    'L3-033': ['coaltar:ae', 'coaltar:photo'], 'L3-034': ['coaltar:counsel'], 'L3-035': ['anthralin:chem'], 'L3-036': ['anthralin:target'],
    'L3-037': ['anthralin:ae'], 'L3-038': ['anthralin:counsel'], 'L3-039': ['anthralin:counsel'], 'L3-040': ['anthralin:counsel'], 'L3-041': ['anthralin:counsel'],
    'L3-042': ['coaltar:photo', 'shaletar:photo'], 'L3-043': ['shaletar:use'], 'L3-044': ['selenium:target', 'zpt:target'], 'L3-045': ['methotrexate:target'],
    'L3-046': ['methotrexate:chem'], 'L3-047': ['tmpsmx:target', 'methotrexate:target'], 'L3-048': ['methotrexate:mech'], 'L3-049': ['methotrexate:why'],
    'L3-050': ['methotrexate:ae'], 'L3-051': ['methotrexate:counsel'], 'L3-052': ['methotrexate:counsel'], 'L3-053': ['methotrexate:counsel'],
    'L3-054': ['methotrexate:counsel'], 'L3-057': ['abatacept:mech'], 'L3-058': ['abatacept:chem'], 'L3-059': ['abatacept:target'], 'L3-061': ['abatacept:class'],
    'L3-062': ['abatacept:mech'], 'L3-063': ['abatacept:why'], 'L3-064': ['dupilumab:target'], 'L3-065': ['dupilumab:target'], 'L3-067': ['dupilumab:use'],
    'L3-068': ['dupilumab:ae'], 'L3-069': ['dupilumab:ae'], 'L3-071': ['secukinumab:target'], 'L3-072': ['secukinumab:chem', 'ixekizumab:chem'],
    'L3-073': ['brodalumab:target'], 'L3-074': ['secukinumab:counsel'], 'L3-076': ['guselkumab:target', 'ixekizumab:target'], 'L3-077': ['guselkumab:chem', 'secukinumab:chem', 'brodalumab:chem'],
    'L3-078': ['ustekinumab:target'], 'L3-080': ['ustekinumab:counsel'], 'L3-081': ['ustekinumab:ae'], 'L3-082': ['ustekinumab:ae'], 'L3-083': ['ustekinumab:ae'],
    'L3-084': ['ustekinumab:target', 'guselkumab:target'], 'L3-085': ['guselkumab:chem', 'tildrakizumab:chem'], 'L3-086': ['risankizumab:use'],
    'L3-087': ['risankizumab:ae'], 'L3-091': ['etanercept:chem'], 'L3-092': ['etanercept:ae'], 'L3-093': ['infliximab:chem'], 'L3-094': ['infliximab:ae'],
    'L3-095': ['infliximab:counsel'], 'L3-096': ['infliximab:ae'], 'L3-097': ['infliximab:ae'], 'L3-098': ['adalimumab:ae', 'infliximab:ae'],
    'L3-099': ['certolizumab:pk'], 'L3-100': ['certolizumab:pk'], 'L3-101': ['adalimumab:chem', 'golimumab:chem'], 'L3-103': ['ruxolitinib:chem', 'upadacitinib:chem', 'tofacitinib:chem'],
    'L3-104': ['ruxolitinib:target'], 'L3-105': ['upadacitinib:target'], 'L3-106': ['tofacitinib:boxed'], 'L3-107': ['etanercept:boxed', 'adalimumab:boxed', 'tofacitinib:boxed'],
    'L3-108': ['tofacitinib:pk'], 'L3-109': ['sarecycline:target'], 'L3-111': ['doxycycline:photo', 'sarecycline:photo', 'minocycline:photo'],
    'L3-113': ['minocycline:pk', 'doxycycline:pk'], 'L3-114': ['risankizumab:target'], 'L3-117': ['tofacitinib:ae'], 'L3-118': ['cyclosporine:boxed'],
    // L3C
    'L3C-001': ['methoxsalen:mech'], 'L3C-002': ['methoxsalen:mech'], 'L3C-003': ['methoxsalen:why'], 'L3C-004': ['methoxsalen:mech'], 'L3C-005': ['methoxsalen:ae'],
    'L3C-006': ['methoxsalen:ae'], 'L3C-007': ['methoxsalen:why'], 'L3C-044': ['doxycycline:photo', 'coaltar:photo', 'tazarotene:photo', 'methoxsalen:photo'],
    'L3C-053': ['zincoxide:class', 'tio2:class'], 'L3C-057': ['oxybenzone:ae'], 'L3C-058': ['padimate:ae'], 'L3C-059': ['meradimate:ae'],
    'L3C-060': ['avobenzone:ae'], 'L3C-062': ['padimate:ae', 'oxybenzone:ae', 'avobenzone:ae'], 'L3C-065': ['tio2:class', 'tio2:target'],
    'L3C-066': ['oxybenzone:target', 'avobenzone:target'],
    // S3
    'S3-008': ['crisaborole:chem'], 'S3-009': ['crisaborole:chem'], 'S3-010': ['crisaborole:pk'], 'S3-012': ['crisaborole:pk'], 'S3-013': ['crisaborole:pk'],
    'S3-014': ['crisaborole:pk'], 'S3-015': ['crisaborole:pk'], 'S3-016': ['crisaborole:pk'], 'S3-017': ['crisaborole:pk'], 'S3-018': ['crisaborole:chem'],
    'S3-019': ['crisaborole:chem'], 'S3-020': ['crisaborole:target'], 'S3-021': ['crisaborole:pk'], 'S3-022': ['crisaborole:pk'], 'S3-023': ['crisaborole:pk'],
    'S3-024': ['ruxolitinib:chem', 'upadacitinib:chem'], 'S3-025': ['ruxolitinib:pk', 'upadacitinib:pk'], 'S3-026': ['ruxolitinib:pk', 'upadacitinib:pk'],
    'S3-027': ['ruxolitinib:pk'], 'S3-028': ['ruxolitinib:pk'], 'S3-029': ['ruxolitinib:pk'], 'S3-037': ['methoxsalen:use'], 'S3-044': ['petrolatum:chem'],
    'S3-049': ['coaltar:chem'], 'S3-050': ['coaltar:photo'], 'S3-051': ['coaltar:counsel'], 'S3-052': ['shaletar:chem'], 'S3-053': ['anthralin:chem'],
    'S3-054': ['anthralin:chem'], 'S3-055': ['anthralin:chem'], 'S3-056': ['anthralin:target'], 'S3-057': ['anthralin:chem'], 'S3-058': ['anthralin:counsel'],
    'S3-059': ['anthralin:chem'], 'S3-061': ['methoxsalen:chem'], 'S3-062': ['methoxsalen:pk'], 'S3-063': ['ruxolitinib:pk', 'methoxsalen:pk'],
    'S3-064': ['methoxsalen:chem'], 'S3-065': ['methoxsalen:chem'], 'S3-066': ['methoxsalen:mech'], 'S3-067': ['anthralin:chem', 'methoxsalen:chem'],
    'S3-088': ['hydrocortisone:chem'], 'S3-091': ['clobetasol:potency'], 'S3-092': ['hydrocortisone:potency'], 'S3-094': ['clobetasol:chem', 'hydrocortisone:chem'],
    'S3-095': ['hydrocortisone:pk'], 'S3-096': ['hydrocortisone:pk'], 'S3-097': ['hydrocortisone:pk'], 'S3-098': ['hydrocortisone:pk'],
    'S3-099': ['hydrocortisone:pk'],
    // S4
    'S4-003': ['calcipotriene:counsel'], 'S4-005': ['calcipotriene:chem'], 'S4-015': ['pimecrolimus:pk', 'tacrolimus:pk'], 'S4-016': ['pimecrolimus:pk'],
    'S4-017': ['pimecrolimus:pk', 'tacrolimus:pk'], 'S4-018': ['pimecrolimus:chem', 'tacrolimus:chem'], 'S4-020': ['pimecrolimus:chem'],
    'S4-021': ['cyclosporine:chem'], 'S4-022': ['tazarotene:chem'], 'S4-023': ['tazarotene:pk'], 'S4-024': ['tazarotene:pk'], 'S4-026': ['acitretin:use'],
    'S4-028': ['methotrexate:chem'], 'S4-029': ['methotrexate:target'], 'S4-030': ['methotrexate:mech'], 'S4-031': ['methotrexate:target'],
    'S4-032': ['methotrexate:chem'], 'S4-033': ['methotrexate:chem'], 'S4-034': ['methotrexate:chem'], 'S4-035': ['methotrexate:chem'],
    'S4-036': ['methotrexate:chem'], 'S4-037': ['methotrexate:use'], 'S4-038': ['cyclosporine:chem'], 'S4-039': ['cyclosporine:chem'], 'S4-040': ['cyclosporine:pk'],
    'S4-041': ['cyclosporine:mech'], 'S4-042': ['cyclosporine:pk'], 'S4-043': ['cyclosporine:pk'], 'S4-044': ['apremilast:chem'], 'S4-045': ['apremilast:target'],
    'S4-046': ['apremilast:pk'], 'S4-047': ['apremilast:pk'], 'S4-053': ['bpo:class', 'sulfur:class', 'salicylic:class'], 'S4-056': ['salicylic:chem'],
    'S4-057': ['salicylic:chem'], 'S4-061': ['salicylic:ae'], 'S4-062': ['salicylic:pk'], 'S4-065': ['sulfur:target'], 'S4-066': ['sulfur:chem'],
    'S4-068': ['sulfur:ae'], 'S4-069': ['bpo:chem'], 'S4-070': ['bpo:chem'], 'S4-071': ['bpo:chem'], 'S4-075': ['tretinoin:chem', 'isotretinoin:chem'],
    'S4-076': ['isotretinoin:chem'], 'S4-077': ['tretinoin:use', 'isotretinoin:use'], 'S4-078': ['acitretin:pk'], 'S4-080': ['adapalene:chem', 'tazarotene:chem'],
    'S4-081': ['adapalene:chem', 'tazarotene:chem'], 'S4-085': ['spironolactone:chem'], 'S4-086': ['spironolactone:target', 'ketoconazole:target'],
    'S4-088': ['ketoconazole:pk'], 'S4-093': ['minocycline:pk', 'doxycycline:pk'], 'S4-094': ['minocycline:ae', 'doxycycline:ae'], 'S4-097': ['zincoxide:target', 'tio2:target'],
    'S4-101': ['avobenzone:counsel'], 'S4-103': ['octinoxate:ae'], 'S4-104': ['padimate:ae'], 'S4-105': ['octisalate:chem', 'homosalate:chem'],
    'S4-107': ['oxybenzone:ae'], 'S4-110': ['bemotrizinol:pk'], 'S4-111': ['oxybenzone:target', 'bemotrizinol:target'],  };
  /* drugId -> field -> [qid] */
  const BY = {};
  for (const [qid, fs] of Object.entries(MAP)) for (const f of fs) {
    const [id, field] = f.split(':');
    ((BY[id] = BY[id] || {})[field] = BY[id][field] || []).push(qid);
  }
  const dayOf = t => { const d = new Date(t); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); };
  const solid = a => a.result === 'correct' && a.conf !== 'shaky';
  /* The status of one fact from the answers to its questions (any order). */
  function status(answers, qids, dayKey){
    const day = dayKey || dayOf, set = new Set(qids);
    const at = (answers || []).filter(a => a && set.has(a.qid)).slice().sort((a, b) => a.at - b.at);
    const n = at.length, right = at.filter(a => a.result === 'correct' || a.result === 'guessed').length;
    if (!n) return {label: 'Not practiced', n, right, weak: false, last: null};
    const last = at[n - 1], base = {n, right, last: last.at};
    if (last.result === 'wrong') return Object.assign(base, {label: 'Forgot', weak: true});
    if (!solid(last)) return Object.assign(base, {label: 'Right, but unsure', weak: true});
    // the run of solid right answers that ends with the last one
    let i = n - 1; while (i > 0 && solid(at[i - 1])) i--;
    const kept = at.slice(i, n - 1).some(a => day(a.at) < day(last.at));
    return Object.assign(base, {label: kept ? 'Kept on a later day' : 'Remembered', weak: false});
  }
  return {FIELDS, MAP, BY, status, dayOf};
})();

const READ_LINKS = {
  byKey: [
    [/sentinel|ad-vs-pso|th1|th2|pso-cell-cycle|psoriatic-arthritis|acne-exacerbating/, [['tell', 'tell-l1-diseases', 'Tell apart: the three diseases']]],
    [/nrb-|hsp90|cs-local|rar-vs-rxr|rxr-/, [['tell', 'tell-l1-drugs', 'Tell apart: nuclear receptor binders']]],
    [/drug-classes|drug-map|salicylic/, [['ref', 'ref-l1-acnemap', 'Reference: acne pathology and drugs']]],
    [/cs-face|cs-maintenance|cs-occlusion/, [['ref', 'ref-l1-steroids', 'Reference: topical corticosteroids']]],
    [/rare|nrb-tfs/, [['ref', 'ref-l1-nr', 'Reference: nuclear receptors']]],
  ],
  bySub: {},
  byLecture: {},
};

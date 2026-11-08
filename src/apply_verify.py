#!/usr/bin/env python3
"""Merge the Atlas verification pass into atlas_data.json (one-off helper, kept
because it produced content; rerun only with a new verify.json).

It writes the ChEMBL-pass statuses. The PubChem pass (verify_pubchem.py
--merge) replaced them on 2026-11-06, so after any rerun of this script run
verify_pubchem.py --merge again before gen_atlas.py.

    python3 -I apply_verify.py <verify.json>

verify.json (written 2026-11-06 by a separate verification agent) holds, per
Atlas key: learning priority with reason and source, ChEMBL id and InChIKey
comparison; the lecture-vs-drug discrepancies with the SMILES of exactly what
the slide draws and SMARTS for the differing atoms; the excluded slides.

What this writes into each item: priority, priority_reason, priority_source,
verification, chembl_id, verification_note, exam; and for the confirmed
drawing discrepancies a `lecture` block {smiles, diff, slide, primary} and a
`discrepancy` block (texts shown under "Compare structures").
`primary` is False where another slide of the same deck draws the molecule
correctly (that drawing is then the main picture and the differing slide is
the comparison), True where the slide's drawing is the only lecture drawing.
"""
import json, re, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, 'atlas_data.json')

# Discrepancies shown with "Compare structures". The keys are the confirmed
# connectivity or stereo differences between a slide drawing and the drug;
# label-only or representation choices (benzoyl radical label, hyaluronic acid
# end caps, the generic R / X tiles, oxalic acid's name) stay as tile notes.
COMPARE = {
    # key: (primary is the lecture drawing?, slide of the differing drawing, plain highlight SMARTS lecture, verified)
    'padimate o': (True, 63, None, None),
    'octisalate': (True, 64, None, None),
    'erythromycin': (True, 54, None, None),
    'pimecrolimus': (False, 28, '[Cl][CH1;R1]', '[Cl][CH1;R1]'),
    'hydrocortisone': (False, 25, None, None),
    'clobetasol propionate': (False, 25, None, None),
}
# Short student-facing texts for "Compare structures" (facts from verify.json;
# his emphasis with its source location). The long forms stay in verify.json.
TEXT = {
 'padimate o': dict(
   lecture_shows='NH\u2082 on the ring (that molecule is 2-ethylhexyl 4-aminobenzoate).',
   verified_has='N(CH\u2083)\u2082 on the ring: 2-ethylhexyl 4-(dimethylamino)benzoate.',
   where='The ring substituent opposite the ester (para position), DPAW p. 63.',
   emphasized='Only that PABA and padimate O are rarely used because of PABA allergy (T@41904\u2013@42247).',
   changes_concept='No. Padimate O is a PABA ester either way, so the allergy point holds.'),
 'octisalate': dict(
   lecture_shows='The ester oxygen is bonded directly to the branch carbon (a 7-carbon heptan-3-yl chain).',
   verified_has='2-ethylhexyl ester: one CH\u2082 sits between the ester oxygen and the branch (8 carbons).',
   where='The alcohol side chain of the ester, DPAW p. 64.',
   emphasized='Salicylate sunscreens are esters that hydrolyze in skin to salicylic acid, giving some analgesia (T@42247\u2013@42800).',
   changes_concept='No. It is a salicylate ester either way; only the alcohol chain differs.'),
 'erythromycin': dict(
   lecture_shows='The amino sugar (desosamine) is drawn as a cyclohexane, with no ring oxygen.',
   verified_has='Desosamine is a pyranose sugar: its six-membered ring contains one oxygen.',
   where='The right-hand sugar carrying the N(CH\u2083)\u2082 group, DPAW p. 54.',
   emphasized='Erythromycin is a cyclic (macrolide) antibiotic, unlike linear azelaic acid; the details are left to the infectious disease course (T@34300\u2013@34700).',
   changes_concept='No. The large lactone ring that makes it a macrolide is the same.'),
 'pimecrolimus': dict(
   lecture_shows='On DPAW p. 28 the Cl is drawn on the opposite face to the OCH\u2083 (trans), the same way as tacrolimus\u2019s OH beside it.',
   verified_has='Cl on the same face as the OCH\u2083 (cis), as his Polleve-3 slide (DPAW p. 32) draws it.',
   where='The C\u2013Cl wedge on the cyclohexyl ring.',
   emphasized='Pimecrolimus and tacrolimus differ at Cl vs OH and ethyl vs allyl, and in skin permeation (T@4649\u2013@4734, @6022). He did not discuss stereochemistry.',
   changes_concept='No. The Cl-for-OH swap he taught is the same.'),
 'hydrocortisone': dict(
   lecture_shows='On DPAW p. 25, C20 is drawn as CH\u2013OH (an alcohol).',
   verified_has='A C20 ketone (C=O), as his slides on DPAW p. 24 and p. 26 draw it.',
   where='The side-chain carbon next to C21.',
   emphasized='Hydrocortisone is the reference molecule; on p. 25 he pointed to the changes made to it (C1=C2, 9\u03b1-F, 16-CH\u2083, 17-propionate): "not metabolism" (T 1140\u20131145, 1175\u20131179).',
   changes_concept='No. C20 is not one of the changes he marked.'),
 'clobetasol propionate': dict(
   lecture_shows='On DPAW p. 25, C21 carries an OH (that molecule is betamethasone 17-propionate).',
   verified_has='Cl on C21, as his derivatives slide (DPAW p. 24) draws it.',
   where='The end of the side chain (C21).',
   emphasized='The added groups and the C1=C2 bond raise potency from hydrocortisone to clobetasol (T 1175\u20131179). C21 is not highlighted.',
   changes_concept='No. The SAR changes he taught are the same in both drawings.'),
}
YESNO = {True: 'Yes', False: 'No', 'True': 'Yes', 'False': 'No'}
# InChIKeys are for the record (verify.json), not for students' eyes
KEYRX = re.compile(r'[;,]?\s*(InChIKey\s*)?[A-Z]{14}-[A-Z]{10}-[A-Z]\b')


def clean(t):
    return re.sub(r'\(\s*\)', '', KEYRX.sub('', t)).replace(' ;', ';').strip()


def main():
    v = json.load(open(sys.argv[1]))
    data = json.load(open(DATA))
    disc = {d['key']: d for d in v['discrepancies'] + v['other_differences']}
    n = 0
    for b in data['boards']:
        for s in b['sections']:
            for it in s['items']:
                m = v['items'][it['key']]
                it['priority'] = m['priority']
                it['priority_reason'] = m.get('priority_reason', '')
                it['priority_source'] = m.get('priority_source', '')
                it['verification'] = m['verification']
                if m.get('chembl_id'):
                    it['chembl_id'] = m['chembl_id']
                it['verification_note'] = m.get('verification_note', '')
                it['exam'] = 'Exam 1'
                it.pop('lecture', None); it.pop('discrepancy', None)
                if it['key'] in COMPARE:
                    primary, slide, lsm, vsm = COMPARE[it['key']]
                    d = disc[it['key']]
                    if str(d.get('confirmed')) != 'True':
                        raise ValueError('not confirmed: ' + it['key'])
                    ls = (lsm or d['lecture_diff_smarts']).split('  ')[0]
                    vs = (vsm or d['verified_diff_smarts']).split('  ')[0]
                    it['lecture'] = {'smiles': d['lecture_smiles'], 'diff': ls, 'slide': slide, 'primary': primary}
                    if str(d['changes_concept']) not in ('False', 'false'):
                        raise ValueError('a discrepancy that changes the concept needs its question review: ' + it['key'])
                    it['discrepancy'] = dict(TEXT[it['key']], verified_diff=vs)
                    n += 1
                if it['key'] == 'norgestimate' and 'norgestimate' in disc:
                    # the slide's drawing implies the E oxime, as ChEMBL has it
                    it['smiles'] = disc['norgestimate']['lecture_smiles']
    data['excluded'] = [{'item': x['item'], 'page': x['page'], 'quote': x['quote'], 'source': x['source']}
                        for x in v['excluded']]
    data['verification_summary'] = {'pages_36_37': v['pages_36_37'], 'count_reconciliation': v['count_reconciliation'],
                                    'checked': '2026-11-06, ChEMBL (EMBL-EBI) via InChIKey; PubChem not reachable from the build environment'}
    json.dump(data, open(DATA, 'w'), indent=1, ensure_ascii=False)
    print('merged metadata into %s; %d comparisons' % (DATA, n))


if __name__ == '__main__':
    main()

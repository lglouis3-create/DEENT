#!/usr/bin/env python3
"""Verify every Atlas structure against PubChem and ChEMBL (reproducible).

    python3 -I verify_pubchem.py            # writes verification/atlas_verification.json and .md
    python3 -I verify_pubchem.py --merge    # also writes the results into atlas_data.json

Sources, queried live (network: pubchem.ncbi.nlm.nih.gov and www.ebi.ac.uk):
  PubChem PUG-REST  https://pubchem.ncbi.nlm.nih.gov/rest/pug/
  ChEMBL REST       https://www.ebi.ac.uk/chembl/api/data/
RDKit computes the Atlas side (InChIKey, formula, stereocentres) from the SMILES
the Atlas draws.

For each item the PubChem record is found by, in order: the exact standard
InChIKey of the Atlas SMILES; the same connectivity (first InChIKey block);
the item's name. ChEMBL is read by the ChEMBL id the item already carries (from
the 2026-11-06 ChEMBL pass), with its parent record when it is a salt.

Status (one per item):
  exact               Atlas = PubChem (= ChEMBL where it has a record), full InChIKey
  exact-pubchem       Atlas = PubChem full key; no ChEMBL record
  stereo-unspecified  same connectivity; the Atlas, PubChem or ChEMBL leaves one or
                      more stereocentres undefined (no defined centre disagrees)
  stereo-differs      same connectivity; at least one defined centre or double bond
                      disagrees between sources
  salt-or-form        PubChem/ChEMBL record is a salt, hydrate or charged form of the
                      same parent
  tautomer            PubChem stores another tautomer (e.g. keto/enol); the structures
                      agree after RDKit tautomer canonicalization, and ChEMBL = Atlas
  teaching-structure  not a conventional drug record (skeleton, radical, inorganic
                      solid, polymer repeat unit, poll molecule): checked, not forced
  not-found           no PubChem record by key, connectivity or name
  mismatch            a record of the same name has different connectivity
Only items whose PubChem query succeeded carry pubchem_checked = true.
"""
import json, os, sys, time, datetime, urllib.request, urllib.parse, urllib.error
from rdkit import Chem, RDLogger
from rdkit.Chem.rdMolDescriptors import CalcMolFormula
from rdkit.Chem.MolStandardize import rdMolStandardize

RDLogger.DisableLog('rdApp.*')
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, 'atlas_data.json')
OUTDIR = os.path.join(HERE, 'verification')
PUG = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug'
CHEMBL = 'https://www.ebi.ac.uk/chembl/api/data'
PROPS = 'MolecularFormula,MolecularWeight,SMILES,InChIKey,IUPACName,Title'
# Tiles that are teaching structures by design: checked, never forced onto a drug record.
TEACHING = {'steroid numbering skeleton', 'glucocorticoid sar', 'alpha-hydroxy acid', 'beta-hydroxy acid',
            'benzoyl radical', 'zinc oxide', 'titanium dioxide', 'hyaluronic acid',
            'polleve-4 cyclopropyl hydroxy diacid', 'crisaborole benzyl alcohol metabolite',
            'crisaborole benzoic acid metabolite'}
DELAY = 0.25          # seconds between requests (PubChem asks automated clients to pace requests)


CACHE = os.environ.get('VERIFY_CACHE')   # optional directory of saved responses (not committed)
_cache = {}


def get(url, tries=5):
    if CACHE and not _cache:
        p = os.path.join(CACHE, 'responses.json')
        if os.path.exists(p):
            _cache.update(json.load(open(p)))
    if url in _cache:
        return _cache[url]
    for i in range(tries):
        try:
            time.sleep(DELAY)
            with urllib.request.urlopen(url, timeout=40) as r:
                out = json.load(r)
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                out = None; break
            if e.code in (429, 500, 502, 503, 504) and i < tries - 1:
                time.sleep(2 * (i + 1)); continue
            raise
        except (urllib.error.URLError, TimeoutError, OSError):   # includes connection resets
            if i < tries - 1:
                time.sleep(2 * (i + 1)); continue
            raise
    if CACHE:
        _cache[url] = out
        os.makedirs(CACHE, exist_ok=True)
        json.dump(_cache, open(os.path.join(CACHE, 'responses.json'), 'w'))
    return out


def pc_props(path):
    j = get('%s/compound/%s/property/%s/JSON' % (PUG, path, PROPS))
    return (j or {}).get('PropertyTable', {}).get('Properties', []) if j else []


def stereo(mol):
    centres = Chem.FindMolChiralCenters(mol, includeUnassigned=True, useLegacyImplementation=False)
    defined = [c for c in centres if c[1] != '?']
    dbl = [b for b in mol.GetBonds() if b.GetStereo() in (Chem.BondStereo.STEREOE, Chem.BondStereo.STEREOZ)]
    return len(defined), len(centres), len(dbl)


def parent_key(smiles):
    m = Chem.MolFromSmiles(smiles)
    if m is None:
        return None
    m = rdMolStandardize.ChargeParent(m)
    return Chem.MolToInchiKey(m)


_TE = rdMolStandardize.TautomerEnumerator()


def taut_key(smiles):
    m = Chem.MolFromSmiles(smiles)
    return Chem.MolToInchiKey(_TE.Canonicalize(m)) if m else None


def cip_conflicts(smi_a, smi_b):
    """Atoms whose defined CIP label (R/S) differs between two drawings of the same connectivity."""
    from rdkit.Chem import rdCIPLabeler
    ma, mb = Chem.MolFromSmiles(smi_a), Chem.MolFromSmiles(smi_b)
    if not ma or not mb:
        return None
    flat = Chem.MolFromSmiles(Chem.MolToSmiles(ma, isomericSmiles=False))
    ia, ib = ma.GetSubstructMatch(flat), mb.GetSubstructMatch(flat)
    if not ia or not ib:
        return None
    rdCIPLabeler.AssignCIPLabels(ma); rdCIPLabeler.AssignCIPLabels(mb)
    out = []
    for k in range(flat.GetNumAtoms()):
        la = ma.GetAtomWithIdx(ia[k]).GetPropsAsDict().get('_CIPCode')
        lb = mb.GetAtomWithIdx(ib[k]).GetPropsAsDict().get('_CIPCode')
        if la and lb and la != lb:
            out.append((ia[k], la, lb))
    return out


def same_drawing(smi_a, smi_b):
    """True when two SMILES are the same structure atom by atom (stereo ignored); InChI merges
    some tautomers (e.g. 4-OH / 4-oxo pteridine), so an equal InChIKey does not imply this."""
    ma, mb = Chem.MolFromSmiles(smi_a), Chem.MolFromSmiles(smi_b)
    if not ma or not mb:
        return None
    return Chem.MolToSmiles(ma, isomericSmiles=False) == Chem.MolToSmiles(mb, isomericSmiles=False)


# Teaching tiles whose exact PubChem record carries a misleading title: no CID on the tile.
NO_TILE_CID = {
    'titanium dioxide': 'PubChem CID 162651 holds these ions but is titled "Titanium oxide (Ti3O)"; '
                        'the titanium dioxide record is CID 26042 (O=[Ti]=O). No CID is shown on the tile.',
}


def verify(it):
    m = Chem.MolFromSmiles(it['smiles'])
    key = Chem.MolToInchiKey(m)
    sd, sc, sdb = stereo(m)
    r = {'key': it['key'], 'name': it['name'], 'slide': it['slide'], 'priority': it.get('priority'),
         'atlas': {'smiles': it['smiles'], 'formula': CalcMolFormula(m), 'inchikey': key,
                   'stereocentres_defined': sd, 'stereocentres': sc, 'stereo_double_bonds': sdb},
         'pubchem': None, 'chembl': None, 'pubchem_checked': False, 'how_found': None}
    # PubChem: exact key, then connectivity, then name
    hit = pc_props('inchikey/%s' % key)
    how = 'exact InChIKey' if hit else None
    if not hit:
        j = get('%s/compound/fastidentity/smiles/property/%s/JSON?identity_type=same_connectivity&smiles=%s'
                % (PUG, PROPS, urllib.parse.quote(it['smiles'], safe='')))
        hit = (j or {}).get('PropertyTable', {}).get('Properties', []) if j else []
        how = 'same connectivity' if hit else None
    if not hit:
        hit = pc_props('name/%s' % urllib.parse.quote(it['name'].split(' (')[0]))
        how = 'name' if hit else None
    r['pubchem_checked'] = True                      # the queries ran; whether a record was found is below
    if hit:
        # prefer the record whose key equals ours, then the lowest CID
        hit.sort(key=lambda p: (p.get('InChIKey') != key, p['CID']))
        p = hit[0]
        pm = Chem.MolFromSmiles(p['SMILES'])
        pd, pcn, pdb = stereo(pm) if pm else (None, None, None)
        r['pubchem'] = {'cid': p['CID'], 'title': p.get('Title'), 'formula': p['MolecularFormula'],
                        'mw': p.get('MolecularWeight'), 'smiles': p['SMILES'], 'inchikey': p['InChIKey'],
                        'stereocentres_defined': pd, 'stereocentres': pcn, 'stereo_double_bonds': pdb,
                        'other_cids_same_query': [x['CID'] for x in hit[1:6]]}
        r['how_found'] = how
    # ChEMBL
    cid = it.get('chembl_id') or it.get('chembl_rejected')   # a rejected record is rechecked each run
    if cid:
        c = get('%s/molecule/%s.json' % (CHEMBL, cid))
        if c:
            cs = c.get('molecule_structures') or {}
            parent = ((c.get('molecule_hierarchy') or {}).get('parent_chembl_id'))
            r['chembl'] = {'id': cid, 'pref_name': c.get('pref_name'),
                           'formula': (c.get('molecule_properties') or {}).get('full_molformula'),
                           'inchikey': cs.get('standard_inchi_key'), 'smiles': cs.get('canonical_smiles'),
                           'parent': parent}
    r['status'], r['detail'] = classify(it, r)
    if r['status'] not in ('teaching-structure', 'tautomer') and r['pubchem'] and same_drawing(it['smiles'], r['pubchem']['smiles']) is False:
        r['detail'] += (' The Atlas draws another tautomer than PubChem (as the slide does); InChI treats the two '
                        'as one molecule, so the keys agree.')
    if it['key'] in NO_TILE_CID:
        r['detail'] += ' ' + NO_TILE_CID[it['key']]
    return r


def classify(it, r):
    a, p, c = r['atlas'], r['pubchem'], r['chembl']
    ak = a['inchikey']
    pk = p['inchikey'] if p else None
    ck = c['inchikey'] if c else None
    if it['key'] in TEACHING:
        note = 'Teaching structure (not forced onto a drug record).'
        if pk == ak:
            note += ' PubChem holds this exact structure as CID %s.' % p['cid']
        elif p:
            note += ' Nearest PubChem record by %s: CID %s (%s).' % (r['how_found'], p['cid'], p.get('title'))
        else:
            note += ' No PubChem record.'
        return 'teaching-structure', note
    if not p:
        return 'not-found', 'No PubChem record by InChIKey, connectivity or name.'
    if pk == ak and (ck is None or ck == ak):
        return ('exact' if ck else 'exact-pubchem'), ('Atlas = PubChem CID %s%s (full InChIKey).' %
                                                        (p['cid'], ' = ChEMBL %s' % c['id'] if ck else ''))
    if pk == ak and ck and ck != ak:
        if ck[:14] == ak[:14]:
            conf = cip_conflicts(a['smiles'], c['smiles']) if c.get('smiles') else None
            if conf:
                r['chembl_wrong_record'] = c['id']
                j = get('%s/molecule.json?molecule_structures__standard_inchi_key=%s' % (CHEMBL, ak))
                r['chembl_by_key'] = [m['molecule_chembl_id'] for m in (j or {}).get('molecules', [])]
                return 'exact-pubchem', ('Atlas = PubChem CID %s (full InChIKey). ChEMBL %s is another stereoisomer '
                                         '(%s), not this molecule; ChEMBL records with this InChIKey: %s. No ChEMBL id is given.'
                                         % (p['cid'], c['id'], '; '.join('atom index %d of the Atlas SMILES: %s here, %s in ChEMBL' % x for x in conf),
                                            ', '.join(r['chembl_by_key']) or 'none'))
            cm = Chem.MolFromSmiles(c['smiles']) if c.get('smiles') else None
            cd = sum(stereo(cm)[::2]) if cm else None
            ad = a['stereocentres_defined'] + a['stereo_double_bonds']
            if cd is not None and cd > ad:
                why = 'ChEMBL %s defines %d stereo element(s); the Atlas, like the slide and PubChem CID %s, defines %d' % (c['id'], cd, p['cid'], ad)
            elif cd is not None and cd < ad:
                why = 'the Atlas and PubChem CID %s define %d stereo element(s); ChEMBL %s leaves %d of them open' % (p['cid'], ad, c['id'], ad - cd)
            else:
                why = 'ChEMBL %s differs from the Atlas and PubChem CID %s in the stereo layer only' % (c['id'], p['cid'])
            return 'stereo-unspecified', 'Same molecule; ' + why + '.'
        pak = parent_key(c['smiles']) if c and c.get('smiles') else None
        if pak == ak:
            return 'salt-or-form', 'Atlas = PubChem CID %s; ChEMBL %s is a salt/charged form of the same parent.' % (p['cid'], c['id'])
        return 'mismatch', 'Atlas = PubChem CID %s but ChEMBL %s has different connectivity.' % (p['cid'], c['id'])
    if pk and pk[:14] == ak[:14]:
        which = []
        if (a['stereocentres_defined'] < a['stereocentres']) or (p['stereocentres_defined'] is not None and p['stereocentres_defined'] < p['stereocentres']):
            which.append('undefined stereocentre(s)')
        if a['stereo_double_bonds'] != p['stereo_double_bonds']:
            which.append('double-bond geometry specified in one source only')
        if which:
            return 'stereo-unspecified', 'Same connectivity as PubChem CID %s; differs by %s.' % (p['cid'], ', '.join(which))
        return 'stereo-differs', 'Same connectivity as PubChem CID %s, but a defined stereocentre differs.' % p['cid']
    if taut_key(p['smiles']) == taut_key(r['atlas']['smiles']):
        return 'tautomer', ('PubChem CID %s stores another tautomer of the same molecule (equal after tautomer '
                            'canonicalization)%s.' % (p['cid'], '; ChEMBL %s = Atlas, full InChIKey' % c['id'] if ck == ak else ''))
    pak = parent_key(p['smiles'])
    if pak and pak[:14] == ak[:14]:
        return 'salt-or-form', 'PubChem CID %s is a salt/charged form of the Atlas structure.' % p['cid']
    return 'mismatch', 'PubChem record found by %s (CID %s, %s) has different connectivity.' % (r['how_found'], p['cid'], p.get('title'))


def main():
    data = json.load(open(DATA))
    items = [it for b in data['boards'] for s in b['sections'] for it in s['items']]
    today = datetime.date.today().isoformat()
    res = []
    for i, it in enumerate(items, 1):
        r = verify(it)
        r['date'] = today
        # the lecture drawing of a comparison: identify it too (it is a different molecule)
        if it.get('lecture'):
            lm = Chem.MolFromSmiles(it['lecture']['smiles'])
            lk = Chem.MolToInchiKey(lm)
            lp = pc_props('inchikey/%s' % lk)
            r['lecture_drawing'] = {'slide': it['lecture']['slide'], 'formula': CalcMolFormula(lm), 'inchikey': lk,
                                    'pubchem_cid': lp[0]['CID'] if lp else None,
                                    'pubchem_title': lp[0].get('Title') if lp else None}
        res.append(r)
        print('%2d/%d %-38s %-19s %s' % (i, len(items), it['key'][:38], r['status'], (r['pubchem'] or {}).get('cid', '')), flush=True)
    os.makedirs(OUTDIR, exist_ok=True)
    meta = {'date': today, 'sources': {'pubchem': PUG, 'chembl': CHEMBL, 'rdkit': Chem.rdBase.rdkitVersion},
            'items': len(res)}
    json.dump({'meta': meta, 'results': res}, open(os.path.join(OUTDIR, 'atlas_verification.json'), 'w'), indent=1, ensure_ascii=False)
    write_md(meta, res)
    if '--merge' in sys.argv:
        byk = {r['key']: r for r in res}
        for it in items:
            r = byk[it['key']]
            it['pubchem_checked'] = r['pubchem_checked']
            # a CID goes on the tile only when PubChem holds this structure (exactly, or as a
            # tautomer / with unspecified stereo); a teaching tile's nearest record stays in the note
            exactish = r['pubchem'] and (r['status'] != 'teaching-structure' or r['pubchem']['inchikey'] == r['atlas']['inchikey'])
            if exactish and it['key'] not in NO_TILE_CID:
                it['pubchem_cid'] = r['pubchem']['cid']
            else:
                it.pop('pubchem_cid', None)
            it['verification'] = r['status']
            it['verification_note'] = r['detail']
            if r.get('chembl_wrong_record'):
                it.pop('chembl_id', None)
                it['chembl_rejected'] = r['chembl_wrong_record']
            it['verification_date'] = today
            if it.get('lecture') and r.get('lecture_drawing'):
                it['lecture']['pubchem_cid'] = r['lecture_drawing']['pubchem_cid']
                it['lecture']['pubchem_title'] = r['lecture_drawing']['pubchem_title']
        json.dump(data, open(DATA, 'w'), indent=1, ensure_ascii=False)
        print('merged into', DATA)


def write_md(meta, res):
    from collections import Counter
    cnt = Counter(r['status'] for r in res)
    L = ['# Atlas verification (%s)' % meta['date'], '',
         'Generated by `src/verify_pubchem.py` from live PubChem PUG-REST and ChEMBL REST queries; RDKit %s computes the Atlas side.' % meta['sources']['rdkit'],
         '', '| Status | Items |', '|---|---|'] + ['| %s | %d |' % (k, v) for k, v in sorted(cnt.items())] + [
         '', '| Atlas key | Name | Deck p. | Priority | PubChem CID | ChEMBL | Status | Detail |', '|---|---|---|---|---|---|---|---|']
    for r in res:
        L.append('| %s | %s | %s | %s | %s | %s | %s | %s |' % (
            r['key'], r['name'], r['slide'], r['priority'], (r['pubchem'] or {}).get('cid', ''),
            ('none (%s rejected)' % r['chembl_wrong_record']) if r.get('chembl_wrong_record') else (r['chembl'] or {}).get('id', ''), r['status'], r['detail'].replace('|', '/')))
    lec = [r for r in res if r.get('lecture_drawing')]
    if lec:
        L += ['', '## Lecture drawings that differ from the drug', '', '| Atlas key | Lecture slide | Lecture drawing formula | PubChem identity of the lecture drawing |', '|---|---|---|---|']
        for r in lec:
            d = r['lecture_drawing']
            L.append('| %s | %s | %s | %s |' % (r['key'], d['slide'], d['formula'],
                     ('CID %s (%s)' % (d['pubchem_cid'], d['pubchem_title'])) if d['pubchem_cid'] else 'no PubChem record'))
        L += ['', 'The names in brackets are PubChem\'s record titles, quoted as PubChem gives them; two are imprecise '
              '(CID 165046 is 20-dihydrocortisol, a C20 alcohol; CID 16051947 differs from pimecrolimus at the '
              'C-Cl centre). The site shows only the CID, and the Compare structures texts state the difference.']
    L += ['', '## Independent review (2026-11-06)', '',
          'A separate reviewer recomputed all 91 InChIKeys and formulas with RDKit and compared them with the stored '
          'PubChem and ChEMBL records. Its findings and what was done:', '',
          '- 5beta-dihydrocortisol: the ChEMBL record previously linked (CHEMBL1079111) is the 5-alpha epimer. '
          'The link is removed and the status is exact-pubchem; the script rechecks that record on every run.',
          '- titanium dioxide: PubChem CID 162651 holds the drawn ions but is titled "Titanium oxide (Ti3O)"; '
          'no CID is shown on the tile.',
          '- folic acid, tetrahydrofolic acid (and ensulizole): the Atlas draws the slide\'s tautomer; '
          'the notes now say so, since the InChIKeys agree while the drawings differ atom by atom.',
          '- benzoyl radical: the slide labels it "benzoyl radical" and draws the benzoyloxy radical PhC(=O)O\u00b7; '
          'the tile keeps the slide\'s label (the questions use the lecture term) and its note states the drawn species.',
          '- tautomer status: RDKit tautomer canonicalization reached its enumeration limit for the tetracyclines; '
          'ChEMBL matches the Atlas by full InChIKey, which is the primary evidence.']
    open(os.path.join(OUTDIR, 'atlas_verification.md'), 'w').write('\n'.join(L) + '\n')


if __name__ == '__main__':
    main()

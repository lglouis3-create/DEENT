"""make_draft_images.py: numbered, unnamed structure panels for the Exam-1-style draft questions
(Louis 2026-11-13). Structures are the Atlas core structures (atlas_data.json, verified SMILES);
nothing is drawn from memory. Output: draft_images.json {key: data:image/webp;base64,...}
(the format of src/images.json) and PNG previews in ./preview/."""
import json, os, io, base64, sys
from rdkit import Chem
from rdkit.Chem import Draw
from rdkit.Chem.Draw import rdMolDraw2D
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ATLAS = json.load(open(os.path.join(HERE, '..', 'atlas_data.json'), encoding='utf-8'))
SMI = {}
for b in ATLAS['boards']:
    for s in b['sections']:
        for it in s.get('items', []):
            SMI[it['name']] = it
def smiles(name_start):
    exact = [v for k, v in SMI.items() if k.lower() == name_start.lower()]
    hits = exact or [v for k, v in SMI.items() if k.lower().startswith(name_start.lower())]
    assert len(hits) == 1, (name_start, [h['name'] for h in hits])
    assert hits[0].get('priority') == 'core', (name_start, hits[0].get('priority'))
    return hits[0]['smiles']

def panel(names, cols, cell=(330, 270), notes=None):
    """numbered 1..n, no names. notes: {index: [(atom_idx, label)]} drawn as small atom notes."""
    rows = (len(names) + cols - 1) // cols
    d = rdMolDraw2D.MolDraw2DCairo(cell[0] * cols, cell[1] * rows, cell[0], cell[1])
    o = d.drawOptions(); o.legendFontSize = 30; o.padding = 0.12; o.addAtomIndices = False; o.bondLineWidth = 2
    mols = [Chem.MolFromSmiles(smiles(n)) for n in names]
    d.DrawMolecules(mols, legends=[str(i + 1) for i in range(len(mols))])
    d.FinishDrawing()
    return d.GetDrawingText()

def to_webp_b64(png):
    im = Image.open(io.BytesIO(png)).convert('RGB'); out = io.BytesIO(); im.save(out, 'WEBP', quality=88)
    return 'data:image/webp;base64,' + base64.b64encode(out.getvalue()).decode()

def apremilast_groups():
    """the alkyl groups of apremilast that can be removed: a ethyl of the ethoxy, b methyl of the methoxy,
    c methyl of the methylsulfonyl, d methyl of the acetamide. Found by substructure, drawn with a letter."""
    m = Chem.MolFromSmiles(smiles('Apremilast'))
    pats = {'a': '[CH3][CH2]O', 'b': '[CH3]O[c]', 'c': '[CH3]S(=O)(=O)', 'd': '[CH3]C(=O)N'}
    cols = {'a': (0.95, 0.55, 0.1), 'b': (0.2, 0.55, 0.95), 'c': (0.2, 0.75, 0.3), 'd': (0.8, 0.25, 0.7)}
    hl, hc = [], {}
    for k, sma in pats.items():
        hits = m.GetSubstructMatches(Chem.MolFromSmarts(sma))
        assert len(hits) == 1, (k, hits)
        atoms = hits[0][:2] if k == 'a' else hits[0][:1]       # ethyl = two carbons; the others one carbon
        for i in atoms: hl.append(i); hc[i] = cols[k]
        m.GetAtomWithIdx(hits[0][0]).SetProp('atomNote', k)
    d = rdMolDraw2D.MolDraw2DCairo(620, 460); o = d.drawOptions(); o.padding = 0.1; o.bondLineWidth = 2; o.annotationFontScale = 0.9
    d.DrawMolecule(m, highlightAtoms=hl, highlightAtomColors=hc, highlightAtomRadii={i: 0.5 for i in hl}, highlightBonds=[])
    d.FinishDrawing()
    return d.GetDrawingText()

JOBS = {
  # key: (names in panel order, columns)
  'x-retinoids5': (['Tretinoin', 'Adapalene', 'Acitretin', 'Tazarotene (', 'Isotretinoin'], 3),
  'x-hydroxy5': (['Glycolic acid', 'Salicylic acid', 'Lactic acid', 'Azelaic acid', 'PABA'], 3),
  'x-steroid-or-not5': (['Tetracycline', 'Hydrocortisone', 'Spironolactone', 'Ketoconazole', 'Minocycline'], 3),
  'x-tetra4': (['Spironolactone', 'Doxycycline', 'Hydrocortisone', 'Azelaic acid'], 2),
}
if __name__ == '__main__':
    os.makedirs(os.path.join(HERE, 'preview'), exist_ok=True)
    out = {}
    for k, (names, cols) in JOBS.items():
        png = panel(names, cols); open(os.path.join(HERE, 'preview', k + '.png'), 'wb').write(png); out[k] = to_webp_b64(png)
    png = apremilast_groups(); open(os.path.join(HERE, 'preview', 'x-apremilast-groups.png'), 'wb').write(png); out['x-apremilast-groups'] = to_webp_b64(png)
    json.dump(out, open(os.path.join(HERE, 'draft_images.json'), 'w'))
    print({k: len(v) for k, v in out.items()})

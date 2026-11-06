#!/usr/bin/env python3
"""Build atlas.js (the Atlas tab) from atlas_data.json.

    python3 gen_atlas.py            # writes atlas.js
    python3 gen_atlas.py --png DIR  # also writes one PNG per structure, for
                                    # checking each drawing against its slide

atlas_data.json holds the boards the tab shows:

    {"boards": [{"id", "title", "intro", "note"?,
                 "sections": [{"label", "items": [
                     {"key", "name", "smiles", "slide", "tell", "eg"?,
                      "mark"?: "<SMARTS of the feature to shade>"}]}]}]}

`key` is the name questions use (`fg:` and option texts); `name` is what the
tile prints; `tell` says what to look at and carries its source (slide or
transcript); `slide` is the PDF page of the deck the drawing was checked
against. Drawings come from the SMILES through RDKit and are written as SVG
whose bonds follow the page's text colour and whose heteroatoms use the page's
--at-* colours, so they read in light and dark mode. A `mark` SMARTS shades
the matched atoms and bonds with --wash, the Atlas's highlighter.

Every structure is checked against the deck by eye before it ships (see the
course's reviews/LOG.md); the script only draws what the data says.
"""
import json, os, re, sys
from rdkit import Chem
from rdkit.Chem import AllChem, rdDepictor
from rdkit.Chem.Draw import rdMolDraw2D

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, 'atlas_data.json')
OUT = os.path.join(HERE, 'atlas.js')

# sentinel colours, replaced by CSS variables after drawing
_c = lambda r, g, b: (r / 255.0, g / 255.0, b / 255.0)
SENT = {
    'bond': _c(0, 0, 0),
    'O': _c(204, 0, 1), 'N': _c(0, 0, 205), 'S': _c(204, 204, 2),
    'P': _c(153, 0, 156), 'X': _c(0, 153, 4), 'B': _c(153, 102, 5),
    'wash': _c(254, 204, 205),
}
HEX = lambda c: '#%02X%02X%02X' % tuple(int(round(v * 255)) for v in c)
CSS = {HEX(SENT['bond']): 'currentColor', HEX(SENT['O']): 'var(--at-o)',
       HEX(SENT['N']): 'var(--at-n)', HEX(SENT['S']): 'var(--at-s)',
       HEX(SENT['P']): 'var(--at-p)', HEX(SENT['X']): 'var(--at-x)',
       HEX(SENT['B']): 'var(--at-s)', HEX(SENT['wash']): 'var(--wash)'}
ELEM = {8: 'O', 7: 'N', 16: 'S', 15: 'P', 9: 'X', 17: 'X', 35: 'X', 53: 'X', 5: 'B'}


def draw(smiles, mark=None, label='Chemical structure'):
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        raise ValueError('bad SMILES: ' + smiles)
    rdDepictor.SetPreferCoordGen(True)
    rdDepictor.Compute2DCoords(mol)
    d = rdMolDraw2D.MolDraw2DSVG(-1, -1)          # canvas sized to the molecule
    o = d.drawOptions()
    o.fixedBondLength = 24                          # every structure at one scale
    o.clearBackground = False
    o.bondLineWidth = 1.6
    o.minFontSize = 11
    o.padding = 0.06
    o.addStereoAnnotation = False
    pal = {-1: SENT['bond'], 6: SENT['bond'], 1: SENT['bond']}
    for z, k in ELEM.items():
        pal[z] = SENT[k]
    o.updateAtomPalette(pal)
    hl_atoms, hl_bonds = [], []
    if mark:
        patt = Chem.MolFromSmarts(mark)
        if patt is None:
            raise ValueError('bad mark SMARTS: ' + mark)
        for match in mol.GetSubstructMatches(patt):
            hl_atoms += list(match)
        hl_atoms = sorted(set(hl_atoms))
        for b in mol.GetBonds():
            if b.GetBeginAtomIdx() in hl_atoms and b.GetEndAtomIdx() in hl_atoms:
                hl_bonds.append(b.GetIdx())
        if not hl_atoms:
            raise ValueError('mark matched nothing: %s in %s' % (mark, smiles))
    rdMolDraw2D.PrepareAndDrawMolecule(
        d, mol, highlightAtoms=hl_atoms, highlightBonds=hl_bonds,
        highlightAtomColors={i: SENT['wash'] for i in hl_atoms},
        highlightBondColors={i: SENT['wash'] for i in hl_bonds})
    d.FinishDrawing()
    svg = d.GetDrawingText()
    svg = re.sub(r'<\?xml[^>]*\?>\s*', '', svg)
    svg = re.sub(r'<!-- END OF HEADER -->\s*', '', svg)
    svg = re.sub(r"<rect[^>]*style='opacity:1.0;fill:#FFFFFF[^>]*>\s*</rect>\s*", '', svg)
    for hexc, css in CSS.items():
        svg = svg.replace(hexc, css).replace(hexc.lower(), css)
    left = re.findall(r'#[0-9A-Fa-f]{6}', svg)
    if left:
        raise ValueError('unmapped colour(s) %s in drawing of %s' % (sorted(set(left)), smiles))
    svg = re.sub(r"width='(\d+)px' height='(\d+)px'", r"width='\1' height='\2'", svg, count=1)
    svg = svg.replace('<svg ', '<svg role="img" aria-label="%s" ' % label.replace('"', ''), 1)
    return re.sub(r'\s*\n\s*', ' ', svg).strip(), mol


def main():
    data = json.load(open(DATA))
    png_dir = sys.argv[sys.argv.index('--png') + 1] if '--png' in sys.argv else None
    if png_dir:
        os.makedirs(png_dir, exist_ok=True)
        from rdkit.Chem import Draw
    boards, fg, fgq, seen = [], {}, {}, set()
    n = 0
    for b in data['boards']:
        secs = []
        for s in b['sections']:
            items = []
            for it in s['items']:
                k = it['key']
                if k in seen:
                    raise ValueError('duplicate key ' + k)
                seen.add(k)
                fg[k], mol = draw(it['smiles'], it.get('mark'), it['name'])
                fgq[k], _ = draw(it['smiles'], None, 'Chemical structure to identify')
                if png_dir:
                    Draw.MolToFile(mol, os.path.join(png_dir, k.replace('/', '_').replace(' ', '_') + '.png'), size=(500, 380))
                items.append({'plain': k, 'n': it['name'], 't': it['tell'],
                              'e': it.get('eg', ''), 'slide': it['slide']})
                n += 1
            secs.append({'label': s['label'], 'items': items})
        boards.append({'id': b['id'], 'title': b['title'], 'intro': b['intro'],
                       'note': b.get('note', ''), 'sections': secs})
    js = ('/* Atlas of drawn structures for PHAR 4346 DEENT (Dr. Sikazwe\'s medicinal\n'
          '   chemistry). GENERATED by gen_atlas.py from atlas_data.json: edit the data\n'
          '   and rerun; do not edit this file by hand. */\n'
          'const ATLAS = (() => {\n'
          '  const BOARDS = %s;\n'
          '  const FG = %s;\n'
          '  const FGQ = %s;\n'
          '  const ITEM = {};\n'
          '  for (const b of BOARDS) for (const s of b.sections) for (const it of s.items) ITEM[it.plain] = it;\n'
          '  return {boards: BOARDS, FG, FGQ, item: k => ITEM[k] || null};\n'
          '})();\n'
          'const FG = ATLAS.FG, FGQ = ATLAS.FGQ;\n') % (
        json.dumps(boards, ensure_ascii=False, indent=1),
        json.dumps(fg, ensure_ascii=False), json.dumps(fgq, ensure_ascii=False))
    open(OUT, 'w').write(js)
    print('wrote atlas.js: %d structures on %d boards (%d KB)' % (n, len(boards), len(js) // 1024))


if __name__ == '__main__':
    main()

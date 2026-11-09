#!/usr/bin/env python3
"""Build cbda.js (chemical basis of drug action figures from Dr. Sikazwe's slides) from
cbda_data.json.

    python3 gen_cbda.py            # writes cbda.js

CBDA is his term ("chemical basis of drug action", the Reference tables' CBDA column).
These figures draw what his assigned slides and recordings give as a drug's chemical
basis of action or binding: crisaborole's boron at the PDE4 metals, methotrexate in the
DHFR cavity, cyclosporine activated by cyclophilin, tetracycline chelation, the salicylate
sunscreen esters hydrolyzed to salicylic acid, alpha and beta hydroxy acids, the two
antiandrogen approaches, and the tretinoin / isotretinoin geometric isomers. Metabolic
reaction schemes are in reactions.js (gen_reactions.py); this generator reuses its drawing
helpers (RDKit, currentColor bonds, --at-* heteroatoms, the stepper markup) so the two
look and behave the same.

Every structure is drawn with RDKit from cbda_data.json. A species that is an Atlas item
uses the Atlas SMILES exactly (cbda_check.js enforces it); the one drawing that is not
(crisaborole's tetrahedral boronate, drawn after the slide 7 inset) is marked a teaching
structure with its reason. Labels are the slide's; what he said aloud is in the step
captions with its transcript location. Schematic shapes (enzyme sites, ions) are labelled
as schematic and carry no binding atoms the slides do not give.
"""
import json, math, os, re, sys, html
from rdkit import Chem, RDLogger
from rdkit.Chem import rdDepictor, rdFMCS
from rdkit.Chem.Draw import rdMolDraw2D
from rdkit.Geometry import Point3D

RDLogger.DisableLog('rdApp.*')
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import gen_atlas as GA
import gen_reactions as GR                  # text, arrow, box, compact, level, build, wrap

DATA = os.path.join(HERE, 'cbda_data.json')
OUT = os.path.join(HERE, 'cbda.js')
W = GR.W
SP = {}
text, arrow, box, esc = GR.text, GR.arrow, GR.box, GR.esc


def draw(smiles, flip=False, ref=None, rot=0.0):
    """RDKit drawing: (inner markup, w, h, atom pixel coords, mol)."""
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        raise ValueError('bad SMILES: ' + smiles)
    rdDepictor.SetPreferCoordGen(True)
    rdDepictor.Compute2DCoords(mol)
    if ref is not None:
        mcs = rdFMCS.FindMCS([ref, mol], timeout=5, ringMatchesRingOnly=True, completeRingsOnly=False,
                             bondCompare=rdFMCS.BondCompare.CompareAny, atomCompare=rdFMCS.AtomCompare.CompareElements)
        rdDepictor.GenerateDepictionMatching2DStructure(mol, ref, -1, Chem.MolFromSmarts(mcs.smartsString))
    else:
        GR.level(mol)
        c = mol.GetConformer()
        ca, sa = math.cos(math.radians(rot)), math.sin(math.radians(rot))
        for i in range(mol.GetNumAtoms()):
            q = c.GetAtomPosition(i)
            x, y = q.x * ca - q.y * sa, q.x * sa + q.y * ca
            c.SetAtomPosition(i, Point3D(-x if flip else x, y, 0))
        bs = [a.GetIdx() for a in mol.GetAtoms() if a.GetSymbol() == 'B']
        if flip == 'bleft' and bs:                 # the boron head on the left, as the slide 7 inset
            cx = sum(c.GetAtomPosition(i).x for i in range(mol.GetNumAtoms())) / mol.GetNumAtoms()
            if c.GetAtomPosition(bs[0]).x > cx:
                for i in range(mol.GetNumAtoms()):
                    q = c.GetAtomPosition(i)
                    c.SetAtomPosition(i, Point3D(-q.x, q.y, 0))
            on = [n for n in mol.GetAtomWithIdx(bs[0]).GetNeighbors() if n.GetSymbol() == 'O']
            ro = [n.GetIdx() for n in on if n.IsInRing()][0]
            ex = [n.GetIdx() for n in on if not n.IsInRing()]
            if c.GetAtomPosition(ro).y > sum(c.GetAtomPosition(i).y for i in ex) / len(ex):
                for i in range(mol.GetNumAtoms()):      # ring O at the bottom, bound to Mg, as the inset
                    q = c.GetAtomPosition(i)
                    c.SetAtomPosition(i, Point3D(q.x, -q.y, 0))
    d = rdMolDraw2D.MolDraw2DSVG(-1, -1, -1, -1, True)
    o = d.drawOptions()
    o.fixedBondLength = 20
    o.clearBackground = False
    o.bondLineWidth = 1.5
    o.minFontSize = 11
    o.padding = 0.04
    o.flagCloseContactsDist = -1
    o.addStereoAnnotation = False
    pal = {-1: GA.SENT['bond'], 0: GA.SENT['bond'], 6: GA.SENT['bond'], 1: GA.SENT['bond']}
    for z, k in GA.ELEM.items():
        pal[z] = GA.SENT[k]
    o.updateAtomPalette(pal)
    rdMolDraw2D.PrepareAndDrawMolecule(d, mol)
    d.FinishDrawing()
    xy = [(d.GetDrawCoords(i).x, d.GetDrawCoords(i).y) for i in range(mol.GetNumAtoms())]
    svg = d.GetDrawingText()
    svg = re.sub(r"<rect[^>]*style='opacity:1.0;fill:#FFFFFF[^>]*>\s*</rect>\s*", '', svg)
    for hexc, css in GA.CSS.items():
        svg = svg.replace(hexc, css).replace(hexc.lower(), css)
    left = re.findall(r'#[0-9A-Fa-f]{6}', svg)
    if left:
        raise ValueError('unmapped colour(s) %s in %s' % (sorted(set(left)), smiles))
    m = re.search(r"width='(\d+)px' height='(\d+)px'", svg)
    w, h = int(m.group(1)), int(m.group(2))
    inner = svg[svg.index('>', svg.index('<svg')) + 1: svg.rindex('</svg>')]
    inner = re.sub(r'<\?xml[^>]*\?>|<!--.*?-->', '', inner, flags=re.S)
    inner = re.sub(r'(\d+\.\d)\d+', r'\1', inner)
    inner = re.sub(r"\s+class='[^']*'", '', inner)
    inner = re.sub(r"style='([^']*)'", GA._short_style, inner)
    inner = re.sub(r'\s*\n\s*', ' ', inner).strip()
    return GR.compact(inner), w, h, xy, mol


class Placed:
    """A species placed in a box; .at(i) gives atom i's page coordinates."""
    def __init__(self, sid, x, y, w, h, name=None, k=None, cls='lbl sm', maxsc=1.15):
        s = SP[sid]
        inner, mw, mh, self.xy, self.mol = s['_d']
        lh = 13 if name is not False else 0
        self.sc = sc = min(w / mw, (h - lh) / mh, maxsc)
        self.dx = x + (w - mw * sc) / 2
        self.dy = y + (h - lh - mh * sc) / 2
        kk = ' data-k="%s"' % k if k else ''
        self.svg = '<g transform="translate(%.1f,%.1f) scale(%.3f)" role="img" aria-label="%s"%s>%s</g>' % (
            self.dx, self.dy, sc, esc(s['name']), kk, inner)
        if name is not False:
            self.svg += text(x + w / 2, y + h - 2, name or s['name'], cls)

    def at(self, i):
        return self.dx + self.xy[i][0] * self.sc, self.dy + self.xy[i][1] * self.sc

    def match(self, smarts):
        return self.mol.GetSubstructMatches(Chem.MolFromSmarts(smarts))

    def bbox(self, idx, pad=8):
        pts = [self.at(i) for i in idx]
        xs, ys = [p[0] for p in pts], [p[1] for p in pts]
        return min(xs) - pad, min(ys) - pad, max(xs) - min(xs) + 2 * pad, max(ys) - min(ys) + 2 * pad


def ring(x, y, r=11, var='--accent', k=None):
    kk = ' data-k="%s"' % k if k else ''
    return '<circle cx="%.1f" cy="%.1f" r="%.1f" fill="none" stroke="var(%s)" stroke-width="1.6"%s/>' % (x, y, r, var, kk)


def band(b, var, op='0.18', k=None):
    x, y, w, h = b
    kk = ' data-k="%s"' % k if k else ''
    return '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="6" fill="var(%s)" opacity="%s"%s/>' % (x, y, w, h, var, op, kk)


def dots(x1, y1, x2, y2):
    return '<path d="M%.1f %.1f L%.1f %.1f" stroke="currentColor" stroke-width="1.4" stroke-dasharray="2 2.5" opacity="0.8"/>' % (x1, y1, x2, y2)


def line(x1, y1, x2, y2, op='0.7'):
    return '<path d="M%.1f %.1f L%.1f %.1f" stroke="currentColor" stroke-width="1" opacity="%s"/>' % (x1, y1, x2, y2, op)


def ion(x, y, t, var, r=13, k=None):
    kk = ' data-k="%s"' % k if k else ''
    return ('<circle cx="%.1f" cy="%.1f" r="%d" fill="var(%s)" opacity="0.3"%s/>' % (x, y, r, var, kk) +
            '<circle cx="%.1f" cy="%.1f" r="%d" fill="none" stroke="var(%s)" stroke-width="1.4"/>' % (x, y, r, var) +
            text(x, y + 3.5, t, 'lbl sm'))


def blob(x, y, w, h, label, var='--line', k=None, ly=None):
    kk = ' data-k="%s"' % k if k else ''
    return ('<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="%.1f" fill="var(--surface)" stroke="var(%s)" '
            'stroke-width="1.4"%s/>' % (x, y, w, h, min(w, h) / 2.2, var, kk) +
            text(x + w / 2, ly if ly is not None else y + 14, label, 'lbl sm'))


SUP = lambda t: '<tspan baseline-shift="super" font-size="8">%s</tspan>' % t
SUB = lambda t: '<tspan baseline-shift="sub" font-size="8">%s</tspan>' % t


# ---------------------------------------------------------------- figures
def f_crisaborole():
    title = text(W / 2, 12, 'Crisaborole: the boron binds Zn' + SUP('2+') + ' and Mg' + SUP('2+') + ' in PDE4', 'title')
    c = Placed('crisaborole', 6, 22, 200, 96, k='cris')
    b = [a.GetIdx() for a in c.mol.GetAtoms() if a.GetSymbol() == 'B'][0]
    bx, by = c.at(b)
    s1 = title + c.svg + ring(bx, by, 14, '--warn', 'bring') + text(bx, by + 28, 'boron', 'cl') + \
        text(222, 46, 'Benzoxaborole: a boron-bearing drug', 'lbl sm', 'start') + \
        text(222, 62, 'MoA: PDE4 inhibition (higher cAMP', 'lbl xs', 'start') + \
        text(222, 74, '& ↓ inflammatory cytokines) (slide 7)', 'lbl xs', 'start') + \
        text(222, 92, 'Intact crisaborole reaches its target,', 'lbl xs', 'start') + \
        text(222, 104, 'the PDE4 enzyme (11/03 T 786–793)', 'lbl xs', 'start')
    # step 2: the site, after the slide 7 inset
    p = Placed('crisa_boronate', 190, 150, 280, 150, False, k='bor')
    bi = [a.GetIdx() for a in p.mol.GetAtoms() if a.GetSymbol() == 'B'][0]
    os_ = sorted([n.GetIdx() for n in p.mol.GetAtomWithIdx(bi).GetNeighbors() if n.GetSymbol() == 'O'],
                 key=lambda i: p.at(i)[1])
    (ox1, oy1), (ox2, oy2), (ox3, oy3) = [p.at(i) for i in os_]
    lx = min(ox1, ox2, ox3)
    zx, zy = lx - 62, (oy1 + oy2) / 2 - 18
    mx, my = lx - 56, oy3 + 22
    site = '<path d="M%.1f %.1f C %.1f %.1f, %.1f %.1f, %.1f %.1f S %.1f %.1f, %.1f %.1f C %.1f %.1f, %.1f %.1f, %.1f %.1f Z" ' \
           'fill="var(--surface)" stroke="var(--warn)" stroke-width="1.3" opacity="0.9"/>' % (
               zx - 95, zy - 30, zx - 60, zy - 62, zx + 40, zy - 66, lx + 6, zy - 34, lx + 20, my + 10, lx - 4, my + 30,
               zx - 40, my + 46, zx - 120, my + 30, zx - 95, zy - 30)
    s2 = s1 + site + text(zx - 40, my + 42, 'PDE4 active site (schematic)', 'lbl xs') + \
        line(zx, zy, zx, zy - 30) + text(zx, zy - 34, 'His' + SUB('238'), 'lbl xs') + \
        line(zx, zy, zx - 40, zy - 14) + text(zx - 44, zy - 14, 'His' + SUB('274'), 'lbl xs', 'end') + \
        line(zx, zy, zx + 30, zy - 22) + text(zx + 32, zy - 24, 'Asp' + SUB('392'), 'lbl xs', 'start') + \
        line(zx, zy, zx - 32, my - 26) + line(mx, my, zx - 32, my - 26) + text(zx - 36, my - 24, 'Asp' + SUB('275'), 'lbl xs', 'end') + \
        dots(zx + 12, zy + 4, ox1 - 6, oy1) + dots(zx + 10, zy + 8, ox2 - 6, oy2) + \
        dots(mx + 12, my - 4, ox2 - 6, oy2 + 2) + dots(mx + 13, my, ox3 - 6, oy3) + \
        ion(zx, zy, 'Zn' + SUP('2+'), '--yen', k='zn') + ion(mx, my, 'Mg' + SUP('2+'), '--ok', k='mg') + p.svg
    s3 = s2 + box(8, 340, 128, 26, 'drug held in the site') + arrow(138, 353, 158, 353) + \
        box(160, 340, 150, 26, 'PDE4 cannot break cAMP') + arrow(312, 353, 330, 353) + \
        box(332, 340, 140, 26, '↑ cAMP, ↓ cytokines')
    return 372, [
        ('Crisaborole, a benzoxaborole: the boron is the part that binds. Intact drug that escapes deboronation reaches PDE4 (slide 7; 11/03 T 786–793).', s1),
        ('Its boron coordinates two cations in the PDE4 active site, zinc and magnesium: "that is the basis" (11/03 T 712–719). Residues and dotted bonds as the slide 7 inset prints them.', s2),
        ('It "binds to the active site and stays there", so the enzyme cannot do its job: higher cAMP and fewer inflammatory cytokines (slide 7 MoA; T 790–793).', s3),
    ]


def f_mtx():
    title = text(W / 2, 12, 'Methotrexate vs folic acid at DHFR', 'title')
    fa = Placed('folic', 6, 30, 468, 96, 'Folic acid (the substrate)', k='fa')
    mt = Placed('mtx', 6, 128, 468, 100, False, k='mtx')
    oh = [m[0] for m in fa.match('[OX2H]c1nc(N)nc2ncc(CN)nc12')][0]
    nh = [m[2] for m in fa.match('c[CH2][NX3H1]c')][0]
    nh2 = [m[0] for m in mt.match('[NX3H2]c1nc(N)nc2ncc(CN)nc12')][0]
    nme = [m[2] for m in mt.match('c[CH2][NX3]([CH3])c')][0]
    s1 = title + fa.svg + ring(*fa.at(oh), 11, '--bad', 'r1') + ring(*fa.at(nh), 11, '--bad', 'r2') + \
        text(476, 40, 'DHFR reduces it to', 'lbl xs', 'end') + text(476, 51, 'tetrahydrofolic acid', 'lbl xs', 'end') + \
        text(476, 62, '(needed for DNA synthesis)', 'lbl xs', 'end')
    pter = mt.match('c1nc2nccnc2c(N)n1')[0]
    paba = mt.match('N(C)c1ccc(C(=O)N)cc1')[0]
    glu = mt.match('NC(CCC(=O)O)C(=O)O')[0]
    s2 = s1 + band(mt.bbox(pter, 9), '--warn', '0.2', 'b1') + band(mt.bbox(paba[:-1], 7), '--yen', '0.16', 'b2') + \
        band(mt.bbox(glu[1:], 7), '--ok', '0.18', 'b3') + mt.svg + \
        ring(*mt.at(nh2), 11, '--bad', 'r3') + ring(*mt.at(nme), 11, '--bad', 'r4') + \
        text(240, 236, 'Methotrexate: pteridine ring (aromatic) · p-aminobenzoic acid · glutamic acid', 'lbl sm')
    cav = '<path d="M60 262 h46 v36 h96 v-36 h46 v58 h-188 z" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/>'
    s3 = s2 + cav + text(154, 332, 'DHFR cavity (schematic)', 'lbl xs') + \
        '<rect x="112" y="268" width="84" height="26" rx="5" fill="var(--bad)" opacity="0.22"/>' + text(154, 285, 'MTX', 'lbl sm') + \
        text(264, 270, 'MTX sits in the same enzyme cavity:', 'lbl xs', 'start') + \
        text(264, 282, 'higher affinity than folic acid', 'lbl xs', 'start') + \
        text(264, 294, '(competitive inhibition)', 'lbl xs', 'start') + \
        text(264, 310, 'folic acid cannot be processed', 'lbl xs', 'start') + \
        text(264, 322, '→ no THF → ↓ DNA synthesis', 'lbl xs', 'start')
    return 338, [
        ('Folic acid is processed by DHFR (dihydrofolate reductase) to tetrahydrofolic acid, needed for DNA synthesis (slide 30; 11/04 T@8900–@9100).', s1),
        ('MTX has the same three parts, coloured as slide 31 colours them; it differs at two places: NH2 for OH on the pteridine, N–CH3 for N–H (slide 31).', s2),
        ('MTX "sits in the same enzyme cavity and competitively inhibits the binding of folic acid"; it has the higher affinity for DHFR (slide 30; 11/04 T@9000–@9230).', s3),
    ]


def f_cyclosporine():
    title = text(W / 2, 12, 'Cyclosporine: activated by complexation, not metabolism', 'title')
    cs = Placed('cyclosporine', 6, 22, 190, 170, 'Cyclosporine', k='cs', maxsc=0.75)
    s1 = title + cs.svg + text(206, 52, '11-amino-acid cyclic peptide: a lactam', 'lbl sm', 'start') + \
        text(206, 66, '(cyclic amide), described as a “prodrug”', 'lbl xs', 'start') + \
        text(206, 80, 'PO bioavailability 30%: first pass by CYP3A4', 'lbl xs', 'start')
    s2 = s1 + arrow(200, 120, 232, 120) + blob(236, 98, 92, 46, 'cyclophilin', '--yen', 'cyp', 125) + \
        arrow(330, 120, 356, 120) + blob(358, 96, 116, 50, 'cyclosporine·', '--warn', 'cx', 116) + \
        text(416, 130, 'cyclophilin complex', 'lbl sm') + text(416, 160, 'the active form', 'cl')
    s3 = s2 + arrow(416, 168, 416, 196) + blob(330, 198, 146, 46, 'calcineurin', '--bad', 'cn', 218) + \
        text(403, 234, 'phosphatase blocked', 'lbl xs') + \
        text(320, 214, 'complex binds the', 'lbl xs', 'end') + text(320, 226, 'active site →', 'lbl xs', 'end') + \
        text(320, 238, '↓ T-cell signaling', 'lbl xs', 'end')
    return 250, [
        ('Cyclosporine: a cyclic peptide (lactam), called a prodrug; poor oral bioavailability, 30%, from first-pass CYP3A4 metabolism (slide 33; 11/04 T@12270–@12900).', s1),
        ('Bioactivation is not metabolic: it binds its receptor, cyclophilin, and the complex is the active form (slide 33; 11/04 T@12378–@12520).', s2),
        ('The complex binds the active site of calcineurin, a phosphatase, and blocks T-cell signaling (slide 33; T@12520–@12620).', s3),
    ]


def f_tetracycline():
    title = text(W / 2, 12, 'Tetracycline: chelation of metal ions', 'title')
    t = Placed('tetracycline', 6, 22, 220, 130, 'Tetracycline: four rings in a line', k='tc')
    s1 = title + t.svg + text(240, 48, 'Linear four-ring system (a steroid’s', 'lbl xs', 'start') + \
        text(240, 60, 'rings are angular); broad spectrum (slide 55)', 'lbl xs', 'start')
    ions = [('Al', '3+'), ('Ca', '2+'), ('Mg', '2+'), ('Fe', '3+'), ('Zn', '3+'), ('Bi', '3+')]
    ix = ''.join(ion(256 + i * 36, 92, e + SUP(c), '--sik', 15, 'i%d' % i) for i, (e, c) in enumerate(ions))
    s2 = s1 + ix + text(352, 120, 'Zn³⁺ as printed on slide 55 (zinc’s ion is Zn²⁺)', 'lbl xs') + \
        arrow(352, 128, 352, 150) + box(244, 152, 216, 26, '[tetracycline·Mⁿ⁺]: insoluble salt') + \
        text(352, 192, 'chelation (schematic: the slide names no binding atoms)', 'lbl xs')
    s3 = s2 + box(8, 206, 226, 26, 'bone, enamel: rich in calcium') + arrow(121, 234, 121, 248) + \
        text(121, 260, 'salts deposit: staining, weakening', 'lbl xs') + \
        box(246, 206, 226, 26, 'food (dairy) in the gut') + arrow(359, 234, 359, 248) + \
        text(359, 260, 'absorption ↓ (t½ 8.5 h)', 'lbl xs') + \
        text(359, 272, 'doxycycline, minocycline: food no effect', 'lbl xs')
    return 278, [
        ('Tetracycline: four six-membered rings fused in a line (slide 55; 11/04 T@35100–@35500).', s1),
        ('It chelates metal ions, those printed on slide 55, and forms insoluble salts (11/04 T@35844–@36050, where "chelate" is transcribed "kill it").', s2),
        ('Bone and enamel hold a lot of calcium: the salts remain there, stain and weaken them. Dairy in the gut lowers absorption (slide 55; T@35700–@36300).', s3),
    ]


def f_salicylates():
    title = text(W / 2, 12, 'Salicylate sunscreens: esters that give salicylic acid', 'title')
    h = Placed('homosalate', 4, 22, 230, 96, 'Homosalate', k='hs')
    o = Placed('octisalate', 246, 22, 230, 96, 'Octisalate', k='os')
    hs = h.match('C(=O)O[CX4]')[0]
    os_ = o.match('C(=O)O[CX4]')[0]
    s1 = title + band(h.bbox(hs[:3], 8), '--warn', '0.2', 'e1') + band(o.bbox(os_[:3], 8), '--warn', '0.2', 'e2') + \
        h.svg + o.svg + text(240, 132, 'UVB absorbers (280–315 nm); the salicylate part absorbs UVB (slide 64)', 'lbl xs') + \
        text(240, 144, 'shaded: the ester bond', 'lbl xs')
    sa = Placed('sa', 150, 172, 180, 90, 'Salicylic acid', k='sa')
    s2 = s1 + arrow(240, 150, 240, 172) + text(250, 166, 'hydrolysis (in the skin)', 'lbl sm', 'start') + sa.svg + \
        text(340, 214, '+ the alcohol part', 'lbl xs', 'start') + text(140, 206, 'analgesia', 'cl', 'end') + \
        text(140, 220, '(slide 64)', 'lbl xs', 'end')
    return 268, [
        ('Homosalate and octisalate: salicylic acid esters, UVB absorbers; "supposed to be" photostable, with a question mark (slide 64; 11/04 T@42460–@42700).', s1),
        ('"They are esters, so they can undergo hydrolysis to give you salicylic acid", which provides analgesia (slide 64; 11/04 T@42498–@42640).', s2),
    ]


def f_hydroxyacids():
    title = text(W / 2, 12, 'Hydroxy acids: count from the COOH carbon', 'title')
    out = title
    for k, (sid, x, nm) in enumerate([('ga', 30, 'Glycolic acid (AHA)'), ('sa', 270, 'Salicylic acid (BHA)')]):
        p = Placed(sid, x, 26, 180, 104, nm, k='m%d' % k)
        cooh = p.match('[CX3](=O)[OX2H1]')[0][0]
        alpha = [n.GetIdx() for n in p.mol.GetAtomWithIdx(cooh).GetNeighbors() if n.GetSymbol() == 'C'][0]
        n_ = p.mol.GetNumAtoms()
        cx = sum(p.at(i)[0] for i in range(n_)) / n_
        cy = sum(p.at(i)[1] for i in range(n_)) / n_

        def lab(i, t, var, kk):
            x, y = p.at(i)
            dx, dy = x - cx, y - cy
            n = math.hypot(dx, dy) or 1
            return ring(x, y, 9, var, kk) + text(x + dx / n * 20, y + dy / n * 20 + 4, t, 'cl')
        out += p.svg + lab(alpha, 'α', '--accent', 'a%d' % k)
        if sid == 'sa':
            beta = p.match('c(C(=O)O)c[OX2H1]')[0][4]
            out += lab(beta, 'β', '--ok', 'bb')
    s2 = out + text(240, 150, 'SAR (slide 44): COOH group(s); most have the OH on the alpha carbon', 'lbl xs') + \
        text(240, 162, '(the carbon next to the CO₂H); R mostly alkyl', 'lbl xs')
    return 168, [
        ('The alpha carbon is the one next to the COOH carbon, the beta carbon the one after it: glycolic acid carries the OH on alpha, salicylic acid on beta (11/04 T@22100–@22330).', out),
        ('Hydroxy acid SAR as slide 44 prints it.', s2),
    ]


def f_antiandrogens():
    title = text(W / 2, 12, 'Antiandrogens: two ways to go after testosterone', 'title')
    sp = Placed('spironolactone', 4, 22, 150, 110, 'Spironolactone (steroid)', k='sp')
    kc = Placed('ketoconazole', 158, 22, 196, 110, 'Ketoconazole (azole)', k='kc')
    s1 = title + sp.svg + kc.svg + arrow(178, 140, 178, 160) + box(40, 162, 276, 26, '↓ testosterone biosynthesis') + \
        text(178, 202, 'azole antifungals: strong CYP3A4 inhibitors (slide 53)', 'lbl xs')
    fl = Placed('flutamide', 360, 30, 116, 100, 'Flutamide (non-steroid)', k='fl')
    s2 = s1 + fl.svg + arrow(418, 140, 418, 160) + box(330, 162, 146, 26, 'blocks the receptor') + \
        text(418, 202, 'testosterone cannot bind', 'lbl xs')
    return 208, [
        ('Spironolactone (steroidal) and ketoconazole (azole) diminish testosterone biosynthesis; keep in mind that azoles strongly inhibit CYP3A4 (slide 53; 11/04 T@32237–@32700).', s1),
        ('Flutamide (non-steroidal) prevents testosterone from binding to its receptor: the two approaches differ by how they work (slide 53; T@32680–@33000).', s2),
    ]


def f_retinoids():
    title = text(W / 2, 12, 'Tretinoin and isotretinoin: geometric isomers at C13', 'title')
    t = Placed('tretinoin', 6, 22, 468, 84, 'Tretinoin: all-trans retinoic acid (topical)', k='tr')
    i = Placed('isotretinoin', 6, 116, 468, 84, 'Isotretinoin: 13-cis retinoic acid (oral)', k='iso')
    def c13(p):
        m = p.match('[CX3](C)=[CX3][CX3](=O)O')[0]
        return m[0], m[2]
    a, b = c13(t)
    s1 = title + t.svg + i.svg
    for p, (u, v) in ((t, (a, b)), (i, c13(i))):
        (x1, y1), (x2, y2) = p.at(u), p.at(v)
        s1 += '<ellipse cx="%.1f" cy="%.1f" rx="17" ry="12" fill="none" stroke="var(--accent)" stroke-width="1.6"/>' % ((x1 + x2) / 2, (y1 + y2) / 2)
        s1 += text((x1 + x2) / 2, (y1 + y2) / 2 - 16, 'C13', 'cl') if p is t else text((x1 + x2) / 2 - 22, (y1 + y2) / 2 + 4, 'C13', 'cl', 'end')
    s2 = s1 + '<path d="M6 210 H474" stroke="var(--line)" stroke-width="1"/>' + \
        text(W / 2, 226, '3rd generation (poly-aromatic): what is exposed at the end', 'title')
    out = s2
    for k, (sid, x, y, w, h, nm, ester) in enumerate([
            ('adapalene', 4, 232, 232, 100, 'Adapalene: exposed COOH, directly active', False),
            ('trifarotene', 244, 232, 232, 100, 'Trifarotene: exposed COOH, directly active', False),
            ('tazarotene', 60, 338, 360, 84, 'Tazarotene: ethyl ester, a prodrug (CE → tazarotenic acid)', True)]):
        p = Placed(sid, x, y, w, h, nm, k='g%d' % k)
        m = p.match('[CX3](=O)[OX2][CH2]' if ester else '[CX3](=O)[OX2H1]')[0]
        out += band(p.bbox(m, 7), '--bad' if ester else '--ok', '0.2', 'gb%d' % k) + p.svg
    return 428, [
        ('1st generation (non-aromatic): tretinoin, all trans, and isotretinoin, cis at carbon 13 counted from the COOH end: geometric isomers (slide 49; 11/04 T@28100–@28700).', s1),
        ('3rd generation: adapalene and trifarotene are directly active, with an exposed carboxylic acid; tazarotene is a prodrug bioactivated by carboxylesterase (slide 51; 11/04 T@29800–@30300).', out),
    ]


def f_limus():
    title = text(W / 2, 12, 'Pimecrolimus vs tacrolimus: lactones that differ at two places', 'title')
    pm = Placed('pimecrolimus', 4, 22, 234, 200, 'Pimecrolimus (cLogP 6.0)', k='pm', maxsc=0.62)
    tc = Placed('tacrolimus', 242, 22, 234, 200, 'Tacrolimus (cLogP 5.8)', k='tc', maxsc=0.62)
    lac = lambda p: p.match('[CX3;R](=O)[OX2;R][CX4;R]')[0]
    s1 = title + band(pm.bbox(lac(pm), 6), '--warn', '0.25', 'l1') + band(tc.bbox(lac(tc), 6), '--warn', '0.25', 'l2') + \
        pm.svg + tc.svg + text(W / 2, 236, 'shaded: the lactone (cyclic ester) of the macrolide ring (slides 28, 32)', 'lbl xs')
    cl = pm.match('[Cl]')[0][0]
    et = pm.match('[CH3][CH2][C;R]')[0][:2]
    ho = tc.match('[OX2H1][CH1;R]1CC[CH1;R]C[CH1;R]1OC')[0][0]
    al = tc.match('[CH2]=[CH1][CH2][C;R]')[0][:3]
    s2 = s1 + ring(*pm.at(cl), 10, '--bad', 'd1') + ring(*tc.at(ho), 10, '--bad', 'd2')
    for p, idx, kk in ((pm, et, 'd3'), (tc, al, 'd4')):
        bx = p.bbox(idx, 6)
        s2 += '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="6" fill="none" stroke="var(--bad)" stroke-width="1.5" data-k="%s"/>' % (bx + (kk,))
    s2 += text(W / 2, 250, 'ringed: Cl vs OH on the cyclohexane; ethyl vs allyl (the only differences)', 'lbl xs') + \
        text(121, 266, 'high non-specific skin protein binding:', 'lbl xs') + text(121, 277, 'stays in the skin, low systemic ADRs', 'lbl xs') + \
        text(359, 266, 'low skin protein binding:', 'lbl xs') + text(359, 277, 'can enter the systemic circulation', 'lbl xs')
    return 284, [
        ('Both are macrolide lactones and calcineurin inhibitors, very lipophilic with similar cLogP (slide 28; Polleve-3, slide 32: lactone = cyclic ester).', s1),
        ('The only differences: chlorine vs hydroxy, and an ethyl vs an allyl group. Pimecrolimus binds skin proteins and stays in the skin; tacrolimus can go in (11/04 T@4400–@5600).', s2),
    ]


def f_gc_potency():
    title = text(W / 2, 12, 'Hydrocortisone to clobetasol propionate: potency by structure', 'title')
    hc = Placed('hydrocortisone', 4, 22, 200, 150, 'Hydrocortisone (low potency)', k='hc')
    cb = Placed('clobetasol', 262, 22, 214, 150, 'Clobetasol propionate (super-potent)', k='cb')
    s1 = title + hc.svg + '<path d="M210 96 H252" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arw)"/>' + cb.svg + \
        text(231, 86, 'structure', 'lbl xs')
    d12 = cb.match('[CX3;R]1=[CX3;R][CX3;R](=O)[CX3;R]=[CX3;R][CX4;R]1')[0][:2]
    f9 = cb.match('F')[0][0]
    me16 = cb.match('[CH3][CH1;R][CH2;R]')[0][0]
    est = cb.match('[OX2]([C;R])C(=O)CC')[0]
    cl21 = cb.match('Cl')[0][0]
    s2 = s1
    for i, kk in ((f9, 'f'), (me16, 'm'), (cl21, 'c')):
        s2 += ring(*cb.at(i), 9, '--bad', kk)
    for idx, kk in ((d12, 'db'), (est, 'es')):
        bx = cb.bbox(idx, 5)
        s2 += '<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="6" fill="none" stroke="var(--bad)" stroke-width="1.5" data-k="%s"/>' % (bx + (kk,))
    s2 += text(W / 2, 190, 'ringed: C1=C2 double bond, 9α-F, 16-methyl, 17-propionate ester, 21-Cl', 'lbl xs') + \
        text(W / 2, 202, 'Potency rests on structure, delivery vehicle (propylene glycol) and concentration', 'lbl xs')
    return 208, [
        ('The dashed arrow is not metabolism: clobetasol propionate is made from the hydrocortisone skeleton by structural changes (slide 25; 11/03 T 1175–1179).', s1),
        ('The changes. C1=C2 and 9α-halogen are two of the SAR features that raise potency (slide 20); he said these derivative structures need not be memorized (T 1152–1154).', s2),
    ]


FIGS = {'cb-crisaborole': f_crisaborole, 'cb-mtx': f_mtx, 'cb-cyclosporine': f_cyclosporine,
        'cb-tetracycline': f_tetracycline, 'cb-salicylates': f_salicylates, 'cb-hydroxyacids': f_hydroxyacids,
        'cb-antiandrogens': f_antiandrogens, 'cb-retinoids': f_retinoids, 'cb-limus': f_limus,
        'cb-gc-potency': f_gc_potency}

FLIP = {'crisaborole', 'crisa_boronate'}
ROT = {}
ALIGN = {'mtx': 'folic', 'isotretinoin': 'tretinoin'}


def main():
    data = json.load(open(DATA))
    for s in data['species']:
        SP[s['id']] = s
    for s in data['species']:
        if s['id'] in ALIGN:
            continue
        s['_d'] = draw(s['smiles'], 'bleft' if s['id'] == 'crisa_boronate' else (s['id'] in FLIP), None, ROT.get(s['id'], 0.0))
    for i, r in ALIGN.items():
        SP[i]['_d'] = draw(SP[i]['smiles'], ref=SP[r]['_d'][4])
    GR.FIGS = FIGS                                # GR.build calls FIGS[key]
    dia, names = {}, {}
    for f in data['figures']:
        if f['key'] not in FIGS:
            raise ValueError('no layout for ' + f['key'])
        h = GR.build(f).replace('<figure class="fig rxfig">', '<figure class="fig rxfig cbfig">', 1)
        dia[f['key']] = h
        names[f['key']] = f['title']
    for k in FIGS:
        if k not in dia:
            raise ValueError('layout without data: ' + k)
    js = ('/* Chemical basis of drug action (CBDA) figures from Dr. Sikazwe\'s assigned Exam 1 pages (DPAW).\n'
          '   GENERATED by gen_cbda.py from cbda_data.json: edit those and rerun; do not edit this file\n'
          '   by hand. Loaded after reactions.js: adds the figures to DIA, their names to DIA_NAMES and\n'
          '   one group to DIAGRAMS (the figure CSS is reactions.js\'s .fig.rxfig rules). */\n'
          'const CB_FIGS = %s;\n'
          'const CB_NAMES = %s;\n'
          'Object.assign(DIA, CB_FIGS);\n'
          'if (typeof DIA_NAMES !== \'undefined\') Object.assign(DIA_NAMES, CB_NAMES);\n'
          'if (typeof DIAGRAMS !== \'undefined\') DIAGRAMS.push([\'Chemical basis of drug action (Dr. Sikazwe)\', Object.keys(CB_FIGS)]);\n') % (
        json.dumps(dia, ensure_ascii=False, indent=1), json.dumps(names, ensure_ascii=False, indent=1))
    open(OUT, 'w').write(js)
    print('wrote cbda.js: %d figures, %d species (%d KB)' % (len(dia), len(SP), len(js) // 1024))


if __name__ == '__main__':
    main()

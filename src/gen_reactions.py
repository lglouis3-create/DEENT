#!/usr/bin/env python3
"""Build reactions.js (reaction and metabolic schemes from Dr. Sikazwe's slides) from
reactions_data.json.

    python3 gen_reactions.py            # writes reactions.js
    python3 gen_reactions.py --png DIR  # also writes one PNG per figure step (needs cairosvg; optional)

Every species is drawn with RDKit from the SMILES in reactions_data.json, the same way
gen_atlas.py draws the Atlas: bonds follow the page's text colour (currentColor) and
heteroatoms the page's --at-* colours, so a figure reads in light and dark mode. The
layout of each scheme (where each species, arrow and label sits) is written below, one
function per figure, after the slide's own arrangement as far as a 480-unit-wide panel
allows. Arrow labels are the slide's printed labels; what he said aloud goes in the
step captions and the figure caption, with its transcript location.

The figures are added to DIA (diagrams.js) under the keys rx-*, listed in DIAGRAMS, and
placed in the Guide by <!--DIA:rx-...--> markers inside <div class="rxfig" id="rx-...">
wrappers, which are the anchors Reference rows jump to (data-jump="guide:rx-...").
Multi-stage schemes are step-throughs written to STEPPERS.md: each step repeats the
previous step's shapes in the same order and place, then adds its own, so nothing moves
and the new species, arrow and labels fade in.

verify_reactions.py checks the species against PubChem and ChEMBL; reactions_check.js
checks the result, the slide pages and the captions.
"""
import json, os, re, sys, html
from rdkit import Chem, RDLogger
from rdkit.Chem import rdDepictor, rdFMCS
from rdkit.Chem.Draw import rdMolDraw2D

RDLogger.DisableLog('rdApp.*')
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import gen_atlas as GA                      # colour sentinels and the SVG clean-up of the Atlas

DATA = os.path.join(HERE, 'reactions_data.json')
OUT = os.path.join(HERE, 'reactions.js')
W = 480                                     # every reaction figure is drawn 480 wide
# Drawn at exactly W px (whole-pixel height, so the page height and the Enlarge placeholder
# agree); a phone scrolls the figure sideways inside itself, never the page; Enlarge
# (step-throughs) fits it to the screen.
CSS = ('.fig.rxfig svg.rx{width:%dpx;max-width:none;height:auto}'
       '.fig.rxfig.big svg.rx{width:100%%;max-width:none}') % W
CAPBAND = 54                                # room under a step-through for its step caption (up to 3 lines)

SP = {}


def mol_svg(smiles, label, ref=None):
    """RDKit drawing of one species: (inner SVG markup, width, height) at a fixed bond length."""
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        raise ValueError('bad SMILES: ' + smiles)
    for a in mol.GetAtoms():
        if a.GetAtomicNum() == 0:
            a.SetProp('atomLabel', 'DNA')
    rdDepictor.SetPreferCoordGen(True)
    rdDepictor.Compute2DCoords(mol)
    if ref is not None:
        # same orientation as the species it comes from: the common part keeps its place
        mcs = rdFMCS.FindMCS([ref, mol], timeout=5, ringMatchesRingOnly=True, completeRingsOnly=False,
                             bondCompare=rdFMCS.BondCompare.CompareAny, atomCompare=rdFMCS.AtomCompare.CompareElements)
        rdDepictor.GenerateDepictionMatching2DStructure(mol, ref, -1, Chem.MolFromSmarts(mcs.smartsString))
    else:
        level(mol)
        if label in FLIP:                          # mirror left-right to match the slide's drawing
            from rdkit.Geometry import Point3D
            c = mol.GetConformer()
            for i in range(mol.GetNumAtoms()):
                q = c.GetAtomPosition(i)
                c.SetAtomPosition(i, Point3D(-q.x, q.y, 0))
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
    return compact(inner), w, h, mol


def level(mol):
    """Turn a drawing so its long axis is horizontal, as the slides draw the species."""
    import math
    c = mol.GetConformer()
    pts = [c.GetAtomPosition(i) for i in range(mol.GetNumAtoms())]
    n = len(pts)
    mx = sum(p.x for p in pts) / n; my = sum(p.y for p in pts) / n
    sxx = sum((p.x - mx) ** 2 for p in pts); syy = sum((p.y - my) ** 2 for p in pts)
    sxy = sum((p.x - mx) * (p.y - my) for p in pts)
    a = -0.5 * math.atan2(2 * sxy, sxx - syy)
    ca, sa = math.cos(a), math.sin(a)
    from rdkit.Geometry import Point3D
    for i, p in enumerate(pts):
        x, y = p.x - mx, p.y - my
        c.SetAtomPosition(i, Point3D(x * ca - y * sa, x * sa + y * ca, 0))


def compact(inner):
    """Merge RDKit's one-segment bond paths of one colour into one path each (a third of
    the bytes); the stroke width and fill:none go on the group."""
    seg = re.compile(r"<path d='(M [\d.,\s]+L [\d.,]+)' fill='none' stroke='([^']+)' stroke-width='1.5' />\s*")
    out, runs, last = [], {}, 0
    for m in seg.finditer(inner):
        if m.start() != last:                      # something else in between: flush the run
            out.append(_flush(runs)); runs = {}
            out.append(inner[last:m.start()])
        runs.setdefault(m.group(2), []).append(re.sub(r'\s+', ' ', m.group(1)).replace('M ', 'M').replace(' L ', 'L'))
        last = m.end()
    out.append(_flush(runs))
    out.append(inner[last:])
    return '<g fill="none" stroke-width="1.5">%s</g>' % ''.join(out)


def _flush(runs):
    return ''.join("<path d='%s' stroke='%s'/>" % (''.join(v), k) for k, v in runs.items())


def esc(t):
    return html.escape(t, quote=False)


def mol(i, x, y, w, h, name=None, below=True, cls='lbl sm'):
    """Species i drawn to fit the box (x, y, w, h), centred; its name under it."""
    s = SP[i]
    inner, mw, mh = s['_svg']
    lh = 13 if (name is not False and below) else 0
    sc = min(w / mw, (h - lh) / mh, 1.15)
    dx = x + (w - mw * sc) / 2
    dy = y + (h - lh - mh * sc) / 2
    out = '<g transform="translate(%.1f,%.1f) scale(%.3f)" role="img" aria-label="%s">%s</g>' % (
        dx, dy, sc, esc(s['name']), inner)
    if name is not False:
        out += text(x + w / 2, y + h - 2, name or s['name'], cls)
    return out


def text(x, y, t, cls='lbl sm', anchor='middle', extra=''):
    return '<text class="%s" x="%.1f" y="%.1f" text-anchor="%s"%s>%s</text>' % (cls, x, y, anchor, extra, t)


def arrow(x1, y1, x2, y2):
    return '<path class="arrow" d="M%.1f %.1f L%.1f %.1f"/>' % (x1, y1, x2, y2)


def eq(x1, x2, y):
    """The slide's paired arrows (forward above, back below)."""
    return arrow(x1, y - 3, x2, y - 3) + arrow(x2, y + 3, x1, y + 3)


def box(x, y, w, h, t):
    return ('<rect class="box" x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="5"/>' % (x, y, w, h) +
            text(x + w / 2, y + h / 2 + 4, t, 'lbl'))


def tag(x, y1, y2, tags):
    """A conjugate tag as the slide draws it: a bracket over both OH groups, then the tag(s)."""
    out = '<path class="ax" d="M%.1f %.1f h4 V%.1f h-4"/>' % (x, y1, y2)
    n = len(tags)
    for k, t in enumerate(tags):
        ty = y1 + (y2 - y1) * (k + 1) / (n + 1)
        out += '<path class="ax" d="M%.1f %.1f h8"/>' % (x + 4, ty)
        out += text(x + 14, ty + 4, t, 'lbl', 'start')
    return out


# ---------------------------------------------------------------- figures
def f_crisaborole():
    s1 = text(W / 2, 12, 'Crisaborole: hydrolysis, oxidation, conjugation', 'title') + \
        mol('crisaborole', 10, 20, 220, 100)
    s2 = s1 + arrow(120, 122, 120, 146) + text(128, 138, '1', 'cl', 'start') + mol('crisa_alc', 10, 148, 220, 96)
    s3 = s2 + arrow(120, 246, 120, 270) + text(128, 262, '2', 'cl', 'start') + mol('crisa_acid', 10, 272, 220, 96)
    conj = lambda y, tags: mol('crisa_alc', 268, y, 150, 86, False) + tag(420, y + 12, y + 70, tags)
    s4 = s3 + arrow(232, 176, 266, 78) + text(240, 120, '3', 'cl', 'end') + conj(30, ['SO<tspan baseline-shift="sub" font-size="8">3</tspan>']) + \
        arrow(234, 196, 266, 196) + text(250, 190, '4', 'cl') + conj(150, ['Gluc']) + \
        arrow(232, 214, 266, 300) + text(242, 268, '3,4', 'cl', 'end') + conj(260, ['SO<tspan baseline-shift="sub" font-size="8">3</tspan>', 'Gluc'])
    return 372, [
        ('Crisaborole, a benzoxaborole soft drug, accumulates in the skin (dermis) after it is applied (slide 7).', s1),
        ('Step 1: hydrolytic deboronation, spontaneous in the water of the skin, no enzyme: the boron leaves and the benzyl alcohol product remains (11/03 T 699–704).', s2),
        ('Step 2: the CH2OH becomes the carboxylic acid by two enzymes, alcohol dehydrogenase then aldehyde dehydrogenase; not CYPs (T 705–709, 768–769).', s3),
        ('Phase 2 on the benzyl alcohol product: step 3, sulfation (sulfotransferases); step 4, glucuronidation (UGT); 3,4, both. Polleve-1 keyed steps 3 and 4 (slide 9; T 771–776).', s4),
    ]


def f_hydrocortisone():
    s1 = text(W / 2, 12, 'Hydrocortisone metabolism', 'title') + mol('hydrocortisone', 5, 20, 160, 118)
    s2 = s1 + eq(172, 308, 82) + text(240, 62, '11β-Hydroxysteroid Dehydrogenase', 'lbl xs') + \
        text(240, 74, '(11β-HSD)', 'lbl sm') + mol('cortisone', 315, 20, 160, 118)
    s3 = s2 + arrow(85, 140, 85, 168) + text(93, 158, '5β-Reductase', 'lbl sm', 'start') + mol('dhf5b', 5, 170, 160, 118)
    s4 = s3 + eq(172, 308, 232) + text(240, 222, '3α-HSD', 'lbl sm') + mol('urocortisol', 315, 170, 160, 118)
    return 290, [
        ('Hydrocortisone, the reference glucocorticoid: under 15% absorbed through skin; t½ 1–2 h, due to metabolism (slide 26).', s1),
        ('11β-HSD oxidizes the 11β-OH to the 11-ketone, cortisone (inactive), and reduces it back: its major metabolite (11/03 T 1189–1196).', s2),
        ('5β-Reductase reduces the C4=C5 double bond of ring A: 5β-dihydrocortisol (inactive) (slide 26).', s3),
        ('3α-HSD reduces the 3-ketone to the 3α-OH: urocortisol (inactive). Cortisone and urocortisol are found in urine (slide 26).', s4),
    ]


def f_vitd():
    s1 = text(W / 2, 12, 'Vitamin D3: 7-dehydrocholesterol to calcitriol', 'title') + \
        mol('dhc7', 5, 20, 190, 120)
    s2 = s1 + arrow(198, 82, 268, 82) + text(233, 66, '1) reaction??', 'lbl xs') + text(233, 96, '2) organ??', 'lbl xs') + \
        mol('d3', 272, 18, 200, 140, 'Cholecalciferol (Vit. D3)')
    s3 = s2 + arrow(372, 160, 372, 186) + text(366, 177, 'organ??', 'lbl xs', 'end') + \
        mol('d25', 272, 188, 200, 140, False) + text(372, 336, '25-OH-cholecalciferol', 'lbl sm') + \
        text(372, 348, '(Inactive circulating Vit. D3)', 'lbl xs')
    s4 = s3 + arrow(268, 255, 205, 255) + text(236, 240, 'organ??', 'lbl xs') + text(236, 270, '(1-α-hydroxylase)', 'lbl xs') + \
        mol('calcitriol', 5, 188, 195, 140, False) + text(102, 336, 'Calcitriol', 'lbl sm') + \
        text(102, 348, '(1,25-di-OH-cholecalciferol, Active Vit. D3)', 'lbl xs')
    # step 5: the assigned reading's answers, kept apart from the slide: numbered marks at the
    # three arrows and a band under the scheme, headed as the reading's (Bikle, Endotext,
    # Abstract and Overview, as the bank items S4-006 to S4-014 key them; heat-driven step: Figure 1
    # legend "thermal induced rearrangement" and "at 37oC pre-D3 is slowly converted to D3",
    # section "Cutaneous Production of Vitamin D3", Endotext update of June 15, 2025)
    s5 = s4 + text(233, 112, '① skin', 'cl') + text(380, 177, '② liver', 'cl', 'start') + \
        text(236, 226, '③ kidney', 'cl') + \
        '<rect class="box" x="2" y="358" width="476" height="98" rx="6"/>' + \
        text(10, 373, 'From the assigned reading (Bikle, Endotext), not on the slide:', 'lbl sm', 'start') + \
        mol('pred3', 8, 378, 124, 76, 'Pre-vitamin D3') + \
        text(140, 394, '① Skin, no enzyme: UVB light opens ring B → pre-vitamin D3,', 'lbl sm', 'start') + \
        text(152, 407, 'which turns into vitamin D3 by a slow, heat-driven step.', 'lbl sm', 'start') + \
        text(140, 425, '② Liver: 25-hydroxylase, mainly CYP2R1.', 'lbl sm', 'start') + \
        text(140, 443, '③ Kidney: 1-α-hydroxylase (printed on the slide), CYP27B1.', 'lbl sm', 'start')
    return 460, [
        ('Slide 27 as printed (steps 1–4). 7-Dehydrocholesterol: an intact steroid, rings A–D, with the 5,7-diene in ring B.', s1),
        ('First: a reaction that opens ring B, in an organ; he said light is involved (11/04 T@4330–@4410). Cholecalciferol is a secosteroid.', s2),
        ('Then 25-hydroxylation in another organ: 25-OH-cholecalciferol, the inactive circulating form (slide 27).', s3),
        ('Last, 1-α-hydroxylase adds the 1-OH: calcitriol, the active form. The reactions, organs and enzymes are the take-home; step 5 (T@3000–@4100).', s4),
        ('Step 5 is the reading he assigned, not the slide: the answers to his 2-point take-home question (11/03 T 603–606; 11/04 T@2873–@4440).', s5,
         'From the assigned reading'),
    ]


def f_anthralin():
    g = text(W / 2, 12, 'Anthralin autoxidation', 'title') + mol('anthralin', 5, 22, 160, 110) + \
        arrow(170, 70, 285, 70) + text(228, 62, 'e', 'lbl') + \
        '<path class="ax" d="M205 72 Q212 92 222 92" fill="none"/>' + text(240, 96, 'O<tspan baseline-shift="sub" font-size="8">2</tspan>&#8226;&#8722;', 'lbl', 'start') + \
        mol('anthranyl', 292, 22, 180, 110) + \
        arrow(382, 136, 382, 166) + arrow(392, 136, 392, 166) + arrow(402, 136, 402, 166) + \
        box(312, 170, 160, 30, 'Carbon black') + text(392, 216, 'stain; not part of the treatment', 'lbl xs') + \
        text(150, 160, 'Superoxide anion + anthranyl radical:', 'lbl xs') + \
        text(150, 172, 'the cytotoxic radicals (CBDA)', 'lbl xs')
    return 226, g


def f_psoralen():
    g = text(W / 2, 12, 'Psoralen + UVA: DNA crosslink', 'title') + \
        mol('thymine_dna', 2, 22, 120, 100, 'Thymine (DNA)') + text(132, 70, '+', 'lbl') + \
        mol('psoralen', 140, 30, 190, 90, 'Psoralen') + text(185, 132, 'Pyrone', 'lbl xs') + text(285, 132, 'Furan', 'lbl xs') + \
        text(342, 70, '+', 'lbl') + mol('thymine_dna', 355, 22, 120, 100, 'Thymine (DNA)') + \
        arrow(240, 140, 240, 172) + text(250, 160, 'hν', 'lbl', 'start') + text(272, 160, '(UVA, 315–400 nm, slide 18)', 'lbl xs', 'start') + \
        mol('pso_adduct', 20, 176, 440, 150, 'Crosslinked (intercalated) DNA')
    return 330, g


def f_folate():
    g = text(W / 2, 12, 'Folate reduction by DHFR', 'title') + mol('folic', 10, 20, 460, 104, 'Folic Acid') + \
        arrow(240, 128, 240, 166) + text(250, 142, 'Dihydrofolate Reductase', 'lbl sm', 'start') + \
        text(250, 156, '(Folate reduction)', 'lbl xs', 'start') + \
        mol('thf', 10, 170, 460, 122, False) + text(240, 300, 'Tetrahydrofolic Acid', 'lbl sm') + \
        text(240, 312, '(Essential co-factor for DNA synthesis)', 'lbl xs')
    return 318, g


def f_apremilast():
    g = text(W / 2, 12, 'Apremilast metabolism', 'title') + mol('apremilast', 0, 20, 210, 170) + \
        arrow(212, 100, 290, 100) + text(251, 92, 'O-demethylation', 'lbl xs') + \
        box(294, 85, 104, 30, '-OH metabolite') + arrow(400, 100, 422, 100) + box(425, 85, 52, 30, 'O-Gluc') + \
        text(251, 128, 'CYP3A4 major', 'lbl xs') + text(251, 140, '(1A2, 2A6 minor)', 'lbl xs') + text(412, 128, 'UGT', 'lbl xs')
    return 194, g


def f_hydroxyacids():
    q = text(400, 160, '?', 'lbl', extra=' style="font-size:44px"')
    base = text(W / 2, 12, 'Glycolic and salicylic acid metabolism', 'title') + \
        mol('ga', 20, 24, 130, 80) + arrow(170, 64, 270, 64) + text(220, 56, 'DMEs', 'lbl sm') + \
        mol('oxalic', 290, 24, 130, 80, 'Oxalic acid (diacid)') + \
        mol('sa', 20, 112, 130, 100) + arrow(170, 158, 300, 158) + text(235, 150, 'AA-Conjugation', 'lbl sm')
    s1 = base + q
    s2 = base + mol('salicyluric', 312, 108, 165, 110, False) + text(395, 222, 'glycine conjugate (T)', 'lbl xs')
    return 228, [
        ('GA: an alpha-hydroxy acid, hydrophilic (log P about 1), acts at the surface; minimal metabolism by two enzymes, ADH then ALDH, to the diacid (11/04 T@20818–@21000).', s1),
        ('SA: a beta-hydroxy acid; 75% of what reaches the circulation is conjugated with glycine (amino acid conjugation) (T@22430–@22480): salicyluric acid.', s2),
    ]


def f_bpo():
    g = text(W / 2, 12, 'Benzoyl peroxide in the skin', 'title') + mol('bpo', 0, 20, 185, 106, 'Benzoyl peroxide (BPO)') + \
        text(92, 138, '(log P = 3.5)', 'lbl xs') + arrow(188, 66, 232, 66) + \
        mol('benzoic', 236, 26, 100, 100) + text(346, 72, '+', 'lbl') + mol('benzoyl_rad', 358, 26, 118, 100) + \
        text(286, 140, 'lowers skin pH', 'lbl xs') + text(417, 140, 'kills bacteria', 'lbl xs')
    return 148, g


def f_etretinate():
    g = text(W / 2, 12, 'Etretinate to acitretin', 'title') + mol('etretinate', 10, 20, 460, 92) + \
        text(240, 124, 'ethyl ester prodrug; t½ 120 days; narrow TI; teratogenic (slide 50)', 'lbl xs') + \
        arrow(240, 130, 240, 160) + text(250, 150, 'CEs (T)', 'lbl sm', 'start') + \
        mol('acitretin', 10, 164, 460, 92, 'Acitretin (Soriatane)') + text(240, 268, '2nd generation retinoid; active form of etretinate', 'lbl xs')
    return 274, g


def f_tazarotene():
    g = text(W / 2, 12, 'Tazarotene to tazarotenic acid', 'title') + mol('tazarotene', 20, 20, 440, 92) + \
        text(240, 124, 'a prodrug (ethyl ester)', 'lbl xs') + \
        arrow(240, 130, 240, 160) + text(250, 150, '??', 'lbl sm', 'start') + text(266, 150, '(his answer: CE, carboxylesterases)', 'lbl xs', 'start') + \
        mol('tazarotenic', 20, 164, 440, 92)
    return 262, g


# drawn mirrored so the slide's left end is on the left (by species name)
FLIP = {'Crisaborole', 'Etretinate', 'Tazarotene (Tazorac)'}

# a product drawn in the orientation of the species it comes from (common part matched)
ALIGN = {'crisa_alc': 'crisaborole', 'crisa_acid': 'crisaborole', 'cortisone': 'hydrocortisone',
         'dhf5b': 'hydrocortisone', 'urocortisol': 'hydrocortisone', 'd25': 'd3', 'calcitriol': 'd3', 'pred3': 'd3',
         'thf': 'folic', 'acitretin': 'etretinate', 'tazarotenic': 'tazarotene', 'anthranyl': 'anthralin',
         'salicyluric': 'sa', 'benzoyl_rad': 'benzoic'}

FIGS = {'rx-crisaborole': f_crisaborole, 'rx-hydrocortisone': f_hydrocortisone, 'rx-vitd': f_vitd,
        'rx-anthralin': f_anthralin, 'rx-psoralen': f_psoralen, 'rx-folate': f_folate,
        'rx-apremilast': f_apremilast, 'rx-hydroxyacids': f_hydroxyacids, 'rx-bpo': f_bpo,
        'rx-etretinate': f_etretinate, 'rx-tazarotene': f_tazarotene}

DEFS = ('<defs><marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" '
        'orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" opacity="0.65"/></marker></defs>')


def wrap(t, n=96):
    out, cur = [], ''
    for w in t.split(' '):
        if len((cur + ' ' + w).strip()) > n:
            out.append(cur.strip()); cur = w
        else:
            cur += ' ' + w
    out.append(cur.strip())
    if len(out) > 3:
        raise ValueError('step caption over 3 lines: ' + t)
    return [l for l in out if l]


def svg_open(h, label):
    lab = re.sub(r'<[^>]+>', ' ', label)
    lab = re.sub(r'\s+', ' ', html.unescape(lab)).strip().replace('"', '&quot;')
    return ('<div class="rxscroll" style="overflow-x:auto;-webkit-overflow-scrolling:touch">'
            '<svg class="rx" viewBox="0 0 %d %d" role="img" aria-label="%s">%s' % (W, h, lab, DEFS))


def build(fig):
    out = FIGS[fig['key']]()
    cap = fig['caption']
    if isinstance(out[1], str):                      # one picture
        h, g = out
        return '<figure class="fig rxfig">%s%s</svg></div><figcaption>%s</figcaption></figure>' % (svg_open(h, cap), g, cap)
    h0, steps = out
    h = h0 + CAPBAND
    g = ''
    for i, (c, inner, *tg) in enumerate(steps):        # an optional third item tags the step (as diagrams.js stepper)
        lines = wrap(c)
        g += '<g class="st%s" data-step="%d">%s' % (' on' if i == 0 else '', i + 1, inner)
        g += text(6, h - 12 - len(lines) * 10, 'Step %d of %d%s' % (i + 1, len(steps), (' · ' + esc(tg[0])) if tg else ''),
                  'lbl sm capt', 'start')
        for k, l in enumerate(lines):
            g += text(6, h - 2 - (len(lines) - 1 - k) * 10, esc(l), 'lbl xs capt', 'start')
        g += '</g>'
    dots = ''.join('<button class="sdot%s" data-go="dot" data-i="%d" aria-label="Go to step %d"></button>' % (
        ' on' if i == 0 else '', i, i + 1) for i in range(len(steps)))
    ctl = ('<div class="anim" data-anim="%s"><button class="btn ghost" data-go="-1">◀ Back</button>'
           '<button class="btn ghost" data-go="1">Next ▶</button><button class="btn ghost" data-go="replay">↻ Replay step</button>'
           '<button class="btn ghost" data-go="play">▶ Play all</button><span class="sdots">%s</span></div>') % (fig['key'], dots)
    return '<figure class="fig rxfig">%s%s</svg></div>%s<figcaption>%s</figcaption></figure>' % (svg_open(h, cap), g, ctl, cap)


def main():
    data = json.load(open(DATA))
    for s in data['species']:
        SP[s['id']] = s
    for s in data['species']:                      # references first, then the species aligned to them
        if s['id'] in ALIGN:
            continue
        *s['_svg'], s['_mol'] = mol_svg(s['smiles'], s['name'])
    for i, r in ALIGN.items():
        s = SP[i]
        *s['_svg'], s['_mol'] = mol_svg(s['smiles'], s['name'], SP[r]['_mol'])
    dia, names = {}, {}
    for f in data['figures']:
        if f['key'] not in FIGS:
            raise ValueError('no layout for ' + f['key'])
        dia[f['key']] = build(f)
        names[f['key']] = f['title']
    for k in FIGS:
        if k not in dia:
            raise ValueError('layout without data: ' + k)
    js = ('/* Reaction and metabolic schemes from Dr. Sikazwe\'s assigned Exam 1 pages (DPAW).\n'
          '   GENERATED by gen_reactions.py from reactions_data.json: edit those and rerun;\n'
          '   do not edit this file by hand. Loaded after diagrams.js: adds the figures to DIA,\n'
          '   their names to DIA_NAMES and one group to DIAGRAMS. */\n'
          'const RX_FIGS = %s;\n'
          'const RX_NAMES = %s;\n'
          'Object.assign(DIA, RX_FIGS);\n'
          'if (typeof document !== \'undefined\' && document.head && !document.getElementById(\'rxcss\')) {\n'
          '  const s = document.createElement(\'style\'); s.id = \'rxcss\'; s.textContent = %s; document.head.appendChild(s);\n'
          '}\n'
          'if (typeof DIA_NAMES !== \'undefined\') Object.assign(DIA_NAMES, RX_NAMES);\n'
          'if (typeof DIAGRAMS !== \'undefined\') DIAGRAMS.push([\'Reactions on Dr. Sikazwe\\\'s slides\', Object.keys(RX_FIGS)]);\n') % (
        json.dumps(dia, ensure_ascii=False, indent=1), json.dumps(names, ensure_ascii=False, indent=1), json.dumps(CSS))
    open(OUT, 'w').write(js)
    print('wrote reactions.js: %d figures, %d species (%d KB)' % (len(dia), len(SP), len(js) // 1024))


if __name__ == '__main__':
    main()

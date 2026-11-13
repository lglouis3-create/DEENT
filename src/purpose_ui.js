/* purpose_ui.js: a sentence at the top of every drawn figure that says what the figure shows and
   what it is for (course-level, Louis 2026-11-13: "a sentence stating the purpose of the diagram
   and what it's showing"). Each sentence is written from the figure's own steps (diagrams.js,
   figs2.js, cbda.js) and its spoken script (dianarr_smith.js, dianarr_sik.js).

   The figure is found the way dianarr_ui.js finds it: a step-through by its [data-anim] control,
   a static figure by the aria-label of its drawing. A figure with no entry below, and a figure
   inside the walkthrough player (it has its own words), gets no line. The line is plain text, is
   added once per figure (data-dpurp) and is not read aloud: the narration scripts are unchanged.
   Storage: none. Needs DIA, DIA_NAMES from diagrams.js; does nothing without them. */
const PURPOSE_UI = (() => {
  if (typeof document === 'undefined' || typeof MutationObserver === 'undefined' || typeof DIA === 'undefined' || !DIA) return null;

  const PURPOSE = {
    'acne-cascade': 'Shows how a normal follicle becomes each acne lesion, from the comedones to the nodule or cyst, so you can name the stage a lesion is at and what comes next.',
    'nr-action': 'Shows how a corticosteroid changes gene expression through the glucocorticoid receptor, directly at the GRE or indirectly through NF-kB and AP-1, so you can tell the two routes apart.',
    'nr-rar': 'Shows how a retinoid acts through the RAR–RXR heterodimer at the RARE, and which receptor family gives which effect, so you can match a retinoid to RAR or RXR targeting.',
    'nr-vdr': 'Shows how calcipotriene acts through the vitamin D receptor paired with RXR-α, so you can link the drug to its receptor, its response elements and its effect in psoriasis.',
    'fig-cni-nfat': 'Shows the three signals that activate a helper T cell and the step where cyclosporine and tacrolimus block calcineurin, so you can say why less IL-2 is made.',
    'fig-il-axis': 'Shows which cytokine or receptor subunit each biologic binds, so you can match each antibody to its target.',
    'fig-spf': 'Builds the measures of sun protection (MED, SPF, broad spectrum), so you can say what each one measures and what SPF does not measure.',
    'fig-block-vs-screen': 'Compares sunblocks and sunscreens, so you can sort an ingredient into one group and state how each group protects.',
    'fig-pde4-camp': 'Shows why PDE4 inhibitors raise cyclic AMP inside the cell, so you can say what the enzyme does and what blocking it changes.',
    'fig-ribosome': 'Shows the bacterial ribosome and where the antibiotics bind it, so you can match each antibiotic to its binding site.',
    'fig-folate-path': 'Shows how bacteria make their own folate and the two drugs that block it in sequence, so you can say which step each drug blocks.',
    'fig-folate-cycle': 'Shows the folate cycle in human cells and where methotrexate acts, so you can say what is lost when it is blocked.',
    'fig-costim': 'Shows co-stimulation of a T cell and how abatacept blocks it, so you can say which signal is missing.',
    'rx-crisaborole': 'Shows how crisaborole is broken down in the skin, step by step, so you can name the reaction at each step and the enzymes that do it.',
    'rx-hydrocortisone': 'Shows how hydrocortisone is metabolized to inactive products, so you can name each enzyme and its product.',
    'rx-vitd': 'Shows the vitamin D scheme from 7-dehydrocholesterol to calcitriol, with the answers to the slide’s blanks, so you can name each reaction, organ and product.',
    'rx-anthralin': 'Shows the autoxidation of anthralin, which makes the radicals behind its action, so you can say what forms and that no enzyme is needed.',
    'rx-psoralen': 'Shows how psoralen slips between DNA base pairs and is activated by UVA light, so you can link the drug to the light it needs.',
    'rx-folate': 'Shows methotrexate competing with folic acid at DHFR, so you can say why tetrahydrofolic acid and DNA synthesis fall.',
    'rx-apremilast': 'Shows the metabolites of apremilast and the CYP enzymes that make them, so you can name the major and the minor enzymes.',
    'rx-hydroxyacids': 'Shows how glycolic acid and salicylic acid are metabolized, so you can name the enzymes or the conjugation for each.',
    'rx-bpo': 'Shows what happens to benzoyl peroxide in the skin: its peroxide bond breaks and benzoic acid forms, so you can link the product to the keratolytic effect and to excretion.',
    'rx-etretinate': 'Shows etretinate as an ethyl ester prodrug and the enzymes that activate it, so you can name how the active form is made.',
    'rx-tazarotene': 'Shows tazarotene as an ethyl ester prodrug activated by carboxylesterases, so you can name its active form, tazarotenic acid.',
    'cb-crisaborole': 'Shows how the boron of crisaborole binds the zinc and magnesium in the PDE4 active site, so you can say why PDE4 is blocked and cyclic AMP rises.',
    'cb-mtx': 'Compares methotrexate with folic acid at DHFR, so you can name the two places they differ and say why methotrexate binds the enzyme in place of folic acid.',
    'cb-cyclosporine': 'Shows that cyclosporine is activated by binding cyclophilin and that the complex then blocks calcineurin, so you can name the active form.',
    'cb-tetracycline': 'Shows how tetracycline chelates metal ions, so you can link its structure to the insoluble salts, to the effect on teeth and bone, and to the effect of food.',
    'cb-salicylates': 'Shows how homosalate and octisalate, esters of salicylic acid, can be hydrolyzed to salicylic acid, so you can link the ester bond to what is released.',
    'cb-hydroxyacids': 'Shows how to count alpha and beta from the carboxylic acid carbon, so you can classify glycolic acid and salicylic acid.',
    'cb-antiandrogens': 'Compares the two ways to reduce the action of testosterone, lowering its synthesis or blocking its receptor, so you can place spironolactone, ketoconazole and flutamide.',
    'cb-retinoids': 'Compares retinoids by structure, all-trans or 13-cis and an exposed acid or an ester, so you can tell which are active as applied and which are prodrugs.',
    'cb-limus': 'Compares pimecrolimus with tacrolimus, which differ at two places, so you can name the differences and say what they change.',
    'cb-gc-potency': 'Shows the structural changes from hydrocortisone to clobetasol propionate, so you can name the features that raise potency.',
    'fig-steroid': 'Shows the steroid skeleton: rings, faces, carbon numbers, the features that raise anti-inflammatory activity and the contacts in the glucocorticoid receptor, so you can number and describe a steroid.',
    'fig-vitd-skin': 'Shows how sunlight makes vitamin D in the skin and what limits it, so you can say how each step happens and why less is made in winter or under sunscreen.',
    'fig-vitd-transport': 'Shows how vitamin D travels in the blood and which cells take it up, so you can explain why a low binding protein can lower the total level while the free level stays normal.',
    'fig-vitd-regulation': 'Shows how two kidney enzymes set the calcitriol level and what regulates them, so you can predict the effect of parathyroid hormone, FGF23 and calcitriol itself.',
    'fig-vdr-action': 'Shows how calcitriol acts through the vitamin D receptor and RXR at a response element, so you can say how a gene is turned up or down.',
    'fig-vitd-targets': 'Shows where calcitriol acts (intestine, kidney, bone, parathyroid gland) and what it does in each, so you can match each organ to its effect.',
    'fig-vitd-keratinocyte': 'Shows what calcitriol does in the skin: it stops keratinocyte division, strengthens innate immunity and restrains adaptive immunity, so you can link vitamin D to psoriasis treatment.',
    'fig-vitd-evidence': 'Sets the benefits suggested by animal and observational studies against what randomized trials found, so you can separate what is suggested from what is shown.'
  };

  /* a static figure is found by the aria-label of its drawing, as dianarr_ui.js does */
  const unq = s => String(s).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  const STATIC = new Map();
  Object.keys(PURPOSE).forEach(k => {
    const h = DIA[k]; if (typeof h !== 'string' || /data-anim=/.test(h)) return;
    const m = h.match(/<svg[^>]*\saria-label="([^"]*)"/); if (m) STATIC.set(unq(m[1]), k);
  });
  const keyOf = fig => {
    const ctl = fig.querySelector(':scope > [data-anim]');
    if (ctl) return PURPOSE[ctl.dataset.anim] ? ctl.dataset.anim : null;
    const svg = fig.querySelector('svg');
    return svg ? STATIC.get(svg.getAttribute('aria-label') || '') || null : null;
  };

  const css = `.dnpurpose{margin:2px 0 8px;font-size:13.5px;line-height:1.45;color:var(--text,inherit)}.dnpurpose b{font-weight:700}
@media print{.dnpurpose{color:#000}}`;
  const addCss = () => {
    if (document.getElementById('dpurpcss')) return;
    const s = document.createElement('style'); s.id = 'dpurpcss'; s.textContent = css; document.head.appendChild(s);
  };

  function arm(root) {
    (root || document).querySelectorAll('figure.fig:not([data-dpurp])').forEach(fig => {
      if (fig.closest('.wkpanel')) { fig.dataset.dpurp = '0'; return; }
      const k = keyOf(fig); fig.dataset.dpurp = k ? '1' : '0';
      if (!k) return;
      const p = document.createElement('p'); p.className = 'dnpurpose';
      const b = document.createElement('b'); b.textContent = 'Purpose. ';
      p.append(b, document.createTextNode(PURPOSE[k]));
      fig.prepend(p);
    });
  }

  addCss();
  let queued = false;
  new MutationObserver(() => {
    if (queued) return; queued = true;
    (window.requestAnimationFrame || setTimeout)(() => { queued = false; arm(document); });
  }).observe(document.body, {childList: true, subtree: true});
  arm(document);
  return {arm, keys: () => Object.keys(PURPOSE), text: k => PURPOSE[k]};
})();

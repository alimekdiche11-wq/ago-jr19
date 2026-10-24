/* ============================================================
   AgroScope — core reference data
   crops · organs · symptom taxonomy · identification key
   mode-of-action groups · degree-day presets
   ============================================================ */

window.AGRO = window.AGRO || {};

AGRO.meta = {
  version: "1.0",
  revision: "2026.10",
  scope:
    "Field decision support for agronomy, agricultural entomology and plant protection, " +
    "with emphasis on Mediterranean, semi-arid and Saharan production systems (Algeria)."
};

/* ------------------------------------------------------------
   CROPS
   ------------------------------------------------------------ */

AGRO.crops = [
  { id:"tomato", name:"Tomato", fr:"Tomate", sci:"Solanum lycopersicum", family:"Solanaceae", mono:"To",
    systems:"Open field, plastic tunnel, greenhouse, soilless",
    regions:"Mitidja, littoral, Biskra, El Oued, Mostaganem",
    note:"Key year-round crop; protected cultivation sustains Tuta absoluta and whitefly pressure." },

  { id:"potato", name:"Potato", fr:"Pomme de terre", sci:"Solanum tuberosum", family:"Solanaceae", mono:"Po",
    systems:"Open field, spring and autumn cycles",
    regions:"Aïn Defla, Mostaganem, El Oued, Tiaret",
    note:"Autumn cycle in the north and winter cycle in the south shape vector and blight risk." },

  { id:"pepper", name:"Pepper / chilli", fr:"Piment, poivron", sci:"Capsicum annuum", family:"Solanaceae", mono:"Pe",
    systems:"Open field, plastic tunnel, greenhouse",
    regions:"Biskra, El Oued, Mostaganem, Tlemcen",
    note:"Thrips-transmitted tospoviruses are the main constraint under cover." },

  { id:"cucurbits", name:"Cucurbits", fr:"Cucurbitacées", sci:"Cucumis melo, C. sativus, Cucurbita spp.", family:"Cucurbitaceae", mono:"Cu",
    systems:"Open field, tunnel, greenhouse",
    regions:"Biskra, Mostaganem, Mascara, Skikda",
    note:"Downy and powdery mildew drive the spray calendar; aphids move viruses." },

  { id:"onion", name:"Onion / garlic", fr:"Oignon, ail", sci:"Allium cepa, A. sativum", family:"Amaryllidaceae", mono:"On",
    systems:"Open field, irrigated",
    regions:"Mascara, Tiaret, Saïda, Biskra",
    note:"Thrips and downy mildew are the two decisive risks; storage rots set the price." },

  { id:"citrus", name:"Citrus", fr:"Agrumes", sci:"Citrus sinensis, C. reticulata, C. limon", family:"Rutaceae", mono:"Ci",
    systems:"Irrigated orchards",
    regions:"Mitidja, Blida, Boufarik, Skikda, Annaba, Tlemcen",
    note:"Medfly and scale insects determine export-grade fruit; CTV and HLB are quarantine threats." },

  { id:"olive", name:"Olive", fr:"Olivier", sci:"Olea europaea", family:"Oleaceae", mono:"Ol",
    systems:"Rainfed and irrigated orchards",
    regions:"Kabylie, Sétif, Mascara, Bouira, Tlemcen",
    note:"Olive fly drives oil acidity; peacock spot and Verticillium limit vigour." },

  { id:"datepalm", name:"Date palm", fr:"Palmier dattier", sci:"Phoenix dactylifera", family:"Arecaceae", mono:"Da",
    systems:"Oasis, irrigated palm groves",
    regions:"Biskra, El Oued, Ouargla, Adrar, Ghardaïa",
    note:"Red palm weevil and Bayoud are the two existential threats; both need a zero-tolerance posture." },

  { id:"grape", name:"Grapevine", fr:"Vigne", sci:"Vitis vinifera", family:"Vitaceae", mono:"Gr",
    systems:"Rainfed and irrigated table/wine vineyards",
    regions:"Mostaganem, Mascara, Tlemcen, Bouira",
    note:"Downy mildew risk is rainfall-driven; botrytis risk is bunch-compaction driven." },

  { id:"pome", name:"Pome fruit", fr:"Pommier, poirier", sci:"Malus domestica, Pyrus communis", family:"Rosaceae", mono:"Pm",
    systems:"Irrigated orchards, cold-chain dependent",
    regions:"Batna, Khenchela, Sétif, Bouira",
    note:"Codling moth and apple scab are the reference targets; fire blight is a regulatory emergency." },

  { id:"stonefruit", name:"Stone fruit", fr:"Rosacées à noyau", sci:"Prunus persica, P. armeniaca, P. dulcis", family:"Rosaceae", mono:"Sf",
    systems:"Irrigated orchards",
    regions:"Batna, Mascara, Tlemcen, Bouira",
    note:"Medfly and oriental fruit moth set the harvest window and the export risk." },

  { id:"cereals", name:"Cereals", fr:"Céréales", sci:"Triticum spp., Hordeum vulgare", family:"Poaceae", mono:"Ce",
    systems:"Rainfed, supplemental irrigation",
    regions:"Sétif, Tiaret, Constantine, Batna, Guelma",
    note:"Rusts and Septoria are weather-driven; Sunn pest matters in the eastern high plains." },

  { id:"fababean", name:"Faba bean / pulses", fr:"Féverole, légumineuses", sci:"Vicia faba, Cicer arietinum", family:"Fabaceae", mono:"Fb",
    systems:"Rainfed, rotation crop",
    regions:"Sétif, Constantine, Guelma, Tlemcen",
    note:"Chocolate spot and rust are the dominant foliar diseases; aphids vector viruses." },

  { id:"stored", name:"Stored products", fr:"Denrées stockées", sci:"—", family:"—", mono:"St",
    systems:"Warehouses, silos, farm stores",
    regions:"Nationwide",
    note:"Postharvest losses are routinely underestimated; hygiene and moisture decide the outcome." }
];

/* ------------------------------------------------------------
   PLANT ORGANS  (diagnostic entry points)
   ------------------------------------------------------------ */

AGRO.organs = [
  { id:"leaf",    label:"Leaves", short:"Leaf",     hint:"spots, mines, curling, coatings, stippling" },
  { id:"shoot",   label:"Shoots / growing tip", short:"Shoot", hint:"dieback, boring, galling" },
  { id:"flower",  label:"Flowers", short:"Flower",  hint:"blight, drop, distortion" },
  { id:"fruit",   label:"Fruit / head", short:"Fruit", hint:"holes, rots, lesions, drop" },
  { id:"stem",    label:"Stem / branch / trunk", short:"Stem", hint:"cankers, gum, vascular browning, borers" },
  { id:"collar",  label:"Collar / crown", short:"Collar", hint:"girdling, rot at soil line" },
  { id:"root",    label:"Roots", short:"Root",     hint:"galls, rot, decline" },
  { id:"whole",   label:"Whole plant / field", short:"Whole", hint:"stunting, collapse, defoliation" },
  { id:"storage", label:"Produce in store", short:"Store", hint:"rots, insect damage, off-odour" }
];

/* ------------------------------------------------------------
   SYMPTOM TAXONOMY  (multi-select, used by the diagnostic engine)
   group = organ family the symptom is normally recorded on
   ------------------------------------------------------------ */

AGRO.symptoms = [
  /* leaf */
  { id:"blotch-mines",     label:"Blotch mines between leaf veins", group:"leaf" },
  { id:"serpentine-mines", label:"Serpentine / winding mines", group:"leaf" },
  { id:"chewing-holes",    label:"Chewing holes or ragged edges", group:"leaf" },
  { id:"chlorosis",        label:"Yellowing (chlorosis), diffuse or interveinal", group:"leaf" },
  { id:"mosaic",           label:"Mosaic, mottling or yellow netting", group:"leaf" },
  { id:"necrotic-spots",   label:"Brown / black necrotic spots, often with halos", group:"leaf" },
  { id:"concentric-spots", label:"Target-like spots with concentric rings", group:"leaf" },
  { id:"white-powder",     label:"White powdery coating", group:"leaf" },
  { id:"downy-growth",     label:"Fuzzy grey-purple growth on the underside", group:"leaf" },
  { id:"distortion",       label:"Curling, cupping or distortion of leaves", group:"leaf" },
  { id:"honeydew",         label:"Sticky honeydew and sooty mould", group:"leaf" },
  { id:"webbing",          label:"Fine silk webbing", group:"leaf" },
  { id:"stippling",        label:"Bronzing, silvering or fine stippling", group:"leaf" },
  { id:"marginal-necrosis",label:"Marginal scorch or necrosis", group:"leaf" },
  { id:"silvery-scar",     label:"Silvery scarring / silvering streaks", group:"leaf" },

  /* shoot */
  { id:"dieback",          label:"Shoot dieback from the tip", group:"shoot" },
  { id:"exit-holes",       label:"Exit holes with frass or sawdust", group:"shoot" },
  { id:"tip-boring",       label:"Dead central shoot / bored growing point", group:"shoot" },

  /* flower */
  { id:"flower-blight",    label:"Flower blight or rotting", group:"flower" },
  { id:"flower-drop",      label:"Premature flower or bud drop", group:"flower" },

  /* fruit */
  { id:"entry-holes",      label:"Entry holes with frass or gum", group:"fruit" },
  { id:"soft-rot",         label:"Soft, spreading rot", group:"fruit" },
  { id:"sunken-lesion",    label:"Sunken lesions or scabby patches", group:"fruit" },
  { id:"premature-drop",   label:"Premature fruit drop", group:"fruit" },
  { id:"fruit-mosaic",     label:"Mosaic or ringspots on fruit", group:"fruit" },
  { id:"scarring",         label:"Corky scarring or deformation", group:"fruit" },
  { id:"mummification",    label:"Mummified / dried fruit remaining on the tree", group:"fruit" },

  /* stem */
  { id:"canker",           label:"Cankers, cracks or sunken stem lesions", group:"stem" },
  { id:"vascular-browning",label:"Vascular browning (cut stem shows discoloured vessels)", group:"stem" },
  { id:"gummosis",         label:"Gum exudation", group:"stem" },
  { id:"stem-boring",      label:"Tunnels inside the stem", group:"stem" },
  { id:"lodging",          label:"Stem collapse / lodging", group:"stem" },

  /* collar */
  { id:"collar-rot",       label:"Rot at the soil line", group:"collar" },
  { id:"girdling",         label:"Girdling or chewed tissue at the collar", group:"collar" },

  /* root */
  { id:"root-galls",       label:"Root galls or knots", group:"root" },
  { id:"root-rot",         label:"Brown, mushy or rotted roots", group:"root" },

  /* whole */
  { id:"stunting",         label:"Stunting or poor vigour", group:"whole" },
  { id:"collapse",         label:"Sudden wilting or plant collapse", group:"whole" },
  { id:"defoliation",      label:"Defoliation", group:"whole" },
  { id:"sooty-mould",      label:"Black sooty mould on leaves and branches", group:"whole" },

  /* storage */
  { id:"store-rot",        label:"Rot, mould or off-odour in store", group:"storage" },
  { id:"store-insects",    label:"Live insects, dust or exit holes in stored produce", group:"storage" }
];

AGRO.patterns = [
  { id:"random",   label:"Random / scattered", hint:"no clear physical gradient" },
  { id:"edge",     label:"Field edges or borders", hint:"movement from hedges, weeds, neighbouring crops" },
  { id:"patchy",   label:"Distinct patches", hint:"clustered foci, often soil- or irrigation-linked" },
  { id:"rows",     label:"Along rows / blocks", hint:"equipment, irrigation or planting-date effect" },
  { id:"whole",    label:"Whole field, uniform", hint:"weather, nutrition, phytotoxicity or soil-wide issue" },
  { id:"lowspots", label:"Low spots / wet zones", hint:"waterlogging, drainage, oomycete disease" },
  { id:"upwind",   label:"Downwind / near a source", hint:"vector or spore dispersal gradient" }
];

/* ------------------------------------------------------------
   DICHOTOMOUS IDENTIFICATION KEY
   nodes: { id, no, q, note, opts:[{label, hint, next}] }
   terminal taxa live in AGRO.taxa
   ------------------------------------------------------------ */

AGRO.keyStart = "k1";

AGRO.keyNodes = {
  k1: { no:"1", q:"Is the animal eight-legged, without antennae, and without a clearly separated head?",
    note:"Mites and ticks. Body divided into gnathosoma (mouthparts) and idiosoma; nymphs and adults have 4 pairs of legs.",
    opts:[
      { label:"Yes — eight legs, no antennae, no distinct head", next:"t-acari" },
      { label:"No — six legs or legless, antennae usually present, body in three regions", next:"k2" }
    ]},

  k2: { no:"2", q:"Is the specimen under about 2–3 mm, slender, with wings (if present) fringed by long hairs?",
    note:"Thrips. Tarsi end in a bladder-like arolium; mouthparts are asymmetric rasping-sucking.",
    opts:[
      { label:"Yes — tiny, slender, fringed wings", next:"t-thysanoptera" },
      { label:"No — larger or clearly not thrips", next:"k3" }
    ]},

  k3: { no:"3", q:"Are fully formed wings present?",
    note:"Wingless adults and all larvae are common in agriculture — treat 'no' seriously.",
    opts:[
      { label:"Yes — wings visible", next:"k4" },
      { label:"No — wingless adult, nymph or larva", next:"k20" }
    ]},

  k4: { no:"4", q:"How many pairs of wings are visible?",
    note:"Look for halteres: knob-like vestigial hind wings behind the forewings.",
    opts:[
      { label:"One pair (hind wings reduced to halteres)", next:"t-diptera" },
      { label:"Two pairs", next:"k5" }
    ]},

  k5: { no:"5", q:"Are the wings covered in tiny overlapping scales, with mouthparts a coiled siphon?",
    note:"Scales come off as coloured dust on the fingers.",
    opts:[
      { label:"Yes — scale-covered wings, coiled proboscis", next:"t-lepidoptera" },
      { label:"No — wings membranous, bare or hairy", next:"k6" }
    ]},

  k6: { no:"6", q:"Do the mouthparts form a piercing beak held under the body, with wings held roof-like or flat?",
    note:"Includes aphids, whiteflies, scales, psyllids, true bugs. Beak may be short and hard to see on small specimens.",
    opts:[
      { label:"Yes — piercing-sucking beak; wings roof-like", next:"t-hemiptera" },
      { label:"No — chewing mouthparts with visible mandibles", next:"k7" }
    ]},

  k7: { no:"7", q:"Are the forewings hardened into rigid elytra meeting in a straight midline?",
    note:"Beetles. Elytra may be shortened, exposing part of the abdomen.",
    opts:[
      { label:"Yes — hard elytra, straight midline", next:"t-coleoptera" },
      { label:"No — forewings membranous or leathery", next:"k8" }
    ]},

  k8: { no:"8", q:"Are the hind legs enlarged for jumping, with a saddle-like pronotum and roof-like wings?",
    note:"Grasshoppers, locusts, crickets, bush-crickets.",
    opts:[
      { label:"Yes — jumping hind legs", next:"t-orthoptera" },
      { label:"No — hind legs not enlarged", next:"k9" }
    ]},

  k9: { no:"9", q:"Is the waist distinctly constricted into a narrow petiole between thorax and abdomen?",
    note:"Ants, bees, wasps and parasitoids.",
    opts:[
      { label:"Yes — narrow waist", next:"t-hymenoptera" },
      { label:"No — no constricted waist", next:"k10" }
    ]},

  k10: { no:"10", q:"Are the wings densely net-veined, equal in size, and held roof-like over a long abdomen?",
    note:"Lacewings and antlions. Many are predatory; larvae are also predatory.",
    opts:[
      { label:"Yes — net-veined, roof-like", next:"t-neuroptera" },
      { label:"No — few veins, wings held flat", next:"k11" }
    ]},

  k11: { no:"11", q:"Are the antennae long and thread-like with many similar segments, and the wings membranous with few cross-veins?",
    note:"A catch-all for the remaining small orders. Photograph antennae and wing venation and seek confirmation.",
    opts:[
      { label:"Yes — long filiform antennae", next:"t-other" },
      { label:"No / unclear", next:"t-unresolved" }
    ]},

  k20: { no:"12", q:"Does the animal have eight legs and no antennae?",
    note:"Wingless mites are often overlooked; count legs on both sides.",
    opts:[
      { label:"Yes — eight legs", next:"t-acari" },
      { label:"No — six legs, or legless larva", next:"k21" }
    ]},

  k21: { no:"13", q:"Is the body soft and pear-shaped, with a pair of small tubes (cornicles) near the rear?",
    note:"Aphids. Cornicles may be reduced; look for honeydew and cast skins.",
    opts:[
      { label:"Yes — pear-shaped, cornicles", next:"t-aphididae" },
      { label:"No — not aphid-shaped", next:"k22" }
    ]},

  k22: { no:"14", q:"Is the insect small, flattened and immobile, covered by a waxy scale or a shield-like cover?",
    note:"Scale insects. The visible 'shell' is often a secretion, not the body.",
    opts:[
      { label:"Yes — flattened, waxy cover, immobile", next:"t-coccoidea" },
      { label:"No — mobile and not scale-like", next:"k23" }
    ]},

  k23: { no:"15", q:"Is the specimen a caterpillar-like larva with abdominal prolegs?",
    note:"Lepidoptera larvae. Count proleg pairs and check the arrangement of crochets.",
    opts:[
      { label:"Yes — abdominal prolegs present", next:"t-lep-larva" },
      { label:"No — no abdominal prolegs", next:"k24" }
    ]},

  k24: { no:"16", q:"Is the larva legless, tapering to the front, with a visible head skeleton or hooks (maggot)?",
    note:"Diptera larvae, including fruit-fly and leafminer maggots.",
    opts:[
      { label:"Yes — legless maggot", next:"t-dip-larva" },
      { label:"No — legs present", next:"k25" }
    ]},

  k25: { no:"17", q:"Does the larva have three pairs of thoracic legs, a hardened head capsule, and no prolegs?",
    note:"Beetle larvae. Body form separates families: campodeiform (predators), scarabaeiform (C-shaped white grubs), elateriform (wireworms).",
    opts:[
      { label:"Yes — three leg pairs, hard head capsule", next:"t-col-larva" },
      { label:"No / unclear", next:"t-unresolved" }
    ]}
};

/* ------------------------------------------------------------
   TERMINAL TAXA
   ------------------------------------------------------------ */

AGRO.taxa = {
  "t-acari": {
    rank:"Subclass", name:"Acari — mites and ticks", sci:"Acari",
    role:"Pest, predator or neutral",
    diag:["No antennae, no compound eyes, no distinct head", "Body in two regions: gnathosoma and idiosoma", "Four pairs of legs in nymphs and adults (larvae have three)", "Chelicerae modified for piercing or tearing"],
    families:[
      { n:"Tetranychidae", d:"Spider mites — stippling, bronzing, silk webbing on leaf undersides." },
      { n:"Eriophyidae", d:"Gall and rust mites — erinea, blisters, bud distortion; microscopic." },
      { n:"Tarsonemidae", d:"Broad mites — distortion and bronzing of growing tips." },
      { n:"Phytoseiidae", d:"Predatory mites — fast-moving, no webbing; key natural enemies." }
    ],
    crops:["tomato","cucurbits","citrus","grape","datepalm","pome","stonefruit"],
    caution:"A hand lens is mandatory; species-level confirmation usually needs slide-mounted specimens."
  },

  "t-thysanoptera": {
    rank:"Order", name:"Thysanoptera — thrips", sci:"Thysanoptera",
    role:"Pest and virus vector",
    diag:["1–2 mm, slender, often dark or yellow", "Wings (when present) narrow, fringed with long setae", "Asymmetric rasping-sucking mouthparts", "Tarsi with a bladder-like arolium"],
    families:[
      { n:"Thripidae", d:"Most agricultural thrips, including Frankliniella occidentalis and Thrips tabaci." },
      { n:"Phlaeothripidae", d:"Larger, often fungus-feeding or predatory; some gall-makers." }
    ],
    crops:["pepper","onion","cucurbits","tomato","stonefruit"],
    caution:"F. occidentalis vectors TSWV; identification to species matters because vector competence differs."
  },

  "t-diptera": {
    rank:"Order", name:"Diptera — true flies", sci:"Diptera",
    role:"Pest, parasitoid or pollinator",
    diag:["One pair of functional wings; hind wings reduced to halteres", "Large compound eyes, often holoptic in males", "Sponging or piercing mouthparts", "Larvae legless maggots"],
    families:[
      { n:"Tephritidae", d:"Fruit flies — Ceratitis capitata, Bactrocera oleae. Picture-winged, ovipositor visible." },
      { n:"Agromyzidae", d:"Leafminers — Liriomyza spp. Serpentine mines; tiny black-and-yellow adults." },
      { n:"Drosophilidae", d:"Vinegar flies — Drosophila suzukii females have a serrated ovipositor." },
      { n:"Cecidomyiidae", d:"Gall midges — minute, delicate, gall-forming or predatory." },
      { n:"Tachinidae", d:"Parasitoids of caterpillars and bugs — bristly, robust." }
    ],
    crops:["citrus","olive","stonefruit","tomato","cucurbits","grape"],
    caution:"Sticky-trap catches need microscopic confirmation for Liriomyza species, which differ in insecticide response."
  },

  "t-lepidoptera": {
    rank:"Order", name:"Lepidoptera — moths and butterflies", sci:"Lepidoptera",
    role:"Pest (larvae); minor pollinators",
    diag:["Wings covered with scales, often patterned", "Coiled proboscis (reduced in some moths)", "Larvae with abdominal prolegs bearing crochets", "Pupae often in silk cocoon or soil cell"],
    families:[
      { n:"Noctuidae", d:"Helicoverpa, Spodoptera, Agrotis — polyphagous, nocturnal, strong fliers." },
      { n:"Gelechiidae", d:"Tuta absoluta, Phthorimaea operculella — narrow wings, distinctive labial palps." },
      { n:"Tortricidae", d:"Lobesia botrana, Cydia pomonella, Grapholita molesta — leaf-rollers and fruit borers." },
      { n:"Pyralidae", d:"Ectomyelois ceratoniae — carob moth of dates and pomegranate." },
      { n:"Gracillariidae", d:"Phyllocnistis citrella — citrus leafminer; silvery serpentine mines." },
      { n:"Praydidae", d:"Prays oleae — olive moth, three specialised generations." }
    ],
    crops:["tomato","potato","grape","pome","stonefruit","datepalm","olive","citrus","cereals"],
    caution:"Wing pattern alone is unreliable in worn specimens — genitalia or DNA barcoding confirms species."
  },

  "t-lep-larva": {
    rank:"Larval form", name:"Lepidoptera larva — caterpillar", sci:"Lepidoptera (larva)",
    role:"Defoliator, borer or miner",
    diag:["Distinct head capsule", "Three pairs of thoracic legs", "Abdominal prolegs with crochets (arrangement is diagnostic)", "Often with setae and contrasting stripes or spots"],
    families:[
      { n:"Noctuidae", d:"Five pairs of prolegs; often soil-dwelling or leaf-feeding." },
      { n:"Gelechiidae", d:"Small, active, often mining or tying leaves; Tuta larvae enter fruit at the calyx." },
      { n:"Tortricidae", d:"Leaf-rolling and fruit-boring; Cydia larvae have a distinctive anal comb." },
      { n:"Pyralidae", d:"Stem and fruit borers; often with dark pinacula." }
    ],
    crops:["tomato","potato","grape","pome","datepalm","cereals"],
    caution:"Proleg number and crochet arrangement separate families; photograph the anal end."
  },

  "t-hemiptera": {
    rank:"Order", name:"Hemiptera — true bugs, aphids, whiteflies, scales", sci:"Hemiptera",
    role:"Pest, virus vector or predator",
    diag:["Piercing-sucking beak (rostrum) arising from the head", "Wings usually held roof-like; forewings often partly hardened (hemelytra)", "Nymphs resemble small adults without functional wings", "Many produce honeydew"],
    families:[
      { n:"Aphididae", d:"Aphids — soft, pear-shaped, cornicles; colonial, virus vectors." },
      { n:"Aleyrodidae", d:"Whiteflies — wax-dusted adults, scale-like nymphs; Bemisia tabaci is the key vector." },
      { n:"Diaspididae", d:"Armoured scales — Aonidiella aurantii; cover separate from the body." },
      { n:"Pseudococcidae", d:"Mealybugs — wax-covered, mobile; Planococcus ficus on grape." },
      { n:"Pentatomidae", d:"Stink bugs — shield-shaped, plant-feeding or predatory." },
      { n:"Scutelleridae", d:"Sunn pest — Eurygaster integriceps; injures cereal grain quality." },
      { n:"Miridae", d:"Plant bugs — many are pests, some predatory." },
      { n:"Cicadellidae", d:"Leafhoppers — quick jumpers, vectors of phytoplasmas." },
      { n:"Psyllidae", d:"Jumping plant lice — include vectors of citrus greening." }
    ],
    crops:["tomato","pepper","cucurbits","citrus","grape","olive","cereals","fababean"],
    caution:"Wingless morphs and nymphs are routinely misidentified as aphids; check body shape and cornicles."
  },

  "t-aphididae": {
    rank:"Family", name:"Aphididae — aphids", sci:"Aphididae",
    role:"Pest and virus vector",
    diag:["Soft, pear-shaped body, 1–4 mm", "Pair of cornicles (siphunculi) at the rear, usually", "Winged and wingless morphs in the same colony", "Honeydew, sooty mould and cast skins"],
    families:[],
    crops:["tomato","pepper","cucurbits","cereals","fababean","citrus","stonefruit"],
    caution:"Species identity determines virus risk: Myzus persicae is a far more efficient vector than most."
  },

  "t-coccoidea": {
    rank:"Superfamily", name:"Coccoidea — scale insects and mealybugs", sci:"Coccoidea",
    role:"Pest",
    diag:["Females sessile, often under a waxy or shelly cover", "No obvious legs or antennae in adult females", "Males (rare) are tiny winged insects", "Colonies produce honeydew (soft scales) or not (armoured scales)"],
    families:[
      { n:"Diaspididae", d:"Armoured scales — cover not attached to the body; no honeydew." },
      { n:"Coccidae", d:"Soft scales — cover is the body wall; copious honeydew." },
      { n:"Pseudococcidae", d:"Mealybugs — white wax, mobile, honeydew." }
    ],
    crops:["citrus","olive","grape","pome","stonefruit"],
    caution:"Crawl stage is the susceptible window; adult covers protect against contact insecticides."
  },

  "t-coleoptera": {
    rank:"Order", name:"Coleoptera — beetles", sci:"Coleoptera",
    role:"Pest, predator or pollinator",
    diag:["Forewings hardened into elytra", "Chewing mouthparts", "Complete metamorphosis; larvae often soil-dwelling", "Pronotum usually distinct from the elytra"],
    families:[
      { n:"Chrysomelidae", d:"Leaf beetles — Leptinotarsa decemlineata; flea beetles." },
      { n:"Curculionidae", d:"Weevils — Rhynchophorus ferrugineus; snout and elbowed antennae." },
      { n:"Coccinellidae", d:"Ladybirds — mostly predatory; larvae are alligator-like." },
      { n:"Carabidae", d:"Ground beetles — generalist predators, often dark and fast." },
      { n:"Scarabaeidae", d:"White grubs — root feeders; adults may damage flowers." },
      { n:"Bostrichidae", d:"Branch and grain borers — include stored-product pests." },
      { n:"Buprestidae", d:"Jewel beetles — flat-headed wood borers." }
    ],
    crops:["potato","tomato","datepalm","pome","stonefruit","cereals","stored"],
    caution:"Predatory families are easily mistaken for pests; check larval head orientation and feeding behaviour."
  },

  "t-col-larva": {
    rank:"Larval form", name:"Coleoptera larva — grub or wireworm", sci:"Coleoptera (larva)",
    role:"Root feeder, borer or predator",
    diag:["Hardened head capsule", "Three pairs of thoracic legs (rarely reduced)", "No abdominal prolegs", "Body form: campodeiform, scarabaeiform or elateriform"],
    families:[
      { n:"Scarabaeidae", d:"C-shaped white grubs, soil-dwelling, root feeders." },
      { n:"Elateridae", d:"Wireworms — hard, cylindrical, long-lived in soil." },
      { n:"Chrysomelidae", d:"Leaf-feeding larvae, often with dorsal glands." },
      { n:"Coccinellidae", d:"Alligator-like predatory larvae; often on aphid colonies." }
    ],
    crops:["potato","cereals","cucurbits","pome"],
    caution:"Soil larvae need rearing to adult for reliable family-level identification."
  },

  "t-dip-larva": {
    rank:"Larval form", name:"Diptera larva — maggot", sci:"Diptera (larva)",
    role:"Fruit borer, leafminer or parasitoid",
    diag:["Legless, headless or with reduced head skeleton", "Mouth hooks (cephalopharyngeal skeleton) visible under magnification", "Tapering anterior end; posterior spiracles diagnostic"],
    families:[
      { n:"Tephritidae", d:"Fruit maggots; posterior spiracle shape separates genera." },
      { n:"Agromyzidae", d:"Leafminer maggots inside serpentine mines." },
      { n:"Drosophilidae", d:"Small maggots in ripening or fermenting fruit." }
    ],
    crops:["citrus","olive","stonefruit","tomato"],
    caution:"Rear larvae to adults; posterior spiracles and adult wing pattern are decisive."
  },

  "t-orthoptera": {
    rank:"Order", name:"Orthoptera — grasshoppers, locusts, crickets", sci:"Orthoptera",
    role:"Pest (locusts), minor beneficial",
    diag:["Hind femora enlarged for jumping", "Saddle-like pronotum", "Wings held roof-like; tegmina leathery", "Chewing mouthparts; audible stridulation in many"],
    families:[
      { n:"Acrididae", d:"Grasshoppers and locusts — Schistocerca gregaria, Locusta migratoria." },
      { n:"Gryllotalpidae", d:"Mole crickets — burrowing forelegs, soil pests." },
      { n:"Tettigoniidae", d:"Bush-crickets — long antennae, mostly minor pests." }
    ],
    crops:["cereals","cucurbits","tomato","datepalm"],
    caution:"Locust phase change (solitary to gregarious) is a regional emergency, not a farm-level decision."
  },

  "t-hymenoptera": {
    rank:"Order", name:"Hymenoptera — ants, bees, wasps, parasitoids", sci:"Hymenoptera",
    role:"Pollinator, parasitoid, predator or pest",
    diag:["Two pairs of membranous wings, fore and hind linked by hamuli", "Constricted waist (petiole) in most", "Ovipositor often modified into a sting or drill", "Larvae legless grubs (sawfly larvae are caterpillar-like but have more prolegs)"],
    families:[
      { n:"Apidae", d:"Bees — pollinators; protect, never spray open flowers." },
      { n:"Ichneumonidae / Braconidae", d:"Parasitoid wasps — key natural enemies; long ovipositors common." },
      { n:"Trichogrammatidae", d:"Minute egg parasitoids, used in inundative releases." },
      { n:"Formicidae", d:"Ants — can farm aphids and protect scales." },
      { n:"Tenthredinidae", d:"Sawflies — larvae defoliate; distinguished by proleg count." }
    ],
    crops:["tomato","cucurbits","pome","stonefruit","cereals"],
    caution:"Broad-spectrum sprays during bloom are the single largest avoidable pollinator harm."
  },

  "t-neuroptera": {
    rank:"Order", name:"Neuroptera — lacewings and antlions", sci:"Neuroptera",
    role:"Beneficial predator",
    diag:["Densely net-veined wings held roof-like", "Long, many-segmented antennae", "Larvae predatory with sickle-shaped mandibles", "Eggs often stalked (Chrysopidae)"],
    families:[
      { n:"Chrysopidae", d:"Green lacewings — 'aphid lions'; valuable in protected crops." },
      { n:"Hemerobiidae", d:"Brown lacewings — smaller, also aphidophagous." },
      { n:"Myrmeleontidae", d:"Antlions — pit-building larvae." }
    ],
    crops:["tomato","cucurbits","citrus","olive","pome"],
    caution:"Conserve: avoid non-selective insecticides where lacewing larvae are active."
  },

  "t-other": {
    rank:"Order (provisional)", name:"Other small orders", sci:"—",
    role:"Variable",
    diag:["Character set does not match the main agricultural orders", "Photograph antennae, wing venation, tarsi and mouthparts", "Record host plant, behaviour and size"],
    families:[
      { n:"Psocoptera", d:"Booklice — stored-product and mould indicators." },
      { n:"Dermaptera", d:"Earwigs — occasional fruit damage, often scavengers." },
      { n:"Blattodea", d:"Cockroaches, termites — structural and stored-product pests." },
      { n:"Diptera: Syrphidae", d:"Hoverflies — aphidophagous larvae, important pollinators." }
    ],
    crops:["stored","tomato","cucurbits"],
    caution:"Do not force an identification. Submit specimens for expert morphological or molecular work."
  },

  "t-unresolved": {
    rank:"Unresolved", name:"Identification not resolved by this key", sci:"—",
    role:"Unknown",
    diag:["The character states are ambiguous or the specimen is damaged", "Immature stages frequently fail dichotomous keys"],
    families:[],
    crops:[],
    caution:"Collect 5–10 specimens in 70% ethanol, photograph live before preservation, and seek a specialist. " +
           "For quarantine-relevant taxa, contact the national plant protection organisation."
  }
};

/* ------------------------------------------------------------
   MODE-OF-ACTION GROUPS (IRAC / FRAC / HRAC)
   risk = selection pressure for resistance
   ------------------------------------------------------------ */

AGRO.moa = [
  { scheme:"IRAC", code:"1B",  name:"Organophosphates", risk:"high", examples:"chlorpyrifos, dimethoate, malathion", note:"Broad-spectrum; major natural-enemy and operator hazard." },
  { scheme:"IRAC", code:"3A",  name:"Pyrethroids", risk:"high", examples:"lambda-cyhalothrin, deltamethrin, cypermethrin", note:"Knock-down only; repeated use selects resistant populations fast." },
  { scheme:"IRAC", code:"4A",  name:"Neonicotinoids", risk:"high", examples:"imidacloprid, thiamethoxam, acetamiprid", note:"Systemic; whitefly and aphid resistance is widespread. Pollinator restrictions apply." },
  { scheme:"IRAC", code:"5",   name:"Spinosyns", risk:"medium", examples:"spinosad, spinetoram", note:"Good thrips and caterpillar activity; harmful to bees when wet." },
  { scheme:"IRAC", code:"6",   name:"Avermectins / milbemycins", risk:"high", examples:"abamectin, emamectin benzoate", note:"Translaminar; mite and leafminer resistance documented." },
  { scheme:"IRAC", code:"9B",  name:"Pyridine azomethines", risk:"medium", examples:"pymetrozine", note:"Selective against aphids and whiteflies; slow-acting, feeding stopper." },
  { scheme:"IRAC", code:"11",  name:"Bacillus thuringiensis", risk:"low", examples:"Bt kurstaki, Bt aizawai", note:"Larvae only, must be ingested; excellent selectivity for beneficials." },
  { scheme:"IRAC", code:"15",  name:"Benzoylureas", risk:"medium", examples:"teflubenzuron, diflubenzuron", note:"Chitin synthesis inhibitors; juvenile stages only, slow action." },
  { scheme:"IRAC", code:"16",  name:"Buprofezin", risk:"medium", examples:"buprofezin", note:"Moulting inhibitor for scales, whiteflies and mealybugs." },
  { scheme:"IRAC", code:"18",  name:"Diacylhydrazines", risk:"low", examples:"methoxyfenozide, tebufenozide", note:"Lepidoptera-specific ecdysone agonists; IPM-compatible." },
  { scheme:"IRAC", code:"22",  name:"Oxadiazines / semicarbazones", risk:"high", examples:"indoxacarb, metaflumizone", note:"Larval feeding cessation; widely used against Tuta and Spodoptera." },
  { scheme:"IRAC", code:"23",  name:"Tetronic / tetramic acids", risk:"medium", examples:"spirotetramat, spirodiclofen", note:"Lipid biosynthesis inhibitors; sucking pests, translaminar." },
  { scheme:"IRAC", code:"28",  name:"Diamides", risk:"high", examples:"chlorantraniliprole, cyantraniliprole, flubendiamide", note:"Ryanodine receptor modulators; backbone against borers — rotate strictly." },
  { scheme:"IRAC", code:"29",  name:"Flonicamid", risk:"low", examples:"flonicamid", note:"Selective aphid/whitefly feeding blocker; slow but IPM-friendly." },

  { scheme:"FRAC", code:"3",   name:"DMI triazoles", risk:"medium", examples:"tebuconazole, difenoconazole, propiconazole", note:"Ergosterol biosynthesis; resistance in powdery mildews is common." },
  { scheme:"FRAC", code:"4",   name:"Phenylamides", risk:"high", examples:"mefenoxam, metalaxyl", note:"Oomycetes only; resistance risk high — always mix or alternate." },
  { scheme:"FRAC", code:"7",   name:"SDHI", risk:"medium", examples:"boscalid, fluopyram, penthiopyrad", note:"Respiration complex II; strong partner in mixtures." },
  { scheme:"FRAC", code:"11",  name:"QoI strobilurins", risk:"high", examples:"azoxystrobin, pyraclostrobin, trifloxystrobin", note:"Respiration complex III; G143A mutation confers resistance in many pathogens." },
  { scheme:"FRAC", code:"21",  name:"QiI", risk:"medium", examples:"cyazofamid", note:"Oomycete-specific; partner for late blight and downy mildew." },
  { scheme:"FRAC", code:"22",  name:"Benzamides", risk:"medium", examples:"zoxamide", note:"Microtubule inhibition; late blight partner." },
  { scheme:"FRAC", code:"40",  name:"Carboxylic acid amides", risk:"medium", examples:"dimethomorph, mandipropamid", note:"Cellulose synthase; downy mildew and late blight." },
  { scheme:"FRAC", code:"43",  name:"Fluopicolide", risk:"medium", examples:"fluopicolide", note:"Delocalisation of spectrin-like proteins; oomycetes." },
  { scheme:"FRAC", code:"49",  name:"Oxathiapiprolin", risk:"medium", examples:"oxathiapiprolin", note:"OSBPI; very effective on oomycetes, single-site — mix." },
  { scheme:"FRAC", code:"M03", name:"Dithiocarbamates", risk:"low", examples:"mancozeb, metiram", note:"Multi-site protectant; backbone of anti-resistance programmes." },
  { scheme:"FRAC", code:"M01", name:"Copper compounds", risk:"low", examples:"copper hydroxide, Bordeaux mixture", note:"Multi-site; organic viticulture mainstay. Watch phytotoxicity and soil copper load." },

  { scheme:"HRAC", code:"1",   name:"ACCase inhibitors", risk:"high", examples:"diclotop, quizalofop, clethodim", note:"Grass weeds only; resistance in Lolium and Phalaris is widespread." },
  { scheme:"HRAC", code:"2",   name:"ALS inhibitors", risk:"high", examples:"tribenuron, imazamox, nicosulfuron", note:"Very high resistance risk; use only in planned sequences." },
  { scheme:"HRAC", code:"4",   name:"Synthetic auxins", risk:"medium", examples:"2,4-D, MCPA, dicamba", note:"Broadleaf control; volatility and drift injury to sensitive crops." },
  { scheme:"HRAC", code:"9",   name:"EPSP synthase inhibitors", risk:"medium", examples:"glyphosate", note:"Non-selective; resistance confirmed in several species." },
  { scheme:"HRAC", code:"15",  name:"VLCFA inhibitors", risk:"medium", examples:"pendimethalin, metolachlor", note:"Pre-emergence grass and small-seed broadleaf control." }
];

/* ------------------------------------------------------------
   DEGREE-DAY PRESETS
   base = lower development threshold (°C), indicative only
   ------------------------------------------------------------ */

AGRO.gddPresets = [
  { id:"tuta",      name:"Tuta absoluta",            base:8,   note:"Egg-to-adult development commonly modelled near 8 °C; calibrate to local data." },
  { id:"codling",   name:"Cydia pomonella",          base:10,  note:"Classic 10 °C base; biofix at first sustained moth catch." },
  { id:"olivefly",  name:"Bactrocera oleae",         base:10,  note:"10 °C base widely used; trap catches refine the biofix." },
  { id:"medfly",    name:"Ceratitis capitata",       base:12.5,note:"Higher base than olive fly; coastal populations develop earlier." },
  { id:"grape",     name:"Lobesia botrana",          base:10,  note:"Three generations; degree-days separate the flights." },
  { id:"helicoverpa", name:"Helicoverpa armigera",   base:11,  note:"Base near 11 °C; monitor with pheromone traps." },
  { id:"cpb",       name:"Leptinotarsa decemlineata",base:10,  note:"10 °C base; emergence linked to soil temperature." },
  { id:"armyworm",  name:"Spodoptera littoralis",    base:12,  note:"Indicative; multiple overlapping generations in warm coastal areas." },
  { id:"btabaci",   name:"Bemisia tabaci",           base:10.5,note:"Population growth strongly temperature-driven; virus risk precedes visible counts." },
  { id:"rpw",       name:"Rhynchophorus ferrugineus",base:15,  note:"Warm-climate species; flight and oviposition above roughly 15 °C." },
  { id:"custom",    name:"Custom / other",           base:10,  note:"Set the base temperature from a validated local model." }
];

AGRO.thresholdUnits = ["larvae / plant","adults / trap / day","adults / leaflet","% infested leaves","% infested fruit","mines / leaf","nymphs / shoot","insects / kg","% damaged grains","scale / 4 cm twig"];

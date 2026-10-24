/* ============================================================
   AgroScope — pest library, part 1
   Field, vegetable and protected-crop arthropods
   ============================================================ */

window.AGRO = window.AGRO || {};
AGRO.pests = AGRO.pests || [];

AGRO.pests.push(

{
  id:"tuta-absoluta", kind:"insect",
  name:"Tomato leafminer (tomato pinworm)", sci:"Tuta absoluta", fr:"Mineuse de la tomate",
  order:"Lepidoptera", family:"Gelechiidae",
  crops:["tomato","potato"],
  organs:["leaf","fruit","stem","shoot","whole"],
  symptoms:["blotch-mines","entry-holes","chewing-holes","dieback","defoliation"],
  stage:"Larva (four instars); adults are nocturnal moths",
  tagline:"The reference pest of protected tomato in the Mediterranean basin.",
  bio:"Adults are small grey-brown moths, about 6–7 mm long, active at dusk and dawn. Females lay 40–80 eggs singly on leaves, stems or calyx. Larvae mine the mesophyll, producing irregular blotch mines with frass, then often enter the fruit through the calyx. Four instars; pupation usually in soil or on the leaf surface. Generations overlap continuously under cover, with 8–12 generations per year in warm greenhouses.",
  damage:"Mines reduce photosynthetic area; fruit attack causes direct market loss and secondary rot. Even low densities cause economic damage in fruit destined for sale. Young plants can be killed when the growing point is destroyed.",
  favours:"Continuous tomato cropping, overlapping plantings, warm protected environments, uncontrolled volunteer plants and cull piles, absence of pheromone monitoring.",
  monitoring:"Delta or water traps with species-specific pheromone, checked twice weekly. Record adults per trap per day, plus a weekly leaf and fruit inspection of 20 plants per block. Scout the upper third of the canopy and the calyx end of fruit.",
  threshold:"Commonly cited action level: 3–5 adults per trap per day, or 1–2 active mines per leaflet. Protected crops often act earlier. Treat these as starting points and calibrate against local experience and market tolerance.",
  severity:5,
  dz:"Widespread and damaging in Biskra, El Oued, Mostaganem and Mitidja protected tomato; year-round cycle.",
  ipm:{
    cultural:["Synchronise planting dates within a zone to create a pest-free window.","Remove and destroy infested leaves and fruit in sealed bags; never leave cull piles near tunnels.","Rotate away from solanaceous crops for at least one cycle.","Use insect-proof nets (≥ 50 mesh) on openings and double doors.","Destroy volunteer tomato and potato plants between cycles."],
    biological:["Nesidiocoris tenuis as a preventive predator in protected tomato, released before infestation.","Trichogramma achaeae egg releases where available and compatible with the programme.","Conserve native mirids and spiders; avoid pyrethroid sprays that eliminate them.","Bacillus thuringiensis kurstaki for young larvae on foliage."],
    mechanical:["Mass trapping with pheromone traps at 20–40 per hectare.","Pheromone mating disruption in greenhouse blocks with sealed structures.","Coloured sticky traps for adult monitoring, not control.","Soil solarisation between cycles to reduce pupae."],
    biotech:["Pheromone-based monitoring is the backbone of the whole programme; without it, spray timing is guesswork."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Ryanodine receptor modulator; strong larvicidal activity, but the highest resistance-risk group in this crop." },
    { ai:"indoxacarb", moa:"22", note:"Feeding cessation; effective on larvae, weaker on eggs." },
    { ai:"emamectin benzoate", moa:"6", note:"Translaminar, reaches miners; harmful to beneficials." },
    { ai:"methoxyfenozide", moa:"18", note:"Lepidoptera-specific, IPM-compatible; best timed at egg hatch." },
    { ai:"Bacillus thuringiensis kurstaki", moa:"11", note:"Ingestion required; only young larvae, and only on exposed foliage." },
    { ai:"spinetoram", moa:"5", note:"Good activity, but hazardous to pollinators while wet." }
  ],
  resistance:"Resistance to diamides, avermectins and oxadiazines is documented in Mediterranean populations. Never apply the same MoA group twice in succession; limit each group to one generation per cycle.",
  lookalikes:[
    { n:"Phthorimaea operculella", d:"Potato tuber moth — mines are narrower, more often in potato; genitalia needed for certainty." },
    { n:"Liriomyza spp.", d:"Serpentine, not blotch, mines; maggot without legs or head capsule." },
    { n:"Helicoverpa armigera", d:"Chews holes and feeds openly; larva much larger with prolegs and body stripes." }
  ],
  role:"Pest"
},

{
  id:"bemisia-tabaci", kind:"insect",
  name:"Sweet potato whitefly", sci:"Bemisia tabaci", fr:"Aleurode du tabac",
  order:"Hemiptera", family:"Aleyrodidae",
  crops:["tomato","pepper","cucurbits","potato","fababean"],
  organs:["leaf","whole"],
  symptoms:["chlorosis","honeydew","sooty-mould","mosaic","stunting"],
  stage:"All stages; adults and 3rd–4th instar nymphs are the key targets",
  tagline:"A virus vector first and a sap feeder second — the vector risk sets the threshold.",
  bio:"Adults are 1 mm, wax-dusted, and rise in clouds when the plant is disturbed. Eggs are inserted on the leaf underside; nymphs settle and become scale-like. Development takes roughly 18–30 days depending on temperature. Populations build on the lower leaf surface and move upward. Bemisia tabaci is a complex of cryptic species (MED and MEAM1 are the main agricultural ones), which differ in insecticide response and virus transmission efficiency.",
  damage:"Direct damage from phloem feeding is modest; honeydew and sooty mould reduce quality. The real cost is virus transmission — TYLCV in tomato, cucurbit viruses, and begomoviruses in many crops. A single infective adult can transmit TYLCV within hours of landing.",
  favours:"Continuous cropping, warm dry weather, broad host range including weeds and ornamentals, repeated neonicotinoid use.",
  monitoring:"Yellow sticky traps (10–20 per hectare) checked weekly, plus direct counts of adults and nymphs on the underside of the 5th–6th leaf from the top. For virus-sensitive crops, monitor from transplanting, not from first symptoms.",
  threshold:"Virus-vectored crops: act on the first sustained catches, not on a damage threshold. Non-vector situations: roughly 5–10 adults per leaf. Thresholds are crop- and virus-dependent.",
  severity:5,
  dz:"Endemic in all protected and open-field production zones; TYLCV incidence in tomato is high wherever the vector is uncontrolled.",
  ipm:{
    cultural:["Use TYLCV-resistant or tolerant tomato varieties as the primary control measure.","Insect-proof nets on nurseries and openings; double-door entry.","Remove weeds and old crops that bridge the cycle.","Avoid sequential plantings of the same host in one structure."],
    biological:["Encarsia formosa or Eretmocerus mundus for nymph control in protected crops.","Predatory mirids (Macrolophus, Nesidiocoris) contribute in tomato.","Beauveria bassiana and Isaria fumosorosea under humid conditions.","Conserve parasitoids by avoiding pyrethroids and neonicotinoids."],
    mechanical:["Yellow sticky mass trapping plus UV-absorbing films reduce immigration.","Remove and destroy crop residues immediately after the final harvest."],
    biotech:["Virus-resistant varieties plus vector monitoring is the only durable strategy; chemical control alone fails."]
  },
  chem:[
    { ai:"spirotetramat", moa:"23", note:"Translaminar, active on nymphs; weak on adults. Compatible with many beneficials." },
    { ai:"pyriproxyfen", moa:"7C", note:"Juvenile hormone mimic; suppressant rather than knockdown — plan ahead." },
    { ai:"flonicamid", moa:"29", note:"Selective feeding blocker, low impact on natural enemies." },
    { ai:"cyantraniliprole", moa:"28", note:"Effective on adults as well as nymphs; reserve for resistance management." },
    { ai:"acetamiprid", moa:"4A", note:"Resistance is widespread; use only in strict rotation and never as the sole pillar." }
  ],
  resistance:"Neonicotinoid and pyrethroid resistance is common in Mediterranean MED populations. Rotate among 4A, 23, 28 and 29, and never exceed one application of a group per generation.",
  lookalikes:[
    { n:"Trialeurodes vaporariorum", d:"Greenhouse whitefly — adults slightly larger, wings held flatter, nymphs with a fringe of wax; different virus profile." },
    { n:"Aleyrodes proletella", d:"Cabbage whitefly — brassica host, darker wing markings." },
    { n:"Aphids", d:"Aphids are pear-shaped with cornicles and are far more mobile; whiteflies are flattened and wax-dusted." }
  ],
  role:"Pest and virus vector"
},

{
  id:"myzus-persicae", kind:"insect",
  name:"Green peach aphid", sci:"Myzus persicae", fr:"Puceron vert du pêcher",
  order:"Hemiptera", family:"Aphididae",
  crops:["tomato","pepper","potato","stonefruit","cucurbits","fababean"],
  organs:["leaf","shoot","flower"],
  symptoms:["distortion","chlorosis","honeydew","sooty-mould","mosaic"],
  stage:"Nymphs and adults; winged morphs drive spread",
  tagline:"The most efficient aphid vector in Mediterranean agriculture.",
  bio:"Highly polyphagous, with host alternation between Prunus (winter) and herbaceous crops (summer) in many regions, though anholocyclic populations persist year-round in mild climates. Reproduction is largely parthenogenetic and viviparous; a generation can take 10–14 days. Winged morphs form under crowding and declining host quality, and are the main virus-spreading stage.",
  damage:"Direct feeding causes leaf curl and stunting. Indirect damage dominates: transmission of over 100 viruses including PVY, CMV, and PLRV in a non-persistent or persistent manner.",
  favours:"Mild winters, high nitrogen inputs, sheltered crops, absence of natural enemies, broad-spectrum sprays that trigger rebound.",
  monitoring:"Yellow water traps and direct counts on young leaves. Note the presence of winged morphs and of parasitoid mummies; mummy rates above 10–20% argue for waiting.",
  threshold:"Direct damage: around 10–20 aphids per young leaf or 10% infested shoots, treatment rarely justified. Virus-sensitive seed or crop situations: act much earlier. Always weigh vector risk above the direct threshold.",
  severity:4,
  dz:"Cosmopolitan; a persistent problem on potato, stone fruit and protected solanaceae.",
  ipm:{
    cultural:["Avoid excessive nitrogen, which fuels population growth.","Remove alternate hosts and crop residues.","Use reflective mulches to reduce landing by winged aphids.","Rogue virus-infected plants early."],
    biological:["Aphidius colemani and A. matricariae in protected crops.","Chrysoperla carnea larvae, hoverfly larvae, ladybirds.","Entomopathogenic fungi (Beauveria bassiana) in humid conditions.","Encourage banker plants and flowering strips."],
    mechanical:["Yellow sticky traps for monitoring; avoid relying on them for control.","High-pressure water washing reduces colonies on sturdy crops."],
    biotech:["Virus-resistant varieties where available; aphid monitoring is the basis for all timing."]
  },
  chem:[
    { ai:"flonicamid", moa:"29", note:"Selective, slow-acting, sparing of parasitoids." },
    { ai:"pymetrozine", moa:"9B", note:"Feeding inhibitor; effective but resistance reported in some populations." },
    { ai:"spirotetramat", moa:"23", note:"Systemic, active on nymphs." },
    { ai:"pirimicarb", moa:"1A", note:"Aphid-selective carbamate; still useful where beneficials must be protected." },
    { ai:"lambda-cyhalothrin", moa:"3A", note:"Avoid: resistance and natural-enemy destruction usually worsen the problem." }
  ],
  resistance:"MACE (modified acetylcholinesterase) and kdr mutations make carbamates and pyrethroids unreliable in many populations. Rotate MoA groups and preserve beneficials.",
  lookalikes:[
    { n:"Aphis gossypii", d:"Melon aphid — shorter cornicles, darker, often on cucurbits; paler legs." },
    { n:"Macrosiphum euphorbiae", d:"Potato aphid — larger, longer legs and cornicles, often pink." },
    { n:"Aulacorthum solani", d:"Glasshouse-potato aphid — swollen, pale green with dark-tipped cornicles." }
  ],
  role:"Pest and virus vector"
},

{
  id:"aphis-gossypii", kind:"insect",
  name:"Cotton / melon aphid", sci:"Aphis gossypii", fr:"Puceron du melon",
  order:"Hemiptera", family:"Aphididae",
  crops:["cucurbits","pepper","tomato","citrus"],
  organs:["leaf","shoot","flower"],
  symptoms:["distortion","honeydew","sooty-mould","chlorosis","flower-drop"],
  stage:"Nymphs and adults, colonial",
  tagline:"Colonial, highly fecund, and a reliable virus vector in cucurbits.",
  bio:"Very polyphagous and genetically variable, with host-specialised lineages. Colonies develop on growing tips and the underside of young leaves; cornicles are short and dark. In warm conditions a generation takes 7–10 days, and populations can double in three days.",
  damage:"Leaf cupping and stunting, flower and fruitlet drop in cucurbits, honeydew contamination, and transmission of CMV and other non-persistent viruses.",
  favours:"Warm dry weather, high nitrogen, sheltered tunnel crops, ant attendance.",
  monitoring:"Weekly counts on 20 growing tips per block; check for ant activity, which protects colonies from predators.",
  threshold:"About 20% of growing tips infested before flowering; lower in virus-sensitive cucurbit crops. Do not treat on sight of a few aphids.",
  severity:3,
  dz:"Common in cucurbit and pepper crops in all regions.",
  ipm:{
    cultural:["Balanced nitrogen; avoid lush growth.","Remove crop debris and weed hosts.","Reflective mulch reduces colonisation."],
    biological:["Aphidius colemani, Lysiphlebus testaceipes, Chrysoperla, syrphids, coccinellids.","Ant control improves biological control substantially."],
    mechanical:["Targeted water jets on sturdy crops."],
    biotech:["Banker plants with cereal aphids sustain parasitoids in tunnels."]
  },
  chem:[
    { ai:"flonicamid", moa:"29", note:"Selective and IPM-compatible." },
    { ai:"pymetrozine", moa:"9B", note:"Feeding blocker." },
    { ai:"spirotetramat", moa:"23", note:"Nymphal systemic." },
    { ai:"acetamiprid", moa:"4A", note:"Resistance risk high; rotate strictly." }
  ],
  resistance:"Multiple resistance to carbamates, pyrethroids and neonicotinoids is documented. Preserve parasitoids rather than escalating chemistry.",
  lookalikes:[
    { n:"Myzus persicae", d:"Longer cornicles, more uniform green, different host preference." },
    { n:"Aphis craccivora", d:"Cowpea aphid — black, shiny, on legumes." }
  ],
  role:"Pest and virus vector"
},

{
  id:"helicoverpa-armigera", kind:"insect",
  name:"Cotton bollworm / Old World bollworm", sci:"Helicoverpa armigera", fr:"Noctuelle de la tomate",
  order:"Lepidoptera", family:"Noctuidae",
  crops:["tomato","pepper","cucurbits","cereals","fababean"],
  organs:["fruit","flower","leaf","shoot"],
  symptoms:["entry-holes","chewing-holes","flower-blight","premature-drop","defoliation"],
  stage:"Larvae (six instars); early instars (L1–L3) are the target window",
  tagline:"A polyphagous, highly mobile borer where timing decides everything.",
  bio:"Adults are strong fliers with a 35–45 mm wingspan; females lay several hundred eggs singly on flowers, buds and young leaves. Young larvae feed on foliage and flowers; older larvae bore into fruit and are much harder to kill. Development from egg to adult takes 30–45 days in warm weather, with 3–5 overlapping generations in the Mediterranean.",
  damage:"Fruit and pod boring, flower loss, and secondary rot at entry holes. A single larva can damage several fruit.",
  favours:"Warm humid conditions, flowering hosts, maize and legume rotations that provide successive hosts, late planting.",
  monitoring:"Pheromone traps (1–2 per hectare) for flight phenology, plus twice-weekly egg and small-larva counts on flowers and terminals. Scout at dawn or dusk when larvae are active.",
  threshold:"Commonly used: 1–2 small larvae per 10 plants on fruiting tomato or pepper, or 5–10% infested fruit. Calibrate locally; large larvae are largely untreatable.",
  severity:4,
  dz:"Widespread; damaging in tomato, pepper, chickpea and maize in the north and centre.",
  ipm:{
    cultural:["Early and synchronised planting to escape peak flights.","Trap crops (maize, sunflower) and destruction of crop residues.","Deep ploughing after harvest to bury pupae.","Avoid continuous solanaceous cropping."],
    biological:["Trichogramma egg releases.","NPV (nucleopolyhedrovirus) of Helicoverpa, highly selective for young larvae.","Habrobracon hebetor against larvae in storage and field.","Conserve predatory bugs and spiders."],
    mechanical:["Hand-picking in small plots; shaking larvae onto sheets.","Pheromone mass trapping."],
    biotech:["Bt cotton where legally approved; verify national authorisation before considering it."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Effective on young larvae; rotate strictly." },
    { ai:"methoxyfenozide", moa:"18", note:"Selective, best at egg hatch." },
    { ai:"indoxacarb", moa:"22", note:"Good on L1–L3." },
    { ai:"emamectin benzoate", moa:"6", note:"Effective but harsh on beneficials." },
    { ai:"Bacillus thuringiensis", moa:"11", note:"Only young larvae, and only where ingestion is assured." }
  ],
  resistance:"Resistance to pyrethroids is widespread; diamide and Bt resistance are emerging globally. Rotate MoA and use viruses where possible.",
  lookalikes:[
    { n:"Helicoverpa zea", d:"Very similar; genitalia or DNA needed. Largely allopatric in the Mediterranean." },
    { n:"Spodoptera littoralis", d:"Larger, darker, with lateral spots and a different feeding pattern; often more gregarious when young." },
    { n:"Chrysodeixis chalcites", d:"Looping larva, only three pairs of abdominal prolegs." }
  ],
  role:"Pest"
},

{
  id:"spodoptera-littoralis", kind:"insect",
  name:"Mediterranean brocade", sci:"Spodoptera littoralis", fr:"Noctuelle méditerranéenne",
  order:"Lepidoptera", family:"Noctuidae",
  crops:["tomato","pepper","cucurbits","fababean","cereals"],
  organs:["leaf","fruit","shoot"],
  symptoms:["chewing-holes","defoliation","entry-holes","premature-drop"],
  stage:"Larvae, especially L1–L2 before dispersal",
  tagline:"A polyphagous defoliator whose young larvae are far easier to control than the mature ones.",
  bio:"Adults are nocturnal with a 35–40 mm wingspan. Eggs are laid in batches covered with scales, giving a felt-like appearance. Young larvae feed gregariously, then disperse and become solitary and highly destructive. Overwinters as pupae in soil; multiple generations from spring to autumn.",
  damage:"Rapid defoliation, and direct damage to fruit and pods. Young plants can be stripped in days.",
  favours:"Warm autumns, mild winters, irrigated crops, dense canopies.",
  monitoring:"Pheromone traps plus inspection of egg batches (scale-covered clusters) and gregarious young larvae. Check the underside of lower leaves and the soil surface under plants.",
  threshold:"About 1 egg batch or 5 young larvae per 10 plants; higher tolerance on vigorous mature crops. Treat before larvae disperse.",
  severity:4,
  dz:"Common in the north and coastal areas; heavier in warm autumn cycles.",
  ipm:{
    cultural:["Deep autumn ploughing to expose pupae.","Remove weeds that serve as early hosts.","Avoid late plantings adjacent to infested crops."],
    biological:["Spodoptera NPV and Bt for young larvae.","Trichogramma releases.","Predatory bugs and birds; conserve with selective chemistry."],
    mechanical:["Collect and crush egg batches during routine scouting.","Light traps for monitoring."],
    biotech:["Pheromone trapping for flight timing."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Strong on young larvae." },
    { ai:"methoxyfenozide", moa:"18", note:"Selective and IPM-compatible." },
    { ai:"indoxacarb", moa:"22", note:"Good residual on foliage." },
    { ai:"Bacillus thuringiensis aizawai", moa:"11", note:"Young larvae only." }
  ],
  resistance:"Pyrethroid and organophosphate resistance is common in Mediterranean populations; diamide exposure should be limited to one generation.",
  lookalikes:[
    { n:"Spodoptera exigua", d:"Smaller, more slender, paler; usually less destructive on tomato." },
    { n:"Helicoverpa armigera", d:"Body colour and setal pattern differ; Helicoverpa tends to bore into fruit rather than defoliate." },
    { n:"Autographa gamma", d:"Looper with only three pairs of abdominal prolegs." }
  ],
  role:"Pest"
},

{
  id:"agrotis-segetum", kind:"insect",
  name:"Turnip moth / cutworm", sci:"Agrotis segetum", fr:"Noctuelle des moissons",
  order:"Lepidoptera", family:"Noctuidae",
  crops:["potato","tomato","cucurbits","cereals","fababean"],
  organs:["collar","root","stem"],
  symptoms:["girdling","lodging","collapse","root-rot"],
  stage:"Soil-dwelling larvae (cutworms)",
  tagline:"Damage appears as missing plants — the pest is already underground.",
  bio:"Adults fly at night in spring and early summer. Females lay eggs on the soil surface or on low weeds. Larvae live in the topsoil, curling into a C shape when disturbed, and cut stems at or just below the soil line. One generation per year in cool areas, two in warm ones.",
  damage:"Seedling loss and missing plants; cut stems; tubers and roots hollowed out. Damage is often mistaken for damping-off or poor germination.",
  favours:"Dry warm springs, light soils, preceding weeds or pasture, minimum tillage with surface residue.",
  monitoring:"Pheromone traps for flight, plus soil examination around missing plants. Inspect at dusk with a torch; larvae are nocturnal.",
  threshold:"About 2–5 larvae per square metre in the top 5 cm of soil before planting, or 2–5% plants cut in established crops.",
  severity:3,
  dz:"Present nationwide; locally important in potato and vegetable establishment.",
  ipm:{
    cultural:["Autumn or pre-planting tillage exposes larvae and pupae to birds.","Weed control before planting removes egg-laying sites.","Avoid planting into recently grassed or pasture land without monitoring."],
    biological:["Entomopathogenic nematodes (Steinernema, Heterorhabditis) applied to moist soil.","Beauveria bassiana soil treatments.","Conserve carabid beetles, which prey on larvae and pupae."],
    mechanical:["Hand collection around missing plants at dusk.","Collars around transplants."],
    biotech:["Pheromone traps for timing; soil temperature models for larval activity."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Soil or foliar; best applied before larval penetration." },
    { ai:"lambda-cyhalothrin", moa:"3A", note:"Contact on soil surface, limited residual; harmful to soil fauna." },
    { ai:"Bacillus thuringiensis aizawai", moa:"11", note:"Ingestion required; unreliable in soil." }
  ],
  resistance:"Resistance is not the main issue; poor placement and timing are. Treat soil pests by targeting the smallest larvae.",
  lookalikes:[
    { n:"Agrotis ipsilon", d:"Black cutworm — darker, more gregarious early, similar damage." },
    { n:"White grubs (Scarabaeidae)", d:"C-shaped with three leg pairs, feed on roots rather than cutting stems." },
    { n:"Wireworms (Elateridae)", d:"Hard, cylindrical, yellow-brown; tunnel into tubers instead of cutting stems." }
  ],
  role:"Pest"
},

{
  id:"leptinotarsa-decemlineata", kind:"insect",
  name:"Colorado potato beetle", sci:"Leptinotarsa decemlineata", fr:"Doryphore de la pomme de terre",
  order:"Coleoptera", family:"Chrysomelidae",
  crops:["potato","tomato"],
  organs:["leaf","shoot"],
  symptoms:["defoliation","chewing-holes"],
  stage:"Larvae (all instars) and adults",
  tagline:"Fast, conspicuous defoliation — and a textbook case of insecticide resistance.",
  bio:"Adults overwinter 20–40 cm deep in soil and emerge in spring. Females lay orange-yellow egg clusters of 20–40 on leaf undersides. Larvae are reddish with black spots and pass through four instars in 2–3 weeks. Two to three generations per year in warm regions.",
  damage:"Both larvae and adults strip foliage. Complete defoliation within days is possible; yield loss is severe if the canopy is destroyed before tuber bulking.",
  favours:"Warm springs, light soils, continuous potato cropping, mild winters.",
  monitoring:"Weekly counts of egg clusters, larvae and adults on 20 plants per field in a W pattern. Act on young larvae, not adults.",
  threshold:"About 20–30 larvae per plant before flowering, or 10% defoliation; lower thresholds after flowering.",
  severity:4,
  dz:"Present in northern and central potato areas; absent or rare in the far south.",
  ipm:{
    cultural:["Rotate away from potato and tomato for 2–3 years.","Deep autumn ploughing reduces overwintering adults.","Early planting can escape the first generation.","Trap crops at field edges, destroyed before adults move in."],
    biological:["Bacillus thuringiensis tenebrionis for young larvae.","Beauveria bassiana soil applications.","Conserve predatory stink bugs and carabids."],
    mechanical:["Hand collection of adults and egg clusters in small plots.","Row covers at crop emergence."],
    biotech:["Pheromone monitoring is weak for this species — visual scouting is the basis."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Effective; resistance now reported in some regions." },
    { ai:"spinetoram", moa:"5", note:"Good knockdown of larvae." },
    { ai:"abamectin", moa:"6", note:"Effective but harmful to beneficials." },
    { ai:"Bacillus thuringiensis tenebrionis", moa:"11", note:"Selective; only young larvae." }
  ],
  resistance:"One of the most resistance-prone pests in agriculture: resistance to organophosphates, carbamates, pyrethroids, neonicotinoids and diamides is documented regionally. Rotate and never re-treat the same generation with the same group.",
  lookalikes:[
    { n:"Leptinotarsa juncta", d:"False potato beetle — paler stripes, rare on potato; minor pest." },
    { n:"Coccinellids", d:"Ladybird adults are smaller and domed; larvae are alligator-like, not hump-backed." }
  ],
  role:"Pest"
},

{
  id:"phthorimaea-operculella", kind:"insect",
  name:"Potato tuber moth", sci:"Phthorimaea operculella", fr:"Teigne de la pomme de terre",
  order:"Lepidoptera", family:"Gelechiidae",
  crops:["potato","tomato"],
  organs:["leaf","stem","storage","fruit"],
  symptoms:["blotch-mines","serpentine-mines","store-insects","dieback"],
  stage:"Larvae in foliage and tubers",
  tagline:"A field pest that becomes a storage disaster.",
  bio:"Adults are small grey-brown moths that hide in the canopy during the day. Eggs are laid on leaves, stems, and on exposed tubers at harvest. Larvae mine leaves and stems, and tunnel into tubers in store. Development is fast above 20 °C; generations overlap in warm climates.",
  damage:"Foliar mines reduce vigour; tuber galleries cause total loss of market value and open the way for rot. Damage often goes unnoticed until tubers are cut.",
  favours:"Warm dry conditions, exposed tubers at harvest, poorly ventilated stores, cracked soil, successive potato crops.",
  monitoring:"Pheromone traps in field and store; inspect tubers at harvest and monthly in store. Check 'windows' of transparent tape on store walls for adults.",
  threshold:"Field: about 10% mined leaves or 5–10 moths per trap per week. Store: any live infestation requires immediate action.",
  severity:4,
  dz:"Important in warm potato areas (El Oued, Biskra) and in farm stores nationwide.",
  ipm:{
    cultural:["Plant healthy, certified tubers.","Hill soil well to prevent tuber exposure.","Harvest promptly at maturity; avoid leaving tubers in the field overnight.","Store only sound, cured tubers in cool, dark, ventilated conditions.","Never store field-run tubers with seed tubers."],
    biological:["Granulosis virus of P. operculella in stores where available.","Trichogramma releases in field.","Bacillus thuringiensis on foliage."],
    mechanical:["Cure tubers before storage; remove and destroy infested ones.","Sand or straw layers reduce larval movement between tubers.","Pheromone mass trapping in stores."],
    biotech:["Store temperature below 10 °C strongly suppresses development."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Foliar, against young larvae." },
    { ai:"Bacillus thuringiensis kurstaki", moa:"11", note:"Foliar, selective." },
    { ai:"spinosad", moa:"5", note:"Store and field use is label-specific; verify registration for stored potatoes." }
  ],
  resistance:"Resistance is less documented than in Tuta; the priority is preventing storage infestation through hygiene and temperature.",
  lookalikes:[
    { n:"Tuta absoluta", d:"Larger blotch mines, strong tomato preference; genitalia needed to separate worn specimens." },
    { n:"Liriomyza spp.", d:"True serpentine mines with a visible frass trail; legless maggot." }
  ],
  role:"Pest"
},

{
  id:"frankliniella-occidentalis", kind:"insect",
  name:"Western flower thrips", sci:"Frankliniella occidentalis", fr:"Thrips de Californie",
  order:"Thysanoptera", family:"Thripidae",
  crops:["pepper","tomato","cucurbits","stonefruit","onion"],
  organs:["flower","leaf","fruit"],
  symptoms:["silvery-scar","distortion","fruit-mosaic","flower-blight","stippling"],
  stage:"Larvae and adults, mainly in flowers and growing tips",
  tagline:"A flower-dwelling thrips and the main vector of TSWV.",
  bio:"Adults are 1–1.5 mm, yellow to brown, with fringed wings. Eggs are inserted into plant tissue; two larval instars feed, then pupate in soil or leaf litter. Development takes 12–20 days at 25 °C. Both adults and larvae feed on pollen and plant cells and can acquire and transmit TSWV.",
  damage:"Silvery scarring on leaves and fruit, distortion of growing tips, flower abortion, and cosmetic damage to fruit. TSWV transmission causes necrotic ringspots and plant death in susceptible crops.",
  favours:"Warm dry weather, flower-rich surroundings, continuous flowering crops, broad-spectrum sprays that remove predators.",
  monitoring:"Blue or yellow sticky traps plus flower tapping over white paper. Count larvae as well as adults. Test suspicious plants for TSWV.",
  threshold:"About 1–2 thrips per flower in pepper and tomato; zero tolerance in crops where TSWV is present. Act on larvae before they pupate.",
  severity:4,
  dz:"Widespread under cover, particularly pepper in Biskra and El Oued.",
  ipm:{
    cultural:["Use TSWV-resistant pepper varieties with the Tsw gene where available.","Remove weeds and old flowers that harbour populations.","Avoid planting next to infected crops.","Screen openings with fine mesh."],
    biological:["Neoseiulus cucumeris or Amblyseius swirskii in protected crops.","Orius laevigatus — a strong thrips predator in flowers.","Steinernema feltiae against soil-pupating stages.","Beauveria bassiana under humid conditions."],
    mechanical:["Blue sticky mass trapping plus UV-reflective mulch.","Remove and destroy severely affected flowers."],
    biotech:["Virus testing is essential: vector control cannot rescue an infected crop."]
  },
  chem:[
    { ai:"spinosad", moa:"5", note:"Effective; harmful to Orius and bees while wet." },
    { ai:"spinetoram", moa:"5", note:"Same group — do not rotate within it." },
    { ai:"methiocarb", moa:"1A", note:"Label-restricted; pollinator hazard." },
    { ai:"cyantraniliprole", moa:"28", note:"Useful where resistance to 5 is present." }
  ],
  resistance:"Resistance to spinosyns, pyrethroids and organophosphates is widespread. Alternate 5 with 28 and rely on biological control in protected crops.",
  lookalikes:[
    { n:"Thrips tabaci", d:"Onion thrips — paler, different host range, weaker TSWV vector." },
    { n:"Thrips palmi", d:"Melon thrips — quarantine concern; requires expert confirmation." }
  ],
  role:"Pest and virus vector"
},

{
  id:"thrips-tabaci", kind:"insect",
  name:"Onion thrips", sci:"Thrips tabaci", fr:"Thrips de l'oignon",
  order:"Thysanoptera", family:"Thripidae",
  crops:["onion","cucurbits","tomato"],
  organs:["leaf","shoot"],
  symptoms:["silvery-scar","stippling","distortion","chlorosis"],
  stage:"Larvae and adults in leaf axils",
  tagline:"The dominant thrips of Allium crops; damage is cumulative and easily underestimated.",
  bio:"Adults overwinter on crop debris and weeds. Females may reproduce asexually. Larvae feed in leaf axils, often hidden, then pupate in soil. Multiple generations from spring to autumn; populations explode in hot dry weather.",
  damage:"Silvery patches and white flecks on leaves, leaf distortion, reduced bulb size. Heavy infestations also transmit iris yellow spot virus.",
  favours:"Hot dry weather, overhead irrigation that washes predators, continuous Allium cropping, uncontrolled volunteer plants.",
  monitoring:"Count thrips in leaf axils of 20 plants per field, weekly. Use white paper to tap plants over. Watch for the natural increase after the first warm week.",
  threshold:"About 5–10 thrips per plant, or 1–2 per leaf axil, before bulb swelling. Early action is more effective than late rescue.",
  severity:3,
  dz:"Major pest of onion and garlic in Mascara, Tiaret and Biskra.",
  ipm:{
    cultural:["Rotate away from Allium crops for at least two years.","Destroy crop residues and volunteer onions.","Avoid excessive nitrogen and water stress.","Overhead irrigation reduces populations compared with drip in hot weather."],
    biological:["Orius and predatory mites where compatible.","Entomopathogenic fungi in humid conditions.","Conserve predatory thrips and anthocorids."],
    mechanical:["Reflective mulches reduce colonisation.","Remove affected outer leaves at harvest."],
    biotech:["Pheromone and colour traps for monitoring only."]
  },
  chem:[
    { ai:"spinosad", moa:"5", note:"Effective but resistance-prone and harmful to pollinators." },
    { ai:"cyantraniliprole", moa:"28", note:"Alternative group for rotation." },
    { ai:"lambda-cyhalothrin", moa:"3A", note:"Poor efficacy where resistance exists; avoid repeated use." }
  ],
  resistance:"Resistance to pyrethroids and organophosphates is common; spinosyn resistance is emerging. Rotate groups and reduce selection pressure.",
  lookalikes:[
    { n:"Frankliniella occidentalis", d:"Darker, more flower-associated, stronger virus vector." },
    { n:"Thrips flavus", d:"Similar appearance; host and damage differ." }
  ],
  role:"Pest"
},

{
  id:"tetranychus-urticae", kind:"mite",
  name:"Two-spotted spider mite", sci:"Tetranychus urticae", fr:"Tétranyque tisserand",
  order:"Trombidiformes", family:"Tetranychidae",
  crops:["tomato","cucurbits","pepper","citrus","grape","pome","stonefruit"],
  organs:["leaf","whole"],
  symptoms:["stippling","webbing","chlorosis","defoliation"],
  stage:"All mobile stages; eggs are the most resistant",
  tagline:"A hot, dry-weather mite whose outbreaks are usually induced by broad-spectrum sprays.",
  bio:"Extremely polyphagous, with over 1,000 host plants. Development from egg to adult takes 7–12 days at 30 °C; populations are female-biased and disperse by ballooning on silk. Overwintering females turn orange-red and shelter in bark or debris.",
  damage:"Stippling and bronzing, then webbing and defoliation. Yield loss is severe when the canopy is lost before fruit maturity.",
  favours:"Hot dry weather, water stress, dusty conditions, pyrethroid and neonicotinoid sprays that kill predatory mites.",
  monitoring:"Weekly inspection of the underside of 20 leaves per block; use a hand lens. Beat foliage over white paper. Record presence of predatory mites (fast-moving, no webbing).",
  threshold:"About 5–10 mobile mites per leaf, or 10% of leaves infested, before visible bronzing. Preserve predators whenever present.",
  severity:4,
  dz:"Common in protected crops and orchards; outbreaks frequently follow pyrethroid use.",
  ipm:{
    cultural:["Maintain irrigation to avoid water stress.","Reduce dust on field margins.","Avoid broad-spectrum insecticides.","Remove heavily infested leaves."],
    biological:["Phytoseiulus persimilis — specialist predator, best at high mite density.","Neoseiulus californicus — tolerates lower prey density and heat.","Feltiella acarisuga (predatory midge) in humid greenhouses.","Beauveria bassiana under high humidity; ineffective in dry heat."],
    mechanical:["Water jets reduce dust and mite movement on sturdy plants."],
    biotech:["Temperature-based models predict generation time; hot spells compress the window for intervention."]
  },
  chem:[
    { ai:"bifenazate", moa:"20D", note:"Effective on adults; check local registration." },
    { ai:"spirodiclofen", moa:"23", note:"Effective on eggs and nymphs." },
    { ai:"abamectin", moa:"6", note:"Effective but resistance-prone and harsh on predators." },
    { ai:"fenpyroximate", moa:"21A", note:"Contact acaricide; rotate groups." },
    { ai:"sulfur", moa:"M02", note:"Multi-site, useful in organic programmes; phytotoxicity risk in heat." }
  ],
  resistance:"One of the fastest-evolving resistances known: resistance to nearly every acaricide class is documented. Rotate MoA groups every generation and integrate predators.",
  lookalikes:[
    { n:"Tetranychus evansi", d:"Tomato red spider mite — red, severe on solanaceae." },
    { n:"Panonychus ulmi", d:"European red mite — red with white tubercles, mainly pome fruit." },
    { n:"Predatory mites", d:"Faster, no webbing, different body shape; never treat when abundant." }
  ],
  role:"Pest"
},

{
  id:"panonychus-ulmi", kind:"mite",
  name:"European red mite", sci:"Panonychus ulmi", fr:"Tétranyque rouge du pommier",
  order:"Trombidiformes", family:"Tetranychidae",
  crops:["pome","stonefruit","grape"],
  organs:["leaf","whole"],
  symptoms:["stippling","chlorosis","defoliation"],
  stage:"Overwintering eggs, then summer generations",
  tagline:"An orchard mite whose damage is written into the fruit size of the following year.",
  bio:"Overwinters as red eggs on twigs and spurs. Spring hatch coincides with bloom; summer generations overlap. Males are rare; females lay eggs on leaves. Hot dry summers favour rapid increase.",
  damage:"Bronzing and premature leaf fall, reduced fruit size and flower-bud initiation for the next season.",
  favours:"Hot dry summers, low predator populations, broad-spectrum orchard sprays.",
  monitoring:"Weekly counts of mites and eggs per leaf (20 leaves per block) from bloom onward; record predatory mites.",
  threshold:"About 2.5–5 mobile mites per leaf in summer, depending on cultivar and predator presence.",
  severity:3,
  dz:"Important in pome and stone fruit orchards, especially Batna and Khenchela.",
  ipm:{
    cultural:["Conserve hedgerows and avoid dusty margins.","Prune to open the canopy, reducing hot dry microclimate."],
    biological:["Typhlodromus pyri and Neoseiulus californicus are the backbone of orchard control.","Stethorus punctillum (spider-mite ladybird).","Predatory bugs (Orius, Anthocoris)."],
    mechanical:["Dormant oil sprays against overwintering eggs, applied before bud break."],
    biotech:["Degree-day models time the first summer generation."]
  },
  chem:[
    { ai:"clofentezine", moa:"10A", note:"Ovicide; effective against winter eggs, resistance documented." },
    { ai:"hexythiazox", moa:"10A", note:"Ovicide/larvicide; same group as clofentezine." },
    { ai:"bifenazate", moa:"20D", note:"Adulticide, selective toward some predators." },
    { ai:"paraffin oil", moa:"—", note:"Physical action, low resistance risk; apply at dormant stage." }
  ],
  resistance:"Resistance to organotins and ovicides is widespread; avoid consecutive applications of group 10A.",
  lookalikes:[
    { n:"Tetranychus urticae", d:"Two-spotted mite — greenish with two dark spots, webbing, broader host range." },
    { n:"Aculus schlechtendali", d:"Apple rust mite — microscopic, causes leaf silvering rather than stippling." }
  ],
  role:"Pest"
},

{
  id:"liriomyza-spp", kind:"insect",
  name:"Serpentine leafminers", sci:"Liriomyza spp.", fr:"Mineuses serpentines",
  order:"Diptera", family:"Agromyzidae",
  crops:["tomato","cucurbits","potato","fababean"],
  organs:["leaf"],
  symptoms:["serpentine-mines","chlorosis","defoliation"],
  stage:"Larvae inside mines; adults are small flies",
  tagline:"Mines are easy to see, but the species matters because susceptibility differs.",
  bio:"Adults are 1.5–2.5 mm, black and yellow. Females puncture leaves to feed and lay eggs. Larvae mine between the epidermal layers, leaving a winding frass trail, then pupate in soil or on the leaf. Development is rapid in warm weather; several overlapping generations.",
  damage:"Mines reduce photosynthesis; heavy infestation causes leaf drop. Adult feeding punctures also damage young foliage. Most crops tolerate moderate mining.",
  favours:"Warm weather, broad-spectrum sprays that remove parasitoids, protected crops, successive host plantings.",
  monitoring:"Count mines per leaflet on 20 plants weekly; record parasitoid emergence (circular exit holes) and adult catches on yellow traps.",
  threshold:"About 1–2 mines per leaflet, or 20–30% of leaves with active mines. Parasitism often keeps populations below threshold.",
  severity:2,
  dz:"Present in vegetable and protected crops; usually secondary to other pests.",
  ipm:{
    cultural:["Remove infested leaves and crop residues.","Avoid overlapping susceptible plantings.","Conserve parasitoids by avoiding pyrethroids."],
    biological:["Diglyphus isaea and Dacnusa sibirica in protected crops — highly effective.","Conserve native eulophid parasitoids."],
    mechanical:["Yellow sticky traps for monitoring and partial mass trapping."],
    biotech:["Parasitoid release rates are the main decision variable in greenhouses."]
  },
  chem:[
    { ai:"abamectin", moa:"6", note:"Translaminar, active on larvae; harmful to parasitoids." },
    { ai:"cyromazine", moa:"17", note:"Insect growth regulator, selective; check registration." },
    { ai:"spinosad", moa:"5", note:"Effective but disrupts biological control." }
  ],
  resistance:"Resistance to abamectin and pyrethroids is reported. In protected crops, biological control is more durable than chemistry.",
  lookalikes:[
    { n:"Tuta absoluta", d:"Blotch mines with copious frass, not narrow serpentine mines." },
    { n:"Phyllocnistis citrella", d:"Citrus only; silvery mine along the leaf margin." }
  ],
  role:"Pest"
}

);

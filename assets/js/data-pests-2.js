/* ============================================================
   AgroScope — pest library, part 2
   Orchards, palms, stored products and beneficial arthropods
   ============================================================ */

window.AGRO = window.AGRO || {};
AGRO.pests = AGRO.pests || [];

AGRO.pests.push(

{
  id:"ceratitis-capitata", kind:"insect",
  name:"Mediterranean fruit fly", sci:"Ceratitis capitata", fr:"Mouche méditerranéenne des fruits",
  order:"Diptera", family:"Tephritidae",
  crops:["citrus","stonefruit","pome"],
  organs:["fruit"],
  symptoms:["entry-holes","soft-rot","premature-drop"],
  stage:"Mated females laying eggs; larvae in fruit",
  tagline:"The single largest cause of rejected Mediterranean fruit at harvest.",
  bio:"Adults are 4–5 mm with a yellow body, patterned wings and a swollen ovipositor. Females lay 2–10 eggs under the fruit skin; larvae develop through three instars in 10–20 days, then drop to pupate in soil. Overwinters as pupae or adults; multiple overlapping generations from spring to late autumn.",
  damage:"Oviposition punctures and larval feeding cause premature ripening, internal decay and fruit drop. Secondary fungi and bacteria accelerate losses. A single sting can downgrade export fruit.",
  favours:"Mild winters, ripe or ripening fruit, adjacent host orchards, abandoned trees, late-maturing cultivars.",
  monitoring:"McPhail or Tephri traps baited with trimedlure or a protein attractant, 1–4 per hectare, checked weekly. Fruit sampling for stings is the decisive check.",
  threshold:"Detection of 1–2 flies per trap per week during fruit ripening generally triggers action; for export crops, zero tolerance applies. Follow national monitoring guidance.",
  severity:5,
  dz:"Present in all coastal and sub-coastal fruit-growing areas; a quarantine concern for export markets.",
  ipm:{
    cultural:["Harvest promptly and do not leave fruit on the tree.","Collect and destroy all fallen fruit at least twice weekly.","Remove abandoned and wild host trees in the vicinity.","Choose early-maturing cultivars to escape peak populations."],
    biological:["Conserve parasitoids such as Psyttalia concolor.","Sterile insect technique only as part of an area-wide programme.","Entomopathogenic fungi against soil-pupating stages (experimental)."],
    mechanical:["Mass trapping with protein bait or parapheromone traps.","Fruit bagging for small orchards and home gardens.","Fine netting of small plots."],
    biotech:["Bait sprays (protein hydrolysate plus an approved insecticide) target adults and limit fruit contact."]
  },
  chem:[
    { ai:"spinosad", moa:"5", note:"Bait spray component; very effective when mixed with a protein attractant. Bee hazard — never spray flowering or fruiting trees in bloom." },
    { ai:"lambda-cyhalothrin", moa:"3A", note:"Cover sprays have limited efficacy and high ecological cost; bait formulations preferred." },
    { ai:"malathion", moa:"1B", note:"Traditional bait component where still registered; verify national authorisation." }
  ],
  resistance:"Resistance is not the main limitation; coverage and attractant quality are. Rotate bait actives where possible.",
  lookalikes:[
    { n:"Bactrocera oleae", d:"Olive only; different wing pattern, no swollen ovipositor." },
    { n:"Drosophila suzukii", d:"Smaller, lays in intact ripening fruit; male has spotted wings." },
    { n:"Rhagoletis spp.", d:"Different host and phenology; wing banding pattern is diagnostic." }
  ],
  role:"Pest"
},

{
  id:"drosophila-suzukii", kind:"insect",
  name:"Spotted-wing drosophila", sci:"Drosophila suzukii", fr:"Drosophile à ailes tachetées",
  order:"Diptera", family:"Drosophilidae",
  crops:["stonefruit","grape"],
  organs:["fruit"],
  symptoms:["entry-holes","soft-rot","premature-drop"],
  stage:"Egg-laying females; larvae in fruit",
  tagline:"Unlike other vinegar flies, it attacks sound, ripening fruit.",
  bio:"Adults are 2–3 mm; males have a dark spot near the wing tip, females a serrated ovipositor. Eggs are inserted into intact ripening fruit. Larvae develop in 5–10 days; the cycle is very fast in warm weather, with up to 10 generations per year.",
  damage:"Softening, collapse and rot at oviposition sites; often detected only at packing. Crop loss can reach 30–80% in susceptible cultivars without management.",
  favours:"Mild winters, humid shaded orchards, thin-skinned cultivars, nearby wild hosts, damaged or overripe fruit.",
  monitoring:"Yeast-sugar or apple-cider-vinegar traps, 2–4 per hectare, checked weekly; salt flotation of fruit samples to detect larvae.",
  threshold:"Low: often 1–3 flies per trap per week during ripening triggers management. Act before colour change in susceptible cultivars.",
  severity:4,
  dz:"Established in northern fruit areas; spread continues. Notify the plant protection service on first detection in a new region.",
  ipm:{
    cultural:["Harvest frequently and remove all cull fruit.","Keep the canopy open and reduce humidity.","Choose less susceptible, firmer cultivars.","Sanitation at the end of the season is decisive."],
    biological:["Conserve pupal parasitoids (Trichopria drosophilae where present).","Exclusion netting (0.8 mm mesh) for high-value blocks."],
    mechanical:["Mass trapping with attractant baits.","Insecticide-treated netting around blocks."],
    biotech:["Trap networks plus fruit sampling drive the spray calendar."]
  },
  chem:[
    { ai:"spinosad", moa:"5", note:"Bait applications; short residual, bee hazard." },
    { ai:"cyantraniliprole", moa:"28", note:"Residual cover spray; rotate to limit resistance." },
    { ai:"lambda-cyhalothrin", moa:"3A", note:"Knockdown; disrupts natural enemies and resistance-prone." }
  ],
  resistance:"Resistance to spinosyns and pyrethroids is emerging. Rotate MoA and prioritise sanitation and exclusion.",
  lookalikes:[
    { n:"Drosophila melanogaster", d:"Common vinegar fly — no wing spots, attacks only damaged or fermenting fruit." },
    { n:"Zaprionus indianus", d:"Larger, with pale stripes; secondary invader." }
  ],
  role:"Pest"
},

{
  id:"bactrocera-oleae", kind:"insect",
  name:"Olive fruit fly", sci:"Bactrocera oleae", fr:"Mouche de l'olive",
  order:"Diptera", family:"Tephritidae",
  crops:["olive"],
  organs:["fruit"],
  symptoms:["entry-holes","premature-drop","soft-rot"],
  stage:"Egg-laying females and larvae in the fruit",
  tagline:"The determinant of olive oil quality — acidity rises with every sting.",
  bio:"Females lay a single egg per olive, leaving a characteristic sting. The larva feeds on the mesocarp, causing premature drop or leaving the fruit prone to rot. Pupation occurs in soil or inside the fruit. Two to four generations per year; autumn generations are the most damaging.",
  damage:"Oil acidity and peroxide values rise sharply; table olives are downgraded. Yield loss partly through premature drop.",
  favours:"Mild autumns, susceptible cultivars, unharvested fruit left on trees, dense canopies, nearby abandoned groves.",
  monitoring:"Yellow sticky traps or McPhail traps at 1–2 per hectare, weekly from June. Monitor stings on 100 fruit per block.",
  threshold:"About 1–2% stung fruit for table olives; 5–10% for oil, depending on cultivar and oil-quality targets. Early harvest is often the best economic response.",
  severity:5,
  dz:"Present in all olive areas; pressure highest in coastal and sub-coastal groves.",
  ipm:{
    cultural:["Harvest early and completely; never leave fruit on the tree.","Remove abandoned trees and unharvested fruit.","Improve canopy aeration by pruning.","Choose less susceptible cultivars where replanting."],
    biological:["Conserve Opius concolor and other parasitoids.","Entomopathogenic fungi against soil pupae (limited field evidence)."],
    mechanical:["Mass trapping with attractant traps (protein or ammonium salts).","Kaolin clay film reduces oviposition on fruit."],
    biotech:["Bait sprays with protein hydrolysate target adults and reduce fruit residues."]
  },
  chem:[
    { ai:"spinosad", moa:"5", note:"Bait spray; apply to a coarse cover, never over the whole canopy. Bee hazard." },
    { ai:"deltamethrin", moa:"3A", note:"Protein bait component; high ecological cost." },
    { ai:"kaolin", moa:"—", note:"Physical barrier, no resistance risk; verify availability and residue limits." }
  ],
  resistance:"Resistance is not the primary concern; bait quality, coverage and timing are. Repeated pyrethroid bait can select resistance.",
  lookalikes:[
    { n:"Ceratitis capitata", d:"Broader host range, different wing pattern and ovipositor." },
    { n:"Dacus ciliatus", d:"Cucurbit host, smaller, different abdomen markings." }
  ],
  role:"Pest"
},

{
  id:"prays-oleae", kind:"insect",
  name:"Olive moth", sci:"Prays oleae", fr:"Teigne de l'olivier",
  order:"Lepidoptera", family:"Praydidae",
  crops:["olive"],
  organs:["flower","fruit","leaf","shoot"],
  symptoms:["flower-drop","entry-holes","premature-drop","blotch-mines"],
  stage:"Three distinct generations: phyllophagous, anthophagous, carpophagous",
  tagline:"One species, three generations, three different damage types.",
  bio:"Overwinters as a larva in a leaf mine. The spring generation mines leaves; the flower generation feeds on buds and flowers, causing flower drop; the summer generation enters the fruit and feeds on the kernel, causing premature drop. Adults are small grey moths with a distinctive resting posture.",
  damage:"Flower loss, fruit drop and direct kernel damage. Economic loss varies greatly with cultivar and year; the carpophagous generation is usually the most damaging.",
  favours:"Mild winters, dense canopies, susceptible cultivars, continuous olive monoculture.",
  monitoring:"Pheromone traps for each flight; count flower and fruit attack rates on 100 inflorescences and 100 fruits per block.",
  threshold:"About 10–20% attacked flowers, or 5–10% attacked fruit, depending on cultivar and oil/table destination. Many programmes tolerate flower damage.",
  severity:3,
  dz:"Endemic in all olive areas; significant in years with favourable spring weather.",
  ipm:{
    cultural:["Prune to reduce humidity and improve spray penetration.","Encourage flowering synchrony.","Early harvest limits carpophagous damage."],
    biological:["Bacillus thuringiensis kurstaki against young larvae — the standard IPM-compatible option.","Conserve Trichogramma and predatory ants.","Chrysoperla larvae feed on eggs and young larvae."],
    mechanical:["Pheromone mass trapping for the flower generation."],
    biotech:["Mating disruption is used in some countries; verify local availability."]
  },
  chem:[
    { ai:"Bacillus thuringiensis kurstaki", moa:"11", note:"Selective, effective on young larvae; timing at egg hatch is critical." },
    { ai:"deltamethrin", moa:"3A", note:"Effective but destroys parasitoids; avoid." },
    { ai:"spinosad", moa:"5", note:"Alternative; bee hazard at bloom." }
  ],
  resistance:"Not a documented driver; the practical failure mode is mistimed application relative to egg hatch.",
  lookalikes:[
    { n:"Prays citri", d:"Citrus flowers; different host." },
    { n:"Ectomyelois ceratoniae", d:"Larger, attacks fruit and stored dates, not olive." }
  ],
  role:"Pest"
},

{
  id:"aonidiella-aurantii", kind:"insect",
  name:"California red scale", sci:"Aonidiella aurantii", fr:"Pou de San José / cochenille rouge",
  order:"Hemiptera", family:"Diaspididae",
  crops:["citrus"],
  organs:["fruit","leaf","shoot","stem"],
  symptoms:["chlorosis","scarring","dieback","premature-drop"],
  stage:"Crawlers (first instar) are the only truly susceptible stage",
  tagline:"A hidden, cumulative pest that ruins fruit finish and kills branches.",
  bio:"Females are circular, reddish-orange under a translucent cover; males are smaller and elongate. Crawlers emerge from under the mother's cover and settle within days. Several overlapping generations per year in mild climates.",
  damage:"Yellow halos on fruit, red spotting, branch dieback and fruit drop in heavy infestations. Cosmetic damage alone can make fruit unmarketable.",
  favours:"Mild winters, dense canopies, dusty conditions, broad-spectrum sprays that remove Aphytis parasitoids.",
  monitoring:"Count settled scales and parasitised scales (Aphytis exit holes) on 40 twigs and 100 fruit per block, monthly. Pheromone or sticky tape traps for crawler timing.",
  threshold:"About 1–2 live scales per fruit, or 10% infested twigs, depending on market. Export fruit tolerates almost none.",
  severity:4,
  dz:"Key pest of citrus in the Mitidja and coastal orchards.",
  ipm:{
    cultural:["Prune to open the canopy and reduce dust.","Avoid excessive nitrogen.","Remove heavily infested wood."],
    biological:["Aphytis melinus and A. chrysomphali — classical biological control is highly effective when not disrupted.","Comperiella bifasciata for the male scale.","Conserve with selective chemistry and ant control."],
    mechanical:["Crawler tape bands on trunks for monitoring.","High-pressure washing of fruit is cosmetic only."],
    biotech:["Degree-day models time treatments against the crawler peak."]
  },
  chem:[
    { ai:"buprofezin", moa:"16", note:"Moulting inhibitor, active on crawlers; selective toward Aphytis." },
    { ai:"pyriproxyfen", moa:"7C", note:"Juvenile hormone mimic; suppresses reproduction." },
    { ai:"spirotetramat", moa:"23", note:"Translaminar, active on settled stages." },
    { ai:"paraffin oil", moa:"—", note:"Physical action on all stages; useful in organic programmes." }
  ],
  resistance:"Resistance to organophosphates and pyrethroids is documented; resistance to insect growth regulators is lower but should be managed by rotation.",
  lookalikes:[
    { n:"Aonidiella citrina", d:"Yellow scale — yellow-orange body, similar damage." },
    { n:"Chrysomphalus aonidum", d:"Florida red scale — darker, more convex cover." },
    { n:"Parlatoria pergandii", d:"Chaff scale — elongate, greyish, on twigs and fruit." }
  ],
  role:"Pest"
},

{
  id:"phyllocnistis-citrella", kind:"insect",
  name:"Citrus leafminer", sci:"Phyllocnistis citrella", fr:"Mineuse des agrumes",
  order:"Lepidoptera", family:"Gracillariidae",
  crops:["citrus"],
  organs:["leaf","shoot"],
  symptoms:["serpentine-mines","distortion","dieback"],
  stage:"Larvae mining young flush leaves",
  tagline:"A nursery and young-orchard pest: it attacks only tender new growth.",
  bio:"Tiny moths (about 2 mm) lay eggs on young leaves. Larvae mine just under the epidermis, usually near the midrib or margin, leaving a silvery trail. Pupation occurs at the leaf margin, often curling the leaf edge. Generations follow each flush of new growth.",
  damage:"Distorted, curled leaves and reduced vigour in nursery stock and young trees. Mines also create entry points for citrus canker where that disease occurs.",
  favours:"Frequent flushes of growth, high nitrogen, warm humid conditions, unprotected nurseries.",
  monitoring:"Inspect the newest flush for mines weekly in nurseries and young orchards; record the proportion of infested shoots.",
  threshold:"About 25–50% of young shoots mined in nurseries or trees under three years. Mature trees rarely justify treatment.",
  severity:2,
  dz:"Present in all citrus areas; mainly a nursery and young-plant problem.",
  ipm:{
    cultural:["Avoid excessive nitrogen, which produces continuous susceptible flush.","Synchronise pruning to concentrate flush.","Inspect and quarantine nursery material."],
    biological:["Conserve native parasitoids (Citrostichus phyllocnistoides and others), which are often highly effective.","Do not spray where parasitism exceeds 30%."],
    mechanical:["Remove and destroy heavily mined shoots in nurseries."],
    biotech:["Pheromone monitoring is not practical; visual scouting of flush is standard."]
  },
  chem:[
    { ai:"abamectin", moa:"6", note:"Translaminar; effective on miners but harsh on parasitoids." },
    { ai:"imidacloprid", moa:"4A", note:"Soil application for systemic uptake in young trees; pollinator and groundwater concerns." },
    { ai:"paraffin oil", moa:"—", note:"Suppressive on eggs and young larvae; low resistance risk." }
  ],
  resistance:"Not a primary issue; parasitoid disruption is the main risk of chemical control.",
  lookalikes:[
    { n:"Liriomyza spp.", d:"Different host range; mines are wider with a distinct frass line." },
    { n:"Citrus canker lesions", d:"Not a mine; raised corky lesions with halos." }
  ],
  role:"Pest"
},

{
  id:"planococcus-ficus", kind:"insect",
  name:"Vine mealybug", sci:"Planococcus ficus", fr:"Cochenille farineuse de la vigne",
  order:"Hemiptera", family:"Pseudococcidae",
  crops:["grape","citrus","pome"],
  organs:["fruit","shoot","stem","leaf"],
  symptoms:["honeydew","sooty-mould","chlorosis","stunting"],
  stage:"Crawlers and young nymphs; adults are protected by wax",
  tagline:"A cryptic, wax-covered pest that contaminates bunches and vectors grapevine viruses.",
  bio:"Females are oval, covered with white wax, and hide under bark, at the crown, or in bunch crevices. Crawlers disperse actively and by wind. Three to four generations per year; overwintering under bark.",
  damage:"Honeydew and sooty mould on bunches, stunted growth, and transmission of grapevine leafroll-associated viruses. Bunch contamination causes direct market rejection.",
  favours:"Warm dry climates, dense canopies, ants (which protect colonies), infected planting material.",
  monitoring:"Check under bark at the crown and on bunch stems; use corrugated-cardboard bands as refuges. Count parasitised mummies.",
  threshold:"Any established colony on fruiting vines warrants action; crawler timing is the key decision.",
  severity:4,
  dz:"Increasing in Algerian vineyards; often moved with planting material.",
  ipm:{
    cultural:["Use certified, pest-free planting material.","Control ants, which protect mealybugs.","Prune to open the canopy; remove loose bark.","Remove and destroy heavily infested wood."],
    biological:["Anagyrus pseudococci — a highly effective parasitoid; conserve it.","Cryptolaemus montrouzieri (mealybug destroyer) in warm conditions.","Leptomastix spp. as complementary parasitoids."],
    mechanical:["Trunk bands and sticky barriers against crawlers and ants.","Steam or hot-water treatment of nursery material where permitted."],
    biotech:["Pheromone monitoring and mating disruption are used in some vineyards."]
  },
  chem:[
    { ai:"spirotetramat", moa:"23", note:"Effective on crawlers and young nymphs; translaminar." },
    { ai:"buprofezin", moa:"16", note:"Growth regulator; target crawlers." },
    { ai:"imidacloprid", moa:"4A", note:"Resistance risk; disrupts parasitoids." },
    { ai:"paraffin oil", moa:"—", note:"Suffocates young stages; useful pre-budbreak." }
  ],
  resistance:"Resistance to neonicotinoids is reported in some regions; rely on parasitoids and target the crawler stage.",
  lookalikes:[
    { n:"Pseudococcus viburni", d:"Obscure mealybug — similar wax, different phenology." },
    { n:"Parthenolecanium corni", d:"Soft brown scale — no white wax, brown dome-shaped cover." }
  ],
  role:"Pest and virus vector"
},

{
  id:"rhynchophorus-ferrugineus", kind:"insect",
  name:"Red palm weevil", sci:"Rhynchophorus ferrugineus", fr:"Charançon rouge du palmier",
  order:"Coleoptera", family:"Curculionidae",
  crops:["datepalm"],
  organs:["stem","shoot","whole"],
  symptoms:["exit-holes","dieback","collapse","tip-boring"],
  stage:"Larvae boring inside the trunk; adults are the dispersive stage",
  tagline:"A lethal, hidden borer: by the time symptoms show, the palm is usually lost.",
  bio:"Adults are large (25–40 mm), reddish-brown, with a long rostrum. Females lay 200–500 eggs in wounds or leaf bases. Larvae tunnel through the trunk, destroying vascular tissue. Pupation in a fibrous cocoon inside the trunk. Multiple overlapping generations; development is faster in hot climates.",
  damage:"Internal destruction of the crown and trunk; oozing fermented sap, fibrous frass, and eventually collapse. A single infested palm can kill an entire grove if not removed early.",
  favours:"Wounds from pruning, offshoot removal, or mechanical damage; unprotected palm groves; movement of infested offshoots.",
  monitoring:"Pheromone traps (aggregation pheromone plus plant volatiles) at 1–2 per hectare, checked weekly. Inspect leaf bases, crown and trunk for frass, oozing and chewing sounds. Acoustic sensors can detect larvae before symptoms.",
  threshold:"Zero tolerance. Any confirmed infestation requires immediate removal and destruction of the palm under official supervision.",
  severity:5,
  quarantine:true,
  dz:"Present and expanding in date-growing regions; a national priority pest. Report suspected cases to the plant protection service immediately.",
  ipm:{
    cultural:["Never move offshoots or pruning material without authorisation.","Avoid wounds; treat pruning cuts.","Remove and destroy infested palms (chipping or burning) — do not leave trunks on site.","Maintain grove hygiene and regular inspection."],
    biological:["Beauveria bassiana and Metarhizium anisopliae applied to crown and traps.","Entomopathogenic nematodes (Steinernema carpocapsae) in trunk injections (experimental/registered in some countries).","Conserve predatory ants and birds — limited effect once inside the trunk."],
    mechanical:["Mass trapping with pheromone-baited bucket traps.","Physical protection of pruning wounds.","Acoustic detection for early diagnosis."],
    biotech:["Aggregation pheromone trapping is the core of area-wide programmes."]
  },
  chem:[
    { ai:"imidacloprid", moa:"4A", note:"Trunk injection or crown drench in some national programmes; strictly label- and authority-controlled." },
    { ai:"chlorantraniliprole", moa:"28", note:"Used in some countries for preventive crown treatment; verify registration." },
    { ai:"azadirachtin", moa:"—", note:"Repellent/antifeedant; limited curative value." }
  ],
  resistance:"Resistance is not the limiting factor — detection and sanitation are. Insecticide use is a supporting measure, never a substitute for removing infested palms.",
  lookalikes:[
    { n:"Paysandisia archon", d:"Palm borer moth — larvae in the crown, different frass and exit holes." },
    { n:"Oryctes rhinoceros", d:"Rhinoceros beetle — feeds on the crown, does not tunnel the trunk." }
  ],
  role:"Pest — quarantine priority"
},

{
  id:"ectomyelois-ceratoniae", kind:"insect",
  name:"Carob moth / date moth", sci:"Ectomyelois ceratoniae", fr:"Ver de la datte",
  order:"Lepidoptera", family:"Pyralidae",
  crops:["datepalm","pome","citrus"],
  organs:["fruit","storage"],
  symptoms:["entry-holes","soft-rot","premature-drop","store-insects"],
  stage:"Larvae inside fruit",
  tagline:"The main postharvest pest of dates in North Africa.",
  bio:"Females lay eggs on fruit or in the calyx; larvae enter and feed inside, often at the fruit base. Larvae exit to pupate, leaving silk and frass. Several generations overlap in warm storage and in the grove.",
  damage:"Internal galleries, frass and webbing, secondary rot, and total loss in stored dates. Damage is often invisible from outside.",
  favours:"Late harvest, fruit left on palms, cracked or damaged fruit, warm storage, poor warehouse hygiene.",
  monitoring:"Pheromone traps in the grove and store; inspect 100 fruit per lot; cut samples to detect larvae.",
  threshold:"Any live infestation in stored produce; in the grove, about 1–2% infested fruit at harvest justifies action.",
  severity:4,
  dz:"Major pest in Biskra, El Oued and Ouargla date stores.",
  ipm:{
    cultural:["Harvest promptly and avoid fruit damage.","Clean stores thoroughly between seasons; remove old fruit and debris.","Store at low temperature (below 10 °C where feasible).","Use sealed, insect-proof packaging."],
    biological:["Habrobracon hebetor against larvae in stores.","Trichogramma releases in the grove.","Bacillus thuringiensis on fruit surfaces (limited penetration)."],
    mechanical:["Fumigation under official supervision where legally permitted.","Heat treatment or cold treatment of packed dates.","Pheromone mass trapping in stores."],
    biotech:["Controlled atmosphere and hermetic storage are highly effective and residue-free."]
  },
  chem:[
    { ai:"spinosad", moa:"5", note:"Surface treatment in some countries; verify registration for dates." },
    { ai:"Bacillus thuringiensis", moa:"11", note:"Surface application against young larvae." },
    { ai:"fumigants", moa:"8", note:"Only by licensed operators; national authorisation and safety rules apply without exception." }
  ],
  resistance:"Fumigant resistance is a real risk with repeated phosphine use; follow resistance-management guidance and verify gas concentration.",
  lookalikes:[
    { n:"Cadra cautella", d:"Almond moth — similar in stores, different wing pattern and behaviour." },
    { n:"Prays oleae", d:"Olive only." }
  ],
  role:"Pest"
},

{
  id:"lobesia-botrana", kind:"insect",
  name:"European grapevine moth", sci:"Lobesia botrana", fr:"Eudémis de la vigne",
  order:"Lepidoptera", family:"Tortricidae",
  crops:["grape"],
  organs:["flower","fruit","shoot"],
  symptoms:["flower-blight","entry-holes","soft-rot","premature-drop"],
  stage:"Larvae of the three annual generations",
  tagline:"Three flights, three targets: flowers, green berries, then ripening bunches.",
  bio:"Overwinters as a pupa under bark. Adults emerge in spring; the first generation feeds on flower clusters, the second on green berries, and the third on ripening berries. Each female lays 30–80 eggs. Damage from the third generation also opens the way for Botrytis.",
  damage:"Flower loss, berry damage, and grey mould complexes. In table grapes, a single larva ruins a bunch.",
  favours:"Warm springs, dense canopies, susceptible cultivars with tight bunches, mild autumns.",
  monitoring:"Pheromone traps (2 per hectare) for flight phenology, plus weekly counts of egg masses and larval nests on 100 inflorescences or bunches.",
  threshold:"About 5–10% of inflorescences or bunches infested, depending on cultivar and market. Table grapes and export crops use lower thresholds.",
  severity:4,
  dz:"Main grape pest in Mostaganem, Mascara and Tlemcen vineyards.",
  ipm:{
    cultural:["Prune and train to open the canopy.","Remove loose bark where pupae overwinter.","Avoid excessive nitrogen and compact bunches.","Harvest promptly."],
    biological:["Trichogramma releases at each flight.","Bacillus thuringiensis against young larvae.","Conserve predatory bugs and spiders."],
    mechanical:["Pheromone mass trapping; mating disruption in blocks above 5–10 ha (verify local product availability)."],
    biotech:["Mating disruption is the reference IPM tool where registration exists; it requires area-wide adoption to work."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Effective on young larvae; rotate." },
    { ai:"methoxyfenozide", moa:"18", note:"Selective, IPM-compatible; time at egg hatch." },
    { ai:"spinosad", moa:"5", note:"Effective; bee hazard near bloom." },
    { ai:"Bacillus thuringiensis", moa:"11", note:"Selective; young larvae only." }
  ],
  resistance:"Resistance to diamides and spinosyns is a growing concern in European vineyards; rotate and combine with disruption.",
  lookalikes:[
    { n:"Eupoecilia ambiguella", d:"Vine moth — different wing pattern, two generations, similar damage." },
    { n:"Argyrotaenia ljungiana", d:"Tortricid on grape; larvae tie leaves and bunches." }
  ],
  role:"Pest"
},

{
  id:"cydia-pomonella", kind:"insect",
  name:"Codling moth", sci:"Cydia pomonella", fr:"Carpocapse des pommes",
  order:"Lepidoptera", family:"Tortricidae",
  crops:["pome"],
  organs:["fruit"],
  symptoms:["entry-holes","premature-drop","mummification"],
  stage:"Larvae entering fruit; egg hatch is the critical window",
  tagline:"The reference pest of pome fruit — control is decided in a 7–10 day window.",
  bio:"Overwinters as a mature larva in a cocoon under bark or in the soil. Adults emerge in spring, timed by temperature. Females lay 30–70 eggs singly on fruit and leaves. Larvae bore into the fruit, often at the calyx or stem end, and feed on seeds. Two to three generations per year.",
  damage:"'Wormy' fruit, premature drop, and unmarketable produce. Export and long-storage programmes tolerate almost no damage.",
  favours:"Warm springs, dense orchards, unmanaged host trees, poor sanitation, late cultivars.",
  monitoring:"Pheromone traps (1–2 per hectare) from bloom, checked twice weekly to establish biofix. Degree-day models then time egg-hatch treatments. Inspect 100 fruit weekly for entries.",
  threshold:"About 1% fruit with entries, or 3–5 moths per trap per week. Most commercial programmes act earlier using degree-days.",
  severity:5,
  dz:"Main pome pest in Batna, Khenchela and Sétif orchards.",
  ipm:{
    cultural:["Remove infested fruit and mummies from the orchard.","Scrape loose bark and band trunks to trap overwintering larvae.","Use early-maturing cultivars where possible."],
    biological:["Cydia pomonella granulosis virus (CpGV) — highly selective; apply at egg hatch.","Trichogramma releases.","Conserve birds and predatory bugs."],
    mechanical:["Cardboard trunk bands to collect overwintering larvae, removed and destroyed.","Fruit bagging for small orchards."],
    biotech:["Mating disruption with pheromone dispensers — effective in blocks above 5 ha; combine with monitoring and border sprays."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Effective; resistance reported in some regions." },
    { ai:"methoxyfenozide", moa:"18", note:"Selective, best at egg hatch." },
    { ai:"indoxacarb", moa:"22", note:"Good larvicidal activity." },
    { ai:"CpGV (Cydia pomonella granulosis virus)", moa:"—", note:"Microbial, highly selective; UV-sensitive, requires careful timing. IRAC lists baculoviruses separately from chemical groups." }
  ],
  resistance:"Resistance to diamides and to CpGV (in some European populations) is documented. Alternate MoA and rotate away from CpGV where resistance appears.",
  lookalikes:[
    { n:"Grapholita molesta", d:"Oriental fruit moth — smaller, attacks shoots first, different genitalia." },
    { n:"Cydia splendana", d:"Chestnut and oak; not a pome pest." }
  ],
  role:"Pest"
},

{
  id:"grapholita-molesta", kind:"insect",
  name:"Oriental fruit moth", sci:"Grapholita molesta", fr:"Tordeuse orientale du pêcher",
  order:"Lepidoptera", family:"Tortricidae",
  crops:["stonefruit","pome"],
  organs:["shoot","fruit"],
  symptoms:["dieback","entry-holes","premature-drop","tip-boring"],
  stage:"Larvae of 3–5 annual generations",
  tagline:"Attacks shoots first, fruit later — the shoot damage is the early-warning signal.",
  bio:"Overwinters as a larva in bark. Spring larvae bore into growing shoots, causing 'flagging'. Later generations attack fruit, especially near the stem. Adults are small grey-brown moths.",
  damage:"Shoot dieback in spring, then fruit damage and drop. Late-season fruit injury is easily confused with codling moth.",
  favours:"Warm springs, peach and apple orchards in proximity, dense canopies.",
  monitoring:"Pheromone traps from bud break; count flagged shoots weekly in spring and inspect fruit from June.",
  threshold:"About 5–10 flagged shoots per 100 terminals in spring, or 1% fruit damage.",
  severity:3,
  dz:"Present in stone-fruit orchards in the north and centre.",
  ipm:{
    cultural:["Remove and destroy flagged shoots during spring pruning.","Scrape bark and remove debris.","Avoid adjacent peach/apple blocks."],
    biological:["Trichogramma releases; CpGV has limited effect on this species.","Conserve parasitoids (Macrocentrus)."],
    mechanical:["Pheromone mass trapping; trunk bands."],
    biotech:["Mating disruption is effective and widely used in stone fruit."]
  },
  chem:[
    { ai:"chlorantraniliprole", moa:"28", note:"Effective on larvae." },
    { ai:"methoxyfenozide", moa:"18", note:"Selective; target egg hatch." },
    { ai:"indoxacarb", moa:"22", note:"Alternative group for rotation." }
  ],
  resistance:"Resistance to pyrethroids and organophosphates is documented; diamides should be rotated.",
  lookalikes:[
    { n:"Cydia pomonella", d:"Larger, mainly pome, feeds on seeds." },
    { n:"Anarsia lineatella", d:"Peach twig borer — shoots and fruit, different adult pattern." }
  ],
  role:"Pest"
},

{
  id:"eurygaster-integriceps", kind:"insect",
  name:"Sunn pest", sci:"Eurygaster integriceps", fr:"Punaise des céréales",
  order:"Hemiptera", family:"Scutelleridae",
  crops:["cereals"],
  organs:["fruit","whole"],
  symptoms:["stunting","premature-drop"],
  stage:"Overwintered adults, then nymphs on ears",
  tagline:"A few insects per square metre can ruin grain quality, not just yield.",
  bio:"Adults overwinter in mountain litter and migrate to cereal fields in spring. Females lay eggs on leaves; nymphs feed on stems and developing grain. One generation per year, with a long diapause.",
  damage:"Nymphs and adults inject enzymes that degrade gluten, so flour quality collapses even at low densities. Grain is also shrivelled and lighter.",
  favours:"Cereal monoculture, stubble left over summer, nearby overwintering sites, warm dry springs.",
  monitoring:"Sweep-net counts (10 sweeps in 5 points) weekly from stem elongation; count adults and nymphs per square metre. Inspect grain for feeding punctures at maturity.",
  threshold:"About 1–2 adults per square metre in spring, or 5–10 nymphs per square metre. Quality standards may justify lower thresholds.",
  severity:4,
  dz:"Important in the eastern high plains (Sétif, Constantine, Guelma) in outbreak years.",
  ipm:{
    cultural:["Early sowing and early maturing varieties escape the migration.","Destroy stubble and volunteer cereals.","Rotate cereals with legumes."],
    biological:["Conserve egg parasitoids (Trissolcus spp.) by avoiding early broad-spectrum sprays.","Beauveria bassiana against overwintering adults (limited field use)."],
    mechanical:["Sweep nets for monitoring; destruction of overwintering litter is not practical at scale."],
    biotech:["Regional forecasting and migration monitoring are the main decision tools."]
  },
  chem:[
    { ai:"lambda-cyhalothrin", moa:"3A", note:"Standard knockdown; resistance risk in repeated use." },
    { ai:"deltamethrin", moa:"3A", note:"Same group — do not rotate within it." },
    { ai:"thiamethoxam", moa:"4A", note:"Seed or foliar; pollinator and groundwater concerns." }
  ],
  resistance:"Pyrethroid resistance is reported in some populations; rotate with other groups and avoid treating below threshold.",
  lookalikes:[
    { n:"Aelia spp.", d:"Other cereal bugs — similar damage, different body shape." },
    { n:"Pentatomidae", d:"Shield bugs — usually larger and differently marked." }
  ],
  role:"Pest"
},

{
  id:"schistocerca-gregaria", kind:"insect",
  name:"Desert locust", sci:"Schistocerca gregaria", fr:"Criquet pèlerin",
  order:"Orthoptera", family:"Acrididae",
  crops:["cereals","cucurbits","tomato","datepalm"],
  organs:["leaf","whole"],
  symptoms:["defoliation","chewing-holes"],
  stage:"Gregarious hoppers and adults",
  tagline:"A transboundary emergency, not a farm-level pest problem.",
  bio:"Normally solitary in desert areas. Under favourable rainfall, populations increase and transform into the gregarious phase, forming hopper bands and swarms that can travel hundreds of kilometres. Breeding is driven by rainfall in the Sahara and Sahel.",
  damage:"Total defoliation of crops and pasture within hours. Swarms can consume their own weight in vegetation daily.",
  favours:"Exceptional rainfall in desert breeding areas, warm winds, sparse vegetation.",
  monitoring:"National locust monitoring and FAO Desert Locust bulletins. Farmers should report unusual grasshopper concentrations.",
  threshold:"Not applicable at farm level — response is organised by the national plant protection service.",
  severity:5,
  dz:"Algeria is a frontline country for invasion from the Sahel; national surveillance is continuous.",
  ipm:{
    cultural:["Report sightings immediately to the agricultural authorities.","Avoid planting in known swarm corridors during alerts."],
    biological:["Metarhizium acridum (Green Muscle) used in some programmes; slow-acting."],
    mechanical:["None at swarm scale."],
    biotech:["Satellite rainfall monitoring and FAO early warning drive preparedness."]
  },
  chem:[
    { ai:"deltamethrin", moa:"3A", note:"Ultra-low-volume barrier treatments applied by national services only." },
    { ai:"teflubenzuron", moa:"15", note:"Hopper bands; applied by official campaigns." }
  ],
  resistance:"Managed by national programmes; farmers must not attempt independent control.",
  lookalikes:[
    { n:"Locusta migratoria", d:"Migratory locust — different pronotum and wing pattern." },
    { n:"Non-gregarious grasshoppers", d:"Solitary species cause localised, minor damage." }
  ],
  role:"Pest — transboundary emergency"
},

{
  id:"oligonychus-afrasiaticus", kind:"mite",
  name:"Date palm mite (boufaroua)", sci:"Oligonychus afrasiaticus", fr:"Boufaroua du palmier dattier",
  order:"Trombidiformes", family:"Tetranychidae",
  crops:["datepalm"],
  organs:["fruit","leaf"],
  symptoms:["stippling","premature-drop","scarring"],
  stage:"Mobile stages on fruit and pinnae",
  tagline:"A Saharan mite that turns date fruit grey and worthless.",
  bio:"Overwinters on palm pinnae and in leaf axils. Populations move to fruit clusters in early summer; development is rapid at high temperature. Fine silk webbing covers the fruit surface.",
  damage:"Fruit become dull, greyish and shrivelled; heavy infestation causes drop and severe quality loss.",
  favours:"Hot dry summers, dusty conditions, dense palm groves, low humidity.",
  monitoring:"Weekly inspection of fruit clusters from June; use a hand lens. Look for fine webbing and greyish discolouration.",
  threshold:"About 5–10 mites per fruitlet, or first visible webbing. Early intervention at fruit set is far more effective than late rescue.",
  severity:4,
  dz:"Endemic in the oases of Biskra, El Oued, Ouargla and Adrar.",
  ipm:{
    cultural:["Maintain irrigation and humidity to reduce dust.","Remove heavily infested clusters and leaf debris.","Avoid excessive dust from unpaved tracks."],
    biological:["Conserve predatory mites and insects.","Sulfur-based products are the traditional option; check registration and heat phytotoxicity."],
    mechanical:["Water spraying of clusters reduces dust and mite movement (in some oasis systems)."],
    biotech:["Temperature-driven models predict population peaks."]
  },
  chem:[
    { ai:"sulfur", moa:"M02", note:"Traditional and still relevant; apply outside the hottest hours." },
    { ai:"abamectin", moa:"6", note:"Effective; resistance-prone and harsh on predators." },
    { ai:"fenbutatin oxide", moa:"12B", note:"Organotin acaricide; check registration status." }
  ],
  resistance:"Resistance develops quickly with repeated acaricide use; rotate and preserve predators.",
  lookalikes:[
    { n:"Tetranychus urticae", d:"Broader host range; different webbing pattern." },
    { n:"Parlatoria blanchardi", d:"Date scale — white armoured cover, not webbing." }
  ],
  role:"Pest"
},

{
  id:"sitophilus-granarius", kind:"insect",
  name:"Granary weevil", sci:"Sitophilus granarius", fr:"Charançon des grains",
  order:"Coleoptera", family:"Curculionidae",
  crops:["stored","cereals"],
  organs:["storage"],
  symptoms:["store-insects","store-rot"],
  stage:"Adults and larvae inside grain",
  tagline:"A silent store pest: infestation is measured in weight loss and grain heating.",
  bio:"Adults are 3–5 mm, dark brown, with a long rostrum; they cannot fly. Females lay eggs inside grains, sealing the hole. Larvae develop entirely within the kernel. Development takes about 4–6 weeks at 25 °C.",
  damage:"Kernel hollowing, weight loss, dust and heating; infestation also raises grain temperature and moisture, encouraging moulds and mycotoxins.",
  favours:"Moisture above 13–14%, warm stores, unclean silos, broken grain, poor aeration.",
  monitoring:"Sampling with a grain probe; sieve counts of adults; pheromone or pitfall traps in silos. Check grain temperature and moisture weekly.",
  threshold:"About 1–2 insects per kg in stored grain; zero tolerance for seed and premium lots.",
  severity:3,
  dz:"Widespread in farm and cooperative stores.",
  ipm:{
    cultural:["Store dry grain (below 13% moisture) and cool it below 20 °C.","Clean silos and equipment thoroughly before filling.","Never mix new grain with old.","Seal bags and use hermetic storage where possible."],
    biological:["Habrobracon hebetor against moth larvae, not weevils.","Beauveria bassiana surface treatments (limited efficacy inside grain)."],
    mechanical:["Aeration to cool grain; sieving and impact machines.","Hermetic bags and controlled atmosphere (CO2 or N2)."],
    biotech:["Temperature and moisture monitoring are the cheapest effective tools."]
  },
  chem:[
    { ai:"phosphine", moa:"8", note:"Fumigation by licensed operators only; resistance is a serious global issue." },
    { ai:"deltamethrin", moa:"3A", note:"Structural surface treatment; not for direct grain admixture unless labelled." },
    { ai:"diatomaceous earth", moa:"—", note:"Inert dust; effective in dry conditions, low mammalian toxicity." }
  ],
  resistance:"Phosphine resistance is widespread; follow fumigation protocols strictly and never under-dose.",
  lookalikes:[
    { n:"Sitophilus oryzae", d:"Rice weevil — can fly, has four reddish spots on elytra." },
    { n:"Rhyzopertha dominica", d:"Lesser grain borer — smaller, cylindrical, tunnels as a larva." },
    { n:"Tribolium castaneum", d:"Flour beetle — flat, reddish-brown, feeds on broken grain and flour." }
  ],
  role:"Pest"
},

{
  id:"chrysoperla-carnea", kind:"beneficial",
  name:"Common green lacewing", sci:"Chrysoperla carnea", fr:"Chrysope",
  order:"Neuroptera", family:"Chrysopidae",
  crops:["tomato","pepper","cucurbits","citrus","olive","pome","stonefruit"],
  organs:["leaf","shoot","flower"],
  symptoms:[],
  stage:"Larvae are the predators; adults may be nectar feeders",
  tagline:"A generalist predator whose larvae consume hundreds of aphids.",
  bio:"Adults are pale green with net-veined wings and golden eyes; eggs are laid on stalks. Larvae ('aphid lions') are active, alligator-like, with sickle-shaped mandibles. Development takes 2–4 weeks depending on temperature; several generations per year.",
  damage:"None. Occasionally adults are mistaken for pests.",
  favours:"Flowering strips, low pesticide input, humid microclimates, flowering crops.",
  monitoring:"Record larvae and eggs during routine scouting; a hand lens helps find stalked eggs.",
  threshold:"Conserve whenever present. Augmentative releases of 10–50 larvae per square metre in hotspots.",
  severity:1,
  dz:"Widespread and abundant; a key natural enemy in protected and field crops.",
  ipm:{
    cultural:["Establish flowering strips and hedgerows.","Provide shelter and alternative prey."],
    biological:["Commercial releases for aphid and thrips hotspots.","Compatible with Bt and IGRs; avoid pyrethroids."],
    mechanical:["None."],
    biotech:["Conservation is usually more cost-effective than release."]
  },
  chem:[
    { ai:"Bt, IGRs, pymetrozine", moa:"11 / 15 / 9B", note:"Relatively compatible; check specific selectivity data before applying." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Hemerobius spp.", d:"Brown lacewings — smaller, brown, also predatory." },
    { n:"Syrphid adults", d:"Hoverflies — two wings, not net-veined; also beneficial." }
  ],
  role:"Beneficial predator"
},

{
  id:"coccinella-septempunctata", kind:"beneficial",
  name:"Seven-spot ladybird", sci:"Coccinella septempunctata", fr:"Coccinelle à sept points",
  order:"Coleoptera", family:"Coccinellidae",
  crops:["cereals","tomato","cucurbits","pome","citrus","fababean"],
  organs:["leaf","shoot"],
  symptoms:[],
  stage:"Adults and larvae are both predatory",
  tagline:"A high-consumption aphid predator — and a useful indicator of low pesticide pressure.",
  bio:"Adults are 5–8 mm, red with seven black spots. Females lay clusters of yellow eggs near aphid colonies. Larvae are dark, spiny and alligator-like; both stages consume dozens to hundreds of aphids per day.",
  damage:"None. Larvae are sometimes mistaken for pests.",
  favours:"Aphid outbreaks, flowering margins, refuge habitats, reduced spraying.",
  monitoring:"Count adults and larvae per plant during aphid scouting. Presence of larvae indicates an active breeding population.",
  threshold:"Never treat when ladybird larvae are abundant; they often collapse aphid populations without intervention.",
  severity:1,
  dz:"Common nationwide.",
  ipm:{
    cultural:["Maintain hedgerows, beetle banks and flowering margins.","Reduce broad-spectrum insecticide use."],
    biological:["Conserve and augment; commercial release is rarely economic outdoors."],
    mechanical:["None."],
    biotech:["None."]
  },
  chem:[
    { ai:"—", moa:"—", note:"Avoid pyrethroids and organophosphates during aphid outbreaks; they remove this predator and trigger rebound." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Harmonia axyridis", d:"Asian ladybird — variable pattern, larger, can become a nuisance indoors." },
    { n:"Chrysomelid larvae", d:"Some leaf beetles resemble ladybird larvae but feed on foliage." }
  ],
  role:"Beneficial predator"
},

{
  id:"trichogramma-spp", kind:"beneficial",
  name:"Trichogramma egg parasitoids", sci:"Trichogramma spp.", fr:"Trichogrammes",
  order:"Hymenoptera", family:"Trichogrammatidae",
  crops:["tomato","pepper","grape","pome","datepalm","cereals"],
  organs:["leaf","flower","fruit"],
  symptoms:[],
  stage:"Adult wasps parasitising host eggs",
  tagline:"Minute wasps that kill pests before the larva ever hatches.",
  bio:"Wasps are 0.2–1 mm and parasitise the eggs of Lepidoptera. The parasitised egg turns black. Several species are mass-reared, with host specificity varying by strain. Efficacy depends on release timing and density.",
  damage:"None.",
  favours:"Warm weather, host eggs at the right stage, low insecticide pressure.",
  monitoring:"Collect pest eggs and check for blackening; place sentinel eggs to assess parasitism.",
  threshold:"Augmentative releases of 50,000–150,000 per hectare per generation, depending on the crop and species.",
  severity:1,
  dz:"Naturally present; commercial strains are used in protected crops.",
  ipm:{
    cultural:["Preserve nectar sources and shelter."],
    biological:["Inundative releases at the start of each pest flight; timing is decisive."],
    mechanical:["None."],
    biotech:["Release cards and drones are used in larger programmes."]
  },
  chem:[
    { ai:"—", moa:"—", note:"Highly sensitive to broad-spectrum insecticides; check residue persistence before releasing." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Other microhymenoptera", d:"Requires slide mounting for genus/species identification." }
  ],
  role:"Beneficial parasitoid"
},

{
  id:"phytoseiulus-persimilis", kind:"beneficial",
  name:"Predatory mite", sci:"Phytoseiulus persimilis", fr:"Acarien prédateur",
  order:"Mesostigmata", family:"Phytoseiidae",
  crops:["tomato","cucurbits","pepper","pome","stonefruit"],
  organs:["leaf"],
  symptoms:[],
  stage:"All mobile stages are predatory",
  tagline:"A specialist spider-mite predator that can clear a hotspot in days.",
  bio:"Adults are about 0.5 mm, orange-red, with longer legs than spider mites and no webbing. They feed exclusively on Tetranychus species. Development is faster than that of its prey at warm temperatures, allowing it to overtake an outbreak.",
  damage:"None.",
  favours:"Humidity above 60%, moderate temperatures, spider-mite prey, no acaricide residues.",
  monitoring:"Beat leaf samples over white paper; predatory mites move much faster than pest mites and leave no webbing.",
  threshold:"Release when spider mites are first detected, at roughly 1 predator per 10 prey, or 2–5 per plant in hotspots.",
  severity:1,
  dz:"Naturally present in some orchards; widely released in greenhouses.",
  ipm:{
    cultural:["Maintain humidity; avoid hot dry microclimates."],
    biological:["Curative releases into hotspots; combine with Neoseiulus californicus for preventive control."],
    mechanical:["None."],
    biotech:["None."]
  },
  chem:[
    { ai:"—", moa:"—", note:"Extremely sensitive to acaricides and pyrethroids; check selectivity before any spray." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Neoseiulus californicus", d:"Hardier, survives longer without prey; also predatory." },
    { n:"Tetranychus urticae", d:"Slower, produces webbing, feeds on leaves." }
  ],
  role:"Beneficial predator"
}

);

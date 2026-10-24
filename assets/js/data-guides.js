/* ============================================================
   AgroScope — crop agronomy guides
   ============================================================
   Section 6 material: climate, soil, varieties, planting window,
   density, irrigation, nutrition, harvest, storage, rotation and
   key risks, per crop.

   IMPORTANT
   ---------
   All windows, densities and figures are INDICATIVE starting
   points drawn from common extension practice for Mediterranean
   and North African systems. They vary with region, altitude,
   cultivar, market and water availability. Calibrate against
   local advisory-service data before planning a season.

   No pesticide, dose or registration appears here. Varieties are
   named as TYPES or as widely grown cultivars, not as a
   recommendation for any particular farm.
   ============================================================ */

window.AGRO = window.AGRO || {};

AGRO.cropGuides = {

  /* ---------------------------------------------------------- */

  tomato: {
    id: "tomato",
    climate: "Warm-season crop; growth stalls below about 10 °C and fruit set is impaired by sustained daytime maxima above roughly 32 °C with warm nights. Frost-sensitive at every stage. In the north the field crop occupies spring to early autumn; in the south and under cover the crop is grown through the cool season, which is why the same species has two different calendars.",
    soil: "Deep, well-drained loam or sandy loam with good organic matter. Tolerates a wide pH range but performs best around neutral; strongly acid soils need liming and strongly calcareous soils create micronutrient (iron, manganese) problems. Sensitive to salinity: yield falls as root-zone EC rises, and salinity is a common cause of blossom-end rot and small fruit in the south.",
    varieties: [
      "Determinate bush types for field and short cycles; indeterminate types for trellised and protected crops.",
      "Plum / Roma types for processing and for transport; round beef types for fresh market.",
      "Choose resistance packages against the locally important pathogens — TYLCV (Ty genes), Fusarium races (I-1, I-2, I-3), Verticillium (Ve), and root-knot nematode (Mi) where soil is infested.",
      "Resistance is race- and strain-specific: confirm which races are present in the zone before relying on a gene."
    ],
    planting: {
      window: "North field crop: transplant late winter to mid-spring, harvest summer. South and protected winter cycle: transplant late summer to mid-autumn, harvest through winter to spring. Avoid setting out during the hottest or coldest fortnight.",
      method: "Transplant healthy seedlings produced under insect-proof netting — seedling quality and virus-free transplants decide the season more than any later input.",
      notes: "Harden seedlings before transplanting; plant into moist soil in the cooler part of the day; a short crop-free gap between cycles breaks the pest bridge."
    },
    density: "Indicative: field bush crops around 2–3 plants per square metre; trellised indeterminate crops higher density with vertical support. Spacing must allow air movement — dense canopies drive both fungal disease and blossom-end rot. Adjust to cultivar vigour and to whether harvesting is by hand or machine.",
    irrigation: "Even, frequent irrigation is the single most important control for fruit quality. Fluctuating moisture causes cracking and blossom-end rot. Drip under mulch is the reference method; avoid wetting the foliage. Match the leaching fraction to water quality, and monitor root-zone EC where fertigation is used.",
    nutrition: [
      "Heavy potassium demand during fruit filling; balance with nitrogen rather than pushing either.",
      "Calcium and boron support fruit quality, but calcium-related disorders are usually a water-transport problem, not a soil shortage.",
      "Split nitrogen applications; a single heavy dressing produces soft growth and delays fruit set.",
      "Base the programme on soil and leaf analysis, not on a fixed calendar."
    ],
    harvest: "Pick at the breaker-to-pink stage for transport and at full colour for local sale. Harvest frequently — holding ripe fruit on the plant invites disease and rots. Record the proportion of fruit with disorders (blossom-end rot, sunscald, cracking) at each picking; it is the best early signal of a water or salinity problem.",
    storage: "Cool rapidly after harvest. Tomato is chilling-sensitive: storage well below about 10 °C damages flavour and texture, so short-term holding is warmer than for many vegetables. Do not store with ethylene-producing fruit if ripening control matters.",
    rotation: "Never follow tomato, potato, pepper or aubergine on the same land. A cereal or a non-solanaceous break crop for at least two to three years reduces Fusarium, Verticillium, nematode and bacterial problems. In protected systems, a true crop-free period and structure sanitation substitute for rotation.",
    keyRisks: [
      "Tuta absoluta and whitefly-transmitted TYLCV under cover.",
      "Soilborne Fusarium and Verticillium wilt in repeated cropping.",
      "Blossom-end rot and cracking from irregular water and salinity.",
      "Late blight in cool wet periods; leaf spots under stress."
    ],
    regionNote: "Two production logics coexist: northern field and protected crops, and the southern winter crop of Biskra and El Oued where salinity and heat management dominate. Confirm which calendar applies before using any window."
  },

  /* ---------------------------------------------------------- */

  potato: {
    id: "potato",
    climate: "Cool-season tuber crop. Tuber initiation and bulking are best in moderate temperatures; heat reduces tuber set and pushes dry matter down. Foliage is frost-sensitive. The crop is grown in two or three distinct cycles across the country, which is why planting dates vary more than for almost any other crop.",
    soil: "Deep, friable, well-drained sandy loam is ideal — it allows tuber expansion and clean harvest. Avoid heavy clays and compacted layers. pH is best kept moderately acid; common scab is worse on alkaline soils, so liming should be justified by an actual acidity problem, not by habit.",
    varieties: [
      "Group by maturity: early, mid-season and late, to spread harvest and market risk.",
      "Select for the destination — table, processing or seed — because dry matter and sugar content differ.",
      "For seed crops, virus resistance and low field infection are the deciding criteria.",
      "Use certified seed; farm-saved seed is the main route for virus and tuber-borne disease."
    ],
    planting: {
      window: "Northern spring cycle: plant late winter to early spring, harvest early to mid-summer. Northern autumn cycle: plant late summer to early autumn, harvest late autumn. Southern winter cycle: plant late autumn to mid-winter, harvest spring. Choose the cycle so that bulking avoids the hottest weeks.",
      method: "Plant into a fine, moist seedbed; sprouted or chitted seed emerges faster. Ridge or bed according to soil and irrigation method.",
      notes: "Green-sprouting in store and on the ridge is a quality defect; keep tubers covered."
    },
    density: "Indicative: rows around 70–75 cm with in-row spacing set by seed size and target tuber grade — closer spacing gives smaller, more uniform tubers, wider spacing gives larger ones. Adjust to the market grade and to the cultivar.",
    irrigation: "Keep the root zone moist but never waterlogged; waterlogging is a primary cause of blackleg, soft rot and poor skin set. The critical windows are tuber initiation and bulking. Stop irrigation before maturity to allow skin set. Drip or well-managed sprinkler is preferred to uncontrolled flooding.",
    nutrition: [
      "Nitrogen drives canopy but delays maturity — match it to the cycle length.",
      "Potassium is the major tuber nutrient; the source matters where salinity or chloride sensitivity is a concern.",
      "Phosphorus at planting supports early root and tuber development.",
      "Avoid excessive nitrogen late in the cycle; it produces oversized tubers and poor storage."
    ],
    harvest: "Destroy or desiccate the haulm before harvest to set the skin and protect tubers from late blight and from tuber moth at the soil surface. Harvest in dry conditions, minimise skinning and wounds, and never leave tubers exposed overnight. Cull piles and volunteers must be destroyed — they carry blight and tuber moth between cycles.",
    storage: "Cure tubers to heal skin wounds, then store cool, dark, well-ventilated and free of condensation. Seed and table stocks are held at different temperatures; never mix lots or store field-run tubers with seed. Tuber moth, blight rot and sprouting are the three storage failures to inspect for monthly.",
    rotation: "Three years or more away from potato, tomato and other solanaceae. Cereals and legumes are useful break crops. Rotation reduces soilborne disease, nematodes and volunteer carry-over more than any single in-crop measure.",
    keyRisks: [
      "Late blight in cool wet weather — the fastest-moving epidemic in the rotation.",
      "Aphid-borne viruses, especially in seed crops.",
      "Colorado potato beetle in the north and centre.",
      "Tuber moth in warm production areas and in store."
    ],
    regionNote: "Northern spring and autumn cycles and the southern winter cycle have different pest and blight profiles. Blight risk is rainfall- and leaf-wetness-driven in the north; heat and tuber moth dominate in the south."
  },

  /* ---------------------------------------------------------- */

  pepper: {
    id: "pepper",
    climate: "Warm-season crop, more heat-tolerant than tomato but sensitive to cold at establishment. Fruit set is poor under temperature extremes. Under cover it is grown year-round in the south. Frost-sensitive.",
    soil: "Well-drained loam with good organic matter; moderately acid to neutral is preferred. Sensitive to salinity and to waterlogging, both of which cause fruit disorders and stunting. Avoid heavy soils that stay wet.",
    varieties: [
      "Blocky sweet types and long horn/chilli types are managed differently for market and for harvest labour.",
      "Under cover, the decisive trait is resistance to tospoviruses (the Tsw gene where strains allow) because thrips-transmitted TSWV can end the crop.",
      "Consider fruit wall thickness, colour and heat tolerance for the destination market.",
      "Confirm which virus strains and races are present locally before relying on a resistance gene."
    ],
    planting: {
      window: "Protected and southern crops are transplanted across a broad window through the cool season; northern field crops are transplanted in spring after the last frost risk. Flowering should avoid the hottest weeks.",
      method: "Transplant vigorous seedlings; a well-developed root ball shortens the establishment check.",
      notes: "Screen structure openings with fine mesh where thrips and tospoviruses are a threat."
    },
    density: "Indicative: similar order to tomato, adjusted to cultivar height and to whether plants are staked. Adequate spacing improves airflow and reduces the humidity that favours Botrytis and fruit rots.",
    irrigation: "Even moisture is essential; drought stress followed by heavy irrigation causes fruit cracking and blossom-end rot. Drip is the reference method. Monitor root-zone salinity under fertigation, as pepper is among the more salt-sensitive vegetables.",
    nutrition: [
      "Balanced nitrogen through the cycle; excessive nitrogen produces foliage at the expense of fruit.",
      "Calcium and magnesium support fruit quality and canopy health.",
      "Potassium rises in demand during fruit set and filling.",
      "Use leaf and soil analysis to steer the programme."
    ],
    harvest: "Harvest at the colour the market requires — green, coloured or dried. Pick regularly; leaving mature fruit on the plant reduces further set. Handle carefully to avoid wounding, which opens the way to fruit rot.",
    storage: "Pepper is chilling-sensitive and loses quality below about 7–8 °C; hold cool and humid for short periods only. Avoid storage with strong ethylene producers.",
    rotation: "Three years away from solanaceae. A cereal or legume break reduces soilborne wilt and nematode pressure. Under cover, sanitation and a crop-free gap matter as much as rotation.",
    keyRisks: [
      "Thrips and thrips-transmitted TSWV under cover.",
      "Blossom-end rot and cracking from irregular water and salinity.",
      "Soilborne wilt in repeated cropping.",
      "Fruit rots in humid canopies."
    ],
    regionNote: "A protected-crop mainstay in Biskra and El Oued and a field crop in the north. Virus pressure and salinity, not the calendar, are the defining constraints."
  },

  /* ---------------------------------------------------------- */

  cucurbits: {
    id: "cucurbits",
    climate: "Warm-season group (melon, watermelon, cucumber, squash, zucchini). Frost-sensitive; growth and fruit set require warmth. High humidity under cover favours the two mildews that dominate the spray calendar.",
    soil: "Deep, well-drained sandy loam, rich in organic matter, warm at planting. Neutral to slightly alkaline is tolerated; waterlogging is poorly tolerated and drives root and collar rots. Melon and watermelon benefit from warm, light soils.",
    varieties: [
      "Group by species and by market: melon types (cantaloupe, galia, charentais), watermelon, cucumber (slicing, pickling), and summer/winter squash.",
      "Choose mildew-tolerant types where downy and powdery mildew are the limiting diseases.",
      "Consider fruit size, rind firmness and shelf life for transport.",
      "Where virus pressure is high, favour tolerant types and manage the aphid and whitefly vectors."
    ],
    planting: {
      window: "Transplant or sow after the last frost risk; under cover and in the south, planting can be shifted earlier or to the cool season. Avoid flowering in the hottest weeks for melon and cucumber.",
      method: "Direct sowing or transplanting of seedlings; plastic mulch warms the soil and advances the crop.",
      notes: "Row orientation and spacing should allow rapid drying of the canopy."
    },
    density: "Indicative: determined by species and training system — from dense bush cucumber to widely spaced watermelon. Bush types are spaced closer; vining types are spaced further apart and often trained. Match density to the support and trellis system.",
    irrigation: "Drip under mulch is the reference method; it keeps foliage dry and reduces downy mildew pressure. Avoid evening overhead irrigation. Melon benefits from reduced irrigation late in ripening for sugar accumulation, but not to the point of wilting.",
    nutrition: [
      "Moderate nitrogen with adequate potassium for fruit quality.",
      "Avoid excessive nitrogen, which produces leaf at the expense of fruit and increases disease.",
      "Calcium and boron support fruit set and rind quality.",
      "Base the programme on soil analysis and on the crop's short, intensive cycle."
    ],
    harvest: "Harvest at the stage the market requires; melon ripeness is judged by the abscission ring, colour and aroma. Cucumber and zucchini are picked young and frequently. Handle to avoid bruising and rind damage.",
    storage: "Cool and humid for short-term holding; melon and watermelon tolerate warmer holding than leafy crops but are damaged by chilling. Store away from ethylene-sensitive produce.",
    rotation: "Two to three years away from other cucurbits reduces soilborne and residue-borne disease. Cereals and legumes are useful breaks. In protected crops, remove and destroy debris between cycles — it is the bridge for both mildews and for viruses.",
    keyRisks: [
      "Downy and powdery mildew — both strongly resistance-prone.",
      "Aphid and whitefly-transmitted viruses.",
      "Root and collar rots in waterlogged soils.",
      "Soilborne Fusarium wilt in melon on repeated land."
    ],
    regionNote: "A major protected and field group in Biskra, Mostaganem, Mascara and Skikda. Mildew management, not planting date, usually decides the season."
  },

  /* ---------------------------------------------------------- */

  onion: {
    id: "onion",
    climate: "Cool-season bulb crop. Leaf growth is favoured by moderate temperatures; bulbing is triggered by day length and temperature, and maturity by heat and drying. Frost can damage young plants but garlic and some onions tolerate light cold. Storage life is decided by the last weeks of growth and by curing.",
    soil: "Well-drained loam, free of clods and stones, with good structure. Onion is shallow-rooted and cannot compensate for poor soil. Slightly acid to neutral is preferred; sulphur nutrition influences pungency. Avoid heavy, wet soils and land with a history of white rot.",
    varieties: [
      "Match day-length class to latitude — long-day types for northern latitudes, short-day for southern; the wrong class bulks poorly or bolts.",
      "Colour and shape follow the market (red, yellow, white).",
      "Choose storage types for long keeping and fresh types for early market.",
      "Garlic is clove-propagated: source certified, virus-free planting stock."
    ],
    planting: {
      window: "Autumn or spring planting depending on region and type; garlic is typically autumn-planted in the north and spring-planted where winters are severe. Direct seeding or sets; sets shorten the cycle but cost more.",
      method: "Sow shallow into a fine, firm, moist seedbed; sets are pushed in so the tip is just covered.",
      notes: "Avoid planting into land with recent Allium history."
    },
    density: "Indicative: rows close enough to shade the soil and suppress weeds, with in-row spacing set by the target bulb size — closer spacing gives smaller bulbs. Garlic is spaced on a wider grid than seed onion. Adjust to the market grade.",
    irrigation: "Steady moisture during leaf growth and bulbing, then reduce and stop before maturity so the necks dry and the bulbs store. Onion is sensitive to waterlogging. Drip or furrow is preferred to overhead, which spreads downy mildew. Morning irrigation allows the foliage to dry.",
    nutrition: [
      "Moderate nitrogen early, tapering off as bulbs swell — late nitrogen produces thick necks that store badly.",
      "Phosphorus and potassium support root and bulb development.",
      "Sulphur influences flavour and, with nitrogen, overall quality.",
      "Avoid excessive nitrogen, which delays maturity and reduces storage life."
    ],
    harvest: "Harvest when tops fall over and necks soften; lift carefully to avoid bruising, which is a storage-rot entry point. Cure thoroughly in the field or under cover until necks are dry and skins are tight before storage. Garlic is harvested when the lower leaves dry.",
    storage: "Cool, dry, dark and well ventilated. Onion stores by drying, so curing is the decisive step. Inspect monthly for neck rot, sprouting and root growth. Never store damaged or thick-necked bulbs with sound stock.",
    rotation: "Three years or more away from onion, garlic and other Allium crops. White rot and downy mildew both persist in soil and debris, so rotation is a primary control, not an optional one.",
    keyRisks: [
      "Thrips in hot dry weather.",
      "Downy mildew in cool wet weather.",
      "Neck rot and storage rots after poor curing.",
      "White rot and soilborne disease on Allium land."
    ],
    regionNote: "Grown in the north (Mascara, Tiaret, Saïda) and in the south and east. Day-length class and curing quality are the two decisive variables."
  },

  /* ---------------------------------------------------------- */

  citrus: {
    id: "citrus",
    climate: "Subtropical evergreen; frost-sensitive, especially young trees and fruit. Requires mild winters and warm summers. Fruit quality is highest where there is a cool winter and a warm ripening period. Coastal humidity favours fungal disease; dry heat favours mites and scales.",
    soil: "Deep, well-drained soil with good water-holding capacity. Citrus tolerates a range of pH but iron and manganese deficiency appear on calcareous soils, and Phytophthora collar rot appears on heavy or poorly drained soils. Salinity and high-bicarbonate irrigation water are major constraints.",
    varieties: [
      "Group by fruit type: orange (navel, Valencia), mandarin/clementine, lemon, grapefruit and others, each with a different ripening window.",
      "Rootstock choice is the single most important long-term decision: it governs tolerance to calcareous soil, to salinity, to Phytophthora and, where relevant, to citrus tristeza virus.",
      "Sour orange is a classic rootstock but is tristeza-sensitive; alternatives are used where the virus is present.",
      "Match variety to market window so that harvest does not all fall in one fortnight."
    ],
    planting: {
      window: "Plant at the start of the growth period in spring, or in early autumn where irrigation is assured. Avoid planting in the coldest or hottest weeks.",
      method: "Plant with the bud union well above soil level and keep it above the soil line for the life of the tree — a buried bud union is a classic route to collar rot.",
      notes: "Use certified, virus-tested nursery stock; citrus viruses and viroids are moved with planting material."
    },
    density: "Indicative: traditional orchards are widely spaced; modern intensive plantings use closer spacing with size-controlling rootstocks. Spacing sets light interception and airflow, which affect both yield and disease.",
    irrigation: "Regular irrigation is essential in the dry season; avoid wetting the trunk and the collar. Drip or micro-sprinkler with a managed leaching fraction limits salinity accumulation. Water quality — salinity, chloride and boron — must be analysed before planting, because citrus is salt-sensitive.",
    nutrition: [
      "Nitrogen drives growth and fruit set; split it across the season.",
      "Potassium improves fruit size and quality; keep it in balance with magnesium, which citrus often lacks.",
      "Iron chelates are needed on calcareous soils, where the issue is availability, not soil content.",
      "Zinc, manganese and boron deficiencies are common and are confirmed by leaf analysis."
    ],
    harvest: "Harvest by colour and internal quality standard for the market; citrus holds well on the tree, which spreads the harvest. Clip rather than pull fruit to avoid tearing the button, which causes rot. Handle with care — rind injuries are storage entry points.",
    storage: "Cool, humid storage extends life; avoid chilling injury in chilling-sensitive types. Degreening and postharvest treatments are regulated operations and must follow the national authorisation.",
    rotation: "Orchards are permanent, so rotation is replaced by careful site and rootstock selection. Between replanting, allow a fallow or a break crop and address soilborne disease and nematodes before replanting.",
    keyRisks: [
      "Mediterranean fruit fly at ripening — a quarantine concern for export.",
      "California red scale and other scales, especially where parasitoids are disrupted.",
      "Phytophthora collar and root rot on heavy, wet soils.",
      "Quarantine diseases (tristeza, greening/HLB) — reportable, not farm-treatable."
    ],
    regionNote: "The Mitidja, Blida, Boufarik and the eastern coastal belt. Rootstock selection for calcareous soils and irrigation-water quality is the foundation of the orchard."
  },

  /* ---------------------------------------------------------- */

  olive: {
    id: "olive",
    climate: "Evergreen Mediterranean tree; tolerant of heat, drought and poor soil, and moderately frost-tolerant. Requires a period of cool winter for normal flowering, and a warm dry summer for fruit and oil quality. Autumn rain during ripening is the main driver of anthracnose and oil-quality loss.",
    soil: "Extremely adaptable; tolerates shallow, stony and calcareous soils. Dislikes waterlogging and poor drainage, which favour Verticillium and root rot. Calcareous soils are tolerated but can induce iron chlorosis on sensitive cultivars. Salinity is tolerated better than by most fruit trees.",
    varieties: [
      "Separate oil cultivars from table cultivars — the destination decides the variety.",
      "Widely grown Algerian cultivars include Chemlal (oil, Kabylie), Sigoise (table, western Algeria) and Azeradj, among others; confirm the local recommendation.",
      "Alternate bearing is strong in some cultivars; pruning and nutrition moderate it but do not remove it.",
      "Choose cultivars for oil profile or fruit size according to the market."
    ],
    planting: {
      window: "Plant in early spring or autumn when the soil is moist and the weather mild; avoid the hottest and coldest periods.",
      method: "Use well-rooted nursery trees; keep the grafting point clear of soil.",
      notes: "Traditional groves are widely spaced; intensive plantings are closer and require irrigation and pruning discipline."
    },
    density: "Indicative: traditional rainfed groves are widely spaced (commonly 5–6 m or more each way); intensive and super-high-density systems are much closer and depend on irrigation, training and regular mechanical pruning. Match density to water availability and to whether harvest is manual or mechanical.",
    irrigation: "Traditionally rainfed, but supplemental irrigation from fruit set to oil accumulation markedly improves yield and oil content where water is available. Avoid waterlogging; olive tolerates drought better than excess water. Deficit irrigation strategies are used where water is scarce.",
    nutrition: [
      "Nitrogen supports shoot growth and fruit set; apply in the active season.",
      "Potassium is important for fruit and oil; old groves are often low.",
      "Boron deficiency causes fruit deformation and poor set and is confirmed by analysis.",
      "Iron chlorosis on calcareous soils is a soil-chemistry problem, not a shortage of soil iron."
    ],
    harvest: "Harvest timing balances oil quantity and quality: early harvest gives greener, more polyphenol-rich oil with lower yield; late harvest gives more oil but higher acidity and greater fly and anthracnose damage. For table olives, harvest at the stage the market requires. Harvest promptly and completely, and never leave fruit on the tree — it carries the fly and the fungi into the next season.",
    storage: "Olive fruit must be processed quickly after harvest; oil quality falls with every day and every degree of storage temperature. Table olives are handled and brined to the market specification.",
    rotation: "A permanent crop. Between replanting, allow a fallow and manage Verticillium and nematodes, as the pathogen survives in soil for many years.",
    keyRisks: [
      "Olive fruit fly — the determinant of oil quality.",
      "Olive moth, with its three distinct generations.",
      "Olive anthracnose in wet autumns.",
      "Peacock spot and, on infested land, Verticillium wilt."
    ],
    regionNote: "Kabylie, Sétif, Mascara, Bouira and Tlemcen. Autumn rainfall and harvest timing, more than any input, decide the oil."
  },

  /* ---------------------------------------------------------- */

  datepalm: {
    id: "datepalm",
    climate: "Arid and Saharan oasis crop; requires long, hot, dry summers for fruit ripening and tolerates extreme heat. Frost-sensitive when young and during flowering. Very high light and low humidity at ripening give the best fruit quality. Irrigation is essential despite the arid setting.",
    soil: "Tolerates sandy and even moderately saline soils, but performs best on deep, well-drained soils with a reliable water table or irrigation. Salinity and boron in irrigation water are common constraints and must be analysed. Poor drainage causes root disease.",
    varieties: [
      "Deglet Nour is the premium Algerian cultivar (Biskra/Tolga), late-ripening and demanding of heat and management.",
      "Ghars and Tantboucht are widely grown in El Oued; many local cultivars exist and are adapted to specific oases.",
      "Cultivar choice must match the oasis climate — ripening requirements differ sharply between cultivars.",
      "Resistance to Bayoud is cultivar-dependent and is the primary reason for planting decisions in affected zones."
    ],
    planting: {
      window: "Plant offshoots at the start of the warm season so they root before winter; avoid the coldest months.",
      method: "Propagate from offshoots (suckers) of known, healthy mother palms. Offshoots are the main route for moving Bayoud and red palm weevil — never move them without certification and authorisation.",
      notes: "Spacing and palm height must allow light to reach the understory crops in traditional oasis systems."
    },
    density: "Indicative: traditional oasis planting is widely spaced (commonly around 8–10 m) to allow light penetration for intercropping; denser plantings exist where management allows. Spacing affects humidity, weevil risk and understory cropping.",
    irrigation: "Irrigation is essential; traditional flood and modern drip systems are both used. Water quality (salinity, boron) matters as much as quantity. Avoid waterlogging and keep water off the crown where possible. Maintain a leaching fraction where salinity is a concern.",
    nutrition: [
      "Nitrogen and potassium support yield and fruit quality.",
      "Boron is important but the margin between deficiency and toxicity is narrow — analyse the water and the soil first.",
      "Base the programme on leaf and soil analysis, and on the age of the palm.",
      "Avoid unbalanced applications that concentrate salts in the root zone."
    ],
    harvest: "Harvest at the stage the market requires — khalal, rutab or tamar (ripe). Timing is cultivar-specific and decisive for quality. Handle clusters and fruit carefully; fruit damage opens the way to carob moth and rot. Do not leave ripe fruit on the palms.",
    storage: "Clean, dry, insect-proof storage is essential; the carob moth is the main storage pest. Cool storage below about 10 °C where feasible, hermetic packaging, and thorough cleaning between seasons. Fumigation is a licensed operation only.",
    rotation: "A permanent crop with intercropping in oasis systems. Between replanting, do not reuse pits where Bayoud is present, and manage irrigation water to prevent spread.",
    keyRisks: [
      "Red palm weevil — lethal and a national priority; report suspects immediately.",
      "Bayoud (Fusarium wilt) — incurable; resistant cultivars and movement control are the only defences.",
      "Carob moth in the grove and in store.",
      "Date palm mite (boufaroua) and salinity in oasis systems."
    ],
    regionNote: "Biskra, El Oued, Ouargla, Adrar and Ghardaïa. Movement control of offshoots and early detection of weevil and Bayoud outrank every other decision."
  },

  /* ---------------------------------------------------------- */

  grape: {
    id: "grape",
    climate: "Warm-season deciduous vine; needs a mild to warm growing season and a cool winter dormancy. Frost during bud break is damaging. Rainfall during flowering and ripening drives downy mildew, Botrytis and quality loss; dry warm conditions favour powdery mildew. In Algeria the crop is grown for table grapes, raisins and wine.",
    soil: "Deep, well-drained soils; the vine tolerates poor and calcareous soils but dislikes waterlogging and high salinity. Calcareous soils can induce iron chlorosis. Soil depth and water-holding capacity set the irrigation requirement.",
    varieties: [
      "Separate table, raisin and wine cultivars — management, pruning and harvest differ fundamentally.",
      "Table grapes prioritise berry size, appearance and shelf life; wine grapes prioritise sugar, acid and flavour profile.",
      "Rootstock choice governs tolerance to calcareous soil, salinity and phylloxera where it occurs.",
      "Match cultivar to the ripening window and the destination market."
    ],
    planting: {
      window: "Plant dormant vines in late winter to early spring, before bud break.",
      method: "Use certified, virus-indexed planting material; grapevine leafroll and other viruses move with cuttings.",
      notes: "Training and trellis system is decided at planting and governs canopy management for the life of the vineyard."
    },
    density: "Indicative: spacing depends on vigour, training system, mechanisation and whether table or wine. Wider spacing in vigorous, rainfed vineyards; closer spacing in controlled, irrigated or mechanised systems. Row orientation should optimise light and airflow.",
    irrigation: "Supplemental irrigation is important in dry Mediterranean summers. Regulated deficit irrigation is used in wine grapes to concentrate quality, but water stress must be managed, not accidental. Keep water off the canopy to reduce downy mildew and Botrytis.",
    nutrition: [
      "Nitrogen supports canopy but excess reduces fruit quality and increases Botrytis.",
      "Potassium supports ripening and must be balanced with magnesium.",
      "Iron chlorosis on calcareous soils needs chelates and, above all, correct rootstock.",
      "Base the programme on leaf analysis at flowering and on soil analysis."
    ],
    harvest: "Harvest table grapes at the sugar–acid balance and appearance the market requires; wine grapes at the target maturity. Handle bunches with care to avoid wounding, which invites Botrytis. Harvest in dry conditions and cool the fruit promptly.",
    storage: "Table grapes are highly perishable and benefit from rapid cooling; Botrytis and dehydration are the main losses. Sulphur dioxide pads are used in some markets under strict regulation. Wine grapes are processed immediately.",
    rotation: "A permanent crop. Between replanting, allow a fallow and manage soilborne disease and nematodes; do not replant into vine-sick soil without addressing the cause.",
    keyRisks: [
      "Downy and powdery mildew — both resistance-prone and both calendar-defining.",
      "Botrytis in compact bunches and humid conditions.",
      "Grapevine moths (Lobesia, Eupoecilia) and the berry damage they open up.",
      "Iron chlorosis on calcareous soils; virus from planting material."
    ],
    regionNote: "Table grapes around Mostaganem and wine and table grapes in Mascara, Tlemcen and Bouira. Rainfall pattern and mildew risk vary sharply between seasons."
  },

  /* ---------------------------------------------------------- */

  pome: {
    id: "pome",
    climate: "Temperate deciduous fruit (apple, pear); requires winter chilling for normal bud break and a cool to warm growing season. Late spring frost at bloom is a major risk in the high plains. Hot dry summers favour mites; wet springs favour scab.",
    soil: "Deep, well-drained loam; apples tolerate a range of soils but dislike waterlogging and heavy clay. pH near neutral is preferred. Calcareous soils can induce iron chlorosis on susceptible rootstocks.",
    varieties: [
      "Choose cultivars for the market (fresh, processing) and for their chilling requirement relative to the local winter.",
      "Rootstock choice controls tree size, precocity and tolerance to soil and disease — a foundational decision.",
      "Scab-resistant cultivars reduce the spray burden but do not remove the need to monitor other diseases.",
      "Where fire blight is a risk, favour less susceptible cultivars and avoid excessive vigour."
    ],
    planting: {
      window: "Plant dormant trees in late winter to early spring, or in autumn where winters are mild.",
      method: "Use certified, virus-free nursery stock with the rootstock and cultivar clearly identified.",
      notes: "Plant with the graft union above soil level; keep the collar clear."
    },
    density: "Indicative: traditional orchards are widely spaced on vigorous rootstocks; modern plantings are much denser on dwarfing rootstocks and require support, pruning and irrigation discipline. Match density to rootstock, support system and labour.",
    irrigation: "Irrigation improves fruit size and consistency in dry summers. Drip is preferred; avoid wetting the canopy, which spreads scab and fire blight. Water stress during fruit sizing reduces size irreversibly.",
    nutrition: [
      "Nitrogen supports growth and fruit size; excess produces soft growth and fire blight susceptibility.",
      "Potassium and calcium influence fruit quality and storage disorders.",
      "Base the programme on leaf and soil analysis; storage disorders such as bitter pit are often calcium- and balance-related.",
      "Avoid late nitrogen, which delays maturity and reduces storage life."
    ],
    harvest: "Harvest at the maturity the market and storage duration require — judged by starch index, firmness and background colour, not by calendar alone. Handle fruit with care; bruises are storage entry points. Cool rapidly after harvest.",
    storage: "Controlled-atmosphere storage extends life for many cultivars. Match storage conditions to cultivar and to intended holding time. Inspect stored fruit for rot and for pest emergence monthly. Do not store different maturities or cultivars together.",
    rotation: "A permanent crop. Replant disease is a real risk on old orchard sites; allow a break crop and address soilborne pathogens and nematodes before replanting.",
    keyRisks: [
      "Codling moth — timing is a degree-day problem.",
      "Apple scab — a leaf-wetness problem in wet springs.",
      "Fire blight — a regulatory emergency; report, do not manage alone.",
      "Mites and scales, especially where natural enemies are disrupted."
    ],
    regionNote: "Batna, Khenchela, Sétif and Bouira. Spring frost at bloom and wet-spring scab are the recurring risks in the high plains."
  },

  /* ---------------------------------------------------------- */

  stonefruit: {
    id: "stonefruit",
    climate: "Temperate deciduous fruit (peach, nectarine, apricot, plum, almond, cherry); most require winter chilling, with apricot and almond among the lower-chill types. Spring frost at bloom is a major risk. Warm dry summers favour mites and fruit flies.",
    soil: "Deep, well-drained soils; stone fruits are sensitive to waterlogging and to root asphyxia, more so than apple. Sandy loam with good drainage is ideal. Alkaline and calcareous soils are tolerated by some species and rootstocks but can cause iron chlorosis.",
    varieties: [
      "Choose cultivars whose chilling requirement matches the local winter, and whose ripening window spreads the harvest.",
      "Separate fresh-market from processing cultivars.",
      "Rootstock choice governs size, soil adaptation and nematode tolerance.",
      "For almonds and some plums, ensure pollination compatibility and suitable pollinisers."
    ],
    planting: {
      window: "Plant dormant trees in late winter to early spring, avoiding frost.",
      method: "Use certified, virus-free nursery stock.",
      notes: "Plant with the graft union above soil level; ensure good drainage to protect against Phytophthora collar rot."
    },
    density: "Indicative: depends on species, rootstock and training system — from traditional wide spacing to modern high-density supported plantings. Match density to rootstock vigour and to the intended canopy management.",
    irrigation: "Irrigation is essential for fruit sizing in the dry Mediterranean summer. Drip with mulching reduces water use and keeps the collar dry. Avoid waterlogging, which causes root and collar disease. Regulated deficit irrigation is used in some species to control vegetative growth and improve quality.",
    nutrition: [
      "Nitrogen supports growth and fruit size; avoid excess, which increases susceptibility to disease.",
      "Potassium improves fruit quality; calcium relates to fruit firmness and storage.",
      "Iron chlorosis on calcareous soils is a soil-chemistry problem.",
      "Base the programme on leaf analysis at a defined stage."
    ],
    harvest: "Harvest at the maturity the market requires, judged by firmness, colour, sugar and the intended holding time. Pick with the stem where the market requires it. Handle gently; bruises are rot entry points. Cool promptly.",
    storage: "Cool and humid for short to medium holding; stone fruit is perishable. Chilling injury differs by species. Inspect for brown rot and for pest emergence.",
    rotation: "A permanent crop. Replanting old stone-fruit sites carries a replant-disease risk; use a break crop and address soilborne problems and nematodes before replanting.",
    keyRisks: [
      "Mediterranean fruit fly at ripening.",
      "Oriental fruit moth and other borers.",
      "Brown rot and, in wet springs, blossom blight.",
      "Sharka (plum pox) and other viruses from planting material."
    ],
    regionNote: "Batna, Mascara, Tlemcen and Bouira. Frost at bloom, fly pressure at ripening and irrigation-water quality set the season."
  },

  /* ---------------------------------------------------------- */

  cereals: {
    id: "cereals",
    climate: "Cool-season annuals (durum and bread wheat, barley, and oats); growth is driven by winter rainfall and spring temperature. Grain filling is shortened by late heat and terminal drought, which is the defining constraint of rainfed Mediterranean cereal production. Rainfed yields depend on stored soil water and on the rainfall distribution, not only on the total.",
    soil: "Deep soils with good water-holding capacity are the foundation of rainfed yield. Barley tolerates poorer, shallower and more saline soils than wheat. pH is best near neutral to slightly alkaline; strong acidity requires liming.",
    varieties: [
      "Choose cultivars for yield stability under drought and for the diseases that matter locally — rusts, Septoria, and in some zones barley yellow dwarf.",
      "Match maturity to the rainfall pattern: early maturity escapes terminal drought but can be caught by late frost.",
      "Diversify cultivars across the farm to spread disease and frost risk.",
      "Use certified seed and appropriate seed treatment where a specific soilborne or seedling disease risk is confirmed."
    ],
    planting: {
      window: "Sow in autumn with the onset of reliable rainfall (broadly November to December in the northern zones); late sowing shortens the growing season and reduces yield. Spring sowing is a fallback where autumn sowing is missed or where frost risk demands it.",
      method: "Sow into a firm, moist seedbed at a seeding rate matched to sowing date and to the target plant population; late sowings need a higher rate to compensate for reduced tillering.",
      notes: "Stubble and residue management affects both stored water and the carry-over of Septoria and other residue-borne pathogens."
    },
    density: "Indicative: target a plant population that allows about two to three fertile tillers per plant in a normal season; increase the seeding rate for late sowings and for varieties with low tillering. Calibrate the drill and check establishment counts.",
    irrigation: "Predominantly rainfed; supplemental irrigation where water is available is most valuable at stem elongation to heading and at grain filling. Over-irrigation is uneconomic and can increase lodging and disease.",
    nutrition: [
      "Nitrogen is the main yield driver; split it between sowing and tillering/stem elongation to match rainfall.",
      "Phosphorus at sowing supports root development, especially in cold, wet soils.",
      "Balance nitrogen to avoid lodging and to limit disease, especially in high-rainfall years.",
      "Base rates on a nitrogen budget and on soil analysis, not on a fixed figure."
    ],
    harvest: "Harvest at the moisture the market and storage require; too early gives high moisture and storage risk, too late gives shattering loss. Check for Sunn pest grain damage at maturity. Dry grain thoroughly before storage.",
    storage: "Store dry, cool and insect-free. Moisture above the safe limit for the crop drives mould and mycotoxins. Weevils and grain borers are the main insect risks; monitor temperature and moisture and use aeration and, where necessary, licensed fumigation.",
    rotation: "Rotate cereals with legumes and break crops to interrupt residue-borne disease, improve soil nitrogen and diversify weed control. Continuous cereal cropping increases Septoria, take-all and grass-weed pressure.",
    keyRisks: [
      "Rusts and Septoria, weather-driven and resistance-prone.",
      "Sunn pest in the eastern high plains.",
      "Terminal drought and late heat during grain filling.",
      "Herbicide-resistant grass weeds such as rigid ryegrass."
    ],
    regionNote: "The high plains of Sétif, Tiaret, Constantine, Batna and Guelma. The rainfall distribution, not the annual total, is the best predictor of the season."
  },

  /* ---------------------------------------------------------- */

  fababean: {
    id: "fababean",
    climate: "Cool-season legumes (faba bean, chickpea); winter sowing makes use of rainfall and gives the highest yields where frost risk allows. Chickpea is generally more drought- and heat-tolerant than faba bean but more susceptible to some diseases. Frost at flowering reduces pod set.",
    soil: "Deep, well-drained soils; legumes fix nitrogen and benefit from adequate phosphorus, potassium and, for faba bean, lime on acid soils. Chickpea tolerates lighter, poorer soils. Avoid waterlogging, which favours root disease and reduces nitrogen fixation.",
    varieties: [
      "Choose cultivars for disease resistance — chocolate spot and rust in faba bean, Ascochyta in chickpea — and for maturity that fits the rainfall.",
      "Separate large-seeded (food) from small-seeded types; chickpea separates desi from kabuli types.",
      "Inoculate seed with the appropriate rhizobium where the crop has not been grown recently, to ensure nodulation.",
      "Match the cultivar to the sowing date and to the frost risk at flowering."
    ],
    planting: {
      window: "Winter sowing in late autumn to early winter is preferred where frost and waterlogging risk allow; spring sowing is a fallback where winter cold is severe. Sowing date strongly affects both yield and disease escape.",
      method: "Sow into a firm seedbed; ensure rhizobium inoculation is done correctly and that seed-applied products are compatible with the inoculant.",
      notes: "Avoid sowing into land with recent legume history, to reduce soilborne disease."
    },
    density: "Indicative: faba bean is sown at a lower plant density than cereals because it branches strongly; chickpea is denser and more upright. Adjust for seed size and target stand, and calibrate the drill.",
    irrigation: "Largely rainfed; supplemental irrigation at flowering and pod fill improves yield and seed size where water is available. Avoid waterlogging, which is more damaging to legumes than to cereals.",
    nutrition: [
      "Phosphorus and potassium support nodulation and pod fill.",
      "Faba bean benefits from lime on acid soils; chickpea is less tolerant of acidity.",
      "Avoid excessive nitrogen, which suppresses nitrogen fixation.",
      "Inoculation supplies the nitrogen-fixing symbiont; it is not a substitute for adequate P and K."
    ],
    harvest: "Harvest when pods are mature and the crop is dry enough to thresh, but before shattering. Chickpea is harvested promptly to avoid pod loss. Faba bean is often harvested in two stages where the crop is uneven. Dry seed thoroughly before storage.",
    storage: "Store dry and insect-free; bruchid beetles are the main storage pest of faba bean and chickpea and are controlled by hygiene, cooling, hermetic storage or licensed fumigation. Seed destined for planting must retain germination.",
    rotation: "Legumes are the classic break crop: they fix nitrogen and interrupt cereal disease and grass-weed cycles. Do not follow another legume, to limit soilborne disease and nematodes.",
    keyRisks: [
      "Chocolate spot and rust in faba bean; Ascochyta in chickpea.",
      "Aphid-borne viruses, including in seed crops.",
      "Bruchid beetles in storage.",
      "Frost at flowering and waterlogging in wet winters."
    ],
    regionNote: "Sétif, Constantine, Guelma and Tlemcen. As a break crop in the cereal rotation, disease management and correct inoculation are the priorities."
  },

  /* ---------------------------------------------------------- */

  stored: {
    id: "stored",
    climate: "Storage is a controlled environment, not a climate: temperature and moisture decide the outcome. Grain and produce are living or hygroscopic, so moisture migrates within the bulk and temperature gradients drive convection and condensation. Cool, dry and stable is the goal.",
    soil: "Not applicable. The equivalent is the store structure: sound, dry, insect-proof, cleanable, and free of residues and cracks that harbour insects and mould.",
    varieties: [
      "Not applicable in the field sense; what matters is the condition of the produce on intake — moisture content, damage level, foreign matter and temperature.",
      "Different products and different end-uses have different safe storage moisture and temperature limits; use the values from the national standard or the buyer specification.",
      "Never mix lots of different moisture or origin; one wet lot spoils a silo."
    ],
    planting: {
      window: "Not applicable. The 'window' is the postharvest sequence: harvest at correct maturity and moisture, dry promptly, cool, clean and fill the store, then monitor.",
      method: "Clean and disinfest the store and handling equipment before filling; never carry old grain or residues into the new season.",
      notes: "Seal, hermetically store or control the atmosphere where the technology is available and appropriate."
    },
    density: "Not applicable. What matters is fill pattern and aeration: do not over-fill against vents, and ensure the aeration system can move air uniformly through the bulk.",
    irrigation: "Not applicable. The equivalent control is moisture: dry grain to the safe moisture for the crop and hold it there. Moisture migration from a warm to a cold zone causes condensation and localised mould.",
    nutrition: [
      "Not applicable. The relevant 'nutrition' is the management of gas composition in hermetic or controlled-atmosphere storage.",
      "Carbon dioxide or nitrogen atmospheres suppress insects and mould when correctly applied and monitored.",
      "Diatomaceous earth and other inert dusts work in dry conditions and are low-hazard.",
      "No chemical is a substitute for dry, cool, clean produce."
    ],
    harvest: "The foundation of good storage is good harvest: harvest at the right maturity and moisture, avoid mechanical damage, remove foreign matter and broken grain, and dry promptly and evenly.",
    storage: "Monitor temperature and moisture at several points in the bulk, weekly at first and then less often if stable. Watch for hot spots, condensation, insect activity, dust and off-odours. Cool the bulk with aeration where the ambient conditions allow. Inspect monthly for the main insect pests of the product.",
    rotation: "Not applicable in the agronomic sense. The equivalent is strict separation of lots and thorough cleaning between fillings, plus rotation of stock so that old material is used first.",
    keyRisks: [
      "Moisture migration, condensation and mould, including mycotoxin-forming species.",
      "Weevils, grain borers and moths, with phosphine resistance a growing problem.",
      "Mites and mould-feeding insects in damp, warm pockets.",
      "Rodents and birds where the structure is not sealed."
    ],
    regionNote: "Farm stores, cooperatives and silos nationwide. The decisive variables are moisture at intake and temperature control, not the product applied."
  }
};

/* ============================================================
   AgroScope — abiotic and nutritional disorder library
   These entries exist because a ranked list that contains only
   pests and pathogens is a misleading list: in practice a large
   share of field "problems" are soil, water, climate or spray
   related. Their symptoms are mapped to the same taxonomy, so
   they appear in the diagnostic wizard.
   ============================================================ */

window.AGRO = window.AGRO || {};
AGRO.pests = AGRO.pests || [];

AGRO.pests.push(

{
  id:"n-deficiency", kind:"disorder", type:"Nutritional",
  name:"Nitrogen deficiency", sci:"—", fr:"Carence en azote",
  crops:["tomato","potato","pepper","cucurbits","onion","citrus","olive","grape","pome","stonefruit","cereals","fababean","datepalm"],
  organs:["leaf","whole"],
  symptoms:["chlorosis","stunting","defoliation"],
  stage:"Any stage, most visible during rapid growth",
  tagline:"Pale, uniform, bottom-up yellowing with a thin canopy — the deficiency that moves upward from old leaves.",
  bio:"Nitrogen is mobile in the plant, so the plant withdraws it from older tissue to feed new growth. Deficiency therefore appears first and worst on the oldest leaves and progresses upward, with an overall pale green to yellow colour, reduced leaf size and, in cereals, reduced tillering. In tomato the older leaves yellow evenly, sometimes with purple veining on the underside when the deficiency is severe.",
  damage:"Reduced leaf area and poor fruit set; in cereals, fewer tillers and lower grain protein. Yield loss is proportional to the duration of the deficiency, not to its visual severity at a single moment.",
  favours:"Leaching by heavy irrigation or winter rain, especially on sandy soils; low organic matter; cold soils that slow mineralisation; root damage or waterlogging that blocks uptake; poor incorporation of residues; excessive irrigation of a drip system that washes nitrate below the root zone.",
  monitoring:"Compare young and old leaves. Split the soil profile and sample by depth for nitrate — surface values alone can be misleading after leaching. Whole-leaf or petiole analysis at a defined growth stage, interpreted against the laboratory's reference range for that crop and stage, is the reliable test.",
  threshold:"There is no universal value: sufficiency ranges differ by crop, organ, growth stage and laboratory method. Interpret only against the reference values of the laboratory that performed the analysis, and alongside a nitrogen budget for the field.",
  severity:3,
  dz:"Common after heavy winter leaching in the north and after over-irrigation in the south; frequently confused with waterlogging, root disease or salinity.",
  ipm:{
    cultural:["Split nitrogen applications to match uptake instead of a single heavy dressing.","Place fertiliser in the root zone rather than broadcasting on the surface.","Match irrigation to soil water capacity to limit leaching.","Return and incorporate crop residues where disease risk permits.","Include legumes in the rotation as a nitrogen source."],
    biological:["Organic amendments and compost increase mineralisation capacity over time.","Preserve soil structure and earthworm populations; compaction is a hidden cause of poor nitrogen uptake.","Avoid sterilising the soil food web unnecessarily."],
    mechanical:["Inspect for compaction layers with a spade or penetrometer before blaming the fertiliser.","Fix drainage if waterlogging is limiting root function."],
    biotech:["Track a simple nitrogen budget and use soil nitrate sampling by depth to decide the top-dressing.","Use remote sensing or a chlorophyll meter as a relative guide within a field, calibrated to the same variety."]
  },
  chem:[
    { ai:"Nitrogen fertilisers (urea, ammonium nitrate, ammonium sulphate)", moa:"Amendment", note:"Form and placement matter more than total quantity. Respect label rates and local nutrient-management rules; nitrogen is a water-quality issue, not only an agronomic one." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Waterlogging / root hypoxia", d:"Also uniform yellowing, but the plant wilts at midday and roots are brown and anaerobic-smelling. Fixing the drainage is the test." },
    { n:"Salt stress", d:"Marginal scorch plus stunting, higher soil EC, often patchy and linked to irrigation water quality." },
    { n:"Root disease (Fusarium, Phytophthora)", d:"Vascular browning or collar necrosis; plants wilt irreversibly rather than just paling." },
    { n:"Iron chlorosis", d:"Interveinal, on the youngest leaves, on calcareous soil — the opposite leaf-age pattern." }
  ],
  role:"Abiotic constraint"
},

{
  id:"k-deficiency", kind:"disorder", type:"Nutritional",
  name:"Potassium deficiency", sci:"—", fr:"Carence en potassium",
  crops:["tomato","potato","citrus","olive","grape","pome","stonefruit","cucurbits","onion","datepalm"],
  organs:["leaf","fruit","whole"],
  symptoms:["marginal-necrosis","chlorosis","sunken-lesion","defoliation"],
  stage:"Fruit development to ripening, when demand peaks",
  tagline:"Scorched leaf margins, weak fruit and poor ripening quality.",
  bio:"Potassium is mobile, so symptoms start on mature leaves as yellowing and then necrosis of the margins and tips, progressing inward. Plants are less able to regulate stomata and translocate sugars, so fruit size, dry matter and quality suffer even before visible symptoms appear. In tomato, uneven ripening and grey-green shoulder patches are associated with the complex that includes potassium imbalance.",
  damage:"Smaller fruit, poor ripening, lower sugar and dry-matter content, weak stems and greater sensitivity to drought.",
  favours:"Sandy or shallow soils, heavy leaching, fruit loading on a large crop, high sodium or magnesium competing for uptake, decades of extraction without replacement in orchard systems, and irrigation water with a high sodium adsorption ratio.",
  monitoring:"Leaf analysis at a defined stage (recently mature leaf, opposite an inflorescence in many crops) is the reliable test. Soil exchangeable potassium is useful, but the plant analysis decides.",
  threshold:"Use the laboratory's crop- and stage-specific sufficiency range. Exchangeable soil potassium is interpreted together with texture and cation exchange capacity; a single number is not a diagnosis.",
  severity:3,
  dz:"Widely underestimated in old olive and citrus orchards and in continuous vegetable rotations. Sandy soils in the south leach readily.",
  ipm:{
    cultural:["Base the potash programme on crop removal, not on habit.","Split applications over the fruit-filling period.","Return prunings and residues where disease risk allows.","Avoid excessive magnesium and sodium applications that compete with potassium."],
    biological:["Organic matter and balanced cation nutrition improve root efficiency.","Avoid over-liming, which can induce potassium and micronutrient imbalance."],
    mechanical:["Ensure irrigation does not leach the root zone excessively.","Avoid root damage from deep cultivation under the canopy in orchards."],
    biotech:["Annual or biannual leaf analysis in perennial crops tracks the trend rather than a single point in time."]
  },
  chem:[
    { ai:"Potassium sulphate or potassium nitrate", moa:"Amendment", note:"Sulphate and nitrate forms are preferable where chloride sensitivity or salinity is a concern. Placement and timing matter as much as the source." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Salt stress", d:"Also marginal necrosis, but with high soil EC and often a patchy pattern linked to irrigation." },
    { n:"Magnesium deficiency", d:"Interveinal chlorosis with the veins remaining green, mostly on middle and older leaves." },
    { n:"Drought and heat stress", d:"Marginal scorch with wilting that recovers after irrigation; no soil potassium deficit on analysis." },
    { n:"Boron toxicity", d:"Marginal and tip necrosis, often associated with irrigation water high in boron." }
  ],
  role:"Abiotic constraint"
},

{
  id:"mg-deficiency", kind:"disorder", type:"Nutritional",
  name:"Magnesium deficiency", sci:"—", fr:"Carence en magnésium",
  crops:["tomato","potato","citrus","olive","grape","pome","stonefruit","cucurbits"],
  organs:["leaf"],
  symptoms:["chlorosis","necrotic-spots","defoliation"],
  stage:"Mid-season, on mature leaves",
  tagline:"Interveinal yellowing with the veins left standing out in green.",
  bio:"Magnesium is the central atom of chlorophyll and is mobile, so the plant moves it from older leaves to new growth. The result is classic interveinal chlorosis on mature and middle leaves, often with a green V or arrow shape around the midrib in some species, progressing to necrotic patches in severe cases. It frequently accompanies potassium excess or a high calcium-to-magnesium ratio.",
  damage:"Reduced photosynthesis, premature leaf drop in orchards, lower fruit size and sugar content. In citrus it causes conspicuous leaf drop that is often mistaken for disease.",
  favours:"Light sandy soils, heavy potassium or calcium applications, high pH that reduces uptake, continuous cropping without magnesium replacement, and irrigation with high calcium carbonate content.",
  monitoring:"Leaf analysis on a defined leaf position and stage. In the orchard, follow the pattern within the canopy: magnesium deficiency is worse on the side loaded with fruit.",
  threshold:"Use the laboratory's reference range for the crop and leaf position. Interpret together with the potassium, calcium and magnesium ratios rather than as an isolated figure.",
  severity:3,
  dz:"Frequent in citrus and in continuous vegetable rotations on the sandy soils of the centre and west.",
  ipm:{
    cultural:["Correct the potassium to magnesium balance rather than adding magnesium blindly.","Use magnesium-containing amendments suited to soil pH — dolomitic lime on acid soils, magnesium sulphate where pH is adequate.","Foliar magnesium is a short-term correction, not a soil solution."],
    biological:["Organic matter improves cation exchange and retention.","Avoid excessive potassium inputs that outcompete magnesium at the root surface."],
    mechanical:["Mulching in orchards moderates the soil moisture and temperature that affect root activity.","Avoid cultivation that destroys shallow feeder roots."],
    biotech:["Tissue analysis plus soil cation ratios; repeat at the same phenological stage each year."]
  },
  chem:[
    { ai:"Magnesium sulphate (Epsom salt) or magnesium nitrate", moa:"Amendment", note:"Foliar corrections act within the season; soil correction is the durable measure. Do not mix with high-calcium solutions — precipitation reduces both." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Iron chlorosis", d:"Interveinal but on the youngest leaves, on calcareous soils." },
    { n:"Manganese or zinc deficiency", d:"Interveinal chlorosis with mottling or small leaves; needs tissue analysis to separate." },
    { n:"Virus-induced mottling (mosaic)", d:"Irregular mosaic with leaf distortion and often a vector present; not a uniform interveinal pattern." },
    { n:"Magnesium deficiency versus spider mite stippling", d:"Mite injury follows the veins in fine stippling, has bronzing and webbing, and moves from the leaf edge with visible mites on the underside." }
  ],
  role:"Abiotic constraint"
},

{
  id:"fe-chlorosis", kind:"disorder", type:"Nutritional",
  name:"Iron chlorosis (lime-induced)", sci:"—", fr:"Chlorose ferrique (calcaire actif)",
  crops:["citrus","olive","grape","pome","stonefruit","tomato","cucurbits","datepalm"],
  organs:["leaf","whole"],
  symptoms:["chlorosis","mosaic","stunting"],
  stage:"New growth, from spring onward",
  tagline:"New leaves yellow between green veins on calcareous soil — the signature disorder of Mediterranean orchards.",
  bio:"Iron is immobile, so deficiency appears first on the youngest leaves and shoots. On calcareous soils, high pH and active lime keep iron in insoluble forms and bicarbonate in the soil solution interferes with iron uptake and transport. The result is a fine network of green veins on a yellow to nearly white blade, stunted new growth, and in severe cases shoot dieback. The disorder is a soil chemistry problem, not simply a shortage of iron in the soil.",
  damage:"Reduced shoot growth and fruit set; chronic cases stunt trees permanently and reduce yield for years. In severely affected orchards, replanting on the same soil repeats the problem.",
  favours:"Active lime above roughly 8–10 % in the surface horizon, high pH, high bicarbonate irrigation water, poor aeration, over-irrigation, compacted or waterlogged soils, and rootstocks poorly adapted to calcareous conditions.",
  monitoring:"Chlorophyll or SPAD readings on young, fully expanded leaves give a fast relative index. Soil analysis for total and active lime and pH specifies the mechanism; tissue iron is a weak indicator because leaf iron content does not track the disorder well.",
  threshold:"Interpret leaf colour against the same variety, rootstock and leaf age. For soil, the important number is active lime and pH, not total iron: high total iron with high active lime is the classic calcareous trap.",
  severity:4,
  dz:"The dominant micronutrient disorder of Algerian orchards and vineyards on calcareous soils; the reason rootstock choice matters more than any single treatment.",
  ipm:{
    cultural:["Choose rootstocks tolerant of calcareous soils — this is the only durable control in orchards.","Avoid over-irrigation and waterlogged conditions that increase bicarbonate in the root zone.","Maintain organic matter and avoid excessive phosphorus, which can aggravate the disorder.","In annual crops, favour localised placement of chelates rather than broadcast."],
    biological:["Soil organic matter and microbial activity improve iron availability at the root surface.","Siderophore-producing microorganisms are used in some products; treat the evidence as emerging.","Avoid fumigants and sterilisation, which damage the iron-mobilising community."],
    mechanical:["Improve drainage and aeration; bicarbonate damage is worst in wet soils.","Do not deep-cultivate close to trees — feeder roots are the uptake organ."],
    biotech:["SPAD or chlorophyll metering tracks treatment response objectively; photograph and measure the same tagged shoots each season."]
  },
  chem:[
    { ai:"Iron chelates (EDDHA-type)", moa:"Amendment", note:"EDDHA chelates remain effective at high pH; EDTA and similar chelates are largely wasted on calcareous soils. Soil application lasts longer than foliar, which only greens the sprayed leaves. Respect label rates and keep them off hard surfaces." },
    { ai:"Acidifying amendments (elemental sulphur, acidifying fertilisers)", moa:"Amendment", note:"Slow-acting and local; useful around the root zone. Over-application risks salinisation and unexpected pH swings." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Nitrogen deficiency", d:"Uniform pale yellowing of the oldest leaves first, not a vein network on new growth." },
    { n:"Manganese deficiency", d:"Interveinal chlorosis with a coarser pattern and grey-green mottling; needs tissue analysis." },
    { n:"Zinc deficiency", d:"Small leaves ('little leaf'), short internodes, sometimes interveinal chlorosis on older leaves." },
    { n:"Virus or phytoplasma disease", d:"Usually with leaf distortion, mosaic, a vector and a patchy distribution; iron chlorosis tracks soil and irrigation." },
    { n:"Herbicide carry-over", d:"Distortion and stunting with a spray history and no relationship to soil lime." }
  ],
  role:"Abiotic constraint"
},

{
  id:"ca-blossom-end-rot", kind:"disorder", type:"Physiological",
  name:"Blossom-end rot (calcium-related)", sci:"—", fr:"Nécrose apicale (cul noir)",
  crops:["tomato","pepper","cucurbits"],
  organs:["fruit","leaf"],
  symptoms:["sunken-lesion","soft-rot","distortion"],
  stage:"Fruit enlargement",
  tagline:"A black, sunken patch on the flower end of the fruit — a water-transport problem, usually not a soil calcium shortage.",
  bio:"The disorder results from insufficient calcium reaching the rapidly expanding fruit cells. Calcium moves almost entirely in the transpiration stream, so anything that reduces water flow to the fruit — high humidity with low transpiration, irregular irrigation, high salinity, excess nitrogen competing for uptake, root damage — produces the lesion even on soils with adequate calcium. Affected cells collapse, giving a sunken, dark, leathery patch at the blossom end that later invites secondary rot.",
  damage:"Direct fruit loss; in severe cases 10–30 % of the crop. Affected fruit are unmarketable.",
  favours:"Fluctuating soil moisture, sudden high temperatures with fast fruit expansion, high salinity in the root zone, excessive nitrogen or potassium fertilisation, humid greenhouses, compacted or damaged roots, and high evaporative demand with a poorly developed root system.",
  monitoring:"Record the incidence by truss and block and correlate it with irrigation and fertigation records. Measure soil moisture and electrical conductivity in the root zone; sample the nutrient solution where soilless.",
  threshold:"There is no threshold value: the practical trigger is any appearance of lesions on the first fruiting truss, which means the water balance must be changed immediately.",
  severity:3,
  dz:"A recurring problem in protected tomato and pepper, particularly under plastic tunnels in the south where salinity and temperature fluctuate sharply.",
  ipm:{
    cultural:["Irrigate frequently and evenly to keep root-zone moisture stable.","Avoid excessive salinity in the root zone, especially with fertigation.","Balance nitrogen and potassium; do not push either hard during fruit set.","Maintain a canopy that keeps fruit partially shaded and less prone to rapid expansion.","Do not attempt to correct this with calcium sprays alone — they rarely reach the fruit in sufficient quantity."],
    biological:["Healthy, well-structured soil with active roots is the real defence; organic matter helps buffer moisture.","Avoid practices that damage root hairs and mycorrhizae."],
    mechanical:["Mulch to buffer soil moisture and temperature.","Shade or ventilate to reduce abrupt transpiration swings."],
    biotech:["Soil moisture or substrate sensors turn this from guesswork into a measurable control loop."]
  },
  chem:[
    { ai:"Calcium nitrate or calcium chloride foliar applications", moa:"Amendment", note:"Evidence of benefit is limited and inconsistent; treat as a supplement, never as a substitute for irrigation management. Avoid high-rate calcium chloride on sensitive crops." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Late blight or bacterial soft rot on fruit", d:"Rots usually with water-soaked margins, sporulation or bacterial ooze and a different progression." },
    { n:"Sunscald", d:"Damage on the sun-exposed shoulder rather than the blossom end." },
    { n:"Fruit borer entry", d:"Visible entrance hole, frass and a larva inside." },
    { n:"Blooming-end russeting from thrips", d:"Silvery, corky scarring without a black sunken lesion." }
  ],
  role:"Abiotic constraint"
},

{
  id:"b-deficiency-toxicity", kind:"disorder", type:"Nutritional",
  name:"Boron deficiency and toxicity", sci:"—", fr:"Carence et toxicité du bore",
  crops:["olive","citrus","apple","pome","grape","datepalm","onion","cucurbits","stonefruit"],
  organs:["leaf","fruit","shoot","root"],
  symptoms:["distortion","sunken-lesion","stunting","dieback","necrotic-spots"],
  stage:"Active growth and fruit set",
  tagline:"A narrow window between too little and too much — and the two look surprisingly alike.",
  bio:"Boron is essential for cell wall formation and division, and it is poorly redistributed within the plant. Deficiency shows on growing points: distorted, thickened or corky new leaves, short internodes, hollow stems, poor fruit set and corky or cracked fruit (in olive, 'monkey-face' deformation; in apple, corky pitting). Toxicity produces marginal and tip burn on the oldest leaves, often with a yellow halo, and is a real risk where irrigation water is high in boron, as is common in parts of the south.",
  damage:"Both directions reduce yield and quality. Since the margin of error is narrow, the deciding factor is the analysis, not the symptom.",
  favours:"Deficiency: sandy, calcareous or heavily leached soils, drought, and soils low in organic matter. Toxicity: irrigation water with high boron, over-application of boron amendments, and soils derived from marine deposits.",
  monitoring:"Soil boron plus irrigation water analysis is essential before any application. Tissue analysis on a defined organ at a defined stage distinguishes deficiency from toxicity, which visual assessment cannot do reliably.",
  threshold:"Interpret strictly against the laboratory reference for the crop; the deficiency and toxicity ranges are separated by a narrow band and by the extraction method. Never apply boron on the basis of a symptom alone.",
  severity:3,
  dz:"Both directions occur in Algeria: deficiency on leached northern soils, toxicity linked to irrigation water in the south and in some oasis systems.",
  ipm:{
    cultural:["Analyse the irrigation water before planning boron applications.","Apply boron only on analysed evidence, at low rates, evenly.","Avoid cumulative annual boron application, which builds up toxicity.","In orchards, maintain organic matter to buffer availability."],
    biological:["Organic matter moderates availability and reduces the risk of a sharp excess.","Avoid residues that concentrate boron unevenly."],
    mechanical:["Ensure even irrigation so boron is not concentrated in patches.","Improve drainage where accumulation is suspected."],
    biotech:["Irrigation water analysis is the single most valuable routine measurement for this disorder."]
  },
  chem:[
    { ai:"Borax, boric acid or boron-containing foliar products", moa:"Amendment", note:"Rates are small and the safety margin is narrow: exceeding them causes toxicity and can persist in the soil. Follow the label exactly and never mix up deficiency and toxicity treatment." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Calcium deficiency or blossom-end rot", d:"Lesions on the fruit rather than growing-point distortion and corkiness." },
    { n:"Zinc deficiency", d:"Small leaves and short internodes without corky deformation or cracking." },
    { n:"Herbicide injury", d:"Distortion follows a spray event and does not respond to boron analysis." },
    { n:"Mite or eriophyid damage", d:"Galls, erinea or bronzing with the organism present under magnification." }
  ],
  role:"Abiotic constraint"
},

{
  id:"salinity-stress", kind:"disorder", type:"Abiotic",
  name:"Salt stress and soil salinisation", sci:"—", fr:"Salinité et stress salin",
  crops:["tomato","potato","pepper","cucurbits","onion","citrus","olive","datepalm","grape","stonefruit"],
  organs:["leaf","whole","root"],
  symptoms:["marginal-necrosis","stunting","chlorosis","collapse","root-rot"],
  stage:"Any stage; worst during establishment and under high evaporative demand",
  tagline:"Marginal scorch, stunted growth and patchy collapse where irrigation water or soil salt load is too high.",
  bio:"High concentrations of soluble salts reduce the osmotic potential of the soil solution, so the plant spends more energy extracting water and can fail to do so during peak transpiration. Sodium and chloride may also be directly toxic, producing marginal and tip necrosis. Symptoms begin on the oldest leaves, with a scorched, burnt margin, and progress to stunting and mid-day wilting. In the field the pattern is often patchy and follows irrigation uniformity, low spots or the head of the block.",
  damage:"Yield reductions that are frequently attributed to 'poor soil' or varietal weakness. Progressive salinisation can render land uneconomic, especially where drainage is absent.",
  favours:"Irrigation water with high electrical conductivity, high sodium adsorption ratio or high chloride; shallow water tables; inadequate leaching fraction; heavy soils with poor drainage; prolonged drip irrigation without leaching; and hot dry conditions that concentrate salts at the surface.",
  monitoring:"Soil electrical conductivity in the root zone, sampled at several depths and before and after irrigation. Irrigation water analysis for EC, sodium, chloride and boron. Record a visible pattern map — salinity patches track irrigation hardware and topography, not plant genetics.",
  threshold:"Interpret EC against the salt tolerance of the specific crop and growth stage, and against the laboratory's method (saturated extract versus 1:5 dilution give different numbers, so never compare across methods). For irrigation water, use the crop tolerance tables of the national advisory service.",
  severity:4,
  dz:"An increasing constraint in oasis and southern systems and in coastal greenhouses; also present where irrigation water is used with no leaching fraction.",
  ipm:{
    cultural:["Apply a calculated leaching fraction rather than the maximum the system can deliver.","Use drip irrigation with a properly managed leaching programme rather than uncontrolled flooding.","Add organic matter and gypsum where the problem is sodicity, but only on a soil analysis.","Choose crops and varieties with better salt tolerance for affected blocks.","Avoid fertiliser programmes that add salt load beyond crop requirement."],
    biological:["Organic matter improves structure and water movement, which supports leaching.","Salt-tolerant cover crops can protect the surface between cycles.","Do not expect biological amendments to substitute for drainage."],
    mechanical:["Install or restore subsurface drainage — without drainage, leaching simply moves salts laterally.","Level the field to avoid low spots where salts concentrate.","Maintain and clean drip emitters: uneven application creates the patchiness."],
    biotech:["EC sensors and water meters convert this from a seasonal guess into a monitored balance.","Map the affected zones with GPS and treat them as separate management units."]
  },
  chem:[
    { ai:"Calcium-based amendments (gypsum) for sodic soils", moa:"Amendment", note:"Appropriate for sodicity (high exchangeable sodium), not for simple salinity. Applying gypsum on a saline, well-structured soil wastes money and can add salt. Base the decision on the sodium adsorption ratio." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Potassium deficiency", d:"Similar marginal scorch but with no raised EC, and it responds to potassium rather than to leaching." },
    { n:"Waterlogging", d:"Wilting with anaerobic, brown roots; the marginal pattern is less characteristic than in salinity." },
    { n:"Specific-ion toxicity (chloride, boron, sodium)", d:"Requires water and tissue analysis to separate from general salinity." },
    { n:"Root rot (Phytophthora)", d:"Also patchy, in low spots, but with visible root and collar necrosis rather than a salt pattern." }
  ],
  role:"Abiotic constraint"
},

{
  id:"waterlogging", kind:"disorder", type:"Abiotic",
  name:"Waterlogging and root hypoxia", sci:"—", fr:"Asphyxie racinaire (excès d'eau)",
  crops:["tomato","pepper","potato","citrus","olive","pome","stonefruit","cereals","fababean","grape","cucurbits"],
  organs:["root","whole","collar","leaf"],
  symptoms:["chlorosis","collapse","stunting","root-rot","collar-rot","defoliation"],
  stage:"Any stage; associated with heavy rain or over-irrigation",
  tagline:"Yellowing and mid-day wilting in the wet spots — plants drowning while the soil looks fine.",
  bio:"When the soil pore space fills with water, oxygen is depleted within hours. Roots cannot respire, so water and nutrient uptake stops, even though water is abundant. Ethylene and other anaerobic products accumulate, root tips die, and the plant wilts at midday while recovering at night — the diagnostic sign. In woody crops the collar and shallow roots are the first casualties, and secondary pathogens (Phytophthora, Pythium) then colonise the dead tissue, turning a physiological problem into a disease complex.",
  damage:"Stunted growth, yield loss and, in perennials, gradual decline over several seasons. The damage is often misassigned to disease.",
  favours:"Heavy or compacted soils, plough pans, low spots, poor levelling, excessive irrigation duration or frequency, a blocked or damaged drainage system, and long-duration rainfall events.",
  monitoring:"Dig a soil pit or use a spade after irrigation and check for a water table, a compaction layer and root colour. Roots should be pale and fine; brown, limp roots with an anaerobic smell confirm the diagnosis. Track soil moisture at depth, not only in the top 20 cm.",
  threshold:"Not a count: use the crop's critical period. Most annual crops suffer after 24–72 hours of saturation in warm soil, and stone fruit rootstocks are notably sensitive. Treat any saturated event during a sensitive stage as damaging.",
  severity:4,
  dz:"Repeated after heavy autumn and spring rains in the north, and caused by over-irrigation in heavy soils and poorly levelled blocks elsewhere.",
  ipm:{
    cultural:["Schedule irrigation by measured soil moisture rather than by calendar.","Match the irrigation duration to the soil's infiltration and storage capacity.","Avoid irrigating before forecast heavy rain.","In orchards, plant with the bud union above soil level and keep the collar free of soil and mulch."],
    biological:["Improve soil structure with organic matter and cover crops to increase infiltration and drainage.","Encourage deep-rooting species between cycles where the rotation allows.","Trichoderma and similar antagonists can protect roots recovering after a wet event, but will not fix the drainage."],
    mechanical:["Install or restore drainage; mole ploughing or subsoiling where a compacted layer is confirmed.","Break plough pans with a tined implement at the correct soil moisture.","Raise beds in vegetable systems where the risk is chronic."],
    biotech:["Continuous moisture logging at two depths separates 'wet' from 'saturated' and shows the true duration of the stress."]
  },
  chem:[
    { ai:"—", moa:"—", note:"No chemical solution. Fungicides against Phytophthora can limit the secondary phase, but the primary cause must be corrected." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Root and collar rot (Phytophthora)", d:"Frequently coexists; look for collar bark necrosis and gum, and sample the tissue. The drain is still the first action." },
    { n:"Drought stress", d:"Similar wilting but the soil is dry at depth and the plant recovers after irrigation." },
    { n:"Nitrogen deficiency", d:"Uniform pale leaves without the recovery pattern; often caused by the same wet soil." },
    { n:"Salinity", d:"Marginal scorch with raised EC and no anaerobic root symptoms." }
  ],
  role:"Abiotic constraint"
},

{
  id:"heat-drought-stress", kind:"disorder", type:"Abiotic",
  name:"Heat and drought stress", sci:"—", fr:"Stress thermique et hydrique",
  crops:["tomato","pepper","cucurbits","olive","datepalm","citrus","grape","pome","cereals","stonefruit"],
  organs:["leaf","flower","fruit","whole"],
  symptoms:["marginal-necrosis","collapse","flower-drop","premature-drop","stunting","fruit-mosaic","necrotic-spots"],
  stage:"Flowering and fruit set are the most sensitive windows",
  tagline:"Flower drop, burnt margins and uneven ripening after a heat wave — often mistaken for disease.",
  bio:"Above species-specific temperature thresholds, pollen viability falls, ovules abort and fruit set collapses; tissue temperatures that exceed the plant's capacity to transpire cause direct scorching. In olive and date palm, brief heat events during flowering explain poor set in an otherwise healthy grove. In tomato, sustained temperatures above roughly 32–35 °C during the day and 25 °C at night cause flower abortion and poor pollen release; uneven ripening and blotchy ripening follow. Saline or dry soil worsens the effect because transpirational cooling fails.",
  damage:"Marked loss of set in a short window, sun-exposed fruit and leaf damage, and quality losses in the ripening phase. Damage is permanent for that cohort of flowers.",
  favours:"Heat waves with dry hot winds, low humidity, insufficient or badly scheduled irrigation, sandy soils with low water storage, dark plastic mulch in full sun, and bare soil with no cover.",
  monitoring:"Log daily maximum and minimum temperatures and humidity, plus irrigation records, and align them with the flowering period. Record the pattern: stress shows first on the windward side, on exposed fruit and on plants with the smallest root volume.",
  threshold:"Species and stage specific. For protected tomato, sustained daytime maxima above about 32 °C with warm nights during flowering is the practical alarm; for olive, a short heat spike at bloom can be decisive. Use local records to build your own trigger.",
  severity:3,
  dz:"Structural in southern and oasis systems and increasingly relevant in northern summer crops; shading and irrigation scheduling are the practical defences.",
  ipm:{
    cultural:["Shift planting dates so that flowering does not fall in the hottest window.","Use mulching, cover crops or shade nets to reduce root-zone and canopy temperature.","Irrigate early in the morning to pre-cool the soil and meet peak demand.","Choose varieties with better heat tolerance and, in greenhouse crops, ventilate effectively."],
    biological:["Preserve soil organic matter and microbial activity to improve water retention.","Maintain a functional root system; stressed roots multiply the effect of heat.","Avoid root damage around the onset of a heat wave."],
    mechanical:["Shade nets or kaolin films reduce canopy temperature.","Remove or lighten dark plastic mulch under extreme heat.","Windbreaks reduce the effect of desiccating winds."],
    biotech:["Temperature logging plus a flowering calendar identifies the vulnerable window in advance, which is when shade and irrigation plans must be made."]
  },
  chem:[
    { ai:"Kaolin clay film, anti-transpirants", moa:"Physical", note:"Reflects radiation and reduces canopy temperature; efficacy depends on coverage and re-application. Verify residue tolerances for the destination market." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Sunscald from pruning or defoliation", d:"Localised on exposed fruit or bark after a canopy change rather than a field-wide heat event." },
    { n:"Herbicide phytoxicity", d:"Timing follows a spray, not a weather event." },
    { n:"Frost injury", d:"Damage on the cold-exposed side, with a temperature record below zero." },
    { n:"Poor fruit set from boron deficiency", d:"Also poor set, but with distorted growth and confirmed by tissue analysis." }
  ],
  role:"Abiotic constraint"
},

{
  id:"sunscald", kind:"disorder", type:"Physiological",
  name:"Sunscald and sunburn", sci:"—", fr:"Échaudage (brûlure solaire)",
  crops:["tomato","pepper","pome","stonefruit","grape","citrus","datepalm","cucurbits"],
  organs:["fruit","stem","leaf"],
  symptoms:["sunken-lesion","necrotic-spots","scarring","canker"],
  stage:"Ripening and post-veraison, and after any sudden canopy loss",
  tagline:"Damage on the exposed side — usually caused by the grower's own pruning.",
  bio:"Direct solar radiation raises tissue temperature above the lethal threshold on surfaces that are suddenly exposed. In tomato and pepper the fruit develops a pale, blistered patch that sinks and becomes papery; in pome fruit the skin browns and cracks; in grape bunches, berries shrivel on the exposed side. In woody crops, bark on the south-west side can be injured when the canopy is opened abruptly, and the damaged tissue later becomes a canker. In date palm, exposure of previously shaded fruit leads to rapid quality loss.",
  damage:"Direct market loss on the affected fruit, and in perennials a chronic canker problem on the trunk and scaffold limbs.",
  favours:"Sudden defoliation or heavy pruning in hot weather, disease-induced leaf loss, abrupt removal of shade nets, water stress that reduces transpirational cooling, and reflected heat from bare soil or walls.",
  monitoring:"Map the affected side of the canopy and cross-check against the pruning and spray record and the temperature log. In orchards, inspect the south-west side of trunks after any heavy pruning in summer.",
  threshold:"Not a count: the management trigger is the canopy change itself. Any significant summer defoliation or pruning should be planned to avoid exposing fruit and bark.",
  severity:2,
  dz:"Frequent in orchards after summer pruning and in tomato following defoliation from disease.",
  ipm:{
    cultural:["Prune in cool weather or in stages rather than exposing bark and fruit abruptly.","Maintain adequate soil moisture so the plant can transpire and cool itself.","Keep the fruit within the canopy shade in tomato and pepper.","Shade sensitive young trees with a protective coat or shade cloth on the exposed side."],
    biological:["A functioning canopy and healthy root system is the real protection.","Avoid excessive nitrogen, which produces soft foliage and poor acclimation."],
    mechanical:["Use whitewash or a protective trunk paint on exposed bark in orchards.","Shade nets reduce radiation load in protected crops.","Retain a light canopy layer over fruit where the species allows."],
    biotech:["Radiation and temperature loggers help quantify the risk period."]
  },
  chem:[
    { ai:"Trunk whitewash / reflective paint", moa:"Physical", note:"Reduces bark temperature and prevents sunscald cankers on exposed trunks. A physical barrier, not a pesticide." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Blossom-end rot", d:"On the blossom end, not the sun-exposed side." },
    { n:"Fruit rot", d:"Soft, moist and spreading with fungal growth; sunscald lesions are dry and papery at first." },
    { n:"Frost injury", d:"Damage on the cold side; recorded temperatures below zero." },
    { n:"Bacterial canker", d:"Progressive lesion with ooze; sunscald cankers follow exposure and remain static." }
  ],
  role:"Abiotic constraint"
},

{
  id:"herbicide-phytotoxicity", kind:"disorder", type:"Phytotoxicity",
  name:"Herbicide and agrochemical phytotoxicity", sci:"—", fr:"Phytotoxicité (herbicides)",
  crops:["tomato","potato","pepper","cucurbits","onion","citrus","olive","grape","pome","stonefruit","cereals","fababean","datepalm"],
  organs:["leaf","shoot","fruit","whole"],
  symptoms:["distortion","chlorosis","marginal-necrosis","stunting","mosaic","necrotic-spots","lodging"],
  stage:"Days to weeks after application or after a drift event",
  tagline:"Suspiciously regular damage with a spray in the calendar — the most over-diagnosed and most missed cause in the field.",
  bio:"Several distinct mechanisms produce similar pictures. Drift and volatilisation from a phenoxy or auxin herbicide cause twisted, strapped and cupped new growth; carry-over in soil or residues in irrigation water cause stunting and root inhibition; tank contamination at very low rates causes the same twisting as drift; and wrong-product-on-wrong-crop causes acute necrosis. Damage from auxin herbicides characteristically affects the newest growth, appears within days of exposure, and follows a gradient across the field downwind of the source or along a sprayer pass.",
  damage:"Lost growth, delayed maturity and yield reduction. Carry-over can affect the following sensitive crop, sometimes a full season later.",
  favours:"Spraying in windy conditions, volatile formulations applied in heat, sprayer contamination, careless tank cleaning, using a sprayer that handled a herbicide on a sensitive crop, drift from a neighbouring field, and residues from persistent sulfonylurea or similar chemistry.",
  monitoring:"Reconstruct the calendar: every spray on the farm and, if drift is suspected, on neighbouring fields within 500 m, with date, product, rate, wind direction and nozzle. Irrigate and observe if the damage spreads to new growth; phytotoxicity is often transient and the new growth emerges normal, which itself is diagnostic.",
  threshold:"Not applicable. The decision is whether to replant, to wait, or to accept the yield penalty — and that depends on the growth stage and the mechanism.",
  severity:3,
  dz:"Common near cereal fields where auxin herbicides are used, and from tank contamination in vegetable systems. Frequently misdiagnosed as virus or as a nutritional problem.",
  ipm:{
    cultural:["Maintain a written spray record with wind, rate, product and operator — without it this diagnosis is guesswork.","Respect buffer zones and wind speed limits for volatile herbicides.","Never use the same sprayer for herbicides and foliar nutrition without a validated clean-out procedure.","Plan rotations that respect the persistence of the herbicide used in the previous crop."],
    biological:["Not applicable to the acute event.","Soil organic matter and microbial activity accelerate the breakdown of some residues; treat this as a long-term benefit, not a remedy."],
    mechanical:["Use dedicated nozzles and booms for herbicide work; colour-code them.","Wash and flush the sprayer with the correct detergent protocol, then verify with a test spray on a few plants."],
    biotech:["Photograph the same tagged plants weekly to record whether the new growth recovers — this distinguishes phytotoxicity from disease."]
  },
  chem:[
    { ai:"—", moa:"—", note:"There is no antidote. Foliar nutrition and irrigation can help a stressed plant recover but do not reverse the mechanism. Prevention is entirely operational." }
  ],
  resistance:"Not applicable to the crop; but see the weed entries for herbicide resistance in weeds, which is a different problem.",
  lookalikes:[
    { n:"Virus disease", d:"Mosaic and distortion too — but viruses usually spread along vectors, show a growing patch, and companion plants differ in severity. Molecular testing settles it." },
    { n:"Mite damage", d:"Bronzing, stippling and webbing with the organism present under magnification." },
    { n:"Micronutrient deficiency", d:"Distortion from boron or zinc is possible; tissue analysis separates it from a spray event." },
    { n:"Heat stress", d:"Tied to a temperature event, not a spray record." }
  ],
  role:"Abiotic constraint"
},

{
  id:"frost-hail-wind", kind:"disorder", type:"Abiotic",
  name:"Frost, hail and wind injury", sci:"—", fr:"Gel, grêle et vent",
  crops:["citrus","olive","pome","stonefruit","grape","tomato","potato","cucurbits","cereals"],
  organs:["leaf","fruit","stem","flower","shoot"],
  symptoms:["necrotic-spots","defoliation","scarring","canker","sunken-lesion","flower-drop","mosaic"],
  stage:"Any, but spring frost at bloom and hail at fruit development cause the greatest loss",
  tagline:"A sharp, hard boundary between damaged and healthy tissue — weather writes with a straight line.",
  bio:"Freezing damages tissue when ice forms in the cells or when rapid thawing ruptures them; the injury follows the coldest, most exposed side and often a clear gradient with elevation or the direction of the frost drain. Hail produces mechanical wounding with ragged lesions, bruised and split fruit, defoliated shoots and bark wounds that later become cankers. Wind causes direct abrasion, lodging and desiccation; when it carries sand — as in southern wind events — leaves are stripped and sandblasted.",
  damage:"Loss of flowers and fruit set, direct fruit damage, defoliation and, in perennials, cankers and trunk wounds that open the way to disease.",
  favours:"Radiation frost on clear calm nights in low-lying plots where cold air pools, early bloom, poor windbreaks, exposure to hail corridors, and desiccating southern winds.",
  monitoring:"A minimum/maximum thermometer in the plot, ideally at canopy height in low spots, plus local weather alerts. Photograph the damaged side and the boundary; the geometry of the damage is the diagnosis.",
  threshold:"Species-specific frost tolerance at bloom. Track the minimum temperature at canopy level rather than at a distant weather station — the difference in a frost pocket is often decisive.",
  severity:3,
  dz:"Spring frost at bloom is a recurring risk for stone fruit and citrus; hail corridors exist in the high plains and centre; sand-carrying winds affect southern crops.",
  ipm:{
    cultural:["Choose sites with good air drainage and avoid frost pockets, or plant the most frost-sensitive species elsewhere.","Use late-flowering or later-blooming varieties where spring frost is frequent.","Delay irrigation and nitrogen in frost-prone periods to avoid soft, succulent growth.","Secure or insure against hail in high-value orchards rather than relying on treatments."],
    biological:["Not applicable to the acute event.","Post-event care matters: protect wounded tissue and correct nutrition to speed recovery without pushing soft growth."],
    mechanical:["Overhead frost protection or wind machines work only where water and power allow — verify the design before relying on them.","Anti-hail nets are the only reliable protection in a hail corridor.","Disinfect pruning tools when removing damaged wood: wounds are infection courts for canker pathogens and fire blight."],
    biotech:["Plot-level temperature logging identifies frost pockets and justifies the cost of protection."]
  },
  chem:[
    { ai:"—", moa:"—", note:"No treatment reverses mechanical or freezing injury. Post-event application of copper or a protectant to wounded tissue is a preventive measure against canker and fire blight where the risk applies, not a cure." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Sunscald", d:"On the sun-exposed side and after canopy removal; not related to a cold or hail event." },
    { n:"Herbicide drift", d:"Distortion rather than ragged mechanical wounds, and tied to a spray record." },
    { n:"Bacterial canker or fire blight", d:"Fungal or bacterial cankers can follow hail wounds — inspect the wound margin and sample if the lesion advances." },
    { n:"Salt or wind burn in coastal plots", d:"Marginal necrosis from airborne salt after a sea wind; usually a uniform directional pattern." }
  ],
  role:"Abiotic constraint"
},

{
  id:"pollination-failure", kind:"disorder", type:"Physiological",
  name:"Poor fruit set from pollination failure", sci:"—", fr:"Défaut de pollinisation",
  crops:["olive","pome","stonefruit","citrus","datepalm","cucurbits","tomato"],
  organs:["flower","fruit"],
  symptoms:["flower-drop","premature-drop","scarring","stunting"],
  tagline:"Flowers open and fall without setting — a reflection on the pollinator, the weather, or the variety.",
  bio:"Fruit set requires viable pollen, successful transfer, and a receptive stigma. Failure can arise from self-incompatibility in the variety, absence of a compatible polliniser, insufficient pollinating insects, a heat or frost event during bloom, low humidity that prevents pollen release, or nutritional and water stress of the tree. In date palm, pollination is manual and the ratio of male to female palms plus the timing of the operation decides the set. In olive, a hot dry spell during bloom is a common cause of a poor year.",
  damage:"Reduced yield without any visible pest or pathogen; when it is chronic, it is usually a design or variety problem rather than a management one.",
  favours:"Absence of polliniser trees, poor bloom overlap between varieties, low pollinator populations, cold wet or hot dry weather at bloom, water stress during bloom, boron deficiency, and insecticide applications during flowering.",
  monitoring:"Record bloom dates and weather hour by hour during flowering. Count pollinating insects on a fixed number of inflorescences at the warmest part of the day. Check compatibility and polliniser maps in the orchard; in orchards, verify that pollinisers bloom in the same seven to ten days.",
  threshold:"Not a count: the diagnostic is the set rate. Count set fruit on tagged inflorescences a fortnight after bloom and compare against the orchard's own historical average.",
  severity:3,
  dz:"Relevant in olive (alternate bearing and bloom weather), in orchards planted with a single variety, and in protected cucurbits where pollinators are excluded by netting.",
  ipm:{
    cultural:["Plant or graft compatible pollinisers with adequate bloom overlap.","Protect pollinating insects: never apply insecticide during flowering.","Maintain irrigation and nutrition through bloom; avoid water stress at the critical window.","In date palm, follow the recommended male-to-female ratio and time the pollination operation carefully."],
    biological:["Manage for wild pollinators with flowering margins and undisturbed nesting sites.","Honeybee hives are used in several orchard crops; placement and strength must be planned, not improvised.","Avoid all bee-hazard products during bloom, including those considered 'soft'."],
    mechanical:["In date palm, manual pollination is the standard and timing accuracy decides the yield.","Supplemental pollen application is used in some fruit species; treat the cost-benefit as crop specific."],
    biotech:["Bloom-date and temperature records build a local picture of which years fail and why, which is what makes a mitigation plan possible."]
  },
  chem:[
    { ai:"—", moa:"—", note:"No product corrects pollination failure. The relevant chemical decision is the negative one: do not spray during flowering with any product hazardous to pollinators." }
  ],
  resistance:"Not applicable.",
  lookalikes:[
    { n:"Boron deficiency", d:"Poor set plus distorted growth and corky fruit; confirmed by tissue analysis." },
    { n:"Frost at bloom", d:"Flower damage with a recorded sub-zero event." },
    { n:"Heat stress at bloom", d:"Set failure without frost but with a temperature spike during flowering." },
    { n:"Olive fly or moth at bloom", d:"Insect damage with the pest and its signs present; usually does not explain a total set failure." }
  ],
  role:"Abiotic constraint"
}

);

/* ============================================================
   AgroScope — disease and weed library
   ============================================================ */

window.AGRO = window.AGRO || {};
AGRO.pests = AGRO.pests || [];

AGRO.pests.push(

{
  id:"tylcv", kind:"disease", type:"Virus",
  name:"Tomato yellow leaf curl virus", sci:"Tomato yellow leaf curl virus (TYLCV, Begomovirus)", fr:"Virus des feuilles jaunes en cuillère",
  crops:["tomato"],
  organs:["leaf","shoot","flower","fruit"],
  symptoms:["chlorosis","distortion","stunting","flower-drop","mosaic"],
  stage:"Systemic infection; symptoms 2–3 weeks after inoculation",
  tagline:"Incurable once infected — the only real control is the vector and the variety.",
  bio:"A monopartite begomovirus transmitted persistently by Bemisia tabaci. Acquisition takes hours and the virus is retained for life. It cannot be transmitted mechanically or through seed in practice. Symptoms appear 2–3 weeks after inoculation: upward curling, yellowing of leaflet margins, stunting, and flower drop.",
  damage:"Yield loss from 20% to total crop failure when infection occurs before flowering. Early infection is catastrophic; late infection costs less.",
  favours:"High whitefly populations, susceptible varieties, continuous tomato cropping, infected transplants, warm dry weather.",
  monitoring:"Scout from transplanting: whitefly counts plus weekly inspection for curling and yellowing. Test symptomatic plants with a rapid immunochromatographic strip or PCR.",
  threshold:"No curative threshold. Act on vector pressure: any sustained whitefly catch before flowering justifies intervention in susceptible varieties.",
  severity:5,
  dz:"Widespread; the main viral constraint of tomato in Algeria.",
  ipm:{
    cultural:["Grow resistant or tolerant varieties (Ty-1, Ty-2, Ty-3 genes) — the foundation of control.","Produce transplants under insect-proof netting.","Rogue and destroy infected plants early.","Avoid overlapping tomato cycles; keep a host-free period.","Control weeds that harbour whiteflies."],
    biological:["Encarsia formosa and Eretmocerus mundus against nymphs.","Predatory mirids in protected crops.","Conserve natural enemies by avoiding pyrethroids."],
    mechanical:["Insect-proof screens (≥ 50 mesh), double doors, yellow sticky monitoring.","Remove crop debris immediately after the last harvest."],
    biotech:["Resistant varieties plus vector monitoring; no chemical can cure an infected plant."]
  },
  chem:[
    { ai:"—", moa:"—", note:"No antiviral product substitutes for resistance and vector control. Vector insecticides are covered under Bemisia tabaci." }
  ],
  resistance:"Virus strains can overcome single resistance genes; use varieties with stacked genes and rotate sources.",
  lookalikes:[
    { n:"TSWV", d:"Necrotic ringspots and bronzing rather than yellow curling; thrips-transmitted." },
    { n:"Herbicide injury (phenoxy)", d:"Distortion without yellowing, often with a field gradient and no whiteflies." },
    { n:"Magnesium deficiency", d:"Interveinal chlorosis of older leaves, no curling of young leaves." }
  ],
  role:"Pathogen"
},

{
  id:"tswv", kind:"disease", type:"Virus",
  name:"Tomato spotted wilt virus", sci:"Tomato spotted wilt virus (TSWV, Orthotospovirus)", fr:"Virus de la maladie bronzée",
  crops:["tomato","pepper","cucurbits"],
  organs:["leaf","fruit","shoot","flower"],
  symptoms:["necrotic-spots","fruit-mosaic","stunting","chlorosis","dieback"],
  stage:"Systemic; symptoms 1–3 weeks after thrips inoculation",
  tagline:"A thrips-transmitted virus that ends the crop in susceptible pepper.",
  bio:"Transmitted persistently and propagatively by thrips, mainly Frankliniella occidentalis. Only larvae that acquire the virus can transmit it as adults. Symptoms include bronzing, necrotic ringspots on leaves and fruit, and tip dieback.",
  damage:"Fruit become unmarketable; plant death is common in pepper. Field losses can reach 100% in susceptible cultivars.",
  favours:"High thrips populations, susceptible cultivars, infected weeds and ornamentals, warm dry weather.",
  monitoring:"Blue sticky traps and flower tapping for thrips; test symptomatic plants. Confirm with ELISA or PCR — symptoms overlap with other viruses.",
  threshold:"No curative threshold; act on thrips larvae before they pupate, and rogue infected plants.",
  severity:5,
  dz:"Present in protected pepper and tomato, particularly in Biskra and El Oued.",
  ipm:{
    cultural:["Use TSWV-resistant pepper varieties carrying Tsw where available.","Remove infected plants and weeds immediately.","Screen greenhouse openings.","Avoid growing ornamentals that harbour thrips near the crop."],
    biological:["Orius laevigatus, Amblyseius swirskii, Neoseiulus cucumeris against thrips.","Conserve these predators by avoiding spinosyns where possible."],
    mechanical:["Blue sticky mass trapping; UV-reflective mulch."],
    biotech:["Resistance plus thrips monitoring is the only durable strategy."]
  },
  chem:[
    { ai:"—", moa:"—", note:"No antiviral cure. Thrips control is detailed under Frankliniella occidentalis." }
  ],
  resistance:"Resistance-breaking TSWV strains occur; variety choice must follow local strain monitoring.",
  lookalikes:[
    { n:"TYLCV", d:"Yellow curling rather than bronzing and necrosis; whitefly-transmitted." },
    { n:"Late blight", d:"Water-soaked lesions with white sporulation, not ringspots." },
    { n:"Calcium deficiency", d:"Blossom-end rot of fruit without foliar ringspots." }
  ],
  role:"Pathogen"
},

{
  id:"phytophthora-infestans", kind:"disease", type:"Oomycete",
  name:"Late blight", sci:"Phytophthora infestans", fr:"Mildiou de la pomme de terre et de la tomate",
  crops:["potato","tomato"],
  organs:["leaf","stem","fruit","storage"],
  symptoms:["necrotic-spots","downy-growth","soft-rot","collapse","store-rot"],
  stage:"All aerial stages; epidemic driven by weather",
  tagline:"The fastest-moving epidemic in agriculture — hours of leaf wetness decide the outcome.",
  bio:"Oospores and mycelium survive in infected tubers and crop debris. Sporangia are produced on lesions and dispersed by wind and rain splash. Infection requires leaf wetness, typically 4–12 hours depending on temperature. Lesions expand rapidly and produce a white downy growth on the underside in humid conditions.",
  damage:"Complete crop loss within 10–14 days under favourable weather. Tuber infection causes storage rot.",
  favours:"Cool to moderate temperatures (15–22 °C), prolonged leaf wetness, overhead irrigation, dense canopies, infected seed tubers, susceptible varieties.",
  monitoring:"Weather-based decision support (temperature plus leaf wetness) combined with weekly scouting of field margins and low spots. Check the underside of lesions for sporulation.",
  threshold:"Not a count threshold: act preventively when weather favours infection, especially at canopy closure and before forecast rain. Protect new growth until the canopy is fully senesced.",
  severity:5,
  dz:"The dominant potato disease in northern Algeria; autumn cycles are especially at risk.",
  ipm:{
    cultural:["Use certified, disease-free seed tubers.","Choose resistant varieties with quantitative resistance.","Avoid overhead irrigation in the evening; irrigate early.","Destroy cull piles and volunteer plants.","Kill the haulm before harvest to protect tubers."],
    biological:["Bacillus subtilis and other antagonists have modest field efficacy; use as supplements, not replacements.","Copper-based products in organic systems, with limited curative power."],
    mechanical:["Improve airflow by spacing and avoiding excess nitrogen.","Remove infected plants (roguing) in seed crops."],
    biotech:["Weather-driven forecasting is the single most valuable tool; spray only when infection risk is real."]
  },
  chem:[
    { ai:"mandipropamid", moa:"40", note:"CAA, protectant and antisporulant; partner in mixtures." },
    { ai:"dimethomorph", moa:"40", note:"Same group — do not alternate within 40." },
    { ai:"cyazofamid", moa:"21", note:"QiI, strong antisporulant." },
    { ai:"fluopicolide", moa:"43", note:"Often formulated with propamocarb; check local registration." },
    { ai:"oxathiapiprolin", moa:"49", note:"Highly effective; single-site, always in mixture." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site protectant, backbone of resistance management." },
    { ai:"azoxystrobin", moa:"11", note:"QoI resistance is widespread in P. infestans — do not rely on it alone." },
    { ai:"cymoxanil", moa:"27", note:"Curative activity on recent infections; limited residual." }
  ],
  resistance:"Resistance to phenylamides (metalaxyl/mefenoxam) is widespread in many regions; QoI resistance is common. Always mix single-site products with a multi-site partner and limit the number of applications per group.",
  lookalikes:[
    { n:"Alternaria solani", d:"Lesions are brown with concentric rings, drier, no white sporulation." },
    { n:"Botrytis", d:"Grey fuzzy sporulation, usually on senescing tissue or wounds." },
    { n:"Nutrient deficiency / sunscald", d:"Uniform patterns without sporulation or lesion expansion." }
  ],
  role:"Pathogen"
},

{
  id:"alternaria-solani", kind:"disease", type:"Fungus",
  name:"Early blight", sci:"Alternaria solani", fr:"Alternariose",
  crops:["tomato","potato"],
  organs:["leaf","stem","fruit"],
  symptoms:["concentric-spots","necrotic-spots","defoliation","sunken-lesion"],
  stage:"Foliar lesions and fruit infection",
  tagline:"The 'early' blight that arrives late — it exploits stressed, ageing plants.",
  bio:"Survives in crop debris and soil. Conidia are spread by wind and rain. Lesions are dark brown with concentric rings and a chlorotic halo, typically starting on older leaves. Warm humid weather with alternating wet and dry periods favours epidemics.",
  damage:"Progressive defoliation reduces yield and exposes fruit to sunscald; fruit lesions cause direct loss.",
  favours:"Warm humid weather with leaf wetness, poor nutrition, low potassium, dense canopy, continuous solanaceous cropping.",
  monitoring:"Weekly assessment of lower and middle leaves; record lesion number and defoliation. Track the disease from first fruit set.",
  threshold:"About 1–3 lesions per leaf on lower leaves, or 10% defoliation. Protectant programmes usually start before symptoms appear on susceptible crops.",
  severity:3,
  dz:"Common in both tomato and potato, especially under stress.",
  ipm:{
    cultural:["Rotate away from solanaceae for 2–3 years.","Maintain balanced potassium and nitrogen.","Mulch to reduce soil splash.","Stake and prune for airflow.","Remove infected debris after harvest."],
    biological:["Bacillus subtilis and Trichoderma-based products as protectants.","Bacillus amyloliquefaciens in some registered products."],
    mechanical:["Remove lower infected leaves; avoid overhead irrigation."],
    biotech:["Weather and irrigation-based forecasting reduces unnecessary sprays."]
  },
  chem:[
    { ai:"boscalid + pyraclostrobin", moa:"7 + 11", note:"Mixture; strong resistance management logic." },
    { ai:"difenoconazole", moa:"3", note:"DMI, curative and protectant." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site protectant." },
    { ai:"azoxystrobin", moa:"11", note:"QoI resistance in Alternaria is common — use only in mixture." }
  ],
  resistance:"QoI and SDHI resistance in A. solani is documented. Rotate 3, 7, 11 with multi-site partners.",
  lookalikes:[
    { n:"Late blight", d:"Water-soaked, irregular lesions with white sporulation; much faster." },
    { n:"Septoria leaf spot", d:"Small circular spots with pale centres and dark margins, no concentric rings." },
    { n:"Magnesium deficiency", d:"Interveinal chlorosis with no necrotic lesion." }
  ],
  role:"Pathogen"
},

{
  id:"botrytis-cinerea", kind:"disease", type:"Fungus",
  name:"Grey mould", sci:"Botrytis cinerea", fr:"Pourriture grise",
  crops:["tomato","grape","stonefruit","pome","cucurbits"],
  organs:["fruit","flower","stem","leaf"],
  symptoms:["soft-rot","flower-blight","canker","store-rot"],
  stage:"Conidial infection of senescing or wounded tissue",
  tagline:"An opportunist: it enters through flowers, wounds and dying tissue, not through healthy leaves.",
  bio:"An ubiquitous necrotroph surviving as sclerotia and mycelium in debris. Conidia are airborne and infect through flowers, pruning wounds and senescing tissue. High humidity and free water are essential; the fungus then spreads from flower to fruit.",
  damage:"Fruit rot in the field and in storage; stem cankers can kill vines and plants.",
  favours:"High humidity, free water, dense canopies, flower debris, wounds, cool nights with warm days, excessive nitrogen.",
  monitoring:"Inspect flowers and pruning wounds during humid periods; in grapes, monitor bunch closure. Postharvest inspection is essential.",
  threshold:"No reliable count threshold; act preventively on weather and phenology (flowering, bunch closure, wounding).",
  severity:4,
  dz:"Universal; a major postharvest problem in table grapes and stone fruit.",
  ipm:{
    cultural:["Prune and train for airflow; remove senescing leaves.","Avoid excessive nitrogen.","Minimise wounding; prune in dry weather.","Remove flower debris and infected fruit.","Harvest in dry conditions and cool rapidly."],
    biological:["Trichoderma harzianum on pruning wounds.","Bacillus subtilis and Aureobasidium pullulans as protectants.","Gliocladium roseum (where registered)."],
    mechanical:["Leaf removal around bunches in grape.","Careful handling to avoid wounds; controlled atmosphere storage."],
    biotech:["Humidity and temperature monitoring in storage guides ventilation decisions."]
  },
  chem:[
    { ai:"boscalid + pyraclostrobin", moa:"7 + 11", note:"Effective mixture; both components are resistance-prone." },
    { ai:"fludioxonil", moa:"12", note:"Strong antisporulant; low resistance risk." },
    { ai:"cyprodinil + fludioxonil", moa:"9 + 12", note:"Standard grape and stone-fruit preharvest option." },
    { ai:"fenhexamid", moa:"17", note:"Specific anti-Botrytis activity." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site partner." }
  ],
  resistance:"B. cinerea has a high resistance risk to MBCs (1), dicarboximides (2) and QoIs (11). Limit each group to one or two applications per season and alternate with 12, 17 and multi-sites.",
  lookalikes:[
    { n:"Sclerotinia", d:"White cottony mycelium and black sclerotia, not grey conidia." },
    { n:"Penicillium rot", d:"Blue-green spores, usually postharvest wounds." },
    { n:"Rhizopus rot", d:"Whiskery white mycelium with black sporangia; very rapid." }
  ],
  role:"Pathogen"
},

{
  id:"fusarium-lycopersici", kind:"disease", type:"Fungus",
  name:"Fusarium wilt of tomato", sci:"Fusarium oxysporum f. sp. lycopersici", fr:"Fusariose vasculaire",
  crops:["tomato"],
  organs:["whole","stem","leaf"],
  symptoms:["collapse","vascular-browning","chlorosis","stunting","dieback"],
  stage:"Root infection, then systemic colonisation of xylem",
  tagline:"One-sided yellowing and brown vessels — the plant cannot be saved once wilted.",
  bio:"A soilborne fungus surviving as chlamydospores for many years. It enters through roots and colonises the xylem, causing vascular occlusion. Three races exist; race 3 overcomes the I-2 resistance gene. Symptoms often start on one side of the plant, with yellowing of lower leaves.",
  damage:"Progressive wilt and plant death; in infested soil, successive tomato crops become uneconomic.",
  favours:"Warm soils, susceptible varieties, continuous tomato cropping, root wounds, poor drainage.",
  monitoring:"Split stems lengthwise to check for brown vascular discolouration. Confirm by laboratory isolation — Verticillium and Fusarium look similar in the field.",
  threshold:"Not applicable. Once infested, the field remains a risk; manage by variety and rotation.",
  severity:4,
  dz:"Important in repeated tomato cropping, especially under cover.",
  ipm:{
    cultural:["Grow resistant varieties with the appropriate race resistance.","Rotate with non-host cereals for 3–4 years.","Soil solarisation in hot climates reduces inoculum.","Graft onto resistant rootstock in protected crops.","Disinfest tools and avoid moving infested soil."],
    biological:["Trichoderma harzianum and T. asperellum applied to soil or substrate.","Bacillus subtilis soil drenches (suppressive, not curative)."],
    mechanical:["Remove and destroy infected plants with root ball.","Improve drainage; avoid root wounding."],
    biotech:["Soil diagnostics before planting guide variety choice."]
  },
  chem:[
    { ai:"—", moa:"—", note:"No effective foliar cure. Soil fungicides have limited and inconsistent efficacy; resistance and variety choice are the tools." }
  ],
  resistance:"Race 3 overcomes I-2; use varieties with I-3 where available. Trichoderma populations should be rotated to avoid selection.",
  lookalikes:[
    { n:"Verticillium wilt", d:"Similar one-sided wilt, cooler soils, wider host range." },
    { n:"Bacterial wilt (Ralstonia)", d:"Sudden collapse with sticky bacterial ooze from cut stems." },
    { n:"Root-knot nematode", d:"Galls on roots, general decline, often co-occurs with Fusarium." }
  ],
  role:"Pathogen"
},

{
  id:"pseudoperonospora-cubensis", kind:"disease", type:"Oomycete",
  name:"Cucurbit downy mildew", sci:"Pseudoperonospora cubensis", fr:"Mildiou des cucurbitacées",
  crops:["cucurbits"],
  organs:["leaf"],
  symptoms:["chlorosis","downy-growth","necrotic-spots","defoliation"],
  stage:"Airborne sporangia infecting leaves",
  tagline:"Angular yellow lesions bounded by veins — and a very short incubation window.",
  bio:"Obligate biotroph; does not survive long in soil. Sporangia arrive on wind, sometimes over long distances, and infect in the presence of leaf wetness. Lesions are angular, bounded by veins, yellow above and bearing grey-purple sporulation below.",
  damage:"Rapid defoliation and yield loss; young fruit may be sunburnt or aborted.",
  favours:"High humidity, leaf wetness, moderate temperatures, dense canopy, overhead irrigation.",
  monitoring:"Twice-weekly scouting of lower leaves; check the underside early in the morning for sporulation. Regional forecasts of sporangia movement are useful.",
  threshold:"First lesion is the trigger in susceptible cultivars; protectant programmes start before canopy closure in high-risk periods.",
  severity:4,
  dz:"Common in all cucurbit crops, especially under cover.",
  ipm:{
    cultural:["Use resistant or tolerant cultivars.","Widen spacing; prune for airflow.","Irrigate early in the day, preferably drip.","Remove infected leaves and crop debris."],
    biological:["Bacillus subtilis and other antagonists as protectants.","Copper-based products in organic systems."],
    mechanical:["Canopy management to reduce leaf wetness duration."],
    biotech:["Weather-based forecasting reduces spray frequency."]
  },
  chem:[
    { ai:"mandipropamid", moa:"40", note:"Protectant and antisporulant." },
    { ai:"cyazofamid", moa:"21", note:"Strong antisporulant." },
    { ai:"fluopicolide", moa:"43", note:"Mixtures available; verify registration." },
    { ai:"oxathiapiprolin", moa:"49", note:"Highly effective, single-site — always mixed." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site backbone." },
    { ai:"azoxystrobin", moa:"11", note:"QoI resistance is widespread in this pathogen; avoid solo use." }
  ],
  resistance:"QoI resistance is very common; CAA resistance is reported. Rotate 40, 21, 43, 49 with multi-sites, and never apply the same single-site twice in a row.",
  lookalikes:[
    { n:"Powdery mildew", d:"White powdery growth on the upper surface; no angular lesions." },
    { n:"Angular leaf spot (bacteria)", d:"Water-soaked, angular lesions without sporulation; ooze test positive." },
    { n:"Nutrient deficiency", d:"Interveinal yellowing without lesions or sporulation." }
  ],
  role:"Pathogen"
},

{
  id:"podosphaera-xanthii", kind:"disease", type:"Fungus",
  name:"Cucurbit powdery mildew", sci:"Podosphaera xanthii", fr:"Oïdium des cucurbitacées",
  crops:["cucurbits"],
  organs:["leaf","stem"],
  symptoms:["white-powder","chlorosis","defoliation"],
  stage:"Airborne conidia on the leaf surface",
  tagline:"White powder on the upper surface — and one of the fastest fungicide-resistance stories.",
  bio:"An obligate biotroph that grows on the leaf surface and draws nutrients through haustoria. Conidia are airborne; the disease progresses rapidly in warm, dry days with high humidity at night. Unlike downy mildew, free water on the leaf is not required.",
  damage:"Reduced photosynthesis, premature senescence and yield loss; fruit may ripen poorly and be sunscalded.",
  favours:"Warm days, high humidity at night, dense canopy, susceptible cultivars, repeated DMI or QoI use.",
  monitoring:"Weekly inspection for white colonies, starting on older shaded leaves; record the percentage of leaf area affected.",
  threshold:"About 5% of leaf area affected, or first colonies in a susceptible cultivar.",
  severity:3,
  dz:"Common in cucurbit crops and greenhouses.",
  ipm:{
    cultural:["Resistant cultivars are the primary tool.","Prune for airflow and light.","Avoid excessive nitrogen.","Remove infected debris."],
    biological:["Bacillus subtilis, Bacillus amyloliquefaciens and Trichoderma products.","Milk or potassium bicarbonate sprays in organic systems (suppressive)."],
    mechanical:["Canopy management; overhead irrigation can reduce spore dispersal in some systems but increases other risks."],
    biotech:["None specific; variety choice dominates."]
  },
  chem:[
    { ai:"sulfur", moa:"M02", note:"Multi-site; phytotoxic above 30 °C." },
    { ai:"difenoconazole", moa:"3", note:"DMI; resistance is common." },
    { ai:"boscalid", moa:"7", note:"SDHI; resistance reported." },
    { ai:"azoxystrobin", moa:"11", note:"QoI; resistance common." }
  ],
  resistance:"Resistance to DMI, QoI and SDHI fungicides is widespread in P. xanthii. Rotate groups strictly and use sulfur or biologicals in the programme.",
  lookalikes:[
    { n:"Downy mildew", d:"Angular yellow lesions with grey sporulation underneath." },
    { n:"Powdery residue of sprays", d:"Uniform coating, no colony growth, washes off." }
  ],
  role:"Pathogen"
},

{
  id:"peronospora-destructor", kind:"disease", type:"Oomycete",
  name:"Onion downy mildew", sci:"Peronospora destructor", fr:"Mildiou de l'oignon",
  crops:["onion"],
  organs:["leaf","shoot","storage"],
  symptoms:["chlorosis","downy-growth","dieback","store-rot"],
  stage:"Systemic infection from bulbs and airborne sporangia",
  tagline:"Pale elongated lesions with a violet-grey bloom — and a bulb that will not store.",
  bio:"Survives in infected bulbs and debris. Systemic infection produces pale, elongated lesions with grey-violet sporulation in humid mornings. Sporangia are wind-dispersed and infect leaves in wet conditions. The pathogen can also infect the bulb, causing storage losses.",
  damage:"Leaf loss and reduced bulb size; infected bulbs rot in store.",
  favours:"Cool humid weather, long leaf wetness, dense crops, infected sets and bulbs, overhead irrigation.",
  monitoring:"Inspect crops in the early morning for sporulation; track leaf wetness periods. Weather-based models support timing.",
  threshold:"First lesions in a susceptible crop justify protectant treatment; the disease is difficult to stop once established.",
  severity:4,
  dz:"Important in northern onion-growing areas and in wet seasons.",
  ipm:{
    cultural:["Use healthy sets and certified seed.","Rotate away from Allium crops for 3 years.","Wide rows and good airflow.","Irrigate in the morning; avoid evening overhead irrigation.","Cure bulbs thoroughly and store cool and dry."],
    biological:["Bacillus subtilis and other antagonists as protectants; limited efficacy."],
    mechanical:["Remove infected leaves and cull bulbs.","Improve ventilation in store."],
    biotech:["Weather-based forecasting for spray timing."]
  },
  chem:[
    { ai:"mandipropamid", moa:"40", note:"Protectant against oomycetes." },
    { ai:"dimethomorph + mancozeb", moa:"40 + M03", note:"Mixture for resistance management." },
    { ai:"azoxystrobin", moa:"11", note:"Resistance risk; use in mixture only." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site protectant." }
  ],
  resistance:"QoI and CAA resistance is reported in some regions. Rotate groups and include multi-sites.",
  lookalikes:[
    { n:"Botrytis leaf blight", d:"White spots with green halos, grey sporulation on dead tissue." },
    { n:"Purple blotch (Alternaria porri)", d:"Purple-brown lesions with concentric rings, no violet bloom." },
    { n:"Thrips damage", d:"Silvery streaks, no sporulation." }
  ],
  role:"Pathogen"
},

{
  id:"plasmopara-viticola", kind:"disease", type:"Oomycete",
  name:"Grapevine downy mildew", sci:"Plasmopara viticola", fr:"Mildiou de la vigne",
  crops:["grape"],
  organs:["leaf","shoot","fruit"],
  symptoms:["chlorosis","downy-growth","necrotic-spots","soft-rot","defoliation"],
  stage:"Overwintering oospores, then zoospore infection after rain",
  tagline:"The 10-10-24 rule still shapes the spray calendar: 10 mm rain, 10 °C, 24 h wetness.",
  bio:"Oospores survive in fallen leaves and release zoospores after spring rain. Infection requires rain and warmth; 'oil spots' appear on the upper leaf surface with white down on the underside. Secondary cycles repeat every 5–14 days. Fruit infection causes 'millerandage' and grey rot.",
  damage:"Defoliation, poor fruit set, direct berry infection and reduced winter hardiness. In wet years, losses can be total.",
  favours:"Spring and summer rain, high humidity, dense canopy, susceptible cultivars, vineyards near infected debris.",
  monitoring:"Weather stations plus scouting for oil spots from bud break. The first oil spot is a critical warning; regional forecast services are reliable.",
  threshold:"Protect new growth before rain events; the first oil spot triggers immediate action. Do not use calendar sprays when the risk model is negative.",
  severity:5,
  dz:"The dominant grape disease in northern Algeria; severe in humid years.",
  ipm:{
    cultural:["Train and prune for airflow; remove laterals.","Remove fallen leaves in autumn to reduce oospores.","Choose resistant or tolerant cultivars.","Avoid excessive nitrogen."],
    biological:["Bacillus subtilis, Aureobasidium pullulans and Trichoderma products.","Copper-based products in organic viticulture (watch soil accumulation)."],
    mechanical:["Leaf removal around bunches; canopy management."],
    biotech:["Weather-station-driven decision support is the standard of care in humid regions."]
  },
  chem:[
    { ai:"mandipropamid", moa:"40", note:"Strong protectant and antisporulant." },
    { ai:"cyazofamid", moa:"21", note:"QiI, highly effective." },
    { ai:"fluopicolide", moa:"43", note:"Usually in mixture." },
    { ai:"oxathiapiprolin", moa:"49", note:"Excellent, single-site — mix." },
    { ai:"copper hydroxide", moa:"M01", note:"Multi-site; organic mainstay. Copper accumulation is a soil concern." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site partner." },
    { ai:"azoxystrobin", moa:"11", note:"QoI resistance widespread in Europe; use only in mixture and sparingly." }
  ],
  resistance:"QoI resistance is widespread; CAA resistance is reported. Limit each single-site group to 2–3 applications per season and always partner with a multi-site.",
  lookalikes:[
    { n:"Powdery mildew", d:"White powder on both surfaces, no oil spots." },
    { n:"Black rot (Guignardia)", d:"Brown lesions with black pycnidia; berry shrivelling." },
    { n:"Herbicide drift", d:"Uniform distortion without sporulation." }
  ],
  role:"Pathogen"
},

{
  id:"erysiphe-necator", kind:"disease", type:"Fungus",
  name:"Grapevine powdery mildew", sci:"Erysiphe necator", fr:"Oïdium de la vigne",
  crops:["grape"],
  organs:["leaf","shoot","fruit"],
  symptoms:["white-powder","chlorosis","scarring","soft-rot"],
  stage:"Airborne conidia; no free water needed",
  tagline:"It does not need rain — which is why it is missed in dry seasons.",
  bio:"Overwinters as cleistothecia on bark or as mycelium in buds. Conidia germinate at high humidity without free water. Colonies appear as ash-white patches on leaves and shoots; berry infection causes russeting, cracking and rot.",
  damage:"Reduced photosynthesis, berry cracking and rot, and wine quality loss. Even low incidence causes scarring on table grapes.",
  favours:"Warm dry days with humid nights, dense canopy, susceptible cultivars, low sulfur use.",
  monitoring:"Scout from bud break, especially shaded leaves and bunches; record colony incidence. Flag shoots (from infected buds) appear early and are a key warning.",
  threshold:"First colony or flag shoot in a susceptible cultivar. Table grapes require very low tolerance.",
  severity:4,
  dz:"Present in all vineyards; significant in dry warm seasons.",
  ipm:{
    cultural:["Remove flag shoots as soon as seen.","Canopy management for light and airflow.","Avoid excessive nitrogen.","Choose less susceptible cultivars."],
    biological:["Sulfur is the reference low-risk product.","Bacillus subtilis and Ampelomyces quisqualis (hyperparasite)."],
    mechanical:["Leaf removal around bunches; shoot thinning."],
    biotech:["Weather and phenology models guide the first application."]
  },
  chem:[
    { ai:"sulfur", moa:"M02", note:"Multi-site; avoid above 30 °C to prevent burn." },
    { ai:"difenoconazole", moa:"3", note:"DMI; resistance common." },
    { ai:"boscalid", moa:"7", note:"SDHI; resistance reported." },
    { ai:"quinoxyfen", moa:"13", note:"Specific activity; resistance risk." },
    { ai:"azoxystrobin", moa:"11", note:"QoI; resistance widespread." }
  ],
  resistance:"Resistance to DMI, QoI and SDHI is documented worldwide. Rotate groups, limit applications, and use sulfur as a backbone.",
  lookalikes:[
    { n:"Downy mildew", d:"Oil spots with downy sporulation underneath; needs rain." },
    { n:"Spray residue", d:"Uniform, removable, no mycelium." }
  ],
  role:"Pathogen"
},

{
  id:"venturia-inaequalis", kind:"disease", type:"Fungus",
  name:"Apple scab", sci:"Venturia inaequalis", fr:"Tavelure du pommier",
  crops:["pome"],
  organs:["leaf","fruit","shoot"],
  symptoms:["necrotic-spots","sunken-lesion","scarring","defoliation"],
  stage:"Ascospore release from overwintered leaves in spring",
  tagline:"Spring ascospore release plus leaf wetness equals infection — the Mills table still works.",
  bio:"Overwinters in fallen leaves as pseudothecia. Ascospores are released during spring rain and infect young leaves and fruit. Secondary conidia spread during the season. Lesions are olive-green, velvety, later becoming dark and scabby.",
  damage:"Leaf and fruit scab, cracking and deformation; severe losses in unsprayed orchards and in wet springs.",
  favours:"Wet spring weather, susceptible cultivars, unraked leaf litter, dense canopy.",
  monitoring:"Assess ascospore maturity and leaf wetness from bud break; scouting for primary lesions is critical. Weather-driven models (Mills-type) guide timing.",
  threshold:"Protect from bud break to the end of primary infection; the first lesions signal that the programme has failed.",
  severity:4,
  dz:"Main pome disease in Batna, Khenchela and Sétif, in wet spring years.",
  ipm:{
    cultural:["Rake or shred fallen leaves; apply urea to accelerate decomposition.","Choose scab-resistant cultivars (Vf gene).","Prune for airflow and rapid drying.","Avoid excessive nitrogen."],
    biological:["Bacillus subtilis and Trichoderma products; limited compared with conventional programmes.","Urea treatment of leaf litter reduces ascospore production."],
    mechanical:["Leaf removal and orchard sanitation in autumn."],
    biotech:["Ascospore maturity models and leaf wetness sensors are the standard decision tools."]
  },
  chem:[
    { ai:"dodine", moa:"U12", note:"Protectant with some curative activity." },
    { ai:"difenoconazole", moa:"3", note:"DMI, strong curative." },
    { ai:"boscalid + pyraclostrobin", moa:"7 + 11", note:"Mixture, effective." },
    { ai:"cyprodinil", moa:"9", note:"Anilinopyrimidine; good against primary infection." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site protectant." }
  ],
  resistance:"Resistance to DMI and QoI is documented in V. inaequalis. Rotate 3, 7, 9 and multi-sites; limit each group per season.",
  lookalikes:[
    { n:"Sooty blotch / flyspeck", d:"Superficial dark smudges, not scabby lesions." },
    { n:"Fire blight", d:"Shoot dieback and bacterial ooze, not scab lesions." },
    { n:"Calcium injury", d:"Pitting without velvety sporulation." }
  ],
  role:"Pathogen"
},

{
  id:"erwinia-amylovora", kind:"disease", type:"Bacterium",
  name:"Fire blight", sci:"Erwinia amylovora", fr:"Feu bactérien",
  crops:["pome"],
  organs:["shoot","flower","fruit","stem"],
  symptoms:["dieback","flower-blight","canker","gummosis"],
  stage:"Bloom infection, then systemic movement",
  tagline:"A regulatory disease: report it, do not try to manage it alone.",
  bio:"A bacterium that infects through flowers and wounds during warm, wet weather. It moves systemically in the vascular tissue, causing rapid blackening of shoots ('shepherd's crook') and cankers with bacterial ooze. Spread by insects, rain splash, pruning tools and infected nursery stock.",
  damage:"Rapid loss of branches, whole trees and eventually orchards. Quarantine restrictions affect movement of plant material.",
  favours:"Warm weather (18–25 °C) at bloom with rain or high humidity, hail or insect wounds, susceptible cultivars, vigorous growth.",
  monitoring:"Inspect bloom and young shoots daily in warm wet weather. Any suspect symptom must be reported to the plant protection service; laboratory confirmation is required.",
  threshold:"Zero tolerance. Eradication and official containment measures apply.",
  severity:5,
  quarantine:true,
  dz:"Regulated; outbreaks have occurred in northern orchards. Immediate notification is mandatory.",
  ipm:{
    cultural:["Use certified, disease-free planting material.","Avoid excessive nitrogen and vigorous growth.","Disinfest pruning tools between trees (70% alcohol or approved disinfectant).","Remove and destroy infected branches 30–40 cm below the visible lesion, in dry weather.","Choose resistant cultivars where possible."],
    biological:["Bacillus subtilis and Pantoea agglomerans antagonists at bloom (where registered).","Blossom protection with biological products is a preventive strategy."],
    mechanical:["Strict tool disinfection; remove cankers in winter.","Avoid hail nets that trap moisture? (site-specific) — prioritise wound prevention."],
    biotech:["Risk models (Maryblyt-type) guide bloom protection; official services coordinate action."]
  },
  chem:[
    { ai:"copper compounds", moa:"M01", note:"Protectant against bloom infection; phytotoxicity risk on some cultivars." },
    { ai:"—", moa:"—", note:"Antibiotic use is restricted or banned in many countries. Never use without explicit national authorisation." }
  ],
  resistance:"Copper resistance in E. amylovora is reported; biological antagonists reduce selection pressure.",
  lookalikes:[
    { n:"Pseudomonas syringae (blossom blast)", d:"Similar bloom and shoot symptoms; laboratory isolation needed." },
    { n:"Nectria canker", d:"Fungal cankers with orange-red fruiting bodies, slower progress." },
    { n:"Herbicide injury", d:"Uniform shoot distortion without ooze or systemic spread." }
  ],
  role:"Pathogen — quarantine"
},

{
  id:"colletotrichum-olive", kind:"disease", type:"Fungus",
  name:"Olive anthracnose", sci:"Colletotrichum spp. (C. gloeosporioides, C. acutatum)", fr:"Anthracnose de l'olivier",
  crops:["olive"],
  organs:["fruit","leaf","shoot"],
  symptoms:["soft-rot","premature-drop","dieback","necrotic-spots"],
  stage:"Conidial infection during wet autumn weather",
  tagline:"Rotting fruit and falling leaves — the autumn rain decides the oil quality.",
  bio:"Fungi that survive in mummified fruit and twigs. Conidia are spread by rain splash during autumn. Fruit develop sunken brown rot with orange-pink spore masses; leaves may show chlorosis and drop.",
  damage:"Direct fruit rot, premature drop and severe oil quality loss (acidity, off-flavours).",
  favours:"Wet autumn weather, dense canopy, susceptible cultivars, fruit left on trees, overhead irrigation.",
  monitoring:"Inspect fruit from September, especially after rain; record the percentage of rotted fruit.",
  threshold:"About 5–10% affected fruit, or forecast rain during ripening in a susceptible cultivar.",
  severity:3,
  dz:"Important in humid coastal groves; severe in wet autumns.",
  ipm:{
    cultural:["Harvest early, before autumn rains.","Remove mummified fruit and dead wood.","Prune for airflow.","Avoid overhead irrigation during ripening."],
    biological:["Bacillus subtilis and Trichoderma products as protectants."],
    mechanical:["Canopy management; sanitation pruning."],
    biotech:["Rain-driven forecasting guides the few necessary sprays."]
  },
  chem:[
    { ai:"copper hydroxide", moa:"M01", note:"Standard protectant in olive; apply before rain events." },
    { ai:"azoxystrobin", moa:"11", note:"QoI; use only where registered and in mixture." },
    { ai:"difenoconazole", moa:"3", note:"DMI; check registration for olive." }
  ],
  resistance:"QoI resistance in Colletotrichum is reported; copper remains the backbone.",
  lookalikes:[
    { n:"Olive fly damage", d:"Entry holes and larvae, not orange spore masses." },
    { n:"Peacock spot", d:"Leaf spots with concentric rings and greenish halos, not fruit rot." },
    { n:"Bactrocera damage with secondary fungi", d:"Primary cause is the insect; rot follows." }
  ],
  role:"Pathogen"
},

{
  id:"spilocaea-oleagina", kind:"disease", type:"Fungus",
  name:"Olive peacock spot", sci:"Venturia oleaginea (ex Spilocaea oleagina)", fr:"Œil de paon",
  crops:["olive"],
  organs:["leaf","shoot","fruit"],
  symptoms:["necrotic-spots","chlorosis","defoliation","premature-drop"],
  stage:"Conidial infection of leaves in wet weather",
  tagline:"Sooty rings on leaves and a slow, cumulative loss of canopy.",
  bio:"Overwinters on infected leaves. Conidia spread by rain splash during cool wet weather, mainly autumn to spring. Lesions are dark green-black spots with a yellow halo, later becoming concentric rings. Heavy infection causes leaf drop and weakens the tree.",
  damage:"Defoliation, reduced flowering and yield, and increased susceptibility to other stresses.",
  favours:"Cool wet winters and springs, dense canopy, susceptible cultivars, coastal humidity.",
  monitoring:"Inspect 100 leaves per block in autumn and spring; record incidence and severity.",
  threshold:"About 10–20% of leaves affected, or defoliation in spring.",
  severity:3,
  dz:"Widespread in northern olive groves; severe in wet years.",
  ipm:{
    cultural:["Prune for airflow and light.","Avoid excessive nitrogen.","Choose resistant cultivars.","Remove heavily infected leaves where practical."],
    biological:["Copper-based products are the main preventive option; biological alternatives have limited efficacy."],
    mechanical:["Canopy management; sanitation."],
    biotech:["Autumn and spring infection risk is driven by rainfall; time sprays accordingly."]
  },
  chem:[
    { ai:"copper hydroxide", moa:"M01", note:"Apply in autumn and/or spring before infection periods." },
    { ai:"dodine", moa:"U12", note:"Where registered for olive." },
    { ai:"difenoconazole", moa:"3", note:"Check national registration before use." }
  ],
  resistance:"Copper resistance is not a major issue; the main risk is phytotoxicity and soil accumulation.",
  lookalikes:[
    { n:"Olive leaf spot (Cercospora)", d:"Different lesion morphology; requires laboratory confirmation." },
    { n:"Winter cold injury", d:"Uniform browning, no rings." },
    { n:"Nutrient deficiency", d:"Interveinal yellowing without discrete spots." }
  ],
  role:"Pathogen"
},

{
  id:"verticillium-dahliae", kind:"disease", type:"Fungus",
  name:"Verticillium wilt", sci:"Verticillium dahliae", fr:"Verticilliose",
  crops:["olive","tomato","potato","stonefruit"],
  organs:["whole","stem","leaf"],
  symptoms:["collapse","vascular-browning","chlorosis","dieback","stunting"],
  stage:"Root infection, systemic colonisation",
  tagline:"A soilborne wilt with no cure — the field, not the plant, is the patient.",
  bio:"Survives as microsclerotia in soil for over a decade. Enters through roots and colonises xylem, causing one-sided wilt, dieback and vascular browning. Cool soils favour symptom expression, but infection occurs over a wide temperature range.",
  damage:"Progressive decline, branch dieback and tree death in olive; yield loss and plant death in annual crops.",
  favours:"Infested soil, susceptible cultivars, continuous cropping, root wounds, stress.",
  monitoring:"Split stems and branches to inspect vascular browning; laboratory isolation is required for confirmation. In olive, flagging branches are the first sign.",
  threshold:"Not applicable. Once soil is infested, management is preventive.",
  severity:4,
  dz:"Present in olive groves and vegetable fields; often underestimated.",
  ipm:{
    cultural:["Use resistant cultivars and rootstocks where available.","Long rotations with cereals and non-hosts.","Soil solarisation in hot climates.","Avoid moving infested soil and plant debris.","Remove and destroy infected trees, including roots."],
    biological:["Trichoderma spp. and Bacillus subtilis soil applications (suppressive).","Organic amendments that increase antagonistic microflora."],
    mechanical:["Solarisation with plastic mulch for 4–6 weeks in summer.","Avoid root wounding during cultivation."],
    biotech:["Soil testing before planting high-value orchards."]
  },
  chem:[
    { ai:"—", moa:"—", note:"No effective chemical cure. Fumigation is restricted, expensive and rarely justified; solarisation and resistance are the practical tools." }
  ],
  resistance:"Cultivar resistance is the only durable strategy; strains differ in virulence.",
  lookalikes:[
    { n:"Fusarium wilt", d:"Similar vascular symptoms; laboratory isolation needed." },
    { n:"Olive quick decline (Xylella)", d:"Sudden scorching and dieback; quarantine pathogen." },
    { n:"Drought stress", d:"Uniform wilting that recovers after irrigation." }
  ],
  role:"Pathogen"
},

{
  id:"bayoud", kind:"disease", type:"Fungus",
  name:"Bayoud (date palm vascular wilt)", sci:"Fusarium oxysporum f. sp. albedinis", fr:"Bayoud",
  crops:["datepalm"],
  organs:["leaf","whole","stem"],
  symptoms:["chlorosis","dieback","collapse","vascular-browning"],
  stage:"Root infection, then systemic spread to the crown",
  tagline:"The most destructive date palm disease in North Africa — and it is incurable.",
  bio:"A soilborne fungus specific to date palm. It enters through roots and colonises the vascular system, causing progressive whitening and death of fronds, always on one side first. The palm dies within months to a few years. Spread by infected offshoots, soil, and irrigation water.",
  damage:"Total loss of the palm; groves can be destroyed over decades. 'Deglet Nour' is highly susceptible.",
  favours:"Movement of infected offshoots, contaminated soil and water, susceptible cultivars, continuous palm cropping.",
  monitoring:"Look for one-sided frond whitening and death, starting on outer fronds. Laboratory isolation from vascular tissue is essential; symptoms resemble other wilt diseases.",
  threshold:"Zero tolerance. Suspect cases must be reported and confirmed officially.",
  severity:5,
  quarantine:true,
  dz:"Present in western and south-western oases; a national priority. Strict movement controls apply.",
  ipm:{
    cultural:["Plant resistant cultivars (e.g. 'Boufeggous', 'Medjool' where adapted) — the only real control.","Never move offshoots from infested areas.","Use clean irrigation water and disinfested tools.","Remove and destroy infected palms, including roots, under official supervision.","Do not replant palms in infested pits."],
    biological:["Trichoderma and Bacillus applications have shown suppression in trials, not cure."],
    mechanical:["Sanitation and quarantine; soil solarisation is impractical at palm scale."],
    biotech:["Molecular diagnostics and certification schemes for offshoot propagation."]
  },
  chem:[
    { ai:"—", moa:"—", note:"No chemical control exists. Do not apply fungicides expecting a cure." }
  ],
  resistance:"Resistance is quantitative and cultivar-dependent; the Deglet Nour monoculture is the core vulnerability.",
  lookalikes:[
    { n:"Fusarium wilt (other formae speciales)", d:"Requires laboratory differentiation." },
    { n:"Red palm weevil", d:"Internal galleries and frass, not vascular discolouration alone." },
    { n:"Salinity and drought stress", d:"Uniform frond tip burn, no one-sided progression." }
  ],
  role:"Pathogen — quarantine"
},

{
  id:"phytophthora-gummosis", kind:"disease", type:"Oomycete",
  name:"Citrus gummosis and root rot", sci:"Phytophthora spp. (P. citrophthora, P. parasitica)", fr:"Gommose des agrumes",
  crops:["citrus"],
  organs:["collar","root","stem","fruit"],
  symptoms:["gummosis","collar-rot","root-rot","canker","collapse"],
  stage:"Soilborne infection of the collar and roots",
  tagline:"Gum on the trunk and a slow decline — the soil line is where the problem starts.",
  bio:"Soilborne oomycetes that infect the bark at or below the soil line, especially where the bud union is buried or irrigation water stands. Lesions exude gum; the bark dies and the tree declines. Splash dispersal can also infect low fruit.",
  damage:"Collar rot, root rot, tree decline and death; fruit infection causes brown rot in wet conditions.",
  favours:"Poor drainage, over-irrigation, buried bud union, wounds, heavy soil, wet winters.",
  monitoring:"Inspect the collar after irrigation and rain; remove soil carefully to check for bark necrosis and gum. Root inspection in declining trees.",
  threshold:"Any active lesion at the collar requires intervention; preventive management is far more effective.",
  severity:4,
  dz:"Important in citrus orchards with heavy soils and flood irrigation.",
  ipm:{
    cultural:["Plant with the bud union well above soil level.","Improve drainage; avoid waterlogging.","Irrigate to avoid trunk wetting; use drip or furrow away from the trunk.","Avoid mechanical injury to the trunk.","Use resistant rootstocks (e.g. sour orange where CTV allows)."],
    biological:["Trichoderma spp. and Gliocladium applied to the collar zone.","Organic mulch to increase antagonistic microflora (keep away from the trunk)."],
    mechanical:["Excise cankers and treat the wound; surgery must reach healthy tissue.","Raise the soil line? No — lower it to expose the collar."],
    biotech:["Soil moisture monitoring prevents the conditions that drive infection."]
  },
  chem:[
    { ai:"mefenoxam", moa:"4", note:"Soil drench or trunk paint; resistance risk high." },
    { ai:"dimethomorph", moa:"40", note:"Where registered for citrus." },
    { ai:"oxathiapiprolin", moa:"49", note:"Check registration; single-site." },
    { ai:"copper hydroxide", moa:"M01", note:"Trunk paint and wound protection." },
    { ai:"fosetyl-Al", moa:"33", note:"Systemic phosphonate, widely used in citrus; verify registration." }
  ],
  resistance:"Phenylamide resistance in Phytophthora is well documented. Rotate with 40, 49 and phosphonates.",
  lookalikes:[
    { n:"Psorosis / tristeza", d:"Viral bark symptoms; no gum at the collar." },
    { n:"Rio Grande gummosis", d:"Gum without bark necrosis; cause uncertain." },
    { n:"Mechanical injury", d:"Clear wound, no advancing lesion." }
  ],
  role:"Pathogen"
},

{
  id:"puccinia-striiformis", kind:"disease", type:"Fungus",
  name:"Yellow (stripe) rust of wheat", sci:"Puccinia striiformis f. sp. tritici", fr:"Rouille jaune",
  crops:["cereals"],
  organs:["leaf","shoot"],
  symptoms:["chlorosis","necrotic-spots","stunting","defoliation"],
  stage:"Airborne urediniospores",
  tagline:"Yellow stripes of pustules that can destroy a crop in three weeks.",
  bio:"An obligate biotroph with airborne urediniospores that can travel hundreds of kilometres. It infects at lower temperatures than other rusts (optimum around 10–15 °C) and appears early in the season. Pustules form in yellow stripes along the veins.",
  damage:"Photosynthetic loss, early senescence and shrivelled grain. Severe epidemics cause 50–100% yield loss in susceptible cultivars.",
  favours:"Cool moist weather, susceptible cultivars, early sowing, dense canopy, prolonged dew.",
  monitoring:"Weekly scouting from tillering; inspect lower and middle leaves. Regional rust forecasts and trap nurseries are valuable.",
  threshold:"First pustules in a susceptible crop justify treatment; do not wait for spread. Protect the flag leaf.",
  severity:5,
  dz:"Recurrent epidemics in northern cereal zones; cultivar choice is decisive.",
  ipm:{
    cultural:["Grow resistant cultivars — the primary and most economic control.","Avoid very early sowing.","Avoid excessive nitrogen.","Remove volunteer cereals that carry the fungus over summer."],
    biological:["Limited practical options; induced resistance products have partial efficacy."],
    mechanical:["None."],
    biotech:["Regional forecasting and variety diversification reduce epidemic risk."]
  },
  chem:[
    { ai:"tebuconazole", moa:"3", note:"DMI; resistance management required." },
    { ai:"boscalid", moa:"7", note:"SDHI; use in mixture." },
    { ai:"azoxystrobin", moa:"11", note:"QoI; resistance reported." },
    { ai:"propiconazole", moa:"3", note:"Same group as tebuconazole." }
  ],
  resistance:"Resistance to DMI and QoI fungicides is reported; SDHI and multi-site mixtures extend the life of the chemistry. Variety resistance is more durable and cheaper.",
  lookalikes:[
    { n:"Brown rust (Puccinia triticina)", d:"Scattered orange-brown pustules, not stripes; warmer requirements." },
    { n:"Septoria", d:"Necrotic lesions with pycnidia, not pustules." },
    { n:"Nutrient deficiency", d:"Uniform yellowing without pustules." }
  ],
  role:"Pathogen"
},

{
  id:"zymoseptoria-tritici", kind:"disease", type:"Fungus",
  name:"Septoria tritici blotch", sci:"Zymoseptoria tritici", fr:"Septoriose du blé",
  crops:["cereals"],
  organs:["leaf","stem"],
  symptoms:["necrotic-spots","chlorosis","defoliation"],
  stage:"Ascospores and rain-splashed conidia",
  tagline:"The flag leaf is the yield — protect it or lose the season.",
  bio:"Overwinters on stubble. Ascospores are released in autumn and winter; conidia spread by rain splash up the canopy. Lesions are pale grey-green with black pycnidia. The disease progresses from lower to upper leaves, and the flag leaf is decisive for yield.",
  damage:"Loss of photosynthetic area on upper leaves; yield losses of 20–50% in severe epidemics.",
  favours:"Wet winters and springs, susceptible cultivars, early sowing, stubble retention, dense canopy.",
  monitoring:"Assess disease on leaves at each growth stage; the flag leaf and leaf 2 are the critical ones. Weather-driven models support timing.",
  threshold:"About 5% of leaf area affected on leaf 3 at stem elongation, or any lesion on the flag leaf.",
  severity:4,
  dz:"Major disease in northern cereal areas with wet springs.",
  ipm:{
    cultural:["Rotate with non-cereal crops; incorporate or remove stubble.","Choose resistant cultivars.","Avoid early sowing.","Balance nitrogen."],
    biological:["Limited; Bacillus-based products have partial efficacy."],
    mechanical:["Stubble management reduces ascospore inoculum."],
    biotech:["Disease models and variety resistance ratings guide decisions."]
  },
  chem:[
    { ai:"tebuconazole", moa:"3", note:"DMI; resistance shifts are common." },
    { ai:"boscalid + epoxiconazole", moa:"7 + 3", note:"Mixture, standard approach." },
    { ai:"azoxystrobin", moa:"11", note:"QoI resistance widespread; mixture only." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site partner." }
  ],
  resistance:"DMI sensitivity shifts and QoI resistance are widespread. Rotate 3, 7, 11 and include multi-sites; do not exceed label limits per group.",
  lookalikes:[
    { n:"Yellow rust", d:"Yellow pustules, not necrotic lesions with pycnidia." },
    { n:"Tan spot (Pyrenophora)", d:"Larger tan lesions with a yellow halo, often earlier." },
    { n:"Nutrient deficiency", d:"Uniform patterns; no pycnidia." }
  ],
  role:"Pathogen"
},

{
  id:"botrytis-fabae", kind:"disease", type:"Fungus",
  name:"Chocolate spot of faba bean", sci:"Botrytis fabae", fr:"Tache chocolat de la fèverole",
  crops:["fababean"],
  organs:["leaf","flower","stem"],
  symptoms:["necrotic-spots","flower-blight","defoliation","dieback"],
  stage:"Conidial infection in humid conditions",
  tagline:"Small chocolate lesions that merge into a defoliating epidemic.",
  bio:"Survives in crop debris and seed. Conidia spread by wind and rain splash; infection requires high humidity. Small reddish-brown spots enlarge and coalesce; aggressive forms can kill whole shoots.",
  damage:"Defoliation, flower loss and reduced pod set; yield losses of 30–50% in wet seasons.",
  favours:"Wet humid weather, dense crops, high nitrogen, susceptible cultivars, continuous legume cropping.",
  monitoring:"Weekly assessment of leaf and flower infection from flowering; record the percentage of leaf area affected.",
  threshold:"About 5–10% of leaf area affected, or lesions reaching the flowers.",
  severity:3,
  dz:"Common in northern faba bean crops in wet springs.",
  ipm:{
    cultural:["Use resistant cultivars where available.","Wide rows and lower sowing density.","Avoid excessive nitrogen.","Rotate away from faba bean for 3 years.","Use clean seed."],
    biological:["Bacillus subtilis and Trichoderma products as protectants."],
    mechanical:["Canopy management; remove infected debris."],
    biotech:["Weather-based risk assessment during flowering."]
  },
  chem:[
    { ai:"chlorothalonil", moa:"M05", note:"Multi-site; withdrawn in the EU — check national registration status." },
    { ai:"boscalid + pyraclostrobin", moa:"7 + 11", note:"Effective mixture." },
    { ai:"tebuconazole", moa:"3", note:"DMI; check registration for faba bean." },
    { ai:"mancozeb", moa:"M03", note:"Multi-site protectant." }
  ],
  resistance:"QoI and DMI resistance in Botrytis spp. is documented; rotate groups.",
  lookalikes:[
    { n:"Leaf spot (Alternaria)", d:"Larger concentric lesions, different pattern." },
    { n:"Rust (Uromyces viciae-fabae)", d:"Orange-brown pustules on both surfaces." },
    { n:"Ascochyta blight", d:"Lesions with pycnidia; laboratory confirmation." }
  ],
  role:"Pathogen"
},

{
  id:"meloidogyne-spp", kind:"disease", type:"Nematode",
  name:"Root-knot nematodes", sci:"Meloidogyne incognita, M. javanica, M. arenaria", fr:"Nématodes à galles",
  crops:["tomato","pepper","cucurbits","potato","stonefruit"],
  organs:["root","whole"],
  symptoms:["root-galls","stunting","chlorosis","collapse"],
  stage:"Second-stage juveniles invading roots",
  tagline:"Galls on roots explain the patch of stunted plants that no fertiliser fixes.",
  bio:"Sedentary endoparasites. Second-stage juveniles invade root tips and establish feeding sites, causing galls. Females lay eggs in a gelatinous matrix in the soil. Several generations per season in warm soils; population density determines damage.",
  damage:"Root dysfunction, stunting, wilting at midday, and yield loss. Galls also create entry points for Fusarium and bacteria.",
  favours:"Sandy soils, warm temperatures, susceptible crops, continuous solanaceous or cucurbit cropping, short rotations.",
  monitoring:"Dig up declining plants and inspect roots for galls; soil sampling for juvenile counts before planting high-value crops.",
  threshold:"About 1–2 juveniles per gram of soil for tomato, depending on the species and cultivar resistance. Damage thresholds vary by soil type.",
  severity:4,
  dz:"Widespread in sandy vegetable soils, especially under cover.",
  ipm:{
    cultural:["Use resistant varieties (Mi gene in tomato).","Rotate with non-host cereals and resistant green manures (e.g. some Brassica crops).","Soil solarisation in summer.","Graft tomato onto resistant rootstock.","Clean equipment and avoid moving infested soil."],
    biological:["Purpureocillium lilacinum and Bacillus firmus products.","Pasteuria penetrans where available.","Organic amendments that build antagonistic communities."],
    mechanical:["Solarisation with transparent plastic for 4–6 weeks.","Biofumigation with Brassica green manure."],
    biotech:["Soil diagnostics before planting guide variety and rotation decisions."]
  },
  chem:[
    { ai:"—", moa:"—", note:"Most chemical nematicides have been withdrawn for environmental and health reasons. Where any remain registered, application is restricted to licensed operators." },
    { ai:"oxamyl", moa:"1A", note:"Highly toxic; verify registration and legal status before any consideration." }
  ],
  resistance:"Mi-mediated resistance can be overcome at high soil temperatures and by virulent populations; monitor galling in resistant varieties.",
  lookalikes:[
    { n:"Nutrient deficiency", d:"No galls; uniform symptoms." },
    { n:"Fusarium/Verticillium wilt", d:"Vascular browning, often co-occurring with nematodes." },
    { n:"Herbicide injury", d:"Root distortion without galls." }
  ],
  role:"Pathogen"
},

{
  id:"sorghum-halepense", kind:"weed",
  name:"Johnsongrass", sci:"Sorghum halepense", fr:"Sorgho d'Alep",
  crops:["tomato","cucurbits","citrus","grape","cereals"],
  organs:["whole"],
  symptoms:["stunting"],
  stage:"Rhizomatous perennial",
  tagline:"A rhizome system that makes tillage a dispersal tool.",
  bio:"A tall perennial grass with vigorous rhizomes and abundant seed. Reproduces both by seed and vegetatively; rhizome fragments regenerate. Competitive against many row crops and difficult to control once established.",
  damage:"Competition for water and nutrients, especially in irrigated crops; yield losses can be substantial in dense patches.",
  favours:"Irrigated fields, disturbed soil, repeated shallow tillage, warm climates.",
  monitoring:"Map patches in late summer when seed heads appear; scout field margins and irrigation channels.",
  threshold:"About 1–2 shoots per square metre justifies intervention in vegetables; lower in young orchards.",
  severity:4,
  dz:"Widespread in irrigated areas, orchards and along channels.",
  ipm:{
    cultural:["Rotate with competitive crops and use stale seedbed techniques.","Repeated cultivation timed to exhaust rhizomes.","Prevent seed set; mow before flowering."],
    biological:["Limited; some fungal pathogens are under study."],
    mechanical:["Repeated deep cultivation in dry conditions; avoid fragmenting rhizomes when soil is wet."],
    biotech:["Spot treatment rather than broadcast where patches are limited."]
  },
  chem:[
    { ai:"glyphosate", moa:"9", note:"Non-selective; apply to actively growing plants, avoiding crop contact. Resistance reported in some regions." },
    { ai:"quizalofop", moa:"1", note:"Grass-selective in broadleaf crops; check crop registration." },
    { ai:"pendimethalin", moa:"15", note:"Pre-emergence suppression." }
  ],
  resistance:"ALS and ACCase resistance is reported in Sorghum halepense; rotate herbicide groups.",
  lookalikes:[
    { n:"Sorghum bicolor (volunteer)", d:"Cultivated sorghum; different panicle and no rhizomes." },
    { n:"Cynodon dactylon", d:"Bermudagrass — lower growth, finer rhizomes." }
  ],
  role:"Weed"
},

{
  id:"convolvulus-arvensis", kind:"weed",
  name:"Field bindweed", sci:"Convolvulus arvensis", fr:"Liseron des champs",
  crops:["cereals","tomato","grape","citrus","fababean"],
  organs:["whole"],
  symptoms:["stunting"],
  stage:"Deep-rooted perennial",
  tagline:"A root system that reaches metres deep — cultivation alone will not solve it.",
  bio:"A twining perennial with an extensive vertical and horizontal root system. Regrows from root fragments; seed remains viable for years. Competes aggressively and interferes with harvest.",
  damage:"Competition, lodging of cereals, and harvesting difficulties. Dense patches reduce yield significantly.",
  favours:"Disturbed soils, orchards, field margins, low-tillage systems.",
  monitoring:"Map patches; check field margins and fence lines where it persists.",
  threshold:"About 2–5 shoots per square metre in cereals; lower in vegetables.",
  severity:3,
  dz:"Widespread in the north, especially in orchards and field margins.",
  ipm:{
    cultural:["Competitive crops and dense canopies suppress growth.","Repeated mowing before flowering depletes reserves.","Rotate with smother crops."],
    biological:["Limited."],
    mechanical:["Repeated cultivation every 2–3 weeks during the growing season, then a deep tillage; consistency matters more than intensity."],
    biotech:["Spot treatment in orchards; avoid drift to sensitive crops."]
  },
  chem:[
    { ai:"2,4-D", moa:"4", note:"Effective in cereals at the right stage; volatility and drift risk." },
    { ai:"glyphosate", moa:"9", note:"Best applied at flowering; repeated applications may be needed." },
    { ai:"dicamba", moa:"4", note:"Where registered; high drift risk." }
  ],
  resistance:"Resistance to synthetic auxins is reported in some regions; rotate modes of action.",
  lookalikes:[
    { n:"Calystegia sepium", d:"Hedge bindweed — larger flowers, similar growth habit." },
    { n:"Convolvulus tricolor", d:"Ornamental, less aggressive." }
  ],
  role:"Weed"
},

{
  id:"cyperus-rotundus", kind:"weed",
  name:"Purple nutsedge", sci:"Cyperus rotundus", fr:"Souchet",
  crops:["tomato","pepper","cucurbits","citrus","onion"],
  organs:["whole"],
  symptoms:["stunting"],
  stage:"Tuber-forming perennial sedge",
  tagline:"The world's worst weed — tubers survive almost any control measure.",
  bio:"A sedge with underground tubers (nutlets) connected by rhizomes. Each tuber can produce new shoots; the chain of tubers makes mechanical control difficult. Thrives in irrigated, warm soils.",
  damage:"Strong competition for water and nutrients, especially in vegetables; allelopathic effects are reported.",
  favours:"Irrigated crops, warm soils, frequent shallow cultivation, moist conditions.",
  monitoring:"Map patches; check the soil for tubers before planting high-value crops.",
  threshold:"About 5–10 shoots per square metre in vegetables; lower in young plantings.",
  severity:4,
  dz:"Common in irrigated vegetable and orchard systems, especially in the south and east.",
  ipm:{
    cultural:["Rotate with competitive crops and smother crops.","Solarisation during the hot season reduces tuber viability.","Avoid moving infested soil between fields."],
    biological:["Limited; some fungal antagonists under study."],
    mechanical:["Repeated cultivation to exhaust tubers, followed by a competitive crop.","Hand removal before tuber formation."],
    biotech:["Solarisation plus stale seedbed is the most reliable non-chemical sequence."]
  },
  chem:[
    { ai:"halosulfuron", moa:"2", note:"Selective in some crops; check registration." },
    { ai:"glyphosate", moa:"9", note:"Suppressive only; repeated applications needed." },
    { ai:"metolachlor", moa:"15", note:"Pre-emergence suppression." }
  ],
  resistance:"ALS resistance is reported; rotate groups.",
  lookalikes:[
    { n:"Cyperus esculentus", d:"Yellow nutsedge — lighter, tubers at the end of rhizomes." },
    { n:"Sorghum halepense", d:"Grass, not sedge; different leaf and stem anatomy." }
  ],
  role:"Weed"
},

{
  id:"lolium-rigidum", kind:"weed",
  name:"Rigid ryegrass", sci:"Lolium rigidum", fr:"Ivraie raide",
  crops:["cereals","grape","citrus"],
  organs:["whole"],
  symptoms:["stunting"],
  stage:"Annual grass",
  tagline:"The global textbook case of herbicide resistance.",
  bio:"A vigorous annual grass that competes strongly with cereals. High seed production and genetic variability have produced resistance to multiple herbicide groups across the world.",
  damage:"Competition for water, light and nutrients; yield losses in cereals can reach 30–50% in dense stands.",
  favours:"Continuous cereal cropping, early sowing, stubble retention, repeated use of the same herbicide group.",
  monitoring:"Count plants per square metre in winter and spring; test for resistance before relying on a group that appears to be failing.",
  threshold:"About 10–20 plants per square metre in cereals.",
  severity:4,
  dz:"Important in cereal zones; resistance status varies by farm.",
  ipm:{
    cultural:["Diversify rotations with broadleaf break crops.","Delayed sowing to reduce emergence.","Competitive cereal cultivars and higher seeding rates.","Harvest weed-seed control to prevent seed return."],
    biological:["Limited."],
    mechanical:["Stale seedbed, cultivation, and chaff collection at harvest."],
    biotech:["Resistance testing is the only sound basis for herbicide choice."]
  },
  chem:[
    { ai:"glyphosate", moa:"9", note:"Resistance confirmed in multiple regions; verify before relying on it." },
    { ai:"quizalofop", moa:"1", note:"ACCase resistance is common." },
    { ai:"pendimethalin", moa:"15", note:"Pre-emergence, still effective in many situations." },
    { ai:"tribenuron", moa:"2", note:"ALS resistance is very common." }
  ],
  resistance:"Multiple resistance to groups 1, 2, 9 and 15 is documented. Rotate groups, use pre-emergence residuals, and integrate non-chemical tactics.",
  lookalikes:[
    { n:"Lolium multiflorum", d:"Italian ryegrass — awned, similar resistance profile." },
    { n:"Avena sterilis", d:"Wild oat — different spikelet structure." }
  ],
  role:"Weed"
}

);

/* ============================================================
   AgroScope — seasonal IPM programmes
   ============================================================ */

window.AGRO = window.AGRO || {};

AGRO.ipmPrinciples = [
  { n:1, t:"Prevention first", d:"Healthy planting material, resistant varieties, sanitation, rotation and exclusion structures solve more problems than any spray." },
  { n:2, t:"Identify before acting", d:"A species or pathogen confirmed is a decision; a guess is an expense. Use the key, the library and, where needed, a laboratory." },
  { n:3, t:"Monitor on a schedule", d:"Fixed scouting routes, trap counts and weather data convert observations into trends. Without a baseline, no threshold is meaningful." },
  { n:4, t:"Use thresholds, not fear", d:"Treat when the expected loss exceeds the cost and the risk of the intervention. Where no validated threshold exists, state the assumption." },
  { n:5, t:"Culture before chemistry", d:"Planting dates, density, pruning, irrigation and nutrition change the microclimate in which epidemics and outbreaks develop." },
  { n:6, t:"Physical and mechanical barriers", d:"Nets, mulches, trunk bands, bagging and solarisation are labour-intensive but resistance-proof." },
  { n:7, t:"Biological control and conservation", d:"Release natural enemies where proven, and — more importantly — stop killing the ones already present." },
  { n:8, t:"Biotechnical tools", d:"Pheromone monitoring, mass trapping and mating disruption are precise, residue-free and compatible with beneficials." },
  { n:9, t:"Selective chemistry as a last resort", d:"Choose the narrowest-spectrum active ingredient that works, at the label rate, at the susceptible stage, and rotate its mode of action." },
  { n:10, t:"Evaluate and record", d:"After every intervention, check efficacy, beneficials and resistance signals. Record what was applied, where, when and why." }
];

AGRO.ipmPrograms = {

  tomato: { note:"Protected tomato is a continuous-habitat crop: the programme is built around exclusion, Tuta monitoring and whitefly/virus management rather than calendar sprays.",
    stages:[
      { stage:"Pre-planting", actions:[
        { type:"prevent", text:"Choose TYLCV-resistant varieties and certified seed; produce transplants under 50-mesh netting." },
        { type:"prevent", text:"Clean the structure: remove old crop debris, volunteers and cull piles; solarise soil if nematodes or soilborne wilt are present." },
        { type:"cultural", text:"Plan a host-free window of at least 3–4 weeks between cycles in the same tunnel." }
      ]},
      { stage:"Transplanting to first flower", actions:[
        { type:"monitor", text:"Install pheromone traps for Tuta and yellow sticky traps for whiteflies before transplanting; check twice weekly." },
        { type:"biological", text:"Release Nesidiocoris tenuis preventively where the beneficial fauna is compatible." },
        { type:"prevent", text:"Maintain double doors, repair nets, and keep a footbath at entry." }
      ]},
      { stage:"Flowering and fruit set", actions:[
        { type:"monitor", text:"Weekly inspection of 20 plants: mines on leaves, Tuta entry holes at the calyx, whitefly nymphs on leaf undersides." },
        { type:"cultural", text:"Prune and stake for airflow; remove lower senescent leaves; avoid excessive nitrogen." },
        { type:"biological", text:"Trichogramma releases timed to the Tuta flight; conserve mirids and spiders." },
        { type:"chemical", text:"If the threshold is crossed, use one selective larvicide (18 or 11) and rotate the group for the next generation." }
      ]},
      { stage:"Harvest", actions:[
        { type:"monitor", text:"Check fruit at every picking for entry holes and rot; record the proportion affected." },
        { type:"cultural", text:"Remove and destroy infested fruit in sealed bags; never discard them beside the tunnel." },
        { type:"chemical", text:"Respect the preharvest interval strictly — label values are not negotiable." }
      ]},
      { stage:"Post-harvest", actions:[
        { type:"cultural", text:"Destroy the crop immediately after the last harvest; do not hold it as a 'reservoir'." },
        { type:"mechanical", text:"Clean and disinfect the structure, irrigation lines and tools." },
        { type:"monitor", text:"Assess season performance: which interventions worked, which failed, and why." }
      ]}
    ]},

  potato: { note:"The two decisive risks are late blight (weather-driven) and aphid-borne viruses (seed-crop driven). Both reward prevention over rescue.",
    stages:[
      { stage:"Pre-planting", actions:[
        { type:"prevent", text:"Use certified seed tubers; cut and inspect a sample for tuber moth and rot." },
        { type:"cultural", text:"Rotate away from solanaceae for at least 3 years; destroy volunteers and cull piles." },
        { type:"cultural", text:"Choose a variety with quantitative late-blight resistance and a maturity that fits the cycle." }
      ]},
      { stage:"Emergence to canopy closure", actions:[
        { type:"monitor", text:"Install a weather station or use regional blight forecasts; scout field margins for the first lesions." },
        { type:"monitor", text:"Weekly counts of aphids on 100 leaflets; record winged morphs and natural enemies." },
        { type:"cultural", text:"Hill soil well; irrigate in the morning; avoid evening overhead irrigation." },
        { type:"chemical", text:"Start protectant sprays only when the forecast indicates infection risk; include a multi-site partner." }
      ]},
      { stage:"Tuber bulking", actions:[
        { type:"monitor", text:"Twice-weekly blight scouting in humid weather; check the leaf underside for sporulation." },
        { type:"biological", text:"Conserve carabids and spiders; avoid pyrethroids for aphids." },
        { type:"chemical", text:"Rotate oomycete groups (40, 21, 43, 49) and never apply the same single-site twice in a row." }
      ]},
      { stage:"Maturation and harvest", actions:[
        { type:"cultural", text:"Kill the haulm 2–3 weeks before harvest to protect tubers from blight." },
        { type:"mechanical", text:"Harvest in dry conditions; avoid skinning and wounds." },
        { type:"cultural", text:"Cure tubers before storage; remove damaged ones." }
      ]},
      { stage:"Storage", actions:[
        { type:"monitor", text:"Check for tuber moth 'windows', rot and condensation monthly." },
        { type:"prevent", text:"Store cool (4–10 °C depending on destination), dark and ventilated; never mix lots." },
        { type:"cultural", text:"Never store field-run tubers with seed tubers." }
      ]}
    ]},

  pepper: { note:"Under cover, thrips and tospoviruses dominate. Variety resistance and thrips control before flowering decide the season.",
    stages:[
      { stage:"Pre-planting", actions:[
        { type:"prevent", text:"Use TSWV-resistant varieties (Tsw) where the virus is present, and certified transplants." },
        { type:"mechanical", text:"Screen openings with fine mesh; double-door entry; yellow/blue sticky traps installed at crop level." }
      ]},
      { stage:"Vegetative growth", actions:[
        { type:"monitor", text:"Weekly flower tapping over white paper for thrips; count adults and larvae separately." },
        { type:"biological", text:"Release Amblyseius swirskii or Neoseiulus cucumeris preventively; add Orius at flowering." },
        { type:"cultural", text:"Avoid excessive nitrogen; remove weeds and old flowers around the structure." }
      ]},
      { stage:"Flowering and fruit set", actions:[
        { type:"monitor", text:"Inspect for thrips scarring, flower abortion and virus symptoms; test suspect plants." },
        { type:"biological", text:"Maintain predator populations; avoid spinosyns while Orius is establishing." },
        { type:"chemical", text:"If thrips exceed threshold, rotate 5 with 28 and never apply the same group twice." }
      ]},
      { stage:"Harvest", actions:[
        { type:"monitor", text:"Grade fruit for thrips scars and sunscald; record the rejection rate." },
        { type:"cultural", text:"Harvest regularly; remove rotting fruit from the tunnel." }
      ]}
    ]},

  cucurbits: { note:"Downy and powdery mildew are the spray drivers; both are resistance-prone, so rotation and canopy management matter more than product choice.",
    stages:[
      { stage:"Pre-planting", actions:[
        { type:"cultural", text:"Choose mildew-tolerant cultivars and a spacing that allows rapid drying." },
        { type:"cultural", text:"Rotate away from cucurbits for 2 years; remove crop debris." }
      ]},
      { stage:"Vegetative growth", actions:[
        { type:"monitor", text:"Twice-weekly scouting of lower leaves; check the underside early morning for downy sporulation." },
        { type:"cultural", text:"Irrigate early, preferably drip; avoid evening overhead irrigation." },
        { type:"biological", text:"Bacillus subtilis or potassium bicarbonate as protectants in low-pressure situations." }
      ]},
      { stage:"Flowering and fruiting", actions:[
        { type:"monitor", text:"Weekly assessment of leaf area affected by powdery and downy mildew; record progression." },
        { type:"chemical", text:"Alternate 3/7/11 with multi-sites (M03) and oomycete-specific groups (40, 21) as appropriate." },
        { type:"biological", text:"Protect pollinators: never spray open flowers with a bee-hazard product." }
      ]},
      { stage:"Harvest", actions:[
        { type:"cultural", text:"Harvest promptly; remove overripe and rotting fruit." },
        { type:"monitor", text:"Check fruit for sunscald and rot after defoliation events." }
      ]}
    ]},

  onion: { note:"Thrips and downy mildew share the same window: hot dry spells favour thrips, cool wet spells favour mildew. Monitor both weekly.",
    stages:[
      { stage:"Pre-planting", actions:[
        { type:"prevent", text:"Use certified sets or seed; never plant bulbs from an infected crop." },
        { type:"cultural", text:"Rotate away from Allium crops for 3 years; destroy volunteer onions and debris." }
      ]},
      { stage:"Vegetative growth", actions:[
        { type:"monitor", text:"Weekly counts of thrips in leaf axils of 20 plants; check for silvery streaks." },
        { type:"monitor", text:"Early-morning inspection for downy mildew sporulation after wet nights." },
        { type:"cultural", text:"Irrigate in the morning; avoid excessive nitrogen." }
      ]},
      { stage:"Bulb swelling", actions:[
        { type:"chemical", text:"Rotate thrips groups (5, 28) and oomycete groups (40, M03); respect bee warnings." },
        { type:"biological", text:"Conserve Orius and predatory thrips; avoid pyrethroids." }
      ]},
      { stage:"Maturation and storage", actions:[
        { type:"cultural", text:"Stop irrigation before maturity; cure bulbs thoroughly." },
        { type:"prevent", text:"Store cool, dry and ventilated; inspect monthly for neck rot and sprouting." }
      ]}
    ]},

  citrus: { note:"Export-grade fruit is decided by medfly and scale. Quarantine diseases (CTV, HLB) require official reporting, not farm-level treatment.",
    stages:[
      { stage:"Dormancy / bloom", actions:[
        { type:"cultural", text:"Prune for airflow; remove dead wood and heavily scaled twigs." },
        { type:"monitor", text:"Inspect 40 twigs per block for scale and parasitoid exit holes." },
        { type:"chemical", text:"Dormant oil against overwintering scales and mite eggs where justified." }
      ]},
      { stage:"Fruit set to swell", actions:[
        { type:"monitor", text:"Weekly scale counts on twigs and fruit; record Aphytis parasitism." },
        { type:"monitor", text:"Install medfly traps (McPhail/Tephri) 6–8 weeks before ripening." },
        { type:"biological", text:"Release or conserve Aphytis melinus; control ants, which protect scales." }
      ]},
      { stage:"Ripening", actions:[
        { type:"monitor", text:"Twice-weekly trap checks and fruit sting counts." },
        { type:"mechanical", text:"Mass trapping and bait sprays at the orchard border; remove fallen fruit twice weekly." },
        { type:"cultural", text:"Harvest promptly; do not leave fruit on the tree." }
      ]},
      { stage:"Post-harvest", actions:[
        { type:"cultural", text:"Remove mummies and unharvested fruit; this is the single most effective medfly measure." },
        { type:"monitor", text:"Assess scale and medfly pressure against the season's records." }
      ]}
    ]},

  olive: { note:"Oil quality, not just yield, is the objective. Olive fly management is largely a harvest-timing decision.",
    stages:[
      { stage:"Winter–spring", actions:[
        { type:"cultural", text:"Prune for light and airflow; remove dead wood and mummified fruit." },
        { type:"monitor", text:"Assess peacock spot incidence on 100 leaves after wet periods." },
        { type:"chemical", text:"Copper-based protectant where peacock spot pressure is high, before infection periods." }
      ]},
      { stage:"Flowering", actions:[
        { type:"monitor", text:"Pheromone traps for Prays oleae; count flower attack on 100 inflorescences." },
        { type:"biological", text:"Bacillus thuringiensis against young Prays larvae at egg hatch." },
        { type:"cultural", text:"Avoid spraying during bloom; protect pollinators." }
      ]},
      { stage:"Fruit development", actions:[
        { type:"monitor", text:"Weekly olive fly trap counts and sting assessments from June." },
        { type:"mechanical", text:"Mass trapping with attractant traps; kaolin film where available." },
        { type:"chemical", text:"Bait sprays only at threshold; never blanket-cover the canopy." }
      ]},
      { stage:"Ripening and harvest", actions:[
        { type:"cultural", text:"Harvest early and completely — the most effective fly and anthracnose measure." },
        { type:"monitor", text:"Assess stung fruit and oil acidity; record for the next season." }
      ]}
    ]},

  datepalm: { note:"Zero tolerance for red palm weevil and Bayoud. Every other decision is secondary to early detection and movement control.",
    stages:[
      { stage:"Dormancy", actions:[
        { type:"cultural", text:"Clean the crown, remove dead fronds, and avoid wounds during pruning." },
        { type:"monitor", text:"Inspect every palm for frass, oozing and chewing sounds; report suspects immediately." },
        { type:"prevent", text:"Never move offshoots without authorisation and certification." }
      ]},
      { stage:"Flowering and fruit set", actions:[
        { type:"monitor", text:"Install weevil pheromone traps (1–2/ha) and check weekly." },
        { type:"cultural", text:"Bag or protect clusters where carob moth pressure is high." }
      ]},
      { stage:"Fruit development (June–August)", actions:[
        { type:"monitor", text:"Weekly mite inspection of clusters (boufaroua); look for webbing and greyish fruit." },
        { type:"chemical", text:"Sulfur against mites outside the hottest hours; rotate acaricide groups if used." },
        { type:"biological", text:"Conserve predators; avoid dusty conditions along tracks." }
      ]},
      { stage:"Harvest and storage", actions:[
        { type:"cultural", text:"Harvest promptly; avoid fruit damage and ground contact." },
        { type:"prevent", text:"Clean stores, use hermetic packaging, and cool below 10 °C where feasible." },
        { type:"monitor", text:"Sample 100 fruit per lot for carob moth larvae and rot." }
      ]}
    ]},

  grape: { note:"Two mildews and two moths set the calendar; the weather station decides more sprays than the scout does.",
    stages:[
      { stage:"Bud break to flowering", actions:[
        { type:"monitor", text:"Track rainfall, temperature and leaf wetness; scout for downy oil spots and powdery flag shoots." },
        { type:"cultural", text:"Remove flag shoots; open the canopy; remove fallen leaves from the previous season." },
        { type:"chemical", text:"Protect new growth before rain events; rotate 40/21/49 with M01 or M03." }
      ]},
      { stage:"Flowering to bunch closure", actions:[
        { type:"monitor", text:"Pheromone traps for Lobesia; count egg masses and larval nests weekly." },
        { type:"biological", text:"Trichogramma releases and Bt against young larvae; conserve predators." },
        { type:"mechanical", text:"Leaf removal around bunches to reduce Botrytis." }
      ]},
      { stage:"Veraison to harvest", actions:[
        { type:"monitor", text:"Check bunches for moth damage and grey mould; monitor SWD where relevant." },
        { type:"cultural", text:"Avoid excessive nitrogen; harvest promptly at maturity." },
        { type:"chemical", text:"Respect preharvest intervals; use Botrytis-specific groups (9/12/17) sparingly and rotate." }
      ]},
      { stage:"Post-harvest", actions:[
        { type:"cultural", text:"Remove mummified bunches and pruning debris." },
        { type:"monitor", text:"Assess mildew and moth pressure; plan the next season's rotation." }
      ]}
    ]},

  pome: { note:"Codling moth timing is a degree-day problem; apple scab is a leaf-wetness problem. Both are decided before symptoms appear.",
    stages:[
      { stage:"Dormant to bud break", actions:[
        { type:"cultural", text:"Prune, remove mummies, scrape loose bark, and rake leaf litter." },
        { type:"chemical", text:"Dormant oil against mite eggs and scales where justified." },
        { type:"monitor", text:"Install codling moth traps at bloom; record biofix (first sustained catch)." }
      ]},
      { stage:"Bloom to fruit set", actions:[
        { type:"monitor", text:"Track ascospore maturity and leaf wetness for scab; scout for primary lesions." },
        { type:"chemical", text:"Protect from bud break through primary infection; rotate 3/7/9 with M03." },
        { type:"biological", text:"Bacillus subtilis at bloom where fire blight risk exists; never spray open flowers with bee-hazard products." }
      ]},
      { stage:"Fruit development", actions:[
        { type:"monitor", text:"Degree-day timing for codling moth egg hatch; inspect 100 fruit weekly for entries." },
        { type:"biological", text:"CpGV at egg hatch; Trichogramma releases; conserve predatory mites." },
        { type:"mechanical", text:"Trunk bands for overwintering larvae; remove infested fruit." }
      ]},
      { stage:"Harvest and storage", actions:[
        { type:"cultural", text:"Harvest at maturity; cool rapidly; avoid wounds." },
        { type:"monitor", text:"Check stored fruit monthly for rot and pest emergence." }
      ]}
    ]},

  cereals: { note:"Variety resistance is the cheapest fungicide. Protect the flag leaf, and do not treat below threshold.",
    stages:[
      { stage:"Sowing", actions:[
        { type:"cultural", text:"Choose rust- and Septoria-resistant varieties; diversify varieties across the farm." },
        { type:"cultural", text:"Avoid very early sowing; rotate with broadleaf crops; manage stubble." },
        { type:"prevent", text:"Use certified seed and appropriate seed treatment where justified." }
      ]},
      { stage:"Tillering to stem elongation", actions:[
        { type:"monitor", text:"Weekly scouting for rust pustules and Septoria lesions from tillering." },
        { type:"monitor", text:"Sweep-net counts for Sunn pest in spring where relevant." },
        { type:"cultural", text:"Balance nitrogen; avoid excessive density." }
      ]},
      { stage:"Flag leaf to heading", actions:[
        { type:"monitor", text:"Assess disease on the flag leaf and leaf 2 — these determine yield." },
        { type:"chemical", text:"Treat at threshold; rotate 3/7/11 and include a multi-site partner." },
        { type:"biological", text:"Conserve parasitoids of Sunn pest eggs; avoid early broad-spectrum sprays." }
      ]},
      { stage:"Grain filling to harvest", actions:[
        { type:"monitor", text:"Check for late rust and for Sunn pest grain damage at maturity." },
        { type:"cultural", text:"Harvest at the right moisture; clean and dry grain before storage." }
      ]}
    ]}
};

/* Crops without a full programme fall back to the generic framework */
AGRO.ipmGeneric = [
  { stage:"Before planting", actions:[
    { type:"prevent", text:"Confirm the field's history: previous crop, soilborne problems, weed pressure, water quality." },
    { type:"cultural", text:"Choose a variety with the resistances that matter locally; plan rotation and spacing." },
    { type:"monitor", text:"Set up traps and a scouting route before the crop is planted, not after the first symptom." }
  ]},
  { stage:"Establishment", actions:[
    { type:"monitor", text:"Weekly inspection of 20 plants in a W pattern; record pests, diseases, beneficials and abiotic stress." },
    { type:"cultural", text:"Irrigate and fertilise to the crop's requirement, not to habit; stress predisposes to pests." }
  ]},
  { stage:"Production", actions:[
    { type:"biological", text:"Identify and conserve natural enemies; avoid broad-spectrum sprays when they are active." },
    { type:"chemical", text:"Treat only at a justified threshold, at the susceptible stage, with rotation of mode of action." }
  ]},
  { stage:"Harvest and after", actions:[
    { type:"cultural", text:"Sanitation after harvest removes the bridge to the next cycle." },
    { type:"monitor", text:"Record efficacy and cost; adjust the programme for next season." }
  ]}
];

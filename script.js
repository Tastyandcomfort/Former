// ============================================================
// i18n
// ============================================================
const LANG_KEY = 'khetSathiLang';
let currentLang = localStorage.getItem(LANG_KEY) || 'en';

const T = {
  en: {
    'nav.marketplace': 'Marketplace', 'nav.prices': 'Market prices', 'nav.weather': 'Weather',
    'nav.schemes': 'Govt schemes', 'nav.seed': 'Seed check', 'nav.safety': 'Safety', 'nav.list': 'List / Offer',
    'hero.h1': 'Everything for the season, before you even leave the village.',
    'hero.sub': "Rent equipment, hire labour, or book godown space nearby — then check today's mandi trends, weather, government schemes and seed safety, all in one place.",
    'hero.cta1': 'Open marketplace', 'hero.cta2': 'Offer equipment, labour or storage',
    'hero.stat1': 'listings live', 'hero.stat2': 'states covered', 'hero.stat3': 'booking commission',
    'market.h2': 'Marketplace', 'market.sub': "Equipment, farm labour, or godown space — browse what's nearby and call to book.",
    'tab.equipment': 'Equipment', 'tab.labour': 'Hire labour', 'tab.godown': 'Godown / storage',
    'search.equipment': 'Search equipment, district or state', 'search.labour': 'Search skill, district or state', 'search.godown': 'Search storage type, district or state',
    'sort.recent': 'Newest first',
    'sort.priceAsc.equipment': 'Price: low to high', 'sort.priceDesc.equipment': 'Price: high to low',
    'sort.priceAsc.labour': 'Wage: low to high', 'sort.priceDesc.labour': 'Wage: high to low',
    'sort.priceAsc.godown': 'Rent: low to high', 'sort.priceDesc.godown': 'Rent: high to low',
    'empty.equipment': 'No equipment matches that search. Try a different district or category.',
    'empty.labour': 'No labour teams match that search yet.', 'empty.godown': 'No storage listings match that search yet.',
    'cat.tractor': 'Tractor', 'cat.harvester': 'Harvester', 'cat.rotavator': 'Rotavator', 'cat.cultivator': 'Cultivator',
    'cat.seed-drill': 'Seed Drill', 'cat.sprayer': 'Power Sprayer', 'cat.drone': 'Agri Drone', 'cat.trailer': 'Trailer',
    'cat.thresher': 'Thresher', 'cat.plough': 'Plough', 'cat.baler': 'Baler',
    'cat.harvest-labour': 'Harvesting Labour', 'cat.sowing-labour': 'Sowing / Transplanting', 'cat.spraying-labour': 'Spraying Labour',
    'cat.general-labour': 'General Farm Labour', 'cat.machine-operator': 'Machine Operator',
    'cat.godown': 'Godown / Warehouse', 'cat.cold-storage': 'Cold Storage', 'cat.open-yard': 'Open Yard / Plinth',
    'how.1.title': 'Search nearby', 'how.1.desc': 'Filter by category and your district to see what\u2019s available — equipment, labour or storage.',
    'how.2.title': 'Call directly', 'how.2.desc': 'Every listing shows a name and number. No app-in-the-middle — you agree on dates and price directly.',
    'how.3.title': 'Get the work done', 'how.3.desc': "Pick up, deliver, or turn up on the day — and settle payment however you'd normally do it.",
    'prices.h2': 'Market prices',
    'prices.sub_html': 'Sample reference prices only — mandi rates change daily by market and quality. Always confirm today\u2019s rate on <a href="https://agmarknet.gov.in" target="_blank" rel="noopener">Agmarknet</a> or <a href="https://enam.gov.in" target="_blank" rel="noopener">e-NAM</a>, or with your local mandi, before you sell.',
    'price.search': 'Search a crop', 'price.th.crop': 'Crop', 'price.th.variety': 'Typical variety', 'price.th.range': 'Indicative range (\u20b9 / quintal)',
    'crop.wheat': 'Wheat', 'crop.wheat.v': 'Common (Sharbati/HD)',
    'crop.paddy': 'Paddy (Rice)', 'crop.paddy.v': 'Common / Grade A',
    'crop.cotton': 'Cotton', 'crop.cotton.v': 'Medium staple',
    'crop.sugarcane': 'Sugarcane', 'crop.sugarcane.v': '\u2014',
    'crop.soybean': 'Soybean', 'crop.soybean.v': 'Yellow',
    'crop.maize': 'Maize', 'crop.maize.v': 'Hybrid',
    'crop.mustard': 'Mustard (Sarso)', 'crop.mustard.v': '\u2014',
    'crop.gram': 'Gram (Chana)', 'crop.gram.v': 'Desi',
    'crop.onion': 'Onion', 'crop.onion.v': 'Red',
    'crop.potato': 'Potato', 'crop.potato.v': '\u2014',
    'crop.tomato': 'Tomato', 'crop.tomato.v': '\u2014',
    'crop.groundnut': 'Groundnut', 'crop.groundnut.v': 'Bold',
    'weather.h2': 'Weather', 'weather.sub': 'Check conditions before spraying, harvesting or transporting produce.',
    'weather.placeholder': 'Enter your village, town or district', 'weather.button': 'Check weather',
    'weather.source': 'Weather data from Open-Meteo.',
    'weather.today': 'Today', 'weather.tomorrow': 'Tomorrow', 'weather.day3': 'Day 3', 'weather.day4': 'Day 4',
    'weather.humidity': 'Humidity', 'weather.wind': 'Wind', 'weather.rain': 'rain',
    'weather.lookingUp': 'Looking up', 'weather.notFound': 'Couldn\u2019t find', 'weather.tryBigger': 'Try a nearby bigger town or district name.',
    'weather.fetchError': 'Couldn\u2019t fetch weather right now. Check your connection and try again.',
    'weather.tipHigh': 'Wind is on the higher side \u2014 not ideal for spraying right now.',
    'weather.tipOk': 'Wind speed looks manageable for spraying if needed.',
    'schemes.h2': 'Government schemes & funds', 'schemes.sub': 'A starting list — always confirm current eligibility and benefit amounts on the official site before applying.',
    'scheme.pmkisan.desc': '\u20b96,000/year direct income support in three instalments, paid straight to bank accounts. Extended through 2030\u201331.',
    'scheme.pmfby.desc': 'Crop insurance against drought, flood, pests and other losses, at a low farmer premium share.',
    'scheme.kcc.desc': 'Low-interest short-term credit for seeds, fertiliser and other input costs, available through most banks.',
    'scheme.kcc.link': 'Apply via any nationalised or cooperative bank',
    'scheme.soil.desc': 'Free soil testing every 2\u20133 years with crop-wise fertiliser and nutrient recommendations.',
    'scheme.smam.title': 'SMAM \u2014 machinery subsidy', 'scheme.smam.desc': 'Subsidy on tractors and implements, plus support for Kisan Drone demonstrations and Custom Hiring Centres.',
    'scheme.drone.desc': "80% subsidy (up to \u20b98 lakh) for women's Self-Help Groups to buy a drone and offer paid spraying services to nearby farmers.",
    'scheme.drone.link': 'Contact your local Krishi Vigyan Kendra or DAY-NRLM office',
    'scheme.kusum.desc': 'Subsidy for solar-powered irrigation pumps, cutting diesel and electricity costs.',
    'scheme.enam.desc': 'Online mandi trading platform connecting farmers to buyers across markets for better price discovery.',
    'scheme.aif.title': 'Agriculture Infrastructure Fund', 'scheme.aif.desc': '3% interest subvention on loans up to \u20b92 crore for building warehouses, cold storage and godowns.',
    'scheme.kcc2.title': 'Kisan Call Centre', 'scheme.kcc2.desc': 'Free expert advice on crops, schemes and grievances, in your own language, 6 AM \u2013 10 PM, every day.',
    'seed.h2': 'Is your seed genuine?', 'seed.sub': 'Certified seed sold to farmers carries a coloured tag. Knowing the system helps you spot a problem before sowing, not after.',
    'tag.breeder': 'Breeder seed \u2014 golden yellow tag (not sold directly to farmers)', 'tag.foundation': 'Foundation seed \u2014 white tag',
    'tag.registered': 'Registered seed \u2014 purple tag', 'tag.certified': 'Certified seed \u2014 blue tag (what most farmers buy)',
    'seed.c1': 'Buy only from a licensed dealer and always take a bill with the batch/lot number written on it.',
    'seed.c2': 'Check the tag colour and lot number sealed to the bag \u2014 blue means certified seed.',
    'seed.c3': 'Make sure the bag is sealed, not re-stitched, and check the germination % and purity % printed on the tag.',
    'seed.c4': "Check the packing date and validity period \u2014 don't buy old stock past its tested date.",
    'seed.c5': "Note the dealer's licence number from the bill in case you need to raise a complaint later.",
    'seed.c6': 'Before sowing the full field, test a small sample: wrap 20\u201325 seeds in a damp cloth for a few days and count how many sprout.',
    'seed.c7': 'If germination is poor or the crop looks abnormal, keep the bag, tag and bill as evidence.',
    'seed.c8_html': 'Report suspected spurious seed to your local Agriculture Department, Krishi Vigyan Kendra, or the Kisan Call Centre on <a href="tel:+9118001801551">1800-180-1551</a>.',
    'safety.h2': 'Safety precautions', 'safety.sub': 'General good practice — always follow the specific instructions that come with your machine or chemical label.',
    'safety.machinery.title': 'Machinery',
    'safety.machinery.1': 'Keep PTO shafts and moving parts covered with their guards at all times.',
    'safety.machinery.2': 'Switch off and remove the key before clearing a blockage or doing repairs.',
    'safety.machinery.3': 'Avoid loose clothing or dupattas near rotating parts.',
    'safety.machinery.4': 'Keep children well away from tractors, threshers and harvesters while running.',
    'safety.spray.title': 'Spraying & chemicals',
    'safety.spray.1': 'Wear gloves, a mask and full-sleeve clothing while mixing or spraying.',
    'safety.spray.2': 'Spray early morning or evening, and never against the wind direction.',
    'safety.spray.3': 'Wash hands, face and clothes thoroughly after spraying, before eating or smoking.',
    'safety.spray.4': 'Store chemicals locked away from children, animals and food grain.',
    'safety.storage.title': 'Seed & storage',
    'safety.storage.1': 'Store seed and grain in a dry, well-ventilated, pest-free godown, off the ground.',
    'safety.storage.2': 'Check stored bags periodically for insects, dampness or rodent damage.',
    'safety.storage.3': "Keep the storage area's rope, ladder and lifting equipment in good condition to prevent falls.",
    'safety.weather.title': 'Weather',
    'safety.weather.1': 'Stop fieldwork and move to shelter at the first sign of lightning or thunder.',
    'safety.weather.2': 'During heatwaves, work early morning or evening and drink water often.',
    'safety.weather.3': 'Check the weather section above before planning spraying, harvesting or transport days.',
    'list.h2': 'Offer equipment, labour or storage', 'list.sub': "Pick what you're offering below — it appears in the marketplace as soon as you submit, no approval wait.",
    'form.whatListing': 'What are you listing?', 'form.optEquipment': 'Equipment for rent', 'form.optLabour': 'Labour for hire', 'form.optGodown': 'Godown / storage space',
    'form.name.equipment': 'Equipment name', 'form.name.labour': 'Team / service name', 'form.name.godown': 'Godown / storage name',
    'form.namePlaceholder': 'e.g. Mahindra 575 DI Tractor',
    'form.categoryLabel': 'Category', 'form.categoryPlaceholder': 'Select a category',
    'form.price.equipment': 'Rental price (\u20b9 per day)', 'form.price.labour': 'Wage (\u20b9 per worker per day)', 'form.price.godown': 'Rent (\u20b9 per month)',
    'form.pricePlaceholder': 'e.g. 1500',
    'form.availabilityLabel': 'Availability', 'form.availNow': 'Available now', 'form.availSoon': 'Available from next week', 'form.availBooked': 'Currently booked',
    'form.workersLabel': 'Number of workers', 'form.workersPlaceholder': 'e.g. 6',
    'form.capacityLabel': 'Capacity', 'form.capacityPlaceholder': 'e.g. 2,000 sq ft / 150 tonnes',
    'form.villageLabel': 'Village / town', 'form.villagePlaceholder': 'e.g. Sonipat',
    'form.districtLabel': 'District', 'form.districtPlaceholder': 'e.g. Sonipat',
    'form.stateLabel': 'State', 'form.statePlaceholder': 'Select a state',
    'form.descLabel': 'Description (optional)', 'form.descPlaceholder': 'Condition, model year, skills, delivery options...',
    'form.owner.equipment': 'Your name', 'form.owner.labour': 'Contact person name', 'form.owner.godown': 'Your name',
    'form.ownerPlaceholder': 'e.g. Ramesh Yadav',
    'form.phoneLabel': 'Contact number', 'form.phonePlaceholder': '10-digit mobile number',
    'form.photoLabel': 'Photo (optional)', 'form.photoHint': 'A real photo of your equipment, team or storage gets far more calls than a generic one.',
    'form.submit': 'Submit listing',
    'form.errorPhone': 'Enter a valid 10-digit Indian mobile number.',
    'form.success': 'Listed! It now appears in the marketplace above.',
    'footer.note': 'Built for farmers, by farmers. Listings are stored on your device for this demo. Market prices are indicative only — always confirm on Agmarknet or e-NAM before selling. Scheme details change — confirm on the official portal before applying.',
    'panel.contactPerson': 'Contact person', 'panel.contactNumber': 'Contact number', 'panel.rate': 'Rate',
    'panel.callNow': 'Call now', 'panel.copyNumber': 'Copy number', 'panel.copied': 'Copied',
    'status.available': 'Available now', 'status.booked': 'Booked', 'status.soon': 'Available soon',
    'state.Punjab': 'Punjab', 'state.Haryana': 'Haryana', 'state.Uttar Pradesh': 'Uttar Pradesh', 'state.Maharashtra': 'Maharashtra',
    'state.Karnataka': 'Karnataka', 'state.Madhya Pradesh': 'Madhya Pradesh', 'state.Rajasthan': 'Rajasthan', 'state.Gujarat': 'Gujarat',
    'state.Bihar': 'Bihar', 'state.Andhra Pradesh': 'Andhra Pradesh', 'state.Telangana': 'Telangana', 'state.Tamil Nadu': 'Tamil Nadu', 'state.West Bengal': 'West Bengal',
    'misc.all': 'All', 'misc.book': 'Book', 'misc.yourListing': 'Your listing', 'misc.remove': 'Remove',
    'misc.workerSingular': 'worker available', 'misc.workerPlural': 'workers available',
  },

  hi: {
    'nav.marketplace': 'बाज़ार', 'nav.prices': 'मंडी भाव', 'nav.weather': 'मौसम',
    'nav.schemes': 'सरकारी योजनाएं', 'nav.seed': 'बीज जांच', 'nav.safety': 'सुरक्षा', 'nav.list': 'सूची जोड़ें',
    'hero.h1': 'पूरे सीज़न की ज़रूरत — गांव से बाहर निकले बिना।',
    'hero.sub': 'पास में उपकरण किराए पर लें, मज़दूर बुक करें, या गोदाम की जगह लें — साथ ही आज का मंडी भाव, मौसम, सरकारी योजनाएं और बीज की सुरक्षा, सब एक ही जगह।',
    'hero.cta1': 'बाज़ार खोलें', 'hero.cta2': 'उपकरण, मज़दूर या गोदाम की पेशकश करें',
    'hero.stat1': 'लाइव सूचियां', 'hero.stat2': 'राज्य शामिल', 'hero.stat3': 'बुकिंग कमीशन',
    'market.h2': 'बाज़ार', 'market.sub': 'उपकरण, खेत मज़दूर, या गोदाम की जगह — पास में जो उपलब्ध है उसे देखें और बुक करने के लिए कॉल करें।',
    'tab.equipment': 'उपकरण', 'tab.labour': 'मज़दूर बुक करें', 'tab.godown': 'गोदाम / भंडारण',
    'search.equipment': 'उपकरण, ज़िला या राज्य खोजें', 'search.labour': 'काम, ज़िला या राज्य खोजें', 'search.godown': 'भंडारण प्रकार, ज़िला या राज्य खोजें',
    'sort.recent': 'नवीनतम पहले',
    'sort.priceAsc.equipment': 'कीमत: कम से ज़्यादा', 'sort.priceDesc.equipment': 'कीमत: ज़्यादा से कम',
    'sort.priceAsc.labour': 'मज़दूरी: कम से ज़्यादा', 'sort.priceDesc.labour': 'मज़दूरी: ज़्यादा से कम',
    'sort.priceAsc.godown': 'किराया: कम से ज़्यादा', 'sort.priceDesc.godown': 'किराया: ज़्यादा से कम',
    'empty.equipment': 'इस खोज से कोई उपकरण नहीं मिला। दूसरा ज़िला या श्रेणी आज़माएं।',
    'empty.labour': 'अभी इस खोज से कोई मज़दूर समूह नहीं मिला।', 'empty.godown': 'अभी इस खोज से कोई भंडारण सूची नहीं मिली।',
    'cat.tractor': 'ट्रैक्टर', 'cat.harvester': 'हार्वेस्टर', 'cat.rotavator': 'रोटावेटर', 'cat.cultivator': 'कल्टीवेटर',
    'cat.seed-drill': 'सीड ड्रिल', 'cat.sprayer': 'पावर स्प्रेयर', 'cat.drone': 'कृषि ड्रोन', 'cat.trailer': 'ट्रॉली',
    'cat.thresher': 'थ्रेशर', 'cat.plough': 'हल', 'cat.baler': 'बेलर',
    'cat.harvest-labour': 'कटाई मज़दूर', 'cat.sowing-labour': 'बुवाई / रोपाई', 'cat.spraying-labour': 'छिड़काव मज़दूर',
    'cat.general-labour': 'सामान्य खेत मज़दूर', 'cat.machine-operator': 'मशीन ऑपरेटर',
    'cat.godown': 'गोदाम', 'cat.cold-storage': 'कोल्ड स्टोरेज', 'cat.open-yard': 'खुला यार्ड',
    'how.1.title': 'पास में खोजें', 'how.1.desc': 'श्रेणी और अपने ज़िले के अनुसार फ़िल्टर करें — उपकरण, मज़दूर या भंडारण।',
    'how.2.title': 'सीधे कॉल करें', 'how.2.desc': 'हर सूची में नाम और नंबर दिखता है। कोई बीच का ऐप नहीं — आप सीधे तारीख और कीमत तय करते हैं।',
    'how.3.title': 'काम पूरा करें', 'how.3.desc': 'खुद ले जाएं, डिलीवरी लें, या तय दिन पहुंचें — और जैसे हमेशा भुगतान करते हैं वैसे करें।',
    'prices.h2': 'मंडी भाव',
    'prices.sub_html': 'केवल नमूना भाव — मंडी और गुणवत्ता के अनुसार भाव रोज़ बदलते हैं। बेचने से पहले हमेशा <a href="https://agmarknet.gov.in" target="_blank" rel="noopener">Agmarknet</a> या <a href="https://enam.gov.in" target="_blank" rel="noopener">e-NAM</a> पर या अपनी स्थानीय मंडी में आज का भाव ज़रूर देखें।',
    'price.search': 'फ़सल खोजें', 'price.th.crop': 'फ़सल', 'price.th.variety': 'सामान्य किस्म', 'price.th.range': 'अनुमानित भाव (\u20b9 / क्विंटल)',
    'crop.wheat': 'गेहूं', 'crop.wheat.v': 'सामान्य (शरबती/HD)',
    'crop.paddy': 'धान (चावल)', 'crop.paddy.v': 'सामान्य / ग्रेड A',
    'crop.cotton': 'कपास', 'crop.cotton.v': 'मध्यम रेशा',
    'crop.sugarcane': 'गन्ना', 'crop.sugarcane.v': '\u2014',
    'crop.soybean': 'सोयाबीन', 'crop.soybean.v': 'पीला',
    'crop.maize': 'मक्का', 'crop.maize.v': 'हाइब्रिड',
    'crop.mustard': 'सरसों', 'crop.mustard.v': '\u2014',
    'crop.gram': 'चना', 'crop.gram.v': 'देसी',
    'crop.onion': 'प्याज़', 'crop.onion.v': 'लाल',
    'crop.potato': 'आलू', 'crop.potato.v': '\u2014',
    'crop.tomato': 'टमाटर', 'crop.tomato.v': '\u2014',
    'crop.groundnut': 'मूंगफली', 'crop.groundnut.v': 'बोल्ड',
    'weather.h2': 'मौसम', 'weather.sub': 'छिड़काव, कटाई या ढुलाई से पहले मौसम की जांच करें।',
    'weather.placeholder': 'अपना गांव, कस्बा या ज़िला डालें', 'weather.button': 'मौसम देखें',
    'weather.source': 'मौसम डेटा Open-Meteo से।',
    'weather.today': 'आज', 'weather.tomorrow': 'कल', 'weather.day3': 'दिन 3', 'weather.day4': 'दिन 4',
    'weather.humidity': 'नमी', 'weather.wind': 'हवा', 'weather.rain': 'बारिश',
    'weather.lookingUp': 'खोजा जा रहा है', 'weather.notFound': 'नहीं मिला', 'weather.tryBigger': 'पास के बड़े शहर या ज़िले का नाम आज़माएं।',
    'weather.fetchError': 'अभी मौसम नहीं मिल सका। अपना कनेक्शन जांचें और फिर कोशिश करें।',
    'weather.tipHigh': 'हवा थोड़ी तेज़ है — अभी छिड़काव के लिए ठीक नहीं।',
    'weather.tipOk': 'ज़रूरत हो तो छिड़काव के लिए हवा की गति ठीक लग रही है।',
    'schemes.h2': 'सरकारी योजनाएं और फंड', 'schemes.sub': 'एक शुरुआती सूची — आवेदन से पहले हमेशा आधिकारिक वेबसाइट पर पात्रता और राशि की पुष्टि करें।',
    'scheme.pmkisan.desc': 'तीन किस्तों में सीधे बैंक खाते में \u20b96,000/वर्ष की आय सहायता। 2030\u201331 तक बढ़ाई गई।',
    'scheme.pmfby.desc': 'सूखा, बाढ़, कीट और अन्य नुकसान के खिलाफ फसल बीमा, कम किसान प्रीमियम पर।',
    'scheme.kcc.desc': 'बीज, खाद और अन्य खर्चों के लिए कम ब्याज़ का अल्पकालिक ऋण, अधिकतर बैंकों में उपलब्ध।',
    'scheme.kcc.link': 'किसी भी राष्ट्रीयकृत या सहकारी बैंक से आवेदन करें',
    'scheme.soil.desc': 'हर 2\u20133 साल में मुफ्त मिट्टी जांच, फसल अनुसार खाद और पोषक तत्वों की सलाह के साथ।',
    'scheme.smam.title': 'SMAM \u2014 मशीनरी सब्सिडी', 'scheme.smam.desc': 'ट्रैक्टर और उपकरणों पर सब्सिडी, साथ ही किसान ड्रोन प्रदर्शन और कस्टम हायरिंग सेंटर के लिए सहायता।',
    'scheme.drone.desc': 'ड्रोन खरीदने और पास के किसानों को छिड़काव सेवा देने के लिए महिला स्वयं सहायता समूहों को 80% सब्सिडी (\u20b98 लाख तक)।',
    'scheme.drone.link': 'अपने नज़दीकी कृषि विज्ञान केंद्र या DAY-NRLM कार्यालय से संपर्क करें',
    'scheme.kusum.desc': 'सौर सिंचाई पंप पर सब्सिडी, डीज़ल और बिजली का खर्च कम करने के लिए।',
    'scheme.enam.desc': 'बेहतर भाव के लिए किसानों को बाज़ारों के खरीदारों से जोड़ने वाला ऑनलाइन मंडी व्यापार मंच।',
    'scheme.aif.title': 'कृषि अवसंरचना कोष', 'scheme.aif.desc': 'गोदाम, कोल्ड स्टोरेज बनाने के लिए \u20b92 करोड़ तक के ऋण पर 3% ब्याज़ छूट।',
    'scheme.kcc2.title': 'किसान कॉल सेंटर', 'scheme.kcc2.desc': 'फसल, योजनाओं और शिकायतों पर मुफ्त विशेषज्ञ सलाह, अपनी भाषा में, सुबह 6 से रात 10 बजे तक, हर दिन।',
    'seed.h2': 'क्या आपका बीज असली है?', 'seed.sub': 'किसानों को बेचे जाने वाले प्रमाणित बीज पर रंगीन टैग होता है। यह व्यवस्था जानने से बुवाई से पहले ही समस्या पकड़ में आ जाती है।',
    'tag.breeder': 'ब्रीडर बीज \u2014 सुनहरा पीला टैग (किसानों को सीधे नहीं बेचा जाता)', 'tag.foundation': 'फाउंडेशन बीज \u2014 सफेद टैग',
    'tag.registered': 'पंजीकृत बीज \u2014 बैंगनी टैग', 'tag.certified': 'प्रमाणित बीज \u2014 नीला टैग (जो ज़्यादातर किसान खरीदते हैं)',
    'seed.c1': 'केवल लाइसेंस प्राप्त डीलर से खरीदें और हमेशा बैच/लॉट नंबर लिखा हुआ बिल लें।',
    'seed.c2': 'बैग पर सील टैग का रंग और लॉट नंबर जांचें — नीला मतलब प्रमाणित बीज।',
    'seed.c3': 'बैग सील हो, दोबारा सिला न हो, यह जांचें और टैग पर छपी अंकुरण % और शुद्धता % देखें।',
    'seed.c4': 'पैकिंग तारीख और वैधता अवधि जांचें — जांच अवधि पार कर चुका पुराना स्टॉक न खरीदें।',
    'seed.c5': 'शिकायत की ज़रूरत पड़ने पर बिल से डीलर का लाइसेंस नंबर नोट कर लें।',
    'seed.c6': 'पूरे खेत में बोने से पहले एक छोटा नमूना जांचें: 20\u201325 बीज गीले कपड़े में लपेटकर कुछ दिन रखें और अंकुरित बीज गिनें।',
    'seed.c7': 'अगर अंकुरण कम हो या फसल असामान्य दिखे, तो बैग, टैग और बिल सबूत के तौर पर रखें।',
    'seed.c8_html': 'संदिग्ध नकली बीज की शिकायत अपने स्थानीय कृषि विभाग, कृषि विज्ञान केंद्र, या किसान कॉल सेंटर <a href="tel:+9118001801551">1800-180-1551</a> पर करें।',
    'safety.h2': 'सुरक्षा सावधानियां', 'safety.sub': 'सामान्य अच्छी आदतें — हमेशा अपनी मशीन या रसायन के लेबल पर दिए निर्देशों का पालन करें।',
    'safety.machinery.title': 'मशीनरी',
    'safety.machinery.1': 'PTO शाफ्ट और चलते पुर्जों को हमेशा गार्ड से ढका रखें।',
    'safety.machinery.2': 'रुकावट हटाने या मरम्मत से पहले मशीन बंद करें और चाबी निकाल लें।',
    'safety.machinery.3': 'घूमते पुर्जों के पास ढीले कपड़े या दुपट्टे से बचें।',
    'safety.machinery.4': 'ट्रैक्टर, थ्रेशर और हार्वेस्टर चलने के दौरान बच्चों को दूर रखें।',
    'safety.spray.title': 'छिड़काव और रसायन',
    'safety.spray.1': 'मिलाते या छिड़काव करते समय दस्ताने, मास्क और पूरी बाजू के कपड़े पहनें।',
    'safety.spray.2': 'सुबह जल्दी या शाम को छिड़काव करें, हवा की दिशा के विपरीत कभी नहीं।',
    'safety.spray.3': 'छिड़काव के बाद खाने या धूम्रपान से पहले हाथ, चेहरा और कपड़े अच्छी तरह धोएं।',
    'safety.spray.4': 'रसायनों को बच्चों, जानवरों और अनाज से दूर ताला लगाकर रखें।',
    'safety.storage.title': 'बीज और भंडारण',
    'safety.storage.1': 'बीज और अनाज को सूखे, हवादार, कीट-मुक्त गोदाम में ज़मीन से ऊपर रखें।',
    'safety.storage.2': 'रखे बोरों की समय-समय पर कीट, नमी या चूहों के नुकसान के लिए जांच करें।',
    'safety.storage.3': 'गिरने से बचने के लिए भंडारण क्षेत्र की रस्सी, सीढ़ी और उठाने के उपकरण अच्छी हालत में रखें।',
    'safety.weather.title': 'मौसम',
    'safety.weather.1': 'बिजली चमकने या गरज की पहली आहट पर खेत का काम रोककर आश्रय लें।',
    'safety.weather.2': 'लू के दौरान सुबह जल्दी या शाम को काम करें और बार-बार पानी पिएं।',
    'safety.weather.3': 'छिड़काव, कटाई या ढुलाई के दिन तय करने से पहले ऊपर मौसम अनुभाग देखें।',
    'list.h2': 'उपकरण, मज़दूर या भंडारण की पेशकश करें', 'list.sub': 'नीचे चुनें कि आप क्या दे रहे हैं — सबमिट करते ही यह बाज़ार में दिख जाएगा, किसी मंज़ूरी का इंतज़ार नहीं।',
    'form.whatListing': 'आप क्या सूचीबद्ध कर रहे हैं?', 'form.optEquipment': 'किराए के लिए उपकरण', 'form.optLabour': 'काम के लिए मज़दूर', 'form.optGodown': 'गोदाम / भंडारण जगह',
    'form.name.equipment': 'उपकरण का नाम', 'form.name.labour': 'टीम / सेवा का नाम', 'form.name.godown': 'गोदाम / भंडारण का नाम',
    'form.namePlaceholder': 'जैसे महिंद्रा 575 DI ट्रैक्टर',
    'form.categoryLabel': 'श्रेणी', 'form.categoryPlaceholder': 'एक श्रेणी चुनें',
    'form.price.equipment': 'किराया (\u20b9 प्रति दिन)', 'form.price.labour': 'मज़दूरी (\u20b9 प्रति मज़दूर प्रति दिन)', 'form.price.godown': 'किराया (\u20b9 प्रति माह)',
    'form.pricePlaceholder': 'जैसे 1500',
    'form.availabilityLabel': 'उपलब्धता', 'form.availNow': 'अभी उपलब्ध', 'form.availSoon': 'अगले हफ्ते से उपलब्ध', 'form.availBooked': 'अभी बुक है',
    'form.workersLabel': 'मज़दूरों की संख्या', 'form.workersPlaceholder': 'जैसे 6',
    'form.capacityLabel': 'क्षमता', 'form.capacityPlaceholder': 'जैसे 2,000 वर्ग फुट / 150 टन',
    'form.villageLabel': 'गांव / कस्बा', 'form.villagePlaceholder': 'जैसे सोनीपत',
    'form.districtLabel': 'ज़िला', 'form.districtPlaceholder': 'जैसे सोनीपत',
    'form.stateLabel': 'राज्य', 'form.statePlaceholder': 'एक राज्य चुनें',
    'form.descLabel': 'विवरण (वैकल्पिक)', 'form.descPlaceholder': 'हालत, मॉडल वर्ष, कौशल, डिलीवरी विकल्प...',
    'form.owner.equipment': 'आपका नाम', 'form.owner.labour': 'संपर्क व्यक्ति का नाम', 'form.owner.godown': 'आपका नाम',
    'form.ownerPlaceholder': 'जैसे रमेश यादव',
    'form.phoneLabel': 'संपर्क नंबर', 'form.phonePlaceholder': '10 अंकों का मोबाइल नंबर',
    'form.photoLabel': 'फोटो (वैकल्पिक)', 'form.photoHint': 'आपके उपकरण, टीम या भंडारण की असली फोटो सामान्य तस्वीर से कहीं ज़्यादा कॉल दिलाती है।',
    'form.submit': 'सूची सबमिट करें',
    'form.errorPhone': 'एक सही 10 अंकों का भारतीय मोबाइल नंबर डालें।',
    'form.success': 'सूचीबद्ध हो गया! यह अब ऊपर बाज़ार में दिख रहा है।',
    'footer.note': 'किसानों के लिए, किसानों द्वारा बनाया गया। इस डेमो के लिए सूचियां आपके डिवाइस पर सेव होती हैं। मंडी भाव केवल संकेतात्मक हैं — बेचने से पहले हमेशा Agmarknet या e-NAM पर पुष्टि करें। योजना विवरण बदलते रहते हैं — आवेदन से पहले आधिकारिक पोर्टल पर पुष्टि करें।',
    'panel.contactPerson': 'संपर्क व्यक्ति', 'panel.contactNumber': 'संपर्क नंबर', 'panel.rate': 'दर',
    'panel.callNow': 'अभी कॉल करें', 'panel.copyNumber': 'नंबर कॉपी करें', 'panel.copied': 'कॉपी हो गया',
    'status.available': 'अभी उपलब्ध', 'status.booked': 'बुक है', 'status.soon': 'जल्द उपलब्ध',
    'state.Punjab': 'पंजाब', 'state.Haryana': 'हरियाणा', 'state.Uttar Pradesh': 'उत्तर प्रदेश', 'state.Maharashtra': 'महाराष्ट्र',
    'state.Karnataka': 'कर्नाटक', 'state.Madhya Pradesh': 'मध्य प्रदेश', 'state.Rajasthan': 'राजस्थान', 'state.Gujarat': 'गुजरात',
    'state.Bihar': 'बिहार', 'state.Andhra Pradesh': 'आंध्र प्रदेश', 'state.Telangana': 'तेलंगाना', 'state.Tamil Nadu': 'तमिलनाडु', 'state.West Bengal': 'पश्चिम बंगाल',
    'misc.all': 'सभी', 'misc.book': 'बुक करें', 'misc.yourListing': 'आपकी सूची', 'misc.remove': 'हटाएं',
    'misc.workerSingular': 'मज़दूर उपलब्ध', 'misc.workerPlural': 'मज़दूर उपलब्ध',
  },

  te: {
    'nav.marketplace': 'మార్కెట్', 'nav.prices': 'మార్కెట్ ధరలు', 'nav.weather': 'వాతావరణం',
    'nav.schemes': 'ప్రభుత్వ పథకాలు', 'nav.seed': 'విత్తన తనిఖీ', 'nav.safety': 'భద్రత', 'nav.list': 'లిస్ట్ చేయండి',
    'hero.h1': 'సీజన్‌కు కావాల్సినవన్నీ — ఊరు వదలకుండానే.',
    'hero.sub': 'దగ్గర్లో పరికరాలు అద్దెకు తీసుకోండి, కూలీలను బుక్ చేయండి, లేదా గోదాం స్థలం తీసుకోండి — అలాగే నేటి మార్కెట్ ధరలు, వాతావరణం, ప్రభుత్వ పథకాలు మరియు విత్తన భద్రత, అన్నీ ఒకే చోట.',
    'hero.cta1': 'మార్కెట్ తెరవండి', 'hero.cta2': 'పరికరాలు, కూలీలు లేదా గోదాం ఆఫర్ చేయండి',
    'hero.stat1': 'లైవ్ లిస్టింగ్‌లు', 'hero.stat2': 'రాష్ట్రాలు', 'hero.stat3': 'బుకింగ్ కమిషన్',
    'market.h2': 'మార్కెట్', 'market.sub': 'పరికరాలు, వ్యవసాయ కూలీలు, లేదా గోదాం స్థలం — దగ్గర్లో ఉన్నవి చూసి బుక్ చేయడానికి కాల్ చేయండి.',
    'tab.equipment': 'పరికరాలు', 'tab.labour': 'కూలీలు', 'tab.godown': 'గోదాం / నిల్వ',
    'search.equipment': 'పరికరం, జిల్లా లేదా రాష్ట్రం వెతకండి', 'search.labour': 'పని, జిల్లా లేదా రాష్ట్రం వెతకండి', 'search.godown': 'నిల్వ రకం, జిల్లా లేదా రాష్ట్రం వెతకండి',
    'sort.recent': 'కొత్తవి ముందు',
    'sort.priceAsc.equipment': 'ధర: తక్కువ నుండి ఎక్కువ', 'sort.priceDesc.equipment': 'ధర: ఎక్కువ నుండి తక్కువ',
    'sort.priceAsc.labour': 'కూలి: తక్కువ నుండి ఎక్కువ', 'sort.priceDesc.labour': 'కూలి: ఎక్కువ నుండి తక్కువ',
    'sort.priceAsc.godown': 'అద్దె: తక్కువ నుండి ఎక్కువ', 'sort.priceDesc.godown': 'అద్దె: ఎక్కువ నుండి తక్కువ',
    'empty.equipment': 'ఈ వెతుకులాటకు పరికరాలు లేవు. వేరే జిల్లా లేదా వర్గం ప్రయత్నించండి.',
    'empty.labour': 'ఈ వెతుకులాటకు కూలీ బృందాలు ఇంకా లేవు.', 'empty.godown': 'ఈ వెతుకులాటకు నిల్వ లిస్టింగ్‌లు ఇంకా లేవు.',
    'cat.tractor': 'ట్రాక్టర్', 'cat.harvester': 'హార్వెస్టర్', 'cat.rotavator': 'రోటావేటర్', 'cat.cultivator': 'కల్టివేటర్',
    'cat.seed-drill': 'సీడ్ డ్రిల్', 'cat.sprayer': 'పవర్ స్ప్రేయర్', 'cat.drone': 'వ్యవసాయ డ్రోన్', 'cat.trailer': 'ట్రైలర్',
    'cat.thresher': 'త్రెషర్', 'cat.plough': 'నాగలి', 'cat.baler': 'బేలర్',
    'cat.harvest-labour': 'కోత కూలీలు', 'cat.sowing-labour': 'విత్తడం / నాట్లు', 'cat.spraying-labour': 'పిచికారీ కూలీలు',
    'cat.general-labour': 'సాధారణ వ్యవసాయ కూలీలు', 'cat.machine-operator': 'మెషిన్ ఆపరేటర్',
    'cat.godown': 'గోదాం', 'cat.cold-storage': 'కోల్డ్ స్టోరేజ్', 'cat.open-yard': 'ఓపెన్ యార్డ్',
    'how.1.title': 'దగ్గర్లో వెతకండి', 'how.1.desc': 'వర్గం మరియు మీ జిల్లా ప్రకారం ఫిల్టర్ చేయండి — పరికరాలు, కూలీలు లేదా నిల్వ.',
    'how.2.title': 'నేరుగా కాల్ చేయండి', 'how.2.desc': 'ప్రతి లిస్టింగ్‌లో పేరు, నంబర్ ఉంటుంది. మధ్యలో యాప్ లేదు — తేదీలు, ధర మీరే నేరుగా మాట్లాడుకోవచ్చు.',
    'how.3.title': 'పని పూర్తి చేయండి', 'how.3.desc': 'తీసుకెళ్లండి, డెలివరీ చేయించుకోండి, లేదా ఆ రోజు రండి — ఎప్పటిలాగే చెల్లింపు చేసుకోండి.',
    'prices.h2': 'మార్కెట్ ధరలు',
    'prices.sub_html': 'కేవలం నమూనా ధరలు — మార్కెట్ మరియు నాణ్యతను బట్టి ధరలు ప్రతిరోజూ మారతాయి. అమ్మే ముందు ఎల్లప్పుడూ <a href="https://agmarknet.gov.in" target="_blank" rel="noopener">Agmarknet</a> లేదా <a href="https://enam.gov.in" target="_blank" rel="noopener">e-NAM</a>లో లేదా మీ స్థానిక మార్కెట్‌లో నేటి ధర చూడండి.',
    'price.search': 'పంట వెతకండి', 'price.th.crop': 'పంట', 'price.th.variety': 'సాధారణ రకం', 'price.th.range': 'సూచిక ధర (\u20b9 / క్వింటాల్)',
    'crop.wheat': 'గోధుమ', 'crop.wheat.v': 'సాధారణ (శర్బతి/HD)',
    'crop.paddy': 'వరి (బియ్యం)', 'crop.paddy.v': 'సాధారణ / గ్రేడ్ A',
    'crop.cotton': 'పత్తి', 'crop.cotton.v': 'మధ్యస్థ నారసం',
    'crop.sugarcane': 'చెరకు', 'crop.sugarcane.v': '\u2014',
    'crop.soybean': 'సోయాబీన్', 'crop.soybean.v': 'పసుపు',
    'crop.maize': 'మొక్కజొన్న', 'crop.maize.v': 'హైబ్రిడ్',
    'crop.mustard': 'ఆవాలు', 'crop.mustard.v': '\u2014',
    'crop.gram': 'శనగలు', 'crop.gram.v': 'దేశీ',
    'crop.onion': 'ఉల్లిపాయ', 'crop.onion.v': 'ఎరుపు',
    'crop.potato': 'బంగాళదుంప', 'crop.potato.v': '\u2014',
    'crop.tomato': 'టమాటా', 'crop.tomato.v': '\u2014',
    'crop.groundnut': 'వేరుశనగ', 'crop.groundnut.v': 'బోల్డ్',
    'weather.h2': 'వాతావరణం', 'weather.sub': 'పిచికారీ, కోత లేదా రవాణాకు ముందు పరిస్థితులు చూడండి.',
    'weather.placeholder': 'మీ గ్రామం, పట్టణం లేదా జిల్లా నమోదు చేయండి', 'weather.button': 'వాతావరణం చూడండి',
    'weather.source': 'వాతావరణ డేటా Open-Meteo నుండి.',
    'weather.today': 'ఈరోజు', 'weather.tomorrow': 'రేపు', 'weather.day3': 'రోజు 3', 'weather.day4': 'రోజు 4',
    'weather.humidity': 'తేమ', 'weather.wind': 'గాలి', 'weather.rain': 'వర్షం',
    'weather.lookingUp': 'వెతుకుతోంది', 'weather.notFound': 'కనుగొనబడలేదు', 'weather.tryBigger': 'దగ్గర్లోని పెద్ద పట్టణం లేదా జిల్లా పేరు ప్రయత్నించండి.',
    'weather.fetchError': 'ఇప్పుడు వాతావరణం తీసుకురాలేకపోయాం. మీ కనెక్షన్ చూసి మళ్లీ ప్రయత్నించండి.',
    'weather.tipHigh': 'గాలి కొంచెం ఎక్కువగా ఉంది — ఇప్పుడు పిచికారీకి అనుకూలం కాదు.',
    'weather.tipOk': 'అవసరమైతే పిచికారీకి గాలి వేగం సరిపోతుంది.',
    'schemes.h2': 'ప్రభుత్వ పథకాలు & నిధులు', 'schemes.sub': 'ప్రారంభ జాబితా — దరఖాస్తుకు ముందు అధికారిక వెబ్‌సైట్‌లో అర్హత, మొత్తం ఎల్లప్పుడూ నిర్ధారించుకోండి.',
    'scheme.pmkisan.desc': 'మూడు వాయిదాల్లో నేరుగా బ్యాంకు ఖాతాకు సంవత్సరానికి \u20b96,000 ఆదాయ సహాయం. 2030\u201331 వరకు పొడిగించబడింది.',
    'scheme.pmfby.desc': 'కరువు, వరద, తెగుళ్లు మరియు ఇతర నష్టాలకు వ్యతిరేకంగా తక్కువ రైతు ప్రీమియంతో పంట బీమా.',
    'scheme.kcc.desc': 'విత్తనాలు, ఎరువులు మరియు ఇతర ఖర్చుల కోసం తక్కువ వడ్డీ స్వల్పకాలిక రుణం, చాలా బ్యాంకుల్లో అందుబాటులో ఉంది.',
    'scheme.kcc.link': 'ఏదైనా జాతీయ లేదా సహకార బ్యాంకు ద్వారా దరఖాస్తు చేయండి',
    'scheme.soil.desc': 'ప్రతి 2\u20133 సంవత్సరాలకు ఉచిత మట్టి పరీక్ష, పంట వారీగా ఎరువుల సిఫార్సులతో.',
    'scheme.smam.title': 'SMAM \u2014 యంత్ర సబ్సిడీ', 'scheme.smam.desc': 'ట్రాక్టర్లు మరియు పరికరాలపై సబ్సిడీ, కిసాన్ డ్రోన్ ప్రదర్శనలు మరియు కస్టమ్ హైరింగ్ సెంటర్లకు మద్దతుతో సహా.',
    'scheme.drone.desc': 'డ్రోన్ కొనుగోలు చేసి దగ్గర్లోని రైతులకు పిచికారీ సేవలు అందించడానికి మహిళా స్వయం సహాయక బృందాలకు 80% సబ్సిడీ (\u20b98 లక్షల వరకు).',
    'scheme.drone.link': 'మీ స్థానిక కృషి విజ్ఞాన కేంద్రం లేదా DAY-NRLM కార్యాలయాన్ని సంప్రదించండి',
    'scheme.kusum.desc': 'డీజిల్, విద్యుత్ ఖర్చులు తగ్గించడానికి సోలార్ సాగునీటి పంపులపై సబ్సిడీ.',
    'scheme.enam.desc': 'మంచి ధర కోసం రైతులను మార్కెట్ల కొనుగోలుదారులతో కలిపే ఆన్‌లైన్ మార్కెట్ వేదిక.',
    'scheme.aif.title': 'వ్యవసాయ మౌలిక సదుపాయాల నిధి', 'scheme.aif.desc': 'గోదాంలు, కోల్డ్ స్టోరేజ్ నిర్మించడానికి \u20b92 కోట్ల వరకు రుణాలపై 3% వడ్డీ రాయితీ.',
    'scheme.kcc2.title': 'కిసాన్ కాల్ సెంటర్', 'scheme.kcc2.desc': 'పంటలు, పథకాలు మరియు ఫిర్యాదులపై ఉచిత నిపుణుల సలహా, మీ భాషలో, ఉదయం 6 నుండి రాత్రి 10 వరకు, ప్రతిరోజూ.',
    'seed.h2': 'మీ విత్తనం అసలైనదేనా?', 'seed.sub': 'రైతులకు అమ్మే ధృవీకరించిన విత్తనాలపై రంగు ట్యాగ్ ఉంటుంది. ఈ విధానం తెలిస్తే విత్తడానికి ముందే సమస్యను గుర్తించవచ్చు.',
    'tag.breeder': 'బ్రీడర్ విత్తనం \u2014 బంగారు పసుపు ట్యాగ్ (నేరుగా రైతులకు అమ్మరు)', 'tag.foundation': 'ఫౌండేషన్ విత్తనం \u2014 తెలుపు ట్యాగ్',
    'tag.registered': 'రిజిస్టర్డ్ విత్తనం \u2014 ఊదా ట్యాగ్', 'tag.certified': 'ధృవీకరించిన విత్తనం \u2014 నీలం ట్యాగ్ (ఎక్కువమంది రైతులు కొనేది)',
    'seed.c1': 'లైసెన్స్ ఉన్న డీలర్ నుండి మాత్రమే కొనండి మరియు బ్యాచ్/లాట్ నంబర్ రాసిన బిల్లు తీసుకోండి.',
    'seed.c2': 'బ్యాగ్‌కు సీల్ చేసిన ట్యాగ్ రంగు, లాట్ నంబర్ చూడండి — నీలం అంటే ధృవీకరించిన విత్తనం.',
    'seed.c3': 'బ్యాగ్ సీల్ చేసి ఉందో, మళ్లీ కుట్టలేదో చూడండి, ట్యాగ్‌పై ముద్రించిన మొలక % మరియు స్వచ్ఛత % చూడండి.',
    'seed.c4': 'ప్యాకింగ్ తేదీ, చెల్లుబాటు వ్యవధి చూడండి — పరీక్ష గడువు దాటిన పాత స్టాక్ కొనకండి.',
    'seed.c5': 'తర్వాత ఫిర్యాదు చేయాల్సి వస్తే బిల్లు నుండి డీలర్ లైసెన్స్ నంబర్ నోట్ చేసుకోండి.',
    'seed.c6': 'పూర్తి పొలంలో విత్తే ముందు చిన్న నమూనా పరీక్షించండి: 20\u201325 విత్తనాలను తడి గుడ్డలో చుట్టి కొన్ని రోజులు ఉంచి మొలిచినవి లెక్కించండి.',
    'seed.c7': 'మొలక తక్కువగా ఉంటే లేదా పంట అసాధారణంగా కనిపిస్తే, బ్యాగ్, ట్యాగ్, బిల్లును సాక్ష్యంగా ఉంచండి.',
    'seed.c8_html': 'నకిలీ విత్తనం అనుమానం ఉంటే మీ స్థానిక వ్యవసాయ శాఖ, కృషి విజ్ఞాన కేంద్రం, లేదా కిసాన్ కాల్ సెంటర్ <a href="tel:+9118001801551">1800-180-1551</a>కు ఫిర్యాదు చేయండి.',
    'safety.h2': 'భద్రతా జాగ్రత్తలు', 'safety.sub': 'సాధారణ మంచి పద్ధతులు — మీ యంత్రం లేదా రసాయన లేబుల్‌పై ఉన్న సూచనలను ఎల్లప్పుడూ పాటించండి.',
    'safety.machinery.title': 'యంత్రాలు',
    'safety.machinery.1': 'PTO షాఫ్ట్‌లు, కదిలే భాగాలను ఎల్లప్పుడూ గార్డులతో కప్పి ఉంచండి.',
    'safety.machinery.2': 'అడ్డంకి తొలగించే ముందు లేదా మరమ్మతు చేసే ముందు యంత్రం ఆపి తాళం తీసేయండి.',
    'safety.machinery.3': 'తిరిగే భాగాల దగ్గర వదులుగా ఉండే బట్టలు, దుపట్టా జాగ్రత్త.',
    'safety.machinery.4': 'ట్రాక్టర్, త్రెషర్, హార్వెస్టర్ నడుస్తున్నప్పుడు పిల్లలను దూరంగా ఉంచండి.',
    'safety.spray.title': 'పిచికారీ & రసాయనాలు',
    'safety.spray.1': 'కలిపేటప్పుడు లేదా పిచికారీ చేసేటప్పుడు గ్లోవ్స్, మాస్క్, పూర్తి చేతుల బట్టలు వేసుకోండి.',
    'safety.spray.2': 'ఉదయం త్వరగా లేదా సాయంత్రం పిచికారీ చేయండి, గాలి దిశకు ఎదురుగా ఎప్పుడూ చేయవద్దు.',
    'safety.spray.3': 'పిచికారీ తర్వాత తినే లేదా పొగ తాగే ముందు చేతులు, ముఖం, బట్టలు బాగా కడుక్కోండి.',
    'safety.spray.4': 'రసాయనాలను పిల్లలు, జంతువులు, ఆహార ధాన్యాలకు దూరంగా తాళం వేసి ఉంచండి.',
    'safety.storage.title': 'విత్తనం & నిల్వ',
    'safety.storage.1': 'విత్తనాలు, ధాన్యాన్ని పొడి, గాలి ఆడే, పురుగుల్లేని గోదాంలో నేలకు దూరంగా నిల్వ చేయండి.',
    'safety.storage.2': 'నిల్వ చేసిన బస్తాలను క్రమం తప్పకుండా పురుగులు, తేమ, ఎలుకల నష్టం కోసం తనిఖీ చేయండి.',
    'safety.storage.3': 'పడిపోకుండా ఉండటానికి నిల్వ ప్రాంతంలోని తాడు, నిచ్చెన, ఎత్తే పరికరాలను మంచి స్థితిలో ఉంచండి.',
    'safety.weather.title': 'వాతావరణం',
    'safety.weather.1': 'మెరుపు లేదా ఉరుము మొదటి సంకేతం వద్దే పొలం పని ఆపి ఆశ్రయం తీసుకోండి.',
    'safety.weather.2': 'వడగాడ్పుల సమయంలో ఉదయం త్వరగా లేదా సాయంత్రం పని చేయండి, తరచూ నీరు తాగండి.',
    'safety.weather.3': 'పిచికారీ, కోత లేదా రవాణా రోజులు నిర్ణయించే ముందు పైన వాతావరణ విభాగం చూడండి.',
    'list.h2': 'పరికరాలు, కూలీలు లేదా నిల్వ ఆఫర్ చేయండి', 'list.sub': 'మీరు ఏమి అందిస్తున్నారో కింద ఎంచుకోండి — సమర్పించగానే ఇది మార్కెట్లో కనిపిస్తుంది, ఆమోదం కోసం వేచి ఉండనవసరం లేదు.',
    'form.whatListing': 'మీరు ఏమి లిస్ట్ చేస్తున్నారు?', 'form.optEquipment': 'అద్దెకు పరికరం', 'form.optLabour': 'పనికి కూలీలు', 'form.optGodown': 'గోదాం / నిల్వ స్థలం',
    'form.name.equipment': 'పరికరం పేరు', 'form.name.labour': 'బృందం / సేవ పేరు', 'form.name.godown': 'గోదాం / నిల్వ పేరు',
    'form.namePlaceholder': 'ఉదా. మహీంద్రా 575 DI ట్రాక్టర్',
    'form.categoryLabel': 'వర్గం', 'form.categoryPlaceholder': 'ఒక వర్గం ఎంచుకోండి',
    'form.price.equipment': 'అద్దె ధర (\u20b9 రోజుకు)', 'form.price.labour': 'కూలి (\u20b9 కూలీకి రోజుకు)', 'form.price.godown': 'అద్దె (\u20b9 నెలకు)',
    'form.pricePlaceholder': 'ఉదా. 1500',
    'form.availabilityLabel': 'లభ్యత', 'form.availNow': 'ఇప్పుడు అందుబాటులో', 'form.availSoon': 'వచ్చే వారం నుండి అందుబాటులో', 'form.availBooked': 'ప్రస్తుతం బుక్ అయింది',
    'form.workersLabel': 'కూలీల సంఖ్య', 'form.workersPlaceholder': 'ఉదా. 6',
    'form.capacityLabel': 'సామర్థ్యం', 'form.capacityPlaceholder': 'ఉదా. 2,000 చదరపు అడుగులు / 150 టన్నులు',
    'form.villageLabel': 'గ్రామం / పట్టణం', 'form.villagePlaceholder': 'ఉదా. సోనిపట్',
    'form.districtLabel': 'జిల్లా', 'form.districtPlaceholder': 'ఉదా. సోనిపట్',
    'form.stateLabel': 'రాష్ట్రం', 'form.statePlaceholder': 'ఒక రాష్ట్రం ఎంచుకోండి',
    'form.descLabel': 'వివరణ (ఐచ్ఛికం)', 'form.descPlaceholder': 'స్థితి, మోడల్ సంవత్సరం, నైపుణ్యాలు, డెలివరీ ఎంపికలు...',
    'form.owner.equipment': 'మీ పేరు', 'form.owner.labour': 'సంప్రదింపు వ్యక్తి పేరు', 'form.owner.godown': 'మీ పేరు',
    'form.ownerPlaceholder': 'ఉదా. రమేష్ యాదవ్',
    'form.phoneLabel': 'సంప్రదింపు నంబర్', 'form.phonePlaceholder': '10 అంకెల మొబైల్ నంబర్',
    'form.photoLabel': 'ఫోటో (ఐచ్ఛికం)', 'form.photoHint': 'మీ పరికరం, బృందం లేదా నిల్వ యొక్క అసలైన ఫోటో సాధారణ చిత్రం కంటే ఎక్కువ కాల్స్ తెస్తుంది.',
    'form.submit': 'లిస్టింగ్ సమర్పించండి',
    'form.errorPhone': 'సరైన 10 అంకెల భారతీయ మొబైల్ నంబర్ నమోదు చేయండి.',
    'form.success': 'లిస్ట్ అయింది! ఇది ఇప్పుడు పైన మార్కెట్‌లో కనిపిస్తుంది.',
    'footer.note': 'రైతుల కోసం, రైతులచే నిర్మించబడింది. ఈ డెమో కోసం లిస్టింగ్‌లు మీ పరికరంలో నిల్వ చేయబడతాయి. మార్కెట్ ధరలు సూచనాత్మకం మాత్రమే — అమ్మే ముందు ఎల్లప్పుడూ Agmarknet లేదా e-NAM లో నిర్ధారించుకోండి. పథక వివరాలు మారుతూ ఉంటాయి — దరఖాస్తుకు ముందు అధికారిక పోర్టల్‌లో నిర్ధారించుకోండి.',
    'panel.contactPerson': 'సంప్రదింపు వ్యక్తి', 'panel.contactNumber': 'సంప్రదింపు నంబర్', 'panel.rate': 'ధర',
    'panel.callNow': 'ఇప్పుడే కాల్ చేయండి', 'panel.copyNumber': 'నంబర్ కాపీ చేయండి', 'panel.copied': 'కాపీ అయింది',
    'status.available': 'ఇప్పుడు అందుబాటులో', 'status.booked': 'బుక్ అయింది', 'status.soon': 'త్వరలో అందుబాటులో',
    'state.Punjab': 'పంజాబ్', 'state.Haryana': 'హర్యానా', 'state.Uttar Pradesh': 'ఉత్తర ప్రదేశ్', 'state.Maharashtra': 'మహారాష్ట్ర',
    'state.Karnataka': 'కర్ణాటక', 'state.Madhya Pradesh': 'మధ్య ప్రదేశ్', 'state.Rajasthan': 'రాజస్థాన్', 'state.Gujarat': 'గుజరాత్',
    'state.Bihar': 'బీహార్', 'state.Andhra Pradesh': 'ఆంధ్ర ప్రదేశ్', 'state.Telangana': 'తెలంగాణ', 'state.Tamil Nadu': 'తమిళనాడు', 'state.West Bengal': 'పశ్చిమ బెంగాల్',
    'misc.all': 'అన్నీ', 'misc.book': 'బుక్ చేయండి', 'misc.yourListing': 'మీ లిస్టింగ్', 'misc.remove': 'తొలగించు',
    'misc.workerSingular': 'కూలీ అందుబాటులో', 'misc.workerPlural': 'కూలీలు అందుబాటులో',
  },
};

function t(key) {
  return (T[currentLang] && T[currentLang][key]) || T.en[key] || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });

  document.querySelectorAll('#f-state option[data-i18n]').forEach(opt => { opt.textContent = t(opt.dataset.i18n); });

  Object.values(MODULES).forEach(cfg => {
    renderRailFor(cfg);
    renderGridFor(cfg);
  });
  if (typeof updateFormForType === 'function') updateFormForType();
}

// ============================================================
// Shared helpers
// ============================================================
const INK = '#14231A', GREEN = '#1F6D45', GREEN_DARK = '#123D28', GREEN_LIGHT = '#3E9A6C';
const GOLD = '#E8A93A', GOLD_DARK = '#B87F1E', GOLD_LIGHT = '#F4C978';
const CREAM = '#FFF8EC', STEEL = '#5B6B63', STEEL_DARK = '#3C4841';
const WASH_FIELD = '#EDF2E9', WASH_GOLD = '#FBF0DB', WASH_SKY = '#DCEBF0', WASH_CLAY = '#EAE0D2', WASH_GREY = '#E9EAE4';

function scene(wash, inner) {
  return `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="200" fill="${wash}"/>
    <ellipse cx="160" cy="176" rx="120" ry="10" fill="${INK}" opacity="0.08"/>
    ${inner}</svg>`;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

const STATES = [
  'Punjab', 'Haryana', 'Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Madhya Pradesh',
  'Rajasthan', 'Gujarat', 'Bihar', 'Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'West Bengal'
];

// ============================================================
// Equipment categories — filled flat-illustration style
// ============================================================
const EQUIPMENT_CATEGORIES = [
  { id: 'tractor', labelKey: 'cat.tractor', art: scene(WASH_FIELD, `
    <path d="M60 168 Q160 150 260 168" stroke="${GREEN}" stroke-width="2" opacity="0.25" fill="none"/>
    <path d="M64 150h100v-34c0-3 2-5 5-5h20l22 28h14v42H64z" fill="${GREEN}"/>
    <path d="M64 150h60v-39h-10v39z" fill="${GREEN_DARK}" opacity="0.35"/>
    <rect x="66" y="86" width="40" height="30" rx="3" fill="${STEEL_DARK}"/>
    <rect x="70" y="90" width="32" height="16" rx="2" fill="${CREAM}" opacity="0.85"/>
    <circle cx="106" cy="150" r="32" fill="${INK}"/><circle cx="106" cy="150" r="19" fill="${STEEL}"/><circle cx="106" cy="150" r="7" fill="${GOLD}"/>
    <circle cx="200" cy="150" r="20" fill="${INK}"/><circle cx="200" cy="150" r="11" fill="${STEEL}"/><circle cx="200" cy="150" r="4" fill="${GOLD}"/>
    <rect x="60" y="146" width="10" height="6" rx="2" fill="${GOLD}"/>
    <path d="M186 112h26l16 26h-42z" fill="${GREEN_LIGHT}"/>
  `) },
  { id: 'harvester', labelKey: 'cat.harvester', art: scene(WASH_GOLD, `
    <path d="M40 172h240" stroke="${GOLD_DARK}" stroke-width="2" opacity="0.2"/>
    <path d="M118 88h94c5 0 9 4 9 9v48c0 3-2 5-5 5h-98z" fill="${GOLD}"/>
    <rect x="130" y="100" width="40" height="26" rx="3" fill="${STEEL_DARK}"/>
    <rect x="134" y="104" width="32" height="14" rx="2" fill="${CREAM}" opacity="0.85"/>
    <path d="M52 112l38-18h32v56H64l-12-12z" fill="${GREEN}"/>
    <path d="M52 112l38-18v56H64l-12-12z" fill="${GREEN_DARK}" opacity="0.3"/>
    <g fill="${GOLD_DARK}"><rect x="58" y="98" width="4" height="18"/><rect x="68" y="94" width="4" height="22"/><rect x="78" y="98" width="4" height="18"/><rect x="88" y="94" width="4" height="22"/></g>
    <circle cx="150" cy="160" r="22" fill="${INK}"/><circle cx="150" cy="160" r="12" fill="${STEEL}"/><circle cx="150" cy="160" r="4" fill="${GOLD}"/>
    <circle cx="204" cy="160" r="22" fill="${INK}"/><circle cx="204" cy="160" r="12" fill="${STEEL}"/><circle cx="204" cy="160" r="4" fill="${GOLD}"/>
  `) },
  { id: 'rotavator', labelKey: 'cat.rotavator', art: scene(WASH_FIELD, `
    <rect x="66" y="86" width="188" height="22" rx="4" fill="${GREEN}"/>
    <rect x="66" y="86" width="188" height="8" rx="4" fill="${GREEN_LIGHT}"/>
    <g fill="${STEEL_DARK}"><rect x="82" y="108" width="8" height="46" rx="3"/><rect x="112" y="108" width="8" height="46" rx="3"/><rect x="142" y="108" width="8" height="46" rx="3"/><rect x="172" y="108" width="8" height="46" rx="3"/><rect x="202" y="108" width="8" height="46" rx="3"/><rect x="232" y="108" width="8" height="46" rx="3"/></g>
    <g fill="${GOLD}"><circle cx="86" cy="156" r="7"/><circle cx="116" cy="156" r="7"/><circle cx="146" cy="156" r="7"/><circle cx="176" cy="156" r="7"/><circle cx="206" cy="156" r="7"/><circle cx="236" cy="156" r="7"/></g>
    <path d="M70 172 q90-10 180 0" stroke="${GREEN_DARK}" stroke-width="3" opacity="0.3" fill="none"/>
  `) },
  { id: 'cultivator', labelKey: 'cat.cultivator', art: scene(WASH_FIELD, `
    <rect x="70" y="82" width="170" height="20" rx="5" fill="${GOLD}"/>
    <rect x="70" y="82" width="170" height="7" rx="5" fill="${GOLD_LIGHT}"/>
    <path d="M96 100l-24 68 12 4 22-66z" fill="${STEEL_DARK}"/>
    <path d="M150 100l-10 68 12 2 10-66z" fill="${STEEL_DARK}"/>
    <path d="M198 100l10 68-12 2-10-66z" fill="${STEEL_DARK}"/>
    <path d="M240 100l24 60-11 5-24-58z" fill="${STEEL_DARK}"/>
    <g fill="${GREEN}" opacity="0.85"><ellipse cx="82" cy="172" rx="14" ry="5"/><ellipse cx="140" cy="176" rx="14" ry="5"/><ellipse cx="200" cy="176" rx="14" ry="5"/><ellipse cx="258" cy="168" rx="14" ry="5"/></g>
  `) },
  { id: 'seed-drill', labelKey: 'cat.seed-drill', art: scene(WASH_GOLD, `
    <rect x="66" y="76" width="180" height="46" rx="8" fill="${GREEN}"/>
    <rect x="66" y="76" width="180" height="14" rx="8" fill="${GREEN_LIGHT}"/>
    <rect x="82" y="88" width="26" height="26" rx="4" fill="${CREAM}" opacity="0.5"/>
    <rect x="130" y="88" width="26" height="26" rx="4" fill="${CREAM}" opacity="0.5"/>
    <rect x="178" y="88" width="26" height="26" rx="4" fill="${CREAM}" opacity="0.5"/>
    <g stroke="${STEEL_DARK}" stroke-width="6" stroke-linecap="round"><path d="M92 122v42"/><path d="M140 122v42"/><path d="M188 122v42"/><path d="M228 122v38"/></g>
    <g fill="${GOLD_DARK}"><circle cx="92" cy="168" r="4"/><circle cx="140" cy="168" r="4"/><circle cx="188" cy="168" r="4"/><circle cx="228" cy="164" r="4"/></g>
  `) },
  { id: 'sprayer', labelKey: 'cat.sprayer', art: scene(WASH_SKY, `
    <path d="M108 172c-2-52 14-66 18-96" stroke="${STEEL_DARK}" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M94 60h48l14 24H84z" fill="${GREEN}"/>
    <rect x="98" y="66" width="40" height="14" rx="3" fill="${GREEN_LIGHT}"/>
    <path d="M150 88h84" stroke="${STEEL_DARK}" stroke-width="6" stroke-linecap="round"/>
    <path d="M162 108h70" stroke="${STEEL_DARK}" stroke-width="6" stroke-linecap="round"/>
    <path d="M172 128h56" stroke="${STEEL_DARK}" stroke-width="6" stroke-linecap="round"/>
    <g fill="${WASH_SKY === '#DCEBF0' ? '#5AA6C7' : '#5AA6C7'}" opacity="0.9"><circle cx="220" cy="82" r="4"/><circle cx="236" cy="98" r="4"/><circle cx="196" cy="102" r="3"/><circle cx="212" cy="122" r="3"/><circle cx="182" cy="126" r="3"/></g>
  `) },
  { id: 'drone', labelKey: 'cat.drone', art: scene(WASH_SKY, `
    <rect x="138" y="92" width="44" height="20" rx="6" fill="${GREEN}"/>
    <circle cx="160" cy="102" r="5" fill="${GOLD}"/>
    <path d="M138 98l-46-26M182 98l46-26M138 106l-46 26M182 106l46 26" stroke="${STEEL_DARK}" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="92" cy="70" rx="26" ry="7" fill="${STEEL}" opacity="0.9"/>
    <ellipse cx="228" cy="70" rx="26" ry="7" fill="${STEEL}" opacity="0.9"/>
    <ellipse cx="92" cy="134" rx="26" ry="7" fill="${STEEL}" opacity="0.9"/>
    <ellipse cx="228" cy="134" rx="26" ry="7" fill="${STEEL}" opacity="0.9"/>
    <rect x="152" y="112" width="16" height="28" rx="3" fill="${GOLD_DARK}"/>
    <ellipse cx="160" cy="144" rx="14" ry="5" fill="${STEEL_DARK}"/>
  `) },
  { id: 'trailer', labelKey: 'cat.trailer', art: scene(WASH_CLAY, `
    <rect x="60" y="96" width="152" height="54" rx="6" fill="${GOLD}"/>
    <rect x="60" y="96" width="152" height="16" rx="6" fill="${GOLD_LIGHT}"/>
    <path d="M212 116h32l16 28h-48z" fill="${STEEL}"/>
    <circle cx="100" cy="164" r="18" fill="${INK}"/><circle cx="100" cy="164" r="8" fill="${STEEL}"/>
    <circle cx="176" cy="164" r="18" fill="${INK}"/><circle cx="176" cy="164" r="8" fill="${STEEL}"/>
    <circle cx="236" cy="152" r="13" fill="${INK}"/><circle cx="236" cy="152" r="5" fill="${STEEL}"/>
    <g stroke="${GOLD_DARK}" stroke-width="2" opacity="0.6"><path d="M78 112h116M78 128h116"/></g>
  `) },
  { id: 'thresher', labelKey: 'cat.thresher', art: scene(WASH_GOLD, `
    <circle cx="122" cy="132" r="42" fill="${GREEN}"/>
    <circle cx="122" cy="132" r="42" fill="${GREEN_LIGHT}" opacity="0.25"/>
    <circle cx="122" cy="132" r="16" fill="${STEEL_DARK}"/><circle cx="122" cy="132" r="6" fill="${GOLD}"/>
    <path d="M160 118h58l-14 42h-44z" fill="${GOLD}"/>
    <g fill="${GOLD_DARK}" opacity="0.85"><circle cx="214" cy="104" r="3"/><circle cx="224" cy="114" r="3"/><circle cx="228" cy="126" r="3"/><circle cx="222" cy="138" r="3"/></g>
  `) },
  { id: 'plough', labelKey: 'cat.plough', art: scene(WASH_FIELD, `
    <path d="M64 66l148 96" stroke="${STEEL_DARK}" stroke-width="10" stroke-linecap="round"/>
    <path d="M204 158l30-4-10 28z" fill="${GOLD}"/>
    <path d="M64 66l-8 26 26-6z" fill="${GREEN}"/>
    <g fill="${GREEN}" opacity="0.8"><ellipse cx="100" cy="150" rx="18" ry="7"/><ellipse cx="146" cy="176" rx="18" ry="7"/></g>
  `) },
  { id: 'baler', labelKey: 'cat.baler', art: scene(WASH_GOLD, `
    <circle cx="138" cy="124" r="50" fill="${GOLD}"/>
    <circle cx="138" cy="124" r="50" fill="${GOLD_LIGHT}" opacity="0.3"/>
    <path d="M138 74v100M88 124h100" stroke="${GOLD_DARK}" stroke-width="3" stroke-dasharray="7 7" opacity="0.7"/>
    <path d="M188 112h42l16 24h-58z" fill="${GREEN}"/>
    <circle cx="216" cy="160" r="14" fill="${INK}"/><circle cx="216" cy="160" r="6" fill="${STEEL}"/>
  `) },
];

// ============================================================
// Labour categories — filled figures
// ============================================================
function personIcon(wash, shirtColor, tool) {
  return scene(wash, `
    <circle cx="150" cy="66" r="18" fill="${CREAM}"/>
    <path d="M150 84c-24 0-32 18-32 40v46h64v-46c0-22-8-40-32-40z" fill="${shirtColor}"/>
    <path d="M118 124c0-22 8-40 32-40 8 0 14 2 19 5-6 10-30 16-51 35z" fill="${INK}" opacity="0.12"/>
    <path d="M150 108v62" stroke="${INK}" stroke-width="2" opacity="0.15"/>
    ${tool}
  `);
}
const LABOUR_CATEGORIES = [
  { id: 'harvest-labour', labelKey: 'cat.harvest-labour', art: personIcon(WASH_GOLD, GOLD_DARK,
      `<path d="M190 108c14 4 22-2 28-14" stroke="${STEEL_DARK}" stroke-width="6" stroke-linecap="round" fill="none"/><circle cx="222" cy="92" r="7" fill="${GOLD}"/>`) },
  { id: 'sowing-labour', labelKey: 'cat.sowing-labour', art: personIcon(WASH_FIELD, GREEN,
      `<circle cx="200" cy="150" r="4" fill="${GREEN_DARK}"/><circle cx="214" cy="162" r="4" fill="${GREEN_DARK}"/><circle cx="224" cy="146" r="4" fill="${GREEN_DARK}"/><path d="M188 120l16 8" stroke="${STEEL_DARK}" stroke-width="5" stroke-linecap="round"/>`) },
  { id: 'spraying-labour', labelKey: 'cat.spraying-labour', art: personIcon(WASH_SKY, '#3D7C99',
      `<rect x="110" y="96" width="20" height="30" rx="5" fill="${STEEL}"/><path d="M112 126l-18 10" stroke="${STEEL_DARK}" stroke-width="5" stroke-linecap="round"/><g fill="#5AA6C7"><circle cx="82" cy="140" r="3"/><circle cx="72" cy="150" r="3"/></g>`) },
  { id: 'general-labour', labelKey: 'cat.general-labour', art: personIcon(WASH_CLAY, STEEL,
      `<path d="M186 112h30v18h-30z" fill="${GOLD}"/><path d="M186 112h30v6h-30z" fill="${GOLD_LIGHT}"/>`) },
  { id: 'machine-operator', labelKey: 'cat.machine-operator', art: personIcon(WASH_GREY, GREEN_DARK,
      `<circle cx="206" cy="118" r="16" fill="none" stroke="${GOLD}" stroke-width="5"/><circle cx="206" cy="118" r="4" fill="${GOLD}"/>`) },
];

// ============================================================
// Godown / storage categories — filled buildings
// ============================================================
function godownIcon(wash, roofColor, extra) {
  return scene(wash, `
    <path d="M64 128l96-48 96 48z" fill="${roofColor}"/>
    <path d="M64 128l96-48v14l-88 44z" fill="${INK}" opacity="0.15"/>
    <rect x="80" y="128" width="160" height="48" fill="${CREAM}"/>
    <rect x="80" y="128" width="160" height="48" fill="${STEEL}" opacity="0.12"/>
    <rect x="118" y="150" width="30" height="26" fill="${STEEL_DARK}"/>
    <rect x="172" y="140" width="22" height="20" rx="2" fill="${GOLD_LIGHT}" opacity="0.8"/>
    <rect x="204" y="140" width="22" height="20" rx="2" fill="${GOLD_LIGHT}" opacity="0.8"/>
    ${extra}
  `);
}
const GODOWN_CATEGORIES = [
  { id: 'godown', labelKey: 'cat.godown', art: godownIcon(WASH_GREY, GOLD, '') },
  { id: 'cold-storage', labelKey: 'cat.cold-storage', art: godownIcon(WASH_SKY, '#3D7C99',
      `<circle cx="196" cy="112" r="13" fill="${CREAM}"/><path d="M196 102v20M188 106l16 12M204 106l-16 12" stroke="#3D7C99" stroke-width="2.5"/>`) },
  { id: 'open-yard', labelKey: 'cat.open-yard', art: scene(WASH_CLAY, `
      <rect x="66" y="140" width="188" height="30" fill="${GOLD}"/>
      <rect x="66" y="140" width="188" height="8" fill="${GOLD_LIGHT}"/>
      <path d="M84 140l76-36 76 36" fill="none" stroke="${STEEL_DARK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <g fill="${GREEN}" opacity="0.85"><rect x="110" y="120" width="24" height="20" rx="3"/><rect x="146" y="112" width="24" height="28" rx="3"/><rect x="182" y="120" width="24" height="20" rx="3"/></g>
  `) },
];

// ============================================================
// Seed data (English — simulates real user-submitted listings)
// ============================================================
const SEED_EQUIPMENT = [
  { id: 's1', name: 'Mahindra 575 DI', category: 'tractor', price: 1400, availability: 'Available', village: 'Kharar', district: 'Sonipat', state: 'Haryana', desc: '45 HP, well maintained, comes with driver on request.', owner: 'Ramesh Yadav', phone: '9812345670', photo: null },
  { id: 's2', name: 'New Holland TC5.30 Combine', category: 'harvester', price: 3200, availability: 'Available', village: 'Bhogpur', district: 'Jalandhar', state: 'Punjab', desc: 'Self-propelled, works wheat and paddy, 2 seasons old.', owner: 'Gurpreet Singh', phone: '9876543210', photo: null },
  { id: 's3', name: 'Rotavator 6 Feet', category: 'rotavator', price: 800, availability: 'Available', village: 'Nashik Road', district: 'Nashik', state: 'Maharashtra', desc: 'Heavy duty blades, suits most tractor PTOs.', owner: 'Vitthal Pawar', phone: '9765432109', photo: null },
  { id: 's4', name: 'John Deere 5310 Tractor', category: 'tractor', price: 1600, availability: 'Available from next week', village: 'Belgaum Rural', district: 'Belagavi', state: 'Karnataka', desc: '55 HP, 4WD, good for tilling and transport.', owner: 'Basavaraj Patil', phone: '9654321098', photo: null },
  { id: 's5', name: 'Power Sprayer 500L', category: 'sprayer', price: 600, availability: 'Available', village: 'Karad', district: 'Satara', state: 'Maharashtra', desc: 'Tractor-mounted boom sprayer, 12m width.', owner: 'Suresh Jadhav', phone: '9543210987', photo: null },
  { id: 's6', name: 'Seed cum Fertilizer Drill', category: 'seed-drill', price: 700, availability: 'Available', village: 'Rewari', district: 'Rewari', state: 'Haryana', desc: '9-tyne, adjustable row spacing.', owner: 'Sandeep Malik', phone: '9432109876', photo: null },
  { id: 's7', name: 'Trolley 3-Ton', category: 'trailer', price: 500, availability: 'Available', village: 'Meerut', district: 'Meerut', state: 'Uttar Pradesh', desc: 'Hydraulic tipping trolley, good tyres.', owner: 'Anil Chaudhary', phone: '9321098765', photo: null },
  { id: 's8', name: 'Thresher Machine', category: 'thresher', price: 900, availability: 'Booked', village: 'Kota Rural', district: 'Kota', state: 'Rajasthan', desc: 'Multi-crop thresher, wheat and mustard.', owner: 'Om Prakash', phone: '9210987654', photo: null },
  { id: 's9', name: 'Agri Spraying Drone (10L)', category: 'drone', price: 500, availability: 'Available', village: 'Ludhiana Rural', district: 'Ludhiana', state: 'Punjab', desc: 'Priced per acre on request — pesticide & nano-fertiliser spraying, trained pilot included.', owner: 'Simranjit Kaur', phone: '9123456780', photo: null },
];

const SEED_LABOUR = [
  { id: 'lb1', name: 'Wheat & Paddy Harvesting Team', category: 'harvest-labour', price: 450, workers: 8, availability: 'Available', village: 'Karnal', district: 'Karnal', state: 'Haryana', desc: 'Experienced team of 8, own sickles, can also help with loading.', owner: 'Baljeet Singh', phone: '9812309876', photo: null },
  { id: 'lb2', name: 'Paddy Transplanting Group', category: 'sowing-labour', price: 400, workers: 12, availability: 'Available', village: 'Kaithal', district: 'Kaithal', state: 'Haryana', desc: 'Women\'s group, fast and even transplanting, brings own tools.', owner: 'Kamlesh Devi', phone: '9765098123', photo: null },
  { id: 'lb3', name: 'Pesticide Spraying Labour', category: 'spraying-labour', price: 500, workers: 3, availability: 'Available', village: 'Guntur Rural', district: 'Guntur', state: 'Andhra Pradesh', desc: 'Trained in safe spraying practice, has own PPE kits.', owner: 'Venkata Rao', phone: '9654098712', photo: null },
  { id: 'lb4', name: 'General Field Labour', category: 'general-labour', price: 350, workers: 6, availability: 'Available', village: 'Indore Rural', district: 'Indore', state: 'Madhya Pradesh', desc: 'Weeding, sorting, loading and general field work.', owner: 'Ravi Vishwakarma', phone: '9543098761', photo: null },
  { id: 'lb5', name: 'Tractor & Harvester Operator', category: 'machine-operator', price: 600, workers: 1, availability: 'Available', village: 'Hisar', district: 'Hisar', state: 'Haryana', desc: '10 years experience, licensed, can operate most makes.', owner: 'Mahender Sheoran', phone: '9432098765', photo: null },
];

const SEED_GODOWN = [
  { id: 'gd1', name: 'Concrete Godown — 2,000 sq ft', category: 'godown', price: 6000, capacity: '2,000 sq ft / ~150 tonnes', village: 'Sirsa', district: 'Sirsa', state: 'Haryana', desc: 'Pucca construction, rat-proof, near main road for easy loading.', owner: 'Jagdish Bishnoi', phone: '9812098765', photo: null },
  { id: 'gd2', name: 'Cold Storage — Onion & Potato', category: 'cold-storage', price: 4, capacity: '500 tonnes capacity, ₹ per quintal/month', village: 'Agra Rural', district: 'Agra', state: 'Uttar Pradesh', desc: 'Temperature controlled, suitable for potato and onion.', owner: 'Harish Agarwal', phone: '9765098234', photo: null },
  { id: 'gd3', name: 'Open Yard for Bulk Storage', category: 'open-yard', price: 2500, capacity: '1 acre plinth, covered on 3 sides', village: 'Nagpur Rural', district: 'Nagpur', state: 'Maharashtra', desc: 'Good for cotton bales and dry produce, boundary wall, watchman available.', owner: 'Prakash Deshmukh', phone: '9654098234', photo: null },
  { id: 'gd4', name: 'Warehouse near Mandi', category: 'godown', price: 8000, capacity: '3,500 sq ft / ~250 tonnes', village: 'Bathinda', district: 'Bathinda', state: 'Punjab', desc: '5 minutes from the grain mandi, loading dock available.', owner: 'Jasbir Sandhu', phone: '9543098234', photo: null },
];

// ============================================================
// Module configs (Equipment / Labour / Godown)
// ============================================================
const MODULES = {
  equipment: {
    key: 'equipment', storageKey: 'khetSathiListings', categories: EQUIPMENT_CATEGORIES, seed: SEED_EQUIPMENT,
    unitKey: null, gridId: 'listingGrid', railId: 'categoryRail', searchId: 'searchInput', sortId: 'sortSelect',
    emptyId: 'emptyState', emptyKey: 'empty.equipment', panel: 'panel-equipment', extraField: 'availability',
  },
  labour: {
    key: 'labour', storageKey: 'khetSathiLabour', categories: LABOUR_CATEGORIES, seed: SEED_LABOUR,
    unitKey: null, gridId: 'labourGrid', railId: 'labourRail', searchId: 'labourSearch', sortId: 'labourSort',
    emptyId: 'labourEmpty', emptyKey: 'empty.labour', panel: 'panel-labour', extraField: 'workers',
  },
  godown: {
    key: 'godown', storageKey: 'khetSathiGodown', categories: GODOWN_CATEGORIES, seed: SEED_GODOWN,
    unitKey: null, gridId: 'godownGrid', railId: 'godownRail', searchId: 'godownSearch', sortId: 'godownSort',
    emptyId: 'godownEmpty', emptyKey: 'empty.godown', panel: 'panel-godown', extraField: 'capacity',
  },
};
const UNIT_SUFFIX = { equipment: ' / day', labour: ' / day', godown: ' / month' };

const MINE_KEY = 'khetSathiMyListings';

function getMineSet() {
  try { return new Set(JSON.parse(localStorage.getItem(MINE_KEY) || '[]')); }
  catch (e) { return new Set(); }
}
function saveMineSet(set) { localStorage.setItem(MINE_KEY, JSON.stringify([...set])); }

function loadModuleList(cfg) {
  const raw = localStorage.getItem(cfg.storageKey);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { /* fall through */ }
  }
  localStorage.setItem(cfg.storageKey, JSON.stringify(cfg.seed));
  return cfg.seed.slice();
}
function saveModuleList(cfg) { localStorage.setItem(cfg.storageKey, JSON.stringify(cfg.list)); }

Object.values(MODULES).forEach(cfg => {
  cfg.list = loadModuleList(cfg);
  cfg.activeCategory = 'all';
});

function categoryMetaFor(cfg, id) {
  const cat = cfg.categories.find(c => c.id === id);
  if (!cat) return { label: id, art: '' };
  return { label: t(cat.labelKey), art: cat.art };
}

function availabilityTag(status) {
  if (!status) return '';
  if (status === 'Available') return `<span class="availability-tag tag-available">${t('status.available')}</span>`;
  if (status === 'Booked') return `<span class="availability-tag tag-booked">${t('status.booked')}</span>`;
  return `<span class="availability-tag tag-soon">${t('status.soon')}</span>`;
}

function renderRailFor(cfg) {
  const railEl = document.getElementById(cfg.railId);
  if (!railEl) return;
  const chips = [{ id: 'all', labelKey: null }, ...cfg.categories];
  railEl.innerHTML = chips.map(c =>
    `<button class="chip ${c.id === cfg.activeCategory ? 'active' : ''}" data-modtype="${cfg.key}" data-cat="${c.id}">${c.id === 'all' ? t('misc.all') : t(c.labelKey)}</button>`
  ).join('');
}

function extraLine(cfg, item) {
  if (cfg.extraField === 'workers') {
    const n = item.workers || 1;
    const suffix = n > 1 ? t('misc.workerPlural') : t('misc.workerSingular');
    return `<div class="card-location">${n} ${suffix}</div>`;
  }
  if (cfg.extraField === 'capacity') return `<div class="card-location">${escapeHtml(item.capacity || '')}</div>`;
  return '';
}

function renderGridFor(cfg) {
  const gridEl = document.getElementById(cfg.gridId);
  const emptyEl = document.getElementById(cfg.emptyId);
  const searchEl = document.getElementById(cfg.searchId);
  const sortEl = document.getElementById(cfg.sortId);
  if (!gridEl) return;
  const query = (searchEl?.value || '').trim().toLowerCase();
  const mine = getMineSet();

  let filtered = cfg.list.filter(item => {
    const matchesCategory = cfg.activeCategory === 'all' || item.category === cfg.activeCategory;
    const haystack = `${item.name} ${item.district} ${item.state} ${item.village}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesCategory && matchesQuery;
  });

  const sortVal = sortEl?.value || 'recent';
  if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else filtered.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));

  if (emptyEl) {
    emptyEl.hidden = filtered.length > 0;
    emptyEl.textContent = t(cfg.emptyKey);
  }

  const unit = UNIT_SUFFIX[cfg.key];
  gridEl.innerHTML = filtered.map(item => {
    const meta = categoryMetaFor(cfg, item.category);
    const isMine = mine.has(item.id);
    const media = item.photo
      ? `<img class="card-photo" src="${item.photo}" alt="${escapeHtml(item.name)}">`
      : meta.art;
    return `
      <article class="listing-card">
        <div class="card-media">
          ${media}
          ${availabilityTag(item.availability)}
        </div>
        <div class="card-body">
          <div>
            <div class="card-category">${meta.label}</div>
            <div class="card-title">${escapeHtml(item.name)}</div>
            <div class="card-location">${escapeHtml(item.village)}, ${escapeHtml(item.district)}, ${escapeHtml(item.state)}</div>
            ${extraLine(cfg, item)}
          </div>
          ${item.desc ? `<p class="card-desc">${escapeHtml(item.desc)}</p>` : ''}
          ${isMine ? `<div class="card-mine">${t('misc.yourListing')} <button class="card-remove" data-modtype="${cfg.key}" data-remove="${item.id}">${t('misc.remove')}</button></div>` : ''}
          <div class="card-bottom">
            <div class="card-price">₹${item.price}<span>${unit}</span></div>
            <button class="card-book" data-modtype="${cfg.key}" data-book="${item.id}">${t('misc.book')}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function removeItem(cfg, id) {
  cfg.list = cfg.list.filter(item => item.id !== id);
  saveModuleList(cfg);
  const mine = getMineSet();
  mine.delete(id);
  saveMineSet(mine);
  renderGridFor(cfg);
  updateStats();
}

// ---------- Event delegation for chips, book, remove ----------
document.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (chip) {
    const cfg = MODULES[chip.dataset.modtype];
    if (cfg) {
      cfg.activeCategory = chip.dataset.cat;
      renderRailFor(cfg);
      renderGridFor(cfg);
    }
    return;
  }
  const bookBtn = e.target.closest('[data-book]');
  if (bookBtn) {
    const cfg = MODULES[bookBtn.dataset.modtype];
    const item = cfg?.list.find(i => i.id === bookBtn.dataset.book);
    if (item) openContactPanel(cfg, item);
    return;
  }
  const removeBtn = e.target.closest('[data-remove]');
  if (removeBtn) {
    const cfg = MODULES[removeBtn.dataset.modtype];
    if (cfg) removeItem(cfg, removeBtn.dataset.remove);
    return;
  }
});

// ---------- Stats ----------
function updateStats() {
  const allLists = Object.values(MODULES).flatMap(cfg => cfg.list);
  document.getElementById('statCount').textContent = allLists.length;
  document.getElementById('statStates').textContent = new Set(allLists.map(l => l.state)).size;
}

// ---------- Contact panel ----------
const overlay = document.getElementById('contactOverlay');
const panel = document.getElementById('contactPanel');
const panelBody = document.getElementById('panelBody');

function openContactPanel(cfg, item) {
  const meta = categoryMetaFor(cfg, item.category);
  const unit = UNIT_SUFFIX[cfg.key];
  const photoHtml = item.photo ? `<img class="panel-photo" src="${item.photo}" alt="${escapeHtml(item.name)}">` : '';
  panelBody.innerHTML = `
    ${photoHtml}
    <h3 class="panel-title" id="panelTitle">${escapeHtml(item.name)}</h3>
    <p class="panel-sub">${meta.label} · ${escapeHtml(item.village)}, ${escapeHtml(item.district)}</p>
    <div class="panel-row"><span class="panel-label">${t('panel.contactPerson')}</span><span class="panel-value">${escapeHtml(item.owner)}</span></div>
    <div class="panel-row"><span class="panel-label">${t('panel.contactNumber')}</span><span class="panel-value">${escapeHtml(item.phone)}</span></div>
    <div class="panel-row"><span class="panel-label">${t('panel.rate')}</span><span class="panel-value">₹${item.price}${unit}</span></div>
    <div class="panel-actions">
      <a class="btn btn-primary" href="tel:+91${item.phone}">${t('panel.callNow')}</a>
      <button class="btn btn-ghost" id="copyNumberBtn" type="button">${t('panel.copyNumber')}</button>
    </div>
  `;
  document.getElementById('copyNumberBtn').addEventListener('click', () => {
    navigator.clipboard?.writeText(item.phone).then(() => {
      const btn = document.getElementById('copyNumberBtn');
      btn.textContent = t('panel.copied');
      setTimeout(() => { btn.textContent = t('panel.copyNumber'); }, 1500);
    });
  });
  overlay.classList.add('visible');
  panel.classList.add('visible');
}
function closeContactPanel() {
  overlay.classList.remove('visible');
  panel.classList.remove('visible');
}
overlay.addEventListener('click', closeContactPanel);
document.getElementById('panelClose').addEventListener('click', closeContactPanel);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeContactPanel(); });

// ---------- Marketplace tabs ----------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.panel).classList.add('active');
  });
});
function switchToTab(type) {
  const cfg = MODULES[type];
  if (!cfg) return;
  tabButtons.forEach(b => b.classList.toggle('active', b.dataset.panel === cfg.panel));
  tabPanels.forEach(p => p.classList.toggle('active', p.id === cfg.panel));
}

// ---------- Filters wiring for all three modules ----------
Object.values(MODULES).forEach(cfg => {
  document.getElementById(cfg.searchId)?.addEventListener('input', () => renderGridFor(cfg));
  document.getElementById(cfg.sortId)?.addEventListener('change', () => renderGridFor(cfg));
});

// ============================================================
// Listing form (shared, type-aware, with optional photo)
// ============================================================
const listTypeSelect = document.getElementById('f-listing-type');
const catSelect = document.getElementById('f-category');
const stateSelect = document.getElementById('f-state');
const priceLabel = document.getElementById('price-label');
const nameLabel = document.getElementById('name-label');
const availabilityGroup = document.getElementById('availability-group');
const workersGroup = document.getElementById('workers-group');
const capacityGroup = document.getElementById('capacity-group');
const ownerLabel = document.getElementById('owner-label');
const photoInput = document.getElementById('f-photo');
const photoPreview = document.getElementById('photoPreview');

STATES.forEach(s => {
  const opt = document.createElement('option');
  opt.value = s;
  opt.dataset.i18n = `state.${s}`;
  opt.textContent = s;
  stateSelect.appendChild(opt);
});

function populateCategoryOptions(type) {
  const cfg = MODULES[type];
  catSelect.innerHTML = `<option value="" disabled selected>${t('form.categoryPlaceholder')}</option>` +
    cfg.categories.map(c => `<option value="${c.id}">${t(c.labelKey)}</option>`).join('');
}

function updateFormForType() {
  const type = listTypeSelect.value;
  populateCategoryOptions(type);
  availabilityGroup.hidden = type === 'godown';
  workersGroup.hidden = type !== 'labour';
  capacityGroup.hidden = type !== 'godown';

  nameLabel.textContent = t(`form.name.${type}`);
  priceLabel.textContent = t(`form.price.${type}`);
  ownerLabel.textContent = t(`form.owner.${type}`);
}
listTypeSelect.addEventListener('change', updateFormForType);

// ---------- Photo: resize client-side before storing as data URL ----------
function resizeImageFile(file, maxWidth = 640, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = e => { img.src = e.target.result; };
    reader.onerror = reject;
    img.onload = () => {
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = reject;
    reader.readAsDataURL(file);
  });
}

let pendingPhotoDataUrl = null;
photoInput?.addEventListener('change', async () => {
  const file = photoInput.files?.[0];
  if (!file) { pendingPhotoDataUrl = null; photoPreview.innerHTML = ''; return; }
  try {
    pendingPhotoDataUrl = await resizeImageFile(file);
    photoPreview.innerHTML = `<img src="${pendingPhotoDataUrl}" alt="">`;
  } catch (err) {
    pendingPhotoDataUrl = null;
  }
});

const form = document.getElementById('listingForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', e => {
  e.preventDefault();
  const type = listTypeSelect.value;
  const cfg = MODULES[type];

  const phone = document.getElementById('f-phone').value.trim();
  if (!/^[6-9]\d{9}$/.test(phone)) {
    formNote.textContent = t('form.errorPhone');
    formNote.classList.add('error');
    return;
  }

  const base = {
    id: 'l' + Date.now() + Math.random().toString(36).slice(2, 7),
    name: document.getElementById('f-name').value.trim(),
    category: catSelect.value,
    price: Number(document.getElementById('f-price').value),
    village: document.getElementById('f-village').value.trim(),
    district: document.getElementById('f-district').value.trim(),
    state: stateSelect.value,
    desc: document.getElementById('f-desc').value.trim(),
    owner: document.getElementById('f-owner').value.trim(),
    phone,
    photo: pendingPhotoDataUrl || null,
    addedAt: Date.now(),
  };
  if (type !== 'godown') base.availability = document.getElementById('f-availability').value;
  if (type === 'labour') base.workers = Number(document.getElementById('f-workers').value) || 1;
  if (type === 'godown') base.capacity = document.getElementById('f-capacity').value.trim();

  cfg.list.unshift(base);
  saveModuleList(cfg);

  const mine = getMineSet();
  mine.add(base.id);
  saveMineSet(mine);

  form.reset();
  pendingPhotoDataUrl = null;
  photoPreview.innerHTML = '';
  updateFormForType();
  formNote.classList.remove('error');
  formNote.textContent = t('form.success');
  setTimeout(() => { formNote.textContent = ''; }, 4000);

  cfg.activeCategory = 'all';
  renderRailFor(cfg);
  renderGridFor(cfg);
  updateStats();
  switchToTab(type);

  document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' });
});

// ============================================================
// Weather (Open-Meteo — free, no API key)
// ============================================================
const WEATHER_CODES = {
  0: ['Clear sky', '☀️'], 1: ['Mainly clear', '🌤️'], 2: ['Partly cloudy', '⛅'], 3: ['Overcast', '☁️'],
  45: ['Fog', '🌫️'], 48: ['Fog', '🌫️'],
  51: ['Light drizzle', '🌦️'], 53: ['Drizzle', '🌦️'], 55: ['Dense drizzle', '🌦️'],
  61: ['Light rain', '🌧️'], 63: ['Rain', '🌧️'], 65: ['Heavy rain', '🌧️'],
  71: ['Light snow', '🌨️'], 73: ['Snow', '🌨️'], 75: ['Heavy snow', '🌨️'],
  80: ['Rain showers', '🌦️'], 81: ['Rain showers', '🌦️'], 82: ['Violent showers', '⛈️'],
  95: ['Thunderstorm', '⛈️'], 96: ['Thunderstorm, hail', '⛈️'], 99: ['Thunderstorm, hail', '⛈️'],
};
function describeWeather(code) { return WEATHER_CODES[code] || ['Unknown', '🌡️']; }

const weatherForm = document.getElementById('weatherForm');
const weatherResult = document.getElementById('weatherResult');
const weatherCityInput = document.getElementById('weatherCity');

async function fetchWeather(city) {
  weatherResult.innerHTML = `<p class="weather-status">${t('weather.lookingUp')} ${escapeHtml(city)}...</p>`;
  try {
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      weatherResult.innerHTML = `<p class="weather-status">${t('weather.notFound')} "${escapeHtml(city)}". ${t('weather.tryBigger')}</p>`;
      return;
    }
    const place = geoData.results[0];
    const fRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code&timezone=auto&forecast_days=4`);
    const fData = await fRes.json();

    const cur = fData.current;
    const [curDesc, curEmoji] = describeWeather(cur.weather_code);

    const dayNames = [t('weather.today'), t('weather.tomorrow'), t('weather.day3'), t('weather.day4')];
    const forecastCards = fData.daily.time.map((date, i) => {
      const [desc, emoji] = describeWeather(fData.daily.weather_code[i]);
      return `
        <div class="forecast-card">
          <div class="forecast-day">${dayNames[i] || date}</div>
          <div class="forecast-emoji">${emoji}</div>
          <div class="forecast-temps">${Math.round(fData.daily.temperature_2m_max[i])}° / ${Math.round(fData.daily.temperature_2m_min[i])}°</div>
          <div class="forecast-rain">${fData.daily.precipitation_probability_max[i]}% ${t('weather.rain')}</div>
        </div>`;
    }).join('');

    weatherResult.innerHTML = `
      <div class="weather-current">
        <div class="weather-emoji">${curEmoji}</div>
        <div>
          <div class="weather-place">${escapeHtml(place.name)}${place.admin1 ? ', ' + escapeHtml(place.admin1) : ''}</div>
          <div class="weather-temp">${Math.round(cur.temperature_2m)}°C · ${curDesc}</div>
          <div class="weather-meta">${t('weather.humidity')} ${cur.relative_humidity_2m}% · ${t('weather.wind')} ${Math.round(cur.wind_speed_10m)} km/h</div>
        </div>
      </div>
      <div class="forecast-grid">${forecastCards}</div>
      <p class="weather-tip">${cur.wind_speed_10m > 15 ? t('weather.tipHigh') : t('weather.tipOk')}</p>
    `;
  } catch (err) {
    weatherResult.innerHTML = `<p class="weather-status">${t('weather.fetchError')}</p>`;
  }
}

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const city = weatherCityInput.value.trim();
  if (city) fetchWeather(city);
});

// ============================================================
// Market prices search
// ============================================================
const priceSearchInput = document.getElementById('priceSearch');
if (priceSearchInput) {
  priceSearchInput.addEventListener('input', () => {
    const q = priceSearchInput.value.trim().toLowerCase();
    document.querySelectorAll('#priceTable tbody tr').forEach(row => {
      const rowText = row.textContent.toLowerCase();
      row.hidden = q && !rowText.includes(q) && !(row.dataset.crop || '').includes(q);
    });
  });
}

// ============================================================
// Language switcher
// ============================================================
const langSwitch = document.getElementById('langSwitch');
if (langSwitch) {
  langSwitch.value = currentLang;
  langSwitch.addEventListener('change', () => applyLanguage(langSwitch.value));
}

// ---------- Init ----------
Object.values(MODULES).forEach(cfg => {
  renderRailFor(cfg);
  renderGridFor(cfg);
});
updateStats();
updateFormForType();
applyLanguage(currentLang);

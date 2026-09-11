// ============================================================
// Shared helpers
// ============================================================
const INK = '#14231A', GREEN = '#1F6D45', GOLD = '#E8A93A';
const WASH_FIELD = '#EDF2E9', WASH_GOLD = '#FBF0DB', WASH_SKY = '#DCEBF0', WASH_CLAY = '#EAE0D2', WASH_GREY = '#E9EAE4';

function scene(wash, inner) {
  return `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="200" fill="${wash}"/>${inner}</svg>`;
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
// Equipment categories
// ============================================================
const EQUIPMENT_CATEGORIES = [
  { id: 'tractor', label: 'Tractor', art: scene(WASH_FIELD, `
    <path d="M0 168 Q90 150 160 168 T320 160" stroke="${GREEN}" stroke-width="1.5" opacity="0.3" fill="none"/>
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M70 150h110v-36h-26l-18-28h-38v28h-28z"/>
      <path d="M136 114h44l22 36"/>
      <rect x="72" y="88" width="30" height="26" rx="2"/>
      <circle cx="108" cy="150" r="30"/><circle cx="108" cy="150" r="9"/>
      <circle cx="196" cy="150" r="18"/><circle cx="196" cy="150" r="6"/>
    </g>
    <path d="M70 150h-26" stroke="${GOLD}" stroke-width="3" stroke-linecap="round"/>
  `) },
  { id: 'harvester', label: 'Harvester', art: scene(WASH_GOLD, `
    <path d="M0 172h320" stroke="${GOLD}" stroke-width="1" opacity="0.4"/>
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="120" y="94" width="86" height="50" rx="4"/>
      <path d="M60 108l30-14h30v50H70l-10-10z"/>
      <circle cx="140" cy="160" r="20"/><circle cx="140" cy="160" r="6"/>
      <circle cx="196" cy="160" r="20"/><circle cx="196" cy="160" r="6"/>
    </g>
    <g stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round">
      <path d="M62 100v-16M72 96v-16M82 100v-16M92 96v-16M102 100v-16"/>
    </g>
  `) },
  { id: 'rotavator', label: 'Rotavator', art: scene(WASH_FIELD, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" fill="none">
      <path d="M60 100h200"/>
      <path d="M80 100v50M110 100v50M140 100v50M170 100v50M200 100v50M230 100v50"/>
    </g>
    <g stroke="${GREEN}" stroke-width="1.6" opacity="0.55">
      <path d="M70 158 q10-6 20 0" fill="none"/>
      <path d="M100 158 q10-6 20 0" fill="none"/>
      <path d="M130 158 q10-6 20 0" fill="none"/>
      <path d="M160 158 q10-6 20 0" fill="none"/>
      <path d="M190 158 q10-6 20 0" fill="none"/>
      <path d="M220 158 q10-6 20 0" fill="none"/>
    </g>
  `) },
  { id: 'cultivator', label: 'Cultivator', art: scene(WASH_FIELD, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M60 96h150"/>
      <path d="M90 96l-20 66M130 96l-10 66M170 96l10 66M210 96l20 66"/>
    </g>
    <g stroke="${GOLD}" stroke-width="2" opacity="0.7" fill="none">
      <path d="M64 168 q8-8 18 0"/>
      <path d="M104 168 q8-8 18 0"/>
      <path d="M144 168 q8-8 18 0"/>
      <path d="M184 168 q8-8 18 0"/>
      <path d="M224 168 q8-8 18 0"/>
    </g>
  `) },
  { id: 'seed-drill', label: 'Seed Drill', art: scene(WASH_GOLD, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="70" y="80" width="170" height="42" rx="4"/>
      <path d="M92 122v40M134 122v40M176 122v40M218 122v40"/>
    </g>
    <g fill="${GOLD}">
      <circle cx="92" cy="150" r="3"/><circle cx="134" cy="154" r="3"/>
      <circle cx="176" cy="150" r="3"/><circle cx="218" cy="154" r="3"/>
    </g>
  `) },
  { id: 'sprayer', label: 'Power Sprayer', art: scene(WASH_SKY, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M96 170c0-56 20-70 20-104"/>
      <path d="M96 66h50l16 26h-70z"/>
      <path d="M162 96h60M170 118h56M178 140h48"/>
    </g>
    <g stroke="${GREEN}" stroke-width="2" stroke-linecap="round" opacity="0.7">
      <path d="M212 90l8 10M226 82l6 12M182 112l7 9M196 136l7 9"/>
    </g>
  `) },
  { id: 'drone', label: 'Agri Drone', art: scene(WASH_SKY, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="140" y="94" width="40" height="18" rx="3"/>
      <path d="M140 100l-40-24M180 100l40-24M140 108l-40 24M180 108l40 24"/>
      <circle cx="96" cy="72" r="14"/><circle cx="224" cy="72" r="14"/>
      <circle cx="96" cy="136" r="14"/><circle cx="224" cy="136" r="14"/>
    </g>
    <g stroke="${GOLD}" stroke-width="2" opacity="0.7">
      <path d="M160 112v30M150 150h20"/>
    </g>
  `) },
  { id: 'trailer', label: 'Trailer', art: scene(WASH_CLAY, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <rect x="56" y="98" width="150" height="52" rx="4"/>
      <path d="M206 118h34l14 26h-48z"/>
      <circle cx="96" cy="164" r="16"/><circle cx="176" cy="164" r="16"/>
      <circle cx="238" cy="150" r="12"/>
    </g>
    <g stroke="${GOLD}" stroke-width="2" opacity="0.6">
      <path d="M76 108h110M76 122h110M76 136h110"/>
    </g>
  `) },
  { id: 'thresher', label: 'Thresher', art: scene(WASH_GOLD, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <circle cx="120" cy="130" r="40"/>
      <path d="M158 116h56l-16 40"/>
      <path d="M120 100v58M92 130h56"/>
    </g>
    <g stroke="${GOLD}" stroke-width="2" opacity="0.7">
      <path d="M206 108l10-8M216 122l12-4M212 138l10 4"/>
    </g>
  `) },
  { id: 'plough', label: 'Plough', art: scene(WASH_FIELD, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M60 70l150 90"/>
      <path d="M210 160l24-6-8 24z"/>
      <path d="M60 70l-6 26 26-6z"/>
    </g>
    <g stroke="${GOLD}" stroke-width="2" opacity="0.6" fill="none">
      <path d="M90 150q14-10 28 0M130 168q14-10 28 0"/>
    </g>
  `) },
  { id: 'baler', label: 'Baler', art: scene(WASH_GOLD, `
    <circle cx="140" cy="124" r="52" stroke="${INK}" stroke-width="3" fill="none"/>
    <path d="M140 72v104M88 124h104" stroke="${GOLD}" stroke-width="2" stroke-dasharray="6 6"/>
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" fill="none">
      <path d="M192 124h40l14 22"/>
      <circle cx="212" cy="164" r="12"/>
    </g>
  `) },
];

// ============================================================
// Labour categories
// ============================================================
function personIcon(wash, tool) {
  return scene(wash, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <circle cx="140" cy="70" r="16"/>
      <path d="M140 86v50M140 108h-30M140 108h30M140 136l-18 34M140 136l18 34"/>
    </g>
    ${tool}
  `);
}
const LABOUR_CATEGORIES = [
  { id: 'harvest-labour', label: 'Harvesting Labour', art: personIcon(WASH_GOLD,
      `<path d="M175 92c8 6 14 4 20-4" stroke="${GOLD}" stroke-width="3" stroke-linecap="round" fill="none"/>`) },
  { id: 'sowing-labour', label: 'Sowing / Transplanting', art: personIcon(WASH_FIELD,
      `<circle cx="184" cy="140" r="3" fill="${GREEN}"/><circle cx="196" cy="150" r="3" fill="${GREEN}"/><circle cx="204" cy="138" r="3" fill="${GREEN}"/>`) },
  { id: 'spraying-labour', label: 'Spraying Labour', art: personIcon(WASH_SKY,
      `<path d="M112 100c-6 4-8 10-8 20" stroke="${INK}" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M96 128l-10 6M92 138l-10 2" stroke="${GREEN}" stroke-width="2" stroke-linecap="round"/>`) },
  { id: 'general-labour', label: 'General Farm Labour', art: personIcon(WASH_CLAY,
      `<path d="M170 118h30v14h-30z" stroke="${GOLD}" stroke-width="2.5" fill="none"/>`) },
  { id: 'machine-operator', label: 'Machine Operator', art: personIcon(WASH_GREY,
      `<circle cx="188" cy="120" r="14" stroke="${GOLD}" stroke-width="2.5" fill="none"/>`) },
];

// ============================================================
// Godown / storage categories
// ============================================================
function godownIcon(wash, extra) {
  return scene(wash, `
    <g stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M70 130l90-46 90 46"/>
      <rect x="86" y="130" width="148" height="46" />
      <path d="M120 176v-30h30v30"/>
    </g>
    ${extra}
  `);
}
const GODOWN_CATEGORIES = [
  { id: 'godown', label: 'Godown / Warehouse', art: godownIcon(WASH_GREY, '') },
  { id: 'cold-storage', label: 'Cold Storage', art: godownIcon(WASH_SKY,
      `<path d="M190 148v20M182 156h16M185 151l10 12M195 151l-10 12" stroke="${GREEN}" stroke-width="2"/>`) },
  { id: 'open-yard', label: 'Open Yard / Plinth', art: scene(WASH_CLAY, `
      <path d="M60 150h200" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
      <path d="M80 150v-10h140v10" stroke="${INK}" stroke-width="3" fill="none"/>
      <path d="M90 140l70-30 70 30" stroke="${GOLD}" stroke-width="2.5" fill="none"/>
  `) },
];

// ============================================================
// Seed data
// ============================================================
const SEED_EQUIPMENT = [
  { id: 's1', name: 'Mahindra 575 DI', category: 'tractor', price: 1400, availability: 'Available', village: 'Kharar', district: 'Sonipat', state: 'Haryana', desc: '45 HP, well maintained, comes with driver on request.', owner: 'Ramesh Yadav', phone: '9812345670' },
  { id: 's2', name: 'New Holland TC5.30 Combine', category: 'harvester', price: 3200, availability: 'Available', village: 'Bhogpur', district: 'Jalandhar', state: 'Punjab', desc: 'Self-propelled, works wheat and paddy, 2 seasons old.', owner: 'Gurpreet Singh', phone: '9876543210' },
  { id: 's3', name: 'Rotavator 6 Feet', category: 'rotavator', price: 800, availability: 'Available', village: 'Nashik Road', district: 'Nashik', state: 'Maharashtra', desc: 'Heavy duty blades, suits most tractor PTOs.', owner: 'Vitthal Pawar', phone: '9765432109' },
  { id: 's4', name: 'John Deere 5310 Tractor', category: 'tractor', price: 1600, availability: 'Available from next week', village: 'Belgaum Rural', district: 'Belagavi', state: 'Karnataka', desc: '55 HP, 4WD, good for tilling and transport.', owner: 'Basavaraj Patil', phone: '9654321098' },
  { id: 's5', name: 'Power Sprayer 500L', category: 'sprayer', price: 600, availability: 'Available', village: 'Karad', district: 'Satara', state: 'Maharashtra', desc: 'Tractor-mounted boom sprayer, 12m width.', owner: 'Suresh Jadhav', phone: '9543210987' },
  { id: 's6', name: 'Seed cum Fertilizer Drill', category: 'seed-drill', price: 700, availability: 'Available', village: 'Rewari', district: 'Rewari', state: 'Haryana', desc: '9-tyne, adjustable row spacing.', owner: 'Sandeep Malik', phone: '9432109876' },
  { id: 's7', name: 'Trolley 3-Ton', category: 'trailer', price: 500, availability: 'Available', village: 'Meerut', district: 'Meerut', state: 'Uttar Pradesh', desc: 'Hydraulic tipping trolley, good tyres.', owner: 'Anil Chaudhary', phone: '9321098765' },
  { id: 's8', name: 'Thresher Machine', category: 'thresher', price: 900, availability: 'Booked', village: 'Kota Rural', district: 'Kota', state: 'Rajasthan', desc: 'Multi-crop thresher, wheat and mustard.', owner: 'Om Prakash', phone: '9210987654' },
  { id: 's9', name: 'Agri Spraying Drone (10L)', category: 'drone', price: 500, availability: 'Available', village: 'Ludhiana Rural', district: 'Ludhiana', state: 'Punjab', desc: 'Priced per acre on request — pesticide & nano-fertiliser spraying, trained pilot included.', owner: 'Simranjit Kaur', phone: '9123456780' },
];

const SEED_LABOUR = [
  { id: 'lb1', name: 'Wheat & Paddy Harvesting Team', category: 'harvest-labour', price: 450, workers: 8, availability: 'Available', village: 'Karnal', district: 'Karnal', state: 'Haryana', desc: 'Experienced team of 8, own sickles, can also help with loading.', owner: 'Baljeet Singh', phone: '9812309876' },
  { id: 'lb2', name: 'Paddy Transplanting Group', category: 'sowing-labour', price: 400, workers: 12, availability: 'Available', village: 'Kaithal', district: 'Kaithal', state: 'Haryana', desc: 'Women\'s group, fast and even transplanting, brings own tools.', owner: 'Kamlesh Devi', phone: '9765098123' },
  { id: 'lb3', name: 'Pesticide Spraying Labour', category: 'spraying-labour', price: 500, workers: 3, availability: 'Available', village: 'Guntur Rural', district: 'Guntur', state: 'Andhra Pradesh', desc: 'Trained in safe spraying practice, has own PPE kits.', owner: 'Venkata Rao', phone: '9654098712' },
  { id: 'lb4', name: 'General Field Labour', category: 'general-labour', price: 350, workers: 6, availability: 'Available', village: 'Indore Rural', district: 'Indore', state: 'Madhya Pradesh', desc: 'Weeding, sorting, loading and general field work.', owner: 'Ravi Vishwakarma', phone: '9543098761' },
  { id: 'lb5', name: 'Tractor & Harvester Operator', category: 'machine-operator', price: 600, workers: 1, availability: 'Available', village: 'Hisar', district: 'Hisar', state: 'Haryana', desc: '10 years experience, licensed, can operate most makes.', owner: 'Mahender Sheoran', phone: '9432098765' },
];

const SEED_GODOWN = [
  { id: 'gd1', name: 'Concrete Godown — 2,000 sq ft', category: 'godown', price: 6000, capacity: '2,000 sq ft / ~150 tonnes', village: 'Sirsa', district: 'Sirsa', state: 'Haryana', desc: 'Pucca construction, rat-proof, near main road for easy loading.', owner: 'Jagdish Bishnoi', phone: '9812098765' },
  { id: 'gd2', name: 'Cold Storage — Onion & Potato', category: 'cold-storage', price: 4, capacity: '500 tonnes capacity, ₹ per quintal/month', village: 'Agra Rural', district: 'Agra', state: 'Uttar Pradesh', desc: 'Temperature controlled, suitable for potato and onion.', owner: 'Harish Agarwal', phone: '9765098234' },
  { id: 'gd3', name: 'Open Yard for Bulk Storage', category: 'open-yard', price: 2500, capacity: '1 acre plinth, covered on 3 sides', village: 'Nagpur Rural', district: 'Nagpur', state: 'Maharashtra', desc: 'Good for cotton bales and dry produce, boundary wall, watchman available.', owner: 'Prakash Deshmukh', phone: '9654098234' },
  { id: 'gd4', name: 'Warehouse near Mandi', category: 'godown', price: 8000, capacity: '3,500 sq ft / ~250 tonnes', village: 'Bathinda', district: 'Bathinda', state: 'Punjab', desc: '5 minutes from the grain mandi, loading dock available.', owner: 'Jasbir Sandhu', phone: '9543098234' },
];

// ============================================================
// Module configs (Equipment / Labour / Godown)
// ============================================================
const MODULES = {
  equipment: {
    key: 'equipment', storageKey: 'khetSathiListings', categories: EQUIPMENT_CATEGORIES, seed: SEED_EQUIPMENT,
    unit: '/ day', gridId: 'listingGrid', railId: 'categoryRail', searchId: 'searchInput', sortId: 'sortSelect',
    emptyId: 'emptyState', tabBtn: 'tab-equipment', panel: 'panel-equipment', extraField: 'availability',
  },
  labour: {
    key: 'labour', storageKey: 'khetSathiLabour', categories: LABOUR_CATEGORIES, seed: SEED_LABOUR,
    unit: '/ day', gridId: 'labourGrid', railId: 'labourRail', searchId: 'labourSearch', sortId: 'labourSort',
    emptyId: 'labourEmpty', tabBtn: 'tab-labour', panel: 'panel-labour', extraField: 'workers',
  },
  godown: {
    key: 'godown', storageKey: 'khetSathiGodown', categories: GODOWN_CATEGORIES, seed: SEED_GODOWN,
    unit: '/ month', gridId: 'godownGrid', railId: 'godownRail', searchId: 'godownSearch', sortId: 'godownSort',
    emptyId: 'godownEmpty', tabBtn: 'tab-godown', panel: 'panel-godown', extraField: 'capacity',
  },
};

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
  return cfg.categories.find(c => c.id === id) || { label: id, art: '' };
}

function availabilityTag(status) {
  if (!status) return '';
  if (status === 'Available') return `<span class="availability-tag tag-available">Available now</span>`;
  if (status === 'Booked') return `<span class="availability-tag tag-booked">Booked</span>`;
  return `<span class="availability-tag tag-soon">Available soon</span>`;
}

function renderRailFor(cfg) {
  const railEl = document.getElementById(cfg.railId);
  if (!railEl) return;
  const chips = [{ id: 'all', label: 'All' }, ...cfg.categories];
  railEl.innerHTML = chips.map(c =>
    `<button class="chip ${c.id === cfg.activeCategory ? 'active' : ''}" data-modtype="${cfg.key}" data-cat="${c.id}">${c.label}</button>`
  ).join('');
}

function extraLine(cfg, item) {
  if (cfg.extraField === 'workers') return `<div class="card-location">${item.workers || 1} worker${(item.workers||1) > 1 ? 's' : ''} available</div>`;
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

  if (emptyEl) emptyEl.hidden = filtered.length > 0;

  gridEl.innerHTML = filtered.map(item => {
    const meta = categoryMetaFor(cfg, item.category);
    const isMine = mine.has(item.id);
    return `
      <article class="listing-card">
        <div class="card-media">
          ${meta.art}
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
          ${isMine ? `<div class="card-mine">Your listing <button class="card-remove" data-modtype="${cfg.key}" data-remove="${item.id}">Remove</button></div>` : ''}
          <div class="card-bottom">
            <div class="card-price">₹${item.price}<span> ${cfg.unit}</span></div>
            <button class="card-book" data-modtype="${cfg.key}" data-book="${item.id}">Book</button>
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
  panelBody.innerHTML = `
    <h3 class="panel-title" id="panelTitle">${escapeHtml(item.name)}</h3>
    <p class="panel-sub">${meta.label} · ${escapeHtml(item.village)}, ${escapeHtml(item.district)}</p>
    <div class="panel-row"><span class="panel-label">Contact person</span><span class="panel-value">${escapeHtml(item.owner)}</span></div>
    <div class="panel-row"><span class="panel-label">Contact number</span><span class="panel-value">${escapeHtml(item.phone)}</span></div>
    <div class="panel-row"><span class="panel-label">Rate</span><span class="panel-value">₹${item.price} ${cfg.unit}</span></div>
    <div class="panel-actions">
      <a class="btn btn-primary" href="tel:+91${item.phone}">Call now</a>
      <button class="btn btn-ghost" id="copyNumberBtn" type="button">Copy number</button>
    </div>
  `;
  document.getElementById('copyNumberBtn').addEventListener('click', () => {
    navigator.clipboard?.writeText(item.phone).then(() => {
      const btn = document.getElementById('copyNumberBtn');
      btn.textContent = 'Copied';
      setTimeout(() => { btn.textContent = 'Copy number'; }, 1500);
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
// Listing form (shared, type-aware)
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

stateSelect.innerHTML += STATES.map(s => `<option value="${s}">${s}</option>`).join('');

function populateCategoryOptions(type) {
  const cfg = MODULES[type];
  catSelect.innerHTML = '<option value="" disabled selected>Select a category</option>' +
    cfg.categories.map(c => `<option value="${c.id}">${c.label}</option>`).join('');
}

function updateFormForType() {
  const type = listTypeSelect.value;
  populateCategoryOptions(type);
  availabilityGroup.hidden = type === 'godown';
  workersGroup.hidden = type !== 'labour';
  capacityGroup.hidden = type !== 'godown';

  if (type === 'equipment') {
    nameLabel.textContent = 'Equipment name';
    priceLabel.textContent = 'Rental price (₹ per day)';
    ownerLabel.textContent = 'Your name';
  } else if (type === 'labour') {
    nameLabel.textContent = 'Team / service name';
    priceLabel.textContent = 'Wage (₹ per worker per day)';
    ownerLabel.textContent = 'Contact person name';
  } else {
    nameLabel.textContent = 'Godown / storage name';
    priceLabel.textContent = 'Rent (₹ per month)';
    ownerLabel.textContent = 'Your name';
  }
}
listTypeSelect.addEventListener('change', updateFormForType);
updateFormForType();

const form = document.getElementById('listingForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', e => {
  e.preventDefault();
  const type = listTypeSelect.value;
  const cfg = MODULES[type];

  const phone = document.getElementById('f-phone').value.trim();
  if (!/^[6-9]\d{9}$/.test(phone)) {
    formNote.textContent = 'Enter a valid 10-digit Indian mobile number.';
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
  updateFormForType();
  formNote.classList.remove('error');
  formNote.textContent = 'Listed! It now appears in the marketplace above.';
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
  weatherResult.innerHTML = `<p class="weather-status">Looking up ${escapeHtml(city)}...</p>`;
  try {
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      weatherResult.innerHTML = `<p class="weather-status">Couldn't find "${escapeHtml(city)}". Try a nearby bigger town or district name.</p>`;
      return;
    }
    const place = geoData.results[0];
    const fRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code&timezone=auto&forecast_days=4`);
    const fData = await fRes.json();

    const cur = fData.current;
    const [curDesc, curEmoji] = describeWeather(cur.weather_code);

    const dayNames = ['Today', 'Tomorrow', 'Day 3', 'Day 4'];
    const forecastCards = fData.daily.time.map((date, i) => {
      const [desc, emoji] = describeWeather(fData.daily.weather_code[i]);
      return `
        <div class="forecast-card">
          <div class="forecast-day">${dayNames[i] || date}</div>
          <div class="forecast-emoji">${emoji}</div>
          <div class="forecast-temps">${Math.round(fData.daily.temperature_2m_max[i])}° / ${Math.round(fData.daily.temperature_2m_min[i])}°</div>
          <div class="forecast-rain">${fData.daily.precipitation_probability_max[i]}% rain</div>
        </div>`;
    }).join('');

    weatherResult.innerHTML = `
      <div class="weather-current">
        <div class="weather-emoji">${curEmoji}</div>
        <div>
          <div class="weather-place">${escapeHtml(place.name)}${place.admin1 ? ', ' + escapeHtml(place.admin1) : ''}</div>
          <div class="weather-temp">${Math.round(cur.temperature_2m)}°C · ${curDesc}</div>
          <div class="weather-meta">Humidity ${cur.relative_humidity_2m}% · Wind ${Math.round(cur.wind_speed_10m)} km/h</div>
        </div>
      </div>
      <div class="forecast-grid">${forecastCards}</div>
      <p class="weather-tip">${cur.wind_speed_10m > 15 ? 'Wind is on the higher side — not ideal for spraying right now.' : 'Wind speed looks manageable for spraying if needed.'}</p>
    `;
  } catch (err) {
    weatherResult.innerHTML = `<p class="weather-status">Couldn't fetch weather right now. Check your connection and try again.</p>`;
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
      row.hidden = q && !row.dataset.crop.includes(q);
    });
  });
}

// ---------- Init ----------
Object.values(MODULES).forEach(cfg => {
  renderRailFor(cfg);
  renderGridFor(cfg);
});
updateStats();

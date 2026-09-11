// ---------- Data ----------
const INK = '#14231A', GREEN = '#1F6D45', GOLD = '#E8A93A';
const WASH_FIELD = '#EDF2E9', WASH_GOLD = '#FBF0DB', WASH_SKY = '#DCEBF0', WASH_CLAY = '#EAE0D2';

function scene(wash, inner) {
  return `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="200" fill="${wash}"/>${inner}</svg>`;
}

const CATEGORIES = [
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

const STATES = [
  'Punjab', 'Haryana', 'Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Madhya Pradesh',
  'Rajasthan', 'Gujarat', 'Bihar', 'Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'West Bengal'
];

const SEED_LISTINGS = [
  { id: 's1', name: 'Mahindra 575 DI', category: 'tractor', price: 1400, availability: 'Available', village: 'Kharar', district: 'Sonipat', state: 'Haryana', desc: '45 HP, well maintained, comes with driver on request.', owner: 'Ramesh Yadav', phone: '9812345670' },
  { id: 's2', name: 'New Holland TC5.30 Combine', category: 'harvester', price: 3200, availability: 'Available', village: 'Bhogpur', district: 'Jalandhar', state: 'Punjab', desc: 'Self-propelled, works wheat and paddy, 2 seasons old.', owner: 'Gurpreet Singh', phone: '9876543210' },
  { id: 's3', name: 'Rotavator 6 Feet', category: 'rotavator', price: 800, availability: 'Available', village: 'Nashik Road', district: 'Nashik', state: 'Maharashtra', desc: 'Heavy duty blades, suits most tractor PTOs.', owner: 'Vitthal Pawar', phone: '9765432109' },
  { id: 's4', name: 'John Deere 5310 Tractor', category: 'tractor', price: 1600, availability: 'Available from next week', village: 'Belgaum Rural', district: 'Belagavi', state: 'Karnataka', desc: '55 HP, 4WD, good for tilling and transport.', owner: 'Basavaraj Patil', phone: '9654321098' },
  { id: 's5', name: 'Power Sprayer 500L', category: 'sprayer', price: 600, availability: 'Available', village: 'Karad', district: 'Satara', state: 'Maharashtra', desc: 'Tractor-mounted boom sprayer, 12m width.', owner: 'Suresh Jadhav', phone: '9543210987' },
  { id: 's6', name: 'Seed cum Fertilizer Drill', category: 'seed-drill', price: 700, availability: 'Available', village: 'Rewari', district: 'Rewari', state: 'Haryana', desc: '9-tyne, adjustable row spacing.', owner: 'Sandeep Malik', phone: '9432109876' },
  { id: 's7', name: 'Trolley 3-Ton', category: 'trailer', price: 500, availability: 'Available', village: 'Meerut', district: 'Meerut', state: 'Uttar Pradesh', desc: 'Hydraulic tipping trolley, good tyres.', owner: 'Anil Chaudhary', phone: '9321098765' },
  { id: 's8', name: 'Thresher Machine', category: 'thresher', price: 900, availability: 'Booked', village: 'Kota Rural', district: 'Kota', state: 'Rajasthan', desc: 'Multi-crop thresher, wheat and mustard.', owner: 'Om Prakash', phone: '9210987654' },
];

// ---------- State ----------
const STORAGE_KEY = 'khetSathiListings';
const MINE_KEY = 'khetSathiMyListings';
let activeCategory = 'all';

function loadListings() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { /* fall through */ }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_LISTINGS));
  return SEED_LISTINGS.slice();
}

function saveListings(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function getMineSet() {
  try { return new Set(JSON.parse(localStorage.getItem(MINE_KEY) || '[]')); }
  catch (e) { return new Set(); }
}

function saveMineSet(set) {
  localStorage.setItem(MINE_KEY, JSON.stringify([...set]));
}

let listings = loadListings();

// ---------- Category rail ----------
const railEl = document.getElementById('categoryRail');
function renderRail() {
  const chips = [{ id: 'all', label: 'All equipment' }, ...CATEGORIES];
  railEl.innerHTML = chips.map(c =>
    `<button class="chip ${c.id === activeCategory ? 'active' : ''}" data-cat="${c.id}">${c.label}</button>`
  ).join('');
  railEl.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderRail();
      renderGrid();
    });
  });
}

// ---------- Category select (form) ----------
const catSelect = document.getElementById('f-category');
catSelect.innerHTML += CATEGORIES.map(c => `<option value="${c.id}">${c.label}</option>`).join('');

// ---------- State select (form) ----------
const stateSelect = document.getElementById('f-state');
stateSelect.innerHTML += STATES.map(s => `<option value="${s}">${s}</option>`).join('');

// ---------- Grid rendering ----------
const gridEl = document.getElementById('listingGrid');
const emptyEl = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

function categoryMeta(id) {
  return CATEGORIES.find(c => c.id === id) || { label: id, art: '' };
}

function availabilityTag(status) {
  if (status === 'Available') return `<span class="availability-tag tag-available">Available now</span>`;
  if (status === 'Booked') return `<span class="availability-tag tag-booked">Booked</span>`;
  return `<span class="availability-tag tag-soon">Available soon</span>`;
}

function renderGrid() {
  const query = searchInput.value.trim().toLowerCase();
  const mine = getMineSet();

  let filtered = listings.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const haystack = `${item.name} ${item.district} ${item.state} ${item.village}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesCategory && matchesQuery;
  });

  if (sortSelect.value === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortSelect.value === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else filtered.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));

  emptyEl.hidden = filtered.length > 0;
  gridEl.innerHTML = filtered.map(item => {
    const meta = categoryMeta(item.category);
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
          </div>
          ${item.desc ? `<p class="card-desc">${escapeHtml(item.desc)}</p>` : ''}
          ${isMine ? `<div class="card-mine">Your listing <button class="card-remove" data-remove="${item.id}">Remove</button></div>` : ''}
          <div class="card-bottom">
            <div class="card-price">₹${item.price}<span> / day</span></div>
            <button class="card-book" data-book="${item.id}">Book</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  gridEl.querySelectorAll('[data-book]').forEach(btn => {
    btn.addEventListener('click', () => openContactPanel(btn.dataset.book));
  });
  gridEl.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => removeListing(btn.dataset.remove));
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

function removeListing(id) {
  listings = listings.filter(item => item.id !== id);
  saveListings(listings);
  const mine = getMineSet();
  mine.delete(id);
  saveMineSet(mine);
  renderGrid();
  updateStats();
}

// ---------- Stats ----------
function updateStats() {
  document.getElementById('statCount').textContent = listings.length;
  document.getElementById('statStates').textContent = new Set(listings.map(l => l.state)).size;
}

// ---------- Contact panel ----------
const overlay = document.getElementById('contactOverlay');
const panel = document.getElementById('contactPanel');
const panelBody = document.getElementById('panelBody');

function openContactPanel(id) {
  const item = listings.find(l => l.id === id);
  if (!item) return;
  panelBody.innerHTML = `
    <h3 class="panel-title" id="panelTitle">${escapeHtml(item.name)}</h3>
    <p class="panel-sub">${categoryMeta(item.category).label} · ${escapeHtml(item.village)}, ${escapeHtml(item.district)}</p>
    <div class="panel-row"><span class="panel-label">Owner</span><span class="panel-value">${escapeHtml(item.owner)}</span></div>
    <div class="panel-row"><span class="panel-label">Contact number</span><span class="panel-value">${escapeHtml(item.phone)}</span></div>
    <div class="panel-row"><span class="panel-label">Rate</span><span class="panel-value">₹${item.price} / day</span></div>
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

// ---------- Filters wiring ----------
searchInput.addEventListener('input', renderGrid);
sortSelect.addEventListener('change', renderGrid);

// ---------- Form submission ----------
const form = document.getElementById('listingForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', e => {
  e.preventDefault();

  const phone = document.getElementById('f-phone').value.trim();
  if (!/^[6-9]\d{9}$/.test(phone)) {
    formNote.textContent = 'Enter a valid 10-digit Indian mobile number.';
    formNote.classList.add('error');
    return;
  }

  const newListing = {
    id: 'l' + Date.now(),
    name: document.getElementById('f-name').value.trim(),
    category: document.getElementById('f-category').value,
    price: Number(document.getElementById('f-price').value),
    availability: document.getElementById('f-availability').value,
    village: document.getElementById('f-village').value.trim(),
    district: document.getElementById('f-district').value.trim(),
    state: document.getElementById('f-state').value,
    desc: document.getElementById('f-desc').value.trim(),
    owner: document.getElementById('f-owner').value.trim(),
    phone,
    addedAt: Date.now(),
  };

  listings.unshift(newListing);
  saveListings(listings);

  const mine = getMineSet();
  mine.add(newListing.id);
  saveMineSet(mine);

  form.reset();
  formNote.classList.remove('error');
  formNote.textContent = 'Listed! Your equipment is now visible in the browse section above.';
  setTimeout(() => { formNote.textContent = ''; }, 4000);

  activeCategory = 'all';
  renderRail();
  renderGrid();
  updateStats();

  document.getElementById('browse').scrollIntoView({ behavior: 'smooth' });
});

// ---------- Init ----------
renderRail();
renderGrid();
updateStats();

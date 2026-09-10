// ---------- Data ----------
const CATEGORIES = [
  { id: 'tractor', label: 'Tractor', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16h6v-4h-2l-1-2h-2v2H3z"/><path d="M9 12h3l2 4"/><circle cx="6" cy="16" r="3"/><circle cx="15" cy="16" r="2"/></svg>' },
  { id: 'harvester', label: 'Harvester', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="8" width="8" height="6" rx="1"/><path d="M4 8l3 2v4l-3 2"/><circle cx="11" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>' },
  { id: 'rotavator', label: 'Rotavator', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h16"/><path d="M6 18V9m6 9V9m6 9V9"/><path d="M4 9h16"/></svg>' },
  { id: 'cultivator', label: 'Cultivator', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v10"/><path d="M6 8l6 5 6-5"/><path d="M9 21l3-6 3 6"/></svg>' },
  { id: 'seed-drill', label: 'Seed Drill', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="6" rx="1"/><path d="M7 12v6M12 12v6M17 12v6"/></svg>' },
  { id: 'sprayer', label: 'Power Sprayer', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c0-6 3-9 3-14"/><path d="M8 3h6l2 4H10z"/><path d="M13 10l6 2M13 13l6 1M13 16l5 3"/></svg>' },
  { id: 'trailer', label: 'Trailer', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="14" height="6" rx="1"/><circle cx="7" cy="17" r="2"/><circle cx="13" cy="17" r="2"/><path d="M17 11h3l1 3v0h-4z"/></svg>' },
  { id: 'thresher', label: 'Thresher', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="14" r="5"/><path d="M14 12h6l-2 5"/><path d="M9 11v6M6.5 14h5"/></svg>' },
  { id: 'plough', label: 'Plough', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l14 10"/><path d="M18 16l3-1-1 3z"/><path d="M4 6l3-1 1 3z"/></svg>' },
  { id: 'baler', label: 'Baler', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F6D45" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="6"/><path d="M12 7v12M6 13h12" stroke-dasharray="2 2"/></svg>' },
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
  return CATEGORIES.find(c => c.id === id) || { label: id, icon: '' };
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
        <div class="card-top">
          <div class="card-icon">${meta.icon}</div>
          ${availabilityTag(item.availability)}
        </div>
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

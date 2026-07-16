// ===== AgriMarket Ghana — Core Shared Utilities =====

// ---- Pexels image helper ----
const PEXELS = (id, w = 400, h = 400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

// ---- Static marketplace products ----
const PRODUCTS = [
  { id: 1, name: 'Fresh Tomatoes', category: 'Vegetables', price: 15, unit: 'kg', stock: 120, seller: 'Asaase Farms', rating: 4.8, img: 533280, region: 'Eastern', desc: 'Freshly harvested tomatoes grown in the rich soils of the Eastern Region.' },
  { id: 2, name: 'Maize (Dried)', category: 'Grains', price: 8, unit: 'bag (50kg)', stock: 200, seller: 'Kofi Farms', rating: 4.6, img: 5648605, region: 'Ashanti', desc: 'Quality dried maize from the Ashanti Region. Great for milling and kenkey.' },
  { id: 3, name: 'Free-Range Eggs', category: 'Poultry', price: 30, unit: 'crate', stock: 80, seller: 'Akua Poultry', rating: 4.9, img: 35304487, region: 'Central', desc: 'Farm-fresh free-range eggs from healthy hens in the Central Region.' },
  { id: 4, name: 'Pure Honey', category: 'Specialty', price: 80, unit: 'jar (500ml)', stock: 50, seller: 'Ananse Apiary', rating: 5.0, img: 3379022, region: 'Brong-Ahafo', desc: 'Pure, raw honey from the Brong-Ahafo Region. No additives.' },
  { id: 5, name: 'Fresh Spinach', category: 'Vegetables', price: 10, unit: 'bunch', stock: 90, seller: 'Asaase Farms', rating: 4.5, img: 2255935, region: 'Eastern', desc: 'Crisp, tender spinach leaves (kontomire). Washed and ready to cook.' },
  { id: 6, name: 'Ripe Plantain', category: 'Fruits', price: 12, unit: 'bunch', stock: 150, seller: 'Nana Farms', rating: 4.7, img: 102104, region: 'Western', desc: 'Sweet ripe plantains from the Western Region. Perfect for kelewele.' },
  { id: 7, name: 'Local Rice', category: 'Grains', price: 25, unit: 'bag (25kg)', stock: 70, seller: 'Volta Rice Mills', rating: 4.4, img: 32506154, region: 'Volta', desc: 'Premium local rice from the Volta Region. Stone-free and aromatic.' },
  { id: 8, name: 'Fresh Milk', category: 'Dairy', price: 20, unit: 'liter', stock: 100, seller: 'Akua Poultry', rating: 4.8, img: 236010, region: 'Eastern', desc: 'Fresh, pasteurized whole milk from grass-fed cows in the Eastern Region.' },
  { id: 9, name: 'Green Pepper', category: 'Vegetables', price: 18, unit: 'kg', stock: 60, seller: 'Kofi Farms', rating: 4.3, img: 186840, region: 'Ashanti', desc: 'Crisp green bell peppers, great for stews, stir-fries, and salads.' },
  { id: 10, name: 'Watermelon', category: 'Fruits', price: 15, unit: 'piece', stock: 40, seller: 'Nana Farms', rating: 4.9, img: 1313267, region: 'Northern', desc: 'Sweet, juicy watermelons from the Northern Region.' },
  { id: 11, name: 'Yam (Pona)', category: 'Tubers', price: 20, unit: 'tuber', stock: 110, seller: 'Savannah Farms', rating: 4.5, img: 16839719, region: 'Northern', desc: 'Premium Pona yam from the Northern Region. Perfect for fufu.' },
  { id: 12, name: 'Smoked Fish', category: 'Specialty', price: 35, unit: 'kg', stock: 30, seller: 'Ananse Apiary', rating: 4.7, img: 699544, region: 'Volta', desc: 'Quality smoked tilapia from Lake Volta. Ready for soups and stews.' },
  { id: 13, name: 'Red Onions', category: 'Vegetables', price: 14, unit: 'kg', stock: 85, seller: 'Savannah Farms', rating: 4.4, img: 1126055, region: 'Northern', desc: 'Pungent red onions from the Northern Region. Essential for Ghanaian cooking.' },
  { id: 14, name: 'Cassava', category: 'Tubers', price: 6, unit: 'kg', stock: 180, seller: 'Asaase Farms', rating: 4.2, img: 5898053, region: 'Eastern', desc: 'Fresh cassava roots. Perfect for gari, fufu, and banku.' },
  { id: 15, name: 'Groundnuts (Dried)', category: 'Grains', price: 22, unit: 'bag (25kg)', stock: 60, seller: 'Kofi Farms', rating: 4.6, img: 1208604, region: 'Ashanti', desc: 'Premium dried groundnuts from the Ashanti Region. Great for peanut butter and kuli-kuli.' },
  { id: 16, name: 'Fresh Okra', category: 'Vegetables', price: 12, unit: 'kg', stock: 70, seller: 'Nana Farms', rating: 4.5, img: 1656684, region: 'Western', desc: 'Tender fresh okra pods. Perfect for okro soup and stews.' },
  { id: 17, name: 'Pineapple', category: 'Fruits', price: 10, unit: 'piece', stock: 95, seller: 'Volta Farms', rating: 4.8, img: 947879, region: 'Volta', desc: 'Sweet, juicy pineapples from the Volta Region. Naturally ripened.' },
  { id: 18, name: 'Sorghum', category: 'Grains', price: 18, unit: 'bag (50kg)', stock: 45, seller: 'Savannah Farms', rating: 4.3, img: 6688792, region: 'Upper East', desc: 'Drought-resistant sorghum from the Upper East Region. Ideal for brewing and livestock feed.' },
  { id: 19, name: 'Fresh Tilapia', category: 'Specialty', price: 40, unit: 'kg', stock: 55, seller: 'Volta Fishery', rating: 4.9, img: 3296439, region: 'Volta', desc: 'Fresh tilapia from Lake Volta. Cleaned, scaled, and ready to cook.' },
  { id: 20, name: 'Cocoyam', category: 'Tubers', price: 8, unit: 'kg', stock: 100, seller: 'Asaase Farms', rating: 4.4, img: 8801017, region: 'Eastern', desc: 'Fresh cocoyam from the Eastern Region. Great for cocoyam chips and kontomire.' },
  { id: 21, name: 'Mango (Keitt)', category: 'Fruits', price: 18, unit: 'kg', stock: 75, seller: 'Nana Farms', rating: 4.7, img: 2294473, region: 'Western', desc: 'Sweet Keitt mangoes from the Western Region. Juicy and fiberless.' },
  { id: 22, name: 'Cowpeas (Beans)', category: 'Grains', price: 20, unit: 'bag (50kg)', stock: 65, seller: 'Savannah Farms', rating: 4.5, img: 4969303, region: 'Northern', desc: 'Quality cowpeas from the Northern Region. Rich in protein for waakye and gari beans.' },
  { id: 23, name: 'Garden Eggs', category: 'Vegetables', price: 16, unit: 'kg', stock: 50, seller: 'Kofi Farms', rating: 4.2, img: 2280765, region: 'Ashanti', desc: 'Fresh garden eggs (African eggplant). Perfect for stews and garden egg sauce.' },
  { id: 24, name: 'Palm Oil (Pure)', category: 'Specialty', price: 45, unit: 'liter', stock: 40, seller: 'Volta Farms', rating: 4.8, img: 3379022, region: 'Volta', desc: 'Pure, unadulterated red palm oil from the Volta Region. Rich in vitamins.' },
  { id: 25, name: 'Cabbage', category: 'Vegetables', price: 14, unit: 'head', stock: 80, seller: 'Asaase Farms', rating: 4.3, img: 533280, region: 'Eastern', desc: 'Crisp, fresh cabbage heads. Great for salads, slaws, and stews.' },
  { id: 26, name: 'Soybeans', category: 'Grains', price: 28, unit: 'bag (50kg)', stock: 55, seller: 'Savannah Farms', rating: 4.6, img: 4969303, region: 'Upper West', desc: 'High-quality soybeans from the Upper West Region. Perfect for dawadawa and soy milk.' },
  { id: 27, name: 'Bananas (Red)', category: 'Fruits', price: 8, unit: 'bunch', stock: 120, seller: 'Nana Farms', rating: 4.7, img: 287273, region: 'Western', desc: 'Sweet red bananas from the Western Region. Naturally ripened on the farm.' },
  { id: 28, name: 'Fresh Pepper (Red)', category: 'Vegetables', price: 25, unit: 'kg', stock: 45, seller: 'Kofi Farms', rating: 4.5, img: 186840, region: 'Ashanti', desc: 'Hot red chili peppers from the Ashanti Region. Fire for shito and pepper sauce.' },
  { id: 29, name: 'Coconut', category: 'Fruits', price: 5, unit: 'piece', stock: 200, seller: 'Volta Farms', rating: 4.6, img: 8472157, region: 'Volta', desc: 'Fresh coconuts from the Volta Region. Sweet water and rich meat.' },
  { id: 30, name: 'Gari (Fine)', category: 'Specialty', price: 15, unit: 'kg', stock: 150, seller: 'Asaase Farms', rating: 4.4, img: 5898053, region: 'Eastern', desc: 'Fine, crispy gari from the Eastern Region. Perfect for gari soakings and gari foto.' },
];

const CATEGORIES = ['Vegetables', 'Grains', 'Poultry', 'Dairy', 'Fruits', 'Tubers', 'Specialty'];

// ---- localStorage helpers ----
function getStore(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
function saveStore(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

const Store = {
  crops: () => getStore('agri_crops'),
  saveCrops: (d) => saveStore('agri_crops', d),
  livestock: () => getStore('agri_livestock'),
  saveLivestock: (d) => saveStore('agri_livestock', d),
  inventory: () => getStore('agri_inventory'),
  saveInventory: (d) => saveStore('agri_inventory', d),
  expenses: () => getStore('agri_expenses'),
  saveExpenses: (d) => saveStore('agri_expenses', d),
  income: () => getStore('agri_income'),
  saveIncome: (d) => saveStore('agri_income', d),
  orders: () => getStore('agri_orders'),
  saveOrders: (d) => saveStore('agri_orders', d),
  notifications: () => getStore('agri_notifications'),
  saveNotifications: (d) => saveStore('agri_notifications', d),
  users: () => getStore('agri_users'),
  saveUsers: (d) => saveStore('agri_users', d),
};

// ---- Seed data on first load ----
(function seedData() {
  if (!localStorage.getItem('agri_seeded_v2')) {
    // Seed livestock
    const livestock = [
      { id: 1001, name: 'Dairy Cattle Herd A', type: 'Cattle', breed: 'N\'Dama', count: 24, health: 'Healthy', notes: 'Grass-fed, producing 120L milk/day', image: '' },
      { id: 1002, name: 'Layer Hens - Pen 1', type: 'Poultry', breed: 'Rhode Island Red', count: 500, health: 'Healthy', notes: 'Laying 420 eggs/day. Free-range system.', image: '' },
      { id: 1003, name: 'Goat Herd - North Field', type: 'Goats', breed: 'West African Dwarf', count: 35, health: 'Vaccination Due', notes: 'Due for PPR vaccine next week', image: '' },
      { id: 1004, name: 'Broiler Batch 12', type: 'Poultry', breed: 'Cobb 500', count: 800, health: 'Healthy', notes: 'Week 4 of 6. Weight gain on track.', image: '' },
      { id: 1005, name: 'Sheep Flock - East', type: 'Sheep', breed: 'Djallonke', count: 18, health: 'Healthy', notes: 'Grazing rotation in east pasture', image: '' },
      { id: 1006, name: 'Breeding Boars', type: 'Pigs', breed: 'Large White', count: 4, health: 'Treatment', notes: 'Treating for ticks. Pen 3 isolated.', image: '' },
      { id: 1007, name: 'Cattle - Beef Herd B', type: 'Cattle', breed: 'Sanga', count: 16, health: 'Healthy', notes: 'Ready for market in 3 weeks', image: '' },
      { id: 1008, name: 'Layer Chicks - Nursery', type: 'Poultry', breed: 'ISA Brown', count: 300, health: 'Healthy', notes: 'Week 2 old. Heat lamp required.', image: '' },
    ];
    saveStore('agri_livestock', livestock);

    // Seed inventory
    const inventory = [
      { id: 2001, name: 'Fresh Tomatoes (Grade A)', category: 'Vegetables', qty: 120, unit: 'kg', price: 15, notes: 'Harvested 2 days ago', image: '' },
      { id: 2002, name: 'Maize (Dried, 50kg bags)', category: 'Grains', qty: 200, unit: 'bag', price: 8, notes: 'Stored in dry silo', image: '' },
      { id: 2003, name: 'Free-Range Eggs', category: 'Poultry', qty: 80, unit: 'crate', price: 30, notes: 'Daily collection', image: '' },
      { id: 2004, name: 'Pure Honey (500ml jars)', category: 'Specialty', qty: 50, unit: 'jar', price: 80, notes: 'Harvested Spring 2025', image: '' },
      { id: 2005, name: 'Fresh Spinach Bunches', category: 'Vegetables', qty: 90, unit: 'bunch', price: 10, notes: 'Washed and bundled', image: '' },
      { id: 2006, name: 'Ripe Plantain Bunches', category: 'Fruits', qty: 150, unit: 'bunch', price: 12, notes: 'Ripe and ready', image: '' },
      { id: 2007, name: 'Local Rice (25kg bags)', category: 'Grains', qty: 70, unit: 'bag', price: 25, notes: 'Stone-free, aromatic', image: '' },
      { id: 2008, name: 'Fresh Milk (liters)', category: 'Dairy', qty: 100, unit: 'liter', price: 20, notes: 'Pasteurized, refrigerated', image: '' },
      { id: 2009, name: 'Green Pepper (kg)', category: 'Vegetables', qty: 60, unit: 'kg', price: 18, notes: 'Freshly picked', image: '' },
      { id: 2010, name: 'Watermelon', category: 'Fruits', qty: 40, unit: 'piece', price: 15, notes: 'Sweet variety', image: '' },
      { id: 2011, name: 'Yam (Pona)', category: 'Tubers', qty: 110, unit: 'tuber', price: 20, notes: 'Premium Pona variety', image: '' },
      { id: 2012, name: 'Smoked Fish (kg)', category: 'Specialty', qty: 30, unit: 'kg', price: 35, notes: 'Smoked tilapia from Lake Volta', image: '' },
      { id: 2013, name: 'Red Onions (kg)', category: 'Vegetables', qty: 85, unit: 'kg', price: 14, notes: 'Dried, stored in sacks', image: '' },
      { id: 2014, name: 'Cassava (kg)', category: 'Tubers', qty: 180, unit: 'kg', price: 6, notes: 'Freshly uprooted', image: '' },
      { id: 2015, name: 'Groundnuts (25kg bags)', category: 'Grains', qty: 60, unit: 'bag', price: 22, notes: 'Dried and sorted', image: '' },
      { id: 2016, name: 'Fresh Okra (kg)', category: 'Vegetables', qty: 70, unit: 'kg', price: 12, notes: 'Tender pods', image: '' },
      { id: 2017, name: 'Pineapple', category: 'Fruits', qty: 95, unit: 'piece', price: 10, notes: 'Naturally ripened', image: '' },
      { id: 2018, name: 'Sorghum (50kg bags)', category: 'Grains', qty: 45, unit: 'bag', price: 18, notes: 'Drought-resistant variety', image: '' },
      { id: 2019, name: 'Fresh Tilapia (kg)', category: 'Specialty', qty: 55, unit: 'kg', price: 40, notes: 'From Lake Volta, cleaned', image: '' },
      { id: 2020, name: 'Cocoyam (kg)', category: 'Tubers', qty: 100, unit: 'kg', price: 8, notes: 'Fresh harvest', image: '' },
    ];
    saveStore('agri_inventory', inventory);

    // Seed some notifications
    const notifs = [
      { id: 3001, type: 'success', title: 'Order Delivered', message: 'Order #AM20250101 delivered to Ama Serwaa in Accra', date: '2025-01-15', read: true },
      { id: 3002, type: 'warning', title: 'Low Stock Alert', message: 'Smoked Fish is running low (30kg remaining)', date: '2025-01-16', read: false },
      { id: 3003, type: 'info', title: 'New Order', message: 'New order received for 10 bags of maize', date: '2025-01-17', read: false },
      { id: 3004, type: 'success', title: 'Payment Received', message: '₵450 received from Asaase Farms order', date: '2025-01-18', read: true },
      { id: 3005, type: 'warning', title: 'Vaccination Due', message: 'Goat herd (North Field) due for PPR vaccine', date: '2025-01-19', read: false },
    ];
    saveStore('agri_notifications', notifs);

    localStorage.setItem('agri_seeded_v2', '1');
  }
})();

// ---- Auth ----
const Auth = {
  get: () => { try { return JSON.parse(localStorage.getItem('agrimarket_user')) || { name: 'Guest', email: '', role: 'Consumer' }; } catch { return { name: 'Guest', email: '', role: 'Consumer' }; } },
  set: (u) => localStorage.setItem('agrimarket_user', JSON.stringify(u)),
  clear: () => localStorage.removeItem('agrimarket_user'),
  isLoggedIn: () => !!localStorage.getItem('agrimarket_user'),
};

// ---- Cart ----
const Cart = {
  get: () => { try { return JSON.parse(localStorage.getItem('agrimarket_cart')) || []; } catch { return []; } },
  save: (c) => localStorage.setItem('agrimarket_cart', JSON.stringify(c)),
  add: (id, qty = 1) => {
    const cart = Cart.get();
    const item = cart.find(i => i.id === id);
    if (item) item.qty += qty; else cart.push({ id, qty });
    Cart.save(cart);
  },
  update: (id, qty) => {
    const cart = Cart.get();
    const item = cart.find(i => i.id === id);
    if (item) item.qty = qty;
    Cart.save(cart);
  },
  remove: (id) => Cart.save(Cart.get().filter(i => i.id !== id)),
  clear: () => localStorage.removeItem('agrimarket_cart'),
  count: () => Cart.get().reduce((s, i) => s + i.qty, 0),
};

// ---- Image helpers ----
function imgPreview(img) {
  if (!img) return '';
  if (typeof img === 'number') return PEXELS(img, 400, 400);
  if (img.startsWith('data:') || img.startsWith('http')) return img;
  return '';
}

// ---- Toast ----
function toast(msg) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:#1a7a3e;color:#fff;padding:0.875rem 1.5rem;border-radius:0.5rem;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15);opacity:0;transition:opacity 0.3s;font-weight:500;font-size:0.9rem';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.opacity = '1';
  clearTimeout(el._t);
  el._t = setTimeout(() => el.style.opacity = '0', 3000);
}

// ---- Format money in Ghana Cedi ----
function fmtMoney(n) {
  return '\u20B5' + Number(n || 0).toLocaleString('en-GH', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// ---- Star rating ----
function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '\u2605';
  if (half) s += '\u2606';
  for (let i = full + (half ? 1 : 0); i < 5; i++) s += '\u2606';
  return s;
}

// ---- Empty state ----
function emptyState(title, msg, link, linkText) {
  return `
    <div style="text:center;padding:3rem 1rem">
      <div style="font-size:3rem;margin-bottom:1rem;opacity:0.3">\u1F33E</div>
      <h3 style="color:var(--text-soft)">${title}</h3>
      <p class="text-soft mt-1" style="max-width:400px;margin:0.5rem auto">${msg}</p>
      ${link ? `<a href="${link}" class="btn btn-primary mt-2">${linkText || 'Get Started'}</a>` : ''}
    </div>
  `;
}

// ---- Require auth ----
function requireAuth() {
  if (!Auth.isLoggedIn()) {
    toast('Please log in to continue');
    setTimeout(() => window.location.href = '/pages/login.html', 1000);
    return false;
  }
  return true;
}

// ---- Navbar ----
function buildNavbar(active) {
  const user = Auth.get();
  const cartCount = Cart.count();
  const links = [
    { href: '/index.html', label: 'Home', key: 'home' },
    { href: '/pages/marketplace.html', label: 'Marketplace', key: 'marketplace' },
    { href: '/pages/about.html', label: 'About', key: 'about' },
    { href: '/pages/contact.html', label: 'Contact', key: 'contact' },
    { href: '/pages/faq.html', label: 'FAQ', key: 'faq' },
  ];

  return `
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <a href="/index.html" class="nav-logo">
          <svg viewBox="0 0 32 32" width="28" height="28"><circle cx="16" cy="16" r="16" fill="#1a7a3e"/><path d="M16 7c-4 4-6 8-6 11a6 6 0 0012 0c0-3-2-7-6-11z" fill="#fff"/></svg>
          AgriMarket
        </a>
        <div class="nav-links" id="navLinks">
          ${links.map(l => `<a href="${l.href}" class="${active === l.key ? 'active' : ''}">${l.label}</a>`).join('')}
          <a href="/pages/cart.html" class="nav-cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            ${cartCount > 0 ? `<span class="cart-badge">${cartCount}</span>` : ''}
          </a>
          ${Auth.isLoggedIn()
            ? `<a href="${user.role === 'Farmer' ? '/pages/farmer-dashboard.html' : user.role === 'Admin' ? '/pages/admin-dashboard.html' : '/pages/buyer-dashboard.html'}" class="btn btn-primary btn-sm">Dashboard</a>`
            : `<a href="/pages/register.html" class="btn btn-primary btn-sm">Get Started</a>`}
        </div>
        <button class="hamburger" id="hamburger" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('active');
}

// ---- Footer ----
function buildFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="grid grid-4">
          <div>
            <div class="nav-logo" style="margin-bottom:1rem">
              <svg viewBox="0 0 32 32" width="24" height="24"><circle cx="16" cy="16" r="16" fill="#1a7a3e"/><path d="M16 7c-4 4-6 8-6 11a6 6 0 0012 0c0-3-2-7-6-11z" fill="#fff"/></svg>
              AgriMarket
            </div>
            <p class="text-soft text-sm">Ghana's agricultural marketplace connecting farmers, wholesalers, retailers, factories, and consumers.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="/pages/marketplace.html">Marketplace</a>
            <a href="/pages/about.html">About Us</a>
            <a href="/pages/contact.html">Contact</a>
            <a href="/pages/faq.html">FAQ</a>
          </div>
          <div>
            <h4>For Farmers</h4>
            <a href="/pages/register.html">Register as Farmer</a>
            <a href="/pages/farmer-dashboard.html">Farmer Dashboard</a>
            <a href="/pages/crop-management.html">Crop Management</a>
            <a href="/pages/inventory.html">Inventory</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p class="text-soft text-sm">123 Independence Avenue<br/>Accra, Ghana</p>
            <p class="text-soft text-sm">+233 30 000 0000</p>
            <p class="text-soft text-sm">support@agrimarket.gh</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="text-soft text-sm">\u00A9 ${new Date().getFullYear()} AgriMarket Ghana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// ---- Mount layout (navbar + footer) ----
function mountLayout(active) {
  document.getElementById('nav').innerHTML = buildNavbar(active);
  document.getElementById('footer').innerHTML = buildFooter();
}

// ---- Dashboard sidebar nav builder ----
function dashNav(navItems, activeHref) {
  return navItems.map(section => `
    <div class="dash-nav-section">
      <div class="dash-nav-title">${section.section}</div>
      ${section.items.map(item => `
        <a href="${item.href}" class="dash-nav-item ${item.href === activeHref ? 'active' : ''}">
          ${item.icon}
          <span>${item.label}</span>
        </a>
      `).join('')}
    </div>
  `).join('');
}

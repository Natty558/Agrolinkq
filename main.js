// ===== AgriMarket Ghana — Core Shared Utilities =====

// ---- Pexels image helper ----
const PEXELS = (id, w = 400, h = 400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

// ---- Static marketplace products ----
const PRODUCTS = [
  { id: 1, name: 'Fresh Tomatoes', category: 'Vegetables', price: 15, unit: 'kg', stock: 120, seller: 'Asaase Farms', rating: 4.8, img: 533280, desc: 'Freshly harvested tomatoes grown in the rich soils of the Eastern Region.' },
  { id: 2, name: 'Maize (Dried)', category: 'Grains', price: 8, unit: 'bag (50kg)', stock: 200, seller: 'Kofi Farms', rating: 4.6, img: 5648605, desc: 'Quality dried maize from the Ashanti Region. Great for milling and kenkey.' },
  { id: 3, name: 'Free-Range Eggs', category: 'Poultry', price: 30, unit: 'crate', stock: 80, seller: 'Akua Poultry', rating: 4.9, img: 35304487, desc: 'Farm-fresh free-range eggs from healthy hens in the Central Region.' },
  { id: 4, name: 'Pure Honey', category: 'Specialty', price: 80, unit: 'jar (500ml)', stock: 50, seller: 'Ananse Apiary', rating: 5.0, img: 3379022, desc: 'Pure, raw honey from the Brong-Ahafo Region. No additives.' },
  { id: 5, name: 'Fresh Spinach', category: 'Vegetables', price: 10, unit: 'bunch', stock: 90, seller: 'Asaase Farms', rating: 4.5, img: 2255935, desc: 'Crisp, tender spinach leaves (kontomire). Washed and ready to cook.' },
  { id: 6, name: 'Ripe Plantain', category: 'Fruits', price: 12, unit: 'bunch', stock: 150, seller: 'Nana Farms', rating: 4.7, img: 102104, desc: 'Sweet ripe plantains from the Western Region. Perfect for kelewele.' },
  { id: 7, name: 'Local Rice', category: 'Grains', price: 25, unit: 'bag (25kg)', stock: 70, seller: 'Volta Rice Mills', rating: 4.4, img: 32506154, desc: 'Premium local rice from the Volta Region. Stone-free and aromatic.' },
  { id: 8, name: 'Fresh Milk', category: 'Dairy', price: 20, unit: 'liter', stock: 100, seller: 'Akua Poultry', rating: 4.8, img: 236010, desc: 'Fresh, pasteurized whole milk from grass-fed cows in the Eastern Region.' },
  { id: 9, name: 'Green Pepper', category: 'Vegetables', price: 18, unit: 'kg', stock: 60, seller: 'Kofi Farms', rating: 4.3, img: 186840, desc: 'Crisp green bell peppers, great for stews, stir-fries, and salads.' },
  { id: 10, name: 'Watermelon', category: 'Fruits', price: 15, unit: 'piece', stock: 40, seller: 'Nana Farms', rating: 4.9, img: 1313267, desc: 'Sweet, juicy watermelons from the Northern Region.' },
  { id: 11, name: 'Yam (Pona)', category: 'Tubers', price: 20, unit: 'tuber', stock: 110, seller: 'Savannah Farms', rating: 4.5, img: 16839719, desc: 'Premium Pona yam from the Northern Region. Perfect for fufu.' },
  { id: 12, name: 'Smoked Fish', category: 'Specialty', price: 35, unit: 'kg', stock: 30, seller: 'Ananse Apiary', rating: 4.7, img: 699544, desc: 'Quality smoked tilapia from Lake Volta. Ready for soups and stews.' },
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

// ---- Delivery estimation ----
const DELIVERY_AGENTS = [
  { name: 'Kwame Asante', phone: '+233 24 111 2222', region: 'Greater Accra', vehicle: 'Motorcycle', rating: 4.9 },
  { name: 'Yaw Boateng', phone: '+233 24 333 4444', region: 'Ashanti', vehicle: 'Van', rating: 4.7 },
  { name: 'Akosua Mensah', phone: '+233 24 555 6666', region: 'Western', vehicle: 'Tricycle', rating: 4.8 },
  { name: 'Kofi Owusu', phone: '+233 24 777 8888', region: 'Eastern', vehicle: 'Motorcycle', rating: 5.0 },
  { name: 'Ama Darko', phone: '+233 24 999 0000', region: 'Central', vehicle: 'Van', rating: 4.6 },
  { name: 'Nana Yaw', phone: '+233 24 121 3434', region: 'Northern', vehicle: 'Truck', rating: 4.5 },
  { name: 'Adwoa Frimpong', phone: '+233 24 454 5656', region: 'Volta', vehicle: 'Motorcycle', rating: 4.8 },
  { name: 'Kojo Antwi', phone: '+233 24 676 7878', region: 'Brong-Ahafo', vehicle: 'Van', rating: 4.7 },
];

function assignDeliveryAgent(region) {
  const regional = DELIVERY_AGENTS.find(a => a.region === region);
  if (regional) return regional;
  return DELIVERY_AGENTS[Math.floor(Math.random() * DELIVERY_AGENTS.length)];
}

function estimateDeliveryDate(region, orderDate) {
  const base = orderDate ? new Date(orderDate) : new Date();
  const sameDayRegions = ['Greater Accra'];
  const nextDayRegions = ['Ashanti', 'Eastern', 'Central', 'Western'];
  let days = 3;
  if (sameDayRegions.includes(region)) days = 1;
  else if (nextDayRegions.includes(region)) days = 2;
  const delivery = new Date(base.getTime() + days * 24 * 60 * 60 * 1000);
  return delivery.toLocaleDateString('en-GH', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
}

function generateTrackingNumber() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let tn = 'AM';
  for (let i = 0; i < 3; i++) tn += chars[Math.floor(Math.random() * chars.length)];
  tn += '-';
  for (let i = 0; i < 7; i++) tn += Math.floor(Math.random() * 10);
  return tn;
}

// ---- EmailJS configuration ----
// Two separate templates: one for order confirmation, one for status updates.
// Each template MUST have its "To Email" field set to {{to_email}} on the EmailJS dashboard.
const EMAILJS_CONFIG = {
  publicKey: 'wSx8wjfDkG2fD4eHa',
  serviceId: 'AgriMarket',
  templateOrderConfirmation: 'template_ukfu091',
  templateStatusUpdate: 'template_ukfu091',
};

// Build the shared email parameters object from an order.
// Every field maps to a {{variable}} in the EmailJS template.
function buildEmailParams(order) {
  const itemList = (order.items || []).map(i => {
    const p = PRODUCTS.find(pr => pr.id === i.id);
    const name = p ? p.name : (i.name || 'Product');
    const price = p ? p.price : (i.price || 0);
    const qty = i.qty || 1;
    return name + ' x' + qty + ' = ' + fmtMoney(price * qty);
  }).join('\n');

  const agent = order.deliveryAgent || {};
  const address = [order.address, order.city, order.region].filter(Boolean).join(', ');

  return {
    to_email: order.email || '',
    to_name: order.customerName || 'Valued Customer',
    order_number: order.orderNumber || ('#' + order.id),
    tracking_number: order.trackingNumber || 'N/A',
    order_date: order.date || '',
    delivery_date: order.estimatedDelivery || 'To be confirmed',
    delivery_agent: agent.name || 'To be assigned',
    agent_phone: agent.phone || '',
    agent_vehicle: agent.vehicle || '',
    agent_region: agent.region || '',
    items_list: itemList || 'No items',
    order_total: fmtMoney(order.total || 0),
    shipping_address: address || 'N/A',
    customer_phone: order.phone || 'N/A',
    payment_method: order.paymentMethod || 'N/A',
  };
}

// Send the initial order confirmation email when an order is placed.
function sendOrderEmail(order) {
  if (!order || !order.email) {
    console.warn('[EmailJS] No customer email on order — skipping.');
    return Promise.resolve({ status: 'skipped' });
  }
  if (typeof emailjs === 'undefined') {
    console.warn('[EmailJS] SDK not loaded — skipping.');
    return Promise.resolve({ status: 'skipped' });
  }
  const params = buildEmailParams(order);
  params.status_message = 'Your order has been received and is now being processed. Thank you for shopping with AgriMarket!';
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateOrderConfirmation,
    params,
    EMAILJS_CONFIG.publicKey
  );
}

// ---- Order status update emails ----
// Sent whenever an admin changes the order status (Processing, Shipped, Delivered, Cancelled, etc.)
const STATUS_MESSAGES = {
  'Pending':    'Your order has been received and is awaiting processing.',
  'Processing': 'Your order is now being prepared and will be shipped soon.',
  'Shipped':    'Great news! Your order has been shipped and is on its way to you.',
  'Delivered':  'Your order has been delivered. Thank you for shopping with AgriMarket!',
  'Cancelled':  'Your order has been cancelled. If you did not request this, please contact our support team immediately.',
};

function sendOrderStatusEmail(order, newStatus) {
  if (!order || !order.email) {
    console.warn('[EmailJS] No customer email on order — skipping status email.');
    return Promise.resolve({ status: 'skipped' });
  }
  if (typeof emailjs === 'undefined') {
    console.warn('[EmailJS] SDK not loaded — skipping status email.');
    return Promise.resolve({ status: 'skipped' });
  }
  const params = buildEmailParams(order);
  params.status_message = STATUS_MESSAGES[newStatus] || 'Your order status has been updated to: ' + newStatus;
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateStatusUpdate,
    params,
    EMAILJS_CONFIG.publicKey
  );
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

// Shared sidebar + auth for Buyer dashboard pages
function initBuyerPage(activeHref, pageTitle, pageContent) {
  requireAuth();
  const user = Auth.get();

  const buyerNav = [
    { section: 'Main', items: [
      { href: '/pages/buyer-dashboard.html', label: 'Dashboard', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
      { href: '/pages/marketplace.html', label: 'Marketplace', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>' },
    ]},
    { section: 'Shopping', items: [
      { href: '/pages/orders.html', label: 'My Orders', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' },
      { href: '/pages/purchases.html', label: 'Purchases', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/></svg>' },
      { href: '/pages/order-tracking.html', label: 'Track Order', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' },
    ]},
    { section: 'Account', items: [
      { href: '/pages/notifications.html', label: 'Notifications', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>' },
      { href: '/pages/profile.html', label: 'Profile', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
      { href: '#', label: 'Logout', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>', onclick: 'logout()' },
    ]},
  ];

  document.getElementById('app').innerHTML = `
    ${buildNavbar('')}
    <div class="dash-layout">
      <div class="dash-overlay" id="dashOverlay" onclick="document.getElementById('sidebar').classList.remove('open');this.classList.remove('show')"></div>
      <aside class="dash-sidebar" id="sidebar">
        <div class="logo"><svg viewBox="0 0 32 32" width="24" height="24"><circle cx="16" cy="16" r="16" fill="#1a7a3e"/><path d="M16 7c-4 4-6 8-6 11a6 6 0 0012 0c0-3-2-7-6-11z" fill="#fff"/></svg> Buyer Panel</div>
        <div class="dash-nav">${dashNav(buyerNav, activeHref)}</div>
      </aside>
      <main class="dash-main">
        <div class="dash-topbar">
          <div class="flex items-center gap-2">
            <button class="dash-toggle" onclick="document.getElementById('sidebar').classList.add('open');document.getElementById('dashOverlay').classList.add('show')">☰</button>
            <h1>${pageTitle}</h1>
          </div>
          <div class="flex items-center gap-2">
            <div class="avatar" style="background:var(--accent-100);color:var(--accent-700);overflow:hidden">${user.avatar ? '<img src="'+user.avatar+'" style="width:100%;height:100%;object-fit:cover" />' : user.name.charAt(0)}</div>
          </div>
        </div>
        ${pageContent}
      </main>
    </div>
  `;
}

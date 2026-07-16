// Shared sidebar + auth for Farmer dashboard pages
function initFarmerPage(activeHref, pageTitle, pageContent) {
  requireAuth('Farmer');
  const user = Auth.get();

  const farmerNav = [
    { section: 'Main', items: [
      { href: '/pages/farmer-dashboard.html', label: 'Dashboard', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
      { href: '/pages/marketplace.html', label: 'Marketplace', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>' },
    ]},
    { section: 'Farm Management', items: [
      { href: '/pages/crop-management.html', label: 'Crop Management', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' },
      { href: '/pages/livestock-management.html', label: 'Livestock', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>' },
      { href: '/pages/inventory.html', label: 'Inventory', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>' },
    ]},
    { section: 'Finance', items: [
      { href: '/pages/expenses-income.html', label: 'Expenses & Income', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>' },
      { href: '/pages/reports-analytics.html', label: 'Reports', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>' },
    ]},
    { section: 'Account', items: [
      { href: '/pages/profile.html', label: 'Profile', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
      { href: '#', label: 'Logout', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>', onclick: 'logout()' },
    ]},
  ];

  document.getElementById('app').innerHTML = `
    ${buildNavbar('')}
    <div class="dash-layout">
      <div class="dash-overlay" id="dashOverlay" onclick="document.getElementById('sidebar').classList.remove('open');this.classList.remove('show')"></div>
      <aside class="dash-sidebar" id="sidebar">
        <div class="logo"><svg viewBox="0 0 32 32" width="24" height="24"><circle cx="16" cy="16" r="16" fill="#1a7a3e"/><path d="M16 7c-4 4-6 8-6 11a6 6 0 0012 0c0-3-2-7-6-11z" fill="#fff"/></svg> Farmer Panel</div>
        <div class="dash-nav">${dashNav(farmerNav, activeHref)}</div>
      </aside>
      <main class="dash-main">
        <div class="dash-topbar">
          <div class="flex items-center gap-2">
            <button class="dash-toggle" onclick="document.getElementById('sidebar').classList.add('open');document.getElementById('dashOverlay').classList.add('show')">☰</button>
            <h1>${pageTitle}</h1>
          </div>
          <div class="flex items-center gap-2">
            <div class="avatar" style="background:var(--primary-100);color:var(--primary-700);overflow:hidden">${user.avatar ? '<img src="'+user.avatar+'" style="width:100%;height:100%;object-fit:cover" />' : user.name.charAt(0)}</div>
          </div>
        </div>
        ${pageContent}
      </main>
    </div>
  `;
}

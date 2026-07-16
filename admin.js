// Shared sidebar + auth for Admin dashboard pages
function initAdminPage(activeHref, pageTitle, pageContent) {
  if (!requireAuth('Admin')) return;
  const user = Auth.get();

  const adminNav = [
    { section: 'Main', items: [
      { href: '/pages/admin-dashboard.html', label: 'Overview', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
      { href: '/pages/marketplace.html', label: 'Marketplace', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>' },
    ]},
    { section: 'Management', items: [
      { href: '/pages/manage-users.html', label: 'Manage Users', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>' },
      { href: '/pages/manage-products.html', label: 'Manage Products', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>' },
      { href: '/pages/manage-orders.html', label: 'Manage Orders', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' },
    ]},
    { section: 'Insights', items: [
      { href: '/pages/admin-reports.html', label: 'Reports', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>' },
      { href: '/pages/admin-settings.html', label: 'Settings', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>' },
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
        <div class="logo"><svg viewBox="0 0 32 32" width="24" height="24"><circle cx="16" cy="16" r="16" fill="#1a7a3e"/><path d="M16 7c-4 4-6 8-6 11a6 6 0 0012 0c0-3-2-7-6-11z" fill="#fff"/></svg> Admin Panel</div>
        <div class="dash-nav">${dashNav(adminNav, activeHref)}</div>
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

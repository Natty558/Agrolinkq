# AgriMarket Ghana

An online agricultural marketplace connecting farmers, wholesalers, retailers, factories, and consumers across Ghana. Built as a multi-role single-page application with Vite, featuring role-based dashboards, a product marketplace, cart and checkout flow, farm management tools, and an admin panel.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [User Roles](#user-roles)
- [Pages Reference](#pages-reference)
- [Core Utilities (main.js)](#core-utilities-mainjs)
- [Styling & Design System](#styling--design-system)
- [Data Storage](#data-storage)
- [Getting Started](#getting-started)
- [Build & Deploy](#build--deploy)
- [Demo Accounts](#demo-accounts)
- [License](#license)

---

## Overview

AgriMarket Ghana is a front-end web application that simulates an end-to-end agricultural value chain platform. Users register under one of five roles (Farmer, Wholesaler, Retailer, Factory, Consumer) and are routed to a role-specific dashboard. The app covers the full journey: product discovery, cart, checkout, order tracking, farm management (crops, livestock, inventory), financial tracking (expenses, income, reports), and platform administration (user management, product moderation, order oversight, settings).

All data is stored client-side in `localStorage`, making the app fully functional without a backend server. Product images are sourced from Pexels via URL construction.

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Build tool  | Vite 5.4                            |
| Language    | HTML, CSS, vanilla JavaScript (ES modules) |
| Fonts       | Inter (body), Poppins (headings) — via Google Fonts |
| Images      | Pexels photo API (URL-based)        |
| Data store  | Browser `localStorage`             |
| Icons       | Inline SVG (Feather-style)          |

No frameworks (React, Vue, etc.) are used. All interactivity is plain DOM manipulation with template literals.

---

## Project Structure

```
Agrolinka/
├── index.html              # Landing page (hero, featured products, roles, CTA)
├── main.js                 # Shared utilities (products, auth, cart, store, layout)
├── style.css               # Full design system (CSS variables, components, layouts)
├── farmer.js               # Farmer dashboard sidebar layout builder
├── buyer.js                # Buyer dashboard sidebar layout builder
├── admin.js                # Admin dashboard sidebar layout builder
├── vite.config.js          # Vite build config (multi-page input list)
├── package.json            # Project metadata & scripts
├── public/
│   └── (static assets)
└── pages/
    ├── about.html          # About page
    ├── contact.html        # Contact form
    ├── faq.html            # FAQ accordion
    ├── register.html       # Multi-step registration with role selection
    ├── login.html          # Login with demo accounts
    ├── marketplace.html    # Product listing with search, filter, sort
    ├── product-details.html # Single product view + add to cart
    ├── cart.html           # Shopping cart
    ├── checkout.html       # Checkout flow
    ├── farmer-dashboard.html
    ├── crop-management.html
    ├── livestock-management.html
    ├── inventory.html
    ├── expenses-income.html
    ├── reports-analytics.html
    ├── buyer-dashboard.html
    ├── orders.html
    ├── purchases.html
    ├── order-tracking.html
    ├── notifications.html
    ├── profile.html
    ├── admin-dashboard.html
    ├── manage-users.html
    ├── manage-products.html
    ├── manage-orders.html
    ├── admin-reports.html
    └── admin-settings.html
```

---

## Features

### Public (No Login Required)

- **Landing page** — Hero banner, featured products carousel, "How It Works" steps, role showcase, call-to-action
- **Marketplace** — Browse all products with live search, category filter chips, and sorting (price, rating, name)
- **Product details** — Full product view with image, description, seller info, rating, quantity selector, and add-to-cart
- **About / Contact / FAQ** — Informational pages with contact form and accordion FAQ

### Authentication

- **Registration** — Two-step flow: (1) select role from visual cards, (2) fill form with name, email, phone, business name, region (all 16 Ghana regions), and password
- **Login** — Email/password login with quick demo buttons for Farmer, Buyer, and Admin
- **Auth guard** — `requireAuth()` redirects unauthenticated users to login

### Buyer Experience

- **Dashboard** — Overview stats, recent orders, recommended products
- **Marketplace access** — Search, filter, sort, and add products to cart
- **Cart** — Adjust quantities, remove items, view subtotal
- **Checkout** — Delivery details form, order summary, place order
- **Orders** — View order history with status badges
- **Purchases** — Track purchase records
- **Order tracking** — Visual step tracker (Placed → Confirmed → Shipped → Delivered)
- **Notifications** — Notification feed with type-based icons (success, warning, info, error)
- **Profile** — View and edit account information

### Farmer Experience

- **Dashboard** — Stat cards (crops, livestock, inventory, revenue), quick action buttons, recent activity
- **Crop management** — Add/edit/delete crop records with fields for type, area, planting date, harvest date, status, and photo upload
- **Livestock management** — Track livestock entries with type, count, breed, health status, and photo
- **Inventory** — Manage stock items with quantity, unit price, low-stock alerts, and image upload
- **Expenses & Income** — Record financial transactions with category, amount, date, and description; view summary totals
- **Reports & Analytics** — Visual charts (bar chart for revenue, donut for expense breakdown), key metrics
- **Profile** — Shared profile page

### Admin Experience

- **Dashboard** — Platform-wide stats (total users, products, orders, revenue), recent activity
- **Manage users** — Table view of all registered users with role, region, status; ability to edit/delete
- **Manage products** — Oversee all marketplace products; edit or remove listings
- **Manage orders** — View and update order statuses across the platform
- **Reports** — Platform analytics with charts and exportable summaries
- **Settings** — Tabbed settings panel (General, Payments, Notifications, Security)

---

## User Roles

| Role        | Dashboard            | Key Capabilities                                      |
|-------------|----------------------|-------------------------------------------------------|
| Farmer      | Farmer Panel         | List products, manage crops/livestock/inventory, track finances, view reports |
| Wholesaler  | Buyer Panel          | Browse marketplace, buy in bulk, track orders         |
| Retailer    | Buyer Panel          | Source produce, manage orders, track deliveries       |
| Factory     | Buyer Panel          | Procure raw materials, order tracking                  |
| Consumer    | Buyer Panel          | Buy fresh produce, cart, checkout, track orders        |
| Admin       | Admin Panel          | Manage users, products, orders; view platform reports; configure settings |

Role selection happens at registration. Wholesaler, Retailer, Factory, and Consumer all route to the Buyer dashboard but retain their role label in the user profile.

---

## Pages Reference

| Page                        | Auth Required | Role         | Description                              |
|-----------------------------|:---:|--------------|------------------------------------------|
| `index.html`                | No  | —            | Landing page                             |
| `marketplace.html`          | No  | —            | Product browsing                         |
| `product-details.html`      | No  | —            | Single product view                      |
| `about.html`                | No  | —            | About AgriMarket                         |
| `contact.html`              | No  | —            | Contact form                             |
| `faq.html`                  | No  | —            | Frequently asked questions               |
| `register.html`             | No  | —            | Create account                           |
| `login.html`                | No  | —            | Log in / demo login                      |
| `cart.html`                 | No  | —            | Shopping cart                            |
| `checkout.html`             | No  | —            | Checkout flow                            |
| `farmer-dashboard.html`     | Yes | Farmer       | Farmer overview                          |
| `crop-management.html`      | Yes | Farmer       | Crop CRUD                                |
| `livestock-management.html` | Yes | Farmer       | Livestock CRUD                           |
| `inventory.html`            | Yes | Farmer       | Inventory management                     |
| `expenses-income.html`      | Yes | Farmer       | Financial tracking                       |
| `reports-analytics.html`    | Yes | Farmer       | Farm-level analytics                     |
| `buyer-dashboard.html`      | Yes | Buyer*       | Buyer overview                           |
| `orders.html`               | Yes | Buyer*       | Order history                            |
| `purchases.html`            | Yes | Buyer*       | Purchase records                         |
| `order-tracking.html`       | Yes | Buyer*       | Delivery tracker                         |
| `notifications.html`        | Yes | Buyer*       | Notification feed                        |
| `profile.html`              | Yes | All          | Account settings                         |
| `admin-dashboard.html`      | Yes | Admin        | Platform overview                        |
| `manage-users.html`         | Yes | Admin        | User management                           |
| `manage-products.html`      | Yes | Admin        | Product moderation                       |
| `manage-orders.html`        | Yes | Admin        | Order management                          |
| `admin-reports.html`        | Yes | Admin        | Platform reports                         |
| `admin-settings.html`       | Yes | Admin        | System settings                           |

\* Buyer dashboard serves Wholesaler, Retailer, Factory, and Consumer roles.

---

## Core Utilities (main.js)

### `PEXELS(id, w, h)`
Constructs a Pexels image URL from a photo ID with specified dimensions. Used for all product images.

### `PRODUCTS`
Static array of 12 marketplace products. Each product has: `id`, `name`, `category`, `price` (in GHS), `unit`, `stock`, `seller`, `rating`, `img` (Pexels photo ID), and `desc`.

### `CATEGORIES`
`['Vegetables', 'Grains', 'Poultry', 'Dairy', 'Fruits', 'Tubers', 'Specialty']`

### `Store`
localStorage wrapper with getters/setters for: `crops`, `livestock`, `inventory`, `expenses`, `income`, `orders`, `notifications`, `users`. Each entity is stored as a JSON array under the `agri_*` key prefix.

### `Auth`
- `Auth.get()` — Returns current user object (or guest default)
- `Auth.set(user)` — Stores user session
- `Auth.clear()` — Logs out
- `Auth.isLoggedIn()` — Boolean check

### `Cart`
- `Cart.add(id, qty)` — Add product to cart (increments if exists)
- `Cart.update(id, qty)` — Set quantity
- `Cart.remove(id)` — Remove item
- `Cart.clear()` — Empty cart
- `Cart.count()` — Total item count (for navbar badge)

### `fmtMoney(n)`
Formats numbers as Ghana Cedi (GH₵) with locale formatting.

### `stars(rating)`
Returns a string of filled/hollow star characters (★/☆) for a 0–5 rating.

### `toast(msg)`
Creates a fixed-position toast notification at the bottom-right. Auto-dismisses after 3 seconds.

### `requireAuth()`
Checks login status. If not logged in, shows a toast and redirects to login page. Returns `true`/`false`.

### `mountLayout(active)`
Injects the navbar (with active link highlighting and cart badge) and footer into `#nav` and `#footer` placeholders. Called on every public page.

### `buildNavbar(active)` / `buildFooter()`
Generate the shared navbar and footer HTML. Navbar includes logo, navigation links, cart icon with badge, and a context-aware CTA button (Dashboard if logged in, Get Started if not).

### `dashNav(navItems, activeHref)`
Builds the sidebar navigation for dashboard pages. Takes an array of sections, each containing items with `href`, `label`, and `icon` (SVG string). Highlights the active page.

### `emptyState(title, msg, link, linkText)`
Returns a styled empty-state placeholder for when lists/grids have no content.

---

## Styling & Design System

All styles live in `style.css` as a single file using CSS custom properties (variables).

### Color System

| Ramp      | Usage                        | Example Tokens                          |
|-----------|------------------------------|----------------------------------------|
| Primary   | Green — brand, buttons, nav  | `--primary-50` to `--primary-900`      |
| Accent    | Gold — CTAs, highlights       | `--accent-50` to `--accent-700`       |
| Success   | Green — positive states       | `--success-50`, `--success-500/600`    |
| Warning   | Amber — caution states        | `--warning-50`, `--warning-500/600`    |
| Error     | Red — destructive actions    | `--error-50`, `--error-500/600`        |
| Neutral   | Gray — text, borders, bg      | `--neutral-50` to `--neutral-900`      |

### Typography

- **Body font:** Inter (400, 500, 600, 700)
- **Heading font:** Poppins (600, 700)
- Body line-height: 1.5 | Heading line-height: 1.2

### Spacing

8px-based spacing system with utility classes: `.mt-1` (0.5rem), `.mt-2` (1rem), `.mt-3` (1.5rem), `.mb-1` through `.mb-4`, `.gap-1` through `.gap-3`.

### Component Classes

- **Buttons:** `.btn`, `.btn-primary`, `.btn-accent`, `.btn-outline`, `.btn-ghost`, `.btn-danger`, `.btn-lg`, `.btn-sm`, `.btn-block`
- **Cards:** `.card`, `.card-hover` (lift on hover)
- **Grid:** `.grid`, `.grid-2`, `.grid-3`, `.grid-4` (responsive collapse at 900px and 600px)
- **Badges:** `.badge`, `.badge-primary`, `.badge-accent`, `.badge-success`, `.badge-warning`, `.badge-error`, `.badge-neutral`
- **Forms:** `.form-group`, `.form-row` (two-column, collapses on mobile)
- **Tables:** Standard `<table>` with hover row highlighting
- **Modal:** `.modal-overlay` / `.modal` with `.show` toggle
- **Dashboard layout:** `.dash-layout`, `.dash-sidebar`, `.dash-main`, `.dash-topbar`, `.dash-toggle` (sidebar slides off on mobile)
- **Charts:** `.bar-chart`, `.bar-col`, `.bar`, `.donut`, `.donut-center` (CSS-only, no chart library)
- **Tabs:** `.tabs`, `.tab`, `.tab.active`
- **Chips:** `.chips`, `.chip`, `.chip.active`
- **Notifications:** `.notif-item`, `.notif-icon`, `.notif-item.unread`
- **Tracker:** `.tracker`, `.tracker-step`, `.dot` (with `.done` / `.current` states)
- **Image upload:** `.img-upload-area`, `.img-preview-grid`

### Responsive Breakpoints

| Breakpoint | Behavior                                              |
|------------|-------------------------------------------------------|
| > 900px    | Full multi-column grids, sidebar visible              |
| ≤ 900px    | Grids collapse to 2 columns, sidebar slides off        |
| ≤ 768px    | Hamburger menu activates, hero text scales down       |
| ≤ 600px    | All grids single column, form rows stack               |

---

## Data Storage

All data persists in the browser's `localStorage`. No backend or database is used.

| Key                  | Entity         | Shape                                           |
|----------------------|----------------|-------------------------------------------------|
| `agrimarket_user`    | Current session| `{ id, name, email, role, region }`             |
| `agrimarket_cart`    | Shopping cart  | `[{ id, qty }]`                                 |
| `agri_users`         | Registered users| `[{ id, name, email, phone, business, region, role, password, createdAt }]` |
| `agri_crops`         | Crops          | `[{ id, type, area, planted, harvest, status, img }]` |
| `agri_livestock`     | Livestock      | `[{ id, type, count, breed, health, img }]`     |
| `agri_inventory`     | Inventory      | `[{ id, name, qty, unit, price, img }]`         |
| `agri_expenses`      | Expenses       | `[{ id, category, amount, date, desc }]`        |
| `agri_income`        | Income         | `[{ id, source, amount, date, desc }]`          |
| `agri_orders`        | Orders         | `[{ id, items, total, status, date, address }]` |
| `agri_notifications` | Notifications  | `[{ id, type, title, msg, date, read }]`        |

---

## Getting Started

### Prerequisites

- Node.js 18+ (for Vite)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Build

```bash
npm run build
```

Outputs to `dist/`. Vite is configured with multi-page input — all 27 pages are bundled as separate HTML files with shared assets.

### Preview Build

```bash
npm run preview
```

Serves the built `dist/` folder locally.

---

## Build & Deploy

The `vite.config.js` defines all 27 HTML pages as entry points, ensuring every page is included in the production build. The output in `dist/` is static and can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.).

The `base` is set to `/`, so the site should be served from the root of the deployment domain.

---

## Demo Accounts

The login page provides one-click demo login buttons:

| Button  | Name           | Role        | Email           | Dashboard              |
|---------|----------------|-------------|-----------------|------------------------|
| Farmer  | Kofi Mensah    | Farmer      | kofi@demo.gh    | Farmer Panel           |
| Buyer   | Ama Serwaa     | Wholesaler  | ama@demo.gh     | Buyer Panel            |
| Admin   | Admin User     | Admin       | admin@demo.gh   | Admin Panel            |

Demo logins bypass password validation and set the session directly.

---

## License

This project is open-source. See the repository for licensing details.

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        faq: resolve(__dirname, 'pages/faq.html'),
        register: resolve(__dirname, 'pages/register.html'),
        login: resolve(__dirname, 'pages/login.html'),
        marketplace: resolve(__dirname, 'pages/marketplace.html'),
        productDetails: resolve(__dirname, 'pages/product-details.html'),
        cart: resolve(__dirname, 'pages/cart.html'),
        checkout: resolve(__dirname, 'pages/checkout.html'),
        farmerDashboard: resolve(__dirname, 'pages/farmer-dashboard.html'),
        cropManagement: resolve(__dirname, 'pages/crop-management.html'),
        livestockManagement: resolve(__dirname, 'pages/livestock-management.html'),
        inventory: resolve(__dirname, 'pages/inventory.html'),
        expensesIncome: resolve(__dirname, 'pages/expenses-income.html'),
        reportsAnalytics: resolve(__dirname, 'pages/reports-analytics.html'),
        buyerDashboard: resolve(__dirname, 'pages/buyer-dashboard.html'),
        orders: resolve(__dirname, 'pages/orders.html'),
        purchases: resolve(__dirname, 'pages/purchases.html'),
        orderTracking: resolve(__dirname, 'pages/order-tracking.html'),
        orderConfirmation: resolve(__dirname, 'pages/order-confirmation.html'),
        notifications: resolve(__dirname, 'pages/notifications.html'),
        profile: resolve(__dirname, 'pages/profile.html'),
        adminDashboard: resolve(__dirname, 'pages/admin-dashboard.html'),
        manageUsers: resolve(__dirname, 'pages/manage-users.html'),
        manageProducts: resolve(__dirname, 'pages/manage-products.html'),
        manageOrders: resolve(__dirname, 'pages/manage-orders.html'),
        adminReports: resolve(__dirname, 'pages/admin-reports.html'),
        adminSettings: resolve(__dirname, 'pages/admin-settings.html'),
      },
    },
  },
});

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Mobile App System Config Guide',
  description: 'ERPNext backend configuration and troubleshooting guides for mobile app QA and Technical Support teams.',
  base: process.env.BASE || '/',
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Mobile Config Guide',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fixes', link: '/reference/troubleshooting-search-index.html' },
      { text: 'Roles', link: '/reference/role-permissions-reference.html' }
    ],
    sidebar: [
      {
        text: 'Getting Started & Auth',
        collapsed: false,
        items: [
          { text: 'API & Settings Access', link: '/getting-started/initial-api-authentication-setup.html' },
          { text: 'Login', link: '/getting-started/login-setup.html' },
          { text: 'Sign-Up Territories', link: '/getting-started/sign-up-territory-setup.html' }
        ]
      },
      {
        text: 'Products & Pricing',
        collapsed: false,
        items: [
          { text: 'Catalog, Pricing & Stock', link: '/products-pricing/product-catalog-pricing-stock-setup.html' },
          { text: 'Top Sold Items & Brands', link: '/products-pricing/home-screen-top-sold-items-and-brands-setup.html' }
        ]
      },
      {
        text: 'Offers & Loyalty',
        collapsed: false,
        items: [
          { text: 'Offers & Banners', link: '/offers-loyalty/promotional-offers-mobile-banners-setup.html' },
          { text: 'Points, Coupons & Loyalty Program', link: '/offers-loyalty/points-coupons-and-loyalty-program-setup.html' }
        ]
      },
      {
        text: 'Orders',
        collapsed: false,
        items: [
          { text: 'Checkout Requirements', link: '/orders/order-placement-and-minimum-order-requirements-setup.html' }
        ]
      },
      {
        text: 'Reference',
        collapsed: false,
        items: [
          { text: 'Troubleshooting Index', link: '/reference/troubleshooting-search-index.html' },
          { text: 'Role Permissions', link: '/reference/role-permissions-reference.html' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true
          }
        }
      }
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous guide',
      next: 'Next guide'
    },
    darkModeSwitchLabel: 'Theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Back to top',
    footer: {
      message: 'ERPNext mobile backend configuration guide for QA and Technical Support.'
    }
  }
})

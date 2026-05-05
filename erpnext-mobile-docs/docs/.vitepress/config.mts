import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Mobile App System Config Guide',
  description: 'ERPNext backend configuration and troubleshooting guides for mobile app QA and Technical Support teams.',
  base: process.env.BASE || '/',
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Mobile App System Config Guide',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Troubleshooting', link: '/reference/troubleshooting-search-index' },
      { text: 'Permissions', link: '/reference/role-permissions-reference' }
    ],
    sidebar: [
      {
        text: 'Getting Started & Authentication',
        collapsed: false,
        items: [
          { text: 'Initial App Launch & Settings Access', link: '/getting-started/initial-api-authentication-setup' },
          { text: 'Login Setup', link: '/getting-started/login-setup' },
          { text: 'Sign-Up Territory Setup', link: '/getting-started/sign-up-territory-setup' }
        ]
      },
      {
        text: 'Products & Pricing',
        collapsed: false,
        items: [
          { text: 'Catalog, Categories, Pricing & Stock', link: '/products-pricing/product-catalog-pricing-stock-setup' },
          { text: 'Home Screen Top Sold Items & Brands', link: '/products-pricing/home-screen-top-sold-items-and-brands-setup' }
        ]
      },
      {
        text: 'Offers & Loyalty',
        collapsed: false,
        items: [
          { text: 'Promotional Offers & Mobile Banners', link: '/offers-loyalty/promotional-offers-mobile-banners-setup' },
          { text: 'Points, Coupons & Loyalty Program', link: '/offers-loyalty/points-coupons-and-loyalty-program-setup' }
        ]
      },
      {
        text: 'Orders',
        collapsed: false,
        items: [
          { text: 'Order Placement & Minimum Requirements', link: '/orders/order-placement-and-minimum-order-requirements-setup' }
        ]
      },
      {
        text: 'Reference',
        collapsed: false,
        items: [
          { text: 'Troubleshooting Search Index', link: '/reference/troubleshooting-search-index' },
          { text: 'Role Permissions Reference', link: '/reference/role-permissions-reference' }
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
    footer: {
      message: 'ERPNext mobile backend configuration guide for QA and Technical Support.'
    }
  }
})

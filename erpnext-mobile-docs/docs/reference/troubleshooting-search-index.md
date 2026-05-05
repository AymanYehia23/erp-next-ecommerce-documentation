# Troubleshooting Search Index

Use this page as a quick search bridge for common QA and Technical Support error messages.

## Authentication and permissions

- **`403 Forbidden`**: check initial API authentication, saved API keys, mobile settings access, and role permissions.
- **`permission error`**: check guest and customer role permissions for the relevant ERPNext DocType.
- **`You do not have permission to access this resource`**: check Guest or Customer role read/write access.

Related guides:

- [Initial App Launch and Settings Access Setup](../getting-started/initial-api-authentication-setup)
- [Login Setup](../getting-started/login-setup)
- [Mobile App Role Permissions Reference](./role-permissions-reference)

## Login and sign-up

- **`account does not exist`**: confirm the ERPNext user mobile number matches the app login number.
- **`account is disabled`**: confirm the user is enabled and activated after sign-up.
- **empty city dropdown**: verify Guest access to Territory and active mobile territories.
- **empty area dropdown**: verify child territories are active and linked to the selected city.

Related guides:

- [Login Setup](../getting-started/login-setup)
- [Sign-Up Territory Setup Guide](../getting-started/sign-up-territory-setup)

## Catalog, offers, and orders

- **missing products**: check website item visibility, item category links, valid price list entries, and warehouse stock.
- **banner not showing**: check banner active dates, slider location, and offer linkage.
- **invalid coupon**: check coupon validity, redemption rules, and checkout eligibility.
- **`firebase_admin`**: check the backend Firebase Admin dependency used by order notification logic.
- **`Missing Required Fields`**: check custom mandatory Sales Order fields that the standard mobile app does not support.

Related guides:

- [Product Catalog, Categories, Pricing, and Stock Availability Setup](../products-pricing/product-catalog-pricing-stock-setup)
- [Promotional Offers and Mobile Banners Setup](../offers-loyalty/promotional-offers-mobile-banners-setup)
- [Points, Coupons, and Loyalty Program Setup](../offers-loyalty/points-coupons-and-loyalty-program-setup)
- [Order Placement and Minimum Order Requirements Setup](../orders/order-placement-and-minimum-order-requirements-setup)

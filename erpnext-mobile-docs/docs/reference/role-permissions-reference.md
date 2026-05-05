# Mobile App Role Permissions Reference

This document outlines the exact ERPNext document permissions required for the `Guest` and `Customer` roles to ensure the mobile application functions correctly.

---

## 1. Guest Role Permissions

The Guest role requires minimal access, primarily focused on reading catalog data and settings, with specific write access for guest-level actions (like wishlists or guest checkout invoices).

*   **Item**
    *   Permissions: Read, Export
*   **Item Category**
    *   Permissions: Read, Export
*   **Mobile Banner**
    *   Permissions: Read
*   **Mobile E-Commerce Settings**
    *   Permissions: Read, Export
*   **Territory**
    *   Permissions: Read, Export
*   **Website Item**
    *   Permissions: Read, Export
*   **Website Slideshow**
    *   Permissions: Read, Export

---

## 2. Customer Role Permissions

The Customer role requires broader access to interact with their own data, including profiles, carts, orders, and loyalty programs.

*   **Address**
    *   Permissions: Read, Write, Create, Export
*   **Cart**
    *   Permissions: Read, Write, Create, Delete, Export
*   **Coupon Code**
    *   Permissions: Read, Write
*   **Customer**
    *   Permissions: Read, Write, Create, Export
*   **Item Price**
    *   Permissions: Read
*   **Loyalty Point Log**
    *   Permissions: Read, Write, Create, Delete, Print, Email, Report, Export, Share
*   **Mobile Banner**
    *   Permissions: Read
*   **Notification Log**
    *   Permissions: Read, Write, Export
*   **Pricing Rule**
    *   Permissions: Read
*   **Push Notification Details**
    *   Permissions: Read, Write, Create, Export
*   **Sales Invoice**
    *   Permissions: Read
*   **Sales Order** 
    *   *Level 0 (Only If Creator):* Read, Write, Create, Export
*   **Territory**
    *   Permissions: Select, Read, Create, Print, Email, Report, Export, Share
*   **Wishlist**
    *   Permissions: Select, Read, Write, Create, Delete, Print, Email, Report, Export
*   **Sales Invoice**
    *   *Level 0 (Only If Creator):* Read, Export
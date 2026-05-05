# Home Screen Top Sold Items and Brands Setup

## Overview

This setup controls the dynamic **Most Sold Items** and **Brands** sections on the mobile app home screen. After setup, support teams can choose which product category feeds the Most Sold carousel and which parent category feeds the Brands carousel.

## ERPNext Setup Steps

1. **Log in as an Administrator**
   - Open the ERPNext admin dashboard.
   - Log in with a System Manager or Administrator account.

2. **Use the Mobile E-Commerce Control Panel if it is available**
   - Use the ERPNext search bar.
   - Search for **Mobile E-Commerce Control Panel** and open it.
   - If this page is available on the client's site, you can use it to manage these home screen sections faster.
   - From this page, create the Most Sold Items category.
   - Create the Brands parent category.
   - Create the brand subcategories under the Brands parent category.
   - Publish the categories and subcategories that should appear in the mobile app.
   - Assign or publish the Most Sold products under the correct Most Sold Items category.
   - Save your changes before testing in the mobile app.
   - If this page is not available, continue with the manual category and item steps below.

3. **Create the Most Sold Items category**
   - Use the ERPNext search bar.
   - Search for **Item Category List** and open it.
   - Click **New**.
   - Enter a clear category name for the Most Sold section, such as **Mobile Most Sold Items**.
   - If this category should sit under an existing product category, select that category in **Parent Item Category**.
   - Confirm the category is active.
   - Check **Show in Mobile Application**.
   - Click **Save**.
   - Copy or write down the exact category name exactly as it appears in ERPNext.

4. **Create the Brands parent category**
   - Go back to **Item Category List**.
   - Click **New**.
   - Enter a clear parent category name for brands, such as **Mobile Brands**.
   - Leave **Parent Item Category** empty unless the client specifically wants this Brands category under another parent category.
   - Confirm the category is active.
   - Check **Show in Mobile Application**.
   - Click **Save**.
   - Copy or write down the exact category name exactly as it appears in ERPNext.

5. **Connect the categories in Mobile E-Commerce Settings**
   - Use the ERPNext search bar.
   - Search for **Mobile E-Commerce Settings** and open it.
   - Locate the **Main settings** section.
   - In **Most sold items category**, enter the exact name of the Most Sold Items category created earlier.
   - In **Brand's parent category**, enter the exact name of the Brands parent category created earlier.
   - Check both names carefully for spelling, capitalization, and extra spaces.
   - Click **Save**.

6. **Add products to the Most Sold Items section**
   - Go to **Item List**.
   - Open an item that should appear in the **Most Sold Items** carousel.
   - Confirm the item is **Enabled**.
   - Assign the item to the Most Sold Items category created earlier.
   - Open the **Actions** drop-down.
   - Click **Publish in Website**.
   - Confirm the item has the normal mobile catalog setup required for visible products, including image, selling UOM, pricing, and available stock where applicable.
   - Click **Save** if ERPNext asks you to save changes.
   - Repeat these steps for every item that should appear in the Most Sold carousel.

7. **Add brand subcategories to the Brands section**
   - Go to **Item Category List**.
   - Click **New**.
   - Enter the brand name as the category name, such as **Brand A**.
   - In **Parent Item Category**, select the Brands parent category created earlier.
   - Confirm the category is active.
   - Check **Show in Mobile Application**.
   - Add or confirm the brand image if the client wants a logo or visual tile to appear in the app.
   - Click **Save**.
   - Repeat these steps for every brand that should appear in the Brands carousel.

8. **Test in the mobile app**
   - Fully close and reopen the mobile app.
   - Open the home screen.
   - The **Most Sold Items** section should appear when at least one active, published item is assigned to the selected Most Sold Items category.
   - The **Brands** section should appear when at least one active, mobile-visible subcategory exists under the selected Brands parent category.
   - Tap a Most Sold item and confirm the product details screen opens.
   - Tap a Brand and confirm the app opens the product list for that brand.

## Troubleshooting

1. **If the entire Most Sold Items or Brands section is missing from the home screen**
   - The category name in **Mobile E-Commerce Settings** may not perfectly match the name in **Item Category List**.
   - Open **Mobile E-Commerce Settings**.
   - Check **Most sold items category** and **Brand's parent category**.
   - Compare each value with the exact category name in **Item Category List**.
   - Correct any typo, capitalization difference, or extra space.
   - Click **Save**, then fully close and reopen the mobile app.

2. **If the Most Sold Items section is visible but empty**
   - The selected Most Sold Items category exists, but no visible products are assigned to it.
   - Go to **Item List**.
   - Open the expected items.
   - Confirm each item is enabled, published, and assigned to the selected Most Sold Items category.
   - Confirm the items also meet the normal product catalog requirements for the mobile app.

3. **If the Brands section is visible but empty**
   - The Brands parent category exists, but it has no visible brand subcategories inside it.
   - Go to **Item Category List**.
   - Create or open each brand category.
   - Confirm **Parent Item Category** is set to the Brands parent category selected in **Mobile E-Commerce Settings**.
   - Confirm each brand category is active and has **Show in Mobile Application** checked.

4. **If only some brands appear**
   - The missing brand categories may not be under the correct Brands parent category.
   - Open each missing brand in **Item Category List**.
   - Confirm **Parent Item Category** is exactly the Brands parent category.
   - Confirm **Show in Mobile Application** is checked.
   - Save the category and retest the mobile app.

5. **If a Most Sold product appears but cannot be used normally**
   - The product may be assigned to the correct category, but its standard catalog setup is incomplete.
   - Open the item in **Item List**.
   - Confirm the item is enabled, published, has a valid image, has a mobile-visible selling UOM, has a valid price, and has available stock if the client is testing with a logged-in customer.

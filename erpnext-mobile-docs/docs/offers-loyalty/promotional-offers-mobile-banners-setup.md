# Promotional Offers and Mobile Banners Setup

## Overview

This setup controls the promotional sliders that appear on the mobile app home screen and category pages.

When this setup is correct, testers will see active banners in the correct slider location, can tap banners to open the related offer products, and will see discount or free-item behavior when adding eligible products to the cart.

## ERPNext Setup Steps

1. **Log in as an Administrator**
   - Open the ERPNext admin dashboard.
   - Log in with a System Manager or Administrator account.

2. **Allow guests to read mobile banners**
   - Use the ERPNext search bar.
   - Search for `Role Permission Manager` and open it.
   - In the **Document Type** field, select `Mobile Banner`.
   - Find or add a row for the **Guest** role.
   - Check the **Read** box for the **Guest** role.
   - Click **Update** or **Save**.

3. **Allow customers to read mobile banners**
   - Stay in **Role Permission Manager**.
   - Confirm the **Document Type** field is still set to `Mobile Banner`.
   - Find or add a row for the **Customer** role.
   - Check the **Read** box for the **Customer** role.
   - Click **Update** or **Save**.

4. **Open the mobile e-commerce control panel**
   - Use the ERPNext search bar.
   - Search for `Mobile e-commerce control panel` and open it.
   - Go to the **Banners** section.
   - Click **Create banner**.
   - A banner configuration dialog should open.

5. **Fill the banner dates and status**
   - Set **Valid From** to today or an earlier date.
   - Set **Valid To** to today or a future date.
   - Make sure the current testing date falls between **Valid From** and **Valid To**.
   - Make sure the **Disabled** checkbox is **unchecked**.

6. **Fill the banner content**
   - Enter the banner **Title** in English.
   - Enter the banner **Title** in Arabic.
   - Enter the banner **Subtitle** in English.
   - Enter the banner **Subtitle** in Arabic.
   - Upload or select the banner image.
   - Select the **Subtitle Position**:
     - **Center** to show the subtitle centered when the offer screen is opened.
     - **Left** to show the subtitle on the left side when the offer screen is opened.
     - **Right** to show the subtitle on the right side when the offer screen is opened.

7. **Choose where the banner appears**
   - To show the banner in the top home screen slider, check **Show in top home page**.
   - To show the banner in the bottom home screen slider, check **Show in bottom home page**.
   - To show the banner on a category page, check **Show in main category**.
   - If you checked **Show in main category**, select the required item category in the category field.
   - Use the **Ranking** field to control the banner order in the slider.
   - Use a smaller ranking number for banners that should appear earlier.

8. **Create a normal banner**
   - In the banner type field, select **Normal**.
   - Go to the **Qualified Items** table.
   - Add the products that should open when the tester taps the banner.
   - Save the banner.
   - In the mobile app, the banner should appear in the selected slider location. When the tester taps it, the app should open the related products.

9. **Create a percentage discount banner**
   - In the banner type field, select **Discount**.
   - Enter the discount percentage in the **Discount** field.
   - Go to the **Qualified Items** table.
   - Add the products that receive the discount.
   - Save the banner.
   - In the mobile app, the banner should appear in the selected slider location. When the tester opens the banner products, eligible products should show and calculate with the configured discount.

10. **Create a buy X get Y free banner**
    - In the banner type field, select **Free items**.
    - Fill **Qty of qualified items**.
    - Fill **UOM of qualified items**.
    - Fill **Number of free items**.
    - Fill **UOM of free items**.
    - Go to the **Qualified Items** table.
    - Add the products the customer must buy.
    - Go to the **Free Items** table.
    - Add the products the customer can receive for free.
    - Save the banner.
    - In the mobile app, the banner should appear in the selected slider location. When the tester adds enough qualified products to the cart using the configured unit of measure, the app should show that free items are available.

11. **Test from the mobile app**
    - Fully close and reopen the mobile app.
    - Open the home screen.
    - Confirm the top and bottom home page banners appear in their selected locations.
    - Open the relevant category page.
    - Confirm category banners appear only on the selected category page.
    - Tap a banner that has products in the **Qualified Items** table.
    - Confirm the app opens the related offer products.
    - For discount offers, add a qualified product and confirm the discounted price is used.
    - For free-item offers, add enough qualified products and confirm the app shows the available free items.

## Troubleshooting

1. **If the banner is not showing on the home screen**
   - This usually means the banner is not active for the testing date or it was not placed on the home screen.
   - Open **Mobile e-commerce control panel**.
   - Go to the **Banners** section.
   - Open the banner.
   - Confirm the testing date is between **Valid From** and **Valid To**.
   - Confirm the **Disabled** checkbox is unchecked.
   - Confirm **Show in top home page** or **Show in bottom home page** is checked.
   - Save the banner.
   - Fully close and reopen the mobile app, then check the home screen again.

2. **If the banner is not showing on the category page**
   - This usually means the banner was not connected to the category being tested.
   - Open **Mobile e-commerce control panel**.
   - Go to the **Banners** section.
   - Open the banner.
   - Confirm **Show in main category** is checked.
   - Confirm the selected category exactly matches the category page opened in the mobile app.
   - Save the banner.
   - Fully close and reopen the mobile app, then open the category page again.

3. **If the banner is at the end of the list instead of the beginning**
   - This means the banner order needs to be adjusted.
   - Open **Mobile e-commerce control panel**.
   - Go to the **Banners** section.
   - Open the banner.
   - Lower the **Ranking** number for banners that should appear earlier.
   - Save the banner.
   - Fully close and reopen the mobile app, then check the slider again.

4. **If tapping the banner does nothing**
   - This usually means no products were added to the banner.
   - Open **Mobile e-commerce control panel**.
   - Go to the **Banners** section.
   - Open the banner.
   - Add at least one product to the **Qualified Items** table.
   - Save the banner.
   - Fully close and reopen the mobile app, then tap the banner again.

5. **If a discount offer does not reduce the product price**
   - This usually means the discount value or product list is incomplete.
   - Open **Mobile e-commerce control panel**.
   - Go to the **Banners** section.
   - Open the discount banner.
   - Confirm the banner type is **Discount**.
   - Confirm the **Discount** field has the correct percentage.
   - Confirm the product is listed in the **Qualified Items** table.
   - Save the banner.
   - Fully close and reopen the mobile app, then test the product again.

6. **If a free items offer is not calculating correctly in the app**
   - This usually means the required quantity or unit fields are missing, or the item tables are incomplete.
   - Open **Mobile e-commerce control panel**.
   - Go to the **Banners** section.
   - Open the free-items banner.
   - Confirm **Qty of qualified items** is filled.
   - Confirm **UOM of qualified items** is filled.
   - Confirm **Number of free items** is filled.
   - Confirm **UOM of free items** is filled.
   - Confirm the **Qualified Items** table contains the products the customer must buy.
   - Confirm the **Free Items** table contains the products the customer can receive for free.
   - Save the banner.
   - Fully close and reopen the mobile app, then test the offer again.

7. **If the banner appears, but some products are missing after tapping it**
   - This usually means the missing products are not available for the selected customer or setup.
   - Open the banner from the **Banners** section.
   - Confirm the missing products are listed in **Qualified Items**.
   - Confirm those products are enabled and available for sale in ERPNext.
   - Confirm the products have the required stock, price, and unit setup for this client.
   - Save any changes, then test again in the mobile app.

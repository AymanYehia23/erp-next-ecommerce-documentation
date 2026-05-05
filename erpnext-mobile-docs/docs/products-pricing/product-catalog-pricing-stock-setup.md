# Product Catalog, Categories, Pricing, and Stock Availability Setup

## Overview

This setup allows guests to browse visible product categories and catalog items in the mobile app. It also allows logged-in customers to see only the products that have a valid customer price and available quantity in the warehouse assigned to their territory.

## ERPNext Setup Steps

1. **Log in as an Administrator**
   - Open the ERPNext admin dashboard.
   - Log in with a System Manager or Administrator account.

2. **Grant Guest users catalog access**
   - Use the ERPNext search bar.
   - Search for **Role Permissions Manager** and open it.
   - For each document type below, add or confirm a row for the **Guest** role.
   - Check **Read** only.
   - Click **Save** after each document type is updated.

   Required Guest Read permissions:

   - **Item**
   - **Website Item**
   - **File**
   - **Item Category**

3. **Grant Customer users catalog, pricing, stock, and profile access**
   - Stay in **Role Permissions Manager**.
   - For each document type below, add or confirm a row for the **Customer** role.
   - Check **Read** only.
   - Click **Save** after each document type is updated.

   Required Customer Read permissions:

   - **Item**
   - **Website Item**
   - **File**
   - **Item Category**
   - **Item Price**
   - **Bin**
   - **Customer**

4. **Use the Mobile E-Commerce Control Panel if it is available**
   - Use the ERPNext search bar.
   - Search for **Mobile E-Commerce Control Panel** and open it.
   - If this page is available on the client's site, you can use it to manage catalog publishing faster.
   - From this page, create the required main categories.
   - Create the required subcategories under the correct main categories.
   - Publish the categories that should appear in the mobile app.
   - Publish the items that should appear in the mobile app.
   - Assign or publish the items under the correct categories.
   - Save your changes before testing in the mobile app.
   - If this page is not available, continue with the manual category and item steps below.

5. **Create or activate the product category**
   - Go to **Item Category List**.
   - Open the category that should appear in the mobile app.
   - Confirm the category is active and correctly named.
   - Check **Show in Mobile Application**.
   - If the category belongs under another category, confirm the parent category is selected correctly.
   - Click **Save**.

6. **Enable and publish the item**
   - Go to **Item List**.
   - Open the item that should appear in the mobile app.
   - Confirm the item is **Enabled**.
   - Confirm the item is assigned to the correct active **Item Category**.
   - Open the **Actions** drop-down.
   - Click **Publish in Website**.
   - Save the item if ERPNext asks you to save changes.

7. **Select at least one mobile-visible UOM**
   - Stay on the item document.
   - Scroll to the item's **UOMs** table.
   - Confirm at least one row exists.
   - In at least one UOM row, check **Show in Mobile Application**.
   - Confirm the UOM and conversion factor are correct for sales.
   - Click **Save**.

8. **Confirm the item image is public**
   - Stay on the item document.
   - Check the item image and the attachments area.
   - Open the uploaded image file.
   - Confirm the file is not marked as private.
   - If it is private, clear the private setting or upload the image again as a public file.
   - Save the file record and return to the item.

9. **Set the customer's price list and territory**
   - Go to **Customer List**.
   - Open the customer that is linked to the mobile user.
   - Confirm **Default Price List** is filled in.
   - Confirm **Territory** is selected.
   - Click **Save** if you make changes.

10. **Assign a warehouse to the customer's territory**
   - Go to **Territory List**.
   - Open the same territory selected on the customer document.
   - Find the warehouse field used for mobile stock availability.
   - Select the correct **Warehouse**.
   - Click **Save**.

11. **Create or confirm the item price**
    - Go to **Item Price List**.
    - Search for the item and the customer's default price list.
    - If a matching record exists, open it and confirm the price is correct.
    - If no matching record exists, click **New**.
    - Select the **Item**.
    - Select the same **Price List** used as the customer's Default Price List.
    - Enter the selling price.
    - Save the Item Price record.

12. **Confirm stock is available in the assigned warehouse**
    - Go to **Bin List**.
    - Filter by the item and the warehouse assigned to the customer's territory.
    - Confirm the actual quantity is greater than zero.
    - If the quantity is empty or zero, create a test stock entry:
      - Go to **Stock Entry List**.
      - Click **New**.
      - Choose a stock entry purpose suitable for adding test quantity, such as **Material Receipt**.
      - Add the item.
      - Select the assigned warehouse.
      - Enter the test quantity.
      - Save and submit the stock entry.
    - Return to **Bin List** and confirm the quantity is now available.

13. **Test in the mobile app**
    - Fully close and reopen the mobile app.
    - Without logging in, open the catalog.
    - Guest users should see the published categories and items with public images.
    - Log in as the customer.
    - Open the same category.
    - The customer should see items that have a valid price in their default price list and available quantity in the warehouse assigned to their territory.
    - Open an item details page and confirm the price, UOM, image, and availability appear correctly.

## Troubleshooting

1. **If items do not appear at all**
   - The item may not be published for website display.
   - Open the item, use **Actions**, and select **Publish in Website**.
   - The item may not be assigned to an active mobile category.
   - Open the category and confirm **Show in Mobile Application** is checked.
   - The item may not have any mobile-visible UOM.
   - Open the item's **UOMs** table and confirm at least one row has **Show in Mobile Application** checked.
   - The Guest or Customer role may be missing **Read** permission for catalog documents.

2. **If items appear for guests but disappear after customer login**
   - This usually means the customer-specific setup is incomplete.
   - Open the customer document and confirm **Territory** is selected.
   - Open the customer document and confirm **Default Price List** is filled in.
   - Open the selected territory and confirm a **Warehouse** is assigned.
   - Open **Item Price List** and confirm the item has a price for the customer's default price list.
   - Open **Bin List** and confirm the assigned warehouse has actual quantity greater than zero for the item.

3. **If the app shows an empty category after login**
   - The category may be correct, but no items inside it meet the customer rules.
   - Check each item in that category for a matching item price and positive stock in the customer's territory warehouse.
   - Also confirm the customer has a territory and that the territory has a warehouse.

4. **If the price is missing or appears as zero**
   - The item does not have a valid Item Price for the customer's Default Price List.
   - Open **Customer List**, confirm the customer's **Default Price List**.
   - Open **Item Price List**, create or correct the price record for that item and price list.
   - Save the record, then fully close and reopen the mobile app before testing again.

5. **If the image is missing or broken in the app**
   - Open the item in ERPNext.
   - Check the item's image and attachments.
   - Click the image link.
   - Confirm the image file actually opens in ERPNext.
   - Confirm the file is not marked as private.
   - If the file cannot be found, upload the image again.
   - If the file is private, make it public or replace it with a public upload.

6. **If the customer sees fewer products than expected**
   - The app only shows products that pass all customer checks.
   - Confirm every expected product is published, belongs to an active mobile category, has at least one mobile-visible UOM, has a matching item price, and has available quantity in the assigned warehouse.

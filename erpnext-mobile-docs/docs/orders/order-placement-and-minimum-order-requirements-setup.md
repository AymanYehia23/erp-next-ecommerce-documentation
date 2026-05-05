# Order Placement and Minimum Order Requirements Setup

## Overview

This setup allows logged-in customers to place orders successfully from the mobile app. It also controls whether the app blocks checkout until the cart reaches the client's required minimum order amount.

## ERPNext Setup Steps

1. **Log in as an Administrator**
   - Open the ERPNext admin dashboard.
   - Log in with a System Manager or Administrator account.

2. **Open Role Permission Manager**
   - Use the ERPNext search bar.
   - Search for **Role Permission Manager** and open it.

3. **Allow customers to create sales orders**
   - In the **Document Type** field, select **Sales Order**.
   - Find the row for the **Customer** role.
   - If there is no Customer row, add a new row and select **Customer** as the role.
   - Check **Read**.
   - Check **Write**.
   - Check **Create**.
   - Click **Update** or **Save**.

4. **Allow customers to read sales invoices**
   - Stay in **Role Permission Manager**.
   - In the **Document Type** field, select **Sales Invoice**.
   - Find or add the **Customer** role row.
   - Check **Read**.
   - Click **Update** or **Save**.

5. **Allow customers to read payment entries**
   - Stay in **Role Permission Manager**.
   - In the **Document Type** field, select **Payment Entry**.
   - Find or add the **Customer** role row.
   - Check **Read**.
   - Click **Update** or **Save**.

6. **Allow customers to manage addresses**
   - Stay in **Role Permission Manager**.
   - In the **Document Type** field, select **Address**.
   - Find or add the **Customer** role row.
   - Check **Read**.
   - Check **Write**.
   - Check **Create**.
   - Click **Update** or **Save**.

7. **Open Mobile E-Commerce Settings**
   - Use the ERPNext search bar.
   - Search for **Mobile E-Commerce Settings** and open it.

8. **Set the minimum order amount**
   - Locate the **Minimum order price** field.
   - Enter the minimum cart total required before customers can place an order.
   - If the client does not require a minimum order amount, leave the value as **0** or blank according to the site's setup.
   - Click **Save**.

9. **Confirm the logged-in customer has normal order prerequisites**
   - Go to **Customer List**.
   - Open the customer account used for testing.
   - Confirm the customer is active.
   - Confirm the customer has a valid **Customer Group** if the client uses customer groups.
   - Confirm the customer has a valid **Territory**.
   - Confirm the selected territory has the warehouse setup required by this client.
   - Confirm the customer has a valid selling price list if the client uses customer-specific price lists.
   - Save any changes.

10. **Confirm the customer has a usable address**
   - Go to **Address List**.
   - Open or create the delivery address for the testing customer.
   - Confirm the address is linked to the correct customer.
   - Confirm the required address fields are filled, especially city and delivery details required by the client's ERPNext setup.
   - Click **Save**.

11. **Test the order in the mobile app**
   - Fully close and reopen the mobile app.
   - Log in as the test customer.
   - Add products to the cart.
   - Open checkout.
   - Select or confirm the delivery address.
   - If a minimum order amount is configured and the cart total is below it, the app should show a minimum order message and the place order button should be disabled.
   - Add more products until the cart reaches the required amount.
   - Tap **Place Order**.
   - If the setup is correct, the app should show an order success message, clear the cart, and open the new order details screen.

## Troubleshooting

1. **If the app says the order failed because of Missing Required Fields**
   - This means this specific client's ERPNext system has custom mandatory fields on **Sales Order** that the standard mobile app does not support yet.
   - Do not try to fix this by changing random permission settings.
   - Record the exact missing field message shown during testing.
   - Report it to the implementation or app development team so the mobile app can be updated for this client.
   - In the mobile app, the tester will usually stay on the checkout screen and see a red error message instead of the success message and order details screen.

2. **If the exact error says ModuleNotFoundError: No module named 'firebase_admin'**
   - This has nothing to do with the mobile app checkout screen, customer permissions, or Mobile E-Commerce Settings.
   - It is a critical server configuration issue.
   - Stop testing immediately.
   - Escalate the issue to the backend development team.
   - Do not continue changing ERPNext UI settings to solve this error.

3. **If the place order button is disabled**
   - This usually means the cart total is still below the value in **Minimum order price**.
   - Open **Mobile E-Commerce Settings**.
   - Check the **Minimum order price** value.
   - In the mobile app, add more products until the total reaches this amount.
   - If the client does not want a minimum cart total, set **Minimum order price** to **0** or blank according to the site's setup, save, then fully close and reopen the app.

4. **If the customer cannot create an order at all**
   - This usually means the **Customer** role does not have the required Sales Order permissions.
   - Open **Role Permission Manager**.
   - Select **Sales Order**.
   - Confirm the **Customer** role has **Read**, **Write**, and **Create** checked.
   - Click **Update** or **Save**, then test again in the mobile app.

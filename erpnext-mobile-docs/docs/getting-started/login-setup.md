# Login Setup

## Overview

This setup allows customers to log in to the mobile app using their mobile number and password.

When this setup is correct, testers can enter a customer's mobile number on the login screen, tap **Login**, and continue into the app without account or activation errors.

## ERPNext Setup Steps

1. **Log in as an Administrator**
   - Open the ERPNext admin dashboard.
   - Log in with a System Manager or Administrator account.

2. **Allow login with mobile number**
   - Use the ERPNext search bar.
   - Search for `System Settings` and open it.
   - Scroll to the **Login** section.
   - Enable the checkbox **Allow Login using Mobile Number**.
   - Click **Save**.

3. **Confirm the customer user has a mobile number**
   - Use the ERPNext search bar.
   - Search for `User List` and open it.
   - Search for the customer user.
   - Open the user document.
   - Confirm the **Mobile No** field is filled in.
   - Confirm the mobile number exactly matches the number the tester will enter in the app.
   - Confirm the user is **Enabled**.
   - Click **Save** if you make any changes.

4. **Confirm the customer account is connected**
   - Use the ERPNext search bar.
   - Search for `Customer List` and open it.
   - Search for the customer.
   - Open the customer document.
   - Confirm the customer is connected to the correct user according to the client's ERPNext setup.
   - Save the customer document if you make any changes.
   - **Reminder:** If the ERPNext setup includes a **shopping-cart-orders** page, you can also connect the user to the customer directly through that page instead of manually editing the customer document.

5. **Test from the mobile app**
   - Fully close and reopen the mobile app.
   - Open the login screen.
   - Enter the customer's mobile number.
   - Enter the customer's password.
   - Tap **Login**.
   - The app should show normal loading briefly, then continue into the home screen.

## Troubleshooting

1. **If the app says the account does not exist even though the user is in ERPNext**
   - This can happen if the mobile number in ERPNext is missing or different from the number entered in the app.
   - Open **User List**.
   - Search for the customer user.
   - Confirm the **Mobile No** field exactly matches the number tested in the app.
   - Open **System Settings**.
   - In the **Login** section, confirm **Allow Login using Mobile Number** is enabled.

2. **If the app says the account is not activated**
   - This means the user exists, but the related customer record is missing or not connected correctly.
   - Open **Customer List**.
   - Search for the customer.
   - Open the customer document.
   - Confirm the customer has the correct linked portal user or contact information according to the client's ERPNext setup.

3. **If login keeps loading and then shows an error dialog**
   - This usually means the app could not read **Mobile E-Commerce Settings** before starting the login check.
   - Open **Mobile E-Commerce Settings** in ERPNext and confirm the document exists and is saved.
   - Ask the ERPNext administrator to verify that the **Guest** role has **Read** permission for this settings document.

4. **If the app shows “You do not have permission to access this resource” during login**
   - This means the stored keys in **Mobile E-Commerce Settings** belong to a user without enough permissions.
   - Open **User List**.
   - Open the **API User**.
   - Add **System Manager** in the **Roles** section.
   - Save the user.
   - Generate fresh keys if needed, then update **Mobile E-Commerce Settings** again.

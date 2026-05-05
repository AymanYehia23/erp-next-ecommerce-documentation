---
prev: false
next:
  text: Login
  link: /getting-started/login-setup.html
---

# Initial App Launch and Settings Access Setup

## Overview

This setup allows the mobile app to read its main mobile commerce settings when it opens, then store the system access keys needed by later app features.

When this setup is correct, testers can open the app and reach the login or sign-up screens without the first launch being blocked by missing settings or permission errors.

## ERPNext Setup Steps

1. **Log in as an Administrator**
   - Open the ERPNext admin dashboard.
   - Log in with a System Manager or Administrator account.

2. **Create or confirm the Guest role**
   - Use the search bar at the top of ERPNext.
   - Search for `Role List` and open it.
   - Search for a role named `Guest`.
   - If the role already exists, open it and confirm it is available.
   - If the role does not exist, click **New**.
   - Enter `Guest` as the role name.
   - Save the role.

3. **Make sure all users can act as Guest before login**
   - Use the search bar at the top of ERPNext.
   - Search for `Role Permission Manager` and open it.
   - Select **Mobile E-Commerce Settings**.
   - Add or confirm a permission row for the role **Guest**.
   - Check **Read** for the **Guest** role.
   - Save or update the permissions.
   - This allows the app to read **Mobile E-Commerce Settings** before the customer logs in.

4. **Create a dedicated API User**
   - Use the search bar at the top of ERPNext.
   - Search for `User List` and open it.
   - Click **New**.
   - Enter a clear email address for the user, such as `api.user@example.com`.
   - Enter a first name such as `API User`.
   - Make sure the user is **Enabled**.
   - Save the user.

5. **Give the API User admin permissions**
   - Stay on the new user's page.
   - Scroll to the **Roles** section.
   - Click **Add Row**.
   - Select **System Manager**.
   - If your company uses role-based restrictions for selling or customer documents, also add the roles normally used to manage customers and sales documents, such as **Sales Manager**.
   - Click **Save**.

6. **Generate the API User keys**
   - Stay on the same user document.
   - Scroll to the **Settings** section.
   - Find the **API Access** section.
   - Click **Generate Keys**.
   - ERPNext will show an **API Key** and **API Secret**.
   - Copy both values immediately and keep them temporarily in a secure place.
   - Do not share these values in chat, email, tickets, or screenshots.

7. **Open Mobile E-Commerce Settings**
   - Use the ERPNext search bar.
   - Search for `Mobile E-Commerce Settings`.
   - Open the document named **Mobile E-Commerce Settings**.
   - If ERPNext says the document does not exist, ask the ERPNext administrator to install or enable the mobile commerce custom app/module first.

8. **Paste the keys into Mobile E-Commerce Settings**
   - Scroll to the **API Settings** section.
   - Paste the copied **API Key** into the **API Key** field.
   - Paste the copied **API Secret** into the **API Secret** field.
   - Click **Save**.

9. **Confirm the settings document can be read by the app**
   - Stay on **Mobile E-Commerce Settings**.
   - Confirm the document is saved successfully.
   - Confirm the fields in the document are not empty, especially:
     - **API Key**
     - **API Secret**
   - Confirm the **Guest** role has **Read** permission for **Mobile E-Commerce Settings** in **Role Permission Manager**.

10. **Test the first app launch**
   - Fully close and reopen the mobile app.
   - Confirm the app opens normally and reaches the login or sign-up screens.
   - The app should not show a permission message or remain blocked on loading.

## Troubleshooting

1. **If the app shows a permission error during first launch**
   - This usually means the **API Key** and **API Secret** were not saved in **Mobile E-Commerce Settings**, or they were copied incorrectly.
   - Go back to **Mobile E-Commerce Settings > API Settings**.
   - Paste the keys again and click **Save**.
   - Fully close and reopen the app, then test again.

2. **If the app keeps loading and then shows an error dialog**
   - This usually means the app could not read **Mobile E-Commerce Settings** during first launch.
   - Open **Mobile E-Commerce Settings** in ERPNext and confirm the document exists and is saved.
   - Ask the ERPNext administrator to verify that the **Guest** role has **Read** permission for this settings document.

3. **If the app shows “You do not have permission to access this resource”**
   - This means the stored keys belong to a user without enough permissions.
   - Open **User List**.
   - Open the **API User**.
   - Add **System Manager** in the **Roles** section.
   - Save the user.
   - Generate fresh keys if needed, then update **Mobile E-Commerce Settings** again.

4. **If the app shows a general network or connection message**
   - This is usually not caused by the API keys.
   - Confirm the phone has internet access.
   - Confirm the ERPNext site is online in a browser.
   - Try again after the ERPNext site loads normally.

5. **If newly generated keys still do not work**
   - Confirm you copied the full **API Secret** immediately after generating it.
   - ERPNext may hide the secret later, so generate a new pair if there is any doubt.
   - Update both fields in **Mobile E-Commerce Settings** and click **Save**.
   - Fully close and reopen the app before retesting.

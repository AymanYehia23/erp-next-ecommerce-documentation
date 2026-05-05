# Sign-Up Territory Setup Guide

## Overview

This guide ensures that new users can browse and select their city and area during the mobile app's sign-up process. Without these steps, the location dropdowns will appear empty or block registration entirely.

---

## ERPNext Setup Steps

### 1. Grant Guest Users Access to Territories

The mobile app shows city and area lists to users who have not yet logged in. You must allow unregistered visitors to view the Territory records.

1. Log in to ERPNext as an Administrator.
2. Open the **Role Permissions Manager** (search for it in the awesome bar).
3. In the list, find the row for the **Territory** document type.
4. Click into that row to open the permission table.
5. Add or edit the row for the **Guest** role.
6. Check only the **Read** permission checkbox. Leave all other permissions unchecked.
7. Click **Save**.

> **Why this matters:** If Guest does not have Read access on Territory, the city and area dropdowns on the sign-up screen will load as blank lists, and the user will be unable to complete registration.

---

### 2. Mark Which Territories Are Active for the Mobile App

Not every territory in the ERPNext database should be selectable by a new mobile user. Each territory record has a flag that controls mobile visibility.

1. Go to the **Territory List** (Selling > Territory > Territory List).
2. Open the city or area record you want to activate.
3. In the territory form, scroll to the section that contains the **Covered in Mobile App** checkbox.
4. Check the box.
5. Click **Save**.

**Group vs. Non-Group territories:**

- **Cities** are the top-level **Group** territories (the "Is Group" checkbox is checked). These appear in the first dropdown labeled **City**.
- **Areas** are the child **Non-Group** territories (the "Is Group" checkbox is unchecked). These appear in the second dropdown labeled **Territory** after a city is chosen.


---

### 3. Confirm the Custom Backend Application Is Installed

The sign-up flow relies on backend logic that is not part of standard ERPNext. This logic is delivered through a custom ERPNext application.

1. From the ERPNext desk, open **Installed Applications** (search the awesome bar).
2. Look through the list for the company's custom app name.
3. If the custom app is **not listed**, it must be installed on the client's site before sign-up will work.

> If the app is listed but you still see errors, contact the development team. Do not attempt to modify server code or install bench apps yourself.

---

## After Sign-Up: Activating the New User

When a user successfully completes sign-up in the mobile app, a new **User** record is automatically created in ERPNext. However, this alone does not allow the user to log in.

### What the user will see

If the user tries to log in immediately after signing up, the app will display a message saying the account is **not activated yet**.

### How to activate the user

The user must be linked to a **Customer** record before they can log in. You can do this in two ways:

**Option A: Connect from the Customer document**

1. Go to the **Customer List** and open the relevant customer record.
2. Scroll to the **Portal Users** section.
3. Click **Add Row**.
4. Select the newly created user.
5. Click **Save**.

**Option B: Connect from the Shopping Cart Orders page**

1. Open the **Shopping Cart Orders** page in ERPNext.
2. Find the pending order from the new user.
3. Use the page controls to link the user to the customer record.

> For more details on login-related setup and troubleshooting, see the [Login Setup guide](./login-setup.html).

---

## Troubleshooting

**If the City or Territory dropdown shows an error message**

- The **Guest** role does not have **Read** permission on the **Territory** document (see Step 1).
- Return to the Role Permissions Manager, find the Territory row, and make sure Guest has Read access checked.

---

**If the City or Territory dropdown opens but shows an empty list**

- There are no Territory records created in ERPNext, or they are not configured correctly.
- For the **City** dropdown, ensure there are Territory records with **Is Group** checked.
- For the **Territory** dropdown, ensure the child records have the correct **Parent Territory** link to the selected city.

---

**If the user selects an area and the app immediately blocks the selection with a message saying the service is not available in that region**

- The **Covered in Mobile App** checkbox on that specific territory record is unchecked (see Step 2).
- Open the Territory document in ERPNext, check the box, and save.

---

**If the app throws an error that says "couldn't find module profile customer"**

- The company's **custom ERPNext application is either missing or misconfigured** on the server (see Step 3).
- Verify the custom app is listed under **Installed Applications**.
- If it is missing, the site was not provisioned with the correct backend package. Escalate to the development or DevOps team to reinstall the custom app on that client's site.

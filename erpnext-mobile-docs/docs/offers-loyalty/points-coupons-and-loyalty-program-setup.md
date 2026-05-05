# Points, Coupons, and Loyalty Program Setup

## Overview

This setup allows customers to see their loyalty points in the mobile app, convert available points into discount coupons, and apply those coupons during checkout. When configured correctly, the customer can redeem a voucher, see it in their available coupons, and receive the correct discount on the order total.

## ERPNext Setup Steps

1. **Log in as an Administrator**
   - Open the ERPNext admin dashboard.
   - Log in with a System Manager or Administrator account.

2. **Grant Customer access to loyalty and coupon records**
   - Use the ERPNext search bar.
   - Search for **Role Permissions Manager** and open it.
   - In the **Document Type** field, select **Loyalty Point Log**.
   - Add or confirm a row for the **Customer** role.
   - Check **Read** and **Write**.
   - Click **Save**.
   - Change the **Document Type** field to **Coupon Code**.
   - Add or confirm a row for the **Customer** role.
   - Check **Read** and **Write**.
   - Click **Save**.
   - Change the **Document Type** field to **Pricing Rule**.
   - Add or confirm a row for the **Customer** role.
   - Check **Read** only.
   - Click **Save**.

3. **Open Mobile E-Commerce Settings**
   - Use the ERPNext search bar.
   - Search for **Mobile E-Commerce Settings** and open it.
   - Open the **Loyalty Program Settings** tab.

4. **Fill the general loyalty settings**
   - In **Earning Percent (%)**, enter the percentage of the order value that should become points.
   - In **Point Value**, enter the money value of each point, according to the client's loyalty rules.
   - In **Voucher Validity Days**, enter how many days a generated voucher should remain usable.
   - In **Signup Bonus Points**, enter the number of points new customers should receive after signup.
   - In **Signup Pricing Rule**, select the Pricing Rule used for the signup voucher.
   - In **Signup Voucher Value**, enter the discount value for the signup voucher.
   - Click **Save** after filling these fields.

5. **Configure the Tiers table**
   - Stay in **Mobile E-Commerce Settings**.
   - In the **Loyalty Program Settings** tab, find the **Tiers** table.
   - Add one row for each point-to-voucher option that should appear in the mobile app.
   - In each row, select the correct **Pricing Rule**.
   - In **Voucher Value**, enter the discount amount the customer will receive.
   - In **Points Required**, enter how many points the customer must spend to generate that voucher.
   - Example: enter **1000** in **Points Required** and **100** in **Voucher Value** if 1000 points should generate a 100-value voucher.
   - Click **Save**.

6. **Create or open the Pricing Rule for each voucher tier**
   - Use the ERPNext search bar.
   - Search for **Pricing Rule List** and open it.
   - Open the Pricing Rule selected in the **Tiers** table, or click **New** to create one.
   - Enter a clear title, such as **Loyalty Voucher 100**.

7. **Set the required Pricing Rule checkboxes**
   - On the Pricing Rule document, check **Coupon Code Based**.
   - In the **Party Information** section, check **Selling**.
   - Confirm **Disabled** is unchecked.

8. **Set the required Pricing Rule discount options**
   - In **Apply On**, select **Transaction**.
   - In **Price or Product Discount**, select **Price**.
   - In **Valid From**, select a date on or before the testing date.
   - In **Valid Upto**, select a date on or after the testing date.
   - In **Discount Amount**, enter the exact discount amount for this voucher.
   - Click **Save**.

9. **Repeat the Pricing Rule setup for all tiers**
   - Return to **Mobile E-Commerce Settings**.
   - Review every row in the **Tiers** table.
   - Confirm each row points to a Pricing Rule that has the required settings above.
   - Save the settings again after any change.

10. **Verify generated coupons during testing**
    - Go to **Coupon Code List**.
    - After a customer converts points in the mobile app, search for that customer.
    - Confirm a new coupon exists for the customer.
    - Confirm the coupon has a valid **Valid From** and **Valid Upto** date.
    - Confirm the coupon is linked to the correct **Pricing Rule**.
    - Confirm the coupon is not marked as used before checkout.

11. **Test the full mobile flow**
    - Log in to the mobile app as the test customer.
    - Open the points or rewards screen.
    - Confirm the customer can see their points balance and available voucher tiers.
    - Convert enough points into a coupon.
    - Confirm the app shows a success message.
    - Open the coupons list and confirm the new coupon is visible.
    - Add products to the cart and continue to checkout.
    - Select the coupon.
    - Place the order.
    - Confirm the order total is reduced by the configured discount amount.

## Troubleshooting

- **If the app shows no available rewards**
  - Check **Mobile E-Commerce Settings**.
  - Open the **Loyalty Program Settings** tab.
  - Confirm the **Tiers** table is not empty.
  - Confirm each tier has a **Pricing Rule**, **Voucher Value**, and **Points Required**.
  - If the table is empty, the app has no voucher options to show.

- **If the customer cannot convert points to a coupon**
  - Check whether the customer has enough points for the selected tier.
  - Check whether the **Tiers** table is empty or misconfigured.
  - Confirm the selected tier has a valid **Pricing Rule**.
  - Confirm the **Customer** role has **Write** permission for **Loyalty Point Log** and **Coupon Code**.
  - In the app, the customer may see an insufficient points message or a failed redemption message.

- **If the coupon is generated but does not appear in the coupon list**
  - Go to **Coupon Code List**.
  - Open the generated coupon.
  - Confirm the coupon belongs to the same customer who is logged in to the mobile app.
  - Confirm **Valid From** is today or earlier.
  - Confirm **Valid Upto** is today or later.
  - Confirm the coupon is not marked as used.
  - In the app, the customer will see an empty coupon list or the coupon count will not increase.

- **If the coupon is generated but says invalid or does not apply a discount at checkout**
  - Immediately open the underlying **Pricing Rule**.
  - Confirm **Disabled** is unchecked.
  - Confirm **Valid From** and **Valid Upto** cover today.
  - Confirm **Apply On** is set to **Transaction**.
  - Confirm **Coupon Code Based** is checked.
  - Confirm **Price or Product Discount** is set to **Price**.
  - Confirm **Discount Amount** is filled with the correct value.
  - In the app, the customer may be able to select the coupon but the order total will not decrease correctly.

- **If the discount amount is wrong**
  - Open the **Pricing Rule** used by the coupon.
  - Check **Discount Amount**.
  - Return to **Mobile E-Commerce Settings** and compare it with the tier's **Voucher Value**.
  - Make both values match the client's intended voucher value.

- **If the coupon works once but appears again after checkout**
  - Go to **Coupon Code List**.
  - Open the coupon used in the order.
  - Confirm it is marked as used after checkout.
  - Confirm the **Customer** role has **Write** permission for **Coupon Code**.
  - If this is not configured, the customer may physically see the same coupon again even though it should no longer be available.

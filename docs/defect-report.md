# Defect Report

## DEF-001: Free shipping threshold mismatch

- Severity: High
- Priority: High
- Area: Checkout summary
- Type: Functional and business-rule defect

## Summary

The product badge and cart guidance tell users that free shipping starts at `$50`, but the checkout logic only grants free shipping when the subtotal reaches `$75`.

## Steps to Reproduce

1. Open the ShopSmart QA Demo app.
2. Add `Noise-Canceling Headphones` to the cart.
3. Add `Wireless Mouse` to the cart.
4. Observe the subtotal is `$55.00`.
5. Review the shipping amount and shipping message.

## Expected Result

- Shipping should become `$0.00`
- Message should confirm that free shipping is applied

## Actual Result

- Shipping remains `$7.99`
- Message still asks the user to add more value before free shipping

## Business Impact

- Misleading offer messaging can reduce customer trust
- Users may abandon checkout after seeing unexpected shipping costs
- Marketing or product teams may believe a promotion is active when engineering logic disagrees

## Suggested Fix

Align the application logic and UI copy to the same threshold value, then add a boundary regression test for the threshold amount.

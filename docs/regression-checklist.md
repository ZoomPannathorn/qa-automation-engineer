# Regression Checklist

## Smoke

- Application loads without console or network failures
- Product catalog renders successfully
- Valid user can sign in
- Invalid credentials show a clear error
- Cart subtotal updates after adding products
- Checkout remains blocked for signed-out users
- Checkout enables for signed-in users with cart items
- Health and product APIs return `200`

## Full Regression

- Verify all smoke scenarios
- Verify blank login payload returns `400`
- Verify token and user contract on successful login
- Verify shipping text matches the implemented shipping rule
- Verify free shipping threshold behavior at boundary values
- Verify subtotal and shipping values remain correct after multiple item additions
- Verify report artifacts remain readable for stakeholders

## Exit Criteria

- No open critical defects
- No blocked high-priority regression tests
- Smoke suite passes
- Known defects are documented and accepted by stakeholders

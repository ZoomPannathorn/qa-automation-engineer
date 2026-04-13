# Test Cases

## Scope

Application under test: `ShopSmart QA Demo`

Main coverage areas:

- authentication
- product browsing
- cart updates
- shipping business rules
- checkout readiness
- REST endpoint validation

## Core Functional Test Cases

| ID | Scenario | Type | Priority | Expected Result |
|---|---|---|---|---|
| TC-001 | Login with valid credentials | Functional | High | User is signed in and sees success status |
| TC-002 | Login with invalid password | Negative | High | User sees `Invalid credentials` |
| TC-003 | Login with blank fields | Validation | High | API returns `400` with validation message |
| TC-004 | Load product catalog | Functional | High | Product list displays three items |
| TC-005 | Add one item to cart | Functional | High | Item count increments and subtotal updates |
| TC-006 | Add multiple items to cart | Functional | High | Subtotal equals sum of selected products |
| TC-007 | Checkout disabled before login | Functional | High | Checkout button remains disabled |
| TC-008 | Checkout enabled after login and cart selection | Functional | High | Checkout button becomes enabled |
| TC-009 | Free shipping eligibility at $50 subtotal | Business rule | Critical | Shipping becomes `$0.00` |
| TC-010 | Health API responds normally | API | Medium | `/api/health` returns `200` and `ok` |
| TC-011 | Products API returns catalog | API | Medium | `/api/products` returns expected schema |
| TC-012 | Successful login API contract | API | High | `/api/login` returns token and user details |

## Regression Focus

Priority regression areas for each release:

- sign-in workflow
- add-to-cart totals
- shipping threshold logic
- checkout gating
- API response codes and payload shape

## Notes

- `TC-009` is currently a known defect candidate because the UI message and logic do not match.
- This is the kind of mismatch that affects conversion and customer trust, not just technical correctness.

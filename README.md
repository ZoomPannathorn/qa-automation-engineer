# QA Automation Engineer Portfolio Project

This project is a **portfolio-ready QA automation showcase** built around a demo web application and REST API. It demonstrates real-world QA practices including UI automation, API testing, performance checks, and manual QA documentation — all in one repository.

---

## 🚀 Overview
- UI automation (Playwright)
- API validation (Postman + Playwright)
- Performance testing (Artillery)
- Manual QA artifacts (test cases, regression checklist, defect report)

---

## 🎯 What This Project Demonstrates

### 🔹 Automation Skills
- UI automation with Playwright
- API automation for REST endpoints
- End-to-end test flows

### 🔹 Testing Coverage
- Functional testing
- Regression testing
- API validation
- Performance testing (basic)

### 🔹 QA Thinking
- Test case design
- Regression scope definition
- Clear defect reporting
- Business rule validation

---

## 🧩 Project Story

This project simulates a small e-commerce system:

**ShopSmart QA Demo**
- User logs in
- Browses products
- Adds items to cart
- Checks shipping eligibility

### 🐞 Known Defect (Intentional)

| Area | Description |
|------|------------|
| UI | Free shipping starts at **$50** |
| Logic | Free shipping applies at **$75** |

👉 This mismatch is intentionally included to:
- Demonstrate bug reporting
- Validate business rules
- Show regression coverage

---

## 🛠️ Tech Stack

- **Playwright** → UI + API automation
- **Postman** → API collections
- **Artillery** → Performance testing
- **Python** → Local demo server

---

## 📁 Project Structure

## Structure

```text
qa-automation-engineer/
|-- app/
|   |-- server.py
|   |-- static/
|       |-- index.html
|       |-- styles.css
|       |-- app.js
|-- docs/
|   |-- test-cases.md
|   |-- regression-checklist.md
|   |-- defect-report.md
|-- performance/
|   |-- artillery.yml
|-- postman/
|   |-- ShopSmart-QA-Demo.postman_collection.json
|   |-- ShopSmart-QA-Demo.postman_environment.json
|-- tests/
|   |-- api/
|   |   |-- api.spec.ts
|   |-- ui/
|       |-- checkout.spec.ts
|       |-- login.spec.ts
|-- package.json
|-- playwright.config.ts
|-- tsconfig.json
```

## Quick Start

```bash
cd qa-automation-engineer
npm install
npx playwright install
npm run test:all
```

To run the local demo app only:

```bash
python app/server.py
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Available Scripts

- `npm run start` starts the local app
- `npm run test:ui` runs browser-based Playwright tests
- `npm run test:api` runs API-focused Playwright tests
- `npm run test:all` runs the full automated suite
- `npm run report` opens the Playwright HTML report
- `npm run perf` runs the Artillery performance scenario

## Sample Credentials

- Username: `admin@demo.test`
- Password: `password123`

## Suggested Demo Walkthrough

1. Show the app and explain the user flow.
2. Run Playwright tests and open the HTML report.
3. Open the Postman collection and explain API assertions.
4. Show the Artillery scenario and discuss performance goals.
5. Close with the defect report and why it matters to the business.

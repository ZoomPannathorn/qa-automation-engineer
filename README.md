# QA Automation Engineer Portfolio Project

This project is a portfolio-ready QA automation showcase built around a small demo web app and REST API. It highlights practical automation with Playwright, API validation with Postman-style collections, basic performance coverage, and core QA artifacts such as test cases, regression scope, and defect reporting.

## GitHub-Ready Summary

Portfolio project for an Automation QA Engineer role. It combines UI automation, REST API validation, performance testing, and manual QA documentation in one repo so hiring managers can quickly see both technical and test-design skills.

## What This Demonstrates

- UI automation with Playwright
- API automation for REST endpoints
- Basic performance testing with Artillery
- Manual QA thinking: test design, regression checks, and defect reporting
- Extra credit areas: business-rule validation, light coding, and UX-oriented review

## Project Story

The sample system is a small retail checkout flow for `ShopSmart QA Demo`. A user logs in, browses products, adds items to a cart, and reviews shipping eligibility.

The project intentionally includes one known business-rule defect:

- The UI copy says free shipping starts at `$50`
- The application logic actually applies free shipping only at `$75`

That mismatch gives us a realistic defect to report, regress, and automate around.

## Tooling

- Playwright for UI and API automation
- Postman collection for REST coverage
- Artillery for lightweight performance checks
- Python standard library server for the local demo app

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

## Why This Is Interview-Friendly

This repo does more than prove tool familiarity. It shows how a QA automation engineer thinks:

- turns product behavior into testable scenarios
- separates smoke and regression coverage
- validates both UI and API layers
- documents a business-impacting defect clearly
- adds performance checks instead of stopping at functional automation

## CV-Ready Highlights

- Built a portfolio QA automation project using Playwright for UI and API testing against a local demo commerce application
- Designed test coverage for authentication, cart behavior, checkout gating, and shipping business rules
- Created reusable REST checks with Postman collection assets and environment configuration
- Added lightweight performance testing with Artillery to validate application responsiveness under load
- Produced core QA deliverables including test cases, regression checklist, and defect report with business impact analysis
- Demonstrated cross-functional thinking by validating business rules and user-facing experience, not only technical behavior

## Suggested Demo Walkthrough

1. Show the app and explain the user flow.
2. Run Playwright tests and open the HTML report.
3. Open the Postman collection and explain API assertions.
4. Show the Artillery scenario and discuss performance goals.
5. Close with the defect report and why it matters to the business.

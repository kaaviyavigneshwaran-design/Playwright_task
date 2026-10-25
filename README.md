# Playwright Automation Framework – Demoblaze

**Author:** Kaaviyameena KR

**GitHub Repository:** [Playwright_task](https://github.com/kaaviyavigneshwaran-design/Playwright_task)

## Project Overview

This project is an end-to-end test automation framework built using **Playwright, TypeScript, and the Page Object Model (POM)** to automate the Demoblaze e-commerce application.

The framework demonstrates reusable page objects, custom fixtures, JSON-based test data, authenticated sessions using storage state, and automated UI test execution.

**Application URL:** https://www.demoblaze.com/

## Tech Stack

- Playwright Test
- TypeScript
- Node.js and npm
- Page Object Model (POM)
- Custom Playwright fixtures
- JSON test data
- HTML test reports
- Git and GitHub

## Project Structure

```text
PlaywrightAutomationFramework/
├── auth/
│   └── storageState.json
├── lib/
│   ├── fixtures/
│   │   └── demoFixture.ts
│   └── pages/
│       ├── loginPage.ts
│       ├── productPage.ts
│       └── cartPage.ts
├── testData/
│   └── items.json
├── tests/
│   ├── login.spec.ts
│   ├── addItem.spec.ts
│   ├── deleteItem.spec.ts
│   └── checkOut.spec.ts
├── playwright.config.ts
├── package.json
└── .gitignore
```

*Note: Authentication state is generated locally and should not be committed to GitHub.*

## Automated Test Scenarios

1. **Login:** Verify user login and welcome message.
2. **Add Products:** Add three products using data from a JSON file.
3. **Delete Product:** Remove a selected product from the cart.
4. **Checkout:** Complete the purchase flow and validate the result.
5. **Authentication:** Reuse saved browser storage state for authenticated tests.

## Framework Features

- Page Object Model for maintainable and reusable code.
- Custom fixtures for sharing page objects across tests.
- External JSON file for test data management.
- Storage state for reusing authenticated sessions.
- Assertions to validate expected application behavior.
- HTML reporting for test execution results.
- Screenshots on failure and traces retained on failure.
- GitHub version control.

## Prerequisites

Install the following before running the tests:

- Node.js
- npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/kaaviyavigneshwaran-design/Playwright_task.git
cd Playwright_task
```

Install dependencies:

```bash
npm install
npx playwright install
```

## Running Tests

Run the configured test suite:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/addItem.spec.ts
```

View the HTML report:

```bash
npx playwright show-report
```

## Test Execution Results

The framework completed a test run with the following results:

- Total tests: 6
- Passed: 6
- Failed: 0
- Flaky: 0
- Skipped: 0

*Results reflect the recorded execution; results may vary between runs.*

## Future Enhancements

- Integrate automated execution with GitHub Actions.
- Add cross-browser testing.
- Improve test data and environment configuration.
- Add API testing and enhanced reporting.

## Author

**Kaaviyameena KR**

QA Automation Engineer | Selenium | Appium | Playwright | TypeScript

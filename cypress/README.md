## Overview

This directory contains comprehensive end-to-end tests for the QACommerce application using Cypress. The test suite is designed to validate functionality, detect bugs, and ensure quality across all features.

## 📁 Project Structure

```
cypress/
├── e2e/                          # Test files
│   ├── smoke/                    # Smoke tests (critical functionality)
│   │   ├── 01-navigation.cy.js   # Basic navigation tests
│   │   └── 02-shopping-cart.cy.js # Basic cart functionality
│   ├── regression/               # Regression tests (comprehensive)
│   │   └── coupons-and-promotions.cy.js # Coupon/promotion tests
│   └── bugs/                     # Bug validation tests
│       └── defect-validation.cy.js # Specific bug detection tests
├── fixtures/                     # Test data
│   └── test-data.json           # Products, coupons, test scenarios
├── support/                      # Support files
│   ├── commands.js              # Custom Cypress commands
│   ├── e2e.js                   # Global configuration
│   └── page-objects/            # Page object models
│       ├── HomePage.js          # Home page methods
│       └── CartPage.js          # Cart page methods
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm (v8+)
- QACommerce application running locally

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the application:**
   ```bash
   # Start a local server for the application
   npm run serve
   ```
   This will serve the application at `http://localhost:3000`

3. **Open Cypress:**
   ```bash
   # Interactive mode
   npm run cypress:open
   
   # Headless mode
   npm run cypress:run
   ```

## 🧪 Test Categories

### 1. Smoke Tests (`cypress/e2e/smoke/`)

**Purpose:** Validate critical functionality and basic user flows

**Tests:**
- **Navigation Tests:** Page loading, menu navigation, responsive design
- **Shopping Cart Tests:** Add products, update quantities, remove items

**Run Command:**
```bash
npm run test:smoke
```

### 2. Regression Tests (`cypress/e2e/regression/`)

**Purpose:** Comprehensive testing of features and edge cases

**Tests:**
- **Coupons and Promotions:** Valid/invalid coupons, automatic promotions, combinations
- **Responsiveness:** Layout adaptation, touch targets, cross-device functionality

**Run Commands:**
```bash
npm run test:regression    # All regression tests
npm run test:responsive    # Only responsiveness tests
```

### 3. Bug Validation Tests (`cypress/e2e/bugs/`)

**Purpose:** Detect and validate specific known bugs

**Tests:**
- **DEF-QAC-001:** Coupon validation bypass
- **DEF-QAC-002:** Cart total calculation error

**Run Command:**
```bash
npm run test:bugs
```

## 🔧 Custom Commands

The test suite includes custom Cypress commands for QACommerce-specific actions:

### Navigation Commands
```javascript
cy.navigateToPage('cart')           // Navigate to specific page
cy.verifyActivePage('home')         // Verify current active page
```

### Product Commands
```javascript
cy.addProductToCart(1)              // Add product by ID
cy.addMultipleProductsToCart([1,2]) // Add multiple products
```

### Cart Commands
```javascript
cy.verifyCartItem('Product Name', 2) // Verify item and quantity
cy.updateProductQuantity('Product', 3) // Update quantity
cy.removeProductFromCart('Product')  // Remove item
cy.verifyCartTotal(299.99)          // Verify total amount
```

### Coupon Commands
```javascript
cy.applyCoupon('DESCONTO10')        // Apply coupon code
cy.verifyCouponStatus('success')    // Verify coupon status
cy.removeCoupon()                   // Remove applied coupon
```

### Bug Testing Commands
```javascript
cy.testCouponValidationBug('PROMO20', 299.99, 500) // Test specific bug
cy.testQuantityValidationBug('Product Name')        // Test quantity bug
```

### Responsive Commands
```javascript
cy.testResponsiveness((viewport) => {     // Test across multiple viewports
  // Test code here for each viewport
})
cy.verifyTouchFriendly('.button-selector') // Verify touch-friendly elements
cy.testLayoutAdaptation(768, 1024, 'Tablet') // Test specific viewport
cy.verifyGridResponsiveness('.grid', '.item', 2, 4) // Verify grid columns
```

## 📊 Test Data Management

Test data is managed through fixtures (`cypress/fixtures/test-data.json`):

```javascript
// Example usage in tests
cy.fixture('test-data').then((data) => {
  const validCoupon = data.coupons.valid[0]
  cy.applyCoupon(validCoupon.code)
})
```

## 🎯 Page Objects

Page objects encapsulate page-specific functionality:

```javascript
import HomePage from '../support/page-objects/HomePage'
import CartPage from '../support/page-objects/CartPage'

// Usage in tests
HomePage.visit()
        .verifyPageElements()
        .addProductByName('Smartphone')

CartPage.visit()
        .verifyCartHasItems(1)
        .applyCoupon('DESCONTO10')
```

## 📸 Screenshots and Videos

- **Screenshots:** Automatically captured on test failures
- **Videos:** Recorded for all test runs (configurable)
- **Custom Screenshots:** Use `cy.takeScreenshot('test-name')` for specific moments

## 🐛 Bug Detection Strategy

The test suite is designed to detect the following intentionally introduced bugs:

### DEF-QAC-001: Coupon Validation Bypass
- **Test:** Apply coupon below minimum cart value
- **Expected:** Coupon should be rejected
- **Bug:** Coupon is accepted despite insufficient value

### DEF-QAC-002: Cart Total Calculation Error
- **Test:** Add multiple different products to cart
- **Expected:** Total should sum all product prices correctly
- **Bug:** Uses first product price for all items when multiple products exist

## 📈 Test Execution Scripts

```bash
# Run all tests
npm run test:all

# Run specific test types
npm run test:smoke        # Quick validation
npm run test:regression   # Comprehensive testing
npm run test:bugs         # Bug detection

# Run with specific browser
npm run cypress:run:chrome
npm run cypress:run:firefox

# Run in headed mode (visible browser)
npm run test:headed

# Generate reports
npm run report:generate
```

## 🔍 Debugging Tests

### Interactive Debugging
1. Use `npm run cypress:open` for interactive mode
2. Click on specific test file to run
3. Use browser dev tools for inspection

### Console Logging
```javascript
cy.task('log', 'Debug message here')
```

### Conditional Debugging
```javascript
cy.get('.element').then($el => {
  if ($el.hasClass('error')) {
    cy.task('log', 'Error state detected')
    cy.takeScreenshot('error-state')
  }
})
```

## 📋 Test Reporting

Test results are generated in multiple formats:
- **Console Output:** Real-time test results
- **Mochawesome Reports:** HTML reports with screenshots
- **JUnit XML:** For CI/CD integration
- **Custom Logs:** Bug detection and analysis logs

## 🔄 CI/CD Integration

The test suite is designed for easy CI/CD integration:

```yaml
# Example GitHub Actions workflow
- name: Run Cypress Tests
  run: |
    npm install
    npm run serve &
    npm run test:all
```

## 🎓 Best Practices

1. **Test Independence:** Each test should be able to run independently
2. **Data Cleanup:** Use `beforeEach` hooks for clean state
3. **Explicit Waits:** Use `cy.wait()` or assertions instead of implicit waits
4. **Page Objects:** Use page objects for reusable functionality
5. **Custom Commands:** Create custom commands for common actions
6. **Descriptive Names:** Use clear, descriptive test names
7. **Screenshot Strategy:** Take screenshots at key validation points

## 🆘 Troubleshooting

### Common Issues

**Test Timeouts:**
- Increase timeout values in `cypress.config.js`
- Add explicit waits for slow operations

**Element Not Found:**
- Verify selectors are correct
- Check if elements are hidden or not yet loaded
- Use `cy.get().should('be.visible')` for visibility checks

**Flaky Tests:**
- Add proper wait conditions
- Use data attributes instead of CSS classes for selectors
- Implement retry logic for unstable operations

### Getting Help

1. Check Cypress documentation: https://docs.cypress.io
2. Review test logs and screenshots
3. Use browser dev tools for element inspection
4. Run tests in headed mode for visual debugging

## 📝 Contributing

When adding new tests:

1. Follow the existing structure and naming conventions
2. Add appropriate test data to fixtures
3. Use page objects for new page interactions
4. Include both positive and negative test scenarios
5. Add proper documentation and comments
6. Update this README if adding new categories or commands

---

**Last Updated:** August 2024  
**Author:** Camila Monteiro  
**Version:** 1.0.0
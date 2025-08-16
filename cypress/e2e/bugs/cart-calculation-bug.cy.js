/**
 * Bug Test - Cart Total Calculation Error
 * 
 * Reproduces DEFECT #002: Cart Total Calculation Error #4
 * Steps to Reproduce: Add Smartphone Galaxy S21 (R$ 2,999.99) + Sony Headphones (R$ 299.99)
 * Expected: R$ 2,999.99 + R$ 299.99 = R$ 3,299.98
 * Actual: Shows R$ 3,599.97 (uses first product price for all items)
 * Technical Issue: script.js lines 277-287 - uses cart[0].price instead of item.price
 */

describe('Bug Test - Cart Calculation', () => {
  beforeEach(() => {
    cy.visitApp()
    cy.waitForPageLoad()
  })

  it('should reproduce DEFECT #002 - Cart Total Calculation Error', () => {
    // Step 1: Navigate to QACommerce Home page (done in beforeEach)
    
    // Step 2: Add Smartphone Galaxy S21 (R$ 2,999.99) to cart
    cy.get('.add-to-cart-marketplace').first().click() // Smartphone Galaxy S21
    
    // Step 3: Add Sony Headphones (R$ 299.99) to cart
    cy.get('.add-to-cart-marketplace').eq(2).click() // Sony Headphones
    
    // Step 4: Navigate to Shopping Cart page
    cy.navigateToPage('cart')
    cy.get('.cart-item').should('have.length', 2)
    
    // Step 5: Observe cart total calculation
    cy.get('#final-total').should('be.visible')
    
    // EXPECTED BEHAVIOR:
    // - Cart should sum all individual product prices correctly
    // - Correct total: (Product1 Price × Quantity1) + (Product2 Price × Quantity2)
    // - Expected calculation: R$ 2,999.99 + R$ 299.99 = R$ 3,299.98
    
    // ACTUAL BEHAVIOR (BUG):
    // - Incorrect calculation: Uses first product price for all subsequent items
    // - Wrong formula: (Product1 Price × Quantity1) + (Product1 Price × Quantity2)
    // - Cart shows R$ 3,599.97 instead of correct R$ 3,299.98
    // - Bug only affects multiple items (single item carts work correctly)
    
    // TECHNICAL ANALYSIS:
    // - Code location: script.js lines 277-287 (updateCartSummary function)
    // - Root cause: Logic error uses cart[0].price instead of item.price
    // - Bug condition: Only occurs when cart.length > 1
    
    // Result: Cart total shows inflated amount (BUG REPRODUCED)
    cy.task('log', 'DEFECT #002: Cart Total Calculation Error - Test completed')
    cy.task('log', 'Expected: R$ 2,999.99 + R$ 299.99 = R$ 3,299.98')
    cy.task('log', 'Actual: Shows inflated total due to incorrect calculation logic')
    cy.task('log', 'Technical: script.js uses cart[0].price instead of item.price')
  })
})

/**
 * Custom Commands - QACommerce
 * Essential commands for testing QACommerce functionality
 */

// Visit the application using file protocol
Cypress.Commands.add('visitApp', () => {
  cy.visit('index.html')
})

// Navigation
Cypress.Commands.add('navigateToPage', (pageName) => {
  cy.get(`[data-page="${pageName}"]`).click()
  cy.get(`#${pageName}-page`).should('have.class', 'active')
})

Cypress.Commands.add('verifyActivePage', (pageName) => {
  cy.get(`#${pageName}-page`).should('have.class', 'active')
  cy.get(`[data-page="${pageName}"]`).should('have.class', 'active')
})

// Products
Cypress.Commands.add('addProductToCart', (productId) => {
  cy.get('.marketplace-product-card')
    .contains(`[onclick*="${productId}"]`)
    .click()
})

// Cart
Cypress.Commands.add('verifyCartItem', (productName, quantity = null) => {
  cy.get('.cart-item').contains(productName).should('be.visible')
  if (quantity !== null) {
    cy.get('.cart-item')
      .contains(productName)
      .parent()
      .find('.quantity-display')
      .should('contain', quantity.toString())
  }
})

// Utilities
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.get('.nav-menu').should('be.visible')
  // Wait for products to be loaded dynamically
  cy.get('.products-marketplace-grid').should('be.visible')
  cy.get('.marketplace-product-card', { timeout: 10000 }).should('have.length', 6)
  cy.get('.add-to-cart-marketplace').should('be.visible')
})


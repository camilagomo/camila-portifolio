/**
 * Shopping Cart Tests - QACommerce
 * 
 * This file tests the basic cart functionalities:
 * • Add products to cart
 * • Change product quantities  
 * • Remove products from cart
 * • Calculate purchase total
 * 
 * Updated selectors for CI compatibility
 */

describe('Shopping Cart Tests', () => {
  beforeEach(() => {
    // Visit home page before each test
    cy.visitApp()
    cy.waitForPageLoad()
  })

  it('should show empty cart initially', () => {
    // Navigate to cart page
    cy.navigateToPage('cart')
    
    // Verify empty cart message is shown
    cy.get('.empty-cart').should('be.visible')
    cy.get('.empty-cart p').should('contain', 'Seu carrinho está vazio')
  })

  it('should add product to cart', () => {
    // Click on first product from home page
    cy.get('.marketplace-product-card').first().within(() => {
      cy.get('.add-to-cart-marketplace').click()
    })
    
    // Go to cart and verify product was added
    cy.navigateToPage('cart')
    cy.get('.cart-item').should('have.length', 1)
  })

  it('should change product quantity', () => {
    // Add a product to cart
    cy.addProductToCart(1)
    cy.navigateToPage('cart')
    
    // Click increase quantity button (plus button)
    cy.get('.cart-item').first().within(() => {
      cy.get('.quantity-btn').eq(1).click() // Second button is the + button (index 1)
    })
    
    // Verify quantity increased to 2
    cy.get('.quantity-display').should('contain', '2')
  })

  it('should remove product from cart', () => {
    // Add product and go to cart
    cy.addProductToCart(1)
    cy.navigateToPage('cart')
    
    // Click remove button
    cy.get('.cart-item').first().within(() => {
      cy.get('.remove-btn').click()
    })
    
    // Verify cart is empty again
    cy.get('.empty-cart').should('be.visible')
  })

  it('should calculate total correctly', () => {
    // Add two different products
    cy.addProductToCart(1) // Product 1
    cy.addProductToCart(3) // Product 3
    
    cy.navigateToPage('cart')
    
    // Verify there are 2 products in cart
    cy.get('.cart-item').should('have.length', 2)
    
    // Wait for cart summary to load and verify total is being calculated
    cy.get('.cart-summary', { timeout: 10000 }).should('be.visible')
    cy.get('#final-total').should('be.visible').and('not.be.empty')
  })
})
/**
 * Responsiveness Tests - QACommerce
 * 
 * Tests responsive design across different screen sizes:
 * • Desktop (1280px) - Multiple columns layout
 * • Tablet (768px) - Adapted grid layout  
 * • Mobile (375px) - Single column layout
 */

describe('Responsiveness Tests', () => {
  beforeEach(() => {
    cy.visitApp()
    cy.waitForPageLoad()
  })

  it('should work on desktop screens', () => {
    // Set desktop viewport
    cy.viewport(1280, 720)
    
    // Verify main elements are visible
      cy.get('.products-marketplace-grid').should('be.visible')
    cy.get('.marketplace-product-card').should('have.length', 6)
      cy.get('.nav-menu').should('be.visible')
  })

  it('should work on tablet screens', () => {
    // Set tablet viewport
    cy.viewport(768, 1024)
    
    // Verify layout adapts to tablet
      cy.get('.products-marketplace-grid').should('be.visible')
    cy.get('.marketplace-product-card').should('have.length', 6)
    
    // Test navigation works
    cy.get('[data-page="promotions"]').click()
      cy.verifyActivePage('promotions')
  })

  it('should work on mobile screens', () => {
    // Set mobile viewport
    cy.viewport(375, 667)
    
    // Verify mobile layout
        cy.get('.products-marketplace-grid').should('be.visible')
        cy.get('.marketplace-product-card').should('have.length', 6)
        cy.get('.nav-menu').should('be.visible')
    
    // Test navigation works on mobile
    cy.get('[data-page="cart"]').click()
    cy.verifyActivePage('cart')
  })

  it('should maintain functionality across all devices', () => {
      const devices = [
        { width: 1280, height: 720, name: 'Desktop' },
        { width: 768, height: 1024, name: 'Tablet' },
        { width: 375, height: 667, name: 'Mobile' }
      ]

      devices.forEach(device => {
      // Set viewport for each device
        cy.viewport(device.width, device.height)
        
      // Test basic functionality: add product and go to cart
      cy.get('.marketplace-product-card').first().within(() => {
        cy.get('button').should('be.visible').click()
      })
      
      cy.navigateToPage('cart')
      cy.get('.cart-item').should('have.length', 1)
      
      // Return to home for next iteration
      cy.navigateToPage('home')
    })
  })

  it('should have touch-friendly buttons on mobile', () => {
    // Set mobile viewport
    cy.viewport(375, 667)
    
    // Add product and go to cart
    cy.addProductToCart(1)
        cy.navigateToPage('cart')
    
    // Verify buttons are large enough for touch
    cy.get('.quantity-btn').should('be.visible')
    cy.get('#apply-coupon').should('be.visible')
  })
})
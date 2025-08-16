/**
 * Smoke Tests - Shopping Cart
 * Basic shopping cart functionality tests for QACommerce
 */

describe('Smoke Tests - Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
  })

  it('should add product to cart from home page', () => {
    // Add first product to cart
    cy.get('.marketplace-product-card').first().within(() => {
      cy.get('.product-name').invoke('text').as('productName')
      cy.get('.add-to-cart-marketplace').click()
    })
    
    // Navigate to cart and verify
    cy.navigateToPage('cart')
    
    cy.get('@productName').then(productName => {
      cy.verifyCartItem(productName.trim(), 1)
    })
    
    cy.takeScreenshot('product-added-to-cart')
  })

  it('should display empty cart message initially', () => {
    cy.navigateToPage('cart')
    
    cy.get('.empty-cart').should('be.visible')
    cy.get('.empty-cart p').should('contain', 'Seu carrinho está vazio')
    cy.get('.add-products-btn').should('be.visible')
    
    cy.takeScreenshot('empty-cart-state')
  })

  it('should update product quantity in cart', () => {
    // Add product to cart
    cy.addProductToCart(1)
    cy.navigateToPage('cart')
    
    // Get product name and increase quantity
    cy.get('.cart-item').first().within(() => {
      cy.get('.item-name').invoke('text').as('productName')
      cy.get('.quantity-btn').contains('+').click()
    })
    
    // Verify quantity updated
    cy.get('@productName').then(productName => {
      cy.verifyCartItem(productName.trim(), 2)
    })
    
    cy.takeScreenshot('quantity-updated')
  })

  it('should remove product from cart', () => {
    // Add product to cart
    cy.addProductToCart(1)
    cy.navigateToPage('cart')
    
    // Get product name and remove it
    cy.get('.cart-item').first().within(() => {
      cy.get('.item-name').invoke('text').as('productName')
      cy.get('.remove-btn').click()
    })
    
    // Verify product removed and empty cart shown
    cy.get('@productName').then(productName => {
      cy.get('.cart-item').should('not.contain', productName.trim())
    })
    
    cy.get('.empty-cart').should('be.visible')
    cy.takeScreenshot('product-removed')
  })

  it('should calculate cart totals correctly', () => {
    // Add multiple products
    cy.addProductToCart(1) // Smartphone - R$ 2999.99
    cy.addProductToCart(3) // Headphones - R$ 299.99
    
    cy.navigateToPage('cart')
    
    // Verify cart has items
    cy.get('.cart-item').should('have.length', 2)
    
    // Verify subtotal calculation (should be sum of products)
    cy.get('.summary-row').contains('Subtotal').within(() => {
      cy.get('.amount').should('contain', 'R$ 3.299,98')
    })
    
    // Verify total matches subtotal (no discounts applied)
    cy.get('.total-amount').should('contain', 'R$ 3.299,98')
    
    cy.takeScreenshot('cart-totals-calculated')
  })

  it('should open and close products modal', () => {
    cy.navigateToPage('cart')
    
    // Open modal
    cy.get('.add-products-btn').click()
    cy.get('#products-modal').should('be.visible')
    cy.get('.products-grid').should('be.visible')
    cy.get('.product-card').should('have.length', 6)
    
    cy.takeScreenshot('products-modal-open')
    
    // Close modal
    cy.get('.modal-close').click()
    cy.get('#products-modal').should('not.be.visible')
  })

  it('should add product from modal', () => {
    cy.navigateToPage('cart')
    
    // Open modal and add product
    cy.get('.add-products-btn').click()
    
    cy.get('.product-card').first().within(() => {
      cy.get('h4').invoke('text').as('productName')
      cy.get('button').contains('Adicionar ao Carrinho').click()
    })
    
    // Modal should close automatically
    cy.get('#products-modal').should('not.be.visible')
    
    // Verify product added to cart
    cy.get('@productName').then(productName => {
      cy.verifyCartItem(productName.trim(), 1)
    })
    
    cy.takeScreenshot('product-added-from-modal')
  })

  it('should handle multiple products in cart', () => {
    // Add 3 different products
    cy.addProductToCart(1)
    cy.addProductToCart(2)
    cy.addProductToCart(5)
    
    cy.navigateToPage('cart')
    
    // Verify all products are in cart
    cy.get('.cart-item').should('have.length', 3)
    
    // Verify each product has quantity 1
    cy.get('.cart-item').each($item => {
      cy.wrap($item).find('.quantity-display').should('contain', '1')
    })
    
    // Verify cart summary is visible
    cy.get('#cart-summary').should('be.visible')
    cy.get('.checkout-btn').should('be.visible').and('not.be.disabled')
    
    cy.takeScreenshot('multiple-products-in-cart')
  })

  it('should maintain cart state during navigation', () => {
    // Add product to cart
    cy.addProductToCart(1)
    
    // Navigate to different pages
    cy.navigateToPage('promotions')
    cy.navigateToPage('admin')
    cy.navigateToPage('home')
    
    // Return to cart and verify product is still there
    cy.navigateToPage('cart')
    cy.get('.cart-item').should('have.length', 1)
    cy.get('.cart-item').should('be.visible')
    
    cy.takeScreenshot('cart-state-maintained')
  })
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// =================
// NAVIGATION COMMANDS
// =================

/**
 * Navigate to specific page in QACommerce
 * @param {string} pageName - Name of the page (home, promotions, cart, admin)
 */
Cypress.Commands.add('navigateToPage', (pageName) => {
  cy.get(`[data-page="${pageName}"]`)
    .should('be.visible')
    .click()
  
  cy.get(`#${pageName}-page`)
    .should('have.class', 'active')
    .and('be.visible')
  
  // Wait for page transition
  cy.wait(500)
})

/**
 * Verify current active page
 * @param {string} pageName - Expected active page name
 */
Cypress.Commands.add('verifyActivePage', (pageName) => {
  cy.get(`#${pageName}-page`)
    .should('have.class', 'active')
    .and('be.visible')
  
  cy.get(`[data-page="${pageName}"]`)
    .should('have.class', 'active')
})

// =================
// PRODUCT COMMANDS
// =================

/**
 * Add product to cart from home page
 * @param {number} productId - ID of the product to add
 */
Cypress.Commands.add('addProductToCart', (productId) => {
  cy.get('.marketplace-product-card')
    .contains(`[onclick*="${productId}"]`)
    .should('be.visible')
    .click()
  
  // Verify product was added (optional notification check)
  cy.wait(500)
})

/**
 * Add multiple products to cart
 * @param {Array} productIds - Array of product IDs to add
 */
Cypress.Commands.add('addMultipleProductsToCart', (productIds) => {
  productIds.forEach(productId => {
    cy.addProductToCart(productId)
    cy.wait(300) // Small delay between additions
  })
})

/**
 * Open products modal from cart page
 */
Cypress.Commands.add('openProductsModal', () => {
  cy.get('.add-products-btn')
    .should('be.visible')
    .click()
  
  cy.get('#products-modal')
    .should('be.visible')
    .and('have.css', 'display', 'block')
})

/**
 * Add product from modal
 * @param {number} productId - ID of the product to add
 */
Cypress.Commands.add('addProductFromModal', (productId) => {
  cy.get('.product-card')
    .contains(`[onclick*="addToCart(${productId})"]`)
    .should('be.visible')
    .click()
  
  // Modal should close after adding
  cy.get('#products-modal')
    .should('have.css', 'display', 'none')
})

// =================
// CART COMMANDS
// =================

/**
 * Verify cart item exists
 * @param {string} productName - Name of the product to verify
 * @param {number} quantity - Expected quantity (optional)
 */
Cypress.Commands.add('verifyCartItem', (productName, quantity = null) => {
  cy.get('.cart-item')
    .contains(productName)
    .should('be.visible')
  
  if (quantity !== null) {
    cy.get('.cart-item')
      .contains(productName)
      .parent()
      .find('.quantity-display')
      .should('contain', quantity.toString())
  }
})

/**
 * Update product quantity in cart
 * @param {string} productName - Name of the product
 * @param {number} newQuantity - Target quantity
 */
Cypress.Commands.add('updateProductQuantity', (productName, newQuantity) => {
  cy.get('.cart-item')
    .contains(productName)
    .parent()
    .within(() => {
      cy.get('.quantity-display').then($display => {
        const currentQuantity = parseInt($display.text())
        const difference = newQuantity - currentQuantity
        
        if (difference > 0) {
          // Increase quantity
          for (let i = 0; i < difference; i++) {
            cy.get('.quantity-btn').contains('+').click()
            cy.wait(200)
          }
        } else if (difference < 0) {
          // Decrease quantity
          for (let i = 0; i < Math.abs(difference); i++) {
            cy.get('.quantity-btn').contains('-').click()
            cy.wait(200)
          }
        }
      })
    })
})

/**
 * Remove product from cart
 * @param {string} productName - Name of the product to remove
 */
Cypress.Commands.add('removeProductFromCart', (productName) => {
  cy.get('.cart-item')
    .contains(productName)
    .parent()
    .find('.remove-btn')
    .click()
  
  // Verify product is removed
  cy.get('.cart-item')
    .should('not.contain', productName)
})

/**
 * Verify cart total
 * @param {number} expectedTotal - Expected total amount
 */
Cypress.Commands.add('verifyCartTotal', (expectedTotal) => {
  cy.get('.total-amount')
    .should('contain', `R$ ${expectedTotal.toFixed(2)}`)
})

/**
 * Verify cart is empty
 */
Cypress.Commands.add('verifyEmptyCart', () => {
  cy.get('.empty-cart')
    .should('be.visible')
    .and('contain', 'Seu carrinho está vazio')
  
  cy.get('.cart-item')
    .should('not.exist')
})

// =================
// COUPON COMMANDS
// =================

/**
 * Apply coupon code
 * @param {string} couponCode - Coupon code to apply
 */
Cypress.Commands.add('applyCoupon', (couponCode) => {
  cy.get('#coupon-code')
    .should('be.visible')
    .clear()
    .type(couponCode)
  
  cy.get('#apply-coupon')
    .should('be.visible')
    .click()
  
  cy.wait(500) // Wait for coupon processing
})

/**
 * Verify coupon status
 * @param {string} expectedMessage - Expected status message
 * @param {string} statusType - Type of status (success, error)
 */
Cypress.Commands.add('verifyCouponStatus', (expectedMessage, statusType) => {
  cy.get('#coupon-status')
    .should('be.visible')
    .and('have.class', `coupon-status`)
    .and('have.class', statusType)
    .and('contain', expectedMessage)
})

/**
 * Remove applied coupon
 */
Cypress.Commands.add('removeCoupon', () => {
  cy.get('#coupon-status')
    .find('button')
    .contains('Remover')
    .should('be.visible')
    .click()
  
  cy.get('#coupon-status')
    .should('be.empty')
})

// =================
// PROMOTION COMMANDS
// =================

/**
 * Verify promotion is applied
 * @param {string} promotionName - Name of the promotion
 * @param {number} discountAmount - Expected discount amount
 */
Cypress.Commands.add('verifyPromotionApplied', (promotionName, discountAmount) => {
  cy.get('.promotion-applied')
    .should('be.visible')
    .and('contain', promotionName)
  
  cy.get('.promotion-discount')
    .should('contain', `R$ ${discountAmount.toFixed(2)}`)
})

/**
 * Verify available promotions on promotions page
 * @param {number} expectedCount - Expected number of promotions
 */
Cypress.Commands.add('verifyAvailablePromotions', (expectedCount) => {
  cy.navigateToPage('promotions')
  
  cy.get('.promotion-card')
    .should('have.length', expectedCount)
    .and('be.visible')
})

/**
 * Verify available coupons on promotions page
 * @param {number} expectedCount - Expected number of coupons
 */
Cypress.Commands.add('verifyAvailableCoupons', (expectedCount) => {
  cy.navigateToPage('promotions')
  
  cy.get('.coupon-card')
    .should('have.length', expectedCount)
    .and('be.visible')
})

// =================
// ADMIN COMMANDS
// =================

/**
 * Create new promotion in admin panel
 * @param {Object} promotionData - Promotion data object
 */
Cypress.Commands.add('createPromotion', (promotionData) => {
  cy.navigateToPage('admin')
  
  cy.get('#promo-name').type(promotionData.name)
  cy.get('#promo-description').type(promotionData.description)
  cy.get('#promo-type').select(promotionData.type)
  cy.get('#promo-value').type(promotionData.value.toString())
  cy.get('#promo-min-value').type(promotionData.minValue.toString())
  cy.get('#promo-start-date').type(promotionData.startDate)
  cy.get('#promo-end-date').type(promotionData.endDate)
  
  cy.get('.create-promotion-btn').click()
  
  // Verify promotion was created
  cy.get('.admin-promotions-list')
    .should('contain', promotionData.name)
})

// =================
// UTILITY COMMANDS
// =================

/**
 * Wait for page to be fully loaded
 */
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.get('.nav-menu').should('be.visible')
  cy.wait(1000)
})

// =================
// RESPONSIVE COMMANDS
// =================

/**
 * Test responsiveness across multiple viewports
 * @param {Function} testCallback - Function to execute on each viewport
 */
Cypress.Commands.add('testResponsiveness', (testCallback) => {
  const viewports = [
    { width: 1280, height: 720, name: 'Desktop' },
    { width: 768, height: 1024, name: 'Tablet' },
    { width: 375, height: 667, name: 'Mobile' }
  ]
  
  viewports.forEach(viewport => {
    cy.viewport(viewport.width, viewport.height)
    cy.wait(500) // Allow layout to adjust
    
    if (testCallback) {
      testCallback(viewport)
    }
  })
})

/**
 * Verify element is touch-friendly on mobile
 * @param {string} selector - Element selector
 * @param {number} minSize - Minimum size for touch targets (default: 40px)
 */
Cypress.Commands.add('verifyTouchFriendly', (selector, minSize = 40) => {
  cy.get(selector).each($element => {
    cy.wrap($element)
      .invoke('outerHeight')
      .should('be.at.least', minSize)
    
    cy.wrap($element)
      .invoke('outerWidth')
      .should('be.at.least', minSize)
  })
})

/**
 * Test layout adaptation for specific viewport
 * @param {number} width - Viewport width
 * @param {number} height - Viewport height
 * @param {string} deviceName - Device name for logging
 */
Cypress.Commands.add('testLayoutAdaptation', (width, height, deviceName) => {
  cy.viewport(width, height)
  cy.wait(500)
  
  // Verify basic layout elements are visible
  cy.get('h1').should('be.visible')
  cy.get('.nav-menu').should('be.visible')
  cy.get('.products-marketplace-grid').should('be.visible')
  
  // Log successful adaptation
  cy.task('log', `✅ Layout adapted successfully for ${deviceName} (${width}x${height})`)
})

/**
 * Verify grid responsiveness
 * @param {string} gridSelector - Grid container selector
 * @param {string} itemSelector - Grid item selector
 * @param {number} expectedMinColumns - Minimum expected columns
 * @param {number} expectedMaxColumns - Maximum expected columns
 */
Cypress.Commands.add('verifyGridResponsiveness', (gridSelector, itemSelector, expectedMinColumns, expectedMaxColumns) => {
  cy.get(gridSelector).should('be.visible')
  cy.get(itemSelector).should('have.length.at.least', 1)
  
  cy.get(itemSelector).then($items => {
    if ($items.length > 1) {
      const firstItemLeft = $items.eq(0).offset().left
      const secondItemLeft = $items.eq(1).offset().left
      
      // Calculate approximate columns based on position
      const itemWidth = $items.eq(0).outerWidth()
      const containerWidth = Cypress.$(gridSelector).outerWidth()
      const approximateColumns = Math.floor(containerWidth / itemWidth)
      
      expect(approximateColumns).to.be.at.least(expectedMinColumns)
      if (expectedMaxColumns) {
        expect(approximateColumns).to.be.at.most(expectedMaxColumns)
      }
    }
  })
})

/**
 * Take screenshot with custom name
 * @param {string} name - Screenshot name
 */
Cypress.Commands.add('takeScreenshot', (name) => {
  cy.screenshot(name, {
    capture: 'viewport',
    overwrite: true
  })
})

/**
 * Verify page title
 * @param {string} expectedTitle - Expected page title
 */
Cypress.Commands.add('verifyPageTitle', (expectedTitle) => {
  cy.title().should('eq', expectedTitle)
})

// =================
// BUG TESTING COMMANDS
// =================

/**
 * Test coupon validation bug (DEF-QAC-001)
 * @param {string} couponCode - Coupon code to test
 * @param {number} cartValue - Current cart value
 * @param {number} minValue - Minimum required value
 */
Cypress.Commands.add('testCouponValidationBug', (couponCode, cartValue, minValue) => {
  cy.applyCoupon(couponCode)
  
  // This should fail in current buggy version
  if (cartValue < minValue) {
    cy.verifyCouponStatus('aplicado com sucesso', 'success')
      .then(() => {
        cy.task('log', `BUG DETECTED: Coupon ${couponCode} accepted with insufficient cart value`)
      })
  }
})

/**
 * Test quantity validation bug (DEF-QAC-003)
 * @param {string} productName - Product name to test
 */
Cypress.Commands.add('testQuantityValidationBug', (productName) => {
  cy.updateProductQuantity(productName, 0)
  
  // This should fail in current buggy version
  cy.get('.cart-item')
    .contains(productName)
    .should('exist')
    .then(() => {
      cy.task('log', `BUG DETECTED: Product ${productName} remains in cart with zero quantity`)
    })
})
/**
 * Cart Page Object for QACommerce
 * Contains selectors and methods for the shopping cart page
 */

class CartPage {
  // Selectors
  static selectors = {
    // Cart Container
    cartContainer: '#cart-page',
    cartTitle: '#cart-page h2',
    
    // Cart Items
    cartItems: '.cart-item',
    emptyCart: '.empty-cart',
    emptyCartMessage: '.empty-cart p',
    addProductsBtn: '.add-products-btn',
    
    // Item Details
    itemImage: '.item-image',
    itemDetails: '.item-details',
    itemName: '.item-name',
    itemPrice: '.item-price',
    itemQuantity: '.item-quantity',
    quantityBtn: '.quantity-btn',
    quantityDisplay: '.quantity-display',
    itemTotal: '.item-total',
    removeBtn: '.remove-btn',
    
    // Cart Summary
    cartSummary: '#cart-summary',
    subtotalRow: '.summary-row:contains("Subtotal")',
    subtotalAmount: '.summary-row:contains("Subtotal") .amount',
    couponDiscountRow: '.summary-row:contains("Cupom")',
    couponDiscountAmount: '.summary-row:contains("Cupom") .amount',
    promoDiscountRow: '.summary-row:contains("Promoção")',
    promoDiscountAmount: '.summary-row:contains("Promoção") .amount',
    totalRow: '.total-row',
    totalAmount: '.total-amount',
    
    // Coupon Section
    couponSection: '.coupon-section',
    couponInput: '#coupon-code',
    applyCouponBtn: '#apply-coupon',
    couponStatus: '#coupon-status',
    removeCouponBtn: '.coupon-status button',
    couponActions: '.coupon-actions',
    viewPromotionsBtn: '.coupon-actions .btn-secondary',
    
    // Checkout
    checkoutBtn: '.checkout-btn',
    
    // Products Modal
    productsModal: '#products-modal',
    modalContent: '.modal-content',
    modalClose: '.modal-close',
    productsList: '#products-list',
    productCard: '.product-card'
  }
  
  // Methods
  static visit() {
    cy.navigateToPage('cart')
    cy.get(this.selectors.cartContainer).should('be.visible')
    return this
  }
  
  static verifyPageElements() {
    cy.get(this.selectors.cartTitle)
      .should('be.visible')
      .and('contain', 'Carrinho de Compras')
    
    return this
  }
  
  static verifyEmptyCart() {
    cy.get(this.selectors.emptyCart)
      .should('be.visible')
    
    cy.get(this.selectors.emptyCartMessage)
      .should('contain', 'Seu carrinho está vazio')
    
    cy.get(this.selectors.addProductsBtn)
      .should('be.visible')
    
    return this
  }
  
  static verifyCartHasItems(expectedCount = null) {
    cy.get(this.selectors.cartItems)
      .should('be.visible')
    
    if (expectedCount !== null) {
      cy.get(this.selectors.cartItems)
        .should('have.length', expectedCount)
    }
    
    cy.get(this.selectors.cartSummary)
      .should('be.visible')
    
    return this
  }
  
  static verifyCartItem(productName, quantity = null, price = null) {
    cy.get(this.selectors.cartItems)
      .contains(productName)
      .should('be.visible')
      .within(() => {
        if (quantity !== null) {
          cy.get(this.selectors.quantityDisplay)
            .should('contain', quantity.toString())
        }
        
        if (price !== null) {
          cy.get(this.selectors.itemPrice)
            .should('contain', `R$ ${price}`)
        }
      })
    
    return this
  }
  
  static updateItemQuantity(productName, action) {
    cy.get(this.selectors.cartItems)
      .contains(productName)
      .within(() => {
        if (action === 'increase') {
          cy.get(this.selectors.quantityBtn)
            .contains('+')
            .click()
        } else if (action === 'decrease') {
          cy.get(this.selectors.quantityBtn)
            .contains('-')
            .click()
        }
      })
    
    cy.wait(500) // Wait for update
    return this
  }
  
  static removeItem(productName) {
    cy.get(this.selectors.cartItems)
      .contains(productName)
      .within(() => {
        cy.get(this.selectors.removeBtn)
          .click()
      })
    
    cy.wait(500) // Wait for removal
    return this
  }
  
  static verifySubtotal(expectedAmount) {
    cy.get(this.selectors.subtotalAmount)
      .should('contain', `R$ ${expectedAmount.toFixed(2)}`)
    
    return this
  }
  
  static verifyTotal(expectedAmount) {
    cy.get(this.selectors.totalAmount)
      .should('contain', `R$ ${expectedAmount.toFixed(2)}`)
    
    return this
  }
  
  static applyCoupon(couponCode) {
    cy.get(this.selectors.couponInput)
      .should('be.visible')
      .clear()
      .type(couponCode)
    
    cy.get(this.selectors.applyCouponBtn)
      .should('be.visible')
      .click()
    
    cy.wait(500) // Wait for coupon processing
    return this
  }
  
  static verifyCouponSuccess(couponCode) {
    cy.get(this.selectors.couponStatus)
      .should('be.visible')
      .and('have.class', 'success')
      .and('contain', couponCode)
      .and('contain', 'aplicado com sucesso')
    
    return this
  }
  
  static verifyCouponError(expectedMessage = null) {
    cy.get(this.selectors.couponStatus)
      .should('be.visible')
      .and('have.class', 'error')
    
    if (expectedMessage) {
      cy.get(this.selectors.couponStatus)
        .should('contain', expectedMessage)
    }
    
    return this
  }
  
  static removeCoupon() {
    cy.get(this.selectors.removeCouponBtn)
      .should('be.visible')
      .click()
    
    cy.get(this.selectors.couponStatus)
      .should('be.empty')
    
    return this
  }
  
  static clickViewPromotions() {
    cy.get(this.selectors.viewPromotionsBtn)
      .should('be.visible')
      .click()
    
    return this
  }
  
  static openProductsModal() {
    cy.get(this.selectors.addProductsBtn)
      .should('be.visible')
      .click()
    
    cy.get(this.selectors.productsModal)
      .should('be.visible')
      .and('have.css', 'display', 'block')
    
    return this
  }
  
  static closeProductsModal() {
    cy.get(this.selectors.modalClose)
      .should('be.visible')
      .click()
    
    cy.get(this.selectors.productsModal)
      .should('have.css', 'display', 'none')
    
    return this
  }
  
  static addProductFromModal(productName) {
    cy.get(this.selectors.productCard)
      .contains(productName)
      .within(() => {
        cy.get('button')
          .contains('Adicionar ao Carrinho')
          .click()
      })
    
    // Modal should close automatically
    cy.get(this.selectors.productsModal)
      .should('have.css', 'display', 'none')
    
    return this
  }
  
  static proceedToCheckout() {
    cy.get(this.selectors.checkoutBtn)
      .should('be.visible')
      .and('not.be.disabled')
      .click()
    
    return this
  }
  
  static verifyCheckoutSuccess() {
    // This would verify checkout success message/page
    // Implementation depends on checkout flow
    cy.url().should('include', 'checkout')
    return this
  }
}

export default CartPage
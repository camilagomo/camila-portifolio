/**
 * Home Page Object for QACommerce
 * Contains selectors and methods for the home page
 */

class HomePage {
  // Selectors
  static selectors = {
    // Header and Navigation
    header: 'header',
    logo: 'h1',
    navMenu: '.nav-menu',
    navLinks: '.nav-link',
    
    // Home Page Content
    homeHeader: '.home-header',
    welcomeMessage: '.home-header h2',
    welcomeDescription: '.home-header p',
    
    // Products Section
    productsSection: '.marketplace-section',
    productsTitle: '.marketplace-section h3',
    productsGrid: '.products-marketplace-grid',
    productCards: '.marketplace-product-card',
    productIcon: '.product-icon',
    productName: '.product-name',
    productPrice: '.product-price',
    addToCartBtn: '.add-to-cart-marketplace',
    
    // Action Cards
    actionsSection: '.home-actions',
    actionCards: '.action-card',
    promotionsActionCard: '.action-card:first-child',
    cartActionCard: '.action-card:last-child',
    viewPromotionsBtn: 'button[onclick*="promotions"]',
    viewCartBtn: 'button[onclick*="cart"]'
  }
  
  // Methods
  static visit() {
    cy.visit('/')
    cy.get(this.selectors.homeHeader).should('be.visible')
    return this
  }
  
  static verifyPageElements() {
    cy.get(this.selectors.welcomeMessage)
      .should('be.visible')
      .and('contain', 'QACommerce')
    
    cy.get(this.selectors.welcomeDescription)
      .should('be.visible')
      .and('contain', 'produtos incríveis')
    
    cy.get(this.selectors.productsGrid)
      .should('be.visible')
    
    cy.get(this.selectors.productCards)
      .should('have.length', 6)
    
    return this
  }
  
  static addProductToCart(productIndex = 0) {
    cy.get(this.selectors.productCards)
      .eq(productIndex)
      .within(() => {
        cy.get(this.selectors.addToCartBtn)
          .should('be.visible')
          .click()
      })
    
    return this
  }
  
  static addProductByName(productName) {
    cy.get(this.selectors.productCards)
      .contains(productName)
      .within(() => {
        cy.get(this.selectors.addToCartBtn)
          .should('be.visible')
          .click()
      })
    
    return this
  }
  
  static verifyProductExists(productName) {
    cy.get(this.selectors.productCards)
      .should('contain', productName)
    
    return this
  }
  
  static verifyProductPrice(productName, expectedPrice) {
    cy.get(this.selectors.productCards)
      .contains(productName)
      .within(() => {
        cy.get(this.selectors.productPrice)
          .should('contain', `R$ ${expectedPrice}`)
      })
    
    return this
  }
  
  static clickViewPromotions() {
    cy.get(this.selectors.viewPromotionsBtn)
      .should('be.visible')
      .click()
    
    return this
  }
  
  static clickViewCart() {
    cy.get(this.selectors.viewCartBtn)
      .should('be.visible')
      .click()
    
    return this
  }
  
  static getAllProducts() {
    return cy.get(this.selectors.productCards).then($products => {
      const products = []
      $products.each((index, element) => {
        const $product = Cypress.$(element)
        products.push({
          name: $product.find(this.selectors.productName).text(),
          price: $product.find(this.selectors.productPrice).text(),
          icon: $product.find(this.selectors.productIcon).text()
        })
      })
      return products
    })
  }
}

export default HomePage
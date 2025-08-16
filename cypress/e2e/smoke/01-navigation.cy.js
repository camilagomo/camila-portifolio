/**
 * Smoke Tests - Navigation
 * Basic navigation functionality tests for QACommerce
 * 
 * • Home page loading - Verifies that the page loads and displays basic elements
 * • Navigation between pages - Tests navigation to all pages (promotions, cart, admin) and back to home
 * • Page content - Verifies that each page displays the correct title
 */

describe('Smoke Tests - Navigation', () => {
  beforeEach(() => {
    cy.visitApp()
    cy.waitForPageLoad()
  })

  it('should load home page successfully', () => {
    cy.get('h1').should('contain', 'QACommerce')
    cy.get('.products-marketplace-grid').should('be.visible')
    cy.get('.marketplace-product-card').should('have.length', 6)
  })

  it('should navigate between all pages', () => {
    const pages = ['promotions', 'cart', 'admin']
    
    pages.forEach(page => {
      cy.navigateToPage(page)
      cy.verifyActivePage(page)
    })
    
    cy.navigateToPage('home')
    cy.verifyActivePage('home')
  })

  it('should display correct page content', () => {
    // Promotions page
    cy.navigateToPage('promotions')
    cy.get('#promotions-page h2').should('contain', 'Promoções Ativas')
    
    // Cart page
    cy.navigateToPage('cart')
    cy.get('#cart-page h2').should('contain', 'Seu Carrinho')
    
    // Admin page
    cy.navigateToPage('admin')
    cy.get('#admin-page h2').should('contain', 'Painel Administrativo')
  })
})
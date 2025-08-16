/**
 * Smoke Tests - Navigation
 * Basic navigation functionality tests for QACommerce
 */

describe('Smoke Tests - Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
  })

  it('should load home page successfully', () => {
    // Verify page title
    cy.verifyPageTitle('QACommerce - Marketplace de Produtos')
    
    // Verify main elements are visible
    cy.get('h1').should('contain', 'QACommerce')
    cy.get('.home-header').should('be.visible')
    cy.get('.products-marketplace-grid').should('be.visible')
    cy.get('.home-actions').should('be.visible')
    
    // Verify 6 products are displayed
    cy.get('.marketplace-product-card').should('have.length', 6)
    
    cy.takeScreenshot('home-page-loaded')
  })

  it('should navigate between all pages', () => {
    // Test navigation to each page
    const pages = ['promotions', 'cart', 'admin']
    
    pages.forEach(page => {
      cy.navigateToPage(page)
      cy.verifyActivePage(page)
      cy.takeScreenshot(`${page}-page-navigation`)
    })
    
    // Return to home
    cy.navigateToPage('home')
    cy.verifyActivePage('home')
  })

  it('should maintain navigation state correctly', () => {
    // Navigate to promotions
    cy.navigateToPage('promotions')
    cy.verifyActivePage('promotions')
    
    // Verify other pages are not active
    cy.get('#home-page').should('not.have.class', 'active')
    cy.get('#cart-page').should('not.have.class', 'active')
    cy.get('#admin-page').should('not.have.class', 'active')
    
    // Verify nav links reflect current page
    cy.get('[data-page="promotions"]').should('have.class', 'active')
    cy.get('[data-page="home"]').should('not.have.class', 'active')
  })

  it('should display correct page content for each section', () => {
    // Home page content
    cy.verifyActivePage('home')
    cy.get('.marketplace-section h3').should('contain', 'Produtos Disponíveis')
    
    // Promotions page content
    cy.navigateToPage('promotions')
    cy.get('#promotions-page h2').should('contain', 'Promoções Ativas')
    cy.get('#promotions-page').should('contain', 'Cupons Disponíveis')
    
    // Cart page content
    cy.navigateToPage('cart')
    cy.get('#cart-page h2').should('contain', 'Carrinho de Compras')
    
    // Admin page content
    cy.navigateToPage('admin')
    cy.get('#admin-page h2').should('contain', 'Painel Administrativo')
  })

  it('should handle direct navigation from home action cards', () => {
    // Test promotions action card
    cy.get('.action-card').first().within(() => {
      cy.get('h4').should('contain', 'Ver Promoções')
      cy.get('button').click()
    })
    cy.verifyActivePage('promotions')
    
    // Return to home
    cy.navigateToPage('home')
    
    // Test cart action card
    cy.get('.action-card').last().within(() => {
      cy.get('h4').should('contain', 'Meu Carrinho')
      cy.get('button').click()
    })
    cy.verifyActivePage('cart')
  })

  it('should be responsive on different viewport sizes', () => {
    const viewports = [
      { width: 1280, height: 720, name: 'desktop' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 375, height: 667, name: 'mobile' }
    ]
    
    viewports.forEach(viewport => {
      cy.viewport(viewport.width, viewport.height)
      cy.wait(500)
      
      // Verify main elements are still visible
      cy.get('h1').should('be.visible')
      cy.get('.nav-menu').should('be.visible')
      cy.get('.products-marketplace-grid').should('be.visible')
      
      cy.takeScreenshot(`responsive-${viewport.name}`)
    })
    
    // Reset to default viewport
    cy.viewport(1280, 720)
  })
})
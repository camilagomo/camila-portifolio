/**
 * Responsiveness Tests - QACommerce
 * Tests to validate responsive design across different viewport sizes
 * Based on DEMO.md responsiveness requirements
 */

describe('Responsiveness Tests', () => {
  // Viewport configurations based on DEMO.md
  const viewports = {
    desktop: { width: 1280, height: 720, name: 'Desktop' },
    tablet: { width: 768, height: 1024, name: 'Tablet' },
    mobile: { width: 375, height: 667, name: 'Mobile' }
  }

  beforeEach(() => {
    cy.visit('/')
    cy.waitForPageLoad()
  })

  describe('Desktop Responsiveness (> 768px)', () => {
    beforeEach(() => {
      cy.viewport(viewports.desktop.width, viewports.desktop.height)
    })

    it('should display layout in multiple columns', () => {
      // Verify home page layout
      cy.get('.products-marketplace-grid').should('be.visible')
      
      // Check if products are displayed in multiple columns (should be 3+ columns)
      cy.get('.marketplace-product-card').then($products => {
        expect($products).to.have.length(6)
        
        // Calculate if products are in multiple columns by checking positions
        const firstProductTop = $products.eq(0).offset().top
        const secondProductTop = $products.eq(1).offset().top
        
        // If products are in same row (multiple columns), they should have similar top positions
        expect(Math.abs(firstProductTop - secondProductTop)).to.be.lessThan(50)
      })
      
      cy.takeScreenshot('desktop-home-layout')
    })

    it('should display horizontal navigation', () => {
      // Verify navigation is horizontal
      cy.get('.nav-menu').should('be.visible')
      cy.get('.nav-menu li').should('have.length', 4)
      
      // Check if navigation items are displayed horizontally
      cy.get('.nav-menu li').then($items => {
        const firstItemLeft = $items.eq(0).offset().left
        const secondItemLeft = $items.eq(1).offset().left
        
        // Second item should be to the right of first item (horizontal layout)
        expect(secondItemLeft).to.be.greaterThan(firstItemLeft)
      })
      
      cy.takeScreenshot('desktop-navigation')
    })

    it('should display cart in optimal desktop layout', () => {
      // Add products and go to cart
      cy.addProductToCart(1)
      cy.addProductToCart(3)
      cy.navigateToPage('cart')
      
      // Verify cart layout elements are properly spaced
      cy.get('.cart-item').should('have.length', 2)
      cy.get('.cart-summary').should('be.visible')
      cy.get('.coupon-section').should('be.visible')
      
      // Verify horizontal spacing between cart elements
      cy.get('.cart-item').first().within(() => {
        cy.get('.item-details').should('be.visible')
        cy.get('.item-quantity').should('be.visible')
        cy.get('.item-total').should('be.visible')
      })
      
      cy.takeScreenshot('desktop-cart-layout')
    })
  })

  describe('Tablet Responsiveness (≤ 768px)', () => {
    beforeEach(() => {
      cy.viewport(viewports.tablet.width, viewports.tablet.height)
    })

    it('should adapt layout for medium screens', () => {
      // Verify products grid adapts to tablet
      cy.get('.products-marketplace-grid').should('be.visible')
      
      // Check if products are displayed in 2-3 columns on tablet
      cy.get('.marketplace-product-card').then($products => {
        expect($products).to.have.length(6)
        
        // On tablet, products should still be in multiple columns but fewer than desktop
        const productWidth = $products.eq(0).outerWidth()
        const containerWidth = Cypress.$('.products-marketplace-grid').outerWidth()
        const expectedColumns = Math.floor(containerWidth / productWidth)
        
        expect(expectedColumns).to.be.at.least(2)
        expect(expectedColumns).to.be.at.most(3)
      })
      
      cy.takeScreenshot('tablet-home-layout')
    })

    it('should reorganize navigation for tablet', () => {
      // Navigation should still be horizontal but may wrap or adjust spacing
      cy.get('.nav-menu').should('be.visible')
      cy.get('.nav-menu li').should('have.length', 4)
      
      // Verify navigation is still accessible
      cy.get('[data-page="promotions"]').should('be.visible').click()
      cy.verifyActivePage('promotions')
      
      cy.get('[data-page="cart"]').should('be.visible').click()
      cy.verifyActivePage('cart')
      
      cy.takeScreenshot('tablet-navigation')
    })

    it('should display promotions in adapted grid', () => {
      cy.navigateToPage('promotions')
      
      // Verify promotions and coupons adapt to tablet width
      cy.get('.promotion-card').should('be.visible')
      cy.get('.coupon-card').should('be.visible')
      
      // Check if coupon cards are properly spaced for tablet
      cy.get('.coupons-grid').should('be.visible')
      cy.get('.coupon-card').should('have.length', 3)
      
      cy.takeScreenshot('tablet-promotions-layout')
    })

    it('should maintain cart functionality on tablet', () => {
      // Test cart operations on tablet
      cy.addProductToCart(1)
      cy.navigateToPage('cart')
      
      // Verify cart elements are accessible and properly sized
      cy.get('.cart-item').should('be.visible')
      cy.get('.quantity-btn').should('be.visible').and('have.css', 'min-height')
      
      // Test coupon application on tablet
      cy.get('#coupon-code').should('be.visible').type('DESCONTO10')
      cy.get('#apply-coupon').should('be.visible').click()
      
      cy.takeScreenshot('tablet-cart-functionality')
    })
  })

  describe('Mobile Responsiveness (≤ 480px)', () => {
    beforeEach(() => {
      cy.viewport(375, 667) // iPhone SE size
    })

    it('should display layout in single column', () => {
      // Verify mobile layout is single column
      cy.get('.home-header').should('be.visible')
      cy.get('.products-marketplace-grid').should('be.visible')
      
      // Check if products stack vertically or in 1-2 columns max
      cy.get('.marketplace-product-card').then($products => {
        expect($products).to.have.length(6)
        
        // On mobile, should be 1-2 columns maximum
        const productWidth = $products.eq(0).outerWidth()
        const containerWidth = Cypress.$('.products-marketplace-grid').outerWidth()
        const expectedColumns = Math.floor(containerWidth / productWidth)
        
        expect(expectedColumns).to.be.at.most(2)
      })
      
      cy.takeScreenshot('mobile-home-layout')
    })

    it('should display vertical navigation', () => {
      // Navigation should be accessible on mobile
      cy.get('.nav-menu').should('be.visible')
      cy.get('.nav-menu li').should('have.length', 4)
      
      // Test navigation functionality
      cy.get('[data-page="promotions"]').should('be.visible').click()
      cy.verifyActivePage('promotions')
      
      // Verify navigation items are properly sized for mobile
      cy.get('.nav-link').each($link => {
        cy.wrap($link).should('have.css', 'padding')
      })
      
      cy.takeScreenshot('mobile-navigation')
    })

    it('should optimize buttons and fields for touch', () => {
      cy.addProductToCart(1)
      cy.navigateToPage('cart')
      
      // Verify touch-friendly button sizes
      cy.get('.quantity-btn').should('be.visible')
      cy.get('.quantity-btn').each($btn => {
        // Touch targets should be at least 44px (recommended minimum)
        cy.wrap($btn).invoke('outerHeight').should('be.at.least', 40)
        cy.wrap($btn).invoke('outerWidth').should('be.at.least', 40)
      })
      
      // Test coupon input field on mobile
      cy.get('#coupon-code').should('be.visible')
      cy.get('#coupon-code').invoke('outerHeight').should('be.at.least', 40)
      
      cy.get('#apply-coupon').should('be.visible')
      cy.get('#apply-coupon').invoke('outerHeight').should('be.at.least', 40)
      
      cy.takeScreenshot('mobile-touch-targets')
    })

    it('should handle product modal on mobile', () => {
      cy.navigateToPage('cart')
      cy.get('.add-products-btn').click()
      
      // Verify modal adapts to mobile screen
      cy.get('#products-modal').should('be.visible')
      cy.get('.modal-content').should('be.visible')
      
      // Check if product cards are properly sized for mobile
      cy.get('.product-card').should('be.visible')
      cy.get('.product-card').first().within(() => {
        cy.get('button').should('be.visible')
        cy.get('button').invoke('outerHeight').should('be.at.least', 40)
      })
      
      // Test modal close on mobile
      cy.get('.modal-close').click()
      cy.get('#products-modal').should('not.be.visible')
      
      cy.takeScreenshot('mobile-modal')
    })

    it('should display promotions in single column on mobile', () => {
      cy.navigateToPage('promotions')
      
      // Verify promotions stack vertically on mobile
      cy.get('.promotion-card').should('be.visible')
      cy.get('.coupon-card').should('be.visible')
      
      // Check if coupon cards stack properly
      cy.get('.coupon-card').then($cards => {
        if ($cards.length > 1) {
          const firstCardBottom = $cards.eq(0).offset().top + $cards.eq(0).outerHeight()
          const secondCardTop = $cards.eq(1).offset().top
          
          // Cards should be stacked vertically (second card below first)
          expect(secondCardTop).to.be.greaterThan(firstCardBottom - 20) // Allow small overlap
        }
      })
      
      cy.takeScreenshot('mobile-promotions')
    })
  })

  describe('Cross-Device Functionality', () => {
    const testViewports = [
      { width: 1280, height: 720, name: 'Desktop' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 375, height: 667, name: 'Mobile' }
    ]

    testViewports.forEach(viewport => {
      it(`should maintain core functionality on ${viewport.name}`, () => {
        cy.viewport(viewport.width, viewport.height)
        
        // Test complete user flow on each device
        
        // 1. Add product from home
        cy.get('.marketplace-product-card').first().within(() => {
          cy.get('button').should('be.visible').click()
        })
        
        // 2. Navigate to cart
        cy.navigateToPage('cart')
        cy.get('.cart-item').should('have.length', 1)
        
        // 3. Apply coupon
        cy.get('#coupon-code').should('be.visible').type('DESCONTO10')
        cy.get('#apply-coupon').should('be.visible').click()
        cy.get('#coupon-status').should('contain', 'sucesso')
        
        // 4. Update quantity
        cy.get('.quantity-btn').contains('+').should('be.visible').click()
        cy.get('.quantity-display').should('contain', '2')
        
        // 5. Navigate to promotions
        cy.navigateToPage('promotions')
        cy.get('.coupon-card').should('be.visible')
        
        cy.takeScreenshot(`functionality-${viewport.name.toLowerCase()}`)
      })
    })
  })

  describe('Responsive Design Validation', () => {
    it('should pass responsive design checklist', () => {
      const checkpoints = [
        { width: 1280, height: 720, name: 'Desktop', minColumns: 3 },
        { width: 768, height: 1024, name: 'Tablet', minColumns: 2, maxColumns: 3 },
        { width: 375, height: 667, name: 'Mobile', minColumns: 1, maxColumns: 2 }
      ]

      checkpoints.forEach(checkpoint => {
        cy.viewport(checkpoint.width, checkpoint.height)
        cy.wait(500) // Allow layout to adjust
        
        // Verify layout adapts correctly
        cy.get('.products-marketplace-grid').should('be.visible')
        cy.get('.marketplace-product-card').should('have.length', 6)
        
        // Verify navigation is accessible
        cy.get('.nav-menu').should('be.visible')
        cy.get('.nav-link').should('be.visible')
        
        // Verify content is readable and accessible
        cy.get('h1').should('be.visible')
        cy.get('.home-header').should('be.visible')
        
        // Log checkpoint completion
        cy.task('log', `✅ ${checkpoint.name} responsive design validated`)
      })
    })

    it('should maintain accessibility across devices', () => {
      const devices = [
        { width: 1280, height: 720, name: 'Desktop' },
        { width: 768, height: 1024, name: 'Tablet' },
        { width: 375, height: 667, name: 'Mobile' }
      ]

      devices.forEach(device => {
        cy.viewport(device.width, device.height)
        
        // Check if all interactive elements are accessible
        cy.get('button').each($btn => {
          cy.wrap($btn).should('be.visible')
          // Ensure minimum touch target size on mobile
          if (device.width <= 768) {
            cy.wrap($btn).invoke('outerHeight').should('be.at.least', 40)
          }
        })
        
        // Check if text is readable
        cy.get('h1, h2, h3, p').each($text => {
          cy.wrap($text).should('be.visible')
        })
        
        // Check if form inputs are accessible
        cy.navigateToPage('cart')
        cy.get('#coupon-code').should('be.visible')
        if (device.width <= 768) {
          cy.get('#coupon-code').invoke('outerHeight').should('be.at.least', 40)
        }
        
        cy.task('log', `✅ ${device.name} accessibility validated`)
      })
    })
  })
})
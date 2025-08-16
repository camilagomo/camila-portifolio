// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Import page objects
import './page-objects/HomePage'
import './page-objects/CartPage'
import './page-objects/PromotionsPage'
import './page-objects/AdminPage'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Global configuration and setup
beforeEach(() => {
  // Clear local storage before each test
  cy.clearLocalStorage()
  
  // Set viewport for consistent testing
  cy.viewport(1280, 720)
  
  // Visit base URL before each test
  cy.visit('/')
  
  // Wait for page to load
  cy.get('body').should('be.visible')
})

// Global error handling
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  // on uncaught exceptions (useful for third-party code)
  if (err.message.includes('Script error')) {
    return false
  }
  
  // Log the error for debugging
  cy.task('log', `Uncaught exception: ${err.message}`)
  
  return false
})

// Custom assertions
chai.use(require('chai-colors'))

// Global commands for all tests
Cypress.Commands.add('skipOn', (nameOrFlag, cb) => {
  if (Cypress.env(nameOrFlag) || nameOrFlag) {
    return cy.log(`Skipping test due to ${nameOrFlag}`)
  }
  cb()
})

// Performance monitoring
Cypress.Commands.add('measurePerformance', (actionName) => {
  cy.window().then((win) => {
    const startTime = win.performance.now()
    cy.wrap(startTime).as('startTime')
  })
  
  return cy.then(() => {
    cy.window().then((win) => {
      cy.get('@startTime').then((startTime) => {
        const endTime = win.performance.now()
        const duration = endTime - startTime
        cy.task('log', `${actionName} took ${duration.toFixed(2)}ms`)
      })
    })
  })
})
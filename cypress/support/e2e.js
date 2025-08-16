/**
 * Cypress Support File - QACommerce
 * Global configuration and custom commands
 */

// Import custom commands
import './commands'

// Global error handling
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing on uncaught exceptions
  return false
})
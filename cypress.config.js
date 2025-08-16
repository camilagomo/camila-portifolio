const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Base URL for the application
    baseUrl: 'http://localhost:3000',
    
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Test settings
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    
    // Video and screenshot settings
    video: false,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    
    // Test file patterns
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: [
      'cypress/e2e/examples/**/*',
      '**/__snapshots__/*',
      '**/__image_snapshots__/*'
    ],
    
    // Support file
    supportFile: 'cypress/support/e2e.js',
    
    // Fixtures folder
    fixturesFolder: 'cypress/fixtures',
    
    // Reporter settings
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
    
    // Environment variables
    env: {
      // Application specific
      appName: 'QACommerce',
      appVersion: '1.0.0',
      
      // Test data
      validCoupons: {
        DESCONTO10: { code: 'DESCONTO10', discount: 10, type: 'percentage', minValue: 100 },
        ECONOMIA50: { code: 'ECONOMIA50', discount: 50, type: 'fixed', minValue: 200 },
        PROMO20: { code: 'PROMO20', discount: 20, type: 'percentage', minValue: 500 }
      },
      
      // Test users (if needed for future expansion)
      testUsers: {
        admin: { username: 'admin', password: 'admin123' },
        customer: { username: 'customer', password: 'test123' }
      }
    },
    
    setupNodeEvents(on, config) {
      // Task definitions
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        
        clearData() {
          // Clear any test data if needed
          return null
        }
      })
      
      // Browser launch options
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--disable-web-security')
          launchOptions.args.push('--allow-running-insecure-content')
        }
        
        return launchOptions
      })
      
      return config
    }
  },
  
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
})
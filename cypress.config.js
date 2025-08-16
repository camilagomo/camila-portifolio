const { defineConfig } = require('cypress')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    // Use file:// protocol to open index.html directly
    baseUrl: null,
    
    // Basic settings
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    
    // Reporter configuration for HTML reports
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
    
    setupNodeEvents(on, config) {
      // Task for logging
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
      
      return config
    }
  }
})
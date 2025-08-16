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
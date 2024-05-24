const { defineConfig } = require("cypress");
const fs = require('fs'); // Ensure fs is imported at the top
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        deleteFile(filePath) {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return { success: true };
          }
          return { success: false };
        },
        log(message) {
          console.log(message);
          return null;
        }
      })
    },
    baseUrl: 'https://the-internet.herokuapp.com',
    // Remove downloadsFolder setting for public repo.
    downloadsFolder: '/Users/paul/Desktop/Cypress Downloads',
  },
});

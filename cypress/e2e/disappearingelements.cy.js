describe('Disappearing Elements test', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/disappearing_elements')
    })
    it('Checks if the "Gallery" menu item is present, reloads the page if not, then clicks the Gallery element.', () => {
        // Define the maximum number of retries
        const maxRetries = 5
        let retries = 0
      
        // Check for the element and reload if not found
        function checkAndReload() {
          cy.get('body').then((body) => {
            if (body.find('a[href="/gallery/"]').length > 0) {
              // If the element is found, click it
              cy.get('a[href="/gallery/"]').click()
              cy.url().should('include', '/gallery')
            } else if (retries < maxRetries) {
              // If the element is not found and the retry limit is not reached, reload the page
              retries++
              cy.reload()
              cy.wait(1000)
              checkAndReload()
            } else {
              // If the element is not found and the retry limit is reached, fail the test
              throw new Error('Gallery menu item not found after maximum retries')
            }
          })
        }
      
        // Call the function to start the check and reload process
        checkAndReload()
    })
})
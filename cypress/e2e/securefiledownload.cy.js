describe('Secure File Download tests', () => {
    const path = require('path');
    it('Visits the secure file download page and validly logs in', () => {
        cy.visit('/download_secure', {
          auth: {
            username: 'admin',
            password: 'admin'
          }
        });
        cy.contains('Secure File Downloader')
    })

    it('sends a request with invalid credentials to the page and gets 401', () => {
        cy.request({
          method: 'GET',
          url: '/download_secure',
          failOnStatusCode: false,
          auth: {
            username: 'notadmin',
            password: 'notadmin',
          }
        }).then((response) => {
          expect(response.status).to.eq(401)
        })
    })
    it('Downloads each file link on the page and verifies the download, then deletes', () => {
        const downloadsFolder = Cypress.config("downloadsFolder");

        cy.visit('/download_secure', {
            auth: {
              username: 'admin',
              password: 'admin'
            }
          });
          cy.contains('Secure File Downloader')

        cy.get('[id=content]').last().within(() => {
            cy.get('a').each(($a) => {
                // Get the link text and trim any spaces
                const fileName = $a.text().trim();
                cy.wrap($a).scrollIntoView().should('be.visible').click()

                // Check that the file is downloaded
                const filePath = path.join(downloadsFolder, fileName);
                cy.readFile(filePath, null, { timeout: 15000 }).should("exist").then((content) => {

                    // Verify the file name
                    expect(filePath).to.equal(path.join(downloadsFolder, fileName))

                    // Delete the file after checking
                    cy.task('deleteFile', filePath).then((result) => {
                        expect(result.success).to.be.true
                        
                    })
                })
            })
        })
    })
})
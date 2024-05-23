describe('File Download test', () => {
    const path = require('path');
    beforeEach(() => {
        cy.visit('/download')
    })

    it('Downloads each file link on the page and verifies the download, then deletes', () => {
        const downloadsFolder = Cypress.config("downloadsFolder");

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


// describe('File Download test', () => {
//     const path = require("path");

//     beforeEach(() => {
//         cy.visit('/download')
//     })
//     it('Downloads each file link on the page', () => {
//         cy.get('[id=content]').last().within(() => {
//             cy.get('a').each(($a) => {
//                 cy.wrap($a).scrollIntoView().should('be.visible').click()
//             })
//         })
//     })
//     it('Verify the downloaded file', () => {
//         const downloadsFolder = Cypress.config("downloadsFolder");
//         cy.readFile(path.join(downloadsFolder, "fileName.zip")).should("exist");
//     })
// })
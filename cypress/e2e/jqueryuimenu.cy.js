describe('JQueryUI tests', () => {
    const path = require('path')
    const downloadsFolder = Cypress.config('downloadsFolder')

    beforeEach(() => {
        cy.visit('/jqueryui/menu')
    })

    it('Downloads the PDF, checks the download exists, then deletes the download', () => {
        const fileName = 'menu.pdf' // Replace with the actual file name
        const filePath = path.join(downloadsFolder, fileName)

        cy.get('#menu').find('#ui-id-3').click()
        cy.contains('Downloads').click()
        cy.contains('PDF').click()

        // Check that the file is downloaded
        cy.readFile(filePath, { timeout: 15000 }).should('exist').then(() => {
            // Delete the file after checking
            cy.task('deleteFile', filePath).then((result) => {
                expect(result.success).to.be.true
            })
        })
    })

    it('Downloads the CSV, checks the download exists, then deletes the download', () => {
        const fileName = 'menu.csv' // Replace with the actual file name
        const filePath = path.join(downloadsFolder, fileName)

        cy.get('#menu').find('#ui-id-3').click()
        cy.contains('Downloads').click()
        cy.contains('CSV').click()

        // Check that the file is downloaded
        cy.readFile(filePath, { timeout: 15000 }).should('exist').then(() => {
            // Delete the file after checking
            cy.task('deleteFile', filePath).then((result) => {
                expect(result.success).to.be.true
            })
        })
    })

    it('Downloads the Excel file, checks the download exists, then deletes the download', () => {
        const fileName = 'menu.xls' // Replace with the actual file name
        const filePath = path.join(downloadsFolder, fileName)

        cy.get('#menu').find('#ui-id-3').click()
        cy.contains('Downloads').click()
        cy.contains('Excel').click()

        // Check that the file is downloaded
        cy.readFile(filePath, { timeout: 15000 }).should('exist').then(() => {
            // Delete the file after checking
            cy.task('deleteFile', filePath).then((result) => {
                expect(result.success).to.be.true
            })
        })
    })

    it('Navigates to JQuery UI page', () => {
        cy.get('#menu').find('#ui-id-3').click()
        cy.contains('Back to JQuery UI').click()
        cy.url().should('include', '/jqueryui')
    })
})
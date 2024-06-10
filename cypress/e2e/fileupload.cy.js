// Drag and drop upload currently calls a 500 240524

describe('File Upload test', () => {
    beforeEach(() => {
        cy.visit('/upload')
    })
    it('Uploads a file', () => {
        cy.get('#file-upload').selectFile('cypress/fixtures/test_small_gif.gif')
        cy.get('#file-submit').click()
        cy.get('h3').contains('File Uploaded')
    })
    it('Uploads a file via drag and drop', () => {
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/test_small_gif.gif', {
            action: 'drag-drop'
        })
        cy.get('#drag-drop-upload > .dz-preview > .dz-success-mark > span').should('be.visible')
        cy.get('#file-submit').click()
        cy.get('h3').contains('File Uploaded')
    })
})
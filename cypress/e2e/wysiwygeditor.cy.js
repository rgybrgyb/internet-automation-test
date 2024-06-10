//WYSIWYG Doesn't currently function 240524
// Using demo from TinyMCE site instead

describe('WYSIWYG Editor tests', () => {
    beforeEach(() => {
        cy.visit('https://www.tiny.cloud/docs/tinymce/latest/classic-demo/')
    })
    it('Types into the WYSIWYG', () => {
        cy.get('iframe#classic_ifr').then($iframe => {
            const $body = $iframe.contents().find('body')

            cy.wrap($body).clear().type('testtext')
            cy.wrap($body).should('contain', 'testtext')
        })
    })
    it('Uploads an image into the WYSIWYG with specified alt text and dimensions, and asserts image exists with specified alt text', () => {
        // Navigates menu and uploads an image via drag and drop
        cy.get('.tox-menubar').children().eq(3).click()
        cy.contains('Image...').click()
        cy.get('.tox-dialog__body-nav').contains('Upload').click()
        cy.get('.tox-dropzone').selectFile('cypress/fixtures/test_small_gif.gif', {
            action: 'drag-drop'
        })
        // Enters alt text, unlocks image dimension lock, sets width and height then uploads
        cy.get('.tox-form').children().eq(1).type('testalttext')
        cy.get('.tox-form').children().eq(2).find('.tox-lock').click()
        cy.get('.tox-form').children().eq(2).find('.tox-textfield').first().clear().type(500)
        cy.get('.tox-form').children().eq(2).find('.tox-textfield').last().clear().type(400)
        cy.get('.tox-dialog__footer').contains('Save').click()
        
        // Checks the image with the test alt text is present in the WYSIWYG
        cy.get('iframe#classic_ifr').then($iframe => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).find('img').should('have.attr', 'alt', 'testalttext')
        })
    })
})
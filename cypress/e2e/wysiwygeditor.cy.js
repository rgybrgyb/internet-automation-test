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
})
//WYSIWYG Doesn't currently function 240524

import 'cypress-iframe'

describe('WYSIWYG Editor tests', () => {
    beforeEach(() => {
        cy.visit('/tinymce')
    })
    it('Types into the WYSIWYG', () => {
        cy.get('#mce_0 > button').click()


    })

})
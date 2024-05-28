describe('JQueryUI tests', () => {
    beforeEach(() => {
        cy.visit('/jqueryui/menu')
    })
    // it('Selects the JQuery UI Menu', () => {
    //     cy.get('#menu').find('#ui-id-3').trigger('mouseover').then($el => {
    //         cy.wrap($el).invoke('show')
    //         cy.wrap($el).find('#ui-id-4').trigger('mouseover').then($el2 => {
    //             cy.wrap($el2).trigger('mouseover')
    //             cy.wrap($el2).find('#ui-id-5').click()
    //         })
    //     })
    // })
    it('Downloads the PDF', () => {
        cy.get('#menu').find('#ui-id-3').click()
        cy.contains('Downloads').click()
        cy.contains('PDF').click()
    })
    it('Downloads the CSV', () => {
        cy.get('#menu').find('#ui-id-3').click()
        cy.contains('Downloads').click()
        cy.contains('CSV').click()
    })
    it('Downloads the Excel file', () => {
        cy.get('#menu').find('#ui-id-3').click()
        cy.contains('Downloads').click()
        cy.contains('Excel').click()
    })
    it('Navigates to JQuery UI page', () => {
        cy.get('#menu').find('#ui-id-3').click()
        cy.contains('JQuery UI').click()
    })
})
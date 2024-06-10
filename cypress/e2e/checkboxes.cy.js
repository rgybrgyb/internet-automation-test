describe('Checkboxes test', () => {
    beforeEach(() => {
        cy.visit('/checkboxes')
    })
    it('Checks checkbox 1 by type and asserts it is checked', () => {
        cy.get('[type="checkbox"]').first().check()
        cy.get('[type="checkbox"]').first().should('be.checked')
    })
    it('Clicks checkbox 2 by type and asserts it is not checked', () => {
        cy.get('[type="checkbox"]').last().click()
        cy.get('[type="checkbox"]').last().should('not.be.checked')
    })
})
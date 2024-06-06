describe('Typos tests', () => {
    beforeEach(() => {
        cy.visit('/typos')
    })
    it('Finds the correct text if it exists on the page', () => {
        cy.get('#content').contains('won\'t', { timeout : 500 })
    })
})
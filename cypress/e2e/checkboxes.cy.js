describe('Checkboxes test', () => {
    beforeEach(() => {
        cy.visit('/checkboxes')
    })
    it('Checks checkbox 1', () => {
        cy.get('[type="checkbox"]').first().check()
    })
    it('Checks checkbox 2', () => {
        cy.get('[type="checkbox"]').last().check()
    })
})
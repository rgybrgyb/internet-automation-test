describe('Dropdown test', () => {
    beforeEach(() => {
        cy.visit('/dropdown')
    })
    it('Asserts that the dropdown is not selected, changes to option 1 and verifies', () => {
        cy.get('#dropdown').should('contain.text', 'Please select an option')
        cy.get('#dropdown').select('Option 1')
        cy.get('#dropdown').should('contain.text', 'Option 1')
    })
    it('Asserts that the dropdown is not selected, changes to option 2 and verifies', () => {
        cy.get('#dropdown').should('contain.text', 'Please select an option')
        cy.get('#dropdown').select('Option 2')
        cy.get('#dropdown').should('contain.text', 'Option 2')
    })
})
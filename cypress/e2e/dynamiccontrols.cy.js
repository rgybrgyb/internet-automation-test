describe('Dynamic Controls test', () => {
    beforeEach(() => {
        cy.visit('/dynamic_controls')
    })
    it('Checks the checkbox', () => {
        cy.get('#checkbox > input').check()
        cy.get('#checkbox > input').should('be.checked')
        })
    it('Removes the checkbox', () => {
        cy.get('#checkbox-example > button').click()
        cy.get('#checkbox').should('not.exist')
    })
    it('Checks that the form field is disabled', () => {
        cy.get('input').should('be.disabled')
    })
    it('Clicks enable then enters text and checks that it is present', () => {
        cy.get('#input-example > button').click()
        cy.get('#input-example > input').type('testtext')
        cy.get('#input-example > input').should('have.value', 'testtext')
    })
})
describe('Dynamic Loading test', () => {
    it('Checks that there is no text, clicks the button, then checks that there is text on page 1', () => {
        cy.visit('/dynamic_loading/1')
        cy.get('#finish > h4').should('not.be.visible')
        cy.get('button').click()
        cy.wait(6000)
        cy.get('#finish > h4').should('be.visible')
    })
    it('Checks that there is no text, clicks the button, then checks that there is text on page 2', () => {
        cy.visit('/dynamic_loading/2')
        cy.get('#finish > h4').should('not.exist')
        cy.get('button').click()
        cy.wait(6000)
        cy.get('#finish > h4').contains('Hello')
    })
})
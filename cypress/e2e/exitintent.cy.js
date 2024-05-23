// This functionality currently appears to be broken on the site 230524

describe('Exit Intent test', () => {
    beforeEach(() => {
        cy.visit('/exit_intent')
    })
    it('Moves the mouse out of the viewport and checks that a modal has opened', () => {
        cy.viewport(1000, 660)
        cy.get('body').trigger('mousemove', { clientX: -1001, clientY: -700 })
        cy.get('.modal').should('be.visible')
    })
})
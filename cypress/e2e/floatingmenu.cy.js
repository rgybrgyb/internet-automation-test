describe('Floating Menu test', () => {
    beforeEach(() => {
        cy.visit('/floating_menu')
    })
    it('Checks menu is visible at the top of the screen, scrolls down, then checks again menu is visible', () => {
        cy.get('ul > :nth-child(2) > a').should('be.visible')
        cy.scrollTo(0, 50000)
        cy.get('ul > :nth-child(2) > a').should('be.visible')
    })
})
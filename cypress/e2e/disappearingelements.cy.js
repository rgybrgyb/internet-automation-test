describe('Disappearing Elements test', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/disappearing_elements')
    })
    it('Checks if the "Gallery" menu item is present, reloads the page if not, then clicks the Gallery element.', () => {
        cy.get('a[href="/gallery/"]')
        .should('not.exist')
        .then()
    })
})
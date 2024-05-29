describe('Shifting Content tests', () => {
    it('Selects the Gallery button on the menu page and clicks it', () => {
        cy.visit('/shifting_content/menu')
        cy.get('ul').contains('Gallery').click()
        cy.location().should(loc => {
            expect(loc.pathname).to.not.equal('/shifting_content/menu')
        })
    })
    it('Selects the image on the image page and checks it has loaded', () => {
        cy.visit('/shifting_content/image')
        cy.get('[src="/img/avatar.jpg"]').should('be.visible')
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
})
describe('Dynamic Content test', () => {
    beforeEach(() => {
        cy.visit('/dynamic_content')
    })
    it('Checks that all images have loaded', () => {
        cy.get('[id=content]').last().within(() => {
            cy.get('img').each(($img) => {
                cy.wrap($img).scrollIntoView().should('be.visible')
                expect($img[0].naturalWidth).to.be.greaterThan(0)
                expect($img[0].naturalHeight).to.be.greaterThan(0)
            })
        })
    })

    it('Checks that all descriptions have loaded and are longer than 5 characters', () => {
        cy.get(':nth-child(n) > .large-10').each(($text) => {
            cy.wrap($text).invoke('text').its('length').should('be.gte', 5)
        })
    })
})
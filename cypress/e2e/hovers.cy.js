// Hover is not functional without a plugin in Cypress, invoked show which directly simulates showing the displayed text. 
// Code if mouseenter works is commented out below
// Links also currently 404 250524
describe('Hovers tests', () => {
    beforeEach(() => {
        cy.visit('/hovers')
    })
    it('"Hovers" over each image and checks that text is visible', () => {
        cy.get('.figcaption').each(($div) => {
            cy.wrap($div).invoke('show')
            .contains('user').first().should('be.visible')
        })
    })
    it('"Hovers" over each image and clicks the link', () => {
        cy.get('.figcaption').each(($div) => {
            const title = $div.find('h1').first().text()
            const link = $div.find('a').first()

            cy.visit(link.attr('href'))

            cy.get('h1').should('have.text', title)
            cy.go('back')
        })
    })

    // it('Hovers over an image and checks that text is visible', () => {
    //     cy.get('.figure').each(($div) => {
    //         cy.wrap($div).trigger('mouseenter')
    //         cy.get('.figcaption').should('be.visible')
    //     })
    // })
})

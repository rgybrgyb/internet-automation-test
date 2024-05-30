describe('Slow Resources tests', () => {
    it('Finds the text "tracking code javascript" on the page', () => {
        cy.visit('/slow')
        cy.get('p').contains('tracking code javascript')
    })
    it('Waits for the 30 second slow external request to complete and checks it has the expected 503 status', () => {
        // Setting up spying on requests
        cy.intercept('GET', '**slow_external').as('get')
        // Visit the page
        cy.visit('/slow')
        cy.get('@get').then(console.log)
        // Assert response statusCode is correct
        cy.wait('@get', { responseTimeout: 40000 }).then(({response}) => {
            expect(response.statusCode).to.eq(503)
        })
    })
})
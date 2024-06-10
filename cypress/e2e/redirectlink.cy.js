describe('Redirect Link tests', () => {
    it('Clicks the link and asserts that the correct page has been opened', () => {
        cy.visit('/redirector')
        cy.get('#redirect').click()
        cy.location('pathname').should('equal', '/status_codes')
    })
    it('Clicks the 200 code link and asserts that a 200 response is recieved', () => {
        cy.visit('/status_codes')
        // Setting up spying on requests
        cy.intercept('GET', '**200').as('get')
        // Click link
        cy.get(':nth-child(1) > a').click()
        cy.get('@get').then(console.log)
        // Assert response statusCode is correct
        cy.wait('@get').then(({response}) => {
            expect(response.statusCode).to.eq(200)
        })
    })
    it('Clicks the 301 code link and asserts that a 301 response is recieved', () => {
        cy.visit('/status_codes')
        // Setting up spying on requests
        cy.intercept('GET', '**301').as('get')
        // Click link
        cy.get('ul > :nth-child(2) > a').click()
        cy.get('@get').then(console.log)
        // Assert response statusCode is correct
        cy.wait('@get').then(({response}) => {
            expect(response.statusCode).to.eq(301)
        })
    })
    it('Clicks the 404 code link and asserts that a 404 response is recieved', () => {
        cy.visit('/status_codes')
        // Setting up spying on requests
        cy.intercept('GET', '**404').as('get')
        // Click link
        cy.get(':nth-child(3) > a').click()
        cy.get('@get').then(console.log)
        // Assert response statusCode is correct
        cy.wait('@get').then(({response}) => {
            expect(response.statusCode).to.eq(404)
        })
    })
    it('Clicks the 500 code link and asserts that a 500 response is recieved', () => {
        cy.visit('/status_codes')
        // Setting up spying on requests
        cy.intercept('GET', '**500').as('get')
        // Click link
        cy.get(':nth-child(4) > a').click()
        cy.get('@get').then(console.log)
        // Assert response statusCode is correct
        cy.wait('@get').then(({response}) => {
            expect(response.statusCode).to.eq(500)
        })
    })
})
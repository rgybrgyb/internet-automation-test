describe('Geolocation tests', () => {
    beforeEach(() => {
        cy.visit('/geolocation', {
            onBeforeLoad (win) {
                const latitude = 30.11111 // Set Coordinates here
                const longitude = 30.11111 // Set Coordinates here
                cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
                    return cb({ coords: { latitude, longitude } })
                })
            }
        })
    })
    it('Clicks the "Where am I" button and checks that the correct latitude and longitude display', () => {
        cy.get('button').click()
        cy.get('#lat-value').should('have.text', '30.11111') // Evaluate Coordinates here
        cy.get('#long-value').should('have.text', '30.11111') // Evaluate Coordinates here
    })
    it('Clicks the "Where am I" button and then the google link', () => {
        cy.get('button').click()
        cy.intercept('GET', '^/q=[^\s]', (req) => {
            const reqUrl = req.url
            console.log(reqUrl)
          })
          cy.get('#map-link > a').click()
        // cy.url().should('include', '30.11111')
    })
})

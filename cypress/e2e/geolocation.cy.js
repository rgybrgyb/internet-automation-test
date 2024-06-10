describe('Geolocation tests', () => {
    const latitude = 30.11111 // Set Coordinates here
    const longitude = 30.11111 // Set Coordinates here

    beforeEach(() => {
        cy.visit('/geolocation', {
            onBeforeLoad (win) {
                cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
                    return cb({ coords: { latitude, longitude } })
                })
            }
        })
    })
    it('Clicks the "Where am I" button and checks that the correct latitude and longitude display', () => {
        cy.get('button').click()
        cy.get('#lat-value').should('have.text', latitude.toString()) // Evaluate Coordinates here
        cy.get('#long-value').should('have.text', longitude.toString()) // Evaluate Coordinates here
    })
    it('Clicks the "Where am I" button and then asserts the google link contains latitude and longitude values', () => {
        cy.get('button').click()
        cy.get('#map-link > a').should('have.attr', 'href').then((href) => {
            // Assert that the href attribute contains the correct latitude and longitude
            expect(href).to.include(latitude.toString());
            expect(href).to.include(longitude.toString());
        })
        
        // Currently running into a same origin policy error, so actual navigation isn't currently functioning
        // Otherwise this block should check that the new URL is correct

        // cy.intercept('GET', '**/maps/*', (req) => {
        //     const reqUrl = new URL(req.url);
        //     console.log(reqUrl);
        //     expect(reqUrl.search).to.include(latitude.toString());
        //     expect(reqUrl.search).to.include(longitude.toString());
        //     req.reply({ statusCode: 200, body: 'Intercepted' }); // Prevent actual navigation
        // });

        // cy.get('#map-link > a').click();
    })
})

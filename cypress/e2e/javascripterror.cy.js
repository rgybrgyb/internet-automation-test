describe('Javascript Onload event error test', () => {
    it('Handles the onload exception error on the page', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            if(err.message.includes('document.propertyThatDoesNotExist is undefined')){
                console.log('Javascript onload event error')
                return false
            }
            return true
        })
        cy.visit('/javascript_error')
        // Assert that text on the page is found
        cy.contains('This page has a JavaScript error in the onload event')
    })
})
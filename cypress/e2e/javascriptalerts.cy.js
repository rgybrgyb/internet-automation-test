describe('Javascript Alerts tests', () => {
    beforeEach(() => {
        cy.visit('javascript_alerts')  
    })
    it('Selects the first button and asserts that the alert has been shown', () => {
        const alertShown = cy.stub().as("alertShown") // Alias a stub for the alert so get can be used on it
        cy.on('window:alert', alertShown)
        cy.get('button').first().click()
        cy.get("@alertShown").should("have.been.calledOnceWith", "I am a JS Alert")
    })
    it('Selects the second button and asserts that the confirm has been shown', () => {
        const confirmShown = cy.stub().as("confirmShown")
        cy.on('window:confirm', confirmShown)
        cy.get('button').eq(1).click()
        cy.get("@confirmShown").should("have.been.calledOnceWith", "I am a JS Confirm")
        cy.get('#result').should("have.text", "You clicked: Ok")
    })
    it('Selects the second button and clicks cancel, then asserts that the confirm has been cancelled', () => {
        const confirmShown = cy.stub().as("confirmShown")
        cy.on('window:confirm', confirmShown)
        cy.on('window:confirm', () => false)
        cy.get('button').eq(1).click()
        cy.get("@confirmShown").should("have.been.calledOnceWith", "I am a JS Confirm")
        cy.get('#result').should("have.text", "You clicked: Cancel")
    })
    it('Selects the third button enters prompt text, then asserts that the prompt text was submitted', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('Here is some test text.')
            cy.get('button').eq(2).click()
            cy.get('#result').contains('You entered: Here is some test text.')
        })
    })
})
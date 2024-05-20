describe('Context Menu Test', () => {
    beforeEach(() => {
        cy.visit('/context_menu')
    })
    it('Right clicks in the box and clicks ok on the resulting context menu and checks the alert text matches expectations', () => {
        const alertShown = cy.stub().as("alertShown")
        cy.on('window:alert', alertShown)
        cy.get('[id="hot-spot"]').rightclick()
        cy.get("@alertShown").should("have.been.calledOnceWith", "You selected a context menu")
    })
})
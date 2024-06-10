describe('Context Menu Test', () => {
    beforeEach(() => {
        cy.visit('/context_menu')
        const alertShown = cy.stub().as("alertShown")
        cy.on('window:alert', alertShown)
    })
    it('Right clicks in the box and clicks ok on the resulting context menu and checks the alert text matches expectations', () => {
        cy.get('[id="hot-spot"]').rightclick()
        cy.get("@alertShown").should("have.been.calledOnceWith", "You selected a context menu")
    })
    it('Left clicks in the box and checks that the alert has not been shown', () => {
        cy.get('[id="hot-spot"]').click()
        cy.get("@alertShown").should("not.have.been.calledOnceWith", "You selected a context menu")
    })
})
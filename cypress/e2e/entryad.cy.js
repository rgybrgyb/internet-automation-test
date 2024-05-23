describe('Entry Ad test', () => {
    beforeEach(() => {
        cy.visit('/entry_ad')
    })
    it('Closes the modal, reloads the page, then asserts the modal is not present', () => {
        cy.get('.modal').should('be.visible')
        cy.get('.modal-footer > p').click()
        cy.reload
        cy.intercept('POST', '**/entry-ad').as('getPost')
        cy.get('.modal').should('not.be.visible')
        cy.get('#restart-ad').click()
        cy.wait(20000)
        cy.visit('/entry_ad')
        cy.get('.modal').should('be.visible')
    })
})
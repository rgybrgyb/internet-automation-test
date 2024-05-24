describe('Form Authentication tests', () => {
    beforeEach(() => {
        cy.visit('/login')
    })
    it('Logs in with valid credentials', () => {
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('#button').click()
        cy.url().should('include', '/secure')
    });
    it('Logs in with null credentials', () => {
        cy.get('[id="username"]').type('')
        cy.get('[id="password"]').type('')
        cy.get('#button').click()
        cy.get('[id="flash"').should('include', 'Your username is invalid!')
    });
    it('Logs in with null username and valid password', () => {
        cy.get('[id="username"]').type('')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('#button').click()
        cy.get('[id="flash"').should('include', 'Your username is invalid!')
    });
    it('Logs in with valid username and null password', () => {
        cy.get('[id="username"]').type('')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('#button').click()
        cy.get('[id="flash"').should('include', 'Your password is invalid!')
    });
    it('Logs in with valid credentials', () => {
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('#button').click()
        cy.url().should('include', '/secure')
    });
    it('Logs in with valid credentials and logs out of the secure area', () => {
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('#button').click()
        cy.url().should('include', '/secure')
        cy.get('#button').click()
        cy.url().should('include', '/login')
    });
  })
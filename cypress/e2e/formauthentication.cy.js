describe('Form Authentication tests', () => {
    beforeEach(() => {
        cy.visit('/login')
    })
    it('Logs in with valid credentials and asserts user is taken to the correct page', () => {
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.url().should('include', '/secure')
    });
    it('Attempts to log in with null credentials and fails', () => {
        cy.get('[id="username"]').type(' ')
        cy.get('[id="password"]').type(' ')
        cy.get('[type="submit"]').click()
        cy.wait(200)
        cy.get('[id="flash"]').should('contain', 'Your username is invalid!')
    });
    it('Attempts to log in with null username and valid password and fails', () => {
        cy.get('[id="username"]').type(' ')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.get('[id="flash"]').should('contain', 'Your username is invalid!')
    });
    it('Attempts to log in with valid username and null password and fails', () => {
        cy.get('[id="username"]').type(' ')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.get('[id="flash"]').should('contain', 'Your username is invalid!')
    });
    it('Logs in with valid credentials, logs out of the secure area and asserts user is on the login page', () => {
        cy.get('[id="username"]').type('tomsmith')
        cy.get('[id="password"]').type('SuperSecretPassword!')
        cy.get('[type="submit"]').click()
        cy.url().should('include', '/secure')
        cy.contains('Logout').click()
        cy.url().should('include', '/login')
    });
  })
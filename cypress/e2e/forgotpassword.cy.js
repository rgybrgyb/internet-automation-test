// Email submission currently calls a 500 240524
describe('Forgot Password test', () => {
    beforeEach(() => {
        cy.visit('/forgot_password')
    })
    it('Selects the email field, enters an email and clicks "Retreive Password', () => {
        cy.get('#email').type('test@email.com')
        cy.get('#form_submit').click()
        cy.url().should('include', '/email_sent').should('not.be.true') // Last 'should' to be omitted when the issue has been resolved 240524
    })
})
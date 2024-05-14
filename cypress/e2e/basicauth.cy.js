describe('basic auth test', () => {
  it('visits the basic auth webpage', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    });
  })
})
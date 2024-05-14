describe('basic auth test', () => {
  it('visits the basic auth webpage and validly logs in', () => {
    cy.visit('/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    });
    cy.contains('Congratulations! You must have the proper credentials.')
});
  it('visits the basic auth webpage and logs in with incorrect credentials', () => {
    cy.visit('/basic_auth', {
      retryOnStatusCodeFailure: true,
      auth: {
        username: 'notadmin',
        password: 'notadmin'
      },
    })
  });
  it('sends a request with valid credentials to the page and gets 200', () => {
    cy.request({
      method: 'GET',
      url: '/basic_auth',
      failOnStatusCode: false,
      auth: {
        username: 'admin',
        password: 'admin',
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('sends a request with bad credentials to the page and gets 401', () => {
    cy.request({
      method: 'GET',
      url: '/basic_auth',
      failOnStatusCode: false,
      auth: {
        username: 'notadmin',
        password: 'notadmin',
      }
    }).then((response) => {
      expect(response.status).to.eq(401)
    })
  })
  it('sends a request with null credentials to the page and gets 401', () => {
    cy.request({
      method: 'GET',
      url: '/basic_auth',
      failOnStatusCode: false,
      auth: {
        username: '',
        password: '',
      }
    }).then((response) => {
      expect(response.status).to.eq(401)
    })
  })
});
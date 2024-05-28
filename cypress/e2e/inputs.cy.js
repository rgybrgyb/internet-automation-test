describe('Inputs tests', () => {
    beforeEach(() => {
        cy.visit('/inputs')
    })
    it('Inputs a test value and asserts that the value is set correctly', () => {
        const testValue = -14
        cy.get('input[type="number"]').type(testValue).trigger('change')
          .should('have.value', testValue)
    })
})
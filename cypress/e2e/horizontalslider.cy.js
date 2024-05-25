describe('Horizontal Slider tests', () => {
    beforeEach(() => {
        cy.visit('/horizontal_slider')
    })

    it('Asserts the slider is at 0, clicks the slider and moves it 70% up', () => {
        cy.get('input[type=range]').should('have.attr', 'value', 0)
        cy.get('input[type=range]').invoke('val', 3.5).trigger('change')
        cy.get('#range').should('be.text', 3.5)
    })
    // it('Asserts the slider is at 0, clicks the slider and arrows it to 90%', () => {
    //     const goal = 4.5
    //     const step = 0.5
    //     const initialValue = 0
    //     const stepsToGoal = (goal - initialValue) / step
       
    //     cy.get('input[type=range]').should('have.attr', 'value', 0)
    //     cy.get('input[type=range]').focus()

    //     Cypress._.times(stepsToGoal, (i) => {
    //         const expectedAtThisStep = (i+1) * step
    //         cy.get('input[type=range]').type('rightarrow').trigger('change')
    //         cy.get('input[type=range]').invoke('val').then(val => +val).should('eq', expectedAtThisStep)
    //         cy.get('#range').should('have.text', expectedAtThisStep)
    //     })

    //     cy.get('#range').should('have.text', goal)
    // })
 
})
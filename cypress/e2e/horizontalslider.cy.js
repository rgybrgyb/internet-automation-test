describe('Horizontal Slider tests', () => {
    const targetValue = 4.5

    beforeEach(() => {
        cy.visit('/horizontal_slider')
    })

    it('Asserts the slider is at 0, clicks the slider and moves it 70% up', () => {
        cy.get('input[type=range]').should('have.attr', 'value', 0)
        cy.get('input[type=range]').invoke('val', 3.5).trigger('change')
        cy.get('#range').should('be.text', 3.5)
    })
    // Attempted to get arrow button presses working but the below seems not to work. 100624

    // it('Focuses on the slider, uses arrow keys to reach the target value, and asserts the value', () => {
    //     // Calculate the number of steps needed to reach the target value
    //     const step = 0.5
    //     const initialValue = 0
    //     const stepsToGoal = (targetValue - initialValue) / step

    //     // Ensure slider is initially at 0
    //     cy.get('input[type=range]').should('have.attr', 'value', '0')
    //     cy.get('input[type=range]').click()

    //     // Focus on the slider and use arrow keys
    //     cy.get('input[type=range]').focus().then(($slider) => {
    //         Cypress._.times(stepsToGoal, () => {
    //             cy.wrap($slider).type('{rightarrow}').trigger('change')
    //         });
    //     });

    //     // Assert the slider value
    //     cy.get('#range').should('have.text', targetValue.toString())
    // });

})
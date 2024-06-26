describe('Drag and Drop test', () => {
    beforeEach(() => {
        cy.visit('/drag_and_drop')
    })
    it('Asserts Column A and B are in initial position, drags B over A, and asserts the element order has changed', () => {
       
        const dataTransfer = new DataTransfer();

        // Before Drag and Drop column-a has 'A' and 'column-b' has 'B'
        cy.get('#column-a')
            .should('have.text', 'A')
        cy.get('#column-b')
            .should('have.text', 'B')

        cy.get('#column-a').trigger('dragstart', { dataTransfer });
        cy.get('#column-b').trigger('drop', { dataTransfer });

        // After Drag and Drop column-a has 'B' and 'column-b' has 'A'
        cy.get('#column-a')
            .should('have.text', 'B')
        cy.get('#column-b')
            .should('have.text', 'A')
    })
})
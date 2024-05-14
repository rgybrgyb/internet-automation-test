describe('Add/Remove Elements test', () => {
    beforeEach(() => {
        cy.visit('/add_remove_elements/')
    })
    it('attempts to locate delete button first load and fails', () => {
        cy.contains('Delete').should('not.exist');
    })
    it('clicks on "Add Element" and creates a "Delete" button', () => {
        cy.contains('Add Element').click();
        cy.contains('Delete').should('exist');
    })
    it('clicks on "Add Element", creates a "Delete" button and clicks it, removing the button itself', () => {
        cy.contains('Add Element').click();
        cy.contains('Delete').click();
        cy.contains('Delete').should('not.exist');
    })
    it('clicks on "Add Element" a random number of times between 0-99 and checks that the number of delete buttons matches', () => {
        function randomNumberGen(max) {
            return Math.floor(Math.random() * max);
        }
        const randomNumber = randomNumberGen(99);
        for(let n = 0; n < randomNumber; n++){
            cy.contains('Add Element').click();
        }
        cy.get('button.added-manually').should('have.length', randomNumber);
    })
});
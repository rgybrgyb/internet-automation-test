describe('Drag and Drop test', () => {
    beforeEach(() => {
        cy.visit('/drag_and_drop')
    })
    it('Clicks B and drags it over A, changing the order of the elements', () => {
        cy.drag('[id="column=b"] > :nth-child(1)', '[id="column-a"]')
        .should('contain', 'B')
    })
})
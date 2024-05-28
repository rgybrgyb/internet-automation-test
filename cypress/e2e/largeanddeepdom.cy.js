describe('Large & Deep DOM tests', () => {
    beforeEach(() => {
        cy.visit('/large')
    })
    it('Selects last row and column in table', () => {
        cy.get('.row-50 > .column-50').contains('50.50')
    })    
    it('Locates table cell at 3rd column, 4th row and checks the content is "4.3"', () => {
        cy.get('table')
        .find('tr').eq(4)
        .find('td').eq(2)
        .contains('4.3')
    })
    it('Locates table cell in last column, 5th row and checks the content is "5.50', () => {
        cy.get('table')
        .find('tr').eq(5)
        .find('td').last()
        .contains('5.50')
    })
}) 
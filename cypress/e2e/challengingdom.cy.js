describe('Challenging DOM test', () => {
    beforeEach(() => {
        cy.visit('/challenging_dom')
    })
    it('Locates and clicks the top button on the page', () => {
        cy.get('div.large-2.columns').children().eq(0).click
    })
    it('Locates and clicks the middle button on the page', () => {
        cy.get('div.large-2.columns').children().eq(2).click
    })
    it('Locates and clicks the bottom button on the page', () => {
        cy.get('div.large-2.columns').children().eq(4).click
    })
    it('Locates table cell at 3rd Column, 4th Row and check the content is "Adipisci3"', () => {
        cy.get('table')
        .find('tr').eq(4)
        .find('td').eq(2)
        .contains('Adipisci3')
    })
    it('Locates table cell in last column, last row and clicks "edit", then asserts URL change', () => {
        cy.get('table')
        .find('tr').last()
        .find('td').last()
        .find('a').first()
        .click()
        cy.location('hash').should('include', '#edit')
    })
    it('Locates table cell in last column, 5th row and clicks "delete", then asserts URL change', () => {
        cy.get('table')
        .find('tr').eq(5)
        .find('td').last()
        .find('a').last()
        .click()
        cy.location('hash').should('include', '#delete')
})
})
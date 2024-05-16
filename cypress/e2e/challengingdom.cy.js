describe('Challenging DOM test', () => {
    beforeEach(() => {
        cy.visit('/challenging_dom/')
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
})
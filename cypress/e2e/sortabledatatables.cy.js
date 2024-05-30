describe('Sortable Data Tables tests', () => {
    beforeEach(() => {
        cy.visit('/tables')
    })
    it('Checks that the first table has 4 rows', () => {
        cy.get('#table1')
        .find('tr')
        .then((row) => {
            cy.log(row.length -1)
            cy.expect(row.length -1 ).to.eq(4)
        })
    })
    it('Checks that the first table has been sorted by Due amount', () => {
        cy.get('#table1 > thead > tr > :nth-child(4) > span').click()
        cy.get('#table1')
        .within(() => {
            const toStrings = (cells$) => _.map(cells$, 'textContent')
            const toNumbers = (due) => _.map(due, Number)

            cy.get('')
            .then(toStrings)
            .then(toNumbers)
            .then((due) => {
                const sorted = _.sortBy(due)

                expect(due, 'cells are sorted 📈').to.deep.equal(sorted)
            })
        })
    })
    it('Locates table cell at 3rd Column, 4th Row and check the content is "Adipisci3"', () => {
        cy.get('table')
        .find('tr').eq(4)
        .find('td').eq(2)
        .contains('Adipisci3')
    })
    it('Locates table cell in last column, last row and clicks "edit"', () => {
        cy.get('table')
        .find('tr').last()
        .find('td').last()
        .find('a').first()
        .click
    })
    it('Locates table cell in last column, 5th row and clicks "delete"', () => {
        cy.get('table')
        .find('tr').eq(5)
        .find('td').last()
        .find('a').last()
        .click
    })
})
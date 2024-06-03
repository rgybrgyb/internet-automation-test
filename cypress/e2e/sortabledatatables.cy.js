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
    it('Sorts the first table by Due then asserts the contents are sorted', () => {
        cy.get('#table1')
        .contains('Due')
        .click()

        cy.get('#table1')
        .should('exist')
        .find('tr')
        .should('have.length.greaterThan', 0)
        .then(($trs) => {
            const arrayOftd = $trs.map((i, tr) => {
                const text = Cypress.$(tr).find('td').eq(3).text()
                return parseFloat(text.replace(/[$,]/g, ''))
              }).get()

            const test = [...arrayOftd].sort((a, b) => a - b)          
            expect(arrayOftd).to.deep.equal(test)
          })
       })
       it('Sorts the first table by Last Name then asserts the contents are sorted', () => {
        cy.get('#table1')
        .contains('Last Name')
        .click()

        cy.get('#table1')
        .should('exist')
        .find('tr')
        .should('have.length.greaterThan', 0)
        .then(($trs) => {
            const arrayOftd = $trs.map((i, tr) => {
                return Cypress.$(tr).find('td').eq(0).text().trim()
              }).get()

            const test = [...arrayOftd].sort()          
            expect(arrayOftd).to.deep.equal(test)
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
        cy.location().contains('#edit')
    })
    it('Locates table cell in last column, 5th row and clicks "delete"', () => {
        cy.get('table')
        .find('tr').eq(5)
        .find('td').last()
        .find('a').last()
        .click
        cy.location().contains('#delete')
        
    })

})


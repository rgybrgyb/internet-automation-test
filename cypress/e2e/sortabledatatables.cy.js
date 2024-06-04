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
       it('Sorts the second table by Due then asserts the contents are reverse sorted', () => {
        cy.get('#table2')
        .contains('Due')
        .dblclick()

        cy.get('#table2')
        .should('exist')
        .find('tr')
        .should('have.length.greaterThan', 0)
        .then(($trs) => {
            const arrayOftd = $trs.map((i, tr) => {
                const text = Cypress.$(tr).find('td').eq(3).text()
                return parseFloat(text.replace(/[$,]/g, ''))
              }).get()

            const test = [...arrayOftd].sort((a, b) => b - a)          
            expect(arrayOftd).to.deep.equal(test)
          })
       })

       it('Sorts the second table by Last Name then asserts the contents are reverse sorted', () => {
        cy.get('#table2')
        .contains('Last Name')
        .dblclick()

        cy.get('#table2')
        .should('exist')
        .find('tr')
        .should('have.length.greaterThan', 0)
        .then(($trs) => {
            const arrayOftd = $trs.map((i, tr) => {
                const text = Cypress.$(tr).find('td').eq(0).text().trim()
                return text === '' ? null : text
              }).get()

            const sortedArray = [...arrayOftd].sort((a, b) => {
                if (a === null) return 1
                if (b === null) return -1
                return a.localeCompare(b)
            })
            const reversedSortedArray = sortedArray.reverse()        
            expect(arrayOftd).to.deep.equal(reversedSortedArray)
          })
       })
    })
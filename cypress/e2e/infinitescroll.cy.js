describe('Infinite Scroll tests', () => {
    beforeEach(() => {
        cy.visit('/infinite_scroll')
    })

    it('Scrolls down to find the item', () => {
        const findItem = (item, attempt = 1) => {
            if (attempt === 100) throw 'Not found'

            return cy.get('[class="scroll large-8 columns large-centered"]')
                .children()
                .then($els => {
                    const elsArray = Array.from($els)
                    const found = elsArray.some(el => el.innerText.trim() === item)
                    if (!found) {
                        cy.window().scrollTo('bottom')

                        // Wait for the loading indicator to appear and disappear
                        cy.contains('Loading')
                            .should('be.visible')
                            .then(() => {
                                cy.contains('Loading').should('not.exist')

                                // Check if more elements are loaded
                                cy.get('[class="scroll large-8 columns large-centered"]')
                                    .children()
                                    .should('have.length', elsArray.length)
                                    .then(() => {
                                        return findItem(item, ++attempt)
                                    })
                            })
                    } else {
                        return cy.wrap(elsArray.filter(el => el.innerText.trim() === item))
                    }
                })
        }

        findItem('div - #100')
            .should('have.length', 1) // just one item
            .and('contain.text', 'div - #100') // verify its text
    })
})


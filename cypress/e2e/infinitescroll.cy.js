describe('Infinite Scroll tests', () => {
    beforeEach(() => {
        cy.visit('/infinite_scroll')
    })

    it('Scrolls down to find the item', () => {
        const dataToFind = 'accusamus'
        const findItem = (item, attempt = 1) => {
            if (attempt === 100) throw 'Not found'

            cy.log(`Attempt ${attempt}: Looking for "${item}"`)

            return cy.get('[class="scroll large-8 columns large-centered"]')
                .children()
                .then($els => {
                    const elsArray = Array.from($els).filter(el => el.nodeType === 1 && el.textContent) // Filter elements with nodeType 1 (element nodes) and textContent

                    const found = elsArray.some(el => el.textContent.trim().includes(item))
                    if (!found) {
                        cy.window().scrollTo('bottom')

                        // Wait for the loading indicator to appear and disappear
                        cy.contains('Loading')
                            .should('be.visible')
                            .then(() => {
                                cy.contains('Loading').should('not.exist')

                                // Ensure the loading process completed
                                cy.wait(500) // Adjust wait time if needed

                                // Recurse to check for the item again
                                return findItem(item, ++attempt)
                            })
                    } else {
                        cy.log(`Found "${item}" in one of the elements`)
                        const matchingElements = elsArray.filter(el => el.textContent.trim().includes(item))
                        // Log the matching elements for debugging
                        cy.log(`Matching elements: ${matchingElements.length}`)
                        // Wrap each matching element individually and perform assertion
                        return cy.wrap(matchingElements).each(matchingEl => {
                            cy.wrap(matchingEl).should('contain.text', item)
                        })
                    }
                })
        }

        findItem(dataToFind) // set item name here
    })
})
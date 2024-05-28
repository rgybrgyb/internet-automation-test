describe('Multiple Windows tests', () => {
    beforeEach(() => {
        cy.visit('/windows')
    })
    it('Clicks the link and asserts that the new window has been opened', () => {
        cy.get('a').eq(1).should($a => {
            expect($a.attr('href'), 'href').to.equal('/windows/new')
            expect($a.attr('target'), 'target').to.equal('_blank')
            $a.attr('target', '_self')
        }).click()
        cy.location('pathname').should('equal', '/windows/new')
    })
})

// This version of the spec should work for sites where link method calls for a window to be opened
//     it('Clicks the link and asserts that the new window has been opened', () => {
//         cy.window().then((win) => {
//             cy.stub(win, 'open').as('windowOpen')
//         })

//         cy.contains('Click Here').click()
//         cy.get('@windowOpen').should('be.called')
//     })
// })
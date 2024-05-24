describe('Frames tests', () => {
    beforeEach(() => {
        cy.visit('nested_frames')
    })
    it('Modifies the top left frame', () => {
      cy.get('frame')
      .eq(0)
      .then($frame => $frame[0].contentWindow)
      .its('document.body')
      .within(() => {
        cy.get('frame-left')
        then($frame => $frame[0].contentWindow)
        .its('document.body')
        .within(() => {
            cy.get('#body').text
        })
      })
    })
})
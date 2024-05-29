describe('Shadow DOM tests', () => {
    beforeEach(() => {
        cy.visit('/shadowdom')
    })
    it('Accesses the first shadow DOM paragraph and asserts it contains the expected text', () => {
        cy.get('my-paragraph').eq(0).contains('Let\'s have some different text!')
    })
    it('Accesses the second shadow DOM paragraph and asserts it contains the expected text', () => {
        cy.get('my-paragraph').eq(1).contains('In a list!')
    })
    // In this particular case it doesn't look like including the shadowDom is necessary, but below is a test that does
    it('Finds the text "In a list!"', () => {
        cy.get('#content').find('[slot="my-text"]', { includeShadowDom: true }).contains('In a list!')
    })
})
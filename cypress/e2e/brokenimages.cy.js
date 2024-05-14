describe('Broken Images test', () => {
    it('Checks all images on the page are loaded correctly', () => {
        cy.visit('/broken_images');
        // 1. Selects all image ('img') elements on the page
        cy.get('img').each(($img) => {
            //2. Scroll the image into view and check if it is visible
            cy.wrap($img).scrollIntoView().should('be.visible');

            //3. Ensures that the natural width and height is greater than 0
            expect($img[0].naturalWidth).to.be.greaterThan(0);
            expect($img[0].naturalHeight).to.be.greaterThan(0);
        });
    });
});
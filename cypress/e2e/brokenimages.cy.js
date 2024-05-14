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

    it('Checks and reports what about images is broken', () => {
        cy.visit('/broken_images');
        const brokenImages = []
        cy.get('img').each(($el, k) => {
            if ($el.prop('naturalWidth') === 0) {
                const id = $el.attr('id')
                const alt = $el.attr('alt')
                const info = `${id ? '#' + id : ''} ${alt ? alt : ''}`
                brokenImages.push(info)
                cy.log(`Broken image ${k + 1}: ${info}`)
            }
        }).then(() => {
            if (brokenImages.length) {
                throw new Error(
                    `Found ${
                        brokenImages.length
                    } broken images\n${brokenImages.join(', ')}`,
                )
            }
        })
    })
});
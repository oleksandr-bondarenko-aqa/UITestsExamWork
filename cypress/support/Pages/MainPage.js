class MainPage {
    visit() {
        cy.log('**Open Main page**')
        cy.visit('/');
    }

    addProductToBasket(productName) {
        cy.log('**Adding product to basket**');
        return cy.contains('mat-card', ` ${productName} `).find('[aria-label="Add to Basket"]').click();
    }

    verifyProductAddedToBasket(productName) {
        cy.log('**Verify that product added to basket**');
        cy.get('span').should('contain', `Placed ${productName} into basket.`);
        cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('contain', '1');
    }
}

export default new MainPage();
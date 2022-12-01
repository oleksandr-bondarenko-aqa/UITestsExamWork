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

    getSearchButton() {
        return cy.get('#searchQuery');
    }

    searchForProduct(productName) {
        cy.log('**Input product name into search and make search**')
        this.getSearchButton().click();
        cy.get('input[type="text"]').type(`${productName}{enter}`)
    }

    addFoundProductToBasket() {
        cy.log('**Add found product to basket**')
        cy.get('span').contains('Add to Basket').click();
    }
}
export default new MainPage();
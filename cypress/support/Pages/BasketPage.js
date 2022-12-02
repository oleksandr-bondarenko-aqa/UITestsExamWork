class BasketPage {
    visit() {
        cy.log('**Open Basket page**')
        cy.visit('/basket');
    }

    getCheckoutButton() {
        return cy.get('#checkoutButton');
    }

    clickCheckoutButton() {
        cy.log('**Click Checkout button**')
        this.getCheckoutButton().click();
    }


}
export default new BasketPage();
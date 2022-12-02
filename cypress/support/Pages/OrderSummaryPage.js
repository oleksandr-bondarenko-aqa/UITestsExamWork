class OrderSummaryPage {
    visit() {
        cy.visit('/order-summary');
    }

    clickPlaceOrderAndPayButton() {
        cy.log('**Click Place order and pay button**')
        cy.get('span').contains('Place your order and pay').click();
    }

    verifyOrderSuccessful() {
        cy.log('**Verify that order if successful**')
        cy.get('h1').should('contain','Thank you for your purchase!');
    }
}
export default new OrderSummaryPage();
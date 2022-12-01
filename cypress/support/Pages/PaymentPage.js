class PaymentPage {
    visit() {
        cy.visit('/payment/shop')
    }

    getAddNewCard() {
        return cy.get('mat-panel-title').contains(' Add new card ');
    }

    expandAddNewCard() {
        this.getAddNewCard().click();
    }

    getName() {
        return cy.contains('mat-form-field', 'Name');
    }

    getCardNumber() {
        return cy.get('input[type="number"]');
    }

    getExpiryMonth() {
        return cy.get('select[aria-required="true"]').first();
    }

    selectExpiryMonth() {
        this.getExpiryMonth().select('1');
    }

    getExpiryYear() {
        return cy.get('select[aria-required="true"]').last();
    }

    selectExpiryYear() {
        this.getExpiryYear().select('2080');
    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }

    submitCreditCard(name, cardNumber) {
        cy.log('**Adding new credit card**')
        this.expandAddNewCard();
        this.getName().click().type(name);
        this.getCardNumber().type(cardNumber);
        this.selectExpiryMonth();
        this.selectExpiryYear();
        this.getSubmitButton().click();
    }

}
export default new PaymentPage();
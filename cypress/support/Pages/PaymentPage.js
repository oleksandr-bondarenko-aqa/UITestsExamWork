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
        return cy.contains('mat-form-field', 'Card Number');
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

    getContinueButton() {
        return cy.get('span').contains('Continue');
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

    verifyCreditCardAdded() {
        cy.log('**Verify that credit card is created**')
        cy.get('simple-snack-bar').should('contain', 'Your card ending with 8989 has been saved for your convenience.');
    }

    getPaymentOption() {
        return cy.get('mat-radio-button');
    }

    continueWithPaymentOption() {
        cy.log('**Select payment option and continue**')
        this.getPaymentOption().click();
        this.getContinueButton().click();
    }

}
export default new PaymentPage();
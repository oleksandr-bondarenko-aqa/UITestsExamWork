class DeliveryMethodPage {
    visit() {
        cy.visit('/delivery-method')
    }

    getOneDayDeliveryButton() {
        return cy.get('mat-radio-button').first();
    }

    selectOneDayDeliveryOption() {
        this.getOneDayDeliveryButton().click();
    }

    getContinueButton() {
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }
}
export default new DeliveryMethodPage();
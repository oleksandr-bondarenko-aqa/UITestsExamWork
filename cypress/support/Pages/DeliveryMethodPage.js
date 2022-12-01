class DeliveryMethodPage {
    visit() {
        cy.visit('/delivery-method')
    }

    getOneDayDeliveryButton() {
        return cy.get('mat-radio-button').first();
    }

    selectOneDayDeliveryOption() {
        cy.log('**Select delivery option**')
        this.getOneDayDeliveryButton().click();
    }

    getContinueButton() {
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }

    clickContinueButton() {
        cy.log('**Click Continue button**')
        this.getContinueButton().click();
    }
}
export default new DeliveryMethodPage();
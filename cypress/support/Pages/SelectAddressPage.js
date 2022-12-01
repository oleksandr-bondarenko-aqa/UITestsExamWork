class SelectAddressPage {
    visit() {
        cy.visit('/address/select');
    }

    getAddNewAddress() {
        return cy.get('[aria-label="Add a new address"]');
    }

    clickAddNewAddress() {
        cy.log('**Adding new address**')
        this.getAddNewAddress().click();
    }

    getSelectAddressButton() {
        return cy.get('span.mat-radio-inner-circle');
    }

    clickSelectAddressButton() {
        cy.log('**Selecting previously added address**')
        this.getSelectAddressButton().click();
    }

    getContinueButton() {
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

    clickContinueButton() {
        cy.log('**Continue to next page**')
        this.getContinueButton().click();
    }
}
export default new SelectAddressPage();
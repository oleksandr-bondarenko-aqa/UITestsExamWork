class CreateAddressPage {
    visit() {
        cy.log('**Open Create Address page**')
        cy.visit('/address/create');
    }

    getCountry() {
        return cy.get('[placeholder="Please provide a country."]');
    }

    getName() {
        return cy.get('[placeholder="Please provide a name."]');
    }

    getMobileNumber() {
        return cy.get('[placeholder="Please provide a mobile number."]');
    }

    getZipCode() {
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }

    getAddress() {
        return cy.get('[placeholder="Please provide an address."]');
    }

    getCity() {
        return cy.get('[placeholder="Please provide a city."]');
    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }

    submitNewAddress(text, number) {
        cy.log('**Fill all necessary fields and submit new address**')
        this.getCountry().type(text);
        this.getName().type(text);
        this.getMobileNumber().type(number);
        this.getZipCode().type(text);
        this.getAddress().type(text);
        this.getCity().type(text);
        this.getSubmitButton().click();
    }

    verifyNewAddressCreated(name) {
        cy.log('**Verify that new address is created**')
        cy.get('simple-snack-bar').should('contain', `The address at ${name} has been successfully added to your addresses.`)
    }
}
export default new CreateAddressPage();
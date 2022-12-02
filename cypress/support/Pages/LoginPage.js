import user from '/cypress/fixtures/user.json';

class LoginPage {
    visit() {
        cy.log('**Open Login page**')
        cy.visit('/login');
    }

    getEmail() {
        return cy.get('#email');
    }

    getPassword() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('#loginButton');
    }

    submitLoginForm(email, password) {
        cy.log('**Input Email**');
        this.getEmail().type(user.email);

        cy.log('**Input Password**');
        this.getPassword().type(user.password);

        cy.log('**Click "Log In" button**');
        this.getLoginButton().click();
    }

    verifyUserLoggedIn() {
        cy.log('**Verify that User is logged in**');
        cy.get('span').should('contain', ' Your Basket');
    }
}

export default new LoginPage();
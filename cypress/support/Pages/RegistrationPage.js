import user from '/cypress/fixtures/user.json';
import {generateRandomEmail} from "../helper";

class RegistrationPage {
    visit() {
        cy.log('**Open Registration page**');
        cy.visit('/register');
    }

    getEmail() {
        return cy.get('#emailControl');
    }

    getPassword() {
        return cy.get('#passwordControl');
    }

    getRepeatPassword() {
        return cy.get('#repeatPasswordControl');
    }

    getSecurityQuestion() {
        return cy.get('#mat-select-value-1');
    }

    selectFirstSecurityQuestionOption() {
        return cy.get('#mat-option-0');
    }

    getSecurityAnswer() {
        return cy.get('#securityAnswerControl');
    }

    getRegisterButton() {
        return cy.get('#registerButton');
    }

    submitRegistrationForm(email, password) {
        user.email = generateRandomEmail();

        cy.log('**Input Email**');
        this.getEmail().type(user.email);

        cy.log('**Input Password**');
        this.getPassword().type(user.password);

        cy.log('**Repeat Password**');
        this.getRepeatPassword().type(user.password);

        cy.log('**Select Security question**');
        this.getSecurityQuestion().click();
        this.selectFirstSecurityQuestionOption().click();

        cy.log('**Input Security answer**');
        this.getSecurityAnswer().type('Test');

        cy.log('**Click Register button**');
        this.getRegisterButton().click();
    }

    verifySuccessfulRegistration() {
        cy.log('**Verify successful registration**');
        cy.get('h1').should('contain', 'Login');
    }
}

export default new RegistrationPage();
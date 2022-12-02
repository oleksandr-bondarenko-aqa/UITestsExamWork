import {re} from "mathjs";

class ContactsPage {
    visit() {
        cy.log('**Open Feedback Form page**')
        cy.visit('/contact');
    }

    getComment() {
        return cy.get('#comment');
    }

    inputComment(text) {
        cy.log('**Input text to Comment textarea**')
        this.getComment().type(text);
    }

    getRating() {
        return cy.get('#rating');
    }

    moveRatingSlider() {
        cy.log('**Move Rating slider**')
        this.getRating().click('topRight');
    }

    getCaptcha() {
        return cy.get('#captcha');
    }

    getCaptchaControl() {
        return cy.get('#captchaControl');
    }

    resolveAndInputCaptcha() {
        cy.log('**Resolve captcha and input result into Captcha Control field**')
        this.getCaptcha().then((captcha) => {
            let numbers = captcha.text();
            const result = (eval(numbers));
            this.getCaptchaControl().type(result);
        })
    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }

    clickSubmitButton() {
        this.getSubmitButton().click();
    }

    verifyFeedbackFormSubmitted() {
        cy.get('simple-snack-bar').should('contain', 'Thank you so much for your amazing 5-star feedback!')
    }
}
export default new ContactsPage();
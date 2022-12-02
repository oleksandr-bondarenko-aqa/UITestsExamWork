import {
    addProductToBasketAndMakeOrder, fillAndSubmitFeedbackForm,
    findProductBySearchAndMakeOrder, registerNewUser, registerNewUserAndLogin,
} from "../support/helper";


describe('FE part: UI tests', () => {
    it('Register User', () => {
        registerNewUser();
    });

    it('Login with generated User', () => {
        registerNewUserAndLogin();
    });

    it('Add Product to basket and make order', () => {
        addProductToBasketAndMakeOrder('Carrot Juice (1000ml)');
    });

    it('Search for Product and make order', () => {
        findProductBySearchAndMakeOrder('Apple Pomace');
    });

    it('Submit Feedback form', () => {
        fillAndSubmitFeedbackForm();
    });
});
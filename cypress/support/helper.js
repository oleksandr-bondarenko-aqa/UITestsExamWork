import loginPage from "./Pages/LoginPage";
import user from "../fixtures/user.json";
import registrationPage from "./Pages/RegistrationPage";
import mainPage from "./Pages/MainPage";
import basketPage from "./Pages/BasketPage";
import addressPage from "./Pages/SelectAddressPage";
import createAddressPage from "./Pages/CreateAddressPage";
import selectAddressPage from "./Pages/SelectAddressPage";
import deliveryMethodPage from "./Pages/DeliveryMethodPage";
import paymentPage from "./Pages/PaymentPage";
import orderSummaryPage from "./Pages/OrderSummaryPage";

export function generateRandomEmail() {
    const randomValue = Date.now()
    return `Alex_${randomValue}@test.email`;
}

export function dismissWelcomePopup() {
    cy.log('**Wait for Welcome popup and close it**');
    cy.get('[aria-label="Close Welcome Banner"]', {timeout: 10000})
        .should('be.visible')
        .click();
}

export function registerNewUserAndLogin() {
    registrationPage.visit();
    dismissWelcomePopup();
    registrationPage.submitRegistrationForm(user.email, user.password);
    registrationPage.verifySuccessfulRegistration();
    loginPage.submitLoginForm(user.email, user.password);
    loginPage.verifyUserLoggedIn();
}

export function checkoutProductInBasket() {
    basketPage.visit();
    basketPage.clickCheckoutButton();

    addressPage.clickAddNewAddress();

    createAddressPage.submitNewAddress('test', 8989898989);
    createAddressPage.verifyNewAddressCreated('test');

    selectAddressPage.clickSelectAddressButton();
    selectAddressPage.clickContinueButton();

    deliveryMethodPage.selectOneDayDeliveryOption();
    deliveryMethodPage.clickContinueButton();

    paymentPage.submitCreditCard('test', 8989898989898989);
    paymentPage.verifyCreditCardAdded();
    paymentPage.continueWithPaymentOption();

    orderSummaryPage.clickPlaceOrderAndPayButton();
    orderSummaryPage.verifyOrderSuccessful();
}

export function addProductToBasketAndMakeOrder(productName) {
    registerNewUserAndLogin();

    mainPage.visit();
    mainPage.addProductToBasket(productName);
    mainPage.verifyProductAddedToBasket(productName);

    checkoutProductInBasket();
}

export function findProductBySearchAndMakeOrder(productName) {
    registerNewUserAndLogin();

    mainPage.searchForProduct(productName);
    mainPage.addFoundProductToBasket();
    mainPage.verifyProductAddedToBasket(productName);

    checkoutProductInBasket();
}
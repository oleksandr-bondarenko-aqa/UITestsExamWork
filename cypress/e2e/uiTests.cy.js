import user from '../fixtures/user.json';
import registrationPage from "../support/Pages/RegistrationPage";
import {dismissWelcomePopup} from "../support/helper";
import loginPage from "../support/Pages/LoginPage";
import mainPage from "../support/Pages/MainPage";
import basketPage from "../support/Pages/BasketPage";
import addressPage from "../support/Pages/SelectAddressPage";
import createAddressPage from "../support/Pages/CreateAddressPage";
import selectAddressPage from "../support/Pages/SelectAddressPage";
import deliveryMethodPage from "../support/Pages/DeliveryMethodPage";
import paymentPage from "../support/Pages/PaymentPage";

describe('Registration and Login', () => {
  it('Register User', () => {
    registrationPage.visit();
    dismissWelcomePopup();
    registrationPage.submitRegistrationForm(user.email, user.password);
    registrationPage.verifySuccessfulRegistration();
  })

  it('Login with generated User', () => {
    loginPage.visit();
    dismissWelcomePopup();
    loginPage.submitLoginForm(user.email, user.password);
    loginPage.verifyUserLoggedIn();
  })

  it('Add product to cart and submit order', () => {
    loginPage.visit();
    dismissWelcomePopup();
    loginPage.submitLoginForm(user.email, user.password);
    loginPage.verifyUserLoggedIn();

    mainPage.visit();
    mainPage.addProductToBasket('Carrot Juice (1000ml)');
    mainPage.verifyProductAddedToBasket('Carrot Juice (1000ml)');

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
  })
})
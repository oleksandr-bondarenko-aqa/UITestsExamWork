import user from '../fixtures/user.json';
import registrationPage from "../support/Pages/RegistrationPage";
import {
  addProductToBasketAndMakeOrder,
  dismissWelcomePopup,
  findProductBySearchAndMakeOrder,
  registerNewUserAndLogin
} from "../support/helper";
import loginPage from "../support/Pages/LoginPage";
import mainPage from "../support/Pages/MainPage";
import basketPage from "../support/Pages/BasketPage";
import addressPage from "../support/Pages/SelectAddressPage";
import createAddressPage from "../support/Pages/CreateAddressPage";
import selectAddressPage from "../support/Pages/SelectAddressPage";
import deliveryMethodPage from "../support/Pages/DeliveryMethodPage";
import paymentPage from "../support/Pages/PaymentPage";
import orderSummaryPage from "../support/Pages/OrderSummaryPage";

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

  it('Add Product to basket and make order', () => {
    addProductToBasketAndMakeOrder('Carrot Juice (1000ml)');
  })

  it('Search for Product and make order', () => {
    findProductBySearchAndMakeOrder('Apple Pomace');
  })
})
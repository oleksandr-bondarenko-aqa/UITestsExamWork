import user from '../fixtures/user.json';
import registrationPage from "../support/Pages/RegistrationPage";
import {dismissWelcomePopup, verifySuccessfulRegistration, verifyUserLoggedIn} from "../support/helper";
import loginPage from "../support/Pages/LoginPage";

describe('UI tests exam task', () => {
  it('Register User', () => {
    registrationPage.visit();

    dismissWelcomePopup();

    registrationPage.submitRegistrationForm(user.generatedEmail, user.password);

    verifySuccessfulRegistration();
  })

  it('Login User', () => {
    loginPage.visit();

    dismissWelcomePopup();

    loginPage.submitLoginForm(user.email, user.password);

    verifyUserLoggedIn();
  })
})
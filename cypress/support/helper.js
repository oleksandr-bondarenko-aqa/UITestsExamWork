export function generateRandomEmail() {
    const randomValue = Date.now()

    return `Alex_${randomValue}@test.email`;
}

export function dismissWelcomePopup() {
    cy.log('**Wait for Welcome popup and close it**');
    cy.get('[aria-label="Close Welcome Banner"]', { timeout: 10000})
        .should('be.visible')
        .click();
}

export function verifySuccessfulRegistration() {
    cy.log('**Verify successful registration**');
    cy.get('h1').should('contain', 'Login');
}

export function verifyUserLoggedIn() {
    cy.log('**Verify that User is logged in**');
    cy.get('span').should('contain', ' Your Basket');
}
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Go to URL', () => {
    cy.visit('https://petstore.octoperf.com/');
});

Then('Click on Enter the Store link', () => {
    cy.get('p>a').click();
})

Then('Verify if Pet-store homepage is visible or not', () => {
    cy.get('#Logo').should('be.visible');
})
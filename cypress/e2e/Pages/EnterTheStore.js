/// <reference types = "Cypress" /> ///

const url = 'https://petstore.octoperf.com/'

export class EnterTheStore {

    goToStoreAndEnter(){
        cy.visit(url);
        cy.get('p>a').click();
    }
}
/// <reference types = "Cypress" /> ///

class User {
    constructor(obj){
        this.obj = obj
    }

    SignIn(){
        cy.get('div#MenuContent > a').contains('Sign In').click();
        cy.get('input[name="username"]').type(obj.userId);
        cy.get('input[name="password"]').type(obj.password);
        cy.get('input[value="Login"]').click();
        cy.get('div#MenuContent > a').contains('Sign Out').should('be.visible');
    }

    SignOut(){
        cy.get('div#MenuContent > a').contains('Sign Out').click();
        cy.get('div#MenuContent > a').contains('Sign In').should('be.visible');
    }
}
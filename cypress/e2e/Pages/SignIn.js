/// <reference types = "Cypress" /> ///
import { addUserInfo } from '../Pages/AddUserInformation';
import { addAccInfo } from '../Pages/AddAccountInfo'


export class User {
    constructor(obj) {
        this.obj = obj
    }

    register() {
        cy.get('a').contains('Sign In').click();
        cy.get('div#Catalog').should('be.visible');
        cy.get('a').contains('Register Now!').click();
        const profileInfo = new addUserInfo(this.obj);
        profileInfo.adduserInfo();
        const accInfo = new addAccInfo(this.obj);
        accInfo.addAccinfo();
        cy.get('input[name="newAccount"]').click();
    }

    SignIn() {
        cy.get('div#MenuContent > a').contains('Sign In').click();
        cy.get('input[name="username"]').type(this.obj.userId);
        cy.get('input[name="password"]').type(this.obj.password);
        cy.get('input[value="Login"]').click();
        cy.get('div#MenuContent > a').contains('Sign Out').should('be.visible');
    }

    SignOut() {
        cy.get('div#MenuContent > a').contains('Sign Out').click();
        cy.get('div#MenuContent > a').contains('Sign In').should('be.visible');
    }
}
/// <reference types = 'Cypress' /> ///

export class addAccInfo{
    constructor(obj){
        this.obj = obj;
    }

    addAccinfo(){
        cy.get('input[name="account.firstName"]').type(this.obj.firstName);
        cy.get('input[name="account.lastName"]').type(this.obj.lastName);
        cy.get('input[name="account.email"]').type(this.obj.email);
        cy.get('input[name="account.phone"]').type(this.obj.phone);
        cy.get('input[name="account.address1"]').type(this.obj.address1);
        cy.get('input[name="account.address2"]').type(this.obj.address2);
        cy.get('input[name="account.city"]').type(this.obj.city);
        cy.get('input[name="account.state"]').type(this.obj.state);
        cy.get('input[name="account.zip"]').type(this.obj.zip);
        cy.get('input[name="account.country"]').type(this.obj.country);
    }
};

/// <reference types = "Cypress" /> ///

export class addUserInfo{

    constructor(obj){
        this.obj = obj;
    }

    adduserInfo(){
        cy.get('input[name="username"]').type(this.obj.userId);
        cy.get('input[name="password"]').type(this.obj.newPassword);
        cy.get('input[name="repeatedPassword"]').type(this.obj.repeatpassword);
    }
}


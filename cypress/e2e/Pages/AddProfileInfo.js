/// <reference types = "Cypress" /> ///

export class AddProfileInfo {
    
    constructor(obj){
        this.obj = obj;
    };

    addProfileInfo(){
        cy.get('select[name="account.languagePreference"]').select(this.obj.language);
        cy.get('select[name="account.favouriteCategoryId"]').select(this.obj.category);
        cy.get('input[name="account.listOption"]').check();
        cy.get('input[name="account.bannerOption"]').check();
    }

}
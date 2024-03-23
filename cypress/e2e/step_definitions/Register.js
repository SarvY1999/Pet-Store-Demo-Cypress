import {Given, Then} from 'cypress-cucumber-preprocessor/steps'
import { AddProfileInfo } from '../Pages/AddProfileInfo'
import { addAccInfo } from '../Pages/AddAccountInfo'
import { addUserInfo } from '../Pages/AddUserInformation';

Given('Enter the store', () => {
    cy.visit('https://petstore.octoperf.com/');
    cy.get('p>a').click();
    cy.get('#Logo').should('be.visible');
});

Then('Go to Sign In and click on Register Now', ()=> {
    cy.get('a').contains('Sign In').click();
    cy.get('div#Catalog').should('be.visible');
    cy.get('a').contains('Register Now!').click();
});

Then('Add User Information', ()=> {
    cy.fixture('UserData').then((data) => {
       const profileInfo = new addUserInfo(data.userData);
       profileInfo.adduserInfo();
    })
})

Then('Add Account Information', ()=> {
    cy.fixture('UserData').then((data)=> {
        const accInfo = new addAccInfo(data.userData);
        accInfo.addAccinfo();
    })
});

Then("Add Profile Information",()=>{
    cy.fixture('UserData').then((data)=>{
        const profileInfo = new AddProfileInfo(data.userData);
        profileInfo.addProfileInfo();
    })
})

Then("Click on Save Information",()=>{
    cy.get('input[name="newAccount"]').click();
})
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { EnterTheStore } from '../Pages/EnterTheStore';
import { User } from '../Pages/SignIn'
import { Order } from '../Pages/Order';

const enter = new EnterTheStore();
const order = new Order();
let orderId;

Given('Go to pet store and Enter the store', () => {
    enter.goToStoreAndEnter();
})

Then('Login to the Pet store', () => {
    cy.fixture('UserData').then((data) => {
        const user = new User(data.userData);
        user.register();
        cy.reload()
        user.SignIn();
    })
})

Then('Click on Fish Section and Select any fish and add it to cart and proceed to checkout', () => {
    order.clickProduct("SideBar", "Fish");
    order.selectProductID("Angelfish");
    order.addToCart("Large Angelfish");
    order.addQuantity("Large Angelfish", 1);
    cy.get('a.Button').contains('Proceed to Checkout').click();
})

Then('Verify order details', () => {
    cy.fixture('UserData').then((data) => {
        order.verifyOrderDetail(data.userData);
        cy.get('input[value="Continue"]').click();
        cy.get('a.Button').click();
        cy.get('ul.messages').should('contain.text', "Thank you, your order has been submitted.")
        // get OrderId and Store it to Verify later
        cy.get('tbody > tr:nth-child(1) > th:nth-child(1)[colspan="2"]').invoke('text').then((txt) => {
            orderId = txt;
        })
    })
})

Then('go to my Account and Verify if order is reflected in My orders or not', () => {
    cy.get('div#MenuContent > a').contains('My Account').click();
    cy.get('#Catalog > a').click();
    cy.log(orderId);;
})
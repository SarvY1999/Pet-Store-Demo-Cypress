/// <reference types = "Cypress" /> ///

export class Order {

    clickProduct(section, type) {

        if (section == "SideBar") {
            switch (type) {
                case "Fish":
                    cy.get('div#SidebarContent> a:nth-child(1)').click();
                    break;

                case "Dogs":
                    cy.get('div#SidebarContent> a:nth-child(4)').click();
                    break;

                case "Reptiles":
                    cy.get('div#SidebarContent> a:nth-child(7))').click();
                    break;

                case "Cats":
                    cy.get('div#SidebarContent> a:nth-child(10)').click();
                    break;

                case "Birds":
                    cy.get('div#SidebarContent> a:nth-child(13)').click();
                    break;
            }
        } else if (section == "QuickLinks") {
            switch (type) {
                case "Fish":
                    cy.get('div#QuickLinks > a:nth-child(1)').click();
                    break;

                case "Dogs":
                    cy.get('div#QuickLinks > a:nth-child(3)').click();
                    break;

                case "Reptiles":
                    cy.get('div#QuickLinks > a:nth-child(5)').click();
                    break;

                case "Cats":
                    cy.get('div#QuickLinks > a:nth-child(7)').click();
                    break;

                case "Birds":
                    cy.get('div#QuickLinks > a:nth-child(9)').click();
                    break;
            }
        }
    }

    selectProductID(name) {
        cy.get('tbody > tr').each(($tr) => {
            if ($tr.text().includes(name)) {
                cy.wrap($tr).within(() => {
                    cy.get('td > a').each(($a) => {
                        let text = $a.text().trim();
                        if ($tr.text().includes(text)) {
                            cy.wrap($a).click()
                            cy.log('clicked')
                        }
                    })
                })
            }
        })
        cy.get('div#Catalog > h2').should('contain', name);
    }

    addToCart(name) {

        cy.get('tbody tr')
            .contains('td', name)
            .parent('tr')
            .find('a.Button')
            .click();

        cy.get('#Cart').should('contain.text', 'Shopping Cart');
    }

    addQuantity(name, qty) {
        cy.get('tbody tr')
            .contains('td', name)
            .parent('tr')
            .find('input[type="text"]')
            .type(qty);
    }

    verifyOrderDetail(obj) {
        cy.log("Verifying Payment Details");
        cy.get('order.cardType').should('eq', obj.paymentDetails.cardType);
        cy.get('order.creditCard').should('eq', obj.paymentDetails.cardType);

        cy.log("Verifying Billing Address");
        cy.get('order.billToFirstName').should('eq', obj.firstName);
        cy.get('order.billToLastName').should('eq', obj.lastName);
        cy.get('order.billAddress1').should('eq', obj.address1);
        cy.get('order.billAddress2').should('eq', obj.address2);
        cy.get('order.billCity').should('eq', obj.city);
        cy.get('order.billState').should('eq', obj.state);
        cy.get('order.billZip').should('eq', obj.zip);
        cy.get('order.billCountry').should('eq', obj.country);
    }
}

/// <reference types = "Cypress" /> ///

class Order {

    clickProduct(section, type) {

        if (section == "SideBar") {
            switch (type) {
                case Fish:
                    cy.get('div#SidebarContent> a:nth-child(1)').click();
                    break;

                case Dogs:
                    cy.get('div#SidebarContent> a:nth-child(4)').click();
                    break;

                case Reptiles:
                    cy.get('div#SidebarContent> a:nth-child(7))').click();
                    break;

                case Cats:
                    cy.get('div#SidebarContent> a:nth-child(10)').click();
                    break;

                case Birds:
                    cy.get('div#SidebarContent> a:nth-child(13)').click();
                    break;
            }


        } else if (section == "QuickLinks") {
            switch (type) {
                case Fish:
                    cy.get('div#QuickLinks > a:nth-child(1)').click();
                    break;

                case Dogs:
                    cy.get('div#QuickLinks > a:nth-child(3)').click();
                    break;

                case Reptiles:
                    cy.get('div#QuickLinks > a:nth-child(5)').click();
                    break;

                case Cats:
                    cy.get('div#QuickLinks > a:nth-child(7)').click();
                    break;

                case Birds:
                    cy.get('div#QuickLinks > a:nth-child(9)').click();
                    break;
            }
        }
    }

    selectProductID(name){
        cy.get('tbody > tr').each(($tr)=> {
            if($tr.text().includes(name)){
                cy.wrap($tr).within(()=> {
                    cy.get('td > a').each(($a)=> {
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

    addToCart(name){
        cy.get('tbody > tr').each(($tr)=> {
            
        })
    }

}

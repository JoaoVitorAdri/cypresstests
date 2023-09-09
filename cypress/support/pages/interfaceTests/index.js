const el = require('./elements').ELEMENTS

const arrayTlite = [];
const sortTitleOnScreen = [];

class newInterfaceTest {

    login(){

        cy.wait(100)
          .visit('https://www.saucedemo.com/')
          .wait(500)
          .get(el.loginTextField).type('standard_user')
          .get(el.passwordTextField).type('secret_sauce')
          .get(el.buttonLogin).click()
          .wait(500)

    }

    sortedAtoZ() {

        cy.get(el.titleItem5).invoke('text').then((text) => {
        sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem1).invoke('text').then((text) => {
        sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem2).invoke('text').then((text) => {
        sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem6).invoke('text').then((text) => {
        sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem3).invoke('text').then((text) => {
        sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem4).invoke('text').then((text) => {
        sortTitleOnScreen.push(text);
        });


        const getAndPopulateArray = () => {
            return new Promise((resolve) => {
            for (let i = 0; i < 6; i++) {
            cy.get(`#item_${i}_title_link > .inventory_item_name`)
                .invoke('text')
                .then((text) => {
                arrayTlite[i] = text;

                if (i === 5) {
                    resolve();
                }
            });
            }
            });
            };

            getAndPopulateArray().then(() => {

            const textContent = arrayTlite.slice().sort();

            console.log(textContent);
            cy.wrap(sortTitleOnScreen).should('deep.equal', textContent);
        });


    }

    sortedZtoA(){

        
    
        cy.get(el.sortContainer).select('za')
        cy.wait(100)
    
        cy.get(el.titleItem4).invoke('text').then((text) => {
          sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem3).invoke('text').then((text) => {
          sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem6).invoke('text').then((text) => {
          sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem2).invoke('text').then((text) => {
          sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem1).invoke('text').then((text) => {
          sortTitleOnScreen.push(text);
        });
        cy.get(el.titleItem5).invoke('text').then((text) => {
          sortTitleOnScreen.push(text);
        });

        const getAndPopulateArray = () => {
        return new Promise((resolve) => {
            for (let i = 0; i < 6; i++) {
            cy.get(`#item_${i}_title_link > .inventory_item_name`)
                .invoke('text')
                .then((text) => {
                arrayTlite[i] = text;

                if (i === 5) {
                    resolve();
                }
                });
            }
        });
        };
        
        getAndPopulateArray().then(() => {

        const textContent = arrayTlite.slice().sort((a, b) => {
            return b.localeCompare(a); 
        });

        cy.log(sortTitleOnScreen);
        cy.log(textContent);
        cy.wrap(sortTitleOnScreen).should('deep.equal', textContent);
        
        });
        

    }

}

export default new newInterfaceTest();

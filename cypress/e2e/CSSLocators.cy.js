
describe('My first Test Suite', () => {
  
    it('CSS Locators', () => {
     
      cy.visit('http://www.automationpractice.pl/index.php')
      cy.title().should('eq','My Shop')

      cy.get(".search_query").type("Shirt")
      cy.get(".button-search").click();

      cy.get(".lighter").contains("Shirt");
     
    })
  
  })
  
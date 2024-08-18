//https://www.globalsqa.com/demo-site/select-dropdown-menu/

describe('Handling Dropdowns', () => {
  
    it('Dropdowns with Select', () => {     
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    
    cy.get('#zcf_address_country')
    .select('Austria')
    //  Verifying with the value because we selected a value from the dropdown
    .should('have.value','Austria')
    })

    it('Dropdowns without Select', () => {     
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Japan').type('{enter}')
        
        //  Verifying with the Text because we have entered the text
        //  and not selected any value from the dropdown
        cy.get('#select2-billing_country-container')
        .should('have.text','Japan')
        })

    it('Auto Suggestion dropdown', () => {     
    cy.visit("https://www.wikipedia.org/")

    cy.get('#search-input').type('Delhi')
    cy.get('.suggestion-text').contains('Delhi University').click()
    cy.get('.mw-page-title-main').should('have.text','Delhi University')
    })

    it.only('Dynamic dropdown', () => {     
   
    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type('cypress automation')
    cy.wait(5000)
    cy.get('div.wM6W7d>span').should('have.length',13)

/*
    Cypress Each function
    link: https://docs.cypress.io/api/commands/each
*/    
    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text().includes('cypress automation framework github')) {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click()
        cy.get('#APjFqb').should('have.value', 'cypress automation framework github')

    } 
 //   cy.get('#APjFqb').should('have.value','cypress automation framework github')
   // cy.get('#APjFqb').should('have.text','cypress automation framework github')
      })
    })    
        
})

describe('My first Test Suite', () => {
  
    it('Checking Radio Buttons', () => {     
    cy.visit("https://practice.expandtesting.com/radio-buttons")
    cy.get('input#yellow').should('exist');
        //  OR
  //  cy.get('input#yesRadio').should('be.visible');
    cy.get('input#yellow').check().should('be.checked');

    cy.get('input#football').should('exist')
    cy.get('input#football').check().should('be.checked')

    })

    it.only('Checking Radio Buttons', () => {     
        cy.visit("https://practice.expandtesting.com/checkboxes")
        cy.get('input#checkbox1').should('exist');
            //  OR
      //  cy.get('input#yesRadio').should('be.visible');
        cy.get('input#checkbox1').check().should('be.checked');
    
        cy.get('input#checkbox2').should('exist')
        cy.get('input#checkbox2').uncheck().should('not.be.checked')

        //  Unselecting ALL, then Selecting ALL
        // cy.get('.form-check-input').uncheck().should('not.be.checked')
        // cy.get('.form-check-input').check().should('be.checked')


        cy.get('.form-check-input').uncheck().should('not.be.checked')
        
        //  Select First Checkbox
        cy.get('.form-check-input').first().check().should('be.checked')

        //  Select Last Checkbox
        cy.get('.form-check-input').last().check().should('be.checked')

        })
})

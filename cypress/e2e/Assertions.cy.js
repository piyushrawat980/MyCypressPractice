describe('My first Test Suite', () => {
  
    it.skip('Implicit Assertions Demo ', () => {     
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      
      //Implicit Assertions
      cy.url().should('contain','orangehrmlive');  
      cy.url().should('include','orangehrmlive');

//  Can be written like this

      cy.url()
      .should('include','orangehrmlive')
      .should('contain','rangehrm')
      .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//  Can be written like this
//  Instead of should(), we can use and()
      cy.url()
      .and('include','orangehrmlive')
      .and('contain','rangehrm')
      .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('not.contain','brown')
      .should('be.disabled')

      cy.title()
      .should('eq','OrangeHRM')
      .and('contain','HRM')

      // Check Logo
      cy.get('.orangehrm-login-logo > img').should('be.visible')  // logo visible on screen or not
      .and('exist')   // Logo exist or not, don't care if it's not on the UI
      
      cy.get("a").should('have.length','5')

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")

      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')
      
    }) 
    
    it("Explicit assertions",()  =>  {

      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get('.oxd-button').click()

      let expName = "Морозов Фрол";

      //  Element 'oxd-userdropdown-name' is captured into the variable x
      //  and then we use it with the help of "then arrow function"
      cy.get('.oxd-userdropdown-name').then((x)=>{
        let actualName = x.text()
        
        // Expect Assertions
        expect(actualName).to.equal(expName)
        expect(actualName).to.not.equal(expName)
        
        //  Assert assertions
        assert.equal(actualName,expName)
        assert.notEqual(actualName,expName)

      })

    })
  })
  
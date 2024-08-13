describe('My first Test Suite', () => {
  
  it('Passed Test case', () => {
   
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM')

  })

  it('Failed Test case', () => {
   
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM12')

  })

})

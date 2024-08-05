describe("Demo",function(){

    it.only('Authentication alert: approach 1',function(){
        cy.visit('https://www.cornerstoneondemand.com/')
       cy.get('[class="nav-link undefined"]') .contains('Solutions').click({force: true}) 
       cy.get('p[class="text-s1 font-semibold group-hover:text-primary-orange"]')
       .contains('AI innovations')
       .click({force: true})   
       cy.url().should('include','/ai-innovation/') 
       cy.get('[class="first:base:mb-4 first:md:mb-0 first:base:mr-0 first:md:mr-4"]').click()
       // Add this in your test:
        Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false prevents Cypress from failing the test
        return false;
     });
  
       cy.url().should('include','demo')
       cy.get('#FirstName').type("Sushmita")
       


    })
})
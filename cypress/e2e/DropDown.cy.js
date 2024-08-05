describe('Diffrent types of dropdown handling',function(){

    it('with Select tag',function(){
            cy.visit('https://login.yahoo.com/account/create')
            cy.get('#usernamereg-month').select('April')
            .should('have.value','4')

    })

    it('Without select tag',function(){
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').should('have.text','India')
        .click()
        cy.get('.select2-search__field').type('iran')
        .type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iran')
        cy.wait(1000)
        cy.title().should('contain','Pune district')
    })
    it('Auto suggestion dropdowns for static search', function(){
        cy.visit('https://www.wikipedia.org/')
        cy.get('input[id="searchInput"]')
        .type('pune')
        cy.get('a[class="suggestion-link"]')
        .should('have.length.at.least',1)
        .contains('district').click()
    })
    it.only('Auto suggestion dropdowns for dynalic searc',function(){
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('final destination')
        cy.get('[class="wM6W7d"]').each(function ($ele, index, $list) {
            cy.wrap($ele).invoke('text').then(function(text)  {
                if (text.includes('Final Destination 2')) {
                    cy.wrap($ele).click();
                }
            });
        })
        
        cy.get('#APjFqb').should('have.text','final destination 2')
    })
})
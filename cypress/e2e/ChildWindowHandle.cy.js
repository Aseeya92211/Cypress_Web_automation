describe('child window handling',function(){

    it('If element has no "target: _blank" and "href" attributes',function(){
        cy.visit('https://demoqa.com/browser-windows', {
            onBeforeLoad(win) {
              cy.stub(win, 'open')
            }
          });
          cy.get('#tabButton').click();
          Cypress.on('uncaught:exception', (err, runnable) => {
            // Returning false prevents Cypress from failing the test
                return false;
             });
          cy.window().then(() => {
            cy.visit('https://demoqa.com/sample', { failOnStatusCode: false })
            })

            cy.get('#sampleHeading').should('have.text','This is a sample page')
    })

    it('with tarhe=_balnk attribute', function (){
        // url launch
        cy.visit("https://the-internet.herokuapp.com/windows")
        // delete target attribute with invoke for link
        cy.get('.example > a')
        .invoke('removeAttr', 'target').click()
        // verify child window url
        cy.url()
        .should('include', 'https://the-internet.herokuapp.com/windows/new')
        // shift to parent window
        cy.go('back');
     });

     it.only('with href attribute', function (){
        // url launch
        cy.visit("https://the-internet.herokuapp.com/windows")
        // use href att to redirect
        cy.get('.example > a').then(function(x){
            let url=x.prop('href')
            cy.visit(url)
        })
        
        // verify child window url
        cy.url()
        .should('include', 'https://the-internet.herokuapp.com/windows/new')
        // shift to parent window
        cy.go('back');
        
        cy.get('.example').should('contain','Opening a new window')
     });
})
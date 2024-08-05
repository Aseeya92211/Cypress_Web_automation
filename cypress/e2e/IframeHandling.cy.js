import 'cypress-iframe';


describe('use cypress iframe plugin', function(){
//npm install -D cypress-iframe
    it('single Iframe', function(){
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
        cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').should('contain','The iframe element')

    })


    })


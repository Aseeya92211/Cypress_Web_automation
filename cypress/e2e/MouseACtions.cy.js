require('@4tw/cypress-drag-drop')

describe("Mouse Actions", function(){
    it("Mouse hoover",function(){
        cy.visit('https://www.browserstack.com/guide/mouse-hover-in-selenium')
        cy.get('a').contains('Documentation')
        .should('not.be.visible')
        cy.get('#developers-dd-toggle').trigger('mouseover',{force: true}).click()
        // in cy[ress hoover some time will not work use "{force: true}" to click hidden element directly
    })

    it("Right Click",function(){
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get('[class="context-menu-item context-menu-icon context-menu-icon-cut"]')
        .should('not.be.visible')
        //cy.get('.context-menu-one').trigger('contextmenu')  //using trigger method
        cy.get('.context-menu-one').rightclick()    //using rightclick method
        cy.get('[class="context-menu-item context-menu-icon context-menu-icon-cut"]')
        .should('be.visible')
    })

    it("Double Click",function(){
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        //using trigger method
        //cy.get('button').contains('Double-Click Me To See Alert').trigger('dblclick')
        //using dblclick method
        cy.get('button').contains('Double-Click Me To See Alert').dblclick()
    })

    it("Drag and Drop",function(){

        //install below pugin and add require command at top
        //https://github.com/4teamwork/cypress-drag-drop
        cy.visit('https://demo.guru99.com/test/drag_drop.html')
        cy.get(':nth-child(2) > .button').drag('#amt7')
       

    
    })


    it("scroll down",function(){
        cy.visit('https://en.wikipedia.org/wiki/List_of_flag_names')
        cy.get(':nth-child(50) > :nth-child(6) > :nth-child(2) > i').scrollIntoView()   
       
    })


})
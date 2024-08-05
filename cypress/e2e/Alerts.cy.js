describe('javascript-alerts ',function(){
    
    it('javascript simple alerts',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsAlert()"]').click() // no need click ok it automatically click on ok button
        cy.get('#result')
        .should('have.text','You successfully clicked an alert') 
        //create one event to fecth alert text
        cy.on('window:alert',function(al){
            expect(al).to.contains('I am a JS Alert')
        })

    })

    // confirm Alert with ok
    it('javascript confirm alerts - OK ',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button').contains('Click for JS Confirm').click() // no need click ok it automatically click on ok button
        cy.get('#result')
        .should('have.text','You clicked: Ok') 
        //create one event to fecth alert text
        cy.on('window:alert',function(al){
            expect(al).to.contains('I am a JS Confirm')
        })

    })
    //// confirm Alert with cancel
    it('javascript confirm alerts - cancel ',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button').contains('Click for JS Confirm').click() 
         
        //create one event to fecth alert text
        cy.on('window:confirm',function(al){
            expect(al).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm',()=>false)

        cy.get('#result')
        .should('have.text','You clicked: Cancel')
    })

    //prompt alert- sending some text
    it('javascript confirm prompet - ok ',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then(function(win){         //create function of windown and return object to function
            cy.stub(win,'prompt').returns('Welcome')  // stub is used to send text to alerts
        })
        cy.get('button').contains('Click for JS Prompt').click() //no need click ok as it automatically click on ok button
         
        //create one event to fecth alert text
        cy.on('window:confirm',function(al){
            expect(al).to.contains('I am a JS prompt')
        })

        cy.get('#result')
        .should('have.text','You entered: Welcome')
    })

    //Authentication alert handling 
    it('Authentication alert: approach 1',function(){
        //aproach 1
        /*cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
                                                                        username:'admin',
                                                                        password:'admin'

                                                                }})*/
        // approach2 - best approach add https://user:password@url
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('.example').contains('Congratulations')                                                          
    })
   
    
})
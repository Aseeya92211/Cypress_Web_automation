describe('Data driven testing using fixture',function(){
    let data
    before(function(){
        cy.fixture('opensource_single_data').then(function(database){
            data=database
            // you can directly right code here also using it block and use database as fixture
        })
    })

    it('fixture use',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(data.Username)
        cy.get('[name="password"]').type(data.Password)
        cy.get('[type="submit"]').click()
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        .should('have.text',data.expected)
    })

    it.only('mutile data and also cover if do not want to use before block',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('opensource_Multiple_data').then(function(userdate){
            userdate.forEach(function(mdata) {
                
            
                
                cy.get('[name="username"]').type(mdata.Username)
                cy.get('[name="password"]').type(mdata.Password)
                cy.get('[type="submit"]').click()
                if(mdata.Username=='Admin' && mdata.Password=='admin123' ){
                    
                    cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
                    .should('have.text',mdata.expected)
            
                 }else{
                    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text')
                    .should('have.text',mdata.expected)
                 }
            });
        })
        
        
    })
})
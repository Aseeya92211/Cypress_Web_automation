describe("Web Table handling",function(){
    this.beforeEach('insert url',function(){
        cy.visit('https://datatables.net/examples/basic_init/alt_pagination.html')
    })

    it("Get coulmn and Row count", function(){
        // validate Column count
        cy.get('table[id="example"]>thead>tr>th')
        .should('have.length',6)
        // validate Row count
        cy.get('table[id="example"]>tbody>tr')
        .should('have.length',10)
    })

    it("Retrive all data in given page", function(){
        cy.get('table[id="example"]>tbody>tr').each(function($row,index,$rows){
            cy.wrap($row).within(function(){
                cy.get('td').each(function($col,index,$cols){
                    cy.log($col.text())
                })

            })
        })

    })

    //Retrive all data from all pages
    it.only("Retrive all data from all pages", function(){
        // use below cose If you want to retrive page from srin
       /* let totalPage;
        cy.get('#example_info').then(function(ele){
            let pageText=ele.text()  // get total text
            //get page number from text using indexing
            totalPage=pageText.substring(pageText.indexOf('of')+2,(pageText.indexOf('entries')-1 ))
            return cy.wrap(totalPage).as('totalPage')
        })

            // as cypress has promise so we can not use then variable outside directly so we return and use like below
        cy.get('@totalPage').then(totalPage=>{
            cy.log(totalPage)
            //logic of you script using variable i.e totlalPage
         })*/


            // now if page number is fixed
            let totalPage=6
           for(let p=1;p<totalPage;p++){
            cy.log('printing')
            cy.get('button[aria-label="Next"]').click()
            cy.get('table[id="example"]>tbody>tr').each(function($ele,idex,$eles){
                
                cy.wrap($ele).within(function(){
                    cy.get('td:nth-child(1)').then(function(e){    //print only name column
                        cy.log(e.text())
                        
                    })
                })
            })
           }
    })
})
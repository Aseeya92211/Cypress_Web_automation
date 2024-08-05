
//inslall cypress-file-upload plugin and imprt it
//https://www.npmjs.com/package/cypress-file-upload
//you can upload a file if type =file for type =button it will not work search type =file you may find eaxct type
import 'cypress-file-upload'

describe('File upload',function(){

    it('single file upload',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('sample.pdf')
        cy.get('#file-submit').click()
        cy.wait(500)
        cy.get('#uploaded-files').contains('sample.pdf')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Returning false prevents Cypress from failing the test
                return false;
             });

    })

    it('file upload - rename',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'sample.pdf',fileName:'original.pdf'})
        cy.get('#file-submit').click()
        cy.wait(500)
        cy.get('#uploaded-files').contains('original.pdf')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Returning false prevents Cypress from failing the test
                return false;
             });
    })

    it('file upload drag and drop',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('sample.pdf',{subjectType:'drag-n-drop'})
        cy.wait(500)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains('sample.pdf')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Returning false prevents Cypress from failing the test
                return false;
             });
    })

    it('upload file if button is under shadow dome',function(){
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true})
        .attachFile('sample.pdf');
        cy.wait(1000);
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('sample.pdf');
        
    })

    it.only('Multiple file upload',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['sample.pdf','file_example_XLS_10.xls'])
        cy.get('#fileList > :nth-child(1)')
        .should('have.text','sample.pdf')
        cy.get('#fileList > :nth-child(2)')
        .should('have.text','file_example_XLS_10.xls')
        
        
    })

})
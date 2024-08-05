/// <reference types="Cypress" />
describe('Check and radio buttons', () => {
  it('Radio buttons', () => {
    cy.visit('https://artoftesting.com/samplesiteforselenium')

    cy.get('#male')
    .should('be.visible','Validate visiblity of male radio button')
    .and('not.be.checked','Validate male is not checked')
    .check()
    .and('be.checked','checked male radio button radio button')

    cy.get('#female')
    .should('be.visible','Validate visiblity of female radio button')
    .and('not.be.checked','Validate female radio button is not checked')
    .check()
    .and('be.checked','checked female radio button')

    cy.get('#male')
    .and('not.be.checked','Validate male is not checked after selecting female radio button')
  })
  it.only('Check Box',()=>{

    cy.visit('https://artoftesting.com/samplesiteforselenium')
    cy.get('input[type="checkbox"]')
    .should('not.be.checked')
    .check()
    .should('be.checked')
  })
})




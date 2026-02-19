//generacion de datos random
function randomString(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function randomEmail() {
  return `${randomString(6)}.${randomString(4)}@testmail.com`;
}

function randomPhone() {
  return `${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`;
}

describe('Ejercicio loro', () => {

  const Name = randomString(6);
  const email = randomEmail();
  const phone = randomPhone();

  beforeEach(() => {
    cy.visit('https://loro:GDL2025@pulpo.loroqa.com/products/34/details/')
    cy.get('form', { timeout: 10000 }).should('be.visible');
  })


  it('Completar formulario', () => {
    // Campo email
    cy.get('[data-test="input-email"]').type(email)
    //campo Name
    cy.get('[data-test="input-insured-name"]').type(Name)
    //campo Country
    cy.get('[data-test="menu-options-input"]').click()
    cy.get('#mat-option-29').click()
    .wait(1000)
    //campo State
    cy.get('.mat-mdc-select-placeholder').click()
    cy.get('#mat-option-274').click()
    // phone number
    cy.get('.input__phone > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type(phone)
    // date
    cy.get('.mat-datepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target').click()
    cy.get('.mat-calendar-next-button').click()
    cy.get(':nth-child(2) > [data-mat-col="0"] > .mat-calendar-body-cell').click()
    // company address
    cy.get('[data-test="address-autocomplete-input"]').type("San Diego Sushi", { delay: 100 })
      .wait(1000)
      .type('{downarrow}')
      .click()
      .wait(2000)

    // aqui iria el código para validar el re-captcha

    // submit
    cy.get('[data-test="button-submit-form"] > .p-ripple').click()
    .wait(2000)

    cy.get('.question-group-169 > .container > div.ng-untouched.ng-star-inserted > :nth-child(1) > [data-test="question-container"] > .question__title').should('be.visible')
  })

})
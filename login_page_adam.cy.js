describe("Pruebas de la página de inicio de OrangeHRM", () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it("Validacion logo", () => {
        cy.get('.orangehrm-login-logo > img').should("be.visible")
    })

    it("Validacion campo username", () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
    })

    it("Validacion version pie de pagina", () => {
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM OS 5.7")
    })

    it("Validacion boton login", () => {
        cy.get('.oxd-button').should("be.visible")
    })
})
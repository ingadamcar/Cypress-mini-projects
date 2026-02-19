describe('Pruebas de la página de inicio de OrangeHRM', () => {
  
    // Antes de cada prueba, se navega a la página de inicio
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
  
    it('Validar que el logo de OrangeHRM sea visible', () => {
      // Valida que el logo de OrangeHRM esté visible
      cy.get('img[src="/web/images/ohrm_logo.png"]').should('be.visible')
    })
  
    it('Validar que el campo username (txtUsername) sea visible', () => {
      // Valida que el campo de nombre de usuario esté visible
      cy.get('input[name="username"]').should('be.visible')
    })
  
    it('Validar que el texto de la versión "OrangeHRM" esté presente en la parte inferior', () => {
      // Valida que el texto de copyright con la versión esté presente en la parte inferior
      cy.get('.orangehrm-copyright').should('contain.text', 'OrangeHRM')
    })
  
    it('Validar que el botón de login sea visible', () => {
      // Valida que el botón de login esté visible
      cy.get('button[type="submit"]').should('be.visible')
    })
  
  })
  
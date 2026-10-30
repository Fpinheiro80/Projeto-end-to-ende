///<reference types="cypress"/>
import user from "../fixtures/usuario.json"
import cadastroPage from '../support/pages/cadastro-page';




describe('cadastro e login', () => {
 
  beforeEach(() => {
       cy.visit('register.html')
       cy.visit('login.html')
       
       
       
    });


  
 it('Deve cadastrar um novo usuario de depois fazer login com ele', () => {
    //cadastro
    cy.visit('register.html')
   let email = `Fabio8${Date.now()}@teste.com` 

    cy.preencherCadastro(
        'Fabio Pinheiro',
        email,
        '454564564454',
        'Teste@123',
        'Teste@123'

    )
     cy.url().should('include','dashboard')
    

    //login
    cy.visit('login.html')
      cy.login('usuario@teste.com', 'user123')
    


  
  });


});
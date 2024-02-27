/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('marcosj.antonio3@gmail.com')
        cy.get('#password').type('M@rcos19')
        cy.get('.woocommerce-form > .button').click()    
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, marcosj.antonio3 (não é marcosj.antonio3? Sair)')
    })
})
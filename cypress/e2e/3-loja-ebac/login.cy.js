/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('marcosj.antonio3@gmail.com')
        cy.get('#password').type('M@rcos19')
        cy.get('.woocommerce-form > .button').click()    
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, marcosj.antonio3 (não é marcosj.antonio3? Sair)')

        
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('marcosj.')
        cy.get('#password').type('M@rcos19')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: O usuário marcosj. não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('marcosj.antonio3@gmail.com')
        cy.get('#password').type('M@rcos18')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail marcosj.antonio3@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

});
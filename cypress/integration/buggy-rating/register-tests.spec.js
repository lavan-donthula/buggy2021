/// <reference types="Cypress" />

describe('Verify registration tests', () => {
    it('valid registration', () => {
        cy.visit('/register');

        cy.get('#username').type('ldon.thula' + Cypress.moment().format('YYYYMMDDhmmss'));
        cy.get('#firstName').type('Donthula');
        cy.get('#lastName').type('Lavan');
        
        cy.get('#password').type('Abc12345!');
        cy.get('#confirmPassword').type('Abc12345!');

        cy.get('.btn-default').click();
        cy.get('.alert-success').invoke('text').should('contain', 'Registration is successful');
    });
});
/// <reference types="Cypress" />

describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Invalid login', () => {
        cy.get('[name=login]').type('invalid');
        cy.get('[name=password]').type('invalid');

        cy.get('.btn-success').click();

        cy.get('.label-warning').invoke('text').should('eq', 'Invalid username/password'); 
    });

    it.only('Valid login', () => {
        cy.get('[name=login]').type('ldon.thula');
        cy.get('[name=password]').type('Abc12345!');

        cy.get('.btn-success').click();

        cy.contains('Logout');
    });

});
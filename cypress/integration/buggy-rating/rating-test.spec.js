/// <reference types="Cypress" />

describe('Rating tests', () => {
    it('vote for Veneno', () => {
        cy.visit('');

        cy.get('[name=login]').type('ldon.thula');
        cy.get('[name=password]').type('Abc12345!');
        cy.get('.btn-success').click();
        cy.contains('Logout');


        cy.get('my-home > div').within(() => {
            cy.get('.col-md-4').eq(0).click();
        });

        cy.contains('Veneno').click();

        cy.get('my-model div').within(() => {
            cy.get('.row').eq(0).find('p').invoke('text').should('eq', 'Thank you for your vote!');
            
            cy.get('.row').eq(2).find('table > tbody').within(() => {
                cy.get('tr').contains('la don');
            });
        });

        cy.contains('Logout').click();
    });
});
/// <reference types="Cypress" />

describe('Verify homepage links', () => {
    it('verify primary links', () => {
        cy.visit('');

        // Verify header message
        cy.get('h1').invoke('text').should('eq', 'BuggyCarsRating');

        // Verify Login & Register buttons
        cy.get('.btn-success').invoke('text').should('eq', 'Login');
        cy.get('.btn-success-outline').invoke('text').should('eq', 'Register');

        // Verify three primary images with headings
        cy.get('my-home > div').within(() => {
            cy.get('.col-md-4').eq(1).find('h3').invoke('text')
                .should('contain', 'Lamborghini')
                .should('contain', 'votes');

            cy.get('.col-md-4').eq(1).find('h3').invoke('text')
                .should('contain', 'Lamborghini Diablo')
                .should('contain', 'votes');

            cy.get('.col-md-4').eq(2).find('h3').invoke('text')
                .should('eq', 'List of all registered models.');
        });
    });
});
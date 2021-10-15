/// <reference types="cypress" />

describe('react app', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('displays correct result after clicking button', () => {
    cy.getByTestId('plus-btn').click();
    cy.getByTestId('plus-btn').click();
    cy.getByTestId('plus-btn').click();
    cy.getByTestId('plus-btn').should('have.text', 'count is: 3');
    cy.getByTestId('plus-btn').should('not.have.text', 'count is: 2');
  });

  it('displays default result', () => {
    cy.getByTestId('plus-btn').should('have.text', 'count is: 0');
  });

  it('displays correct text', () => {
    cy.contains('Edit App.tsx and save to test HMR updates.').should('exist');
  });
});

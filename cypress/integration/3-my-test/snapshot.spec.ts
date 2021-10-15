/// <reference types="cypress" />

describe('react app', () => {
  // beforeEach(() => {
  //   cy.visit(Cypress.env('baseUrl'));
  // });

  it('toMatchImageSnapshot - whole page', () => {
    cy.visit(Cypress.env('baseUrl')).then(() => {
      cy.document().toMatchImageSnapshot();
    });
  });
});

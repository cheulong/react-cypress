/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    getByTestId(id: string);
    toMatchImageSnapshot();
    fixCypressSpec(filename: string): void;
  }
}

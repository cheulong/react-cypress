declare namespace Cypress {
  interface Chainable {
    getByTestId(id: string);
    toMatchImageSnapshot();
  }
}

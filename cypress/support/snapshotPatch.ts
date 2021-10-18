import { basename } from 'path';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      /**
       * Patch cypress-plugin-snapshots
       *
       * @returns {void}
       */
      fixCypressSpec(): void;
    }
  }
}

Cypress.Commands.add('fixCypressSpec', function() {
  const { absoluteFile, relativeFile } = this.test.invocationDetails;
  Cypress.spec = {
    ...Cypress.spec,
    absolute: absoluteFile,
    name: basename(absoluteFile),
    relative: relativeFile,
  };
});

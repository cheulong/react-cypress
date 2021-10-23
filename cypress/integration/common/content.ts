import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title);
});

Then(`I see {string}`, (text) => {
  cy.contains(text).should('exist');
});

Then(`I see {string} on {string} button`, (text, testId) => {
  cy.getByTestId(testId).should('have.text', text);
});

Then(`I don't see {string} on {string} button`, (text, testId) => {
  cy.getByTestId(testId).should('not.have.text', text);
});

When(`I click on {string} button {int} times`, (testId, time) => {
  for (let index = 0; index < time; index++) {
    cy.getByTestId(testId).click();
  }
});

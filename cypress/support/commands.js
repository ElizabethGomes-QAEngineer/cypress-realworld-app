// cypress/support/commands.js
Cypress.Commands.add('login', (username = 'jailsonnascimento.borracheiro@gmail.com', password = '1234') => {
  cy.visit('/signin');
  cy.get("input[name='username']").type(username);
  cy.get("input[name='password']").type(password);
  cy.get("button[type='submit']").click();
  cy.wait(5000);
 // cy.url().should('not.include', '/signin');
});

  
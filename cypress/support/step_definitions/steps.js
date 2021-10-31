Given(/^I open ([^"]*) page$/, (url) => {
  cy.visit(url);
});

Then(/^I see "([^"]*)" in the title$/, (title) => {
  cy.title().should("include", title);
});

Then(/^I see "([^"]*)"$/, (text) => {
  cy.contains(text);
});

When(
  `I put {string} into dividend field and {string} into divider field`,
  (dividend, divider) => {
    cy.get('input[data-testid="dzielna"]')
      .clear()
      .type(dividend)
      .should("have.value", dividend);
    cy.get('input[data-testid="dzielnik"]')
      .clear()
      .type(divider)
      .should("have.value", divider);
  }
);

Then(
  `I see {string} in result field and {string} into modulo field`,
  (result, modulo) => {
    cy.get('[data-testid="result"]').should("have.text", result);
    cy.get('[data-testid="modulo"]').should("have.text", modulo);
  }
);

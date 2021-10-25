describe("Dummy divider", () => {
  it("Basic functionality 3/2 should be 1.5", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Dummy divider");
    cy.get('input[data-testid="dzielna"]')
      .clear()
      .type("3")
      .should("have.value", "3");
    cy.get('input[data-testid="dzielnik"]')
      .clear()
      .type("2")
      .should("have.value", "2");
    cy.get('[data-testid="result"]').should("have.text", "1.5");
    cy.get('[data-testid="modulo"]').should("have.text", "1");
  });
  it("Basic functionality 3/0 should be 🤬", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Dummy divider");
    cy.get('input[data-testid="dzielna"]')
      .clear()
      .type("3")
      .should("have.value", "3");
    cy.get('input[data-testid="dzielnik"]')
      .clear()
      .type("0")
      .should("have.value", "0");
    cy.get('[data-testid="result"]').should("have.text", "🤬");
    cy.get('[data-testid="modulo"]').should("have.text", "🤬");
  });
});

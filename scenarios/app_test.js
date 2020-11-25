Feature("My First Test");

Scenario("See dummy divier", ({ I }) => {
  I.amOnPage("http://localhost:3000");
  I.see("Dummy divider");
});

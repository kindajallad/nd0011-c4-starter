/* global describe, it, cy, beforeEach*/

describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });
  it("Go to Home", () => {
    cy.get("[data-cy='home']").click();
    cy.contains("Study Night").should("be.visible");
  });
  it("Go to About", () => {
    cy.get("[data-cy='about']").click();
    cy.contains("About Study Night").should("be.visible");
  });
  it("Go to Card Set", () => {
    cy.get("[data-cy='cards']").click();
    cy.contains("Study Set Library").should("be.visible");
  });
});

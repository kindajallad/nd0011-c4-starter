/* global describe, it, cy, beforeEach*/

describe("Create Set Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
    cy.get("[data-cy = 'cards']").click();
    cy.get("[data-cy = 'toggle_form']").click();
    cy.get("[data-cy = 'set_form']").should("be.visible");
  });
  it("create set successfully", () => {
    const title = "java";
    cy.get("[data-cy = 'set_title']").type(title);
    cy.get("[data-cy = 'submit']").click();
    cy.contains(title).should("be.visible");
  });
  it("create set with invalid input", () => {
    cy.get("[data-cy = 'submit']").click();
    cy.contains("TITLE CANNOT BE EMPTY").should("be.visible");
  });
});

describe("Add Card Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
    cy.get("[data-cy = 'cards']").click();
    cy.get(".cardSets").first().click();
    cy.get("[data-cy = 'toggle_form']").click();
    cy.get("[data-cy = 'card_form']").should("be.visible");
  });
  it("create card successfully", () => {
    const question = "JS";
    const answer = "Programming Language";
    cy.get("[data-cy = 'term']").type(question);
    cy.get("[data-cy = 'description']").type(answer);
    cy.get("[data-cy = 'add']").click();
    cy.contains(question).should("be.visible");
  });
  it("create card with only term input", () => {
    const question = "JS";
    cy.get("[data-cy = 'term']").type(question);
    cy.get("[data-cy = 'add']").click();
    cy.contains("DESCRIPTION CANNOT BE EMPTY").should("be.visible");
  });
  it("create card with only Description input", () => {
    const answer = "Programming Language";
    cy.get("[data-cy = 'description']").type(answer);
    cy.get("[data-cy = 'add']").click();
    cy.contains("TERM CANNOT BE EMPTY").should("be.visible");
  });
  it("create card with without input", () => {
    cy.get("[data-cy = 'add']").click();
    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("be.visible");
  });
});

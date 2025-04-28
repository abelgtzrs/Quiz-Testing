/// <reference types="cypress" />

describe("Tech Quiz E2E Flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Starts the quiz and completes all questions", () => {
    cy.contains("Start Quiz").should("exist").click();

    // Wait for first question to load
    cy.get("h2", { timeout: 10000 }).should("be.visible");

    for (let i = 0; i < 10; i++) {
      // Answer the question
      cy.get(".btn.btn-primary").first().click();
    }

    // Confirm the quiz completion
    cy.contains("Quiz Completed").should("exist");
    cy.contains("Your score:").should("exist");
    cy.contains("Take New Quiz").should("exist");
  });
});

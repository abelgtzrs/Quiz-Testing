/// <reference types="cypress" />

import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  it("renders Start Quiz button by default", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("exist");
  });
});

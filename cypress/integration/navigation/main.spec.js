const { exists } = require("fs");

describe('User can', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it('successfully see landing page', () => {
    cy.get("[data-cy='title']").should("contain", "KidzMathicon");
    cy.get("[data-cy='startButton']").should("exist"); 
  });
});
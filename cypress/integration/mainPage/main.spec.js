const { exists } = require("fs");

describe('', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it('Successfully', () => {
    cy.get("[data-cy='title']").should("contain", "KidzMathicon");
    cy.get("[data-cy='startButton']").should("exist"); 
  });
});
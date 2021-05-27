const { exists } = require("fs");

describe('User can', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it('successfully see the multiplication table options', () => {
    cy.get("[data-cy='startButton']").click(); 
    cy.get("[data-cy='multiplicationTitle']").should("contain", "Choose a Table to Practice");
    cy.get("[data-cy='multiplicationChoices']").should("contain", "9");
  });
});

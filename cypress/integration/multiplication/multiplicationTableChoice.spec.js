describe('User can', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it('successfully choose from the multiplication table options', () => {
    cy.get("[data-cy='startButton']").click(); 
    cy.get("[data-cy='multiplicationTitle']").should("contain", "Choose a Table to Practice");
    cy.get("[data-cy='multiplicationChoices']").should("contain", "9");
    cy.get("[data-cy='multiplier-5']").click();
    cy.get("[data-cy='multiplier']").should("contain", "5");
    cy.get("[data-cy='startButton']").should("contain", "Check");
  });
});

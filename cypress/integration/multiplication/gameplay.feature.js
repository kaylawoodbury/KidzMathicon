describe("User can", () => {
  beforeEach(() => {
    cy.visit("/")
      cy.stub(generateNumber, "generateNumber").as("stub").return(5);
  });

  it("successfully answer the question within the time", () => {
    cy.get("[data-cy='startButton']").click();
    cy.get("[data-cy='multiplier-5']").click();
    cy.get("[data-cy='multiplication-input']").type(25);
  });
  // it('successfully answers the question within the time but with incorrect value', () => {
  // });
  // it('unsuccessfully answers the question within the time', () => {
  // });
});

let Chance = require("chance");

const generateNumber = () => {
  let chance = new Chance();
  let randomNumber = chance.integer({ min: 1, max: 10 });
  return randomNumber;
};

export { generateNumber };

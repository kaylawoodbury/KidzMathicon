import React from "react";
import Button from "./button/button";

const MultiplicationTableChoice = () => {
  let buttonValues: number[] = Array.from(Array(10), (_, i) => i+1)
  console.log(buttonValues)
  let buttonList = buttonValues.map((buttonValue) => {
    return <Button text={buttonValue}/>;
  });

  return (
    <div>
      <p>Choose a Table to Practice</p>
      <div className="ButtonContainer">{buttonList}</div>
    </div>
  );
};

export default MultiplicationTableChoice;

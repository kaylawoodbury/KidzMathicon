import React, {useState} from "react";
import Button from "./button/button";
import GamePage from "./GamePage";

const MultiplicationTableChoice = () => {

const [buttonSelection, setButtonSelection] = useState(0)
  let buttonValues: number[] = Array.from(Array(10), (_, i) => i + 1);
  let buttonList = buttonValues.map((buttonValue: number) => {
    return <Button text={buttonValue} id={buttonValue} onClick={()=> setButtonSelection(buttonValue)}/>;
  });

  return (
    <div style={{ marginTop: 0 }}>
      {buttonSelection === 0 && <>
      <p style={styles.title} data-cy="multiplicationTitle">
        Choose a Table to Practice
      </p>
      <div className="ButtonContainer" data-cy="multiplicationChoices">
        {buttonList}
      </div>
      </>}
      {buttonSelection !== 0 && <GamePage value={buttonSelection}/>}
    </div>
  );
};

export default MultiplicationTableChoice;

const styles = {
  title: {
    color: "rgb(240,224,42)",
    fontSize: "5vw",
    fontFamily: "Permanent Marker",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
    marginTop: 0
  },
};

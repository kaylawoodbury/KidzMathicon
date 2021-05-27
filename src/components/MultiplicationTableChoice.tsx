import React from "react";
import Button from "./button/button";

const MultiplicationTableChoice = () => {
  let buttonValues: number[] = Array.from(Array(10), (_, i) => i+1)
  console.log(buttonValues)
  let buttonList = buttonValues.map((buttonValue) => {
    return <Button text={buttonValue}/>;
  });

  return (
    <div style={{marginTop: 0}}>
      <p style={styles.title}>Choose a Table to Practice</p>
      <div className="ButtonContainer">{buttonList}</div>
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
  },
};
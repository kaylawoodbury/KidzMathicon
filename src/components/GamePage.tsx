import React, { useState } from "react";
import Button from "./button/button";
import { generateNumber } from "./actions/generateNumber";

const GamePage = (value: any) => {
  const [answer, setAnswer] = useState("");
  const [multiplicator, setMultiplicator] = useState(0);
  let multiplier = value.value;

  if (answer.length < 1 && multiplicator === 0) {
    let randomNumber= generateNumber();
    setMultiplicator(randomNumber);
  }

  const handleAnswer = () => {
    let result = multiplier * multiplicator;

    if (answer === result.toString()) {
      console.log(" You made it!");
    } else {
      console.log(" Sorry, it is wrong!");
    }
  };

  let result = multiplier * multiplicator;
  console.log({ result });

  return (
    <>
      <div
        style={{
          paddingTop: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "20vw",
          marginLeft: "20vw",
        }}
      >
        <p className="Box" data-cy="multiplier">
          {multiplier}
        </p>
        <p style={styles.title}>X</p>
        <p className="Box">{multiplicator}</p>
        <p style={styles.title}>=</p>
        <input
          className="Box"
          onChange={(i) => setAnswer(i.target.value)}
          data-cy='multiplication-input'
        ></input>
      </div>
      <div>
        <Button
          className="startButton"
          text="Check"
          data-cy="startButton"
          onClick={handleAnswer}
        />
      </div>
    </>
  );
};

export default GamePage;

const styles = {
  title: {
    color: "rgb(240,224,42)",
    fontSize: "10vw",
    fontFamily: "Permanent Marker",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
  },
};

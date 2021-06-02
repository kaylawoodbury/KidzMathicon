import React, {useState} from 'react'
let Chance = require('chance')

const GamePage = (value: any) => {
  const [answer, setAnswer] = useState('')
  const [multiplicator, setMultiplicator] = useState(0)
  let multiplier = value.value

  if (answer.length < 1 && multiplicator === 0) {
    let chance = new Chance()
    let randomNumber = chance.integer({ min: 1, max: 10 })
    setMultiplicator(randomNumber) 
  }

  let result = multiplier * multiplicator

  console.log({result})
  return (
    <div style={{paddingTop: "10%", display: "flex", alignItems: "center" , justifyContent: "space-between", marginRight: "20vw", marginLeft: "20vw"}}>
      <p className="Box">{multiplier}</p>
      <p style={styles.title}>X</p>
      <p className="Box">{multiplicator}</p>
      <p style={styles.title}>=</p>
      <input className="Box" onChange={i => setAnswer(i.target.value)}></input>
    </div>
  )
}

export default GamePage

const styles = {
  title: {
    color: "rgb(240,224,42)",
    fontSize: "10vw",
    fontFamily: "Permanent Marker",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
  },
};
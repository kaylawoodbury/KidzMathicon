import React from 'react'
let Chance = require('chance')

const GamePage = (value: any) => {
  let chance = new Chance()
  let randomMultiplicator = chance.integer({ min: 0, max: 10 })
  let multiplier = value.value

  console.log({value})
  return (
    <div style={{paddingTop: "10%", display: "flex", alignItems: "center" , justifyContent: "space-between", marginRight: "25vw", marginLeft: "25vw"}}>
      <p className="Box">{multiplier}</p>
      <p style={styles.title}>X</p>
      <p className="Box">{randomMultiplicator}</p>
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
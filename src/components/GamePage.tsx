import React from 'react'
let Chance = require('chance')

const GamePage = (value: any) => {
  let chance = new Chance()
  let randomMultiplicator = chance.integer({ min: 0, max: 10 })

  console.log({value})
  return (
    <div>
      <p >{randomMultiplicator}</p>
    </div>
  )
}

export default GamePage
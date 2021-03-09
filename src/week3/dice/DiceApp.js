import React from 'react'
import Dice from './Dice.js'

class DiceApp extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <br /><br />
        <p class="pageTitle">React Yahtzee</p>
        <Dice />
      </div>
    )
  }
}

export default DiceApp

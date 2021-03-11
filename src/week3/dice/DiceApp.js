import React from 'react'
import Header from './Components/Header.js'
import Dice from './Dice.js'
import './DiceApp.css'

class DiceApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Dice />
      </div>
    )
  }
}

export default DiceApp

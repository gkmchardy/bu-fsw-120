import React from 'react'
import Die from './Die.js'

class Dice extends React.Component {
    constructor() {
        super()
        this.state = {
            die1: 1,
            die2: 2,
            die3: 3,
            die4: 4,
            die5: 5
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState(prevState => {
            return {
                die1: Math.ceil(Math.random() * 6),
                die2: Math.ceil(Math.random() * 6),
                die3: Math.ceil(Math.random() * 6),
                die4: Math.ceil(Math.random() * 6),
                die5: Math.ceil(Math.random() * 6)
            }
        })
    }

    render() {
        return (
            <div className="DiceGame">
                <br />
                <Die pips = {this.state.die1} />
                <Die pips = {this.state.die2} />
                <Die pips = {this.state.die3} />
                <Die pips = {this.state.die4} />
                <Die pips = {this.state.die5} />
                <div><button onClick={this.handleClick} className="DiceButton">Roll Dice</button></div>
            </div>
        )
    }
}

export default Dice
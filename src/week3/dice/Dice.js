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
            <div>
                <Die pips = {this.state.die1} handleClick={this.handleClick} />
                <Die pips = {this.state.die2} handleClick={this.handleClick} />
                <Die pips = {this.state.die3} handleClick={this.handleClick} />
                <Die pips = {this.state.die4} handleClick={this.handleClick} />
                <Die pips = {this.state.die5} handleClick={this.handleClick} />
            </div>
        )
    }
}

export default Dice
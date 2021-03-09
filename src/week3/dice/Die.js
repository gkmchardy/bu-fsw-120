import React from 'react'

class Die extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick(this.props.handleClick());
      }

    render() {
        let imgSrc = './images/die' + this.props.pips + '.jpg'
        return (
            <img style={{padding: 15}} src={imgSrc} onClick={this.handleClick} />
        )
    }
}

export default Die
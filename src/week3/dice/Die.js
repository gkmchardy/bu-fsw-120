import React from 'react'

function Die (props) {
    let imgSrc = './images/die' + props.pips + '.jpg'
    return (
        <img style={{padding: 15}} src={imgSrc} />
    )
}

export default Die
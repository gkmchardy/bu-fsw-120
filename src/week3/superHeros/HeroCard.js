import React from 'react'

function HeroCard(props) {
    return (
        <div>
            <br />
            <div className="cell" onClick={() => alert(props.catchPhrase)}>
                <img style={{height:"100px"}} src={props.imageName} />
                <p style={{backgroundColor:props.bgcolor, borderRadius:"25px"}}  onClick={() => alert(props.catchPhrase)}></p>
                <p style={{fontSize:"30px", fontWeight:"bold", color:props.color}}>{props.name}</p>
            </div>
        </div>
    )
}

export default HeroCard
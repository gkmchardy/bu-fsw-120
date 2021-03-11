import React from 'react'

function HeroCard(props) {
    return (
        <div 
                className="HeroBox" 
                style={{backgroundColor:props.bgcolor, borderRadius:"25px"}}
                onClick={() => alert(props.catchPhrase)} 
            >
            <img className="HeroImg" src={props.imageName} />
            <p style={{fontSize:"30px", fontWeight:"bold", color:props.color}}>{props.name}</p>
        </div>
    )
}

export default HeroCard
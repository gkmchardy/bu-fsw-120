import React from "react"

function InfoBox(props) {
    return (
        <div style={{backgroundColor:props.bgcolor, color:props.color, textAlign:"center", color:"#ffffff", padding:5}}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default InfoBox
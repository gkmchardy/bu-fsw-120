import React from "react"

function JokeCard(props) {
    return (
        <div>
            <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
            <p style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</p>
            <hr/>
        </div>
    )
}

export default JokeCard
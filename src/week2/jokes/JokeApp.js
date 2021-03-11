import React from "react"
import JokeCard from "./JokeCard.js"
import JokeData from "./JokeData.js"
import './JokeApp.css'


function JokeApp() {
    const jokeComponents = JokeData.map(joke => <JokeCard key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
    return (
        <div className="JokeDiv">
            {jokeComponents}            
        </div>
    )
}

export default JokeApp
import React from "react"

import Joke from "./joke.js"
import jokesData from "./jokesData.js"

function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
    return (
        <div>
            {jokeComponents}            
        </div>
    )
}

export default App
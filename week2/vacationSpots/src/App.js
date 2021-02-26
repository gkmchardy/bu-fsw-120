import React from "react"
import './index.css';
import Spot from "./spot.js"
import spotsData from "./spotsData.js"

function App() {
    const spotComponents = spotsData.map(spot => <Spot 
            key={spot.id} 
            place={spot.place} 
            price={spot.price} 
            timeToGo={spot.timeToGo} 
            bgcolor={spot.bgcolor} 
            color={spot.color}
        />)
    
    return (
        <div>
            {spotComponents}            
        </div>
    )
}

export default App
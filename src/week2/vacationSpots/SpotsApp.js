import React from "react"
import SpotCard from "./SpotsCard.js"
import SpotsData from "./SpotsData.js"
import './SpotsApp.css'

function SpotsApp() {
    const spotComponents = SpotsData.map(spot => <SpotCard 
            key={spot.id} 
            place={spot.place} 
            price={spot.price} 
            timeToGo={spot.timeToGo} 
            bgcolor={spot.bgcolor} 
            color={spot.color}
        />)
    
    return (
        <div className="SpotsDiv">
            {spotComponents}            
        </div>
    )
}

export default SpotsApp
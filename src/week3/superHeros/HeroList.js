import React from 'react'
import { default as data } from './HeroData.json'
import HeroCard from './HeroCard.js'

function HeroList() {
    const heroComponents = data.map(data => <HeroCard 
        name={data.name} 
        catchPhrase={data.catchPhrase} 
        imageName={data.imageName} 
        bgcolor={data.bgcolor} 
        color={data.color}
    />)
    return (
        <div className="HeroDiv">
            {heroComponents}
        </div>
    )
}

export default HeroList
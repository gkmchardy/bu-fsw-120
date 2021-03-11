import React from "react"

function SpotCard(props) {
    return (
        <div className="SpotsCard" style={{backgroundColor:props.bgcolor, color:props.color}}>
            <div>{props.place}</div>
            <div>{props.price > 12000 ? '$$$' : props.price > 10000 && props.price < 15000 ? '$$' : '$'}</div>
            <div>{props.timeToGo}</div>
        </div>
    )
}

export default SpotCard
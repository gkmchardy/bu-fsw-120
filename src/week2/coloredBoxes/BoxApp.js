import React from "react"
import BoxCard from "./BoxCard.js"

function BoxApp() {
    return (
        <div>
            <BoxCard 
                title="Commandment I" 
                subtitle="No Other Gods Before Me" 
                description="There's only one of me, so forget all those other gods and godesses" 
                bgcolor="#ff0000"
            />       
            <BoxCard 
                title="Commandment II" 
                subtitle="No Graven Images" 
                description="You have no idea what I look like, so don't even try" 
                bgcolor="#ee0000"
            />       
            <BoxCard 
                title="Commandment III" 
                subtitle="No Taking Name of God in Vain" 
                description="Dude, stop all the swearing and potty language" 
                bgcolor="#dd0000"
            />       
            <BoxCard 
                title="Commandment IIII" 
                subtitle="Keep the Sabbath Holy" 
                description="Have you been to church/temple/prayers lately" 
                bgcolor="#cc0000"
            />       
            <BoxCard 
                title="Commandment V" 
                subtitle="Honor Father and Mother" 
                description="Listen to your folks or your kids won't listen to you" 
                bgcolor="#bb0000"
            />       
            <BoxCard 
                title="Commandment VI" 
                subtitle="No Killing" 
                description="Except for delicious cows" 
                bgcolor="#aa0000"
            />       
            <BoxCard 
                title="Commandment VII" 
                subtitle="No Adultery" 
                description="Ain't misbehaving, saving my loving just for you" 
                bgcolor="#990000"
            />       
            <BoxCard 
                title="Commandment VIII" 
                subtitle="No Stealing" 
                description="Five finger discounts are not allowed" 
                bgcolor="#880000"
            />       
            <BoxCard 
                title="Commandment VIIII" 
                subtitle="No Lying" 
                description="Even little white ones, dude" 
                bgcolor="#770000"
            />       
            <BoxCard 
                title="Commandment X" 
                subtitle="No Coveting" 
                description="You get what you get and you don't pitch a fit" 
                bgcolor="#660000"
            />       
        </div>
    )
}

export default BoxApp
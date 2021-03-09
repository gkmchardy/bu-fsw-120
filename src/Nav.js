import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Nav () {
    const linkStyle = { color:'white', textDecoration:'none', fontSize:"small" }
    return (
        <nav>
            <ul className="nav-links">
                <Link style={linkStyle} to='/TodoApp'><li>To Do List</li></Link>
                <Link style={linkStyle} to='/JokeApp'><li>Jokes</li></Link>
                <Link style={linkStyle} to='/SpotsApp'><li>Vacation Spots</li></Link>
                <Link style={linkStyle} to='/BoxApp'><li>Colored Boxes</li></Link>
                <Link style={linkStyle} to='/BlogApp'><li>Blog List</li></Link>
                <Link style={linkStyle} to='/HeroApp'><li>Super Heroes</li></Link>
                <Link style={linkStyle} to='/DiceApp'><li>Dice Game</li></Link>
                <Link style={linkStyle} to='/DJApp'><li>DJ Tiles</li></Link>
                <Link style={linkStyle} to='/NameApp'><li>Name Entry</li></Link>
                <Link style={linkStyle} to='/BadgeApp'><li>Name Badges</li></Link>
            </ul>
        </nav>
    )
}

export default Nav
import React from 'react'
import '../BlogApp.css';

function Navbar() {
    return (
        <div className="navContainer">
            <a className="Bootstrap" href="#">Start Bootstrap</a>
            <a className="navOptions" href="#">HOME</a>
            <a className="navOptions" href="#">ABOUT</a>
            <a className="navOptions" href="#">SAMPLE POST</a>
            <a className="navOptions" href="#">CONTACT</a>
        </div>
    )
}

export default Navbar
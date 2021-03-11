import React from 'react'
import Navbar from './Navbar.js'
import '../BlogApp.css';

function Header() {
    return (
        <div className="headContainer">
            <Navbar />
            <h1 className="titleMain">Clean Blog</h1>
            <h4 className="titleSub">A Blog Theme by Start Bootstrap</h4>
        </div>
    )
}

export default Header
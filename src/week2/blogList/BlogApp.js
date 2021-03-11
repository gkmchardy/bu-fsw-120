import React from "react"
import Header from "./Components/Header.js"
import BlogList from "./BlogList.js"
import './BlogApp.css'

function BlogApp() {
    return (
        <div>
            <Header />
            <BlogList />
        </div>
    )
}

export default BlogApp
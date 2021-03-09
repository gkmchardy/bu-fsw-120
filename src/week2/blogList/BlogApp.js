import React from "react"
import Navbar from "./Navbar.js"
import BlogList from "./BlogList.js"
import Footer from "./Footer.js"

function BlogApp() {
    return (
        <div>
            <Navbar />
            <BlogList />
            <Footer />
        </div>
    )
}

export default BlogApp
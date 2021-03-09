import React from 'react'
import BlogPost from './BlogPost.js'
import BlogData from "./BlogData.js"

function BlogList() {

    const blogComponents = BlogData.map(blog => <BlogPost 
        key={blog.id} 
        title={blog.title} 
        subTitle={blog.subTitle} 
        author={blog.author} 
        date={blog.date} 
    />)

    return (
        <div>{blogComponents}</div>
    )
}

export default BlogList
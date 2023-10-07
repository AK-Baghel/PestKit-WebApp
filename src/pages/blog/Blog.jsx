import React from 'react'
import BlogCarosel from './blogCarousel/BlogCarosel'

function Blog() {
  return (
    <div className="serviceContainer">
      <div className="serviceBox1">
        <div className="serviceTitle">Our Blog</div>
        <div className="serviceHeading">Latest Blog & News</div>
      </div>
      <div className="serviceBox2">
        <BlogCarosel />
      </div>

    </div>
  )
}

export default Blog
import React from 'react'
import blog1 from "../../../assets/blog-1.jpg"
import blog2 from "../../../assets/blog-2.jpg"
import blog3 from "../../../assets/blog-3.jpg"
import Carousel from 'better-react-carousel'

import BlogCarouselTile from '../blogCarouselTile/BlogCarouselTile'
import "./style.css"


function BlogCarosel() {
  return (
    <>
    <div className="blogCarouselContainer">
      <div className="blogCarouselBox">
      <BlogCarouselTile img={blog1}/>
      <BlogCarouselTile img={blog2}/>
      <BlogCarouselTile img={blog3}/>
      <BlogCarouselTile img={blog2}/>
      <BlogCarouselTile img={blog1}/>
      <BlogCarouselTile img={blog3}/>
      <BlogCarouselTile img={blog1}/>
      <BlogCarouselTile img={blog2}/>
      <BlogCarouselTile img={blog3}/>
      <BlogCarouselTile img={blog2}/>
      <BlogCarouselTile img={blog1}/>
      <BlogCarouselTile img={blog3}/>
      </div>
    </div>
    </>
  )
}

export default BlogCarosel
import React from 'react'
import Carousel from 'better-react-carousel'
import blog1 from "../../../assets/blog-1.jpg"
import blog2 from "../../../assets/blog-2.jpg"
import blog3 from "../../../assets/blog-3.jpg"
import "./style.css"


function BlogCarosel() {
  return (
    <Carousel cols={3} rows={1} gap={30} loop showDots autoplay={4000} >
      <Carousel.Item>
        <img width="100%" src={blog1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={blog2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={blog3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={blog1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={blog2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={blog3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={blog1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={blog2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={blog3} />
      </Carousel.Item>
    </Carousel>
  )
}

export default BlogCarosel
import React from 'react'
import TestimonialCarousel from './testimonialCarousel/TestimonialCarousel'

import "./style.css"

function Testimonial() {
  return (
    <div className="serviceContainer myMargin">
      <div className="serviceBox1">
        <div className="serviceTitle">Testimonial</div>
        <div className="serviceHeading">What Clients Say About Our Services</div>
      </div>
      <div className="serviceBox2">
        <TestimonialCarousel/>
      </div>
    </div>
  )
}

export default Testimonial
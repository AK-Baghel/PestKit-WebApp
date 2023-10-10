import React from 'react'
import img1 from "../../../assets/testimonial-1.jpg"
import img2 from "../../../assets/testimonial-2.jpg"
import img3 from "../../../assets/testimonial-3.jpg"
import img4 from "../../../assets/testimonial-4.jpg"
import TestimonialTile from '../testimonialTile/TestimonialTile'
import "./style.css"


function TestimonialCarousel() {
    return (
        <div className=" testimonialCarouselContainer">
            <div className=" testimonialCarouselBox">
                <TestimonialTile img={img1} />
                <TestimonialTile img={img2} />
                <TestimonialTile img={img3} />
                <TestimonialTile img={img4} />
                <TestimonialTile img={img2} />
                <TestimonialTile img={img3} />
                <TestimonialTile img={img1} />
                <TestimonialTile img={img4} />
            </div>
        </div>
    )
}

export default TestimonialCarousel


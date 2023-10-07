import React from 'react'
import Action from "../../../assets/action.jpg"
import "./Style.css"

function AboutSection2() {
  return (
    <div className="aboutSection2Container">
      <div className="aboutSection2Section">
        <div className="aboutSection2Transparency">
          
          <img className='aboutSection2Img' src={Action} alt="" />
          <div className="aboutSection2Items">
            <div className="aboutSection2Item">Sign Up To Our Newsletter To Get The Latest Offers</div>
            <div className="aboutSection2Email">
              <input type="email" required className='aboutSection2Input' placeholder='Enter Your Email Address'/>
              <div className="aboutSection2Button">SUBSCRIBE</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default AboutSection2
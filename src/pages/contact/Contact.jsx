import React from 'react'
import Map from './map/Map'
// import ContactTile from './contactTile/ContactTile'

import "./style.css"

function Contact() {
  return (
    <div className="serviceContainer">
      <div className="serviceBox1">
        <div className="serviceTitle">Get In Touch</div>
        <div className="serviceHeading">Contact for any query</div>
      </div>

      <div className="serviceBox2">
        <div className="contactContainer">
          <Map className="mapCompo"/>
          <div className="contactForm">
            <div className="contactFormDetails">
              The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <span className='contactFormSapn'>Download Now</span>.
            </div>
            <div className="contactFormPage">
              <input type="text" className="contactFormPageText" placeholder='Your Name' />
              <input type="email" className="contactFormPageText" placeholder='Your Email' />
              <input type="text" className="contactFormPageText" placeholder='Subject' />
              <textarea name="Message" className="contactFormPageTextArea" ></textarea>
              <div className="pricingTileButton contactButton">SEND MESSAGE</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="serviceBox3 contactFormSection3" >
        <ContactTile details={"Follow Us"} />
        <ContactTile details={"Address"} title={<FaLocationDot className='contactTileTurnLogo'/>}/>
        <ContactTile details={"Call Us"} title={<BsFillSignTurnRightFill className='contactTileTurnLogo'/>}/>
        <ContactTile details={"Email Us"} title={<BsFillSignTurnRightFill className='contactTileTurnLogo'/>}/>
      </div> */}
    </div>
  )
}

export default Contact
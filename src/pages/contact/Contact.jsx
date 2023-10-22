import React, { useState } from 'react'
import Map from './map/Map'
// import ContactTile from './contactTile/ContactTile'

import "./style.css"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(false);

  const submit = async () => {
    if (!name || !email || !subject || !message) {
      setCheck(true)
      return false;
    }
    const data = await fetch("http://localhost:5000/contact-form", {
      method: "post",
      body: JSON.stringify({ name, email, subject, message }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setCheck(false)

  }

  return (
    <div className="serviceContainer myMargin">
      <div className="serviceBox1">
        <div className="serviceTitle">Get In Touch</div>
        <div className="serviceHeading">Contact for any query</div>
      </div>

      <div className="serviceBox2">
        <div className="contactContainer">
          <Map className="mapCompo" />
          <div className="contactForm">
            <div className="contactFormDetails">
              The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <span className='contactFormSapn'>Download Now</span>.
            </div>
            <div className="contactFormPage">
              <input type="text" className="contactFormPageText" placeholder='Your Name' value={name} onChange={(e) => { setName(e.target.value) }} />
              {check && !name && <p className='validation'>It's mandatory to fill Name</p>}

              <input type="email" className="contactFormPageText" placeholder='Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
              {check && !email && <p className='validation'>It's mandatory to fill Email</p>}

              <input type="text" className="contactFormPageText" placeholder='Subject' value={subject} onChange={(e) => { setSubject(e.target.value) }} />
              {check && !subject && <p className='validation'>It's mandatory to fill Subject</p>}

              <textarea name="Message" className="contactFormPageTextArea" placeholder='Your Message' value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
              {check && !message && <p className='validation'>It's mandatory to fill Message</p>}

              <div className="pricingTileButton contactButton" onClick={submit}>SEND MESSAGE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
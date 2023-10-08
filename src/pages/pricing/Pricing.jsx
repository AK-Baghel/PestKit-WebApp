import React from 'react'
import PricingTile from './pricingTile/PricingTile'

import "./style.css"

function Pricing() {
  return (
    <div className="serviceContainer">
      <div className="serviceBox1">
        <div className="serviceTitle">Our Pricing</div>
        <div className="serviceHeading pricingWidth">Affordable Pricing Plan For Pest Control Services</div>
      </div>
      <div className="serviceBox2 ">
        <PricingTile level={"Basic"} money={60}/>
        <PricingTile level={"Standard"} money={80}/>
        <PricingTile level={"Premium"} money={120}/>
      </div>
    </div>
  )
}

export default Pricing
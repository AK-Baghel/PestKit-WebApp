import React from 'react'
import ServiceTile from './servicsTile/ServiceTile'

import "./style.css"

function Services() {
  return (
    <>
      <div className="serviceContainer">
      <div className="serviceBox1">
        <div className="serviceTitle">Our Services</div>
        <div className="serviceHeading">Common Pest Control Services</div>
      </div>
      <div className="serviceBox2">
        <ServiceTile data={"Spiders"}/>
        <ServiceTile data={"Mosquitos"}/>
        <ServiceTile data={"Rodents"}/>
        <ServiceTile data={"Termites"}/>
      </div>
      <div className="serviceBox3">
        <div className="seviceTileButton">MORE SERVICES</div>
      </div>
    </div>
    </>
  )
}

export default Services
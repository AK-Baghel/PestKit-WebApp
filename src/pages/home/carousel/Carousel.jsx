import React from 'react'
import "./style.css"

function Carousel() {
  return (
    <div className="hContainer">
    <div className="carousel">
      <div className="hDiv1">
        <div className="hContent ">
          <div className="data">
            <div className="hHeading">No 1 Pest Control Services</div>
            <div className="hDesc">Enjoy Your Home Totally Pest Free</div>
            <div className="hButton">READ MORE</div>
          </div>
        </div>
      </div>
      <div className="hDiv2">
        <div className="hContent">
          <div className="data">
            <div className="hHeading">No 1 Pest Control Services</div>
            <div className="hDesc">Enjoy Your Home Totally Pest Free</div>
            <div className="hButton">READ MORE</div>
          </div>
        </div>
      </div>
    </div>
    
      <div className="hLeft" >{`<`}</div>
      <div className="hRight">{">"}</div>

      <div className="hDots">
        <div className="hDot1"/>
        <div className="hDot2"/>
      </div>

    </div>
  )
}

export default Carousel
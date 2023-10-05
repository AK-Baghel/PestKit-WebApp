import React from 'react'
import img1 from "../../assets/carousel-1.jpg"
import img2 from "../../assets/carousel-2.jpg"
import "./style.scss"

function Home() {
  return (
    <>
    <div className="hContainer">
    <div className="carousel">
      <div className="hDiv1">
        <div className="hContent">
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
    
      <div className="hLeft">{`<`}</div>
      <div className="hRight">{">"}</div>
      
    </div>
    </>

  )
}

export default Home
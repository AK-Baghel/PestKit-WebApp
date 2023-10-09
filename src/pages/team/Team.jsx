import React from 'react'
import TeamTile from './teamTile.jsx/TeamTile'
import img1 from "../../assets/team-1..jpg"
import img2 from "../../assets/team-2.jpg"
import img3 from "../../assets/team-3.jpg"
import img4 from "../../assets/team-4.jpg"

function Team() {
  return (
    <div className="serviceContainer">
      <div className="serviceBox1">
        <div className="serviceTitle">Our Team</div>
        <div className="serviceHeading">Our Team Members</div>
      </div>
      <div className="serviceBox2">
        <TeamTile img={img1}/>
        <TeamTile img={img2}/>
        <TeamTile img={img3}/>
        <TeamTile img={img4}/>
      </div>
    </div>
  )
}

export default Team
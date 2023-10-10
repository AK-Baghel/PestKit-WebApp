import React from 'react'
import ProjectTile from './projectTile/ProjectTile'
import project1 from "../../assets/project-1.jpg"
import project2 from "../../assets/project-2.jpg"
import project3 from "../../assets/project-3.jpg"
import project4 from "../../assets/project-4.jpg"
import project5 from "../../assets/project-5.jpg"
import project6 from "../../assets/project-6.jpg"


function Projects() {
  return (
    <div className="serviceContainer myMargin">
      <div className="serviceBox1">
        <div className="serviceTitle">Our Project</div>
        <div className="serviceHeading">Our recently completed projects</div>
      </div>
      <div className="serviceBox2 ">
        <ProjectTile data={project1} banner={"Whole Home Sanitizing"}/>
        <ProjectTile data={project2} banner={"Education center Cleaning"}/>
        <ProjectTile data={project3} banner={"Warehouse Cleaning"}/>
        <ProjectTile data={project4} banner={"Hospital Cleaning"}/>
        <ProjectTile data={project5} banner={"Factory Cleaning"}/>
        <ProjectTile data={project6} banner={"Furniture Sanitizing"}/>
      </div>
    </div>
  )
}

export default Projects
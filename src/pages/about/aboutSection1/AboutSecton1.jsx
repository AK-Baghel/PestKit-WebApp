import React from 'react'
import "./style.css"
import AboutImg from "../../../assets/about-img.jpg"
import {BsFillBuildingsFill} from "react-icons/bs"
import {FaSchool} from "react-icons/fa"
import {FaWarehouse} from "react-icons/fa"
import {FaHospital} from "react-icons/fa"

function AboutSecton1() {
    return (
        <div className="as1Container">
            <div className="as1">
                <div className="as1Box1">
                    <div className="as1Img">
                        <img src={AboutImg} alt="" />
                    </div>
                </div>
                <div className="asiBox2">
                    <div className="asiTitle">About PestKit</div>
                    <div className="asiHeading">World Best Pest Control Services Since 2008</div>
                    <div className="asiDesc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente earum quas accusantium libero minus harum nobis iste soluta culpa placeat nisi tempora dolorum.
                    </div>
                    <div className="asiIcons">
                        <div className="asiIcon">
                            <BsFillBuildingsFill className='asiIconStyle'/>
                            <div className="asiIconText">Building<br/>Cleaning</div>
                        </div>
                        <div className="asiIcon">
                            <FaSchool className='asiIconStyle'/>
                            <div className="asiIconText">Education<br/>Center</div>
                        </div>
                        <div className="asiIcon">
                            <FaWarehouse className='asiIconStyle'/>
                            <div className="asiIconText">Warehouse<br/>Cleaning</div>
                        </div>
                        <div className="asiIcon">
                            <FaHospital className='asiIconStyle'/>
                            <div className="asiIconText">Hospital<br/>Cleaning</div>
                        </div>
                    </div>
                    <div className="asiButton">Find Services</div>
                </div>
            </div>
        </div>
    )
}

export default AboutSecton1
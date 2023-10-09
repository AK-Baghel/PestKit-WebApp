import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import "./style.css"

function TeamTile({ img }) {
    const [show, setShow] = useState(false);

    return (
        <div className="teamTileContainer" >

            <div className="teamTileBox1" onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}}>
                <img className='teamTileImg' src={img} alt="" />
                <div className="teamTileButton">
                    <div className="teamTileName">Full Name</div>
                    <div className="teamTileDesig">Designation</div>
                </div>
            </div>

            <div className= {`teamTileBox2 ${show ? "teamTileBox2Hide" : ""}`} onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}} >
                <FaFacebookF className='footerSocial teamTileSocial' />
                <FaTwitter className='footerSocial teamTileSocial' />
                <FaLinkedinIn className='footerSocial teamTileSocial' />
                <FaInstagram className='footerSocial teamTileSocial' />
            </div>
        </div>
    )
}

export default TeamTile
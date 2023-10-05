import React, { useState } from 'react'

import { FaSpider } from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { FaLocationDot } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { AiOutlineDown } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

import "./style.scss"

function Header() {
    const [toggle, setToggle] = useState(true);
    const [float,setFloat]=useState(true);
    const navigate=useNavigate();

    const display=(e)=>{
        setFloat(!float)
    }


    return (
        <>
            <div className="container">
                <div className="contact">
                    <div className="content">
                        <div className="details">
                            <FaLocationDot className='detailsLogo' />
                            <span className='detailsData'>123 Street, CA, USA</span>
                        </div>
                        <div className="details">
                            <IoCall className='detailsLogo' />
                            <span className='detailsData'>+01234567890</span>
                        </div>
                        <div className="details">
                            <MdEmail className='detailsLogo' />
                            <span className='detailsData'>Example@gmail.com</span>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Search Here' />
                            <FiSearch className='detailsLogo search' />
                        </div>
                        <div className="line" />
                        <div className="socials">
                            <FaFacebookF className='sl detailsLogo' />
                            <FaTwitter className='sl detailsLogo' />
                            <FaInstagram className='sl detailsLogo' />
                            <FaLinkedinIn className='sl detailsLogo' />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="logo" onClick={()=>{navigate('/')}}>
                        <div className="text">Pest<span>Kit</span></div>
                        <FaSpider className='spider' />
                    </div>
                    <ul className={toggle ? "show" : ""}>
                        <li className='active' onClick={()=>{navigate('/')}}>Home</li>
                        <li onClick={()=>{navigate('/about')}}>About</li>
                        <li onClick={()=>{navigate('/services')}}>Services</li>
                        <li onClick={()=>{navigate('/projects')}}>Projects</li>
                        <li className='arrow' onClick={display} >Pages<AiOutlineDown size={"15px"}/> 
                            <div className={`float ${float ? "set" : ""} `}>
                                <div className="items" onClick={()=>{navigate('/pricing')}}>Pricing Plan</div>
                                <div className="items" onClick={()=>{navigate('/blog')}}>Blog Post</div>
                                <div className="items" onClick={()=>{navigate('/team')}}>Team Members</div>
                                <div className="items" onClick={()=>{navigate('/testimonial')}}>Testimonial</div>
                                <div className="items" onClick={()=>{navigate('/page404')}}>404 Page</div>
                            </div>
                        </li>
                        <li onClick={()=>{navigate('/contact')}}>Contact</li>
                    </ul>
                <FaBars className='mobile' size={"25px"} onClick={() => { setToggle(!toggle) }} />
                </div>
            </div>
        </>
    )
}

export default Header
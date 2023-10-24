import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
import { Context } from '../../context/AppContext'

import "./style.scss"

function Header() {

    const { data, loginValid } = useContext(Context)

    const [toggle, setToggle] = useState(true);
    const [float, setFloat] = useState(true);
    const navigate = useNavigate();

    const display = (e) => {
        setFloat(!float)
    }

    const location = useLocation();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user)
            loginValid(user);
    }, [])


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
                    <div className="logo" onClick={() => { navigate('/') }}>
                        <div className="text">Pest<span>Kit</span></div>
                        <FaSpider className='spider' />
                    </div>
                    <ul className={`headerUl ${toggle ? "show" : ""}`}>
                        <li className={`headerLi ${location.pathname === "/" ? "active" : ""}`} onClick={() => { navigate('/') }}>Home</li>
                        <li className={`headerLi ${location.pathname === "/about" ? "active" : ""}`} onClick={() => { navigate('/about') }}>About</li>

                        {data &&
                            <>
                                <li className={`headerLi ${location.pathname === "/services" ? "active" : ""}`} onClick={() => { navigate('/services') }}>Services</li>
                                <li className={`headerLi ${location.pathname === "/projects" ? "active" : ""}`} onClick={() => { navigate('/projects') }}>Projects</li>
                                <li className='arrow headerLi' onClick={display} >Pages<AiOutlineDown size={"15px"} />
                                    <div className={`float ${float ? "set" : ""} `}>
                                        <div className="items" onClick={() => { navigate('/pricing') }}>Pricing Plan</div>
                                        <div className="items" onClick={() => { navigate('/blog') }}>Blog Post</div>
                                        <div className="items" onClick={() => { navigate('/team') }}>Team Members</div>
                                        <div className="items" onClick={() => { navigate('/testimonial') }}>Testimonial</div>
                                        <div className="items" onClick={() => { navigate('/page404') }}>404 Page</div>
                                    </div>
                                </li>
                            </>
                        }

                        <li className={`headerLi ${location.pathname === "/contact" ? "active" : ""}`} onClick={() => { navigate('/contact') }}>Contact</li>

                        {
                            data ?
                                <>
                                    <li className={`headerLi ${location.pathname === "/dashboard" ? "active" : ""}`} onClick={() => { navigate('/dashboard') }}>Dashboard</li>
                                    <li className={`headerLi`} onClick={() => { navigate('/login'); loginValid(false); localStorage.clear("user") }}>Logout ({JSON.parse(data).name})</li>

                                </>
                                :
                                <>
                                    <li className={`headerLi ${location.pathname === "/signUp" ? "active" : ""}`} onClick={() => { navigate('/signUp') }}>SignUp</li>
                                    <li className={`headerLi ${location.pathname === "/login" ? "active" : ""}`} onClick={() => { navigate('/login') }}>Login</li>
                                </>
                        }

                    </ul>
                    <FaBars className='mobile' size={"25px"} onClick={() => { setToggle(!toggle) }} />
                </div>
            </div>
        </>
    )
}

export default Header
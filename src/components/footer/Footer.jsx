import React from 'react'
import { BsCheckLg } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { MdLocationOn } from "react-icons/md"
import { FaSpider } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import "./style.css"


function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerBox1">

                <div className="footerBack">
                    <div className="footerItems">
                        <div className="footerTitle">About PestKit.</div>
                        <div className="footerDesc">Nostrud Exertation Ullamco Labor Nisi Aliquip Ex Ea Commodo Consequat Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore.</div>
                        <div className="footerRights">PestKit © 2023 All Right Reserved.</div>
                    </div>


                    <div className="footerItems">
                        <div className="footerTitle">Usefull Link</div>
                        <ul className='footerLists'>
                            <li className="footerList"><BsCheckLg className='footerCheck' />About Us</li>
                            <li className="footerList"><BsCheckLg className='footerCheck' />Contact US</li>
                            <li className="footerList"><BsCheckLg className='footerCheck' />Our Services</li>
                            <li className="footerList"><BsCheckLg className='footerCheck' />Terms & Condition</li>
                        </ul>
                    </div>

                    <div className="footerItems">
                        <div className="footerTitle">Services Link</div>
                        <ul className='footerLists'>
                            <li className="footerList"><BsCheckLg className='footerCheck' />Apartment Cleaning</li>
                            <li className="footerList"><BsCheckLg className='footerCheck' />Office Cleaning</li>
                            <li className="footerList"><BsCheckLg className='footerCheck' />Car Washing</li>
                            <li className="footerList"><BsCheckLg className='footerCheck' />Green Cleaning</li>
                        </ul>
                    </div>

                    <div className="footerItems">
                        <div className="footerTitle">Contact Us</div>
                        <ul className='footerLists'>
                            <li className="footerContactList"><MdLocationOn className='footerCheck' />123 Street, CA, USA</li>
                            <li className="footerContactList"><BsFillTelephoneFill className='footerCheck' />+01234567890</li>
                            <li className="footerContactList"><MdOutlineEmail className='footerCheck' />info@Example.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footerBox2">
                <div className="footerLogo">
                    <div className="footerText1">Pest</div>
                    <div className="footerText2">Kit</div>
                    <FaSpider />
                </div>
                <div className="footerSocail">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}

export default Footer
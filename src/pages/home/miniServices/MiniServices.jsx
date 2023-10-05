import React from 'react'
import "./style.css"

function MiniServices() {
    return (
        <div className="miniContainer">
            <div className="miniBox1">
                <div className='miniHeading'>Find Your Pest Control Services</div>
                <div className="miniForm">
                    <select className='miniSelect' name="" id="">
                        <option value="">Type Of Service</option>
                        <option value="">Pest Control - 2</option>
                        <option value="">Pest Control - 3</option>
                        <option value="">Pest Control - 4</option>
                        <option value="">Pest Control - 5</option>
                    </select>
                    <input className='miniInput' type="text" placeholder='Name' />
                    <input className='miniInput' type="text" placeholder='Phone' />
                    <input className='miniInput' type="text" placeholder='Email' />
                    <div className="miniButton">Get Started</div>
                </div>
            </div>
        </div>
    )
}

export default MiniServices
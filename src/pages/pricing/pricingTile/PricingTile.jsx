import React, {useState} from 'react'
import { FcCheckmark} from "react-icons/fc"
import {MdClose} from "react-icons/md"
import "./style.css"

function PricingTile({ level, money}) {
    const [shadow,setShadow]=useState(false);
    return (
        <div className={`pricingTileContainer ${shadow ? "pricingTileContainerShadow" :""}`} onMouseOver={()=>{setShadow(true)}} onMouseOut={()=>{setShadow(false)}} >
            <div className={`pricingTileBox1 ${level==="Standard" && shadow ? "pricingTileBox1Shadow2" : ""} ${shadow ? "pricingTileBox1Shadow1" :""} ${level==="Standard" ? "pricingTileStandard":""} `} >
                <div className= {`pricingTileLevel ${level==="Standard" ? "pricingTileStandard" : ""}`}>{level}</div>
                <div className= {`pricingTileLine ${level==="Standard" ? "pricingTileStandardLine":""}`}/>
                <div className="pricingTileMoney">${money}<span className= {`pricingTileMo ${level==="Standard" ? "pricingTileStandardTitle":""}`}>/mo</span></div>
                <div className= {`pricingTileTitle ${level==="Standard" ? "pricingTileStandardTitle":""}`}>{level} Pest Control</div>
            </div>
            
            <div className="pricingTileBox2">
                <div className="pricingTileList"><FcCheckmark/>Household Pests Control</div>
                <div className="pricingTileList"><FcCheckmark/>Rodent Control</div>
                <div className="pricingTileList"><FcCheckmark/>Re-Service at No-Charge</div>
                <div className="pricingTileList">{level==="Basic" ? <MdClose className='pricingTileClose'/> : <FcCheckmark/>}Termite Control</div>
                <div className="pricingTileList">{level==="Basic" || level==="Standard" ? <MdClose className='pricingTileClose'/> : <FcCheckmark/>}Mosquito Reduction</div>
            </div>

            <div className= {`pricingTileButton ${level==="Standard" ? "pricingTileButtonShadow":""}`}>Get Started</div>

        </div>
    )
}

export default PricingTile
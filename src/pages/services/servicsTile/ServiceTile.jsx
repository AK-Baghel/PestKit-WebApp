import React from 'react'
import { FaSpider } from "react-icons/fa"
import "./style.css"


function ServiceTile({data}) {
  return (
    <div className="serviceTileContainer">
        <div className="serviceTileBox">
            <div className="serviceTileLogo "><FaSpider className='serviceTileSpider serviceLogoRotate'/></div>
            <div className="serviceTileTitle">{data}</div>
            <div className="serviceTileDesc">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</div>
            <div className="seviceTileButton">LEARN MORE</div>
        </div>
    </div>
  )
}

export default ServiceTile
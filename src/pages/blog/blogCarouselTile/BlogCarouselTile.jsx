import React from 'react'
import {FaUserAlt} from "react-icons/fa"
import {FaCalendarAlt} from "react-icons/fa"
import {FaComments} from "react-icons/fa"
import "./style.css"

function BlogCarouselTile({img}) {
  return (
    <div className="bCTileContainer">
        <img className='bCTileImg' src={img} alt="" />
        <div className="bCTileInfos">
            <div className="bCTileInfo"><FaUserAlt className='bCTileLogo1'/>By Admin</div>
            <div className="bCTileInfo"><FaCalendarAlt className='bCTileLogo1'/>10 Feb, 2023</div>
        </div>
        <div className="bCTileTitle">How To Build A Cleaning Plan</div>
        <div className="bCTileDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quos.</div>
        <div className="bCTileFooter">
            <div className="bCTileFooter1">LEARN MORE</div>
            <div className="bCTileFooter1"><FaComments className='bCTileLogo2'/>23 Comments</div>
        </div>
    </div>
  )
}

export default BlogCarouselTile
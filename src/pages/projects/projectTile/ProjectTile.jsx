import React, { useState } from 'react'
import "./style.css"


function ProjectTile({ data, banner }) {
    const [show, setShow] = useState(false)

    return (
        <div className="projectTileContainer " onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}}>
            <div className="projectTileBlack"onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}}></div>
            <div className="projectTileYellow"onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}}></div>
            <img src={data} alt="" className='projectTileImg'  onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}}/>
            {
                show &&(
                    <div className="projectTileImgBanner">{banner}</div>
                )
            }
        </div>
    )
}

export default ProjectTile
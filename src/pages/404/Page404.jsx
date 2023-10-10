import React from 'react'
import {BiError} from "react-icons/bi"
import "./style.css"

function Page404() {
  return (
    <div className="page404Container">
      <div className="page404Logo"><BiError className='page404Error'/></div>
      <div className="page404Number">404</div>
      <div className="page404Title">Page Not Found</div>
      <div className="page404Desc">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</div>
      <div className="page404Button">GO HOME</div>
    </div>
  )
}

export default Page404
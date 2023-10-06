import React from 'react'
import Carousel from './carousel/Carousel'
import MiniServices from './miniServices/miniServices'
import AboutSecton1 from '../about/aboutSection1/AboutSecton1'
import Services from '../services/Services'
import "./style.scss"

function Home() {
  return (
    <>
      <Carousel />
      <MiniServices />
      <AboutSecton1 />
      <Services/>
    </>

  )
}

export default Home
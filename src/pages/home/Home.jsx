import React from 'react'
import Carousel from './carousel/Carousel'
import MiniServices from './miniServices/miniServices'
import AboutSecton1 from '../about/aboutSection1/AboutSecton1'
import Footer from "../../components/footer/Footer"
import "./style.scss"

function Home() {
  return (
    <>
      <Carousel />
      <MiniServices />
      <AboutSecton1 />
      <Footer/>

    </>

  )
}

export default Home
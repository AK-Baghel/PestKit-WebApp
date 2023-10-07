import React from 'react'
import Carousel from './carousel/Carousel'
import MiniServices from './miniServices/miniServices'
import AboutSecton1 from '../about/aboutSection1/AboutSecton1'
import Projects from '../projects/Projects'
import Services from '../services/Services'
import Blog from '../blog/Blog'
import AboutSection2 from '../about/aboutSection2/AboutSection2'
import "./style.scss"

function Home() {
  return (
    <>
      <Carousel />
      <MiniServices />
      <AboutSecton1 />
      <Services/>
      <Projects/>
      <Blog/>
      <AboutSection2/>
    </>

  )
}

export default Home
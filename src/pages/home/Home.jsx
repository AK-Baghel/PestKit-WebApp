import React, { useContext,  } from 'react'
import Carousel from './carousel/Carousel'
import MiniServices from './miniServices/miniServices'
import AboutSecton1 from '../about/aboutSection1/AboutSecton1'
import Projects from '../projects/Projects'
import Services from '../services/Services'
import Blog from '../blog/Blog'
import AboutSection2 from '../about/aboutSection2/AboutSection2'
import Pricing from '../pricing/Pricing'
import Team from '../team/Team'
import Testimonial from '../testimonial/Testimonial'
import "./style.scss"
import { Context } from '../../context/AppContext'
function Home() {

  const { data,loginValid } = useContext(Context)
  
  

  return (
    <>
      <Carousel />
      <MiniServices />
      <AboutSecton1 />
      {
        data &&
        <>
          <Services />
          <Projects />
          <Blog />
        </>
      }

      <AboutSection2 />

      {
        data &&
        <>
          <Pricing />
          <Team />
          <Testimonial />
        </>
      }

    </>

  )
}

export default Home
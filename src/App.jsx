import Home from './pages/home/Home'
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import ServiceAndTestimonial from './pages/services/ServiceAndTestimonial'
import Pricing from "./pages/pricing/Pricing"
import Blog from "./pages/blog/Blog"
import Team from "./pages/team/Team"
import Testimonial from "./pages/testimonial/Testimonial"
import Page404 from "./pages/404/Page404"
import Contact from "./pages/contact/Contact"
import Footer from "./components/footer/Footer"


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import {AiOutlineArrowUp} from "react-icons/ai"
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<ServiceAndTestimonial/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/page404" element={<Page404/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
        <Footer/>
        {
          <AiOutlineArrowUp className='homeButton' onClick={()=>{window.scroll({top:0 , left:0 , behavior:"smooth"})}}/>

        }

    </>
  )
}

export default App

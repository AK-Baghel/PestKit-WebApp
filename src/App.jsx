import { useState } from 'react'

import Home from './pages/home/Home'
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Projects from "./pages/projects/Projects"
import Pricing from "./pages/pricing/Pricing"
import Blog from "./pages/blog/Blog"
import Team from "./pages/team/Team"
import Testimonial from "./pages/testimonial/Testimonial"
import Page404 from "./pages/404/Page404"
import Contact from "./pages/contact/Contact"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/page404" element={<Page404/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default App

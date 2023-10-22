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
import PrivateComponent from './components/privateComponent/PrivateComponent'
import SignUp from './pages/signUp/signUp'
import Login from './pages/login/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { AiOutlineArrowUp } from "react-icons/ai"
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route element={<PrivateComponent />}>
          <Route exact path="/services" element={<ServiceAndTestimonial />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/testimonial" element={<Testimonial />} />
        </Route>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="*" element={<Page404 />} />
        <Route exact path="/page404" element={<Page404 />} /> */}

      </Routes>
      <Footer />
      {
        <AiOutlineArrowUp className='homeButton' onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }) }} />

      }

    </>
  )
}

export default App

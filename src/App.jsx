import Hero from "./compenent/hero/Hero"
import Navbar from "./compenent/navbar/Navbar"
import React from "react"
import Programs from "./compenent/programs/Programs"
import Title from './compenent/title/title'
import About from "./compenent/about/About"
import Campus from "./compenent/campus/Campus"
import Testimonials from "./compenent/testumonials/Testimonials"
import Contact from "./compenent/contact/Contact"
import Footer from "./compenent/footer/Footer"
function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App

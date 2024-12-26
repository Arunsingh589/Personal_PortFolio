import React, { useEffect } from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Bio from './Components/Bio'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Education from './Components/Education'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])


  return (
    <div className='relative h-full w-full overflow-x-hidden overflow-y-auto antialiased'>
      <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
        <Hero />
        <Navbar />
        <Project />
        <Bio />
        <Skills />
        <Experience />
        <Education />
        <ContactForm />
        <Footer />
      </div>


    </div>
  )
}


export default App

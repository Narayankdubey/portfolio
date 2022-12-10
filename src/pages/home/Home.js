import React from 'react'

import { About, Navbar, Info, Experience, Project, Contact, Footer } from './component'

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <div style={{ height: "100%" }}>
        <Info />
        <About />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
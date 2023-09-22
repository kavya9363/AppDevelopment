import React from 'react'
import HomeElement from './HomeElement'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <HomeElement/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

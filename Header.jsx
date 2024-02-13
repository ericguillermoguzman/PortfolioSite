import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <h5>Hello, I'm</h5>
          <h1>Eric Guillermo Guzman</h1>
          <div className="h5 text-light">Coding Guy</div>
          
          <CTA/>

          <HeaderSocials/>


          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
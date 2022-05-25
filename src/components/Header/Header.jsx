import React from 'react'
import Actions from './Actions'
import './Header.css'
import myImage from '../../assets/images/me.png';
import HeaderSocials from './HeaderSocials';
function Header() {
  return (
    <header id='header'>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Govind Kumar Mishra</h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <Actions />
        <HeaderSocials />

        <div className="me">
          <img src={myImage} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
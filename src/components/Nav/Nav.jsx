import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineContacts } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { BsGear } from 'react-icons/bs'
import { MdOutlineDesignServices } from 'react-icons/md'

function Nav() {
  const [activeSection, setActiveSection] = useState("#");
  return (
    <nav id='nav'>
      <a href="#" className={activeSection === '#' ? 'active' : ''} onClick={() => { setActiveSection("#") }}><AiOutlineHome /></a>
      <a href="#about" className={activeSection === '#about' ? 'active' : ''} onClick={() => { setActiveSection("#about") }}><FiUser /></a>
      <a href="#experience" className={activeSection === '#experience' ? 'active' : ''} onClick={() => { setActiveSection("#experience") }}><BsGear /></a>
      <a href="#services" className={activeSection === '#services' ? 'active' : ''} onClick={() => { setActiveSection("#services") }}><MdOutlineDesignServices /></a>
      <a href="#contact" className={activeSection === '#contact' ? 'active' : ''} onClick={() => { setActiveSection("#contact") }}><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav
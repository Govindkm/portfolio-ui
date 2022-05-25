import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
function Footer() {
  return (
    <footer id='footer' className='container_footer'>
      <div className="copyrights">
        <h4>Copyrights &#169;2022 All Rights Reserved</h4>
      </div>
      <div className="links">
        <div className='footer_socials'>
          <a href="https://www.linkedin.com/in/govind-kumar-950a93160/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Govindkm" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
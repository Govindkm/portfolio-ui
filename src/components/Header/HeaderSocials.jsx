import React from 'react'
import './HeaderSocials.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/govind-kumar-950a93160/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Govindkm" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
    )
}

export default HeaderSocials
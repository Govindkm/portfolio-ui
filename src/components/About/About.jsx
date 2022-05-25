import React from 'react';
import './About.css';
import ME from '../../assets/images/me-about.jpg'
import { BsHourglassSplit, BsBrush } from 'react-icons/bs'
import { BiGitMerge } from 'react-icons/bi'

const About = () => {
  const joinDate = new Date(2020, 11, 2);
  const today = new Date();
  const difference = today.getFullYear() - joinDate.getFullYear();
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container container_about">
        <div className="container_image">
          <img src={ME} alt="me" />
        </div>

        <div className="container_content">
          <div className="about_cards">
            <article className="about_card">
              <BsHourglassSplit className='about_icon' />
              <h5>Experience</h5>
              <small>{difference - 1}+ years of working</small>
            </article>

            <article className="about_card">
              <BiGitMerge className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>

            <article className="about_card">
              <BsBrush className='about_icon' />
              <h5>Skills</h5>
              <small>React, Angular, NodeJS</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nobis! Nulla, aspernatur iure. Fugit asperiores nobis tempora voluptatum, ex explicabo eos possimus culpa magni, nulla ipsam facilis inventore nihil voluptatem est obcaecati quae in ipsa voluptatibus, autem tempore officiis? Maxime, dolorum! Optio, architecto. Doloremque, illo?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
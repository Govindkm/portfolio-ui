import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container container_experience">
        <div className="container_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small>Beginner</small></div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Javascript</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>React</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Angular</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>


        <div className="container_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>NodeJS</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>DotNET</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>SQL</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>Express JS</h4>
                <small>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
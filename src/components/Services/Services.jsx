import React from 'react'
import './Services.css'
import { FaRegCheckCircle } from 'react-icons/fa'
function Services() {
  return (
    <section id='services'>
      <h5>What Services I can provide</h5>
      <h2>Services</h2>
      <div className="container container_services">
        <article className="service_article">
          <div className="article_heading">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services_list">
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service_article">
          <div className="article_heading">
            <h3>Web Development</h3>
          </div>
          <ul className="services_list">
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service_article">
          <div className="article_heading">
            <h3>Content Creation</h3>
          </div>
          <ul className="services_list">
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <FaRegCheckCircle className='services_list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/images/portfolio1.jpg'
import IMG2 from '../../assets/images/portfolio2.jpg'
import IMG3 from '../../assets/images/portfolio3.jpg'
import IMG4 from '../../assets/images/portfolio4.jpg'
import IMG5 from '../../assets/images/portfolio5.png'
import IMG6 from '../../assets/images/portfolio6.jpg'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container container_portfolio">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>INotebook</h3>
          <p>A Notes storing application using MERN Stack</p>
          <a href="https://github.com/Govindkm/INoteBook" className='btn'>GitHub</a>
          <a href="https://inotebook-reactapp.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a>
        </article><article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>Text Utils</h3>
          <p>A text utility application using react.</p>
          <a href="https://github.com/Govindkm/textUtils/tree/master" className='btn'>GitHub</a>
          <a href="https://govindkm.github.io/textUtils/" className='btn btn-primary' target="_blank">Live Demo</a>
        </article><article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="portfolio1" />
          </div>
          <h3>Lets Chat</h3>
          <p>A chat application using socketio and Vanilla JS</p>
          <a href="https://github.com/Govindkm/letschat-client" className='btn'>GitHub</a>
          <a href="https://letschat-client.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
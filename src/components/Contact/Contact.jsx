import React, { useRef } from 'react'
import './Contact.css'
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from '@emailjs/browser';
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pedlivu', 'template_8vcurri', form.current, 'D7O_p2WUnC3TXUgUA');
    form.current.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container container_contact">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_icon' />
            <h4>Email</h4>
            <h5>govindkumar_16652@aitpune.edu.in</h5>
            <a href="mailto:govindkumar_16652@aitpune.edu.in">Send a message</a>
          </article>

          <article className="contact_option">
            <AiOutlineWhatsApp className='contact_icon' />
            <h4>Whatsapp</h4>
            <h5>+91-8698667843</h5>
            <a href="https://api.whatsapp.com/send?phone=918698667843">Send a message</a>
          </article>

          <article className="contact_option">
            <AiOutlineLinkedin className='contact_icon' />
            <h4>Linkedin</h4>
            <h5>https://www.linkedin.com/</h5>
            <a href="https://www.linkedin.com/in/govind-kumar-950a93160/">Connect</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input type="text" name="name" id="name" placeholder='Your Full Name' required />
          <input type="email" name="email" id="email" placeholder='Your Email' required />
          <textarea name="message" id="message" placeholder='Your Message' required cols="30" rows="10"></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

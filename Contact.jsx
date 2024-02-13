
import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j49yq6n', 'template_jg0z5fn', form.current, 'SLpVpGi_1OtgElR5h')
    
    e.target.reset();
  };

  return (
    <section id="contact" className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name ="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='I want to hire you!'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
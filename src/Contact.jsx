import React, { useRef } from 'react';
import "./css/Contact.css"
import emailjs from '@emailjs/browser';
import Clock from './Clock';
import wave from './assets/cool-background.svg'


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_304cf08', 'template_gtys06f', form.current, 'rRZKcTOnJsnUHlJQp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <>
      <header className='title'>
        <h1 id="contact" smooth className="contact_title">Contact</h1>
      </header>
      <div className='container2'>
        <div className="contactForm">
          <div className='title2'>want to connect?</div>
          <form ref={form} onSubmit={sendEmail}>
            <div className='inputGroup'>
              <input type="text" name="user_name" id='name' required />
              <label>Name</label>
            </div>

            <div install emailjsiv className='inputGroup'>
              <input type="email" name="user_email" id='email' required />
              <label>Email</label>
            </div>

            <div className='inputGroup'>
              <textarea name="message" rows={8} />
              <label for='message'>your Message</label>
            </div>
            <div className='submit'>
              <button type="submit" value="Send">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className='info3'>
          <div className='details'>
            <div className='headers'>contact details</div>
            <a href='mailto:mathewsteenwinkel@gmail.com'>
              <div className='body1'>mathewsteenwinkel@gmail.com</div>
            </a>
          </div>
          <div className='details'>
            <div className='headers'>where to find me online</div>
            <a href='https://www.linkedin.com/in/mathew-steenwinkel/' target='blank'>
              <div className='body1'>linkedin</div>
            </a>
            <a href='https://github.com/mathewsteenwinkel' target='blank'>
              <div className='body1'>github</div>
            </a>
          </div>
          <div className='details'>
            <div className='headers'>location</div>
            <div className='location'>Calgary, AB, Canada</div>
            <Clock />
          </div>
        </div>
      </div>
      <div className='background_img'>
        <img src={wave} alt='wave' className='wave' />
      </div>
    </>
  );
}


import React from 'react'
import './css/About.css'
import me from './assets/IMG_0385.jpeg'
import MacEwan from './assets/MacEwan.png'
import LighthouseLabs from './assets/lighthouselabs 1.png'
import RandomTextAnimation from './Hacker'



const About = () => {
  return (
    <>
    <a id='about_me'>
      <div className='about_me' >
        <div className='title'>
          <RandomTextAnimation />
        </div>
        <div className='info'>
          <img src={me} className='photo' />
          <div>
            <p className='body_text'>
              I am a front-end web developer, based in Calgary, AB.
              I am passionate about developing visually striking websites and  creating an impact.<br /><br />
              when i'm not coding, I enjoy rock climbing, reading and playing video games.<br /><br />
              I have a degree in business management and a web development diploma from light house labs.
            </p>
            <div className='icons'>
            <a href="https://www.macewan.ca/home/" target="_blank" alt-text="Macewan">
            <img src={MacEwan} className='icon' />
            </a>
            <a href="https://www.lighthouselabs.ca/" target="_blank" alt-text="lighthouse labs">
            <img src={LighthouseLabs} className='icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
    </a >
    </>
  )
}

export default About

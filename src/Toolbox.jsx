import './css/Toolbox.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tabs from './Tabs';

const Toolbox = () => {
  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Select all the <p> elements
    const paragraphs = document.querySelectorAll('p');

    // Set up the GSAP animation for each <p> element
    paragraphs.forEach((paragraph) => {
      gsap.from(paragraph, {
        opacity: 0,
        y: 50,
        duration: 4,
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none none',
          onComplete: () => {
            paragraph.classList.add('animate-slide-in');
          },
        },
      });
    });
  }, []);


  return (
    <div className='toolBox'>
      <h1 className='title' id='technology'>my digital tool box</h1>
      <div className='list'>
        <h2 className='end'>
          frontend
        </h2>
        <div className='language1' >
          <p className='item'>javascript</p>
          <p className='item'>html</p>
          <p className='item'>css</p>
          <p className='item'>react js</p>
          <p className='item'>sass</p>
          <p className='item'>wordpress</p>
          <p className='item'>gsap</p>
          <p className='item'>Vue</p>
        </div>
      </div>
      <div className='list'>
        <h2 className='end'>
          backend
        </h2>
        <div className='language2' >
          <p className='item'>express</p>
          <p className='item'>ruby on rails</p>
          <p className='item'>node js</p>
          <p className='item'>psql</p>
          <p className='item'>git</p>
        </div>
      </div>

      <div className='list'>
        <h2 className='end'>
          Extras
        </h2>
        <div className='language2' >
          <p className='item'>Figma</p>
          <p className='item'> Scrum</p>
          <p className='item'>Notion</p>
          <p className='item'>ClickUp</p>
          <p className='item'>Excel</p>
        </div>
      </div>

    </div>
  )
}

export default Toolbox

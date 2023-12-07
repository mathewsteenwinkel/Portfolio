import './css/Toolbox.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
          <p>javascript</p>
          <p>html</p>
          <p>css</p>
          <p>react js</p>
          <p>sass</p>
        </div>
      </div>
      <div className='list'>
        <h2 className='end'>
          backend
        </h2>
        <div className='language2' >
          <p>express</p>
          <p>ruby on rails</p>
          <p>node js</p>
          <p>psql</p>
          <p>git</p>
        </div>
      </div>

    </div>
  )
}

export default Toolbox

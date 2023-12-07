import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Ellipse from './assets/Ellipse 1.png'
import Ellipse2 from './assets/Ellipse 2.png'
import About from './About';
import Toolbox from './Toolbox';
import Projects from './Projects';

import './css/App.css'
import Contact from './Contact';


const App = () => {
  return (

    <div className='middle'>
      <img src={Ellipse} alt='Ellipse' className='ellipse1' />
      <div className='body'>
        <Navbar className='body' />
        <div className='hero_section'>
          <Hero />
        </div>
        <About/>
      <Toolbox />
      <Projects />
      <Contact />
      </div>
      <img src={Ellipse2} alt='Ellipse2' className='ellipse2' />
    </div>
  )
}

export default App

import React from 'react'
import logo from '../src/assets/steenwinkel.png';
import { Link } from 'react-scroll';


import './css/Navbar.css'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='nav__bar'>

        <Link className='nav' to="about_me" spy={true} smooth={true} duration={0}> about</Link>
        <Link className='nav' to="projects" spy={true} smooth={true} duration={0}> projects</Link>
        <Link className='nav' to="technology" spy={true} smooth={true} duration={0}> Technology</Link>
      
      </div>
  
    </div>
  )
}

export default Navbar

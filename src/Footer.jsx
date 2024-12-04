import React from 'react'
import { Link } from 'react-scroll';
import "./css/footer.css"

const Footer = () => {
  return (
    <>
    <div className='footer_container'>
    <div className='footer'>
      <div className='year_name'>
       © 2024 Mathew Steenwinkel
      </div>
      <div>
      <Link className='top' to="nav" spy={true} smooth={true} duration={0}> back to top </Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer

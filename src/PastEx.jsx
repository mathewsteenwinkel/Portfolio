import React from 'react'
import "./css/PastEx.css"
import BuckElectric from "./assets/Logo-Contrast-1.png"
import Arkto from './assets/Arkto-Campers-Logo@300-1536x322.png'

function PastEx() {
  return (
    <div className='PastEx'>
      <h2 className='PastTitle'>
        Websites I've Built
      </h2>
      <div className='brands'>
      <div>
        <a href='https://buckelectric.ca/' target='blank'>
        <img src={BuckElectric} className='brand'/>
        </a>
      </div>
      <div>
        <a href='https://arktocampers.com/' target='blank'>
        <img src={Arkto} className='brand2'/>
        </a>
      </div>
      </div>
    </div>
  )
}

export default PastEx

import React from 'react'
import './css/projects.css'
import petals from './assets/GardenPage.png'
import interview from './assets/235047457-8fa02a2b-0d32-4564-8506-700be825fd53.png'

const Projects = () => {
  return (
    <div className='container'>
      <div className='projects'>
        <h1>Projects</h1>
        <div className='petals'>
          <img src={petals} className='img' alt-text="petals"/>
          <a href='https://github.com/mathewsteenwinkel/petal-profits' target='blank'>
          <div className='text2'>
            <div className='titles'>
              <a className='proj_name'>petal profits</a>
              <div className='proj'>final project</div>
            </div>
            <div className='info2'>
              <div className='year'>2023</div>
              <div className='stack'>PERN</div>
              <div className='stack2'>Full Stack</div>
            </div>
          </div>
          </a>
        </div>
        
        <div className='petals'>
          <a href='https://github.com/mathewsteenwinkel/Scheduler' target='blank'>
          <div className='text3'>
            <div className='titles'>
              <a className='proj_name'>scheduler</a>
              <div className='proj'>react project</div>
            </div>
            <div className='info2'>
              <div className='year'>2023</div>
              <div className='stack'>react</div>
              <div className='stack2'>front end</div>
            </div>
          </div>
          </a>
          <img src= {interview} className='img' />
        </div>
      </div>
    </div >
  )
}

export default Projects

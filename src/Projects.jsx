import React from 'react'
import './css/projects.css'
import petals from './assets/GardenPage.png'
import interview from './assets/235047457-8fa02a2b-0d32-4564-8506-700be825fd53.png'
import VUEtodo from './assets/VUE TODO app preview.png'


const Projects = () => {
  return (



    <div className='container'>
      <div className='projects'>
        <h1 className='title_proj'>Projects</h1>
        <div className='container'>
          <div className='container'>
            <a href='https://github.com/mathewsteenwinkel/Vue-todo/tree/main/Todo' target='blank' className='contents'>
              <div className='text3'>
                <div className='titles'>
                  <a className='proj_name'>VUE To Do</a>
                  <div className='proj'>Vue Project</div>
                </div>
                <div className='info2'>
                  <div className='year'>2024</div>
                  <div className='stack'>VUE</div>
                  <div className='stack2'>front end</div>
                </div>
              </div>
              <img src={VUEtodo} className='img_preview' />
            </a>
          </div>
        </div>


        <div className='container'>
          <a href='https://github.com/mathewsteenwinkel/petal-profits' target='blank' className='contents'>
            <img src={petals} className='img_preview' alt-text="petals" />
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

        <div className='container'>
          <a href='https://github.com/mathewsteenwinkel/Scheduler' target='blank' className='contents'>
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
            <img src={interview} className='img_preview' />
          </a>
        </div>
      </div>
    </div >
  )
}

export default Projects

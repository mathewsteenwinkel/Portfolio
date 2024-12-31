import React from 'react'
import { useState } from 'react'
import './css/Portfolio.css'
import TodoModal from './TodoModal'

function Portfolio() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <div className='projects-body'>
        <h1 className='title_proj'>Projects</h1>
        <div className='projects'>
          <div className='containter'
          onClick={()=>setOpenModal(true)}
          >
            <div className='proj_container'>
              <div className='proj_name'>VUE to do</div>
              <div className='proj'>Vue project</div>
            </div>
            <div className='info2'>
              <div className='year'>Y: 2024</div>
              <div className='stack'>S: Vue</div>
              <div className='stack2'>S: Front end</div>
            </div>
            {openModal && <TodoModal  closemodal={setOpenModal}/> }
          </div>
          <div />

        </div>
      </div>
    </div>

  )
}

export default Portfolio

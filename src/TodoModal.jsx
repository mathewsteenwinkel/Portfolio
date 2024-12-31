import React from 'react'

import VUE from './assets/VUE TODO app preview.png'

function TodoModal({closemodal}) {
  return (
    <div className='modal-background'>
      <div className='modal'>
        <button className='close-button'
        onClick={()=>closemodal(false)}>
        x
        </button>
      </div>
      <img src={VUE} className='image'/> 
      <div className='info'>
      <h1 className='proj-title'>VUE to do</h1>
      <p className='description'> A small Vue to do list app to learn the basics of VUE and how it differs from other libraries. CSS was minimal in this project as time was more spent learning the library and it's differences rather then making it look good. 
      </p>
      <h4>Outcome:</h4>
      <p>
        begin learning the basics of VUE
      </p>
      </div>
      <div className='details'>
        <p className=''> year: 2024</p>
        <p> Stack: VUE </p>
        <p>  </p>
      </div>
    </div>
  )
}

export default TodoModal

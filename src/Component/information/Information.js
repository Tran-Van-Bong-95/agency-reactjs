import React from 'react'
import './information.css'
import imageRepresent from '../../image-for-exercise/others/750x450x1.jpg'
function Information() {
  return (
    <section id='information' className='d-grid'>
      <div className='image w-100'>
        <img src={imageRepresent} alt='' className='w-100 h-100' />
      </div>
      <div className='content'>
        <div className='title'>
          <h1>BUSINESS ORGANIZATION</h1>
          <div className='underline'></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
          lacinia ultrices. commodo tristique. Duis lacus urna, condimentum a
          vehicula a, hendrerit ac nisi lorem ipsum dolor sit amet vulputate
          lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
          lacinia ultrices commodo tristique
        </p>

        <button>
          Read More{' '}
          <i className='fa fa-arrow-circle-right' aria-hidden='true'></i>
        </button>
      </div>
    </section>
  )
}

export default Information

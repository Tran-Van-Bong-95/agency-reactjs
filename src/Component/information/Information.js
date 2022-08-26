import React from 'react'
import './information.css'
function Information() {
  return (
    <section id='information'>
      <div className='image'>
        <img
          src='http://fourdinos.com/demo/lpf/agency/static/images/750x450x1.jpg'
          alt=''
        />
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

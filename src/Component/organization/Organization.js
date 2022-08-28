import React from 'react'
import './organization.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
function Organization() {
  return (
    <div className='container-fluid' id='organization'>
      <section>
        <div className='content'>
          <h5>SCOPE IMPORTANCE OF BUSINESS</h5>
          <div className='underline_organization'></div>
          <p>
            Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
            lacinia ultrices. commodo tristique. Duis lacus urna, condimentum a
            vehicula a, hendrerit ac nisi lorem ipsum dolor sit amet vulputate
            lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
            lacinia ultrices commodo tristique
          </p>

          <button className='contain-arrow'>
            Read More <BsFillArrowRightCircleFill className='arrow-icon' />
          </button>
        </div>
        <div className='image'>
          <img
            src='http://fourdinos.com/demo/lpf/agency/static/images/750x450x2.jpg'
            alt=''
          />
        </div>
      </section>
    </div>
  )
}

export default Organization

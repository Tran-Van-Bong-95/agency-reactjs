import React from 'react'
import './skillset.css'

function Skillset() {
  return (
    <section id='skill-set'>
      <div className='title-services'>
        <h1>OUR SKILLSET</h1>
        <div className='underline-services'>
          <span style={{ width: '65px' }}></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span style={{ width: '65px' }}></span>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='content'>
          <article>
            <p>
              <span>DEVELOPMENT</span>
              <span>90%</span>
            </p>
            <p>
              <span style={{ width: '90%' }}></span>
            </p>
            <p>
              <span>DESIGN</span>
              <span>80%</span>
            </p>
            <p>
              <span style={{ width: '80%' }}></span>
            </p>
            <p>
              <span>SUPPORT</span>
              <span>100%</span>
            </p>
            <p
              style={{ backgroundColor: 'hsl(21, 57%, 50%)', width: '100%' }}
            ></p>
            <p>
              <span>MANAGEMENT</span>
              <span>85%</span>
            </p>
            <p>
              <span style={{ width: '85%' }}></span>
            </p>
          </article>
          <article>
            <img
              src='http://fourdinos.com/demo/lpf/agency/static/images/760x520x1.jpg'
              alt=''
            />
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skillset

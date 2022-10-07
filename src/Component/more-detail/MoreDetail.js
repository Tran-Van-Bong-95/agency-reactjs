import { findAllByDisplayValue } from '@testing-library/react'
import React from 'react'
import './moredetail.css'
import doing from '../../image-for-exercise/others/760x565x1.jpg'
import icon1 from '../../image-for-exercise/icon-intro/32x32x1.png'
import icon2 from '../../image-for-exercise/icon-intro/32x32x2.png'
import icon3 from '../../image-for-exercise/icon-intro/32x32x3.png'
function MoreDetail() {
  return (
    <div className='container-fluid'>
      <section id='more-detail' className='d-lg-grid d-block'>
        <div id='doing' className='d-flex'>
          <div id='introduce'>
            <div className='title'>
              <div id='underline_intro'></div>
              <div id='content'>
                <p>VEHICULA HENDRERIT</p>
                <p>WHAT WE ARE DOING</p>
              </div>
            </div>
            <div className='describe d-flex'>
              <p>
                Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
                lacinia ultrices. Duis lacus urna, condimentum a, hendrerit ac
                nisi lorem ipsum dolor sit amet vulputate condimentum a vehicula
              </p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
                lacinia ultrices. commodo tristique. Duis lacus urna,
                condimentum a vehicula
              </p>
            </div>
          </div>

          <div className='icon d-flex w-100'>
            <span>
              <img src={icon1} alt='' />
              BRANDING
            </span>
            <span>
              <img src={icon2} alt='' />
              MARKETING
            </span>
            <span>
              <img src={icon3} alt='' />
              PROMOTION
            </span>
          </div>
        </div>
        <div id='image' className='w-100'>
          <img src={doing} alt='' className='w-100 h-100' />
        </div>
      </section>
    </div>
  )
}

export default MoreDetail

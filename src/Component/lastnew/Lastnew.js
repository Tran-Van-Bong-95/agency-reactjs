import React from 'react'
import './lastnew.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import lastnew1 from '../../image-for-exercise/others/760x520x2.jpg'
import lastnew2 from '../../image-for-exercise/others/760x520x3.jpg'
import lastnew3 from '../../image-for-exercise/others/760x520x4.jpg'

function Lastnew() {
  return (
    <div className='container-fluid' id='lastnew'>
      <section>
        <div className='title-services'>
          <h1>OUR LASTED NEWS</h1>
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

        <div className='content w-100 d-flex'>
          <article>
            <div className='image'>
              <img src={lastnew1} alt='' />
            </div>
            <div className='blog'>
              <div className='time'>25, MAY 2018</div>
              <p className='title'>LOREM IPSUM DOLOR AMET ULTRICES COMMODO</p>
              <p>
                Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
                lacinia ultrices commodo tristique.
              </p>
              <button className='contain-arrow'>
                Read More <BsFillArrowRightCircleFill className='arrow-icon' />
              </button>
            </div>
          </article>
          <article>
            <div className='image w-100'>
              <img src={lastnew2} alt='' className='w-100 h-100' />
            </div>
            <div className='blog'>
              <div className='time'>25, APR 2018</div>
              <p className='title'>LOREM IPSUM DOLOR AMET ULTRICES COMMODO</p>
              <p>
                Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
                lacinia ultrices commodo tristique.
              </p>
              <button className='contain-arrow'>
                Read More <BsFillArrowRightCircleFill className='arrow-icon' />
              </button>
            </div>
          </article>
          <article>
            <div className='image'>
              <img src={lastnew3} alt='' />
            </div>
            <div className='blog'>
              <div className='time'>22, MAR 2018</div>
              <p className='title'>LOREM IPSUM DOLOR AMET ULTRICES COMMODO</p>
              <p>
                Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel magna
                lacinia ultrices commodo tristique.
              </p>
              <button className='contain-arrow'>
                Read More
                <BsFillArrowRightCircleFill className='arrow-icon' />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Lastnew

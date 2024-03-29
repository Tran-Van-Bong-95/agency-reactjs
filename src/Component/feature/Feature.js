import React from 'react'
import './feature.css'
import mainImage from '../../image-for-exercise/feature/560x560x1.png'
import feature1 from '../../image-for-exercise/feature/90x90x1.png'
import feature2 from '../../image-for-exercise/feature/90x90x2.png'
import feature3 from '../../image-for-exercise/feature/90x90x3.png'
import feature4 from '../../image-for-exercise/feature/90x90x4.png'

function Feature() {
  return (
    <div className='container-fluid' id='feature'>
      <section>
        <div className='title-services'>
          <h1>OUR FEATURE</h1>
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
        <div className='main-content d-flex'>
          <div className='image'>
            <img src={mainImage} alt='' className='w-100' />
          </div>
          <div>
            <article>
              <div className='content'>
                <div className='image'>
                  <img src={feature1} alt='' />
                </div>
                <div className='describe'>
                  <div className='title'>
                    <h5>BUSINESS ANALYSIS</h5>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel
                    magna lacinia ultrices
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className='content'>
                <div className='image'>
                  <img src={feature2} alt='' />
                </div>
                <div className='describe'>
                  <div className='title'>
                    <h5>FINANCIAL ACTIVITY</h5>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel
                    magna lacinia ultrices
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className='content'>
                <div className='image'>
                  <img src={feature3} alt='' />
                </div>
                <div className='describe'>
                  <div className='title'>
                    <h5>DYNAMIC IN NATURE</h5>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel
                    magna lacinia ultrices
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className='content'>
                <div className='image'>
                  <img src={feature4} alt='' />
                </div>
                <div className='describe'>
                  <div className='title'>
                    <h5>24/7 SUPPORT</h5>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet. Vestibulum imperdiet nibh vel
                    magna lacinia ultrices
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feature

import React from 'react'
import './feature.css'
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
        <div>
          <div className='image'>
            <img
              src='http://fourdinos.com/demo/lpf/agency/static/images/560x560x1.png'
              alt=''
            />
          </div>
          <div>
            <article>
              <div className='content'>
                <div className='image'>
                  <img
                    src='http://fourdinos.com/demo/lpf/agency/static/images/90x90x1.png'
                    alt=''
                  />
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
                  <img
                    src='http://fourdinos.com/demo/lpf/agency/static/images/90x90x2.png'
                    alt=''
                  />
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
                  <img
                    src='http://fourdinos.com/demo/lpf/agency/static/images/90x90x3.png'
                    alt=''
                  />
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
                  <img
                    src='http://fourdinos.com/demo/lpf/agency/static/images/90x90x4.png'
                    alt=''
                  />
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

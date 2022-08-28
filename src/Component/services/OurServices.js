import React from 'react'
import './services.css'
function OurServices() {
  return (
    <div className='container-fluid' id='services'>
      <section>
        <div className='title-services'>
          <h1>OUR SERVICES</h1>
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

        <section id='service-content' className='d-flex w-100'>
          <article>
            <div className='title'>
              <h5>SECURITY SERVICES</h5>
            </div>
            <div className='content'>
              <div className='image'>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/80x80x1.png'
                  alt=''
                />
              </div>
              <div className='describe'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  phasellus
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className='title'>
              <h5>ONLINE MARKETING</h5>
            </div>
            <div className='content'>
              <div className='image'>
                {' '}
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/80x80x2.png'
                  alt=''
                />
              </div>
              <div className='describe'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  phasellus
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className='title'>
              <h5>MERCHANT PROCESSING</h5>
            </div>
            <div className='content'>
              <div className='image'>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/80x80x3.png'
                  alt=''
                />
              </div>
              <div className='describe'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  phasellus
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className='title'>
              <h5>BUSINESS STRATEGY</h5>
            </div>
            <div className='content'>
              <div className='image'>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/80x80x4.png'
                  alt=''
                />
              </div>
              <div className='describe'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  phasellus
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className='title'>
              <h5>CUSTOM SERVICES</h5>
            </div>
            <div className='content'>
              <div className='image'>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/80x80x5.png'
                  alt=''
                />
              </div>
              <div className='describe'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  phasellus
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className='title'>
              <h5>BUSINESS SOLUTIONS</h5>
            </div>
            <div className='content'>
              <div className='image'>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/80x80x6.png'
                  alt=''
                />
              </div>
              <div className='describe'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  phasellus
                </p>
              </div>
            </div>
          </article>
        </section>
      </section>
    </div>
  )
}

export default OurServices

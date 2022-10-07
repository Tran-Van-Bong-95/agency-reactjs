import React from 'react'
import './ourteam.css'
import ourteam1 from '../../image-for-exercise/others/480x600x1.jpg'
import ourteam2 from '../../image-for-exercise/others/480x600x2.jpg'
import ourteam3 from '../../image-for-exercise/others/480x600x3.jpg'

import media1 from '../../image-for-exercise/media/32x32x4.png'
import media2 from '../../image-for-exercise/media/32x32x5.png'
import media3 from '../../image-for-exercise/media/32x32x6.png'
import media4 from '../../image-for-exercise/media/32x32x7.png'
function MeetOurTeam() {
  return (
    <div className='our-team' id='our-team'>
      <section>
        <div className='title-services'>
          <h1>MEET OUR TEAM</h1>
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
              <div className='image'>
                <img src={ourteam1} alt='' />
                <div className='info'>
                  <p className='name'>LOUIS CAROL</p>
                  <p className='position'>Manager</p>
                </div>
              </div>

              <div>
                <span>
                  <img src={media1} alt='' />
                </span>
                <span>
                  <img src={media2} alt='' />
                </span>
                <span>
                  <img src={media3} alt='' />
                </span>
                <span>
                  <img src={media4} alt='' />
                </span>
              </div>
            </article>
            <article>
              <div className='image'>
                <img src={ourteam2} alt='' />
                <div className='info'>
                  <p className='name'>MARK PETER</p>
                  <p className='position'>Manager</p>
                </div>
              </div>
              <div>
                <span>
                  <img src={media1} alt='' />
                </span>
                <span>
                  <img src={media2} alt='' />
                </span>
                <span>
                  <img src={media3} alt='' />
                </span>
                <span>
                  <img src={media4} alt='' />
                </span>
              </div>
            </article>
            <article>
              <div className='image'>
                <img src={ourteam3} alt='' />
                <div className='info'>
                  <p className='name'>HENRY JOY</p>
                  <p className='position'>Manager</p>
                </div>
              </div>
              <div>
                <span>
                  <img src={media1} alt='' />
                </span>
                <span>
                  <img src={media2} alt='' />
                </span>
                <span>
                  <img src={media3} alt='' />
                </span>
                <span>
                  <img src={media4} alt='' />
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MeetOurTeam

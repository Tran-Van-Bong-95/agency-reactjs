import './slider.css'
import React from 'react'
import ImagePerson from './ImagePerson'
import imagePerson from './data'
import Carousel from 'react-bootstrap/Carousel'

function SliderContainer() {
  return (
    <div id='transition'>
      <div className='container-fluid'>
        <section>
          <Carousel>
            {imagePerson.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <ImagePerson {...item} key={index} />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </section>
      </div>
    </div>
  )
}

export default SliderContainer

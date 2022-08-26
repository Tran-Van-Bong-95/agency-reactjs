import './slider.css'
import React from 'react'

import ImagePerson from './ImagePerson'
import imagePerson from './data'
import Slider from 'react-slick'

// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function SliderContainer() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div id='transition'>
      <div className='container-fluid'>
        <Slider {...settings}>
          {imagePerson.map((item, index) => {
            return <ImagePerson {...item} key={index} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default SliderContainer

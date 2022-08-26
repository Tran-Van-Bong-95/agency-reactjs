import { useState, useEffect } from 'react'
import './gallery.css'
import { BsPlusCircle } from 'react-icons/bs'
import gallery from './data'

// --------------------------------
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

//-------------------------------
let settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
}

//------------------------------

function Gallery() {
  const [allGallery, setAllGallery] = useState(gallery)
  const [openModal, setOpenModal] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.textContent)
    setAllGallery(
      gallery.filter((item) => item.catergory == e.target.textContent)
    )

    if (e.target.textContent === 'all') {
      setAllGallery(gallery)
    }
  }

  //  HP W US CL
  return (
    <section id='gallery'>
      <div className='title-services'>
        <h1>OUR GALLERY</h1>
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

      <div className='choices'>
        {['all', ...new Set(gallery.map((item) => item.catergory))].map(
          (item, index) => (
            <button onClick={handleClick} key={index}>
              {item}
            </button>
          )
        )}
      </div>
      <div className='main'>
        {allGallery.map((item, index) => {
          const { image, category } = item
          return (
            <article key={index}>
              <div className='image'>
                <img src={image} alt={category} />

                <button onClick={() => setOpenModal(true)}>
                  <span>
                    <BsPlusCircle className='plus-icon' />
                  </span>
                </button>
              </div>
              {openModal && (
                <div id='fixedContain'>
                  <Slider {...settings} className='styleforSlider'>
                    {gallery.slice(1, 6).map((item, index) => {
                      const { image } = item

                      return (
                        <article
                          key={index}
                          style={{
                            width: '100%',
                            height: '100%',
                            margin: '0 auto',
                            position: 'absolute',
                            top: '30%',
                            left: '50%',
                            transform: 'translate(-50%, -30%)',
                          }}
                        >
                          <div>
                            <img
                              src={image}
                              style={{
                                width: '100%',
                                height: '80vh',
                                objectFit: 'contain',
                                marginTop: '10%',
                              }}
                            />
                          </div>
                        </article>
                      )
                    })}
                  </Slider>
                  <button
                    style={{
                      position: 'absolute',
                      top: '5%',
                      right: '5%',
                    }}
                    onClick={() => setOpenModal(!openModal)}
                  >
                    X
                  </button>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery

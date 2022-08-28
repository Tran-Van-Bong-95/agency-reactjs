import React, { useState } from 'react'
import './gallery.css'
import { BsPlusCircle } from 'react-icons/bs'
import gallery from './data'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Gallery() {
  const [allGallery, setAllGallery] = useState(gallery)
  const [openModal, setOpenModal] = useState(false)

  const values = [true]
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }

  const [order, setOrder] = useState('')

  function handleClick(x) {
    setOrder(x)
  }
  //  HP W US CL
  return (
    <div className='container-fluid' id='gallery'>
      <section>
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

                  <Button
                    key={index}
                    className='me-2 mb-2'
                    onClick={() => handleShow(true)}
                  >
                    <span onClick={() => handleClick(index + 1)}>
                      <BsPlusCircle className='plus-icon' />
                    </span>
                  </Button>
                </div>

                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                  style={{
                    width: '100vw',
                    height: '100vh',
                    zIndex: '999999',
                  }}
                >
                  <Modal.Body
                    style={{
                      backgroundColor: 'rgba(92, 90, 90, 0.738)',
                      height: '80vh',
                    }}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className='text-white'>gallery</Modal.Title>
                    </Modal.Header>
                    <Carousel>
                      {[
                        ...gallery.slice(order - 1),
                        ...gallery.slice(0, order - 1),
                      ].map((item, index) => {
                        const { image } = item
                        // setOrder(index)
                        return (
                          <Carousel.Item key={index}>
                            <img
                              src={image}
                              style={{
                                display: 'block',
                                width: '100vmin',
                                height: '70vmin',
                                margin: '3em auto',
                                marginTop: '0',
                              }}
                            />
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
                  </Modal.Body>
                </Modal>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Gallery

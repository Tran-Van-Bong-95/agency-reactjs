import React from 'react'
import './freequency.css'
import Accordion from 'react-bootstrap/Accordion'

function FreeQuencyQuestion() {
  return (
    <section id='freequency-question'>
      <div className='title-services'>
        <h1>FREEQUENCY QUESTIONS</h1>
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
        <div className='row'>
          <Accordion className='row'>
            <div className='col'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  PHASELLUS NUNC TEMPUS CONSEQUAT??
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus Nunc tempus consequat blandit commodo tristique.
                  Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>
                  PHASELLUS NUNC TEMPUS CONSEQUAT??
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus Nunc tempus consequat blandit commodo tristique.
                  Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>
                  PHASELLUS NUNC TEMPUS CONSEQUAT??
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus Nunc tempus consequat blandit commodo tristique.
                  Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className='col'>
              <Accordion.Item eventKey='3'>
                <Accordion.Header>
                  PHASELLUS NUNC TEMPUS CONSEQUAT??
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus Nunc tempus consequat blandit commodo tristique.
                  Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='4'>
                <Accordion.Header>
                  PHASELLUS NUNC TEMPUS CONSEQUAT??
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus Nunc tempus consequat blandit commodo tristique.
                  Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='5'>
                <Accordion.Header>
                  PHASELLUS NUNC TEMPUS CONSEQUAT??
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus Nunc tempus consequat blandit commodo tristique.
                  Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi.
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FreeQuencyQuestion

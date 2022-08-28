import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='container-fluid' id='contact'>
      <section>
        <div className='content'>
          <div className='image'>
            <img
              src='http://fourdinos.com/demo/lpf/agency/static/images/760x745.jpg'
              alt=''
            />
          </div>
          <div className='form'>
            <div>
              <span>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/64x64x5.png'
                  alt=''
                />
              </span>
            </div>

            <form>
              <label>SEND A MESSAGE</label>
              <input
                type='text'
                required
                placeholder='Enter your name'
                className='w-100'
              />
              <div className='row'>
                {' '}
                <div class='mb-3'>
                  <input
                    type='email'
                    className='col me-1'
                    id='exampleFormControlInput1'
                    placeholder='Enter your email'
                  />

                  <input
                    type='number'
                    required
                    placeholder='Enter your number'
                    className='col'
                    id='exampleFormControlInput1'
                  />
                </div>
              </div>

              <div className='mb-3'>
                <textarea
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  placeholder='Please Enter Your Message'
                  required
                ></textarea>
              </div>

              <button>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

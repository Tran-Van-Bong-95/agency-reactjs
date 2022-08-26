import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <section id='contact'>
      <div className='container-fluid'>
        <div className='content'>
          <div className='image'>
            <img
              src='http://fourdinos.com/demo/lpf/agency/static/images/760x745.jpg'
              alt=''
            />
          </div>
          <div className='form'>
            <span>
              <img
                src='http://fourdinos.com/demo/lpf/agency/static/images/64x64x5.png'
                alt=''
              />
            </span>

            <form>
              <label>SEND A MESSAGE</label>
              <input
                type='text'
                required
                placeholder='Enter your name'
                className='w-100'
              />
              <div className='row w-100'>
                {' '}
                <input
                  type='email'
                  required
                  placeholder='Enter your email'
                  className='col'
                />
                <input
                  type='number'
                  required
                  placeholder='Enter your number'
                  className='col'
                />
              </div>

              <textarea
                id=''
                cols='30'
                rows='10'
                required
                placeholder='Please Enter Your Message'
                style={{ height: '100px' }}
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import './Contact.css'
import contact1 from '../../image-for-exercise/others/760x745.jpg'
import contact2 from '../../image-for-exercise/others/64x64x5.png'
function Contact() {
  return (
    <div className='container-fluid' id='contact'>
      <section>
        <div className='content'>
          <div className='image'>
            <img src={contact1} alt='' />
          </div>
          <div className='form'>
            <div>
              <span>
                <img src={contact2} alt='' />
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
                <div className='mb-3'>
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
                  className='form-control'
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

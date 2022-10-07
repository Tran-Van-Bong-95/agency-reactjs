import React, { useEffect, useState } from 'react'
import './total.css'
import review1 from '../../image-for-exercise/review/64x64x1.png'
import review2 from '../../image-for-exercise/review/64x64x2.png'
import review3 from '../../image-for-exercise/review/64x64x3.png'
import review4 from '../../image-for-exercise/review/64x64x4.png'

function Total() {
  const [scrollHeight, setScrollHeight] = useState(0)
  function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
      }
      callback(currentNumber)
    }
  }

  const handleCount = () => {
    const number = document.querySelectorAll('#total .number')

    number.forEach((item, index) => {
      if (index === 0) {
        animateNumber(540, 3, 0, function (number) {
          const formattedNumber = number.toLocaleString()
          item.innerText = formattedNumber
        })
      }

      if (index == 1) {
        animateNumber(1200, 3, 0, function (number) {
          const formattedNumber = number.toLocaleString()
          item.innerText = formattedNumber
        })
      }
      if (index == 2) {
        animateNumber(2500, 3, 0, function (number) {
          const formattedNumber = number.toLocaleString()
          item.innerText = formattedNumber
        })
      }

      if (index == 3) {
        animateNumber(940, 3, 0, function (number) {
          const formattedNumber = number.toLocaleString()
          item.innerText = formattedNumber
        })
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.pageYOffset)
    })
    const total = document.querySelector('#total')
    if (
      scrollHeight >= total.offsetTop ||
      scrollHeight <= total.offsetTop + total.getBoundingClientRect().height
    ) {
      handleCount()
    }
  }, [])

  return (
    <div className='container-fluid'>
      <div id='total'>
        <section>
          <article>
            <span>
              <img src={review1} alt='' />
            </span>
            <span className='number'></span>
            <span className='data'>clients</span>
          </article>
          <article>
            <span>
              <img src={review2} alt='' />
            </span>
            <span className='number'></span>
            <span className='data'>projects</span>
          </article>
          <article>
            <span>
              <img src={review3} alt='' />
            </span>
            <span className='number'></span>
            <span className='data'>likes</span>
          </article>
          <article>
            <span>
              <img src={review4} alt='' />
            </span>
            <span className='number'></span>
            <span className='data'>awards</span>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Total

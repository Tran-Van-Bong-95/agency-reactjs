import React, { useRef, useEffect, useState } from 'react'
import './total.css'
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
    <section id='total'>
      <article>
        <span>
          <img
            src='http://fourdinos.com/demo/lpf/agency/static/images/64x64x1.png'
            alt=''
          />
        </span>
        <span className='number'></span>
        <span className='data'>clients</span>
      </article>
      <article>
        <span>
          <img
            src='http://fourdinos.com/demo/lpf/agency/static/images/64x64x2.png'
            alt=''
          />
        </span>
        <span className='number'></span>
        <span className='data'>projects</span>
      </article>
      <article>
        <span>
          <img
            src='http://fourdinos.com/demo/lpf/agency/static/images/64x64x3.png'
            alt=''
          />
        </span>
        <span className='number'></span>
        <span className='data'>likes</span>
      </article>
      <article>
        <span>
          <img
            src='http://fourdinos.com/demo/lpf/agency/static/images/64x64x4.png'
            alt=''
          />
        </span>
        <span className='number'></span>
        <span className='data'>awards</span>
      </article>
    </section>
  )
}

export default Total

import React, { useState, useEffect, useRef } from 'react'
import './navbar.css'
import { TbLayoutNavbar } from 'react-icons/tb'
import 'bootstrap/dist/css/bootstrap.min.css'
function Navbar() {
  const [scrollHeight, setScrollHeight] = useState(0)
  const containul = useRef(null)
  const btnOpen = useRef(null)
  const navbar = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop
    const navbarHeight =
      e.target.parentElement.parentElement.parentElement.parentElement.getBoundingClientRect()
        .height

    const navbarWidth =
      e.target.parentElement.parentElement.parentElement.parentElement.getBoundingClientRect()
        .width

    const heightOfsidebar =
      e.target.parentElement.parentElement.parentElement.getBoundingClientRect()
        .height

    let position = location - navbarHeight

    if (navbarHeight > 117 && navbarWidth < 990) {
      position = position + heightOfsidebar
    }
    window.scrollTo({
      left: 0,
      top: position,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.pageYOffset)
    })

    if (scrollHeight > 10) {
      navbar.current.classList.add('navfixed')
      // btnOpen.current.classList.add('show')
    } else {
      navbar.current.classList.remove('navfixed')
    }
  }, [scrollHeight])

  // when height change something happen outside
  return (
    <div className='container-fluid'>
      <nav id='navbar' ref={navbar} className='bg-light'>
        <div className='logo'>
          <img
            src='http://fourdinos.com/demo/lpf/agency/static/images/200x80x1.png'
            alt='logo'
          />
        </div>

        <div
          className='content'
          ref={containul}
          onClick={(e) => {
            console.log(e.currentTarget)
            e.currentTarget.classList.remove('show')
          }}
        >
          <ul>
            <li>
              <a href='#navbar' onClick={handleClick}>
                HOME
              </a>
            </li>
            <li>
              {' '}
              <a href='#services' onClick={handleClick}>
                {' '}
                SERVICES
              </a>
            </li>
            <li>
              <a href='#feature' onClick={handleClick}>
                {' '}
                FEATURES
              </a>
            </li>
            <li>
              <a href='#gallery' onClick={handleClick}>
                {' '}
                GALLERY
              </a>
            </li>
            <li>
              <a href='#pricing' onClick={handleClick}>
                {' '}
                PRICING
              </a>
            </li>
            <li>
              <a href='#contact' onClick={handleClick}>
                {' '}
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <span
          className='nav-btn'
          id='nav-btn'
          ref={btnOpen}
          onClick={() => containul.current.classList.toggle('show')}
        >
          <TbLayoutNavbar />
        </span>
      </nav>
    </div>
  )
}

export default Navbar

import './footer.css'
import footer1 from '../../image-for-exercise/others/80x80x7.png'
import footer2 from '../../image-for-exercise/others/80x80x8.png'
import infor1 from '../../image-for-exercise/contact/25x25x1.png'
import infor2 from '../../image-for-exercise/contact/25x25x2.png'
import infor3 from '../../image-for-exercise/contact/25x25x3.png'
import infor4 from '../../image-for-exercise/contact/25x25x4.png'

import media1 from '../../image-for-exercise/media/32x32x4.png'
import media2 from '../../image-for-exercise/media/32x32x5.png'
import media3 from '../../image-for-exercise/media/32x32x6.png'
import media4 from '../../image-for-exercise/media/32x32x7.png'
function Footer() {
  return (
    <div className='container-fluid' id='footer'>
      <section>
        <article className='about-us'>
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam vel sagittis ipsum molestie.
          </p>
          <div>
            <span>
              <img src={media1} alt='' />
            </span>
            <span>
              <img src={media2} alt='' />
            </span>
            <span>
              <img src={media3} alt='' />
            </span>
            <span>
              <img src={media4} alt='' />
            </span>
          </div>
        </article>

        <article className='lasted-posts'>
          <h3>LATEST POSTS</h3>
          <div>
            <div className='image'>
              <img src={footer1} alt='' />
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p className='time'>24th Jun 2018</p>
              </div>
            </div>
            <div className='image'>
              <img src={footer2} alt='' />
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p className='time'>24th Jun 2018</p>
              </div>
            </div>
          </div>
        </article>
        <article className='contact'>
          <h3>CONTACT US</h3>
          <div>
            <p>
              <span>
                <img src={infor1} alt='' />
              </span>
              <span>485, Park Town, Newyork, USA</span>
            </p>
            <p>
              <span>
                <img src={infor2} alt='' />
              </span>
              <span>mailid@domain.com</span>
            </p>
            <p>
              <span>
                <img src={infor3} alt='' />
              </span>
              <span>example@website.com</span>
            </p>
            <p>
              <span>
                <img src={infor4} alt='' />
              </span>
              <span>+014-457-5457</span>
            </p>
          </div>
        </article>
        <article className='newsletter'>
          <h3>NEWSLETTER</h3>
          <form>
            <input type='email' placeholder='Enter Your Email' />
            <button>
              {' '}
              <span>Subcribe</span>
            </button>
          </form>
        </article>
      </section>
    </div>
  )
}

export default Footer

import './footer.css'
function Footer() {
  return (
    <section id='footer'>
      <div className='container-fluid'>
        <article className='about-us'>
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra efficitur diam vel sagittis ipsum molestie.
          </p>
          <div>
            <span>
              <img
                src='http://fourdinos.com/demo/lpf/agency/static/images/32x32x4.png'
                alt=''
              />
            </span>
            <span>
              <img
                src='http://fourdinos.com/demo/lpf/agency/static/images/32x32x5.png'
                alt=''
              />
            </span>
            <span>
              <img
                src='http://fourdinos.com/demo/lpf/agency/static/images/32x32x6.png'
                alt=''
              />
            </span>
            <span>
              <img
                src='http://fourdinos.com/demo/lpf/agency/static/images/32x32x7.png'
                alt=''
              />
            </span>
          </div>
        </article>

        <article className='lasted-posts'>
          <h3>LATEST POSTS</h3>
          <div>
            <div className='image'>
              <img
                src='http://fourdinos.com/demo/lpf/agency/static/images/80x80x7.png'
                alt=''
              />
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p className='time'>24th Jun 2018</p>
              </div>
            </div>
            <div className='image'>
              <img
                src='http://fourdinos.com/demo/lpf/agency/static/images/80x80x8.png'
                alt=''
              />
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
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/25x25x1.png'
                  alt=''
                />
              </span>
              <span>485, Park Town, Newyork, USA</span>
            </p>
            <p>
              <span>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/25x25x2.png'
                  alt=''
                />
              </span>
              <span>mailid@domain.com</span>
            </p>
            <p>
              <span>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/25x25x3.png'
                  alt=''
                />
              </span>
              <span>example@website.com</span>
            </p>
            <p>
              <span>
                <img
                  src='http://fourdinos.com/demo/lpf/agency/static/images/25x25x4.png'
                  alt=''
                />
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
      </div>
    </section>
  )
}

export default Footer
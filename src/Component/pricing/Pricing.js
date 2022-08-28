import './pricing.css'
function Pricing() {
  return (
    <div className='container-fluid' id='pricing'>
      <section>
        <div className='title-services'>
          <h1>OUR PRICING</h1>
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
          <div className='show-price d-flex w-lg-100 w-90 mx-lg-auto '>
            <article>
              <p className='tille'>BASIC</p>
              <p className='price'>
                $25
                <span>monthly</span>
              </p>
              <p>
                Lorem ipsum dolor sit Eirmod tempor invidunt Lorem ipsum dolor
                sit Eirmod tempor invidunt Lorem ipsum dolor sit Eirmod tempor
                invidunt
              </p>
              <button>Book now</button>
            </article>
            <article
              className='text-white'
              style={{ backgroundColor: 'hsl(21, 57%, 50%)' }}
            >
              <p className='tille'>STANDARD</p>
              <p
                className='price'
                style={{ backgroundColor: 'white', color: 'hsl(21, 57%, 50%)' }}
              >
                $28
                <span>monthly</span>
              </p>
              <p>
                Lorem ipsum dolor sit Eirmod tempor invidunt Lorem ipsum dolor
                sit Eirmod tempor invidunt Lorem ipsum dolor sit Eirmod tempor
                invidunt
              </p>
              <button
                style={{ backgroundColor: 'white', color: 'hsl(21, 57%, 50%)' }}
              >
                Book now
              </button>
            </article>
            <article>
              <p className='tille'>PREMIUM</p>
              <p className='price'>
                $32
                <span>monthly</span>
              </p>
              <p>
                Lorem ipsum dolor sit Eirmod tempor invidunt Lorem ipsum dolor
                sit Eirmod tempor invidunt Lorem ipsum dolor sit Eirmod tempor
                invidunt
              </p>
              <button>Book now</button>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

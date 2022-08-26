import './index.css'
import Header from './Component/header/Header'
import Navbar from './Component/navbar/Navbar'
import MoreDetail from './Component/moreDetail/MoreDetail'
import OurServices from './Component/services/OurServices'
import Feature from './Component/feature/Feature'
import OurMission from './Component/ourMission/OurMission'
import Gallery from './Component/gallery/Gallery'
import Total from './Component/total/Total'
import Information from './Component/information/Information'
import Pricing from './Component/pricing/Pricing'
import Skillset from './Component/skillset/Skillset'
import FreeTrail from './Component/freetrail/FreeTrail'
import FreeQuencyQuestion from './Component/freequencyQuestion/FreeQuencyQuestion'
import MeetOurTeam from './Component/ourteam/MeetOurTeam'
import Organization from './Component/organization/Organization'
import Slider from './Component/slider/SliderContainer'
import Lastnew from './Component/lastnew/Lastnew'
import Contact from './Component/contact/Contact'
import Footer from './Component/footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Header />
      <MoreDetail />
      <OurServices />
      <Feature />
      <OurMission />
      <Gallery />
      <Total />
      <Information />
      <Pricing />
      <Skillset />
      <FreeTrail />
      <FreeQuencyQuestion />
      <MeetOurTeam />
      <Organization />
      <Slider />
      <Lastnew />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

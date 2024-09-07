// Home.js
import Carousel from '../components/Carousel';
import ServiceCards from '../components/ServiceCards';
import AboutUs from './AboutUs';
import MapComponent from '../components/MapComponent';
import StatsSection from '../components/StatsSection';
function Home() {
    return (
      <div>
        <div className='swiper-root'>

        <Carousel />
        </div>
       
        <AboutUs/>
        <ServiceCards />
        <StatsSection/>
        <MapComponent />
        
      </div>
    )
  }
  
  export default Home;
  
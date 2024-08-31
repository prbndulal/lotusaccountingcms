// Home.js
import Carousel from '../components/Carousel';
import ServiceCards from '../components/ServiceCards';
import AboutUs from './AboutUs';
import MapComponent from '../components/MapComponent';
function Home() {
    return (
      <div>
        <div className='swiper-root'>

        <Carousel />
        </div>
       
        <AboutUs/>
        <ServiceCards />
        <MapComponent />
      </div>
    )
  }
  
  export default Home;
  
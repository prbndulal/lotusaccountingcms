// Home.js
import Carousel from '../components/Carousel';
import ServiceCards from '../components/ServiceCards';
import AboutUs from './AboutUs';
function Home() {
    return (
      <div>
        <Carousel />
        <AboutUs/>
        <ServiceCards />
      </div>
    )
  }
  
  export default Home;
  
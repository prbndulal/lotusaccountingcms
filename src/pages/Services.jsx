import { Link } from 'react-router-dom';
import ServiceCards from "../components/ServiceCards";

function Services() {
  return (
    <div>
      <ServiceCards />
      <div className="text-center py-12">
        <Link
          to="/contactus"
          className="inline-block bg-[#2E7D32] text-white text-lg font-semibold py-4 px-8 rounded-lg hover:bg-[#1B5E20] transition-colors duration-300 shadow-lg"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}

export default Services;
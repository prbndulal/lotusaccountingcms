import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  </BrowserRouter>
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Header from './components/Header';


export default function App() {
  return <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  </BrowserRouter>
}

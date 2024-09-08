import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import TaxPreparation from './pages/TaxPreparation';
import AccountingServices from './pages/AccountingServices';
import Bookkeeping from './pages/Bookkeeping';
import BusinessAdvisory from './pages/BusinessAdvisory';
import FinancialPlanning from './pages/FinancialPlanning';
import InvestmentAdvisory from './pages/InvestmentAdvisory';
import PayrollManagement from './pages/PayrollManagement';
import GSTFiling from './pages/GSTFiling';
import CashFlowManagement from './pages/CashFlowManagement';





function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };



  return (
    <Router>
      {/* <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      <nav className="navbar">
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/aboutus" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </nav> */}
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/taxpreparation" element={<TaxPreparation />} />
        <Route path="/accountingservices" element={<AccountingServices />} />
        <Route path="/bookkeeping" element={<Bookkeeping />} />
        <Route path="/businessadvisory" element={<BusinessAdvisory />} />
        <Route path="/financialplanning" element={<FinancialPlanning />} />
        <Route path="/gstfiling" element={<GSTFiling />} />
        <Route path="/investmentadvisory" element={<InvestmentAdvisory />} />
        <Route path="/payrollmanagement" element={<PayrollManagement />} />
        <Route path="/cashflowmanagement" element={<CashFlowManagement />} />

      </Routes>
        </main>
        <Footer/>
      </div>
      
    </Router>
  );
}
export default App;
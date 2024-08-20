import React from "react";
import logo from '../assets/lotusaccountinglogo.jpeg';
import {Link, link} from 'react-router-dom';

export default function Header (){
  return(<>
    <header>
        <div className="bg-blue-800 p-4  text-white text-sm sm:text-xl"> 📞 0436777889</div>
    </header>
      <div className="flex justify-between items-center max-w-6xl p-3">
      <Link to="/"><img  src={logo} alt=""  width="150" height='150'/></Link>
            <ul className="">
              <Link to="/">
              <li className="hidden sm:inline text-red-500 uppercase hover:underline">home
              </li>
              </Link>
              <Link to="/about-us">
              <li className="hidden sm:inline text-slate-700 uppercase hover:underline">About us</li>
              </Link>
              <Link to="/contact-us">
              <li className="hidden sm:inline text-slate-700 uppercase hover:underline">Contact us</li>
              </Link>
              <Link to="/services">
              <li className="hidden sm:inline text-slate-700 uppercase hover:underline">services</li>
              </Link>
            </ul>
            </div>
    </>
  )
}
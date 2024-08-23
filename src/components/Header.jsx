import React, { useState } from "react";
import logo from '../assets/lotusaccountinglogo.jpeg';
import {Link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header (){
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
  return(<>
    <nav className="bg-blue-900 p-5 text-white w-full ">
        <p>📞  0436777889</p>
    </nav>

     <div className="flex justify-between p-5 items-center h-24 maxw-[1240px] mx-auto ">
          <Link to="/"><img  src={logo} alt=""  width="170"/></Link>
      
            <ul className="hidden md:flex">
              <Link to="/">
              <li className="p-4 text-red-500 uppercase hover:underline">home
              </li>
              </Link>
              <Link to="/about-us">
              <li className="p-4 text-slate-700 uppercase hover:underline">About us</li>
              </Link>
              <Link to="/contact-us">
              <li className="p-4 text-slate-700 uppercase hover:underline">Contact us</li>
              </Link>
              <Link to="/services">
              <li className="p-4 text-slate-700 uppercase hover:underline">services</li>
              </Link>
              </ul>
               <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                 
               </div>
               <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500': 'fixed left-[-100%]' }>

                 <ul className="pt-36">
                 <Link to="/">
              <li className=" p-4 text-red-500 uppercase hover:underline">home
              </li>
              </Link>
              <Link to="/about-us">
              <li className=" p-4 text-slate-700 uppercase hover:underline">About us</li>
              </Link>
              <Link to="/contact-us">
              <li className=" p-4 text-slate-700 uppercase hover:underline">Contact us</li>
              </Link>
              <Link to="/services">
              <li className=" p-4 text-slate-700 uppercase hover:underline">services</li>
              </Link>
                 </ul>
               </div>
          </div>
    </>
  )
}
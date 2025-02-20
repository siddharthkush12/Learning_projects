import React from "react";
import { Link } from "react-router"; // Fixed incorrect import
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="border-y bg-gradient-to-b from-blue-400 to-purple-300">
    <div className="w-full max-w-7xl mx-auto px-4 py-10 lg:flex lg:justify-between lg:items-center md:flex md:justify-between">
      <div className="items-center text-center pb-6">
        <img src="Logo.png" className="w-44 mb-4 sm:mb-0" alt="Logo" />
        <p className="flex justify-center items-center text-gray-500">
          <FaCopyright className="mr-2 text-xl" />
          Copyright 2025. All Rights Reserved by Siddharth.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div>
          <h2 className="py-3 pb-6 text-gray-100">COMPANY</h2>
          <ul className="space-y-2">
            <li><Link to="/">Features</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Affiliate Program</Link></li>
            <li><Link to="/">Press Kit</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="py-3 pb-6 text-gray-100">SUPPORT</h2>
          <ul className="space-y-2">
            <li><Link to="/">Support</Link></li>
            <li><Link to="/">Help</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">Customer Support</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="py-3 pb-6 text-gray-100">LEGALS</h2>
          <ul className="space-y-2">
            <li><Link to="/">Terms & Conditions</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Licensing</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
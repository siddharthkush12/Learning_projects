import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
function Footer() {
  return (
    <div className="w-full bg-[#f1f0f4]">
      <div className="max-w-[1100px] mx-auto border-t-2">
        <div className="flex flex-wrap inert-x-0 justify-between items-center p-5">
          <div className="text-2xl font-bold text-gray-500">
            For better experience, download the Swiggy app now
          </div>
          <div className="w-[180px] flex justify-end gap-5">
            <img src="images/googleplay.png" alt="" />
            <img src="images/appleplay.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-4 text-gray-500 py-10 px-5 gap-15">
          <div className=" col-start-1">
            <img
              src="images/swiggycopyright.png"
              alt=""
              className="w-[201px]"
            />
            <div className="mt-3 text-gray-500 flex items-center">
              <FaRegCopyright className="mr-2" />
              2025 Swiggy Limited
            </div>
          </div>

          <div className="col-start-2">
            <ul className="space-y-2">
              <li className="font-bold text-black">Company</li>
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Swiggy Genie</li>
            </ul>
          </div>
          <div className="col-start-3">
            <div>
              <ul className="space-y-2">
                <li className="font-bold text-black">Contact us</li>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
              </ul>
            </div>
            <div className="my-15">
              <ul className="space-y-2">
                <li className="font-bold text-black">Legal</li>
                <li>Terms & Conditions</li>
                <li>Cookies Policy</li>
                <li>Privacy Policy</li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>
          <div className="col-start-4">
            <ul className="space-y-2">
              <li className="font-bold text-black">Available In:</li>
              <li>Banglore</li>
              <li>Gurgoan</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

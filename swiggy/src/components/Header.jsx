import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoBagSharp } from "react-icons/io5";

function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const navItem = [
    {
      icon: <IoBagSharp />,
      name: "Swiggy Corporate",
    },
    {
      icon: <IoSearchSharp />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      superscript: "New",
    },
    {
      icon: <IoMdHelpBuoy />,
      name: "Help",
    },
    {
      icon: <MdOutlineAccountCircle />,
      name: "Sign In",
    },
    {
      icon: <HiOutlineShoppingCart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-400"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="p-1 max-w-[450px] mx-auto h-full text-2xl">
            <button
              onClick={hideSideMenu}
              className="text-4xl pt-7 pb-7 cursor-pointer"
            >
              <RxCross2 />
            </button>
            <input
              type="text"
              placeholder="Search for area, Street name..."
              className="grid border-1 border-gray-400 p-5 w-full"
            />
          </div>
        </div>
      </div>

      <header className="p-1 shadow-md ">
        <div className="max-w-[1100px] mx-auto flex items-center">
          <div className="w-[80px]">
            <img src="images/swiggylogo.png" className="w-full" />
          </div>

          <div className="text-sm ml-4 hover:text-amber-500">
            <span className="font-bold border-b-2 mr-2 ">other</span>
            <p className="inline text-[#686b78] mr-1">
              Jalandhar Cantt, Jalandhar...
            </p>
            <FaAngleDown
              onClick={showSideMenu}
              className="inline text-2xl text-orange-500"
            />
          </div>
          <nav className="flex list-none gap-5 ml-auto text-[#686b78] text-[18px]">
            {navItem.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 hover:text-orange-500 cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                  <sup className="text-yellow-500">{item.superscript}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

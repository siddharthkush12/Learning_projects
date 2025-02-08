import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";


function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu=()=>{
    setToggle(false);
  };
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div onClick={(e)=>{
            e.stopPropagation();
        }}  
          className="w-[500px] bg-white h-full absolute duration-400"
          style={{
            left: toggle ? "0%" : "-100%", 
            
          }}
        >
        </div>
      </div>
      <header className="p-1 shadow-md ">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[80px]">
            <img src="images/swiggylogo.png" className="w-full" />
          </div>

          <div className="text-sm ml-4">
            <span className="font-bold border-b-2 mr-2">other</span>
            <p className="inline text-[#686b78] mr-1">
              Jalandhar Cantt, Jalandhar...
            </p>
            <FaAngleDown
              onClick={showSideMenu}
              className="inline text-2xl text-orange-500"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

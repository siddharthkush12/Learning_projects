import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

function Restorants() {
  const [list, setList] = useState([]);
  const [slide, setSlide] = useState(0);

  const restorantList = async () => {
    const response = await fetch("http://localhost:2000/top-restaurant-chains");
    const data = await response.json();
    setList(data);
  };

  useEffect(() => {
    restorantList();
  }, []);

  const left = () => {
    setSlide(slide - 1);
  };

  const right = () => {
    if (slide < 5) setSlide(slide + 1);
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="flex justify-between my-5">
        <div className="text-2xl font-bold text-gray-800">
          Top restaurant chains in Jalandhar
        </div>
        <div className="flex">
          <div
            className="flex justify-center items-center w-8 h-8 cursor-pointer bg-gray-300 hover:bg-gray-200 rounded-full mx-2"
            onClick={left}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center items-center w-8 h-8 cursor-pointer bg-gray-300 hover:bg-gray-200 rounded-full mx-2"
            onClick={right}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden gap-6 mt-3 ">
        {list.map((data, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              className="duration-500"
            >
              <Card {...data} key={index} />
            </div>
          );
        })}
      </div>
      <hr className="my-7 border-1 border-gray-200" />
    </div>
  );
}

export default Restorants;

import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Category() {
  const [categories, setCategory] = useState([]);
  const [slide, setSlide] = useState(1);

  const left = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };
  const right = () => {
    if (slide == categories.length - 9) return false;
    setSlide(slide + 3);
  };

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:2000/categories");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="flex mt-4 justify-between">
        <div className="font-bold text-2xl text-gray-800">
          What's on your mind?
        </div>
        <div className="flex mb-9">
          <div
            className="cursor-pointer flex justify-center items-center bg-gray-300 hover:bg-gray-200 w-8 h-8 rounded-full mx-2"
            onClick={left}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center bg-gray-300 hover:bg-gray-200 w-8 h-8 rounded-full mx-2"
            onClick={right}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((items, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              className="flex-grow w-[144px] h-[180px] shrink-0 duration-500"
            >
              <img
                src={"http://localhost:2000/images/" + items.image}
                alt=""
                keys={index}
              />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-1 border-gray-200" />
    </div>
  );
}

export default Category;

import React from "react";
import { useState, useEffect } from "react";
import Card2 from "./Card2";
import { IoFilter } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import Button from "./Button";

function Avaiable() {
  const [list, setList] = useState([]);

  const restorantList = async () => {
    const response = await fetch("http://localhost:2000/top-restaurant-chains");
    const data = await response.json();
    setList(data);
  };

  useEffect(() => {
    restorantList();
  }, []);
  return (
    <div className="max-w-[1100px] mx-auto">
      <div>
        <div className="text-2xl font-bold text-gray-800">
          Restaurants with online food delivery in Jalandhar
        </div>
        <div>
          <div className="max-w-[1100] mx-auto flex gap-2 my-7 text-gray-500">
            <Button label="Filter" icon={IoFilter} />
            <Button label="Sort By" icon={FaAngleDown} />
            <Button label="Fast Delivery" />
            <Button label="New on Swiggy" />
            <Button label="Ratings 4.0+" />
            <Button label="Pure Veg" />
            <Button label="Offers" />
            <Button label="Rs.300-Rs.600" />
            <Button label="Less than Rs.300" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-7 shrink-0 flex-grow">
          {list.toReversed().map((data, index) => {
            return (
              <div>
                <Card2 {...data} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Avaiable;

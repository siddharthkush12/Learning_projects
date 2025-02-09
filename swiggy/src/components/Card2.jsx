import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";

function Card(props) {
  

  return (
    <div className="w-[324px] p-1 flex-grow shrink-0 transition-all duration-500 ease-in-out hover:scale-105">
      <div className="h-[220px] relative">
        <img
          src={"http://localhost:2000/images/" + props.image}
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="inset-0 w-full h-full top-0 absolute bg-linear-to-t from-black to-transparent opacity-80 rounded-2xl"></div>
        <div className="absolute bottom-2 left-2 text-white font-bold text-[22px] p-1">
          {props.offer}
        </div>
      </div>
      <div className="p-2 ml-1">
        <div className="text-[19px] font-bold">{props.title}</div>
        <div className="flex gap-1">
          <div className="text-green-700 text-2xl">
            <MdStars />
          </div>
          <div>
            {props.rating}
            <LuDot className="inline" />
          </div>
          <div className="font-bold">{`${props.minTime}-${props.maxTime}mins`}</div>
        </div>
        <div className="text-gray-400">
            {props.name}
            <br/>
            {props.place}</div>
      </div>
      
    </div>
  );
}

export default Card;

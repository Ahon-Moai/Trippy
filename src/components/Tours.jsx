import React from "react";
import Data from "./data";
import tourImage1 from "../assets/1.jpg";
import tourImage2 from "../assets/2.jpg";
import { IoMdStar } from "react-icons/io";
function Tours() {
  return (
    <>
      <div className="py-32 font-poppins">
        {/* Places */}
        <div>
          <div className="flex">
            <p className="flex bg-rose-200 px-4 py-2 text-[19px] text-red-400">
              Most Rated <IoMdStar className="mt-1" />
            </p>
          </div>
          <h1 className="text-4xl font-semibold py-4 mb-4">
            Tall Volcano, Batangas
          </h1>
          <p className="w-[614px] text-gray-600 text-[17px] ">
            One of the most iconic views in Luzon, Mt. Tall Boosts a volcano
            inside a lake inside an islan. If you fancy a closer look, the hike
            up to the crater is mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you'll see
            the peculiar enviroment found on an active volcanom including
            volcanic rocks and steam vents the hike can dusty and hot, so plan
            for an early morning trip and then unwind with some bulalo before
            heading back home!
          </p>
          <div className="absolute right-10 top-[110%] mt-52 shadow-2xl">
            <img
              className="h-80 rounded-2xl relative  shadow-lg"
              src={tourImage1}
              alt="imame"
            />
            <img
              className="h-80 rounded-2xl absolute right-[30%] top-[60%] shadow-lg"
              src={tourImage2}
              alt="imame"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tours;

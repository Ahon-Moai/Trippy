import React from "react";
import Tours from "./Tours";
import { GiPalmTree } from "react-icons/gi";
import RecentTrips from "./RecentTrips";
function Destination() {
  return (
    <>
      <div className="w-full h-[1000px]">
        <div className="max-w-[1250px] mx-auto px-4 py-20">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-gray-900 py-3">
              Popular Destinations
            </h1>
            <p className="text-gray-600 text-[15px]">
              Tours give your the opportunity to see a lotm within a time frame.
            </p>
          </div>
          <Tours />
          <button className="flex flex-row text-center mr-2 rounded-sm hover:text-white mt-48 text-2xl font-medium  bg-cyan-300 text-gray-900 duration-300 px-6 py-2 ml-[520px]  hover:cursor-pointer">
            View More <GiPalmTree size={32} />
          </button>
          <div className="mt-72 text-center">
            <RecentTrips />
          </div>
        </div>
        {/* Heading Ending */}
      </div>
    </>
  );
}

export default Destination;

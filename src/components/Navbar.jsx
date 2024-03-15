import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full py-6">
        <div className="max-w-[1250px] mx-auto ">
          {/* Navbar */}
          <div className="bg-white px-6 py-5 rounded-lg flex justify-between shadow-lg">
            <h1 className="font-poppins text-3xl font-semibold">Trippy</h1>
            <div className="flex">
              <ul className="flex gap-10 py-2 text-[16px] font-semibold">
                <li className="hover:cursor-pointer hover:text-cyan-500">
                  Home
                </li>
                <li className="hover:cursor-pointer hover:text-cyan-500">
                  About
                </li>
                <li className="hover:cursor-pointer hover:text-cyan-500">
                  Gallery
                </li>
                <li className="hover:cursor-pointer hover:text-cyan-500">
                  Services
                </li>
              </ul>
            </div>
            {/* End Navbar */}
          </div>
          {/* Main Hero Section */}
          <div className="absolute font-poppins left-[25%]  top-[50%] text-center">
            <h1 className="text-6xl font-poppins font-bold mb-6 text-white">
              Your Journey Your Story
            </h1>
            <p className="text-white text-[21px] font-normal">
              Choose Your Favourite Destination.
            </p>
            <button className="mt-6 leading-5 hover:rounded-none duration-200 active::bg-slate-200 bg-white py-4 rounded-md px-10 font-semibold">
              Travel Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

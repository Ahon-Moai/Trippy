import React from "react";
import cardImg1 from "../assets/5.jpg";
import cardImg2 from "../assets/8.jpg";
import cardImg3 from "../assets/6.jpg";
import Footer from "./Footer";

function RecentTrips() {
  return (
    <>
      <div className="h-[700px] w-full">
        <div>
          <h1 className="text-5xl  font-semibold text-gray-900">
            Recent Trips
          </h1>
          <p className="text-gray-600 text-[15px]">
            Tours give your the opportunity to see a lotm within a time frame.
          </p>
          <div className="flex  mt-24">
            <div className=" w-[100%] mr-4 overflow-hidden rounded-lg bg-slate-200 shadow-2xl h-[33rem]">
              <div>
                <img src={cardImg1} className="h- rounded-md " alt="img" />
                <h1 className="py-4 px-4 font-medium text-[21px] ">
                  Trips in Indonesia
                </h1>
                <p className="py-4 text-[14px] text-gray-800 px-4">
                  {" "}
                  Indonesia, officially the Republic of Indonesia, is a country
                  in Southeasy Asia and Oceania between the indian and the
                  pacific oceans. It consists of over 17,000 islands, including
                  Sumatra, Java, Sulawesi and parts of Broneo and new Guinao
                </p>
                <button className="py-2 px-4 text-white bg-cyan-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className=" w-[100%]  mr-4 overflow-hidden rounded-lg  bg-slate-200 shadow-2xl h-[33rem]">
              <div>
                <img src={cardImg1} className="h-[] rounded-md " alt="img" />
                <h1 className="py-4 px-4 font-medium text-[21px] ">
                  Trips in Indonesia
                </h1>
                <p className="py-4 text-[14px] text-gray-800 px-4">
                  {" "}
                  Indonesia, officially the Republic of Indonesia, is a country
                  in Southeasy Asia and Oceania between the indian and the
                  pacific oceans. It consists of over 17,000 islands, including
                  Sumatra, Java, Sulawesi and parts of Broneo and new Guinao
                </p>
                <button className="py-2 px-4 text-white bg-cyan-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className=" w-[100%]  overflow-hidden rounded-lg  bg-slate-200 shadow-2xl h-[33rem]">
              <div>
                <img src={cardImg1} className="h-[]  rounded-md " alt="img" />
                <h1 className="py-4 px-4 font-medium text-[21px] ">
                  Trips in Indonesia
                </h1>
                <p className="py-4 text-[14px] text-gray-800 px-4">
                  {" "}
                  Indonesia, officially the Republic of Indonesia, is a country
                  in Southeasy Asia and Oceania between the indian and the
                  pacific oceans. It consists of over 17,000 islands, including
                  Sumatra, Java, Sulawesi and parts of Broneo and new Guinao
                </p>
                <button className="py-2 px-4 text-white bg-cyan-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecentTrips;

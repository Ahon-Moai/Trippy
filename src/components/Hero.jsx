import React from "react";
import heroImg from "../assets/12.jpg";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div
        className="h-screen   bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <Navbar />
       
      </div>
    </>
  );
}

export default Hero;

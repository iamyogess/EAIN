import Image from "next/image";
import React from "react";

const Hero = () => {
  const isHomePage =
    typeof window !== "undefined" && window.location.pathname === "/";

  return (
    <div
      className={`max-container max-w-2xl relative w-full h-screen flex items-center justify-center overflow-hidden ${
        isHomePage ? "home-page" : ""
      }`}
    >
      <Image
        className="w-full h-full object-cover"
        src="/library.jpg"
        alt="hero image"
        width={800}
        height={800}
      />

      <div className="absolute z-10 text-center text-white">
        <h1 className="bold-40 font-bold mb-4">
          FOR THIRD WORLD,
          <br />
          BY THIRD WORLDERS.
        </h1>
        <h6 className="regular-20 mb-6">For third world by third worlders</h6>
        <div>
          <input
            type="text"
            className="py-2 px-4 rounded-md mr-2"
            placeholder="Search"
          />
          <button className="p-2 rounded-md theme_color text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

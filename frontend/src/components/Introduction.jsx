import React from "react";
import Intro from "../dist/img/introImage.png";

const Introduction = () => {
  return (
    <div className="relative w-full flex z-2">
      <section className="w-full flex flex-col md:flex-row items-center justify-between p-4">
        <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start mb-6 md:mb-0">
          <span className="text-3xl md:text-4xl lg:text-6xl font-bold font-outfit text-center md:text-left">
            <span className="text-yellow-400">Hi, </span>
            <span className="block text-white tracking-wide">
              I'm Muhammad Ayaan Shaikh
            </span>
            <span className="block text-yellow-400 mt-5 font-semibold text-3xl md:text-4xl">
              Software Developer
            </span>
          </span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={Intro}
            className="h-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3"
            alt="Intro Image"
          />
        </div>
      </section>
    </div>
  );
};

export default Introduction;

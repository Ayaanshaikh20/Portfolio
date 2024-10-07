import React from "react";
import Intro from "../dist/img/introImage.png";

const Introduction = () => {
  return (
    <div className="relative w-full flex z-2">
      <section className="w-full flex flex-col md:flex-row items-center justify-between p-4">
        <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start mb-6 md:mb-0">
          <span className="text-3xl md:text-4xl lg:text-6xl font-bold font-outfit text-center md:text-left">
            <span className="text-yellow-400">Heyy, </span>
            <span className="block text-white tracking-wide">
              I'm Muhammad Ayaan Shaikh
            </span>
            <span className="block text-yellow-400 mt-5 font-semibold text-3xl md:text-4xl">
              Software Developer
            </span>
          </span>

          <p className="text-white font-outfit mt-6 mb-5 text-base md:text-lg text-left">
            I have 1.5+ years of development experience in fast-paced companies.
            I’ve worked on multiple projects that helped me grow my technical
            skills. My focus has been on staying up-to-date with new
            technologies and best practices. I am passionate about solving
            complex problems with simple solutions. Continuous learning and
            improvement is a priority for me in every role I take on.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={Intro}
            className="h-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3"
            alt="Intro Image"
            data-aos="fade-up"
            data-aos-duration="2500"
          />
        </div>
      </section>
    </div>
  );
};

export default Introduction;

import React, { useState } from "react";
import HTMLLogo from "../dist/img/html.png";
import CSSLogo from "../dist/img/css.png";
import JSLogo from "../dist/img/javascript.png";
import ReactLogo from "../dist/img/reactjs.png";
import NextJSLogo from "../dist/img/nextjs.png";
import NodeJSLogo from "../dist/img/nodejs.png";
import MongoDBLogo from "../dist/img/mongodb.png";
import TailwindLogo from "../dist/img/tailwindcss.png";
import ExpressLogo from "../dist/img/expressjs.png";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: HTMLLogo },
    { name: "CSS", logo: CSSLogo },
    { name: "JavaScript", logo: JSLogo },
    { name: "React", logo: ReactLogo },
    { name: "Next.js", logo: NextJSLogo },
    { name: "Node.js", logo: NodeJSLogo },
    { name: "MongoDB", logo: MongoDBLogo },
    { name: "Tailwind CSS", logo: TailwindLogo },
    { name: "Express.js", logo: ExpressLogo },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full py-10 mt-20 rounded-xl px-5 bg-opacity-10 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-95">
      <h2 className="text-center tracking-wider text-4xl md:text-6xl font-outfit font-bold text-yellow-400 mb-12">
        Skills
      </h2>

      {/* Large screens: Display grid */}
      <div className="w-full md:flex md:flex-wrap hidden md:justify-center gap-8 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group w-40 flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={skill.logo}
              className="h-16 w-16 mb-4 transform group-hover:scale-110 transition-transform duration-300"
              alt={skill.name}
            />
            <p className="text-lg font-medium font-outfit text-gray-800 group-hover:text-yellow-500">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Small screens: Custom Carousel */}
      <div className="md:hidden flex flex-col items-center relative">
        <div className="w-40 flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out">
          <img
            src={skills[currentIndex].logo}
            className="h-16 w-16 mb-4"
            alt={skills[currentIndex].name}
          />
          <p className="text-lg font-medium font-outfit text-gray-800">
            {skills[currentIndex].name}
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={handlePrev}
            className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

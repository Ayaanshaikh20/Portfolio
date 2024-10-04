import React from "react";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <section className="mt-10 w-full grid grid-cols-1 gap-4 py-5 sm:grid-cols-3">
      {/* Total Experience */}
      <div className="bg-gray-800 p-4 rounded-lg text-center transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400">
          <CountUp start={0} end={1.5} duration={3} decimals={1} />+
        </h2>
        <p className="text-base sm:text-lg text-white font-outfit">
          Years of Experience
        </p>
      </div>

      {/* Total Projects */}
      <div className="bg-gray-800 p-4 rounded-lg text-center transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400">
          <CountUp start={0} end={5} duration={3} />+
        </h2>
        <p className="text-base sm:text-lg text-white font-outfit">
          Projects Worked On
        </p>
      </div>

      {/* Total Known Technologies */}
      <div className="bg-gray-800 p-4 rounded-lg text-center transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400">
          <CountUp start={0} end={5} duration={3} />+
        </h2>
        <p className="text-base sm:text-lg text-white font-outfit">
          Known Technologies
        </p>
      </div>
    </section>
  );
};

export default Statistics;

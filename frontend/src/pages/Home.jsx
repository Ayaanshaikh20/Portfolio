import React from "react";
import ParticlesComponent from "../components/particles";
import Introduction from "../components/Introduction";
import Statistics from "../components/Statistics";
import Education from "../components/Education";

const Home = () => {
  return (
    <>
      <ParticlesComponent id="particles" />
      <div className=" z-10 max-w-screen-lg">
        {/*Introduction section*/}
        <Introduction />
        {/*Statistics section*/}
        <Statistics />
        {/*Education section*/}
        <Education />
      </div>
    </>
  );
};

export default Home;

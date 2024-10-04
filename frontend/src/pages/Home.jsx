import React from "react";
import ParticlesComponent from "../components/particles";
import Introduction from "../components/Introduction";
import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <>
      <ParticlesComponent id="particles" />
      <div className=" z-10 max-w-screen-lg">
        {/*Introduction section*/}
        <Introduction />
        {/*Statistics section*/}
        <Statistics />
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import ParticlesComponent from "../components/particles";
import Introduction from "../components/Introduction";
import Statistics from "../components/Statistics";
import Education from "../components/Education";
import Loader from "../components/Loader";
import Skills from "../components/Skills";

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // After 2 seconds, hide the loader
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <ParticlesComponent id="particles" />
          <div
            className=" z-10 max-w-screen-xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {/*Introduction section*/}
            <Introduction />
            {/*Statistics section*/}
            <Statistics />
            {/*Education section*/}
            <Education />
            {/*Skills section*/}
            <Skills />
          </div>
        </>
      )}
    </>
  );
};

export default Home;

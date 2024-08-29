import React, { useEffect } from "react";
import Router from "./config/Router";
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {
  
  useEffect(() => {
    // animation
    AOS.init();
  }, []);

  return (
    <>
      <Router />
    </>
  );
};

export default App;

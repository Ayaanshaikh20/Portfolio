import React, { useState, useEffect } from "react";
import Logo from "../dist/img/logo.webp";
import "../dist/css/loader.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <img src={Logo} alt="Logo" className="h-16 mb-4 rounded-full animate-bounce" />
          <h1 className="text-4xl font-bold font-outfit text-yellow-400 mb-4">Welcome</h1>
          <div className="loading-bar w-1/2 h-1 bg-white rounded-full">
            <div className="loading-progress h-full bg-yellow"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;

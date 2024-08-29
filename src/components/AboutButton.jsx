import React, { useState } from "react";
import "../dist/css/button.css";

const AboutButton = () => {
  const [state, setState] = useState("ameer");
  return (
    <>
      <div className="box-2">
        <div className="btn btn-two">
          <span className="maven-pro-text">
            <button className=" py-[5px] px-[8px]">Get in touch</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutButton;

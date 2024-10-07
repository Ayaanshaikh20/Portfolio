import React from "react";
import HTMLLogo from "../dist/img/html.png";
import CSSLogo from "../dist/img/css.png";
import JSLogo from "../dist/img/javascript.png";
import ReactLogo from "../dist/img/reactjs.png";
import NextJSLogo from "../dist/img/nextjs.png";
import NodeJSLogo from "../dist/img/nodejs.png";
import MongoDBLogo from "../dist/img/mongodb.png";
import TailwindLogo from "../dist/img/tailwindcss.png";

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
  ];

  return (
    <>
    <div className=" mt-5 w-full bg-black opacity-80 p-5">

    </div>
    </>
  );
};

export default Skills;

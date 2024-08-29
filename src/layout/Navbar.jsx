import React, { useEffect, useState } from "react";
import Profile from "../dist/img/profile_pic.jpg";
import AboutButton from "../components/AboutButton";
import "../dist/css/navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const controlNavbar = () => {
    let x = window.scrollY;
    if (x >= 0.00001) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          navbar ? "navbar active sticky top-0" : "navbar"
        } w-full rounded-b-3xl px-2 flex items-center justify-between h-full`}
      >
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="flex w-fit items-center justify-start p-4 px-5 ml-2"
        >
          <NavLink to={"/"}>
            <img
              alt=""
              src={Profile}
              className="inline-block h-16 w-16 rounded-full ring-2 ring-[#1d1d1d]"
            />
          </NavLink>
        </div>
        <div className=" gap-2 flex w-fit justify-start p-4 px-5 ml-2">
          <div className="gap-2">
            <a href="#" className="button">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="button">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="button">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#" className="button">
              <i className="fa fa-dribbble"></i>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className=""
          >
            <AboutButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

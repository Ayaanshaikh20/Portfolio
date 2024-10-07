import React, { useEffect, useState } from "react";
import Logo from "../dist/img/logo.webp";
import "../dist/css/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors text-white duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="mx-auto xl:px-10 flex items-center justify-between p-2">
        <span className="flex items-center w-full space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="rounded-full h-12" alt="Logo" />
        </span>

        {/* <div className="flex md:order-2 w-full justify-end">
          <button
            type="button"
            className="text-black font-outfit font-medium bg-white focus:ring-4 border border-white hover:bg-gray-100 rounded-full text-sm px-4 py-2"
          >
            Contact Me
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

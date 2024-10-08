import React, { useEffect, useState } from "react";
import Logo from "../dist/img/logo.webp";
import "../dist/css/navbar.css";
import InstagramLogo from "../dist/img/instagram.png";
import FacebookLogo from "../dist/img/facebook.png";
import LinkedinLogo from "../dist/img/linkedin.png";
import GithubLogo from "../dist/img/github.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const social = [
    {
      name: "github",
      logo: GithubLogo,
      link: "https://github.com/Ayaanshaikh20",
    },
    {
      name: "linkedin",
      logo: LinkedinLogo,
      link: "https://www.linkedin.com/in/muhammad-ayaan-shaikh/",
    },
    {
      name: "insta",
      logo: InstagramLogo,
      link: "https://www.instagram.com/ayaan_2203/",
    },
    {
      name: "facebook",
      logo: FacebookLogo,
      link: "https://www.facebook.com/profile.php?id=100004227799035",
    },
  ];

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
        scrolled ? "bg-slate-900" : "bg-transparent"
      }`}
    >
      <div className="mx-auto xl:px-10 flex items-center justify-between p-2">
        <span className="flex items-center w-full space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="rounded-full h-12" alt="Logo" />
        </span>

        <div className="flex w-full gap-1 justify-end">
          {/* <button
            type="button"
            className="text-black font-outfit font-medium bg-white focus:ring-4 border border-white hover:bg-gray-100 rounded-full text-sm px-4 py-2"
          >
            Contact Me
          </button> */}
          {social.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <img title={item.name} className="h-8 sm:h-12" src={item.logo} alt={item.name} />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

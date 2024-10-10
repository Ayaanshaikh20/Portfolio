import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className=" bg-[#000]">
      {/*Navbar section*/}
      <Navbar />
      <div className=" w-full px-10 pt-32 min-h-screen flex justify-center h-full">
        <Outlet />
      </div>
      {/*Footer section*/}
      <Footer />
    </div>
  );
};

export default Layout;

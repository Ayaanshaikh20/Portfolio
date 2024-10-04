import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  return (
    <div className=" bg-[#000]">
      <Navbar />
      <div className=" w-full px-10 pt-32 min-h-screen flex justify-center h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

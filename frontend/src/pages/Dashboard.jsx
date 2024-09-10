import React from "react";
import { Outlet } from "react-router";
import Navbar from "../layout/Navbar";
const Dashboard = () => {
  return (
    <div className=" bg-[#000] ">
      <Navbar />
      <div className=" w-full px-10 mt-8 py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

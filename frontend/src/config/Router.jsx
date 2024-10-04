import React from "react";
import { Routes, Route } from "react-router";
import { Home, Dashboard } from "../pages/common"

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Dashboard />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

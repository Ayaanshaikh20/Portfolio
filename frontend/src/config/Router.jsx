import React from "react";
import { Routes, Route } from "react-router";
import { Home, Layout } from "../pages/common"

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

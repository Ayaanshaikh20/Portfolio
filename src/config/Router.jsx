import React from "react";
import { Routes, Route } from "react-router";
import { Home, Contact, Dashboard } from "../pages/common"

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Dashboard />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact-me" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

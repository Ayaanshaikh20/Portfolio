import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../src/dist/css/input.css";
// import Scrollbar from "smooth-scrollbar";

// Scrollbar.init(document.querySelector("html"), {
//   damping: 0.2,
//   alwaysShowTracks: false,
  
// });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

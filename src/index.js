// Coding By : Mostafa Mohamed 
// Gmail : mosatfa346@gmail.com
// Github:MostafaShadow
// Number : 01090035204
// From : Egypt

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./components/App";

import { StateProvider } from "./components/StateProvider";
import reducer, { intialState } from "./reducer";
ReactDOM.render(
  <StateProvider intialState={intialState} reducer={reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>,

  document.getElementById("root")
);

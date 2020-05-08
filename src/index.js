import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyCom from "./components/MyCom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyCom />
  </React.StrictMode>,
  rootElement
);

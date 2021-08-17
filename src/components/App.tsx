import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import WebpackLogo from "./images/webpacklogo.svg";
import ReactLogo from "./images/reactlogo.png";
import ClickCounter from "./ClickCounter";

const App = () => {
  return (
    <div>
      <h1>good hello world(${process.env.NODE_ENV})</h1>
      <img src={WebpackLogo} alt="Webpack Logo" width="200" height="200" />
      <img src={ReactLogo} alt="React Logo" width="200" height="200" />
      <ClickCounter />
    </div>
  );
};

export default App;

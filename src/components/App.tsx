// import logo from "./logo.svg";
import "../sass/main.scss";
import React, { useState } from "react";
import Exercise from "./Exercise";
import { ReactComponent } from "*.svg";
// import ReactDom from 'react-dom'
// react router conditional rendering
//TODO: FIX THIS ISH -- add webpack and ts.config
const App = () => {
  return (
    <div className="App">
      <Exercise />
    </div>
  );
};

export default App;

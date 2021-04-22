// import logo from "./logo.svg";
import "../sass/main.scss";
import React, { useState } from "react";
import Exercise from "./Exercise";
// import ReactDom from 'react-dom'
// react router conditional rendering
function App() {
  return (
    <div className="App">
      <Exercise />
    </div>
  );
}

export default App;

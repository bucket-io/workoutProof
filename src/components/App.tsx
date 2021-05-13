/*
App.tsx -- entry point to the react app

- bootstrapping the app
- middleware
- <Provder /> pattern comnponents
- React Router paths


*/

// Aaron recommends a component library, which does not need global styles
// grommet.io, ant.design
import "../sass/main.scss";

import React from "react";
import Exercise from "./Exercise";

const App: React.FC = () => {
  return (
    <div className="App">
      <Exercise />
    </div>
  );
};

export default App;

// npm install --save typescript @types/node @types/react @types/react-dom @types/jest

import "./App.css";
import React from "react";
import Fetchtest from "./Upload";
import Signup from "./Signup";
import Signin from "./Signin";

function App() {
  return (
    <div className="App">
      <Signup />
      <Signin />
      <Fetchtest />
      <br />
    </div>
  );
}

export default App;

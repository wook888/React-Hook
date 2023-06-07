import React from "react";
import ReactDOM from "react-dom";
import { useClick } from "./useClick";

const App = () => {
  const handleClick = () => {
    console.log("Element clicked!");
  };

  const clickRef = useClick(handleClick);

  return (
    <div className="App">
      <div ref={clickRef}>Click me!</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

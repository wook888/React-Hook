import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useTitle } from "./useTitle";

const App = () => {
  const setTitle = useTitle("Loading...");

  useEffect(() => {
    setTimeout(() => {
      setTitle("New Title");
    }, 3000);
  }, []);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { useState } from "react";
import ReactDOM from "react-dom";

// useInput 훅 정의
const useInput = (initialValue, maxLength) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) {
      return;
    }
    setValue(newValue);
  };

  return {
    value,
    onChange,
  };
};

const App = () => {
  const maxLen = 10; // 적절한 maxLength 값으로 설정
  const name = useInput("Mr.", maxLen); // useInput 훅 사용

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

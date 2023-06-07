import React, { useState } from "react";
import ReactDOM from "react-dom";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 초기 인덱스 설정

  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => setCurrentIndex(index)}>
          {section.tab}
        </button>
      ))}
      <div>{content[currentIndex].content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

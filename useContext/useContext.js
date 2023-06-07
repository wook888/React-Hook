import React, { useContext } from "react";

// 컨텍스트 생성
const MyContext = React.createContext();

function MyComponent() {
  // 컨텍스트 사용
  const value = useContext(MyContext);

  return <div>{value}</div>;
}

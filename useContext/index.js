import React from "react";

const MyContext = React.createContext();

function MyComponent() {
  const value = React.useContext(MyContext);

  return <div>{value}</div>;
}

function App() {
  const contextValue = "Hello, Context!";

  return (
    <div>
      <h1>My App</h1>
      <MyContext.Provider value={contextValue}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;

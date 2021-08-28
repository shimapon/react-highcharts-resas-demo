import React from "react";
import Main from "./components/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <header style={{ textAlign: "center" }}>
        <h1>都道府県別人口推移</h1>
      </header>
      <Main />
    </div>
  );
};

export default App;

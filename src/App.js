import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20%" }}>
      <Tooltip position="top" text="Tooltip">
        <button className="hover-btn">Hover me</button>
      </Tooltip>
    </div>
  );
};

export default App;

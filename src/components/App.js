import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip,";
import Tooltip2 from "./Tooltip2";

const App = () => {
  const [text ,setText] = useState({text1 : false, text2 : false});
  function handle() {

  }

  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px",  height: "35vh" }}>


      <Tooltip text={<h2>This is a tooltip </h2>}>
        <h1 id="tooltip1">Hover over me</h1>
      </Tooltip>

      <Tooltip text={<span>This is another tooltip </span>}>
        <p id="tooltip2">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}
export default App
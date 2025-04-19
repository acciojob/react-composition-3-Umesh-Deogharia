import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const [text ,setText] = useState({text1 : false, text2 : false});
  function handle() {

  }

  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px",  height: "35vh" }}>


      <Tooltip text={<h2>This is a tooltip </h2>}>
        <h2 className="tooltip">Hover over me</h2>
      </Tooltip>

      <Tooltip text={<span>This is another tooltip </span>}>
        <p className="tooltip">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}
export default App
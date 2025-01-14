import React from "react";
import Background from "./components/Background.js";
import Output from "./components/Output.js";
import { useEffect ,useState } from "react";
function App() {
  return (
    <div className="body">
      <Background />
      <Output  />
    </div>
  );
}

export default App;

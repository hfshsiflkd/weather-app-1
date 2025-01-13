import React from "react";
import Background from "./components/Background.js";
function App() {
  return (
    <div className="body">
      <Background />
      <div className="flex h-screen">
        <div className="flex-1 bg-customWhite flex items-center justify-center">
          <p className="text-black">Цагаан хэсэг</p>
        </div>

        <div className="flex-1 bg-customDark flex items-center justify-center">
          <p className="text-white ">Хар хэсэг</p>
        </div>
      </div>
    </div>
  );
}

export default App;

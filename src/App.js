import React from "react";
import Background from "./conformation/Background.js";
function App() {
  return (
    <div className="body">
      <Background/>
      <div class="flex h-screen">
        <div class="flex-1 bg-customWhite flex items-center justify-center">
          <p class="text-black">Цагаан хэсэг</p>
        </div>

        <div class="flex-1 bg-customDark flex items-center justify-center">
          <p class="text-white">Хар хэсэг</p>
        </div>
      </div>
    </div>
  );
}

export default App;
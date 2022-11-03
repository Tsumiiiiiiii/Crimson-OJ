import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, LogInfo, SignIn, SignUp } from "./Components";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogInfo" element={<LogInfo />} />
        </Routes>

        <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>

       </BrowserRouter>
        
    );
}

export default App
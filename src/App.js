import { Box } from '@mui/material';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Mediacard, SignIn, SignUp } from "./Components";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
       </BrowserRouter>
        
    );
}

export default App
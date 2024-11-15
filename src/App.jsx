import React from "react";
import "./App.css";

import Home from "./page/Home";
import Temp from "./page/Temp";
import Temp2 from "./page/Temp2";

import { Box } from "./components/TempContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Temp" element={<Temp />} />
            <Route path="/Temp2" element={<Temp2 />} />
          </Routes>
        </div>
      </Box>
    </BrowserRouter>
  );
}

export default App;

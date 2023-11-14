import React from "react";
import ByStatus from "./Components/ByStatus/ByStatus";
import ByPriority from "./Components/ByPriority/ByPriority";
// import ByStatus from './Components/ByStatus/ByStatus';
import ByUser from "./Components/ByUser/ByUser";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<ByStatus />} />
            <Route path="/ByPriority" element={<ByPriority />} />
            <Route path="/ByUser" element={<ByUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import "./app.css"

import Topbar from "./components/topbar/Topbar";
import Income from "./Pages/income/Income";
import Login from "./Pages/login/Login";

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="container">
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/income" element={<Income/>}/>

        </Routes>
       
      </div>

    </div>
  );
}

export default App;

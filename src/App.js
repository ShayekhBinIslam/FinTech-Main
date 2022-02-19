import React from "react";
import "./app.css"
// import "react-datepicker/dist/react-datepicker.css";

import Topbar from "./components/topbar/Topbar";
import Income from "./Pages/income/Income";
import Login from "./Pages/login/Login";
import AddOneTimeincome from "./Pages/addincome/AddOneTimeincome";
import AddPeriodicincome from "./Pages/addincome/AddPeriodicincome";
import Editincome from "./Pages/editincome/Editincome";

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="fintech">
      <Topbar/>
      <div className="appcontainer">
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/income" element={<Income/>}/>
          <Route path="/income/add_one_time_income" element={<AddOneTimeincome/>}/>
          <Route path="/income/add_periodic_income" element={<AddPeriodicincome/>}/>
          <Route path="/income/editincome" element={<Editincome/>}/>

        </Routes>
       
      </div>

    </div>
  );
}

export default App;

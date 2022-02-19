import React from "react";
import "./app.css"
// import "react-datepicker/dist/react-datepicker.css";

import Topbar from "./components/topbar/Topbar";
import Income from "./Pages/income/Income";
import Login from "./Pages/login/Login";
import AddOneTimeincome from "./Pages/addincome/AddOneTimeincome";
import AddPeriodicincome from "./Pages/addincome/AddPeriodicincome";
import Editincome from "./Pages/editincome/Editincome";
import axios from 'axios';
import qs from 'qs';

import {
  Routes,
  Route
} from "react-router-dom";

// import {useEffct} from 'react';

function App() {
  fetch("/getcurrentmonthincome").then(res=> {
    if (res.ok) {
      return res.json();
    }
  }).then(jsonResponse => console.log(jsonResponse));

  // var data = new FormData();
  // data.append( "json", JSON.stringify( {"id": 1234} ) );
  
  fetch("/login", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({"id": 1234})
    // data: data
  }).then(function(res){ return res.json(); })
  .then(function(data){ JSON.stringify(data) });

  // axios
  //     .post('/login', qs.stringify({"id": 1234}))
  //     .then(() => console.log('Book Created'))
  //     .catch(err => {
  //       console.error(err);
  //     });
 



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

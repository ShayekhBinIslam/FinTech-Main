import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import qs from 'qs';

import "./signup.css";
import { useNavigate } from "react-router-dom";
const user = require('../../models/User');




async function sendlogin(){
  // const response = await axios.post(
  //   "http://localhost:5000/login",
  //   {
  //     params: {
  //       name: "tow",
  //       pass: "cox"
  //     }
  //   }
  // );

  // console.log(response.data);


  // (async () => {
  //   const rawResponse = await fetch('/login', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: {a: 1, b: 'Textual content'}
  //   });
  //   const content = await rawResponse.json();
  
  //   console.log(content);
  // })()



  const socket = new WebSocket('ws://localhost:3000');

    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log('Connected to WS Server')
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });

    //const sendMessage = () => {
        socket.send('Hello From Client1!');
    //}
}


export default function Loginform() {
  const initialValues = {username : "", email : "", password: ""};  
  const [formValues, setFromValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [ isSubmit, setIsSubmit] = useState(false);  

  const navigate = useNavigate();

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFromValues({ ...formValues, [name]: value });
  };   

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);

      // if(user.loginAuth(formValues.username, formValues.email, formValues.password)){
      sendlogin();

        if(Object.keys(formErrors).length === 0 && isSubmit){
          navigate("./income");
        }
      // }
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);    
    }
  }, [formErrors]);

  const validate = (values) => {
      const errors = {};
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!values.username){
          errors.username = "Username is required!";
      }
      if(!values.email){
        errors.email = "Email is required!";
      }
      else if(!regex.test(values.email)){
        errors.email = "This is not a valid email!";
      }
      if(!values.password){
        errors.password = "Pasword is required!";
      }
      else if(values.password.length < 4){
          errors.password = "Password must be more than 4 characters"
      }

      return errors;

  };


  return (

    <div className='logincontainer'>

      <form onSubmit={handleSubmit}>
          <h1>Log in</h1>
          <div className="uidivider"></div>
          <div className="uiform">
              
              <div className="field">
                  <label>Username</label>
                  <input className='inputform'
                    type="text" 
                    name="username" 
                    placeholder='Username' 
                    value={ formValues.username} 
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.username }</p>
              
              <div className="field">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder='Email' 
                    value={ formValues.email}
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.email }</p>

              <div className="field">
                  <label>Password</label>
                  <input 
                    type="password" 
                    name="password"
                    placeholder='Password' 
                    value={ formValues.password} 
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.password }</p>  

              <button className="button-33" role="button">
                  Submit
              </button>
          </div>
      </form>
    </div>
  );
}

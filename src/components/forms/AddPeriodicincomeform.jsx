import React from 'react';
import { useState, useEffect } from 'react';
import "./signup.css";
import { useNavigate } from "react-router-dom";


export default function AddPeriodicincomeform() {
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

      if(Object.keys(formErrors).length === 0 && isSubmit){
        navigate("./income");
      }
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


      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='successmsg'> Signed in successfully</div> 
          
      ) : (
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <pre></pre>
      )}      */}

      <form onSubmit={handleSubmit}>
          <h1>Add new Income</h1>
          <div className="uidivider"></div>
          <div className="uiform">
              
              <div className="field">
                  <label>Title</label>
                  <input 
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
                  Save Income
              </button>
          </div>
      </form>
    </div>
  );
}

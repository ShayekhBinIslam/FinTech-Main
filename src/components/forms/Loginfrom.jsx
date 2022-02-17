import React from 'react';
import { useState, useEffect } from 'react';
import "./signup.css";

export default function Loginform() {
  const initialValues = {username : "", email : "", password: ""};  
  const [formValues, setFromValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [ isSubmit, setIsSubmit] = useState(false);  

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFromValues({ ...formValues, [name]: value });
  };   

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
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
    <div className='container'>

      {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='successmsg'> Signed in successfully</div> 
          
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}     

      <form onSubmit={handleSubmit}>
          <h1>Log in Form</h1>
          <div className="uidivider"></div>
          <div className="uiform">
              
              <div className="field">
                  <label>Username</label>
                  <input 
                    type="text" 
                    name="username" 
                    placeholder='Username' 
                    value={ formValues.username} 
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.username }</p>
              
              <div className="Email">
                  <label>Username</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder='Email' 
                    value={ formValues.email}
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.email }</p>

              <div className="Password">
                  <label>Username</label>
                  <input 
                    type="password" 
                    name="password"
                    placeholder='Password' 
                    value={ formValues.password} 
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.password }</p>  

              <button className='buttonblue'>
                  Submit
              </button>
          </div>
      </form>
    </div>
  );
}

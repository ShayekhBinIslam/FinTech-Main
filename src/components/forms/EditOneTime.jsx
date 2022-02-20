import React from 'react';
import { useState, useEffect } from 'react';
import "./signup.css";
import { useNavigate } from "react-router-dom";

import { incomeList } from './JsonList';
 import { selectedId } from './list';


export default function EditOneTime() {
  const initialValues = {title : "", amount : "", shortdsc: ""};  
  const [formValues, setFromValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [ isSubmit, setIsSubmit] = useState(false);  

  for (var i=0; i < incomeList.length; i++) {
    console.log(incomeList[i]);
    if(selectedId==incomeList[i].id){
        initialValues.title = incomeList[i].title;
        initialValues.amount = incomeList[i].amount;
    }
   }

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
        navigate("./income/editincome");
      }
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);    
    }
  }, [formErrors]);

  const validate = (values) => {
      const errors = {};
      if(!values.title){
          errors.title = "title is required!";
      }
      if(!values.amount){
        errors.amount = "amount is required!";
      }
      else if(values.amount <= 0){
        errors.amount = "amount must be positive"
      }
      return errors;

  };


  return (

    <div className='logincontainer'>

      <form onSubmit={handleSubmit}>
          <h1>Edit One Time Income</h1>
          <div className="uidivider"></div>
          <div className="uiform">
              
              <div className="field">
                  <label>Title</label>
                  <input 
                    type="text" 
                    name="title" 
                    placeholder='Title' 
                    value={ formValues.title} 
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.title }</p>
              
              <div className="field">
                  <label>Amount</label>
                  <input 
                    type="text" 
                    name="amount" 
                    placeholder='Amount' 
                    value={ formValues.amount}
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.amount }</p>

              <div className="field">
                  <label>Short Describsion</label>
                  <input 
                    type="text" 
                    name="shortdsc"
                    placeholder='Shortdsc' 
                    value={ formValues.shortdsc} 
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.shortdsc }</p>  

              <button className="button-33" role="button">
                  Save Income
              </button>
          </div>
      </form>
    </div>
  );
}

import React from 'react';
import { useState, useEffect } from 'react';
import "./signup.css";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddPeriodicincomeform() {
  const initialValues = 
  {title : "", amount : "", period: "", start: "", end: "", shortdsc: ""};  
  const [formValues, setFromValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [ isSubmit, setIsSubmit] = useState(false);  

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const navigate = useNavigate();

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFromValues({ ...formValues, [name]: value });
  };   

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      
      if(startDate>=endDate){
        formErrors.end = "end date must be higher than start date"
      }

      setIsSubmit(true);

      if(Object.keys(formErrors).length === 0 && isSubmit){
        navigate("/income");
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
                  <label>Period</label>
                  <input 
                    type="text" 
                    name="period" 
                    placeholder='Period' 
                    value={ formValues.period}
                    onChange={handleChange}
                  />
              </div>
              <p>{ formErrors.period }</p>

              <div className='field'>
                  <label>Start Date</label>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              
              <div className='field'>
                  <label>End Date</label>
                  <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
              </div>
              <p>{ formErrors.end }</p>  

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

import React from 'react';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import "./income.css";
import Chart from '../../components/chart/Chart';
import Sidebar from '../../components/sidebar/Sidebar';
import Incometable from '../../components/table/Incometable';
import IncomeListTable from '../../components/table/IncomeListTable';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



export default function Income() {

  const [ isAdd, setIsAdd] = useState(false);  

  const navigate = useNavigate();

  const gotoAddincome = (e) => {
    e.preventDefault();
    if(isAdd===true){
      setIsAdd(false);
    }
    else{
      setIsAdd(true);
    }
      // navigate("./addincome");
  };

  const gotoAddincomeOneTime = (e) => {
    navigate("./add_one_time_income");
  };

  
  const gotoEditincomePeriodic = (e) => {
    navigate("./add_periodic_income");
  };


  const gotoEditincome = (e) => {
      navigate("./editincome");
  };
  


  return (
    <div className='incomeParent'>
      <div className='incomesidebar'>
        <Sidebar/>
      </div>
      <div className='income'>
        <Featuredinfo/>
        {/* <Chart/> */}
        <Incometable/>
      </div>
      <div className='incomelist'>
        <div className='buttonList'>
          {/* <span className='buttontitle'>Add New Income</span> */}
          <button className="button-33" role="button" onClick={gotoAddincome}> Add Income</button> 
          {isAdd ? (
            <div className='incomebuttons'> 
              <button className="button-29" role="button" onClick={gotoAddincomeOneTime}> One Time</button> 
              <button className="button-29" role="button" onClick={gotoEditincomePeriodic}> Periodic</button>
            </div> 
          
          ) : (
          <pre></pre>
           )}
          {/* <span className='buttontitle'>Modify Existing Incomes</span> */}
          <button className="button-33" role="button" onClick={gotoEditincome}> Edit Income List</button>
          
        </div>
        <IncomeListTable/>
      </div>
    </div>
  );
}

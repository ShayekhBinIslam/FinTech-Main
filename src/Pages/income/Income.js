import React from 'react';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import "./income.css";
import Chart from '../../components/chart/Chart';
import Sidebar from '../../components/sidebar/Sidebar';
import Incometable from '../../components/table/Incometable';
import IncomeListTable from '../../components/table/IncomeListTable';
import { useNavigate } from "react-router-dom";


export default function Income() {

  const navigate = useNavigate();

  const gotoAddincome = (e) => {
      navigate("./addincome");
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
        <Chart/>
        <Incometable/>
      </div>
      <div className='incomelist'>
        <div className='incomebuttons'>
          <button className="button-33" role="button" onClick={gotoAddincome}> Add Income</button> 
          <button className="button-33" role="button" onClick={gotoEditincome}> Edit Income List</button>
        </div>
        <IncomeListTable/>
      </div>
    </div>
  );
}

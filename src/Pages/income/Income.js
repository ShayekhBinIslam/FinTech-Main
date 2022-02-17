import React from 'react';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import "./income.css";
import Chart from '../../components/chart/Chart';
import Sidebar from '../../components/sidebar/Sidebar';
import Incometable from '../../components/table/Incometable';
import IncomeListTable from '../../components/table/IncomeListTable';

export default function Income() {
  return (
    <div className='incomeParent'>
      <Sidebar/>
      <div className='income'>
        <Featuredinfo/>
        <Chart/>
        <Incometable/>
      </div>
      <div className='incomelist'>
        <IncomeListTable/>
      </div>
    </div>
  );
}

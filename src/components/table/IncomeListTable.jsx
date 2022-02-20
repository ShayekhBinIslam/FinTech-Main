import React from 'react';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import { incomeList } from '../../components/forms/JsonList';
import { Table } from 'react-bootstrap';
import './incometable.css';

import { useNavigate } from "react-router-dom";

import { tableitems } from '../../components/chart/Chart'

var thisyear = 2022;
var thismonth = 2;

export default function IncomeListTable() {
  const products = [];

  for(var i=0; i<tableitems.length; i++){
    if(tableitems[i].year==thisyear && tableitems[i].month==thismonth){
      products[i].title = incomeList[i].title;
      products[i].amount = incomeList[i].amount;
      products[i].period = incomeList[i].period;
    }
  }

  // const products = incomeList;

  const navigate = useNavigate();

  const gotoEditincome = (e) => {
    navigate("./editincome");
  };

  return (
    // <div style={{ height: 300, width: '100%' }}>
    //   <DataGrid rows={rows} columns={columns} />
    // </div>
    <div className='incometable'>
          <div className='incometitlebutton'>
            <h3>Income List</h3>
            <button className="button-33" role="button" onClick={gotoEditincome}> Edit</button>
          </div>
          

          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Period</th>
                {/* <th>End Date</th> */}
                {/* <th>Status</th> */}
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.amount}</td>
                  <td>{product.period}</td>
                  {/* <td>{product.end}</td> */}
                  {/* <td>{product.status}</td> */}
                  {/* <td><Button variant="info" onClick={() => this.props.editProduct(product.id)}>Edit</Button></td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
  );
}

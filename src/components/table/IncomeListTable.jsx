import React from 'react';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import { incomeList } from '../../components/forms/JsonList';
import { Table } from 'react-bootstrap';
import './incometable.css';

import { useNavigate } from "react-router-dom";


const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Title', width: 150 },
  { field: 'col2', headerName: 'Amount', width: 150 }
];


export default function IncomeListTable() {
  const products = incomeList;

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

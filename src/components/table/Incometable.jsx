import React from 'react';

import { incomeList } from '../../components/forms/JsonList';
import { Table } from 'react-bootstrap';

import './incometable.css';

import { charttablelabel, charttablevalue } from '../../components/chart/Chart'

export default function Incometable() {
  
  const products = [];
  var avg = 0;

  for(var i=0; i<charttablevalue.length; i++){
    avg+=charttablevalue[i];
  }

  avg = avg/charttablevalue.length;

  for(var i=0; i<charttablelabel.length; i++){
    products[i].title = charttablelabel[i];
    products[i].amount = charttablevalue[i];
    if(charttablevalue[i]<avg){
      products[i].period = "low";
    }
    else if(charttablevalue[i]===avg){
      products[i].period = "ok";
    }
    else products[i].period = "high";
  }

  return (
    <div className='incometable'>
          <h3>Income List</h3>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>compare to Avg</th>
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

import React from 'react';

import { incomeList } from '../../components/forms/JsonList';
import { Table } from 'react-bootstrap';

import './incometable.css';



export default function Incometable() {
  const products = incomeList;

  return (
    <div className='incometable'>
          <h3>Income List</h3>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Avg</th>
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

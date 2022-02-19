
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { incomeList } from './JsonList';

import '../../components/forms/editincome.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: incomeList
    }
  }

  componentDidMount() {
    this.state.products = incomeList;
  }

  render() {
    const { error, products} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div className='incometable'>
          <h2>Income List</h2>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Period</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.amount}</td>
                  <td>{product.period}</td>
                  <td>{product.end}</td>
                  <td>{product.status}</td>
                  <td><Button variant="info" onClick={() => this.props.editProduct(product.id)}>Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default List;

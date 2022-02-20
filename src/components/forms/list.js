
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { incomeList } from './JsonList';
import '../../components/forms/editincome.css';
import { useNavigate } from "react-router-dom";


export var selectedId = 1;


export default function List() {


  // const initialValues = {id : "", title : "", amount: "", period:"", status:""};  
  // const [formValues, setFromValues] = useState(initialValues);

  const products = incomeList;

  const navigate = useNavigate();

   function handle(product){
          selectedId = product.id;
          console.log(selectedId);
           if(product.period>0){
            navigate("./edit_periodic_income");
          }
          else{
            navigate("./edit_one_time_income");
          }
    }


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
                  <td><Button 
                    
                    onClick={()=>handle(product)}
                    
                    >Edit</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
}


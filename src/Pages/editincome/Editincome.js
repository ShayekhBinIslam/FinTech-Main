
import React, { Component } from 'react';
import '../../components/forms/editincome.css';
import { Container, Button, Alert } from 'react-bootstrap';
import List from '../../components/forms/list';

class Editincome extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
          <List/>
      </div>
    );
  }
}

export default Editincome;


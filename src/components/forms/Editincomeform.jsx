
import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Editincomeform extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: '',
      title: '',
      amount: '',
      period: '',
      end: '',
      status: ''
    }

    if(props.product){
      this.state = props.product
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {

    let pageTitle;
    if(this.state.id) {
      pageTitle = <h2>Edit Product</h2>
    } else {
      pageTitle = <h2>Add Product</h2>
    }

    return(
      <div >
        {pageTitle}
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Title"/>
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="text"
                  name="amount"
                  value={this.state.amount}
                  onChange={this.handleChange}
                  placeholder="Amount" />
              </Form.Group>
              <Form.Group controlId="period">
                <Form.Label>Period</Form.Label>
                <Form.Control
                  type="text"
                  name="period"
                  value={this.state.period}
                  onChange={this.handleChange}
                  placeholder="Period" />
              </Form.Group>
              <Form.Group controlId="period">
                <Form.Label>End Date</Form.Label>
                <DatePicker 
                  selected={this.state.end} 
                  onChange={(date) => this.state.end = (date)} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="hidden" name="id" value={this.state.id} />
                <Button variant="success" type="submit">Save</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Editincomeform;

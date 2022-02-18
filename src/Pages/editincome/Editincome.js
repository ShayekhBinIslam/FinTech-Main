
import React, { Component } from 'react';
import '../../components/forms/editincome.css';
import { Container, Button, Alert } from 'react-bootstrap';
import List from '../../components/forms/list';
import EditProduct from '../../components/forms/Editincomeform';

class Editincome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      response: {},
      product: {},
      isEditProduct: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isEditProduct: false });
  }

  onFormSubmit(data) {
    // let apiUrl;

    // if(this.state.isEditProduct){
    //   apiUrl = 'http://localhost/dev/tcxapp/reactapi/editProduct';
    // } else {
    //   apiUrl = 'http://localhost/dev/tcxapp/reactapi/createProduct';
    // }

    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   myHeaders
    // };

    // fetch(apiUrl, options)
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       response: result,
    //       isEditProduct: false
    //     })
    //   },
    //   (error) => {
    //     this.setState({ error });
    //   }
    // )
  }

  editProduct = productId => {

    // const apiUrl = 'http://localhost/dev/tcxapp/reactapi/getProduct';
    const formData = new FormData();
    formData.append('productId', productId);

    const options = {
      method: 'POST',
      body: formData
    }

    // fetch(apiUrl, options)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         product: result,
    //         isEditProduct: true,
    //       });
    //     },
    //     (error) => {
    //       this.setState({ error });
    //     }
    //   )

    this.state.isEditProduct = true;
  }

  render() {

    let productForm;
    if(this.state.isEditProduct) {
      productForm = <EditProduct onFormSubmit={this.onFormSubmit} product={this.state.product} />
    }

    return (
      <div className="App">
        <Container>
          {/* <h1 style={{textAlign:'center'}}>Income List</h1> */}
          {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
          {!this.state.isEditProduct && <List editProduct={this.state.product}/>}
          { productForm }
          {this.state.error && <div>Error: {this.state.error.message}</div>}
        </Container>
      </div>
    );
  }
}

export default Editincome;


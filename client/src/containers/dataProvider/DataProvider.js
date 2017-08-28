import React, {Component} from 'react';
import Layout from '../../Layout'
import {Products, ProductSearch} from '../../components'
import $ from 'jquery'

import faker from 'faker';

class DataProvider extends Component {

  state = {
    quantitySelected: 1,
    product: {},
    products: [],
    cart: [],
    user: [],
    isDataLoaded: true

  }

submitProduct = (event) => {
  event.preventDefault()
   $.ajax({
     url: '/api/products',
     method: 'POST',
     data: this.state.product
   }).done((response) => {

     const newProducts = this.state.products
     newProducts.push(response.data)
     this.setState({products: newProducts})
   }
   )
  console.log(this.state.product)
}

addItem = (product) => {
  const tempCart = this.state.cart;
  tempCart.push(product);
  this.setState({cart: tempCart});
    // alert(`${product.productName} was added to your cart`)
}

emptyCart = () => {
  const cartItems = this.state.cart;
  cartItems.splice(0,cartItems.length);
  this.setState({cart: cartItems});
}

onChange = (type, value) => {
  const newProduct = this.state.product
  newProduct[type] = value
  this.setState({product: newProduct})
  console.log(this.state.product)
}

onQuantityChanged = (event) => this.setState({quantitySelected: event.target.value})

componentDidMount(){
  $.ajax({
    url: 'api/products',
    method: 'GET',
  }).done((response) => {
    console.log(response)
    this.setState({products: response.data})
  })
  this.createUser();
}

createUser = () => {
  const user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
  }
  this.setState({user: user});
}
  render(){
    let totalPrice = 0;

    for(let i=0; i< this.state.cart.length; i++) {
      totalPrice += parseFloat(this.state.cart[i].price);
    }

    return (
      <div className="">
        {
          this.state.isDataLoaded ?
          <Layout
            products={this.state.products}
            emptyCart={this.emptyCart}
            addItem={this.addItem}
            cart={this.state.cart}
            totalPrice={totalPrice.toFixed(2)}
            user={this.state.user}
            onChange={this.onChange}
            onQuantityChanged= {this.onQuantityChanged}
            submitProduct={this.submitProduct}
            />
            : <h3>Data is being loaded</h3>
        }
      </div>
    )
  }
}

export default DataProvider;

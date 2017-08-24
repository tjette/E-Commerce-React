import React, {Component} from 'react';
import Layout from '../../Layout'
import {Products, ProductSearch} from '../../components'

import faker from 'faker';

class DataProvider extends Component {

  state = {
    productName: undefined,
    img: undefined,
    price: undefined,
    description: undefined,
    product: {
      name: undefined,
      price: undefined,
      image: undefined
    },
    cart: [],
    user: [],
    isDataLoaded: true

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

componentDidMount(){
  this.getProducts();
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

getProducts = () => {
  const productsArray = [];
  for(var i=0; i<20; i++) {
    productsArray.push({
      productName: faker.commerce.productName(),
      img: faker.random.image(),
      price: faker.commerce.price(),
      description: faker.lorem.sentence()
    })
  }
  setTimeout(() => {
    this.setState({products: productsArray})
  }, 3000)
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
            />
            : <h3>Data is being loaded</h3>
        }
      </div>
    )
  }
}

export default DataProvider;

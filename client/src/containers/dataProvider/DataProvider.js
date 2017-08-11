import React from 'react';
import Layout from '../../Layout'
import {Products, ProductSearch} from '../../components'

import faker from 'faker';

const categoryData = ['Outdoor', 'Technology', 'Books', 'Clothing'];

class DataProvider extends React.Component {

  state = {
    productName: undefined,
    img: undefined,
    price: undefined,
    description: undefined,
    products: [],
    categories: undefined,
    cart: [],
    user: [],
    isDataLoaded: true

  }

  // buyProduct= this.buyProduct.bind(this);

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

onCategorySelected = (event) => this.setState({selectedCategory: event.target.value})

componentDidMount(){
  this.getProducts();
  this.getCategories();
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

getCategories =() => {
  this.setState({categories: categoryData});
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
            />
            : <h3>Data is being loaded</h3>
        }
      </div>
    )
  }
}

export default DataProvider;

// {
//   this.state.categories
//   ? <ProductSearch onCategorySelected={this.onCategorySelected}
//                categories={this.state.categories}
// /> :
// <h3>Loading Categories</h3>
// }
//
// {
//
//   this.state.products
//   ? <Products products={this.state.products}
//               addItem = {this.addToCart}
//               cart = {this.state.cart}
//   />
//   :
//   <div>
//     <i className="fa fa-refresh fa-spin fa-3x fa-fw loadingProducts"></i><h3 className="loadingProducts">Loading Products ...</h3>
//   </div>
//
// }

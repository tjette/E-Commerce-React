import React from 'react';
import Layout from '../../Layout'
import {Products, ProductSearch} from '../../components'

import faker from 'faker';

const categoryData = ['Outdoor', 'Technology', 'Books', 'Clothing'];

class ProductsContainer extends React.Component {

  state = {
    productName: undefined,
    img: undefined,
    price: undefined,
    description: undefined,
    products: [],
    categories: undefined,
    cart: []
  }

  // buyProduct= this.buyProduct.bind(this);

  addItem = (product) => {
    const tempCart = this.state.cart;
    tempCart.push(product);
    this.setState({cart: tempCart});
    alert(`${product.productName} was added to your cart`)

  }

  emptyCart = () => {
    const cartItems = this.state.cart;
    cartItems.splice(0,cartItems.length);
    this.setState({cart: cartItems});
    console.log(cartItems, cartItems.length);
  }




  onCategorySelected = (event) => this.setState({selectedCategory: event.target.value})

  componentDidMount(){
    this.getProducts();
    this.getCategories();
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
    return (
      <div className="">
            <Layout products={this.state.products} emptyCart={this.emptyCart} addItem={this.addItem} cart={this.state.cart}/>

      </div>
    )
  }
}

export default ProductsContainer;

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

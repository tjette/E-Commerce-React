import React from 'react';
import {Products} from '../../components'
import faker from 'faker';
class ProductsContainer extends React.Component {

  state = {
    productName: undefined,
    price: undefined,
    description: undefined,
    products: undefined
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = () => {
    const productsArray = [];

    for(var i=0; i<20; i++) {
      productsArray.push({
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.lorem.sentence(),
      })
    }
    this.setState({products:productsArray})
  }
  render(){
    return (
      <div>
      {
        this.state.products
        ? <Products productsData={this.state.products}  />
        : <h1>Products being loaded</h1>
      }

      </div>
    )
  }
}

export default ProductsContainer;

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
    setTimeout(() => {

    this.setState({products: productsArray})
  }, 3000)

  }
  render(){
    return (
      <div>
      {

        this.state.products
        ? <Products productsData={this.state.products}  />
        :
        <div>

        <i className="fa fa-refresh fa-spin fa-3x fa-fw loadingProducts"></i><h3 className="loadingProducts">Loading Products ...</h3>

        </div>
      }

      </div>
    )
  }
}

export default ProductsContainer;

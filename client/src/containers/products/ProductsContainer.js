import React from 'react';
import {Products, ProductSearch} from '../../components'

import faker from 'faker';

const categoryData = ['Outdoor', 'Technology', 'Books', 'Clothing'];

class ProductsContainer extends React.Component {

  state = {
    productName: undefined,
    img: undefined,
    price: undefined,
    description: undefined,
    products: undefined,
    buy: undefined,
    categories: undefined
  }

  buyProduct= (productId) => {
    this.setState({buy: productId})
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
        img: faker.image.technics(),
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
      {
        this.state.categories
        ? <ProductSearch onCategorySelected={this.onCategorySelected}
                     categories={this.state.categories}
      /> :
      <h3>Loading Categories</h3>
      }

      {

        this.state.products
        ? <Products productsData={this.state.products}/>
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

import React from 'react';
import {Products} from '../../components'

class ProductsContainer extends React.Component {

  state = {
    title: undefined,
    name: undefined,
    price: undefined,
    quantity: undefined,
    description: undefined
  }

  componentDidMount(){
    this.getTitle();
  }

  getTitle = () => {
    this.setState({title: "Products Catalog" })
  }
  render(){
    return (
      <div>
      <Products title={this.state.title}  />
      </div>
    )
  }
}

export default ProductsContainer;

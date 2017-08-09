import React from 'react';
import {Shop} from '../../components';
import {Products} from '../../components';
import {ProductsContainer} from '../../containers'

class ShopContainer extends React.Component {

  state = {
    title: undefined
  }

  componentDidMount(){
    this.setTitle();
  }

  setTitle = () => {
    setTimeout(() => {
        this.setState({title: "Ready For Shopping!" })
    }, 3000)

  }

  render() {
    return (
      <div>
        {
          this.state.title
          ? <Shop title={this.state.title} />
          : <h1>No state from the shop container</h1>
        }

        {
          <div>
          this.state.products
          ? <Products productsData={this.state.products}  />
            <ProductsContainer />


          :
          <div>
            <i className="fa fa-refresh fa-spin fa-3x fa-fw loadingProducts"></i><h3 className="loadingProducts">Loading Products ...</h3>
          </div>
          </div>

        }

      </div>
    )
  }
}

export default ShopContainer;

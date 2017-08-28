import React, {Component} from 'react';
import {SubmitProduct} from '../../components'

class SubmitProductContainer extends Component {
  render() {
    return (
      <div>
        <SubmitProduct onChange={this.props.onChange} submitProduct={this.props.submitProduct} products={this.props.products} editProduct={this.props.editProduct} />
      </div>

    )
  }
}

export default SubmitProductContainer

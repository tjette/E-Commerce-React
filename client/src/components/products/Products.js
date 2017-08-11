import React from 'react';
import ProductTile from './ProductTile';

const Products = (props) => {
  console.log(props.products);
  return (
    <div>
    <div className="productHeaderDiv">
      <h1 className="productHeader">Products</h1>
    </div>
    <div className="productsContainer">
    {
      props.products.map((product) =>
          <div className="productsCard">
            <ProductTile product={product} addItem={props.addItem} />
          </div>

      )
    }
    </div>
    </div>
  )
}

export default Products;

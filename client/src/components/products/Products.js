import React from 'react';
import ProductTile from './ProductTile';

const Products = (props) => {
  console.log(props.products);
  return (
    <div className="productsContainer">
    {
      props.products.map((product) =>
          <div className="productsCard">
            <ProductTile product={product} addItem={props.addItem} />
          </div>

      )
    }
    </div>
  )
}

export default Products;

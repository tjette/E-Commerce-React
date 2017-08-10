import React from 'react';

const ProductTile = (props) => {

  const product = props.product;
  return (
    <div className="">
      <div className="">
        <h3 className="productItem productName">Product: {product.productName}</h3>
        <img className="productImage" src={product.img} />
        <p className="productItem price"> Price: {product.price}</p>
        <p className="productItem description"> Description: {product.description} </p>
        <button className="productItem btn btn-default" onClick={() => props.addItem(product)}>Add Item</button>
      </div>
        <div className="well">
          <span className="rating"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>

    </div>
  )
}
 export default ProductTile;

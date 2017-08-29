import React from 'react';

const ProductTile = (props) => {
console.log(props);

  const product = props.product;
  return (
    <div className="">
      <div className="">
        <h3 className="productItem productName">{product.name}</h3>
        <img className="product Item productImage" src={product.im} />
        <p className="productItem price"> Price: {product.price} </p>
        <p className="productItem description"> Description: {product.description} </p>
        <div><button className="productItem btn btn-default" onClick={() => props.addItem(product)}>Add Item</button></div>
      </div>
      <div>
        <select onChange={props.onQuantityChanged}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>

        </select>
      </div>
    </div>
  )
}
 export default ProductTile;

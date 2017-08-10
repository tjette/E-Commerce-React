import React from 'react';

const CartTile = (props) => {
  const item = props.item;
  return (
    <div>
      <h3>Product Name: {item.productName}</h3>
      <h3>Price: {item.price}</h3>
    </div>

  )
}

export default CartTile;

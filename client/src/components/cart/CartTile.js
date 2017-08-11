import React from 'react';

const CartTile = (props) => {
  const item = props.item;
  return (
    <div className="cartItem">
      <h3 className="cartProduct">Product Name: {item.productName}</h3>
      <h3 className="cartPrice">Price: {item.price}</h3>
      <img className="cartImage" src={item.img} />
    </div>

  )
}

export default CartTile;

import React from 'react';

const CartTile = (props) => {
  const item = props.item;
  console.log(props);
  return (
    <div className="cartItem">
      <p>{props.index + 1}</p>
      <h3 className="cartProduct">{item.productName}</h3>
      <img className="cartImage" src={item.img} />
      <h3 className="cartPrice">${item.price}</h3>

    </div>

  )
}

export default CartTile;

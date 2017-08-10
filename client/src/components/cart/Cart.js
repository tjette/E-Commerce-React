import React from 'react';
import CartTile from './CartTile';

const Cart = (props) => {
  return(
    <div>
    <h1>CART</h1>
    <h3>${props.totalPrice}</h3>
    <div>
    {

      props.cart.map((item, index) => <CartTile item={item} key={index}  />)

    }

    </div>
    </div>

  )
}

export default Cart;

// <div className="productsContainer">
// {
//   props.products.map((product) =>
//       <div className="productsCard">
//         <ProductTile product={product} addItem={props.addItem} />
//       </div>
//
//   )
// }
// </div>

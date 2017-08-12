import React from 'react';
import CartTile from './CartTile';

const Cart = (props) => {
  return(
    <div className="">
    {
      props.cartCount > 0 ?
        <div>
        <h1 className="cartHeader">CART</h1>
        <h3 className="cartTotalPrice">Total: ${props.totalPrice}</h3>
        </div>
        :
        <div>
        <h1 className="cartEmpty"> CART IS EMPTY</h1>
        </div>
    }
    <div><button className="cartEmpty" onClick={() => props.emptyCart(props.cartCount) }>Empty Cart</button></div>
    <div className="cartContainer">
    {

      props.cart.map((item, index) => <CartTile item={item} index={index} />)

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

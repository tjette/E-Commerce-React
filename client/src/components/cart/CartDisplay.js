import React from 'react';

const CartDisplay = (props) => {
  return(
    <div>
    <h1>CART</h1>
    {

      props.cart.map((item) =>
        <div>

          <h3>Product Name: {item.productName}</h3>
          <h3>Price: {item.price}</h3>
        </div>

      )
    }
    </div>

  )
}

export default CartDisplay;

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

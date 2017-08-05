import React from 'react';

const Products = (props) => {
  return(
    <div>
        {
          props.productsData.map((product) => {
            return(
              <div className="productsCard">
                <h3>{product.productName}</h3>
                <p> {product.price}</p>
                <p> {product.description} </p>
              </div>
            )
          })
        }
    </div>
  )
}

export default Products;

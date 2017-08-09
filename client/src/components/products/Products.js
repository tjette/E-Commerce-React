import React from 'react';

const Products = (props) => {

  return(
    <div className="productsContainer">
        {
          props.productsData.map((product) => {
            return(
              <div className="productsCard">
                <h3>Product: {product.productName}</h3>
                <img className="productImage" src={product.img} />
                <p> Price: {product.price}</p>
                <p> Description: {product.description} </p>
                <button className="btn btn-default">Buy</button>

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
          })
        }
    </div>
  )
}

export default Products;

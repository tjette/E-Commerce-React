import React from 'react'
import EditProduct from '../editProduct/EditProduct'
const SubmitProduct = (props) => {
  return (
    <div className="">
      {
        props.products.map((product) =>
          <EditProduct product={product} editProduct={props.editProduct} />
        )
      }
    </div>
  )
}

export default SubmitProduct;

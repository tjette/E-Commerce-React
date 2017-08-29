import React from 'react'
import EditProduct from '../editProduct/EditProduct'
const SubmitProduct = (props) => {
  return (
    <div className="">
    <div className="">
     <form className="submitProduct" onSubmit={props.submitProduct} >
       <label>Product Name</label>
       <input type="text" onChange={(event) => props.onChange('name', event.target.value) }/>
       <label>Product Price</label>
       <input type="number" onChange={(event) => props.onChange('price', event.target.value) }/>
       <label>Image</label>
       <input type="text" onChange={(event) => props.onChange('image', event.target.value) }/>
       <button className="submitProductButton" type="submit">Submit Product</button>

     </form>
     </div>
      {
        props.products.map((product) =>
          <EditProduct product={product} editProduct={props.editProduct} />
        )
      }
    </div>
  )
}

export default SubmitProduct;

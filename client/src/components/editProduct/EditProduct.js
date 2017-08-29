import React from 'react'

const EditProduct = (props) => {
  return (
    <div className="">
        <form className="submitProduct">
          <label>Product Name</label>
          <input type="text" defaultValue={props.product.name}/>
          <label>Product Price</label>
          <input type="number" defaultValue={props.product.price}/>
          <label>Image</label>
          <input type="text" defaultValue={props.product.image}/>
          <button className="editProduct" onClick={(event) => props.editProduct(event, props.product._id)} type="submit">Edit Product</button>
        </form>
    </div>
  )
}

export default EditProduct

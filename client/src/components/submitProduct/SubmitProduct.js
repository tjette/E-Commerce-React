import React from 'react'
import ProductTile from '../products/ProductTile'
const SubmitProduct = (props) => {
  return (
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
      <div className="productsContainer">
      {
        props.products.map((product) =>
            <div className="productsCard">
              <ProductTile product={product} addItem={props.addItem} onQuantityChanged={props.onQuantityChanged} />
            </div>

        )
      }
      </div>

    </div>

  )
}

export default SubmitProduct;

import React from 'react'

const SubmitProduct = (props) => {
  return (
    <div className="">
      <form>
        <label>Product Name</label>
        <input type="text" onChange={(event) => props.onChange('name', event.target.value) }/>
        <label>Product Price</label>
        <input type="number" onChange={(event) => props.onChange('price', event.target.value) }/>
        <label>Image</label>
        <input type="text" onChange={(event) => props.onChange('image', event.target.value) }/>
      </form>

    </div>

  )
}

export default SubmitProduct;

import React from 'react';

const ProductSearch = (props) => {
  return(
    <div>
      <h3>Product Search</h3><input name="search"/>
      <select onChange={props.onCategorySelected}>
        <option value="none">Select Category</option>
          {
            props.categories.map((cat)=> {
              return(
                <option value={cat}>{cat}</option>
              )
            })
          }
      </select>
    </div>
  )
}

export default ProductSearch;

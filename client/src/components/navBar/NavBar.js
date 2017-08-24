import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
  active: {
    backgroundColor: "#114B51"
  },
  inActive: {
    backgroundColor: "blue"
  }
}

const NavBar = (props) => {
  const inActive = true;
  return (
    <div>

      <nav className="nav" style={inActive ? styles.active : styles.inActive}>
      <ul className="navBar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-about-page">About</Link></li>
        <li><Link to="products">Products</Link></li>
        <li><Link to="/submitProduct">Submit Product</Link></li>
        <li><Link className="cartCountLi" to="cart">Cart</Link>{props.cartCount}</li>
        <li><p className="navTotalPrice"> Total: {props.totalPrice} </p> </li>
        <li><Link to="profile">Profile</Link></li>
      </ul>
      <div><button type="button" className="btn btn-primary emptyCart pull-right" onClick={() => props.emptyCart(props.cartCount) }>Empty Cart</button></div>
      </nav>

    </div>
  )
}

export default NavBar;

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
        <li><Link to="/my-shop-page">Shop</Link></li>
        <li><Link to="products">Products</Link></li>
        <li><h1> {props.cartCount} </h1> </li>
      </ul>
      <div><button className="emptyCart pull-right" onClick={() => props.emptyCart(props.cartCount) }>Empty Cart</button></div>
      </nav>

    </div>
  )
}

export default NavBar;

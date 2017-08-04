import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
  active: {
    backgroundColor: "red"
  },
  inActive: {
    backgroundColor: "blue"
  }
}

const NavBar = () => {
  const inActive = true;
  return (
    <div>

      <nav style={inActive ? styles.active : styles.inActive}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-about-page">About</Link></li>
        <li><Link to="/my-shop-page">Shop</Link></li>
        <li><Link to="products">Products</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;

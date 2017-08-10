import React, { Component } from 'react';
import './App.css';
import {NavBar} from './components';
import {HomeContainer, AboutContainer} from './containers'
import {Products, Cart, Profile} from './components';
import {Route, Switch} from 'react-router-dom'



const Layout = (props) => {

    return (

      <div>
        <NavBar emptyCart={props.emptyCart} cartCount={props.cart.length} totalPrice={props.totalPrice}/>
          <div>
              <Switch>
              <Route exact path="/" component={HomeContainer}/>
              <Route path ='/my-about-page' component={AboutContainer}/>
              <Route
                path='/products'
                render={() =>
                <Products
                  products={props.products}
                  addItem={props.addItem} />}/>
              <Route
                path="/cart"
                render={() =>
                <Cart
                  cart={props.cart}
                  totalPrice={props.totalPrice}/>}/>
                <Route
                path="/profile"
                render={() =>
                <Profile
                  user={props.user}
                />}
                />

              </Switch>
            </div>


      </div>
    );
  }

export default Layout;

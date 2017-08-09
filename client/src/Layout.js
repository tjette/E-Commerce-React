import React, { Component } from 'react';
import './App.css';
import {NavBar} from './components';
import {HomeContainer, AboutContainer, ShopContainer} from './containers'
import Products from './components/products/Products';
import {Route, Switch} from 'react-router-dom'



class Layout extends Component {

  render() {
    console.log(this.props.cart);
    return (

      <div>
        <NavBar cartCount = {this.props.cart.length}/>

              <div>
              <Switch>
              <Route exact path="/" component={HomeContainer}/>
              <Route path ='/my-about-page' component={AboutContainer}/>
              <Route path="/my-shop-page" component={ShopContainer}/>
              <Route path='/products' render={() => <Products products={this.props.products} addItem={this.props.addItem} /> }/>
              </Switch>
            </div>


      </div>
    );
  }
}

export default Layout;

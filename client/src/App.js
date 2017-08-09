import React, { Component } from 'react';
import './App.css';
import {ProductsContainer} from './containers'
import {BrowserRouter as Router} from 'react-router-dom'



class App extends Component {
  render() {
    return (
        <Router>
          <ProductsContainer />
        </Router>

    );
  }
}

export default App;

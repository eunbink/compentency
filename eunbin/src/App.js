import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.js';
import Browse from './components/Browse/Browse.js';
import Cart from './components/Cart/Cart.js';
import Myshelf from './components/Myshelf/Myshelf.js';
import Nav from './components/Nav/Nav.js'
import router from './router.js'





class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Route component={ Login } path='/' exact />        
        <Route component={ Browse } path='/browse' />
        <Route component={ Cart } path='/cart' /> 
        <Route component={ Myshelf } path='/myshelf' />
      </div>
      </HashRouter>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.js';
import Browse from './components/Browse/Browse.js';
import Cart from './components/Cart/Cart.js';
import Myshelf from './components/Myshelf/Myshelf.js';
import Addbook from './components/Addbook/Addbook.js';
import Nav from './components/Nav/Nav.js'



const App = (props) => {
      return (
      <div>
        <Nav/>
      <HashRouter>
      <div className="App">
        <Route component={ Login } path='/' exact />        
        <Route component={ Browse } path='/browse' />
        <Route component={ Cart } path='/cart' /> 
        <Route component={ Myshelf } path='/myshelf' />
        <Route component={ Addbook } path='/Addbook' />
      </div>
      </HashRouter>
      
      </div>
    
    );
  }


export default App;


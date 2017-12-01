import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './components/Login/Login.js';
import Browse from './components/Browse/Browse.js';
import Cart from './components/Cart/Cart.js';
import Myshelf from './components/Myshelf/Myshelf.js';


export default (
  <Switch>
    <Route component={ Login } exact path="/"  />
    <Route component={ Browse } path="/Browse" />
    <Route component={ Cart } path="/cart" />
    <Route component={ Myshelf } path="/myshelf" />
  </Switch>
)
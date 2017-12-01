import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                  <NavLink activeClassName='active' exact to='/'><li></li></NavLink>
                  <NavLink activeClassName='active' to='/Browse'><li>Browse</li></NavLink>
                  <NavLink activeClassName='active' to='/Cart'><li>Cart</li></NavLink>
                  <NavLink activeClassName='active' to='/'><li>MyShelf</li></NavLink>
            </div>
        )
    }
}

export default Nav;

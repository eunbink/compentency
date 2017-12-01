import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                  <NavLink className="navbars"activeClassName='active' to='/Browse'><li>Browse</li></NavLink>
                  <NavLink className="navbars"activeClassName='active' to='/Cart'><li>Cart</li></NavLink>
                  <NavLink className="navbars"activeClassName='active' to='/Myshelf'><li>MyShelf</li></NavLink>
                  {/* <a className="logout"href='/auth/logout' className="active">LOG OUT</a> */}
                  
            </div>
        )
    }
}

export default Nav;

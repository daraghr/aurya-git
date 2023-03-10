import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png'

const nav = props => {

  

  return (
    <div className={`nav ${props.navOpen ? "navOpen" : ""} ${props.navSmall ? "navSmall" : ""}`}>
      <a className="hamburger" onClick={props.toggleNavOpen}>
        <span id="one"></span>
        <span id="two"></span>
        <span id="three"></span>
      </a>
      <ul>
        <li>
          <NavLink className="title navlink" to="/" onClick={props.NavBig} >Home</NavLink>
        </li>
        <li>
          <NavLink className="title navlink" to="/products" onClick={props.NavSmall}>Products</NavLink>
        </li>
        <li>
          <NavLink className="title navlink" to="/contact" onClick={props.NavSmall}>Contact</NavLink>
        </li>
      </ul>
      <NavLink className={'logo'}>
        <img src={Logo} alt="Aurya"/>
      </NavLink>
    </div>
  )
}

export default nav
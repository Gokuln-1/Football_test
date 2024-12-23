import React, { Component } from 'react';
import { MenuItems } from '../../MenuItems';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React</h1>
        <ul>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cname} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;


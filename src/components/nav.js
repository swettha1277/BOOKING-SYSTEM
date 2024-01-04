import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Signup</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link">About Us</Link>
        </li>
      </ul>
    </nav>
 );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/player-totals">Player Totals</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

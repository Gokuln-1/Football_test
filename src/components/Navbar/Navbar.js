import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="tab-container">
      <input type="radio" name="tab" id="tab1" className="tab tab--1" checked={location.pathname === '/'} readOnly />
      <label className="tab_label" htmlFor="tab1">
        <Link to="/" className="nav-links">Home</Link>
      </label>
      <input type="radio" name="tab" id="tab2" className="tab tab--2" checked={location.pathname === '/players'} readOnly />
      <label className="tab_label" htmlFor="tab2">
        <Link to="/players" className="nav-links">Players</Link>
      </label>
      <input type="radio" name="tab" id="tab3" className="tab tab--3" checked={location.pathname === '/game'} readOnly />
      <label className="tab_label" htmlFor="tab3">
        <Link to="/game" className="nav-links">Game</Link>
      </label>
      <input type="radio" name="tab" id="tab4" className="tab tab--4" checked={location.pathname === '/player-totals'} readOnly />
      <label className="tab_label" htmlFor="tab4">
        <Link to="/player-totals" className="nav-links">Player Totals</Link>
      </label>
      <div className="indicator" />
    </div>
  );
};

export default Navbar;

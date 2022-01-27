import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <b className="options">HUMAN BENCHMARK</b>
      </Link>
      <Link to="/">Home</Link>
    </nav>
  );
};

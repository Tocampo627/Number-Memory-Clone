import './header.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <b className="options">HUMAN BENCHMARK</b>
      </Link>
      <Link to="/">Home</Link>
    </div>
  );
};

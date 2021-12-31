import './index.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Home } from './pages';

export const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

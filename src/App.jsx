import './index.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Home, Game } from './pages';

export const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tests/number-memory" element={<Game />} />
        </Routes>
      </main>
    </>
  );
};
